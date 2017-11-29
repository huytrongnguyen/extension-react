(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rext = require('../../../src/rext');

var _rext2 = _interopRequireDefault(_rext);

var _viewport = require('./components/viewport/viewport');

var _viewport2 = _interopRequireDefault(_viewport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import './components/getting-started/getting-started';
// import RextComponent from './components/core-concepts/component';
// import DataPackage from './components/core-concepts/data-package';
// import ScreenNavigation from './components/core-concepts/screen-navigation';
// import Architecture from './components/architecture/architecture';
// import GridComponent from './components/ui-components/grid';

_rext2.default.application({
  views: [require('./components/getting-started/getting-started'), require('./components/core-concepts/component'), require('./components/example/dashboard/dashboard')],
  launch: function launch() {
    return _react2.default.createElement(_viewport2.default, null);
  }
});

},{"../../../src/rext":18,"./components/core-concepts/component":2,"./components/example/dashboard/dashboard":3,"./components/getting-started/getting-started":4,"./components/viewport/viewport":5,"babel-polyfill":"babel-polyfill","react":"react"}],2:[function(require,module,exports){
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

var RextComponent = (_dec = (0, _rext.Route)('/core-concepts/component'), _dec(_class = function (_PureComponent) {
  _inherits(RextComponent, _PureComponent);

  function RextComponent() {
    _classCallCheck(this, RextComponent);

    return _possibleConstructorReturn(this, (RextComponent.__proto__ || Object.getPrototypeOf(RextComponent)).apply(this, arguments));
  }

  _createClass(RextComponent, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _rext.Container,
        { className: 'main container scrollable' },
        _react2.default.createElement(
          'h1',
          { className: 'mb-md' },
          'Component'
        ),
        _react2.default.createElement(
          'p',
          { className: 'mb-md' },
          'A component in Extension React is the combination of a React Component and a component class that controls a portion of the screen. Here is an example of a component that display a simple string:'
        ),
        _react2.default.createElement(
          'pre',
          { className: 'mb-md' },
          '// ./components/dashboard/dashboard.view.jsx\nimport React, { PureComponent } from \'react\';\n\nexport default class DashboardView extends PureComponent {\n  render() {\n    return <h1>{this.props.$view.title}</h1>;\n  }\n}\n\n// ./components/dashboard/dashboard.js\nimport { Component } from \'ext-react\';\nimport DashboardView from \'./dashboard.view\';\n\n@Component({\n  view: DashboardView\n})\nexport default class Dashboard {\n  constructor(props) {\n    this.title = \'Dashboard\';\n  }\n}'
        ),
        _react2.default.createElement(
          'p',
          { className: 'mb-md' },
          'Every component begins with an ',
          _react2.default.createElement(
            'code',
            null,
            '@Component'
          ),
          ' decorator function that takes a ',
          _react2.default.createElement(
            'em',
            null,
            'metadata'
          ),
          ' object. The metadata object describes how the React Component and component class work together. That\'s mean you can access any property or method of component class via ',
          _react2.default.createElement(
            'code',
            null,
            'this.props.$view'
          ),
          '.'
        ),
        _react2.default.createElement(
          'p',
          { className: 'mb-md' },
          'Actually, with the above example, it can be implemented like this:'
        ),
        _react2.default.createElement(
          'pre',
          { className: 'mb-md' },
          '// ./components/dashboard/dashboard.js\nimport { Component } from \'ext-react\';\n\n@Component({\n  view: ({ $view }) => <h1>{$view.title}</h1>\n})\nexport default class Dashboard {\n  constructor(props) {\n    this.title = \'Dashboard\';\n  }\n}'
        ),
        _react2.default.createElement(
          'p',
          { className: 'mb-md' },
          'Extension React provide a new way to work with state:'
        ),
        _react2.default.createElement(
          'pre',
          { className: 'mb-md' },
          '// ./components/search/search.view.jsx\nimport React, { Component } from \'react\';\nimport Rext from \'extension-react\';\n\nexport default class SearchView extends Component {\n  constructor(props) {\n    super(props);\n    Rext.initialState(this, {\n      name: props.name\n    });\n  }\n\n  componentWillReceiveProps(nextProps) {\n    this.setName(nextProps.name);\n  }\n  ...\n}'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Instead of using ',
          _react2.default.createElement(
            'code',
            null,
            'this.setState((prevState, props) => ({ name: props.name }))'
          ),
          ' to update the state, you can use ',
          _react2.default.createElement(
            'code',
            null,
            'this.setName(props.name)'
          ),
          ' to make it easier to understand and more natural by using ',
          _react2.default.createElement(
            'code',
            null,
            'Rext.initialState'
          ),
          ' function to declare the state in constructor.'
        )
      );
    }
  }]);

  return RextComponent;
}(_react.PureComponent)) || _class);
exports.default = RextComponent;

},{"../../../../../src/rext":18,"react":"react"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _dec2, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rext = require('../../../../../../src/rext');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dashboard = (_dec = (0, _rext.Route)('/example/dashboard'), _dec2 = (0, _rext.Component)({
  view: function view(_ref) {
    var $view = _ref.$view;
    return _react2.default.createElement(
      'h1',
      null,
      $view.title
    );
  }
}), _dec(_class = _dec2(_class = function Dashboard() {
  _classCallCheck(this, Dashboard);

  this.title = 'Dashboard';
}) || _class) || _class);
exports.default = Dashboard;

},{"../../../../../../src/rext":18,"react":"react"}],4:[function(require,module,exports){
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
        { className: 'main container scrollable' },
        _react2.default.createElement(
          'h1',
          { className: 'mb-md' },
          'Getting Started'
        ),
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
          ' to install following dependencies:'
        ),
        _react2.default.createElement(
          'ul',
          { className: 'mb-md' },
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
              'react'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'code',
              null,
              'rxjs'
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
        ),
        _react2.default.createElement(
          'h3',
          { className: 'mb-md' },
          '2. Create a new project'
        ),
        _react2.default.createElement(
          'p',
          { className: 'mb-md' },
          'The following is the recommended directory structure for an Extension React application:'
        ),
        _react2.default.createElement(
          'pre',
          { className: 'mb-md' },
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
        _react2.default.createElement(
          'p',
          { className: 'mb-md' },
          'Let\u2019s start evaluating the application by looking at ',
          _react2.default.createElement(
            'code',
            null,
            'index.html'
          )
        ),
        _react2.default.createElement(
          'pre',
          { className: 'mb-md' },
          '<!-- index.html -->\n<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8" />\n<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n<title>Extension React Application</title>\n<link href="/node-modules/ext-react/css/rext.min.css" rel="stylesheet" />\n</head>\n<body>\n<script src="app.js"></script>\n</body>\n</html>'
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
          null,
          '// app.js\nimport \'babel-polyfill\';\nimport React from \'react\';\nimport Rext from \'ext-react\';\nimport Viewport from \'./components/viewport/viewport\';\n\nRext.application({\n  launch: () => <Viewport />\n});'
        )
      );
    }
  }]);

  return GettingStarted;
}(_react.PureComponent)) || _class);
exports.default = GettingStarted;

},{"../../../../../src/rext":18,"react":"react"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Viewport;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rext = require('../../../../../src/rext');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Viewport() {
  return _react2.default.createElement(
    _rext.Container,
    null,
    _react2.default.createElement(
      'header',
      { className: 'container' },
      _react2.default.createElement(
        'h1',
        null,
        'Extension React'
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
          { className: 'navbar nav' },
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
            ),
            _react2.default.createElement(
              'ul',
              null,
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
              )
            )
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
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(_rext.Link, { to: '/ui-components/grids', text: 'Grids' })
              )
            )
          )
        )
      ),
      _react2.default.createElement(
        _rext.Container,
        null,
        _react2.default.createElement(_rext.HashRouter, null)
      )
    ),
    _react2.default.createElement(
      'footer',
      { className: 'container' },
      _react2.default.createElement(
        'p',
        null,
        '\xA9 2017 huytrongnguyen'
      )
    )
  );
  // return <Container layout="column">
  //   <Container className="nav" style={{width:300}}>
  //     <header>
  //       <h1 className="brand">Extension React</h1>
  //       <div className="navbar">
  //         <ul className="navbar-nav mr-auto">
  //         </ul>
  //       </div>
  //     </header>
  //     <nav className="mb-auto d-flex">

  //     </nav>
  //     <footer>
  //       <div className="nav-text">&copy; 2017 huytrongnguyen</div>
  //     </footer>
  //   </Container>
  //   <Container>
  //     <HashRouter />
  //   </Container>
  // </Container>
}

},{"../../../../../src/rext":18,"react":"react"}],6:[function(require,module,exports){
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

},{"../core/dictionary":9,"../core/ext":11,"../core/list":12,"../reactive/observable":16,"react":"react"}],7:[function(require,module,exports){
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

},{"../core/ext":11,"react":"react"}],8:[function(require,module,exports){
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

var _rxjs = require('rxjs');

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

var _list = require('../core/list');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// import Observable from '~/reactive/observable';

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

      !window.location.hash && (window.location.hash = '/');
      _rxjs.Observable.fromEvent(window, 'hashchange').subscribe(function () {
        return _this2.setState(matchPath());
      });
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

},{"../core/ext":11,"../core/list":12,"react":"react","rxjs":"rxjs"}],9:[function(require,module,exports){
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

},{"./list":12}],10:[function(require,module,exports){
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

},{"./list":12}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ext = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

    // this.SCROLL_WIDTH = this.getScrollWidth();
    // this.BORDER_WIDTH = 2;
    // this.CHECK_COLUMN_WIDTH = 33;
    // this.UNKNOWN_ERROR_MSG = 'An unknown error has occurred.';
    // this.XHR = new XMLHttpRequest();

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

    // this.clone = obj => JSON.parse(JSON.stringify(obj)); // deep clone

    // this.DOM = DOM;
    // this.String = String;
    // this.List = List;
    // this.Map = Dictionary;
    // this.Provider = new Dictionary();
  }

  // extend() {
  //   return Object.assign.apply(null, arguments); // immutable object
  // }

  _createClass(Ext, [{
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

    // getEl(selector) {
    //   return DOM(selector);
    // }

    // getScrollWidth() {
    //   const outer = this.createElement('<div style="visibility: hidden; width: 100px; overflow: scroll;"></div>');
    //   document.body.appendChild(outer);
    //   const widthNoScroll = outer.offsetWidth;

    //   // add innerdiv
    //   const inner = this.createElement('<div style="width: 100%;"></div>');
    //   outer.appendChild(inner);
    //   const widthWithScroll = inner.offsetWidth;

    //   // remove divs
    //   outer.parentNode.removeChild(outer);

    //   return widthNoScroll - widthWithScroll;
    // }
    //#endregion

  }]);

  return Ext;
}();

