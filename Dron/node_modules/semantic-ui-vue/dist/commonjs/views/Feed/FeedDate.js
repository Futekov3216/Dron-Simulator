'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = require('babel-helper-vue-jsx-merge-props');

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'SuiFeedDate',
  mixins: [_lib.SemanticUIVueMixin],
  description: 'An event or an event summary can contain a date',
  props: {
    content: {
      type: String,
      description: 'Shorthand for primary content'
    }
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType();
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': this.classes('date')
      }]),
      [this.$slots.default || this.content]
    );
  },

  meta: {
    parent: 'SuiFeed'
  }
};