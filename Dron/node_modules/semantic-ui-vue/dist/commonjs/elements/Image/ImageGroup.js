'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lib = require('../../lib');

var _PropTypes = require('../../lib/PropTypes');

exports.default = {
  name: 'SuiImageGroup',
  mixins: [_lib.SemanticUIVueMixin],
  props: {
    size: _PropTypes.Enum.Size()
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType('div');

    return h(
      ElementType,
      { 'class': this.classes('ui', this.size, 'images') },
      [this.$slots.default]
    );
  },

  meta: {
    parent: 'SuiImage'
  }
};