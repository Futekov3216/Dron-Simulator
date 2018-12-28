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
  name: 'SuiSidebar',
  mixins: [_lib.SemanticUIVueMixin],
  props: {
    animation: (0, _PropTypes.Enum)(['overlay', 'push', 'scale down', 'uncover', 'slide out', 'slide along']),
    direction: (0, _PropTypes.Enum)(['top', 'right', 'bottom', 'left'], { default: 'left' }),
    visible: Boolean,
    width: (0, _PropTypes.Enum)(['very thin', 'thin', 'wide', 'very wide'])
  },
  data: function data() {
    return {
      animating: false
    };
  },

  watch: {
    visible: function visible() {
      var _this = this;

      this.animating = true;
      setTimeout(function () {
        _this.animating = false;
      }, 500);
    }
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType();

    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': 'ui sidebar vertical menu ' + this.direction + ' ' + (this.animation || '') + (this.visible ? ' visible' : '') + (this.animating ? ' animating' : '')
      }]),
      [this.$slots.default]
    );
  }
};