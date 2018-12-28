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
  name: 'SuiFormFields',
  mixins: [_lib.SemanticUIVueMixin],
  props: {
    inline: {
      type: Boolean,
      description: 'Multiple fields may be inline in a row.'
    },
    grouped: {
      type: Boolean,
      description: 'Fields can show related choices.'
    },
    fields: _PropTypes.Enum.Number({
      choices: ['equal'],
      description: 'Represents number of fields in group'
    }),
    unstackable: {
      type: Boolean,
      description: 'A form group can prevent itself from stacking on mobile.'
    }
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType();
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': this.classes(this.unstackable && 'unstackable', this.inline && 'inline', this.grouped && 'grouped', this.num(this.fields), 'fields')
      }]),
      [this.$slots.default]
    );
  },

  meta: {
    parent: 'SuiForm'
  }
};