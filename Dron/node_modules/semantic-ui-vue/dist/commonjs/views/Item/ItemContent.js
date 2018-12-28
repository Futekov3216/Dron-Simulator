'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lib = require('../../lib');

var _PropTypes = require('../../lib/PropTypes');

exports.default = {
  name: 'SuiItemContent',
  mixins: [_lib.SemanticUIVueMixin],
  description: 'An item can contain content',
  props: {
    verticalAlign: _PropTypes.Enum.VerticalAlign({
      description: 'Content can specify its vertical alignment'
    })
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType();
    return h(
      ElementType,
      {
        'class': this.classes(this.verticalAlign && this.verticalAlign + ' aligned', 'content')
      },
      [this.$slots.default]
    );
  },

  meta: {
    parent: 'SuiItem'
  }
};