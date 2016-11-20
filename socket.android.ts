'use strict';

declare var io;

import { SocketOptions } from "./common";
import { serialize, deserialize } from "./helpers";

export { SocketOptions };

const _Emitter = io.socket.emitter.Emitter;
const _IO = io.socket.client.IO;
const _Socket = io.socket.client.Socket;
const _Ack = io.socket.client.Ack;


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

    private static SOCKET_CLASS = 'io.socket.client.Socket';

    private android: io.socket.client.Socket;

    private _listeners = new WeakMap();

    constructor(uri: string, options: any = {}) {

        let _options = new _IO.Options();

        if (options.query) {
            if (typeof options.query === 'string') {
                _options.query = options.query;
            } else {
                 _options.query = Object.keys(options.query).map(function(key){
                    return encodeURIComponent(key) + '=' + encodeURIComponent(options.query[key]);
                }).join('&');
            }
        }

        // if ('secure' in options) {
        //     _options.secure = !!options.secure;
        // }

        if (options.android) {
            Object.keys(options.android).forEach(function(prop) {
                _options[prop] = options.android[prop];
            });
        }

        this.android = _IO.socket(uri, _options);

    }

    connect() {
        this.android.connect();
    }

    disconnect() {
        this.android.disconnect();
    }

    get connected(): boolean {
        return this.android && this.android.connected();
    }

    on(event: string, callback: (...payload: Array<any> /*, ack?: Function */) => any) {
        let listener = function(args) {
            let payload = Array.prototype.slice.call(args);
            let ack = payload.pop();
            if (typeof ack === 'undefined') {
                ack = null;
            } else if (typeof ack === 'object' && ack && !(ack.getClass().getName().indexOf(Socket.SOCKET_CLASS) === 0 && ack.call)) {
                payload.push(ack);
                ack = null;
            }
            payload = payload.map(deserialize);
            debug('on', event, payload, ack ? 'ack' : '');
            if (ack) {
                let _ack = function(...args) {
                    debug('on', event, 'ack', args);
                    args = args.map(serialize);
                    ack.call(args);
                };
                payload.push(_ack);
            }
            callback.apply(null, payload);
        };
        listener = new _Emitter.Listener({
            call: listener,
        });
        this._listeners.set(callback, listener);
        this.android.on(event, listener);
        return this;
    }

    off(event: string, callback?: Function) {
        debug('off', event, callback);
        if (callback) {
            let listener = this._listeners.get(callback);
            if (listener) {
                this.android.off(event, listener);
                this._listeners.delete(callback);
            }
        } else {
            this.android.off(event);
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
                args = Array.prototype.slice.call(args).map(deserialize);
                debug('emit', event, 'ack', args);
                ack.apply(null, args);
            };
            _ack = new _Ack({
                call: _ack,
            });
            payload.push(_ack);
        }
        this.android.emit(event, payload);
    }

}

