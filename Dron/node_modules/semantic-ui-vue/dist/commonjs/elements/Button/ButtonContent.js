'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = require('babel-helper-vue-jsx-merge-props');

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'SuiButtonContent',
  mixins: [_lib.SemanticUIVueMixin],
  props: {
    visible: {
      type: Boolean,
      description: 'Visible content of button'
    },
    hidden: {
      type: Boolean,
      description: 'Hidden content of button'
    }
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType('div');

    var classList = this.classes(this.visible && 'visible', this.hidden && 'hidden', 'content');

    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': classList
      }]),
      [this.content || this.$slots.default]
    );
  },

  meta: {
    parent: 'SuiButton'
  }
};