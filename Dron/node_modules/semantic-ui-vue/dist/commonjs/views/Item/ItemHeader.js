'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lib = require('../../lib');

exports.default = {
  name: 'SuiItemHeader',
  mixins: [_lib.SemanticUIVueMixin],
  description: 'An item can contain a header',
  props: {
    href: {
      type: String,
      description: 'Specifies a linked document, resource, or location'
    }
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.href ? 'a' : this.getElementType();
    return h(
      ElementType,
      {
        attrs: {
          href: this.href
        },
        'class': this.classes('header')
      },
      [this.$slots.default]
    );
  },

  meta: {
    parent: 'SuiItem'
  }
};