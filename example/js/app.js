(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

var _list = require('../core/list');

var _list2 = _interopRequireDefault(_list);

var _map = require('../core/map');

var _map2 = _interopRequireDefault(_map);

var _observable = require('../mixin/observable');

var _observable2 = _interopRequireDefault(_observable);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _asyncToGenerator(fn) {
  return function () {
    var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);var value = info.value;
        } catch (error) {
          reject(error);return;
        }if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }return step("next");
    });
  };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

exports.default = function (config) {
  return function (comp) {
    var WrappedComponent = config.view;
    return function (_Component) {
      _inherits(_class, _Component);

      function _class(props) {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

        _this.state = _defineProperty({
          stores: {}
        }, config.componentAs || 'vm', new comp());
        return _this;
      }

      _createClass(_class, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
          var _this2 = this;

          var stores = _list2.default.of(config.stores).reduce(function (stores, store) {
            store.subscribe(_this2.onDataChanged.bind(_this2));
            stores[store.storeId] = store;
            return stores;
          }, {});
          this.setState(function () {
            return { stores: stores };
          });
        }
      }, {
        key: 'componentDidMount',
        value: function () {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
            var stores, storeId;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    stores = this.state.stores;
                    _context.t0 = regeneratorRuntime.keys(stores);

                  case 2:
                    if ((_context.t1 = _context.t0()).done) {
                      _context.next = 9;
                      break;
                    }

                    storeId = _context.t1.value;

                    if (!stores[storeId].autoLoad) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 7;
                    return stores[storeId].load();

                  case 7:
                    _context.next = 2;
                    break;

                  case 9:
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

          _map2.default.of(this.state.store).each(function (storeId, store) {
            store.unsubscribe(_this3.onDataChanged);
          });
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(WrappedComponent, _extends({}, this.state, this.props));
        }
      }, {
        key: 'onDataChanged',
        value: function onDataChanged(store) {
          var stores = this.state.stores;

          stores[store.storeId] = store;
          this.setState(function () {
            return { stores: stores };
          });
        }
      }]);

      return _class;
    }(_react.Component);
  };
};

},{"../core/ext":7,"../core/list":8,"../core/map":9,"../mixin/observable":15,"react":"react"}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (Service) {
  return new Service();
};

},{}],3:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Container = function (_Component) {
  _inherits(Container, _Component);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
  }

  _createClass(Container, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$className = _props.className,
          className = _props$className === undefined ? '' : _props$className,
          hbox = _props.hbox,
          children = _props.children,
          others = _objectWithoutProperties(_props, ['className', 'hbox', 'children']);

      return _react2.default.createElement('section', _extends({ className: 'd-flex flex-' + (hbox ? 'row' : 'column') + ' ' + className }, others), children);
    }
  }]);

  return Container;
}(_react.Component);

exports.default = Container;

},{"react":"react"}],4:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Field = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Field = exports.Field = function (_Component) {
  _inherits(Field, _Component);

  function Field(props) {
    _classCallCheck(this, Field);

    var _this = _possibleConstructorReturn(this, (Field.__proto__ || Object.getPrototypeOf(Field)).call(this, props));

    _this.state = {
      value: props.value || ''
    };
    return _this;
  }

  _createClass(Field, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var value = this.state.value,
          _props = this.props,
          _props$className = _props.className,
          className = _props$className === undefined ? '' : _props$className,
          onChange = _props.onChange,
          onKeyPress = _props.onKeyPress,
          others = _objectWithoutProperties(_props, ['className', 'onChange', 'onKeyPress']);

      return _react2.default.createElement('input', _extends({ type: 'text', value: value, className: 'form-control ' + className,
        onChange: function onChange(e) {
          return _this2.onChange(e.target.value);
        }
      }, others));
    }
  }, {
    key: 'onChange',
    value: function onChange(value) {
      this.setState(function () {
        return { value: value };
      });
    }
  }]);

  return Field;
}(_react.Component);

},{"react":"react"}],5:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _container = require('./container');

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Grid = function (_Component) {
  _inherits(Grid, _Component);

  function Grid() {
    _classCallCheck(this, Grid);

    return _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).apply(this, arguments));
  }

  _createClass(Grid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_container2.default, null);
    }
  }]);

  return Grid;
}(_react.Component);

exports.default = Grid;

},{"./container":3,"react":"react"}],6:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = exports.HashRouter = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _list = require('../core/list');

var _list2 = _interopRequireDefault(_list);

var _observable = require('../mixin/observable');

var _observable2 = _interopRequireDefault(_observable);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ROUTES = {},
    getRoute = function getRoute() {
  return window.location.hash.substring(1) || '/';
},
    getRoutePath = function getRoutePath(route) {
  return route.split('/');
},
    isParam = function isParam(routeName) {
  return routeName.startsWith(':');
},
    matchPath = function matchPath() {
  var currentRoute = getRoute(),
      params = {};

  if (ROUTES[currentRoute]) {
    return { route: currentRoute, component: ROUTES[currentRoute].component, params: params };
  }

  var currentPath = getRoutePath(currentRoute);
  for (var key in ROUTES) {
    var route = ROUTES[key],
        routePath = route.path;
    var matched = true;
    _list2.default.of(routePath).each(function (routeName, index) {
      if (routeName !== currentPath[index]) {
        if (isParam(routeName)) {
          params[routeName.substring(1)] = currentPath[index];
        } else {
          matched = false;
          return;
        }
      }
    });
    if (matched) {
      return { route: currentRoute, component: route.component, params: params };
    }
  }

  if (ROUTES['*']) {
    return { route: currentRoute, component: ROUTES['*'].component, params: params };
  }

  return { route: currentRoute, component: null, params: params };
};

var HashRouter = exports.HashRouter = function (_Component) {
  _inherits(HashRouter, _Component);

  function HashRouter(props) {
    _classCallCheck(this, HashRouter);

    var _this = _possibleConstructorReturn(this, (HashRouter.__proto__ || Object.getPrototypeOf(HashRouter)).call(this, props));

    _this.state = matchPath();
    return _this;
  }

  _createClass(HashRouter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _observable2.default.fromEvent(window, 'hashchange').subscribe(function () {
        return _this2.setState(function () {
          return matchPath();
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          route = _state.route,
          component = _state.component,
          params = _state.params;

      if (!component) {
        console.error('component props should not be null');
        return null;
      }

      return _react2.default.createElement(component, { route: route, params: params });
    }
  }]);

  return HashRouter;
}(_react.Component);

var Link = exports.Link = function (_Component2) {
  _inherits(Link, _Component2);

  function Link(props) {
    _classCallCheck(this, Link);

    var _this3 = _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, props));

    _this3.state = matchPath();
    return _this3;
  }

  _createClass(Link, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this4 = this;

      _observable2.default.fromEvent(window, 'hashchange').subscribe(function () {
        return _this4.setState(function () {
          return matchPath();
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state2 = this.state,
          route = _state2.route,
          component = _state2.component,
          params = _state2.params,
          _props = this.props,
          to = _props.to,
          className = _props.className,
          _props$activeClassNam = _props.activeClassName,
          activeClassName = _props$activeClassNam === undefined ? 'active' : _props$activeClassNam,
          others = _objectWithoutProperties(_props, ['to', 'className', 'activeClassName']);

      return _react2.default.createElement('a', _extends({ href: '#' + to, className: to === getRoute() ? [className, activeClassName].join(' ') : className }, others));
    }
  }]);

  return Link;
}(_react.Component);

exports.default = function (route) {
  return function (component) {
    ROUTES[route] = {
      route: route,
      component: component,
      path: getRoutePath(route)
    };
  };
};

},{"../core/list":8,"../mixin/observable":15,"react":"react"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Ext = function () {
  function Ext() {
    _classCallCheck(this, Ext);
  }

  _createClass(Ext, [{
    key: 'getById',
    value: function getById(id) {
      return document.getElementById(id);
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

    /**
     * Returns `true` if the passed value is a JavaScript Function, `false` otherwise.
     * @param {Object} value The value to test.
     * @return {Boolean}
     * @method
     */

  }, {
    key: 'isFunction',
    value: function isFunction(value) {
      return !!value && typeof value === 'function';
    }
  }]);

  return Ext;
}();

exports.default = new Ext();

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var EMPTY_LIST = [];

var List = function () {
  function List(value) {
    _classCallCheck(this, List);

    this.array = EMPTY_LIST;
    if (value && value.length) {
      this.array = value;
    }
    return this;
  }

  _createClass(List, [{
    key: "collect",
    value: function collect() {
      return this.array;
    }
  }, {
    key: "each",
    value: function each(iteratee) {
      for (var index = 0, item; (item = this.array[index]) != null; ++index) {
        iteratee(item, index, this.array);
      }
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
  }], [{
    key: "of",
    value: function of(value) {
      return new List(value);
    }
  }]);

  return List;
}();

exports.default = List;

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var EMPTY_MAP = {};

var Map = function () {
  function Map(keyValues) {
    _classCallCheck(this, Map);

    this.map = EMPTY_MAP;
    if (keyValues && keyValues.length) {
      this.map = Object.assign({}, keyValues);
    }
    return this;
  }

  _createClass(Map, [{
    key: 'each',
    value: function each(iteratee) {
      for (var key in this.map) {
        iteratee(key, this.map[key], this.map);
      }
      return this;
    }
  }, {
    key: 'keys',
    value: function keys() {
      return _list2.default.of(Object.keys(this.map));
    }
  }, {
    key: 'values',
    value: function values() {
      return _list2.default.of(Object.values(this.map));
    }
  }], [{
    key: 'of',
    value: function of(keyValues) {
      return new Map(keyValues);
    }
  }]);

  return Map;
}();

exports.default = Map;

},{"./list":8}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var String = function () {
  function String() {
    _classCallCheck(this, String);
  }

  _createClass(String, [{
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

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _string = require('../core/string');

var _string2 = _interopRequireDefault(_string);

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _asyncToGenerator(fn) {
  return function () {
    var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);var value = info.value;
        } catch (error) {
          reject(error);return;
        }if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }return step("next");
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Ajax = function () {
  function Ajax() {
    _classCallCheck(this, Ajax);

    _ext2.default.extend(Ajax.prototype, {
      xhr: new XMLHttpRequest(),
      ajaxBefore: function ajaxBefore() {/* to be implemented */},
      ajaxError: function ajaxError(error) {/* to be implemented */},
      ajaxComplete: function ajaxComplete() {/* to be implemented */},
      BASE_URL: null
    });
  }

  _createClass(Ajax, [{
    key: 'request',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(_ref2) {
        var url = _ref2.url,
            _ref2$method = _ref2.method,
            method = _ref2$method === undefined ? 'get' : _ref2$method,
            params = _ref2.params,
            next = _ref2.next,
            error = _ref2.error,
            complete = _ref2.complete;
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                this.ajaxBefore();
                _context.next = 4;
                return this.promise({ url: url, method: method, params: params });

              case 4:
                response = _context.sent;
                return _context.abrupt('return', next ? next(response) : response);

              case 8:
                _context.prev = 8;
                _context.t0 = _context['catch'](0);

                console.error('Cannot get response from server for url [' + url + '] caused by: ' + _context.t0);
                this.ajaxError(_context.t0);
                error && error(_context.t0);
                return _context.abrupt('return', null);

              case 14:
                _context.prev = 14;

                this.ajaxComplete();
                complete && complete();
                return _context.finish(14);

              case 18:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8, 14, 18]]);
      }));

      function request(_x) {
        return _ref.apply(this, arguments);
      }

      return request;
    }()
  }, {
    key: 'promise',
    value: function promise(settings) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.createRequest(settings, function (err, res) {
          if (err) {
            reject(err);
            return;
          }
          resolve(res);
        });
      });
    }
  }, {
    key: 'createRequest',
    value: function createRequest(_ref3, done) {
      var url = _ref3.url,
          method = _ref3.method,
          params = _ref3.params;

      this.BASE_URL && (url = this.BASE_URL + '/' + url)(method === 'get' && params !== null) && (url = url + '?' + _string2.default.toQueryString(params));
      var xhr = this.xhr;
      xhr.open(method, url, true);
      xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            done(null, JSON.parse(xhr.responseText));
          } else {
            try {
              done(JSON.parse(xhr.responseText));
            } catch (e) {
              done(xhr.responseText);
            }
          }
        }
      };
      xhr.send(params !== null ? JSON.stringify(params) : null);
    }
  }]);

  return Ajax;
}();

