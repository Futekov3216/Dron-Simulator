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
  name: 'SuiStatisticsGroup',
  mixins: [_lib.SemanticUIVueMixin],
  props: {
    horizontal: Boolean,
    columns: _PropTypes.Enum.Number()
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType();

    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': this.classes(this.num(this.columns), 'ui', 'statistics', this.horizontal && 'horizontal')
      }]),
      [this.$slots.default]
    );
  },

  meta: {
    parent: 'SuiStatistic'
  }
};