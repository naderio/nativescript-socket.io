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
import * as SocketIO from "nativescript-socket.io"`

// OR

const SocketIO = require("nativescript-socket.io")
```

# Demo

first start the socket.io demo server

```sh
cd ./demo.server
npm start
```

then build and run the app

```sh
cd ./demo
tns run android
```

make sure to put your IP address in `./demo/app/main-page.js` (`var socket = SocketIO.connect('http://192.168.1.111:3210');`).

expect the following on server:

```
DEBUG socket.io connect +108220
DEBUG socket.io soc.request._query {
  "EIO": "3",
  "transport": "polling",
  "token": "123",
  "scope": "client"
} +23
DEBUG socket.io on hi [] +1589
DEBUG socket.io on hi [
  false
] +3
DEBUG socket.io on hi [
  true
] +2
DEBUG socket.io on hi [
  -1
] +1
DEBUG socket.io on hi [
  0
] +1
DEBUG socket.io on hi [
  1
] +0
DEBUG socket.io on hi [
  ""
] +1
DEBUG socket.io on hi [
  "..."
] +0
DEBUG socket.io on hi [
  {
    "b": 2,
    "a": 1
  }
] +0
DEBUG socket.io on hi [
  [
    "a",
    "b",
    "c"
  ]
] +1
DEBUG socket.io on hi [
  -1,
  false,
  true,
  "",
  "...",
  {
    "b": 2,
    "a": 1
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
    "2016-01-01T00:00:00.000Z",
    true,
    15,
    ".."
  ]
] +3
DEBUG socket.io on hi [
  [
    -1,
    false,
    true,
    "",
    "...",
    {
      "b": 2,
      "a": 1
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
      "2016-01-01T00:00:00.000Z",
      true,
      15,
      ".."
    ]
  ]
] +17
DEBUG socket.io on hi [
  {
    "-1": 1,
    "string": "...",
    "true": true,
    "false": false,
    "array of strings": [
      "a",
      "b",
      "c"
    ],
    "object": {
      "b": 2,
      "a": 1
    },
    "empty string": "",
    "array of mixed": [
      {
        "a": 1
      },
      "2016-01-01T00:00:00.000Z",
      true,
      15,
      ".."
    ]
  }
] +35
DEBUG socket.io on ack [] +925
DEBUG socket.io on ack ack [
  5,
  {
    "test": true
  }
] +6
DEBUG socket.io on getAckDate [
  "whatever",
  null
] +993
DEBUG socket.io on getDate [] +1010
DEBUG socket.io on getDateObj [] +990
DEBUG socket.io on getUtf8 [] +1000
DEBUG socket.io on hi [] +4005
DEBUG socket.io on hi [] +2002
DEBUG socket.io on hi [] +2004
DEBUG socket.io on hi [] +2002
DEBUG socket.io on hi [] +2003
DEBUG socket.io on hi [] +2002
DEBUG socket.io on hi [] +2001
DEBUG socket.io on hi [] +2003
DEBUG socket.io on hi [] +2002
DEBUG socket.io on hi [] +2003
```

and the following on app:

