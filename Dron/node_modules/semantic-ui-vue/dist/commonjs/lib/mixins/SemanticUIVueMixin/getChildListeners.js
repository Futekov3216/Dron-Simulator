"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

exports.default = getChildProps;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getChildProps() {
  var listeners = (0, _extends3.default)({}, this.$listeners);

  Object.entries(this.$options.events || {}).forEach(function (_ref) {
    var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
        name = _ref2[0],
        custom = _ref2[1].custom;

    if (custom) {
      delete listeners[name];
    }
  });

  return listeners;
}