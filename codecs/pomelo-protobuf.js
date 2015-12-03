var pomeloProtobuf = require('pomelo-protobuf');

var template = {
  User: {
    'required string name1234567' : 1,
    'required int32 age1234567' : 2,
    'required int32 sex1234567' : 3,
    'required string msg1234567' : 4
  }
};

var protos = pomeloProtobuf.parse(template);
pomeloProtobuf.init({
  encoderProtos: protos,
  decoderProtos: protos
});

module.exports = {
  init: function() {
  },
  encode: function(obj) {
    return pomeloProtobuf.encode('User', obj);
  },
  decode: function(data) {
    return pomeloProtobuf.decode('User', data);
  },
};