```
DEBUG socket.io on connect []  +2266
DEBUG app/main-page.js connect +3
DEBUG app/main-page.js emit hi +1010
DEBUG socket.io emit hi []  +0
DEBUG socket.io emit hi [
  false
]  +1
DEBUG socket.io emit hi [
  true
]  +0
DEBUG socket.io emit hi [
  -1
]  +1
DEBUG socket.io emit hi [
  0
]  +0
DEBUG socket.io emit hi [
  1
]  +0
DEBUG socket.io emit hi [
  ""
]  +0
DEBUG socket.io emit hi [
  "..."
]  +0
DEBUG socket.io emit hi [
  {
    "a": 1,
    "b": 2
  }
]  +0
DEBUG socket.io emit hi [
  [
    "a",
    "b",
    "c"
  ]
]  +1
DEBUG socket.io emit hi [
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
    "2016-01-01T00:00:00.000Z",
    true,
    15,
    ".."
  ]
]  +1
DEBUG socket.io emit hi [
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
      "2016-01-01T00:00:00.000Z",
      true,
      15,
      ".."
    ]
  ]
]  +0
DEBUG socket.io emit hi [
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
      "2016-01-01T00:00:00.000Z",
      true,
      15,
      ".."
    ]
  }
]  +28
DEBUG socket.io on hi []  +9
DEBUG app/main-page.js on hi +1
DEBUG socket.io on hi [
  false
]  +8
DEBUG app/main-page.js on hi +0
DEBUG socket.io on hi [
  true
]  +8
DEBUG app/main-page.js on hi +0
DEBUG socket.io on hi [
  -1
]  +1
DEBUG app/main-page.js on hi +0
DEBUG socket.io on hi [
  0
]  +0
DEBUG app/main-page.js on hi +1
DEBUG socket.io on hi [
  1
]  +6
DEBUG app/main-page.js on hi +0
DEBUG socket.io on hi [
  ""
]  +7
DEBUG app/main-page.js on hi +0
DEBUG socket.io on hi [
  "..."
]  +1
DEBUG app/main-page.js on hi +0
DEBUG socket.io on hi [
  {
    "b": 2,
    "a": 1
  }
]  +5
DEBUG app/main-page.js on hi +1
DEBUG socket.io on hi [
  [
    "a",
    "b",
    "c"
  ]
]  +7
DEBUG app/main-page.js on hi +0
DEBUG socket.io on hi [
  -1,
  false,
  true,
  "",
  "...",
  {
    "b": 2,
    "a": 1
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
    "2016-01-01T00:00:00.000Z",
    true,
    15,
    ".."
  ]
]  +3
DEBUG app/main-page.js on hi +0
DEBUG socket.io on hi [
  [
    -1,
    false,
    true,
    "",
    "...",
    {
      "b": 2,
      "a": 1
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
      "2016-01-01T00:00:00.000Z",
      true,
      15,
      ".."
    ]
  ]
]  +17
DEBUG app/main-page.js on hi +0
DEBUG socket.io on hi [
  {
    "-1": 1,
    "string": "...",
    "false": false,
    "true": true,
    "array of strings": [
      "a",
      "b",
      "c"
    ],
    "object": {
      "b": 2,
      "a": 1
    },
    "empty string": "",
    "array of mixed": [
      {
        "a": 1
      },
      "2016-01-01T00:00:00.000Z",
      true,
      15,
      ".."
    ]
  }
]  +17
DEBUG app/main-page.js on hi +0
DEBUG app/main-page.js emit ack +877
DEBUG socket.io emit ack []  +0
DEBUG socket.io on ack [] ack +2
DEBUG app/main-page.js on ack +0
DEBUG socket.io on ack ack [
  5,
  {
    "test": true
  }
] +1
DEBUG socket.io on got it []  +2
DEBUG app/main-page.js on got it undefined +0
DEBUG app/main-page.js emit getAckDate +994
DEBUG socket.io emit getAckDate [
  "whatever"
] ack +1
DEBUG socket.io emit getAckDate ack [
  "2017-01-01T00:00:00.000Z"
] +3
DEBUG app/main-page.js emit getAckDate ack "2017-01-01T00:00:00.000Z" +1
DEBUG app/main-page.js emit getDate +996
DEBUG socket.io emit getDate []  +0
DEBUG socket.io on takeDate [
  "2017-01-01T00:00:00.000Z"
]  +2
DEBUG app/main-page.js on takeDate "2017-01-01T00:00:00.000Z" +0
DEBUG app/main-page.js emit getDateObj +998
DEBUG socket.io emit getDateObj []  +0
DEBUG socket.io on takeDateObj [
  {
    "date": "2017-01-01T00:00:00.000Z"
  }
]  +2
DEBUG app/main-page.js on takeDateObj {"date":"2017-01-01T00:00:00.000Z"} +0
DEBUG app/main-page.js emit getUtf8 +998
DEBUG socket.io emit getUtf8 []  +0
DEBUG socket.io on takeUtf8 [
  "てすと"
]  +2
DEBUG app/main-page.js on takeUtf8 "てすと" +0
DEBUG socket.io on takeUtf8 [
  "Я Б Г Д Ж Й"
]  +1
DEBUG app/main-page.js on takeUtf8 "Я Б Г Д Ж Й" +0
DEBUG socket.io on takeUtf8 [
  "Ä ä Ü ü ß"
]  +1
DEBUG app/main-page.js on takeUtf8 "Ä ä Ü ü ß" +0
DEBUG socket.io on takeUtf8 [
  "utf8 — string"
]  +1
DEBUG app/main-page.js on takeUtf8 "utf8 — string" +0
DEBUG socket.io on takeUtf8 [
  "utf8 — string"
]  +1
DEBUG app/main-page.js on takeUtf8 "utf8 — string" +0
DEBUG app/main-page.js emit hi +3997
DEBUG socket.io emit hi []  +0
DEBUG socket.io on hi []  +3
DEBUG app/main-page.js on hi +0
DEBUG app/main-page.js emit hi +1999
DEBUG socket.io emit hi []  +0
DEBUG socket.io on hi []  +8
DEBUG app/main-page.js on hi +0
DEBUG app/main-page.js emit hi +1995
DEBUG socket.io emit hi []  +0
DEBUG socket.io on hi []  +8
DEBUG app/main-page.js on hi +0
DEBUG app/main-page.js off hi +983
DEBUG socket.io off hi function hiListener(data) {
            debug('on', 'hi');
        } +1
DEBUG app/main-page.js emit hi +1009
DEBUG socket.io emit hi []  +0
DEBUG app/main-page.js emit hi +2002
DEBUG socket.io emit hi []  +1
DEBUG app/main-page.js off hi +1988
DEBUG socket.io off hi undefined +0
DEBUG app/main-page.js emit hi +15
DEBUG socket.io emit hi []  +0
DEBUG app/main-page.js emit hi +2003
DEBUG socket.io emit hi []  +0
DEBUG app/main-page.js emit hi +2003
DEBUG socket.io emit hi []  +0
DEBUG app/main-page.js emit hi +2001
DEBUG socket.io emit hi []  +1
DEBUG socket.io once hi []  +4
DEBUG app/main-page.js on hi +1
DEBUG app/main-page.js emit hi +1997
DEBUG socket.io emit hi []  +0
DEBUG app/main-page.js disconnect +1976
```
