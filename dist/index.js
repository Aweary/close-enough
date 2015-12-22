'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = closeEnough;
function closeEnough(primary, secondary) {
  if (typeof primary === 'string' && typeof secondary === 'string') {
    return primary.toLowerCase() === secondary.toLowerCase();
  }
}