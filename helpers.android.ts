'use strict';

const JSONObject = org.json.JSONObject;
const JSONArray = org.json.JSONArray;
const JSONException = org.json.JSONException;

export function serialize(data: any): any {
  var node;
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
        var v = data[key];
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

  var node;
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
      node = [];
      for (var i = 0, l = nativeData.length(); i < l; i++) {
        node[i] = deserialize(nativeData.get(i));
      }
      break;
    case 'org.json.JSONObject':
      node = {};
      var iterator = nativeData.keys();
      while (iterator.hasNext()) {
        var key = iterator.next();
        node[key] = deserialize(nativeData.get(key));
      }
      break;
    default:
      node = null;
  }
  return node;
}
