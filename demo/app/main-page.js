var createViewModel = require("./main-view-model").createViewModel;

function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = createViewModel();
}
exports.onNavigatingTo = onNavigatingTo;


function onLoaded(args) {
    var page = args.object;

    var SocketIO = require('nativescript-socket.io');

    SocketIO.enableDebug();

    var socket = SocketIO.connect('http://192.168.1.111:3210', {
        log: true,
        secure: false,
    });

    socket.on('error', function(error) {
        console.log('socket', 'error', error);
    });

    socket.on('connect', function() {
        console.log('socket', 'connect');

        setTimeout(function() {
            console.log('socket', 'emit', 'hi');
            socket.emit('hi');
        }, 1000);

        setTimeout(function() {
            console.log('socket', 'emit', 'ack');
            socket.emit('ack');
        }, 2000);

        setTimeout(function() {
            console.log('socket', 'emit', 'getAckDate');
            socket.emit('getAckDate', 'whatever', function(data) {
                console.log('socket', 'emit', 'getAckDate', 'ack', data);
            });
        }, 3000);

        setTimeout(function() {
            console.log('socket', 'emit', 'getDate');
            socket.emit('getDate');
        }, 4000);

        setTimeout(function() {
            console.log('socket', 'emit', 'getDateObj');
            socket.emit('getDateObj');
        }, 5000);

        setTimeout(function() {
            console.log('socket', 'emit', 'getUtf8');
            socket.emit('getUtf8');
        }, 6000);

    });

    socket.on('hi', function(data) {
        console.log('socket', 'on', 'hi');
    });

    socket.on('ack', function(data) {
        console.log('socket', 'on', 'ack');
        data();
    });

    socket.on('takeDate', function(data) {
        console.log('socket', 'on', 'takeDate', data);
    });

    socket.on('takeDateObj', function(data) {
        console.log('socket', 'on', 'takeDateObj', JSON.stringify(data));
    });

    socket.on('takeUtf8', function(data) {
        console.log('socket', 'on', 'takeUtf8', data);
    });


}
exports.onLoaded = onLoaded;
