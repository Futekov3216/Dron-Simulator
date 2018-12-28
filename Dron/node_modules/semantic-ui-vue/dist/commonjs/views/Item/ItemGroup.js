'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lib = require('../../lib');

var _PropTypes = require('../../lib/PropTypes');

exports.default = {
  name: 'SuiItemGroup',
  mixins: [_lib.SemanticUIVueMixin],
  description: 'A group of items',
  props: {
    unstackable: {
      type: Boolean,
      description: 'A table can specify how it stacks items responsively'
    },
    divided: {
      type: Boolean,
      description: 'Items can be divided to better distinguish between grouped content'
    },
    relaxed: (0, _PropTypes.Enum)(['very'], {
      type: Boolean,
      description: 'A group of items can relax its padding to provide more negative space'
    }),
    link: {
      type: Boolean,
      description: 'An item can be formatted so that the entire contents link to another page'
    }
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType();
    return h(
      ElementType,
      {
        'class': this.classes('ui', this.unstackable && 'unstackable', this.divided && 'divided', this.relaxed, this.relaxed && 'relaxed', this.link && 'link', 'items')
      },
      [this.$slots.default]
    );
  },

  meta: {
    parent: 'SuiItem'
  }
};