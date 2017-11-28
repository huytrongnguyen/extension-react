(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rext = require('../../../src/rext');

var _rext2 = _interopRequireDefault(_rext);

var _viewport = require('./components/viewport/viewport');

var _viewport2 = _interopRequireDefault(_viewport);

require('./components/getting-started/getting-started');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import RextComponent from './components/core-concepts/component';
// import DataPackage from './components/core-concepts/data-package';
// import ScreenNavigation from './components/core-concepts/screen-navigation';
// import Architecture from './components/architecture/architecture';
// import GridComponent from './components/ui-components/grid';

_rext2.default.launch(_react2.default.createElement(_viewport2.default, null));

},{"../../../src/rext":26,"./components/getting-started/getting-started":2,"./components/viewport/viewport":3,"babel-polyfill":"babel-polyfill","react":"react"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rext = require('../../../../../src/rext');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GettingStarted = (_dec = (0, _rext.Route)('/'), _dec(_class = function (_PureComponent) {
  _inherits(GettingStarted, _PureComponent);

  function GettingStarted() {
    _classCallCheck(this, GettingStarted);

    return _possibleConstructorReturn(this, (GettingStarted.__proto__ || Object.getPrototypeOf(GettingStarted)).apply(this, arguments));
  }

  _createClass(GettingStarted, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _rext.Container,
        null,
        _react2.default.createElement(
          'div',
          { className: 'panel-header' },
          _react2.default.createElement(
            'h1',
            { className: 'panel-title' },
            'Getting Started'
          )
        ),
        _react2.default.createElement(
          _rext.Container,
          { className: 'panel-body' },
          _react2.default.createElement(
            'p',
            null,
            'Extension React is a library that build on top of React, helping you build data-intensive, cross-platform web apps for desktops, tablets, and smartphones.'
          ),
          _react2.default.createElement(
            'h2',
            null,
            'Quick Start'
          ),
          _react2.default.createElement(
            'h3',
            null,
            '1. Setup a development enviroment'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Use ',
            _react2.default.createElement(
              'code',
              null,
              'npm'
            ),
            ' or ',
            _react2.default.createElement(
              'code',
              null,
              'yarn'
            ),
            ' to install following dependencies:',
            _react2.default.createElement(
              'ul',
              { className: 'list-style-disc' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'pre',
                  null,
                  'babel-polyfill'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'pre',
                  null,
                  'babel-preset-env'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'pre',
                  null,
                  'babel-preset-react'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'pre',
                  null,
                  'd3'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'pre',
                  null,
                  'font-awesome'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'pre',
                  null,
                  'react'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'pre',
                  null,
                  'ext-react'
                )
              )
            )
          ),
          _react2.default.createElement(
            'h3',
            null,
            '2. Create a new project'
          ),
          _react2.default.createElement(
            'p',
            null,
            'The following is the recommended directory structure for an Extension React application:',
            _react2.default.createElement(
              'pre',
              { className: 'editor' },
              '+-- node_modules: NPM components',
              _react2.default.createElement('br', null),
              '+-- dist',
              _react2.default.createElement('br', null),
              '|   +-- app.min.css',
              _react2.default.createElement('br', null),
              '|   +-- app.min.js',
              _react2.default.createElement('br', null),
              '|   +-- framework.min.js',
              _react2.default.createElement('br', null),
              '+-- src',
              _react2.default.createElement('br', null),
              '|   +-- css',
              _react2.default.createElement('br', null),
              '|   |   +-- _variables.scss: application styles constant values',
              _react2.default.createElement('br', null),
              '|   |   +-- app.scss: application styles',
              _react2.default.createElement('br', null),
              '|   +-- js',
              _react2.default.createElement('br', null),
              '|   |   +-- common: code of shared functions or shared components',
              _react2.default.createElement('br', null),
              '|   |   +-- components: code (scripts and views) of every feature should be a sub-directory',
              _react2.default.createElement('br', null),
              '|   |   +-- services: code of services',
              _react2.default.createElement('br', null),
              '|   |   +-- stores: code of stores',
              _react2.default.createElement('br', null),
              '|   |   +-- app.js: main script',
              _react2.default.createElement('br', null),
              '+-- gulpfile.babel.js: build scripts (or webpack.config.js if you prefer)',
              _react2.default.createElement('br', null),
              '+-- index.html',
              _react2.default.createElement('br', null),
              '+-- package.json: NPM package definition',
              _react2.default.createElement('br', null),
              '+-- server.js: code of local web server (ExpressJS)',
              _react2.default.createElement('br', null)
            ),
            'Let\u2019s start evaluating the application by looking at ',
            _react2.default.createElement(
              'code',
              null,
              'index.html'
            ),
            _react2.default.createElement(
              'pre',
              { className: 'editor' },
              '<!-- index.html -->\n<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8" />\n  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n  <title>Extension React Application</title>\n  <link href="/node-modules/ext-react/css/rext.min.css" rel="stylesheet" />\n  <link href="/dist/app.min.css" rel="stylesheet" />\n</head>\n<body>\n  <script src="/dist/framework.min.js"></script>\n  <script src="/dist/app.min.js"></script>\n</body>\n</html>'
            ),
            'To launch your app, add the following to your ',
            _react2.default.createElement(
              'code',
              null,
              'app.js'
            ),
            ' file',
            _react2.default.createElement(
              'pre',
              { className: 'editor' },
              '// app.js\nimport \'babel-polyfill\';\nimport React from \'react\';\nimport Rext from \'ext-react\';\nimport Viewport from \'./components/viewport/viewport\';\n\nRext.launch(<Viewport />);'
            )
          )
        )
      );
    }
  }]);

  return GettingStarted;
}(_react.PureComponent)) || _class);
exports.default = GettingStarted;

},{"../../../../../src/rext":26,"react":"react"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rext = require('../../../../../src/rext');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Viewport = function (_PureComponent) {
  _inherits(Viewport, _PureComponent);

  function Viewport() {
    _classCallCheck(this, Viewport);

    return _possibleConstructorReturn(this, (Viewport.__proto__ || Object.getPrototypeOf(Viewport)).apply(this, arguments));
  }

  _createClass(Viewport, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _rext.Container,
        null,
        _react2.default.createElement(
          'header',
          null,
          _react2.default.createElement(
            'div',
            { className: 'brand' },
            'Extension React'
          ),
          _react2.default.createElement(
            'div',
            { className: 'navbar' },
            _react2.default.createElement('ul', { className: 'navbar-nav mr-auto' })
          )
        ),
        _react2.default.createElement(
          _rext.Container,
          { layout: 'column' },
          _react2.default.createElement(
            'aside',
            { style: { width: 300 } },
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(_rext.Link, { to: '/', text: 'GETTING STARTED' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'nav-text' },
                  'CORE CONCEPTS'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(_rext.Link, { to: '/core-concepts/component', text: 'Component' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(_rext.Link, { to: '/core-concepts/data-package', text: 'Data Package' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(_rext.Link, { to: '/core-concepts/screen-navigation', text: 'Screen Navigation' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(_rext.Link, { to: '/architecture', text: 'ARCHITECTURE' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'nav-text' },
                  'UI COMPONENTS'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(_rext.Link, { to: '/ui-components/grids', text: 'Grids' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'nav-text' },
                  'API'
                )
              )
            )
          ),
          _react2.default.createElement(
            _rext.Container,
            { id: 'main-container' },
            _react2.default.createElement(_rext.HashRouter, null)
          )
        ),
        _react2.default.createElement(
          'footer',
          null,
          _react2.default.createElement(
            'div',
            { className: 'row text-center' },
            '\xA9 2017 huytrongnguyen'
          )
        )
      );
    }
  }]);

  return Viewport;
}(_react.PureComponent);

exports.default = Viewport;

},{"../../../../../src/rext":26,"react":"react"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

var _list = require('../core/list');

var _list2 = _interopRequireDefault(_list);

var _dictionary = require('../core/dictionary');

var _dictionary2 = _interopRequireDefault(_dictionary);

var _observable = require('../reactive/observable');

var _observable2 = _interopRequireDefault(_observable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (config) {
  return function (Controller) {
    var WrappedComponent = config.view;
    return function (_PureComponent) {
      _inherits(HocComponent, _PureComponent);

      function HocComponent(props) {
        _classCallCheck(this, HocComponent);

        var _this = _possibleConstructorReturn(this, (HocComponent.__proto__ || Object.getPrototypeOf(HocComponent)).call(this, props));

        _ext2.default.initialState(_this, _defineProperty({
          stores: {},
          services: {}
        }, config.componentAs || '$view', new Controller(props)));
        _this.onDataChanged = function () {
          return _this.forceUpdate();
        };
        return _this;
      }

      _createClass(HocComponent, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
          var _this2 = this;

          this.setStores((0, _list2.default)(config.stores).reduce(function (stores, store) {
            store.subscribe(_this2.onDataChange);
            stores[store.storeId] = store;
            return stores;
          }, {}));

          this.setServices((0, _list2.default)(config.services).reduce(function (services, service) {
            services[service.serviceId] = service;
            return services;
          }, {}));
        }
      }, {
        key: 'componentDidMount',
        value: function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var stores, storeId, store;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    stores = this.state.stores;
                    _context.t0 = regeneratorRuntime.keys(stores);

                  case 2:
                    if ((_context.t1 = _context.t0()).done) {
                      _context.next = 11;
                      break;
                    }

                    storeId = _context.t1.value;
                    store = stores[storeId];
                    _context.t2 = store.autoLoad;

                    if (!_context.t2) {
                      _context.next = 9;
                      break;
                    }

                    _context.next = 9;
                    return store.load();

                  case 9:
                    _context.next = 2;
                    break;

                  case 11:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function componentDidMount() {
            return _ref.apply(this, arguments);
          }

          return componentDidMount;
        }()
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          var _this3 = this;

          (0, _dictionary2.default)(this.state.stores).each(function (storeId, store) {
            store.unsubscribe(_this3.onDataChanged);
            store.clearData(true);
          });
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(WrappedComponent, _extends({}, this.state, this.props));
        }
      }]);

      return HocComponent;
    }(_react.PureComponent);
  };
};

},{"../core/dictionary":10,"../core/ext":12,"../core/list":13,"../reactive/observable":23,"react":"react"}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (clazz) {
  var service = new clazz();
  service.serviceId = clazz.name;
  return service;
};

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.Container = Container;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var LAYOUT_CLASS = {
  'column': 'flex-row',
  'row': 'flex-column',
  'fit': ''
};

function Container(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      _ref$layout = _ref.layout,
      layout = _ref$layout === undefined ? 'row' : _ref$layout,
      children = _ref.children,
      others = _objectWithoutProperties(_ref, ['className', 'layout', 'children']);

  return _react2.default.createElement(
    'section',
    _extends({ className: _ext2.default.className('d-flex', LAYOUT_CLASS[layout], className) }, others),
    children
  );
}

},{"../core/ext":12,"react":"react"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgBox = exports.Toast = exports.Dialog = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _desc, _value, _class;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

var _container = require('./container');

var _container2 = _interopRequireDefault(_container);

var _form = require('./form');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DialogManager = function () {
  function DialogManager() {
    _classCallCheck(this, DialogManager);
  }

  _createClass(DialogManager, [{
    key: 'show',
    value: function show(dialog) {
      var dom = _ext2.default.append('<div class="mask"></div>');
      (0, _reactDom.render)(dialog, dom);
    }
  }, {
    key: 'toast',
    value: function toast(_ref) {
      var _ref$delay = _ref.delay,
          delay = _ref$delay === undefined ? 3000 : _ref$delay,
          others = _objectWithoutProperties(_ref, ['delay']);

      var dom = _ext2.default.append('<div class="notification"></div>');
      (0, _reactDom.render)(_react2.default.createElement(Toast, others), dom);
      window.setTimeout(function () {
        DialogManager.destroy(dom);
      }, delay);
    }
  }, {
    key: 'msgbox',
    value: function msgbox(_ref2) {
      var others = _objectWithoutProperties(_ref2, []);

      var dom = _ext2.default.append('<div class="mask"></div>');
      (0, _reactDom.render)(_react2.default.createElement(MsgBox, others), dom);
    }
  }, {
    key: 'dispose',
    value: function dispose(dialogId) {
      this.destroy(_ext2.default.getById(dialogId).parentElement);
    }
  }, {
    key: 'destroy',
    value: function destroy(dom) {
      (0, _reactDom.unmountComponentAtNode)(parent);
      document.body.removeChild(parent);
    }
  }, {
    key: 'showErrorMsgbox',
    value: function showErrorMsgbox(message) {
      this.msgbox({
        title: 'Error',
        icon: 'times',
        message: message
      });
    }
  }]);

  return DialogManager;
}();

exports.default = new DialogManager();
var Dialog = exports.Dialog = (_class = function (_Component) {
  _inherits(Dialog, _Component);

  function Dialog(props) {
    _classCallCheck(this, Dialog);

    return _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this, props));
  }

  _createClass(Dialog, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          className = _props.className,
          children = _props.children,
          _props$closeButton = _props.closeButton,
          closeButton = _props$closeButton === undefined ? true : _props$closeButton,
          others = _objectWithoutProperties(_props, ['title', 'className', 'children', 'closeButton']);

      return _react2.default.createElement(
        _container2.default,
        _extends({ className: 'dialog ' + (className || '') }, others),
        _react2.default.createElement(
          'div',
          { className: 'dialog-header' },
          _react2.default.createElement(
            'p',
            { className: 'dialog-title text-sm-center' },
            title || ''
          ),
          closeButton && _react2.default.createElement('span', { className: 'tool', onClick: this.dispose })
        ),
        _react2.default.createElement(
          _container2.default,
          { className: 'dialog-body' },
          _react2.default.createElement(
            _container2.default,
            null,
            children
          )
        )
      );
    }
  }, {
    key: 'dispose',
    value: function dispose() {
      var onClose = this.props.onClose,
          parent = _ext2.default.getComp(this).parent();

      onClose && onClose();
      DialogManager.destroy(parent);
    }
  }]);

  return Dialog;
}(_react.Component), (_applyDecoratedDescriptor(_class.prototype, 'dispose', [_ext.bind], Object.getOwnPropertyDescriptor(_class.prototype, 'dispose'), _class.prototype)), _class);


var alert = {
  success: {
    title: 'Success',
    icon: 'check'
  },
  error: {
    title: 'Error',
    icon: 'times'
  },
  warning: {
    title: 'Warning',
    icon: 'exclamation'
  },
  info: {
    title: 'Information',
    icon: 'info'
  }
};

var Toast = exports.Toast = function (_Component2) {
  _inherits(Toast, _Component2);

  function Toast(props) {
    _classCallCheck(this, Toast);

    var _this2 = _possibleConstructorReturn(this, (Toast.__proto__ || Object.getPrototypeOf(Toast)).call(this, props));

    _this2.dispose = _this2.dispose.bind(_this2);
    return _this2;
  }

  _createClass(Toast, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          type = _props2.type,
          message = _props2.message;

      return _react2.default.createElement(
        _container2.default,
        null,
        _react2.default.createElement(
          'h6',
          { className: 'font-weight-bold' },
          alert[type].title
        ),
        _react2.default.createElement(
          'div',
          { className: 'd-flex flex-row' },
          _react2.default.createElement(
            'div',
            { className: 'toast-icon' },
            _react2.default.createElement('i', { className: 'fa fa-2x fa-' + alert[type].icon + '-circle' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'toast-content' },
            message
          )
        )
      );
    }
  }, {
    key: 'dispose',
    value: function dispose() {
      DialogManager.destroy(_ext2.default.getComp(this).parent());
    }
  }]);

  return Toast;
}(_react.Component);

