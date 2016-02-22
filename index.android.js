'use strict';

const observable = require('data/observable');

const json = require('./json');

const _Emitter = io.socket.emitter.Emitter;
const _IO = io.socket.client.IO;
const _Socket = io.socket.client.Socket;
const _Ack = io.socket.client.Ack;

const Socket = (function (_super) {
  __extends(Socket, _super);

  function Socket(uri, opts) {
    _super.call(this);
    var _opts = new _IO.Options();
    Object.assign(_opts, opts);
    this._socket = _IO.socket(uri, _opts);
  }

  return Socket;
})(observable.Observable);

exports.Socket = Socket;

Socket.prototype.on = function (event, callback) {
  this._socket.on(event, new _Emitter.Listener({
    call: function (args) {
      var payload = Array.prototype.slice.call(args);
      var ack = payload.pop();
      // if (ack) {
      //   console.log(ack.getClass().getName(), !!ack.call);
      // }
      if (ack && !(ack.getClass().getName().indexOf('io.socket.client.Socket') === 0 && ack.call)) {
        payload.push(ack);
        ack = null;
      }
      payload = payload.map(json.deserialize);
      if (ack) {
        var _ack = ack;
        // var ack = java.lang.reflect.Array.newInstance(io.socket.client.Ack.class.getField("TYPE").get(null));
        ack = function () {
          var args = Array.prototype.slice.call(arguments).map(json.serialize);
          _ack.call(args);
        };
        payload.push(ack);
      }
      callback.apply(null, payload);
    },
  }));
};

Socket.prototype.emit = function (event) {
  var payload = Array.prototype.slice.call(arguments, 1);
  var ack = payload.pop();
  if (ack && typeof ack !== 'function') {
    payload.push(ack);
    ack = null;
  }
  payload = payload.map(json.serialize);
  if (ack) {
    payload.push(new _Ack({
      call: function (args) {
        args = Array.prototype.slice.call(args).map(json.deserialize);
        ack.apply(null, args);
      },
    }));
  }
  this._socket.emit(event, payload);
};

Socket.prototype.connect = function () {
  this._socket.connect();
};

Socket.prototype.disconnect = function () {
  this._socket.disconnect();
};

Object.defineProperty(Socket.prototype, 'connected', {
  get: function () {
    return this._socket.connected();
  }
});

function _io(uri, opts) {
  var socket = new Socket(uri, opts);
  socket.connect();
  return socket;
}

_io.connect = _io;

module.exports = _io;
