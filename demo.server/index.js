// this is a test server to support tests which make requests

var socketio = require('socket.io');
var server = socketio(process.env.ZUUL_PORT || 3210, { pingInterval: 2000 });
var expect = require('expect.js');

var debug = require('./debug')('socket.io');

server.of('/foo').on('connection', function() {
    // register namespace
});

server.of('/timeout_socket').on('connection', function() {
    // register namespace
});

server.of('/valid').on('connection', function() {
    // register namespace
});

server.of('/asd').on('connection', function() {
    // register namespace
});

server.of('/demo').on('connection', function(soc) {
    debug('connect');

    // debug('soc.handshake', soc.handshake);

    debug('soc.request._query', soc.request._query);

    // simple test
    soc.on('hi', function() {
        args = Array.prototype.slice.call(arguments);
        debug('on', 'hi', JSON.stringify(Array.from(arguments), null, 2));
        args.unshift('hi');
        soc.emit.apply(soc, args);
    });

    // ack tests
    soc.on('ack', function() {
        debug('on', 'ack', JSON.stringify(Array.from(arguments), null, 2));
        soc.emit('ack', function(a, b) {
            debug('on', 'ack', 'ack', JSON.stringify(Array.from(arguments), null, 2));
            if (a === 5 && b.test) {
                soc.emit('got it');
            }
        });
    });

    soc.on('getAckDate', function(data, cb) {
        debug('on', 'getAckDate', JSON.stringify(Array.from(arguments), null, 2));
        cb(new Date('2017-01-01'));
    });

    soc.on('getDate', function() {
        debug('on', 'getDate', JSON.stringify(Array.from(arguments), null, 2));
        soc.emit('takeDate', new Date('2017-01-01'));
    });

    soc.on('getDateObj', function() {
        debug('on', 'getDateObj', JSON.stringify(Array.from(arguments), null, 2));
        soc.emit('takeDateObj', { date: new Date('2017-01-01') });
    });

    soc.on('getUtf8', function() {
        debug('on', 'getUtf8', JSON.stringify(Array.from(arguments), null, 2));
        soc.emit('takeUtf8', 'てすと');
        soc.emit('takeUtf8', 'Я Б Г Д Ж Й');
        soc.emit('takeUtf8', 'Ä ä Ü ü ß');
        soc.emit('takeUtf8', 'utf8 — string');
        soc.emit('takeUtf8', 'utf8 — string');
    });

    // false test
    soc.on('false', function() {
        soc.emit('false', false);
    });

    // binary test
    soc.on('doge', function() {
        var buf = new Buffer('asdfasdf', 'utf8');
        soc.emit('doge', buf);
    });

    // expect receiving binary to be buffer
    soc.on('buffa', function(a) {
        if (Buffer.isBuffer(a)) soc.emit('buffack');
    });

    // expect receiving binary with mixed JSON
    soc.on('jsonbuff', function(a) {
        expect(a.hello).to.eql('lol');
        expect(Buffer.isBuffer(a.message)).to.be(true);
        expect(a.goodbye).to.eql('gotcha');
        soc.emit('jsonbuff-ack');
    });

    // expect receiving buffers in order
    var receivedAbuff1 = false;
    soc.on('abuff1', function(a) {
        expect(Buffer.isBuffer(a)).to.be(true);
        receivedAbuff1 = true;
    });
    soc.on('abuff2', function(a) {
        expect(receivedAbuff1).to.be(true);
        soc.emit('abuff2-ack');
    });

    // expect sent blob to be buffer
    soc.on('blob', function(a) {
        if (Buffer.isBuffer(a)) soc.emit('back');
    });

    // expect sent blob mixed with json to be buffer
    soc.on('jsonblob', function(a) {
        expect(a.hello).to.eql('lol');
        expect(Buffer.isBuffer(a.message)).to.be(true);
        expect(a.goodbye).to.eql('gotcha');
        soc.emit('jsonblob-ack');
    });

    // expect blobs sent in order to arrive in correct order
    var receivedblob1 = false;
    var receivedblob2 = false;
    soc.on('blob1', function(a) {
        expect(Buffer.isBuffer(a)).to.be(true);
        receivedblob1 = true;
    });
    soc.on('blob2', function(a) {
        expect(receivedblob1).to.be(true);
        expect(a).to.eql('second');
        receivedblob2 = true;
    });
    soc.on('blob3', function(a) {
        expect(Buffer.isBuffer(a)).to.be(true);
        expect(receivedblob1).to.be(true);
        expect(receivedblob2).to.be(true);
        soc.emit('blob3-ack');
    });

    // emit buffer to base64 receiving browsers
    soc.on('getbin', function() {
        var buf = new Buffer('asdfasdf', 'utf8');
        soc.emit('takebin', buf);
    });
});
