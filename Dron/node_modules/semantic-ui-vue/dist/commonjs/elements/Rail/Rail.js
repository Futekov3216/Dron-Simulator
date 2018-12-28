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
  name: 'SuiRail',
  mixins: [_lib.SemanticUIVueMixin],
  props: {
    attached: Boolean,
    dividing: Boolean,
    internal: Boolean,
    position: (0, _PropTypes.Enum)(['left', 'right'])
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType();
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': this.classes('ui', this.dividing && 'dividing', this.attached && 'attached', this.internal && 'internal', this.position, 'rail')
      }]),
      [this.$slots.default]
    );
  }
};