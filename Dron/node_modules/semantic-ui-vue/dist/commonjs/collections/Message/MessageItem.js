'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lib = require('../../lib');

exports.default = {
  name: 'SuiMessageItem',
  mixins: [_lib.SemanticUIVueMixin],
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType('li');
    return h(
      ElementType,
      this.getChildPropsAndListeners(),
      [this.$slots.default]
    );
  },

  meta: {
    parent: 'SuiMessage'
  }
};