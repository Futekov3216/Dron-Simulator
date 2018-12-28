'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SemanticUIVueMixin = undefined;

var _getChildProps = require('./getChildProps');

var _getChildProps2 = _interopRequireDefault(_getChildProps);

var _getChildListeners = require('./getChildListeners');

var _getChildListeners2 = _interopRequireDefault(_getChildListeners);

var _getElementType = require('./getElementType');

var _getElementType2 = _interopRequireDefault(_getElementType);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SemanticUIVueMixin = exports.SemanticUIVueMixin = {
  methods: {
    num: _utils.num,
    classes: _utils.classes,
    getElementType: _getElementType2.default,
    getChildProps: _getChildProps2.default,
    getChildListeners: _getChildListeners2.default,
    getChildPropsAndListeners: function getChildPropsAndListeners() {
      var props = this.getChildProps();
      var listeners = this.getChildListeners();
      return {
        props: props,
        attrs: props,
        on: listeners
      };
    }
  }
};