'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mixins = require('./mixins');

Object.keys(_mixins).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _mixins[key];
    }
  });
});

var _animationHelper = require('./animationHelper');

Object.keys(_animationHelper).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _animationHelper[key];
    }
  });
});

var _textAlign = require('./textAlign');

Object.keys(_textAlign).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _textAlign[key];
    }
  });
});