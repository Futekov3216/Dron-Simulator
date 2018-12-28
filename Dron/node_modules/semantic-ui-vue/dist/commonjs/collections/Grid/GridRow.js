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
  name: 'SuiGridRow',
  mixins: [_lib.SemanticUIVueMixin],
  description: 'A row sub-component for Grid',
  props: {
    columns: _PropTypes.Enum.Number({
      description: 'Represents column count per line in Row.'
    }),
    centered: {
      type: Boolean,
      description: 'A row can have its columns centered.'
    },
    only: (0, _PropTypes.Enum)(['mobile', 'tablet', 'computer', 'widescreen', 'large screen'], {
      description: 'A row can appear only for a specific device, or screen sizes.'
    }),
    divided: {
      type: Boolean,
      description: 'A row can have dividers between its columns.'
    },
    color: _PropTypes.Enum.Color({
      description: 'A grid row can be colored.'
    }),
    reversed: (0, _PropTypes.Enum)(['mobile', 'tablet', 'computer'], {
      description: 'A row can specify that its columns should reverse order at different device types.'
    }),
    stretched: {
      type: Boolean,
      description: 'A row can stretch its contents to take up the entire column height.'
    },
    textAlign: _PropTypes.Enum.TextAlign({
      description: 'A row can specify its text alignment.'
    }),
    verticalAlign: _PropTypes.Enum.VerticalAlign({
      description: 'A row can specify its vertical alignment to have all its columns vertically centered.'
    })
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType();
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': this.classes(this.reversed && this.reversed + ' reversed', this.only && this.only + ' only', this.divided && 'divided', (0, _lib.textAlign)(this.textAlign), this.verticalAlign && this.verticalAlign + ' aligned', this.centered && 'centered', this.stretched && 'stretched', this.color, this.columns && this.num(this.columns) + ' column', 'row')
      }]),
      [this.$slots.default]
    );
  },

  meta: {
    parent: 'SuiGrid'
  }
};