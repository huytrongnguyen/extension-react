'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = exports.HashRouter = exports.Route = exports.Observable = exports.Container = exports.Service = exports.Model = exports.Store = exports.Cache = exports.Ajax = exports.Map = exports.List = exports.String = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
Object.defineProperty(exports, 'Model', {
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

var _observable = require('./mixin/observable');

Object.defineProperty(exports, 'Observable', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_observable).default;
  }
});

var _router = require('./components/router');

Object.defineProperty(exports, 'Route', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_router).default;
  }
});
Object.defineProperty(exports, 'HashRouter', {
  enumerable: true,
  get: function get() {
    return _router.HashRouter;
  }
});
Object.defineProperty(exports, 'Link', {
  enumerable: true,
  get: function get() {
    return _router.Link;
  }
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _ext = require('./core/ext');

var _ext2 = _interopRequireDefault(_ext);

var _list2 = _interopRequireDefault(_list);

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rext = function () {
  function Rext() {
    _classCallCheck(this, Rext);

    this.extend = _ext2.default.extend;
    this.ajax = function (settings) {
      return _ajax2.default.request(settings);
    };
  }

  _createClass(Rext, [{
    key: 'application',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(_ref2) {
        var selector = _ref2.selector,
            viewport = _ref2.viewport,
            launch = _ref2.launch;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!window.location.hash) {
                  window.location.hash = '/';
                }

                _context.next = 3;
                return launch();

              case 3:

                (0, _reactDom.render)(_react2.default.createElement(viewport, {}), _ext2.default.getById(selector));

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function application(_x) {
        return _ref.apply(this, arguments);
      }

      return application;
    }()
  }]);

  return Rext;
}();

exports.default = new Rext();