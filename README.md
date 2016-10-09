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
DEBUG socket.io on connect []  +585
DEBUG app/main-page.js connect +3
DEBUG app/main-page.js emit hi +1003
DEBUG socket.io emit hi []  +1
DEBUG socket.io emit hi [
  false
]  +1
DEBUG socket.io emit hi [
  true
]  +0
DEBUG socket.io emit hi [
  -1
]  +0
DEBUG socket.io emit hi [
  0
]  +1
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
]  +2
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
    "2016-01-01T05:00:00.000Z",
    true,
    15,
    ".."
  ]
]  +3
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
]  +4
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
]  +4
DEBUG socket.io on hi []  +2
DEBUG app/main-page.js on hi +1
DEBUG socket.io on hi [
  false
]  +1
DEBUG app/main-page.js on hi +0
DEBUG socket.io on hi [
  true
]  +2
DEBUG app/main-page.js on hi +0
DEBUG socket.io on hi [
  -1
]  +2
DEBUG app/main-page.js on hi +0
DEBUG socket.io on hi [
  0
]  +1
DEBUG app/main-page.js on hi +0
DEBUG socket.io on hi [
  1
]  +1
DEBUG app/main-page.js on hi +0
DEBUG socket.io on hi [
  ""
]  +2
DEBUG app/main-page.js on hi +0
DEBUG socket.io on hi [
  "..."
]  +0
DEBUG app/main-page.js on hi +0
DEBUG socket.io on hi [
  {
    "a": 1,
    "b": 2
  }
]  +4
DEBUG app/main-page.js on hi +0
DEBUG socket.io on hi [
  [
    "a",
    "b",
    "c"
  ]
]  +5
DEBUG app/main-page.js on hi +0
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
]  +2
DEBUG app/main-page.js on hi +0
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
]  +2
DEBUG app/main-page.js on hi +0
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
]  +1
DEBUG app/main-page.js on hi +0
DEBUG app/main-page.js emit ack +958
DEBUG socket.io emit ack []  +0
DEBUG socket.io on ack [] ack +4
DEBUG app/main-page.js on ack +0
DEBUG socket.io on ack ack [
  5,
  {
    "test": true
  }
] +0
DEBUG socket.io on got it []  +3
DEBUG app/main-page.js on got it undefined +1
DEBUG app/main-page.js emit getAckDate +993
DEBUG socket.io emit getAckDate [
  "whatever"
] ack +0
DEBUG socket.io emit getAckDate ack [
  "2017-01-01T00:00:00.000Z"
] +7
DEBUG app/main-page.js emit getAckDate ack "2017-01-01T00:00:00.000Z" +0
DEBUG app/main-page.js emit getDate +992
DEBUG socket.io emit getDate []  +0
DEBUG socket.io on takeDate [
  "2017-01-01T00:00:00.000Z"
]  +4
DEBUG app/main-page.js on takeDate "2017-01-01T00:00:00.000Z" +0
DEBUG app/main-page.js emit getDateObj +996
DEBUG socket.io emit getDateObj []  +0
DEBUG socket.io on takeDateObj [
  {
    "date": "2017-01-01T00:00:00.000Z"
  }
]  +3
DEBUG app/main-page.js on takeDateObj {"date":"2017-01-01T00:00:00.000Z"} +0
DEBUG app/main-page.js emit getUtf8 +998
DEBUG socket.io emit getUtf8 []  +0
DEBUG socket.io on takeUtf8 [
  "てすと"
]  +3
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
DEBUG app/main-page.js emit hi +3993
DEBUG socket.io emit hi []  +0
DEBUG socket.io on hi []  +4
DEBUG app/main-page.js on hi +0
DEBUG app/main-page.js emit hi +1997
DEBUG socket.io emit hi []  +0
DEBUG socket.io on hi []  +3
DEBUG app/main-page.js on hi +0
DEBUG app/main-page.js emit hi +2002
DEBUG socket.io emit hi []  +0
DEBUG socket.io on hi []  +5
DEBUG app/main-page.js on hi +0
DEBUG app/main-page.js off hi +988
DEBUG socket.io off hi function hiListener(data) {
            debug('on', 'hi');
        } +0

```

and the following on server:

```
DEBUG socket.io connect +5786
DEBUG socket.io on hi [] +1395
DEBUG socket.io on hi [
  false
] +5
DEBUG socket.io on hi [
  true
] +1
DEBUG socket.io on hi [
  -1
] +0
DEBUG socket.io on hi [
  0
] +1
DEBUG socket.io on hi [
  1
] +0
DEBUG socket.io on hi [
  ""
] +0
DEBUG socket.io on hi [
  "..."
] +0
DEBUG socket.io on hi [
  {
    "a": 1,
    "b": 2
  }
] +3
DEBUG socket.io on hi [
  [
    "a",
    "b",
    "c"
  ]
] +13
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
] +2
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
] +1
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
] +1
DEBUG socket.io on ack [] +965
DEBUG socket.io on ack ack [
  5,
  {
    "test": true
  }
] +4
DEBUG socket.io on getAckDate [
  "whatever",
  null
] +1000
DEBUG socket.io on getDate [] +995
DEBUG socket.io on getDateObj [] +1003
DEBUG socket.io on getUtf8 [] +999
DEBUG socket.io on hi [] +4002
DEBUG socket.io on hi [] +2000
DEBUG socket.io on hi [] +2001
```
