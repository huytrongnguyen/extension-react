'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = exports.Button = exports.Field = exports.Grid = exports.Container = exports.Link = exports.HashRouter = exports.Route = exports.bind = exports.withProps = exports.Observable = exports.Component = exports.Service = exports.Model = exports.Store = exports.Cache = exports.Ajax = exports.Map = exports.List = exports.String = undefined;

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

var _model = require('./data/model');

Object.defineProperty(exports, 'Model', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_model).default;
  }
});

var _service = require('./app/service');

Object.defineProperty(exports, 'Service', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_service).default;
  }
});

var _component = require('./app/component');

Object.defineProperty(exports, 'Component', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_component).default;
  }
});

var _observable = require('./mixin/observable');

Object.defineProperty(exports, 'Observable', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_observable).default;
  }
});

var _withProps = require('./mixin/with-props');

Object.defineProperty(exports, 'withProps', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_withProps).default;
  }
});

var _bind = require('./mixin/bind');

Object.defineProperty(exports, 'bind', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_bind).default;
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

var _container = require('./components/container');

Object.defineProperty(exports, 'Container', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_container).default;
  }
});

var _grid = require('./components/grid');

Object.defineProperty(exports, 'Grid', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_grid).default;
  }
});

var _form = require('./components/form');

Object.defineProperty(exports, 'Field', {
  enumerable: true,
  get: function get() {
    return _form.Field;
  }
});
Object.defineProperty(exports, 'Button', {
  enumerable: true,
  get: function get() {
    return _form.Button;
  }
});
Object.defineProperty(exports, 'Dropdown', {
  enumerable: true,
  get: function get() {
    return _form.Dropdown;
  }
});

require('babel-polyfill');

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
    this.generateSetter = _ext2.default.generateSetter;
  }

  _createClass(Rext, [{
    key: 'launch',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(viewport) {
        var root;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!window.location.hash) {
                  window.location.hash = '/';
                }

                root = _ext2.default.createElement('<div id="react-root"></div>');

                document.body.appendChild(root);
                _context.t0 = _ext2.default.isFunction(viewport);

                if (!_context.t0) {
                  _context.next = 8;
                  break;
                }

                _context.next = 7;
                return viewport();

              case 7:
                viewport = _context.sent;

              case 8:
                (0, _reactDom.render)(viewport, root);

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function launch(_x) {
        return _ref.apply(this, arguments);
      }

      return launch;
    }()
  }]);

  return Rext;
}();

exports.default = new Rext();