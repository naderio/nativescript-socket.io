
var debug = require('./debug')(__filename);

function debugClass(_class) {

    debug(_class.name, typeof SocketIOClientConfiguration);

    // debug(_class.name, Object.keys(_class.prototype));

    Object.keys(_class.prototype).forEach(function(method) {
        try {
            debug(_class.name, method, typeof _class.prototype[method], typeof _class.prototype[method] === 'function' ? _class.prototype[method].length : '');
        } catch(e){
            debug(_class.name, method, '?');
        }
    })

}

function debugInstance(instance) {
    debugClass(instance.constructor);
}

var SocketIO = require('nativescript-socket.io');
// var SocketIO = require('./dev');

SocketIO.enableDebug(require('./debug')('socket.io'));

var socketio;

function onLoaded(args) {
    var page = args.object;
    
    // debugClass(SocketIOClient);

    // socketio = SocketIO.connect('http://192.168.1.111:3210/demo', {
    //     // log: true,
    //     // secure: false,
    //     // forceWebsockets: true,
    //     // query: 'scope=client&token=123',
    //     query: {
    //         scope: 'client',
    //         token: '123',
    //     },
    // });

    socketio = require('./connection').socketio;
    
    // setInterval(function() {
    //     debug('socketio.connected', socketio.connected);
    // }, 2000);

    socketio.on('error', function(error) {
        debug('error', error);
    });

    socketio.on('connect', function() {
        debug('connect');

        function hiListener(data) {
            debug('on', 'hi');
        }
        socketio.on('hi', hiListener);

        setTimeout(function() {
            debug('emit', 'hi');
            socketio.emit('hi');
            socketio.emit('hi', false);
            socketio.emit('hi', true);
            socketio.emit('hi', -1);
            socketio.emit('hi', 0);
            socketio.emit('hi', 1);
            socketio.emit('hi', '');
            socketio.emit('hi', '...');
            socketio.emit('hi', {
                a: 1,
                b: 2,
            });
            socketio.emit('hi', ['a', 'b', 'c']);
            socketio.emit('hi', -1,
                false,
                true,
                '',
                '...', {
                    a: 1,
                    b: 2,
                }, ['a', 'b', 'c'], [{ a: 1 }, new Date('2016-01-01'), true, 15, '..']
            );
            socketio.emit('hi', [-1,
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
            socketio.emit('hi', {
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


        socketio.on('ack', function(data) {
            debug('on', 'ack');
            data(5, {
                test: true,
            });
        });

        socketio.on('got it', function(data) {
            debug('on', 'got it', JSON.stringify(data));
        });

        setTimeout(function() {
            debug('emit', 'ack');
            socketio.emit('ack');
        }, 2000);

        setTimeout(function() {
            debug('emit', 'getAckDate');
            socketio.emit('getAckDate', 'whatever', function(data) {
                debug('emit', 'getAckDate', 'ack', JSON.stringify(data));
            });
        }, 3000);


        socketio.on('takeDate', function(data) {
            debug('on', 'takeDate', JSON.stringify(data));
        });

        setTimeout(function() {
            debug('emit', 'getDate');
            socketio.emit('getDate');
        }, 4000);


        socketio.on('takeDateObj', function(data) {
            debug('on', 'takeDateObj', JSON.stringify(data));
        });

        setTimeout(function() {
            debug('emit', 'getDateObj');
            socketio.emit('getDateObj');
        }, 5000);


        socketio.on('takeUtf8', function(data) {
            debug('on', 'takeUtf8', JSON.stringify(data));
        });

        setTimeout(function() {
            debug('emit', 'getUtf8');
            socketio.emit('getUtf8');
        }, 6000);

        setTimeout(function() {
            var intervalId = setInterval(function() {
                if (!socketio.connected) {
                    clearInterval(intervalId);
                    return;
                }
                debug('emit', 'hi');
                socketio.emit('hi');
            }, 2000);
        }, 8000);

        setTimeout(function() {
            debug('off', 'hi');
            socketio.off('hi', hiListener);
        }, 15000);

        setTimeout(function() {
            debug('off', 'hi');
            socketio.off('hi');
        }, 20000);

        setTimeout(function() {
            socketio.once('hi', hiListener);            
        }, 25000);

        setTimeout(function() {
            debug('disconnect');
            socketio.disconnect();
        }, 30000);

    });

}
exports.onLoaded = onLoaded;

function onUnloaded(args) {
    if (socketio) {
        socketio.disconnect();
    }
    socketio = null;
}
exports.onUnloaded = onUnloaded;
