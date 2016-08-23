//helpers.js
var i18n = require('i18n');
var env = process.env.NODE_ENV || 'development';

module.exports = function() {
  var _helpers = {};
  var tail = '';
  // i18n helper函数 __函数不考虑单复数
  _helpers.__ = function() {
    return i18n.__.apply(this, arguments);
  };
  // i18n helper函数 __n函数考虑单复数
  _helpers.__n = function() {
    return i18n.__n.apply(this, arguments);
  };

  if (env !== 'development') {
    tail = '?v=' + Math.random().toString(36).substr(2);
  }
  _helpers.fileTail = function() {
    return tail;
  };

  _helpers.math = function(lvalue, operator, rvalue) {
    lvalue = parseFloat(lvalue);
    rvalue = parseFloat(rvalue);
    return {
      "+": lvalue + rvalue,
      "-": lvalue - rvalue,
      "*": lvalue * rvalue,
      "/": lvalue / rvalue,
      "%": lvalue % rvalue
    }[operator];
  };

  _helpers.handleName = function(name) {
    return name.substr(0, 1) + name.substr(1).replace(/./g, '*');
  };

  _helpers.ifCond = function(v1, operator, v2, options) {
    switch (operator) {
      case '===':
        return (v1 === v2) ? options.fn(this) : options.inverse(this);
        break;
      case '<':
        return (v1 < v2) ? options.fn(this) : options.inverse(this);
        break;
      case '<=':
        return (v1 <= v2) ? options.fn(this) : options.inverse(this);
        break;
      case '>':
        return (v1 > v2) ? options.fn(this) : options.inverse(this);
        break;
      case '>=':
        return (v1 >= v2) ? options.fn(this) : options.inverse(this);
        break;
      case '!==':
        return (v1 !== v2) ? options.fn(this) : options.inverse(this);
        break;
      default:
        return options.inverse(this)
        break;
    }
    return options.inverse(this);
  };

  _helpers.times = function(n, start, block) {
    var accum = '';
    start = start || 0;
    if (start) {
      for (var i = start; i <= n; ++i) {
        accum += block.fn(i);
      }
    } else {
      for (var i = start; i < n; ++i) {
        accum += block.fn(i);
      }
    }
    return accum;
  };

  _helpers.dateFormat = function(timestamp, type) {
    var fix = type === 'unix' ? 1000 : 1;
    var date = new Date(timestamp * fix);
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  };

  return _helpers;
};
