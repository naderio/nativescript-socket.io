declare module "nativescript-socket.io" {
    
    import { Observable } from "data/observable";

    import * as json from "./json";

    export default function connect (uri: any, opts: any) => Socket;

    export function enableDebug(debugFb?: (...args: Array<any>) => any): void;

    export function disableDebug(): any;

    export class Socket extends Observable {

        public connected: boolean;

        public ios: any;
        public android: io.socket.client.Socket;

        public constructor(uri: string, opts: Object);
        public on(event: string, callback: (...payload: Array<any>) => any): void;
        public emit(event: string, ...payload: Array<any>): void;
        public connect(): void;
        public disconnect(): void;

    }

}
