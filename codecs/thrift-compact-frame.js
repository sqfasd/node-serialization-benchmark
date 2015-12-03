var thrift = require('thrift');
var User = require('../gen-nodejs/user_types').User;

module.exports = {
  init: function() {
  },
  encode: function(obj) {
    var transport = new thrift.TFramedTransport();
    var protocol = new thrift.TCompactProtocol(transport);
    var user = new User(obj);
    user.write(protocol);
    var outBuffers = transport.outBuffers;
    var outCount = transport.outCount;
    var result = new Buffer(outCount);
    var pos = 0;
    outBuffers.forEach(function(buf) {
      buf.copy(result, pos, 0);
      pos += buf.length;
    });
    return result;
  },
  decode: function(data) {
    var transport = new thrift.TFramedTransport(data);
    var protocol = new thrift.TCompactProtocol(transport);
    var user = new User();
    user.read(protocol);
    return user;
  },
};
