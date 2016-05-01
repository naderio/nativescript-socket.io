'use strict';

const JSONObject = org.json.JSONObject;
const JSONArray = org.json.JSONArray;
const JSONException = org.json.JSONException;

export function serialize(value: any): any {
  var node;
  switch (typeof value) {
    case 'string':
    case 'boolean':
    case 'number':
      return value;
    case 'object':
      if (Array.isArray(value)) {
        node = new JSONArray();
        value.forEach(function(v) {
          node.put(serialize(v));
        });
        return node;
      }

      if (value instanceof Date) {
        return value.toJSON();
      }

      if (!value) {
        return null;
      }

      node = new JSONObject();
      Object.keys(value).forEach(function(key) {
        var v = value[key];
        node.put(key, serialize(v));
      });
      return node;

    default:
      return null;
  }
}

export function deserialize(javaObj: any): any {
  if (javaObj === null || typeof javaObj !== 'object') {
    return javaObj;
  }

  var node;
  switch (javaObj.getClass().getName()) {
    case 'java.lang.String':
      return String(javaObj);
    case 'java.lang.Boolean':
      return Boolean(String(javaObj));
    case 'java.lang.Integer':
    case 'java.lang.Long':
    case 'java.lang.Double':
      return Number(String(javaObj));
    case 'org.json.JSONArray':
      node = [];
      for (var i = 0, l = javaObj.length(); i < l; i++) {
        node[i] = deserialize(javaObj.get(i));
      }
      break;
    case 'org.json.JSONObject':
      node = {};
      var iterator = javaObj.keys();
      while (iterator.hasNext()) {
        var key = iterator.next();
        node[key] = deserialize(javaObj.get(key));
      }
      break;
    default:
      node = null;
  }
  return node;
}
