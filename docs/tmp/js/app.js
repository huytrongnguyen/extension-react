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
                  'code',
                  null,
                  'babel-polyfill'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'code',
                  null,
                  'babel-preset-env'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'code',
                  null,
                  'babel-preset-react'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'code',
                  null,
                  'd3'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'code',
                  null,
                  'font-awesome'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'code',
                  null,
                  'react'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'code',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkb2NzL3NyYy9qcy9hcHAuanMiLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2dldHRpbmctc3RhcnRlZC9nZXR0aW5nLXN0YXJ0ZWQuanN4IiwiZG9jcy9zcmMvanMvY29tcG9uZW50cy92aWV3cG9ydC92aWV3cG9ydC5qc3giLCJzcmMvYXBwL2NvbXBvbmVudC5qcyIsInNyYy9hcHAvc2VydmljZS5qcyIsInNyYy9jb21wb25lbnRzL2NvbnRhaW5lci5qc3giLCJzcmMvY29tcG9uZW50cy9kaWFsb2cuanN4Iiwic3JjL2NvbXBvbmVudHMvZm9ybS5qc3giLCJzcmMvY29tcG9uZW50cy9yb3V0ZXIuanN4Iiwic3JjL2NvcmUvZGljdGlvbmFyeS5qcyIsInNyYy9jb3JlL2RvbS5qcyIsInNyYy9jb3JlL2V4dC5qcyIsInNyYy9jb3JlL2xpc3QuanMiLCJzcmMvY29yZS9zdHJpbmcuanMiLCJzcmMvZGF0YS9hYnN0cmFjdC1zdG9yZS5qcyIsInNyYy9kYXRhL2FqYXguanMiLCJzcmMvZGF0YS9jYWNoZS5qcyIsInNyYy9kYXRhL21vZGVsLmpzIiwic3JjL2RhdGEvcHJveHktc3RvcmUuanMiLCJzcmMvZGF0YS9zdG9yZS5qcyIsInNyYy9yZWFjdGl2ZS9hamF4LmpzIiwic3JjL3JlYWN0aXZlL2V2ZW50LmpzIiwic3JjL3JlYWN0aXZlL29ic2VydmFibGUuanMiLCJzcmMvcmVhY3RpdmUvb3BlcmF0b3IuanMiLCJzcmMvcmVhY3RpdmUvc3ViamVjdC5qcyIsInNyYy9yZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBSyxNQUFMLENBQVksdURBQVo7Ozs7Ozs7Ozs7Ozs7O0FDWEE7Ozs7QUFDQTs7Ozs7Ozs7OztJQUdxQixjLFdBRHBCLGlC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LFFBQVEsY0FBUixDQUFiO0FBQ0EsVUFBSyxVQUFMLEdBQWtCLFFBQVEsdUJBQVIsQ0FBbEI7QUFDQSxVQUFLLGFBQUwsR0FBcUIsUUFBUSxxQkFBUixDQUFyQjtBQUxZO0FBTWI7Ozs7OzBGQUVZLFE7Ozs7OztBQUNYLG9CQUFJLENBQUMsT0FBTyxRQUFQLENBQWdCLElBQXJCLEVBQTJCO0FBQ3pCLHlCQUFPLFFBQVAsQ0FBZ0IsSUFBaEIsR0FBdUIsR0FBdkI7QUFDRDs7QUFFSyxvQixHQUFPLEtBQUssYUFBTCxDQUFtQiw2QkFBbkIsQzs7QUFDYix5QkFBUyxJQUFULENBQWMsV0FBZCxDQUEwQixJQUExQjs4QkFDQSxLQUFLLFVBQUwsQ0FBZ0IsUUFBaEIsQzs7Ozs7Ozs7dUJBQStDLFU7OztBQUFqQix3Qjs7O0FBQzlCLHNDQUFPLFFBQVAsRUFBaUIsSUFBakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFJVyxJQUFJLElBQUosRTs7QUFFZiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmV4dCBmcm9tICd+L3JleHQnO1xuaW1wb3J0IFZpZXdwb3J0IGZyb20gJy4vY29tcG9uZW50cy92aWV3cG9ydC92aWV3cG9ydCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9nZXR0aW5nLXN0YXJ0ZWQvZ2V0dGluZy1zdGFydGVkJztcbi8vIGltcG9ydCBSZXh0Q29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9jb3JlLWNvbmNlcHRzL2NvbXBvbmVudCc7XG4vLyBpbXBvcnQgRGF0YVBhY2thZ2UgZnJvbSAnLi9jb21wb25lbnRzL2NvcmUtY29uY2VwdHMvZGF0YS1wYWNrYWdlJztcbi8vIGltcG9ydCBTY3JlZW5OYXZpZ2F0aW9uIGZyb20gJy4vY29tcG9uZW50cy9jb3JlLWNvbmNlcHRzL3NjcmVlbi1uYXZpZ2F0aW9uJztcbi8vIGltcG9ydCBBcmNoaXRlY3R1cmUgZnJvbSAnLi9jb21wb25lbnRzL2FyY2hpdGVjdHVyZS9hcmNoaXRlY3R1cmUnO1xuLy8gaW1wb3J0IEdyaWRDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL3VpLWNvbXBvbmVudHMvZ3JpZCc7XG5cblJleHQubGF1bmNoKDxWaWV3cG9ydCAvPik7IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29udGFpbmVyIH0gZnJvbSAnfi9yZXh0JztcblxuQFJvdXRlKCcvJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdldHRpbmdTdGFydGVkIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPENvbnRhaW5lcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtaGVhZGVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJwYW5lbC10aXRsZVwiPkdldHRpbmcgU3RhcnRlZDwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwicGFuZWwtYm9keVwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlxuICAgICAgICAgIEV4dGVuc2lvbiBSZWFjdCBpcyBhIGxpYnJhcnkgdGhhdCBidWlsZCBvbiB0b3Agb2YgUmVhY3QsIGhlbHBpbmcgeW91IGJ1aWxkIGRhdGEtaW50ZW5zaXZlLCBjcm9zcy1wbGF0Zm9ybSB3ZWIgYXBwcyBmb3IgZGVza3RvcHMsIHRhYmxldHMsIGFuZCBzbWFydHBob25lcy5cbiAgICAgICAgPC9wPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWItbWRcIj5RdWljayBTdGFydDwvaDI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi1tZFwiPjEuIFNldHVwIGEgZGV2ZWxvcG1lbnQgZW52aXJvbWVudDwvaDM+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG4gICAgICAgICAgVXNlIDxjb2RlPm5wbTwvY29kZT4gb3IgPGNvZGU+eWFybjwvY29kZT4gdG8gaW5zdGFsbCBmb2xsb3dpbmcgZGVwZW5kZW5jaWVzOlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT48Y29kZT5iYWJlbC1wb2x5ZmlsbDwvY29kZT48L2xpPlxuICAgICAgICAgICAgPGxpPjxjb2RlPmJhYmVsLXByZXNldC1lbnY8L2NvZGU+PC9saT5cbiAgICAgICAgICAgIDxsaT48Y29kZT5iYWJlbC1wcmVzZXQtcmVhY3Q8L2NvZGU+PC9saT5cbiAgICAgICAgICAgIDxsaT48Y29kZT5kMzwvY29kZT48L2xpPlxuICAgICAgICAgICAgPGxpPjxjb2RlPmZvbnQtYXdlc29tZTwvY29kZT48L2xpPlxuICAgICAgICAgICAgPGxpPjxjb2RlPnJlYWN0PC9jb2RlPjwvbGk+XG4gICAgICAgICAgICA8bGk+PGNvZGU+ZXh0LXJlYWN0PC9jb2RlPjwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9wPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItbWRcIj4yLiBDcmVhdGUgYSBuZXcgcHJvamVjdDwvaDM+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG4gICAgICAgICAgVGhlIGZvbGxvd2luZyBpcyB0aGUgcmVjb21tZW5kZWQgZGlyZWN0b3J5IHN0cnVjdHVyZSBmb3IgYW4gRXh0ZW5zaW9uIFJlYWN0IGFwcGxpY2F0aW9uOlxuICAgICAgICAgIDxwcmUgY2xhc3NOYW1lPVwiZWRpdG9yXCI+XG4gICAgICAgICAgICArLS0gbm9kZV9tb2R1bGVzOiBOUE0gY29tcG9uZW50czxiciAvPlxuICAgICAgICAgICAgKy0tIGRpc3Q8YnIgLz5cbiAgICAgICAgICAgIHwgICArLS0gYXBwLm1pbi5jc3M8YnIgLz5cbiAgICAgICAgICAgIHwgICArLS0gYXBwLm1pbi5qczxiciAvPlxuICAgICAgICAgICAgfCAgICstLSBmcmFtZXdvcmsubWluLmpzPGJyIC8+XG4gICAgICAgICAgICArLS0gc3JjPGJyIC8+XG4gICAgICAgICAgICB8ICAgKy0tIGNzczxiciAvPlxuICAgICAgICAgICAgfCAgIHwgICArLS0gX3ZhcmlhYmxlcy5zY3NzOiBhcHBsaWNhdGlvbiBzdHlsZXMgY29uc3RhbnQgdmFsdWVzPGJyIC8+XG4gICAgICAgICAgICB8ICAgfCAgICstLSBhcHAuc2NzczogYXBwbGljYXRpb24gc3R5bGVzPGJyIC8+XG4gICAgICAgICAgICB8ICAgKy0tIGpzPGJyIC8+XG4gICAgICAgICAgICB8ICAgfCAgICstLSBjb21tb246IGNvZGUgb2Ygc2hhcmVkIGZ1bmN0aW9ucyBvciBzaGFyZWQgY29tcG9uZW50czxiciAvPlxuICAgICAgICAgICAgfCAgIHwgICArLS0gY29tcG9uZW50czogY29kZSAoc2NyaXB0cyBhbmQgdmlld3MpIG9mIGV2ZXJ5IGZlYXR1cmUgc2hvdWxkIGJlIGEgc3ViLWRpcmVjdG9yeTxiciAvPlxuICAgICAgICAgICAgfCAgIHwgICArLS0gc2VydmljZXM6IGNvZGUgb2Ygc2VydmljZXM8YnIgLz5cbiAgICAgICAgICAgIHwgICB8ICAgKy0tIHN0b3JlczogY29kZSBvZiBzdG9yZXM8YnIgLz5cbiAgICAgICAgICAgIHwgICB8ICAgKy0tIGFwcC5qczogbWFpbiBzY3JpcHQ8YnIgLz5cbiAgICAgICAgICAgICstLSBndWxwZmlsZS5iYWJlbC5qczogYnVpbGQgc2NyaXB0cyAob3Igd2VicGFjay5jb25maWcuanMgaWYgeW91IHByZWZlcik8YnIgLz5cbiAgICAgICAgICAgICstLSBpbmRleC5odG1sPGJyIC8+XG4gICAgICAgICAgICArLS0gcGFja2FnZS5qc29uOiBOUE0gcGFja2FnZSBkZWZpbml0aW9uPGJyIC8+XG4gICAgICAgICAgICArLS0gc2VydmVyLmpzOiBjb2RlIG9mIGxvY2FsIHdlYiBzZXJ2ZXIgKEV4cHJlc3NKUyk8YnIgLz5cbiAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICBMZXTigJlzIHN0YXJ0IGV2YWx1YXRpbmcgdGhlIGFwcGxpY2F0aW9uIGJ5IGxvb2tpbmcgYXQgPGNvZGU+aW5kZXguaHRtbDwvY29kZT5cbiAgICAgICAgICA8cHJlIGNsYXNzTmFtZT1cImVkaXRvciBtYi1tZFwiPntgPCEtLSBpbmRleC5odG1sIC0tPlxuPCFET0NUWVBFIGh0bWw+XG48aHRtbD5cbjxoZWFkPlxuICA8bWV0YSBjaGFyc2V0PVwidXRmLThcIiAvPlxuICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG4gIDx0aXRsZT5FeHRlbnNpb24gUmVhY3QgQXBwbGljYXRpb248L3RpdGxlPlxuICA8bGluayBocmVmPVwiL25vZGUtbW9kdWxlcy9leHQtcmVhY3QvY3NzL3JleHQubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICA8bGluayBocmVmPVwiL2Rpc3QvYXBwLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbjwvaGVhZD5cbjxib2R5PlxuICA8c2NyaXB0IHNyYz1cIi9kaXN0L2ZyYW1ld29yay5taW4uanNcIj48L3NjcmlwdD5cbiAgPHNjcmlwdCBzcmM9XCIvZGlzdC9hcHAubWluLmpzXCI+PC9zY3JpcHQ+XG48L2JvZHk+XG48L2h0bWw+YH08L3ByZT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlRvIGxhdW5jaCB5b3VyIGFwcCwgYWRkIHRoZSBmb2xsb3dpbmcgdG8geW91ciA8Y29kZT5hcHAuanM8L2NvZGU+IGZpbGU8L3A+XG4gICAgICAgICAgPHByZSBjbGFzc05hbWU9XCJlZGl0b3JcIj57YC8vIGFwcC5qc1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJleHQgZnJvbSAnZXh0LXJlYWN0JztcbmltcG9ydCBWaWV3cG9ydCBmcm9tICcuL2NvbXBvbmVudHMvdmlld3BvcnQvdmlld3BvcnQnO1xuXG5SZXh0LmxhdW5jaCg8Vmlld3BvcnQgLz4pO2B9PC9wcmU+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQ29udGFpbmVyPlxuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIsIEhhc2hSb3V0ZXIsIExpbmsgfSBmcm9tICd+L3JleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3cG9ydCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxDb250YWluZXIgbGF5b3V0PVwiY29sdW1uXCI+XG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cIm5hdlwiIHN0eWxlPXt7d2lkdGg6MzAwfX0+XG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImJyYW5kXCI+RXh0ZW5zaW9uIFJlYWN0PC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXItYXV0b1wiPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibWItYXV0byBkLWZsZXhcIj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+PExpbmsgdG89XCIvXCIgdGV4dD1cIkdFVFRJTkcgU1RBUlRFRFwiIC8+PC9saT5cbiAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJuYXYtdGV4dFwiPkNPUkUgQ09OQ0VQVFM8L3NwYW4+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayB0bz1cIi9jb3JlLWNvbmNlcHRzL2NvbXBvbmVudFwiIHRleHQ9XCJDb21wb25lbnRcIiAvPjwvbGk+XG4gICAgICAgICAgICA8bGk+PExpbmsgdG89XCIvY29yZS1jb25jZXB0cy9kYXRhLXBhY2thZ2VcIiB0ZXh0PVwiRGF0YSBQYWNrYWdlXCIgLz48L2xpPlxuICAgICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL2NvcmUtY29uY2VwdHMvc2NyZWVuLW5hdmlnYXRpb25cIiB0ZXh0PVwiU2NyZWVuIE5hdmlnYXRpb25cIiAvPjwvbGk+XG4gICAgICAgICAgICA8bGk+PExpbmsgdG89XCIvYXJjaGl0ZWN0dXJlXCIgdGV4dD1cIkFSQ0hJVEVDVFVSRVwiIC8+PC9saT5cbiAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJuYXYtdGV4dFwiPlVJIENPTVBPTkVOVFM8L3NwYW4+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayB0bz1cIi91aS1jb21wb25lbnRzL2dyaWRzXCIgdGV4dD1cIkdyaWRzXCIgLz48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LXRleHRcIj4mY29weTsgMjAxNyBodXl0cm9uZ25ndXllbjwvZGl2PlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPENvbnRhaW5lciBpZD1cIm1haW4tY29udGFpbmVyXCI+XG4gICAgICAgIDxIYXNoUm91dGVyIC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEV4dCBmcm9tICd+L2NvcmUvZXh0JztcbmltcG9ydCBMaXN0IGZyb20gJ34vY29yZS9saXN0JztcbmltcG9ydCBEaWN0aW9uYXJ5IGZyb20gJ34vY29yZS9kaWN0aW9uYXJ5JztcbmltcG9ydCBPYnNlcnZhYmxlIGZyb20gJ34vcmVhY3RpdmUvb2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZyA9PiBDb250cm9sbGVyID0+IHtcbiAgY29uc3QgV3JhcHBlZENvbXBvbmVudCA9IGNvbmZpZy52aWV3O1xuICByZXR1cm4gY2xhc3MgSG9jQ29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIEV4dC5pbml0aWFsU3RhdGUodGhpcywge1xuICAgICAgICBzdG9yZXM6IHt9LFxuICAgICAgICBzZXJ2aWNlczoge30sXG4gICAgICAgIFtjb25maWcuY29tcG9uZW50QXMgfHwgJyR2aWV3J106IG5ldyBDb250cm9sbGVyKHByb3BzKVxuICAgICAgfSk7XG4gICAgICB0aGlzLm9uRGF0YUNoYW5nZWQgPSAoKSA9PiB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgdGhpcy5zZXRTdG9yZXMoTGlzdChjb25maWcuc3RvcmVzKS5yZWR1Y2UoKHN0b3Jlcywgc3RvcmUpID0+IHtcbiAgICAgICAgc3RvcmUuc3Vic2NyaWJlKHRoaXMub25EYXRhQ2hhbmdlKTtcbiAgICAgICAgc3RvcmVzW3N0b3JlLnN0b3JlSWRdID0gc3RvcmU7XG4gICAgICAgIHJldHVybiBzdG9yZXM7XG4gICAgICB9LCB7fSkpO1xuXG4gICAgICB0aGlzLnNldFNlcnZpY2VzKExpc3QoY29uZmlnLnNlcnZpY2VzKS5yZWR1Y2UoKHNlcnZpY2VzLCBzZXJ2aWNlKSA9PiB7XG4gICAgICAgIHNlcnZpY2VzW3NlcnZpY2Uuc2VydmljZUlkXSA9IHNlcnZpY2U7XG4gICAgICAgIHJldHVybiBzZXJ2aWNlcztcbiAgICAgIH0sIHt9KSk7XG4gICAgfVxuXG4gICAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBjb25zdCB7IHN0b3JlcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGZvciAobGV0IHN0b3JlSWQgaW4gc3RvcmVzKSB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gc3RvcmVzW3N0b3JlSWRdO1xuICAgICAgICBzdG9yZS5hdXRvTG9hZCAmJiAoYXdhaXQgc3RvcmUubG9hZCgpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIERpY3Rpb25hcnkodGhpcy5zdGF0ZS5zdG9yZXMpLmVhY2goKHN0b3JlSWQsIHN0b3JlKSA9PiB7XG4gICAgICAgIHN0b3JlLnVuc3Vic2NyaWJlKHRoaXMub25EYXRhQ2hhbmdlZCk7XG4gICAgICAgIHN0b3JlLmNsZWFyRGF0YSh0cnVlKTtcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50IHsuLi50aGlzLnN0YXRlfSB7Li4udGhpcy5wcm9wc30gLz47XG4gICAgfVxuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhenogPT4ge1xuICBjb25zdCBzZXJ2aWNlID0gbmV3IGNsYXp6KCk7XG4gIHNlcnZpY2Uuc2VydmljZUlkID0gY2xhenoubmFtZTtcbiAgcmV0dXJuIHNlcnZpY2U7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBFeHQgZnJvbSAnfi9jb3JlL2V4dCc7XG5cbmNvbnN0IExBWU9VVF9DTEFTUyA9IHtcbiAgJ2NvbHVtbic6ICdmbGV4LXJvdycsXG4gICdyb3cnOiAnZmxleC1jb2x1bW4nLFxuICAnZml0JzogJycsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIoeyBjbGFzc05hbWUgPSAnJywgbGF5b3V0ID0gJ3JvdycsIGNoaWxkcmVuLCAuLi5vdGhlcnMgfSkge1xuICByZXR1cm4gPHNlY3Rpb24gY2xhc3NOYW1lPXtFeHQuY2xhc3NOYW1lKCdkLWZsZXgnLCBMQVlPVVRfQ0xBU1NbbGF5b3V0XSwgY2xhc3NOYW1lKX0gey4uLm90aGVyc30+e2NoaWxkcmVufTwvc2VjdGlvbj5cbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyLCB1bm1vdW50Q29tcG9uZW50QXROb2RlLCBmaW5kRE9NTm9kZSB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgRXh0LCB7IGJpbmQgfSBmcm9tICd+L2NvcmUvZXh0JztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi9jb250YWluZXInO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9mb3JtJztcblxuY2xhc3MgRGlhbG9nTWFuYWdlciB7XG4gIHNob3coZGlhbG9nKSB7XG4gICAgY29uc3QgZG9tID0gRXh0LmFwcGVuZCgnPGRpdiBjbGFzcz1cIm1hc2tcIj48L2Rpdj4nKTtcbiAgICByZW5kZXIoZGlhbG9nLCBkb20pO1xuICB9XG5cbiAgdG9hc3QoeyBkZWxheSA9IDMwMDAsIC4uLm90aGVycyB9KSB7XG4gICAgY29uc3QgZG9tID0gRXh0LmFwcGVuZCgnPGRpdiBjbGFzcz1cIm5vdGlmaWNhdGlvblwiPjwvZGl2PicpO1xuICAgIHJlbmRlcig8VG9hc3Qgey4uLm90aGVyc30gLz4sIGRvbSk7XG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgRGlhbG9nTWFuYWdlci5kZXN0cm95KGRvbSk7XG4gICAgfSwgZGVsYXkpO1xuICB9XG5cbiAgbXNnYm94KHsgLi4ub3RoZXJzIH0pIHtcbiAgICBjb25zdCBkb20gPSBFeHQuYXBwZW5kKCc8ZGl2IGNsYXNzPVwibWFza1wiPjwvZGl2PicpO1xuICAgIHJlbmRlcig8TXNnQm94IHsuLi5vdGhlcnN9IC8+LCBkb20pO1xuICB9XG5cbiAgZGlzcG9zZShkaWFsb2dJZCkge1xuICAgIHRoaXMuZGVzdHJveShFeHQuZ2V0QnlJZChkaWFsb2dJZCkucGFyZW50RWxlbWVudCk7XG4gIH1cblxuICBkZXN0cm95KGRvbSkge1xuICAgIHVubW91bnRDb21wb25lbnRBdE5vZGUocGFyZW50KTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHBhcmVudCk7XG4gIH1cblxuICBzaG93RXJyb3JNc2dib3gobWVzc2FnZSkge1xuICAgIHRoaXMubXNnYm94KHtcbiAgICAgIHRpdGxlOiAnRXJyb3InLFxuICAgICAgaWNvbjogJ3RpbWVzJyxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgRGlhbG9nTWFuYWdlcigpO1xuXG5leHBvcnQgY2xhc3MgRGlhbG9nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aXRsZSwgY2xhc3NOYW1lLCBjaGlsZHJlbiwgY2xvc2VCdXR0b24gPSB0cnVlLCAuLi5vdGhlcnMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIDxDb250YWluZXIgY2xhc3NOYW1lPXtgZGlhbG9nICR7Y2xhc3NOYW1lIHx8ICcnfWB9IHsuLi5vdGhlcnN9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2ctaGVhZGVyXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImRpYWxvZy10aXRsZSB0ZXh0LXNtLWNlbnRlclwiPnt0aXRsZSB8fCAnJ308L3A+XG4gICAgICAgIHtjbG9zZUJ1dHRvbiAmJiA8c3BhbiBjbGFzc05hbWU9XCJ0b29sXCIgb25DbGljaz17dGhpcy5kaXNwb3NlfT48L3NwYW4+fVxuICAgICAgPC9kaXY+XG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cImRpYWxvZy1ib2R5XCI+XG4gICAgICAgIDxDb250YWluZXI+e2NoaWxkcmVufTwvQ29udGFpbmVyPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Db250YWluZXI+O1xuICB9XG5cbiAgQGJpbmRcbiAgZGlzcG9zZSgpIHtcbiAgICBjb25zdCB7IG9uQ2xvc2UgfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgcGFyZW50ID0gRXh0LmdldENvbXAodGhpcykucGFyZW50KCk7XG4gICAgb25DbG9zZSAmJiBvbkNsb3NlKCk7XG4gICAgRGlhbG9nTWFuYWdlci5kZXN0cm95KHBhcmVudCk7XG4gIH1cbn1cblxuY29uc3QgYWxlcnQgPSB7XG4gIHN1Y2Nlc3M6IHtcbiAgICB0aXRsZTogJ1N1Y2Nlc3MnLFxuICAgIGljb246ICdjaGVjaydcbiAgfSxcbiAgZXJyb3I6IHtcbiAgICB0aXRsZTogJ0Vycm9yJyxcbiAgICBpY29uOiAndGltZXMnXG4gIH0sXG4gIHdhcm5pbmc6IHtcbiAgICB0aXRsZTogJ1dhcm5pbmcnLFxuICAgIGljb246ICdleGNsYW1hdGlvbidcbiAgfSxcbiAgaW5mbzoge1xuICAgIHRpdGxlOiAnSW5mb3JtYXRpb24nLFxuICAgIGljb246ICdpbmZvJ1xuICB9LFxufTtcblxuZXhwb3J0IGNsYXNzIFRvYXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5kaXNwb3NlID0gdGhpcy5kaXNwb3NlLmJpbmQodGhpcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0eXBlLCBtZXNzYWdlIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiA8Q29udGFpbmVyPlxuICAgICAgPGg2IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRcIj57YWxlcnRbdHlwZV0udGl0bGV9PC9oNj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9hc3QtaWNvblwiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT17YGZhIGZhLTJ4IGZhLSR7YWxlcnRbdHlwZV0uaWNvbn0tY2lyY2xlYH0+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2FzdC1jb250ZW50XCI+XG4gICAgICAgICAge21lc3NhZ2V9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9Db250YWluZXI+O1xuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBEaWFsb2dNYW5hZ2VyLmRlc3Ryb3koRXh0LmdldENvbXAodGhpcykucGFyZW50KCkpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNc2dCb3ggZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aXRsZSwgaWNvbiwgY2xvc2VCdXR0b24gPSB0cnVlLCBtZXNzYWdlLCBidXR0b25zID0gJ09LJywgYnV0dG9uVGV4dCA9IHt9LCBmbiB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gPERpYWxvZyB0aXRsZT17dGl0bGV9IGNsb3NlQnV0dG9uPXtjbG9zZUJ1dHRvbn0+XG4gICAgICB7IWljb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3dcIj5cbiAgICAgICAge21lc3NhZ2V9XG4gICAgICA8L2Rpdj59XG4gICAgICB7aWNvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvYXN0LWljb24gbXItc21cIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9e2BmYSBmYS0yeCBmYS0ke2ljb259LWNpcmNsZWB9PjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9hc3QtY29udGVudFwiPlxuICAgICAgICAgIHttZXNzYWdlfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2Pn1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbS1jZW50ZXIgbXQtc21cIj5cbiAgICAgICAgeyhidXR0b25zID09PSAnT0tDQU5DRUwnKSAmJiA8QnV0dG9uIGNsYXNzTmFtZT1cIm1yLXNtXCIgdGV4dD17YnV0dG9uVGV4dC5jYW5jZWwgfHwgJ0NhbmNlbCd9IG9uQ2xpY2s9eygpID0+IHRoaXMuZGlzcG9zZSgpfSAvPn1cbiAgICAgICAgPEJ1dHRvbiAgdGV4dD17YnV0dG9uVGV4dC5vayB8fCAnT0snfSBvbkNsaWNrPXsoKSA9PiB7dGhpcy5kaXNwb3NlKCk7IGZuICYmIGZuKCk7fX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvRGlhbG9nPjtcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgRGlhbG9nTWFuYWdlci5kZXN0cm95KEV4dC5nZXRDb21wKHRoaXMpLnBhcmVudCgpKTtcbiAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRXh0IGZyb20gJ34vY29yZS9leHQnO1xuXG5leHBvcnQgZnVuY3Rpb24gQnV0dG9uKHsgY2xhc3NOYW1lID0gJycsIHRleHQsIGNoaWxkcmVuLCAuLi5vdGhlcnMgfSkge1xuICByZXR1cm4gPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtFeHQuY2xhc3NOYW1lKCdidG4nLCBjbGFzc05hbWUpfSB7Li4ub3RoZXJzfT5cbiAgICB7dGV4dCB8fCBjaGlsZHJlbn1cbiAgPC9idXR0b24+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQnRuTGluayh7IHRleHQsIGNoaWxkcmVuLCAuLi5vdGhlcnMgfSkge1xuICByZXR1cm4gPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIHsuLi5vdGhlcnN9Pnt0ZXh0IHx8IGNoaWxkcmVufTwvYT5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEZpZWxkKHsgdHlwZSA9ICd0ZXh0JywgaW5saW5lID0gZmFsc2UsIGxhYmVsID0gJycsIGxhYmVsV2lkdGggPSAzLCB2YWx1ZSwgb25DaGFuZ2UsIC4uLm90aGVycyB9KSB7XG4gIHJldHVybiA8YXJ0aWNsZSBjbGFzc05hbWU9e0V4dC5jbGFzc05hbWUoJ2Zvcm0tZ3JvdXAnLCB7ICdyb3cnOiBpbmxpbmUgfSl9PlxuICA8bGFiZWwgY2xhc3NOYW1lPXtFeHQuY2xhc3NOYW1lKHsgW2Bjb2wtc20tJHtsYWJlbFdpZHRofSB0ZXh0LXNtLXJpZ2h0YF06IGlubGluZSB9KX0+e2xhYmVsfTwvbGFiZWw+XG4gIDxkaXYgY2xhc3NOYW1lPXtFeHQuY2xhc3NOYW1lKHsgW2Bjb2wtc20tJHsxMiAtIGxhYmVsV2lkdGh9YF06IGlubGluZSB9KX0+XG4gICAgeyh0eXBlID09PSAndGV4dCcpICYmIDxUZXh0RmllbGQgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17b25DaGFuZ2V9IHsuLi5vdGhlcnN9IC8+fVxuICAgIHsodHlwZSA9PT0gJ2NoZWNrYm94JykgJiYgPENoZWNrYm94IHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e29uQ2hhbmdlfSB7Li4ub3RoZXJzfSAvPn1cbiAgICB7KHR5cGUgPT09ICd0ZXh0YXJlYScpICYmIDxUZXh0QXJlYSB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gey4uLm90aGVyc30gLz59XG4gIDwvZGl2PlxuPC9hcnRpY2xlPlxufVxuXG5leHBvcnQgZnVuY3Rpb24gVGV4dEZpZWxkKHsgdmFsdWUgPSAnJywgY2xhc3NOYW1lID0gJycsIG9uQ2hhbmdlLCAuLi5vdGhlcnMgfSkge1xuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBlID0+IG9uQ2hhbmdlICYmIG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKTtcbiAgcmV0dXJuIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17RXh0LmNsYXNzTmFtZSgnZm9ybS1jb250cm9sJywgY2xhc3NOYW1lKX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gey4uLm90aGVyc30gLz47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDaGVja2JveCh7IHZhbHVlID0gZmFsc2UsIG9uQ2hhbmdlLCAuLi5vdGhlcnMgfSkge1xuICBjb25zdCB0b2dnbGVDaGVjayA9ICgpID0+IG9uQ2hhbmdlKCF2YWx1ZSk7XG4gIHJldHVybiA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17dmFsdWV9IG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZUNoZWNrfSB7Li4ub3RoZXJzfSAvPjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRleHRBcmVhKHsgcm93cyA9ICczJywgdmFsdWUgPSAnJywgY2xhc3NOYW1lID0gJycsIG9uQ2hhbmdlLCAuLi5vdGhlcnMgfSkge1xuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBlID0+IG9uQ2hhbmdlICYmIG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKTtcbiAgcmV0dXJuIDx0ZXh0YXJlYSByb3dzPXtyb3dzfSBjbGFzc05hbWU9e0V4dC5jbGFzc05hbWUoJ2Zvcm0tY29udHJvbCcsIGNsYXNzTmFtZSl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB7Li4ub3RoZXJzfSAvPjtcbn0iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBFeHQgZnJvbSAnfi9jb3JlL2V4dCc7XG5pbXBvcnQgTGlzdCBmcm9tICd+L2NvcmUvbGlzdCc7XG5pbXBvcnQgT2JzZXJ2YWJsZSBmcm9tICd+L3JlYWN0aXZlL29ic2VydmFibGUnO1xuXG5jb25zdCBST1VURVMgPSB7fSxcbiAgICAgIGdldFJvdXRlID0gKCkgPT4gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpIHx8ICcvJyxcbiAgICAgIGdldFJvdXRlUGF0aCA9IHJvdXRlID0+IHJvdXRlLnNwbGl0KCcvJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBSb3V0ZShyb3V0ZSkge1xuICByZXR1cm4gY29tcCA9PiB7XG4gICAgUk9VVEVTW3JvdXRlXSA9IHtcbiAgICAgIHJvdXRlLFxuICAgICAgY29tcCxcbiAgICAgIHBhdGg6IGdldFJvdXRlUGF0aChyb3V0ZSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExpbmsoeyB0bywgY2xhc3NOYW1lID0gJycsIGFjdGl2ZUNsYXNzTmFtZSA9ICdhY3RpdmUnLCB0ZXh0LCBjaGlsZHJlbiwgLi4ub3RoZXJzIH0pIHtcbiAgcmV0dXJuIDxhIGhyZWY9e2AjJHt0b31gfSBjbGFzc05hbWU9e0V4dC5jbGFzc05hbWUoJ25hdi1saW5rJywgY2xhc3NOYW1lLCB7IFthY3RpdmVDbGFzc05hbWVdOiB0byA9PT0gZ2V0Um91dGUoKSB9KX0gey4uLm90aGVyc30+XG4gICAge3RleHQgfHwgY2hpbGRyZW59XG4gIDwvYT5cbn1cblxuZXhwb3J0IGNsYXNzIEhhc2hSb3V0ZXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgRXh0LmluaXRpYWxTdGF0ZSh0aGlzLCBtYXRjaFBhdGgoKSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBPYnNlcnZhYmxlLmZyb21FdmVudCh3aW5kb3csICdoYXNoY2hhbmdlJykuc3Vic2NyaWJlKHsgbmV4dDogKCkgPT4gdGhpcy5zZXRTdGF0ZShtYXRjaFBhdGgoKSkgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZSwgY29tcCwgcGFyYW1zIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKCFjb21wKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdDb21wb25lbnQgbm90IGZvdW5kIScpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29tcCwgeyByb3V0ZSwgcGFyYW1zIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hdGNoUGF0aCgpIHtcbiAgY29uc3QgcGFyYW1zID0ge30sXG4gICAgICAgIGN1cnJlbnRSb3V0ZSA9IGdldFJvdXRlKCk7XG5cbiAgLy8gYmFzaWMgcm91dGUgKHdpdGhvdXQgcGFyYW1zKVxuICBpZiAoUk9VVEVTW2N1cnJlbnRSb3V0ZV0pIHtcbiAgICByZXR1cm4geyByb3V0ZTogY3VycmVudFJvdXRlLCBjb21wOiBST1VURVNbY3VycmVudFJvdXRlXS5jb21wLCBwYXJhbXMgfTtcbiAgfVxuXG4gIC8vIGFkdmFuY2VkIHJvdXRlICh3aXRoIHBhcmFtcylcbiAgY29uc3QgY3VycmVudFBhdGggPSBnZXRSb3V0ZVBhdGgoY3VycmVudFJvdXRlKTtcbiAgZm9yKGxldCByb3V0ZSBpbiBST1VURVMpIHtcbiAgICBjb25zdCBtYXBSb3V0ZSA9IFJPVVRFU1tyb3V0ZV0sXG4gICAgICAgICAgcm91dGVQYXRoID0gbWFwUm91dGUucGF0aDtcblxuICAgIGxldCBtYXRjaGVkID0gdHJ1ZTtcbiAgICBMaXN0KG1hcFJvdXRlLnBhdGgpLmVhY2goKHJvdXRlTmFtZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChyb3V0ZU5hbWUgIT09IGN1cnJlbnRQYXRoW2luZGV4XSkge1xuICAgICAgICBpZiAocm91dGVOYW1lLnN0YXJ0c1dpdGgoJzonKSkgeyAvLyBkZXRlY3QgcGFyYW0gdmFsdWVcbiAgICAgICAgICBwYXJhbXNbcm91dGVOYW1lLnN1YnN0cmluZygxKV0gPSBjdXJyZW50UGF0aFtpbmRleF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWF0Y2hlZCA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKG1hdGNoZWQpIHtcbiAgICAgIHJldHVybiB7IHJvdXRlOiBjdXJyZW50Um91dGUsIGNvbXA6IG1hcFJvdXRlLmNvbXAsIHBhcmFtcyB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIHdpdGggbm90IGZvdW5kIHNjcmVlblxuICBpZiAoUk9VVEVTWycqJ10pIHtcbiAgICByZXR1cm4geyByb3V0ZTogY3VycmVudFJvdXRlLCBjb21wOiBST1VURVNbJyonXS5jb21wLCBwYXJhbXMgfTtcbiAgfVxuXG4gIC8vIHdpdGhvdXQgbm90IGZvdW5kIHNjcmVlblxuICByZXR1cm4geyByb3V0ZTogY3VycmVudFJvdXRlLCBjb21wOiBudWxsLCBwYXJhbXMgfTtcbn0iLCJpbXBvcnQgTGlzdCBmcm9tICcuL2xpc3QnO1xuXG5leHBvcnQgY2xhc3MgRGljdGlvbmFyeSB7XG4gIGNvbnN0cnVjdG9yKGtleVZhbHVlcykge1xuICAgIHRoaXMuZGF0YSA9IHt9O1xuICAgIGlmIChrZXlWYWx1ZXMgJiYga2V5VmFsdWVzLmxlbmd0aCkge1xuICAgICAgdGhpcy5kYXRhID0gT2JqZWN0LmFzc2lnbih7fSwga2V5VmFsdWVzKTtcbiAgICB9XG5cbiAgICB0aGlzLmtleXMgPSAoKSA9PiBMaXN0KE9iamVjdC5rZXlzKHRoaXMuZGF0YSkpO1xuICAgIHRoaXMudmFsdWVzID0gKCkgPT4gTGlzdChPYmplY3QudmFsdWVzKHRoaXMuZGF0YSkpO1xuICB9XG5cbiAgZWFjaChpdGVyYXRlZSkge1xuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmRhdGEpIHtcbiAgICAgIGl0ZXJhdGVlKHRoaXMuZGF0YVtrZXldLCBrZXksIHRoaXMuZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChrZXlWYWx1ZXMpID0+IG5ldyBEaWN0aW9uYXJ5KGtleVZhbHVlcyk7IiwiaW1wb3J0IHsgTGlzdCB9IGZyb20gJy4vbGlzdCc7XG5cbmNsYXNzIERPTSBleHRlbmRzIExpc3Qge1xuICBzaG93KCkge1xuICAgIHRoaXMuc2VsZWN0b3JzLmVhY2goc2VsZWN0b3IgPT4gc2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jaycpO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLnNlbGVjdG9ycy5lYWNoKHNlbGVjdG9yID0+IHNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScpO1xuICB9XG5cbiAgLy8gcGFyZW50KCkge1xuICAvLyAgIHRoaXMuY29tcCA9IHRoaXMuY29tcC5wYXJlbnRFbGVtZW50O1xuICAvLyAgIHJldHVybiB0aGlzO1xuICAvLyB9XG5cbiAgLy8gd2lkdGgoKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMuY29tcC5jbGllbnRXaWR0aDtcbiAgLy8gfVxuXG4gIC8vIGhlaWdodCgpIHtcbiAgLy8gICByZXR1cm4gdGhpcy5jb21wLmNsaWVudEhlaWdodDtcbiAgLy8gfVxuXG4gIC8vIGZpbmQoc2VsZWN0b3IpIHtcbiAgLy8gICByZXR1cm4gdGhpcy5jb21wLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAvLyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChzZWxlY3RvcikgPT4gbmV3IERPTShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7IiwiaW1wb3J0IERPTSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgU3RyaW5nIGZyb20gJy4vc3RyaW5nJztcbmltcG9ydCBMaXN0IGZyb20gJy4vbGlzdCc7XG5pbXBvcnQgRGljdGlvbmFyeSBmcm9tICcuL2RpY3Rpb25hcnknO1xuXG5leHBvcnQgY2xhc3MgRXh0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5TQ1JPTExfV0lEVEggPSB0aGlzLmdldFNjcm9sbFdpZHRoKCk7XG4gICAgdGhpcy5CT1JERVJfV0lEVEggPSAyO1xuICAgIHRoaXMuQ0hFQ0tfQ09MVU1OX1dJRFRIID0gMzM7XG4gICAgdGhpcy5VTktOT1dOX0VSUk9SX01TRyA9ICdBbiB1bmtub3duIGVycm9yIGhhcyBvY2N1cnJlZC4nO1xuICAgIHRoaXMuWEhSID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICB0aGlzLmlzUHJpbWl0aXZlID0gdmFsdWUgPT4geyBjb25zdCB0eXBlID0gdHlwZW9mIHZhbHVlOyByZXR1cm4gdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZSA9PT0gJ251bWJlcicgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nOyB9XG4gICAgdGhpcy5pc1N0cmluZyA9IHZhbHVlID0+ICh0eXBlb2YgdmFsdWUpID09PSAnc3RyaW5nJztcbiAgICB0aGlzLmlzRnVuY3Rpb24gPSB2YWx1ZSA9PiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICB0aGlzLmlzT2JqZWN0ID0gdmFsdWUgPT4gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xuICAgIHRoaXMuaXNBcnJheSA9IHZhbHVlID0+IHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nO1xuXG4gICAgdGhpcy5jbG9uZSA9IG9iaiA9PiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpOyAvLyBkZWVwIGNsb25lXG5cbiAgICB0aGlzLkRPTSA9IERPTTtcbiAgICB0aGlzLlN0cmluZyA9IFN0cmluZztcbiAgICB0aGlzLkxpc3QgPSBMaXN0O1xuICAgIHRoaXMuTWFwID0gRGljdGlvbmFyeTtcbiAgICB0aGlzLlByb3ZpZGVyID0gbmV3IERpY3Rpb25hcnkoKTtcbiAgfVxuXG4gIGV4dGVuZCgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbi5hcHBseShudWxsLCBhcmd1bWVudHMpOyAvLyBpbW11dGFibGUgb2JqZWN0XG4gIH1cblxuICBpbml0aWFsU3RhdGUoY29tcCwgc3RhdGUpIHtcbiAgICBpZiAoIWNvbXAgfHwgIXN0YXRlKSB7IHJldHVybjsgfVxuICAgIGNvbXAuc3RhdGUgPSBzdGF0ZTtcbiAgICBmb3IgKGxldCBmaWVsZCBvZiBPYmplY3Qua2V5cyhzdGF0ZSkpIHtcbiAgICAgIGNvbXBbYHNldCR7U3RyaW5nLmNhcGl0YWxpemUoZmllbGQpfWBdID0gdmFsdWUgPT4gY29tcC5zZXRTdGF0ZSh7IFtmaWVsZF06IHZhbHVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNsYXNzTmFtZSguLi5leHByZXNzaW9ucykge1xuICAgIGNvbnN0IGNscyA9IFtdO1xuXG4gICAgTGlzdChleHByZXNzaW9ucykuZWFjaChleHAgPT4ge1xuICAgICAgaWYgKCFleHApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGV4cCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY2xzLnB1c2goZXhwKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc09iamVjdChleHApKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBleHApIHtcbiAgICAgICAgICBpZiAoZXhwW2tleV0gPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNscy5wdXNoKGtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGNscy5qb2luKCcgJyk7XG4gIH1cblxuICAvLyNyZWdpb24gRE9NXG4gIGNyZWF0ZUVsZW1lbnQoaHRtbCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5pbm5lckhUTUwgPSBodG1sO1xuICAgIHJldHVybiBkaXYuY2hpbGRyZW5bMF07XG4gIH1cblxuICBnZXRFbChzZWxlY3Rvcikge1xuICAgIHJldHVybiBET00oc2VsZWN0b3IpO1xuICB9XG5cbiAgZ2V0U2Nyb2xsV2lkdGgoKSB7XG4gICAgY29uc3Qgb3V0ZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJzxkaXYgc3R5bGU9XCJ2aXNpYmlsaXR5OiBoaWRkZW47IHdpZHRoOiAxMDBweDsgb3ZlcmZsb3c6IHNjcm9sbDtcIj48L2Rpdj4nKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG91dGVyKTtcbiAgICBjb25zdCB3aWR0aE5vU2Nyb2xsID0gb3V0ZXIub2Zmc2V0V2lkdGg7XG5cbiAgICAvLyBhZGQgaW5uZXJkaXZcbiAgICBjb25zdCBpbm5lciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnPGRpdiBzdHlsZT1cIndpZHRoOiAxMDAlO1wiPjwvZGl2PicpO1xuICAgIG91dGVyLmFwcGVuZENoaWxkKGlubmVyKTtcbiAgICBjb25zdCB3aWR0aFdpdGhTY3JvbGwgPSBpbm5lci5vZmZzZXRXaWR0aDtcblxuICAgIC8vIHJlbW92ZSBkaXZzXG4gICAgb3V0ZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvdXRlcik7XG5cbiAgICByZXR1cm4gd2lkdGhOb1Njcm9sbCAtIHdpZHRoV2l0aFNjcm9sbDtcbiAgfVxuICAvLyNlbmRyZWdpb25cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEV4dCgpO1xuXG5leHBvcnQgZnVuY3Rpb24gYmluZCh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpIHtcbiAgY29uc3QgZm4gPSBkZXNjcmlwdG9yLnZhbHVlO1xuXG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEBiaW5kIGRlY29yYXRvciBpcyBvbmx5IGFwcGxpZWQgdG8gZnVuY3Rpb25zIG5vdDogJHt0eXBlb2YgZm59YCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQoKSB7XG4gICAgICByZXR1cm4gZm4uYmluZCh0aGlzKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0ID0gNTAwKSB7XG4gIGxldCB0aW1lb3V0O1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsXG4gICAgICAgICAgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgICBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgICB9XG5cbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICB9XG59IiwiZXhwb3J0IGNsYXNzIExpc3Qge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZGF0YSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMuY29sbGVjdCA9ICgpID0+IHRoaXMuZGF0YTtcbiAgICB0aGlzLmNvdW50ID0gKCkgPT4gdGhpcy5kYXRhLmxlbmd0aDtcbiAgICB0aGlzLmdldEF0ID0gaW5kZXggPT4gdGhpcy5kYXRhW2luZGV4XTtcbiAgICB0aGlzLmFkZCA9IGl0ZW0gPT4gdGhpcy5kYXRhLnB1c2goaXRlbSk7XG4gICAgdGhpcy5pbnNlcnQgPSAoaXRlbSwgaW5kZXggPSAwKSA9PiB0aGlzLmRhdGEuc3BsaWNlKGluZGV4LCAwLCBpdGVtKTtcbiAgICB0aGlzLnJlbW92ZUF0ID0gKGluZGV4LCBjb3VudCA9IDEpID0+IHRoaXMuZGF0YS5zcGxpY2UoaW5kZXgsIGNvdW50KTtcbiAgICB0aGlzLmpvaW4gPSBzZXBhcmF0b3IgPT4gdGhpcy5kYXRhLmpvaW4oc2VwYXJhdG9yKTtcbiAgfVxuXG4gIGVhY2goaXRlcmF0ZWUpIHtcbiAgICBmb3IgKGxldCBpbmRleCBpbiB0aGlzLmRhdGEpIHtcbiAgICAgIGl0ZXJhdGVlKHRoaXMuZGF0YVtpbmRleF0sIGluZGV4LCB0aGlzLmRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGZpbHRlcihwcmVkaWNhdGUpIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICB0aGlzLmVhY2goKGl0ZW0sIGluZGV4LCBhcnJheSkgPT4ge1xuICAgICAgaWYgKHByZWRpY2F0ZShpdGVtLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBuZXcgTGlzdChyZXN1bHQpO1xuICB9XG5cbiAgbWFwKGl0ZXJhdGVlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgdGhpcy5lYWNoKChpdGVtLCBpbmRleCwgYXJyYXkpID0+IHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpdGVtLCBpbmRleCwgYXJyYXkpKTtcbiAgICByZXR1cm4gbmV3IExpc3QocmVzdWx0KTtcbiAgfVxuXG4gIHJlZHVjZShpdGVyYXRlZSwgYWNjdW11bGF0b3IpIHtcbiAgICB0aGlzLmVhY2goKGl0ZW0sIGluZGV4LCBhcnJheSkgPT4gYWNjdW11bGF0b3IgPSBpdGVyYXRlZShhY2N1bXVsYXRvciwgaXRlbSwgaW5kZXgsIGFycmF5KSk7XG4gICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICB9XG5cbiAgZmluZEluZGV4KHByZWRpY2F0ZSkge1xuICAgIGxldCBpbmRleCA9IC0xO1xuICAgIGZvciAobGV0IGlkeCA9IDAsIGl0ZW07IChpdGVtID0gdGhpcy5kYXRhW2lkeF0pICE9IG51bGw7ICsraWR4KSB7XG4gICAgICBpZiAocHJlZGljYXRlKGl0ZW0sIGlkeCwgdGhpcy5kYXRhKSkge1xuICAgICAgICBpbmRleCA9IGlkeDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIGZpbmQocHJlZGljYXRlKSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5maW5kSW5kZXgocHJlZGljYXRlKTtcbiAgICByZXR1cm4gaW5kZXggPiAtMSA/IHRoaXMuZGF0YVtpbmRleF0gOiBudWxsO1xuICB9XG5cbiAgY29udGFpbnMocHJlZGljYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMuZmluZChwcmVkaWNhdGUpICE9PSBudWxsO1xuICB9XG5cbiAgcmVtb3ZlSWYocHJlZGljYXRlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgdGhpcy5lYWNoKChpdGVtLCBpbmRleCwgYXJyYXkpID0+IHtcbiAgICAgIGlmICghcHJlZGljYXRlKGl0ZW0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5kYXRhID0gcmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh2YWx1ZSkgPT4gbmV3IExpc3QodmFsdWUpOyIsImNsYXNzIFN0cmluZyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FwaXRhbGl6ZSA9IHZhbHVlID0+IHZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSk7XG4gIH1cblxuICBodG1sRW5jb2RlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoLyYvZywgJyZhbXA7JylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csICcmIzM5OycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbiAgfVxuXG4gIGh0bWxEZWNvZGUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvJmFtcDsvZywgJycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLyZsdDsvZywgJzwnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8mZ3Q7Pi9nLCAnPicpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLyYjMzk7L2csIFwiJ1wiKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8mcXVvdDsvZywgJ1wiJyk7XG4gIH1cblxuICB0b1F1ZXJ5U3RyaW5nKHBhcmFtcywgc2VwLCBlbmNvZGUpIHtcbiAgICBzZXAgICAgPSBzZXAgPT09IHVuZGVmaW5lZCA/ICcmJyA6IHNlcDtcbiAgICBlbmNvZGUgPSBlbmNvZGUgPT09IGZhbHNlID8gZnVuY3Rpb24ocykgeyByZXR1cm4gczsgfSA6IGVuY29kZVVSSUNvbXBvbmVudDtcblxuICAgIGxldCBwYWlycyA9IFtdO1xuICAgIGZvciAobGV0IGtleSBpbiBwYXJhbXMpIHtcbiAgICAgIHBhaXJzLnB1c2goYCR7a2V5fT0ke2VuY29kZShwYXJhbXNba2V5XSl9YCk7XG4gICAgfVxuICAgIHJldHVybiBwYWlycy5qb2luKHNlcCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFN0cmluZygpOyIsImltcG9ydCB7IExpc3QgfSBmcm9tICd+L2NvcmUvbGlzdCc7XG5pbXBvcnQgU3ViamVjdCBmcm9tICd+L3JlYWN0aXZlL3N1YmplY3QnO1xuaW1wb3J0IE1vZGVsIGZyb20gJy4vbW9kZWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYnN0cmFjdFN0b3JlIGV4dGVuZHMgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICAvLyNyZWdpb24gY29uZmlnc1xuICAgIHRoaXMudG90YWxDb3VudCA9IDA7XG4gICAgdGhpcy5wYWdlU2l6ZSA9IDA7XG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XG4gICAgdGhpcy5zdWJqZWN0ID0gU3ViamVjdC5jcmVhdGUoKTtcbiAgICAvLyNlbmRyZWdpb25cblxuICAgIC8vI3JlZ2lvbiBwcm9wZXJ0aWVzXG4gICAgLy8jZW5kcmVnaW9uXG5cbiAgICAvLyNyZWdpb24gbWV0aG9kc1xuICAgIHRoaXMuc3Vic2NyaWJlID0gb2JzZXJ2ZXIgPT4gdGhpcy5zdWJqZWN0LnN1YnNjcmliZShvYnNlcnZlcik7XG4gICAgdGhpcy51bnN1YnNjcmliZSA9IG9ic2VydmVyID0+IHRoaXMuc3ViamVjdC51bnN1YnNjcmliZShvYnNlcnZlcik7XG4gICAgdGhpcy5maXJlRXZlbnQgPSAoKSA9PiB0aGlzLnN1YmplY3QubmV4dCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZVJlY29yZCA9IHJlY29yZCA9PiBuZXcgTW9kZWwocmVjb3JkLCB0aGlzKTtcbiAgICB0aGlzLmdldFJlY29yZHMgPSB0aGlzLmNvbGxlY3Q7XG4gICAgdGhpcy5nZXRNb2RpZmllZFJlY29yZHMgPSAoKSA9PiB0aGlzLmZpbHRlcihyZWNvcmQgPT4gcmVjb3JkLmlzTW9kaWZpZWQoKSk7XG4gICAgdGhpcy5nZXROZXdSZWNvcmRzID0gKCkgPT4gdGhpcy5maWx0ZXIocmVjb3JkID0+IHJlY29yZC5pc05ld2x5Q3JlYXRlZCgpKTtcbiAgICAvLyNlbmRyZWdpb25cbiAgfVxuXG4gIGNsZWFyRGF0YShzaWxlbnQgPSBmYWxzZSkge1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICFzaWxlbnQgJiYgdGhpcy5maXJlRXZlbnQoKTtcbiAgfVxuXG4gIGxvYWREYXRhKGRhdGEpIHtcbiAgICB0aGlzLmNsZWFyRGF0YSh0cnVlKTtcbiAgICB0aGlzLmRhdGEgPSAobmV3IExpc3QoZGF0YSkpLm1hcCh0aGlzLmNyZWF0ZVJlY29yZC5iaW5kKHRoaXMpKS5jb2xsZWN0KCk7XG4gICAgdGhpcy5maXJlRXZlbnQoKTtcbiAgfVxuXG4gIGNvbW1pdENoYW5nZXMoKSB7XG4gICAgdGhpcy5maWx0ZXIocmVjb3JkID0+IHJlY29yZC5pc01vZGlmaWVkKCkgfHwgcmVjb3JkLmlzTmV3bHlDcmVhdGVkKCkpLmVhY2gocmVjb3JkID0+IHJlY29yZC5zYXZlKCkpO1xuICAgIHRoaXMuZmlyZUV2ZW50KCk7XG4gIH1cblxuICByZWplY3RDaGFuZ2VzKCkge1xuICAgIHRoaXMuZmlsdGVyKHJlY29yZCA9PiByZWNvcmQuaXNNb2RpZmllZCgpKS5lYWNoKHJlY29yZCA9PiByZWNvcmQucmVqZWN0KHRydWUpKTtcbiAgICB0aGlzLmRhdGEgPSB0aGlzLmZpbHRlcihyZWNvcmQgPT4gIXJlY29yZC5pc05ld2x5Q3JlYXRlZCgpKS5jb2xsZWN0KCk7XG4gICAgdGhpcy5maXJlRXZlbnQoKTtcbiAgfVxufSIsImltcG9ydCBTdHJpbmcgZnJvbSAnfi9jb3JlL3N0cmluZyc7XG5pbXBvcnQgRXh0IGZyb20gJ34vY29yZS9leHQnO1xuXG5jbGFzcyBBamF4IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgRXh0LmV4dGVuZChBamF4LnByb3RvdHlwZSwge1xuICAgICAgeGhyOiBuZXcgWE1MSHR0cFJlcXVlc3QoKSxcbiAgICAgIGFqYXhCZWZvcmU6ICgpID0+IHsgLyogdG8gYmUgaW1wbGVtZW50ZWQgKi8gfSxcbiAgICAgIGFqYXhFcnJvcjogKGVycm9yKSA9PiB7IC8qIHRvIGJlIGltcGxlbWVudGVkICovIH0sXG4gICAgICBhamF4Q29tcGxldGU6ICgpID0+IHsgLyogdG8gYmUgaW1wbGVtZW50ZWQgKi8gfVxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgcmVxdWVzdCh7IHVybCwgY29udGVudFR5cGUgPSAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsIG1ldGhvZCA9ICdnZXQnLCBwYXJhbXMsIG5leHQsIGVycm9yLCBjb21wbGV0ZSB9KSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCByZXNwb25zZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuYWpheEJlZm9yZSgpO1xuICAgICAgICByZXNwb25zZSA9IGF3YWl0IHRoaXMucHJvbWlzZSh7IHVybCwgY29udGVudFR5cGUsIG1ldGhvZCwgcGFyYW1zIH0pO1xuICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgQ2Fubm90IGdldCByZXNwb25zZSBmcm9tIHNlcnZlciBmb3IgdXJsIFske3VybH1dIGNhdXNlZCBieTogJHtleH1gKTtcbiAgICAgICAgdGhpcy5hamF4RXJyb3IoZXgpO1xuICAgICAgICBlcnJvciAmJiBlcnJvcihleCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV4dCA/IG5leHQocmVzcG9uc2UpIDogcmVzcG9uc2U7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuYWpheENvbXBsZXRlKCk7XG4gICAgICBjb21wbGV0ZSAmJiBjb21wbGV0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByb21pc2Uoc2V0dGluZ3MpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5jcmVhdGVSZXF1ZXN0KHNldHRpbmdzLCAoZXJyLCByZXMpID0+IGVyciA/IHJlamVjdChlcnIpIDogcmVzb2x2ZShyZXMpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZVJlcXVlc3QoeyB1cmwsIGNvbnRlbnRUeXBlLCBtZXRob2QsIHBhcmFtcyB9LCBkb25lKSB7XG4gICAgKG1ldGhvZCA9PT0gJ2dldCcgJiYgcGFyYW1zKSAmJiAodXJsID0gYCR7dXJsfT8ke1N0cmluZy50b1F1ZXJ5U3RyaW5nKHBhcmFtcyl9YCk7XG4gICAgY29uc3QgeGhyID0gdGhpcy54aHI7XG4gICAgeGhyLm9wZW4obWV0aG9kLCB1cmwsIHRydWUpO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCBjb250ZW50VHlwZSk7XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgIGlmKHhoci5yZWFkeVN0YXRlID09PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XG4gICAgICAgIC8vIGFqYXggd2lsbCByZXR1cm4gYXMgYSBqc29uIGJ5IGRlZmF1bHQsIGlmIHBhcnNlciBlcnJvciB0aGVuIGl0IHdpbGwgcmV0dXJuIGEgcmF3IHN0cmluZ1xuICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRvbmUobnVsbCwgSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZG9uZShudWxsLCB4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRvbmUoSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZG9uZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgeGhyLnNlbmQocGFyYW1zID8gSlNPTi5zdHJpbmdpZnkocGFyYW1zKSA6IG51bGwpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBBamF4KCk7IiwiY2xhc3MgQ2FjaGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9jYWNoZSA9IHt9O1xuICB9XG5cbiAgaGFzTG9jYWxTdG9yYWdlKCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gJ2xvY2FsU3RvcmFnZScgaW4gd2luZG93ICYmIHdpbmRvdy5sb2NhbFN0b3JhZ2UgIT09IG51bGw7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGdldChrZXkpIHtcbiAgICBpZiAodGhpcy5oYXNMb2NhbFN0b3JhZ2UoKSkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkgfHwgdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5fY2FjaGVba2V5XSB8fCB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICBpZiAodGhpcy5oYXNMb2NhbFN0b3JhZ2UoKSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jYWNoZVtrZXldID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlKGtleSkge1xuICAgIGlmICgha2V5KSB7XG4gICAgICB0aGlzLl9jYWNoZSA9IHt9O1xuICAgIH0gZWxzZSBpZiAodGhpcy5oYXNMb2NhbFN0b3JhZ2UoKSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHRoaXMuX2NhY2hlW2tleV07XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDYWNoZSgpOyIsImltcG9ydCBFeHQgZnJvbSAnfi9jb3JlL2V4dCc7XG5pbXBvcnQgTGlzdCBmcm9tICd+L2NvcmUvbGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGVsIHtcbiAgY29uc3RydWN0b3IoZGF0YSwgc3RvcmUpIHtcbiAgICAvLyNyZWdpb24gY29uZmlnc1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAvLyNlbmRyZWdpb25cblxuICAgIC8vI3JlZ2lvbiBwcm9wZXJ0aWVzXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLnN0b3JlID0gc3RvcmU7XG4gICAgdGhpcy5pZFByb3BlcnR5ID0gKHN0b3JlICYmIHN0b3JlLmlkUHJvcGVydHkpID8gc3RvcmUuaWRQcm9wZXJ0eSA6ICdpZCc7XG4gICAgY29uc3QgZmllbGRDb25maWcgPSAoc3RvcmUgJiYgc3RvcmUuZmllbGRzKSA/IHN0b3JlLmZpZWxkcyA6IFtdO1xuICAgIHRoaXMuZmllbGRzID0gTGlzdChmaWVsZENvbmZpZykubWFwKGZpZWxkID0+IEV4dC5pc1N0cmluZyhmaWVsZCkgPyAoeyBuYW1lOiBmaWVsZCwgdHlwZTogJ3N0cmluZycgfSkgOiBmaWVsZCk7XG4gICAgLy8jZW5kcmVnaW9uXG5cbiAgICAvLyNyZWdpb24gbWV0aG9kc1xuICAgIHRoaXMuZ2V0RGF0YSA9ICgpID0+IHRoaXMuZGF0YTtcbiAgICB0aGlzLmdldCA9IGZpZWxkTmFtZSA9PiB0aGlzLmRhdGFbZmllbGROYW1lXTtcbiAgICAvLyNlbmRyZWdpb25cblxuICAgIHRoaXMuc2F2ZSgpO1xuICB9XG5cbiAgc2V0KGZpZWxkTmFtZSwgbmV3VmFsdWUsIHNpbGVudCkge1xuICAgIHRoaXMuZGF0YVtmaWVsZE5hbWVdID0gbmV3VmFsdWU7XG4gICAgdGhpcy5tb2RpZmllZCA9ICF0aGlzLmlzRXF1YWwoZmllbGROYW1lKTtcbiAgICAoIXNpbGVudCAmJiB0aGlzLnN0b3JlKSAmJiAodGhpcy5zdG9yZS5maXJlRXZlbnQoKSk7XG4gIH1cblxuICBzYXZlKCkge1xuICAgIHRoaXMucGhhbnRvbSA9IEV4dC5jbG9uZSh0aGlzLmRhdGEpO1xuICAgIHRoaXMubW9kaWZpZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHJlamVjdChzaWxlbnQpIHtcbiAgICB0aGlzLmRhdGEgPSBFeHQuY2xvbmUodGhpcy5waGFudG9tKTtcbiAgICB0aGlzLnNhdmUoKTtcbiAgICAoIXNpbGVudCAmJiB0aGlzLnN0b3JlKSAmJiAodGhpcy5zdG9yZS5maXJlRXZlbnQoKSk7XG4gIH1cblxuICBpc0VxdWFsKGZpZWxkKSB7XG4gICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzLnBoYW50b21bZmllbGQubmFtZV0sXG4gICAgICAgICAgbmV3VmFsdWUgPSB0aGlzLmRhdGFbZmllbGQubmFtZV07XG5cbiAgICByZXR1cm4gZmllbGQuZXF1YWxzID8gZmllbGQuZXF1YWxzKG5ld1ZhbHVlLCBvbGRWYWx1ZSkgOiBuZXdWYWx1ZSA9PT0gb2xkVmFsdWU7XG4gIH1cblxuICBpc01vZGlmaWVkKGZpZWxkTmFtZSkge1xuICAgIHJldHVybiB0aGlzLm1vZGlmaWVkICYmICF0aGlzLnBoYW50b21bdGhpcy5pZFByb3BlcnR5XTsgLy8gc2hvdWxkIG5vdCBkZXRlY3QgbmV3IHJlY29yZCBhcyBhIG1vZGlmaWVkIHJlY29yZFxuICB9XG5cbiAgaXNOZXdseUNyZWF0ZWQoKSB7XG4gICAgcmV0dXJuICF0aGlzLnBoYW50b21bdGhpcy5pZFByb3BlcnR5XTtcbiAgfVxuXG4gIHNldFNlbGVjdGVkKHNlbGVjdGVkLCBzaWxlbnQpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgKCFzaWxlbnQgJiYgdGhpcy5zdG9yZSkgJiYgKHRoaXMuc3RvcmUuZmlyZUV2ZW50KCkpO1xuICB9XG59IiwiaW1wb3J0IEV4dCBmcm9tICd+L2NvcmUvZXh0JztcbmltcG9ydCBBamF4IGZyb20gJy4vYWpheCc7XG5pbXBvcnQgQWJzdHJhY3RTdG9yZSBmcm9tICcuL2Fic3RyYWN0LXN0b3JlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJveHlTdG9yZSBleHRlbmRzIEFic3RyYWN0U3RvcmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLy8jcmVnaW9uIGNvbmZpZ3NcbiAgICB0aGlzLnByb3h5ID0ge1xuICAgICAgcmVhZGVyOiB7fSxcbiAgICAgIHdyaXRlcjoge31cbiAgICB9O1xuICAgIC8vI2VuZHJlZ2lvblxuICB9XG5cbiAgYXN5bmMgbG9hZCh7IGRvbmUsIGZhaWwsIGFsd2F5cyB9KSB7XG4gICAgT2JzZXJ2YWJsZS5hamF4KHRoaXMucHJveHkpLnN1YnNjcmliZSh7XG4gICAgICBuZXh0OiB2YWx1ZSA9PiB7XG4gICAgICAgIGNvbnN0IHsgcm9vdFByb3BlcnR5LCB0b3RhbFByb3BlcnR5IH0gPSB0aGlzLnByb3h5LnJlYWRlcjtcbiAgICAgICAgdGhpcy5sb2FkRGF0YShyb290UHJvcGVydHkgPyByZXNwb25zZVtyb290UHJvcGVydHldIDogcmVzcG9uc2UpO1xuICAgICAgICB0aGlzLnRvdGFsQ291bnQgPSAodGhpcy5wYWdlU2l6ZSAmJiB0b3RhbFByb3BlcnR5KSA/IHJlc3BvbnNlW3RvdGFsUHJvcGVydHldIDogdGhpcy5jb3VudCgpO1xuICAgICAgICBkb25lICYmIGRvbmUodGhpcy5nZXRSZWNvcmRzKCkpO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiBmYWlsLFxuICAgICAgY29tcGxldGU6IGFsd2F5c1xuICAgIH0pO1xuICB9XG5cbiAgbG9hZFBhZ2UocGFnZSkge1xuICAgIHRoaXMuY3VycmVudFBhZ2UgPSBwYWdlO1xuICAgIHRoaXMucHJveHkucGFyYW1zID0gRXh0LmV4dGVuZCh7fSwgdGhpcy5wcm94eS5wYXJhbXMsIHsgcGFnZTogdGhpcy5jdXJyZW50UGFnZSwgc2l6ZTogdGhpcy5wYWdlU2l6ZSB9KTtcbiAgICByZXR1cm4gdGhpcy5sb2FkKHt9KTtcbiAgfVxuXG4gIGFzeW5jIHN5bmMoeyBkb25lLCBmYWlsLCBhbHdheXMgfSkge1xuICAgIHRoaXMucHJveHkubWV0aG9kID0gJ3Bvc3QnO1xuICAgIHRoaXMucHJveHkucGFyYW1zID0gdGhpcy5nZXRNb2RpZmllZFJlY29yZHMoKS5tYXAocmVjb3JkID0+IHJlY29yZC5kYXRhKS5jb2xsZWN0KCk7XG4gICAgdGhpcy5wcm94eS5wcm94eS5wYXJhbXMucHVzaCguLi50aGlzLmdldE5ld1JlY29yZHMoKS5tYXAocmVjb3JkID0+IHJlY29yZC5kYXRhKS5jb2xsZWN0KCkpO1xuICAgIGNvbnN0IHsgdHJhbnNmb3JtIH0gPSBwcm94eS53cml0ZXI7XG4gICAgdHJhbnNmb3JtICYmICh0aGlzLnByb3h5LnBhcmFtcyA9IHRyYW5zZm9ybSh0aGlzLnByb3h5LnBhcmFtcykpO1xuICAgIE9ic2VydmFibGUuYWpheCh0aGlzLnByb3h5KS5zdWJzY3JpYmUoe1xuICAgICAgbmV4dDogZG9uZSxcbiAgICAgIGVycm9yOiBmYWlsLFxuICAgICAgY29tcGxldGU6IGFsd2F5c1xuICAgIH0pO1xuICB9XG59IiwiaW1wb3J0IEV4dCBmcm9tICd+L2NvcmUvZXh0JztcbmltcG9ydCBQcm94eVN0b3JlIGZyb20gJy4vcHJveHktc3RvcmUnO1xuXG5jbGFzcyBTdG9yZSBleHRlbmRzIFByb3h5U3RvcmUge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcigpO1xuICAgIEV4dC5leHRlbmQodGhpcywgY29uZmlnKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25maWcgPT4gbmV3IFN0b3JlKGNvbmZpZyk7IiwiaW1wb3J0IEV4dCBmcm9tICd+L2NvcmUvZXh0JztcblxuY2xhc3MgQWpheE9ic2VydmFibGUge1xuICBjb25zdHJ1Y3Rvcih1cmxPclJlcXVlc3QpIHtcbiAgICB0aGlzLnJlcXVlc3QgPSBFeHQuZXh0ZW5kKHtcbiAgICAgIHVybDogJycsXG4gICAgICBwYXJhbXM6ICcnLFxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04JyxcbiAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgfSwgRXh0LmlzU3RyaW5nKHVybE9yUmVxdWVzdCkgPyB7IHVybDogdXJsT3JSZXF1ZXN0IH0gOiB1cmxPclJlcXVlc3QpO1xuXG4gICAgdGhpcy5wcm9taXNlID0gcmVxdWVzdCA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmNyZWF0ZVJlcXVlc3QocmVxdWVzdCwgKGVycm9yLCByZXNwb25zZSkgPT4gZXJyb3IgPyByZWplY3QoZXJyb3IpIDogcmVzb2x2ZShyZXNwb25zZSkpO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgc3Vic2NyaWJlKHsgbmV4dCwgZXJyb3IsIGNvbXBsZXRlIH0pIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHJlc3BvbnNlO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnByb21pc2UoeyB1cmwsIGNvbnRlbnRUeXBlLCBtZXRob2QsIHBhcmFtcyB9KTtcbiAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYENhbm5vdCBnZXQgcmVzcG9uc2UgZnJvbSBzZXJ2ZXIgZm9yIHVybCBbJHt1cmx9XSBjYXVzZWQgYnk6ICR7ZXh9YCk7XG4gICAgICAgIGVycm9yICYmIGVycm9yKGV4KTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXh0ID8gbmV4dChyZXNwb25zZSkgOiByZXNwb25zZTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgY29tcGxldGUgJiYgY29tcGxldGUoKTtcbiAgICB9XG4gIH1cblxuICBzZW5kKHsgdXJsLCBjb250ZW50VHlwZSwgbWV0aG9kLCBwYXJhbXMgfSwgZG9uZSkge1xuICAgIChtZXRob2QgPT09ICdnZXQnICYmIHBhcmFtcykgJiYgKHVybCA9IGAke3VybH0/JHtTdHJpbmcudG9RdWVyeVN0cmluZyhwYXJhbXMpfWApO1xuICAgIGNvbnN0IHhociA9IEV4dC5YSFI7XG4gICAgeGhyLm9wZW4obWV0aG9kLCB1cmwsIHRydWUpO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCBjb250ZW50VHlwZSk7XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgIGlmKHhoci5yZWFkeVN0YXRlID09PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XG4gICAgICAgIC8vIGFqYXggd2lsbCByZXR1cm4gYXMgYSBqc29uIGJ5IGRlZmF1bHQsIGlmIHBhcnNlciBlcnJvciB0aGVuIGl0IHdpbGwgcmV0dXJuIGEgcmF3IHN0cmluZ1xuICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRvbmUobnVsbCwgSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZG9uZShudWxsLCB4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRvbmUoSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZG9uZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgeGhyLnNlbmQocGFyYW1zID8gSlNPTi5zdHJpbmdpZnkocGFyYW1zKSA6IG51bGwpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZSh1cmxPclJlcXVlc3QpIHtcbiAgICByZXR1cm4gbmV3IEFqYXhPYnNlcnZhYmxlKHVybE9yUmVxdWVzdCk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudE9ic2VydmFibGUge1xuICBjb25zdHJ1Y3Rvcih0YXJnZXQsIGV2ZW50TmFtZSwgb3B0aW9ucykge1xuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgIHRoaXMuZXZlbnROYW1lID0gZXZlbnROYW1lO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKHRoaXMuZXZlbnROYW1lLCBvYnNlcnZlciwgdGhpcy5vcHRpb25zKTtcbiAgfVxuXG4gIHVuc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50TmFtZSwgb2JzZXJ2ZXIsIHRoaXMub3B0aW9ucyk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlKHRhcmdldCwgZXZlbnROYW1lLCBvcHRpb25zID0gZmFsc2UpIHtcbiAgICByZXR1cm4gbmV3IEV2ZW50T2JzZXJ2YWJsZSh0YXJnZXQsIGV2ZW50TmFtZSwgb3B0aW9ucyk7XG4gIH1cbn0iLCJpbXBvcnQgT3BlcmF0b3IgZnJvbSAnLi9vcGVyYXRvcic7XG5pbXBvcnQgRXZlbnRPYnNlcnZhYmxlIGZyb20gJy4vZXZlbnQnO1xuaW1wb3J0IEFqYXhPYnNlcnZhYmxlIGZyb20gJy4vYWpheCc7XG5cbi8qKlxuICogRnJvbSBSZWFjdGl2ZVggZG9jczpcbiAqXG4gKiBPYnNlcnZhYmxlOiBBbiBpbnRlcmZhY2UgdGhhdCBsaXN0ZW5zIGZvciBpbmNvbWluZyBub3RpZmljYXRpb25zIG92ZXIgYSBwZXJpb2Qgb2YgdGltZVxuICogYW5kIHB1c2hlcyB0aGVtIHRvIGFub3RoZXIgaW50ZXJmYWNlIHRoYXQgcmVhY3RzIHRvIHRoZW0uXG4gKlxuICogU3Vic2NyaXB0aW9uOiBXaGVuIGFuIE9ic2VydmFibGUgaW50ZXJmYWNlIHN0YXJ0cyBkb2luZyBpdHMgd29yayxcbiAqIGkuZS4gbGlzdGVuaW5nIGZvciBub3RpZmljYXRpb25zIGFuZCBwdXNoaW5nIHRoZW0gb3V0LlxuICpcbiAqIE9ic2VydmVyOiBBbiBpbnRlcmZhY2UgdGhhdCByZWFjdHMgdG8gZGF0YSBwdXNoZWQgZnJvbSBhbiBPYnNlcnZhYmxlLlxuICpcbiAqIE9wZXJhdG9yczogRnVuY3Rpb25zIHVzZWQgdG8gbWFuaXB1bGF0ZSBhbiBPYnNlcnZhYmxl4oCZcyBvdXRwdXQsIGUuZy4gZmlsdGVyLCBtYXAsIHJlZHVjZSwgZXRjLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYnNlcnZhYmxlIGV4dGVuZHMgT3BlcmF0b3Ige1xuICBjb25zdHJ1Y3RvcihzdWJzY3JpYmUpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3Vic2NyaWJlID0gc3Vic2NyaWJlO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZShzdWJzY3JpYmUpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoc3Vic2NyaWJlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3IgZXhhbXBsZTpcbiAgICogY29uc3QgdW5zdWJjcmliZSA9IE9ic2VydmFibGUuZnJvbUV2ZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dCcpLCAnY2hhbmdlJykuc3Vic2NyaWJlKHtcbiAgICogICAgbmV4dDogZSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSlcbiAgICogfSk7XG4gICAqXG4gICAqIHNldFRpbWVvdXQodW5zdWJjcmliZSwgNTAwMCk7XG4gICAqXG4gICAqIEBwYXJhbSB0YXJnZXRcbiAgICogQHBhcmFtIGV2ZW50TmFtZVxuICAgKi9cbiAgc3RhdGljIGZyb21FdmVudCh0YXJnZXQsIGV2ZW50TmFtZSkge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShvYnNlcnZlciA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGUgPT4gb2JzZXJ2ZXIubmV4dChlKTtcbiAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGZhbHNlKTtcbiAgICAgIHJldHVybiAoKSA9PiB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrLCBmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgYWpheCh1cmxPclJlcXVlc3QpIHtcbiAgICByZXR1cm4gQWpheE9ic2VydmFibGUuY3JlYXRlKHVybE9yUmVxdWVzdCk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBPcGVyYXRvciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZmlsdGVyID0gcHJlZGljYXRlID0+IHsgLyogdG8gYmUgaW1wbGVtZW50ZWQgKi8gfTtcbiAgICB0aGlzLm1hcCA9IHByZWRpY2F0ZSA9PiB7IC8qIHRvIGJlIGltcGxlbWVudGVkICovIH07XG4gICAgdGhpcy5yZWR1Y2UgPSBwcmVkaWNhdGUgPT4geyAvKiB0byBiZSBpbXBsZW1lbnRlZCAqLyB9O1xuICB9XG59IiwiaW1wb3J0IExpc3QgZnJvbSAnfi9jb3JlL2xpc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJqZWN0IGV4dGVuZHMgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlKCkge1xuICAgIHJldHVybiBuZXcgU3ViamVjdCgpO1xuICB9XG5cbiAgc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgdGhpcy5hZGQob2JzZXJ2ZXIpO1xuICB9XG5cbiAgdW5zdWJzY3JpYmUoKSB7XG4gICAgdGhpcy5kYXRhID0gdGhpcy5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBvYnNlcnZlcikuY29sbGVjdCgpO1xuICB9XG5cbiAgbmV4dCguLi5hcmdzKSB7XG4gICAgdGhpcy5lYWNoKG9ic2VydmVyID0+IG9ic2VydmVyLmFwcGx5KHRoaXMsIGFyZ3MpKTtcbiAgfVxufSIsImltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBFeHQgfSBmcm9tICcuL2NvcmUvZXh0JztcblxuY2xhc3MgUmV4dCBleHRlbmRzIEV4dCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5DYWNoZSA9IHJlcXVpcmUoJy4vZGF0YS9jYWNoZScpO1xuICAgIHRoaXMuTW9kZWwgPSByZXF1aXJlKCcuL2RhdGEvbW9kZWwnKTtcbiAgICB0aGlzLk9ic2VydmFibGUgPSByZXF1aXJlKCcuL3JlYWN0aXZlL29ic2VydmFibGUnKTtcbiAgICB0aGlzLkRpYWxvZ01hbmFnZXIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvZGlhbG9nJyk7XG4gIH1cblxuICBhc3luYyBsYXVuY2godmlld3BvcnQpIHtcbiAgICBpZiAoIXdpbmRvdy5sb2NhdGlvbi5oYXNoKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcvJztcbiAgICB9XG5cbiAgICBjb25zdCByb290ID0gdGhpcy5jcmVhdGVFbGVtZW50KCc8ZGl2IGlkPVwicmVhY3Qtcm9vdFwiPjwvZGl2PicpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocm9vdCk7XG4gICAgdGhpcy5pc0Z1bmN0aW9uKHZpZXdwb3J0KSAmJiAodmlld3BvcnQgPSBhd2FpdCB2aWV3cG9ydCgpKTtcbiAgICByZW5kZXIodmlld3BvcnQsIHJvb3QpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBSZXh0KCk7XG5cbi8vI3JlZ2lvbiBDb21wb25lbnRcbmV4cG9ydCB7IEhhc2hSb3V0ZXIsIExpbmsgfSBmcm9tICcuL2NvbXBvbmVudHMvcm91dGVyJztcbmV4cG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4vY29tcG9uZW50cy9jb250YWluZXInO1xuZXhwb3J0IHsgQnV0dG9uLCBCdXR0b25MaW5rLCBGaWVsZCwgVGV4dEZpZWxkLCBDaGVja2JveCwgVGV4dEFyZWEgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybSc7XG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIEdyaWQgfSBmcm9tICcuL2NvbXBvbmVudHMvZ3JpZCc7XG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIExpc3RWaWV3IH0gZnJvbSAnLi9jb21wb25lbnRzL2xpc3QnO1xuLy8gZXhwb3J0IHsgRGlhbG9nIH0gZnJvbSAnLi9jb21wb25lbnRzL2RpYWxvZyc7XG4vLyNlbmRyZWdpb25cblxuLy8jcmVnaW9uIERlY29yYXRvciAob3IgSGlnaGVyIE9yZGVyIEZ1bmN0aW9uIG9yIEhpZ2hlciBPcmRlciBDb21wb25lbnQpXG5leHBvcnQgeyBiaW5kLCBkZWJvdW5jZSB9IGZyb20gJy4vY29yZS9leHQnO1xuZXhwb3J0IHsgUm91dGUgfSBmcm9tICcuL2NvbXBvbmVudHMvcm91dGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAvY29tcG9uZW50JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VydmljZSB9IGZyb20gJy4vYXBwL3NlcnZpY2UnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTdG9yZSB9IGZyb20gJy4vZGF0YS9zdG9yZSc7XG4vLyNlbmRyZWdpb24iXX0=
