nativescript-socket.io
======================

Full-featured Socket.IO client implementation for NativeScript.

# Status

![Status](https://img.shields.io/badge/status-production--ready-green.svg)
[![npm](https://img.shields.io/npm/l/nativescript-socket.io.svg?maxAge=1000)](https://github.com/naderio/nativescript-socket.io/blob/master/LICENSE.md)
[![npm](https://img.shields.io/npm/v/nativescript-socket.io.svg?maxAge=1000)](https://www.npmjs.com/package/nativescript-socket.io)
[![dependency Status](https://img.shields.io/david/naderio/nativescript-socket.io.svg?maxAge=1000)](https://david-dm.org/naderio/nativescript-socket.io)
[![devDependency Status](https://img.shields.io/david/dev/naderio/nativescript-socket.io.svg?maxAge=1000)](https://david-dm.org/naderio/nativescript-socket.io)
[![devDependency Status](https://img.shields.io/david/peer/naderio/nativescript-socket.io.svg?maxAge=1000)](https://david-dm.org/naderio/nativescript-socket.io)
[![Build Status](https://travis-ci.org/naderio/nativescript-socket.io.svg?branch=master)](https://travis-ci.org/naderio/nativescript-socket.io)
[![npm](https://img.shields.io/npm/dt/nativescript-socket.io.svg?maxAge=1000)](https://www.npmjs.com/package/nativescript-socket.io)

This library is production-ready. Both Android and iOS implementations are stable and in sync.

Please check [releases and changelog](https://github.com/naderio/nativescript-socket.io/releases) and [roadmap](https://github.com/naderio/nativescript-socket.io/issues/3) for more information.  

# Dependencies

Android: [Socket.IO-client Java](https://github.com/socketio/socket.io-client-java) v1.*

iOS: [Socket.IO-Client-Swift](https://github.com/socketio/socket.io-client-swift) v12.*

# Install

```sh
tns plugin add nativescript-socket.io
```

# Usage

```javascript
const SocketIO = require('nativescript-socket.io');

SocketIO.enableDebug(); // optionnal

// or use your own debug function
// SocketIO.enableDebug(myCustomDebugFunction);

const options = {
  query: {
    token: 'SOME_TOKEN_HERE',
  },
  android: {
    // http://socketio.github.io/socket.io-client-java/apidocs/io/socket/client/IO.Options.html
  }
  ios: {
    // https://nuclearace.github.io/Socket.IO-Client-Swift/Enums/SocketIOClientOption.html
  }
};

const socketio = SocketIO.connect('http://somewhere/namespace', options);

socketio.on('connect', function(){
  console.log('connect');
});

socketio.on('hello', function(){
  console.log('hello', arguments);
});

socketio.on('request', function(info, ack){
  console.log('request', info);
  if (info === 'datetime') {
    ack(new Date());
  } elseif (info === 'random') {
    ack(Math.random());
  } else {
    ack(null);
  }
});

socketio.emit('hello', {
  username: 'someone',
});

socketio.emit('hello-ack', {
  username: 'someone',
}, function ack(){
  console.log('hello-ack', arguments);
})

```

## Usage with TypeScript

import using either of the following:

```typescript
import * as SocketIO from "nativescript-socket.io"

// OR

const SocketIO = require("nativescript-socket.io")
```

# Demo

1. replace all instance of `192.168.1.111` with your IP address or domain.

2. start the socket.io demo server

```sh
cd ./demo.server
npm start
```

3. build and run the app

```sh
cd ./demo
tns run android
```
