'use strict';

export function serialize(data: any): any {
  var node;
  switch (typeof data) {
    case 'string':
    case 'boolean':
    case 'number':
      return data;
    case 'object':
      if (Array.isArray(data)) {
        // ...
        data.forEach(function(v) {
          // ...
        });
        return null;
      }

      if (data instanceof Date) {
        return data.toJSON();
      }

      if (!data) {
        return null;
      }

      // ...
      Object.keys(data).forEach(function(key) {
        var v = data[key];
        // ...
      });
      return {};

    default:
      return null;
  }
}

export function deserialize(nativeData: any): any {
  if (nativeData === null || typeof nativeData !== 'object') {
    return nativeData;
  }

  // ...
  return {};
}
