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
  name: 'SuiTableRow',
  mixins: [_lib.SemanticUIVueMixin],
  props: {
    negative: Boolean,
    positive: Boolean,
    selected: Boolean,
    textAlign: (0, _PropTypes.Enum)(['left', 'right', 'center']),
    warning: Boolean,
    state: _PropTypes.Enum.State(),
    verticalAlign: _PropTypes.Enum.VerticalAlign()
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType('tr');
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': this.classes(this.textAlign && this.textAlign + ' aligned', this.verticalAlign && this.verticalAlign + ' aligned', this.negative && 'negative', this.positive && 'positive', this.selected && 'selected', this.warning && 'warning', this.state) }]),
      [this.$slots.default]
    );
  },

  meta: {
    parent: 'SuiTable'
  }
};