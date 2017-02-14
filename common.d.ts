export interface SocketOptions {
    query?: string | Object;
    android?: any;
    ios?: any;
}

export declare abstract class SocketBase {
    protected _listeners: any;

    readonly connected: boolean;
    readonly disconnected: boolean;

    abstract connect(): void;
    abstract disconnect(): void;
    abstract open(): void;
    abstract close(): void;

    abstract on(event: string, callback: (...payload: Array<any>) => any): this;
    abstract once(event: string, callback: (...payload: Array<any>) => any): this;
    abstract off(event: string, callback?: Function): this;
    abstract emit(event: string, ...payload: Array<any>): this;
    abstract addEventListener(event: string, callback: (...payload: Array<any>) => any) : this;
    abstract removeListener(event: string, callback?: Function): this;
    abstract removeEventListener(event: string, callback?: Function): this;
    abstract removeAllListeners(): this;
    // abstract listeners(event: string): Function[];
    // abstract hasListeners(event: string): boolean;
}

export declare const debugNop: (...args: any[]) => void;
export declare function debugDefault(...args: Array<any>): void;
export declare function debug(...args: Array<any>): void;
export declare function enableDebug(debugFn?: ((...args: Array<any>) => any)): void;
export declare function disableDebug(): void;
