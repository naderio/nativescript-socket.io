
// var SocketIO = require('nativescript-socket.io');
import * as SocketIO from 'nativescript-socket.io';
// import * as SocketIO from './dev';

export var socket = SocketIO.connect('http://192.168.1.111:3210/demo', <SocketIO.SocketOptions>{
    // log: true,
    // secure: false,
    // forceWebsockets: true,
    // query: 'scope=client&token=123',
    query: {
        scope: 'client',
        token: '123',
    },
});
