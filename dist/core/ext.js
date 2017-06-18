'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = require('./component');

var _component2 = _interopRequireDefault(_component);

var _string = require('./string');

var _string2 = _interopRequireDefault(_string);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ext = function () {
  function Ext() {
    _classCallCheck(this, Ext);

    this.SCROLL_WIDTH = this.getScrollWidth();
    this.BORDER_WIDTH = 2;
  }

  _createClass(Ext, [{
    key: 'getById',
    value: function getById(id) {
      return document.getElementById(id);
    }
  }, {
    key: 'getComp',
    value: function getComp(comp) {
      return new _component2.default(comp);
    }
  }, {
    key: 'extend',
    value: function extend() {
      return Object.assign.apply(null, arguments); // immutable object
    }
  }, {
    key: 'createElement',
    value: function createElement(html) {
      var div = document.createElement('div');
      div.innerHTML = html;
      return div.children[0];
    }
  }, {
    key: 'isFunction',
    value: function isFunction(value) {
      return !!value && typeof value === 'function';
    }
  }, {
    key: 'isObject',
    value: function isObject(value) {
      return toString.call(value) === '[object Object]';
    }
  }, {
    key: 'isArray',
    value: function isArray(value) {
      return toString.call(value) === '[object Array]';
    }
  }, {
    key: 'isPrimitive',
    value: function isPrimitive(value) {
      var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
      return type === 'string' || type === 'number' || type === 'boolean';
    }
  }, {
    key: 'className',
    value: function className(expression) {
      var cls = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.keys(expression)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key = _step.value;

          if (expression[key]) {
            cls.push(key);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return cls.join(' ');
    }
  }, {
    key: 'generateSetter',
    value: function generateSetter(state, comp) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        var _loop = function _loop() {
          var field = _step2.value;

          comp['set' + _string2.default.capitalize(field)] = function (value) {
            return comp.setState(function () {
              return _defineProperty({}, field, value);
            });
          };
        };

        for (var _iterator2 = Object.keys(state)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: 'getScrollWidth',
    value: function getScrollWidth() {
      var outer = document.createElement("div");
      outer.style.visibility = "hidden";
      outer.style.width = "100px";
      outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

      document.body.appendChild(outer);

      var widthNoScroll = outer.offsetWidth;
      // force scrollbars
      outer.style.overflow = "scroll";

      // add innerdiv
      var inner = document.createElement("div");
      inner.style.width = "100%";
      outer.appendChild(inner);

      var widthWithScroll = inner.offsetWidth;

      // remove divs
      outer.parentNode.removeChild(outer);

      return widthNoScroll - widthWithScroll;
    }
  }]);

  return Ext;
}();

exports.default = new Ext();