'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDom = require('react-dom');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Component = function () {
  function Component(comp) {
    _classCallCheck(this, Component);

    this.comp = (0, _reactDom.findDOMNode)(comp);
  }

  _createClass(Component, [{
    key: 'parent',
    value: function parent() {
      this.comp = this.comp.parentElement;
      return this;
    }
  }, {
    key: 'width',
    value: function width() {
      return this.comp.clientWidth;
    }
  }, {
    key: 'height',
    value: function height() {
      return this.comp.clientHeight;
    }
  }, {
    key: 'find',
    value: function find(selector) {
      return this.comp.querySelector(selector);
    }
  }]);

  return Component;
}();

exports.default = Component;