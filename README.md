nativescript-socket.io
======================

# State

Android implementation works fine.

iOS implementation is in active develeppement.

Please check [releases and changelog](https://github.com/naderio/nativescript-socket.io/releases) for more information.  

# Install

```
tns plugin add nativescript-socket.io
```

# Use

```
var SocketIO = require('nativescript-socket.io');

SocketIO.enableDebug(); // optionnal

// or use your own debug function
// SocketIO.enableDebug(myCustomDebugFunction);

var options = {
  query: 'token=' + 'SOME_JWT_TOKEN_HERE',
};

var socket = SocketIO.connect('http://somewhere/api/', options);

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
# Demo

first start the socket.io demo server

```
cd ./demo-server
npm start
```

the build and run the app

```
cd ./demo
tns run android
```

make sure to put your IP address in `./demo/app/main-page.js` (`var socket = SocketIO.connect('http://192.168.1.111:3210');`).

expect the following on app:

```
JS: socket connect
JS: socket emit hi
JS: socket on hi
JS: socket emit ack
JS: socket on ack
JS: socket emit getAckDate
JS: socket emit getAckDate ack 2016-05-04T23:17:36.170Z
JS: socket emit getDate
JS: socket on takeDate 2016-05-04T23:17:37.140Z
JS: socket emit getDateObj
JS: socket on takeDateObj {"date":"2016-05-04T23:17:38.138Z"}
JS: socket emit getUtf8
JS: socket on takeUtf8 てすと
JS: socket on takeUtf8 Я Б Г Д Ж Й
JS: socket on takeUtf8 Ä ä Ü ü ß
JS: socket on takeUtf8 utf8 — string
JS: socket on takeUtf8 utf8 — string
```

and the following on server:

```
socket on hi
socket on ack
socket on getAckDate whatever
socket on getDate
socket on getDateObj
socket on getUtf8
```
