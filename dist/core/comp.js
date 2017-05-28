'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _reactDom = require('react-dom');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _default = function _default(comp) {
  _classCallCheck(this, _default);

  this.comp = (0, _reactDom.findDOMNode)(comp);
};

exports.default = _default;