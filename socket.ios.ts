'use strict';

declare var NSNull;
declare var NSURL;
declare var SocketIOClient;
declare var SocketAckEmitter;
declare var OnAckCallback;

import { SocketOptions } from "./common";
import { serialize, deserialize } from "./helpers";

export { SocketOptions };

SocketAckEmitter; // fixes unrecognized class issue
OnAckCallback; // fixes unrecognized class issue

const debugNop = function(...args: Array<any>): void { };

function debugDefault(...args: Array<any>) {
    args = args.map((value) => {
        if (typeof value === 'object' && value) {
            try {
                value = JSON.stringify(value);
            } catch (e) {
                value = value.toString();
            }
        }
        return value;
    });
    args.unshift('nativescript-socket.io');
    console.log.apply(console, args);
}

let debug = debugNop;

export function enableDebug(debugFn: ((...args: Array<any>) => any) = debugDefault): void {
    debug = debugFn;
}

export function disableDebug(): void {
    debug = debugNop;
}

export function connect(uri: any, options?: SocketOptions): Socket {
    let socket = new Socket(uri, options || {});
    socket.connect();
    return socket;
}

export class Socket {

    private ios: SocketIOClient;

    private _listenerMap = new Map();

    constructor(uri: string, options: any = {}) {

        let _options : any = {};

        if (uri.indexOf('/', 7) !== -1) {
            let path = uri.slice(uri.indexOf('/', 7));
            _options.nsp = path;
        } else {
            _options.nsp = '/';
        }
        
        if (options.query) {
            _options.connectParams = {};
            if (typeof options.query === 'string') {
                options.query.split('&').forEach(function(pair){
                    pair = pair.split('=').map(decodeURIComponent);
                    _options.connectParams[pair[0]] = pair[1];
                });
            } else {
                Object.keys(options.query).forEach(function(key){
                    _options.connectParams[key] = String(options.query[key]);
                });
            }
        }

        // if ('secure' in options) {
        //     _options.secure = !!options.secure;
        // }

        if (options.ios) {
            Object.keys(options.ios).forEach(function(prop) {
                _options[prop] = options.ios[prop];
            });
        }

        this.ios = SocketIOClient.alloc().initWithSocketURLConfig(NSURL.URLWithString(uri), _options);

    }

    connect() {
        this.ios.connect();
    }

    disconnect() {
        this.ios.disconnect();
    }

    get connected(): boolean {
        return this.ios && this.ios.engine.connected;
    }

    on(event: string, callback: (...payload: Array<any> /*, ack?: Function */) => any) {
        let listener = function(data: Array<any>, ack: any) {
            let payload = deserialize(data);
            debug('on', event, payload, ack && ack.expected ? 'ack' : '');
            if (ack && ack.expected) {
                let _ack = function(...args) {
                    debug('on', event, 'ack', args);
                    args = args.map(serialize)
                    ack.with(args);
                };
                payload.push(_ack);
            }
            callback.apply(null, payload);
        };
        let listenerId = this.ios.onCallback(event, listener);
        this._listenerMap.set(callback, listenerId);
        return this;
    }

    off(event: string, listener?: Function) {
        debug('off', event, listener);
        if (listener) {
            let listenerId = this._listenerMap.get(listener);
            if (listenerId) {
                this.ios.offWithId(listenerId);
                this._listenerMap.delete(listener);
            }
        } else {
            this.ios.off(event);
        }
        return this;
    }

    emit(event: string, ...payload: Array<any> /*, ack?: Function */) {
        let ack = payload.pop();
        if (typeof ack === 'undefined') {
            ack = null;
        } else if (typeof ack !== 'function') {
            payload.push(ack);
            ack = null;
        }
        debug('emit', event, payload, ack ? 'ack' : '');
        payload = payload.map(serialize);
        if (ack) {
            let _ack = function(args) {
                args = deserialize(args);
                debug('emit', event, 'ack', args);
                ack.apply(null, args);
            };
            this.ios.emitWithAckWith(event, payload).timingOutAfterCallback(0, _ack);
        } else {
            this.ios.emitWith(event, payload);
        }
    }

}

