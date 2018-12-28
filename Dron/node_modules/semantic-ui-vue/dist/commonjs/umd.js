'use strict';

var _index = require('./index');

var _SemanticUIVue = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function SemanticUIVue() {
  _SemanticUIVue.default.apply(_SemanticUIVue, arguments);
}

Object.keys(_SemanticUIVue).forEach(function (key) {
  SemanticUIVue[key] = _SemanticUIVue[key];
});

module.exports = SemanticUIVue;