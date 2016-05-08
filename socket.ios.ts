'use strict';

import * as helpers from "./helpers";

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

    private ios: SocketIOClient;

    private _listenerMap = new Map();

    constructor(uri: string, options: Object = {}) {

        debug('SocketIOClient', Object.keys(SocketIOClient), Object.keys(SocketIOClient.prototype));

        this.ios = SocketIOClient.alloc();

        this.ios.initWithSocketURLOptions(NSURL.URLWithString(uri), options);

    }

    connect() {
        this.ios.connect();
    }

    disconnect() {
        this.ios.disconnect();
    }

    get connected(): boolean {
        return this.ios && this.ios.connected();
    }

    on(event: string, callback: (...payload: Array<any> /*, ack?: Function */) => any) {
        let listener = function(data: Array<any>, ack: any) {
            let payload = Array.prototype.slice.call(data);
            if (ack && !( /* ack.getClass().getName().indexOf(Socket.SOCKET_CLASS) === 0 && */ ack.width)) {
                ack = null;
            }
            payload = payload.map(helpers.deserialize);
            debug('on', event, payload, ack ? 'ack' : '');
            if (ack) {
                let _ack = function(...args) {
                    debug('on', event, 'ack', args);
                    args = args.map(helpers.serialize)
                    ack.width(...args);
                };
                payload.push(_ack);
            }
            callback.apply(null, payload);
        };
        let listenerId = this.ios.on(event, listener);
        this._listenerMap.set(callback, listenerId);
        return this;
    }

    off(event: string, listener?: Function) {
        debug('off', event, listener);
        if (listener) {
            listener = this._listenerMap.get(listener);
            if (listener) {
                this.ios.off(event, listener);
                this._listenerMap.delete(listener);
            }
        } else {
            this.ios.off(event);
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
            // this.ios.emitWithAck(event, ...payload)(0, _ack);
            this.ios.emitWithAck(event, ...payload)({
                timeoutAfter: 0,
                callback: _ack
            });
        } else {
            this.ios.emit(event, ...payload);
        }
    }

}