exports.default = new Ajax();

},{"../core/ext":7,"../core/string":10}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

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
        return localStorage.getItem(key) || undefined;
      } else {
        return this._cache[key] || undefined;
      }
    }
  }, {
    key: 'set',
    value: function set(key, value) {
      if (this.hasLocalStorage()) {
        localStorage.setItem(key, value);
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

},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Model = function () {
  function Model(data) {
    _classCallCheck(this, Model);

    this.phantom = _ext2.default.extend({}, data);
    this.data = {};
  }

  _createClass(Model, [{
    key: 'set',
    value: function set(fieldName, newValue) {
      this.data[fieldName] = newValue;
    }
  }]);

  return Model;
}();

exports.default = Model;

},{"../core/ext":7}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

var _list = require('../core/list');

var _list2 = _interopRequireDefault(_list);

var _observable = require('../mixin/observable');

var _observable2 = _interopRequireDefault(_observable);

var _ajax = require('./ajax');

var _ajax2 = _interopRequireDefault(_ajax);

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _asyncToGenerator(fn) {
  return function () {
    var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);var value = info.value;
        } catch (error) {
          reject(error);return;
        }if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }return step("next");
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

exports.default = function (config) {
  var DataStore = function () {
    function DataStore() {
      _classCallCheck(this, DataStore);

      _ext2.default.extend(DataStore.prototype, config, {
        data: [],
        observable: _observable2.default.create(),
        modifiedRecords: {}
      });
    }

    _createClass(DataStore, [{
      key: 'subscribe',
      value: function subscribe(observer) {
        this.observable.subscribe(observer);
      }
    }, {
      key: 'unsubscribe',
      value: function unsubscribe(observer) {
        this.observable.unsubscribe(observer);
      }
    }, {
      key: 'removeAll',
      value: function removeAll() {
        this.data = [];
      }
    }, {
      key: 'loadData',
      value: function loadData(data) {
        this.data = this.proxy.reader && this.proxy.reader.rootProperty ? data[this.proxy.reader.rootProperty] : data;
        if (this.pageSize) {
          this.page = data;
        }
        this.observable.call(this);
      }
    }, {
      key: 'load',
      value: function () {
        var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(proxy) {
          var response;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _ajax2.default.request(proxy || this.proxy);

                case 2:
                  response = _context.sent;

                  response && this.loadData(response);
                  return _context.abrupt('return', this);

                case 5:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function load(_x) {
          return _ref.apply(this, arguments);
        }

        return load;
      }()
    }, {
      key: 'loadPage',
      value: function loadPage(page) {
        var proxy = _ext2.default.extend({}, this.proxy, { url: this.proxy.url + '?page=' + page });
        return load(proxy);
      }
    }, {
      key: 'commitChanges',
      value: function commitChanges() {
        this.modifiedRecords = {};
        this.observable.call(this);
      }
    }, {
      key: 'updateRecord',
      value: function updateRecord(record, fieldName, newValue) {
        !this.modifiedRecords[record.id] && (this.modifiedRecords[record.id] = new _model2.default(record));
        var modifiedRecord = this.modifiedRecords[record.id];
        modifiedRecord.set(fieldName, newValue);
        record[fieldName] = newValue;
        this.observable.call(this);
      }
    }, {
      key: 'rejectChanges',
      value: function rejectChanges() {
        var _this = this;

        _list2.default.of(this.data).each(function (record, index, data) {
          if (_this.modifiedRecords[record.id]) {
            data[index] = _ext2.default.extend({}, _this.modifiedRecords[record.id].phantom);
          }
        });
        this.commitChanges();
      }
    }]);

    return DataStore;
  }();

  return new DataStore();
};

},{"../core/ext":7,"../core/list":8,"../mixin/observable":15,"./ajax":11,"./model":13}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

var _list = require('../core/list');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var EventObservable = function () {
  function EventObservable(target, eventName) {
    _classCallCheck(this, EventObservable);

    _ext2.default.extend(EventObservable.prototype, {
      target: target,
      eventName: eventName
    });
    return this;
  }

  _createClass(EventObservable, [{
    key: 'subscribe',
    value: function subscribe(subscriber) {
      this.target.addEventListener(this.eventName, subscriber);
    }
  }]);

  return EventObservable;
}();

var Observable = function () {
  function Observable() {
    _classCallCheck(this, Observable);

    this.observers = [];
    return this;
  }

  _createClass(Observable, [{
    key: 'subscribe',
    value: function subscribe(observer) {
      this.observers.push(observer);
    }
  }, {
    key: 'unsubscribe',
    value: function unsubscribe(observer) {
      _list2.default.of(this.observers).each(function (value, index, observers) {
        return value === observer && delete observers[index];
      });
    }
  }, {
    key: 'call',
    value: function call() {
      var _this = this;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _list2.default.of(this.observers).each(function (observer) {
        return observer.apply(_this, args);
      });
    }
  }], [{
    key: 'create',
    value: function create() {
      return new Observable();
    }
  }, {
    key: 'fromEvent',
    value: function fromEvent(target, eventName) {
      return new EventObservable(target, eventName);
    }
  }]);

  return Observable;
}();

exports.default = Observable;

},{"../core/ext":7,"../core/list":8}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Field = exports.Grid = exports.Container = exports.Link = exports.HashRouter = exports.Route = exports.Observable = exports.Component = exports.Service = exports.Model = exports.Store = exports.Cache = exports.Ajax = exports.Map = exports.List = exports.String = undefined;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

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

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _ext = require('./core/ext');

var _ext2 = _interopRequireDefault(_ext);

var _list2 = _interopRequireDefault(_list);

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _asyncToGenerator(fn) {
  return function () {
    var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);var value = info.value;
        } catch (error) {
          reject(error);return;
        }if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }return step("next");
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Rext = function () {
  function Rext() {
    _classCallCheck(this, Rext);

    this.extend = _ext2.default.extend;
    this.ajax = function (settings) {
      return _ajax2.default.request(settings);
    };
  }

  _createClass(Rext, [{
    key: 'launch',
    value: function launch(viewport) {
      if (!window.location.hash) {
        window.location.hash = '/';
      }

      var root = _ext2.default.createElement('<div id="react-root"></div>');
      document.body.appendChild(root);
      _ext2.default.isFunction(viewport) && (viewport = viewport());
      (0, _reactDom.render)(viewport, root);
    }
  }, {
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
                console.log('This is deprecated function, please use Rext.launch instead.');
                if (!window.location.hash) {
                  window.location.hash = '/';
                }

                _context.next = 4;
                return launch();

              case 4:

                (0, _reactDom.render)(_react2.default.createElement(viewport, {}), _ext2.default.getById(selector));

              case 5:
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

},{"./app/component":1,"./app/service":2,"./components/container":3,"./components/form":4,"./components/grid":5,"./components/router":6,"./core/ext":7,"./core/list":8,"./core/map":9,"./core/string":10,"./data/ajax":11,"./data/cache":12,"./data/store":14,"./mixin/observable":15,"babel-polyfill":"babel-polyfill","react":"react","react-dom":"react-dom"}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _dec2, _class;

var _rext = require('../../../../../dist/rext');

var _dashboard = require('./dashboard.view');

var _dashboard2 = _interopRequireDefault(_dashboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dashboard = (_dec = (0, _rext.Route)('/'), _dec2 = (0, _rext.Component)({
  view: _dashboard2.default,
  componentAs: 'Dashboard'
}), _dec(_class = _dec2(_class = function Dashboard() {
  _classCallCheck(this, Dashboard);

  this.title = 'Dashboard';
}) || _class) || _class);
exports.default = Dashboard;

},{"../../../../../dist/rext":16,"./dashboard.view":18}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rext = require('../../../../../dist/rext');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dashboard = function (_Component) {
  _inherits(Dashboard, _Component);

  function Dashboard() {
    _classCallCheck(this, Dashboard);

    return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).apply(this, arguments));
  }

  _createClass(Dashboard, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _rext.Container,
        { className: 'panel-body' },
        _react2.default.createElement(
          'h1',
          null,
          this.props.Dashboard.title
        )
      );
    }
  }]);

  return Dashboard;
}(_react.Component);

exports.default = Dashboard;

},{"../../../../../dist/rext":16,"react":"react"}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rext = require('../../../../../dist/rext');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotFound = (_dec = (0, _rext.Route)('*'), _dec(_class = function (_Component) {
  _inherits(NotFound, _Component);

  function NotFound() {
    _classCallCheck(this, NotFound);

    return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));
  }

  _createClass(NotFound, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _rext.Container,
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Not Found'
        )
      );
    }
  }]);

  return NotFound;
}(_react.Component)) || _class);
exports.default = NotFound;

},{"../../../../../dist/rext":16,"react":"react"}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rext = require('../../../../../dist/rext');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchForm = function (_Component) {
  _inherits(SearchForm, _Component);

  function SearchForm() {
    _classCallCheck(this, SearchForm);

    return _possibleConstructorReturn(this, (SearchForm.__proto__ || Object.getPrototypeOf(SearchForm)).apply(this, arguments));
  }

  _createClass(SearchForm, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { className: 'form-group form-inline' },
        _react2.default.createElement(_rext.Field, null)
      );
    }
  }]);

  return SearchForm;
}(_react.Component);