exports.default = new Ext();

// export function bind(target, name, descriptor) {
//   const fn = descriptor.value;

//   if (typeof fn !== 'function') {
//     throw new Error(`@bind decorator is only applied to functions not: ${typeof fn}`);
//   }

//   return {
//     configurable: true,
//     get() {
//       return fn.bind(this);
//     }
//   };
// }

// export function debounce(func, wait = 500) {
//   let timeout;
//   return function() {
//     const context = this,
//           args = arguments,
//           later = function() {
//             func.apply(context, args);
//           }

//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//   }
// }

},{"./dictionary":9,"./dom":10,"./list":12,"./string":13}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
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

},{"../core/ext":11}],15:[function(require,module,exports){
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

},{}],16:[function(require,module,exports){
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

},{"./ajax":14,"./event":15,"./operator":17}],17:[function(require,module,exports){
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

},{}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = exports.Route = exports.bind = exports.Container = exports.Link = exports.HashRouter = undefined;

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

var _ext = require('./core/ext');

Object.defineProperty(exports, 'bind', {
  enumerable: true,
  get: function get() {
    return _ext.bind;
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

    return _possibleConstructorReturn(this, (Rext.__proto__ || Object.getPrototypeOf(Rext)).call(this));
    // this.Cache = require('./data/cache');
    // this.Model = require('./data/model');
    // this.Observable = require('./reactive/observable');
    // this.DialogManager = require('./components/dialog');
  }

  _createClass(Rext, [{
    key: 'application',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
        var launch = _ref.launch;
        var root, viewport;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!launch) {
                  _context.next = 7;
                  break;
                }

                root = this.createElement('<div id="react-root"></div>');
                _context.next = 4;
                return launch();

              case 4:
                viewport = _context.sent;

                document.body.appendChild(root);
                (0, _reactDom.render)(viewport, root);

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function application(_x) {
        return _ref2.apply(this, arguments);
      }

      return application;
    }()
  }]);

  return Rext;
}(_ext.Ext);

exports.default = new Rext();

