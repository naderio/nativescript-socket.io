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
DEBUG socket.io on connect []
DEBUG app/main-page.js connect
DEBUG app/main-page.js emit hi
DEBUG socket.io emit hi []
DEBUG socket.io emit hi [
  false
]
DEBUG socket.io emit hi [
  true
]
DEBUG socket.io emit hi [
  -1
]
DEBUG socket.io emit hi [
  0
]
DEBUG socket.io emit hi [
  1
]
DEBUG socket.io emit hi [
  ""
]
DEBUG socket.io emit hi [
  "..."
]
DEBUG socket.io emit hi [
  {
    "a": 1,
    "b": 2
  }
]
DEBUG socket.io emit hi [
  [
    "a",
    "b",
    "c"
  ]
]
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
    "2016-01-01T05:00:00.000Z",
    true,
    15,
    ".."
  ]
]
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
      "2016-01-01T05:00:00.000Z",
      true,
      15,
      ".."
    ]
  ]
]
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
      "2016-01-01T05:00:00.000Z",
      true,
      15,
      ".."
    ]
  }
]
DEBUG socket.io on hi []
DEBUG app/main-page.js on hi
DEBUG socket.io on hi [
  false
]
DEBUG app/main-page.js on hi
DEBUG socket.io on hi [
  true
]
DEBUG app/main-page.js on hi
DEBUG socket.io on hi [
  -1
]
DEBUG app/main-page.js on hi
DEBUG socket.io on hi [
  0
]
DEBUG app/main-page.js on hi
DEBUG socket.io on hi [
  1
]
DEBUG app/main-page.js on hi
DEBUG socket.io on hi [
  ""
]
DEBUG app/main-page.js on hi
DEBUG socket.io on hi [
  "..."
]
DEBUG app/main-page.js on hi
DEBUG socket.io on hi [
  {
    "a": 1,
    "b": 2
  }
]
DEBUG app/main-page.js on hi
DEBUG socket.io on hi [
  [
    "a",
    "b",
    "c"
  ]
]
DEBUG app/main-page.js on hi
DEBUG socket.io on hi [
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
DEBUG app/main-page.js on hi
DEBUG socket.io on hi [
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
DEBUG app/main-page.js on hi
DEBUG socket.io on hi [
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
DEBUG app/main-page.js on hi
DEBUG app/main-page.js emit ack
DEBUG socket.io emit ack []
DEBUG socket.io on ack [] ack
DEBUG app/main-page.js on ack
DEBUG socket.io on ack ack [
  5,
  {
    "test": true
  }
]
DEBUG socket.io on got it []
DEBUG app/main-page.js on got it undefined
DEBUG app/main-page.js emit getAckDate
DEBUG socket.io emit getAckDate [
  "whatever"
] ack
DEBUG socket.io emit getAckDate ack [
  "2017-01-01T00:00:00.000Z"
]
DEBUG app/main-page.js emit getAckDate ack "2017-01-01T00:00:00.000Z"
DEBUG app/main-page.js emit getDate
DEBUG socket.io emit getDate []
DEBUG socket.io on takeDate [
  "2017-01-01T00:00:00.000Z"
]
DEBUG app/main-page.js on takeDate "2017-01-01T00:00:00.000Z"
DEBUG app/main-page.js emit getDateObj
DEBUG socket.io emit getDateObj []
DEBUG socket.io on takeDateObj [
  {
    "date": "2017-01-01T00:00:00.000Z"
  }
]
DEBUG app/main-page.js on takeDateObj {"date":"2017-01-01T00:00:00.000Z"}
DEBUG app/main-page.js emit getUtf8
DEBUG socket.io emit getUtf8 []
DEBUG socket.io on takeUtf8 [
  "てすと"
]
DEBUG app/main-page.js on takeUtf8 "てすと"
DEBUG socket.io on takeUtf8 [
  "Я Б Г Д Ж Й"
]
DEBUG app/main-page.js on takeUtf8 "Я Б Г Д Ж Й"
DEBUG socket.io on takeUtf8 [
  "Ä ä Ü ü ß"
]
DEBUG app/main-page.js on takeUtf8 "Ä ä Ü ü ß"
DEBUG socket.io on takeUtf8 [
  "utf8 — string"
]
DEBUG app/main-page.js on takeUtf8 "utf8 — string"
DEBUG socket.io on takeUtf8 [
  "utf8 — string"
]
DEBUG app/main-page.js on takeUtf8 "utf8 — string"
DEBUG app/main-page.js emit hi
DEBUG socket.io emit hi []
DEBUG socket.io on hi []
DEBUG app/main-page.js on hi
DEBUG app/main-page.js emit hi
DEBUG socket.io emit hi []
DEBUG socket.io on hi []
DEBUG app/main-page.js on hi
DEBUG app/main-page.js emit hi
DEBUG socket.io emit hi []
DEBUG socket.io on hi []
DEBUG app/main-page.js on hi
DEBUG app/main-page.js off hi
DEBUG socket.io off hi function hiListener(data) {
            debug('on', 'hi');
        }
```

and the following on server:

```
DEBUG socket.io connect
DEBUG socket.io on hi []
DEBUG socket.io on hi [
  false
]
DEBUG socket.io on hi [
  true
]
DEBUG socket.io on hi [
  -1
]
DEBUG socket.io on hi [
  0
]
DEBUG socket.io on hi [
  1
]
DEBUG socket.io on hi [
  ""
]
DEBUG socket.io on hi [
  "..."
]
DEBUG socket.io on hi [
  {
    "a": 1,
    "b": 2
  }
]
DEBUG socket.io on hi [
  [
    "a",
    "b",
    "c"
  ]
]
DEBUG socket.io on hi [
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
DEBUG socket.io on hi [
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
DEBUG socket.io on hi [
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
DEBUG socket.io on ack []
DEBUG socket.io on ack ack [
  5,
  {
    "test": true
  }
]
DEBUG socket.io on getAckDate [
  "whatever",
  null
]
DEBUG socket.io on getDate []
DEBUG socket.io on getDateObj []
DEBUG socket.io on getUtf8 []
DEBUG socket.io on hi []
DEBUG socket.io on hi []
DEBUG socket.io on hi []
DEBUG socket.io on hi []
DEBUG socket.io on hi []
DEBUG socket.io on hi []
```
