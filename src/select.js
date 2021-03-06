// Copyright 2015 JC Fisher
import isarray from './isarray'
import reduce from './reduce'

// SELECT fields from object
export default function select(fields, body) {
  // non-json
  if (!body || 'object' != typeof body) return;

  // check for fields
  if (!fields) return;

  // split
  if ('string' == typeof fields) fields = fields.split(/ *, */);

  // fields array
  if (isarray(body)) {
    return body.map(function(obj){
      return reduce( fields, function(ret, key){
        ret[key] = obj[key];
        return ret;
      }, {});
    });

    return;
  }

  // fields object
  return reduce( fields, function(ret, key){
    ret[key] = body[key];
    return ret;
  }, {});
}
