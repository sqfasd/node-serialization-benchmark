module.exports = {
  init: function() {
  },
  encode: function(obj) {
    return JSON.stringify(obj);
  },
  decode: function(data) {
    return JSON.parse(data);
  },
};
