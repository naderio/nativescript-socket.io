nativescript-socket.io
======================

```
var SocketIO = require('nativescript-socket.io');

var opts = {
  query: 'token=' + 'SOME_JWT_TOKEN_HERE',
};

var socket = SocketIO.connect('http://somewhere/api/', opts);

socket.on('connect', function(){
  console.log('connect');
});

socket.on('hello', function(){
  console.log('hello', arguments);
});

socket.on('request', function(info, ack){
  console.log('request', info);
  if (info === 'datetime') {
    ack(new Date());
  } elseif (info === 'random') {
    ack(Math.random());
  } else {
    ack(null);
  }
});

socket.emit('hello', {
  username: 'someone',
});

socket.emit('hello-ack', {
  username: 'someone',
}, function ack(){
  console.log('hello-ack', arguments);
})

```
