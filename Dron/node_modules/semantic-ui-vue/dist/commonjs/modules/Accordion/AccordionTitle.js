'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = require('babel-helper-vue-jsx-merge-props');

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _lib = require('../../lib');

var _mixin = require('./mixin');

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _extends3.default)({
  name: 'SuiAccordionTitle',
  mixins: [_lib.SemanticUIVueMixin]
}, _mixin2.default, {
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType();
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': this.classes('title', this.dataActive && 'active'),
        on: {
          'click': this.toggle
        }
      }]),
      [this.$slots.default]
    );
  }
});