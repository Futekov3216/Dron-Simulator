'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = require('babel-helper-vue-jsx-merge-props');

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var visualStates = {
  closed: 'closed',
  opening: 'opening',
  open: 'open',
  closing: 'closing'
};

exports.default = {
  name: 'SuiDropdownMenu',
  mixins: [_lib.SemanticUIVueMixin],
  data: function data() {
    return {
      open: false,
      visualState: visualStates.closed
    };
  },

  computed: {
    animation: function animation() {
      var animation = this.$parent.animation;

      switch (this.visualState) {
        case visualStates.opening:
          return 'animating ' + animation + ' in visible';
        case visualStates.closing:
          return 'animating ' + animation + ' out visible';
        default:
          return '';
      }
    }
  },
  watch: {
    open: function open(newValue) {
      this.visualState = newValue ? visualStates.opening : visualStates.closing;
    }
  },
  mounted: function mounted() {
    var parent = this.$parent;
    while (parent && !this.accordion) {
      if (/^SuiDropdown(WithRequired)?$/.test(parent.$options.name)) {
        this.dropdown = parent;
      }

      parent = parent.$parent;
    }

    if (!this.dropdown) {
      throw new Error('SuiDropdownMenu must be place as a child of a SuiDropdown');
    }
    this.dropdown.register(this);
    this.$el.addEventListener((0, _lib.getEventAnimationEnd)(), this.onAnimationEnded, false);
  },

  methods: {
    onAnimationEnded: function onAnimationEnded() {
      this.visualState = this.open ? visualStates.open : visualStates.closed;
    },
    setOpen: function setOpen(open) {
      this.open = open;
    }
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType();
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([{
        attrs: {
          tabindex: '-1'
        }
      }, this.getChildPropsAndListeners(), {
        'class': this.classes('menu', this.open && 'visible active', 'transition', this.animation)
      }]),
      [this.$slots.default]
    );
  },

  meta: {
    parent: 'SuiDropdown'
  }
};