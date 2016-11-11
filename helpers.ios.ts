'use strict';

declare var NSDictionary;
declare var NSArray;

export function serialize(data: any): any {
  switch (typeof data) {
    case 'string':
    case 'boolean':
    case 'number':
      return data;
    case 'object':

      if (data instanceof Date) {
        return data.toJSON();
      }

      if (!data) {
        return NSNull.new();
      }

      if (Array.isArray(data)) {
        return NSArray.arrayWithArray(data.map(serialize));
      }

      let node = {};
      Object.keys(data).forEach(function(key) {
        let value = data[key];
        node[key] = serialize(value);
      });
      return NSDictionary.dictionaryWithDictionary(node);

    default:
      return NSNull.new();
  }
}


export function deserialize(nativeData: any): any {
  if (nativeData instanceof NSNull) {
    return null;
  }

  if (nativeData instanceof NSArray) {
    let array = [];
    for (let i = 0, n = nativeData.count; i < n; i++) {
      array[i] = deserialize(nativeData.objectAtIndex(i));
    };
    return array;
  }

  if (nativeData instanceof NSDictionary) {
    let dict = {};
    for (let i = 0, n = nativeData.allKeys.count; i < n; i++) {
      let key = nativeData.allKeys.objectAtIndex(i);
      dict[key] = deserialize(nativeData.objectForKey(key));
    };
    return dict;
  }

  return nativeData;
}
