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
  name: 'SuiForm',
  mixins: [_lib.SemanticUIVueMixin],
  props: {
    size: _PropTypes.Enum.Size({
      description: 'A form can vary in size.'
    }),
    loading: {
      type: Boolean,
      description: 'If a form is in loading state, it will automatically show a loading indicator.'
    },
    success: {
      type: Boolean,
      description: 'Automatically show any success Message children.'
    },
    warning: {
      type: Boolean,
      description: 'Automatically show any warning Message children.'
    },
    error: {
      type: Boolean,
      description: 'Automatically show any error Message children.'
    },
    state: (0, _PropTypes.Enum)(['success', 'warning', 'error'], {
      description: 'You can set the state of form using one variable'
    }),
    inverted: {
      type: Boolean,
      description: 'A form can have its color inverted for contrast.'
    },
    equalWidth: {
      type: Boolean,
      description: 'Forms can automatically divide fields to be equal width.'
    },
    unstackable: {
      type: Boolean,
      description: 'A form can prevent itself from stacking on mobile.'
    }
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType('form');
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': this.classes('ui', this.unstackable && 'unstackable', this.equalWidth && 'equal width', this.inverted && 'inverted', this.size, this.loading && 'loading', 'form', this.success && 'success', this.warning && 'warning', this.error && 'error', this.state)
      }]),
      [this.$slots.default]
    );
  }
};