var MsgBox = exports.MsgBox = function (_Component3) {
  _inherits(MsgBox, _Component3);

  function MsgBox() {
    _classCallCheck(this, MsgBox);

    return _possibleConstructorReturn(this, (MsgBox.__proto__ || Object.getPrototypeOf(MsgBox)).apply(this, arguments));
  }

  _createClass(MsgBox, [{
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props3 = this.props,
          title = _props3.title,
          icon = _props3.icon,
          _props3$closeButton = _props3.closeButton,
          closeButton = _props3$closeButton === undefined ? true : _props3$closeButton,
          message = _props3.message,
          _props3$buttons = _props3.buttons,
          buttons = _props3$buttons === undefined ? 'OK' : _props3$buttons,
          _props3$buttonText = _props3.buttonText,
          buttonText = _props3$buttonText === undefined ? {} : _props3$buttonText,
          fn = _props3.fn;

      return _react2.default.createElement(
        Dialog,
        { title: title, closeButton: closeButton },
        !icon && _react2.default.createElement(
          'div',
          { className: 'd-flex flex-row' },
          message
        ),
        icon && _react2.default.createElement(
          'div',
          { className: 'd-flex flex-row' },
          _react2.default.createElement(
            'div',
            { className: 'toast-icon mr-sm' },
            _react2.default.createElement('i', { className: 'fa fa-2x fa-' + icon + '-circle' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'toast-content' },
            message
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'text-sm-center mt-sm' },
          buttons === 'OKCANCEL' && _react2.default.createElement(_form.Button, { className: 'mr-sm', text: buttonText.cancel || 'Cancel', onClick: function onClick() {
              return _this4.dispose();
            } }),
          _react2.default.createElement(_form.Button, { text: buttonText.ok || 'OK', onClick: function onClick() {
              _this4.dispose();fn && fn();
            } })
        )
      );
    }
  }, {
    key: 'dispose',
    value: function dispose() {
      DialogManager.destroy(_ext2.default.getComp(this).parent());
    }
  }]);

  return MsgBox;
}(_react.Component);

},{"../core/ext":12,"./container":6,"./form":8,"react":"react","react-dom":"react-dom"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.Button = Button;
exports.BtnLink = BtnLink;
exports.Field = Field;
exports.TextField = TextField;
exports.Checkbox = Checkbox;
exports.TextArea = TextArea;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Button(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      text = _ref.text,
      children = _ref.children,
      others = _objectWithoutProperties(_ref, ['className', 'text', 'children']);

  return _react2.default.createElement(
    'button',
    _extends({ type: 'button', className: _ext2.default.className('btn', className) }, others),
    text || children
  );
}

function BtnLink(_ref2) {
  var text = _ref2.text,
      children = _ref2.children,
      others = _objectWithoutProperties(_ref2, ['text', 'children']);

  return _react2.default.createElement(
    'a',
    _extends({ href: 'javascript:void(0)' }, others),
    text || children
  );
}

function Field(_ref3) {
  var _ref3$type = _ref3.type,
      type = _ref3$type === undefined ? 'text' : _ref3$type,
      _ref3$inline = _ref3.inline,
      inline = _ref3$inline === undefined ? false : _ref3$inline,
      _ref3$label = _ref3.label,
      label = _ref3$label === undefined ? '' : _ref3$label,
      _ref3$labelWidth = _ref3.labelWidth,
      labelWidth = _ref3$labelWidth === undefined ? 3 : _ref3$labelWidth,
      value = _ref3.value,
      onChange = _ref3.onChange,
      others = _objectWithoutProperties(_ref3, ['type', 'inline', 'label', 'labelWidth', 'value', 'onChange']);

  return _react2.default.createElement(
    'article',
    { className: _ext2.default.className('form-group', { 'row': inline }) },
    _react2.default.createElement(
      'label',
      { className: _ext2.default.className(_defineProperty({}, 'col-sm-' + labelWidth + ' text-sm-right', inline)) },
      label
    ),
    _react2.default.createElement(
      'div',
      { className: _ext2.default.className(_defineProperty({}, 'col-sm-' + (12 - labelWidth), inline)) },
      type === 'text' && _react2.default.createElement(TextField, _extends({ value: value, onChange: onChange }, others)),
      type === 'checkbox' && _react2.default.createElement(Checkbox, _extends({ value: value, onChange: onChange }, others)),
      type === 'textarea' && _react2.default.createElement(TextArea, _extends({ value: value, onChange: onChange }, others))
    )
  );
}

function TextField(_ref4) {
  var _ref4$value = _ref4.value,
      value = _ref4$value === undefined ? '' : _ref4$value,
      _ref4$className = _ref4.className,
      className = _ref4$className === undefined ? '' : _ref4$className,
      onChange = _ref4.onChange,
      others = _objectWithoutProperties(_ref4, ['value', 'className', 'onChange']);

  var handleChange = function handleChange(e) {
    return onChange && onChange(e.target.value);
  };
  return _react2.default.createElement('input', _extends({ type: 'text', className: _ext2.default.className('form-control', className),
    value: value, onChange: this.handleChange }, others));
}

function Checkbox(_ref5) {
  var _ref5$value = _ref5.value,
      value = _ref5$value === undefined ? false : _ref5$value,
      onChange = _ref5.onChange,
      others = _objectWithoutProperties(_ref5, ['value', 'onChange']);

  var toggleCheck = function toggleCheck() {
    return onChange(!value);
  };
  return _react2.default.createElement('input', _extends({ type: 'checkbox', checked: value, onChange: this.toggleCheck }, others));
}

function TextArea(_ref6) {
  var _ref6$rows = _ref6.rows,
      rows = _ref6$rows === undefined ? '3' : _ref6$rows,
      _ref6$value = _ref6.value,
      value = _ref6$value === undefined ? '' : _ref6$value,
      _ref6$className = _ref6.className,
      className = _ref6$className === undefined ? '' : _ref6$className,
      onChange = _ref6.onChange,
      others = _objectWithoutProperties(_ref6, ['rows', 'value', 'className', 'onChange']);

  var handleChange = function handleChange(e) {
    return onChange && onChange(e.target.value);
  };
  return _react2.default.createElement('textarea', _extends({ rows: rows, className: _ext2.default.className('form-control', className),
    value: value, onChange: this.handleChange }, others));
}

},{"../core/ext":12,"react":"react"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HashRouter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.Route = Route;
exports.Link = Link;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

var _list = require('../core/list');

var _list2 = _interopRequireDefault(_list);

var _observable = require('../reactive/observable');

var _observable2 = _interopRequireDefault(_observable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ROUTES = {},
    getRoute = function getRoute() {
  return window.location.hash.substring(1) || '/';
},
    getRoutePath = function getRoutePath(route) {
  return route.split('/');
};

function Route(route) {
  return function (comp) {
    ROUTES[route] = {
      route: route,
      comp: comp,
      path: getRoutePath(route)
    };
  };
}

function Link(_ref) {
  var to = _ref.to,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === undefined ? 'active' : _ref$activeClassName,
      text = _ref.text,
      children = _ref.children,
      others = _objectWithoutProperties(_ref, ['to', 'className', 'activeClassName', 'text', 'children']);

  return _react2.default.createElement(
    'a',
    _extends({ href: '#' + to, className: _ext2.default.className('nav-link', className, _defineProperty({}, activeClassName, to === getRoute())) }, others),
    text || children
  );
}

var HashRouter = exports.HashRouter = function (_PureComponent) {
  _inherits(HashRouter, _PureComponent);

  function HashRouter(props) {
    _classCallCheck(this, HashRouter);

    var _this = _possibleConstructorReturn(this, (HashRouter.__proto__ || Object.getPrototypeOf(HashRouter)).call(this, props));

    _ext2.default.initialState(_this, matchPath());
    return _this;
  }

  _createClass(HashRouter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _observable2.default.fromEvent(window, 'hashchange').subscribe({ next: function next() {
          return _this2.setState(matchPath());
        } });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          route = _state.route,
          comp = _state.comp,
          params = _state.params;


      if (!comp) {
        console.error('Component not found!');
        return null;
      }

      return _react2.default.createElement(comp, { route: route, params: params });
    }
  }]);

  return HashRouter;
}(_react.PureComponent);

function matchPath() {
  var params = {},
      currentRoute = getRoute();

  // basic route (without params)
  if (ROUTES[currentRoute]) {
    return { route: currentRoute, comp: ROUTES[currentRoute].comp, params: params };
  }

  // advanced route (with params)
  var currentPath = getRoutePath(currentRoute);
  for (var route in ROUTES) {
    var mapRoute = ROUTES[route],
        routePath = mapRoute.path;

    var matched = true;
    (0, _list2.default)(mapRoute.path).each(function (routeName, index) {
      if (routeName !== currentPath[index]) {
        if (routeName.startsWith(':')) {
          // detect param value
          params[routeName.substring(1)] = currentPath[index];
        } else {
          matched = false;
          return;
        }
      }
    });

    if (matched) {
      return { route: currentRoute, comp: mapRoute.comp, params: params };
    }
  }

  // with not found screen
  if (ROUTES['*']) {
    return { route: currentRoute, comp: ROUTES['*'].comp, params: params };
  }

  // without not found screen
  return { route: currentRoute, comp: null, params: params };
}

},{"../core/ext":12,"../core/list":13,"../reactive/observable":23,"react":"react"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dictionary = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dictionary = exports.Dictionary = function () {
  function Dictionary(keyValues) {
    var _this = this;

    _classCallCheck(this, Dictionary);

    this.data = {};
    if (keyValues && keyValues.length) {
      this.data = Object.assign({}, keyValues);
    }

    this.keys = function () {
      return (0, _list2.default)(Object.keys(_this.data));
    };
    this.values = function () {
      return (0, _list2.default)(Object.values(_this.data));
    };
  }

  _createClass(Dictionary, [{
    key: 'each',
    value: function each(iteratee) {
      for (var key in this.data) {
        iteratee(this.data[key], key, this.data);
      }
      return this;
    }
  }]);

  return Dictionary;
}();

exports.default = function (keyValues) {
  return new Dictionary(keyValues);
};

},{"./list":13}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _list = require('./list');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DOM = function (_List) {
  _inherits(DOM, _List);

  function DOM() {
    _classCallCheck(this, DOM);

    return _possibleConstructorReturn(this, (DOM.__proto__ || Object.getPrototypeOf(DOM)).apply(this, arguments));
  }

  _createClass(DOM, [{
    key: 'show',
    value: function show() {
      this.selectors.each(function (selector) {
        return selector.style.display = 'block';
      });
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.selectors.each(function (selector) {
        return selector.style.display = 'none';
      });
    }

    // parent() {
    //   this.comp = this.comp.parentElement;
    //   return this;
    // }

    // width() {
    //   return this.comp.clientWidth;
    // }

    // height() {
    //   return this.comp.clientHeight;
    // }

    // find(selector) {
    //   return this.comp.querySelector(selector);
    // }

  }]);

  return DOM;
}(_list.List);

exports.default = function (selector) {
  return new DOM(document.querySelectorAll(selector));
};

},{"./list":13}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ext = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.bind = bind;
exports.debounce = debounce;

var _dom = require('./dom');

var _dom2 = _interopRequireDefault(_dom);

var _string = require('./string');

var _string2 = _interopRequireDefault(_string);

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

var _dictionary = require('./dictionary');

var _dictionary2 = _interopRequireDefault(_dictionary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ext = exports.Ext = function () {
  function Ext() {
    _classCallCheck(this, Ext);

    this.SCROLL_WIDTH = this.getScrollWidth();
    this.BORDER_WIDTH = 2;
    this.CHECK_COLUMN_WIDTH = 33;
    this.UNKNOWN_ERROR_MSG = 'An unknown error has occurred.';
    this.XHR = new XMLHttpRequest();

    this.isPrimitive = function (value) {
      var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);return type === 'string' || type === 'number' || type === 'boolean';
    };
    this.isString = function (value) {
      return typeof value === 'string';
    };
    this.isFunction = function (value) {
      return !!value && typeof value === 'function';
    };
    this.isObject = function (value) {
      return toString.call(value) === '[object Object]';
    };
    this.isArray = function (value) {
      return toString.call(value) === '[object Array]';
    };

    this.clone = function (obj) {
      return JSON.parse(JSON.stringify(obj));
    }; // deep clone

    this.DOM = _dom2.default;
    this.String = _string2.default;
    this.List = _list2.default;
    this.Map = _dictionary2.default;
    this.Provider = new _dictionary2.default();
  }

  _createClass(Ext, [{
    key: 'extend',
    value: function extend() {
      return Object.assign.apply(null, arguments); // immutable object
    }
  }, {
    key: 'initialState',
    value: function initialState(comp, state) {
      if (!comp || !state) {
        return;
      }
      comp.state = state;

      var _loop = function _loop(field) {
        comp['set' + _string2.default.capitalize(field)] = function (value) {
          return comp.setState(_defineProperty({}, field, value));
        };
      };

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.keys(state)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var field = _step.value;

          _loop(field);
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
    }
  }, {
    key: 'className',
    value: function className() {
      var _this = this;

      var cls = [];

      for (var _len = arguments.length, expressions = Array(_len), _key = 0; _key < _len; _key++) {
        expressions[_key] = arguments[_key];
      }

      (0, _list2.default)(expressions).each(function (exp) {
        if (!exp) {
          return;
        }

        if (typeof exp === 'string') {
          cls.push(exp);
        } else if (_this.isObject(exp)) {
          for (var key in exp) {
            if (exp[key] === true) {
              cls.push(key);
            }
          }
        }
      });
      return cls.join(' ');
    }

    //#region DOM

  }, {
    key: 'createElement',
    value: function createElement(html) {
      var div = document.createElement('div');
      div.innerHTML = html;
      return div.children[0];
    }
  }, {
    key: 'getEl',
    value: function getEl(selector) {
      return (0, _dom2.default)(selector);
    }
  }, {
    key: 'getScrollWidth',
    value: function getScrollWidth() {
      var outer = this.createElement('<div style="visibility: hidden; width: 100px; overflow: scroll;"></div>');
      document.body.appendChild(outer);
      var widthNoScroll = outer.offsetWidth;

      // add innerdiv
      var inner = this.createElement('<div style="width: 100%;"></div>');
      outer.appendChild(inner);
      var widthWithScroll = inner.offsetWidth;

      // remove divs
      outer.parentNode.removeChild(outer);

      return widthNoScroll - widthWithScroll;
    }
    //#endregion

  }]);

  return Ext;
}();

exports.default = new Ext();
function bind(target, name, descriptor) {
  var fn = descriptor.value;

  if (typeof fn !== 'function') {
    throw new Error('@bind decorator is only applied to functions not: ' + (typeof fn === 'undefined' ? 'undefined' : _typeof(fn)));
  }

  return {
    configurable: true,
    get: function get() {
      return fn.bind(this);
    }
  };
}

function debounce(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

  var timeout = void 0;
  return function () {
    var context = this,
        args = arguments,
        later = function later() {
      func.apply(context, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

},{"./dictionary":10,"./dom":11,"./list":13,"./string":14}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var List = exports.List = function () {
  function List(value) {
    var _this = this;

    _classCallCheck(this, List);

    this.data = [];
    if (value && value.length) {
      this.data = value;
    }

    this.collect = function () {
      return _this.data;
    };
    this.count = function () {
      return _this.data.length;
    };
    this.getAt = function (index) {
      return _this.data[index];
    };
    this.add = function (item) {
      return _this.data.push(item);
    };
    this.insert = function (item) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return _this.data.splice(index, 0, item);
    };
    this.removeAt = function (index) {
      var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      return _this.data.splice(index, count);
    };
    this.join = function (separator) {
      return _this.data.join(separator);
    };
  }

  _createClass(List, [{
    key: "each",
    value: function each(iteratee) {
      for (var index in this.data) {
        iteratee(this.data[index], index, this.data);
      }
      return this;
    }
  }, {
    key: "filter",
    value: function filter(predicate) {
      var result = [];
      this.each(function (item, index, array) {
        if (predicate(item, index, array)) {
          result.push(item);
        }
      });
      return new List(result);
    }
  }, {
    key: "map",
    value: function map(iteratee) {
      var result = [];
      this.each(function (item, index, array) {
        return result[index] = iteratee(item, index, array);
      });
      return new List(result);
    }
  }, {
    key: "reduce",
    value: function reduce(iteratee, accumulator) {
      this.each(function (item, index, array) {
        return accumulator = iteratee(accumulator, item, index, array);
      });
      return accumulator;
    }
  }, {
    key: "findIndex",
    value: function findIndex(predicate) {
      var index = -1;
      for (var idx = 0, item; (item = this.data[idx]) != null; ++idx) {
        if (predicate(item, idx, this.data)) {
          index = idx;
          break;
        }
      }
      return index;
    }
  }, {
    key: "find",
    value: function find(predicate) {
      var index = this.findIndex(predicate);
      return index > -1 ? this.data[index] : null;
    }
  }, {
    key: "contains",
    value: function contains(predicate) {
      return this.find(predicate) !== null;
    }
  }, {
    key: "removeIf",
    value: function removeIf(predicate) {
      var result = [];
      this.each(function (item, index, array) {
        if (!predicate(item, index, array)) {
          result.push(item);
        }
      });
      this.data = result;
    }
  }]);

  return List;
}();

exports.default = function (value) {
  return new List(value);
};

},{}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var String = function () {
  function String() {
    _classCallCheck(this, String);

    this.capitalize = function (value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    };
  }

  _createClass(String, [{
    key: 'htmlEncode',
    value: function htmlEncode(value) {
      return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');
    }
  }, {
    key: 'htmlDecode',
    value: function htmlDecode(value) {
      return value.replace(/&amp;/g, '').replace(/&lt;/g, '<').replace(/&gt;>/g, '>').replace(/&#39;/g, "'").replace(/&quot;/g, '"');
    }
  }, {
    key: 'toQueryString',
    value: function toQueryString(params, sep, encode) {
      sep = sep === undefined ? '&' : sep;
      encode = encode === false ? function (s) {
        return s;
      } : encodeURIComponent;

      var pairs = [];
      for (var key in params) {
        pairs.push(key + '=' + encode(params[key]));
      }
      return pairs.join(sep);
    }
  }]);

  return String;
}();

exports.default = new String();

},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _list = require('../core/list');

var _subject = require('../reactive/subject');

var _subject2 = _interopRequireDefault(_subject);

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractStore = function (_List) {
  _inherits(AbstractStore, _List);

  function AbstractStore() {
    _classCallCheck(this, AbstractStore);

    //#region configs
    var _this = _possibleConstructorReturn(this, (AbstractStore.__proto__ || Object.getPrototypeOf(AbstractStore)).call(this));

    _this.totalCount = 0;
    _this.pageSize = 0;
    _this.currentPage = 1;
    _this.subject = _subject2.default.create();
    //#endregion

    //#region properties
    //#endregion

    //#region methods
    _this.subscribe = function (observer) {
      return _this.subject.subscribe(observer);
    };
    _this.unsubscribe = function (observer) {
      return _this.subject.unsubscribe(observer);
    };
    _this.fireEvent = function () {
      return _this.subject.next(_this);
    };
    _this.createRecord = function (record) {
      return new _model2.default(record, _this);
    };
    _this.getRecords = _this.collect;
    _this.getModifiedRecords = function () {
      return _this.filter(function (record) {
        return record.isModified();
      });
    };
    _this.getNewRecords = function () {
      return _this.filter(function (record) {
        return record.isNewlyCreated();
      });
    };
    //#endregion
    return _this;
  }

  _createClass(AbstractStore, [{
    key: 'clearData',
    value: function clearData() {
      var silent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      this.data = [];
      !silent && this.fireEvent();
    }
  }, {
    key: 'loadData',
    value: function loadData(data) {
      this.clearData(true);
      this.data = new _list.List(data).map(this.createRecord.bind(this)).collect();
      this.fireEvent();
    }
  }, {
    key: 'commitChanges',
    value: function commitChanges() {
      this.filter(function (record) {
        return record.isModified() || record.isNewlyCreated();
      }).each(function (record) {
        return record.save();
      });
      this.fireEvent();
    }
  }, {
    key: 'rejectChanges',
    value: function rejectChanges() {
      this.filter(function (record) {
        return record.isModified();
      }).each(function (record) {
        return record.reject(true);
      });
      this.data = this.filter(function (record) {
        return !record.isNewlyCreated();
      }).collect();
      this.fireEvent();
    }
  }]);

  return AbstractStore;
}(_list.List);

exports.default = AbstractStore;

},{"../core/list":13,"../reactive/subject":25,"./model":18}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _string = require('../core/string');

