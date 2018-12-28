'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    active: Boolean
  },
  data: function data() {
    return {
      dataActive: this.active,
      currentIndex: null,
      accordion: null
    };
  },

  methods: {
    setActive: function setActive(value) {
      this.dataActive = value;
    },
    toggle: function toggle() {
      this.accordion.toggleEl(this);
    }
  },
  mounted: function mounted() {
    var parent = this.$parent;
    while (parent && !this.accordion) {
      if (parent.$options.name === 'SuiAccordion') {
        this.accordion = parent;
      }

      parent = parent.$parent;
    }

    if (!this.accordion) {
      throw new Error(this.$options.name + ' must be place as a child of a SuiAccordion');
    }

    this.accordion.register(this);
  },

  watch: {
    active: function active(value) {
      this.dataActive = value;
    }
  },
  meta: {
    parent: 'SuiAccordion'
  }
};