import { SocketBase, SocketOptions, enableDebug, disableDebug } from "./common";

export { SocketOptions, enableDebug, disableDebug };

export declare class Socket extends SocketBase {

    private ios: any;
    private android: any;

    constructor(uri: string, options?: SocketOptions);

    readonly connected: boolean;

    connect(): void;
    disconnect(): void;

    on(event: string, callback: (...payload: Array<any>) => any): this;
    once(event: string, callback: (...payload: Array<any>) => any): this;
    off(event: string, callback?: Function): this;
    emit(event: string, ...payload: Array<any>): this;

}

export declare function connect(uri: string, options?: SocketOptions): Socket;
