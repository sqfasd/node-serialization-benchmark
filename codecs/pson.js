var PSON = require('pson');

var dict = [
  'name1234567',
  'age1234567',
  'sex1234567',
  'msg1234567'
];
var pson = new PSON.ProgressivePair(dict);

module.exports = {
  init: function() {
  },
  encode: function(obj) {
    return pson.encode(obj).buffer;
  },
  decode: function(data) {
    return pson.decode(data);
  },
};