var _string2 = _interopRequireDefault(_string);

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ajax = function () {
  function Ajax() {
    _classCallCheck(this, Ajax);

    _ext2.default.extend(Ajax.prototype, {
      xhr: new XMLHttpRequest(),
      ajaxBefore: function ajaxBefore() {/* to be implemented */},
      ajaxError: function ajaxError(error) {/* to be implemented */},
      ajaxComplete: function ajaxComplete() {/* to be implemented */}
    });
  }

  _createClass(Ajax, [{
    key: 'request',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
        var url = _ref.url,
            _ref$contentType = _ref.contentType,
            contentType = _ref$contentType === undefined ? 'application/json; charset=utf-8' : _ref$contentType,
            _ref$method = _ref.method,
            method = _ref$method === undefined ? 'get' : _ref$method,
            params = _ref.params,
            next = _ref.next,
            error = _ref.error,
            complete = _ref.complete;
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                response = void 0;
                _context.prev = 2;

                this.ajaxBefore();
                _context.next = 6;
                return this.promise({ url: url, contentType: contentType, method: method, params: params });

              case 6:
                response = _context.sent;
                _context.next = 15;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](2);

                console.error('Cannot get response from server for url [' + url + '] caused by: ' + _context.t0);
                this.ajaxError(_context.t0);
                error && error(_context.t0);
                return _context.abrupt('return', null);

              case 15:
                return _context.abrupt('return', next ? next(response) : response);

              case 16:
                _context.prev = 16;

                this.ajaxComplete();
                complete && complete();
                return _context.finish(16);

              case 20:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0,, 16, 20], [2, 9]]);
      }));

      function request(_x) {
        return _ref2.apply(this, arguments);
      }

      return request;
    }()
  }, {
    key: 'promise',
    value: function promise(settings) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.createRequest(settings, function (err, res) {
          return err ? reject(err) : resolve(res);
        });
      });
    }
  }, {
    key: 'createRequest',
    value: function createRequest(_ref3, done) {
      var url = _ref3.url,
          contentType = _ref3.contentType,
          method = _ref3.method,
          params = _ref3.params;

      method === 'get' && params && (url = url + '?' + _string2.default.toQueryString(params));
      var xhr = this.xhr;
      xhr.open(method, url, true);
      xhr.setRequestHeader('Content-Type', contentType);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          // ajax will return as a json by default, if parser error then it will return a raw string
          if (xhr.status === 200) {
            try {
              done(null, JSON.parse(xhr.responseText));
            } catch (e) {
              done(null, xhr.responseText);
            }
          } else {
            try {
              done(JSON.parse(xhr.responseText));
            } catch (e) {
              done(xhr.responseText);
            }
          }
        }
      };
      xhr.send(params ? JSON.stringify(params) : null);
    }
  }]);

  return Ajax;
}();

exports.default = new Ajax();

},{"../core/ext":12,"../core/string":14}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cache = function () {
  function Cache() {
    _classCallCheck(this, Cache);

    this._cache = {};
  }

  _createClass(Cache, [{
    key: 'hasLocalStorage',
    value: function hasLocalStorage() {
      try {
        return 'localStorage' in window && window.localStorage !== null;
      } catch (e) {
        return false;
      }
    }
  }, {
    key: 'get',
    value: function get(key) {
      if (this.hasLocalStorage()) {
        return JSON.parse(localStorage.getItem(key)) || undefined;
      } else {
        return this._cache[key] || undefined;
      }
    }
  }, {
    key: 'set',
    value: function set(key, value) {
      if (this.hasLocalStorage()) {
        localStorage.setItem(key, JSON.stringify(value));
      } else {
        this._cache[key] = value;
      }
    }
  }, {
    key: 'remove',
    value: function remove(key) {
      if (!key) {
        this._cache = {};
      } else if (this.hasLocalStorage()) {
        localStorage.removeItem(key);
      } else {
        delete this._cache[key];
      }
    }
  }]);

  return Cache;
}();

exports.default = new Cache();

},{}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

var _list = require('../core/list');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = function () {
  function Model(data, store) {
    var _this = this;

    _classCallCheck(this, Model);

    //#region configs
    this.selected = false;
    //#endregion

    //#region properties
    this.data = data;
    this.store = store;
    this.idProperty = store && store.idProperty ? store.idProperty : 'id';
    var fieldConfig = store && store.fields ? store.fields : [];
    this.fields = (0, _list2.default)(fieldConfig).map(function (field) {
      return _ext2.default.isString(field) ? { name: field, type: 'string' } : field;
    });
    //#endregion

    //#region methods
    this.getData = function () {
      return _this.data;
    };
    this.get = function (fieldName) {
      return _this.data[fieldName];
    };
    //#endregion

    this.save();
  }

  _createClass(Model, [{
    key: 'set',
    value: function set(fieldName, newValue, silent) {
      this.data[fieldName] = newValue;
      this.modified = !this.isEqual(fieldName);
      !silent && this.store && this.store.fireEvent();
    }
  }, {
    key: 'save',
    value: function save() {
      this.phantom = _ext2.default.clone(this.data);
      this.modified = false;
    }
  }, {
    key: 'reject',
    value: function reject(silent) {
      this.data = _ext2.default.clone(this.phantom);
      this.save();
      !silent && this.store && this.store.fireEvent();
    }
  }, {
    key: 'isEqual',
    value: function isEqual(field) {
      var oldValue = this.phantom[field.name],
          newValue = this.data[field.name];

      return field.equals ? field.equals(newValue, oldValue) : newValue === oldValue;
    }
  }, {
    key: 'isModified',
    value: function isModified(fieldName) {
      return this.modified && !this.phantom[this.idProperty]; // should not detect new record as a modified record
    }
  }, {
    key: 'isNewlyCreated',
    value: function isNewlyCreated() {
      return !this.phantom[this.idProperty];
    }
  }, {
    key: 'setSelected',
    value: function setSelected(selected, silent) {
      this.selected = selected;
      !silent && this.store && this.store.fireEvent();
    }
  }]);

  return Model;
}();

exports.default = Model;

},{"../core/ext":12,"../core/list":13}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

var _ajax = require('./ajax');

var _ajax2 = _interopRequireDefault(_ajax);

var _abstractStore = require('./abstract-store');

var _abstractStore2 = _interopRequireDefault(_abstractStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProxyStore = function (_AbstractStore) {
  _inherits(ProxyStore, _AbstractStore);

  function ProxyStore() {
    _classCallCheck(this, ProxyStore);

    //#region configs
    var _this = _possibleConstructorReturn(this, (ProxyStore.__proto__ || Object.getPrototypeOf(ProxyStore)).call(this));

    _this.proxy = {
      reader: {},
      writer: {}
    };
    //#endregion
    return _this;
  }

  _createClass(ProxyStore, [{
    key: 'load',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
        var _this2 = this;

        var done = _ref.done,
            fail = _ref.fail,
            always = _ref.always;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Observable.ajax(this.proxy).subscribe({
                  next: function next(value) {
                    var _proxy$reader = _this2.proxy.reader,
                        rootProperty = _proxy$reader.rootProperty,
                        totalProperty = _proxy$reader.totalProperty;

                    _this2.loadData(rootProperty ? response[rootProperty] : response);
                    _this2.totalCount = _this2.pageSize && totalProperty ? response[totalProperty] : _this2.count();
                    done && done(_this2.getRecords());
                  },
                  error: fail,
                  complete: always
                });

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function load(_x) {
        return _ref2.apply(this, arguments);
      }

      return load;
    }()
  }, {
    key: 'loadPage',
    value: function loadPage(page) {
      this.currentPage = page;
      this.proxy.params = _ext2.default.extend({}, this.proxy.params, { page: this.currentPage, size: this.pageSize });
      return this.load({});
    }
  }, {
    key: 'sync',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref3) {
        var _proxy$proxy$params;

        var done = _ref3.done,
            fail = _ref3.fail,
            always = _ref3.always;
        var transform;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.proxy.method = 'post';
                this.proxy.params = this.getModifiedRecords().map(function (record) {
                  return record.data;
                }).collect();
                (_proxy$proxy$params = this.proxy.proxy.params).push.apply(_proxy$proxy$params, _toConsumableArray(this.getNewRecords().map(function (record) {
                  return record.data;
                }).collect()));
                transform = proxy.writer.transform;

                transform && (this.proxy.params = transform(this.proxy.params));
                Observable.ajax(this.proxy).subscribe({
                  next: done,
                  error: fail,
                  complete: always
                });

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function sync(_x2) {
        return _ref4.apply(this, arguments);
      }

      return sync;
    }()
  }]);

  return ProxyStore;
}(_abstractStore2.default);

exports.default = ProxyStore;

},{"../core/ext":12,"./abstract-store":15,"./ajax":16}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

var _proxyStore = require('./proxy-store');

var _proxyStore2 = _interopRequireDefault(_proxyStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Store = function (_ProxyStore) {
  _inherits(Store, _ProxyStore);

  function Store(config) {
    _classCallCheck(this, Store);

    var _this = _possibleConstructorReturn(this, (Store.__proto__ || Object.getPrototypeOf(Store)).call(this));

    _ext2.default.extend(_this, config);
    return _this;
  }

  return Store;
}(_proxyStore2.default);

exports.default = function (config) {
  return new Store(config);
};

},{"../core/ext":12,"./proxy-store":19}],21:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AjaxObservable = function () {
  function AjaxObservable(urlOrRequest) {
    var _this = this;

    _classCallCheck(this, AjaxObservable);

    this.request = _ext2.default.extend({
      url: '',
      params: '',
      contentType: 'application/json; charset=utf-8',
      method: 'get'
    }, _ext2.default.isString(urlOrRequest) ? { url: urlOrRequest } : urlOrRequest);

    this.promise = function (request) {
      return new Promise(function (resolve, reject) {
        _this.createRequest(request, function (error, response) {
          return error ? reject(error) : resolve(response);
        });
      });
    };
  }

  _createClass(AjaxObservable, [{
    key: 'subscribe',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
        var next = _ref.next,
            error = _ref.error,
            complete = _ref.complete;
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                response = void 0;
                _context.prev = 2;
                _context.next = 5;
                return this.promise({ url: url, contentType: contentType, method: method, params: params });

              case 5:
                response = _context.sent;
                _context.next = 13;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context['catch'](2);

                console.error('Cannot get response from server for url [' + url + '] caused by: ' + _context.t0);
                error && error(_context.t0);
                return _context.abrupt('return', null);

              case 13:
                return _context.abrupt('return', next ? next(response) : response);

              case 14:
                _context.prev = 14;

                complete && complete();
                return _context.finish(14);

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0,, 14, 17], [2, 8]]);
      }));

      function subscribe(_x) {
        return _ref2.apply(this, arguments);
      }

      return subscribe;
    }()
  }, {
    key: 'send',
    value: function send(_ref3, done) {
      var url = _ref3.url,
          contentType = _ref3.contentType,
          method = _ref3.method,
          params = _ref3.params;

      method === 'get' && params && (url = url + '?' + String.toQueryString(params));
      var xhr = _ext2.default.XHR;
      xhr.open(method, url, true);
      xhr.setRequestHeader('Content-Type', contentType);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          // ajax will return as a json by default, if parser error then it will return a raw string
          if (xhr.status === 200) {
            try {
              done(null, JSON.parse(xhr.responseText));
            } catch (e) {
              done(null, xhr.responseText);
            }
          } else {
            try {
              done(JSON.parse(xhr.responseText));
            } catch (e) {
              done(xhr.responseText);
            }
          }
        }
      };
      xhr.send(params ? JSON.stringify(params) : null);
    }
  }], [{
    key: 'create',
    value: function create(urlOrRequest) {
      return new AjaxObservable(urlOrRequest);
    }
  }]);

  return AjaxObservable;
}();

},{"../core/ext":12}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventObservable = function () {
  function EventObservable(target, eventName, options) {
    _classCallCheck(this, EventObservable);

    this.target = target;
    this.eventName = eventName;
    this.options = options;
  }

  _createClass(EventObservable, [{
    key: "subscribe",
    value: function subscribe(observer) {
      this.target.addEventListener(this.eventName, observer, this.options);
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(observer) {
      this.target.removeEventListener(this.eventName, observer, this.options);
    }
  }], [{
    key: "create",
    value: function create(target, eventName) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      return new EventObservable(target, eventName, options);
    }
  }]);

  return EventObservable;
}();

exports.default = EventObservable;

},{}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _operator = require('./operator');

var _operator2 = _interopRequireDefault(_operator);

var _event = require('./event');

var _event2 = _interopRequireDefault(_event);

var _ajax = require('./ajax');

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * From ReactiveX docs:
 *
 * Observable: An interface that listens for incoming notifications over a period of time
 * and pushes them to another interface that reacts to them.
 *
 * Subscription: When an Observable interface starts doing its work,
 * i.e. listening for notifications and pushing them out.
 *
 * Observer: An interface that reacts to data pushed from an Observable.
 *
 * Operators: Functions used to manipulate an Observable’s output, e.g. filter, map, reduce, etc.
 */
var Observable = function (_Operator) {
  _inherits(Observable, _Operator);

  function Observable(subscribe) {
    _classCallCheck(this, Observable);

    var _this = _possibleConstructorReturn(this, (Observable.__proto__ || Object.getPrototypeOf(Observable)).call(this));

    _this.subscribe = subscribe;
    return _this;
  }

  _createClass(Observable, null, [{
    key: 'create',
    value: function create(subscribe) {
      return new Observable(subscribe);
    }

    /**
     * For example:
     * const input$ = Observable.fromEvent(document.getElementById('input'), 'change');
     *
     * const unsubcribe = input$.subscribe({
     *    next: e => console.log(e.target.value)
     * });
     *
     * setTimeout(unsubcribe, 5000);
     *
     * @param target
     * @param eventName
     */

  }, {
    key: 'fromEvent',
    value: function fromEvent(target, eventName) {
      return Observable.create(function (observer) {
        console.log(observer);
        var callback = function callback(e) {
          return observer.next(e);
        };
        target.addEventListener(eventName, callback, false);
        return function () {
          return target.removeEventListener(eventName, callback, false);
        };
      });
    }
  }, {
    key: 'ajax',
    value: function ajax(urlOrRequest) {
      return _ajax2.default.create(urlOrRequest);
    }
  }]);

  return Observable;
}(_operator2.default);

exports.default = Observable;

},{"./ajax":21,"./event":22,"./operator":24}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Operator = function Operator() {
  _classCallCheck(this, Operator);

  this.filter = function (predicate) {/* to be implemented */};
  this.map = function (predicate) {/* to be implemented */};
  this.reduce = function (predicate) {/* to be implemented */};
};

exports.default = Operator;

},{}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _list = require('../core/list');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Subject = function (_List) {
  _inherits(Subject, _List);

  function Subject() {
    _classCallCheck(this, Subject);

    return _possibleConstructorReturn(this, (Subject.__proto__ || Object.getPrototypeOf(Subject)).call(this));
  }

  _createClass(Subject, [{
    key: 'subscribe',
    value: function subscribe(observer) {
      this.add(observer);
    }
  }, {
    key: 'unsubscribe',
    value: function unsubscribe() {
      this.data = this.filter(function (item) {
        return item !== observer;
      }).collect();
    }
  }, {
    key: 'next',
    value: function next() {
      var _this2 = this;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this.each(function (observer) {
        return observer.apply(_this2, args);
      });
    }
  }], [{
    key: 'create',
    value: function create() {
      return new Subject();
    }
  }]);

  return Subject;
}(_list2.default);

