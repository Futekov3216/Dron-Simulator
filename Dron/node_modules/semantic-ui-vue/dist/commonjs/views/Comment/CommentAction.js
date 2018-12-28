'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lib = require('../../lib');

exports.default = {
  name: 'SuiCommentAction',
  mixins: [_lib.SemanticUIVueMixin],
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType('a');
    return h(
      ElementType,
      this.getChildPropsAndListeners(),
      [this.$slots.default]
    );
  },

  meta: {
    parent: 'SuiComment'
  }
};