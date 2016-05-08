'use strict';

import * as helpers from "./helpers";

const _Emitter = io.socket.emitter.Emitter;
const _IO = io.socket.client.IO;
const _Socket = io.socket.client.Socket;
const _Ack = io.socket.client.Ack;


export function connect(uri: any, options?: any): Socket {
    let socket = new Socket(uri, options || {});
    socket.connect();
    return socket;
}

let debug = function(...args: Array<any>): void { }

function defaultDebug(...args: Array<any>) {
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

export function enableDebug(debugFn: ((...args: Array<any>) => any) = defaultDebug): void {
    debug = debugFn;
}

export function disableDebug(): void {
    debug = function() { };
}

export class Socket {

    private static SOCKET_CLASS = 'io.socket.client.Socket';

    private android: io.socket.client.Socket;

    private _listenerMap = new Map();

    constructor(uri: string, options: Object = {}) {

        let _options = new _IO.Options();
        if (options) {
            Object.keys(options).forEach(function(prop) {
                _options[prop] = options[prop];
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
            if (ack && !(ack.getClass().getName().indexOf(Socket.SOCKET_CLASS) === 0 && ack.call)) {
                payload.push(ack);
                ack = null;
            }
            payload = payload.map(helpers.deserialize);
            debug('on', event, payload, ack ? 'ack' : '');
            if (ack) {
                let _ack = function(...args) {
                    debug('on', event, 'ack', args);
                    args = args.map(helpers.serialize);
                    ack.call(args);
                };
                payload.push(_ack);
            }
            callback.apply(null, payload);
        };
        listener = new _Emitter.Listener({
            call: listener,
        });
        this._listenerMap.set(callback, listener);
        this.android.on(event, listener);
        return this;
    }

    off(event: string, listener?: Function) {
        debug('off', event, listener);
        if (listener) {
            listener = this._listenerMap.get(listener);
            if (listener) {
                this.android.off(event, listener);
                this._listenerMap.delete(listener);
            }
        } else {
            this.android.off(event);
        }
        return this;
    }

    emit(event: string, ...payload: Array<any> /*, ack?: Function */) {
        let ack = payload.pop();
        if (ack && typeof ack !== 'function') {
            payload.push(ack);
            ack = null;
        }
        debug('emit', event, payload, ack ? 'ack' : '');
        payload = payload.map(helpers.serialize);
        if (ack) {
            let _ack = function(args) {
                args = Array.prototype.slice.call(args).map(helpers.deserialize);
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

