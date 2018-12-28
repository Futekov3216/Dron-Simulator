'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var classes = exports.classes = function classes() {
  for (var _len = arguments.length, classList = Array(_len), _key = 0; _key < _len; _key++) {
    classList[_key] = arguments[_key];
  }

  return classList.filter(function (c) {
    return c && c !== true;
  }).join(' ');
};

var numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen'];
var num = exports.num = function num(i) {
  return typeof i === 'number' ? numbers[i - 1] : i;
};