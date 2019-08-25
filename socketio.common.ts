export interface SocketOptions {
    query?: string | Object;
    forceWebsockets?: boolean,
    android?: any;
    ios?: any;
}

export abstract class Common {
    protected _listeners = new WeakMap();

    abstract get connected(): boolean;

    get disconnected() {
        return !this.connected;
    }

    abstract connect();
    abstract disconnect();

    open() {
        this.connect();
    }

    close() {
        this.disconnect();
    }

    abstract on(event: string, callback: (...payload: Array<any> /*, ack?: Function */) => any) : this;
    abstract once(event: string, callback: (...payload: Array<any> /*, ack?: Function */) => any) : this;
    abstract off(event: string, callback?: Function): this;
    abstract emit(event: string, ...payload: Array<any>): this;

    addEventListener(event: string, callback: (...payload: Array<any> /*, ack?: Function */) => any) : this {
        return this.on(event, callback);
    }

    removeListener(event: string, callback?: Function): this {
        return this.off(event, callback);
    }

    removeEventListener(event: string, callback?: Function): this {
        return this.off(event, callback);
    }
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
    // @ts-ignore
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
