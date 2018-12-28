'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lib = require('../../lib');

exports.default = {
  name: 'SuiItem',
  mixins: [_lib.SemanticUIVueMixin],
  description: 'An item view presents large collections of site content for display',
  props: {
    href: {
      type: String,
      description: 'Specifies a linked document, resource, or location. Only useful if the ItemGroup contains the "link" class.'
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
        'class': this.classes('item')
      },
      [this.$slots.default]
    );
  }
};