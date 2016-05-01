'use strict';

import { Observable } from "data/observable";

import * as json from "./json";

const _Emitter = io.socket.emitter.Emitter;
const _IO = io.socket.client.IO;
const _Socket = io.socket.client.Socket;
const _Ack = io.socket.client.Ack;


export function connect(uri: any, opts: any): Socket {
    var socket = new Socket(uri, opts);
    socket.connect();
    return socket;
}

var debug = function (): void {}

function defaultDebug(...args: Array<any>) {
    args.unshift('nativescript-socket.io');
    console.log.apply(console, args);
}

export function enableDebug(debugFn: ( (...args: Array<any>) => any ) = defaultDebug): void {
    debug = debugFn;
}

export function disableDebug(): void {
    debug = function(){};
}

export class Socket extends Observable {

    private android: io.socket.client.Socket;

    constructor(uri: string, opts: Object) {

        super();
        var _opts = new _IO.Options();
        if (opts) {
            Object.keys(opts).forEach(function(prop) {
                _opts[prop] = opts[prop];
            });
        }
        this.android = _IO.socket(uri, _opts);

    }

    on(event: string, callback: (...payload: Array<any> /*, ack?: Function */) => any) {
        this.android.on(event, new _Emitter.Listener({
            call: function(args) {
                var payload = Array.prototype.slice.call(args);
                var ack = payload.pop();
                // if (ack) {
                //   console.log(ack.getClass().getName(), !!ack.call);
                // }
                if (ack && !(ack.getClass().getName().indexOf('io.socket.client.Socket') === 0 && ack.call)) {
                    payload.push(ack);
                    ack = null;
                }
                payload = payload.map(json.deserialize);
                debug('on', event, payload);
                if (ack) {
                    var _ack = ack;
                    // var ack = java.lang.reflect.Array.newInstance(io.socket.client.Ack.class.getField("TYPE").get(null));
                    ack = function() {
                        var args = Array.prototype.slice.call(arguments).map(json.serialize);
                        debug('on', event, 'ack', args);
                        _ack.call(args);
                    };
                    payload.push(ack);
                }
                callback.apply(null, payload);
            },
        }));
    }

    emit(event: string, ...payload: Array<any> /*, ack?: Function */) {
        var ack = payload.pop();
        if (ack && typeof ack !== 'function') {
            payload.push(ack);
            ack = null;
        }
        debug('emit', event, payload);
        payload = payload.map(json.serialize);
        if (ack) {
            payload.push(new _Ack({
                call: function(args) {
                    args = Array.prototype.slice.call(args).map(json.deserialize);
                    debug('emit', event, 'ack', args);
                    ack.apply(null, args);
                },
            }));
        }
        this.android.emit(event, payload);
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

}

