const SocketIO = require('nativescript-socket.io');

const ENDPOINT = 'http://192.168.1.111:3210/demo';

const OPTIONS = {
    // log: true,
    // secure: false,
    // forceWebsockets: true,
    // query: 'scope=client&token=123',
    query: {
        scope: 'client',
        token: '123',
    },
};

exports.instance = SocketIO.connect(ENDPOINT, OPTIONS);
