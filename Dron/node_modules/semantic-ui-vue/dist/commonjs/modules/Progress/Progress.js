'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = require('babel-helper-vue-jsx-merge-props');

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _PropTypes = require('../../lib/PropTypes');

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'SuiProgress',
  mixins: [_lib.SemanticUIVueMixin],
  props: {
    label: String,
    content: String,
    top: Boolean,
    bottom: Boolean,
    attached: Boolean,
    inverted: Boolean,
    progress: Boolean,
    indicating: Boolean,
    indeterminate: Boolean,
    size: _PropTypes.Enum.Size(),
    color: _PropTypes.Enum.Color(),
    state: _PropTypes.Enum.State(),
    percent: {
      type: [Number, String],
      default: 50,
      validator: function validator(value) {
        return value >= 0 && value <= 100;
      }
    }
  },
  computed: {
    percentString: function percentString() {
      return this.percent + '%';
    }
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType();
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': this.classes('ui', 'progress', this.state, this.color, this.size, this.top && 'top', this.bottom && 'bottom', this.inverted && 'inverted', this.attached && 'attached', this.indicating && 'indicating', this.indeterminate && 'indeterminate'),
        attrs: { 'data-percent': this.percent
        }
      }]),
      [h(
        'div',
        {
          'class': 'bar',
          style: {
            width: this.percentString,
            'transition-duration': '300ms'
          } },
        [this.progress && h(
          'div',
          { 'class': 'progress' },
          [' ', this.percentString, ' ']
        )]
      ), this.label && h(
        'div',
        { 'class': 'label' },
        [this.label]
      )]
    );
  }
};