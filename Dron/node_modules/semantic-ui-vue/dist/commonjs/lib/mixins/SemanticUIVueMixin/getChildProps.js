'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = getChildProps;

var _camelCase = require('lodash/camelCase');

var _camelCase2 = _interopRequireDefault(_camelCase);

var _upperFirst = require('lodash/upperFirst');

var _upperFirst2 = _interopRequireDefault(_upperFirst);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getChildProps() {
  if (!(this.$vnode && this.$vnode.data.attrs)) return {};

  var el = this.getElementType();
  var childProps = void 0;

  if (typeof el === 'string') {
    var components = this.$options.components;
    var camelizedEl = void 0;

    var component = components[el] || components[camelizedEl = (0, _camelCase2.default)(el)] || components[(0, _upperFirst2.default)(camelizedEl)];

    if (!component) return {};

    childProps = component.options.props;
  } else if ((typeof el === 'undefined' ? 'undefined' : (0, _typeof3.default)(el)) === 'object') {
    childProps = el.props;
  } else {
    return {};
  }

  var obj = Object.entries(this.$vnode.data.attrs).filter(function (_ref) {
    var _ref2 = (0, _slicedToArray3.default)(_ref, 1),
        name = _ref2[0];

    return (0, _camelCase2.default)(name) in childProps;
  }).map(function (_ref3) {
    var _ref4 = (0, _slicedToArray3.default)(_ref3, 2),
        name = _ref4[0],
        value = _ref4[1];

    var ccName = (0, _camelCase2.default)(name);
    if (childProps[ccName].type === Boolean) {
      if (value === false) return [ccName, false];
      return [ccName, true];
    }

    return [ccName, value];
  }).reduce(function (acc, _ref5) {
    var _ref6 = (0, _slicedToArray3.default)(_ref5, 2),
        name = _ref6[0],
        value = _ref6[1];

    return (0, _extends4.default)({}, acc, (0, _defineProperty3.default)({}, name, value));
  }, {});

  return obj;
}