exports.default = SearchForm;

},{"../../../../../dist/rext":16,"react":"react"}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rext = require('../../../../../dist/rext');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchResult = function (_Component) {
  _inherits(SearchResult, _Component);

  function SearchResult() {
    _classCallCheck(this, SearchResult);

    return _possibleConstructorReturn(this, (SearchResult.__proto__ || Object.getPrototypeOf(SearchResult)).apply(this, arguments));
  }

  _createClass(SearchResult, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_rext.Grid, null);
    }
  }]);

  return SearchResult;
}(_react.Component);

exports.default = SearchResult;

},{"../../../../../dist/rext":16,"react":"react"}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rext = require('../../../../../dist/rext');

var _searchForm = require('./search-form');

var _searchForm2 = _interopRequireDefault(_searchForm);

var _searchResult = require('./search-result');

var _searchResult2 = _interopRequireDefault(_searchResult);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = (_dec = (0, _rext.Route)('/search'), _dec(_class = function (_Component) {
  _inherits(Search, _Component);

  function Search() {
    _classCallCheck(this, Search);

    return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
  }

  _createClass(Search, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _rext.Container,
        { className: 'panel-body' },
        _react2.default.createElement(
          'h1',
          null,
          'Search'
        ),
        _react2.default.createElement(_searchForm2.default, null),
        _react2.default.createElement(_searchResult2.default, null)
      );
    }
  }]);

  return Search;
}(_react.Component)) || _class);
exports.default = Search;

},{"../../../../../dist/rext":16,"./search-form":20,"./search-result":21,"react":"react"}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "footer",
        null,
        _react2.default.createElement(
          "div",
          { className: "row text-center" },
          "\xA9 2017 huytrongnguyen"
        )
      );
    }
  }]);

  return Footer;
}(_react.Component);

exports.default = Footer;

},{"react":"react"}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rext = require('../../../../../dist/rext');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'div',
          { className: 'brand' },
          'React CMS'
        ),
        _react2.default.createElement(
          'div',
          { className: 'navbar' },
          _react2.default.createElement(
            'ul',
            { className: 'navbar-nav mr-auto' },
            _react2.default.createElement(
              _rext.Link,
              { to: '/', className: 'nav-item' },
              'Dashboard'
            ),
            _react2.default.createElement(
              _rext.Link,
              { to: '/search', className: 'nav-item' },
              'Search'
            ),
            _react2.default.createElement(
              _rext.Link,
              { to: '/reporting', className: 'nav-item' },
              'Reporting'
            ),
            _react2.default.createElement(
              _rext.Link,
              { to: '/admin', className: 'nav-item' },
              'Administration'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            'Hello, ',
            _react2.default.createElement(
              'strong',
              null,
              'huytrongnguyen'
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

},{"../../../../../dist/rext":16,"react":"react"}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      var others = _objectWithoutProperties(this.props, []);

      return _react2.default.createElement('nav', others);
    }
  }]);

  return Footer;
}(_react.Component);

exports.default = Footer;

},{"react":"react"}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('aside', { style: { width: 100 } });
    }
  }]);

  return Footer;
}(_react.Component);

exports.default = Footer;

},{"react":"react"}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rext = require('../../../../../dist/rext');

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _side = require('./side');

var _side2 = _interopRequireDefault(_side);

var _nav = require('./nav');

var _nav2 = _interopRequireDefault(_nav);

var _footer = require('./footer');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Viewport = function (_Component) {
  _inherits(Viewport, _Component);

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
        _react2.default.createElement(_header2.default, null),
        _react2.default.createElement(
          _rext.Container,
          { hbox: true },
          _react2.default.createElement(
            _rext.Container,
            { id: 'main-container' },
            _react2.default.createElement(_nav2.default, null),
            _react2.default.createElement(_rext.HashRouter, null)
          )
        ),
        _react2.default.createElement(_footer2.default, null)
      );
    }
  }]);

  return Viewport;
}(_react.Component);

