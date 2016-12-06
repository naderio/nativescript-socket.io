'use strict';

import { SocketBase, SocketOptions, enableDebug, disableDebug, debug } from "./common";
import { serialize, deserialize } from "./helpers";

declare var NSNull;
declare var NSURL;
declare var SocketIOClient;
declare var SocketAckEmitter;
declare var SocketEngine;
declare var OnAckCallback;

SocketIOClient; // fixes unrecognized class issue
SocketAckEmitter; // fixes unrecognized class issue
OnAckCallback; // fixes unrecognized class issue
SocketEngine; // fixes unrecognized class issue

export { SocketOptions, enableDebug, disableDebug };

const NAMESPACE_REGEXP : RegExp = /^https?\:\/\/[^\/]*(\/.*)$/i;

export class Socket extends SocketBase {

    private ios: SocketIOClient;

    constructor(uri: string, options: SocketOptions = {}) {

        super();

        let _options : any = {};

        if (NAMESPACE_REGEXP.test(uri)) {
            _options.nsp = uri.match(NAMESPACE_REGEXP)[1] || '/';
        } else {
            _options.nsp = '/';
        }
        
        if (options.query) {
            _options.connectParams = {};
            if (typeof options.query === 'string') {
                options.query.split('&').forEach(function(pair: any){
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

    get connected(): boolean {
        return this.ios && this.ios.engine.connected;
    }

    connect() {
        this.ios.connect();
    }

    disconnect() {
        this.ios.disconnect();
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
        this._listeners.set(callback, listenerId);
        return this;
    }

    once(event: string, callback: (...payload: Array<any> /*, ack?: Function */) => any) {
        let listener = function(data: Array<any>, ack: any) {
            let payload = deserialize(data);
            debug('once', event, payload, ack && ack.expected ? 'ack' : '');
            if (ack && ack.expected) {
                let _ack = function(...args) {
                    debug('once', event, 'ack', args);
                    args = args.map(serialize)
                    ack.with(args);
                };
                payload.push(_ack);
            }
            callback.apply(null, payload);
        };
        let listenerId = this.ios.onceCallback(event, listener);
        this._listeners.set(callback, listenerId);
        return this;
    }

    off(event: string, callback?: Function) {
        debug('off', event, callback);
        if (callback) {
            let listenerId = this._listeners.get(callback);
            if (listenerId) {
                this.ios.offWithId(listenerId);
                this._listeners.delete(callback);
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
        return this;
    }

}

export function connect(uri: string, options?: SocketOptions): Socket {
    let socket = new Socket(uri, options || {});
    socket.connect();
    return socket;
}

