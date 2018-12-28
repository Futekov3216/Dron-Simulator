'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = require('babel-helper-vue-jsx-merge-props');

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'SuiLoader',
  mixins: [_lib.SemanticUIVueMixin],
  props: {
    active: Boolean,
    content: String,
    indeterminate: Boolean
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType();
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': this.classes('ui', this.indeterminate && 'indeterminate', this.active && 'active', (this.content || this.$slots.default) && 'text', 'loader')
      }]),
      [this.content || this.$slots.default]
    );
  }
};