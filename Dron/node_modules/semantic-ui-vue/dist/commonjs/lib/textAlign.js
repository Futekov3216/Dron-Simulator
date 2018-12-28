'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textAlign = textAlign;
function textAlign(align) {
  return align && (align === 'justify' ? 'justified' : align + ' aligned');
}