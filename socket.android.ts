'use strict';

import { SocketBase, SocketOptions, enableDebug, disableDebug, debug } from "./common";
import { serialize, deserialize } from "./helpers";

declare var io;

const _Emitter = io.socket.emitter.Emitter;
const _IO = io.socket.client.IO;
const _Socket = io.socket.client.Socket;
const _Ack = io.socket.client.Ack;

export { SocketOptions, enableDebug, disableDebug };

export class Socket extends SocketBase {

    private static SOCKET_CLASS = 'io.socket.client.Socket';

    private android: io.socket.client.Socket;

    constructor(uri: string, options: SocketOptions = {}) {

        super();

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

    get connected(): boolean {
        return this.android && this.android.connected();
    }

    connect() {
        this.android.connect();
    }

    disconnect() {
        this.android.disconnect();
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

    once(event: string, callback: (...payload: Array<any> /*, ack?: Function */) => any) {
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
            debug('once', event, payload, ack ? 'ack' : '');
            if (ack) {
                let _ack = function(...args) {
                    debug('once', event, 'ack', args);
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
        this.android.once(event, listener);
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
        return this;
    }

}

export function connect(uri: string, options?: SocketOptions): Socket {
    let socket = new Socket(uri, options || {});
    socket.connect();
    return socket;
}