exports.default = Subject;

},{"../core/list":13}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Store = exports.Service = exports.Component = exports.Route = exports.debounce = exports.bind = exports.TextArea = exports.Checkbox = exports.TextField = exports.Field = exports.ButtonLink = exports.Button = exports.Container = exports.Link = exports.HashRouter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _router = require('./components/router');

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
    return _container.Container;
  }
});

var _form = require('./components/form');

Object.defineProperty(exports, 'Button', {
  enumerable: true,
  get: function get() {
    return _form.Button;
  }
});
Object.defineProperty(exports, 'ButtonLink', {
  enumerable: true,
  get: function get() {
    return _form.ButtonLink;
  }
});
Object.defineProperty(exports, 'Field', {
  enumerable: true,
  get: function get() {
    return _form.Field;
  }
});
Object.defineProperty(exports, 'TextField', {
  enumerable: true,
  get: function get() {
    return _form.TextField;
  }
});
Object.defineProperty(exports, 'Checkbox', {
  enumerable: true,
  get: function get() {
    return _form.Checkbox;
  }
});
Object.defineProperty(exports, 'TextArea', {
  enumerable: true,
  get: function get() {
    return _form.TextArea;
  }
});

var _ext = require('./core/ext');

Object.defineProperty(exports, 'bind', {
  enumerable: true,
  get: function get() {
    return _ext.bind;
  }
});
Object.defineProperty(exports, 'debounce', {
  enumerable: true,
  get: function get() {
    return _ext.debounce;
  }
});
Object.defineProperty(exports, 'Route', {
  enumerable: true,
  get: function get() {
    return _router.Route;
  }
});

var _component = require('./app/component');

Object.defineProperty(exports, 'Component', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_component).default;
  }
});

var _service = require('./app/service');

Object.defineProperty(exports, 'Service', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_service).default;
  }
});

var _store = require('./data/store');

