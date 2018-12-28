'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lib = require('../../lib');

exports.default = {
  name: 'SuiItemDescription',
  mixins: [_lib.SemanticUIVueMixin],
  description: 'An item can contain a description with a single or multiple paragraphs',
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType();
    return h(
      ElementType,
      {
        'class': this.classes('description')
      },
      [this.$slots.default]
    );
  },

  meta: {
    parent: 'SuiItem'
  }
};