'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Route = exports.Container = exports.Service = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /**
             * index.js
             *
             * This is the entry file for the application, only setup and boilerplate code.
             */

var _service = require('./decorators/service');

Object.defineProperty(exports, 'Service', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_service).default;
  }
});

var _container = require('./decorators/container');

Object.defineProperty(exports, 'Container', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_container).default;
  }
});

var _route = require('./components/route');

Object.defineProperty(exports, 'Route', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_route).default;
  }
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _service2 = _interopRequireDefault(_service);

var _config = require('./common/config');

var _config2 = _interopRequireDefault(_config);

var _xhr = require('./ajax/xhr');

var _xhr2 = _interopRequireDefault(_xhr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rext = (0, _service2.default)(_class = function () {
  function Rext() {
    _classCallCheck(this, Rext);

    this.Config = _config2.default;
  }

  _createClass(Rext, [{
    key: 'bootstrap',
    value: function bootstrap(Component, selector, fn) {
      this.onInit(fn).then(function () {
        (0, _reactDom.render)(_react2.default.createElement(Component, null), selector);
      });
    }
  }, {
    key: 'onInit',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(fn) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fn();

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onInit(_x) {
        return _ref.apply(this, arguments);
      }

      return onInit;
    }()
  }, {
    key: 'ajax',
    value: function ajax(url, method, params) {
      return _xhr2.default.ajax(url, method, params);
    }
  }]);

  return Rext;
}()) || _class;

exports.default = Rext;