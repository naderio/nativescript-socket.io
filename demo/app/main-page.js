var createViewModel = require("./main-view-model").createViewModel;

function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = createViewModel();
}
exports.onNavigatingTo = onNavigatingTo;


var debug = require('./debug')(__filename);

var SocketIO = require('nativescript-socket.io');

function onLoaded(args) {
    var page = args.object;

    // debug('SocketIOClient', Object.keys(SocketIOClient.prototype));

    // debug('SocketIOClientConfiguration', typeof SocketIOClientConfiguration);
    // debug('SocketIOClientOption', typeof SocketIOClientOption);
    // debug('SocketIOClientOptions', typeof SocketIOClientOptions);


    // Object.keys(SocketIOClient.prototype).forEach(function(method) {
    //     try {
    //         debug('SocketIOClient', method, typeof SocketIOClient.prototype[method], typeof SocketIOClient.prototype[method] === 'function' ? SocketIOClient.prototype[method].length : '');
    //     } catch(e){
    //         debug('SocketIOClient', method, typeof SocketIOClient.prototype[method]);
    //     }
    // });


    SocketIO.enableDebug(debug);

    var socket = SocketIO.connect('http://192.168.1.111:3210', {
        // log: true,
        secure: false,
        forceWebsockets: true,
    });
    socket.on('error', function(error) {
        debug('socket', 'error', error);
    });

    socket.on('connect', function() {
        debug('socket', 'connect');

        function hiListener(data) {
            debug('socket', 'on', 'hi');
        }
        socket.on('hi', hiListener);

        setTimeout(function() {
            debug('socket', 'emit', 'hi');
            socket.emit('hi');
            socket.emit('hi', false);
            socket.emit('hi', true);
            socket.emit('hi', -1);
            socket.emit('hi', 0);
            socket.emit('hi', 1);
            socket.emit('hi', '');
            socket.emit('hi', '...');
            socket.emit('hi', {
                a: 1,
                b: 2,
            });
            socket.emit('hi', ['a', 'b', 'c']);
            socket.emit('hi', -1,
                false,
                true,
                '',
                '...', {
                    a: 1,
                    b: 2,
                }, ['a', 'b', 'c'], [{ a: 1 }, new Date('2016-01-01'), true, 15, '..']
            );
            socket.emit('hi', [-1,
                false,
                true,
                '',
                '...', {
                    a: 1,
                    b: 2,
                },
                ['a', 'b', 'c'],
                [{ a: 1 }, new Date('2016-01-01'), true, 15, '..']
            ]);
            socket.emit('hi', {
                '-1': 1,
                false: false,
                true: true,
                'empty string': '',
                'string': '...',
                'object': {
                    a: 1,
                    b: 2,
                },
                'array of strings': ['a', 'b', 'c'],
                'array of mixed': [{ a: 1 }, new Date('2016-01-01'), true, 15, '..']
            });
        }, 1000);


        socket.on('ack', function(data) {
            debug('socket', 'on', 'ack');
            data(5, {
                test: true,
            });
        });

        socket.on('got it', function(data) {
            debug('socket', 'on', 'got it', JSON.stringify(data));
        });

        setTimeout(function() {
            debug('socket', 'emit', 'ack');
            socket.emit('ack');
        }, 2000);

        setTimeout(function() {
            debug('socket', 'emit', 'getAckDate');
            socket.emit('getAckDate', 'whatever', function(data) {
                debug('socket', 'emit', 'getAckDate', 'ack', JSON.stringify(data));
            });
        }, 3000);


        socket.on('takeDate', function(data) {
            debug('socket', 'on', 'takeDate', JSON.stringify(data));
        });

        setTimeout(function() {
            debug('socket', 'emit', 'getDate');
            socket.emit('getDate');
        }, 4000);


        socket.on('takeDateObj', function(data) {
            debug('socket', 'on', 'takeDateObj', JSON.stringify(data));
        });

        setTimeout(function() {
            debug('socket', 'emit', 'getDateObj');
            socket.emit('getDateObj');
        }, 5000);


        socket.on('takeUtf8', function(data) {
            debug('socket', 'on', 'takeUtf8', JSON.stringify(data));
        });

        setTimeout(function() {
            debug('socket', 'emit', 'getUtf8');
            socket.emit('getUtf8');
        }, 6000);

        setTimeout(function() {
            setInterval(function() {
                debug('socket', 'emit', 'hi');
                socket.emit('hi');
            }, 2000);
        }, 8000);

        setTimeout(function() {
            debug('socket', 'off', 'hi');
            socket.off('hi', hiListener);
        }, 15000);

        setTimeout(function() {
            debug('socket', 'off', 'hi');
            socket.off('hi');
        }, 20000);

    });

}
exports.onLoaded = onLoaded;
