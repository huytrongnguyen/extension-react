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
            { className: 'mb-md' },
            'Extension React is a library that build on top of React, helping you build data-intensive, cross-platform web apps for desktops, tablets, and smartphones.'
          ),
          _react2.default.createElement(
            'h2',
            { className: 'mb-md' },
            'Quick Start'
          ),
          _react2.default.createElement(
            'h3',
            { className: 'mb-md' },
            '1. Setup a development enviroment'
          ),
          _react2.default.createElement(
            'p',
            { className: 'mb-md' },
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
              null,
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
            { className: 'mb-md' },
            '2. Create a new project'
          ),
          _react2.default.createElement(
            'p',
            { className: 'mb-md' },
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
              { className: 'editor mb-md' },
              '<!-- index.html -->\n<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8" />\n  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n  <title>Extension React Application</title>\n  <link href="/node-modules/ext-react/css/rext.min.css" rel="stylesheet" />\n  <link href="/dist/app.min.css" rel="stylesheet" />\n</head>\n<body>\n  <script src="/dist/framework.min.js"></script>\n  <script src="/dist/app.min.js"></script>\n</body>\n</html>'
            ),
            _react2.default.createElement(
              'p',
              { className: 'mb-md' },
              'To launch your app, add the following to your ',
              _react2.default.createElement(
                'code',
                null,
                'app.js'
              ),
              ' file'
            ),
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
        { layout: 'column' },
        _react2.default.createElement(
          _rext.Container,
          { className: 'nav', style: { width: 300 } },
          _react2.default.createElement(
            'header',
            null,
            _react2.default.createElement(
              'h1',
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
            'nav',
            { className: 'mb-auto d-flex' },
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
            'footer',
            null,
            _react2.default.createElement(
              'div',
              { className: 'nav-text' },
              '\xA9 2017 huytrongnguyen'
            )
          )
        ),
        _react2.default.createElement(
          _rext.Container,
          { id: 'main-container' },
          _react2.default.createElement(_rext.HashRouter, null)
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
     * const unsubcribe = Observable.fromEvent(document.getElementById('input'), 'change').subscribe({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkb2NzL3NyYy9qcy9hcHAuanMiLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2dldHRpbmctc3RhcnRlZC9nZXR0aW5nLXN0YXJ0ZWQuanN4IiwiZG9jcy9zcmMvanMvY29tcG9uZW50cy92aWV3cG9ydC92aWV3cG9ydC5qc3giLCJzcmMvYXBwL2NvbXBvbmVudC5qcyIsInNyYy9hcHAvc2VydmljZS5qcyIsInNyYy9jb21wb25lbnRzL2NvbnRhaW5lci5qc3giLCJzcmMvY29tcG9uZW50cy9kaWFsb2cuanN4Iiwic3JjL2NvbXBvbmVudHMvZm9ybS5qc3giLCJzcmMvY29tcG9uZW50cy9yb3V0ZXIuanN4Iiwic3JjL2NvcmUvZGljdGlvbmFyeS5qcyIsInNyYy9jb3JlL2RvbS5qcyIsInNyYy9jb3JlL2V4dC5qcyIsInNyYy9jb3JlL2xpc3QuanMiLCJzcmMvY29yZS9zdHJpbmcuanMiLCJzcmMvZGF0YS9hYnN0cmFjdC1zdG9yZS5qcyIsInNyYy9kYXRhL2FqYXguanMiLCJzcmMvZGF0YS9jYWNoZS5qcyIsInNyYy9kYXRhL21vZGVsLmpzIiwic3JjL2RhdGEvcHJveHktc3RvcmUuanMiLCJzcmMvZGF0YS9zdG9yZS5qcyIsInNyYy9yZWFjdGl2ZS9hamF4LmpzIiwic3JjL3JlYWN0aXZlL2V2ZW50LmpzIiwic3JjL3JlYWN0aXZlL29ic2VydmFibGUuanMiLCJzcmMvcmVhY3RpdmUvb3BlcmF0b3IuanMiLCJzcmMvcmVhY3RpdmUvc3ViamVjdC5qcyIsInNyYy9yZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBSyxNQUFMLENBQVksdURBQVo7Ozs7Ozs7Ozs7Ozs7O0FDWEE7Ozs7QUFDQTs7Ozs7Ozs7OztJQUdxQixjLFdBRHBCLGlC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O0FBQUE7O0FBQUE7O0FBRVosVUFBSyxLQUFMLEdBQWEsUUFBUSxjQUFSLENBQWI7QUFDQSxVQUFLLEtBQUwsR0FBYSxRQUFRLGNBQVIsQ0FBYjtBQUNBLFVBQUssVUFBTCxHQUFrQixRQUFRLHVCQUFSLENBQWxCO0FBQ0EsVUFBSyxhQUFMLEdBQXFCLFFBQVEscUJBQVIsQ0FBckI7QUFMWTtBQU1iOzs7OzswRkFFWSxROzs7Ozs7QUFDWCxvQkFBSSxDQUFDLE9BQU8sUUFBUCxDQUFnQixJQUFyQixFQUEyQjtBQUN6Qix5QkFBTyxRQUFQLENBQWdCLElBQWhCLEdBQXVCLEdBQXZCO0FBQ0Q7O0FBRUssb0IsR0FBTyxLQUFLLGFBQUwsQ0FBbUIsNkJBQW5CLEM7O0FBQ2IseUJBQVMsSUFBVCxDQUFjLFdBQWQsQ0FBMEIsSUFBMUI7OEJBQ0EsS0FBSyxVQUFMLENBQWdCLFFBQWhCLEM7Ozs7Ozs7O3VCQUErQyxVOzs7QUFBakIsd0I7OztBQUM5QixzQ0FBTyxRQUFQLEVBQWlCLElBQWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBSVcsSUFBSSxJQUFKLEU7O0FBRWYiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJleHQgZnJvbSAnfi9yZXh0JztcbmltcG9ydCBWaWV3cG9ydCBmcm9tICcuL2NvbXBvbmVudHMvdmlld3BvcnQvdmlld3BvcnQnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvZ2V0dGluZy1zdGFydGVkL2dldHRpbmctc3RhcnRlZCc7XG4vLyBpbXBvcnQgUmV4dENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvY29yZS1jb25jZXB0cy9jb21wb25lbnQnO1xuLy8gaW1wb3J0IERhdGFQYWNrYWdlIGZyb20gJy4vY29tcG9uZW50cy9jb3JlLWNvbmNlcHRzL2RhdGEtcGFja2FnZSc7XG4vLyBpbXBvcnQgU2NyZWVuTmF2aWdhdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvY29yZS1jb25jZXB0cy9zY3JlZW4tbmF2aWdhdGlvbic7XG4vLyBpbXBvcnQgQXJjaGl0ZWN0dXJlIGZyb20gJy4vY29tcG9uZW50cy9hcmNoaXRlY3R1cmUvYXJjaGl0ZWN0dXJlJztcbi8vIGltcG9ydCBHcmlkQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy91aS1jb21wb25lbnRzL2dyaWQnO1xuXG5SZXh0LmxhdW5jaCg8Vmlld3BvcnQgLz4pOyIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIENvbnRhaW5lciB9IGZyb20gJ34vcmV4dCc7XG5cbkBSb3V0ZSgnLycpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZXR0aW5nU3RhcnRlZCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxDb250YWluZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWhlYWRlclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGFuZWwtdGl0bGVcIj5HZXR0aW5nIFN0YXJ0ZWQ8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5cbiAgICAgICAgICBFeHRlbnNpb24gUmVhY3QgaXMgYSBsaWJyYXJ5IHRoYXQgYnVpbGQgb24gdG9wIG9mIFJlYWN0LCBoZWxwaW5nIHlvdSBidWlsZCBkYXRhLWludGVuc2l2ZSwgY3Jvc3MtcGxhdGZvcm0gd2ViIGFwcHMgZm9yIGRlc2t0b3BzLCB0YWJsZXRzLCBhbmQgc21hcnRwaG9uZXMuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLW1kXCI+UXVpY2sgU3RhcnQ8L2gyPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItbWRcIj4xLiBTZXR1cCBhIGRldmVsb3BtZW50IGVudmlyb21lbnQ8L2gzPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlxuICAgICAgICAgIFVzZSA8Y29kZT5ucG08L2NvZGU+IG9yIDxjb2RlPnlhcm48L2NvZGU+IHRvIGluc3RhbGwgZm9sbG93aW5nIGRlcGVuZGVuY2llczpcbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+PHByZT5iYWJlbC1wb2x5ZmlsbDwvcHJlPjwvbGk+XG4gICAgICAgICAgICA8bGk+PHByZT5iYWJlbC1wcmVzZXQtZW52PC9wcmU+PC9saT5cbiAgICAgICAgICAgIDxsaT48cHJlPmJhYmVsLXByZXNldC1yZWFjdDwvcHJlPjwvbGk+XG4gICAgICAgICAgICA8bGk+PHByZT5kMzwvcHJlPjwvbGk+XG4gICAgICAgICAgICA8bGk+PHByZT5mb250LWF3ZXNvbWU8L3ByZT48L2xpPlxuICAgICAgICAgICAgPGxpPjxwcmU+cmVhY3Q8L3ByZT48L2xpPlxuICAgICAgICAgICAgPGxpPjxwcmU+ZXh0LXJlYWN0PC9wcmU+PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi1tZFwiPjIuIENyZWF0ZSBhIG5ldyBwcm9qZWN0PC9oMz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5cbiAgICAgICAgICBUaGUgZm9sbG93aW5nIGlzIHRoZSByZWNvbW1lbmRlZCBkaXJlY3Rvcnkgc3RydWN0dXJlIGZvciBhbiBFeHRlbnNpb24gUmVhY3QgYXBwbGljYXRpb246XG4gICAgICAgICAgPHByZSBjbGFzc05hbWU9XCJlZGl0b3JcIj5cbiAgICAgICAgICAgICstLSBub2RlX21vZHVsZXM6IE5QTSBjb21wb25lbnRzPGJyIC8+XG4gICAgICAgICAgICArLS0gZGlzdDxiciAvPlxuICAgICAgICAgICAgfCAgICstLSBhcHAubWluLmNzczxiciAvPlxuICAgICAgICAgICAgfCAgICstLSBhcHAubWluLmpzPGJyIC8+XG4gICAgICAgICAgICB8ICAgKy0tIGZyYW1ld29yay5taW4uanM8YnIgLz5cbiAgICAgICAgICAgICstLSBzcmM8YnIgLz5cbiAgICAgICAgICAgIHwgICArLS0gY3NzPGJyIC8+XG4gICAgICAgICAgICB8ICAgfCAgICstLSBfdmFyaWFibGVzLnNjc3M6IGFwcGxpY2F0aW9uIHN0eWxlcyBjb25zdGFudCB2YWx1ZXM8YnIgLz5cbiAgICAgICAgICAgIHwgICB8ICAgKy0tIGFwcC5zY3NzOiBhcHBsaWNhdGlvbiBzdHlsZXM8YnIgLz5cbiAgICAgICAgICAgIHwgICArLS0ganM8YnIgLz5cbiAgICAgICAgICAgIHwgICB8ICAgKy0tIGNvbW1vbjogY29kZSBvZiBzaGFyZWQgZnVuY3Rpb25zIG9yIHNoYXJlZCBjb21wb25lbnRzPGJyIC8+XG4gICAgICAgICAgICB8ICAgfCAgICstLSBjb21wb25lbnRzOiBjb2RlIChzY3JpcHRzIGFuZCB2aWV3cykgb2YgZXZlcnkgZmVhdHVyZSBzaG91bGQgYmUgYSBzdWItZGlyZWN0b3J5PGJyIC8+XG4gICAgICAgICAgICB8ICAgfCAgICstLSBzZXJ2aWNlczogY29kZSBvZiBzZXJ2aWNlczxiciAvPlxuICAgICAgICAgICAgfCAgIHwgICArLS0gc3RvcmVzOiBjb2RlIG9mIHN0b3JlczxiciAvPlxuICAgICAgICAgICAgfCAgIHwgICArLS0gYXBwLmpzOiBtYWluIHNjcmlwdDxiciAvPlxuICAgICAgICAgICAgKy0tIGd1bHBmaWxlLmJhYmVsLmpzOiBidWlsZCBzY3JpcHRzIChvciB3ZWJwYWNrLmNvbmZpZy5qcyBpZiB5b3UgcHJlZmVyKTxiciAvPlxuICAgICAgICAgICAgKy0tIGluZGV4Lmh0bWw8YnIgLz5cbiAgICAgICAgICAgICstLSBwYWNrYWdlLmpzb246IE5QTSBwYWNrYWdlIGRlZmluaXRpb248YnIgLz5cbiAgICAgICAgICAgICstLSBzZXJ2ZXIuanM6IGNvZGUgb2YgbG9jYWwgd2ViIHNlcnZlciAoRXhwcmVzc0pTKTxiciAvPlxuICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgIExldOKAmXMgc3RhcnQgZXZhbHVhdGluZyB0aGUgYXBwbGljYXRpb24gYnkgbG9va2luZyBhdCA8Y29kZT5pbmRleC5odG1sPC9jb2RlPlxuICAgICAgICAgIDxwcmUgY2xhc3NOYW1lPVwiZWRpdG9yIG1iLW1kXCI+e2A8IS0tIGluZGV4Lmh0bWwgLS0+XG48IURPQ1RZUEUgaHRtbD5cbjxodG1sPlxuPGhlYWQ+XG4gIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8+XG4gIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cbiAgPHRpdGxlPkV4dGVuc2lvbiBSZWFjdCBBcHBsaWNhdGlvbjwvdGl0bGU+XG4gIDxsaW5rIGhyZWY9XCIvbm9kZS1tb2R1bGVzL2V4dC1yZWFjdC9jc3MvcmV4dC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gIDxsaW5rIGhyZWY9XCIvZGlzdC9hcHAubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuPC9oZWFkPlxuPGJvZHk+XG4gIDxzY3JpcHQgc3JjPVwiL2Rpc3QvZnJhbWV3b3JrLm1pbi5qc1wiPjwvc2NyaXB0PlxuICA8c2NyaXB0IHNyYz1cIi9kaXN0L2FwcC5taW4uanNcIj48L3NjcmlwdD5cbjwvYm9keT5cbjwvaHRtbD5gfTwvcHJlPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+VG8gbGF1bmNoIHlvdXIgYXBwLCBhZGQgdGhlIGZvbGxvd2luZyB0byB5b3VyIDxjb2RlPmFwcC5qczwvY29kZT4gZmlsZTwvcD5cbiAgICAgICAgICA8cHJlIGNsYXNzTmFtZT1cImVkaXRvclwiPntgLy8gYXBwLmpzXG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmV4dCBmcm9tICdleHQtcmVhY3QnO1xuaW1wb3J0IFZpZXdwb3J0IGZyb20gJy4vY29tcG9uZW50cy92aWV3cG9ydC92aWV3cG9ydCc7XG5cblJleHQubGF1bmNoKDxWaWV3cG9ydCAvPik7YH08L3ByZT5cbiAgICAgICAgPC9wPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Db250YWluZXI+XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgSGFzaFJvdXRlciwgTGluayB9IGZyb20gJ34vcmV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdwb3J0IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPENvbnRhaW5lciBsYXlvdXQ9XCJjb2x1bW5cIj5cbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwibmF2XCIgc3R5bGU9e3t3aWR0aDozMDB9fT5cbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYnJhbmRcIj5FeHRlbnNpb24gUmVhY3Q8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtci1hdXRvXCI+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJtYi1hdXRvIGQtZmxleFwiPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT48TGluayB0bz1cIi9cIiB0ZXh0PVwiR0VUVElORyBTVEFSVEVEXCIgLz48L2xpPlxuICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cIm5hdi10ZXh0XCI+Q09SRSBDT05DRVBUUzwvc3Bhbj48L2xpPlxuICAgICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL2NvcmUtY29uY2VwdHMvY29tcG9uZW50XCIgdGV4dD1cIkNvbXBvbmVudFwiIC8+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayB0bz1cIi9jb3JlLWNvbmNlcHRzL2RhdGEtcGFja2FnZVwiIHRleHQ9XCJEYXRhIFBhY2thZ2VcIiAvPjwvbGk+XG4gICAgICAgICAgICA8bGk+PExpbmsgdG89XCIvY29yZS1jb25jZXB0cy9zY3JlZW4tbmF2aWdhdGlvblwiIHRleHQ9XCJTY3JlZW4gTmF2aWdhdGlvblwiIC8+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayB0bz1cIi9hcmNoaXRlY3R1cmVcIiB0ZXh0PVwiQVJDSElURUNUVVJFXCIgLz48L2xpPlxuICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cIm5hdi10ZXh0XCI+VUkgQ09NUE9ORU5UUzwvc3Bhbj48L2xpPlxuICAgICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL3VpLWNvbXBvbmVudHMvZ3JpZHNcIiB0ZXh0PVwiR3JpZHNcIiAvPjwvbGk+XG4gICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwibmF2LXRleHRcIj5BUEk8L3NwYW4+PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi10ZXh0XCI+JmNvcHk7IDIwMTcgaHV5dHJvbmduZ3V5ZW48L2Rpdj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDxDb250YWluZXIgaWQ9XCJtYWluLWNvbnRhaW5lclwiPlxuICAgICAgICA8SGFzaFJvdXRlciAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Db250YWluZXI+XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBFeHQgZnJvbSAnfi9jb3JlL2V4dCc7XG5pbXBvcnQgTGlzdCBmcm9tICd+L2NvcmUvbGlzdCc7XG5pbXBvcnQgRGljdGlvbmFyeSBmcm9tICd+L2NvcmUvZGljdGlvbmFyeSc7XG5pbXBvcnQgT2JzZXJ2YWJsZSBmcm9tICd+L3JlYWN0aXZlL29ic2VydmFibGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWcgPT4gQ29udHJvbGxlciA9PiB7XG4gIGNvbnN0IFdyYXBwZWRDb21wb25lbnQgPSBjb25maWcudmlldztcbiAgcmV0dXJuIGNsYXNzIEhvY0NvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICBFeHQuaW5pdGlhbFN0YXRlKHRoaXMsIHtcbiAgICAgICAgc3RvcmVzOiB7fSxcbiAgICAgICAgc2VydmljZXM6IHt9LFxuICAgICAgICBbY29uZmlnLmNvbXBvbmVudEFzIHx8ICckdmlldyddOiBuZXcgQ29udHJvbGxlcihwcm9wcylcbiAgICAgIH0pO1xuICAgICAgdGhpcy5vbkRhdGFDaGFuZ2VkID0gKCkgPT4gdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgIHRoaXMuc2V0U3RvcmVzKExpc3QoY29uZmlnLnN0b3JlcykucmVkdWNlKChzdG9yZXMsIHN0b3JlKSA9PiB7XG4gICAgICAgIHN0b3JlLnN1YnNjcmliZSh0aGlzLm9uRGF0YUNoYW5nZSk7XG4gICAgICAgIHN0b3Jlc1tzdG9yZS5zdG9yZUlkXSA9IHN0b3JlO1xuICAgICAgICByZXR1cm4gc3RvcmVzO1xuICAgICAgfSwge30pKTtcblxuICAgICAgdGhpcy5zZXRTZXJ2aWNlcyhMaXN0KGNvbmZpZy5zZXJ2aWNlcykucmVkdWNlKChzZXJ2aWNlcywgc2VydmljZSkgPT4ge1xuICAgICAgICBzZXJ2aWNlc1tzZXJ2aWNlLnNlcnZpY2VJZF0gPSBzZXJ2aWNlO1xuICAgICAgICByZXR1cm4gc2VydmljZXM7XG4gICAgICB9LCB7fSkpO1xuICAgIH1cblxuICAgIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgY29uc3QgeyBzdG9yZXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgICBmb3IgKGxldCBzdG9yZUlkIGluIHN0b3Jlcykge1xuICAgICAgICBjb25zdCBzdG9yZSA9IHN0b3Jlc1tzdG9yZUlkXTtcbiAgICAgICAgc3RvcmUuYXV0b0xvYWQgJiYgKGF3YWl0IHN0b3JlLmxvYWQoKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBEaWN0aW9uYXJ5KHRoaXMuc3RhdGUuc3RvcmVzKS5lYWNoKChzdG9yZUlkLCBzdG9yZSkgPT4ge1xuICAgICAgICBzdG9yZS51bnN1YnNjcmliZSh0aGlzLm9uRGF0YUNoYW5nZWQpO1xuICAgICAgICBzdG9yZS5jbGVhckRhdGEodHJ1ZSk7XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiA8V3JhcHBlZENvbXBvbmVudCB7Li4udGhpcy5zdGF0ZX0gey4uLnRoaXMucHJvcHN9IC8+O1xuICAgIH1cbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXp6ID0+IHtcbiAgY29uc3Qgc2VydmljZSA9IG5ldyBjbGF6eigpO1xuICBzZXJ2aWNlLnNlcnZpY2VJZCA9IGNsYXp6Lm5hbWU7XG4gIHJldHVybiBzZXJ2aWNlO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRXh0IGZyb20gJ34vY29yZS9leHQnO1xuXG5jb25zdCBMQVlPVVRfQ0xBU1MgPSB7XG4gICdjb2x1bW4nOiAnZmxleC1yb3cnLFxuICAncm93JzogJ2ZsZXgtY29sdW1uJyxcbiAgJ2ZpdCc6ICcnLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gQ29udGFpbmVyKHsgY2xhc3NOYW1lID0gJycsIGxheW91dCA9ICdyb3cnLCBjaGlsZHJlbiwgLi4ub3RoZXJzIH0pIHtcbiAgcmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT17RXh0LmNsYXNzTmFtZSgnZC1mbGV4JywgTEFZT1VUX0NMQVNTW2xheW91dF0sIGNsYXNzTmFtZSl9IHsuLi5vdGhlcnN9PntjaGlsZHJlbn08L3NlY3Rpb24+XG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciwgdW5tb3VudENvbXBvbmVudEF0Tm9kZSwgZmluZERPTU5vZGUgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEV4dCwgeyBiaW5kIH0gZnJvbSAnfi9jb3JlL2V4dCc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vY29udGFpbmVyJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vZm9ybSc7XG5cbmNsYXNzIERpYWxvZ01hbmFnZXIge1xuICBzaG93KGRpYWxvZykge1xuICAgIGNvbnN0IGRvbSA9IEV4dC5hcHBlbmQoJzxkaXYgY2xhc3M9XCJtYXNrXCI+PC9kaXY+Jyk7XG4gICAgcmVuZGVyKGRpYWxvZywgZG9tKTtcbiAgfVxuXG4gIHRvYXN0KHsgZGVsYXkgPSAzMDAwLCAuLi5vdGhlcnMgfSkge1xuICAgIGNvbnN0IGRvbSA9IEV4dC5hcHBlbmQoJzxkaXYgY2xhc3M9XCJub3RpZmljYXRpb25cIj48L2Rpdj4nKTtcbiAgICByZW5kZXIoPFRvYXN0IHsuLi5vdGhlcnN9IC8+LCBkb20pO1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIERpYWxvZ01hbmFnZXIuZGVzdHJveShkb20pO1xuICAgIH0sIGRlbGF5KTtcbiAgfVxuXG4gIG1zZ2JveCh7IC4uLm90aGVycyB9KSB7XG4gICAgY29uc3QgZG9tID0gRXh0LmFwcGVuZCgnPGRpdiBjbGFzcz1cIm1hc2tcIj48L2Rpdj4nKTtcbiAgICByZW5kZXIoPE1zZ0JveCB7Li4ub3RoZXJzfSAvPiwgZG9tKTtcbiAgfVxuXG4gIGRpc3Bvc2UoZGlhbG9nSWQpIHtcbiAgICB0aGlzLmRlc3Ryb3koRXh0LmdldEJ5SWQoZGlhbG9nSWQpLnBhcmVudEVsZW1lbnQpO1xuICB9XG5cbiAgZGVzdHJveShkb20pIHtcbiAgICB1bm1vdW50Q29tcG9uZW50QXROb2RlKHBhcmVudCk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChwYXJlbnQpO1xuICB9XG5cbiAgc2hvd0Vycm9yTXNnYm94KG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1zZ2JveCh7XG4gICAgICB0aXRsZTogJ0Vycm9yJyxcbiAgICAgIGljb246ICd0aW1lcycsXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IERpYWxvZ01hbmFnZXIoKTtcblxuZXhwb3J0IGNsYXNzIERpYWxvZyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGl0bGUsIGNsYXNzTmFtZSwgY2hpbGRyZW4sIGNsb3NlQnV0dG9uID0gdHJ1ZSwgLi4ub3RoZXJzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiA8Q29udGFpbmVyIGNsYXNzTmFtZT17YGRpYWxvZyAke2NsYXNzTmFtZSB8fCAnJ31gfSB7Li4ub3RoZXJzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nLWhlYWRlclwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJkaWFsb2ctdGl0bGUgdGV4dC1zbS1jZW50ZXJcIj57dGl0bGUgfHwgJyd9PC9wPlxuICAgICAgICB7Y2xvc2VCdXR0b24gJiYgPHNwYW4gY2xhc3NOYW1lPVwidG9vbFwiIG9uQ2xpY2s9e3RoaXMuZGlzcG9zZX0+PC9zcGFuPn1cbiAgICAgIDwvZGl2PlxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJkaWFsb2ctYm9keVwiPlxuICAgICAgICA8Q29udGFpbmVyPntjaGlsZHJlbn08L0NvbnRhaW5lcj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQ29udGFpbmVyPjtcbiAgfVxuXG4gIEBiaW5kXG4gIGRpc3Bvc2UoKSB7XG4gICAgY29uc3QgeyBvbkNsb3NlIH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHBhcmVudCA9IEV4dC5nZXRDb21wKHRoaXMpLnBhcmVudCgpO1xuICAgIG9uQ2xvc2UgJiYgb25DbG9zZSgpO1xuICAgIERpYWxvZ01hbmFnZXIuZGVzdHJveShwYXJlbnQpO1xuICB9XG59XG5cbmNvbnN0IGFsZXJ0ID0ge1xuICBzdWNjZXNzOiB7XG4gICAgdGl0bGU6ICdTdWNjZXNzJyxcbiAgICBpY29uOiAnY2hlY2snXG4gIH0sXG4gIGVycm9yOiB7XG4gICAgdGl0bGU6ICdFcnJvcicsXG4gICAgaWNvbjogJ3RpbWVzJ1xuICB9LFxuICB3YXJuaW5nOiB7XG4gICAgdGl0bGU6ICdXYXJuaW5nJyxcbiAgICBpY29uOiAnZXhjbGFtYXRpb24nXG4gIH0sXG4gIGluZm86IHtcbiAgICB0aXRsZTogJ0luZm9ybWF0aW9uJyxcbiAgICBpY29uOiAnaW5mbydcbiAgfSxcbn07XG5cbmV4cG9ydCBjbGFzcyBUb2FzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuZGlzcG9zZSA9IHRoaXMuZGlzcG9zZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdHlwZSwgbWVzc2FnZSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gPENvbnRhaW5lcj5cbiAgICAgIDxoNiBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+e2FsZXJ0W3R5cGVdLnRpdGxlfTwvaDY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvYXN0LWljb25cIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9e2BmYSBmYS0yeCBmYS0ke2FsZXJ0W3R5cGVdLmljb259LWNpcmNsZWB9PjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9hc3QtY29udGVudFwiPlxuICAgICAgICAgIHttZXNzYWdlfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ29udGFpbmVyPjtcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgRGlhbG9nTWFuYWdlci5kZXN0cm95KEV4dC5nZXRDb21wKHRoaXMpLnBhcmVudCgpKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTXNnQm94IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGl0bGUsIGljb24sIGNsb3NlQnV0dG9uID0gdHJ1ZSwgbWVzc2FnZSwgYnV0dG9ucyA9ICdPSycsIGJ1dHRvblRleHQgPSB7fSwgZm4gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIDxEaWFsb2cgdGl0bGU9e3RpdGxlfSBjbG9zZUJ1dHRvbj17Y2xvc2VCdXR0b259PlxuICAgICAgeyFpY29uICYmIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93XCI+XG4gICAgICAgIHttZXNzYWdlfVxuICAgICAgPC9kaXY+fVxuICAgICAge2ljb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2FzdC1pY29uIG1yLXNtXCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPXtgZmEgZmEtMnggZmEtJHtpY29ufS1jaXJjbGVgfT48L2k+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvYXN0LWNvbnRlbnRcIj5cbiAgICAgICAgICB7bWVzc2FnZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj59XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20tY2VudGVyIG10LXNtXCI+XG4gICAgICAgIHsoYnV0dG9ucyA9PT0gJ09LQ0FOQ0VMJykgJiYgPEJ1dHRvbiBjbGFzc05hbWU9XCJtci1zbVwiIHRleHQ9e2J1dHRvblRleHQuY2FuY2VsIHx8ICdDYW5jZWwnfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmRpc3Bvc2UoKX0gLz59XG4gICAgICAgIDxCdXR0b24gIHRleHQ9e2J1dHRvblRleHQub2sgfHwgJ09LJ30gb25DbGljaz17KCkgPT4ge3RoaXMuZGlzcG9zZSgpOyBmbiAmJiBmbigpO319IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L0RpYWxvZz47XG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIERpYWxvZ01hbmFnZXIuZGVzdHJveShFeHQuZ2V0Q29tcCh0aGlzKS5wYXJlbnQoKSk7XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEV4dCBmcm9tICd+L2NvcmUvZXh0JztcblxuZXhwb3J0IGZ1bmN0aW9uIEJ1dHRvbih7IGNsYXNzTmFtZSA9ICcnLCB0ZXh0LCBjaGlsZHJlbiwgLi4ub3RoZXJzIH0pIHtcbiAgcmV0dXJuIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17RXh0LmNsYXNzTmFtZSgnYnRuJywgY2xhc3NOYW1lKX0gey4uLm90aGVyc30+XG4gICAge3RleHQgfHwgY2hpbGRyZW59XG4gIDwvYnV0dG9uPjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEJ0bkxpbmsoeyB0ZXh0LCBjaGlsZHJlbiwgLi4ub3RoZXJzIH0pIHtcbiAgcmV0dXJuIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiB7Li4ub3RoZXJzfT57dGV4dCB8fCBjaGlsZHJlbn08L2E+XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGaWVsZCh7IHR5cGUgPSAndGV4dCcsIGlubGluZSA9IGZhbHNlLCBsYWJlbCA9ICcnLCBsYWJlbFdpZHRoID0gMywgdmFsdWUsIG9uQ2hhbmdlLCAuLi5vdGhlcnMgfSkge1xuICByZXR1cm4gPGFydGljbGUgY2xhc3NOYW1lPXtFeHQuY2xhc3NOYW1lKCdmb3JtLWdyb3VwJywgeyAncm93JzogaW5saW5lIH0pfT5cbiAgPGxhYmVsIGNsYXNzTmFtZT17RXh0LmNsYXNzTmFtZSh7IFtgY29sLXNtLSR7bGFiZWxXaWR0aH0gdGV4dC1zbS1yaWdodGBdOiBpbmxpbmUgfSl9PntsYWJlbH08L2xhYmVsPlxuICA8ZGl2IGNsYXNzTmFtZT17RXh0LmNsYXNzTmFtZSh7IFtgY29sLXNtLSR7MTIgLSBsYWJlbFdpZHRofWBdOiBpbmxpbmUgfSl9PlxuICAgIHsodHlwZSA9PT0gJ3RleHQnKSAmJiA8VGV4dEZpZWxkIHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e29uQ2hhbmdlfSB7Li4ub3RoZXJzfSAvPn1cbiAgICB7KHR5cGUgPT09ICdjaGVja2JveCcpICYmIDxDaGVja2JveCB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gey4uLm90aGVyc30gLz59XG4gICAgeyh0eXBlID09PSAndGV4dGFyZWEnKSAmJiA8VGV4dEFyZWEgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17b25DaGFuZ2V9IHsuLi5vdGhlcnN9IC8+fVxuICA8L2Rpdj5cbjwvYXJ0aWNsZT5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRleHRGaWVsZCh7IHZhbHVlID0gJycsIGNsYXNzTmFtZSA9ICcnLCBvbkNoYW5nZSwgLi4ub3RoZXJzIH0pIHtcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZSA9PiBvbkNoYW5nZSAmJiBvbkNoYW5nZShlLnRhcmdldC52YWx1ZSk7XG4gIHJldHVybiA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9e0V4dC5jbGFzc05hbWUoJ2Zvcm0tY29udHJvbCcsIGNsYXNzTmFtZSl9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHsuLi5vdGhlcnN9IC8+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2hlY2tib3goeyB2YWx1ZSA9IGZhbHNlLCBvbkNoYW5nZSwgLi4ub3RoZXJzIH0pIHtcbiAgY29uc3QgdG9nZ2xlQ2hlY2sgPSAoKSA9PiBvbkNoYW5nZSghdmFsdWUpO1xuICByZXR1cm4gPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3ZhbHVlfSBvbkNoYW5nZT17dGhpcy50b2dnbGVDaGVja30gey4uLm90aGVyc30gLz47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUZXh0QXJlYSh7IHJvd3MgPSAnMycsIHZhbHVlID0gJycsIGNsYXNzTmFtZSA9ICcnLCBvbkNoYW5nZSwgLi4ub3RoZXJzIH0pIHtcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZSA9PiBvbkNoYW5nZSAmJiBvbkNoYW5nZShlLnRhcmdldC52YWx1ZSk7XG4gIHJldHVybiA8dGV4dGFyZWEgcm93cz17cm93c30gY2xhc3NOYW1lPXtFeHQuY2xhc3NOYW1lKCdmb3JtLWNvbnRyb2wnLCBjbGFzc05hbWUpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gey4uLm90aGVyc30gLz47XG59IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRXh0IGZyb20gJ34vY29yZS9leHQnO1xuaW1wb3J0IExpc3QgZnJvbSAnfi9jb3JlL2xpc3QnO1xuaW1wb3J0IE9ic2VydmFibGUgZnJvbSAnfi9yZWFjdGl2ZS9vYnNlcnZhYmxlJztcblxuY29uc3QgUk9VVEVTID0ge30sXG4gICAgICBnZXRSb3V0ZSA9ICgpID0+IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKSB8fCAnLycsXG4gICAgICBnZXRSb3V0ZVBhdGggPSByb3V0ZSA9PiByb3V0ZS5zcGxpdCgnLycpO1xuXG5leHBvcnQgZnVuY3Rpb24gUm91dGUocm91dGUpIHtcbiAgcmV0dXJuIGNvbXAgPT4ge1xuICAgIFJPVVRFU1tyb3V0ZV0gPSB7XG4gICAgICByb3V0ZSxcbiAgICAgIGNvbXAsXG4gICAgICBwYXRoOiBnZXRSb3V0ZVBhdGgocm91dGUpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBMaW5rKHsgdG8sIGNsYXNzTmFtZSA9ICcnLCBhY3RpdmVDbGFzc05hbWUgPSAnYWN0aXZlJywgdGV4dCwgY2hpbGRyZW4sIC4uLm90aGVycyB9KSB7XG4gIHJldHVybiA8YSBocmVmPXtgIyR7dG99YH0gY2xhc3NOYW1lPXtFeHQuY2xhc3NOYW1lKCduYXYtbGluaycsIGNsYXNzTmFtZSwgeyBbYWN0aXZlQ2xhc3NOYW1lXTogdG8gPT09IGdldFJvdXRlKCkgfSl9IHsuLi5vdGhlcnN9PlxuICAgIHt0ZXh0IHx8IGNoaWxkcmVufVxuICA8L2E+XG59XG5cbmV4cG9ydCBjbGFzcyBIYXNoUm91dGVyIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIEV4dC5pbml0aWFsU3RhdGUodGhpcywgbWF0Y2hQYXRoKCkpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgT2JzZXJ2YWJsZS5mcm9tRXZlbnQod2luZG93LCAnaGFzaGNoYW5nZScpLnN1YnNjcmliZSh7IG5leHQ6ICgpID0+IHRoaXMuc2V0U3RhdGUobWF0Y2hQYXRoKCkpIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcm91dGUsIGNvbXAsIHBhcmFtcyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmICghY29tcCkge1xuICAgICAgY29uc29sZS5lcnJvcignQ29tcG9uZW50IG5vdCBmb3VuZCEnKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGNvbXAsIHsgcm91dGUsIHBhcmFtcyB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXRjaFBhdGgoKSB7XG4gIGNvbnN0IHBhcmFtcyA9IHt9LFxuICAgICAgICBjdXJyZW50Um91dGUgPSBnZXRSb3V0ZSgpO1xuXG4gIC8vIGJhc2ljIHJvdXRlICh3aXRob3V0IHBhcmFtcylcbiAgaWYgKFJPVVRFU1tjdXJyZW50Um91dGVdKSB7XG4gICAgcmV0dXJuIHsgcm91dGU6IGN1cnJlbnRSb3V0ZSwgY29tcDogUk9VVEVTW2N1cnJlbnRSb3V0ZV0uY29tcCwgcGFyYW1zIH07XG4gIH1cblxuICAvLyBhZHZhbmNlZCByb3V0ZSAod2l0aCBwYXJhbXMpXG4gIGNvbnN0IGN1cnJlbnRQYXRoID0gZ2V0Um91dGVQYXRoKGN1cnJlbnRSb3V0ZSk7XG4gIGZvcihsZXQgcm91dGUgaW4gUk9VVEVTKSB7XG4gICAgY29uc3QgbWFwUm91dGUgPSBST1VURVNbcm91dGVdLFxuICAgICAgICAgIHJvdXRlUGF0aCA9IG1hcFJvdXRlLnBhdGg7XG5cbiAgICBsZXQgbWF0Y2hlZCA9IHRydWU7XG4gICAgTGlzdChtYXBSb3V0ZS5wYXRoKS5lYWNoKChyb3V0ZU5hbWUsIGluZGV4KSA9PiB7XG4gICAgICBpZiAocm91dGVOYW1lICE9PSBjdXJyZW50UGF0aFtpbmRleF0pIHtcbiAgICAgICAgaWYgKHJvdXRlTmFtZS5zdGFydHNXaXRoKCc6JykpIHsgLy8gZGV0ZWN0IHBhcmFtIHZhbHVlXG4gICAgICAgICAgcGFyYW1zW3JvdXRlTmFtZS5zdWJzdHJpbmcoMSldID0gY3VycmVudFBhdGhbaW5kZXhdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1hdGNoZWQgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChtYXRjaGVkKSB7XG4gICAgICByZXR1cm4geyByb3V0ZTogY3VycmVudFJvdXRlLCBjb21wOiBtYXBSb3V0ZS5jb21wLCBwYXJhbXMgfTtcbiAgICB9XG4gIH1cblxuICAvLyB3aXRoIG5vdCBmb3VuZCBzY3JlZW5cbiAgaWYgKFJPVVRFU1snKiddKSB7XG4gICAgcmV0dXJuIHsgcm91dGU6IGN1cnJlbnRSb3V0ZSwgY29tcDogUk9VVEVTWycqJ10uY29tcCwgcGFyYW1zIH07XG4gIH1cblxuICAvLyB3aXRob3V0IG5vdCBmb3VuZCBzY3JlZW5cbiAgcmV0dXJuIHsgcm91dGU6IGN1cnJlbnRSb3V0ZSwgY29tcDogbnVsbCwgcGFyYW1zIH07XG59IiwiaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0JztcblxuZXhwb3J0IGNsYXNzIERpY3Rpb25hcnkge1xuICBjb25zdHJ1Y3RvcihrZXlWYWx1ZXMpIHtcbiAgICB0aGlzLmRhdGEgPSB7fTtcbiAgICBpZiAoa2V5VmFsdWVzICYmIGtleVZhbHVlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGtleVZhbHVlcyk7XG4gICAgfVxuXG4gICAgdGhpcy5rZXlzID0gKCkgPT4gTGlzdChPYmplY3Qua2V5cyh0aGlzLmRhdGEpKTtcbiAgICB0aGlzLnZhbHVlcyA9ICgpID0+IExpc3QoT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEpKTtcbiAgfVxuXG4gIGVhY2goaXRlcmF0ZWUpIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5kYXRhKSB7XG4gICAgICBpdGVyYXRlZSh0aGlzLmRhdGFba2V5XSwga2V5LCB0aGlzLmRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoa2V5VmFsdWVzKSA9PiBuZXcgRGljdGlvbmFyeShrZXlWYWx1ZXMpOyIsImltcG9ydCB7IExpc3QgfSBmcm9tICcuL2xpc3QnO1xuXG5jbGFzcyBET00gZXh0ZW5kcyBMaXN0IHtcbiAgc2hvdygpIHtcbiAgICB0aGlzLnNlbGVjdG9ycy5lYWNoKHNlbGVjdG9yID0+IHNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snKTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgdGhpcy5zZWxlY3RvcnMuZWFjaChzZWxlY3RvciA9PiBzZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKTtcbiAgfVxuXG4gIC8vIHBhcmVudCgpIHtcbiAgLy8gICB0aGlzLmNvbXAgPSB0aGlzLmNvbXAucGFyZW50RWxlbWVudDtcbiAgLy8gICByZXR1cm4gdGhpcztcbiAgLy8gfVxuXG4gIC8vIHdpZHRoKCkge1xuICAvLyAgIHJldHVybiB0aGlzLmNvbXAuY2xpZW50V2lkdGg7XG4gIC8vIH1cblxuICAvLyBoZWlnaHQoKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMuY29tcC5jbGllbnRIZWlnaHQ7XG4gIC8vIH1cblxuICAvLyBmaW5kKHNlbGVjdG9yKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMuY29tcC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgLy8gfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoc2VsZWN0b3IpID0+IG5ldyBET00oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpOyIsImltcG9ydCBET00gZnJvbSAnLi9kb20nO1xuaW1wb3J0IFN0cmluZyBmcm9tICcuL3N0cmluZyc7XG5pbXBvcnQgTGlzdCBmcm9tICcuL2xpc3QnO1xuaW1wb3J0IERpY3Rpb25hcnkgZnJvbSAnLi9kaWN0aW9uYXJ5JztcblxuZXhwb3J0IGNsYXNzIEV4dCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuU0NST0xMX1dJRFRIID0gdGhpcy5nZXRTY3JvbGxXaWR0aCgpO1xuICAgIHRoaXMuQk9SREVSX1dJRFRIID0gMjtcbiAgICB0aGlzLkNIRUNLX0NPTFVNTl9XSURUSCA9IDMzO1xuICAgIHRoaXMuVU5LTk9XTl9FUlJPUl9NU0cgPSAnQW4gdW5rbm93biBlcnJvciBoYXMgb2NjdXJyZWQuJztcbiAgICB0aGlzLlhIUiA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgdGhpcy5pc1ByaW1pdGl2ZSA9IHZhbHVlID0+IHsgY29uc3QgdHlwZSA9IHR5cGVvZiB2YWx1ZTsgcmV0dXJuIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGUgPT09ICdudW1iZXInIHx8IHR5cGUgPT09ICdib29sZWFuJzsgfVxuICAgIHRoaXMuaXNTdHJpbmcgPSB2YWx1ZSA9PiAodHlwZW9mIHZhbHVlKSA9PT0gJ3N0cmluZyc7XG4gICAgdGhpcy5pc0Z1bmN0aW9uID0gdmFsdWUgPT4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG4gICAgdGhpcy5pc09iamVjdCA9IHZhbHVlID0+IHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBPYmplY3RdJztcbiAgICB0aGlzLmlzQXJyYXkgPSB2YWx1ZSA9PiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcblxuICAgIHRoaXMuY2xvbmUgPSBvYmogPT4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTsgLy8gZGVlcCBjbG9uZVxuXG4gICAgdGhpcy5ET00gPSBET007XG4gICAgdGhpcy5TdHJpbmcgPSBTdHJpbmc7XG4gICAgdGhpcy5MaXN0ID0gTGlzdDtcbiAgICB0aGlzLk1hcCA9IERpY3Rpb25hcnk7XG4gICAgdGhpcy5Qcm92aWRlciA9IG5ldyBEaWN0aW9uYXJ5KCk7XG4gIH1cblxuICBleHRlbmQoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24uYXBwbHkobnVsbCwgYXJndW1lbnRzKTsgLy8gaW1tdXRhYmxlIG9iamVjdFxuICB9XG5cbiAgaW5pdGlhbFN0YXRlKGNvbXAsIHN0YXRlKSB7XG4gICAgaWYgKCFjb21wIHx8ICFzdGF0ZSkgeyByZXR1cm47IH1cbiAgICBjb21wLnN0YXRlID0gc3RhdGU7XG4gICAgZm9yIChsZXQgZmllbGQgb2YgT2JqZWN0LmtleXMoc3RhdGUpKSB7XG4gICAgICBjb21wW2BzZXQke1N0cmluZy5jYXBpdGFsaXplKGZpZWxkKX1gXSA9IHZhbHVlID0+IGNvbXAuc2V0U3RhdGUoeyBbZmllbGRdOiB2YWx1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBjbGFzc05hbWUoLi4uZXhwcmVzc2lvbnMpIHtcbiAgICBjb25zdCBjbHMgPSBbXTtcblxuICAgIExpc3QoZXhwcmVzc2lvbnMpLmVhY2goZXhwID0+IHtcbiAgICAgIGlmICghZXhwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBleHAgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNscy5wdXNoKGV4cCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNPYmplY3QoZXhwKSkge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gZXhwKSB7XG4gICAgICAgICAgaWYgKGV4cFtrZXldID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjbHMucHVzaChrZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjbHMuam9pbignICcpO1xuICB9XG5cbiAgLy8jcmVnaW9uIERPTVxuICBjcmVhdGVFbGVtZW50KGh0bWwpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gaHRtbDtcbiAgICByZXR1cm4gZGl2LmNoaWxkcmVuWzBdO1xuICB9XG5cbiAgZ2V0RWwoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gRE9NKHNlbGVjdG9yKTtcbiAgfVxuXG4gIGdldFNjcm9sbFdpZHRoKCkge1xuICAgIGNvbnN0IG91dGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCc8ZGl2IHN0eWxlPVwidmlzaWJpbGl0eTogaGlkZGVuOyB3aWR0aDogMTAwcHg7IG92ZXJmbG93OiBzY3JvbGw7XCI+PC9kaXY+Jyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdXRlcik7XG4gICAgY29uc3Qgd2lkdGhOb1Njcm9sbCA9IG91dGVyLm9mZnNldFdpZHRoO1xuXG4gICAgLy8gYWRkIGlubmVyZGl2XG4gICAgY29uc3QgaW5uZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJzxkaXYgc3R5bGU9XCJ3aWR0aDogMTAwJTtcIj48L2Rpdj4nKTtcbiAgICBvdXRlci5hcHBlbmRDaGlsZChpbm5lcik7XG4gICAgY29uc3Qgd2lkdGhXaXRoU2Nyb2xsID0gaW5uZXIub2Zmc2V0V2lkdGg7XG5cbiAgICAvLyByZW1vdmUgZGl2c1xuICAgIG91dGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob3V0ZXIpO1xuXG4gICAgcmV0dXJuIHdpZHRoTm9TY3JvbGwgLSB3aWR0aFdpdGhTY3JvbGw7XG4gIH1cbiAgLy8jZW5kcmVnaW9uXG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBFeHQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmQodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKSB7XG4gIGNvbnN0IGZuID0gZGVzY3JpcHRvci52YWx1ZTtcblxuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBAYmluZCBkZWNvcmF0b3IgaXMgb25seSBhcHBsaWVkIHRvIGZ1bmN0aW9ucyBub3Q6ICR7dHlwZW9mIGZufWApO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0KCkge1xuICAgICAgcmV0dXJuIGZuLmJpbmQodGhpcyk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCA9IDUwMCkge1xuICBsZXQgdGltZW91dDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLFxuICAgICAgICAgIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgICAgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgICAgfVxuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgfVxufSIsImV4cG9ydCBjbGFzcyBMaXN0IHtcbiAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoKSB7XG4gICAgICB0aGlzLmRhdGEgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbGxlY3QgPSAoKSA9PiB0aGlzLmRhdGE7XG4gICAgdGhpcy5jb3VudCA9ICgpID0+IHRoaXMuZGF0YS5sZW5ndGg7XG4gICAgdGhpcy5nZXRBdCA9IGluZGV4ID0+IHRoaXMuZGF0YVtpbmRleF07XG4gICAgdGhpcy5hZGQgPSBpdGVtID0+IHRoaXMuZGF0YS5wdXNoKGl0ZW0pO1xuICAgIHRoaXMuaW5zZXJ0ID0gKGl0ZW0sIGluZGV4ID0gMCkgPT4gdGhpcy5kYXRhLnNwbGljZShpbmRleCwgMCwgaXRlbSk7XG4gICAgdGhpcy5yZW1vdmVBdCA9IChpbmRleCwgY291bnQgPSAxKSA9PiB0aGlzLmRhdGEuc3BsaWNlKGluZGV4LCBjb3VudCk7XG4gICAgdGhpcy5qb2luID0gc2VwYXJhdG9yID0+IHRoaXMuZGF0YS5qb2luKHNlcGFyYXRvcik7XG4gIH1cblxuICBlYWNoKGl0ZXJhdGVlKSB7XG4gICAgZm9yIChsZXQgaW5kZXggaW4gdGhpcy5kYXRhKSB7XG4gICAgICBpdGVyYXRlZSh0aGlzLmRhdGFbaW5kZXhdLCBpbmRleCwgdGhpcy5kYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBmaWx0ZXIocHJlZGljYXRlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgdGhpcy5lYWNoKChpdGVtLCBpbmRleCwgYXJyYXkpID0+IHtcbiAgICAgIGlmIChwcmVkaWNhdGUoaXRlbSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgICByZXN1bHQucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbmV3IExpc3QocmVzdWx0KTtcbiAgfVxuXG4gIG1hcChpdGVyYXRlZSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIHRoaXMuZWFjaCgoaXRlbSwgaW5kZXgsIGFycmF5KSA9PiByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaXRlbSwgaW5kZXgsIGFycmF5KSk7XG4gICAgcmV0dXJuIG5ldyBMaXN0KHJlc3VsdCk7XG4gIH1cblxuICByZWR1Y2UoaXRlcmF0ZWUsIGFjY3VtdWxhdG9yKSB7XG4gICAgdGhpcy5lYWNoKChpdGVtLCBpbmRleCwgYXJyYXkpID0+IGFjY3VtdWxhdG9yID0gaXRlcmF0ZWUoYWNjdW11bGF0b3IsIGl0ZW0sIGluZGV4LCBhcnJheSkpO1xuICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgfVxuXG4gIGZpbmRJbmRleChwcmVkaWNhdGUpIHtcbiAgICBsZXQgaW5kZXggPSAtMTtcbiAgICBmb3IgKGxldCBpZHggPSAwLCBpdGVtOyAoaXRlbSA9IHRoaXMuZGF0YVtpZHhdKSAhPSBudWxsOyArK2lkeCkge1xuICAgICAgaWYgKHByZWRpY2F0ZShpdGVtLCBpZHgsIHRoaXMuZGF0YSkpIHtcbiAgICAgICAgaW5kZXggPSBpZHg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICBmaW5kKHByZWRpY2F0ZSkge1xuICAgIGxldCBpbmRleCA9IHRoaXMuZmluZEluZGV4KHByZWRpY2F0ZSk7XG4gICAgcmV0dXJuIGluZGV4ID4gLTEgPyB0aGlzLmRhdGFbaW5kZXhdIDogbnVsbDtcbiAgfVxuXG4gIGNvbnRhaW5zKHByZWRpY2F0ZSkge1xuICAgIHJldHVybiB0aGlzLmZpbmQocHJlZGljYXRlKSAhPT0gbnVsbDtcbiAgfVxuXG4gIHJlbW92ZUlmKHByZWRpY2F0ZSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIHRoaXMuZWFjaCgoaXRlbSwgaW5kZXgsIGFycmF5KSA9PiB7XG4gICAgICBpZiAoIXByZWRpY2F0ZShpdGVtLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuZGF0YSA9IHJlc3VsdDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAodmFsdWUpID0+IG5ldyBMaXN0KHZhbHVlKTsiLCJjbGFzcyBTdHJpbmcge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNhcGl0YWxpemUgPSB2YWx1ZSA9PiB2YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKDEpO1xuICB9XG5cbiAgaHRtbEVuY29kZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7JylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvJy9nLCAnJiMzOTsnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG4gIH1cblxuICBodG1sRGVjb2RlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoLyZhbXA7L2csICcnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8mbHQ7L2csICc8JylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvJmd0Oz4vZywgJz4nKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8mIzM5Oy9nLCBcIidcIilcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvJnF1b3Q7L2csICdcIicpO1xuICB9XG5cbiAgdG9RdWVyeVN0cmluZyhwYXJhbXMsIHNlcCwgZW5jb2RlKSB7XG4gICAgc2VwICAgID0gc2VwID09PSB1bmRlZmluZWQgPyAnJicgOiBzZXA7XG4gICAgZW5jb2RlID0gZW5jb2RlID09PSBmYWxzZSA/IGZ1bmN0aW9uKHMpIHsgcmV0dXJuIHM7IH0gOiBlbmNvZGVVUklDb21wb25lbnQ7XG5cbiAgICBsZXQgcGFpcnMgPSBbXTtcbiAgICBmb3IgKGxldCBrZXkgaW4gcGFyYW1zKSB7XG4gICAgICBwYWlycy5wdXNoKGAke2tleX09JHtlbmNvZGUocGFyYW1zW2tleV0pfWApO1xuICAgIH1cbiAgICByZXR1cm4gcGFpcnMuam9pbihzZXApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBTdHJpbmcoKTsiLCJpbXBvcnQgeyBMaXN0IH0gZnJvbSAnfi9jb3JlL2xpc3QnO1xuaW1wb3J0IFN1YmplY3QgZnJvbSAnfi9yZWFjdGl2ZS9zdWJqZWN0JztcbmltcG9ydCBNb2RlbCBmcm9tICcuL21vZGVsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJzdHJhY3RTdG9yZSBleHRlbmRzIExpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLy8jcmVnaW9uIGNvbmZpZ3NcbiAgICB0aGlzLnRvdGFsQ291bnQgPSAwO1xuICAgIHRoaXMucGFnZVNpemUgPSAwO1xuICAgIHRoaXMuY3VycmVudFBhZ2UgPSAxO1xuICAgIHRoaXMuc3ViamVjdCA9IFN1YmplY3QuY3JlYXRlKCk7XG4gICAgLy8jZW5kcmVnaW9uXG5cbiAgICAvLyNyZWdpb24gcHJvcGVydGllc1xuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgLy8jcmVnaW9uIG1ldGhvZHNcbiAgICB0aGlzLnN1YnNjcmliZSA9IG9ic2VydmVyID0+IHRoaXMuc3ViamVjdC5zdWJzY3JpYmUob2JzZXJ2ZXIpO1xuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBvYnNlcnZlciA9PiB0aGlzLnN1YmplY3QudW5zdWJzY3JpYmUob2JzZXJ2ZXIpO1xuICAgIHRoaXMuZmlyZUV2ZW50ID0gKCkgPT4gdGhpcy5zdWJqZWN0Lm5leHQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVSZWNvcmQgPSByZWNvcmQgPT4gbmV3IE1vZGVsKHJlY29yZCwgdGhpcyk7XG4gICAgdGhpcy5nZXRSZWNvcmRzID0gdGhpcy5jb2xsZWN0O1xuICAgIHRoaXMuZ2V0TW9kaWZpZWRSZWNvcmRzID0gKCkgPT4gdGhpcy5maWx0ZXIocmVjb3JkID0+IHJlY29yZC5pc01vZGlmaWVkKCkpO1xuICAgIHRoaXMuZ2V0TmV3UmVjb3JkcyA9ICgpID0+IHRoaXMuZmlsdGVyKHJlY29yZCA9PiByZWNvcmQuaXNOZXdseUNyZWF0ZWQoKSk7XG4gICAgLy8jZW5kcmVnaW9uXG4gIH1cblxuICBjbGVhckRhdGEoc2lsZW50ID0gZmFsc2UpIHtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICAhc2lsZW50ICYmIHRoaXMuZmlyZUV2ZW50KCk7XG4gIH1cblxuICBsb2FkRGF0YShkYXRhKSB7XG4gICAgdGhpcy5jbGVhckRhdGEodHJ1ZSk7XG4gICAgdGhpcy5kYXRhID0gKG5ldyBMaXN0KGRhdGEpKS5tYXAodGhpcy5jcmVhdGVSZWNvcmQuYmluZCh0aGlzKSkuY29sbGVjdCgpO1xuICAgIHRoaXMuZmlyZUV2ZW50KCk7XG4gIH1cblxuICBjb21taXRDaGFuZ2VzKCkge1xuICAgIHRoaXMuZmlsdGVyKHJlY29yZCA9PiByZWNvcmQuaXNNb2RpZmllZCgpIHx8IHJlY29yZC5pc05ld2x5Q3JlYXRlZCgpKS5lYWNoKHJlY29yZCA9PiByZWNvcmQuc2F2ZSgpKTtcbiAgICB0aGlzLmZpcmVFdmVudCgpO1xuICB9XG5cbiAgcmVqZWN0Q2hhbmdlcygpIHtcbiAgICB0aGlzLmZpbHRlcihyZWNvcmQgPT4gcmVjb3JkLmlzTW9kaWZpZWQoKSkuZWFjaChyZWNvcmQgPT4gcmVjb3JkLnJlamVjdCh0cnVlKSk7XG4gICAgdGhpcy5kYXRhID0gdGhpcy5maWx0ZXIocmVjb3JkID0+ICFyZWNvcmQuaXNOZXdseUNyZWF0ZWQoKSkuY29sbGVjdCgpO1xuICAgIHRoaXMuZmlyZUV2ZW50KCk7XG4gIH1cbn0iLCJpbXBvcnQgU3RyaW5nIGZyb20gJ34vY29yZS9zdHJpbmcnO1xuaW1wb3J0IEV4dCBmcm9tICd+L2NvcmUvZXh0JztcblxuY2xhc3MgQWpheCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIEV4dC5leHRlbmQoQWpheC5wcm90b3R5cGUsIHtcbiAgICAgIHhocjogbmV3IFhNTEh0dHBSZXF1ZXN0KCksXG4gICAgICBhamF4QmVmb3JlOiAoKSA9PiB7IC8qIHRvIGJlIGltcGxlbWVudGVkICovIH0sXG4gICAgICBhamF4RXJyb3I6IChlcnJvcikgPT4geyAvKiB0byBiZSBpbXBsZW1lbnRlZCAqLyB9LFxuICAgICAgYWpheENvbXBsZXRlOiAoKSA9PiB7IC8qIHRvIGJlIGltcGxlbWVudGVkICovIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIHJlcXVlc3QoeyB1cmwsIGNvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnLCBtZXRob2QgPSAnZ2V0JywgcGFyYW1zLCBuZXh0LCBlcnJvciwgY29tcGxldGUgfSkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgcmVzcG9uc2U7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLmFqYXhCZWZvcmUoKTtcbiAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnByb21pc2UoeyB1cmwsIGNvbnRlbnRUeXBlLCBtZXRob2QsIHBhcmFtcyB9KTtcbiAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYENhbm5vdCBnZXQgcmVzcG9uc2UgZnJvbSBzZXJ2ZXIgZm9yIHVybCBbJHt1cmx9XSBjYXVzZWQgYnk6ICR7ZXh9YCk7XG4gICAgICAgIHRoaXMuYWpheEVycm9yKGV4KTtcbiAgICAgICAgZXJyb3IgJiYgZXJyb3IoZXgpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5leHQgPyBuZXh0KHJlc3BvbnNlKSA6IHJlc3BvbnNlO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLmFqYXhDb21wbGV0ZSgpO1xuICAgICAgY29tcGxldGUgJiYgY29tcGxldGUoKTtcbiAgICB9XG4gIH1cblxuICBwcm9taXNlKHNldHRpbmdzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuY3JlYXRlUmVxdWVzdChzZXR0aW5ncywgKGVyciwgcmVzKSA9PiBlcnIgPyByZWplY3QoZXJyKSA6IHJlc29sdmUocmVzKSk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVSZXF1ZXN0KHsgdXJsLCBjb250ZW50VHlwZSwgbWV0aG9kLCBwYXJhbXMgfSwgZG9uZSkge1xuICAgIChtZXRob2QgPT09ICdnZXQnICYmIHBhcmFtcykgJiYgKHVybCA9IGAke3VybH0/JHtTdHJpbmcudG9RdWVyeVN0cmluZyhwYXJhbXMpfWApO1xuICAgIGNvbnN0IHhociA9IHRoaXMueGhyO1xuICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgY29udGVudFR5cGUpO1xuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICBpZih4aHIucmVhZHlTdGF0ZSA9PT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xuICAgICAgICAvLyBhamF4IHdpbGwgcmV0dXJuIGFzIGEganNvbiBieSBkZWZhdWx0LCBpZiBwYXJzZXIgZXJyb3IgdGhlbiBpdCB3aWxsIHJldHVybiBhIHJhdyBzdHJpbmdcbiAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkb25lKG51bGwsIEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGRvbmUobnVsbCwgeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkb25lKEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGRvbmUoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHhoci5zZW5kKHBhcmFtcyA/IEpTT04uc3RyaW5naWZ5KHBhcmFtcykgOiBudWxsKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQWpheCgpOyIsImNsYXNzIENhY2hlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fY2FjaGUgPSB7fTtcbiAgfVxuXG4gIGhhc0xvY2FsU3RvcmFnZSgpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuICdsb2NhbFN0b3JhZ2UnIGluIHdpbmRvdyAmJiB3aW5kb3cubG9jYWxTdG9yYWdlICE9PSBudWxsO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBnZXQoa2V5KSB7XG4gICAgaWYgKHRoaXMuaGFzTG9jYWxTdG9yYWdlKCkpIHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpIHx8IHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlW2tleV0gfHwgdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHNldChrZXksIHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaGFzTG9jYWxTdG9yYWdlKCkpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY2FjaGVba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZShrZXkpIHtcbiAgICBpZiAoIWtleSkge1xuICAgICAgdGhpcy5fY2FjaGUgPSB7fTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaGFzTG9jYWxTdG9yYWdlKCkpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9jYWNoZVtrZXldO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ2FjaGUoKTsiLCJpbXBvcnQgRXh0IGZyb20gJ34vY29yZS9leHQnO1xuaW1wb3J0IExpc3QgZnJvbSAnfi9jb3JlL2xpc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKGRhdGEsIHN0b3JlKSB7XG4gICAgLy8jcmVnaW9uIGNvbmZpZ3NcbiAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgLy8jZW5kcmVnaW9uXG5cbiAgICAvLyNyZWdpb24gcHJvcGVydGllc1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5zdG9yZSA9IHN0b3JlO1xuICAgIHRoaXMuaWRQcm9wZXJ0eSA9IChzdG9yZSAmJiBzdG9yZS5pZFByb3BlcnR5KSA/IHN0b3JlLmlkUHJvcGVydHkgOiAnaWQnO1xuICAgIGNvbnN0IGZpZWxkQ29uZmlnID0gKHN0b3JlICYmIHN0b3JlLmZpZWxkcykgPyBzdG9yZS5maWVsZHMgOiBbXTtcbiAgICB0aGlzLmZpZWxkcyA9IExpc3QoZmllbGRDb25maWcpLm1hcChmaWVsZCA9PiBFeHQuaXNTdHJpbmcoZmllbGQpID8gKHsgbmFtZTogZmllbGQsIHR5cGU6ICdzdHJpbmcnIH0pIDogZmllbGQpO1xuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgLy8jcmVnaW9uIG1ldGhvZHNcbiAgICB0aGlzLmdldERhdGEgPSAoKSA9PiB0aGlzLmRhdGE7XG4gICAgdGhpcy5nZXQgPSBmaWVsZE5hbWUgPT4gdGhpcy5kYXRhW2ZpZWxkTmFtZV07XG4gICAgLy8jZW5kcmVnaW9uXG5cbiAgICB0aGlzLnNhdmUoKTtcbiAgfVxuXG4gIHNldChmaWVsZE5hbWUsIG5ld1ZhbHVlLCBzaWxlbnQpIHtcbiAgICB0aGlzLmRhdGFbZmllbGROYW1lXSA9IG5ld1ZhbHVlO1xuICAgIHRoaXMubW9kaWZpZWQgPSAhdGhpcy5pc0VxdWFsKGZpZWxkTmFtZSk7XG4gICAgKCFzaWxlbnQgJiYgdGhpcy5zdG9yZSkgJiYgKHRoaXMuc3RvcmUuZmlyZUV2ZW50KCkpO1xuICB9XG5cbiAgc2F2ZSgpIHtcbiAgICB0aGlzLnBoYW50b20gPSBFeHQuY2xvbmUodGhpcy5kYXRhKTtcbiAgICB0aGlzLm1vZGlmaWVkID0gZmFsc2U7XG4gIH1cblxuICByZWplY3Qoc2lsZW50KSB7XG4gICAgdGhpcy5kYXRhID0gRXh0LmNsb25lKHRoaXMucGhhbnRvbSk7XG4gICAgdGhpcy5zYXZlKCk7XG4gICAgKCFzaWxlbnQgJiYgdGhpcy5zdG9yZSkgJiYgKHRoaXMuc3RvcmUuZmlyZUV2ZW50KCkpO1xuICB9XG5cbiAgaXNFcXVhbChmaWVsZCkge1xuICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpcy5waGFudG9tW2ZpZWxkLm5hbWVdLFxuICAgICAgICAgIG5ld1ZhbHVlID0gdGhpcy5kYXRhW2ZpZWxkLm5hbWVdO1xuXG4gICAgcmV0dXJuIGZpZWxkLmVxdWFscyA/IGZpZWxkLmVxdWFscyhuZXdWYWx1ZSwgb2xkVmFsdWUpIDogbmV3VmFsdWUgPT09IG9sZFZhbHVlO1xuICB9XG5cbiAgaXNNb2RpZmllZChmaWVsZE5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RpZmllZCAmJiAhdGhpcy5waGFudG9tW3RoaXMuaWRQcm9wZXJ0eV07IC8vIHNob3VsZCBub3QgZGV0ZWN0IG5ldyByZWNvcmQgYXMgYSBtb2RpZmllZCByZWNvcmRcbiAgfVxuXG4gIGlzTmV3bHlDcmVhdGVkKCkge1xuICAgIHJldHVybiAhdGhpcy5waGFudG9tW3RoaXMuaWRQcm9wZXJ0eV07XG4gIH1cblxuICBzZXRTZWxlY3RlZChzZWxlY3RlZCwgc2lsZW50KSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgICghc2lsZW50ICYmIHRoaXMuc3RvcmUpICYmICh0aGlzLnN0b3JlLmZpcmVFdmVudCgpKTtcbiAgfVxufSIsImltcG9ydCBFeHQgZnJvbSAnfi9jb3JlL2V4dCc7XG5pbXBvcnQgQWpheCBmcm9tICcuL2FqYXgnO1xuaW1wb3J0IEFic3RyYWN0U3RvcmUgZnJvbSAnLi9hYnN0cmFjdC1zdG9yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3h5U3RvcmUgZXh0ZW5kcyBBYnN0cmFjdFN0b3JlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8vI3JlZ2lvbiBjb25maWdzXG4gICAgdGhpcy5wcm94eSA9IHtcbiAgICAgIHJlYWRlcjoge30sXG4gICAgICB3cml0ZXI6IHt9XG4gICAgfTtcbiAgICAvLyNlbmRyZWdpb25cbiAgfVxuXG4gIGFzeW5jIGxvYWQoeyBkb25lLCBmYWlsLCBhbHdheXMgfSkge1xuICAgIE9ic2VydmFibGUuYWpheCh0aGlzLnByb3h5KS5zdWJzY3JpYmUoe1xuICAgICAgbmV4dDogdmFsdWUgPT4ge1xuICAgICAgICBjb25zdCB7IHJvb3RQcm9wZXJ0eSwgdG90YWxQcm9wZXJ0eSB9ID0gdGhpcy5wcm94eS5yZWFkZXI7XG4gICAgICAgIHRoaXMubG9hZERhdGEocm9vdFByb3BlcnR5ID8gcmVzcG9uc2Vbcm9vdFByb3BlcnR5XSA6IHJlc3BvbnNlKTtcbiAgICAgICAgdGhpcy50b3RhbENvdW50ID0gKHRoaXMucGFnZVNpemUgJiYgdG90YWxQcm9wZXJ0eSkgPyByZXNwb25zZVt0b3RhbFByb3BlcnR5XSA6IHRoaXMuY291bnQoKTtcbiAgICAgICAgZG9uZSAmJiBkb25lKHRoaXMuZ2V0UmVjb3JkcygpKTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZmFpbCxcbiAgICAgIGNvbXBsZXRlOiBhbHdheXNcbiAgICB9KTtcbiAgfVxuXG4gIGxvYWRQYWdlKHBhZ2UpIHtcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gcGFnZTtcbiAgICB0aGlzLnByb3h5LnBhcmFtcyA9IEV4dC5leHRlbmQoe30sIHRoaXMucHJveHkucGFyYW1zLCB7IHBhZ2U6IHRoaXMuY3VycmVudFBhZ2UsIHNpemU6IHRoaXMucGFnZVNpemUgfSk7XG4gICAgcmV0dXJuIHRoaXMubG9hZCh7fSk7XG4gIH1cblxuICBhc3luYyBzeW5jKHsgZG9uZSwgZmFpbCwgYWx3YXlzIH0pIHtcbiAgICB0aGlzLnByb3h5Lm1ldGhvZCA9ICdwb3N0JztcbiAgICB0aGlzLnByb3h5LnBhcmFtcyA9IHRoaXMuZ2V0TW9kaWZpZWRSZWNvcmRzKCkubWFwKHJlY29yZCA9PiByZWNvcmQuZGF0YSkuY29sbGVjdCgpO1xuICAgIHRoaXMucHJveHkucHJveHkucGFyYW1zLnB1c2goLi4udGhpcy5nZXROZXdSZWNvcmRzKCkubWFwKHJlY29yZCA9PiByZWNvcmQuZGF0YSkuY29sbGVjdCgpKTtcbiAgICBjb25zdCB7IHRyYW5zZm9ybSB9ID0gcHJveHkud3JpdGVyO1xuICAgIHRyYW5zZm9ybSAmJiAodGhpcy5wcm94eS5wYXJhbXMgPSB0cmFuc2Zvcm0odGhpcy5wcm94eS5wYXJhbXMpKTtcbiAgICBPYnNlcnZhYmxlLmFqYXgodGhpcy5wcm94eSkuc3Vic2NyaWJlKHtcbiAgICAgIG5leHQ6IGRvbmUsXG4gICAgICBlcnJvcjogZmFpbCxcbiAgICAgIGNvbXBsZXRlOiBhbHdheXNcbiAgICB9KTtcbiAgfVxufSIsImltcG9ydCBFeHQgZnJvbSAnfi9jb3JlL2V4dCc7XG5pbXBvcnQgUHJveHlTdG9yZSBmcm9tICcuL3Byb3h5LXN0b3JlJztcblxuY2xhc3MgU3RvcmUgZXh0ZW5kcyBQcm94eVN0b3JlIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoKTtcbiAgICBFeHQuZXh0ZW5kKHRoaXMsIGNvbmZpZyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnID0+IG5ldyBTdG9yZShjb25maWcpOyIsImltcG9ydCBFeHQgZnJvbSAnfi9jb3JlL2V4dCc7XG5cbmNsYXNzIEFqYXhPYnNlcnZhYmxlIHtcbiAgY29uc3RydWN0b3IodXJsT3JSZXF1ZXN0KSB7XG4gICAgdGhpcy5yZXF1ZXN0ID0gRXh0LmV4dGVuZCh7XG4gICAgICB1cmw6ICcnLFxuICAgICAgcGFyYW1zOiAnJyxcbiAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsXG4gICAgICBtZXRob2Q6ICdnZXQnLFxuICAgIH0sIEV4dC5pc1N0cmluZyh1cmxPclJlcXVlc3QpID8geyB1cmw6IHVybE9yUmVxdWVzdCB9IDogdXJsT3JSZXF1ZXN0KTtcblxuICAgIHRoaXMucHJvbWlzZSA9IHJlcXVlc3QgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5jcmVhdGVSZXF1ZXN0KHJlcXVlc3QsIChlcnJvciwgcmVzcG9uc2UpID0+IGVycm9yID8gcmVqZWN0KGVycm9yKSA6IHJlc29sdmUocmVzcG9uc2UpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIHN1YnNjcmliZSh7IG5leHQsIGVycm9yLCBjb21wbGV0ZSB9KSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCByZXNwb25zZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlc3BvbnNlID0gYXdhaXQgdGhpcy5wcm9taXNlKHsgdXJsLCBjb250ZW50VHlwZSwgbWV0aG9kLCBwYXJhbXMgfSk7XG4gICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBDYW5ub3QgZ2V0IHJlc3BvbnNlIGZyb20gc2VydmVyIGZvciB1cmwgWyR7dXJsfV0gY2F1c2VkIGJ5OiAke2V4fWApO1xuICAgICAgICBlcnJvciAmJiBlcnJvcihleCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV4dCA/IG5leHQocmVzcG9uc2UpIDogcmVzcG9uc2U7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGNvbXBsZXRlICYmIGNvbXBsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgc2VuZCh7IHVybCwgY29udGVudFR5cGUsIG1ldGhvZCwgcGFyYW1zIH0sIGRvbmUpIHtcbiAgICAobWV0aG9kID09PSAnZ2V0JyAmJiBwYXJhbXMpICYmICh1cmwgPSBgJHt1cmx9PyR7U3RyaW5nLnRvUXVlcnlTdHJpbmcocGFyYW1zKX1gKTtcbiAgICBjb25zdCB4aHIgPSBFeHQuWEhSO1xuICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgY29udGVudFR5cGUpO1xuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICBpZih4aHIucmVhZHlTdGF0ZSA9PT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xuICAgICAgICAvLyBhamF4IHdpbGwgcmV0dXJuIGFzIGEganNvbiBieSBkZWZhdWx0LCBpZiBwYXJzZXIgZXJyb3IgdGhlbiBpdCB3aWxsIHJldHVybiBhIHJhdyBzdHJpbmdcbiAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkb25lKG51bGwsIEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGRvbmUobnVsbCwgeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkb25lKEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGRvbmUoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHhoci5zZW5kKHBhcmFtcyA/IEpTT04uc3RyaW5naWZ5KHBhcmFtcykgOiBudWxsKTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUodXJsT3JSZXF1ZXN0KSB7XG4gICAgcmV0dXJuIG5ldyBBamF4T2JzZXJ2YWJsZSh1cmxPclJlcXVlc3QpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRPYnNlcnZhYmxlIHtcbiAgY29uc3RydWN0b3IodGFyZ2V0LCBldmVudE5hbWUsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICB0aGlzLmV2ZW50TmFtZSA9IGV2ZW50TmFtZTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50TmFtZSwgb2JzZXJ2ZXIsIHRoaXMub3B0aW9ucyk7XG4gIH1cblxuICB1bnN1YnNjcmliZShvYnNlcnZlcikge1xuICAgIHRoaXMudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5ldmVudE5hbWUsIG9ic2VydmVyLCB0aGlzLm9wdGlvbnMpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZSh0YXJnZXQsIGV2ZW50TmFtZSwgb3B0aW9ucyA9IGZhbHNlKSB7XG4gICAgcmV0dXJuIG5ldyBFdmVudE9ic2VydmFibGUodGFyZ2V0LCBldmVudE5hbWUsIG9wdGlvbnMpO1xuICB9XG59IiwiaW1wb3J0IE9wZXJhdG9yIGZyb20gJy4vb3BlcmF0b3InO1xuaW1wb3J0IEV2ZW50T2JzZXJ2YWJsZSBmcm9tICcuL2V2ZW50JztcbmltcG9ydCBBamF4T2JzZXJ2YWJsZSBmcm9tICcuL2FqYXgnO1xuXG4vKipcbiAqIEZyb20gUmVhY3RpdmVYIGRvY3M6XG4gKlxuICogT2JzZXJ2YWJsZTogQW4gaW50ZXJmYWNlIHRoYXQgbGlzdGVucyBmb3IgaW5jb21pbmcgbm90aWZpY2F0aW9ucyBvdmVyIGEgcGVyaW9kIG9mIHRpbWVcbiAqIGFuZCBwdXNoZXMgdGhlbSB0byBhbm90aGVyIGludGVyZmFjZSB0aGF0IHJlYWN0cyB0byB0aGVtLlxuICpcbiAqIFN1YnNjcmlwdGlvbjogV2hlbiBhbiBPYnNlcnZhYmxlIGludGVyZmFjZSBzdGFydHMgZG9pbmcgaXRzIHdvcmssXG4gKiBpLmUuIGxpc3RlbmluZyBmb3Igbm90aWZpY2F0aW9ucyBhbmQgcHVzaGluZyB0aGVtIG91dC5cbiAqXG4gKiBPYnNlcnZlcjogQW4gaW50ZXJmYWNlIHRoYXQgcmVhY3RzIHRvIGRhdGEgcHVzaGVkIGZyb20gYW4gT2JzZXJ2YWJsZS5cbiAqXG4gKiBPcGVyYXRvcnM6IEZ1bmN0aW9ucyB1c2VkIHRvIG1hbmlwdWxhdGUgYW4gT2JzZXJ2YWJsZeKAmXMgb3V0cHV0LCBlLmcuIGZpbHRlciwgbWFwLCByZWR1Y2UsIGV0Yy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JzZXJ2YWJsZSBleHRlbmRzIE9wZXJhdG9yIHtcbiAgY29uc3RydWN0b3Ioc3Vic2NyaWJlKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN1YnNjcmliZSA9IHN1YnNjcmliZTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUoc3Vic2NyaWJlKSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKHN1YnNjcmliZSk7XG4gIH1cblxuICAvKipcbiAgICogRm9yIGV4YW1wbGU6XG4gICAqIGNvbnN0IHVuc3ViY3JpYmUgPSBPYnNlcnZhYmxlLmZyb21FdmVudChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQnKSwgJ2NoYW5nZScpLnN1YnNjcmliZSh7XG4gICAqICAgIG5leHQ6IGUgPT4gY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpXG4gICAqIH0pO1xuICAgKlxuICAgKiBzZXRUaW1lb3V0KHVuc3ViY3JpYmUsIDUwMDApO1xuICAgKlxuICAgKiBAcGFyYW0gdGFyZ2V0XG4gICAqIEBwYXJhbSBldmVudE5hbWVcbiAgICovXG4gIHN0YXRpYyBmcm9tRXZlbnQodGFyZ2V0LCBldmVudE5hbWUpIHtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUob2JzZXJ2ZXIgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlID0+IG9ic2VydmVyLm5leHQoZSk7XG4gICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrLCBmYWxzZSk7XG4gICAgICByZXR1cm4gKCkgPT4gdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaywgZmFsc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGFqYXgodXJsT3JSZXF1ZXN0KSB7XG4gICAgcmV0dXJuIEFqYXhPYnNlcnZhYmxlLmNyZWF0ZSh1cmxPclJlcXVlc3QpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3BlcmF0b3Ige1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmZpbHRlciA9IHByZWRpY2F0ZSA9PiB7IC8qIHRvIGJlIGltcGxlbWVudGVkICovIH07XG4gICAgdGhpcy5tYXAgPSBwcmVkaWNhdGUgPT4geyAvKiB0byBiZSBpbXBsZW1lbnRlZCAqLyB9O1xuICAgIHRoaXMucmVkdWNlID0gcHJlZGljYXRlID0+IHsgLyogdG8gYmUgaW1wbGVtZW50ZWQgKi8gfTtcbiAgfVxufSIsImltcG9ydCBMaXN0IGZyb20gJ34vY29yZS9saXN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ViamVjdCBleHRlbmRzIExpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZSgpIHtcbiAgICByZXR1cm4gbmV3IFN1YmplY3QoKTtcbiAgfVxuXG4gIHN1YnNjcmliZShvYnNlcnZlcikge1xuICAgIHRoaXMuYWRkKG9ic2VydmVyKTtcbiAgfVxuXG4gIHVuc3Vic2NyaWJlKCkge1xuICAgIHRoaXMuZGF0YSA9IHRoaXMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gb2JzZXJ2ZXIpLmNvbGxlY3QoKTtcbiAgfVxuXG4gIG5leHQoLi4uYXJncykge1xuICAgIHRoaXMuZWFjaChvYnNlcnZlciA9PiBvYnNlcnZlci5hcHBseSh0aGlzLCBhcmdzKSk7XG4gIH1cbn0iLCJpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgRXh0IH0gZnJvbSAnLi9jb3JlL2V4dCc7XG5cbmNsYXNzIFJleHQgZXh0ZW5kcyBFeHQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuQ2FjaGUgPSByZXF1aXJlKCcuL2RhdGEvY2FjaGUnKTtcbiAgICB0aGlzLk1vZGVsID0gcmVxdWlyZSgnLi9kYXRhL21vZGVsJyk7XG4gICAgdGhpcy5PYnNlcnZhYmxlID0gcmVxdWlyZSgnLi9yZWFjdGl2ZS9vYnNlcnZhYmxlJyk7XG4gICAgdGhpcy5EaWFsb2dNYW5hZ2VyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2RpYWxvZycpO1xuICB9XG5cbiAgYXN5bmMgbGF1bmNoKHZpZXdwb3J0KSB7XG4gICAgaWYgKCF3aW5kb3cubG9jYXRpb24uaGFzaCkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnLyc7XG4gICAgfVxuXG4gICAgY29uc3Qgcm9vdCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnPGRpdiBpZD1cInJlYWN0LXJvb3RcIj48L2Rpdj4nKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJvb3QpO1xuICAgIHRoaXMuaXNGdW5jdGlvbih2aWV3cG9ydCkgJiYgKHZpZXdwb3J0ID0gYXdhaXQgdmlld3BvcnQoKSk7XG4gICAgcmVuZGVyKHZpZXdwb3J0LCByb290KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUmV4dCgpO1xuXG4vLyNyZWdpb24gQ29tcG9uZW50XG5leHBvcnQgeyBIYXNoUm91dGVyLCBMaW5rIH0gZnJvbSAnLi9jb21wb25lbnRzL3JvdXRlcic7XG5leHBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvY29udGFpbmVyJztcbmV4cG9ydCB7IEJ1dHRvbiwgQnV0dG9uTGluaywgRmllbGQsIFRleHRGaWVsZCwgQ2hlY2tib3gsIFRleHRBcmVhIH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0nO1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBHcmlkIH0gZnJvbSAnLi9jb21wb25lbnRzL2dyaWQnO1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBMaXN0VmlldyB9IGZyb20gJy4vY29tcG9uZW50cy9saXN0Jztcbi8vIGV4cG9ydCB7IERpYWxvZyB9IGZyb20gJy4vY29tcG9uZW50cy9kaWFsb2cnO1xuLy8jZW5kcmVnaW9uXG5cbi8vI3JlZ2lvbiBEZWNvcmF0b3IgKG9yIEhpZ2hlciBPcmRlciBGdW5jdGlvbiBvciBIaWdoZXIgT3JkZXIgQ29tcG9uZW50KVxuZXhwb3J0IHsgYmluZCwgZGVib3VuY2UgfSBmcm9tICcuL2NvcmUvZXh0JztcbmV4cG9ydCB7IFJvdXRlIH0gZnJvbSAnLi9jb21wb25lbnRzL3JvdXRlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbXBvbmVudCB9IGZyb20gJy4vYXBwL2NvbXBvbmVudCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlcnZpY2UgfSBmcm9tICcuL2FwcC9zZXJ2aWNlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3RvcmUgfSBmcm9tICcuL2RhdGEvc3RvcmUnO1xuLy8jZW5kcmVnaW9uIl19
