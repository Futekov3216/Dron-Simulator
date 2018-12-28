'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _lib = require('../../lib');

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _extends3.default)({}, _Icon2.default, {
  name: 'SuiListIcon',
  mixins: [_lib.SemanticUIVueMixin],
  meta: {
    parent: 'SuiList'
  }
});