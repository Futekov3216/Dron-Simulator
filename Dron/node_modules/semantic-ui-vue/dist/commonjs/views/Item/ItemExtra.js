'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lib = require('../../lib');

exports.default = {
  name: 'SuiItemExtra',
  mixins: [_lib.SemanticUIVueMixin],
  description: 'An item can contain extra content meant to be formatted separately from the main content',
  props: {},
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType();
    return h(
      ElementType,
      {
        'class': this.classes('extra')
      },
      [this.$slots.default]
    );
  },

  meta: {
    parent: 'SuiItem'
  }
};