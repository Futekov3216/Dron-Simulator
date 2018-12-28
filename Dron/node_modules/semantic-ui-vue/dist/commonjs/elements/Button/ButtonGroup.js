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
  name: 'SuiButtonGroup',
  mixins: [_lib.SemanticUIVueMixin],
  props: {
    attached: (0, _PropTypes.Enum)(['top', 'bottom']),
    widths: _PropTypes.Enum.Number(),
    vertical: Boolean,
    labeled: Boolean,
    icons: Boolean,
    color: _PropTypes.Enum.Color(),
    basic: Boolean,
    size: _PropTypes.Enum.Size()
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType();
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': this.classes('ui', this.size, this.color, this.attached, this.attached && 'attached', this.num(this.widths), this.vertical && 'vertical', this.labeled && 'labeled', this.icons && 'icon', this.basic && 'basic', 'buttons')
      }]),
      [this.$slots.default]
    );
  },

  meta: {
    parent: 'SuiButton'
  }
};