var createViewModel = require("./main-view-model").createViewModel;

function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = createViewModel();
}
exports.onNavigatingTo = onNavigatingTo;



var SocketIO = require('nativescript-socket.io');

function onLoaded(args) {
    var page = args.object;

    function debug() {
        args = Array.prototype.slice.call(arguments);
        args = args.map((value) => {
            if (typeof value === 'object' && value) {
                try {
                    value = JSON.stringify(value);
                } catch (e) {
                    value = value.toString();
                }
            }
            return value;
        });
        console.log.apply(console, args);
    }

    debug('SocketIOClient', Object.keys(SocketIOClient), Object.keys(SocketIOClient.prototype));

    // Object.keys(SocketIOClient.prototype).forEach(function(method) {
    //     debug('SocketIOClient', method, typeof SocketIOClient.prototype[method]);
    //     debug('SocketIOClient', method, SocketIOClient.prototype[method].length);
    // });

    SocketIO.enableDebug();

    var socket = SocketIO.connect('http://192.168.1.111:3210', {
        log: true,
        secure: false,
        forceWebsockets: true,
    });

    var log = function() {};
    // var log = console.log.bind(console);

    socket.on('error', function(error) {
        log('socket', 'error', error);
    });

    // socket.on('connect', function() {
    //     log('socket', 'connect');

    function hiListener(data) {
        log('socket', 'on', 'hi');
    }
    socket.on('hi', hiListener);

    setTimeout(function() {
        log('socket', 'emit', 'hi');
        socket.emit('hi');
    }, 1000);


    socket.on('ack', function(data) {
        log('socket', 'on', 'ack');
        data(5, {
            test: true,
        });
    });

    socket.on('got it', function(data) {
        log('socket', 'on', 'got it', JSON.stringify(data));
    });

    setTimeout(function() {
        log('socket', 'emit', 'ack');
        socket.emit('ack');
    }, 2000);

    setTimeout(function() {
        log('socket', 'emit', 'getAckDate');
        socket.emit('getAckDate', 'whatever', function(data) {
            log('socket', 'emit', 'getAckDate', 'ack', JSON.stringify(data));
        });
    }, 3000);


    socket.on('takeDate', function(data) {
        log('socket', 'on', 'takeDate', JSON.stringify(data));
    });

    setTimeout(function() {
        log('socket', 'emit', 'getDate');
        socket.emit('getDate');
    }, 4000);


    socket.on('takeDateObj', function(data) {
        log('socket', 'on', 'takeDateObj', JSON.stringify(data));
    });

    setTimeout(function() {
        log('socket', 'emit', 'getDateObj');
        socket.emit('getDateObj');
    }, 5000);


    socket.on('takeUtf8', function(data) {
        log('socket', 'on', 'takeUtf8', JSON.stringify(data));
    });

    setTimeout(function() {
        log('socket', 'emit', 'getUtf8');
        socket.emit('getUtf8');
    }, 6000);

    setTimeout(function() {
        setInterval(function() {
            log('socket', 'emit', 'hi');
            socket.emit('hi');
        }, 2000);
    }, 8000);

    setTimeout(function() {
        log('socket', 'off', 'hi');
        socket.off('hi', hiListener);
    }, 15000);

    setTimeout(function() {
        log('socket', 'off', 'hi');
        socket.off('hi');
    }, 20000);

    // });


}
exports.onLoaded = onLoaded;
