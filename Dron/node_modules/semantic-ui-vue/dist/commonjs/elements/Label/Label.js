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
  name: 'SuiLabel',
  mixins: [_lib.SemanticUIVueMixin],
  props: {
    basic: {
      type: Boolean,
      description: 'A label can reduce its complexity.'
    },
    color: _PropTypes.Enum.Color(),
    image: Boolean,
    pointing: (0, _PropTypes.Enum)(['left', 'right']),
    ribbon: Boolean
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType();
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': this.classes('ui', this.color, this.pointing && this.pointing + ' pointing', this.basic && 'basic', this.image && 'image', this.ribbon && 'ribbon', 'label')
      }]),
      [this.$slots.default]
    );
  }
};