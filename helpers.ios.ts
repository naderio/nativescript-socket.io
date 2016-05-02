'use strict';

export function serialize(data: any): any {
  switch (typeof data) {
    case 'string':
    case 'boolean':
    case 'number':
      return data;
    case 'object':
      if (Array.isArray(data)) {
        if (Array.isArray(data)) {
          return data.map(function(v) {
            return serialize(v);
          });
        }
      }

      if (data instanceof Date) {
        return data.toJSON();
      }

      if (!data) {
        return null;
      }

      // node = NSDictionary();
      // Object.keys(data).forEach(function(key) {
      //   var v = data[key];
      //   node[key] = serialize(v);
      // });
      return node;

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
