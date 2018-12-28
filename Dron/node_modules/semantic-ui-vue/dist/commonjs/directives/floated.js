'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = suiFloated;
var floated = 'floated';
var left = 'left';
var right = 'right';

function suiFloated(el, _ref) {
  var arg = _ref.arg;

  el.classList.remove(left);
  el.classList.remove(right);
  el.classList.remove(floated);
  el.classList.add(arg);
  el.classList.add(floated);
}