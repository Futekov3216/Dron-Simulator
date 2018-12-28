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
  name: 'SuiHeader',
  mixins: [_lib.SemanticUIVueMixin],
  props: {
    color: _PropTypes.Enum.Color(),
    content: String,
    dividing: Boolean,
    disabled: Boolean,
    floated: (0, _PropTypes.Enum)(['left', 'right']),
    icon: Boolean,
    image: Boolean,
    size: _PropTypes.Enum.Size(),
    sub: Boolean,
    textAlign: (0, _PropTypes.Enum)(['left', 'right', 'center', 'justify']),
    block: Boolean,
    attached: (0, _PropTypes.Enum)(['top', 'bottom'], {
      type: Boolean
    })
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType();
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': this.classes('ui', this.floated && this.floated + ' floated', (0, _lib.textAlign)(this.textAlign), this.attached, this.attached && 'attached', this.color, this.size, this.block && 'block', this.dividing && 'dividing', this.icon && 'icon', this.image && 'image', this.sub && 'sub', this.disabled && 'disabled', 'header')
      }]),
      [this.$slots.default || this.content]
    );
  }
};