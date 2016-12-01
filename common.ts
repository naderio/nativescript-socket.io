
export interface SocketOptions {
    query?: string | Object;
    android?: any;
    ios?: any;
}


export abstract class SocketBase {

    protected _listeners = new WeakMap();


    abstract on(event: string, callback: (...payload: Array<any> /*, ack?: Function */) => any) : this;

    once(event: string, callback: (...payload: Array<any> /*, ack?: Function */) => any) : this {
        debug('once', event, callback);
        let fn = function () {
            this.off(event, fn);
            callback.apply(this, arguments);
        }.bind(this);
        fn.callback = callback;
        this.on(event, fn);
        return this;
    }

    abstract off(event: string, callback?: Function): this;
    abstract emit(event: string, ...payload: Array<any>): this;

}

export const debugNop = function(...args: Array<any>): void { };

export function debugDefault(...args: Array<any>) {
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

let _debug = debugNop;

export function debug(...args: Array<any>){
    _debug.apply(null, args);
}

export function enableDebug(debugFn: ((...args: Array<any>) => any) = debugDefault): void {
    _debug = debugFn;
}

export function disableDebug(): void {
    _debug = debugNop;
}
