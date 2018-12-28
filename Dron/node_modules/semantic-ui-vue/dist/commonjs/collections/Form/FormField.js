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
  name: 'SuiFormField',
  mixins: [_lib.SemanticUIVueMixin],
  props: {
    width: _PropTypes.Enum.Number({
      description: 'A field can specify its width in grid columns'
    }),
    inline: {
      type: Boolean,
      description: 'A field can have its label next to instead of above it.'
    },
    required: {
      type: Boolean,
      description: 'A field can show that input is mandatory.'
    },
    disabled: {
      type: Boolean,
      description: 'Individual fields may be disabled.'
    },
    error: {
      type: Boolean,
      description: 'Individual fields may display an error state.'
    }
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType();
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': this.classes(this.width && this.num(this.width) + ' wide', this.inline && 'inline', this.required && 'required', this.disabled && 'disabled', 'field', this.error && 'error')
      }]),
      [this.$slots.default]
    );
  },

  meta: {
    parent: 'SuiForm'
  }
};