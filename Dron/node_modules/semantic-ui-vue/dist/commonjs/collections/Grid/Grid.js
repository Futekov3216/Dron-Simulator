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
  name: 'SuiGrid',
  mixins: [_lib.SemanticUIVueMixin],
  description: 'A grid is used to harmonize negative space in a layout.',
  props: {
    celled: (0, _PropTypes.Enum)(['internally'], {
      type: Boolean,
      description: 'A grid can have rows divided into cells.'
    }),
    centered: {
      type: Boolean,
      description: 'A grid can have its columns centered.'
    },
    columns: _PropTypes.Enum.Number({
      choices: ['equal'],
      description: 'Represents column count per row in Grid.'
    }),
    container: {
      type: Boolean,
      description: 'A grid can be combined with a container to use the available layout and alignment.'
    },
    divided: (0, _PropTypes.Enum)(['vertically'], {
      type: Boolean,
      description: 'A grid can have dividers between its columns.'
    }),
    doubling: {
      type: Boolean,
      description: 'A grid can double its column width on tablet and mobile sizes.'
    },
    padded: (0, _PropTypes.Enum)(['horizontally', 'vertically'], {
      type: Boolean,
      description: 'A grid can preserve its vertical and horizontal gutters on first and last columns.'
    }),
    relaxed: (0, _PropTypes.Enum)(['very'], {
      type: Boolean,
      description: 'A grid can increase its gutters to allow for more negative space.'
    }),
    reversed: (0, _PropTypes.Enum)(['mobile', 'tablet', 'computer'], {
      description: 'A grid can specify that its columns should reverse order at different device types.'
    }),
    stackable: {
      type: Boolean,
      description: 'A grid can have its columns stack on-top of each other after reaching mobile breakpoints.'
    },
    stretched: {
      type: Boolean,
      description: 'A grid can stretch its contents to take up the entire grid height.'
    },
    textAlign: _PropTypes.Enum.TextAlign({
      description: 'A grid can specify its text alignment.'
    }),
    verticalAlign: _PropTypes.Enum.VerticalAlign({
      description: 'A grid can specify its vertical alignment to have all its columns vertically centered.'
    }),
    verticallyReversed: (0, _PropTypes.Enum)(['mobile', 'tablet', 'computer'], {
      description: 'A grid can specify that its rows should reverse order at different device types.'
    })
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType();
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': this.classes('ui', this.reversed && this.reversed + ' reversed', this.verticallyReversed && this.verticallyReversed + ' vertically reversed', this.columns && this.num(this.columns) + ' column', this.stackable && 'stackable', this.stretched && 'stretched', this.doubling && 'doubling', this.padded, this.padded && 'padded', this.verticalAlign, this.verticalAlign && 'aligned', (0, _lib.textAlign)(this.textAlign), this.centered && 'centered', this.divided, this.divided && 'divided', this.celled, this.celled && 'celled', this.relaxed, this.relaxed && 'relaxed', 'grid', this.container && 'container')
      }]),
      [this.$slots.default]
    );
  }
};