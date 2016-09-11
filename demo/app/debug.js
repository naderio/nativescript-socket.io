'use strict';

var last = new Date();

function debug(label) {
  if (label.charAt(0) === '/') {
    label = label.substr(label.lastIndexOf('app/'));
  }
  return function () {
    if (!debug.debug) {
      return;
    }
    var args = Array.prototype.slice.call(arguments);
    args = args.map(function (value) {
      if (typeof value === 'object' && value instanceof Error) {
        return value;
      }
      if (typeof value === 'object' && value) {
        try {
          var cache = [];
          return JSON.stringify('length' in value ? Array.from(value) : value, function (key, value) {
            if (typeof value === 'object' && value !== null) {
              if (cache.indexOf(value) !== -1) {
                // Circular reference found, discard key
                return;
              }
              // Store value in our collection
              cache.push(value);
            }
            return value;
          }, 2);
        } catch (e) {
          return (value && typeof value.toString ? value.toString() : '?') + ' (serialization failed)';
        }
      }
      return String(value);
    });
    var timestamp = new Date();
    if (label) {
      args.unshift(label);
    }
    args.unshift('DEBUG');
    // args.unshift(timestamp.toJSON());
    args.push('+' + (timestamp - last));
    last = timestamp;
    console.log.apply(console, args);
  };
}

debug.debug = true;

module.exports = debug;
