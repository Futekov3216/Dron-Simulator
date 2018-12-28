'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = require('babel-helper-vue-jsx-merge-props');

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'SuiModalContent',
  mixins: [_lib.SemanticUIVueMixin],
  props: {
    image: Boolean,
    scrolling: {
      type: Boolean,
      default: false,
      description: 'A modal can use the entire size of the screen.'
    }
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType();
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': this.classes('content', this.image && 'image', this.scrolling && 'scrolling')
      }]),
      [this.$slots.default]
    );
  },

  meta: {
    parent: 'SuiModal'
  }
};