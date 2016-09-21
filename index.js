'use strict';

module.exports = function (content, file, settings) {
  var opt = settings || {};
  for (var key in opt) {
    if (key != 'filename') {
      var value = opt[key];
      var reg = new RegExp('(' + key + ')', 'g');
      if (reg.test(content)) {
        content = content.replace(reg, value.toString());
      }
    }
  }
  return content;
};
