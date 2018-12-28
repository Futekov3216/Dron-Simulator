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
  name: 'SuiTable',
  mixins: [_lib.SemanticUIVueMixin],
  description: 'A table displays a collections of data grouped into rows.',
  props: {
    basic: (0, _PropTypes.Enum)(['very'], {
      type: Boolean,
      description: 'A table can reduce its complexity to increase readability.'
    }),
    celled: Boolean,
    padded: (0, _PropTypes.Enum)(['very'], {
      type: Boolean
    }),
    collapsing: Boolean,
    compact: (0, _PropTypes.Enum)(['very'], {
      type: Boolean,
      description: 'A table may sometimes need to be more compact to make more rows visible at a time.'
    }),
    definition: Boolean,
    striped: Boolean,
    textAlign: (0, _PropTypes.Enum)(['left', 'right', 'center']),
    fixed: Boolean,
    unstackable: Boolean,
    stackable: Boolean,
    selectable: Boolean,
    inverted: Boolean,
    color: _PropTypes.Enum.Color(),
    size: (0, _PropTypes.Enum)(['small', 'large']),
    singleLine: Boolean,
    columns: _PropTypes.Enum.Number()
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType('table');
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': this.classes('ui', this.textAlign, this.textAlign && 'aligned', this.basic, this.basic && 'basic', this.celled && 'celled', this.padded, this.padded && 'padded', this.collapsing && 'collapsing', this.compact, this.compact && 'compact', this.definition && 'definition', this.striped && 'striped', this.fixed && 'fixed', this.unstackable && 'unstackable', this.stackable && 'tablet stackable', this.selectable && 'selectable', this.inverted && 'inverted', this.color, this.size, this.singleLine && 'single line', this.columns && this.num(this.columns) + ' column', 'table')
      }]),
      [this.$slots.default]
    );
  }
};