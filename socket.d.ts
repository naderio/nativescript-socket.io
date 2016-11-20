
import { SocketOptions } from "./common";

export { SocketOptions };

export declare function enableDebug(debugFn?: ((...args: Array<any>) => any)): void;

export declare function disableDebug(): void;

export declare function connect(uri: string, options?: SocketOptions): Socket;

export declare class Socket {

    private ios: any;
    private android: any;

    constructor(uri: string, options?: any);

    readonly connected: boolean;

    connect(): void;
    disconnect(): void;

    on(event: string, callback: (...payload: Array<any>) => any): this;
    off(event: string, callback?: Function): this;
    emit(event: string, ...payload: Array<any>): void;

}
