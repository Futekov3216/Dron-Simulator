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
  name: 'SuiGridColumn',
  mixins: [_lib.SemanticUIVueMixin],
  description: 'A column sub-component for Grid.',
  props: {
    color: _PropTypes.Enum.Color({
      description: 'A grid column can be colored.'
    }),
    centered: Boolean,
    width: _PropTypes.Enum.Number({
      description: 'Represents width of column.'
    }),
    mobile: _PropTypes.Enum.Number({
      description: 'A column can specify a width for a mobile device.'
    }),
    tablet: _PropTypes.Enum.Number({
      description: 'A column can specify a width for a tablet device.'
    }),
    computer: _PropTypes.Enum.Number({
      description: 'A column can specify a width for a computer.'
    }),
    largeScreen: _PropTypes.Enum.Number({
      description: 'A column can specify a width for a large screen device.'
    }),
    widescreen: _PropTypes.Enum.Number({
      description: 'A column can specify a width for a widescreen device.'
    }),
    floated: (0, _PropTypes.Enum)(['left', 'right'], {
      description: 'A column can sit flush against the left or right edge of a row.'
    }),
    textAlign: _PropTypes.Enum.TextAlign({
      description: 'A column can specify its text alignment.'
    }),
    verticalAlign: _PropTypes.Enum.VerticalAlign({
      description: 'A column can specify its vertical alignment to have all its columns vertically centered.'
    }),
    only: (0, _PropTypes.Enum)(['mobile', 'tablet', 'computer', 'widescreen', 'large screen'], {
      description: 'A column can appear only for a specific device, or screen sizes.'
    }),
    stretched: {
      type: Boolean,
      description: 'A column can stretch its contents to take up the entire grid or row height.'
    }
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType();
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': this.classes(this.floated && this.floated + ' floated', (0, _lib.textAlign)(this.textAlign), this.verticalAlign && this.verticalAlign + ' aligned', this.width && this.num(this.width) + ' wide', this.mobile && this.num(this.mobile) + ' wide mobile', this.tablet && this.num(this.tablet) + ' wide tablet', this.computer && this.num(this.computer) + ' wide computer', this.widescreen && this.num(this.widescreen) + ' wide widescreen', this.largeScreen && this.num(this.largeScreen) + ' wide large screen', this.only && this.only + ' only', this.centered && 'centered', this.stretched && 'stretched', this.color, 'column')
      }]),
      [this.$slots.default]
    );
  },

  meta: {
    parent: 'SuiGrid'
  }
};