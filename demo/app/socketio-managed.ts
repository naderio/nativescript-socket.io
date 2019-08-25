import * as SocketIO from 'nativescript-socket.io';

const ENDPOINT = 'http://192.168.1.111:3210/demo';

let instance;

export function connect(token) {
    instance = SocketIO.connect(ENDPOINT, <SocketIO.SocketOptions>{
        // log: true,
        // secure: false,
        // forceWebsockets: true,
        // query: 'scope=client&token=' + token,
        query: {
            scope: 'client',
            token: token,
        },
    });
}

export function getInstance() {
    return instance;
}
