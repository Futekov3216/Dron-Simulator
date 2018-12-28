'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.Enum = Enum;

var _uniq = require('lodash/uniq');

var _uniq2 = _interopRequireDefault(_uniq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Enum() {
  var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var type = void 0;
  var choices = [].concat((0, _toConsumableArray3.default)(values));

  if (Array.isArray(obj.choices)) {
    choices.push.apply(choices, (0, _toConsumableArray3.default)(obj.choices));
  }

  var types = (0, _uniq2.default)(values.map(function (value) {
    return value.constructor;
  }));

  if (obj.type) {
    if (Array.isArray(obj.type)) {
      if (obj.type.includes(Boolean)) choices.unshift(true);
      type = (0, _uniq2.default)([].concat((0, _toConsumableArray3.default)(obj.type), (0, _toConsumableArray3.default)(types)));
    } else {
      if (obj.type === Boolean) choices.unshift(true);
      type = (0, _uniq2.default)([obj.type].concat((0, _toConsumableArray3.default)(types)));
    }
  } else {
    type = types.length === 1 ? types[0] : types;
  }

  return (0, _extends3.default)({}, obj, {
    choices: choices,
    type: type,
    validator: function validator(value) {
      return !types.includes(value.constructor) || choices.includes(value);
    }
  });
}

Object.defineProperty(Enum, 'Extend', {
  value: function value(values) {
    return function () {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return Enum(values, obj);
    };
  }
});

Enum.State = Enum.Extend(['active', 'disabled', 'error', 'warning', 'success']);
Enum.Size = Enum.Extend(['mini', 'tiny', 'small', 'standard', 'medium', 'large', 'big', 'huge', 'massive']);
Enum.Color = Enum.Extend(['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black']);
Enum.Attached = Enum.Extend(['top', 'bottom']);
Enum.TextAlign = Enum.Extend(['left', 'right', 'center', 'justify']);
Enum.VerticalAlign = Enum.Extend(['top', 'middle', 'bottom']);
Enum.Social = Enum.Extend(['facebook', 'twitter', 'google', 'google plus', 'vk', 'instagram', 'linkedin', 'youtube']);
Enum.Number = Enum.Extend([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen']);