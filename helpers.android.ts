'use strict';

declare var org;

const JSONObject = org.json.JSONObject;
const JSONArray = org.json.JSONArray;
const JSONException = org.json.JSONException;

export function serialize(data: any): any {
  let node;
  switch (typeof data) {
    case 'string':
    case 'boolean':
    case 'number':
      return data;
    case 'object':
      if (Array.isArray(data)) {
        node = new JSONArray();
        data.forEach(function(v) {
          node.put(serialize(v));
        });
        return node;
      }

      if (data instanceof Date) {
        return data.toJSON();
      }

      if (!data) {
        return null;
      }

      node = new JSONObject();
      Object.keys(data).forEach(function(key) {
        let v = data[key];
        node.put(key, serialize(v));
      });
      return node;

    default:
      return null;
  }
}

export function deserialize(nativeData: any): any {
  if (nativeData === null || typeof nativeData !== 'object') {
    return nativeData;
  }

  switch (nativeData.getClass().getName()) {
    case 'java.lang.String':
      return String(nativeData);
    case 'java.lang.Boolean':
      return String(nativeData) === 'true';
    case 'java.lang.Integer':
    case 'java.lang.Long':
    case 'java.lang.Double':
      return Number(String(nativeData));
    case 'org.json.JSONArray':
      let array = [];
      for (let i = 0, l = nativeData.length(); i < l; i++) {
        array[i] = deserialize(nativeData.get(i));
      }
      return array;
    case 'org.json.JSONObject':
      let dict = {};
      let iterator = nativeData.keys();
      while (iterator.hasNext()) {
        let key = iterator.next();
        dict[key] = deserialize(nativeData.get(key));
      }
      return dict;
    default:
      return null;
  }
}
