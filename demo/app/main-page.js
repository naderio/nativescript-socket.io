var createViewModel = require("./main-view-model").createViewModel;

function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = createViewModel();
}
exports.onNavigatingTo = onNavigatingTo;


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

function onLoaded(args) {
    var page = args.object;
    
    // debugClass(SocketIOClient);

    // var socket = SocketIO.connect('http://192.168.1.111:3210/demo', {
    //     // log: true,
    //     // secure: false,
    //     // forceWebsockets: true,
    //     // query: 'scope=client&token=123',
    //     query: {
    //         scope: 'client',
    //         token: '123',
    //     },
    // });

    var socket = require('./connection').socket;
    
    // setInterval(function() {
    //     debug('socket.connected', socket.connected);
    // }, 2000);

    socket.on('error', function(error) {
        debug('error', error);
    });

    socket.on('connect', function() {
        debug('connect');

        function hiListener(data) {
            debug('on', 'hi');
        }
        socket.on('hi', hiListener);

        setTimeout(function() {
            debug('emit', 'hi');
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
            debug('on', 'ack');
            data(5, {
                test: true,
            });
        });

        socket.on('got it', function(data) {
            debug('on', 'got it', JSON.stringify(data));
        });

        setTimeout(function() {
            debug('emit', 'ack');
            socket.emit('ack');
        }, 2000);

        setTimeout(function() {
            debug('emit', 'getAckDate');
            socket.emit('getAckDate', 'whatever', function(data) {
                debug('emit', 'getAckDate', 'ack', JSON.stringify(data));
            });
        }, 3000);


        socket.on('takeDate', function(data) {
            debug('on', 'takeDate', JSON.stringify(data));
        });

        setTimeout(function() {
            debug('emit', 'getDate');
            socket.emit('getDate');
        }, 4000);


        socket.on('takeDateObj', function(data) {
            debug('on', 'takeDateObj', JSON.stringify(data));
        });

        setTimeout(function() {
            debug('emit', 'getDateObj');
            socket.emit('getDateObj');
        }, 5000);


        socket.on('takeUtf8', function(data) {
            debug('on', 'takeUtf8', JSON.stringify(data));
        });

        setTimeout(function() {
            debug('emit', 'getUtf8');
            socket.emit('getUtf8');
        }, 6000);

        setTimeout(function() {
            var intervalId = setInterval(function() {
                if (!socket.connected) {
                    clearInterval(intervalId);
                    return;
                }
                debug('emit', 'hi');
                socket.emit('hi');
            }, 2000);
        }, 8000);

        setTimeout(function() {
            debug('off', 'hi');
            socket.off('hi', hiListener);
        }, 15000);

        setTimeout(function() {
            debug('off', 'hi');
            socket.off('hi');
        }, 20000);

        setTimeout(function() {
            debug('once', 'hi');
            socket.once('hi', hiListener);            
        }, 25000);

        setTimeout(function() {
            debug('disconnect');
            socket.disconnect();
        }, 30000);

    });

}
exports.onLoaded = onLoaded;
