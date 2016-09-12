nativescript-socket.io
======================

# State

Android implementation is stable and almost complete.

iOS implementation is in active development.

Please check [releases and changelog](https://github.com/naderio/nativescript-socket.io/releases) and [roadmap](https://github.com/naderio/nativescript-socket.io/issues/3) for more information.  

# Install

```
tns plugin add nativescript-socket.io
```

# Usage

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

## Usage with TypeScript

import using either of

* `import SocketIO = require("nativescript-socket.io")`
* `import * as SocketIO from "nativescript-socket.io"`


# Demo

first start the socket.io demo server

```
cd ./demo/server
npm start
```

then build and run the app

```
cd ./demo
tns run android
```

make sure to put your IP address in `./demo/app/main-page.js` (`var socket = SocketIO.connect('http://192.168.1.111:3210');`).

expect the following on app:

```
JS: nativescript-socket.io on connect []
JS: nativescript-socket.io emit hi []
JS: nativescript-socket.io emit hi [false]
JS: nativescript-socket.io emit hi [true]
JS: nativescript-socket.io emit hi [-1]
JS: nativescript-socket.io emit hi [0]
JS: nativescript-socket.io emit hi [1]
JS: nativescript-socket.io emit hi [""]
JS: nativescript-socket.io emit hi ["..."]
JS: nativescript-socket.io emit hi [{"a":1,"b":2}]
JS: nativescript-socket.io emit hi [["a","b","c"]]
JS: nativescript-socket.io emit hi [-1,false,true,"","...",{"a":1,"b":2},["a","b","c"],[{"a":1},"2016-01-01T05:00:00.000Z",true,15,".."]]
JS: nativescript-socket.io emit hi [[-1,false,true,"","...",{"a":1,"b":2},["a","b","c"],[{"a":1},"2016-01-01T05:00:00.000Z",true,15,".."]]]
JS: nativescript-socket.io emit hi [{"-1":1,"false":false,"true":true,"empty string":"","string":"...","object":{"a":1,"b":2},"array of strings":["a","b","c"],"array of mixed":[{"a":1},"2016-01-01T05:00:00.000Z",true,15,".."]}]
JS: nativescript-socket.io on hi []
JS: nativescript-socket.io on hi [false]
JS: nativescript-socket.io on hi [true]
JS: nativescript-socket.io on hi [-1]
JS: nativescript-socket.io on hi [0]
JS: nativescript-socket.io on hi [1]
JS: nativescript-socket.io on hi [""]
JS: nativescript-socket.io on hi ["..."]
JS: nativescript-socket.io on hi [{"a":1,"b":2}]
JS: nativescript-socket.io on hi [["a","b","c"]]
JS: nativescript-socket.io on hi [-1,false,true,"","...",{"a":1,"b":2},["a","b","c"],[{"a":1},"2016-01-01T05:00:00.000Z",true,15,".."]]
JS: nativescript-socket.io on hi [[-1,false,true,"","...",{"a":1,"b":2},["a","b","c"],[{"a":1},"2016-01-01T05:00:00.000Z",true,15,".."]]]
JS: nativescript-socket.io on hi [{"-1":1,"false":false,"true":true,"empty string":"","string":"...","object":{"a":1,"b":2},"array of strings":["a","b","c"],"array of mixed":[{"a":1},"2016-01-01T05:00:00.000Z",true,15,".."]}]
JS: nativescript-socket.io emit ack []
JS: nativescript-socket.io on ack []ack
JS: nativescript-socket.io on ack ack [5,{"test":true}]
JS: nativescript-socket.io on got it []
JS: nativescript-socket.io emit getAckDate ["whatever"]ack
JS: nativescript-socket.io emit getAckDate ack ["2017-01-01T00:00:00.000Z"]
JS: nativescript-socket.io emit getDate []
JS: nativescript-socket.io on takeDate ["2017-01-01T00:00:00.000Z"]
JS: nativescript-socket.io emit getDateObj []
JS: nativescript-socket.io on takeDateObj [{"date":"2017-01-01T00:00:00.000Z"}]
JS: nativescript-socket.io emit getUtf8 []
JS: nativescript-socket.io on takeUtf8 ["てすと"]
JS: nativescript-socket.io on takeUtf8 ["Я Б Г Д Ж Й"]
JS: nativescript-socket.io on takeUtf8 ["Ä ä Ü ü ß"]
JS: nativescript-socket.io on takeUtf8 ["utf8 — string"]
JS: nativescript-socket.io on takeUtf8 ["utf8 — string"]
JS: nativescript-socket.io emit hi []
JS: nativescript-socket.io on hi []
JS: nativescript-socket.io emit hi []
JS: nativescript-socket.io on hi []
JS: nativescript-socket.io emit hi []
JS: nativescript-socket.io on hi []
JS: nativescript-socket.io off hi function hiListener(data) {
JS:             log('socket', 'on', 'hi');
JS:         }
JS: nativescript-socket.io emit hi []
JS: nativescript-socket.io emit hi []
JS: nativescript-socket.io off hi 

```

and the following on server:

```
socket connect
socket on hi []
socket on hi [
  false
]
socket on hi [
  true
]
socket on hi [
  -1
]
socket on hi [
  0
]
socket on hi [
  1
]
socket on hi [
  ""
]
socket on hi [
  "..."
]
socket on hi [
  {
    "a": 1,
    "b": 2
  }
]
socket on hi [
  [
    "a",
    "b",
    "c"
  ]
]
socket on hi [
  -1,
  false,
  true,
  "",
  "...",
  {
    "a": 1,
    "b": 2
  },
  [
    "a",
    "b",
    "c"
  ],
  [
    {
      "a": 1
    },
    "2016-01-01T05:00:00.000Z",
    true,
    15,
    ".."
  ]
]
socket on hi [
  [
    -1,
    false,
    true,
    "",
    "...",
    {
      "a": 1,
      "b": 2
    },
    [
      "a",
      "b",
      "c"
    ],
    [
      {
        "a": 1
      },
      "2016-01-01T05:00:00.000Z",
      true,
      15,
      ".."
    ]
  ]
]
socket on hi [
  {
    "-1": 1,
    "false": false,
    "true": true,
    "empty string": "",
    "string": "...",
    "object": {
      "a": 1,
      "b": 2
    },
    "array of strings": [
      "a",
      "b",
      "c"
    ],
    "array of mixed": [
      {
        "a": 1
      },
      "2016-01-01T05:00:00.000Z",
      true,
      15,
      ".."
    ]
  }
]
socket on ack []
socket on ack ack [
  5,
  {
    "test": true
  }
]
socket on getAckDate [
  "whatever",
  null
]
socket on getDate []
socket on getDateObj []
socket on getUtf8 []
socket on hi []
socket on hi [
```
