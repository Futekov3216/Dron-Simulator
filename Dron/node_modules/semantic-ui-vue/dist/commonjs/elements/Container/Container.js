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
  name: 'SuiContainer',
  mixins: [_lib.SemanticUIVueMixin],
  props: {
    fluid: {
      type: Boolean,
      description: 'Container has no maximum width.'
    },
    text: {
      type: Boolean,
      description: 'Reduce maximum width to more naturally accommodate text.'
    },
    textAlign: _PropTypes.Enum.TextAlign({
      description: 'Align container text.'
    })
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType();
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': this.classes('ui', (0, _lib.textAlign)(this.textAlign), this.text && 'text', this.fluid && 'fluid', 'container')
      }]),
      [this.$slots.default]
    );
  }
};