'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _collections = require('./collections');

Object.keys(_collections).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _collections[key];
    }
  });
});

var _directives = require('./directives');

Object.keys(_directives).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _directives[key];
    }
  });
});

var _elements = require('./elements');

Object.keys(_elements).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _elements[key];
    }
  });
});

var _modules = require('./modules');

Object.keys(_modules).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _modules[key];
    }
  });
});

var _views = require('./views');

Object.keys(_views).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _views[key];
    }
  });
});

var collections = _interopRequireWildcard(_collections);

var directives = _interopRequireWildcard(_directives);

var elements = _interopRequireWildcard(_elements);

var modules = _interopRequireWildcard(_modules);

var views = _interopRequireWildcard(_views);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  Object.values((0, _extends3.default)({}, collections, elements, modules, views)).forEach(function (Comp) {
    return Vue.component(Comp.name, Comp);
  });

  Object.values(directives).forEach(function (directive) {
    return Vue.directive(directive.name, directive);
  });
};