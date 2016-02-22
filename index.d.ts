declare module "nativescript-socket.io" {
    import { View } from "ui/core/view";
    import { Property } from "ui/core/dependency-observable";
    import { Observable, EventData } from "data/observable";

    export class Socket extends Observable {

        public connect: boolean;

        public ios: any;
        public android: any;

        public on(event, callback): void;
        public emit(event): void;
        public connect(event): void;
        public disconnect(event): void;
    }

}
