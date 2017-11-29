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

_rext2.default.application({
  launch: function launch() {
    return _react2.default.createElement(_viewport2.default, null);
  }
});

},{"../../../src/rext":11,"./components/getting-started/getting-started":2,"./components/viewport/viewport":3,"babel-polyfill":"babel-polyfill","react":"react"}],2:[function(require,module,exports){
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

},{"../../../../../src/rext":11,"react":"react"}],3:[function(require,module,exports){
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

},{"../../../../../src/rext":11,"react":"react"}],4:[function(require,module,exports){
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

},{"../core/ext":8,"react":"react"}],5:[function(require,module,exports){
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

},{"../core/ext":8,"../core/list":9,"react":"react","rxjs":"rxjs"}],6:[function(require,module,exports){
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

},{"./list":9}],7:[function(require,module,exports){
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

},{"./list":9}],8:[function(require,module,exports){
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

},{"./dictionary":6,"./dom":7,"./list":9,"./string":10}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Route = exports.bind = exports.Container = exports.Link = exports.HashRouter = undefined;

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

},{"./components/container":4,"./components/router":5,"./core/ext":8,"babel-polyfill":"babel-polyfill","react":"react","react-dom":"react-dom"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkb2NzL3NyYy9qcy9hcHAuanMiLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2dldHRpbmctc3RhcnRlZC9nZXR0aW5nLXN0YXJ0ZWQuanN4IiwiZG9jcy9zcmMvanMvY29tcG9uZW50cy92aWV3cG9ydC92aWV3cG9ydC5qc3giLCJzcmMvY29tcG9uZW50cy9jb250YWluZXIuanN4Iiwic3JjL2NvbXBvbmVudHMvcm91dGVyLmpzeCIsInNyYy9jb3JlL2RpY3Rpb25hcnkuanMiLCJzcmMvY29yZS9kb20uanMiLCJzcmMvY29yZS9leHQuanMiLCJzcmMvY29yZS9saXN0LmpzIiwic3JjL2NvcmUvc3RyaW5nLmpzIiwic3JjL3JleHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFLLFdBQUwsQ0FBaUI7QUFDZixVQUFRO0FBQUEsV0FBTSx1REFBTjtBQUFBO0FBRE8sQ0FBakI7Ozs7Ozs7Ozs7Ozs7O0FDWEE7Ozs7QUFDQTs7Ozs7Ozs7OztJQUdxQixjLFdBRHBCLGlCQUFNLEdBQU4sQzs7Ozs7Ozs7Ozs7NkJBRVU7QUFDUCxhQUFPO0FBQUE7QUFBQSxVQUFXLFdBQVUsMkJBQXJCO0FBQ0w7QUFBQTtBQUFBLFlBQUksV0FBVSxPQUFkO0FBQUE7QUFBQSxTQURLO0FBRUw7QUFBQTtBQUFBLFlBQUcsV0FBVSxPQUFiO0FBQUE7QUFBQSxTQUZLO0FBS0w7QUFBQTtBQUFBLFlBQUksV0FBVSxPQUFkO0FBQUE7QUFBQSxTQUxLO0FBTUw7QUFBQTtBQUFBLFlBQUksV0FBVSxPQUFkO0FBQUE7QUFBQSxTQU5LO0FBT0w7QUFBQTtBQUFBLFlBQUcsV0FBVSxPQUFiO0FBQUE7QUFBeUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUF6QjtBQUFBO0FBQTZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBN0M7QUFBQTtBQUFBLFNBUEs7QUFRTDtBQUFBO0FBQUEsWUFBSSxXQUFVLE9BQWQ7QUFDRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUosV0FERjtBQUVFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSixXQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKLFdBSEY7QUFJRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUosV0FKRjtBQUtFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSixXQUxGO0FBTUU7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKLFdBTkY7QUFPRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFQRixTQVJLO0FBaUJMO0FBQUE7QUFBQSxZQUFJLFdBQVUsT0FBZDtBQUFBO0FBQUEsU0FqQks7QUFrQkw7QUFBQTtBQUFBLFlBQUcsV0FBVSxPQUFiO0FBQUE7QUFBQSxTQWxCSztBQW1CTDtBQUFBO0FBQUEsWUFBSyxXQUFVLE9BQWY7QUFBQTtBQUNrQyxtREFEbEM7QUFBQTtBQUVVLG1EQUZWO0FBQUE7QUFHcUIsbURBSHJCO0FBQUE7QUFJb0IsbURBSnBCO0FBQUE7QUFLMEIsbURBTDFCO0FBQUE7QUFNUyxtREFOVDtBQUFBO0FBT2EsbURBUGI7QUFBQTtBQVFpRSxtREFSakU7QUFBQTtBQVMwQyxtREFUMUM7QUFBQTtBQVVZLG1EQVZaO0FBQUE7QUFXbUUsbURBWG5FO0FBQUE7QUFZNkYsbURBWjdGO0FBQUE7QUFhd0MsbURBYnhDO0FBQUE7QUFjb0MsbURBZHBDO0FBQUE7QUFlaUMsbURBZmpDO0FBQUE7QUFnQjJFLG1EQWhCM0U7QUFBQTtBQWlCZ0IsbURBakJoQjtBQUFBO0FBa0IwQyxtREFsQjFDO0FBQUE7QUFtQnFEO0FBbkJyRCxTQW5CSztBQXdDTDtBQUFBO0FBQUEsWUFBRyxXQUFVLE9BQWI7QUFBQTtBQUEwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTFFLFNBeENLO0FBeUNMO0FBQUE7QUFBQSxZQUFLLFdBQVUsT0FBZjtBQUFBO0FBQUEsU0F6Q0s7QUF3REw7QUFBQTtBQUFBLFlBQUcsV0FBVSxPQUFiO0FBQUE7QUFBbUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFuRTtBQUFBO0FBQUEsU0F4REs7QUF5REw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXpESyxPQUFQO0FBcUVEOzs7OztrQkF2RWtCLGM7Ozs7Ozs7O2tCQ0RHLFE7O0FBSHhCOzs7O0FBQ0E7Ozs7QUFFZSxTQUFTLFFBQVQsR0FBb0I7QUFDakMsU0FBTztBQUFBO0FBQUE7QUFDTDtBQUFBO0FBQUEsUUFBUSxXQUFVLFdBQWxCO0FBQThCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOUIsS0FESztBQUVMO0FBQUE7QUFBQSxRQUFXLFFBQU8sUUFBbEI7QUFDRTtBQUFBO0FBQUEsVUFBTyxPQUFPLEVBQUMsT0FBTSxHQUFQLEVBQWQ7QUFDRTtBQUFBO0FBQUEsWUFBSSxXQUFVLFlBQWQ7QUFDRTtBQUFBO0FBQUE7QUFBSSx3REFBTSxJQUFHLEdBQVQsRUFBYSxNQUFLLGlCQUFsQjtBQUFKLFdBREY7QUFFRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsZ0JBQU0sV0FBVSxVQUFoQjtBQUFBO0FBQUE7QUFBSixXQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUksd0RBQU0sSUFBRywwQkFBVCxFQUFvQyxNQUFLLFdBQXpDO0FBQUosV0FIRjtBQUlFO0FBQUE7QUFBQTtBQUFJLHdEQUFNLElBQUcsNkJBQVQsRUFBdUMsTUFBSyxjQUE1QztBQUFKLFdBSkY7QUFLRTtBQUFBO0FBQUE7QUFBSSx3REFBTSxJQUFHLGtDQUFULEVBQTRDLE1BQUssbUJBQWpEO0FBQUosV0FMRjtBQU1FO0FBQUE7QUFBQTtBQUFJLHdEQUFNLElBQUcsZUFBVCxFQUF5QixNQUFLLGNBQTlCO0FBQUosV0FORjtBQU9FO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxnQkFBTSxXQUFVLFVBQWhCO0FBQUE7QUFBQTtBQUFKLFdBUEY7QUFRRTtBQUFBO0FBQUE7QUFBSSx3REFBTSxJQUFHLHNCQUFULEVBQWdDLE1BQUssT0FBckM7QUFBSjtBQVJGO0FBREYsT0FERjtBQWFFO0FBQUE7QUFBQTtBQUFXO0FBQVg7QUFiRixLQUZLO0FBaUJMO0FBQUE7QUFBQSxRQUFRLFdBQVUsV0FBbEI7QUFBOEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE5QjtBQWpCSyxHQUFQO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOzs7Ozs7Ozs7OztRQ2xDZSxTLEdBQUEsUzs7QUFUaEI7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNLGVBQWU7QUFDbkIsWUFBVSxVQURTO0FBRW5CLFNBQU8sYUFGWTtBQUduQixTQUFPO0FBSFksQ0FBckI7O0FBTU8sU0FBUyxTQUFULE9BQTRFO0FBQUEsNEJBQXZELFNBQXVEO0FBQUEsTUFBdkQsU0FBdUQsa0NBQTNDLEVBQTJDO0FBQUEseUJBQXZDLE1BQXVDO0FBQUEsTUFBdkMsTUFBdUMsK0JBQTlCLEtBQThCO0FBQUEsTUFBdkIsUUFBdUIsUUFBdkIsUUFBdUI7QUFBQSxNQUFWLE1BQVU7O0FBQ2pGLFNBQU87QUFBQTtBQUFBLGVBQVMsV0FBVyxjQUFJLFNBQUosQ0FBYyxRQUFkLEVBQXdCLGFBQWEsTUFBYixDQUF4QixFQUE4QyxTQUE5QyxDQUFwQixJQUFrRixNQUFsRjtBQUEyRjtBQUEzRixHQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7O1FDRGUsSyxHQUFBLEs7UUFVQSxJLEdBQUEsSTs7QUFwQmhCOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUVBLElBQU0sU0FBUyxFQUFmO0FBQUEsSUFDTSxXQUFXLFNBQVgsUUFBVztBQUFBLFNBQU0sT0FBTyxRQUFQLENBQWdCLElBQWhCLENBQXFCLFNBQXJCLENBQStCLENBQS9CLEtBQXFDLEdBQTNDO0FBQUEsQ0FEakI7QUFBQSxJQUVNLGVBQWUsU0FBZixZQUFlO0FBQUEsU0FBUyxNQUFNLEtBQU4sQ0FBWSxHQUFaLENBQVQ7QUFBQSxDQUZyQjs7QUFJTyxTQUFTLEtBQVQsQ0FBZSxLQUFmLEVBQXNCO0FBQzNCLFNBQU8sZ0JBQVE7QUFDYixXQUFPLEtBQVAsSUFBZ0I7QUFDZCxrQkFEYztBQUVkLGdCQUZjO0FBR2QsWUFBTSxhQUFhLEtBQWI7QUFIUSxLQUFoQjtBQUtELEdBTkQ7QUFPRDs7QUFFTSxTQUFTLElBQVQsT0FBNkY7QUFBQSxNQUE3RSxFQUE2RSxRQUE3RSxFQUE2RTtBQUFBLDRCQUF6RSxTQUF5RTtBQUFBLE1BQXpFLFNBQXlFLGtDQUE3RCxFQUE2RDtBQUFBLGtDQUF6RCxlQUF5RDtBQUFBLE1BQXpELGVBQXlELHdDQUF2QyxRQUF1QztBQUFBLE1BQTdCLElBQTZCLFFBQTdCLElBQTZCO0FBQUEsTUFBdkIsUUFBdUIsUUFBdkIsUUFBdUI7QUFBQSxNQUFWLE1BQVU7O0FBQ2xHLFNBQU87QUFBQTtBQUFBLGVBQUcsWUFBVSxFQUFiLEVBQW1CLFdBQVcsY0FBSSxTQUFKLENBQWMsVUFBZCxFQUEwQixTQUExQixzQkFBd0MsZUFBeEMsRUFBMEQsT0FBTyxVQUFqRSxFQUE5QixJQUFrSCxNQUFsSDtBQUNKLFlBQVE7QUFESixHQUFQO0FBR0Q7O0lBRVksVSxXQUFBLFU7OztBQUNYLHNCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3SEFDWCxLQURXOztBQUVqQixrQkFBSSxZQUFKLFFBQXVCLFdBQXZCO0FBRmlCO0FBR2xCOzs7O3dDQUVtQjtBQUFBOztBQUNqQixPQUFDLE9BQU8sUUFBUCxDQUFnQixJQUFsQixLQUE0QixPQUFPLFFBQVAsQ0FBZ0IsSUFBaEIsR0FBdUIsR0FBbkQ7QUFDQSx1QkFBVyxTQUFYLENBQXFCLE1BQXJCLEVBQTZCLFlBQTdCLEVBQTJDLFNBQTNDLENBQXFEO0FBQUEsZUFBTSxPQUFLLFFBQUwsQ0FBYyxXQUFkLENBQU47QUFBQSxPQUFyRDtBQUNEOzs7NkJBRVE7QUFBQSxtQkFDeUIsS0FBSyxLQUQ5QjtBQUFBLFVBQ0MsS0FERCxVQUNDLEtBREQ7QUFBQSxVQUNRLElBRFIsVUFDUSxJQURSO0FBQUEsVUFDYyxNQURkLFVBQ2MsTUFEZDs7O0FBR1AsVUFBSSxDQUFDLElBQUwsRUFBVztBQUNULGdCQUFRLEtBQVIsQ0FBYyxzQkFBZDtBQUNBLGVBQU8sSUFBUDtBQUNEOztBQUVELGFBQU8sZ0JBQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixFQUFFLFlBQUYsRUFBUyxjQUFULEVBQTFCLENBQVA7QUFDRDs7Ozs7O0FBR0gsU0FBUyxTQUFULEdBQXFCO0FBQ25CLE1BQU0sU0FBUyxFQUFmO0FBQUEsTUFDTSxlQUFlLFVBRHJCOztBQUdBO0FBQ0EsTUFBSSxPQUFPLFlBQVAsQ0FBSixFQUEwQjtBQUN4QixXQUFPLEVBQUUsT0FBTyxZQUFULEVBQXVCLE1BQU0sT0FBTyxZQUFQLEVBQXFCLElBQWxELEVBQXdELGNBQXhELEVBQVA7QUFDRDs7QUFFRDtBQUNBLE1BQU0sY0FBYyxhQUFhLFlBQWIsQ0FBcEI7QUFDQSxPQUFJLElBQUksS0FBUixJQUFpQixNQUFqQixFQUF5QjtBQUN2QixRQUFNLFdBQVcsT0FBTyxLQUFQLENBQWpCO0FBQUEsUUFDTSxZQUFZLFNBQVMsSUFEM0I7O0FBR0EsUUFBSSxVQUFVLElBQWQ7QUFDQSx3QkFBSyxTQUFTLElBQWQsRUFBb0IsSUFBcEIsQ0FBeUIsVUFBQyxTQUFELEVBQVksS0FBWixFQUFzQjtBQUM3QyxVQUFJLGNBQWMsWUFBWSxLQUFaLENBQWxCLEVBQXNDO0FBQ3BDLFlBQUksVUFBVSxVQUFWLENBQXFCLEdBQXJCLENBQUosRUFBK0I7QUFBRTtBQUMvQixpQkFBTyxVQUFVLFNBQVYsQ0FBb0IsQ0FBcEIsQ0FBUCxJQUFpQyxZQUFZLEtBQVosQ0FBakM7QUFDRCxTQUZELE1BRU87QUFDTCxvQkFBVSxLQUFWO0FBQ0E7QUFDRDtBQUNGO0FBQ0YsS0FURDs7QUFXQSxRQUFJLE9BQUosRUFBYTtBQUNYLGFBQU8sRUFBRSxPQUFPLFlBQVQsRUFBdUIsTUFBTSxTQUFTLElBQXRDLEVBQTRDLGNBQTVDLEVBQVA7QUFDRDtBQUNGOztBQUVEO0FBQ0EsTUFBSSxPQUFPLEdBQVAsQ0FBSixFQUFpQjtBQUNmLFdBQU8sRUFBRSxPQUFPLFlBQVQsRUFBdUIsTUFBTSxPQUFPLEdBQVAsRUFBWSxJQUF6QyxFQUErQyxjQUEvQyxFQUFQO0FBQ0Q7O0FBRUQ7QUFDQSxTQUFPLEVBQUUsT0FBTyxZQUFULEVBQXVCLE1BQU0sSUFBN0IsRUFBbUMsY0FBbkMsRUFBUDtBQUNEOzs7Ozs7Ozs7Ozs7QUN4RkQ7Ozs7Ozs7O0lBRWEsVSxXQUFBLFU7QUFDWCxzQkFBWSxTQUFaLEVBQXVCO0FBQUE7O0FBQUE7O0FBQ3JCLFNBQUssSUFBTCxHQUFZLEVBQVo7QUFDQSxRQUFJLGFBQWEsVUFBVSxNQUEzQixFQUFtQztBQUNqQyxXQUFLLElBQUwsR0FBWSxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLFNBQWxCLENBQVo7QUFDRDs7QUFFRCxTQUFLLElBQUwsR0FBWTtBQUFBLGFBQU0sb0JBQUssT0FBTyxJQUFQLENBQVksTUFBSyxJQUFqQixDQUFMLENBQU47QUFBQSxLQUFaO0FBQ0EsU0FBSyxNQUFMLEdBQWM7QUFBQSxhQUFNLG9CQUFLLE9BQU8sTUFBUCxDQUFjLE1BQUssSUFBbkIsQ0FBTCxDQUFOO0FBQUEsS0FBZDtBQUNEOzs7O3lCQUVJLFEsRUFBVTtBQUNiLFdBQUssSUFBSSxHQUFULElBQWdCLEtBQUssSUFBckIsRUFBMkI7QUFDekIsaUJBQVMsS0FBSyxJQUFMLENBQVUsR0FBVixDQUFULEVBQXlCLEdBQXpCLEVBQThCLEtBQUssSUFBbkM7QUFDRDtBQUNELGFBQU8sSUFBUDtBQUNEOzs7Ozs7a0JBR1ksVUFBQyxTQUFEO0FBQUEsU0FBZSxJQUFJLFVBQUosQ0FBZSxTQUFmLENBQWY7QUFBQSxDOzs7Ozs7Ozs7OztBQ3JCZjs7Ozs7Ozs7SUFFTSxHOzs7Ozs7Ozs7OzsyQkFDRztBQUNMLFdBQUssU0FBTCxDQUFlLElBQWYsQ0FBb0I7QUFBQSxlQUFZLFNBQVMsS0FBVCxDQUFlLE9BQWYsR0FBeUIsT0FBckM7QUFBQSxPQUFwQjtBQUNEOzs7MkJBRU07QUFDTCxXQUFLLFNBQUwsQ0FBZSxJQUFmLENBQW9CO0FBQUEsZUFBWSxTQUFTLEtBQVQsQ0FBZSxPQUFmLEdBQXlCLE1BQXJDO0FBQUEsT0FBcEI7QUFDRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztrQkFHYSxVQUFDLFFBQUQ7QUFBQSxTQUFjLElBQUksR0FBSixDQUFRLFNBQVMsZ0JBQVQsQ0FBMEIsUUFBMUIsQ0FBUixDQUFkO0FBQUEsQzs7Ozs7Ozs7Ozs7Ozs7QUM3QmY7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFYSxHLFdBQUEsRztBQUNYLGlCQUFjO0FBQUE7O0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFLLFdBQUwsR0FBbUIsaUJBQVM7QUFBRSxVQUFNLGNBQWMsS0FBZCx5Q0FBYyxLQUFkLENBQU4sQ0FBMkIsT0FBTyxTQUFTLFFBQVQsSUFBcUIsU0FBUyxRQUE5QixJQUEwQyxTQUFTLFNBQTFEO0FBQXNFLEtBQS9IO0FBQ0EsU0FBSyxRQUFMLEdBQWdCO0FBQUEsYUFBVSxPQUFPLEtBQVIsS0FBbUIsUUFBNUI7QUFBQSxLQUFoQjtBQUNBLFNBQUssVUFBTCxHQUFrQjtBQUFBLGFBQVMsQ0FBQyxDQUFDLEtBQUYsSUFBVyxPQUFPLEtBQVAsS0FBaUIsVUFBckM7QUFBQSxLQUFsQjtBQUNBLFNBQUssUUFBTCxHQUFnQjtBQUFBLGFBQVMsU0FBUyxJQUFULENBQWMsS0FBZCxNQUF5QixpQkFBbEM7QUFBQSxLQUFoQjtBQUNBLFNBQUssT0FBTCxHQUFlO0FBQUEsYUFBUyxTQUFTLElBQVQsQ0FBYyxLQUFkLE1BQXlCLGdCQUFsQztBQUFBLEtBQWY7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOztBQUVEO0FBQ0E7QUFDQTs7OztpQ0FFYSxJLEVBQU0sSyxFQUFPO0FBQ3hCLFVBQUksQ0FBQyxJQUFELElBQVMsQ0FBQyxLQUFkLEVBQXFCO0FBQUU7QUFBUztBQUNoQyxXQUFLLEtBQUwsR0FBYSxLQUFiOztBQUZ3QixpQ0FHZixLQUhlO0FBSXRCLHFCQUFXLGlCQUFPLFVBQVAsQ0FBa0IsS0FBbEIsQ0FBWCxJQUF5QztBQUFBLGlCQUFTLEtBQUssUUFBTCxxQkFBaUIsS0FBakIsRUFBeUIsS0FBekIsRUFBVDtBQUFBLFNBQXpDO0FBSnNCOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUd4Qiw2QkFBa0IsT0FBTyxJQUFQLENBQVksS0FBWixDQUFsQiw4SEFBc0M7QUFBQSxjQUE3QixLQUE2Qjs7QUFBQSxnQkFBN0IsS0FBNkI7QUFFckM7QUFMdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU16Qjs7O2dDQUV5QjtBQUFBOztBQUN4QixVQUFNLE1BQU0sRUFBWjs7QUFEd0Isd0NBQWIsV0FBYTtBQUFiLG1CQUFhO0FBQUE7O0FBR3hCLDBCQUFLLFdBQUwsRUFBa0IsSUFBbEIsQ0FBdUIsZUFBTztBQUM1QixZQUFJLENBQUMsR0FBTCxFQUFVO0FBQ1I7QUFDRDs7QUFFRCxZQUFJLE9BQU8sR0FBUCxLQUFlLFFBQW5CLEVBQTZCO0FBQzNCLGNBQUksSUFBSixDQUFTLEdBQVQ7QUFDRCxTQUZELE1BRU8sSUFBSSxNQUFLLFFBQUwsQ0FBYyxHQUFkLENBQUosRUFBd0I7QUFDN0IsZUFBSyxJQUFJLEdBQVQsSUFBZ0IsR0FBaEIsRUFBcUI7QUFDbkIsZ0JBQUksSUFBSSxHQUFKLE1BQWEsSUFBakIsRUFBdUI7QUFDckIsa0JBQUksSUFBSixDQUFTLEdBQVQ7QUFDRDtBQUNGO0FBQ0Y7QUFDRixPQWREO0FBZUEsYUFBTyxJQUFJLElBQUosQ0FBUyxHQUFULENBQVA7QUFDRDs7QUFFRDs7OztrQ0FDYyxJLEVBQU07QUFDbEIsVUFBTSxNQUFNLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBQ0EsVUFBSSxTQUFKLEdBQWdCLElBQWhCO0FBQ0EsYUFBTyxJQUFJLFFBQUosQ0FBYSxDQUFiLENBQVA7QUFDRDs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7a0JBR2EsSUFBSSxHQUFKLEU7O0FBRWY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztJQ3ZIYSxJLFdBQUEsSTtBQUNYLGdCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsU0FBSyxJQUFMLEdBQVksRUFBWjtBQUNBLFFBQUksU0FBUyxNQUFNLE1BQW5CLEVBQTJCO0FBQ3pCLFdBQUssSUFBTCxHQUFZLEtBQVo7QUFDRDs7QUFFRCxTQUFLLE9BQUwsR0FBZTtBQUFBLGFBQU0sTUFBSyxJQUFYO0FBQUEsS0FBZjtBQUNBLFNBQUssS0FBTCxHQUFhO0FBQUEsYUFBTSxNQUFLLElBQUwsQ0FBVSxNQUFoQjtBQUFBLEtBQWI7QUFDQSxTQUFLLEtBQUwsR0FBYTtBQUFBLGFBQVMsTUFBSyxJQUFMLENBQVUsS0FBVixDQUFUO0FBQUEsS0FBYjtBQUNBLFNBQUssR0FBTCxHQUFXO0FBQUEsYUFBUSxNQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsSUFBZixDQUFSO0FBQUEsS0FBWDtBQUNBLFNBQUssTUFBTCxHQUFjLFVBQUMsSUFBRDtBQUFBLFVBQU8sS0FBUCx1RUFBZSxDQUFmO0FBQUEsYUFBcUIsTUFBSyxJQUFMLENBQVUsTUFBVixDQUFpQixLQUFqQixFQUF3QixDQUF4QixFQUEyQixJQUEzQixDQUFyQjtBQUFBLEtBQWQ7QUFDQSxTQUFLLFFBQUwsR0FBZ0IsVUFBQyxLQUFEO0FBQUEsVUFBUSxLQUFSLHVFQUFnQixDQUFoQjtBQUFBLGFBQXNCLE1BQUssSUFBTCxDQUFVLE1BQVYsQ0FBaUIsS0FBakIsRUFBd0IsS0FBeEIsQ0FBdEI7QUFBQSxLQUFoQjtBQUNBLFNBQUssSUFBTCxHQUFZO0FBQUEsYUFBYSxNQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsU0FBZixDQUFiO0FBQUEsS0FBWjtBQUNEOzs7O3lCQUVJLFEsRUFBVTtBQUNiLFdBQUssSUFBSSxLQUFULElBQWtCLEtBQUssSUFBdkIsRUFBNkI7QUFDM0IsaUJBQVMsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFULEVBQTJCLEtBQTNCLEVBQWtDLEtBQUssSUFBdkM7QUFDRDtBQUNELGFBQU8sSUFBUDtBQUNEOzs7MkJBRU0sUyxFQUFXO0FBQ2hCLFVBQU0sU0FBUyxFQUFmO0FBQ0EsV0FBSyxJQUFMLENBQVUsVUFBQyxJQUFELEVBQU8sS0FBUCxFQUFjLEtBQWQsRUFBd0I7QUFDaEMsWUFBSSxVQUFVLElBQVYsRUFBZ0IsS0FBaEIsRUFBdUIsS0FBdkIsQ0FBSixFQUFtQztBQUNqQyxpQkFBTyxJQUFQLENBQVksSUFBWjtBQUNEO0FBQ0YsT0FKRDtBQUtBLGFBQU8sSUFBSSxJQUFKLENBQVMsTUFBVCxDQUFQO0FBQ0Q7Ozt3QkFFRyxRLEVBQVU7QUFDWixVQUFNLFNBQVMsRUFBZjtBQUNBLFdBQUssSUFBTCxDQUFVLFVBQUMsSUFBRCxFQUFPLEtBQVAsRUFBYyxLQUFkO0FBQUEsZUFBd0IsT0FBTyxLQUFQLElBQWdCLFNBQVMsSUFBVCxFQUFlLEtBQWYsRUFBc0IsS0FBdEIsQ0FBeEM7QUFBQSxPQUFWO0FBQ0EsYUFBTyxJQUFJLElBQUosQ0FBUyxNQUFULENBQVA7QUFDRDs7OzJCQUVNLFEsRUFBVSxXLEVBQWE7QUFDNUIsV0FBSyxJQUFMLENBQVUsVUFBQyxJQUFELEVBQU8sS0FBUCxFQUFjLEtBQWQ7QUFBQSxlQUF3QixjQUFjLFNBQVMsV0FBVCxFQUFzQixJQUF0QixFQUE0QixLQUE1QixFQUFtQyxLQUFuQyxDQUF0QztBQUFBLE9BQVY7QUFDQSxhQUFPLFdBQVA7QUFDRDs7OzhCQUVTLFMsRUFBVztBQUNuQixVQUFJLFFBQVEsQ0FBQyxDQUFiO0FBQ0EsV0FBSyxJQUFJLE1BQU0sQ0FBVixFQUFhLElBQWxCLEVBQXdCLENBQUMsT0FBTyxLQUFLLElBQUwsQ0FBVSxHQUFWLENBQVIsS0FBMkIsSUFBbkQsRUFBeUQsRUFBRSxHQUEzRCxFQUFnRTtBQUM5RCxZQUFJLFVBQVUsSUFBVixFQUFnQixHQUFoQixFQUFxQixLQUFLLElBQTFCLENBQUosRUFBcUM7QUFDbkMsa0JBQVEsR0FBUjtBQUNBO0FBQ0Q7QUFDRjtBQUNELGFBQU8sS0FBUDtBQUNEOzs7eUJBRUksUyxFQUFXO0FBQ2QsVUFBSSxRQUFRLEtBQUssU0FBTCxDQUFlLFNBQWYsQ0FBWjtBQUNBLGFBQU8sUUFBUSxDQUFDLENBQVQsR0FBYSxLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWIsR0FBZ0MsSUFBdkM7QUFDRDs7OzZCQUVRLFMsRUFBVztBQUNsQixhQUFPLEtBQUssSUFBTCxDQUFVLFNBQVYsTUFBeUIsSUFBaEM7QUFDRDs7OzZCQUVRLFMsRUFBVztBQUNsQixVQUFNLFNBQVMsRUFBZjtBQUNBLFdBQUssSUFBTCxDQUFVLFVBQUMsSUFBRCxFQUFPLEtBQVAsRUFBYyxLQUFkLEVBQXdCO0FBQ2hDLFlBQUksQ0FBQyxVQUFVLElBQVYsRUFBZ0IsS0FBaEIsRUFBdUIsS0FBdkIsQ0FBTCxFQUFvQztBQUNsQyxpQkFBTyxJQUFQLENBQVksSUFBWjtBQUNEO0FBQ0YsT0FKRDtBQUtBLFdBQUssSUFBTCxHQUFZLE1BQVo7QUFDRDs7Ozs7O2tCQUdZLFVBQUMsS0FBRDtBQUFBLFNBQVcsSUFBSSxJQUFKLENBQVMsS0FBVCxDQUFYO0FBQUEsQzs7Ozs7Ozs7Ozs7OztJQzNFVCxNO0FBQ0osb0JBQWM7QUFBQTs7QUFDWixTQUFLLFVBQUwsR0FBa0I7QUFBQSxhQUFTLE1BQU0sTUFBTixDQUFhLENBQWIsRUFBZ0IsV0FBaEIsS0FBZ0MsTUFBTSxLQUFOLENBQVksQ0FBWixDQUF6QztBQUFBLEtBQWxCO0FBQ0Q7Ozs7K0JBRVUsSyxFQUFPO0FBQ2hCLGFBQU8sTUFBTSxPQUFOLENBQWMsSUFBZCxFQUFvQixPQUFwQixFQUNNLE9BRE4sQ0FDYyxJQURkLEVBQ29CLE1BRHBCLEVBRU0sT0FGTixDQUVjLElBRmQsRUFFb0IsTUFGcEIsRUFHTSxPQUhOLENBR2MsSUFIZCxFQUdvQixPQUhwQixFQUlNLE9BSk4sQ0FJYyxJQUpkLEVBSW9CLFFBSnBCLENBQVA7QUFLRDs7OytCQUVVLEssRUFBTztBQUNoQixhQUFPLE1BQU0sT0FBTixDQUFjLFFBQWQsRUFBd0IsRUFBeEIsRUFDTSxPQUROLENBQ2MsT0FEZCxFQUN1QixHQUR2QixFQUVNLE9BRk4sQ0FFYyxRQUZkLEVBRXdCLEdBRnhCLEVBR00sT0FITixDQUdjLFFBSGQsRUFHd0IsR0FIeEIsRUFJTSxPQUpOLENBSWMsU0FKZCxFQUl5QixHQUp6QixDQUFQO0FBS0Q7OztrQ0FFYSxNLEVBQVEsRyxFQUFLLE0sRUFBUTtBQUNqQyxZQUFTLFFBQVEsU0FBUixHQUFvQixHQUFwQixHQUEwQixHQUFuQztBQUNBLGVBQVMsV0FBVyxLQUFYLEdBQW1CLFVBQVMsQ0FBVCxFQUFZO0FBQUUsZUFBTyxDQUFQO0FBQVcsT0FBNUMsR0FBK0Msa0JBQXhEOztBQUVBLFVBQUksUUFBUSxFQUFaO0FBQ0EsV0FBSyxJQUFJLEdBQVQsSUFBZ0IsTUFBaEIsRUFBd0I7QUFDdEIsY0FBTSxJQUFOLENBQWMsR0FBZCxTQUFxQixPQUFPLE9BQU8sR0FBUCxDQUFQLENBQXJCO0FBQ0Q7QUFDRCxhQUFPLE1BQU0sSUFBTixDQUFXLEdBQVgsQ0FBUDtBQUNEOzs7Ozs7a0JBR1ksSUFBSSxNQUFKLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQ05OLFU7Ozs7OzttQkFBWSxJOzs7Ozs7Ozs7c0JBQ1osUzs7OztBQXpCVDs7Ozs7Z0JBaUNTLEk7Ozs7OzttQkFDQSxLOzs7O0FBckNUOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUdNLEk7OztBQUNKLGtCQUFjO0FBQUE7O0FBQUE7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNEOzs7Ozs7WUFFbUIsTSxRQUFBLE07Ozs7OztxQkFDZCxNOzs7OztBQUNJLG9CLEdBQU8sS0FBSyxhQUFMLENBQW1CLDZCQUFuQixDOzt1QkFDVSxROzs7QUFBakIsd0I7O0FBQ04seUJBQVMsSUFBVCxDQUFjLFdBQWQsQ0FBMEIsSUFBMUI7QUFDQSxzQ0FBTyxRQUFQLEVBQWlCLElBQWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBS1MsSUFBSSxJQUFKLEU7O0FBRWYiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJleHQgZnJvbSAnfi9yZXh0JztcbmltcG9ydCBWaWV3cG9ydCBmcm9tICcuL2NvbXBvbmVudHMvdmlld3BvcnQvdmlld3BvcnQnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvZ2V0dGluZy1zdGFydGVkL2dldHRpbmctc3RhcnRlZCc7XG4vLyBpbXBvcnQgUmV4dENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvY29yZS1jb25jZXB0cy9jb21wb25lbnQnO1xuLy8gaW1wb3J0IERhdGFQYWNrYWdlIGZyb20gJy4vY29tcG9uZW50cy9jb3JlLWNvbmNlcHRzL2RhdGEtcGFja2FnZSc7XG4vLyBpbXBvcnQgU2NyZWVuTmF2aWdhdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvY29yZS1jb25jZXB0cy9zY3JlZW4tbmF2aWdhdGlvbic7XG4vLyBpbXBvcnQgQXJjaGl0ZWN0dXJlIGZyb20gJy4vY29tcG9uZW50cy9hcmNoaXRlY3R1cmUvYXJjaGl0ZWN0dXJlJztcbi8vIGltcG9ydCBHcmlkQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy91aS1jb21wb25lbnRzL2dyaWQnO1xuXG5SZXh0LmFwcGxpY2F0aW9uKHtcbiAgbGF1bmNoOiAoKSA9PiA8Vmlld3BvcnQgLz5cbn0pOyIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIENvbnRhaW5lciB9IGZyb20gJ34vcmV4dCc7XG5cbkBSb3V0ZSgnLycpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZXR0aW5nU3RhcnRlZCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxDb250YWluZXIgY2xhc3NOYW1lPVwibWFpbiBjb250YWluZXIgc2Nyb2xsYWJsZVwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLW1kXCI+R2V0dGluZyBTdGFydGVkPC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG4gICAgICAgIEV4dGVuc2lvbiBSZWFjdCBpcyBhIGxpYnJhcnkgdGhhdCBidWlsZCBvbiB0b3Agb2YgUmVhY3QsIGhlbHBpbmcgeW91IGJ1aWxkIGRhdGEtaW50ZW5zaXZlLCBjcm9zcy1wbGF0Zm9ybSB3ZWIgYXBwcyBmb3IgZGVza3RvcHMsIHRhYmxldHMsIGFuZCBzbWFydHBob25lcy5cbiAgICAgIDwvcD5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJtYi1tZFwiPlF1aWNrIFN0YXJ0PC9oMj5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi1tZFwiPjEuIFNldHVwIGEgZGV2ZWxvcG1lbnQgZW52aXJvbWVudDwvaDM+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlVzZSA8Y29kZT5ucG08L2NvZGU+IG9yIDxjb2RlPnlhcm48L2NvZGU+IHRvIGluc3RhbGwgZm9sbG93aW5nIGRlcGVuZGVuY2llczo8L3A+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWItbWRcIj5cbiAgICAgICAgPGxpPjxjb2RlPmJhYmVsLXBvbHlmaWxsPC9jb2RlPjwvbGk+XG4gICAgICAgIDxsaT48Y29kZT5iYWJlbC1wcmVzZXQtZW52PC9jb2RlPjwvbGk+XG4gICAgICAgIDxsaT48Y29kZT5iYWJlbC1wcmVzZXQtcmVhY3Q8L2NvZGU+PC9saT5cbiAgICAgICAgPGxpPjxjb2RlPmQzPC9jb2RlPjwvbGk+XG4gICAgICAgIDxsaT48Y29kZT5yZWFjdDwvY29kZT48L2xpPlxuICAgICAgICA8bGk+PGNvZGU+cnhqczwvY29kZT48L2xpPlxuICAgICAgICA8bGk+PGNvZGU+ZXh0LXJlYWN0PC9jb2RlPjwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLW1kXCI+Mi4gQ3JlYXRlIGEgbmV3IHByb2plY3Q8L2gzPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5UaGUgZm9sbG93aW5nIGlzIHRoZSByZWNvbW1lbmRlZCBkaXJlY3Rvcnkgc3RydWN0dXJlIGZvciBhbiBFeHRlbnNpb24gUmVhY3QgYXBwbGljYXRpb246PC9wPlxuICAgICAgPHByZSBjbGFzc05hbWU9XCJtYi1tZFwiPlxuICAgICAgICArLS0gbm9kZV9tb2R1bGVzOiBOUE0gY29tcG9uZW50czxiciAvPlxuICAgICAgICArLS0gZGlzdDxiciAvPlxuICAgICAgICB8ICAgKy0tIGFwcC5taW4uY3NzPGJyIC8+XG4gICAgICAgIHwgICArLS0gYXBwLm1pbi5qczxiciAvPlxuICAgICAgICB8ICAgKy0tIGZyYW1ld29yay5taW4uanM8YnIgLz5cbiAgICAgICAgKy0tIHNyYzxiciAvPlxuICAgICAgICB8ICAgKy0tIGNzczxiciAvPlxuICAgICAgICB8ICAgfCAgICstLSBfdmFyaWFibGVzLnNjc3M6IGFwcGxpY2F0aW9uIHN0eWxlcyBjb25zdGFudCB2YWx1ZXM8YnIgLz5cbiAgICAgICAgfCAgIHwgICArLS0gYXBwLnNjc3M6IGFwcGxpY2F0aW9uIHN0eWxlczxiciAvPlxuICAgICAgICB8ICAgKy0tIGpzPGJyIC8+XG4gICAgICAgIHwgICB8ICAgKy0tIGNvbW1vbjogY29kZSBvZiBzaGFyZWQgZnVuY3Rpb25zIG9yIHNoYXJlZCBjb21wb25lbnRzPGJyIC8+XG4gICAgICAgIHwgICB8ICAgKy0tIGNvbXBvbmVudHM6IGNvZGUgKHNjcmlwdHMgYW5kIHZpZXdzKSBvZiBldmVyeSBmZWF0dXJlIHNob3VsZCBiZSBhIHN1Yi1kaXJlY3Rvcnk8YnIgLz5cbiAgICAgICAgfCAgIHwgICArLS0gc2VydmljZXM6IGNvZGUgb2Ygc2VydmljZXM8YnIgLz5cbiAgICAgICAgfCAgIHwgICArLS0gc3RvcmVzOiBjb2RlIG9mIHN0b3JlczxiciAvPlxuICAgICAgICB8ICAgfCAgICstLSBhcHAuanM6IG1haW4gc2NyaXB0PGJyIC8+XG4gICAgICAgICstLSBndWxwZmlsZS5iYWJlbC5qczogYnVpbGQgc2NyaXB0cyAob3Igd2VicGFjay5jb25maWcuanMgaWYgeW91IHByZWZlcik8YnIgLz5cbiAgICAgICAgKy0tIGluZGV4Lmh0bWw8YnIgLz5cbiAgICAgICAgKy0tIHBhY2thZ2UuanNvbjogTlBNIHBhY2thZ2UgZGVmaW5pdGlvbjxiciAvPlxuICAgICAgICArLS0gc2VydmVyLmpzOiBjb2RlIG9mIGxvY2FsIHdlYiBzZXJ2ZXIgKEV4cHJlc3NKUyk8YnIgLz5cbiAgICAgIDwvcHJlPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5MZXTigJlzIHN0YXJ0IGV2YWx1YXRpbmcgdGhlIGFwcGxpY2F0aW9uIGJ5IGxvb2tpbmcgYXQgPGNvZGU+aW5kZXguaHRtbDwvY29kZT48L3A+XG4gICAgICA8cHJlIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG57YDwhLS0gaW5kZXguaHRtbCAtLT5cbjwhRE9DVFlQRSBodG1sPlxuPGh0bWw+XG48aGVhZD5cbjxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8+XG48bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG48dGl0bGU+RXh0ZW5zaW9uIFJlYWN0IEFwcGxpY2F0aW9uPC90aXRsZT5cbjxsaW5rIGhyZWY9XCIvbm9kZS1tb2R1bGVzL2V4dC1yZWFjdC9jc3MvcmV4dC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG48L2hlYWQ+XG48Ym9keT5cbjxzY3JpcHQgc3JjPVwiYXBwLmpzXCI+PC9zY3JpcHQ+XG48L2JvZHk+XG48L2h0bWw+YH1cbiAgICAgIDwvcHJlPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5UbyBsYXVuY2ggeW91ciBhcHAsIGFkZCB0aGUgZm9sbG93aW5nIHRvIHlvdXIgPGNvZGU+YXBwLmpzPC9jb2RlPiBmaWxlPC9wPlxuICAgICAgPHByZT5cbntgLy8gYXBwLmpzXG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmV4dCBmcm9tICdleHQtcmVhY3QnO1xuaW1wb3J0IFZpZXdwb3J0IGZyb20gJy4vY29tcG9uZW50cy92aWV3cG9ydC92aWV3cG9ydCc7XG5cblJleHQuYXBwbGljYXRpb24oe1xuICBsYXVuY2g6ICgpID0+IDxWaWV3cG9ydCAvPlxufSk7YH1cbiAgICAgIDwvcHJlPlxuICAgIDwvQ29udGFpbmVyPlxuICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgSGFzaFJvdXRlciwgTGluayB9IGZyb20gJ34vcmV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZXdwb3J0KCkge1xuICByZXR1cm4gPENvbnRhaW5lcj5cbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPjxoMT5FeHRlbnNpb24gUmVhY3Q8L2gxPjwvaGVhZGVyPlxuICAgIDxDb250YWluZXIgbGF5b3V0PVwiY29sdW1uXCI+XG4gICAgICA8YXNpZGUgc3R5bGU9e3t3aWR0aDozMDB9fT5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhciBuYXZcIj5cbiAgICAgICAgICA8bGk+PExpbmsgdG89XCIvXCIgdGV4dD1cIkdFVFRJTkcgU1RBUlRFRFwiIC8+PC9saT5cbiAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwibmF2LXRleHRcIj5DT1JFIENPTkNFUFRTPC9zcGFuPjwvbGk+XG4gICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL2NvcmUtY29uY2VwdHMvY29tcG9uZW50XCIgdGV4dD1cIkNvbXBvbmVudFwiIC8+PC9saT5cbiAgICAgICAgICA8bGk+PExpbmsgdG89XCIvY29yZS1jb25jZXB0cy9kYXRhLXBhY2thZ2VcIiB0ZXh0PVwiRGF0YSBQYWNrYWdlXCIgLz48L2xpPlxuICAgICAgICAgIDxsaT48TGluayB0bz1cIi9jb3JlLWNvbmNlcHRzL3NjcmVlbi1uYXZpZ2F0aW9uXCIgdGV4dD1cIlNjcmVlbiBOYXZpZ2F0aW9uXCIgLz48L2xpPlxuICAgICAgICAgIDxsaT48TGluayB0bz1cIi9hcmNoaXRlY3R1cmVcIiB0ZXh0PVwiQVJDSElURUNUVVJFXCIgLz48L2xpPlxuICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJuYXYtdGV4dFwiPlVJIENPTVBPTkVOVFM8L3NwYW4+PC9saT5cbiAgICAgICAgICA8bGk+PExpbmsgdG89XCIvdWktY29tcG9uZW50cy9ncmlkc1wiIHRleHQ9XCJHcmlkc1wiIC8+PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvYXNpZGU+XG4gICAgICA8Q29udGFpbmVyPjxIYXNoUm91dGVyIC8+PC9Db250YWluZXI+XG4gICAgPC9Db250YWluZXI+XG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJjb250YWluZXJcIj48cD4mY29weTsgMjAxNyBodXl0cm9uZ25ndXllbjwvcD48L2Zvb3Rlcj5cbiAgPC9Db250YWluZXI+XG4gIC8vIHJldHVybiA8Q29udGFpbmVyIGxheW91dD1cImNvbHVtblwiPlxuICAvLyAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwibmF2XCIgc3R5bGU9e3t3aWR0aDozMDB9fT5cbiAgLy8gICAgIDxoZWFkZXI+XG4gIC8vICAgICAgIDxoMSBjbGFzc05hbWU9XCJicmFuZFwiPkV4dGVuc2lvbiBSZWFjdDwvaDE+XG4gIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG4gIC8vICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXItYXV0b1wiPlxuICAvLyAgICAgICAgIDwvdWw+XG4gIC8vICAgICAgIDwvZGl2PlxuICAvLyAgICAgPC9oZWFkZXI+XG4gIC8vICAgICA8bmF2IGNsYXNzTmFtZT1cIm1iLWF1dG8gZC1mbGV4XCI+XG4gICAgICAgIFxuICAvLyAgICAgPC9uYXY+XG4gIC8vICAgICA8Zm9vdGVyPlxuICAvLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi10ZXh0XCI+JmNvcHk7IDIwMTcgaHV5dHJvbmduZ3V5ZW48L2Rpdj5cbiAgLy8gICAgIDwvZm9vdGVyPlxuICAvLyAgIDwvQ29udGFpbmVyPlxuICAvLyAgIDxDb250YWluZXI+XG4gIC8vICAgICA8SGFzaFJvdXRlciAvPlxuICAvLyAgIDwvQ29udGFpbmVyPlxuICAvLyA8L0NvbnRhaW5lcj5cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEV4dCBmcm9tICd+L2NvcmUvZXh0JztcblxuY29uc3QgTEFZT1VUX0NMQVNTID0ge1xuICAnY29sdW1uJzogJ2ZsZXgtcm93JyxcbiAgJ3Jvdyc6ICdmbGV4LWNvbHVtbicsXG4gICdmaXQnOiAnJyxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENvbnRhaW5lcih7IGNsYXNzTmFtZSA9ICcnLCBsYXlvdXQgPSAncm93JywgY2hpbGRyZW4sIC4uLm90aGVycyB9KSB7XG4gIHJldHVybiA8c2VjdGlvbiBjbGFzc05hbWU9e0V4dC5jbGFzc05hbWUoJ2QtZmxleCcsIExBWU9VVF9DTEFTU1tsYXlvdXRdLCBjbGFzc05hbWUpfSB7Li4ub3RoZXJzfT57Y2hpbGRyZW59PC9zZWN0aW9uPlxufSIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IEV4dCBmcm9tICd+L2NvcmUvZXh0JztcbmltcG9ydCBMaXN0IGZyb20gJ34vY29yZS9saXN0Jztcbi8vIGltcG9ydCBPYnNlcnZhYmxlIGZyb20gJ34vcmVhY3RpdmUvb2JzZXJ2YWJsZSc7XG5cbmNvbnN0IFJPVVRFUyA9IHt9LFxuICAgICAgZ2V0Um91dGUgPSAoKSA9PiB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSkgfHwgJy8nLFxuICAgICAgZ2V0Um91dGVQYXRoID0gcm91dGUgPT4gcm91dGUuc3BsaXQoJy8nKTtcblxuZXhwb3J0IGZ1bmN0aW9uIFJvdXRlKHJvdXRlKSB7XG4gIHJldHVybiBjb21wID0+IHtcbiAgICBST1VURVNbcm91dGVdID0ge1xuICAgICAgcm91dGUsXG4gICAgICBjb21wLFxuICAgICAgcGF0aDogZ2V0Um91dGVQYXRoKHJvdXRlKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gTGluayh7IHRvLCBjbGFzc05hbWUgPSAnJywgYWN0aXZlQ2xhc3NOYW1lID0gJ2FjdGl2ZScsIHRleHQsIGNoaWxkcmVuLCAuLi5vdGhlcnMgfSkge1xuICByZXR1cm4gPGEgaHJlZj17YCMke3RvfWB9IGNsYXNzTmFtZT17RXh0LmNsYXNzTmFtZSgnbmF2LWxpbmsnLCBjbGFzc05hbWUsIHsgW2FjdGl2ZUNsYXNzTmFtZV06IHRvID09PSBnZXRSb3V0ZSgpIH0pfSB7Li4ub3RoZXJzfT5cbiAgICB7dGV4dCB8fCBjaGlsZHJlbn1cbiAgPC9hPlxufVxuXG5leHBvcnQgY2xhc3MgSGFzaFJvdXRlciBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBFeHQuaW5pdGlhbFN0YXRlKHRoaXMsIG1hdGNoUGF0aCgpKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICghd2luZG93LmxvY2F0aW9uLmhhc2gpICYmICh3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcvJyk7XG4gICAgT2JzZXJ2YWJsZS5mcm9tRXZlbnQod2luZG93LCAnaGFzaGNoYW5nZScpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnNldFN0YXRlKG1hdGNoUGF0aCgpKSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZSwgY29tcCwgcGFyYW1zIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKCFjb21wKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdDb21wb25lbnQgbm90IGZvdW5kIScpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29tcCwgeyByb3V0ZSwgcGFyYW1zIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hdGNoUGF0aCgpIHtcbiAgY29uc3QgcGFyYW1zID0ge30sXG4gICAgICAgIGN1cnJlbnRSb3V0ZSA9IGdldFJvdXRlKCk7XG5cbiAgLy8gYmFzaWMgcm91dGUgKHdpdGhvdXQgcGFyYW1zKVxuICBpZiAoUk9VVEVTW2N1cnJlbnRSb3V0ZV0pIHtcbiAgICByZXR1cm4geyByb3V0ZTogY3VycmVudFJvdXRlLCBjb21wOiBST1VURVNbY3VycmVudFJvdXRlXS5jb21wLCBwYXJhbXMgfTtcbiAgfVxuXG4gIC8vIGFkdmFuY2VkIHJvdXRlICh3aXRoIHBhcmFtcylcbiAgY29uc3QgY3VycmVudFBhdGggPSBnZXRSb3V0ZVBhdGgoY3VycmVudFJvdXRlKTtcbiAgZm9yKGxldCByb3V0ZSBpbiBST1VURVMpIHtcbiAgICBjb25zdCBtYXBSb3V0ZSA9IFJPVVRFU1tyb3V0ZV0sXG4gICAgICAgICAgcm91dGVQYXRoID0gbWFwUm91dGUucGF0aDtcblxuICAgIGxldCBtYXRjaGVkID0gdHJ1ZTtcbiAgICBMaXN0KG1hcFJvdXRlLnBhdGgpLmVhY2goKHJvdXRlTmFtZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChyb3V0ZU5hbWUgIT09IGN1cnJlbnRQYXRoW2luZGV4XSkge1xuICAgICAgICBpZiAocm91dGVOYW1lLnN0YXJ0c1dpdGgoJzonKSkgeyAvLyBkZXRlY3QgcGFyYW0gdmFsdWVcbiAgICAgICAgICBwYXJhbXNbcm91dGVOYW1lLnN1YnN0cmluZygxKV0gPSBjdXJyZW50UGF0aFtpbmRleF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWF0Y2hlZCA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKG1hdGNoZWQpIHtcbiAgICAgIHJldHVybiB7IHJvdXRlOiBjdXJyZW50Um91dGUsIGNvbXA6IG1hcFJvdXRlLmNvbXAsIHBhcmFtcyB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIHdpdGggbm90IGZvdW5kIHNjcmVlblxuICBpZiAoUk9VVEVTWycqJ10pIHtcbiAgICByZXR1cm4geyByb3V0ZTogY3VycmVudFJvdXRlLCBjb21wOiBST1VURVNbJyonXS5jb21wLCBwYXJhbXMgfTtcbiAgfVxuXG4gIC8vIHdpdGhvdXQgbm90IGZvdW5kIHNjcmVlblxuICByZXR1cm4geyByb3V0ZTogY3VycmVudFJvdXRlLCBjb21wOiBudWxsLCBwYXJhbXMgfTtcbn0iLCJpbXBvcnQgTGlzdCBmcm9tICcuL2xpc3QnO1xuXG5leHBvcnQgY2xhc3MgRGljdGlvbmFyeSB7XG4gIGNvbnN0cnVjdG9yKGtleVZhbHVlcykge1xuICAgIHRoaXMuZGF0YSA9IHt9O1xuICAgIGlmIChrZXlWYWx1ZXMgJiYga2V5VmFsdWVzLmxlbmd0aCkge1xuICAgICAgdGhpcy5kYXRhID0gT2JqZWN0LmFzc2lnbih7fSwga2V5VmFsdWVzKTtcbiAgICB9XG5cbiAgICB0aGlzLmtleXMgPSAoKSA9PiBMaXN0KE9iamVjdC5rZXlzKHRoaXMuZGF0YSkpO1xuICAgIHRoaXMudmFsdWVzID0gKCkgPT4gTGlzdChPYmplY3QudmFsdWVzKHRoaXMuZGF0YSkpO1xuICB9XG5cbiAgZWFjaChpdGVyYXRlZSkge1xuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmRhdGEpIHtcbiAgICAgIGl0ZXJhdGVlKHRoaXMuZGF0YVtrZXldLCBrZXksIHRoaXMuZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChrZXlWYWx1ZXMpID0+IG5ldyBEaWN0aW9uYXJ5KGtleVZhbHVlcyk7IiwiaW1wb3J0IHsgTGlzdCB9IGZyb20gJy4vbGlzdCc7XG5cbmNsYXNzIERPTSBleHRlbmRzIExpc3Qge1xuICBzaG93KCkge1xuICAgIHRoaXMuc2VsZWN0b3JzLmVhY2goc2VsZWN0b3IgPT4gc2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jaycpO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLnNlbGVjdG9ycy5lYWNoKHNlbGVjdG9yID0+IHNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScpO1xuICB9XG5cbiAgLy8gcGFyZW50KCkge1xuICAvLyAgIHRoaXMuY29tcCA9IHRoaXMuY29tcC5wYXJlbnRFbGVtZW50O1xuICAvLyAgIHJldHVybiB0aGlzO1xuICAvLyB9XG5cbiAgLy8gd2lkdGgoKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMuY29tcC5jbGllbnRXaWR0aDtcbiAgLy8gfVxuXG4gIC8vIGhlaWdodCgpIHtcbiAgLy8gICByZXR1cm4gdGhpcy5jb21wLmNsaWVudEhlaWdodDtcbiAgLy8gfVxuXG4gIC8vIGZpbmQoc2VsZWN0b3IpIHtcbiAgLy8gICByZXR1cm4gdGhpcy5jb21wLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAvLyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChzZWxlY3RvcikgPT4gbmV3IERPTShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7IiwiaW1wb3J0IERPTSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgU3RyaW5nIGZyb20gJy4vc3RyaW5nJztcbmltcG9ydCBMaXN0IGZyb20gJy4vbGlzdCc7XG5pbXBvcnQgRGljdGlvbmFyeSBmcm9tICcuL2RpY3Rpb25hcnknO1xuXG5leHBvcnQgY2xhc3MgRXh0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gdGhpcy5TQ1JPTExfV0lEVEggPSB0aGlzLmdldFNjcm9sbFdpZHRoKCk7XG4gICAgLy8gdGhpcy5CT1JERVJfV0lEVEggPSAyO1xuICAgIC8vIHRoaXMuQ0hFQ0tfQ09MVU1OX1dJRFRIID0gMzM7XG4gICAgLy8gdGhpcy5VTktOT1dOX0VSUk9SX01TRyA9ICdBbiB1bmtub3duIGVycm9yIGhhcyBvY2N1cnJlZC4nO1xuICAgIC8vIHRoaXMuWEhSID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICB0aGlzLmlzUHJpbWl0aXZlID0gdmFsdWUgPT4geyBjb25zdCB0eXBlID0gdHlwZW9mIHZhbHVlOyByZXR1cm4gdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZSA9PT0gJ251bWJlcicgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nOyB9XG4gICAgdGhpcy5pc1N0cmluZyA9IHZhbHVlID0+ICh0eXBlb2YgdmFsdWUpID09PSAnc3RyaW5nJztcbiAgICB0aGlzLmlzRnVuY3Rpb24gPSB2YWx1ZSA9PiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICB0aGlzLmlzT2JqZWN0ID0gdmFsdWUgPT4gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xuICAgIHRoaXMuaXNBcnJheSA9IHZhbHVlID0+IHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nO1xuXG4gICAgLy8gdGhpcy5jbG9uZSA9IG9iaiA9PiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpOyAvLyBkZWVwIGNsb25lXG5cbiAgICAvLyB0aGlzLkRPTSA9IERPTTtcbiAgICAvLyB0aGlzLlN0cmluZyA9IFN0cmluZztcbiAgICAvLyB0aGlzLkxpc3QgPSBMaXN0O1xuICAgIC8vIHRoaXMuTWFwID0gRGljdGlvbmFyeTtcbiAgICAvLyB0aGlzLlByb3ZpZGVyID0gbmV3IERpY3Rpb25hcnkoKTtcbiAgfVxuXG4gIC8vIGV4dGVuZCgpIHtcbiAgLy8gICByZXR1cm4gT2JqZWN0LmFzc2lnbi5hcHBseShudWxsLCBhcmd1bWVudHMpOyAvLyBpbW11dGFibGUgb2JqZWN0XG4gIC8vIH1cblxuICBpbml0aWFsU3RhdGUoY29tcCwgc3RhdGUpIHtcbiAgICBpZiAoIWNvbXAgfHwgIXN0YXRlKSB7IHJldHVybjsgfVxuICAgIGNvbXAuc3RhdGUgPSBzdGF0ZTtcbiAgICBmb3IgKGxldCBmaWVsZCBvZiBPYmplY3Qua2V5cyhzdGF0ZSkpIHtcbiAgICAgIGNvbXBbYHNldCR7U3RyaW5nLmNhcGl0YWxpemUoZmllbGQpfWBdID0gdmFsdWUgPT4gY29tcC5zZXRTdGF0ZSh7IFtmaWVsZF06IHZhbHVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNsYXNzTmFtZSguLi5leHByZXNzaW9ucykge1xuICAgIGNvbnN0IGNscyA9IFtdO1xuXG4gICAgTGlzdChleHByZXNzaW9ucykuZWFjaChleHAgPT4ge1xuICAgICAgaWYgKCFleHApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGV4cCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY2xzLnB1c2goZXhwKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc09iamVjdChleHApKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBleHApIHtcbiAgICAgICAgICBpZiAoZXhwW2tleV0gPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNscy5wdXNoKGtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGNscy5qb2luKCcgJyk7XG4gIH1cblxuICAvLyNyZWdpb24gRE9NXG4gIGNyZWF0ZUVsZW1lbnQoaHRtbCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5pbm5lckhUTUwgPSBodG1sO1xuICAgIHJldHVybiBkaXYuY2hpbGRyZW5bMF07XG4gIH1cblxuICAvLyBnZXRFbChzZWxlY3Rvcikge1xuICAvLyAgIHJldHVybiBET00oc2VsZWN0b3IpO1xuICAvLyB9XG5cbiAgLy8gZ2V0U2Nyb2xsV2lkdGgoKSB7XG4gIC8vICAgY29uc3Qgb3V0ZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJzxkaXYgc3R5bGU9XCJ2aXNpYmlsaXR5OiBoaWRkZW47IHdpZHRoOiAxMDBweDsgb3ZlcmZsb3c6IHNjcm9sbDtcIj48L2Rpdj4nKTtcbiAgLy8gICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG91dGVyKTtcbiAgLy8gICBjb25zdCB3aWR0aE5vU2Nyb2xsID0gb3V0ZXIub2Zmc2V0V2lkdGg7XG5cbiAgLy8gICAvLyBhZGQgaW5uZXJkaXZcbiAgLy8gICBjb25zdCBpbm5lciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnPGRpdiBzdHlsZT1cIndpZHRoOiAxMDAlO1wiPjwvZGl2PicpO1xuICAvLyAgIG91dGVyLmFwcGVuZENoaWxkKGlubmVyKTtcbiAgLy8gICBjb25zdCB3aWR0aFdpdGhTY3JvbGwgPSBpbm5lci5vZmZzZXRXaWR0aDtcblxuICAvLyAgIC8vIHJlbW92ZSBkaXZzXG4gIC8vICAgb3V0ZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvdXRlcik7XG5cbiAgLy8gICByZXR1cm4gd2lkdGhOb1Njcm9sbCAtIHdpZHRoV2l0aFNjcm9sbDtcbiAgLy8gfVxuICAvLyNlbmRyZWdpb25cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEV4dCgpO1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gYmluZCh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpIHtcbi8vICAgY29uc3QgZm4gPSBkZXNjcmlwdG9yLnZhbHVlO1xuXG4vLyAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbi8vICAgICB0aHJvdyBuZXcgRXJyb3IoYEBiaW5kIGRlY29yYXRvciBpcyBvbmx5IGFwcGxpZWQgdG8gZnVuY3Rpb25zIG5vdDogJHt0eXBlb2YgZm59YCk7XG4vLyAgIH1cblxuLy8gICByZXR1cm4ge1xuLy8gICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbi8vICAgICBnZXQoKSB7XG4vLyAgICAgICByZXR1cm4gZm4uYmluZCh0aGlzKTtcbi8vICAgICB9XG4vLyAgIH07XG4vLyB9XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0ID0gNTAwKSB7XG4vLyAgIGxldCB0aW1lb3V0O1xuLy8gICByZXR1cm4gZnVuY3Rpb24oKSB7XG4vLyAgICAgY29uc3QgY29udGV4dCA9IHRoaXMsXG4vLyAgICAgICAgICAgYXJncyA9IGFyZ3VtZW50cyxcbi8vICAgICAgICAgICBsYXRlciA9IGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbi8vICAgICAgICAgICB9XG5cbi8vICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4vLyAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuLy8gICB9XG4vLyB9IiwiZXhwb3J0IGNsYXNzIExpc3Qge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZGF0YSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMuY29sbGVjdCA9ICgpID0+IHRoaXMuZGF0YTtcbiAgICB0aGlzLmNvdW50ID0gKCkgPT4gdGhpcy5kYXRhLmxlbmd0aDtcbiAgICB0aGlzLmdldEF0ID0gaW5kZXggPT4gdGhpcy5kYXRhW2luZGV4XTtcbiAgICB0aGlzLmFkZCA9IGl0ZW0gPT4gdGhpcy5kYXRhLnB1c2goaXRlbSk7XG4gICAgdGhpcy5pbnNlcnQgPSAoaXRlbSwgaW5kZXggPSAwKSA9PiB0aGlzLmRhdGEuc3BsaWNlKGluZGV4LCAwLCBpdGVtKTtcbiAgICB0aGlzLnJlbW92ZUF0ID0gKGluZGV4LCBjb3VudCA9IDEpID0+IHRoaXMuZGF0YS5zcGxpY2UoaW5kZXgsIGNvdW50KTtcbiAgICB0aGlzLmpvaW4gPSBzZXBhcmF0b3IgPT4gdGhpcy5kYXRhLmpvaW4oc2VwYXJhdG9yKTtcbiAgfVxuXG4gIGVhY2goaXRlcmF0ZWUpIHtcbiAgICBmb3IgKGxldCBpbmRleCBpbiB0aGlzLmRhdGEpIHtcbiAgICAgIGl0ZXJhdGVlKHRoaXMuZGF0YVtpbmRleF0sIGluZGV4LCB0aGlzLmRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGZpbHRlcihwcmVkaWNhdGUpIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICB0aGlzLmVhY2goKGl0ZW0sIGluZGV4LCBhcnJheSkgPT4ge1xuICAgICAgaWYgKHByZWRpY2F0ZShpdGVtLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBuZXcgTGlzdChyZXN1bHQpO1xuICB9XG5cbiAgbWFwKGl0ZXJhdGVlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgdGhpcy5lYWNoKChpdGVtLCBpbmRleCwgYXJyYXkpID0+IHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpdGVtLCBpbmRleCwgYXJyYXkpKTtcbiAgICByZXR1cm4gbmV3IExpc3QocmVzdWx0KTtcbiAgfVxuXG4gIHJlZHVjZShpdGVyYXRlZSwgYWNjdW11bGF0b3IpIHtcbiAgICB0aGlzLmVhY2goKGl0ZW0sIGluZGV4LCBhcnJheSkgPT4gYWNjdW11bGF0b3IgPSBpdGVyYXRlZShhY2N1bXVsYXRvciwgaXRlbSwgaW5kZXgsIGFycmF5KSk7XG4gICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICB9XG5cbiAgZmluZEluZGV4KHByZWRpY2F0ZSkge1xuICAgIGxldCBpbmRleCA9IC0xO1xuICAgIGZvciAobGV0IGlkeCA9IDAsIGl0ZW07IChpdGVtID0gdGhpcy5kYXRhW2lkeF0pICE9IG51bGw7ICsraWR4KSB7XG4gICAgICBpZiAocHJlZGljYXRlKGl0ZW0sIGlkeCwgdGhpcy5kYXRhKSkge1xuICAgICAgICBpbmRleCA9IGlkeDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIGZpbmQocHJlZGljYXRlKSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5maW5kSW5kZXgocHJlZGljYXRlKTtcbiAgICByZXR1cm4gaW5kZXggPiAtMSA/IHRoaXMuZGF0YVtpbmRleF0gOiBudWxsO1xuICB9XG5cbiAgY29udGFpbnMocHJlZGljYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMuZmluZChwcmVkaWNhdGUpICE9PSBudWxsO1xuICB9XG5cbiAgcmVtb3ZlSWYocHJlZGljYXRlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgdGhpcy5lYWNoKChpdGVtLCBpbmRleCwgYXJyYXkpID0+IHtcbiAgICAgIGlmICghcHJlZGljYXRlKGl0ZW0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5kYXRhID0gcmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh2YWx1ZSkgPT4gbmV3IExpc3QodmFsdWUpOyIsImNsYXNzIFN0cmluZyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FwaXRhbGl6ZSA9IHZhbHVlID0+IHZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSk7XG4gIH1cblxuICBodG1sRW5jb2RlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoLyYvZywgJyZhbXA7JylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csICcmIzM5OycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbiAgfVxuXG4gIGh0bWxEZWNvZGUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvJmFtcDsvZywgJycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLyZsdDsvZywgJzwnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8mZ3Q7Pi9nLCAnPicpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLyYjMzk7L2csIFwiJ1wiKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8mcXVvdDsvZywgJ1wiJyk7XG4gIH1cblxuICB0b1F1ZXJ5U3RyaW5nKHBhcmFtcywgc2VwLCBlbmNvZGUpIHtcbiAgICBzZXAgICAgPSBzZXAgPT09IHVuZGVmaW5lZCA/ICcmJyA6IHNlcDtcbiAgICBlbmNvZGUgPSBlbmNvZGUgPT09IGZhbHNlID8gZnVuY3Rpb24ocykgeyByZXR1cm4gczsgfSA6IGVuY29kZVVSSUNvbXBvbmVudDtcblxuICAgIGxldCBwYWlycyA9IFtdO1xuICAgIGZvciAobGV0IGtleSBpbiBwYXJhbXMpIHtcbiAgICAgIHBhaXJzLnB1c2goYCR7a2V5fT0ke2VuY29kZShwYXJhbXNba2V5XSl9YCk7XG4gICAgfVxuICAgIHJldHVybiBwYWlycy5qb2luKHNlcCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFN0cmluZygpOyIsImltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBFeHQgfSBmcm9tICcuL2NvcmUvZXh0JztcblxuY2xhc3MgUmV4dCBleHRlbmRzIEV4dCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgLy8gdGhpcy5DYWNoZSA9IHJlcXVpcmUoJy4vZGF0YS9jYWNoZScpO1xuICAgIC8vIHRoaXMuTW9kZWwgPSByZXF1aXJlKCcuL2RhdGEvbW9kZWwnKTtcbiAgICAvLyB0aGlzLk9ic2VydmFibGUgPSByZXF1aXJlKCcuL3JlYWN0aXZlL29ic2VydmFibGUnKTtcbiAgICAvLyB0aGlzLkRpYWxvZ01hbmFnZXIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvZGlhbG9nJyk7XG4gIH1cblxuICBhc3luYyBhcHBsaWNhdGlvbih7IGxhdW5jaCB9KSB7XG4gICAgaWYgKGxhdW5jaCkge1xuICAgICAgY29uc3Qgcm9vdCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnPGRpdiBpZD1cInJlYWN0LXJvb3RcIj48L2Rpdj4nKSxcbiAgICAgICAgICAgIHZpZXdwb3J0ID0gYXdhaXQgbGF1bmNoKCk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJvb3QpO1xuICAgICAgcmVuZGVyKHZpZXdwb3J0LCByb290KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFJleHQoKTtcblxuLy8jcmVnaW9uIENvbXBvbmVudFxuZXhwb3J0IHsgSGFzaFJvdXRlciwgTGluayB9IGZyb20gJy4vY29tcG9uZW50cy9yb3V0ZXInO1xuZXhwb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRhaW5lcic7XG4vLyBleHBvcnQgeyBCdXR0b24sIEJ1dHRvbkxpbmssIEZpZWxkLCBUZXh0RmllbGQsIENoZWNrYm94LCBUZXh0QXJlYSB9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtJztcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgR3JpZCB9IGZyb20gJy4vY29tcG9uZW50cy9ncmlkJztcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgTGlzdFZpZXcgfSBmcm9tICcuL2NvbXBvbmVudHMvbGlzdCc7XG4vLyBleHBvcnQgeyBEaWFsb2cgfSBmcm9tICcuL2NvbXBvbmVudHMvZGlhbG9nJztcbi8vI2VuZHJlZ2lvblxuXG4vLyNyZWdpb24gRGVjb3JhdG9yIChvciBIaWdoZXIgT3JkZXIgRnVuY3Rpb24gb3IgSGlnaGVyIE9yZGVyIENvbXBvbmVudClcbmV4cG9ydCB7IGJpbmQgfSBmcm9tICcuL2NvcmUvZXh0JztcbmV4cG9ydCB7IFJvdXRlIH0gZnJvbSAnLi9jb21wb25lbnRzL3JvdXRlcic7XG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIENvbXBvbmVudCB9IGZyb20gJy4vYXBwL2NvbXBvbmVudCc7XG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIFNlcnZpY2UgfSBmcm9tICcuL2FwcC9zZXJ2aWNlJztcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgU3RvcmUgfSBmcm9tICcuL2RhdGEvc3RvcmUnO1xuLy8jZW5kcmVnaW9uIl19
