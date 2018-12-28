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
  name: 'SuiStatistic',
  mixins: [_lib.classMixin, _lib.SemanticUIVueMixin],
  props: {
    horizontal: {
      type: Boolean,
      description: 'Present measurement horizontally'
    },
    color: _PropTypes.Enum.Color(),
    size: _PropTypes.Enum.Size(),
    floated: (0, _PropTypes.Enum)(['left', 'right']),
    inverted: {
      type: Boolean,
      description: 'Should the colors be inverted'
    }
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType();
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': this.classes(this.getUIClass(), 'statistic', this.color, this.size, this.floated && this.floated + ' floated', this.inverted && 'inverted', this.horizontal && 'horizontal')
      }]),
      [this.$slots.default]
    );
  }
};