'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lib = require('../../lib');

exports.default = {
  name: 'SuiItemMeta',
  mixins: [_lib.SemanticUIVueMixin],
  description: 'An item can contain content metadata',
  props: {},
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType();
    return h(
      ElementType,
      {
        'class': this.classes('meta')
      },
      [this.$slots.default]
    );
  },

  meta: {
    parent: 'SuiItem'
  }
};