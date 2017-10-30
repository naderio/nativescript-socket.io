
// var SocketIO = require('nativescript-socket.io');
import * as SocketIO from 'nativescript-socket.io';
// import * as SocketIO from './dev';

const ENDPOINT = 'http://192.168.1.111:3210/demo';

const OPTIONS = <SocketIO.SocketOptions>{
    // log: true,
    // secure: false,
    // forceWebsockets: true,
    // query: 'scope=client&token=123',
    query: {
        scope: 'client',
        token: '123',
    },
};

export var socketio = SocketIO.connect(ENDPOINT, OPTIONS);
