'use strict';

import * as helpers from "./helpers";

export function connect(uri: any, options: any): Socket {
    var socket = new Socket(uri, options);
    socket.connect();
    return socket;
}

var debug = function(): void { }

function defaultDebug(...args: Array<any>) {
    args = args.map((value) => {
        if (typeof value === 'object' && value) {
            try {
                value = JSON.stringify(value);
            } catch(e) {
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

    constructor(uri: string, options?: Object = {}) {

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
        return;
        this.ios.on(event, function(...payload: Array<any> /*, ack?: Function */) {
            var ack = payload.pop();
            if (ack && typeof ack !== 'function') {
                payload.push(ack);
                ack = null;
            }
            debug('on', event, payload, ack);
            if (ack) {
                var _ack = ack;
                // var ack = java.lang.reflect.Array.newInstance(io.socket.client.Ack.class.getField("TYPE").get(null));
                ack = function() {
                    debug('on', event, 'ack', arguments);
                    // _ack.call(args);
                };
                payload.push(ack);
            }
            callback.apply(null, payload);
        });
    }

    off(event: string) {
        this.ios.off(event);
    }

    emit(event: string, ...payload: Array<any> /*, ack?: Function */) {
        debug('emit', event, payload);
        return;
        var ack = payload.pop();
        if (ack && typeof ack !== 'function') {
            payload.push(ack);
            ack = null;
        }
        debug('emit', event, payload, ack);
        if (ack) {
            this.ios.emit(event, ...payload);
        } else {
            this.ios.emitWithAck(event, ...payload).onAck(function() {
                debug('emit', event, 'ack', arguments);
                // ack.apply(null, args);
            });
        }
    }

}

