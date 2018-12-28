'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = require('babel-helper-vue-jsx-merge-props');

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _lib = require('../../lib');

var _PropTypes = require('../../lib/PropTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'SuiSegment',
  mixins: [_lib.SemanticUIVueMixin],
  props: {
    attached: _PropTypes.Enum.Attached({
      type: Boolean,
      description: 'Attach segment to other content, like a header.'
    }),
    basic: Boolean,
    inverted: Boolean,
    padded: Boolean,
    piled: Boolean,
    raised: Boolean,
    stacked: (0, _PropTypes.Enum)(['tall'], {
      type: Boolean
    }),
    vertical: Boolean
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType();
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': this.classes('ui', this.attached && 'attached', this.basic && 'basic', this.padded && 'padded', this.inverted && 'inverted', this.stacked, this.stacked && 'stacked', this.piled && 'piled', this.raised && 'raised', this.vertical && 'vertical', 'segment')
      }]),
      [this.$slots.default]
    );
  }
};