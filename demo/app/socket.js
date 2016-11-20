"use strict";
var debug = require('./debug')(__filename);
var SocketIO = require('nativescript-socket.io');
// import * as SocketIO from 'nativescript-socket.io';
SocketIO.enableDebug(require('./debug')('socket.io'));
exports.socket = SocketIO.connect('http://192.168.1.111:3210/demo', {
    // log: true,
    // secure: false,
    // forceWebsockets: true,
    // query: 'scope=client&token=123',
    query: {
        scope: 'client',
        token: '123',
    },
});
//# sourceMappingURL=socket.js.map