exports.default = Viewport;

},{"../../../../../dist/rext":16,"./footer":23,"./header":24,"./nav":25,"./side":26,"react":"react"}],28:[function(require,module,exports){
'use strict';

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rext = require('../../../dist/rext');

var _rext2 = _interopRequireDefault(_rext);

var _common = require('./services/common');

var _common2 = _interopRequireDefault(_common);

var _viewport = require('./components/viewport/viewport');

var _viewport2 = _interopRequireDefault(_viewport);

var _dashboard = require('./components/dashboard/dashboard');

var _dashboard2 = _interopRequireDefault(_dashboard);

var _search = require('./components/search/search');

var _search2 = _interopRequireDefault(_search);

var _notfound = require('./components/notfound/notfound');

var _notfound2 = _interopRequireDefault(_notfound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_rext2.default.launch(function () {
  _common2.default.initApp();
  return _react2.default.createElement(_viewport2.default, null);
});

},{"../../../dist/rext":16,"./components/dashboard/dashboard":17,"./components/notfound/notfound":19,"./components/search/search":22,"./components/viewport/viewport":27,"./services/common":29,"babel-polyfill":"babel-polyfill","react":"react"}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _rext = require('../../../../dist/rext');

var _rext2 = _interopRequireDefault(_rext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommonService = (0, _rext.Service)(_class = function () {
  function CommonService() {
    _classCallCheck(this, CommonService);
  }

  _createClass(CommonService, [{
    key: 'initApp',
    value: function initApp() {
      console.log('App Init!!!');
    }
  }]);

  return CommonService;
}()) || _class;

exports.default = CommonService;

},{"../../../../dist/rext":16}]},{},[28])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkaXN0L2FwcC9jb21wb25lbnQuanMiLCJkaXN0L2FwcC9zZXJ2aWNlLmpzIiwiZGlzdC9jb21wb25lbnRzL2NvbnRhaW5lci5qcyIsImRpc3QvY29tcG9uZW50cy9mb3JtLmpzIiwiZGlzdC9jb21wb25lbnRzL2dyaWQuanMiLCJkaXN0L2NvbXBvbmVudHMvcm91dGVyLmpzIiwiZGlzdC9jb3JlL2V4dC5qcyIsImRpc3QvY29yZS9saXN0LmpzIiwiZGlzdC9jb3JlL21hcC5qcyIsImRpc3QvY29yZS9zdHJpbmcuanMiLCJkaXN0L2RhdGEvYWpheC5qcyIsImRpc3QvZGF0YS9jYWNoZS5qcyIsImRpc3QvZGF0YS9tb2RlbC5qcyIsImRpc3QvZGF0YS9zdG9yZS5qcyIsImRpc3QvbWl4aW4vb2JzZXJ2YWJsZS5qcyIsImRpc3QvcmV4dC5qcyIsImV4YW1wbGUvanMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5qcyIsImV4YW1wbGUvanMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC52aWV3LmpzeCIsImV4YW1wbGUvanMvYXBwL2NvbXBvbmVudHMvbm90Zm91bmQvbm90Zm91bmQuanN4IiwiZXhhbXBsZS9qcy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLWZvcm0uanN4IiwiZXhhbXBsZS9qcy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLXJlc3VsdC5qc3giLCJleGFtcGxlL2pzL2FwcC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guanN4IiwiZXhhbXBsZS9qcy9hcHAvY29tcG9uZW50cy92aWV3cG9ydC9mb290ZXIuanN4IiwiZXhhbXBsZS9qcy9hcHAvY29tcG9uZW50cy92aWV3cG9ydC9oZWFkZXIuanN4IiwiZXhhbXBsZS9qcy9hcHAvY29tcG9uZW50cy92aWV3cG9ydC9uYXYuanN4IiwiZXhhbXBsZS9qcy9hcHAvY29tcG9uZW50cy92aWV3cG9ydC9zaWRlLmpzeCIsImV4YW1wbGUvanMvYXBwL2NvbXBvbmVudHMvdmlld3BvcnQvdmlld3BvcnQuanN4IiwiZXhhbXBsZS9qcy9hcHAvbWFpbi5qcyIsImV4YW1wbGUvanMvYXBwL3NlcnZpY2VzL2NvbW1vbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7O0FBRUEsT0FBTyxjQUFQLENBQXNCLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQzNDLFNBQU87QUFEb0MsQ0FBN0M7O0FBSUEsSUFBSSxXQUFXLE9BQU8sTUFBUCxJQUFpQixVQUFVLE1BQVYsRUFBa0I7QUFBRSxPQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksVUFBVSxNQUE5QixFQUFzQyxHQUF0QyxFQUEyQztBQUFFLFFBQUksU0FBUyxVQUFVLENBQVYsQ0FBYixDQUEyQixLQUFLLElBQUksR0FBVCxJQUFnQixNQUFoQixFQUF3QjtBQUFFLFVBQUksT0FBTyxTQUFQLENBQWlCLGNBQWpCLENBQWdDLElBQWhDLENBQXFDLE1BQXJDLEVBQTZDLEdBQTdDLENBQUosRUFBdUQ7QUFBRSxlQUFPLEdBQVAsSUFBYyxPQUFPLEdBQVAsQ0FBZDtBQUE0QjtBQUFFO0FBQUUsR0FBQyxPQUFPLE1BQVA7QUFBZ0IsQ0FBaFE7O0FBRUEsSUFBSSxlQUFlLFlBQVk7QUFBRSxXQUFTLGdCQUFULENBQTBCLE1BQTFCLEVBQWtDLEtBQWxDLEVBQXlDO0FBQUUsU0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLE1BQU0sTUFBMUIsRUFBa0MsR0FBbEMsRUFBdUM7QUFBRSxVQUFJLGFBQWEsTUFBTSxDQUFOLENBQWpCLENBQTJCLFdBQVcsVUFBWCxHQUF3QixXQUFXLFVBQVgsSUFBeUIsS0FBakQsQ0FBd0QsV0FBVyxZQUFYLEdBQTBCLElBQTFCLENBQWdDLElBQUksV0FBVyxVQUFmLEVBQTJCLFdBQVcsUUFBWCxHQUFzQixJQUF0QixDQUE0QixPQUFPLGNBQVAsQ0FBc0IsTUFBdEIsRUFBOEIsV0FBVyxH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Q0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCLFE7Ozs7Ozs7Ozs7OzZCQUNWO0FBQ1AsYUFBTztBQUFBO0FBQUE7QUFDTCw2REFESztBQUVMO0FBQUE7QUFBQSxZQUFXLFVBQVg7QUFDRTtBQUFBO0FBQUEsY0FBVyxJQUFHLGdCQUFkO0FBQ0UsOERBREY7QUFFRTtBQUZGO0FBREYsU0FGSztBQVFMO0FBUkssT0FBUDtBQVVEOzs7Ozs7a0JBWmtCLFE7Ozs7O0FDUHJCOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxlQUFLLE1BQUwsQ0FBWSxZQUFNO0FBQ2hCLG1CQUFjLE9BQWQ7QUFDQSxTQUFPLHVEQUFQO0FBQ0QsQ0FIRDs7Ozs7Ozs7Ozs7Ozs7QUNUQTs7Ozs7Ozs7SUFHcUIsYTs7Ozs7Ozs4QkFDVDtBQUNSLGNBQVEsR0FBUixDQUFZLGFBQVo7QUFDRDs7Ozs7O2tCQUhrQixhIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2V4dCA9IHJlcXVpcmUoJy4uL2NvcmUvZXh0Jyk7XG5cbnZhciBfZXh0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dCk7XG5cbnZhciBfbGlzdCA9IHJlcXVpcmUoJy4uL2NvcmUvbGlzdCcpO1xuXG52YXIgX2xpc3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGlzdCk7XG5cbnZhciBfbWFwID0gcmVxdWlyZSgnLi4vY29yZS9tYXAnKTtcblxudmFyIF9tYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFwKTtcblxudmFyIF9vYnNlcnZhYmxlID0gcmVxdWlyZSgnLi4vbWl4aW4vb2JzZXJ2YWJsZScpO1xuXG52YXIgX29ic2VydmFibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JzZXJ2YWJsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHZhciBnZW4gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyBmdW5jdGlvbiBzdGVwKGtleSwgYXJnKSB7IHRyeSB7IHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTsgdmFyIHZhbHVlID0gaW5mby52YWx1ZTsgfSBjYXRjaCAoZXJyb3IpIHsgcmVqZWN0KGVycm9yKTsgcmV0dXJuOyB9IGlmIChpbmZvLmRvbmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0gZWxzZSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7IHN0ZXAoXCJuZXh0XCIsIHZhbHVlKTsgfSwgZnVuY3Rpb24gKGVycikgeyBzdGVwKFwidGhyb3dcIiwgZXJyKTsgfSk7IH0gfSByZXR1cm4gc3RlcChcIm5leHRcIik7IH0pOyB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICByZXR1cm4gZnVuY3Rpb24gKGNvbXApIHtcbiAgICB2YXIgV3JhcHBlZENvbXBvbmVudCA9IGNvbmZpZy52aWV3O1xuICAgIHJldHVybiBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgICAgX2luaGVyaXRzKF9jbGFzcywgX0NvbXBvbmVudCk7XG5cbiAgICAgIGZ1bmN0aW9uIF9jbGFzcyhwcm9wcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgX2NsYXNzKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX2NsYXNzLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoX2NsYXNzKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICAgIF90aGlzLnN0YXRlID0gX2RlZmluZVByb3BlcnR5KHtcbiAgICAgICAgICBzdG9yZXM6IHt9XG4gICAgICAgIH0sIGNvbmZpZy5jb21wb25lbnRBcyB8fCAndm0nLCBuZXcgY29tcCgpKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgfVxuXG4gICAgICBfY3JlYXRlQ2xhc3MoX2NsYXNzLCBbe1xuICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsTW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgdmFyIHN0b3JlcyA9IF9saXN0Mi5kZWZhdWx0Lm9mKGNvbmZpZy5zdG9yZXMpLnJlZHVjZShmdW5jdGlvbiAoc3RvcmVzLCBzdG9yZSkge1xuICAgICAgICAgICAgc3RvcmUuc3Vic2NyaWJlKF90aGlzMi5vbkRhdGFDaGFuZ2VkLmJpbmQoX3RoaXMyKSk7XG4gICAgICAgICAgICBzdG9yZXNbc3RvcmUuc3RvcmVJZF0gPSBzdG9yZTtcbiAgICAgICAgICAgIHJldHVybiBzdG9yZXM7XG4gICAgICAgICAgfSwge30pO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3RvcmVzOiBzdG9yZXMgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIF9yZWYgPSBfYXN5bmNUb0dlbmVyYXRvcihyZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlKCkge1xuICAgICAgICAgICAgdmFyIHN0b3Jlcywgc3RvcmVJZDtcbiAgICAgICAgICAgIHJldHVybiByZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVzID0gdGhpcy5zdGF0ZS5zdG9yZXM7XG4gICAgICAgICAgICAgICAgICAgIF9jb250ZXh0LnQwID0gcmVnZW5lcmF0b3JSdW50aW1lLmtleXMoc3RvcmVzKTtcblxuICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBpZiAoKF9jb250ZXh0LnQxID0gX2NvbnRleHQudDAoKSkuZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA5O1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgc3RvcmVJZCA9IF9jb250ZXh0LnQxLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghc3RvcmVzW3N0b3JlSWRdLmF1dG9Mb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDc7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0b3Jlc1tzdG9yZUlkXS5sb2FkKCk7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgX2NhbGxlZSwgdGhpcyk7XG4gICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3JlZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb21wb25lbnREaWRNb3VudDtcbiAgICAgICAgfSgpXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgX21hcDIuZGVmYXVsdC5vZih0aGlzLnN0YXRlLnN0b3JlKS5lYWNoKGZ1bmN0aW9uIChzdG9yZUlkLCBzdG9yZSkge1xuICAgICAgICAgICAgc3RvcmUudW5zdWJzY3JpYmUoX3RoaXMzLm9uRGF0YUNoYW5nZWQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFdyYXBwZWRDb21wb25lbnQsIF9leHRlbmRzKHt9LCB0aGlzLnN0YXRlLCB0aGlzLnByb3BzKSk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnb25EYXRhQ2hhbmdlZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbkRhdGFDaGFuZ2VkKHN0b3JlKSB7XG4gICAgICAgICAgdmFyIHN0b3JlcyA9IHRoaXMuc3RhdGUuc3RvcmVzO1xuXG4gICAgICAgICAgc3RvcmVzW3N0b3JlLnN0b3JlSWRdID0gc3RvcmU7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdG9yZXM6IHN0b3JlcyB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBfY2xhc3M7XG4gICAgfShfcmVhY3QuQ29tcG9uZW50KTtcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChTZXJ2aWNlKSB7XG4gIHJldHVybiBuZXcgU2VydmljZSgpO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDb250YWluZXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQ29udGFpbmVyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDb250YWluZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKENvbnRhaW5lci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENvbnRhaW5lcikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENvbnRhaW5lciwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBfcHJvcHMkY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMkY2xhc3NOYW1lID09PSB1bmRlZmluZWQgPyAnJyA6IF9wcm9wcyRjbGFzc05hbWUsXG4gICAgICAgICAgaGJveCA9IF9wcm9wcy5oYm94LFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIG90aGVycyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnY2xhc3NOYW1lJywgJ2hib3gnLCAnY2hpbGRyZW4nXSk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NlY3Rpb24nLFxuICAgICAgICBfZXh0ZW5kcyh7IGNsYXNzTmFtZTogJ2QtZmxleCBmbGV4LScgKyAoaGJveCA/ICdyb3cnIDogJ2NvbHVtbicpICsgJyAnICsgY2xhc3NOYW1lIH0sIG90aGVycyksXG4gICAgICAgIGNoaWxkcmVuXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDb250YWluZXI7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDb250YWluZXI7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5GaWVsZCA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIEZpZWxkID0gZXhwb3J0cy5GaWVsZCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhGaWVsZCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRmllbGQocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRmllbGQpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEZpZWxkLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRmllbGQpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiBwcm9wcy52YWx1ZSB8fCAnJ1xuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEZpZWxkLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlLFxuICAgICAgICAgIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgX3Byb3BzJGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzJGNsYXNzTmFtZSA9PT0gdW5kZWZpbmVkID8gJycgOiBfcHJvcHMkY2xhc3NOYW1lLFxuICAgICAgICAgIG9uQ2hhbmdlID0gX3Byb3BzLm9uQ2hhbmdlLFxuICAgICAgICAgIG9uS2V5UHJlc3MgPSBfcHJvcHMub25LZXlQcmVzcyxcbiAgICAgICAgICBvdGhlcnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2NsYXNzTmFtZScsICdvbkNoYW5nZScsICdvbktleVByZXNzJ10pO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgX2V4dGVuZHMoeyB0eXBlOiAndGV4dCcsIHZhbHVlOiB2YWx1ZSwgY2xhc3NOYW1lOiAnZm9ybS1jb250cm9sICcgKyBjbGFzc05hbWUsXG4gICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShlKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5vbkNoYW5nZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sIG90aGVycykpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uQ2hhbmdlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4geyB2YWx1ZTogdmFsdWUgfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBGaWVsZDtcbn0oX3JlYWN0LkNvbXBvbmVudCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY29udGFpbmVyID0gcmVxdWlyZSgnLi9jb250YWluZXInKTtcblxudmFyIF9jb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29udGFpbmVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgR3JpZCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhHcmlkLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBHcmlkKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBHcmlkKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoR3JpZC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEdyaWQpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhHcmlkLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfY29udGFpbmVyMi5kZWZhdWx0LCBudWxsKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gR3JpZDtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEdyaWQ7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5MaW5rID0gZXhwb3J0cy5IYXNoUm91dGVyID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfbGlzdCA9IHJlcXVpcmUoJy4uL2NvcmUvbGlzdCcpO1xuXG52YXIgX2xpc3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGlzdCk7XG5cbnZhciBfb2JzZXJ2YWJsZSA9IHJlcXVpcmUoJy4uL21peGluL29ic2VydmFibGUnKTtcblxudmFyIF9vYnNlcnZhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29ic2VydmFibGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFJPVVRFUyA9IHt9LFxuICAgIGdldFJvdXRlID0gZnVuY3Rpb24gZ2V0Um91dGUoKSB7XG4gIHJldHVybiB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSkgfHwgJy8nO1xufSxcbiAgICBnZXRSb3V0ZVBhdGggPSBmdW5jdGlvbiBnZXRSb3V0ZVBhdGgocm91dGUpIHtcbiAgcmV0dXJuIHJvdXRlLnNwbGl0KCcvJyk7XG59LFxuICAgIGlzUGFyYW0gPSBmdW5jdGlvbiBpc1BhcmFtKHJvdXRlTmFtZSkge1xuICByZXR1cm4gcm91dGVOYW1lLnN0YXJ0c1dpdGgoJzonKTtcbn0sXG4gICAgbWF0Y2hQYXRoID0gZnVuY3Rpb24gbWF0Y2hQYXRoKCkge1xuICB2YXIgY3VycmVudFJvdXRlID0gZ2V0Um91dGUoKSxcbiAgICAgIHBhcmFtcyA9IHt9O1xuXG4gIGlmIChST1VURVNbY3VycmVudFJvdXRlXSkge1xuICAgIHJldHVybiB7IHJvdXRlOiBjdXJyZW50Um91dGUsIGNvbXBvbmVudDogUk9VVEVTW2N1cnJlbnRSb3V0ZV0uY29tcG9uZW50LCBwYXJhbXM6IHBhcmFtcyB9O1xuICB9XG5cbiAgdmFyIGN1cnJlbnRQYXRoID0gZ2V0Um91dGVQYXRoKGN1cnJlbnRSb3V0ZSk7XG4gIGZvciAodmFyIGtleSBpbiBST1VURVMpIHtcbiAgICB2YXIgcm91dGUgPSBST1VURVNba2V5XSxcbiAgICAgICAgcm91dGVQYXRoID0gcm91dGUucGF0aDtcbiAgICB2YXIgbWF0Y2hlZCA9IHRydWU7XG4gICAgX2xpc3QyLmRlZmF1bHQub2Yocm91dGVQYXRoKS5lYWNoKGZ1bmN0aW9uIChyb3V0ZU5hbWUsIGluZGV4KSB7XG4gICAgICBpZiAocm91dGVOYW1lICE9PSBjdXJyZW50UGF0aFtpbmRleF0pIHtcbiAgICAgICAgaWYgKGlzUGFyYW0ocm91dGVOYW1lKSkge1xuICAgICAgICAgIHBhcmFtc1tyb3V0ZU5hbWUuc3Vic3RyaW5nKDEpXSA9IGN1cnJlbnRQYXRoW2luZGV4XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtYXRjaGVkID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKG1hdGNoZWQpIHtcbiAgICAgIHJldHVybiB7IHJvdXRlOiBjdXJyZW50Um91dGUsIGNvbXBvbmVudDogcm91dGUuY29tcG9uZW50LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH1cbiAgfVxuXG4gIGlmIChST1VURVNbJyonXSkge1xuICAgIHJldHVybiB7IHJvdXRlOiBjdXJyZW50Um91dGUsIGNvbXBvbmVudDogUk9VVEVTWycqJ10uY29tcG9uZW50LCBwYXJhbXM6IHBhcmFtcyB9O1xuICB9XG5cbiAgcmV0dXJuIHsgcm91dGU6IGN1cnJlbnRSb3V0ZSwgY29tcG9uZW50OiBudWxsLCBwYXJhbXM6IHBhcmFtcyB9O1xufTtcblxudmFyIEhhc2hSb3V0ZXIgPSBleHBvcnRzLkhhc2hSb3V0ZXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoSGFzaFJvdXRlciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gSGFzaFJvdXRlcihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIYXNoUm91dGVyKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChIYXNoUm91dGVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoSGFzaFJvdXRlcikpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzLnN0YXRlID0gbWF0Y2hQYXRoKCk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEhhc2hSb3V0ZXIsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBfb2JzZXJ2YWJsZTIuZGVmYXVsdC5mcm9tRXZlbnQod2luZG93LCAnaGFzaGNoYW5nZScpLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpczIuc2V0U3RhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBtYXRjaFBhdGgoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICByb3V0ZSA9IF9zdGF0ZS5yb3V0ZSxcbiAgICAgICAgICBjb21wb25lbnQgPSBfc3RhdGUuY29tcG9uZW50LFxuICAgICAgICAgIHBhcmFtcyA9IF9zdGF0ZS5wYXJhbXM7XG5cblxuICAgICAgaWYgKCFjb21wb25lbnQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignY29tcG9uZW50IHByb3BzIHNob3VsZCBub3QgYmUgbnVsbCcpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgeyByb3V0ZTogcm91dGUsIHBhcmFtczogcGFyYW1zIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBIYXNoUm91dGVyO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxudmFyIExpbmsgPSBleHBvcnRzLkxpbmsgPSBmdW5jdGlvbiAoX0NvbXBvbmVudDIpIHtcbiAgX2luaGVyaXRzKExpbmssIF9Db21wb25lbnQyKTtcblxuICBmdW5jdGlvbiBMaW5rKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExpbmspO1xuXG4gICAgdmFyIF90aGlzMyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChMaW5rLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTGluaykpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzMy5zdGF0ZSA9IG1hdGNoUGF0aCgpO1xuICAgIHJldHVybiBfdGhpczM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTGluaywgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIF9vYnNlcnZhYmxlMi5kZWZhdWx0LmZyb21FdmVudCh3aW5kb3csICdoYXNoY2hhbmdlJykuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzNC5zZXRTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIG1hdGNoUGF0aCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfc3RhdGUyID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICByb3V0ZSA9IF9zdGF0ZTIucm91dGUsXG4gICAgICAgICAgY29tcG9uZW50ID0gX3N0YXRlMi5jb21wb25lbnQsXG4gICAgICAgICAgcGFyYW1zID0gX3N0YXRlMi5wYXJhbXMsXG4gICAgICAgICAgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICB0byA9IF9wcm9wcy50byxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgIF9wcm9wcyRhY3RpdmVDbGFzc05hbSA9IF9wcm9wcy5hY3RpdmVDbGFzc05hbWUsXG4gICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lID0gX3Byb3BzJGFjdGl2ZUNsYXNzTmFtID09PSB1bmRlZmluZWQgPyAnYWN0aXZlJyA6IF9wcm9wcyRhY3RpdmVDbGFzc05hbSxcbiAgICAgICAgICBvdGhlcnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ3RvJywgJ2NsYXNzTmFtZScsICdhY3RpdmVDbGFzc05hbWUnXSk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnYScsIF9leHRlbmRzKHsgaHJlZjogJyMnICsgdG8sIGNsYXNzTmFtZTogdG8gPT09IGdldFJvdXRlKCkgPyBbY2xhc3NOYW1lLCBhY3RpdmVDbGFzc05hbWVdLmpvaW4oJyAnKSA6IGNsYXNzTmFtZSB9LCBvdGhlcnMpKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTGluaztcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChyb3V0ZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGNvbXBvbmVudCkge1xuICAgIFJPVVRFU1tyb3V0ZV0gPSB7XG4gICAgICByb3V0ZTogcm91dGUsXG4gICAgICBjb21wb25lbnQ6IGNvbXBvbmVudCxcbiAgICAgIHBhdGg6IGdldFJvdXRlUGF0aChyb3V0ZSlcbiAgICB9O1xuICB9O1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBFeHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEV4dCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRXh0KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhFeHQsIFt7XG4gICAga2V5OiAnZ2V0QnlJZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEJ5SWQoaWQpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZXh0ZW5kJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0ZW5kKCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24uYXBwbHkobnVsbCwgYXJndW1lbnRzKTsgLy8gaW1tdXRhYmxlIG9iamVjdFxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NyZWF0ZUVsZW1lbnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KGh0bWwpIHtcbiAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRpdi5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgcmV0dXJuIGRpdi5jaGlsZHJlblswXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGEgSmF2YVNjcmlwdCBGdW5jdGlvbiwgYGZhbHNlYCBvdGhlcndpc2UuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0LlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICogQG1ldGhvZFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdpc0Z1bmN0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBFeHQ7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG5ldyBFeHQoKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEVNUFRZX0xJU1QgPSBbXTtcblxudmFyIExpc3QgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIExpc3QodmFsdWUpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGlzdCk7XG5cbiAgICB0aGlzLmFycmF5ID0gRU1QVFlfTElTVDtcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoKSB7XG4gICAgICB0aGlzLmFycmF5ID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKExpc3QsIFt7XG4gICAga2V5OiBcImNvbGxlY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29sbGVjdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmFycmF5O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJlYWNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVhY2goaXRlcmF0ZWUpIHtcbiAgICAgIGZvciAodmFyIGluZGV4ID0gMCwgaXRlbTsgKGl0ZW0gPSB0aGlzLmFycmF5W2luZGV4XSkgIT0gbnVsbDsgKytpbmRleCkge1xuICAgICAgICBpdGVyYXRlZShpdGVtLCBpbmRleCwgdGhpcy5hcnJheSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm1hcFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtYXAoaXRlcmF0ZWUpIHtcbiAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgsIGFycmF5KSB7XG4gICAgICAgIHJldHVybiByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaXRlbSwgaW5kZXgsIGFycmF5KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ldyBMaXN0KHJlc3VsdCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlZHVjZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZWR1Y2UoaXRlcmF0ZWUsIGFjY3VtdWxhdG9yKSB7XG4gICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4LCBhcnJheSkge1xuICAgICAgICByZXR1cm4gYWNjdW11bGF0b3IgPSBpdGVyYXRlZShhY2N1bXVsYXRvciwgaXRlbSwgaW5kZXgsIGFycmF5KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcIm9mXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9mKHZhbHVlKSB7XG4gICAgICByZXR1cm4gbmV3IExpc3QodmFsdWUpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBMaXN0O1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBMaXN0OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9saXN0ID0gcmVxdWlyZSgnLi9saXN0Jyk7XG5cbnZhciBfbGlzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saXN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEVNUFRZX01BUCA9IHt9O1xuXG52YXIgTWFwID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBNYXAoa2V5VmFsdWVzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hcCk7XG5cbiAgICB0aGlzLm1hcCA9IEVNUFRZX01BUDtcbiAgICBpZiAoa2V5VmFsdWVzICYmIGtleVZhbHVlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubWFwID0gT2JqZWN0LmFzc2lnbih7fSwga2V5VmFsdWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWFwLCBbe1xuICAgIGtleTogJ2VhY2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlYWNoKGl0ZXJhdGVlKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5tYXApIHtcbiAgICAgICAgaXRlcmF0ZWUoa2V5LCB0aGlzLm1hcFtrZXldLCB0aGlzLm1hcCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdrZXlzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24ga2V5cygpIHtcbiAgICAgIHJldHVybiBfbGlzdDIuZGVmYXVsdC5vZihPYmplY3Qua2V5cyh0aGlzLm1hcCkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3ZhbHVlcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlcygpIHtcbiAgICAgIHJldHVybiBfbGlzdDIuZGVmYXVsdC5vZihPYmplY3QudmFsdWVzKHRoaXMubWFwKSk7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6ICdvZicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9mKGtleVZhbHVlcykge1xuICAgICAgcmV0dXJuIG5ldyBNYXAoa2V5VmFsdWVzKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWFwO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBNYXA7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdHJpbmcoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0cmluZyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU3RyaW5nLCBbe1xuICAgIGtleTogJ3RvUXVlcnlTdHJpbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b1F1ZXJ5U3RyaW5nKHBhcmFtcywgc2VwLCBlbmNvZGUpIHtcbiAgICAgIHNlcCA9IHNlcCA9PT0gdW5kZWZpbmVkID8gJyYnIDogc2VwO1xuICAgICAgZW5jb2RlID0gZW5jb2RlID09PSBmYWxzZSA/IGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIHJldHVybiBzO1xuICAgICAgfSA6IGVuY29kZVVSSUNvbXBvbmVudDtcblxuICAgICAgdmFyIHBhaXJzID0gW107XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcGFyYW1zKSB7XG4gICAgICAgIHBhaXJzLnB1c2goa2V5ICsgJz0nICsgZW5jb2RlKHBhcmFtc1trZXldKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcGFpcnMuam9pbihzZXApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTdHJpbmc7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG5ldyBTdHJpbmcoKTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfc3RyaW5nID0gcmVxdWlyZSgnLi4vY29yZS9zdHJpbmcnKTtcblxudmFyIF9zdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RyaW5nKTtcblxudmFyIF9leHQgPSByZXF1aXJlKCcuLi9jb3JlL2V4dCcpO1xuXG52YXIgX2V4dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikgeyByZXR1cm4gZnVuY3Rpb24gKCkgeyB2YXIgZ2VuID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgZnVuY3Rpb24gc3RlcChrZXksIGFyZykgeyB0cnkgeyB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7IHZhciB2YWx1ZSA9IGluZm8udmFsdWU7IH0gY2F0Y2ggKGVycm9yKSB7IHJlamVjdChlcnJvcik7IHJldHVybjsgfSBpZiAoaW5mby5kb25lKSB7IHJlc29sdmUodmFsdWUpOyB9IGVsc2UgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkgeyBzdGVwKFwibmV4dFwiLCB2YWx1ZSk7IH0sIGZ1bmN0aW9uIChlcnIpIHsgc3RlcChcInRocm93XCIsIGVycik7IH0pOyB9IH0gcmV0dXJuIHN0ZXAoXCJuZXh0XCIpOyB9KTsgfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgQWpheCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQWpheCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWpheCk7XG5cbiAgICBfZXh0Mi5kZWZhdWx0LmV4dGVuZChBamF4LnByb3RvdHlwZSwge1xuICAgICAgeGhyOiBuZXcgWE1MSHR0cFJlcXVlc3QoKSxcbiAgICAgIGFqYXhCZWZvcmU6IGZ1bmN0aW9uIGFqYXhCZWZvcmUoKSB7LyogdG8gYmUgaW1wbGVtZW50ZWQgKi99LFxuICAgICAgYWpheEVycm9yOiBmdW5jdGlvbiBhamF4RXJyb3IoZXJyb3IpIHsvKiB0byBiZSBpbXBsZW1lbnRlZCAqL30sXG4gICAgICBhamF4Q29tcGxldGU6IGZ1bmN0aW9uIGFqYXhDb21wbGV0ZSgpIHsvKiB0byBiZSBpbXBsZW1lbnRlZCAqL30sXG4gICAgICBCQVNFX1VSTDogbnVsbFxuICAgIH0pO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEFqYXgsIFt7XG4gICAga2V5OiAncmVxdWVzdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfcmVmID0gX2FzeW5jVG9HZW5lcmF0b3IocmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZShfcmVmMikge1xuICAgICAgICB2YXIgdXJsID0gX3JlZjIudXJsLFxuICAgICAgICAgICAgX3JlZjIkbWV0aG9kID0gX3JlZjIubWV0aG9kLFxuICAgICAgICAgICAgbWV0aG9kID0gX3JlZjIkbWV0aG9kID09PSB1bmRlZmluZWQgPyAnZ2V0JyA6IF9yZWYyJG1ldGhvZCxcbiAgICAgICAgICAgIHBhcmFtcyA9IF9yZWYyLnBhcmFtcyxcbiAgICAgICAgICAgIG5leHQgPSBfcmVmMi5uZXh0LFxuICAgICAgICAgICAgZXJyb3IgPSBfcmVmMi5lcnJvcixcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZjIuY29tcGxldGU7XG4gICAgICAgIHZhciByZXNwb25zZTtcbiAgICAgICAgcmV0dXJuIHJlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSAwO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hamF4QmVmb3JlKCk7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvbWlzZSh7IHVybDogdXJsLCBtZXRob2Q6IG1ldGhvZCwgcGFyYW1zOiBwYXJhbXMgfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2NvbnRleHQuc2VudDtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KCdyZXR1cm4nLCBuZXh0ID8gbmV4dChyZXNwb25zZSkgOiByZXNwb25zZSk7XG5cbiAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSA4O1xuICAgICAgICAgICAgICAgIF9jb250ZXh0LnQwID0gX2NvbnRleHRbJ2NhdGNoJ10oMCk7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDYW5ub3QgZ2V0IHJlc3BvbnNlIGZyb20gc2VydmVyIGZvciB1cmwgWycgKyB1cmwgKyAnXSBjYXVzZWQgYnk6ICcgKyBfY29udGV4dC50MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hamF4RXJyb3IoX2NvbnRleHQudDApO1xuICAgICAgICAgICAgICAgIGVycm9yICYmIGVycm9yKF9jb250ZXh0LnQwKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KCdyZXR1cm4nLCBudWxsKTtcblxuICAgICAgICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSAxNDtcblxuICAgICAgICAgICAgICAgIHRoaXMuYWpheENvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgY29tcGxldGUgJiYgY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuZmluaXNoKDE0KTtcblxuICAgICAgICAgICAgICBjYXNlIDE4OlxuICAgICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlLCB0aGlzLCBbWzAsIDgsIDE0LCAxOF1dKTtcbiAgICAgIH0pKTtcblxuICAgICAgZnVuY3Rpb24gcmVxdWVzdChfeCkge1xuICAgICAgICByZXR1cm4gX3JlZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVxdWVzdDtcbiAgICB9KClcbiAgfSwge1xuICAgIGtleTogJ3Byb21pc2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwcm9taXNlKHNldHRpbmdzKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBfdGhpcy5jcmVhdGVSZXF1ZXN0KHNldHRpbmdzLCBmdW5jdGlvbiAoZXJyLCByZXMpIHtcbiAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NyZWF0ZVJlcXVlc3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVSZXF1ZXN0KF9yZWYzLCBkb25lKSB7XG4gICAgICB2YXIgdXJsID0gX3JlZjMudXJsLFxuICAgICAgICAgIG1ldGhvZCA9IF9yZWYzLm1ldGhvZCxcbiAgICAgICAgICBwYXJhbXMgPSBfcmVmMy5wYXJhbXM7XG5cbiAgICAgIHRoaXMuQkFTRV9VUkwgJiYgKHVybCA9IHRoaXMuQkFTRV9VUkwgKyAnLycgKyB1cmwpKG1ldGhvZCA9PT0gJ2dldCcgJiYgcGFyYW1zICE9PSBudWxsKSAmJiAodXJsID0gdXJsICsgJz8nICsgX3N0cmluZzIuZGVmYXVsdC50b1F1ZXJ5U3RyaW5nKHBhcmFtcykpO1xuICAgICAgdmFyIHhociA9IHRoaXMueGhyO1xuICAgICAgeGhyLm9wZW4obWV0aG9kLCB1cmwsIHRydWUpO1xuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcbiAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICBkb25lKG51bGwsIEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBkb25lKEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICBkb25lKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHhoci5zZW5kKHBhcmFtcyAhPT0gbnVsbCA/IEpTT04uc3RyaW5naWZ5KHBhcmFtcykgOiBudWxsKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQWpheDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gbmV3IEFqYXgoKTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBDYWNoZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ2FjaGUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENhY2hlKTtcblxuICAgIHRoaXMuX2NhY2hlID0ge307XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ2FjaGUsIFt7XG4gICAga2V5OiAnaGFzTG9jYWxTdG9yYWdlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFzTG9jYWxTdG9yYWdlKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuICdsb2NhbFN0b3JhZ2UnIGluIHdpbmRvdyAmJiB3aW5kb3cubG9jYWxTdG9yYWdlICE9PSBudWxsO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgICAgaWYgKHRoaXMuaGFzTG9jYWxTdG9yYWdlKCkpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgfHwgdW5kZWZpbmVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlW2tleV0gfHwgdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG4gICAgICBpZiAodGhpcy5oYXNMb2NhbFN0b3JhZ2UoKSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2NhY2hlW2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW1vdmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoa2V5KSB7XG4gICAgICBpZiAoIWtleSkge1xuICAgICAgICB0aGlzLl9jYWNoZSA9IHt9O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmhhc0xvY2FsU3RvcmFnZSgpKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWxldGUgdGhpcy5fY2FjaGVba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ2FjaGU7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG5ldyBDYWNoZSgpOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9leHQgPSByZXF1aXJlKCcuLi9jb3JlL2V4dCcpO1xuXG52YXIgX2V4dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgTW9kZWwgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE1vZGVsKGRhdGEpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTW9kZWwpO1xuXG4gICAgdGhpcy5waGFudG9tID0gX2V4dDIuZGVmYXVsdC5leHRlbmQoe30sIGRhdGEpO1xuICAgIHRoaXMuZGF0YSA9IHt9O1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1vZGVsLCBbe1xuICAgIGtleTogJ3NldCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChmaWVsZE5hbWUsIG5ld1ZhbHVlKSB7XG4gICAgICB0aGlzLmRhdGFbZmllbGROYW1lXSA9IG5ld1ZhbHVlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNb2RlbDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTW9kZWw7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2V4dCA9IHJlcXVpcmUoJy4uL2NvcmUvZXh0Jyk7XG5cbnZhciBfZXh0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dCk7XG5cbnZhciBfbGlzdCA9IHJlcXVpcmUoJy4uL2NvcmUvbGlzdCcpO1xuXG52YXIgX2xpc3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGlzdCk7XG5cbnZhciBfb2JzZXJ2YWJsZSA9IHJlcXVpcmUoJy4uL21peGluL29ic2VydmFibGUnKTtcblxudmFyIF9vYnNlcnZhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29ic2VydmFibGUpO1xuXG52YXIgX2FqYXggPSByZXF1aXJlKCcuL2FqYXgnKTtcblxudmFyIF9hamF4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FqYXgpO1xuXG52YXIgX21vZGVsID0gcmVxdWlyZSgnLi9tb2RlbCcpO1xuXG52YXIgX21vZGVsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21vZGVsKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgdmFyIGdlbiA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IGZ1bmN0aW9uIHN0ZXAoa2V5LCBhcmcpIHsgdHJ5IHsgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpOyB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlOyB9IGNhdGNoIChlcnJvcikgeyByZWplY3QoZXJyb3IpOyByZXR1cm47IH0gaWYgKGluZm8uZG9uZSkgeyByZXNvbHZlKHZhbHVlKTsgfSBlbHNlIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHsgc3RlcChcIm5leHRcIiwgdmFsdWUpOyB9LCBmdW5jdGlvbiAoZXJyKSB7IHN0ZXAoXCJ0aHJvd1wiLCBlcnIpOyB9KTsgfSB9IHJldHVybiBzdGVwKFwibmV4dFwiKTsgfSk7IH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICB2YXIgRGF0YVN0b3JlID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERhdGFTdG9yZSgpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEYXRhU3RvcmUpO1xuXG4gICAgICBfZXh0Mi5kZWZhdWx0LmV4dGVuZChEYXRhU3RvcmUucHJvdG90eXBlLCBjb25maWcsIHtcbiAgICAgICAgZGF0YTogW10sXG4gICAgICAgIG9ic2VydmFibGU6IF9vYnNlcnZhYmxlMi5kZWZhdWx0LmNyZWF0ZSgpLFxuICAgICAgICBtb2RpZmllZFJlY29yZHM6IHt9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoRGF0YVN0b3JlLCBbe1xuICAgICAga2V5OiAnc3Vic2NyaWJlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZhYmxlLnN1YnNjcmliZShvYnNlcnZlcik7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAndW5zdWJzY3JpYmUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2YWJsZS51bnN1YnNjcmliZShvYnNlcnZlcik7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAncmVtb3ZlQWxsJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVBbGwoKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2xvYWREYXRhJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkRGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMucHJveHkucmVhZGVyICYmIHRoaXMucHJveHkucmVhZGVyLnJvb3RQcm9wZXJ0eSA/IGRhdGFbdGhpcy5wcm94eS5yZWFkZXIucm9vdFByb3BlcnR5XSA6IGRhdGE7XG4gICAgICAgIGlmICh0aGlzLnBhZ2VTaXplKSB7XG4gICAgICAgICAgdGhpcy5wYWdlID0gZGF0YTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9ic2VydmFibGUuY2FsbCh0aGlzKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdsb2FkJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfcmVmID0gX2FzeW5jVG9HZW5lcmF0b3IocmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZShwcm94eSkge1xuICAgICAgICAgIHZhciByZXNwb25zZTtcbiAgICAgICAgICByZXR1cm4gcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMjtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYWpheDIuZGVmYXVsdC5yZXF1ZXN0KHByb3h5IHx8IHRoaXMucHJveHkpO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfY29udGV4dC5zZW50O1xuXG4gICAgICAgICAgICAgICAgICByZXNwb25zZSAmJiB0aGlzLmxvYWREYXRhKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoJ3JldHVybicsIHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgX2NhbGxlZSwgdGhpcyk7XG4gICAgICAgIH0pKTtcblxuICAgICAgICBmdW5jdGlvbiBsb2FkKF94KSB7XG4gICAgICAgICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsb2FkO1xuICAgICAgfSgpXG4gICAgfSwge1xuICAgICAga2V5OiAnbG9hZFBhZ2UnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWRQYWdlKHBhZ2UpIHtcbiAgICAgICAgdmFyIHByb3h5ID0gX2V4dDIuZGVmYXVsdC5leHRlbmQoe30sIHRoaXMucHJveHksIHsgdXJsOiB0aGlzLnByb3h5LnVybCArICc/cGFnZT0nICsgcGFnZSB9KTtcbiAgICAgICAgcmV0dXJuIGxvYWQocHJveHkpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NvbW1pdENoYW5nZXMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbW1pdENoYW5nZXMoKSB7XG4gICAgICAgIHRoaXMubW9kaWZpZWRSZWNvcmRzID0ge307XG4gICAgICAgIHRoaXMub2JzZXJ2YWJsZS5jYWxsKHRoaXMpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3VwZGF0ZVJlY29yZCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlUmVjb3JkKHJlY29yZCwgZmllbGROYW1lLCBuZXdWYWx1ZSkge1xuICAgICAgICAhdGhpcy5tb2RpZmllZFJlY29yZHNbcmVjb3JkLmlkXSAmJiAodGhpcy5tb2RpZmllZFJlY29yZHNbcmVjb3JkLmlkXSA9IG5ldyBfbW9kZWwyLmRlZmF1bHQocmVjb3JkKSk7XG4gICAgICAgIHZhciBtb2RpZmllZFJlY29yZCA9IHRoaXMubW9kaWZpZWRSZWNvcmRzW3JlY29yZC5pZF07XG4gICAgICAgIG1vZGlmaWVkUmVjb3JkLnNldChmaWVsZE5hbWUsIG5ld1ZhbHVlKTtcbiAgICAgICAgcmVjb3JkW2ZpZWxkTmFtZV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgdGhpcy5vYnNlcnZhYmxlLmNhbGwodGhpcyk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAncmVqZWN0Q2hhbmdlcycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVqZWN0Q2hhbmdlcygpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICBfbGlzdDIuZGVmYXVsdC5vZih0aGlzLmRhdGEpLmVhY2goZnVuY3Rpb24gKHJlY29yZCwgaW5kZXgsIGRhdGEpIHtcbiAgICAgICAgICBpZiAoX3RoaXMubW9kaWZpZWRSZWNvcmRzW3JlY29yZC5pZF0pIHtcbiAgICAgICAgICAgIGRhdGFbaW5kZXhdID0gX2V4dDIuZGVmYXVsdC5leHRlbmQoe30sIF90aGlzLm1vZGlmaWVkUmVjb3Jkc1tyZWNvcmQuaWRdLnBoYW50b20pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29tbWl0Q2hhbmdlcygpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBEYXRhU3RvcmU7XG4gIH0oKTtcblxuICByZXR1cm4gbmV3IERhdGFTdG9yZSgpO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZXh0ID0gcmVxdWlyZSgnLi4vY29yZS9leHQnKTtcblxudmFyIF9leHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0KTtcblxudmFyIF9saXN0ID0gcmVxdWlyZSgnLi4vY29yZS9saXN0Jyk7XG5cbnZhciBfbGlzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saXN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEV2ZW50T2JzZXJ2YWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRXZlbnRPYnNlcnZhYmxlKHRhcmdldCwgZXZlbnROYW1lKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEV2ZW50T2JzZXJ2YWJsZSk7XG5cbiAgICBfZXh0Mi5kZWZhdWx0LmV4dGVuZChFdmVudE9ic2VydmFibGUucHJvdG90eXBlLCB7XG4gICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgIGV2ZW50TmFtZTogZXZlbnROYW1lXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRXZlbnRPYnNlcnZhYmxlLCBbe1xuICAgIGtleTogJ3N1YnNjcmliZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1YnNjcmliZShzdWJzY3JpYmVyKSB7XG4gICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKHRoaXMuZXZlbnROYW1lLCBzdWJzY3JpYmVyKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRXZlbnRPYnNlcnZhYmxlO1xufSgpO1xuXG52YXIgT2JzZXJ2YWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gT2JzZXJ2YWJsZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgT2JzZXJ2YWJsZSk7XG5cbiAgICB0aGlzLm9ic2VydmVycyA9IFtdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE9ic2VydmFibGUsIFt7XG4gICAga2V5OiAnc3Vic2NyaWJlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICB0aGlzLm9ic2VydmVycy5wdXNoKG9ic2VydmVyKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd1bnN1YnNjcmliZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICBfbGlzdDIuZGVmYXVsdC5vZih0aGlzLm9ic2VydmVycykuZWFjaChmdW5jdGlvbiAodmFsdWUsIGluZGV4LCBvYnNlcnZlcnMpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBvYnNlcnZlciAmJiBkZWxldGUgb2JzZXJ2ZXJzW2luZGV4XTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NhbGwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYWxsKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgX2xpc3QyLmRlZmF1bHQub2YodGhpcy5vYnNlcnZlcnMpLmVhY2goZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIHJldHVybiBvYnNlcnZlci5hcHBseShfdGhpcywgYXJncyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogJ2NyZWF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Zyb21FdmVudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZyb21FdmVudCh0YXJnZXQsIGV2ZW50TmFtZSkge1xuICAgICAgcmV0dXJuIG5ldyBFdmVudE9ic2VydmFibGUodGFyZ2V0LCBldmVudE5hbWUpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBPYnNlcnZhYmxlO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBPYnNlcnZhYmxlOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuRmllbGQgPSBleHBvcnRzLkdyaWQgPSBleHBvcnRzLkNvbnRhaW5lciA9IGV4cG9ydHMuTGluayA9IGV4cG9ydHMuSGFzaFJvdXRlciA9IGV4cG9ydHMuUm91dGUgPSBleHBvcnRzLk9ic2VydmFibGUgPSBleHBvcnRzLkNvbXBvbmVudCA9IGV4cG9ydHMuU2VydmljZSA9IGV4cG9ydHMuTW9kZWwgPSBleHBvcnRzLlN0b3JlID0gZXhwb3J0cy5DYWNoZSA9IGV4cG9ydHMuQWpheCA9IGV4cG9ydHMuTWFwID0gZXhwb3J0cy5MaXN0ID0gZXhwb3J0cy5TdHJpbmcgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfc3RyaW5nID0gcmVxdWlyZSgnLi9jb3JlL3N0cmluZycpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1N0cmluZycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0cmluZykuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfbGlzdCA9IHJlcXVpcmUoJy4vY29yZS9saXN0Jyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlzdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpc3QpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX21hcCA9IHJlcXVpcmUoJy4vY29yZS9tYXAnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNYXAnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXApLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2FqYXggPSByZXF1aXJlKCcuL2RhdGEvYWpheCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0FqYXgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hamF4KS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9jYWNoZSA9IHJlcXVpcmUoJy4vZGF0YS9jYWNoZScpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0NhY2hlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2FjaGUpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX3N0b3JlID0gcmVxdWlyZSgnLi9kYXRhL3N0b3JlJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU3RvcmUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdG9yZSkuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01vZGVsJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RvcmUpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX3NlcnZpY2UgPSByZXF1aXJlKCcuL2FwcC9zZXJ2aWNlJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2VydmljZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NlcnZpY2UpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2NvbXBvbmVudCA9IHJlcXVpcmUoJy4vYXBwL2NvbXBvbmVudCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0NvbXBvbmVudCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBvbmVudCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfb2JzZXJ2YWJsZSA9IHJlcXVpcmUoJy4vbWl4aW4vb2JzZXJ2YWJsZScpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ09ic2VydmFibGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYnNlcnZhYmxlKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9yb3V0ZXIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvcm91dGVyJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUm91dGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yb3V0ZXIpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdIYXNoUm91dGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3JvdXRlci5IYXNoUm91dGVyO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9yb3V0ZXIuTGluaztcbiAgfVxufSk7XG5cbnZhciBfY29udGFpbmVyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2NvbnRhaW5lcicpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0NvbnRhaW5lcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRhaW5lcikuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfZ3JpZCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9ncmlkJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnR3JpZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dyaWQpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2Zvcm0gPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvZm9ybScpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0ZpZWxkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2Zvcm0uRmllbGQ7XG4gIH1cbn0pO1xuXG5yZXF1aXJlKCdiYWJlbC1wb2x5ZmlsbCcpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9leHQgPSByZXF1aXJlKCcuL2NvcmUvZXh0Jyk7XG5cbnZhciBfZXh0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dCk7XG5cbnZhciBfbGlzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saXN0KTtcblxudmFyIF9hamF4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FqYXgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikgeyByZXR1cm4gZnVuY3Rpb24gKCkgeyB2YXIgZ2VuID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgZnVuY3Rpb24gc3RlcChrZXksIGFyZykgeyB0cnkgeyB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7IHZhciB2YWx1ZSA9IGluZm8udmFsdWU7IH0gY2F0Y2ggKGVycm9yKSB7IHJlamVjdChlcnJvcik7IHJldHVybjsgfSBpZiAoaW5mby5kb25lKSB7IHJlc29sdmUodmFsdWUpOyB9IGVsc2UgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkgeyBzdGVwKFwibmV4dFwiLCB2YWx1ZSk7IH0sIGZ1bmN0aW9uIChlcnIpIHsgc3RlcChcInRocm93XCIsIGVycik7IH0pOyB9IH0gcmV0dXJuIHN0ZXAoXCJuZXh0XCIpOyB9KTsgfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgUmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUmV4dCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmV4dCk7XG5cbiAgICB0aGlzLmV4dGVuZCA9IF9leHQyLmRlZmF1bHQuZXh0ZW5kO1xuICAgIHRoaXMuYWpheCA9IGZ1bmN0aW9uIChzZXR0aW5ncykge1xuICAgICAgcmV0dXJuIF9hamF4Mi5kZWZhdWx0LnJlcXVlc3Qoc2V0dGluZ3MpO1xuICAgIH07XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUmV4dCwgW3tcbiAgICBrZXk6ICdsYXVuY2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsYXVuY2godmlld3BvcnQpIHtcbiAgICAgIGlmICghd2luZG93LmxvY2F0aW9uLmhhc2gpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnLyc7XG4gICAgICB9XG5cbiAgICAgIHZhciByb290ID0gX2V4dDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCc8ZGl2IGlkPVwicmVhY3Qtcm9vdFwiPjwvZGl2PicpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyb290KTtcbiAgICAgIF9leHQyLmRlZmF1bHQuaXNGdW5jdGlvbih2aWV3cG9ydCkgJiYgKHZpZXdwb3J0ID0gdmlld3BvcnQoKSk7XG4gICAgICAoMCwgX3JlYWN0RG9tLnJlbmRlcikodmlld3BvcnQsIHJvb3QpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2FwcGxpY2F0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9yZWYgPSBfYXN5bmNUb0dlbmVyYXRvcihyZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlKF9yZWYyKSB7XG4gICAgICAgIHZhciBzZWxlY3RvciA9IF9yZWYyLnNlbGVjdG9yLFxuICAgICAgICAgICAgdmlld3BvcnQgPSBfcmVmMi52aWV3cG9ydCxcbiAgICAgICAgICAgIGxhdW5jaCA9IF9yZWYyLmxhdW5jaDtcbiAgICAgICAgcmV0dXJuIHJlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIGlzIGRlcHJlY2F0ZWQgZnVuY3Rpb24sIHBsZWFzZSB1c2UgUmV4dC5sYXVuY2ggaW5zdGVhZC4nKTtcbiAgICAgICAgICAgICAgICBpZiAoIXdpbmRvdy5sb2NhdGlvbi5oYXNoKSB7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcvJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNDtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGF1bmNoKCk7XG5cbiAgICAgICAgICAgICAgY2FzZSA0OlxuXG4gICAgICAgICAgICAgICAgKDAsIF9yZWFjdERvbS5yZW5kZXIpKF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHZpZXdwb3J0LCB7fSksIF9leHQyLmRlZmF1bHQuZ2V0QnlJZChzZWxlY3RvcikpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZSwgdGhpcyk7XG4gICAgICB9KSk7XG5cbiAgICAgIGZ1bmN0aW9uIGFwcGxpY2F0aW9uKF94KSB7XG4gICAgICAgIHJldHVybiBfcmVmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhcHBsaWNhdGlvbjtcbiAgICB9KClcbiAgfV0pO1xuXG4gIHJldHVybiBSZXh0O1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBuZXcgUmV4dCgpOyIsImltcG9ydCB7IFJvdXRlLCBDb21wb25lbnQgfSBmcm9tICdAL3JleHQnXG5pbXBvcnQgRGFzaGJvYXJkVmlldyBmcm9tICcuL2Rhc2hib2FyZC52aWV3J1xuXG5AUm91dGUoJy8nKVxuQENvbXBvbmVudCh7XG4gIHZpZXc6IERhc2hib2FyZFZpZXcsXG4gIGNvbXBvbmVudEFzOiAnRGFzaGJvYXJkJ1xufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhc2hib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGl0bGUgPSAnRGFzaGJvYXJkJ1xuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBDb250YWluZXIgfSBmcm9tICdAL3JleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxDb250YWluZXIgY2xhc3NOYW1lPVwicGFuZWwtYm9keVwiPlxuICAgICAgPGgxPnt0aGlzLnByb3BzLkRhc2hib2FyZC50aXRsZX08L2gxPlxuICAgIDwvQ29udGFpbmVyPjtcbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFJvdXRlLCBDb250YWluZXIgfSBmcm9tICdAL3JleHQnXG5cbkBSb3V0ZSgnKicpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RGb3VuZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPENvbnRhaW5lcj5cbiAgICAgIDxoMT5Ob3QgRm91bmQ8L2gxPlxuICAgIDwvQ29udGFpbmVyPlxuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RmllbGQgfSBmcm9tICdAL3JleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8c2VjdGlvbiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGZvcm0taW5saW5lXCI+XG4gICAgICA8RmllbGQgLz5cbiAgICA8L3NlY3Rpb24+O1xuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdyaWQgfSBmcm9tICdAL3JleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hSZXN1bHQgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxHcmlkPlxuICAgIDwvR3JpZD47XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIENvbnRhaW5lciB9IGZyb20gJ0AvcmV4dCc7XG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tICcuL3NlYXJjaC1mb3JtJztcbmltcG9ydCBTZWFyY2hSZXN1bHQgZnJvbSAnLi9zZWFyY2gtcmVzdWx0JztcblxuQFJvdXRlKCcvc2VhcmNoJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPENvbnRhaW5lciBjbGFzc05hbWU9XCJwYW5lbC1ib2R5XCI+XG4gICAgICA8aDE+U2VhcmNoPC9oMT5cbiAgICAgIDxTZWFyY2hGb3JtIC8+XG4gICAgICA8U2VhcmNoUmVzdWx0IC8+XG4gICAgPC9Db250YWluZXI+O1xuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Zm9vdGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdGV4dC1jZW50ZXJcIj4mY29weTsgMjAxNyBodXl0cm9uZ25ndXllbjwvZGl2PlxuICAgIDwvZm9vdGVyPjtcbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnQC9yZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8aGVhZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFuZFwiPlJlYWN0IENNUzwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXItYXV0b1wiPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+RGFzaGJvYXJkPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL3NlYXJjaFwiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+U2VhcmNoPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL3JlcG9ydGluZ1wiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+UmVwb3J0aW5nPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL2FkbWluXCIgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5BZG1pbmlzdHJhdGlvbjwvTGluaz5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGRpdj5IZWxsbywgPHN0cm9uZz5odXl0cm9uZ25ndXllbjwvc3Ryb25nPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+O1xuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgLi4ub3RoZXJzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiA8bmF2IHsuLi5vdGhlcnN9IC8+O1xuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8YXNpZGUgc3R5bGU9e3t3aWR0aDoxMDB9fSAvPjtcbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIsIEhhc2hSb3V0ZXIgfSBmcm9tICdAL3JleHQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgU2lkZSBmcm9tICcuL3NpZGUnO1xuaW1wb3J0IE5hdiBmcm9tICcuL25hdic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld3BvcnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxDb250YWluZXI+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8Q29udGFpbmVyIGhib3g+XG4gICAgICAgIDxDb250YWluZXIgaWQ9XCJtYWluLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxOYXYgLz5cbiAgICAgICAgICA8SGFzaFJvdXRlciAvPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvQ29udGFpbmVyPjtcbiAgfVxufSIsImltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZXh0IGZyb20gJ0AvcmV4dCc7XG5pbXBvcnQgQ29tbW9uU2VydmljZSBmcm9tICcuL3NlcnZpY2VzL2NvbW1vbic7XG5pbXBvcnQgVmlld3BvcnQgZnJvbSAnLi9jb21wb25lbnRzL3ZpZXdwb3J0L3ZpZXdwb3J0JztcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnLi9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaCc7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi9jb21wb25lbnRzL25vdGZvdW5kL25vdGZvdW5kJztcblxuUmV4dC5sYXVuY2goKCkgPT4ge1xuICBDb21tb25TZXJ2aWNlLmluaXRBcHAoKTtcbiAgcmV0dXJuIDxWaWV3cG9ydCAvPjtcbn0pIiwiaW1wb3J0IFJleHQsIHsgU2VydmljZSB9IGZyb20gJ0AvcmV4dCc7XG5cbkBTZXJ2aWNlXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb25TZXJ2aWNlIHtcbiAgaW5pdEFwcCgpIHtcbiAgICBjb25zb2xlLmxvZygnQXBwIEluaXQhISEnKTtcbiAgfVxufSJdfQ==
