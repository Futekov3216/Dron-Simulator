'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var classMixin = exports.classMixin = {
  methods: {
    getUIClass: function getUIClass() {
      var ownName = this.constructor.options && this.constructor.options.name;
      var parentName = this.$parent && this.$parent.constructor.options && this.$parent.constructor.options.name;
      var inGroup = ownName && parentName && parentName.match(new RegExp('^' + ownName + '.*Group$'));
      return inGroup ? '' : 'ui';
    }
  }
};