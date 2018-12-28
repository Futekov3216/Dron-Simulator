'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getEventAnimationEnd = function getEventAnimationEnd() {
  return window && window.webkitAnimationEnd ? 'webkitAnimationEnd' : 'animationend';
};

exports.getEventAnimationEnd = getEventAnimationEnd;