Object.defineProperty(exports, 'Store', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_store).default;
  }
});

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rext = function (_Ext) {
  _inherits(Rext, _Ext);

  function Rext() {
    _classCallCheck(this, Rext);

    var _this = _possibleConstructorReturn(this, (Rext.__proto__ || Object.getPrototypeOf(Rext)).call(this));

    _this.Cache = require('./data/cache');
    _this.Model = require('./data/model');
    _this.Observable = require('./reactive/observable');
    _this.DialogManager = require('./components/dialog');
    return _this;
  }

  _createClass(Rext, [{
    key: 'launch',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(viewport) {
        var root;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!window.location.hash) {
                  window.location.hash = '/';
                }

                root = this.createElement('<div id="react-root"></div>');

                document.body.appendChild(root);
                _context.t0 = this.isFunction(viewport);

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
}(_ext.Ext);

exports.default = new Rext();

//#region Component

},{"./app/component":4,"./app/service":5,"./components/container":6,"./components/dialog":7,"./components/form":8,"./components/router":9,"./core/ext":12,"./data/cache":17,"./data/model":18,"./data/store":20,"./reactive/observable":23,"babel-polyfill":"babel-polyfill","react":"react","react-dom":"react-dom"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkb2NzL3NyYy9qcy9hcHAuanMiLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2dldHRpbmctc3RhcnRlZC9nZXR0aW5nLXN0YXJ0ZWQuanN4IiwiZG9jcy9zcmMvanMvY29tcG9uZW50cy92aWV3cG9ydC92aWV3cG9ydC5qc3giLCJzcmMvYXBwL2NvbXBvbmVudC5qcyIsInNyYy9hcHAvc2VydmljZS5qcyIsInNyYy9jb21wb25lbnRzL2NvbnRhaW5lci5qc3giLCJzcmMvY29tcG9uZW50cy9kaWFsb2cuanN4Iiwic3JjL2NvbXBvbmVudHMvZm9ybS5qc3giLCJzcmMvY29tcG9uZW50cy9yb3V0ZXIuanN4Iiwic3JjL2NvcmUvZGljdGlvbmFyeS5qcyIsInNyYy9jb3JlL2RvbS5qcyIsInNyYy9jb3JlL2V4dC5qcyIsInNyYy9jb3JlL2xpc3QuanMiLCJzcmMvY29yZS9zdHJpbmcuanMiLCJzcmMvZGF0YS9hYnN0cmFjdC1zdG9yZS5qcyIsInNyYy9kYXRhL2FqYXguanMiLCJzcmMvZGF0YS9jYWNoZS5qcyIsInNyYy9kYXRhL21vZGVsLmpzIiwic3JjL2RhdGEvcHJveHktc3RvcmUuanMiLCJzcmMvZGF0YS9zdG9yZS5qcyIsInNyYy9yZWFjdGl2ZS9hamF4LmpzIiwic3JjL3JlYWN0aXZlL2V2ZW50LmpzIiwic3JjL3JlYWN0aXZlL29ic2VydmFibGUuanMiLCJzcmMvcmVhY3RpdmUvb3BlcmF0b3IuanMiLCJzcmMvcmVhY3RpdmUvc3ViamVjdC5qcyIsInNyYy9yZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBSyxNQUFMLENBQVksdURBQVo7Ozs7Ozs7Ozs7Ozs7O0FDWEE7Ozs7QUFDQTs7Ozs7Ozs7OztJQUdxQixjLFdBRHBCLGlC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QSxVQUFLLGFBQUwsR0FBcUIsUUFBUSxxQkFBUixDQUFyQjtBQUxZO0FBTWI7Ozs7OzBGQUVZLFE7Ozs7OztBQUNYLG9CQUFJLENBQUMsT0FBTyxRQUFQLENBQWdCLElBQXJCLEVBQTJCO0FBQ3pCLHlCQUFPLFFBQVAsQ0FBZ0IsSUFBaEIsR0FBdUIsR0FBdkI7QUFDRDs7QUFFSyxvQixHQUFPLEtBQUssYUFBTCxDQUFtQiw2QkFBbkIsQzs7QUFDYix5QkFBUyxJQUFULENBQWMsV0FBZCxDQUEwQixJQUExQjs4QkFDQSxLQUFLLFVBQUwsQ0FBZ0IsUUFBaEIsQzs7Ozs7Ozs7dUJBQStDLFU7OztBQUFqQix3Qjs7O0FBQzlCLHNDQUFPLFFBQVAsRUFBaUIsSUFBakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFJVyxJQUFJLElBQUosRTs7QUFFZiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmV4dCBmcm9tICd+L3JleHQnO1xuaW1wb3J0IFZpZXdwb3J0IGZyb20gJy4vY29tcG9uZW50cy92aWV3cG9ydC92aWV3cG9ydCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9nZXR0aW5nLXN0YXJ0ZWQvZ2V0dGluZy1zdGFydGVkJztcbi8vIGltcG9ydCBSZXh0Q29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9jb3JlLWNvbmNlcHRzL2NvbXBvbmVudCc7XG4vLyBpbXBvcnQgRGF0YVBhY2thZ2UgZnJvbSAnLi9jb21wb25lbnRzL2NvcmUtY29uY2VwdHMvZGF0YS1wYWNrYWdlJztcbi8vIGltcG9ydCBTY3JlZW5OYXZpZ2F0aW9uIGZyb20gJy4vY29tcG9uZW50cy9jb3JlLWNvbmNlcHRzL3NjcmVlbi1uYXZpZ2F0aW9uJztcbi8vIGltcG9ydCBBcmNoaXRlY3R1cmUgZnJvbSAnLi9jb21wb25lbnRzL2FyY2hpdGVjdHVyZS9hcmNoaXRlY3R1cmUnO1xuLy8gaW1wb3J0IEdyaWRDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL3VpLWNvbXBvbmVudHMvZ3JpZCc7XG5cblJleHQubGF1bmNoKDxWaWV3cG9ydCAvPik7IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29udGFpbmVyIH0gZnJvbSAnfi9yZXh0JztcblxuQFJvdXRlKCcvJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdldHRpbmdTdGFydGVkIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPENvbnRhaW5lcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtaGVhZGVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJwYW5lbC10aXRsZVwiPkdldHRpbmcgU3RhcnRlZDwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwicGFuZWwtYm9keVwiPlxuICAgICAgICA8cD5cbiAgICAgICAgICBFeHRlbnNpb24gUmVhY3QgaXMgYSBsaWJyYXJ5IHRoYXQgYnVpbGQgb24gdG9wIG9mIFJlYWN0LCBoZWxwaW5nIHlvdSBidWlsZCBkYXRhLWludGVuc2l2ZSwgY3Jvc3MtcGxhdGZvcm0gd2ViIGFwcHMgZm9yIGRlc2t0b3BzLCB0YWJsZXRzLCBhbmQgc21hcnRwaG9uZXMuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGgyPlF1aWNrIFN0YXJ0PC9oMj5cbiAgICAgICAgPGgzPjEuIFNldHVwIGEgZGV2ZWxvcG1lbnQgZW52aXJvbWVudDwvaDM+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFVzZSA8Y29kZT5ucG08L2NvZGU+IG9yIDxjb2RlPnlhcm48L2NvZGU+IHRvIGluc3RhbGwgZm9sbG93aW5nIGRlcGVuZGVuY2llczpcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1zdHlsZS1kaXNjXCI+XG4gICAgICAgICAgICA8bGk+PHByZT5iYWJlbC1wb2x5ZmlsbDwvcHJlPjwvbGk+XG4gICAgICAgICAgICA8bGk+PHByZT5iYWJlbC1wcmVzZXQtZW52PC9wcmU+PC9saT5cbiAgICAgICAgICAgIDxsaT48cHJlPmJhYmVsLXByZXNldC1yZWFjdDwvcHJlPjwvbGk+XG4gICAgICAgICAgICA8bGk+PHByZT5kMzwvcHJlPjwvbGk+XG4gICAgICAgICAgICA8bGk+PHByZT5mb250LWF3ZXNvbWU8L3ByZT48L2xpPlxuICAgICAgICAgICAgPGxpPjxwcmU+cmVhY3Q8L3ByZT48L2xpPlxuICAgICAgICAgICAgPGxpPjxwcmU+ZXh0LXJlYWN0PC9wcmU+PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxoMz4yLiBDcmVhdGUgYSBuZXcgcHJvamVjdDwvaDM+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoZSBmb2xsb3dpbmcgaXMgdGhlIHJlY29tbWVuZGVkIGRpcmVjdG9yeSBzdHJ1Y3R1cmUgZm9yIGFuIEV4dGVuc2lvbiBSZWFjdCBhcHBsaWNhdGlvbjpcbiAgICAgICAgICA8cHJlIGNsYXNzTmFtZT1cImVkaXRvclwiPlxuICAgICAgICAgICAgKy0tIG5vZGVfbW9kdWxlczogTlBNIGNvbXBvbmVudHM8YnIgLz5cbiAgICAgICAgICAgICstLSBkaXN0PGJyIC8+XG4gICAgICAgICAgICB8ICAgKy0tIGFwcC5taW4uY3NzPGJyIC8+XG4gICAgICAgICAgICB8ICAgKy0tIGFwcC5taW4uanM8YnIgLz5cbiAgICAgICAgICAgIHwgICArLS0gZnJhbWV3b3JrLm1pbi5qczxiciAvPlxuICAgICAgICAgICAgKy0tIHNyYzxiciAvPlxuICAgICAgICAgICAgfCAgICstLSBjc3M8YnIgLz5cbiAgICAgICAgICAgIHwgICB8ICAgKy0tIF92YXJpYWJsZXMuc2NzczogYXBwbGljYXRpb24gc3R5bGVzIGNvbnN0YW50IHZhbHVlczxiciAvPlxuICAgICAgICAgICAgfCAgIHwgICArLS0gYXBwLnNjc3M6IGFwcGxpY2F0aW9uIHN0eWxlczxiciAvPlxuICAgICAgICAgICAgfCAgICstLSBqczxiciAvPlxuICAgICAgICAgICAgfCAgIHwgICArLS0gY29tbW9uOiBjb2RlIG9mIHNoYXJlZCBmdW5jdGlvbnMgb3Igc2hhcmVkIGNvbXBvbmVudHM8YnIgLz5cbiAgICAgICAgICAgIHwgICB8ICAgKy0tIGNvbXBvbmVudHM6IGNvZGUgKHNjcmlwdHMgYW5kIHZpZXdzKSBvZiBldmVyeSBmZWF0dXJlIHNob3VsZCBiZSBhIHN1Yi1kaXJlY3Rvcnk8YnIgLz5cbiAgICAgICAgICAgIHwgICB8ICAgKy0tIHNlcnZpY2VzOiBjb2RlIG9mIHNlcnZpY2VzPGJyIC8+XG4gICAgICAgICAgICB8ICAgfCAgICstLSBzdG9yZXM6IGNvZGUgb2Ygc3RvcmVzPGJyIC8+XG4gICAgICAgICAgICB8ICAgfCAgICstLSBhcHAuanM6IG1haW4gc2NyaXB0PGJyIC8+XG4gICAgICAgICAgICArLS0gZ3VscGZpbGUuYmFiZWwuanM6IGJ1aWxkIHNjcmlwdHMgKG9yIHdlYnBhY2suY29uZmlnLmpzIGlmIHlvdSBwcmVmZXIpPGJyIC8+XG4gICAgICAgICAgICArLS0gaW5kZXguaHRtbDxiciAvPlxuICAgICAgICAgICAgKy0tIHBhY2thZ2UuanNvbjogTlBNIHBhY2thZ2UgZGVmaW5pdGlvbjxiciAvPlxuICAgICAgICAgICAgKy0tIHNlcnZlci5qczogY29kZSBvZiBsb2NhbCB3ZWIgc2VydmVyIChFeHByZXNzSlMpPGJyIC8+XG4gICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgTGV04oCZcyBzdGFydCBldmFsdWF0aW5nIHRoZSBhcHBsaWNhdGlvbiBieSBsb29raW5nIGF0IDxjb2RlPmluZGV4Lmh0bWw8L2NvZGU+XG4gICAgICAgICAgPHByZSBjbGFzc05hbWU9XCJlZGl0b3JcIj57YDwhLS0gaW5kZXguaHRtbCAtLT5cbjwhRE9DVFlQRSBodG1sPlxuPGh0bWw+XG48aGVhZD5cbiAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCIgLz5cbiAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuICA8dGl0bGU+RXh0ZW5zaW9uIFJlYWN0IEFwcGxpY2F0aW9uPC90aXRsZT5cbiAgPGxpbmsgaHJlZj1cIi9ub2RlLW1vZHVsZXMvZXh0LXJlYWN0L2Nzcy9yZXh0Lm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgPGxpbmsgaHJlZj1cIi9kaXN0L2FwcC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG48L2hlYWQ+XG48Ym9keT5cbiAgPHNjcmlwdCBzcmM9XCIvZGlzdC9mcmFtZXdvcmsubWluLmpzXCI+PC9zY3JpcHQ+XG4gIDxzY3JpcHQgc3JjPVwiL2Rpc3QvYXBwLm1pbi5qc1wiPjwvc2NyaXB0PlxuPC9ib2R5PlxuPC9odG1sPmB9PC9wcmU+XG4gICAgICAgICAgVG8gbGF1bmNoIHlvdXIgYXBwLCBhZGQgdGhlIGZvbGxvd2luZyB0byB5b3VyIDxjb2RlPmFwcC5qczwvY29kZT4gZmlsZVxuICAgICAgICAgIDxwcmUgY2xhc3NOYW1lPVwiZWRpdG9yXCI+e2AvLyBhcHAuanNcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZXh0IGZyb20gJ2V4dC1yZWFjdCc7XG5pbXBvcnQgVmlld3BvcnQgZnJvbSAnLi9jb21wb25lbnRzL3ZpZXdwb3J0L3ZpZXdwb3J0JztcblxuUmV4dC5sYXVuY2goPFZpZXdwb3J0IC8+KTtgfTwvcHJlPlxuICAgICAgICA8L3A+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBIYXNoUm91dGVyLCBMaW5rIH0gZnJvbSAnfi9yZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld3BvcnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Q29udGFpbmVyPlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFuZFwiPkV4dGVuc2lvbiBSZWFjdDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1yLWF1dG9cIj5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPENvbnRhaW5lciBsYXlvdXQ9XCJjb2x1bW5cIj5cbiAgICAgICAgPGFzaWRlIHN0eWxlPXt7d2lkdGg6MzAwfX0+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL1wiIHRleHQ9XCJHRVRUSU5HIFNUQVJURURcIiAvPjwvbGk+XG4gICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwibmF2LXRleHRcIj5DT1JFIENPTkNFUFRTPC9zcGFuPjwvbGk+XG4gICAgICAgICAgICA8bGk+PExpbmsgdG89XCIvY29yZS1jb25jZXB0cy9jb21wb25lbnRcIiB0ZXh0PVwiQ29tcG9uZW50XCIgLz48L2xpPlxuICAgICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL2NvcmUtY29uY2VwdHMvZGF0YS1wYWNrYWdlXCIgdGV4dD1cIkRhdGEgUGFja2FnZVwiIC8+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayB0bz1cIi9jb3JlLWNvbmNlcHRzL3NjcmVlbi1uYXZpZ2F0aW9uXCIgdGV4dD1cIlNjcmVlbiBOYXZpZ2F0aW9uXCIgLz48L2xpPlxuICAgICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL2FyY2hpdGVjdHVyZVwiIHRleHQ9XCJBUkNISVRFQ1RVUkVcIiAvPjwvbGk+XG4gICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwibmF2LXRleHRcIj5VSSBDT01QT05FTlRTPC9zcGFuPjwvbGk+XG4gICAgICAgICAgICA8bGk+PExpbmsgdG89XCIvdWktY29tcG9uZW50cy9ncmlkc1wiIHRleHQ9XCJHcmlkc1wiIC8+PC9saT5cbiAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJuYXYtdGV4dFwiPkFQSTwvc3Bhbj48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvYXNpZGU+XG4gICAgICAgIDxDb250YWluZXIgaWQ9XCJtYWluLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxIYXNoUm91dGVyIC8+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8Zm9vdGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB0ZXh0LWNlbnRlclwiPiZjb3B5OyAyMDE3IGh1eXRyb25nbmd1eWVuPC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEV4dCBmcm9tICd+L2NvcmUvZXh0JztcbmltcG9ydCBMaXN0IGZyb20gJ34vY29yZS9saXN0JztcbmltcG9ydCBEaWN0aW9uYXJ5IGZyb20gJ34vY29yZS9kaWN0aW9uYXJ5JztcbmltcG9ydCBPYnNlcnZhYmxlIGZyb20gJ34vcmVhY3RpdmUvb2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZyA9PiBDb250cm9sbGVyID0+IHtcbiAgY29uc3QgV3JhcHBlZENvbXBvbmVudCA9IGNvbmZpZy52aWV3O1xuICByZXR1cm4gY2xhc3MgSG9jQ29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIEV4dC5pbml0aWFsU3RhdGUodGhpcywge1xuICAgICAgICBzdG9yZXM6IHt9LFxuICAgICAgICBzZXJ2aWNlczoge30sXG4gICAgICAgIFtjb25maWcuY29tcG9uZW50QXMgfHwgJyR2aWV3J106IG5ldyBDb250cm9sbGVyKHByb3BzKVxuICAgICAgfSk7XG4gICAgICB0aGlzLm9uRGF0YUNoYW5nZWQgPSAoKSA9PiB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgdGhpcy5zZXRTdG9yZXMoTGlzdChjb25maWcuc3RvcmVzKS5yZWR1Y2UoKHN0b3Jlcywgc3RvcmUpID0+IHtcbiAgICAgICAgc3RvcmUuc3Vic2NyaWJlKHRoaXMub25EYXRhQ2hhbmdlKTtcbiAgICAgICAgc3RvcmVzW3N0b3JlLnN0b3JlSWRdID0gc3RvcmU7XG4gICAgICAgIHJldHVybiBzdG9yZXM7XG4gICAgICB9LCB7fSkpO1xuXG4gICAgICB0aGlzLnNldFNlcnZpY2VzKExpc3QoY29uZmlnLnNlcnZpY2VzKS5yZWR1Y2UoKHNlcnZpY2VzLCBzZXJ2aWNlKSA9PiB7XG4gICAgICAgIHNlcnZpY2VzW3NlcnZpY2Uuc2VydmljZUlkXSA9IHNlcnZpY2U7XG4gICAgICAgIHJldHVybiBzZXJ2aWNlcztcbiAgICAgIH0sIHt9KSk7XG4gICAgfVxuXG4gICAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBjb25zdCB7IHN0b3JlcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGZvciAobGV0IHN0b3JlSWQgaW4gc3RvcmVzKSB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gc3RvcmVzW3N0b3JlSWRdO1xuICAgICAgICBzdG9yZS5hdXRvTG9hZCAmJiAoYXdhaXQgc3RvcmUubG9hZCgpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIERpY3Rpb25hcnkodGhpcy5zdGF0ZS5zdG9yZXMpLmVhY2goKHN0b3JlSWQsIHN0b3JlKSA9PiB7XG4gICAgICAgIHN0b3JlLnVuc3Vic2NyaWJlKHRoaXMub25EYXRhQ2hhbmdlZCk7XG4gICAgICAgIHN0b3JlLmNsZWFyRGF0YSh0cnVlKTtcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50IHsuLi50aGlzLnN0YXRlfSB7Li4udGhpcy5wcm9wc30gLz47XG4gICAgfVxuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhenogPT4ge1xuICBjb25zdCBzZXJ2aWNlID0gbmV3IGNsYXp6KCk7XG4gIHNlcnZpY2Uuc2VydmljZUlkID0gY2xhenoubmFtZTtcbiAgcmV0dXJuIHNlcnZpY2U7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBFeHQgZnJvbSAnfi9jb3JlL2V4dCc7XG5cbmNvbnN0IExBWU9VVF9DTEFTUyA9IHtcbiAgJ2NvbHVtbic6ICdmbGV4LXJvdycsXG4gICdyb3cnOiAnZmxleC1jb2x1bW4nLFxuICAnZml0JzogJycsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIoeyBjbGFzc05hbWUgPSAnJywgbGF5b3V0ID0gJ3JvdycsIGNoaWxkcmVuLCAuLi5vdGhlcnMgfSkge1xuICByZXR1cm4gPHNlY3Rpb24gY2xhc3NOYW1lPXtFeHQuY2xhc3NOYW1lKCdkLWZsZXgnLCBMQVlPVVRfQ0xBU1NbbGF5b3V0XSwgY2xhc3NOYW1lKX0gey4uLm90aGVyc30+e2NoaWxkcmVufTwvc2VjdGlvbj5cbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyLCB1bm1vdW50Q29tcG9uZW50QXROb2RlLCBmaW5kRE9NTm9kZSB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgRXh0LCB7IGJpbmQgfSBmcm9tICd+L2NvcmUvZXh0JztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi9jb250YWluZXInO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9mb3JtJztcblxuY2xhc3MgRGlhbG9nTWFuYWdlciB7XG4gIHNob3coZGlhbG9nKSB7XG4gICAgY29uc3QgZG9tID0gRXh0LmFwcGVuZCgnPGRpdiBjbGFzcz1cIm1hc2tcIj48L2Rpdj4nKTtcbiAgICByZW5kZXIoZGlhbG9nLCBkb20pO1xuICB9XG5cbiAgdG9hc3QoeyBkZWxheSA9IDMwMDAsIC4uLm90aGVycyB9KSB7XG4gICAgY29uc3QgZG9tID0gRXh0LmFwcGVuZCgnPGRpdiBjbGFzcz1cIm5vdGlmaWNhdGlvblwiPjwvZGl2PicpO1xuICAgIHJlbmRlcig8VG9hc3Qgey4uLm90aGVyc30gLz4sIGRvbSk7XG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgRGlhbG9nTWFuYWdlci5kZXN0cm95KGRvbSk7XG4gICAgfSwgZGVsYXkpO1xuICB9XG5cbiAgbXNnYm94KHsgLi4ub3RoZXJzIH0pIHtcbiAgICBjb25zdCBkb20gPSBFeHQuYXBwZW5kKCc8ZGl2IGNsYXNzPVwibWFza1wiPjwvZGl2PicpO1xuICAgIHJlbmRlcig8TXNnQm94IHsuLi5vdGhlcnN9IC8+LCBkb20pO1xuICB9XG5cbiAgZGlzcG9zZShkaWFsb2dJZCkge1xuICAgIHRoaXMuZGVzdHJveShFeHQuZ2V0QnlJZChkaWFsb2dJZCkucGFyZW50RWxlbWVudCk7XG4gIH1cblxuICBkZXN0cm95KGRvbSkge1xuICAgIHVubW91bnRDb21wb25lbnRBdE5vZGUocGFyZW50KTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHBhcmVudCk7XG4gIH1cblxuICBzaG93RXJyb3JNc2dib3gobWVzc2FnZSkge1xuICAgIHRoaXMubXNnYm94KHtcbiAgICAgIHRpdGxlOiAnRXJyb3InLFxuICAgICAgaWNvbjogJ3RpbWVzJyxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgRGlhbG9nTWFuYWdlcigpO1xuXG5leHBvcnQgY2xhc3MgRGlhbG9nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aXRsZSwgY2xhc3NOYW1lLCBjaGlsZHJlbiwgY2xvc2VCdXR0b24gPSB0cnVlLCAuLi5vdGhlcnMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIDxDb250YWluZXIgY2xhc3NOYW1lPXtgZGlhbG9nICR7Y2xhc3NOYW1lIHx8ICcnfWB9IHsuLi5vdGhlcnN9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2ctaGVhZGVyXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImRpYWxvZy10aXRsZSB0ZXh0LXNtLWNlbnRlclwiPnt0aXRsZSB8fCAnJ308L3A+XG4gICAgICAgIHtjbG9zZUJ1dHRvbiAmJiA8c3BhbiBjbGFzc05hbWU9XCJ0b29sXCIgb25DbGljaz17dGhpcy5kaXNwb3NlfT48L3NwYW4+fVxuICAgICAgPC9kaXY+XG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cImRpYWxvZy1ib2R5XCI+XG4gICAgICAgIDxDb250YWluZXI+e2NoaWxkcmVufTwvQ29udGFpbmVyPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Db250YWluZXI+O1xuICB9XG5cbiAgQGJpbmRcbiAgZGlzcG9zZSgpIHtcbiAgICBjb25zdCB7IG9uQ2xvc2UgfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgcGFyZW50ID0gRXh0LmdldENvbXAodGhpcykucGFyZW50KCk7XG4gICAgb25DbG9zZSAmJiBvbkNsb3NlKCk7XG4gICAgRGlhbG9nTWFuYWdlci5kZXN0cm95KHBhcmVudCk7XG4gIH1cbn1cblxuY29uc3QgYWxlcnQgPSB7XG4gIHN1Y2Nlc3M6IHtcbiAgICB0aXRsZTogJ1N1Y2Nlc3MnLFxuICAgIGljb246ICdjaGVjaydcbiAgfSxcbiAgZXJyb3I6IHtcbiAgICB0aXRsZTogJ0Vycm9yJyxcbiAgICBpY29uOiAndGltZXMnXG4gIH0sXG4gIHdhcm5pbmc6IHtcbiAgICB0aXRsZTogJ1dhcm5pbmcnLFxuICAgIGljb246ICdleGNsYW1hdGlvbidcbiAgfSxcbiAgaW5mbzoge1xuICAgIHRpdGxlOiAnSW5mb3JtYXRpb24nLFxuICAgIGljb246ICdpbmZvJ1xuICB9LFxufTtcblxuZXhwb3J0IGNsYXNzIFRvYXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5kaXNwb3NlID0gdGhpcy5kaXNwb3NlLmJpbmQodGhpcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0eXBlLCBtZXNzYWdlIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiA8Q29udGFpbmVyPlxuICAgICAgPGg2IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRcIj57YWxlcnRbdHlwZV0udGl0bGV9PC9oNj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9hc3QtaWNvblwiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT17YGZhIGZhLTJ4IGZhLSR7YWxlcnRbdHlwZV0uaWNvbn0tY2lyY2xlYH0+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2FzdC1jb250ZW50XCI+XG4gICAgICAgICAge21lc3NhZ2V9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9Db250YWluZXI+O1xuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBEaWFsb2dNYW5hZ2VyLmRlc3Ryb3koRXh0LmdldENvbXAodGhpcykucGFyZW50KCkpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNc2dCb3ggZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aXRsZSwgaWNvbiwgY2xvc2VCdXR0b24gPSB0cnVlLCBtZXNzYWdlLCBidXR0b25zID0gJ09LJywgYnV0dG9uVGV4dCA9IHt9LCBmbiB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gPERpYWxvZyB0aXRsZT17dGl0bGV9IGNsb3NlQnV0dG9uPXtjbG9zZUJ1dHRvbn0+XG4gICAgICB7IWljb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3dcIj5cbiAgICAgICAge21lc3NhZ2V9XG4gICAgICA8L2Rpdj59XG4gICAgICB7aWNvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvYXN0LWljb24gbXItc21cIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9e2BmYSBmYS0yeCBmYS0ke2ljb259LWNpcmNsZWB9PjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9hc3QtY29udGVudFwiPlxuICAgICAgICAgIHttZXNzYWdlfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2Pn1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbS1jZW50ZXIgbXQtc21cIj5cbiAgICAgICAgeyhidXR0b25zID09PSAnT0tDQU5DRUwnKSAmJiA8QnV0dG9uIGNsYXNzTmFtZT1cIm1yLXNtXCIgdGV4dD17YnV0dG9uVGV4dC5jYW5jZWwgfHwgJ0NhbmNlbCd9IG9uQ2xpY2s9eygpID0+IHRoaXMuZGlzcG9zZSgpfSAvPn1cbiAgICAgICAgPEJ1dHRvbiAgdGV4dD17YnV0dG9uVGV4dC5vayB8fCAnT0snfSBvbkNsaWNrPXsoKSA9PiB7dGhpcy5kaXNwb3NlKCk7IGZuICYmIGZuKCk7fX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvRGlhbG9nPjtcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgRGlhbG9nTWFuYWdlci5kZXN0cm95KEV4dC5nZXRDb21wKHRoaXMpLnBhcmVudCgpKTtcbiAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRXh0IGZyb20gJ34vY29yZS9leHQnO1xuXG5leHBvcnQgZnVuY3Rpb24gQnV0dG9uKHsgY2xhc3NOYW1lID0gJycsIHRleHQsIGNoaWxkcmVuLCAuLi5vdGhlcnMgfSkge1xuICByZXR1cm4gPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtFeHQuY2xhc3NOYW1lKCdidG4nLCBjbGFzc05hbWUpfSB7Li4ub3RoZXJzfT5cbiAgICB7dGV4dCB8fCBjaGlsZHJlbn1cbiAgPC9idXR0b24+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQnRuTGluayh7IHRleHQsIGNoaWxkcmVuLCAuLi5vdGhlcnMgfSkge1xuICByZXR1cm4gPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIHsuLi5vdGhlcnN9Pnt0ZXh0IHx8IGNoaWxkcmVufTwvYT5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEZpZWxkKHsgdHlwZSA9ICd0ZXh0JywgaW5saW5lID0gZmFsc2UsIGxhYmVsID0gJycsIGxhYmVsV2lkdGggPSAzLCB2YWx1ZSwgb25DaGFuZ2UsIC4uLm90aGVycyB9KSB7XG4gIHJldHVybiA8YXJ0aWNsZSBjbGFzc05hbWU9e0V4dC5jbGFzc05hbWUoJ2Zvcm0tZ3JvdXAnLCB7ICdyb3cnOiBpbmxpbmUgfSl9PlxuICA8bGFiZWwgY2xhc3NOYW1lPXtFeHQuY2xhc3NOYW1lKHsgW2Bjb2wtc20tJHtsYWJlbFdpZHRofSB0ZXh0LXNtLXJpZ2h0YF06IGlubGluZSB9KX0+e2xhYmVsfTwvbGFiZWw+XG4gIDxkaXYgY2xhc3NOYW1lPXtFeHQuY2xhc3NOYW1lKHsgW2Bjb2wtc20tJHsxMiAtIGxhYmVsV2lkdGh9YF06IGlubGluZSB9KX0+XG4gICAgeyh0eXBlID09PSAndGV4dCcpICYmIDxUZXh0RmllbGQgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17b25DaGFuZ2V9IHsuLi5vdGhlcnN9IC8+fVxuICAgIHsodHlwZSA9PT0gJ2NoZWNrYm94JykgJiYgPENoZWNrYm94IHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e29uQ2hhbmdlfSB7Li4ub3RoZXJzfSAvPn1cbiAgICB7KHR5cGUgPT09ICd0ZXh0YXJlYScpICYmIDxUZXh0QXJlYSB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gey4uLm90aGVyc30gLz59XG4gIDwvZGl2PlxuPC9hcnRpY2xlPlxufVxuXG5leHBvcnQgZnVuY3Rpb24gVGV4dEZpZWxkKHsgdmFsdWUgPSAnJywgY2xhc3NOYW1lID0gJycsIG9uQ2hhbmdlLCAuLi5vdGhlcnMgfSkge1xuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBlID0+IG9uQ2hhbmdlICYmIG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKTtcbiAgcmV0dXJuIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17RXh0LmNsYXNzTmFtZSgnZm9ybS1jb250cm9sJywgY2xhc3NOYW1lKX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gey4uLm90aGVyc30gLz47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDaGVja2JveCh7IHZhbHVlID0gZmFsc2UsIG9uQ2hhbmdlLCAuLi5vdGhlcnMgfSkge1xuICBjb25zdCB0b2dnbGVDaGVjayA9ICgpID0+IG9uQ2hhbmdlKCF2YWx1ZSk7XG4gIHJldHVybiA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17dmFsdWV9IG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZUNoZWNrfSB7Li4ub3RoZXJzfSAvPjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRleHRBcmVhKHsgcm93cyA9ICczJywgdmFsdWUgPSAnJywgY2xhc3NOYW1lID0gJycsIG9uQ2hhbmdlLCAuLi5vdGhlcnMgfSkge1xuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBlID0+IG9uQ2hhbmdlICYmIG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKTtcbiAgcmV0dXJuIDx0ZXh0YXJlYSByb3dzPXtyb3dzfSBjbGFzc05hbWU9e0V4dC5jbGFzc05hbWUoJ2Zvcm0tY29udHJvbCcsIGNsYXNzTmFtZSl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB7Li4ub3RoZXJzfSAvPjtcbn0iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBFeHQgZnJvbSAnfi9jb3JlL2V4dCc7XG5pbXBvcnQgTGlzdCBmcm9tICd+L2NvcmUvbGlzdCc7XG5pbXBvcnQgT2JzZXJ2YWJsZSBmcm9tICd+L3JlYWN0aXZlL29ic2VydmFibGUnO1xuXG5jb25zdCBST1VURVMgPSB7fSxcbiAgICAgIGdldFJvdXRlID0gKCkgPT4gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpIHx8ICcvJyxcbiAgICAgIGdldFJvdXRlUGF0aCA9IHJvdXRlID0+IHJvdXRlLnNwbGl0KCcvJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBSb3V0ZShyb3V0ZSkge1xuICByZXR1cm4gY29tcCA9PiB7XG4gICAgUk9VVEVTW3JvdXRlXSA9IHtcbiAgICAgIHJvdXRlLFxuICAgICAgY29tcCxcbiAgICAgIHBhdGg6IGdldFJvdXRlUGF0aChyb3V0ZSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExpbmsoeyB0bywgY2xhc3NOYW1lID0gJycsIGFjdGl2ZUNsYXNzTmFtZSA9ICdhY3RpdmUnLCB0ZXh0LCBjaGlsZHJlbiwgLi4ub3RoZXJzIH0pIHtcbiAgcmV0dXJuIDxhIGhyZWY9e2AjJHt0b31gfSBjbGFzc05hbWU9e0V4dC5jbGFzc05hbWUoJ25hdi1saW5rJywgY2xhc3NOYW1lLCB7IFthY3RpdmVDbGFzc05hbWVdOiB0byA9PT0gZ2V0Um91dGUoKSB9KX0gey4uLm90aGVyc30+XG4gICAge3RleHQgfHwgY2hpbGRyZW59XG4gIDwvYT5cbn1cblxuZXhwb3J0IGNsYXNzIEhhc2hSb3V0ZXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgRXh0LmluaXRpYWxTdGF0ZSh0aGlzLCBtYXRjaFBhdGgoKSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBPYnNlcnZhYmxlLmZyb21FdmVudCh3aW5kb3csICdoYXNoY2hhbmdlJykuc3Vic2NyaWJlKHsgbmV4dDogKCkgPT4gdGhpcy5zZXRTdGF0ZShtYXRjaFBhdGgoKSkgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZSwgY29tcCwgcGFyYW1zIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKCFjb21wKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdDb21wb25lbnQgbm90IGZvdW5kIScpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29tcCwgeyByb3V0ZSwgcGFyYW1zIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hdGNoUGF0aCgpIHtcbiAgY29uc3QgcGFyYW1zID0ge30sXG4gICAgICAgIGN1cnJlbnRSb3V0ZSA9IGdldFJvdXRlKCk7XG5cbiAgLy8gYmFzaWMgcm91dGUgKHdpdGhvdXQgcGFyYW1zKVxuICBpZiAoUk9VVEVTW2N1cnJlbnRSb3V0ZV0pIHtcbiAgICByZXR1cm4geyByb3V0ZTogY3VycmVudFJvdXRlLCBjb21wOiBST1VURVNbY3VycmVudFJvdXRlXS5jb21wLCBwYXJhbXMgfTtcbiAgfVxuXG4gIC8vIGFkdmFuY2VkIHJvdXRlICh3aXRoIHBhcmFtcylcbiAgY29uc3QgY3VycmVudFBhdGggPSBnZXRSb3V0ZVBhdGgoY3VycmVudFJvdXRlKTtcbiAgZm9yKGxldCByb3V0ZSBpbiBST1VURVMpIHtcbiAgICBjb25zdCBtYXBSb3V0ZSA9IFJPVVRFU1tyb3V0ZV0sXG4gICAgICAgICAgcm91dGVQYXRoID0gbWFwUm91dGUucGF0aDtcblxuICAgIGxldCBtYXRjaGVkID0gdHJ1ZTtcbiAgICBMaXN0KG1hcFJvdXRlLnBhdGgpLmVhY2goKHJvdXRlTmFtZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChyb3V0ZU5hbWUgIT09IGN1cnJlbnRQYXRoW2luZGV4XSkge1xuICAgICAgICBpZiAocm91dGVOYW1lLnN0YXJ0c1dpdGgoJzonKSkgeyAvLyBkZXRlY3QgcGFyYW0gdmFsdWVcbiAgICAgICAgICBwYXJhbXNbcm91dGVOYW1lLnN1YnN0cmluZygxKV0gPSBjdXJyZW50UGF0aFtpbmRleF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWF0Y2hlZCA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKG1hdGNoZWQpIHtcbiAgICAgIHJldHVybiB7IHJvdXRlOiBjdXJyZW50Um91dGUsIGNvbXA6IG1hcFJvdXRlLmNvbXAsIHBhcmFtcyB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIHdpdGggbm90IGZvdW5kIHNjcmVlblxuICBpZiAoUk9VVEVTWycqJ10pIHtcbiAgICByZXR1cm4geyByb3V0ZTogY3VycmVudFJvdXRlLCBjb21wOiBST1VURVNbJyonXS5jb21wLCBwYXJhbXMgfTtcbiAgfVxuXG4gIC8vIHdpdGhvdXQgbm90IGZvdW5kIHNjcmVlblxuICByZXR1cm4geyByb3V0ZTogY3VycmVudFJvdXRlLCBjb21wOiBudWxsLCBwYXJhbXMgfTtcbn0iLCJpbXBvcnQgTGlzdCBmcm9tICcuL2xpc3QnO1xuXG5leHBvcnQgY2xhc3MgRGljdGlvbmFyeSB7XG4gIGNvbnN0cnVjdG9yKGtleVZhbHVlcykge1xuICAgIHRoaXMuZGF0YSA9IHt9O1xuICAgIGlmIChrZXlWYWx1ZXMgJiYga2V5VmFsdWVzLmxlbmd0aCkge1xuICAgICAgdGhpcy5kYXRhID0gT2JqZWN0LmFzc2lnbih7fSwga2V5VmFsdWVzKTtcbiAgICB9XG5cbiAgICB0aGlzLmtleXMgPSAoKSA9PiBMaXN0KE9iamVjdC5rZXlzKHRoaXMuZGF0YSkpO1xuICAgIHRoaXMudmFsdWVzID0gKCkgPT4gTGlzdChPYmplY3QudmFsdWVzKHRoaXMuZGF0YSkpO1xuICB9XG5cbiAgZWFjaChpdGVyYXRlZSkge1xuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmRhdGEpIHtcbiAgICAgIGl0ZXJhdGVlKHRoaXMuZGF0YVtrZXldLCBrZXksIHRoaXMuZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChrZXlWYWx1ZXMpID0+IG5ldyBEaWN0aW9uYXJ5KGtleVZhbHVlcyk7IiwiaW1wb3J0IHsgTGlzdCB9IGZyb20gJy4vbGlzdCc7XG5cbmNsYXNzIERPTSBleHRlbmRzIExpc3Qge1xuICBzaG93KCkge1xuICAgIHRoaXMuc2VsZWN0b3JzLmVhY2goc2VsZWN0b3IgPT4gc2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jaycpO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLnNlbGVjdG9ycy5lYWNoKHNlbGVjdG9yID0+IHNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScpO1xuICB9XG5cbiAgLy8gcGFyZW50KCkge1xuICAvLyAgIHRoaXMuY29tcCA9IHRoaXMuY29tcC5wYXJlbnRFbGVtZW50O1xuICAvLyAgIHJldHVybiB0aGlzO1xuICAvLyB9XG5cbiAgLy8gd2lkdGgoKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMuY29tcC5jbGllbnRXaWR0aDtcbiAgLy8gfVxuXG4gIC8vIGhlaWdodCgpIHtcbiAgLy8gICByZXR1cm4gdGhpcy5jb21wLmNsaWVudEhlaWdodDtcbiAgLy8gfVxuXG4gIC8vIGZpbmQoc2VsZWN0b3IpIHtcbiAgLy8gICByZXR1cm4gdGhpcy5jb21wLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAvLyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChzZWxlY3RvcikgPT4gbmV3IERPTShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7IiwiaW1wb3J0IERPTSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgU3RyaW5nIGZyb20gJy4vc3RyaW5nJztcbmltcG9ydCBMaXN0IGZyb20gJy4vbGlzdCc7XG5pbXBvcnQgRGljdGlvbmFyeSBmcm9tICcuL2RpY3Rpb25hcnknO1xuXG5leHBvcnQgY2xhc3MgRXh0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5TQ1JPTExfV0lEVEggPSB0aGlzLmdldFNjcm9sbFdpZHRoKCk7XG4gICAgdGhpcy5CT1JERVJfV0lEVEggPSAyO1xuICAgIHRoaXMuQ0hFQ0tfQ09MVU1OX1dJRFRIID0gMzM7XG4gICAgdGhpcy5VTktOT1dOX0VSUk9SX01TRyA9ICdBbiB1bmtub3duIGVycm9yIGhhcyBvY2N1cnJlZC4nO1xuICAgIHRoaXMuWEhSID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICB0aGlzLmlzUHJpbWl0aXZlID0gdmFsdWUgPT4geyBjb25zdCB0eXBlID0gdHlwZW9mIHZhbHVlOyByZXR1cm4gdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZSA9PT0gJ251bWJlcicgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nOyB9XG4gICAgdGhpcy5pc1N0cmluZyA9IHZhbHVlID0+ICh0eXBlb2YgdmFsdWUpID09PSAnc3RyaW5nJztcbiAgICB0aGlzLmlzRnVuY3Rpb24gPSB2YWx1ZSA9PiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICB0aGlzLmlzT2JqZWN0ID0gdmFsdWUgPT4gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xuICAgIHRoaXMuaXNBcnJheSA9IHZhbHVlID0+IHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nO1xuXG4gICAgdGhpcy5jbG9uZSA9IG9iaiA9PiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpOyAvLyBkZWVwIGNsb25lXG5cbiAgICB0aGlzLkRPTSA9IERPTTtcbiAgICB0aGlzLlN0cmluZyA9IFN0cmluZztcbiAgICB0aGlzLkxpc3QgPSBMaXN0O1xuICAgIHRoaXMuTWFwID0gRGljdGlvbmFyeTtcbiAgICB0aGlzLlByb3ZpZGVyID0gbmV3IERpY3Rpb25hcnkoKTtcbiAgfVxuXG4gIGV4dGVuZCgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbi5hcHBseShudWxsLCBhcmd1bWVudHMpOyAvLyBpbW11dGFibGUgb2JqZWN0XG4gIH1cblxuICBpbml0aWFsU3RhdGUoY29tcCwgc3RhdGUpIHtcbiAgICBpZiAoIWNvbXAgfHwgIXN0YXRlKSB7IHJldHVybjsgfVxuICAgIGNvbXAuc3RhdGUgPSBzdGF0ZTtcbiAgICBmb3IgKGxldCBmaWVsZCBvZiBPYmplY3Qua2V5cyhzdGF0ZSkpIHtcbiAgICAgIGNvbXBbYHNldCR7U3RyaW5nLmNhcGl0YWxpemUoZmllbGQpfWBdID0gdmFsdWUgPT4gY29tcC5zZXRTdGF0ZSh7IFtmaWVsZF06IHZhbHVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNsYXNzTmFtZSguLi5leHByZXNzaW9ucykge1xuICAgIGNvbnN0IGNscyA9IFtdO1xuXG4gICAgTGlzdChleHByZXNzaW9ucykuZWFjaChleHAgPT4ge1xuICAgICAgaWYgKCFleHApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGV4cCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY2xzLnB1c2goZXhwKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc09iamVjdChleHApKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBleHApIHtcbiAgICAgICAgICBpZiAoZXhwW2tleV0gPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNscy5wdXNoKGtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGNscy5qb2luKCcgJyk7XG4gIH1cblxuICAvLyNyZWdpb24gRE9NXG4gIGNyZWF0ZUVsZW1lbnQoaHRtbCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5pbm5lckhUTUwgPSBodG1sO1xuICAgIHJldHVybiBkaXYuY2hpbGRyZW5bMF07XG4gIH1cblxuICBnZXRFbChzZWxlY3Rvcikge1xuICAgIHJldHVybiBET00oc2VsZWN0b3IpO1xuICB9XG5cbiAgZ2V0U2Nyb2xsV2lkdGgoKSB7XG4gICAgY29uc3Qgb3V0ZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJzxkaXYgc3R5bGU9XCJ2aXNpYmlsaXR5OiBoaWRkZW47IHdpZHRoOiAxMDBweDsgb3ZlcmZsb3c6IHNjcm9sbDtcIj48L2Rpdj4nKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG91dGVyKTtcbiAgICBjb25zdCB3aWR0aE5vU2Nyb2xsID0gb3V0ZXIub2Zmc2V0V2lkdGg7XG5cbiAgICAvLyBhZGQgaW5uZXJkaXZcbiAgICBjb25zdCBpbm5lciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnPGRpdiBzdHlsZT1cIndpZHRoOiAxMDAlO1wiPjwvZGl2PicpO1xuICAgIG91dGVyLmFwcGVuZENoaWxkKGlubmVyKTtcbiAgICBjb25zdCB3aWR0aFdpdGhTY3JvbGwgPSBpbm5lci5vZmZzZXRXaWR0aDtcblxuICAgIC8vIHJlbW92ZSBkaXZzXG4gICAgb3V0ZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvdXRlcik7XG5cbiAgICByZXR1cm4gd2lkdGhOb1Njcm9sbCAtIHdpZHRoV2l0aFNjcm9sbDtcbiAgfVxuICAvLyNlbmRyZWdpb25cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEV4dCgpO1xuXG5leHBvcnQgZnVuY3Rpb24gYmluZCh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpIHtcbiAgY29uc3QgZm4gPSBkZXNjcmlwdG9yLnZhbHVlO1xuXG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEBiaW5kIGRlY29yYXRvciBpcyBvbmx5IGFwcGxpZWQgdG8gZnVuY3Rpb25zIG5vdDogJHt0eXBlb2YgZm59YCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQoKSB7XG4gICAgICByZXR1cm4gZm4uYmluZCh0aGlzKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0ID0gNTAwKSB7XG4gIGxldCB0aW1lb3V0O1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsXG4gICAgICAgICAgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgICBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgICB9XG5cbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICB9XG59IiwiZXhwb3J0IGNsYXNzIExpc3Qge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZGF0YSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMuY29sbGVjdCA9ICgpID0+IHRoaXMuZGF0YTtcbiAgICB0aGlzLmNvdW50ID0gKCkgPT4gdGhpcy5kYXRhLmxlbmd0aDtcbiAgICB0aGlzLmdldEF0ID0gaW5kZXggPT4gdGhpcy5kYXRhW2luZGV4XTtcbiAgICB0aGlzLmFkZCA9IGl0ZW0gPT4gdGhpcy5kYXRhLnB1c2goaXRlbSk7XG4gICAgdGhpcy5pbnNlcnQgPSAoaXRlbSwgaW5kZXggPSAwKSA9PiB0aGlzLmRhdGEuc3BsaWNlKGluZGV4LCAwLCBpdGVtKTtcbiAgICB0aGlzLnJlbW92ZUF0ID0gKGluZGV4LCBjb3VudCA9IDEpID0+IHRoaXMuZGF0YS5zcGxpY2UoaW5kZXgsIGNvdW50KTtcbiAgICB0aGlzLmpvaW4gPSBzZXBhcmF0b3IgPT4gdGhpcy5kYXRhLmpvaW4oc2VwYXJhdG9yKTtcbiAgfVxuXG4gIGVhY2goaXRlcmF0ZWUpIHtcbiAgICBmb3IgKGxldCBpbmRleCBpbiB0aGlzLmRhdGEpIHtcbiAgICAgIGl0ZXJhdGVlKHRoaXMuZGF0YVtpbmRleF0sIGluZGV4LCB0aGlzLmRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGZpbHRlcihwcmVkaWNhdGUpIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICB0aGlzLmVhY2goKGl0ZW0sIGluZGV4LCBhcnJheSkgPT4ge1xuICAgICAgaWYgKHByZWRpY2F0ZShpdGVtLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBuZXcgTGlzdChyZXN1bHQpO1xuICB9XG5cbiAgbWFwKGl0ZXJhdGVlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgdGhpcy5lYWNoKChpdGVtLCBpbmRleCwgYXJyYXkpID0+IHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpdGVtLCBpbmRleCwgYXJyYXkpKTtcbiAgICByZXR1cm4gbmV3IExpc3QocmVzdWx0KTtcbiAgfVxuXG4gIHJlZHVjZShpdGVyYXRlZSwgYWNjdW11bGF0b3IpIHtcbiAgICB0aGlzLmVhY2goKGl0ZW0sIGluZGV4LCBhcnJheSkgPT4gYWNjdW11bGF0b3IgPSBpdGVyYXRlZShhY2N1bXVsYXRvciwgaXRlbSwgaW5kZXgsIGFycmF5KSk7XG4gICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICB9XG5cbiAgZmluZEluZGV4KHByZWRpY2F0ZSkge1xuICAgIGxldCBpbmRleCA9IC0xO1xuICAgIGZvciAobGV0IGlkeCA9IDAsIGl0ZW07IChpdGVtID0gdGhpcy5kYXRhW2lkeF0pICE9IG51bGw7ICsraWR4KSB7XG4gICAgICBpZiAocHJlZGljYXRlKGl0ZW0sIGlkeCwgdGhpcy5kYXRhKSkge1xuICAgICAgICBpbmRleCA9IGlkeDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIGZpbmQocHJlZGljYXRlKSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5maW5kSW5kZXgocHJlZGljYXRlKTtcbiAgICByZXR1cm4gaW5kZXggPiAtMSA/IHRoaXMuZGF0YVtpbmRleF0gOiBudWxsO1xuICB9XG5cbiAgY29udGFpbnMocHJlZGljYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMuZmluZChwcmVkaWNhdGUpICE9PSBudWxsO1xuICB9XG5cbiAgcmVtb3ZlSWYocHJlZGljYXRlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgdGhpcy5lYWNoKChpdGVtLCBpbmRleCwgYXJyYXkpID0+IHtcbiAgICAgIGlmICghcHJlZGljYXRlKGl0ZW0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5kYXRhID0gcmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh2YWx1ZSkgPT4gbmV3IExpc3QodmFsdWUpOyIsImNsYXNzIFN0cmluZyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FwaXRhbGl6ZSA9IHZhbHVlID0+IHZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSk7XG4gIH1cblxuICBodG1sRW5jb2RlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoLyYvZywgJyZhbXA7JylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csICcmIzM5OycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbiAgfVxuXG4gIGh0bWxEZWNvZGUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvJmFtcDsvZywgJycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLyZsdDsvZywgJzwnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8mZ3Q7Pi9nLCAnPicpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLyYjMzk7L2csIFwiJ1wiKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8mcXVvdDsvZywgJ1wiJyk7XG4gIH1cblxuICB0b1F1ZXJ5U3RyaW5nKHBhcmFtcywgc2VwLCBlbmNvZGUpIHtcbiAgICBzZXAgICAgPSBzZXAgPT09IHVuZGVmaW5lZCA/ICcmJyA6IHNlcDtcbiAgICBlbmNvZGUgPSBlbmNvZGUgPT09IGZhbHNlID8gZnVuY3Rpb24ocykgeyByZXR1cm4gczsgfSA6IGVuY29kZVVSSUNvbXBvbmVudDtcblxuICAgIGxldCBwYWlycyA9IFtdO1xuICAgIGZvciAobGV0IGtleSBpbiBwYXJhbXMpIHtcbiAgICAgIHBhaXJzLnB1c2goYCR7a2V5fT0ke2VuY29kZShwYXJhbXNba2V5XSl9YCk7XG4gICAgfVxuICAgIHJldHVybiBwYWlycy5qb2luKHNlcCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFN0cmluZygpOyIsImltcG9ydCB7IExpc3QgfSBmcm9tICd+L2NvcmUvbGlzdCc7XG5pbXBvcnQgU3ViamVjdCBmcm9tICd+L3JlYWN0aXZlL3N1YmplY3QnO1xuaW1wb3J0IE1vZGVsIGZyb20gJy4vbW9kZWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYnN0cmFjdFN0b3JlIGV4dGVuZHMgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICAvLyNyZWdpb24gY29uZmlnc1xuICAgIHRoaXMudG90YWxDb3VudCA9IDA7XG4gICAgdGhpcy5wYWdlU2l6ZSA9IDA7XG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XG4gICAgdGhpcy5zdWJqZWN0ID0gU3ViamVjdC5jcmVhdGUoKTtcbiAgICAvLyNlbmRyZWdpb25cblxuICAgIC8vI3JlZ2lvbiBwcm9wZXJ0aWVzXG4gICAgLy8jZW5kcmVnaW9uXG5cbiAgICAvLyNyZWdpb24gbWV0aG9kc1xuICAgIHRoaXMuc3Vic2NyaWJlID0gb2JzZXJ2ZXIgPT4gdGhpcy5zdWJqZWN0LnN1YnNjcmliZShvYnNlcnZlcik7XG4gICAgdGhpcy51bnN1YnNjcmliZSA9IG9ic2VydmVyID0+IHRoaXMuc3ViamVjdC51bnN1YnNjcmliZShvYnNlcnZlcik7XG4gICAgdGhpcy5maXJlRXZlbnQgPSAoKSA9PiB0aGlzLnN1YmplY3QubmV4dCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZVJlY29yZCA9IHJlY29yZCA9PiBuZXcgTW9kZWwocmVjb3JkLCB0aGlzKTtcbiAgICB0aGlzLmdldFJlY29yZHMgPSB0aGlzLmNvbGxlY3Q7XG4gICAgdGhpcy5nZXRNb2RpZmllZFJlY29yZHMgPSAoKSA9PiB0aGlzLmZpbHRlcihyZWNvcmQgPT4gcmVjb3JkLmlzTW9kaWZpZWQoKSk7XG4gICAgdGhpcy5nZXROZXdSZWNvcmRzID0gKCkgPT4gdGhpcy5maWx0ZXIocmVjb3JkID0+IHJlY29yZC5pc05ld2x5Q3JlYXRlZCgpKTtcbiAgICAvLyNlbmRyZWdpb25cbiAgfVxuXG4gIGNsZWFyRGF0YShzaWxlbnQgPSBmYWxzZSkge1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICFzaWxlbnQgJiYgdGhpcy5maXJlRXZlbnQoKTtcbiAgfVxuXG4gIGxvYWREYXRhKGRhdGEpIHtcbiAgICB0aGlzLmNsZWFyRGF0YSh0cnVlKTtcbiAgICB0aGlzLmRhdGEgPSAobmV3IExpc3QoZGF0YSkpLm1hcCh0aGlzLmNyZWF0ZVJlY29yZC5iaW5kKHRoaXMpKS5jb2xsZWN0KCk7XG4gICAgdGhpcy5maXJlRXZlbnQoKTtcbiAgfVxuXG4gIGNvbW1pdENoYW5nZXMoKSB7XG4gICAgdGhpcy5maWx0ZXIocmVjb3JkID0+IHJlY29yZC5pc01vZGlmaWVkKCkgfHwgcmVjb3JkLmlzTmV3bHlDcmVhdGVkKCkpLmVhY2gocmVjb3JkID0+IHJlY29yZC5zYXZlKCkpO1xuICAgIHRoaXMuZmlyZUV2ZW50KCk7XG4gIH1cblxuICByZWplY3RDaGFuZ2VzKCkge1xuICAgIHRoaXMuZmlsdGVyKHJlY29yZCA9PiByZWNvcmQuaXNNb2RpZmllZCgpKS5lYWNoKHJlY29yZCA9PiByZWNvcmQucmVqZWN0KHRydWUpKTtcbiAgICB0aGlzLmRhdGEgPSB0aGlzLmZpbHRlcihyZWNvcmQgPT4gIXJlY29yZC5pc05ld2x5Q3JlYXRlZCgpKS5jb2xsZWN0KCk7XG4gICAgdGhpcy5maXJlRXZlbnQoKTtcbiAgfVxufSIsImltcG9ydCBTdHJpbmcgZnJvbSAnfi9jb3JlL3N0cmluZyc7XG5pbXBvcnQgRXh0IGZyb20gJ34vY29yZS9leHQnO1xuXG5jbGFzcyBBamF4IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgRXh0LmV4dGVuZChBamF4LnByb3RvdHlwZSwge1xuICAgICAgeGhyOiBuZXcgWE1MSHR0cFJlcXVlc3QoKSxcbiAgICAgIGFqYXhCZWZvcmU6ICgpID0+IHsgLyogdG8gYmUgaW1wbGVtZW50ZWQgKi8gfSxcbiAgICAgIGFqYXhFcnJvcjogKGVycm9yKSA9PiB7IC8qIHRvIGJlIGltcGxlbWVudGVkICovIH0sXG4gICAgICBhamF4Q29tcGxldGU6ICgpID0+IHsgLyogdG8gYmUgaW1wbGVtZW50ZWQgKi8gfVxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgcmVxdWVzdCh7IHVybCwgY29udGVudFR5cGUgPSAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsIG1ldGhvZCA9ICdnZXQnLCBwYXJhbXMsIG5leHQsIGVycm9yLCBjb21wbGV0ZSB9KSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCByZXNwb25zZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuYWpheEJlZm9yZSgpO1xuICAgICAgICByZXNwb25zZSA9IGF3YWl0IHRoaXMucHJvbWlzZSh7IHVybCwgY29udGVudFR5cGUsIG1ldGhvZCwgcGFyYW1zIH0pO1xuICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgQ2Fubm90IGdldCByZXNwb25zZSBmcm9tIHNlcnZlciBmb3IgdXJsIFske3VybH1dIGNhdXNlZCBieTogJHtleH1gKTtcbiAgICAgICAgdGhpcy5hamF4RXJyb3IoZXgpO1xuICAgICAgICBlcnJvciAmJiBlcnJvcihleCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV4dCA/IG5leHQocmVzcG9uc2UpIDogcmVzcG9uc2U7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuYWpheENvbXBsZXRlKCk7XG4gICAgICBjb21wbGV0ZSAmJiBjb21wbGV0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByb21pc2Uoc2V0dGluZ3MpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5jcmVhdGVSZXF1ZXN0KHNldHRpbmdzLCAoZXJyLCByZXMpID0+IGVyciA/IHJlamVjdChlcnIpIDogcmVzb2x2ZShyZXMpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZVJlcXVlc3QoeyB1cmwsIGNvbnRlbnRUeXBlLCBtZXRob2QsIHBhcmFtcyB9LCBkb25lKSB7XG4gICAgKG1ldGhvZCA9PT0gJ2dldCcgJiYgcGFyYW1zKSAmJiAodXJsID0gYCR7dXJsfT8ke1N0cmluZy50b1F1ZXJ5U3RyaW5nKHBhcmFtcyl9YCk7XG4gICAgY29uc3QgeGhyID0gdGhpcy54aHI7XG4gICAgeGhyLm9wZW4obWV0aG9kLCB1cmwsIHRydWUpO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCBjb250ZW50VHlwZSk7XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgIGlmKHhoci5yZWFkeVN0YXRlID09PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XG4gICAgICAgIC8vIGFqYXggd2lsbCByZXR1cm4gYXMgYSBqc29uIGJ5IGRlZmF1bHQsIGlmIHBhcnNlciBlcnJvciB0aGVuIGl0IHdpbGwgcmV0dXJuIGEgcmF3IHN0cmluZ1xuICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRvbmUobnVsbCwgSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZG9uZShudWxsLCB4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRvbmUoSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZG9uZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgeGhyLnNlbmQocGFyYW1zID8gSlNPTi5zdHJpbmdpZnkocGFyYW1zKSA6IG51bGwpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBBamF4KCk7IiwiY2xhc3MgQ2FjaGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9jYWNoZSA9IHt9O1xuICB9XG5cbiAgaGFzTG9jYWxTdG9yYWdlKCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gJ2xvY2FsU3RvcmFnZScgaW4gd2luZG93ICYmIHdpbmRvdy5sb2NhbFN0b3JhZ2UgIT09IG51bGw7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGdldChrZXkpIHtcbiAgICBpZiAodGhpcy5oYXNMb2NhbFN0b3JhZ2UoKSkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkgfHwgdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5fY2FjaGVba2V5XSB8fCB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICBpZiAodGhpcy5oYXNMb2NhbFN0b3JhZ2UoKSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jYWNoZVtrZXldID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlKGtleSkge1xuICAgIGlmICgha2V5KSB7XG4gICAgICB0aGlzLl9jYWNoZSA9IHt9O1xuICAgIH0gZWxzZSBpZiAodGhpcy5oYXNMb2NhbFN0b3JhZ2UoKSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHRoaXMuX2NhY2hlW2tleV07XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDYWNoZSgpOyIsImltcG9ydCBFeHQgZnJvbSAnfi9jb3JlL2V4dCc7XG5pbXBvcnQgTGlzdCBmcm9tICd+L2NvcmUvbGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGVsIHtcbiAgY29uc3RydWN0b3IoZGF0YSwgc3RvcmUpIHtcbiAgICAvLyNyZWdpb24gY29uZmlnc1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAvLyNlbmRyZWdpb25cblxuICAgIC8vI3JlZ2lvbiBwcm9wZXJ0aWVzXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLnN0b3JlID0gc3RvcmU7XG4gICAgdGhpcy5pZFByb3BlcnR5ID0gKHN0b3JlICYmIHN0b3JlLmlkUHJvcGVydHkpID8gc3RvcmUuaWRQcm9wZXJ0eSA6ICdpZCc7XG4gICAgY29uc3QgZmllbGRDb25maWcgPSAoc3RvcmUgJiYgc3RvcmUuZmllbGRzKSA/IHN0b3JlLmZpZWxkcyA6IFtdO1xuICAgIHRoaXMuZmllbGRzID0gTGlzdChmaWVsZENvbmZpZykubWFwKGZpZWxkID0+IEV4dC5pc1N0cmluZyhmaWVsZCkgPyAoeyBuYW1lOiBmaWVsZCwgdHlwZTogJ3N0cmluZycgfSkgOiBmaWVsZCk7XG4gICAgLy8jZW5kcmVnaW9uXG5cbiAgICAvLyNyZWdpb24gbWV0aG9kc1xuICAgIHRoaXMuZ2V0RGF0YSA9ICgpID0+IHRoaXMuZGF0YTtcbiAgICB0aGlzLmdldCA9IGZpZWxkTmFtZSA9PiB0aGlzLmRhdGFbZmllbGROYW1lXTtcbiAgICAvLyNlbmRyZWdpb25cblxuICAgIHRoaXMuc2F2ZSgpO1xuICB9XG5cbiAgc2V0KGZpZWxkTmFtZSwgbmV3VmFsdWUsIHNpbGVudCkge1xuICAgIHRoaXMuZGF0YVtmaWVsZE5hbWVdID0gbmV3VmFsdWU7XG4gICAgdGhpcy5tb2RpZmllZCA9ICF0aGlzLmlzRXF1YWwoZmllbGROYW1lKTtcbiAgICAoIXNpbGVudCAmJiB0aGlzLnN0b3JlKSAmJiAodGhpcy5zdG9yZS5maXJlRXZlbnQoKSk7XG4gIH1cblxuICBzYXZlKCkge1xuICAgIHRoaXMucGhhbnRvbSA9IEV4dC5jbG9uZSh0aGlzLmRhdGEpO1xuICAgIHRoaXMubW9kaWZpZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHJlamVjdChzaWxlbnQpIHtcbiAgICB0aGlzLmRhdGEgPSBFeHQuY2xvbmUodGhpcy5waGFudG9tKTtcbiAgICB0aGlzLnNhdmUoKTtcbiAgICAoIXNpbGVudCAmJiB0aGlzLnN0b3JlKSAmJiAodGhpcy5zdG9yZS5maXJlRXZlbnQoKSk7XG4gIH1cblxuICBpc0VxdWFsKGZpZWxkKSB7XG4gICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzLnBoYW50b21bZmllbGQubmFtZV0sXG4gICAgICAgICAgbmV3VmFsdWUgPSB0aGlzLmRhdGFbZmllbGQubmFtZV07XG5cbiAgICByZXR1cm4gZmllbGQuZXF1YWxzID8gZmllbGQuZXF1YWxzKG5ld1ZhbHVlLCBvbGRWYWx1ZSkgOiBuZXdWYWx1ZSA9PT0gb2xkVmFsdWU7XG4gIH1cblxuICBpc01vZGlmaWVkKGZpZWxkTmFtZSkge1xuICAgIHJldHVybiB0aGlzLm1vZGlmaWVkICYmICF0aGlzLnBoYW50b21bdGhpcy5pZFByb3BlcnR5XTsgLy8gc2hvdWxkIG5vdCBkZXRlY3QgbmV3IHJlY29yZCBhcyBhIG1vZGlmaWVkIHJlY29yZFxuICB9XG5cbiAgaXNOZXdseUNyZWF0ZWQoKSB7XG4gICAgcmV0dXJuICF0aGlzLnBoYW50b21bdGhpcy5pZFByb3BlcnR5XTtcbiAgfVxuXG4gIHNldFNlbGVjdGVkKHNlbGVjdGVkLCBzaWxlbnQpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgKCFzaWxlbnQgJiYgdGhpcy5zdG9yZSkgJiYgKHRoaXMuc3RvcmUuZmlyZUV2ZW50KCkpO1xuICB9XG59IiwiaW1wb3J0IEV4dCBmcm9tICd+L2NvcmUvZXh0JztcbmltcG9ydCBBamF4IGZyb20gJy4vYWpheCc7XG5pbXBvcnQgQWJzdHJhY3RTdG9yZSBmcm9tICcuL2Fic3RyYWN0LXN0b3JlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJveHlTdG9yZSBleHRlbmRzIEFic3RyYWN0U3RvcmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLy8jcmVnaW9uIGNvbmZpZ3NcbiAgICB0aGlzLnByb3h5ID0ge1xuICAgICAgcmVhZGVyOiB7fSxcbiAgICAgIHdyaXRlcjoge31cbiAgICB9O1xuICAgIC8vI2VuZHJlZ2lvblxuICB9XG5cbiAgYXN5bmMgbG9hZCh7IGRvbmUsIGZhaWwsIGFsd2F5cyB9KSB7XG4gICAgT2JzZXJ2YWJsZS5hamF4KHRoaXMucHJveHkpLnN1YnNjcmliZSh7XG4gICAgICBuZXh0OiB2YWx1ZSA9PiB7XG4gICAgICAgIGNvbnN0IHsgcm9vdFByb3BlcnR5LCB0b3RhbFByb3BlcnR5IH0gPSB0aGlzLnByb3h5LnJlYWRlcjtcbiAgICAgICAgdGhpcy5sb2FkRGF0YShyb290UHJvcGVydHkgPyByZXNwb25zZVtyb290UHJvcGVydHldIDogcmVzcG9uc2UpO1xuICAgICAgICB0aGlzLnRvdGFsQ291bnQgPSAodGhpcy5wYWdlU2l6ZSAmJiB0b3RhbFByb3BlcnR5KSA/IHJlc3BvbnNlW3RvdGFsUHJvcGVydHldIDogdGhpcy5jb3VudCgpO1xuICAgICAgICBkb25lICYmIGRvbmUodGhpcy5nZXRSZWNvcmRzKCkpO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiBmYWlsLFxuICAgICAgY29tcGxldGU6IGFsd2F5c1xuICAgIH0pO1xuICB9XG5cbiAgbG9hZFBhZ2UocGFnZSkge1xuICAgIHRoaXMuY3VycmVudFBhZ2UgPSBwYWdlO1xuICAgIHRoaXMucHJveHkucGFyYW1zID0gRXh0LmV4dGVuZCh7fSwgdGhpcy5wcm94eS5wYXJhbXMsIHsgcGFnZTogdGhpcy5jdXJyZW50UGFnZSwgc2l6ZTogdGhpcy5wYWdlU2l6ZSB9KTtcbiAgICByZXR1cm4gdGhpcy5sb2FkKHt9KTtcbiAgfVxuXG4gIGFzeW5jIHN5bmMoeyBkb25lLCBmYWlsLCBhbHdheXMgfSkge1xuICAgIHRoaXMucHJveHkubWV0aG9kID0gJ3Bvc3QnO1xuICAgIHRoaXMucHJveHkucGFyYW1zID0gdGhpcy5nZXRNb2RpZmllZFJlY29yZHMoKS5tYXAocmVjb3JkID0+IHJlY29yZC5kYXRhKS5jb2xsZWN0KCk7XG4gICAgdGhpcy5wcm94eS5wcm94eS5wYXJhbXMucHVzaCguLi50aGlzLmdldE5ld1JlY29yZHMoKS5tYXAocmVjb3JkID0+IHJlY29yZC5kYXRhKS5jb2xsZWN0KCkpO1xuICAgIGNvbnN0IHsgdHJhbnNmb3JtIH0gPSBwcm94eS53cml0ZXI7XG4gICAgdHJhbnNmb3JtICYmICh0aGlzLnByb3h5LnBhcmFtcyA9IHRyYW5zZm9ybSh0aGlzLnByb3h5LnBhcmFtcykpO1xuICAgIE9ic2VydmFibGUuYWpheCh0aGlzLnByb3h5KS5zdWJzY3JpYmUoe1xuICAgICAgbmV4dDogZG9uZSxcbiAgICAgIGVycm9yOiBmYWlsLFxuICAgICAgY29tcGxldGU6IGFsd2F5c1xuICAgIH0pO1xuICB9XG59IiwiaW1wb3J0IEV4dCBmcm9tICd+L2NvcmUvZXh0JztcbmltcG9ydCBQcm94eVN0b3JlIGZyb20gJy4vcHJveHktc3RvcmUnO1xuXG5jbGFzcyBTdG9yZSBleHRlbmRzIFByb3h5U3RvcmUge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcigpO1xuICAgIEV4dC5leHRlbmQodGhpcywgY29uZmlnKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25maWcgPT4gbmV3IFN0b3JlKGNvbmZpZyk7IiwiaW1wb3J0IEV4dCBmcm9tICd+L2NvcmUvZXh0JztcblxuY2xhc3MgQWpheE9ic2VydmFibGUge1xuICBjb25zdHJ1Y3Rvcih1cmxPclJlcXVlc3QpIHtcbiAgICB0aGlzLnJlcXVlc3QgPSBFeHQuZXh0ZW5kKHtcbiAgICAgIHVybDogJycsXG4gICAgICBwYXJhbXM6ICcnLFxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04JyxcbiAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgfSwgRXh0LmlzU3RyaW5nKHVybE9yUmVxdWVzdCkgPyB7IHVybDogdXJsT3JSZXF1ZXN0IH0gOiB1cmxPclJlcXVlc3QpO1xuXG4gICAgdGhpcy5wcm9taXNlID0gcmVxdWVzdCA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmNyZWF0ZVJlcXVlc3QocmVxdWVzdCwgKGVycm9yLCByZXNwb25zZSkgPT4gZXJyb3IgPyByZWplY3QoZXJyb3IpIDogcmVzb2x2ZShyZXNwb25zZSkpO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgc3Vic2NyaWJlKHsgbmV4dCwgZXJyb3IsIGNvbXBsZXRlIH0pIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHJlc3BvbnNlO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnByb21pc2UoeyB1cmwsIGNvbnRlbnRUeXBlLCBtZXRob2QsIHBhcmFtcyB9KTtcbiAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYENhbm5vdCBnZXQgcmVzcG9uc2UgZnJvbSBzZXJ2ZXIgZm9yIHVybCBbJHt1cmx9XSBjYXVzZWQgYnk6ICR7ZXh9YCk7XG4gICAgICAgIGVycm9yICYmIGVycm9yKGV4KTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXh0ID8gbmV4dChyZXNwb25zZSkgOiByZXNwb25zZTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgY29tcGxldGUgJiYgY29tcGxldGUoKTtcbiAgICB9XG4gIH1cblxuICBzZW5kKHsgdXJsLCBjb250ZW50VHlwZSwgbWV0aG9kLCBwYXJhbXMgfSwgZG9uZSkge1xuICAgIChtZXRob2QgPT09ICdnZXQnICYmIHBhcmFtcykgJiYgKHVybCA9IGAke3VybH0/JHtTdHJpbmcudG9RdWVyeVN0cmluZyhwYXJhbXMpfWApO1xuICAgIGNvbnN0IHhociA9IEV4dC5YSFI7XG4gICAgeGhyLm9wZW4obWV0aG9kLCB1cmwsIHRydWUpO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCBjb250ZW50VHlwZSk7XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgIGlmKHhoci5yZWFkeVN0YXRlID09PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XG4gICAgICAgIC8vIGFqYXggd2lsbCByZXR1cm4gYXMgYSBqc29uIGJ5IGRlZmF1bHQsIGlmIHBhcnNlciBlcnJvciB0aGVuIGl0IHdpbGwgcmV0dXJuIGEgcmF3IHN0cmluZ1xuICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRvbmUobnVsbCwgSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZG9uZShudWxsLCB4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRvbmUoSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZG9uZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgeGhyLnNlbmQocGFyYW1zID8gSlNPTi5zdHJpbmdpZnkocGFyYW1zKSA6IG51bGwpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZSh1cmxPclJlcXVlc3QpIHtcbiAgICByZXR1cm4gbmV3IEFqYXhPYnNlcnZhYmxlKHVybE9yUmVxdWVzdCk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudE9ic2VydmFibGUge1xuICBjb25zdHJ1Y3Rvcih0YXJnZXQsIGV2ZW50TmFtZSwgb3B0aW9ucykge1xuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgIHRoaXMuZXZlbnROYW1lID0gZXZlbnROYW1lO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKHRoaXMuZXZlbnROYW1lLCBvYnNlcnZlciwgdGhpcy5vcHRpb25zKTtcbiAgfVxuXG4gIHVuc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50TmFtZSwgb2JzZXJ2ZXIsIHRoaXMub3B0aW9ucyk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlKHRhcmdldCwgZXZlbnROYW1lLCBvcHRpb25zID0gZmFsc2UpIHtcbiAgICByZXR1cm4gbmV3IEV2ZW50T2JzZXJ2YWJsZSh0YXJnZXQsIGV2ZW50TmFtZSwgb3B0aW9ucyk7XG4gIH1cbn0iLCJpbXBvcnQgT3BlcmF0b3IgZnJvbSAnLi9vcGVyYXRvcic7XG5pbXBvcnQgRXZlbnRPYnNlcnZhYmxlIGZyb20gJy4vZXZlbnQnO1xuaW1wb3J0IEFqYXhPYnNlcnZhYmxlIGZyb20gJy4vYWpheCc7XG5cbi8qKlxuICogRnJvbSBSZWFjdGl2ZVggZG9jczpcbiAqXG4gKiBPYnNlcnZhYmxlOiBBbiBpbnRlcmZhY2UgdGhhdCBsaXN0ZW5zIGZvciBpbmNvbWluZyBub3RpZmljYXRpb25zIG92ZXIgYSBwZXJpb2Qgb2YgdGltZVxuICogYW5kIHB1c2hlcyB0aGVtIHRvIGFub3RoZXIgaW50ZXJmYWNlIHRoYXQgcmVhY3RzIHRvIHRoZW0uXG4gKlxuICogU3Vic2NyaXB0aW9uOiBXaGVuIGFuIE9ic2VydmFibGUgaW50ZXJmYWNlIHN0YXJ0cyBkb2luZyBpdHMgd29yayxcbiAqIGkuZS4gbGlzdGVuaW5nIGZvciBub3RpZmljYXRpb25zIGFuZCBwdXNoaW5nIHRoZW0gb3V0LlxuICpcbiAqIE9ic2VydmVyOiBBbiBpbnRlcmZhY2UgdGhhdCByZWFjdHMgdG8gZGF0YSBwdXNoZWQgZnJvbSBhbiBPYnNlcnZhYmxlLlxuICpcbiAqIE9wZXJhdG9yczogRnVuY3Rpb25zIHVzZWQgdG8gbWFuaXB1bGF0ZSBhbiBPYnNlcnZhYmxl4oCZcyBvdXRwdXQsIGUuZy4gZmlsdGVyLCBtYXAsIHJlZHVjZSwgZXRjLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYnNlcnZhYmxlIGV4dGVuZHMgT3BlcmF0b3Ige1xuICBjb25zdHJ1Y3RvcihzdWJzY3JpYmUpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3Vic2NyaWJlID0gc3Vic2NyaWJlO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZShzdWJzY3JpYmUpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoc3Vic2NyaWJlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3IgZXhhbXBsZTpcbiAgICogY29uc3QgaW5wdXQkID0gT2JzZXJ2YWJsZS5mcm9tRXZlbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0JyksICdjaGFuZ2UnKTtcbiAgICpcbiAgICogY29uc3QgdW5zdWJjcmliZSA9IGlucHV0JC5zdWJzY3JpYmUoe1xuICAgKiAgICBuZXh0OiBlID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKVxuICAgKiB9KTtcbiAgICpcbiAgICogc2V0VGltZW91dCh1bnN1YmNyaWJlLCA1MDAwKTtcbiAgICpcbiAgICogQHBhcmFtIHRhcmdldFxuICAgKiBAcGFyYW0gZXZlbnROYW1lXG4gICAqL1xuICBzdGF0aWMgZnJvbUV2ZW50KHRhcmdldCwgZXZlbnROYW1lKSB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKG9ic2VydmVyID0+IHtjb25zb2xlLmxvZyhvYnNlcnZlcilcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZSA9PiBvYnNlcnZlci5uZXh0KGUpO1xuICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaywgZmFsc2UpO1xuICAgICAgcmV0dXJuICgpID0+IHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGZhbHNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBhamF4KHVybE9yUmVxdWVzdCkge1xuICAgIHJldHVybiBBamF4T2JzZXJ2YWJsZS5jcmVhdGUodXJsT3JSZXF1ZXN0KTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wZXJhdG9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5maWx0ZXIgPSBwcmVkaWNhdGUgPT4geyAvKiB0byBiZSBpbXBsZW1lbnRlZCAqLyB9O1xuICAgIHRoaXMubWFwID0gcHJlZGljYXRlID0+IHsgLyogdG8gYmUgaW1wbGVtZW50ZWQgKi8gfTtcbiAgICB0aGlzLnJlZHVjZSA9IHByZWRpY2F0ZSA9PiB7IC8qIHRvIGJlIGltcGxlbWVudGVkICovIH07XG4gIH1cbn0iLCJpbXBvcnQgTGlzdCBmcm9tICd+L2NvcmUvbGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YmplY3QgZXh0ZW5kcyBMaXN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUoKSB7XG4gICAgcmV0dXJuIG5ldyBTdWJqZWN0KCk7XG4gIH1cblxuICBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICB0aGlzLmFkZChvYnNlcnZlcik7XG4gIH1cblxuICB1bnN1YnNjcmliZSgpIHtcbiAgICB0aGlzLmRhdGEgPSB0aGlzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IG9ic2VydmVyKS5jb2xsZWN0KCk7XG4gIH1cblxuICBuZXh0KC4uLmFyZ3MpIHtcbiAgICB0aGlzLmVhY2gob2JzZXJ2ZXIgPT4gb2JzZXJ2ZXIuYXBwbHkodGhpcywgYXJncykpO1xuICB9XG59IiwiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IEV4dCB9IGZyb20gJy4vY29yZS9leHQnO1xuXG5jbGFzcyBSZXh0IGV4dGVuZHMgRXh0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLkNhY2hlID0gcmVxdWlyZSgnLi9kYXRhL2NhY2hlJyk7XG4gICAgdGhpcy5Nb2RlbCA9IHJlcXVpcmUoJy4vZGF0YS9tb2RlbCcpO1xuICAgIHRoaXMuT2JzZXJ2YWJsZSA9IHJlcXVpcmUoJy4vcmVhY3RpdmUvb2JzZXJ2YWJsZScpO1xuICAgIHRoaXMuRGlhbG9nTWFuYWdlciA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9kaWFsb2cnKTtcbiAgfVxuXG4gIGFzeW5jIGxhdW5jaCh2aWV3cG9ydCkge1xuICAgIGlmICghd2luZG93LmxvY2F0aW9uLmhhc2gpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJy8nO1xuICAgIH1cblxuICAgIGNvbnN0IHJvb3QgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJzxkaXYgaWQ9XCJyZWFjdC1yb290XCI+PC9kaXY+Jyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyb290KTtcbiAgICB0aGlzLmlzRnVuY3Rpb24odmlld3BvcnQpICYmICh2aWV3cG9ydCA9IGF3YWl0IHZpZXdwb3J0KCkpO1xuICAgIHJlbmRlcih2aWV3cG9ydCwgcm9vdCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFJleHQoKTtcblxuLy8jcmVnaW9uIENvbXBvbmVudFxuZXhwb3J0IHsgSGFzaFJvdXRlciwgTGluayB9IGZyb20gJy4vY29tcG9uZW50cy9yb3V0ZXInO1xuZXhwb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRhaW5lcic7XG5leHBvcnQgeyBCdXR0b24sIEJ1dHRvbkxpbmssIEZpZWxkLCBUZXh0RmllbGQsIENoZWNrYm94LCBUZXh0QXJlYSB9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtJztcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgR3JpZCB9IGZyb20gJy4vY29tcG9uZW50cy9ncmlkJztcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgTGlzdFZpZXcgfSBmcm9tICcuL2NvbXBvbmVudHMvbGlzdCc7XG4vLyBleHBvcnQgeyBEaWFsb2cgfSBmcm9tICcuL2NvbXBvbmVudHMvZGlhbG9nJztcbi8vI2VuZHJlZ2lvblxuXG4vLyNyZWdpb24gRGVjb3JhdG9yIChvciBIaWdoZXIgT3JkZXIgRnVuY3Rpb24gb3IgSGlnaGVyIE9yZGVyIENvbXBvbmVudClcbmV4cG9ydCB7IGJpbmQsIGRlYm91bmNlIH0gZnJvbSAnLi9jb3JlL2V4dCc7XG5leHBvcnQgeyBSb3V0ZSB9IGZyb20gJy4vY29tcG9uZW50cy9yb3V0ZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb21wb25lbnQgfSBmcm9tICcuL2FwcC9jb21wb25lbnQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXJ2aWNlIH0gZnJvbSAnLi9hcHAvc2VydmljZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFN0b3JlIH0gZnJvbSAnLi9kYXRhL3N0b3JlJztcbi8vI2VuZHJlZ2lvbiJdfQ==
