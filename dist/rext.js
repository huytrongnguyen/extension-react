'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Observable = exports.Route = exports.Container = exports.Service = exports.Store = exports.Cache = exports.Ajax = exports.Map = exports.List = exports.String = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * index.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This is the entry file for the application, only setup and boilerplate code.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _string = require('./core/string');

Object.defineProperty(exports, 'String', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_string).default;
  }
});

var _list = require('./core/list');

Object.defineProperty(exports, 'List', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_list).default;
  }
});

var _map = require('./core/map');

Object.defineProperty(exports, 'Map', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_map).default;
  }
});

var _ajax = require('./data/ajax');

Object.defineProperty(exports, 'Ajax', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ajax).default;
  }
});

var _cache = require('./data/cache');

Object.defineProperty(exports, 'Cache', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cache).default;
  }
});

var _store = require('./data/store');

Object.defineProperty(exports, 'Store', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_store).default;
  }
});

var _service = require('./app/service');

Object.defineProperty(exports, 'Service', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_service).default;
  }
});

var _container = require('./app/container');

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

var _observable = require('./events/observable');

Object.defineProperty(exports, 'Observable', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_observable).default;
  }
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _ext = require('./core/ext');

var _ext2 = _interopRequireDefault(_ext);

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rext = function () {
  function Rext() {
    _classCallCheck(this, Rext);

    _ext2.default.extend(Rext.prototype, {
      extend: _ext2.default.extend,
      ajax: function ajax(settings) {
        return _ajax2.default.request(settings);
      }
    });
  }

  _createClass(Rext, [{
    key: 'bootstrap',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(_ref2) {
        var selector = _ref2.selector,
            component = _ref2.component,
            onInit = _ref2.onInit;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                window.location.hash = '/';
                _context.next = 3;
                return onInit();

              case 3:
                (0, _reactDom.render)(_react2.default.createElement(component, {}), _ext2.default.getById(selector));

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function bootstrap(_x) {
        return _ref.apply(this, arguments);
      }

      return bootstrap;
    }()
  }]);

  return Rext;
}();

exports.default = new Rext();