//#region Component

},{"./app/component":6,"./components/container":7,"./components/router":8,"./core/ext":11,"babel-polyfill":"babel-polyfill","react":"react","react-dom":"react-dom"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkb2NzL3NyYy9qcy9hcHAuanMiLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2NvcmUtY29uY2VwdHMvY29tcG9uZW50LmpzeCIsImRvY3Mvc3JjL2pzL2NvbXBvbmVudHMvZXhhbXBsZS9kYXNoYm9hcmQvZGFzaGJvYXJkLmpzIiwiZG9jcy9zcmMvanMvY29tcG9uZW50cy9nZXR0aW5nLXN0YXJ0ZWQvZ2V0dGluZy1zdGFydGVkLmpzeCIsImRvY3Mvc3JjL2pzL2NvbXBvbmVudHMvdmlld3BvcnQvdmlld3BvcnQuanN4Iiwic3JjL2FwcC9jb21wb25lbnQuanMiLCJzcmMvY29tcG9uZW50cy9jb250YWluZXIuanN4Iiwic3JjL2NvbXBvbmVudHMvcm91dGVyLmpzeCIsInNyYy9jb3JlL2RpY3Rpb25hcnkuanMiLCJzcmMvY29yZS9kb20uanMiLCJzcmMvY29yZS9leHQuanMiLCJzcmMvY29yZS9saXN0LmpzIiwic3JjL2NvcmUvc3RyaW5nLmpzIiwic3JjL3JlYWN0aXZlL2FqYXguanMiLCJzcmMvcmVhY3RpdmUvZXZlbnQuanMiLCJzcmMvcmVhY3RpdmUvb2JzZXJ2YWJsZS5qcyIsInNyYy9yZWFjdGl2ZS9vcGVyYXRvci5qcyIsInNyYy9yZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFLLFdBQUwsQ0FBaUI7QUFDZixTQUFPLENBQ0wsUUFBUSw4Q0FBUixDQURLLEVBRUwsUUFBUSxzQ0FBUixDQUZLLEVBR0wsUUFBUSwwQ0FBUixDQUhLLENBRFE7QUFNZixVQUFRO0FBQUEsV0FBTSx1REFBTjtBQUFBO0FBTk8sQ0FBakI7Ozs7Ozs7Ozs7Ozs7O0FDWEE7Ozs7QUFDQTs7Ozs7Ozs7OztJQUdxQixhLFdBRHBCLGlCQUFNLDBCQUFOLEM7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LEdBQWMscUJBQWEsQ0FBRSx1QkFBeUIsQ0FBdEQ7QUFDRCxDOztrQkFMa0IsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJDMkJaLFU7Ozs7OzttQkFBWSxJOzs7Ozs7Ozs7c0JBQ1osUzs7OztBQXpCVDs7Ozs7Z0JBaUNTLEk7Ozs7OzttQkFDQSxLOzs7Ozs7Ozs7OENBQ0EsTzs7OztBQXRDVDs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFHTSxJOzs7QUFDSixrQkFBYztBQUFBOztBQUFBO0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDRDs7Ozs7O1lBRW1CLE0sUUFBQSxNOzs7Ozs7cUJBQ2QsTTs7Ozs7QUFDSSxvQixHQUFPLEtBQUssYUFBTCxDQUFtQiw2QkFBbkIsQzs7dUJBQ1UsUTs7O0FBQWpCLHdCOztBQUNOLHlCQUFTLElBQVQsQ0FBYyxXQUFkLENBQTBCLElBQTFCO0FBQ0Esc0NBQU8sUUFBUCxFQUFpQixJQUFqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQUtTLElBQUksSUFBSixFOztBQUVmIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZXh0IGZyb20gJ34vcmV4dCc7XG5pbXBvcnQgVmlld3BvcnQgZnJvbSAnLi9jb21wb25lbnRzL3ZpZXdwb3J0L3ZpZXdwb3J0Jztcbi8vIGltcG9ydCAnLi9jb21wb25lbnRzL2dldHRpbmctc3RhcnRlZC9nZXR0aW5nLXN0YXJ0ZWQnO1xuLy8gaW1wb3J0IFJleHRDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL2NvcmUtY29uY2VwdHMvY29tcG9uZW50Jztcbi8vIGltcG9ydCBEYXRhUGFja2FnZSBmcm9tICcuL2NvbXBvbmVudHMvY29yZS1jb25jZXB0cy9kYXRhLXBhY2thZ2UnO1xuLy8gaW1wb3J0IFNjcmVlbk5hdmlnYXRpb24gZnJvbSAnLi9jb21wb25lbnRzL2NvcmUtY29uY2VwdHMvc2NyZWVuLW5hdmlnYXRpb24nO1xuLy8gaW1wb3J0IEFyY2hpdGVjdHVyZSBmcm9tICcuL2NvbXBvbmVudHMvYXJjaGl0ZWN0dXJlL2FyY2hpdGVjdHVyZSc7XG4vLyBpbXBvcnQgR3JpZENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvdWktY29tcG9uZW50cy9ncmlkJztcblxuUmV4dC5hcHBsaWNhdGlvbih7XG4gIHZpZXdzOiBbXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2dldHRpbmctc3RhcnRlZC9nZXR0aW5nLXN0YXJ0ZWQnKSxcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvY29yZS1jb25jZXB0cy9jb21wb25lbnQnKSxcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvZXhhbXBsZS9kYXNoYm9hcmQvZGFzaGJvYXJkJyksXG4gIF0sXG4gIGxhdW5jaDogKCkgPT4gPFZpZXdwb3J0IC8+XG59KTsiLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBDb250YWluZXIsIFN0cmluZyB9IGZyb20gJ34vcmV4dCc7XG5cbkBSb3V0ZSgnL2NvcmUtY29uY2VwdHMvY29tcG9uZW50JylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJleHRDb21wb25lbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Q29udGFpbmVyIGNsYXNzTmFtZT1cIm1haW4gY29udGFpbmVyIHNjcm9sbGFibGVcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi1tZFwiPkNvbXBvbmVudDwvaDE+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlxuICAgICAgICBBIGNvbXBvbmVudCBpbiBFeHRlbnNpb24gUmVhY3QgaXMgdGhlIGNvbWJpbmF0aW9uIG9mIGEgUmVhY3QgQ29tcG9uZW50IGFuZCBhIGNvbXBvbmVudCBjbGFzcyB0aGF0IGNvbnRyb2xzIGEgcG9ydGlvbiBvZiB0aGUgc2NyZWVuLlxuICAgICAgICBIZXJlIGlzIGFuIGV4YW1wbGUgb2YgYSBjb21wb25lbnQgdGhhdCBkaXNwbGF5IGEgc2ltcGxlIHN0cmluZzpcbiAgICAgIDwvcD5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntgLy8gLi9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQudmlldy5qc3hcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmRWaWV3IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGgxPnt0aGlzLnByb3BzLiR2aWV3LnRpdGxlfTwvaDE+O1xuICB9XG59XG5cbi8vIC4vY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmpzXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdleHQtcmVhY3QnO1xuaW1wb3J0IERhc2hib2FyZFZpZXcgZnJvbSAnLi9kYXNoYm9hcmQudmlldyc7XG5cbkBDb21wb25lbnQoe1xuICB2aWV3OiBEYXNoYm9hcmRWaWV3XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFzaGJvYXJkIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICB0aGlzLnRpdGxlID0gJ0Rhc2hib2FyZCc7XG4gIH1cbn1gfVxuICAgICAgPC9wcmU+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlxuICAgICAgICBFdmVyeSBjb21wb25lbnQgYmVnaW5zIHdpdGggYW4gPGNvZGU+QENvbXBvbmVudDwvY29kZT4gZGVjb3JhdG9yIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSA8ZW0+bWV0YWRhdGE8L2VtPiBvYmplY3QuXG4gICAgICAgIFRoZSBtZXRhZGF0YSBvYmplY3QgZGVzY3JpYmVzIGhvdyB0aGUgUmVhY3QgQ29tcG9uZW50IGFuZCBjb21wb25lbnQgY2xhc3Mgd29yayB0b2dldGhlci5cbiAgICAgICAgVGhhdCdzIG1lYW4geW91IGNhbiBhY2Nlc3MgYW55IHByb3BlcnR5IG9yIG1ldGhvZCBvZiBjb21wb25lbnQgY2xhc3MgdmlhIDxjb2RlPnRoaXMucHJvcHMuJHZpZXc8L2NvZGU+LlxuICAgICAgPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5cbiAgICAgICAgQWN0dWFsbHksIHdpdGggdGhlIGFib3ZlIGV4YW1wbGUsIGl0IGNhbiBiZSBpbXBsZW1lbnRlZCBsaWtlIHRoaXM6XG4gICAgICA8L3A+XG4gICAgICA8cHJlIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG57YC8vIC4vY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmpzXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdleHQtcmVhY3QnO1xuXG5AQ29tcG9uZW50KHtcbiAgdmlldzogKHsgJHZpZXcgfSkgPT4gPGgxPnskdmlldy50aXRsZX08L2gxPlxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhc2hib2FyZCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy50aXRsZSA9ICdEYXNoYm9hcmQnO1xuICB9XG59YH1cbiAgICAgIDwvcHJlPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5FeHRlbnNpb24gUmVhY3QgcHJvdmlkZSBhIG5ldyB3YXkgdG8gd29yayB3aXRoIHN0YXRlOjwvcD5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntgLy8gLi9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2gudmlldy5qc3hcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmV4dCBmcm9tICdleHRlbnNpb24tcmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hWaWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgUmV4dC5pbml0aWFsU3RhdGUodGhpcywge1xuICAgICAgbmFtZTogcHJvcHMubmFtZVxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB0aGlzLnNldE5hbWUobmV4dFByb3BzLm5hbWUpO1xuICB9XG4gIC4uLlxufWB9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwPlxuICAgICAgICBJbnN0ZWFkIG9mIHVzaW5nIDxjb2RlPntgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlLCBwcm9wcykgPT4gKHsgbmFtZTogcHJvcHMubmFtZSB9KSlgfTwvY29kZT4gdG8gdXBkYXRlIHRoZSBzdGF0ZSxcbiAgICAgICAgeW91IGNhbiB1c2UgPGNvZGU+dGhpcy5zZXROYW1lKHByb3BzLm5hbWUpPC9jb2RlPiB0byBtYWtlIGl0IGVhc2llciB0byB1bmRlcnN0YW5kIGFuZCBtb3JlIG5hdHVyYWwgYnkgdXNpbmcgPGNvZGU+UmV4dC5pbml0aWFsU3RhdGU8L2NvZGU+IGZ1bmN0aW9uIHRvIGRlY2xhcmUgdGhlIHN0YXRlIGluIGNvbnN0cnVjdG9yLlxuICAgICAgPC9wPlxuICAgIDwvQ29udGFpbmVyPlxuICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBDb21wb25lbnQgfSBmcm9tICd+L3JleHQnO1xuXG5AUm91dGUoJy9leGFtcGxlL2Rhc2hib2FyZCcpXG5AQ29tcG9uZW50KHtcbiAgdmlldzogKHsgJHZpZXcgfSkgPT4gPGgxPnskdmlldy50aXRsZX08L2gxPlxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhc2hib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGl0bGUgPSAnRGFzaGJvYXJkJztcbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIENvbnRhaW5lciB9IGZyb20gJ34vcmV4dCc7XG5cbkBSb3V0ZSgnLycpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZXR0aW5nU3RhcnRlZCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxDb250YWluZXIgY2xhc3NOYW1lPVwibWFpbiBjb250YWluZXIgc2Nyb2xsYWJsZVwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLW1kXCI+R2V0dGluZyBTdGFydGVkPC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG4gICAgICAgIEV4dGVuc2lvbiBSZWFjdCBpcyBhIGxpYnJhcnkgdGhhdCBidWlsZCBvbiB0b3Agb2YgUmVhY3QsIGhlbHBpbmcgeW91IGJ1aWxkIGRhdGEtaW50ZW5zaXZlLCBjcm9zcy1wbGF0Zm9ybSB3ZWIgYXBwcyBmb3IgZGVza3RvcHMsIHRhYmxldHMsIGFuZCBzbWFydHBob25lcy5cbiAgICAgIDwvcD5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJtYi1tZFwiPlF1aWNrIFN0YXJ0PC9oMj5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi1tZFwiPjEuIFNldHVwIGEgZGV2ZWxvcG1lbnQgZW52aXJvbWVudDwvaDM+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlVzZSA8Y29kZT5ucG08L2NvZGU+IG9yIDxjb2RlPnlhcm48L2NvZGU+IHRvIGluc3RhbGwgZm9sbG93aW5nIGRlcGVuZGVuY2llczo8L3A+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWItbWRcIj5cbiAgICAgICAgPGxpPjxjb2RlPmJhYmVsLXBvbHlmaWxsPC9jb2RlPjwvbGk+XG4gICAgICAgIDxsaT48Y29kZT5iYWJlbC1wcmVzZXQtZW52PC9jb2RlPjwvbGk+XG4gICAgICAgIDxsaT48Y29kZT5iYWJlbC1wcmVzZXQtcmVhY3Q8L2NvZGU+PC9saT5cbiAgICAgICAgPGxpPjxjb2RlPmQzPC9jb2RlPjwvbGk+XG4gICAgICAgIDxsaT48Y29kZT5yZWFjdDwvY29kZT48L2xpPlxuICAgICAgICA8bGk+PGNvZGU+cnhqczwvY29kZT48L2xpPlxuICAgICAgICA8bGk+PGNvZGU+ZXh0LXJlYWN0PC9jb2RlPjwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLW1kXCI+Mi4gQ3JlYXRlIGEgbmV3IHByb2plY3Q8L2gzPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5UaGUgZm9sbG93aW5nIGlzIHRoZSByZWNvbW1lbmRlZCBkaXJlY3Rvcnkgc3RydWN0dXJlIGZvciBhbiBFeHRlbnNpb24gUmVhY3QgYXBwbGljYXRpb246PC9wPlxuICAgICAgPHByZSBjbGFzc05hbWU9XCJtYi1tZFwiPlxuICAgICAgICArLS0gbm9kZV9tb2R1bGVzOiBOUE0gY29tcG9uZW50czxiciAvPlxuICAgICAgICArLS0gZGlzdDxiciAvPlxuICAgICAgICB8ICAgKy0tIGFwcC5taW4uY3NzPGJyIC8+XG4gICAgICAgIHwgICArLS0gYXBwLm1pbi5qczxiciAvPlxuICAgICAgICB8ICAgKy0tIGZyYW1ld29yay5taW4uanM8YnIgLz5cbiAgICAgICAgKy0tIHNyYzxiciAvPlxuICAgICAgICB8ICAgKy0tIGNzczxiciAvPlxuICAgICAgICB8ICAgfCAgICstLSBfdmFyaWFibGVzLnNjc3M6IGFwcGxpY2F0aW9uIHN0eWxlcyBjb25zdGFudCB2YWx1ZXM8YnIgLz5cbiAgICAgICAgfCAgIHwgICArLS0gYXBwLnNjc3M6IGFwcGxpY2F0aW9uIHN0eWxlczxiciAvPlxuICAgICAgICB8ICAgKy0tIGpzPGJyIC8+XG4gICAgICAgIHwgICB8ICAgKy0tIGNvbW1vbjogY29kZSBvZiBzaGFyZWQgZnVuY3Rpb25zIG9yIHNoYXJlZCBjb21wb25lbnRzPGJyIC8+XG4gICAgICAgIHwgICB8ICAgKy0tIGNvbXBvbmVudHM6IGNvZGUgKHNjcmlwdHMgYW5kIHZpZXdzKSBvZiBldmVyeSBmZWF0dXJlIHNob3VsZCBiZSBhIHN1Yi1kaXJlY3Rvcnk8YnIgLz5cbiAgICAgICAgfCAgIHwgICArLS0gc2VydmljZXM6IGNvZGUgb2Ygc2VydmljZXM8YnIgLz5cbiAgICAgICAgfCAgIHwgICArLS0gc3RvcmVzOiBjb2RlIG9mIHN0b3JlczxiciAvPlxuICAgICAgICB8ICAgfCAgICstLSBhcHAuanM6IG1haW4gc2NyaXB0PGJyIC8+XG4gICAgICAgICstLSBndWxwZmlsZS5iYWJlbC5qczogYnVpbGQgc2NyaXB0cyAob3Igd2VicGFjay5jb25maWcuanMgaWYgeW91IHByZWZlcik8YnIgLz5cbiAgICAgICAgKy0tIGluZGV4Lmh0bWw8YnIgLz5cbiAgICAgICAgKy0tIHBhY2thZ2UuanNvbjogTlBNIHBhY2thZ2UgZGVmaW5pdGlvbjxiciAvPlxuICAgICAgICArLS0gc2VydmVyLmpzOiBjb2RlIG9mIGxvY2FsIHdlYiBzZXJ2ZXIgKEV4cHJlc3NKUyk8YnIgLz5cbiAgICAgIDwvcHJlPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5MZXTigJlzIHN0YXJ0IGV2YWx1YXRpbmcgdGhlIGFwcGxpY2F0aW9uIGJ5IGxvb2tpbmcgYXQgPGNvZGU+aW5kZXguaHRtbDwvY29kZT48L3A+XG4gICAgICA8cHJlIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG57YDwhLS0gaW5kZXguaHRtbCAtLT5cbjwhRE9DVFlQRSBodG1sPlxuPGh0bWw+XG48aGVhZD5cbjxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8+XG48bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG48dGl0bGU+RXh0ZW5zaW9uIFJlYWN0IEFwcGxpY2F0aW9uPC90aXRsZT5cbjxsaW5rIGhyZWY9XCIvbm9kZS1tb2R1bGVzL2V4dC1yZWFjdC9jc3MvcmV4dC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG48L2hlYWQ+XG48Ym9keT5cbjxzY3JpcHQgc3JjPVwiYXBwLmpzXCI+PC9zY3JpcHQ+XG48L2JvZHk+XG48L2h0bWw+YH1cbiAgICAgIDwvcHJlPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5UbyBsYXVuY2ggeW91ciBhcHAsIGFkZCB0aGUgZm9sbG93aW5nIHRvIHlvdXIgPGNvZGU+YXBwLmpzPC9jb2RlPiBmaWxlPC9wPlxuICAgICAgPHByZT5cbntgLy8gYXBwLmpzXG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmV4dCBmcm9tICdleHQtcmVhY3QnO1xuaW1wb3J0IFZpZXdwb3J0IGZyb20gJy4vY29tcG9uZW50cy92aWV3cG9ydC92aWV3cG9ydCc7XG5cblJleHQuYXBwbGljYXRpb24oe1xuICBsYXVuY2g6ICgpID0+IDxWaWV3cG9ydCAvPlxufSk7YH1cbiAgICAgIDwvcHJlPlxuICAgIDwvQ29udGFpbmVyPlxuICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgSGFzaFJvdXRlciwgTGluayB9IGZyb20gJ34vcmV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZXdwb3J0KCkge1xuICByZXR1cm4gPENvbnRhaW5lcj5cbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPjxoMT5FeHRlbnNpb24gUmVhY3Q8L2gxPjwvaGVhZGVyPlxuICAgIDxDb250YWluZXIgbGF5b3V0PVwiY29sdW1uXCI+XG4gICAgICA8YXNpZGUgc3R5bGU9e3t3aWR0aDozMDB9fT5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhciBuYXZcIj5cbiAgICAgICAgICA8bGk+PExpbmsgdG89XCIvXCIgdGV4dD1cIkdFVFRJTkcgU1RBUlRFRFwiIC8+PC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtdGV4dFwiPkNPUkUgQ09OQ0VQVFM8L3NwYW4+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT48TGluayB0bz1cIi9jb3JlLWNvbmNlcHRzL2NvbXBvbmVudFwiIHRleHQ9XCJDb21wb25lbnRcIiAvPjwvbGk+XG4gICAgICAgICAgICAgIDxsaT48TGluayB0bz1cIi9jb3JlLWNvbmNlcHRzL2RhdGEtcGFja2FnZVwiIHRleHQ9XCJEYXRhIFBhY2thZ2VcIiAvPjwvbGk+XG4gICAgICAgICAgICAgIDxsaT48TGluayB0bz1cIi9jb3JlLWNvbmNlcHRzL3NjcmVlbi1uYXZpZ2F0aW9uXCIgdGV4dD1cIlNjcmVlbiBOYXZpZ2F0aW9uXCIgLz48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT48TGluayB0bz1cIi9hcmNoaXRlY3R1cmVcIiB0ZXh0PVwiQVJDSElURUNUVVJFXCIgLz48L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi10ZXh0XCI+VUkgQ09NUE9ORU5UUzwvc3Bhbj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL3VpLWNvbXBvbmVudHMvZ3JpZHNcIiB0ZXh0PVwiR3JpZHNcIiAvPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2FzaWRlPlxuICAgICAgPENvbnRhaW5lcj48SGFzaFJvdXRlciAvPjwvQ29udGFpbmVyPlxuICAgIDwvQ29udGFpbmVyPlxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+PHA+JmNvcHk7IDIwMTcgaHV5dHJvbmduZ3V5ZW48L3A+PC9mb290ZXI+XG4gIDwvQ29udGFpbmVyPlxuICAvLyByZXR1cm4gPENvbnRhaW5lciBsYXlvdXQ9XCJjb2x1bW5cIj5cbiAgLy8gICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cIm5hdlwiIHN0eWxlPXt7d2lkdGg6MzAwfX0+XG4gIC8vICAgICA8aGVhZGVyPlxuICAvLyAgICAgICA8aDEgY2xhc3NOYW1lPVwiYnJhbmRcIj5FeHRlbnNpb24gUmVhY3Q8L2gxPlxuICAvLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAvLyAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1yLWF1dG9cIj5cbiAgLy8gICAgICAgICA8L3VsPlxuICAvLyAgICAgICA8L2Rpdj5cbiAgLy8gICAgIDwvaGVhZGVyPlxuICAvLyAgICAgPG5hdiBjbGFzc05hbWU9XCJtYi1hdXRvIGQtZmxleFwiPlxuICAgICAgICBcbiAgLy8gICAgIDwvbmF2PlxuICAvLyAgICAgPGZvb3Rlcj5cbiAgLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtdGV4dFwiPiZjb3B5OyAyMDE3IGh1eXRyb25nbmd1eWVuPC9kaXY+XG4gIC8vICAgICA8L2Zvb3Rlcj5cbiAgLy8gICA8L0NvbnRhaW5lcj5cbiAgLy8gICA8Q29udGFpbmVyPlxuICAvLyAgICAgPEhhc2hSb3V0ZXIgLz5cbiAgLy8gICA8L0NvbnRhaW5lcj5cbiAgLy8gPC9Db250YWluZXI+XG59IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRXh0IGZyb20gJ34vY29yZS9leHQnO1xuaW1wb3J0IExpc3QgZnJvbSAnfi9jb3JlL2xpc3QnO1xuaW1wb3J0IERpY3Rpb25hcnkgZnJvbSAnfi9jb3JlL2RpY3Rpb25hcnknO1xuaW1wb3J0IE9ic2VydmFibGUgZnJvbSAnfi9yZWFjdGl2ZS9vYnNlcnZhYmxlJztcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnID0+IENvbnRyb2xsZXIgPT4ge1xuICBjb25zdCBXcmFwcGVkQ29tcG9uZW50ID0gY29uZmlnLnZpZXc7XG4gIHJldHVybiBjbGFzcyBIb2NDb21wb25lbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgRXh0LmluaXRpYWxTdGF0ZSh0aGlzLCB7XG4gICAgICAgIHN0b3Jlczoge30sXG4gICAgICAgIHNlcnZpY2VzOiB7fSxcbiAgICAgICAgW2NvbmZpZy5jb21wb25lbnRBcyB8fCAnJHZpZXcnXTogbmV3IENvbnRyb2xsZXIocHJvcHMpXG4gICAgICB9KTtcbiAgICAgIHRoaXMub25EYXRhQ2hhbmdlZCA9ICgpID0+IHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICB0aGlzLnNldFN0b3JlcyhMaXN0KGNvbmZpZy5zdG9yZXMpLnJlZHVjZSgoc3RvcmVzLCBzdG9yZSkgPT4ge1xuICAgICAgICBzdG9yZS5zdWJzY3JpYmUodGhpcy5vbkRhdGFDaGFuZ2UpO1xuICAgICAgICBzdG9yZXNbc3RvcmUuc3RvcmVJZF0gPSBzdG9yZTtcbiAgICAgICAgcmV0dXJuIHN0b3JlcztcbiAgICAgIH0sIHt9KSk7XG5cbiAgICAgIHRoaXMuc2V0U2VydmljZXMoTGlzdChjb25maWcuc2VydmljZXMpLnJlZHVjZSgoc2VydmljZXMsIHNlcnZpY2UpID0+IHtcbiAgICAgICAgc2VydmljZXNbc2VydmljZS5zZXJ2aWNlSWRdID0gc2VydmljZTtcbiAgICAgICAgcmV0dXJuIHNlcnZpY2VzO1xuICAgICAgfSwge30pKTtcbiAgICB9XG5cbiAgICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGNvbnN0IHsgc3RvcmVzIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgZm9yIChsZXQgc3RvcmVJZCBpbiBzdG9yZXMpIHtcbiAgICAgICAgY29uc3Qgc3RvcmUgPSBzdG9yZXNbc3RvcmVJZF07XG4gICAgICAgIHN0b3JlLmF1dG9Mb2FkICYmIChhd2FpdCBzdG9yZS5sb2FkKCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgRGljdGlvbmFyeSh0aGlzLnN0YXRlLnN0b3JlcykuZWFjaCgoc3RvcmVJZCwgc3RvcmUpID0+IHtcbiAgICAgICAgc3RvcmUudW5zdWJzY3JpYmUodGhpcy5vbkRhdGFDaGFuZ2VkKTtcbiAgICAgICAgc3RvcmUuY2xlYXJEYXRhKHRydWUpO1xuICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gPFdyYXBwZWRDb21wb25lbnQgey4uLnRoaXMuc3RhdGV9IHsuLi50aGlzLnByb3BzfSAvPjtcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEV4dCBmcm9tICd+L2NvcmUvZXh0JztcblxuY29uc3QgTEFZT1VUX0NMQVNTID0ge1xuICAnY29sdW1uJzogJ2ZsZXgtcm93JyxcbiAgJ3Jvdyc6ICdmbGV4LWNvbHVtbicsXG4gICdmaXQnOiAnJyxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENvbnRhaW5lcih7IGNsYXNzTmFtZSA9ICcnLCBsYXlvdXQgPSAncm93JywgY2hpbGRyZW4sIC4uLm90aGVycyB9KSB7XG4gIHJldHVybiA8c2VjdGlvbiBjbGFzc05hbWU9e0V4dC5jbGFzc05hbWUoJ2QtZmxleCcsIExBWU9VVF9DTEFTU1tsYXlvdXRdLCBjbGFzc05hbWUpfSB7Li4ub3RoZXJzfT57Y2hpbGRyZW59PC9zZWN0aW9uPlxufSIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IEV4dCBmcm9tICd+L2NvcmUvZXh0JztcbmltcG9ydCBMaXN0IGZyb20gJ34vY29yZS9saXN0Jztcbi8vIGltcG9ydCBPYnNlcnZhYmxlIGZyb20gJ34vcmVhY3RpdmUvb2JzZXJ2YWJsZSc7XG5cbmNvbnN0IFJPVVRFUyA9IHt9LFxuICAgICAgZ2V0Um91dGUgPSAoKSA9PiB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSkgfHwgJy8nLFxuICAgICAgZ2V0Um91dGVQYXRoID0gcm91dGUgPT4gcm91dGUuc3BsaXQoJy8nKTtcblxuZXhwb3J0IGZ1bmN0aW9uIFJvdXRlKHJvdXRlKSB7XG4gIHJldHVybiBjb21wID0+IHtcbiAgICBST1VURVNbcm91dGVdID0ge1xuICAgICAgcm91dGUsXG4gICAgICBjb21wLFxuICAgICAgcGF0aDogZ2V0Um91dGVQYXRoKHJvdXRlKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gTGluayh7IHRvLCBjbGFzc05hbWUgPSAnJywgYWN0aXZlQ2xhc3NOYW1lID0gJ2FjdGl2ZScsIHRleHQsIGNoaWxkcmVuLCAuLi5vdGhlcnMgfSkge1xuICByZXR1cm4gPGEgaHJlZj17YCMke3RvfWB9IGNsYXNzTmFtZT17RXh0LmNsYXNzTmFtZSgnbmF2LWxpbmsnLCBjbGFzc05hbWUsIHsgW2FjdGl2ZUNsYXNzTmFtZV06IHRvID09PSBnZXRSb3V0ZSgpIH0pfSB7Li4ub3RoZXJzfT5cbiAgICB7dGV4dCB8fCBjaGlsZHJlbn1cbiAgPC9hPlxufVxuXG5leHBvcnQgY2xhc3MgSGFzaFJvdXRlciBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBFeHQuaW5pdGlhbFN0YXRlKHRoaXMsIG1hdGNoUGF0aCgpKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICghd2luZG93LmxvY2F0aW9uLmhhc2gpICYmICh3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcvJyk7XG4gICAgT2JzZXJ2YWJsZS5mcm9tRXZlbnQod2luZG93LCAnaGFzaGNoYW5nZScpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnNldFN0YXRlKG1hdGNoUGF0aCgpKSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZSwgY29tcCwgcGFyYW1zIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKCFjb21wKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdDb21wb25lbnQgbm90IGZvdW5kIScpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29tcCwgeyByb3V0ZSwgcGFyYW1zIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hdGNoUGF0aCgpIHtcbiAgY29uc3QgcGFyYW1zID0ge30sXG4gICAgICAgIGN1cnJlbnRSb3V0ZSA9IGdldFJvdXRlKCk7XG5cbiAgLy8gYmFzaWMgcm91dGUgKHdpdGhvdXQgcGFyYW1zKVxuICBpZiAoUk9VVEVTW2N1cnJlbnRSb3V0ZV0pIHtcbiAgICByZXR1cm4geyByb3V0ZTogY3VycmVudFJvdXRlLCBjb21wOiBST1VURVNbY3VycmVudFJvdXRlXS5jb21wLCBwYXJhbXMgfTtcbiAgfVxuXG4gIC8vIGFkdmFuY2VkIHJvdXRlICh3aXRoIHBhcmFtcylcbiAgY29uc3QgY3VycmVudFBhdGggPSBnZXRSb3V0ZVBhdGgoY3VycmVudFJvdXRlKTtcbiAgZm9yKGxldCByb3V0ZSBpbiBST1VURVMpIHtcbiAgICBjb25zdCBtYXBSb3V0ZSA9IFJPVVRFU1tyb3V0ZV0sXG4gICAgICAgICAgcm91dGVQYXRoID0gbWFwUm91dGUucGF0aDtcblxuICAgIGxldCBtYXRjaGVkID0gdHJ1ZTtcbiAgICBMaXN0KG1hcFJvdXRlLnBhdGgpLmVhY2goKHJvdXRlTmFtZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChyb3V0ZU5hbWUgIT09IGN1cnJlbnRQYXRoW2luZGV4XSkge1xuICAgICAgICBpZiAocm91dGVOYW1lLnN0YXJ0c1dpdGgoJzonKSkgeyAvLyBkZXRlY3QgcGFyYW0gdmFsdWVcbiAgICAgICAgICBwYXJhbXNbcm91dGVOYW1lLnN1YnN0cmluZygxKV0gPSBjdXJyZW50UGF0aFtpbmRleF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWF0Y2hlZCA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKG1hdGNoZWQpIHtcbiAgICAgIHJldHVybiB7IHJvdXRlOiBjdXJyZW50Um91dGUsIGNvbXA6IG1hcFJvdXRlLmNvbXAsIHBhcmFtcyB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIHdpdGggbm90IGZvdW5kIHNjcmVlblxuICBpZiAoUk9VVEVTWycqJ10pIHtcbiAgICByZXR1cm4geyByb3V0ZTogY3VycmVudFJvdXRlLCBjb21wOiBST1VURVNbJyonXS5jb21wLCBwYXJhbXMgfTtcbiAgfVxuXG4gIC8vIHdpdGhvdXQgbm90IGZvdW5kIHNjcmVlblxuICByZXR1cm4geyByb3V0ZTogY3VycmVudFJvdXRlLCBjb21wOiBudWxsLCBwYXJhbXMgfTtcbn0iLCJpbXBvcnQgTGlzdCBmcm9tICcuL2xpc3QnO1xuXG5leHBvcnQgY2xhc3MgRGljdGlvbmFyeSB7XG4gIGNvbnN0cnVjdG9yKGtleVZhbHVlcykge1xuICAgIHRoaXMuZGF0YSA9IHt9O1xuICAgIGlmIChrZXlWYWx1ZXMgJiYga2V5VmFsdWVzLmxlbmd0aCkge1xuICAgICAgdGhpcy5kYXRhID0gT2JqZWN0LmFzc2lnbih7fSwga2V5VmFsdWVzKTtcbiAgICB9XG5cbiAgICB0aGlzLmtleXMgPSAoKSA9PiBMaXN0KE9iamVjdC5rZXlzKHRoaXMuZGF0YSkpO1xuICAgIHRoaXMudmFsdWVzID0gKCkgPT4gTGlzdChPYmplY3QudmFsdWVzKHRoaXMuZGF0YSkpO1xuICB9XG5cbiAgZWFjaChpdGVyYXRlZSkge1xuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmRhdGEpIHtcbiAgICAgIGl0ZXJhdGVlKHRoaXMuZGF0YVtrZXldLCBrZXksIHRoaXMuZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChrZXlWYWx1ZXMpID0+IG5ldyBEaWN0aW9uYXJ5KGtleVZhbHVlcyk7IiwiaW1wb3J0IHsgTGlzdCB9IGZyb20gJy4vbGlzdCc7XG5cbmNsYXNzIERPTSBleHRlbmRzIExpc3Qge1xuICBzaG93KCkge1xuICAgIHRoaXMuc2VsZWN0b3JzLmVhY2goc2VsZWN0b3IgPT4gc2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jaycpO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLnNlbGVjdG9ycy5lYWNoKHNlbGVjdG9yID0+IHNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScpO1xuICB9XG5cbiAgLy8gcGFyZW50KCkge1xuICAvLyAgIHRoaXMuY29tcCA9IHRoaXMuY29tcC5wYXJlbnRFbGVtZW50O1xuICAvLyAgIHJldHVybiB0aGlzO1xuICAvLyB9XG5cbiAgLy8gd2lkdGgoKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMuY29tcC5jbGllbnRXaWR0aDtcbiAgLy8gfVxuXG4gIC8vIGhlaWdodCgpIHtcbiAgLy8gICByZXR1cm4gdGhpcy5jb21wLmNsaWVudEhlaWdodDtcbiAgLy8gfVxuXG4gIC8vIGZpbmQoc2VsZWN0b3IpIHtcbiAgLy8gICByZXR1cm4gdGhpcy5jb21wLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAvLyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChzZWxlY3RvcikgPT4gbmV3IERPTShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7IiwiaW1wb3J0IERPTSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgU3RyaW5nIGZyb20gJy4vc3RyaW5nJztcbmltcG9ydCBMaXN0IGZyb20gJy4vbGlzdCc7XG5pbXBvcnQgRGljdGlvbmFyeSBmcm9tICcuL2RpY3Rpb25hcnknO1xuXG5leHBvcnQgY2xhc3MgRXh0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gdGhpcy5TQ1JPTExfV0lEVEggPSB0aGlzLmdldFNjcm9sbFdpZHRoKCk7XG4gICAgLy8gdGhpcy5CT1JERVJfV0lEVEggPSAyO1xuICAgIC8vIHRoaXMuQ0hFQ0tfQ09MVU1OX1dJRFRIID0gMzM7XG4gICAgLy8gdGhpcy5VTktOT1dOX0VSUk9SX01TRyA9ICdBbiB1bmtub3duIGVycm9yIGhhcyBvY2N1cnJlZC4nO1xuICAgIC8vIHRoaXMuWEhSID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICB0aGlzLmlzUHJpbWl0aXZlID0gdmFsdWUgPT4geyBjb25zdCB0eXBlID0gdHlwZW9mIHZhbHVlOyByZXR1cm4gdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZSA9PT0gJ251bWJlcicgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nOyB9XG4gICAgdGhpcy5pc1N0cmluZyA9IHZhbHVlID0+ICh0eXBlb2YgdmFsdWUpID09PSAnc3RyaW5nJztcbiAgICB0aGlzLmlzRnVuY3Rpb24gPSB2YWx1ZSA9PiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICB0aGlzLmlzT2JqZWN0ID0gdmFsdWUgPT4gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xuICAgIHRoaXMuaXNBcnJheSA9IHZhbHVlID0+IHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nO1xuXG4gICAgLy8gdGhpcy5jbG9uZSA9IG9iaiA9PiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpOyAvLyBkZWVwIGNsb25lXG5cbiAgICAvLyB0aGlzLkRPTSA9IERPTTtcbiAgICAvLyB0aGlzLlN0cmluZyA9IFN0cmluZztcbiAgICAvLyB0aGlzLkxpc3QgPSBMaXN0O1xuICAgIC8vIHRoaXMuTWFwID0gRGljdGlvbmFyeTtcbiAgICAvLyB0aGlzLlByb3ZpZGVyID0gbmV3IERpY3Rpb25hcnkoKTtcbiAgfVxuXG4gIC8vIGV4dGVuZCgpIHtcbiAgLy8gICByZXR1cm4gT2JqZWN0LmFzc2lnbi5hcHBseShudWxsLCBhcmd1bWVudHMpOyAvLyBpbW11dGFibGUgb2JqZWN0XG4gIC8vIH1cblxuICBpbml0aWFsU3RhdGUoY29tcCwgc3RhdGUpIHtcbiAgICBpZiAoIWNvbXAgfHwgIXN0YXRlKSB7IHJldHVybjsgfVxuICAgIGNvbXAuc3RhdGUgPSBzdGF0ZTtcbiAgICBmb3IgKGxldCBmaWVsZCBvZiBPYmplY3Qua2V5cyhzdGF0ZSkpIHtcbiAgICAgIGNvbXBbYHNldCR7U3RyaW5nLmNhcGl0YWxpemUoZmllbGQpfWBdID0gdmFsdWUgPT4gY29tcC5zZXRTdGF0ZSh7IFtmaWVsZF06IHZhbHVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNsYXNzTmFtZSguLi5leHByZXNzaW9ucykge1xuICAgIGNvbnN0IGNscyA9IFtdO1xuXG4gICAgTGlzdChleHByZXNzaW9ucykuZWFjaChleHAgPT4ge1xuICAgICAgaWYgKCFleHApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGV4cCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY2xzLnB1c2goZXhwKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc09iamVjdChleHApKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBleHApIHtcbiAgICAgICAgICBpZiAoZXhwW2tleV0gPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNscy5wdXNoKGtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGNscy5qb2luKCcgJyk7XG4gIH1cblxuICAvLyNyZWdpb24gRE9NXG4gIGNyZWF0ZUVsZW1lbnQoaHRtbCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5pbm5lckhUTUwgPSBodG1sO1xuICAgIHJldHVybiBkaXYuY2hpbGRyZW5bMF07XG4gIH1cblxuICAvLyBnZXRFbChzZWxlY3Rvcikge1xuICAvLyAgIHJldHVybiBET00oc2VsZWN0b3IpO1xuICAvLyB9XG5cbiAgLy8gZ2V0U2Nyb2xsV2lkdGgoKSB7XG4gIC8vICAgY29uc3Qgb3V0ZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJzxkaXYgc3R5bGU9XCJ2aXNpYmlsaXR5OiBoaWRkZW47IHdpZHRoOiAxMDBweDsgb3ZlcmZsb3c6IHNjcm9sbDtcIj48L2Rpdj4nKTtcbiAgLy8gICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG91dGVyKTtcbiAgLy8gICBjb25zdCB3aWR0aE5vU2Nyb2xsID0gb3V0ZXIub2Zmc2V0V2lkdGg7XG5cbiAgLy8gICAvLyBhZGQgaW5uZXJkaXZcbiAgLy8gICBjb25zdCBpbm5lciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnPGRpdiBzdHlsZT1cIndpZHRoOiAxMDAlO1wiPjwvZGl2PicpO1xuICAvLyAgIG91dGVyLmFwcGVuZENoaWxkKGlubmVyKTtcbiAgLy8gICBjb25zdCB3aWR0aFdpdGhTY3JvbGwgPSBpbm5lci5vZmZzZXRXaWR0aDtcblxuICAvLyAgIC8vIHJlbW92ZSBkaXZzXG4gIC8vICAgb3V0ZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvdXRlcik7XG5cbiAgLy8gICByZXR1cm4gd2lkdGhOb1Njcm9sbCAtIHdpZHRoV2l0aFNjcm9sbDtcbiAgLy8gfVxuICAvLyNlbmRyZWdpb25cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEV4dCgpO1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gYmluZCh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpIHtcbi8vICAgY29uc3QgZm4gPSBkZXNjcmlwdG9yLnZhbHVlO1xuXG4vLyAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbi8vICAgICB0aHJvdyBuZXcgRXJyb3IoYEBiaW5kIGRlY29yYXRvciBpcyBvbmx5IGFwcGxpZWQgdG8gZnVuY3Rpb25zIG5vdDogJHt0eXBlb2YgZm59YCk7XG4vLyAgIH1cblxuLy8gICByZXR1cm4ge1xuLy8gICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbi8vICAgICBnZXQoKSB7XG4vLyAgICAgICByZXR1cm4gZm4uYmluZCh0aGlzKTtcbi8vICAgICB9XG4vLyAgIH07XG4vLyB9XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0ID0gNTAwKSB7XG4vLyAgIGxldCB0aW1lb3V0O1xuLy8gICByZXR1cm4gZnVuY3Rpb24oKSB7XG4vLyAgICAgY29uc3QgY29udGV4dCA9IHRoaXMsXG4vLyAgICAgICAgICAgYXJncyA9IGFyZ3VtZW50cyxcbi8vICAgICAgICAgICBsYXRlciA9IGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbi8vICAgICAgICAgICB9XG5cbi8vICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4vLyAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuLy8gICB9XG4vLyB9IiwiZXhwb3J0IGNsYXNzIExpc3Qge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZGF0YSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMuY29sbGVjdCA9ICgpID0+IHRoaXMuZGF0YTtcbiAgICB0aGlzLmNvdW50ID0gKCkgPT4gdGhpcy5kYXRhLmxlbmd0aDtcbiAgICB0aGlzLmdldEF0ID0gaW5kZXggPT4gdGhpcy5kYXRhW2luZGV4XTtcbiAgICB0aGlzLmFkZCA9IGl0ZW0gPT4gdGhpcy5kYXRhLnB1c2goaXRlbSk7XG4gICAgdGhpcy5pbnNlcnQgPSAoaXRlbSwgaW5kZXggPSAwKSA9PiB0aGlzLmRhdGEuc3BsaWNlKGluZGV4LCAwLCBpdGVtKTtcbiAgICB0aGlzLnJlbW92ZUF0ID0gKGluZGV4LCBjb3VudCA9IDEpID0+IHRoaXMuZGF0YS5zcGxpY2UoaW5kZXgsIGNvdW50KTtcbiAgICB0aGlzLmpvaW4gPSBzZXBhcmF0b3IgPT4gdGhpcy5kYXRhLmpvaW4oc2VwYXJhdG9yKTtcbiAgfVxuXG4gIGVhY2goaXRlcmF0ZWUpIHtcbiAgICBmb3IgKGxldCBpbmRleCBpbiB0aGlzLmRhdGEpIHtcbiAgICAgIGl0ZXJhdGVlKHRoaXMuZGF0YVtpbmRleF0sIGluZGV4LCB0aGlzLmRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGZpbHRlcihwcmVkaWNhdGUpIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICB0aGlzLmVhY2goKGl0ZW0sIGluZGV4LCBhcnJheSkgPT4ge1xuICAgICAgaWYgKHByZWRpY2F0ZShpdGVtLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBuZXcgTGlzdChyZXN1bHQpO1xuICB9XG5cbiAgbWFwKGl0ZXJhdGVlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgdGhpcy5lYWNoKChpdGVtLCBpbmRleCwgYXJyYXkpID0+IHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpdGVtLCBpbmRleCwgYXJyYXkpKTtcbiAgICByZXR1cm4gbmV3IExpc3QocmVzdWx0KTtcbiAgfVxuXG4gIHJlZHVjZShpdGVyYXRlZSwgYWNjdW11bGF0b3IpIHtcbiAgICB0aGlzLmVhY2goKGl0ZW0sIGluZGV4LCBhcnJheSkgPT4gYWNjdW11bGF0b3IgPSBpdGVyYXRlZShhY2N1bXVsYXRvciwgaXRlbSwgaW5kZXgsIGFycmF5KSk7XG4gICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICB9XG5cbiAgZmluZEluZGV4KHByZWRpY2F0ZSkge1xuICAgIGxldCBpbmRleCA9IC0xO1xuICAgIGZvciAobGV0IGlkeCA9IDAsIGl0ZW07IChpdGVtID0gdGhpcy5kYXRhW2lkeF0pICE9IG51bGw7ICsraWR4KSB7XG4gICAgICBpZiAocHJlZGljYXRlKGl0ZW0sIGlkeCwgdGhpcy5kYXRhKSkge1xuICAgICAgICBpbmRleCA9IGlkeDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIGZpbmQocHJlZGljYXRlKSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5maW5kSW5kZXgocHJlZGljYXRlKTtcbiAgICByZXR1cm4gaW5kZXggPiAtMSA/IHRoaXMuZGF0YVtpbmRleF0gOiBudWxsO1xuICB9XG5cbiAgY29udGFpbnMocHJlZGljYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMuZmluZChwcmVkaWNhdGUpICE9PSBudWxsO1xuICB9XG5cbiAgcmVtb3ZlSWYocHJlZGljYXRlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgdGhpcy5lYWNoKChpdGVtLCBpbmRleCwgYXJyYXkpID0+IHtcbiAgICAgIGlmICghcHJlZGljYXRlKGl0ZW0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5kYXRhID0gcmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh2YWx1ZSkgPT4gbmV3IExpc3QodmFsdWUpOyIsImNsYXNzIFN0cmluZyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FwaXRhbGl6ZSA9IHZhbHVlID0+IHZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSk7XG4gIH1cblxuICBodG1sRW5jb2RlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoLyYvZywgJyZhbXA7JylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csICcmIzM5OycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbiAgfVxuXG4gIGh0bWxEZWNvZGUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvJmFtcDsvZywgJycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLyZsdDsvZywgJzwnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8mZ3Q7Pi9nLCAnPicpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLyYjMzk7L2csIFwiJ1wiKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8mcXVvdDsvZywgJ1wiJyk7XG4gIH1cblxuICB0b1F1ZXJ5U3RyaW5nKHBhcmFtcywgc2VwLCBlbmNvZGUpIHtcbiAgICBzZXAgICAgPSBzZXAgPT09IHVuZGVmaW5lZCA/ICcmJyA6IHNlcDtcbiAgICBlbmNvZGUgPSBlbmNvZGUgPT09IGZhbHNlID8gZnVuY3Rpb24ocykgeyByZXR1cm4gczsgfSA6IGVuY29kZVVSSUNvbXBvbmVudDtcblxuICAgIGxldCBwYWlycyA9IFtdO1xuICAgIGZvciAobGV0IGtleSBpbiBwYXJhbXMpIHtcbiAgICAgIHBhaXJzLnB1c2goYCR7a2V5fT0ke2VuY29kZShwYXJhbXNba2V5XSl9YCk7XG4gICAgfVxuICAgIHJldHVybiBwYWlycy5qb2luKHNlcCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFN0cmluZygpOyIsImltcG9ydCBFeHQgZnJvbSAnfi9jb3JlL2V4dCc7XG5cbmNsYXNzIEFqYXhPYnNlcnZhYmxlIHtcbiAgY29uc3RydWN0b3IodXJsT3JSZXF1ZXN0KSB7XG4gICAgdGhpcy5yZXF1ZXN0ID0gRXh0LmV4dGVuZCh7XG4gICAgICB1cmw6ICcnLFxuICAgICAgcGFyYW1zOiAnJyxcbiAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsXG4gICAgICBtZXRob2Q6ICdnZXQnLFxuICAgIH0sIEV4dC5pc1N0cmluZyh1cmxPclJlcXVlc3QpID8geyB1cmw6IHVybE9yUmVxdWVzdCB9IDogdXJsT3JSZXF1ZXN0KTtcblxuICAgIHRoaXMucHJvbWlzZSA9IHJlcXVlc3QgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5jcmVhdGVSZXF1ZXN0KHJlcXVlc3QsIChlcnJvciwgcmVzcG9uc2UpID0+IGVycm9yID8gcmVqZWN0KGVycm9yKSA6IHJlc29sdmUocmVzcG9uc2UpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIHN1YnNjcmliZSh7IG5leHQsIGVycm9yLCBjb21wbGV0ZSB9KSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCByZXNwb25zZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlc3BvbnNlID0gYXdhaXQgdGhpcy5wcm9taXNlKHsgdXJsLCBjb250ZW50VHlwZSwgbWV0aG9kLCBwYXJhbXMgfSk7XG4gICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBDYW5ub3QgZ2V0IHJlc3BvbnNlIGZyb20gc2VydmVyIGZvciB1cmwgWyR7dXJsfV0gY2F1c2VkIGJ5OiAke2V4fWApO1xuICAgICAgICBlcnJvciAmJiBlcnJvcihleCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV4dCA/IG5leHQocmVzcG9uc2UpIDogcmVzcG9uc2U7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGNvbXBsZXRlICYmIGNvbXBsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgc2VuZCh7IHVybCwgY29udGVudFR5cGUsIG1ldGhvZCwgcGFyYW1zIH0sIGRvbmUpIHtcbiAgICAobWV0aG9kID09PSAnZ2V0JyAmJiBwYXJhbXMpICYmICh1cmwgPSBgJHt1cmx9PyR7U3RyaW5nLnRvUXVlcnlTdHJpbmcocGFyYW1zKX1gKTtcbiAgICBjb25zdCB4aHIgPSBFeHQuWEhSO1xuICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgY29udGVudFR5cGUpO1xuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICBpZih4aHIucmVhZHlTdGF0ZSA9PT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xuICAgICAgICAvLyBhamF4IHdpbGwgcmV0dXJuIGFzIGEganNvbiBieSBkZWZhdWx0LCBpZiBwYXJzZXIgZXJyb3IgdGhlbiBpdCB3aWxsIHJldHVybiBhIHJhdyBzdHJpbmdcbiAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkb25lKG51bGwsIEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGRvbmUobnVsbCwgeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkb25lKEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGRvbmUoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHhoci5zZW5kKHBhcmFtcyA/IEpTT04uc3RyaW5naWZ5KHBhcmFtcykgOiBudWxsKTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUodXJsT3JSZXF1ZXN0KSB7XG4gICAgcmV0dXJuIG5ldyBBamF4T2JzZXJ2YWJsZSh1cmxPclJlcXVlc3QpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRPYnNlcnZhYmxlIHtcbiAgY29uc3RydWN0b3IodGFyZ2V0LCBldmVudE5hbWUsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICB0aGlzLmV2ZW50TmFtZSA9IGV2ZW50TmFtZTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50TmFtZSwgb2JzZXJ2ZXIsIHRoaXMub3B0aW9ucyk7XG4gIH1cblxuICB1bnN1YnNjcmliZShvYnNlcnZlcikge1xuICAgIHRoaXMudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5ldmVudE5hbWUsIG9ic2VydmVyLCB0aGlzLm9wdGlvbnMpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZSh0YXJnZXQsIGV2ZW50TmFtZSwgb3B0aW9ucyA9IGZhbHNlKSB7XG4gICAgcmV0dXJuIG5ldyBFdmVudE9ic2VydmFibGUodGFyZ2V0LCBldmVudE5hbWUsIG9wdGlvbnMpO1xuICB9XG59IiwiaW1wb3J0IE9wZXJhdG9yIGZyb20gJy4vb3BlcmF0b3InO1xuaW1wb3J0IEV2ZW50T2JzZXJ2YWJsZSBmcm9tICcuL2V2ZW50JztcbmltcG9ydCBBamF4T2JzZXJ2YWJsZSBmcm9tICcuL2FqYXgnO1xuXG4vKipcbiAqIEZyb20gUmVhY3RpdmVYIGRvY3M6XG4gKlxuICogT2JzZXJ2YWJsZTogQW4gaW50ZXJmYWNlIHRoYXQgbGlzdGVucyBmb3IgaW5jb21pbmcgbm90aWZpY2F0aW9ucyBvdmVyIGEgcGVyaW9kIG9mIHRpbWVcbiAqIGFuZCBwdXNoZXMgdGhlbSB0byBhbm90aGVyIGludGVyZmFjZSB0aGF0IHJlYWN0cyB0byB0aGVtLlxuICpcbiAqIFN1YnNjcmlwdGlvbjogV2hlbiBhbiBPYnNlcnZhYmxlIGludGVyZmFjZSBzdGFydHMgZG9pbmcgaXRzIHdvcmssXG4gKiBpLmUuIGxpc3RlbmluZyBmb3Igbm90aWZpY2F0aW9ucyBhbmQgcHVzaGluZyB0aGVtIG91dC5cbiAqXG4gKiBPYnNlcnZlcjogQW4gaW50ZXJmYWNlIHRoYXQgcmVhY3RzIHRvIGRhdGEgcHVzaGVkIGZyb20gYW4gT2JzZXJ2YWJsZS5cbiAqXG4gKiBPcGVyYXRvcnM6IEZ1bmN0aW9ucyB1c2VkIHRvIG1hbmlwdWxhdGUgYW4gT2JzZXJ2YWJsZeKAmXMgb3V0cHV0LCBlLmcuIGZpbHRlciwgbWFwLCByZWR1Y2UsIGV0Yy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JzZXJ2YWJsZSBleHRlbmRzIE9wZXJhdG9yIHtcbiAgY29uc3RydWN0b3Ioc3Vic2NyaWJlKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN1YnNjcmliZSA9IHN1YnNjcmliZTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUoc3Vic2NyaWJlKSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKHN1YnNjcmliZSk7XG4gIH1cblxuICAvKipcbiAgICogRm9yIGV4YW1wbGU6XG4gICAqIGNvbnN0IHVuc3ViY3JpYmUgPSBPYnNlcnZhYmxlLmZyb21FdmVudChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQnKSwgJ2NoYW5nZScpLnN1YnNjcmliZSh7XG4gICAqICAgIG5leHQ6IGUgPT4gY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpXG4gICAqIH0pO1xuICAgKlxuICAgKiBzZXRUaW1lb3V0KHVuc3ViY3JpYmUsIDUwMDApO1xuICAgKlxuICAgKiBAcGFyYW0gdGFyZ2V0XG4gICAqIEBwYXJhbSBldmVudE5hbWVcbiAgICovXG4gIHN0YXRpYyBmcm9tRXZlbnQodGFyZ2V0LCBldmVudE5hbWUpIHtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUob2JzZXJ2ZXIgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlID0+IG9ic2VydmVyLm5leHQoZSk7XG4gICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrLCBmYWxzZSk7XG4gICAgICByZXR1cm4gKCkgPT4gdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaywgZmFsc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGFqYXgodXJsT3JSZXF1ZXN0KSB7XG4gICAgcmV0dXJuIEFqYXhPYnNlcnZhYmxlLmNyZWF0ZSh1cmxPclJlcXVlc3QpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3BlcmF0b3Ige1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmZpbHRlciA9IHByZWRpY2F0ZSA9PiB7IC8qIHRvIGJlIGltcGxlbWVudGVkICovIH07XG4gICAgdGhpcy5tYXAgPSBwcmVkaWNhdGUgPT4geyAvKiB0byBiZSBpbXBsZW1lbnRlZCAqLyB9O1xuICAgIHRoaXMucmVkdWNlID0gcHJlZGljYXRlID0+IHsgLyogdG8gYmUgaW1wbGVtZW50ZWQgKi8gfTtcbiAgfVxufSIsImltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBFeHQgfSBmcm9tICcuL2NvcmUvZXh0JztcblxuY2xhc3MgUmV4dCBleHRlbmRzIEV4dCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgLy8gdGhpcy5DYWNoZSA9IHJlcXVpcmUoJy4vZGF0YS9jYWNoZScpO1xuICAgIC8vIHRoaXMuTW9kZWwgPSByZXF1aXJlKCcuL2RhdGEvbW9kZWwnKTtcbiAgICAvLyB0aGlzLk9ic2VydmFibGUgPSByZXF1aXJlKCcuL3JlYWN0aXZlL29ic2VydmFibGUnKTtcbiAgICAvLyB0aGlzLkRpYWxvZ01hbmFnZXIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvZGlhbG9nJyk7XG4gIH1cblxuICBhc3luYyBhcHBsaWNhdGlvbih7IGxhdW5jaCB9KSB7XG4gICAgaWYgKGxhdW5jaCkge1xuICAgICAgY29uc3Qgcm9vdCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnPGRpdiBpZD1cInJlYWN0LXJvb3RcIj48L2Rpdj4nKSxcbiAgICAgICAgICAgIHZpZXdwb3J0ID0gYXdhaXQgbGF1bmNoKCk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJvb3QpO1xuICAgICAgcmVuZGVyKHZpZXdwb3J0LCByb290KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFJleHQoKTtcblxuLy8jcmVnaW9uIENvbXBvbmVudFxuZXhwb3J0IHsgSGFzaFJvdXRlciwgTGluayB9IGZyb20gJy4vY29tcG9uZW50cy9yb3V0ZXInO1xuZXhwb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRhaW5lcic7XG4vLyBleHBvcnQgeyBCdXR0b24sIEJ1dHRvbkxpbmssIEZpZWxkLCBUZXh0RmllbGQsIENoZWNrYm94LCBUZXh0QXJlYSB9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtJztcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgR3JpZCB9IGZyb20gJy4vY29tcG9uZW50cy9ncmlkJztcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgTGlzdFZpZXcgfSBmcm9tICcuL2NvbXBvbmVudHMvbGlzdCc7XG4vLyBleHBvcnQgeyBEaWFsb2cgfSBmcm9tICcuL2NvbXBvbmVudHMvZGlhbG9nJztcbi8vI2VuZHJlZ2lvblxuXG4vLyNyZWdpb24gRGVjb3JhdG9yIChvciBIaWdoZXIgT3JkZXIgRnVuY3Rpb24gb3IgSGlnaGVyIE9yZGVyIENvbXBvbmVudClcbmV4cG9ydCB7IGJpbmQgfSBmcm9tICcuL2NvcmUvZXh0JztcbmV4cG9ydCB7IFJvdXRlIH0gZnJvbSAnLi9jb21wb25lbnRzL3JvdXRlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbXBvbmVudCB9IGZyb20gJy4vYXBwL2NvbXBvbmVudCc7XG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIFNlcnZpY2UgfSBmcm9tICcuL2FwcC9zZXJ2aWNlJztcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgU3RvcmUgfSBmcm9tICcuL2RhdGEvc3RvcmUnO1xuLy8jZW5kcmVnaW9uIl19
