'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SemanticUIVueMixin = require('./SemanticUIVueMixin');

Object.keys(_SemanticUIVueMixin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _SemanticUIVueMixin[key];
    }
  });
});

var _classMixin = require('./classMixin');

Object.keys(_classMixin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _classMixin[key];
    }
  });
});