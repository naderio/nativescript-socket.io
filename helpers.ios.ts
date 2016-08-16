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
        return null;
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
      return null;
  }
}


export function deserialize(nativeData: any): any {
  if (nativeData === null || typeof nativeData !== 'object') {
    return nativeData;
  }

  if (nativeData instanceof NSArray) {
    let array = [];
    for (let value of nativeData) {
      array[array.length] = deserialize(array[value]);
    };
    return array;
  }

  if (nativeData instanceof NSDictionary) {
    let dict = {};
    for (let key of nativeData) {
      dict[key] = deserialize(nativeData.objectForKey(key));
    }
    return dict;
  }

  return nativeData;
}
