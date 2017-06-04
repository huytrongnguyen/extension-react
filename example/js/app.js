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

          var stores = (0, _list2.default)(config.stores).reduce(function (stores, store) {
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

          (0, _map2.default)(this.state.stores).each(function (storeId, store) {
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

},{"../core/ext":8,"../core/list":9,"../core/map":10,"../mixin/observable":18,"react":"react"}],2:[function(require,module,exports){
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

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
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

  return _default;
}(_react.Component);

exports.default = _default;

},{"react":"react"}],4:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.Field = undefined;

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

var _desc, _value, _class, _desc2, _value2, _class2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withProps = require('../mixin/with-props');

var _withProps2 = _interopRequireDefault(_withProps);

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

var Field = exports.Field = (_class = function (_Component) {
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
    value: function render(_ref) {
      var _this2 = this;

      var _ref$className = _ref.className,
          className = _ref$className === undefined ? '' : _ref$className,
          onChange = _ref.onChange,
          onKeyPress = _ref.onKeyPress,
          others = _objectWithoutProperties(_ref, ['className', 'onChange', 'onKeyPress']);

      return _react2.default.createElement('input', _extends({ type: 'text', value: this.state.value, className: 'form-control ' + className,
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
}(_react.Component), _applyDecoratedDescriptor(_class.prototype, 'render', [_withProps2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype), _class);
var Button = exports.Button = (_class2 = function (_Component2) {
  _inherits(Button, _Component2);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render(_ref2) {
      var text = _ref2.text,
          children = _ref2.children,
          _ref2$className = _ref2.className,
          className = _ref2$className === undefined ? '' : _ref2$className,
          others = _objectWithoutProperties(_ref2, ['text', 'children', 'className']);

      return _react2.default.createElement('button', _extends({ className: '' + className }, others), text || children);
    }
  }]);

  return Button;
}(_react.Component), _applyDecoratedDescriptor(_class2.prototype, 'render', [_withProps2.default], Object.getOwnPropertyDescriptor(_class2.prototype, 'render'), _class2.prototype), _class2);

},{"../mixin/with-props":19,"react":"react"}],5:[function(require,module,exports){
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

var _desc, _value, _class, _desc2, _value2, _class2, _desc3, _value3, _class3, _desc4, _value4, _class4;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _list = require('../core/list');

var _list2 = _interopRequireDefault(_list);

var _number = require('../core/number');

var _number2 = _interopRequireDefault(_number);

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

var _observable = require('../mixin/observable');

var _observable2 = _interopRequireDefault(_observable);

var _withProps = require('../mixin/with-props');

var _withProps2 = _interopRequireDefault(_withProps);

var _bind = require('../mixin/bind');

var _bind2 = _interopRequireDefault(_bind);

var _container = require('./container');

var _container2 = _interopRequireDefault(_container);

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

var _default = (_class = function (_Component) {
  _inherits(_default, _Component);

  function _default(props) {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));

    _this.state = {
      columns: (0, _list2.default)(props.children).map(function (child) {
        return child.props;
      }).collect(),
      width: 0,
      innerWidth: 0,
      headerWidth: 0,
      bodyWidth: 0
    };
    _this.reload = function () {
      return _this.forceUpdate();
    };
    return _this;
  }

  _createClass(_default, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.resizeGrid();
      _observable2.default.fromEvent(window, 'resize').subscribe(this.resizeGrid);
      var node = _ext2.default.getComp(this),
          header = node.find('.rx-grid-header'),
          body = node.find('.rx-grid-body');
      _observable2.default.fromEvent(body, 'scroll').subscribe(function (e) {
        return header.scrollLeft = body.scrollLeft;
      });
      this.props.store.subscribe(this.reload);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.store.unsubscribe(this.reload);
    }
  }, {
    key: 'render',
    value: function render() {
      var store = this.props.store;

      return _react2.default.createElement(_container2.default, { className: 'rx-grid' }, _react2.default.createElement(GridHeader, this.state), _react2.default.createElement(GridBody, _extends({ data: store.getData() }, this.state)));
    }
  }, {
    key: 'resizeGrid',
    value: function resizeGrid() {
      var columns = this.state.columns,
          node = _ext2.default.getComp(this),
          parent = node.parent(),
          flexColumns = [];

      var width = parent.width(),
          height = parent.height(),
          innerWidth = (0, _list2.default)(columns).reduce(function (innerWidth, col) {
        if (col.style && col.style.width) {
          innerWidth += col.style.width;
        } else {
          flexColumns.push(col);
        }
        return innerWidth;
      }, 0),
          headerWidth = innerWidth + _ext2.default.SCROLL_WIDTH,
          bodyWidth = innerWidth;

      if (innerWidth < width && flexColumns.length > 0) {
        var remainWidth = width - innerWidth - _ext2.default.SCROLL_WIDTH - _ext2.default.BORDER_WIDTH,
            remainColumn = flexColumns.length;
        (0, _list2.default)(flexColumns).each(function (col) {
          !col.style && (col.style = {});
          var width = remainColumn === 1 ? remainWidth : _number2.default.round(remainWidth / remainColumn);
          col.style.width = width;
          remainWidth -= width;
          --remainColumn;
        });
        innerWidth = width;
        headerWidth = width - _ext2.default.BORDER_WIDTH;
        bodyWidth = width - _ext2.default.SCROLL_WIDTH - _ext2.default.BORDER_WIDTH;
      }

      this.setState(function () {
        return { columns: columns, width: width, innerWidth: innerWidth, headerWidth: headerWidth, bodyWidth: bodyWidth };
      });
    }
  }]);

  return _default;
}(_react.Component), _applyDecoratedDescriptor(_class.prototype, 'resizeGrid', [_bind2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'resizeGrid'), _class.prototype), _class);

exports.default = _default;
var GridHeader = (_class2 = function (_Component2) {
  _inherits(GridHeader, _Component2);

  function GridHeader() {
    _classCallCheck(this, GridHeader);

    return _possibleConstructorReturn(this, (GridHeader.__proto__ || Object.getPrototypeOf(GridHeader)).apply(this, arguments));
  }

  _createClass(GridHeader, [{
    key: 'render',
    value: function render(_ref) {
      var columns = _ref.columns,
          headerWidth = _ref.headerWidth;

      return _react2.default.createElement('section', { className: 'rx-grid-header' }, _react2.default.createElement('div', { className: 'rx-grid-header-container d-flex flex-row', style: { width: headerWidth } }, columns && columns.map(function (col) {
        var text = col.text,
            className = col.className,
            style = col.style,
            others = _objectWithoutProperties(col, ['text', 'className', 'style']);

        return _react2.default.createElement('div', _extends({ className: 'rx-grid-column-header text-center ' + (className || ''), style: style }, others), text || '');
      })));
    }
  }]);

  return GridHeader;
}(_react.Component), _applyDecoratedDescriptor(_class2.prototype, 'render', [_withProps2.default], Object.getOwnPropertyDescriptor(_class2.prototype, 'render'), _class2.prototype), _class2);
var GridBody = (_class3 = function (_Component3) {
  _inherits(GridBody, _Component3);

  function GridBody() {
    _classCallCheck(this, GridBody);

    return _possibleConstructorReturn(this, (GridBody.__proto__ || Object.getPrototypeOf(GridBody)).apply(this, arguments));
  }

  _createClass(GridBody, [{
    key: 'render',
    value: function render(_ref2) {
      var columns = _ref2.columns,
          bodyWidth = _ref2.bodyWidth,
          data = _ref2.data;

      return _react2.default.createElement(_container2.default, { className: 'rx-grid-body' }, _react2.default.createElement('section', { className: 'rx-grid-view', style: { width: bodyWidth } }, _react2.default.createElement('div', { style: { height: 1 } }), data && data.map(function (record, rowIndex) {
        return _react2.default.createElement(GridRow, { columns: columns, record: record, rowIndex: rowIndex });
      })));
    }
  }]);

  return GridBody;
}(_react.Component), _applyDecoratedDescriptor(_class3.prototype, 'render', [_withProps2.default], Object.getOwnPropertyDescriptor(_class3.prototype, 'render'), _class3.prototype), _class3);
var GridRow = (_class4 = function (_Component4) {
  _inherits(GridRow, _Component4);

  function GridRow() {
    _classCallCheck(this, GridRow);

    return _possibleConstructorReturn(this, (GridRow.__proto__ || Object.getPrototypeOf(GridRow)).apply(this, arguments));
  }

  _createClass(GridRow, [{
    key: 'render',
    value: function render(_ref3) {
      var columns = _ref3.columns,
          record = _ref3.record,
          rowIndex = _ref3.rowIndex;

      return _react2.default.createElement('div', { className: 'rx-grid-row d-flex flex-row' }, columns && columns.map(function (col) {
        var dataIndex = col.dataIndex,
            className = col.className,
            render = col.render,
            style = col.style,
            others = _objectWithoutProperties(col, ['dataIndex', 'className', 'render', 'style']);

        return _react2.default.createElement('div', _extends({ className: 'rx-grid-cell text-sm-center ' + (className || ''), style: style }, others), render ? render(record.get(dataIndex), record, dataIndex, rowIndex) : record.get(dataIndex));
      }));
    }
  }]);

  return GridRow;
}(_react.Component), _applyDecoratedDescriptor(_class4.prototype, 'render', [_withProps2.default], Object.getOwnPropertyDescriptor(_class4.prototype, 'render'), _class4.prototype), _class4);

},{"../core/ext":8,"../core/list":9,"../core/number":11,"../mixin/bind":17,"../mixin/observable":18,"../mixin/with-props":19,"./container":3,"react":"react"}],6:[function(require,module,exports){
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

},{"../core/list":9,"../mixin/observable":18,"react":"react"}],7:[function(require,module,exports){
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

var _reactDom = require('react-dom');

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var _default = function () {
  function _default(comp) {
    _classCallCheck(this, _default);

    this.comp = (0, _reactDom.findDOMNode)(comp);
  }

  _createClass(_default, [{
    key: 'parent',
    value: function parent() {
      this.comp = this.comp.parentElement;
      return this;
    }
  }, {
    key: 'width',
    value: function width() {
      return this.comp.clientWidth;
    }
  }, {
    key: 'height',
    value: function height() {
      return this.comp.clientHeight;
    }
  }, {
    key: 'find',
    value: function find(selector) {
      return this.comp.querySelector(selector);
    }
  }]);

  return _default;
}();

exports.default = _default;

},{"react-dom":"react-dom"}],8:[function(require,module,exports){
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

var _component = require('./component');

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Ext = function () {
  function Ext() {
    _classCallCheck(this, Ext);

    this.SCROLL_WIDTH = this.getScrollWidth();
    this.BORDER_WIDTH = 2;
  }

  _createClass(Ext, [{
    key: 'getById',
    value: function getById(id) {
      return document.getElementById(id);
    }
  }, {
    key: 'getComp',
    value: function getComp(comp) {
      return new _component2.default(comp);
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
  }, {
    key: 'isFunction',
    value: function isFunction(value) {
      return !!value && typeof value === 'function';
    }
  }, {
    key: 'getScrollWidth',
    value: function getScrollWidth() {
      var outer = document.createElement("div");
      outer.style.visibility = "hidden";
      outer.style.width = "100px";
      outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

      document.body.appendChild(outer);

      var widthNoScroll = outer.offsetWidth;
      // force scrollbars
      outer.style.overflow = "scroll";

      // add innerdiv
      var inner = document.createElement("div");
      inner.style.width = "100%";
      outer.appendChild(inner);

      var widthWithScroll = inner.offsetWidth;

      // remove divs
      outer.parentNode.removeChild(outer);

      return widthNoScroll - widthWithScroll;
    }
  }]);

  return Ext;
}();

exports.default = new Ext();

},{"./component":7}],9:[function(require,module,exports){
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
  }, {
    key: "getAt",
    value: function getAt(index) {
      return this.array[index];
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
      return (0, _list2.default)(Object.keys(this.map));
    }
  }, {
    key: 'values',
    value: function values() {
      return (0, _list2.default)(Object.values(this.map));
    }
  }]);

  return Map;
}();

exports.default = function (keyValues) {
  return new Map(keyValues);
};

},{"./list":9}],11:[function(require,module,exports){
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

var Number = function () {
  function Number() {
    _classCallCheck(this, Number);
  }

  _createClass(Number, [{
    key: "round",
    value: function round(value) {
      return Math.round(value);
    }
  }]);

  return Number;
}();

exports.default = new Number();

},{}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
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

      this.BASE_URL && (url = this.BASE_URL + '/' + url);
      method === 'get' && params !== null && (url = url + '?' + _string2.default.toQueryString(params));
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

},{"../core/ext":8,"../core/string":12}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
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

var _observable = require('../mixin/observable');

var _observable2 = _interopRequireDefault(_observable);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Model = function () {
  function Model(data, store) {
    _classCallCheck(this, Model);

    _ext2.default.extend(this, {
      data: data,
      store: store
    });
    this.save();
  }

  _createClass(Model, [{
    key: 'get',
    value: function get(fieldName) {
      return this.data[fieldName];
    }
  }, {
    key: 'set',
    value: function set(fieldName, newValue) {
      this.data[fieldName] = newValue;
      this.store.observable.call(this.store);
    }
  }, {
    key: 'save',
    value: function save() {
      this.phantom = _ext2.default.extend({}, this.data);
      this.store.observable.call(this.store);
    }
  }, {
    key: 'reject',
    value: function reject() {
      this.data = _ext2.default.extend({}, this.phantom);
      this.save();
      this.store.observable.call(this.store);
    }
  }]);

  return Model;
}();

exports.default = Model;

},{"../core/ext":8,"../mixin/observable":18}],16:[function(require,module,exports){
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

      _ext2.default.extend(this, config, {
        data: [],
        observable: _observable2.default.create()
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
        var _this = this;

        var newData = this.proxy.reader && this.proxy.reader.rootProperty ? data[this.proxy.reader.rootProperty] : data;
        this.data = (0, _list2.default)(newData).map(function (record) {
          return new _model2.default(record, _this);
        }).collect();
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
      key: 'getData',
      value: function getData() {
        return this.data;
      }
    }, {
      key: 'commitChanges',
      value: function commitChanges() {
        (0, _list2.default)(this.data).each(function (record) {
          return record.save();
        });
        this.observable.call(this);
      }
    }, {
      key: 'rejectChanges',
      value: function rejectChanges() {
        (0, _list2.default)(this.data).each(function (record) {
          return record.reject();
        });
        this.observable.call(this);
      }
    }, {
      key: 'getAt',
      value: function getAt(index) {
        return this.data[index];
      }
    }]);

    return DataStore;
  }();

  return new DataStore();
};

},{"../core/ext":8,"../core/list":9,"../mixin/observable":18,"./ajax":13,"./model":15}],17:[function(require,module,exports){
'use strict';

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

exports.default = function (target, name, descriptor) {
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
};

},{}],18:[function(require,module,exports){
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
      (0, _list2.default)(this.observers).each(function (value, index, observers) {
        return value === observer && observers.splice(index, 1);
      });
    }
  }, {
    key: 'call',
    value: function call() {
      var _this = this;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (0, _list2.default)(this.observers).each(function (observer) {
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

var EventObservable = function () {
  function EventObservable(target, eventName) {
    _classCallCheck(this, EventObservable);

    this.target = target;
    this.eventName = eventName;
    return this;
  }

  _createClass(EventObservable, [{
    key: 'subscribe',
    value: function subscribe(observer) {
      this.target.addEventListener(this.eventName, observer);
    }
  }]);

  return EventObservable;
}();

},{"../core/ext":8,"../core/list":9}],19:[function(require,module,exports){
'use strict';

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

exports.default = function (target, name, descriptor) {
  var fn = descriptor.value;

  if (typeof fn !== 'function') {
    throw new Error('@injectProps decorator is only applied to functions not: ' + (typeof fn === 'undefined' ? 'undefined' : _typeof(fn)));
  }

  descriptor.value = function () {
    return fn.bind(this)(this.props);
  };
  return descriptor;
};

},{}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.Field = exports.Grid = exports.Container = exports.Link = exports.HashRouter = exports.Route = exports.bind = exports.withProps = exports.Observable = exports.Component = exports.Service = exports.Model = exports.Store = exports.Cache = exports.Ajax = exports.Map = exports.List = exports.String = undefined;

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

},{"./app/component":1,"./app/service":2,"./components/container":3,"./components/form":4,"./components/grid":5,"./components/router":6,"./core/ext":8,"./core/list":9,"./core/map":10,"./core/string":12,"./data/ajax":13,"./data/cache":14,"./data/model":15,"./data/store":16,"./mixin/bind":17,"./mixin/observable":18,"./mixin/with-props":19,"babel-polyfill":"babel-polyfill","react":"react","react-dom":"react-dom"}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _dec2, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rext = require('../../../../../dist/rext');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _default = (_dec = (0, _rext.Route)('/'), _dec2 = (0, _rext.Component)({
  view: function view(_ref) {
    var vm = _ref.vm;
    return _react2.default.createElement(
      _rext.Container,
      { className: 'panel-body' },
      _react2.default.createElement(
        'h1',
        null,
        vm.title
      )
    );
  }
}), _dec(_class = _dec2(_class = function _default() {
  _classCallCheck(this, _default);

  this.title = 'Dashboard';
}) || _class) || _class);

exports.default = _default;

},{"../../../../../dist/rext":20,"react":"react"}],22:[function(require,module,exports){
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

var _default = (_dec = (0, _rext.Route)('*'), _dec(_class = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
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

  return _default;
}(_react.Component)) || _class);

exports.default = _default;

},{"../../../../../dist/rext":20,"react":"react"}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _rext = require('../../../../../dist/rext');

var _card = require('../../stores/card');

var _card2 = _interopRequireDefault(_card);

var _searchForm = require('./search-form.view');

var _searchForm2 = _interopRequireDefault(_searchForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _default = (_dec = (0, _rext.Component)({
  componentAs: 'searchForm',
  view: _searchForm2.default
}), _dec(_class = function () {
  function _default() {
    _classCallCheck(this, _default);
  }

  _createClass(_default, [{
    key: 'search',
    value: function search() {
      _card2.default.load();
    }
  }, {
    key: 'test',
    value: function test() {
      _card2.default.getAt(0).set('Name', 'New Name');
    }
  }]);

  return _default;
}()) || _class);

exports.default = _default;

},{"../../../../../dist/rext":20,"../../stores/card":34,"./search-form.view":24}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rext = require('../../../../../dist/rext');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var _default = (_class = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: 'render',
    value: function render(_ref) {
      var searchForm = _ref.searchForm;

      return _react2.default.createElement(
        'section',
        { className: 'form-group form-inline' },
        _react2.default.createElement(_rext.Field, null),
        _react2.default.createElement(_rext.Button, { className: 'btn primary', text: 'Search', onClick: searchForm.search }),
        _react2.default.createElement(_rext.Button, { className: 'btn', text: 'Test', onClick: searchForm.test })
      );
    }
  }]);

  return _default;
}(_react.Component), (_applyDecoratedDescriptor(_class.prototype, 'render', [_rext.withProps], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype)), _class);

exports.default = _default;

},{"../../../../../dist/rext":20,"react":"react"}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rext = require('../../../../../dist/rext');

var _card = require('../../stores/card');

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _rext.Container,
        null,
        _react2.default.createElement(
          _rext.Grid,
          { store: _card2.default },
          _react2.default.createElement('div', { text: 'ID', dataIndex: 'Id', className: 'text-center', style: { width: 150 } }),
          _react2.default.createElement('div', { text: 'Name', dataIndex: 'Name', className: 'text-center', style: { width: 250 } }),
          _react2.default.createElement('div', { text: 'Type', dataIndex: 'Type', className: 'text-center', style: { width: 100 } }),
          _react2.default.createElement('div', { text: 'Introduction', dataIndex: 'Introduction', className: 'text-center', style: { width: 1000 } }),
          _react2.default.createElement('div', { text: 'STR', dataIndex: 'STR', className: 'text-center', style: { width: 50 } }),
          _react2.default.createElement('div', { text: 'AGI', dataIndex: 'AGI', className: 'text-center', style: { width: 50 } }),
          _react2.default.createElement('div', { text: 'HP', dataIndex: 'HP', className: 'text-center', style: { width: 50 } }),
          _react2.default.createElement('div', { text: 'DEX', dataIndex: 'DEX', className: 'text-center', style: { width: 50 } }),
          _react2.default.createElement('div', { text: 'INT', dataIndex: 'INT', className: 'text-center', style: { width: 50 } }),
          _react2.default.createElement('div', { text: 'SEN', dataIndex: 'SEN', className: 'text-center', style: { width: 50 } }),
          _react2.default.createElement('div', { text: 'Armor', dataIndex: 'ArmorUsable', className: 'text-center', style: { width: 100 } }),
          _react2.default.createElement('div', { text: 'Weapon', dataIndex: 'WeaponUsable', className: 'text-center', style: { width: 100 } })
        )
      );
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;

},{"../../../../../dist/rext":20,"../../stores/card":34,"react":"react"}],26:[function(require,module,exports){
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

var _default = (_dec = (0, _rext.Route)('/search'), _dec(_class = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
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

  return _default;
}(_react.Component)) || _class);

exports.default = _default;

},{"../../../../../dist/rext":20,"./search-form":23,"./search-result":25,"react":"react"}],27:[function(require,module,exports){
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

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
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

  return _default;
}(_react.Component);

exports.default = _default;

},{"react":"react"}],28:[function(require,module,exports){
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

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
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
              _rext.Cache.get('configuration').name
            )
          )
        )
      );
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;

},{"../../../../../dist/rext":20,"react":"react"}],29:[function(require,module,exports){
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

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: 'render',
    value: function render() {
      var others = _objectWithoutProperties(this.props, []);

      return _react2.default.createElement('nav', others);
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;

},{"react":"react"}],30:[function(require,module,exports){
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

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('aside', { style: { width: 100 } });
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;

},{"react":"react"}],31:[function(require,module,exports){
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

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
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

  return _default;
}(_react.Component);

exports.default = _default;

},{"../../../../../dist/rext":20,"./footer":27,"./header":28,"./nav":29,"./side":30,"react":"react"}],32:[function(require,module,exports){
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

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_rext2.default.launch(_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _common2.default.initApp();

        case 2:
          return _context.abrupt('return', _react2.default.createElement(_viewport2.default, null));

        case 3:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined);
})));

},{"../../../dist/rext":20,"./components/dashboard/dashboard":21,"./components/notfound/notfound":22,"./components/search/search":26,"./components/viewport/viewport":31,"./services/common":33,"babel-polyfill":"babel-polyfill","react":"react"}],33:[function(require,module,exports){
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

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _default = (0, _rext.Service)(_class = function () {
  function _default() {
    _classCallCheck(this, _default);
  }

  _createClass(_default, [{
    key: 'initApp',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _rext.Ajax.request({
                  url: '/api/configuration',
                  next: function next(configuration) {
                    return _rext.Cache.set('configuration', configuration);
                  }
                });

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function initApp() {
        return _ref.apply(this, arguments);
      }

      return initApp;
    }()
  }]);

  return _default;
}()) || _class;

exports.default = _default;

},{"../../../../dist/rext":20}],34:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rext = require('../../../../dist/rext');

exports.default = (0, _rext.Store)({
  storeId: 'CardStore',
  proxy: {
    url: '/api/cards',
    method: 'post'
  }
});

},{"../../../../dist/rext":20}]},{},[32])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkaXN0L2FwcC9jb21wb25lbnQuanMiLCJkaXN0L2FwcC9zZXJ2aWNlLmpzIiwiZGlzdC9jb21wb25lbnRzL2NvbnRhaW5lci5qcyIsImRpc3QvY29tcG9uZW50cy9mb3JtLmpzIiwiZGlzdC9jb21wb25lbnRzL2dyaWQuanMiLCJkaXN0L2NvbXBvbmVudHMvcm91dGVyLmpzIiwiZGlzdC9jb3JlL2NvbXBvbmVudC5qcyIsImRpc3QvY29yZS9leHQuanMiLCJkaXN0L2NvcmUvbGlzdC5qcyIsImRpc3QvY29yZS9tYXAuanMiLCJkaXN0L2NvcmUvbnVtYmVyLmpzIiwiZGlzdC9jb3JlL3N0cmluZy5qcyIsImRpc3QvZGF0YS9hamF4LmpzIiwiZGlzdC9kYXRhL2NhY2hlLmpzIiwiZGlzdC9kYXRhL21vZGVsLmpzIiwiZGlzdC9kYXRhL3N0b3JlLmpzIiwiZGlzdC9taXhpbi9iaW5kLmpzIiwiZGlzdC9taXhpbi9vYnNlcnZhYmxlLmpzIiwiZGlzdC9taXhpbi93aXRoLXByb3BzLmpzIiwiZGlzdC9yZXh0LmpzIiwiZXhhbXBsZS9qcy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmpzIiwiZXhhbXBsZS9qcy9hcHAvY29tcG9uZW50cy9ub3Rmb3VuZC9ub3Rmb3VuZC5qc3giLCJleGFtcGxlL2pzL2FwcC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2gtZm9ybS5qcyIsImV4YW1wbGUvanMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC1mb3JtLnZpZXcuanN4IiwiZXhhbXBsZS9qcy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLXJlc3VsdC5qc3giLCJleGFtcGxlL2pzL2FwcC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guanN4IiwiZXhhbXBsZS9qcy9hcHAvY29tcG9uZW50cy92aWV3cG9ydC9mb290ZXIuanN4IiwiZXhhbXBsZS9qcy9hcHAvY29tcG9uZW50cy92aWV3cG9ydC9oZWFkZXIuanN4IiwiZXhhbXBsZS9qcy9hcHAvY29tcG9uZW50cy92aWV3cG9ydC9uYXYuanN4IiwiZXhhbXBsZS9qcy9hcHAvY29tcG9uZW50cy92aWV3cG9ydC9zaWRlLmpzeCIsImV4YW1wbGUvanMvYXBwL2NvbXBvbmVudHMvdmlld3BvcnQvdmlld3BvcnQuanN4IiwiZXhhbXBsZS9qcy9hcHAvbWFpbi5qcyIsImV4YW1wbGUvanMvYXBwL3NlcnZpY2VzL2NvbW1vbi5qcyIsImV4YW1wbGUvanMvYXBwL3N0b3Jlcy9jYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7Ozs7QUFFQSxPQUFPLGNBQVAsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFDM0MsU0FBTztBQURvQyxDQUE3Qzs7QUFJQSxJQUFJLFdBQVcsT0FBTyxNQUFQLElBQWlCLFVBQVUsTUFBVixFQUFrQjtBQUFFLE9BQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxVQUFVLE1BQTlCLEVBQXNDLEdBQXRDLEVBQTJDO0FBQUUsUUFBSSxTQUFTLFVBQVUsQ0FBVixDQUFiLENBQTJCLEtBQUssSUFBSSxHQUFULElBQWdCLE1BQWhCLEVBQXdCO0FBQUUsVUFBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsTUFBckMsRUFBNkMsR0FBN0MsQ0FBSixFQUF1RDtBQUFFLGVBQU8sR0FBUCxJQUFjLE9BQU8sR0FBUCxDQUFkO0FBQTRCO0FBQUU7QUFBRSxHQUFDLE9BQU8sTUFBUDtBQUFnQixDQUFoUTs7QUFFQSxJQUFJLGVBQWUsWUFBWTtBQUFFLFdBQVMsZ0JBQVQsQ0FBMEIsTUFBMUIsRUFBa0MsS0FBbEMsRUFBeUM7QUFBRSxTQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksTUFBTSxNQUExQixFQUFrQyxHQUFsQyxFQUF1QztBQUFFLFVBQUksYUFBYSxNQUFNLENBQU4sQ0FBakIsQ0FBMkIsV0FBVyxVQUFYLEdBQXdCLFdBQVcsVUFBWCxJQUF5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TUFBVCxDQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05IOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFHVztBQUNQLGFBQU8seUNBQU8sT0FBTyxFQUFDLE9BQU0sR0FBUCxFQUFkLEdBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEg7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBR1c7QUFDUCxhQUFPO0FBQUE7QUFBQTtBQUNMLDZEQURLO0FBRUw7QUFBQTtBQUFBLFlBQVcsVUFBWDtBQUNFO0FBQUE7QUFBQSxjQUFXLElBQUcsZ0JBQWQ7QUFDRSw4REFERjtBQUVFO0FBRkY7QUFERixTQUZLO0FBUUw7QUFSSyxPQUFQO0FBVUQ7Ozs7Ozs7Ozs7O0FDbkJIOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLGVBQUssTUFBTCwyQ0FBWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDSixpQkFBYyxPQUFkLEVBREk7O0FBQUE7QUFBQSwyQ0FFSCx1REFGRzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFaOzs7Ozs7Ozs7Ozs7OztBQ1RBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBS1UsV0FBSyxPQUFMLENBQWE7QUFDakIsdUJBQUssb0JBRFk7QUFFakIsd0JBQU07QUFBQSwyQkFBaUIsWUFBTSxHQUFOLENBQVUsZUFBVixFQUEyQixhQUEzQixDQUFqQjtBQUFBO0FBRlcsaUJBQWIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTFY7O2tCQUVlLGlCQUFNO0FBQ25CLFdBQVMsV0FEVTtBQUVuQixTQUFPO0FBQ0wsU0FBSyxZQURBO0FBRUwsWUFBUTtBQUZIO0FBRlksQ0FBTixDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2V4dCA9IHJlcXVpcmUoJy4uL2NvcmUvZXh0Jyk7XG5cbnZhciBfZXh0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dCk7XG5cbnZhciBfbGlzdCA9IHJlcXVpcmUoJy4uL2NvcmUvbGlzdCcpO1xuXG52YXIgX2xpc3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGlzdCk7XG5cbnZhciBfbWFwID0gcmVxdWlyZSgnLi4vY29yZS9tYXAnKTtcblxudmFyIF9tYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFwKTtcblxudmFyIF9vYnNlcnZhYmxlID0gcmVxdWlyZSgnLi4vbWl4aW4vb2JzZXJ2YWJsZScpO1xuXG52YXIgX29ic2VydmFibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JzZXJ2YWJsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHZhciBnZW4gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyBmdW5jdGlvbiBzdGVwKGtleSwgYXJnKSB7IHRyeSB7IHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTsgdmFyIHZhbHVlID0gaW5mby52YWx1ZTsgfSBjYXRjaCAoZXJyb3IpIHsgcmVqZWN0KGVycm9yKTsgcmV0dXJuOyB9IGlmIChpbmZvLmRvbmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0gZWxzZSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7IHN0ZXAoXCJuZXh0XCIsIHZhbHVlKTsgfSwgZnVuY3Rpb24gKGVycikgeyBzdGVwKFwidGhyb3dcIiwgZXJyKTsgfSk7IH0gfSByZXR1cm4gc3RlcChcIm5leHRcIik7IH0pOyB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICByZXR1cm4gZnVuY3Rpb24gKGNvbXApIHtcbiAgICB2YXIgV3JhcHBlZENvbXBvbmVudCA9IGNvbmZpZy52aWV3O1xuICAgIHJldHVybiBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgICAgX2luaGVyaXRzKF9jbGFzcywgX0NvbXBvbmVudCk7XG5cbiAgICAgIGZ1bmN0aW9uIF9jbGFzcyhwcm9wcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgX2NsYXNzKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX2NsYXNzLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoX2NsYXNzKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICAgIF90aGlzLnN0YXRlID0gX2RlZmluZVByb3BlcnR5KHtcbiAgICAgICAgICBzdG9yZXM6IHt9XG4gICAgICAgIH0sIGNvbmZpZy5jb21wb25lbnRBcyB8fCAndm0nLCBuZXcgY29tcCgpKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgfVxuXG4gICAgICBfY3JlYXRlQ2xhc3MoX2NsYXNzLCBbe1xuICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsTW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgdmFyIHN0b3JlcyA9ICgwLCBfbGlzdDIuZGVmYXVsdCkoY29uZmlnLnN0b3JlcykucmVkdWNlKGZ1bmN0aW9uIChzdG9yZXMsIHN0b3JlKSB7XG4gICAgICAgICAgICBzdG9yZS5zdWJzY3JpYmUoX3RoaXMyLm9uRGF0YUNoYW5nZWQuYmluZChfdGhpczIpKTtcbiAgICAgICAgICAgIHN0b3Jlc1tzdG9yZS5zdG9yZUlkXSA9IHN0b3JlO1xuICAgICAgICAgICAgcmV0dXJuIHN0b3JlcztcbiAgICAgICAgICB9LCB7fSk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdG9yZXM6IHN0b3JlcyB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgX3JlZiA9IF9hc3luY1RvR2VuZXJhdG9yKHJlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUoKSB7XG4gICAgICAgICAgICB2YXIgc3RvcmVzLCBzdG9yZUlkO1xuICAgICAgICAgICAgcmV0dXJuIHJlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBzdG9yZXMgPSB0aGlzLnN0YXRlLnN0b3JlcztcbiAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQudDAgPSByZWdlbmVyYXRvclJ1bnRpbWUua2V5cyhzdG9yZXMpO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIGlmICgoX2NvbnRleHQudDEgPSBfY29udGV4dC50MCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDk7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBzdG9yZUlkID0gX2NvbnRleHQudDEudmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzdG9yZXNbc3RvcmVJZF0uYXV0b0xvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNztcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA3O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RvcmVzW3N0b3JlSWRdLmxvYWQoKTtcblxuICAgICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBfY2FsbGVlLCB0aGlzKTtcbiAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgICAgIHJldHVybiBfcmVmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbXBvbmVudERpZE1vdW50O1xuICAgICAgICB9KClcbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgICAoMCwgX21hcDIuZGVmYXVsdCkodGhpcy5zdGF0ZS5zdG9yZXMpLmVhY2goZnVuY3Rpb24gKHN0b3JlSWQsIHN0b3JlKSB7XG4gICAgICAgICAgICBzdG9yZS51bnN1YnNjcmliZShfdGhpczMub25EYXRhQ2hhbmdlZCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlZENvbXBvbmVudCwgX2V4dGVuZHMoe30sIHRoaXMuc3RhdGUsIHRoaXMucHJvcHMpKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdvbkRhdGFDaGFuZ2VkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uRGF0YUNoYW5nZWQoc3RvcmUpIHtcbiAgICAgICAgICB2YXIgc3RvcmVzID0gdGhpcy5zdGF0ZS5zdG9yZXM7XG5cbiAgICAgICAgICBzdG9yZXNbc3RvcmUuc3RvcmVJZF0gPSBzdG9yZTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN0b3Jlczogc3RvcmVzIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIF9jbGFzcztcbiAgICB9KF9yZWFjdC5Db21wb25lbnQpO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKFNlcnZpY2UpIHtcbiAgcmV0dXJuIG5ldyBTZXJ2aWNlKCk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKF9kZWZhdWx0LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBfZGVmYXVsdCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgX2RlZmF1bHQpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfZGVmYXVsdC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKF9kZWZhdWx0KSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoX2RlZmF1bHQsIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgX3Byb3BzJGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzJGNsYXNzTmFtZSA9PT0gdW5kZWZpbmVkID8gJycgOiBfcHJvcHMkY2xhc3NOYW1lLFxuICAgICAgICAgIGhib3ggPSBfcHJvcHMuaGJveCxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBvdGhlcnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2NsYXNzTmFtZScsICdoYm94JywgJ2NoaWxkcmVuJ10pO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzZWN0aW9uJyxcbiAgICAgICAgX2V4dGVuZHMoeyBjbGFzc05hbWU6ICdkLWZsZXggZmxleC0nICsgKGhib3ggPyAncm93JyA6ICdjb2x1bW4nKSArICcgJyArIGNsYXNzTmFtZSB9LCBvdGhlcnMpLFxuICAgICAgICBjaGlsZHJlblxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gX2RlZmF1bHQ7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkJ1dHRvbiA9IGV4cG9ydHMuRmllbGQgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZGVzYywgX3ZhbHVlLCBfY2xhc3MsIF9kZXNjMiwgX3ZhbHVlMiwgX2NsYXNzMjtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3dpdGhQcm9wcyA9IHJlcXVpcmUoJy4uL21peGluL3dpdGgtcHJvcHMnKTtcblxudmFyIF93aXRoUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2l0aFByb3BzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eSwgZGVjb3JhdG9ycywgZGVzY3JpcHRvciwgY29udGV4dCkge1xuICB2YXIgZGVzYyA9IHt9O1xuICBPYmplY3RbJ2tlJyArICd5cyddKGRlc2NyaXB0b3IpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGRlc2Nba2V5XSA9IGRlc2NyaXB0b3Jba2V5XTtcbiAgfSk7XG4gIGRlc2MuZW51bWVyYWJsZSA9ICEhZGVzYy5lbnVtZXJhYmxlO1xuICBkZXNjLmNvbmZpZ3VyYWJsZSA9ICEhZGVzYy5jb25maWd1cmFibGU7XG5cbiAgaWYgKCd2YWx1ZScgaW4gZGVzYyB8fCBkZXNjLmluaXRpYWxpemVyKSB7XG4gICAgZGVzYy53cml0YWJsZSA9IHRydWU7XG4gIH1cblxuICBkZXNjID0gZGVjb3JhdG9ycy5zbGljZSgpLnJldmVyc2UoKS5yZWR1Y2UoZnVuY3Rpb24gKGRlc2MsIGRlY29yYXRvcikge1xuICAgIHJldHVybiBkZWNvcmF0b3IodGFyZ2V0LCBwcm9wZXJ0eSwgZGVzYykgfHwgZGVzYztcbiAgfSwgZGVzYyk7XG5cbiAgaWYgKGNvbnRleHQgJiYgZGVzYy5pbml0aWFsaXplciAhPT0gdm9pZCAwKSB7XG4gICAgZGVzYy52YWx1ZSA9IGRlc2MuaW5pdGlhbGl6ZXIgPyBkZXNjLmluaXRpYWxpemVyLmNhbGwoY29udGV4dCkgOiB2b2lkIDA7XG4gICAgZGVzYy5pbml0aWFsaXplciA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmIChkZXNjLmluaXRpYWxpemVyID09PSB2b2lkIDApIHtcbiAgICBPYmplY3RbJ2RlZmluZScgKyAnUHJvcGVydHknXSh0YXJnZXQsIHByb3BlcnR5LCBkZXNjKTtcbiAgICBkZXNjID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBkZXNjO1xufVxuXG52YXIgRmllbGQgPSBleHBvcnRzLkZpZWxkID0gKF9jbGFzcyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhGaWVsZCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRmllbGQocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRmllbGQpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEZpZWxkLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRmllbGQpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiBwcm9wcy52YWx1ZSB8fCAnJ1xuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEZpZWxkLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcihfcmVmKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIF9yZWYkY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3JlZiRjbGFzc05hbWUgPT09IHVuZGVmaW5lZCA/ICcnIDogX3JlZiRjbGFzc05hbWUsXG4gICAgICAgICAgb25DaGFuZ2UgPSBfcmVmLm9uQ2hhbmdlLFxuICAgICAgICAgIG9uS2V5UHJlc3MgPSBfcmVmLm9uS2V5UHJlc3MsXG4gICAgICAgICAgb3RoZXJzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsnY2xhc3NOYW1lJywgJ29uQ2hhbmdlJywgJ29uS2V5UHJlc3MnXSk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCBfZXh0ZW5kcyh7IHR5cGU6ICd0ZXh0JywgdmFsdWU6IHRoaXMuc3RhdGUudmFsdWUsIGNsYXNzTmFtZTogJ2Zvcm0tY29udHJvbCAnICsgY2xhc3NOYW1lLFxuICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoZSkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIub25DaGFuZ2UoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9LCBvdGhlcnMpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbkNoYW5nZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlIH07XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRmllbGQ7XG59KF9yZWFjdC5Db21wb25lbnQpLCAoX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAncmVuZGVyJywgW193aXRoUHJvcHMyLmRlZmF1bHRdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdyZW5kZXInKSwgX2NsYXNzLnByb3RvdHlwZSkpLCBfY2xhc3MpO1xudmFyIEJ1dHRvbiA9IGV4cG9ydHMuQnV0dG9uID0gKF9jbGFzczIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudDIpIHtcbiAgX2luaGVyaXRzKEJ1dHRvbiwgX0NvbXBvbmVudDIpO1xuXG4gIGZ1bmN0aW9uIEJ1dHRvbigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQnV0dG9uKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQnV0dG9uLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQnV0dG9uKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQnV0dG9uLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcihfcmVmMikge1xuICAgICAgdmFyIHRleHQgPSBfcmVmMi50ZXh0LFxuICAgICAgICAgIGNoaWxkcmVuID0gX3JlZjIuY2hpbGRyZW4sXG4gICAgICAgICAgX3JlZjIkY2xhc3NOYW1lID0gX3JlZjIuY2xhc3NOYW1lLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9yZWYyJGNsYXNzTmFtZSA9PT0gdW5kZWZpbmVkID8gJycgOiBfcmVmMiRjbGFzc05hbWUsXG4gICAgICAgICAgb3RoZXJzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYyLCBbJ3RleHQnLCAnY2hpbGRyZW4nLCAnY2xhc3NOYW1lJ10pO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdidXR0b24nLFxuICAgICAgICBfZXh0ZW5kcyh7IGNsYXNzTmFtZTogJycgKyBjbGFzc05hbWUgfSwgb3RoZXJzKSxcbiAgICAgICAgdGV4dCB8fCBjaGlsZHJlblxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQnV0dG9uO1xufShfcmVhY3QuQ29tcG9uZW50KSwgKF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzMi5wcm90b3R5cGUsICdyZW5kZXInLCBbX3dpdGhQcm9wczIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzMi5wcm90b3R5cGUsICdyZW5kZXInKSwgX2NsYXNzMi5wcm90b3R5cGUpKSwgX2NsYXNzMik7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2Rlc2MsIF92YWx1ZSwgX2NsYXNzLCBfZGVzYzIsIF92YWx1ZTIsIF9jbGFzczIsIF9kZXNjMywgX3ZhbHVlMywgX2NsYXNzMywgX2Rlc2M0LCBfdmFsdWU0LCBfY2xhc3M0O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfbGlzdCA9IHJlcXVpcmUoJy4uL2NvcmUvbGlzdCcpO1xuXG52YXIgX2xpc3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGlzdCk7XG5cbnZhciBfbnVtYmVyID0gcmVxdWlyZSgnLi4vY29yZS9udW1iZXInKTtcblxudmFyIF9udW1iZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbnVtYmVyKTtcblxudmFyIF9leHQgPSByZXF1aXJlKCcuLi9jb3JlL2V4dCcpO1xuXG52YXIgX2V4dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHQpO1xuXG52YXIgX29ic2VydmFibGUgPSByZXF1aXJlKCcuLi9taXhpbi9vYnNlcnZhYmxlJyk7XG5cbnZhciBfb2JzZXJ2YWJsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYnNlcnZhYmxlKTtcblxudmFyIF93aXRoUHJvcHMgPSByZXF1aXJlKCcuLi9taXhpbi93aXRoLXByb3BzJyk7XG5cbnZhciBfd2l0aFByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dpdGhQcm9wcyk7XG5cbnZhciBfYmluZCA9IHJlcXVpcmUoJy4uL21peGluL2JpbmQnKTtcblxudmFyIF9iaW5kMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2JpbmQpO1xuXG52YXIgX2NvbnRhaW5lciA9IHJlcXVpcmUoJy4vY29udGFpbmVyJyk7XG5cbnZhciBfY29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRhaW5lcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKHRhcmdldCwgcHJvcGVydHksIGRlY29yYXRvcnMsIGRlc2NyaXB0b3IsIGNvbnRleHQpIHtcbiAgdmFyIGRlc2MgPSB7fTtcbiAgT2JqZWN0WydrZScgKyAneXMnXShkZXNjcmlwdG9yKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBkZXNjW2tleV0gPSBkZXNjcmlwdG9yW2tleV07XG4gIH0pO1xuICBkZXNjLmVudW1lcmFibGUgPSAhIWRlc2MuZW51bWVyYWJsZTtcbiAgZGVzYy5jb25maWd1cmFibGUgPSAhIWRlc2MuY29uZmlndXJhYmxlO1xuXG4gIGlmICgndmFsdWUnIGluIGRlc2MgfHwgZGVzYy5pbml0aWFsaXplcikge1xuICAgIGRlc2Mud3JpdGFibGUgPSB0cnVlO1xuICB9XG5cbiAgZGVzYyA9IGRlY29yYXRvcnMuc2xpY2UoKS5yZXZlcnNlKCkucmVkdWNlKGZ1bmN0aW9uIChkZXNjLCBkZWNvcmF0b3IpIHtcbiAgICByZXR1cm4gZGVjb3JhdG9yKHRhcmdldCwgcHJvcGVydHksIGRlc2MpIHx8IGRlc2M7XG4gIH0sIGRlc2MpO1xuXG4gIGlmIChjb250ZXh0ICYmIGRlc2MuaW5pdGlhbGl6ZXIgIT09IHZvaWQgMCkge1xuICAgIGRlc2MudmFsdWUgPSBkZXNjLmluaXRpYWxpemVyID8gZGVzYy5pbml0aWFsaXplci5jYWxsKGNvbnRleHQpIDogdm9pZCAwO1xuICAgIGRlc2MuaW5pdGlhbGl6ZXIgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAoZGVzYy5pbml0aWFsaXplciA9PT0gdm9pZCAwKSB7XG4gICAgT2JqZWN0WydkZWZpbmUnICsgJ1Byb3BlcnR5J10odGFyZ2V0LCBwcm9wZXJ0eSwgZGVzYyk7XG4gICAgZGVzYyA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gZGVzYztcbn1cblxudmFyIF9kZWZhdWx0ID0gKF9jbGFzcyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhfZGVmYXVsdCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gX2RlZmF1bHQocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgX2RlZmF1bHQpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9kZWZhdWx0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoX2RlZmF1bHQpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNvbHVtbnM6ICgwLCBfbGlzdDIuZGVmYXVsdCkocHJvcHMuY2hpbGRyZW4pLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkLnByb3BzO1xuICAgICAgfSkuY29sbGVjdCgpLFxuICAgICAgd2lkdGg6IDAsXG4gICAgICBpbm5lcldpZHRoOiAwLFxuICAgICAgaGVhZGVyV2lkdGg6IDAsXG4gICAgICBib2R5V2lkdGg6IDBcbiAgICB9O1xuICAgIF90aGlzLnJlbG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKF9kZWZhdWx0LCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLnJlc2l6ZUdyaWQoKTtcbiAgICAgIF9vYnNlcnZhYmxlMi5kZWZhdWx0LmZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKS5zdWJzY3JpYmUodGhpcy5yZXNpemVHcmlkKTtcbiAgICAgIHZhciBub2RlID0gX2V4dDIuZGVmYXVsdC5nZXRDb21wKHRoaXMpLFxuICAgICAgICAgIGhlYWRlciA9IG5vZGUuZmluZCgnLnJ4LWdyaWQtaGVhZGVyJyksXG4gICAgICAgICAgYm9keSA9IG5vZGUuZmluZCgnLnJ4LWdyaWQtYm9keScpO1xuICAgICAgX29ic2VydmFibGUyLmRlZmF1bHQuZnJvbUV2ZW50KGJvZHksICdzY3JvbGwnKS5zdWJzY3JpYmUoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGhlYWRlci5zY3JvbGxMZWZ0ID0gYm9keS5zY3JvbGxMZWZ0O1xuICAgICAgfSk7XG4gICAgICB0aGlzLnByb3BzLnN0b3JlLnN1YnNjcmliZSh0aGlzLnJlbG9hZCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMucHJvcHMuc3RvcmUudW5zdWJzY3JpYmUodGhpcy5yZWxvYWQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBzdG9yZSA9IHRoaXMucHJvcHMuc3RvcmU7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX2NvbnRhaW5lcjIuZGVmYXVsdCxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdyeC1ncmlkJyB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChHcmlkSGVhZGVyLCB0aGlzLnN0YXRlKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoR3JpZEJvZHksIF9leHRlbmRzKHsgZGF0YTogc3RvcmUuZ2V0RGF0YSgpIH0sIHRoaXMuc3RhdGUpKVxuICAgICAgKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZXNpemVHcmlkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzaXplR3JpZCgpIHtcbiAgICAgIHZhciBjb2x1bW5zID0gdGhpcy5zdGF0ZS5jb2x1bW5zLFxuICAgICAgICAgIG5vZGUgPSBfZXh0Mi5kZWZhdWx0LmdldENvbXAodGhpcyksXG4gICAgICAgICAgcGFyZW50ID0gbm9kZS5wYXJlbnQoKSxcbiAgICAgICAgICBmbGV4Q29sdW1ucyA9IFtdO1xuXG5cbiAgICAgIHZhciB3aWR0aCA9IHBhcmVudC53aWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IHBhcmVudC5oZWlnaHQoKSxcbiAgICAgICAgICBpbm5lcldpZHRoID0gKDAsIF9saXN0Mi5kZWZhdWx0KShjb2x1bW5zKS5yZWR1Y2UoZnVuY3Rpb24gKGlubmVyV2lkdGgsIGNvbCkge1xuICAgICAgICBpZiAoY29sLnN0eWxlICYmIGNvbC5zdHlsZS53aWR0aCkge1xuICAgICAgICAgIGlubmVyV2lkdGggKz0gY29sLnN0eWxlLndpZHRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZsZXhDb2x1bW5zLnB1c2goY29sKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5uZXJXaWR0aDtcbiAgICAgIH0sIDApLFxuICAgICAgICAgIGhlYWRlcldpZHRoID0gaW5uZXJXaWR0aCArIF9leHQyLmRlZmF1bHQuU0NST0xMX1dJRFRILFxuICAgICAgICAgIGJvZHlXaWR0aCA9IGlubmVyV2lkdGg7XG5cbiAgICAgIGlmIChpbm5lcldpZHRoIDwgd2lkdGggJiYgZmxleENvbHVtbnMubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgcmVtYWluV2lkdGggPSB3aWR0aCAtIGlubmVyV2lkdGggLSBfZXh0Mi5kZWZhdWx0LlNDUk9MTF9XSURUSCAtIF9leHQyLmRlZmF1bHQuQk9SREVSX1dJRFRILFxuICAgICAgICAgICAgcmVtYWluQ29sdW1uID0gZmxleENvbHVtbnMubGVuZ3RoO1xuICAgICAgICAoMCwgX2xpc3QyLmRlZmF1bHQpKGZsZXhDb2x1bW5zKS5lYWNoKGZ1bmN0aW9uIChjb2wpIHtcbiAgICAgICAgICAhY29sLnN0eWxlICYmIChjb2wuc3R5bGUgPSB7fSk7XG4gICAgICAgICAgdmFyIHdpZHRoID0gcmVtYWluQ29sdW1uID09PSAxID8gcmVtYWluV2lkdGggOiBfbnVtYmVyMi5kZWZhdWx0LnJvdW5kKHJlbWFpbldpZHRoIC8gcmVtYWluQ29sdW1uKTtcbiAgICAgICAgICBjb2wuc3R5bGUud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICByZW1haW5XaWR0aCAtPSB3aWR0aDtcbiAgICAgICAgICAtLXJlbWFpbkNvbHVtbjtcbiAgICAgICAgfSk7XG4gICAgICAgIGlubmVyV2lkdGggPSB3aWR0aDtcbiAgICAgICAgaGVhZGVyV2lkdGggPSB3aWR0aCAtIF9leHQyLmRlZmF1bHQuQk9SREVSX1dJRFRIO1xuICAgICAgICBib2R5V2lkdGggPSB3aWR0aCAtIF9leHQyLmRlZmF1bHQuU0NST0xMX1dJRFRIIC0gX2V4dDIuZGVmYXVsdC5CT1JERVJfV0lEVEg7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4geyBjb2x1bW5zOiBjb2x1bW5zLCB3aWR0aDogd2lkdGgsIGlubmVyV2lkdGg6IGlubmVyV2lkdGgsIGhlYWRlcldpZHRoOiBoZWFkZXJXaWR0aCwgYm9keVdpZHRoOiBib2R5V2lkdGggfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBfZGVmYXVsdDtcbn0oX3JlYWN0LkNvbXBvbmVudCksIChfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdyZXNpemVHcmlkJywgW19iaW5kMi5kZWZhdWx0XSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAncmVzaXplR3JpZCcpLCBfY2xhc3MucHJvdG90eXBlKSksIF9jbGFzcyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xudmFyIEdyaWRIZWFkZXIgPSAoX2NsYXNzMiA9IGZ1bmN0aW9uIChfQ29tcG9uZW50Mikge1xuICBfaW5oZXJpdHMoR3JpZEhlYWRlciwgX0NvbXBvbmVudDIpO1xuXG4gIGZ1bmN0aW9uIEdyaWRIZWFkZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdyaWRIZWFkZXIpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChHcmlkSGVhZGVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoR3JpZEhlYWRlcikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEdyaWRIZWFkZXIsIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKF9yZWYpIHtcbiAgICAgIHZhciBjb2x1bW5zID0gX3JlZi5jb2x1bW5zLFxuICAgICAgICAgIGhlYWRlcldpZHRoID0gX3JlZi5oZWFkZXJXaWR0aDtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc2VjdGlvbicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAncngtZ3JpZC1oZWFkZXInIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAncngtZ3JpZC1oZWFkZXItY29udGFpbmVyIGQtZmxleCBmbGV4LXJvdycsIHN0eWxlOiB7IHdpZHRoOiBoZWFkZXJXaWR0aCB9IH0sXG4gICAgICAgICAgY29sdW1ucyAmJiBjb2x1bW5zLm1hcChmdW5jdGlvbiAoY29sKSB7XG4gICAgICAgICAgICB2YXIgdGV4dCA9IGNvbC50ZXh0LFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNvbC5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgc3R5bGUgPSBjb2wuc3R5bGUsXG4gICAgICAgICAgICAgICAgb3RoZXJzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKGNvbCwgWyd0ZXh0JywgJ2NsYXNzTmFtZScsICdzdHlsZSddKTtcblxuICAgICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgX2V4dGVuZHMoeyBjbGFzc05hbWU6ICdyeC1ncmlkLWNvbHVtbi1oZWFkZXIgdGV4dC1jZW50ZXIgJyArIChjbGFzc05hbWUgfHwgJycpLCBzdHlsZTogc3R5bGUgfSwgb3RoZXJzKSxcbiAgICAgICAgICAgICAgdGV4dCB8fCAnJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBHcmlkSGVhZGVyO1xufShfcmVhY3QuQ29tcG9uZW50KSwgKF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzMi5wcm90b3R5cGUsICdyZW5kZXInLCBbX3dpdGhQcm9wczIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzMi5wcm90b3R5cGUsICdyZW5kZXInKSwgX2NsYXNzMi5wcm90b3R5cGUpKSwgX2NsYXNzMik7XG52YXIgR3JpZEJvZHkgPSAoX2NsYXNzMyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50Mykge1xuICBfaW5oZXJpdHMoR3JpZEJvZHksIF9Db21wb25lbnQzKTtcblxuICBmdW5jdGlvbiBHcmlkQm9keSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR3JpZEJvZHkpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChHcmlkQm9keS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEdyaWRCb2R5KSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoR3JpZEJvZHksIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKF9yZWYyKSB7XG4gICAgICB2YXIgY29sdW1ucyA9IF9yZWYyLmNvbHVtbnMsXG4gICAgICAgICAgYm9keVdpZHRoID0gX3JlZjIuYm9keVdpZHRoLFxuICAgICAgICAgIGRhdGEgPSBfcmVmMi5kYXRhO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9jb250YWluZXIyLmRlZmF1bHQsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAncngtZ3JpZC1ib2R5JyB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnc2VjdGlvbicsXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdyeC1ncmlkLXZpZXcnLCBzdHlsZTogeyB3aWR0aDogYm9keVdpZHRoIH0gfSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBzdHlsZTogeyBoZWlnaHQ6IDEgfSB9KSxcbiAgICAgICAgICBkYXRhICYmIGRhdGEubWFwKGZ1bmN0aW9uIChyZWNvcmQsIHJvd0luZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoR3JpZFJvdywgeyBjb2x1bW5zOiBjb2x1bW5zLCByZWNvcmQ6IHJlY29yZCwgcm93SW5kZXg6IHJvd0luZGV4IH0pO1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEdyaWRCb2R5O1xufShfcmVhY3QuQ29tcG9uZW50KSwgKF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzMy5wcm90b3R5cGUsICdyZW5kZXInLCBbX3dpdGhQcm9wczIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzMy5wcm90b3R5cGUsICdyZW5kZXInKSwgX2NsYXNzMy5wcm90b3R5cGUpKSwgX2NsYXNzMyk7XG52YXIgR3JpZFJvdyA9IChfY2xhc3M0ID0gZnVuY3Rpb24gKF9Db21wb25lbnQ0KSB7XG4gIF9pbmhlcml0cyhHcmlkUm93LCBfQ29tcG9uZW50NCk7XG5cbiAgZnVuY3Rpb24gR3JpZFJvdygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR3JpZFJvdyk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEdyaWRSb3cuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihHcmlkUm93KSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoR3JpZFJvdywgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoX3JlZjMpIHtcbiAgICAgIHZhciBjb2x1bW5zID0gX3JlZjMuY29sdW1ucyxcbiAgICAgICAgICByZWNvcmQgPSBfcmVmMy5yZWNvcmQsXG4gICAgICAgICAgcm93SW5kZXggPSBfcmVmMy5yb3dJbmRleDtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdyeC1ncmlkLXJvdyBkLWZsZXggZmxleC1yb3cnIH0sXG4gICAgICAgIGNvbHVtbnMgJiYgY29sdW1ucy5tYXAoZnVuY3Rpb24gKGNvbCkge1xuICAgICAgICAgIHZhciBkYXRhSW5kZXggPSBjb2wuZGF0YUluZGV4LFxuICAgICAgICAgICAgICBjbGFzc05hbWUgPSBjb2wuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICByZW5kZXIgPSBjb2wucmVuZGVyLFxuICAgICAgICAgICAgICBzdHlsZSA9IGNvbC5zdHlsZSxcbiAgICAgICAgICAgICAgb3RoZXJzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKGNvbCwgWydkYXRhSW5kZXgnLCAnY2xhc3NOYW1lJywgJ3JlbmRlcicsICdzdHlsZSddKTtcblxuICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgX2V4dGVuZHMoeyBjbGFzc05hbWU6ICdyeC1ncmlkLWNlbGwgdGV4dC1zbS1jZW50ZXIgJyArIChjbGFzc05hbWUgfHwgJycpLCBzdHlsZTogc3R5bGUgfSwgb3RoZXJzKSxcbiAgICAgICAgICAgIHJlbmRlciA/IHJlbmRlcihyZWNvcmQuZ2V0KGRhdGFJbmRleCksIHJlY29yZCwgZGF0YUluZGV4LCByb3dJbmRleCkgOiByZWNvcmQuZ2V0KGRhdGFJbmRleClcbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gR3JpZFJvdztcbn0oX3JlYWN0LkNvbXBvbmVudCksIChfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzczQucHJvdG90eXBlLCAncmVuZGVyJywgW193aXRoUHJvcHMyLmRlZmF1bHRdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzczQucHJvdG90eXBlLCAncmVuZGVyJyksIF9jbGFzczQucHJvdG90eXBlKSksIF9jbGFzczQpOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuTGluayA9IGV4cG9ydHMuSGFzaFJvdXRlciA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2xpc3QgPSByZXF1aXJlKCcuLi9jb3JlL2xpc3QnKTtcblxudmFyIF9saXN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpc3QpO1xuXG52YXIgX29ic2VydmFibGUgPSByZXF1aXJlKCcuLi9taXhpbi9vYnNlcnZhYmxlJyk7XG5cbnZhciBfb2JzZXJ2YWJsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYnNlcnZhYmxlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBST1VURVMgPSB7fSxcbiAgICBnZXRSb3V0ZSA9IGZ1bmN0aW9uIGdldFJvdXRlKCkge1xuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpIHx8ICcvJztcbn0sXG4gICAgZ2V0Um91dGVQYXRoID0gZnVuY3Rpb24gZ2V0Um91dGVQYXRoKHJvdXRlKSB7XG4gIHJldHVybiByb3V0ZS5zcGxpdCgnLycpO1xufSxcbiAgICBpc1BhcmFtID0gZnVuY3Rpb24gaXNQYXJhbShyb3V0ZU5hbWUpIHtcbiAgcmV0dXJuIHJvdXRlTmFtZS5zdGFydHNXaXRoKCc6Jyk7XG59LFxuICAgIG1hdGNoUGF0aCA9IGZ1bmN0aW9uIG1hdGNoUGF0aCgpIHtcbiAgdmFyIGN1cnJlbnRSb3V0ZSA9IGdldFJvdXRlKCksXG4gICAgICBwYXJhbXMgPSB7fTtcblxuICBpZiAoUk9VVEVTW2N1cnJlbnRSb3V0ZV0pIHtcbiAgICByZXR1cm4geyByb3V0ZTogY3VycmVudFJvdXRlLCBjb21wb25lbnQ6IFJPVVRFU1tjdXJyZW50Um91dGVdLmNvbXBvbmVudCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgfVxuXG4gIHZhciBjdXJyZW50UGF0aCA9IGdldFJvdXRlUGF0aChjdXJyZW50Um91dGUpO1xuICBmb3IgKHZhciBrZXkgaW4gUk9VVEVTKSB7XG4gICAgdmFyIHJvdXRlID0gUk9VVEVTW2tleV0sXG4gICAgICAgIHJvdXRlUGF0aCA9IHJvdXRlLnBhdGg7XG4gICAgdmFyIG1hdGNoZWQgPSB0cnVlO1xuICAgIF9saXN0Mi5kZWZhdWx0Lm9mKHJvdXRlUGF0aCkuZWFjaChmdW5jdGlvbiAocm91dGVOYW1lLCBpbmRleCkge1xuICAgICAgaWYgKHJvdXRlTmFtZSAhPT0gY3VycmVudFBhdGhbaW5kZXhdKSB7XG4gICAgICAgIGlmIChpc1BhcmFtKHJvdXRlTmFtZSkpIHtcbiAgICAgICAgICBwYXJhbXNbcm91dGVOYW1lLnN1YnN0cmluZygxKV0gPSBjdXJyZW50UGF0aFtpbmRleF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWF0Y2hlZCA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChtYXRjaGVkKSB7XG4gICAgICByZXR1cm4geyByb3V0ZTogY3VycmVudFJvdXRlLCBjb21wb25lbnQ6IHJvdXRlLmNvbXBvbmVudCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9XG4gIH1cblxuICBpZiAoUk9VVEVTWycqJ10pIHtcbiAgICByZXR1cm4geyByb3V0ZTogY3VycmVudFJvdXRlLCBjb21wb25lbnQ6IFJPVVRFU1snKiddLmNvbXBvbmVudCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgfVxuXG4gIHJldHVybiB7IHJvdXRlOiBjdXJyZW50Um91dGUsIGNvbXBvbmVudDogbnVsbCwgcGFyYW1zOiBwYXJhbXMgfTtcbn07XG5cbnZhciBIYXNoUm91dGVyID0gZXhwb3J0cy5IYXNoUm91dGVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEhhc2hSb3V0ZXIsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEhhc2hSb3V0ZXIocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSGFzaFJvdXRlcik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoSGFzaFJvdXRlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEhhc2hSb3V0ZXIpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IG1hdGNoUGF0aCgpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhIYXNoUm91dGVyLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgX29ic2VydmFibGUyLmRlZmF1bHQuZnJvbUV2ZW50KHdpbmRvdywgJ2hhc2hjaGFuZ2UnKS5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMyLnNldFN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gbWF0Y2hQYXRoKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgcm91dGUgPSBfc3RhdGUucm91dGUsXG4gICAgICAgICAgY29tcG9uZW50ID0gX3N0YXRlLmNvbXBvbmVudCxcbiAgICAgICAgICBwYXJhbXMgPSBfc3RhdGUucGFyYW1zO1xuXG5cbiAgICAgIGlmICghY29tcG9uZW50KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NvbXBvbmVudCBwcm9wcyBzaG91bGQgbm90IGJlIG51bGwnKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChjb21wb25lbnQsIHsgcm91dGU6IHJvdXRlLCBwYXJhbXM6IHBhcmFtcyB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSGFzaFJvdXRlcjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbnZhciBMaW5rID0gZXhwb3J0cy5MaW5rID0gZnVuY3Rpb24gKF9Db21wb25lbnQyKSB7XG4gIF9pbmhlcml0cyhMaW5rLCBfQ29tcG9uZW50Mik7XG5cbiAgZnVuY3Rpb24gTGluayhwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMaW5rKTtcblxuICAgIHZhciBfdGhpczMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoTGluay5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKExpbmspKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpczMuc3RhdGUgPSBtYXRjaFBhdGgoKTtcbiAgICByZXR1cm4gX3RoaXMzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKExpbmssIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICBfb2JzZXJ2YWJsZTIuZGVmYXVsdC5mcm9tRXZlbnQod2luZG93LCAnaGFzaGNoYW5nZScpLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpczQuc2V0U3RhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBtYXRjaFBhdGgoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3N0YXRlMiA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgcm91dGUgPSBfc3RhdGUyLnJvdXRlLFxuICAgICAgICAgIGNvbXBvbmVudCA9IF9zdGF0ZTIuY29tcG9uZW50LFxuICAgICAgICAgIHBhcmFtcyA9IF9zdGF0ZTIucGFyYW1zLFxuICAgICAgICAgIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgdG8gPSBfcHJvcHMudG8sXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICBfcHJvcHMkYWN0aXZlQ2xhc3NOYW0gPSBfcHJvcHMuYWN0aXZlQ2xhc3NOYW1lLFxuICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZSA9IF9wcm9wcyRhY3RpdmVDbGFzc05hbSA9PT0gdW5kZWZpbmVkID8gJ2FjdGl2ZScgOiBfcHJvcHMkYWN0aXZlQ2xhc3NOYW0sXG4gICAgICAgICAgb3RoZXJzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWyd0bycsICdjbGFzc05hbWUnLCAnYWN0aXZlQ2xhc3NOYW1lJ10pO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2EnLCBfZXh0ZW5kcyh7IGhyZWY6ICcjJyArIHRvLCBjbGFzc05hbWU6IHRvID09PSBnZXRSb3V0ZSgpID8gW2NsYXNzTmFtZSwgYWN0aXZlQ2xhc3NOYW1lXS5qb2luKCcgJykgOiBjbGFzc05hbWUgfSwgb3RoZXJzKSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIExpbms7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocm91dGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChjb21wb25lbnQpIHtcbiAgICBST1VURVNbcm91dGVdID0ge1xuICAgICAgcm91dGU6IHJvdXRlLFxuICAgICAgY29tcG9uZW50OiBjb21wb25lbnQsXG4gICAgICBwYXRoOiBnZXRSb3V0ZVBhdGgocm91dGUpXG4gICAgfTtcbiAgfTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gX2RlZmF1bHQoY29tcCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBfZGVmYXVsdCk7XG5cbiAgICB0aGlzLmNvbXAgPSAoMCwgX3JlYWN0RG9tLmZpbmRET01Ob2RlKShjb21wKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhfZGVmYXVsdCwgW3tcbiAgICBrZXk6ICdwYXJlbnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJlbnQoKSB7XG4gICAgICB0aGlzLmNvbXAgPSB0aGlzLmNvbXAucGFyZW50RWxlbWVudDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3dpZHRoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gd2lkdGgoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wLmNsaWVudFdpZHRoO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2hlaWdodCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhlaWdodCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbXAuY2xpZW50SGVpZ2h0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2ZpbmQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmaW5kKHNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBfZGVmYXVsdDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2NvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50Jyk7XG5cbnZhciBfY29tcG9uZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBvbmVudCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBFeHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEV4dCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRXh0KTtcblxuICAgIHRoaXMuU0NST0xMX1dJRFRIID0gdGhpcy5nZXRTY3JvbGxXaWR0aCgpO1xuICAgIHRoaXMuQk9SREVSX1dJRFRIID0gMjtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhFeHQsIFt7XG4gICAga2V5OiAnZ2V0QnlJZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEJ5SWQoaWQpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q29tcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENvbXAoY29tcCkge1xuICAgICAgcmV0dXJuIG5ldyBfY29tcG9uZW50Mi5kZWZhdWx0KGNvbXApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2V4dGVuZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7IC8vIGltbXV0YWJsZSBvYmplY3RcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjcmVhdGVFbGVtZW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlRWxlbWVudChodG1sKSB7XG4gICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkaXYuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgIHJldHVybiBkaXYuY2hpbGRyZW5bMF07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaXNGdW5jdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRTY3JvbGxXaWR0aCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNjcm9sbFdpZHRoKCkge1xuICAgICAgdmFyIG91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG91dGVyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgb3V0ZXIuc3R5bGUud2lkdGggPSBcIjEwMHB4XCI7XG4gICAgICBvdXRlci5zdHlsZS5tc092ZXJmbG93U3R5bGUgPSBcInNjcm9sbGJhclwiOyAvLyBuZWVkZWQgZm9yIFdpbkpTIGFwcHNcblxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdXRlcik7XG5cbiAgICAgIHZhciB3aWR0aE5vU2Nyb2xsID0gb3V0ZXIub2Zmc2V0V2lkdGg7XG4gICAgICAvLyBmb3JjZSBzY3JvbGxiYXJzXG4gICAgICBvdXRlci5zdHlsZS5vdmVyZmxvdyA9IFwic2Nyb2xsXCI7XG5cbiAgICAgIC8vIGFkZCBpbm5lcmRpdlxuICAgICAgdmFyIGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGlubmVyLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICBvdXRlci5hcHBlbmRDaGlsZChpbm5lcik7XG5cbiAgICAgIHZhciB3aWR0aFdpdGhTY3JvbGwgPSBpbm5lci5vZmZzZXRXaWR0aDtcblxuICAgICAgLy8gcmVtb3ZlIGRpdnNcbiAgICAgIG91dGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob3V0ZXIpO1xuXG4gICAgICByZXR1cm4gd2lkdGhOb1Njcm9sbCAtIHdpZHRoV2l0aFNjcm9sbDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRXh0O1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBuZXcgRXh0KCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBFTVBUWV9MSVNUID0gW107XG5cbnZhciBMaXN0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBMaXN0KHZhbHVlKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExpc3QpO1xuXG4gICAgdGhpcy5hcnJheSA9IEVNUFRZX0xJU1Q7XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlLmxlbmd0aCkge1xuICAgICAgdGhpcy5hcnJheSA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhMaXN0LCBbe1xuICAgIGtleTogXCJjb2xsZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbGxlY3QoKSB7XG4gICAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZWFjaFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlYWNoKGl0ZXJhdGVlKSB7XG4gICAgICBmb3IgKHZhciBpbmRleCA9IDAsIGl0ZW07IChpdGVtID0gdGhpcy5hcnJheVtpbmRleF0pICE9IG51bGw7ICsraW5kZXgpIHtcbiAgICAgICAgaXRlcmF0ZWUoaXRlbSwgaW5kZXgsIHRoaXMuYXJyYXkpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJtYXBcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWFwKGl0ZXJhdGVlKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4LCBhcnJheSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGl0ZW0sIGluZGV4LCBhcnJheSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgTGlzdChyZXN1bHQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZWR1Y2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVkdWNlKGl0ZXJhdGVlLCBhY2N1bXVsYXRvcikge1xuICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCwgYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yID0gaXRlcmF0ZWUoYWNjdW11bGF0b3IsIGl0ZW0sIGluZGV4LCBhcnJheSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0QXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QXQoaW5kZXgpIHtcbiAgICAgIHJldHVybiB0aGlzLmFycmF5W2luZGV4XTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTGlzdDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBuZXcgTGlzdCh2YWx1ZSk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9saXN0ID0gcmVxdWlyZSgnLi9saXN0Jyk7XG5cbnZhciBfbGlzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saXN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEVNUFRZX01BUCA9IHt9O1xuXG52YXIgTWFwID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBNYXAoa2V5VmFsdWVzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hcCk7XG5cbiAgICB0aGlzLm1hcCA9IEVNUFRZX01BUDtcbiAgICBpZiAoa2V5VmFsdWVzICYmIGtleVZhbHVlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubWFwID0gT2JqZWN0LmFzc2lnbih7fSwga2V5VmFsdWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWFwLCBbe1xuICAgIGtleTogJ2VhY2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlYWNoKGl0ZXJhdGVlKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5tYXApIHtcbiAgICAgICAgaXRlcmF0ZWUoa2V5LCB0aGlzLm1hcFtrZXldLCB0aGlzLm1hcCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdrZXlzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24ga2V5cygpIHtcbiAgICAgIHJldHVybiAoMCwgX2xpc3QyLmRlZmF1bHQpKE9iamVjdC5rZXlzKHRoaXMubWFwKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndmFsdWVzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWVzKCkge1xuICAgICAgcmV0dXJuICgwLCBfbGlzdDIuZGVmYXVsdCkoT2JqZWN0LnZhbHVlcyh0aGlzLm1hcCkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYXA7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChrZXlWYWx1ZXMpIHtcbiAgcmV0dXJuIG5ldyBNYXAoa2V5VmFsdWVzKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBOdW1iZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE51bWJlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTnVtYmVyKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhOdW1iZXIsIFt7XG4gICAga2V5OiBcInJvdW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJvdW5kKHZhbHVlKSB7XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE51bWJlcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gbmV3IE51bWJlcigpOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFN0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3RyaW5nKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdHJpbmcpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFN0cmluZywgW3tcbiAgICBrZXk6ICd0b1F1ZXJ5U3RyaW5nJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9RdWVyeVN0cmluZyhwYXJhbXMsIHNlcCwgZW5jb2RlKSB7XG4gICAgICBzZXAgPSBzZXAgPT09IHVuZGVmaW5lZCA/ICcmJyA6IHNlcDtcbiAgICAgIGVuY29kZSA9IGVuY29kZSA9PT0gZmFsc2UgPyBmdW5jdGlvbiAocykge1xuICAgICAgICByZXR1cm4gcztcbiAgICAgIH0gOiBlbmNvZGVVUklDb21wb25lbnQ7XG5cbiAgICAgIHZhciBwYWlycyA9IFtdO1xuICAgICAgZm9yICh2YXIga2V5IGluIHBhcmFtcykge1xuICAgICAgICBwYWlycy5wdXNoKGtleSArICc9JyArIGVuY29kZShwYXJhbXNba2V5XSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBhaXJzLmpvaW4oc2VwKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3RyaW5nO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBuZXcgU3RyaW5nKCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3N0cmluZyA9IHJlcXVpcmUoJy4uL2NvcmUvc3RyaW5nJyk7XG5cbnZhciBfc3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0cmluZyk7XG5cbnZhciBfZXh0ID0gcmVxdWlyZSgnLi4vY29yZS9leHQnKTtcblxudmFyIF9leHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgdmFyIGdlbiA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IGZ1bmN0aW9uIHN0ZXAoa2V5LCBhcmcpIHsgdHJ5IHsgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpOyB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlOyB9IGNhdGNoIChlcnJvcikgeyByZWplY3QoZXJyb3IpOyByZXR1cm47IH0gaWYgKGluZm8uZG9uZSkgeyByZXNvbHZlKHZhbHVlKTsgfSBlbHNlIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHsgc3RlcChcIm5leHRcIiwgdmFsdWUpOyB9LCBmdW5jdGlvbiAoZXJyKSB7IHN0ZXAoXCJ0aHJvd1wiLCBlcnIpOyB9KTsgfSB9IHJldHVybiBzdGVwKFwibmV4dFwiKTsgfSk7IH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEFqYXggPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEFqYXgoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFqYXgpO1xuXG4gICAgX2V4dDIuZGVmYXVsdC5leHRlbmQoQWpheC5wcm90b3R5cGUsIHtcbiAgICAgIHhocjogbmV3IFhNTEh0dHBSZXF1ZXN0KCksXG4gICAgICBhamF4QmVmb3JlOiBmdW5jdGlvbiBhamF4QmVmb3JlKCkgey8qIHRvIGJlIGltcGxlbWVudGVkICovfSxcbiAgICAgIGFqYXhFcnJvcjogZnVuY3Rpb24gYWpheEVycm9yKGVycm9yKSB7LyogdG8gYmUgaW1wbGVtZW50ZWQgKi99LFxuICAgICAgYWpheENvbXBsZXRlOiBmdW5jdGlvbiBhamF4Q29tcGxldGUoKSB7LyogdG8gYmUgaW1wbGVtZW50ZWQgKi99LFxuICAgICAgQkFTRV9VUkw6IG51bGxcbiAgICB9KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhBamF4LCBbe1xuICAgIGtleTogJ3JlcXVlc3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3JlZiA9IF9hc3luY1RvR2VuZXJhdG9yKHJlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUoX3JlZjIpIHtcbiAgICAgICAgdmFyIHVybCA9IF9yZWYyLnVybCxcbiAgICAgICAgICAgIF9yZWYyJG1ldGhvZCA9IF9yZWYyLm1ldGhvZCxcbiAgICAgICAgICAgIG1ldGhvZCA9IF9yZWYyJG1ldGhvZCA9PT0gdW5kZWZpbmVkID8gJ2dldCcgOiBfcmVmMiRtZXRob2QsXG4gICAgICAgICAgICBwYXJhbXMgPSBfcmVmMi5wYXJhbXMsXG4gICAgICAgICAgICBuZXh0ID0gX3JlZjIubmV4dCxcbiAgICAgICAgICAgIGVycm9yID0gX3JlZjIuZXJyb3IsXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYyLmNvbXBsZXRlO1xuICAgICAgICB2YXIgcmVzcG9uc2U7XG4gICAgICAgIHJldHVybiByZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMDtcblxuICAgICAgICAgICAgICAgIHRoaXMuYWpheEJlZm9yZSgpO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA0O1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb21pc2UoeyB1cmw6IHVybCwgbWV0aG9kOiBtZXRob2QsIHBhcmFtczogcGFyYW1zIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9jb250ZXh0LnNlbnQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdCgncmV0dXJuJywgbmV4dCA/IG5leHQocmVzcG9uc2UpIDogcmVzcG9uc2UpO1xuXG4gICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gODtcbiAgICAgICAgICAgICAgICBfY29udGV4dC50MCA9IF9jb250ZXh0WydjYXRjaCddKDApO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ2Fubm90IGdldCByZXNwb25zZSBmcm9tIHNlcnZlciBmb3IgdXJsIFsnICsgdXJsICsgJ10gY2F1c2VkIGJ5OiAnICsgX2NvbnRleHQudDApO1xuICAgICAgICAgICAgICAgIHRoaXMuYWpheEVycm9yKF9jb250ZXh0LnQwKTtcbiAgICAgICAgICAgICAgICBlcnJvciAmJiBlcnJvcihfY29udGV4dC50MCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdCgncmV0dXJuJywgbnVsbCk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMTQ7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFqYXhDb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIGNvbXBsZXRlICYmIGNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmZpbmlzaCgxNCk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZSwgdGhpcywgW1swLCA4LCAxNCwgMThdXSk7XG4gICAgICB9KSk7XG5cbiAgICAgIGZ1bmN0aW9uIHJlcXVlc3QoX3gpIHtcbiAgICAgICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgfSgpXG4gIH0sIHtcbiAgICBrZXk6ICdwcm9taXNlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJvbWlzZShzZXR0aW5ncykge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgX3RoaXMuY3JlYXRlUmVxdWVzdChzZXR0aW5ncywgZnVuY3Rpb24gKGVyciwgcmVzKSB7XG4gICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjcmVhdGVSZXF1ZXN0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlUmVxdWVzdChfcmVmMywgZG9uZSkge1xuICAgICAgdmFyIHVybCA9IF9yZWYzLnVybCxcbiAgICAgICAgICBtZXRob2QgPSBfcmVmMy5tZXRob2QsXG4gICAgICAgICAgcGFyYW1zID0gX3JlZjMucGFyYW1zO1xuXG4gICAgICB0aGlzLkJBU0VfVVJMICYmICh1cmwgPSB0aGlzLkJBU0VfVVJMICsgJy8nICsgdXJsKTtcbiAgICAgIG1ldGhvZCA9PT0gJ2dldCcgJiYgcGFyYW1zICE9PSBudWxsICYmICh1cmwgPSB1cmwgKyAnPycgKyBfc3RyaW5nMi5kZWZhdWx0LnRvUXVlcnlTdHJpbmcocGFyYW1zKSk7XG4gICAgICB2YXIgeGhyID0gdGhpcy54aHI7XG4gICAgICB4aHIub3BlbihtZXRob2QsIHVybCwgdHJ1ZSk7XG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xuICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIGRvbmUobnVsbCwgSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGRvbmUoSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIGRvbmUoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgeGhyLnNlbmQocGFyYW1zICE9PSBudWxsID8gSlNPTi5zdHJpbmdpZnkocGFyYW1zKSA6IG51bGwpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBBamF4O1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBuZXcgQWpheCgpOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIENhY2hlID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDYWNoZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2FjaGUpO1xuXG4gICAgdGhpcy5fY2FjaGUgPSB7fTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDYWNoZSwgW3tcbiAgICBrZXk6ICdoYXNMb2NhbFN0b3JhZ2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNMb2NhbFN0b3JhZ2UoKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gJ2xvY2FsU3RvcmFnZScgaW4gd2luZG93ICYmIHdpbmRvdy5sb2NhbFN0b3JhZ2UgIT09IG51bGw7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgICBpZiAodGhpcy5oYXNMb2NhbFN0b3JhZ2UoKSkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSB8fCB1bmRlZmluZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVba2V5XSB8fCB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLmhhc0xvY2FsU3RvcmFnZSgpKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2NhY2hlW2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW1vdmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoa2V5KSB7XG4gICAgICBpZiAoIWtleSkge1xuICAgICAgICB0aGlzLl9jYWNoZSA9IHt9O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmhhc0xvY2FsU3RvcmFnZSgpKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWxldGUgdGhpcy5fY2FjaGVba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ2FjaGU7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG5ldyBDYWNoZSgpOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9leHQgPSByZXF1aXJlKCcuLi9jb3JlL2V4dCcpO1xuXG52YXIgX2V4dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHQpO1xuXG52YXIgX29ic2VydmFibGUgPSByZXF1aXJlKCcuLi9taXhpbi9vYnNlcnZhYmxlJyk7XG5cbnZhciBfb2JzZXJ2YWJsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYnNlcnZhYmxlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIE1vZGVsID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBNb2RlbChkYXRhLCBzdG9yZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNb2RlbCk7XG5cbiAgICBfZXh0Mi5kZWZhdWx0LmV4dGVuZCh0aGlzLCB7XG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgc3RvcmU6IHN0b3JlXG4gICAgfSk7XG4gICAgdGhpcy5zYXZlKCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTW9kZWwsIFt7XG4gICAga2V5OiAnZ2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KGZpZWxkTmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YVtmaWVsZE5hbWVdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChmaWVsZE5hbWUsIG5ld1ZhbHVlKSB7XG4gICAgICB0aGlzLmRhdGFbZmllbGROYW1lXSA9IG5ld1ZhbHVlO1xuICAgICAgdGhpcy5zdG9yZS5vYnNlcnZhYmxlLmNhbGwodGhpcy5zdG9yZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2F2ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNhdmUoKSB7XG4gICAgICB0aGlzLnBoYW50b20gPSBfZXh0Mi5kZWZhdWx0LmV4dGVuZCh7fSwgdGhpcy5kYXRhKTtcbiAgICAgIHRoaXMuc3RvcmUub2JzZXJ2YWJsZS5jYWxsKHRoaXMuc3RvcmUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlamVjdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlamVjdCgpIHtcbiAgICAgIHRoaXMuZGF0YSA9IF9leHQyLmRlZmF1bHQuZXh0ZW5kKHt9LCB0aGlzLnBoYW50b20pO1xuICAgICAgdGhpcy5zYXZlKCk7XG4gICAgICB0aGlzLnN0b3JlLm9ic2VydmFibGUuY2FsbCh0aGlzLnN0b3JlKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTW9kZWw7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE1vZGVsOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9leHQgPSByZXF1aXJlKCcuLi9jb3JlL2V4dCcpO1xuXG52YXIgX2V4dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHQpO1xuXG52YXIgX2xpc3QgPSByZXF1aXJlKCcuLi9jb3JlL2xpc3QnKTtcblxudmFyIF9saXN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpc3QpO1xuXG52YXIgX29ic2VydmFibGUgPSByZXF1aXJlKCcuLi9taXhpbi9vYnNlcnZhYmxlJyk7XG5cbnZhciBfb2JzZXJ2YWJsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYnNlcnZhYmxlKTtcblxudmFyIF9hamF4ID0gcmVxdWlyZSgnLi9hamF4Jyk7XG5cbnZhciBfYWpheDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hamF4KTtcblxudmFyIF9tb2RlbCA9IHJlcXVpcmUoJy4vbW9kZWwnKTtcblxudmFyIF9tb2RlbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tb2RlbCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHZhciBnZW4gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyBmdW5jdGlvbiBzdGVwKGtleSwgYXJnKSB7IHRyeSB7IHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTsgdmFyIHZhbHVlID0gaW5mby52YWx1ZTsgfSBjYXRjaCAoZXJyb3IpIHsgcmVqZWN0KGVycm9yKTsgcmV0dXJuOyB9IGlmIChpbmZvLmRvbmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0gZWxzZSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7IHN0ZXAoXCJuZXh0XCIsIHZhbHVlKTsgfSwgZnVuY3Rpb24gKGVycikgeyBzdGVwKFwidGhyb3dcIiwgZXJyKTsgfSk7IH0gfSByZXR1cm4gc3RlcChcIm5leHRcIik7IH0pOyB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdmFyIERhdGFTdG9yZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEYXRhU3RvcmUoKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGF0YVN0b3JlKTtcblxuICAgICAgX2V4dDIuZGVmYXVsdC5leHRlbmQodGhpcywgY29uZmlnLCB7XG4gICAgICAgIGRhdGE6IFtdLFxuICAgICAgICBvYnNlcnZhYmxlOiBfb2JzZXJ2YWJsZTIuZGVmYXVsdC5jcmVhdGUoKVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKERhdGFTdG9yZSwgW3tcbiAgICAgIGtleTogJ3N1YnNjcmliZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2YWJsZS5zdWJzY3JpYmUob2JzZXJ2ZXIpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3Vuc3Vic2NyaWJlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB1bnN1YnNjcmliZShvYnNlcnZlcikge1xuICAgICAgICB0aGlzLm9ic2VydmFibGUudW5zdWJzY3JpYmUob2JzZXJ2ZXIpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3JlbW92ZUFsbCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlQWxsKCkge1xuICAgICAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdsb2FkRGF0YScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZERhdGEoZGF0YSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIHZhciBuZXdEYXRhID0gdGhpcy5wcm94eS5yZWFkZXIgJiYgdGhpcy5wcm94eS5yZWFkZXIucm9vdFByb3BlcnR5ID8gZGF0YVt0aGlzLnByb3h5LnJlYWRlci5yb290UHJvcGVydHldIDogZGF0YTtcbiAgICAgICAgdGhpcy5kYXRhID0gKDAsIF9saXN0Mi5kZWZhdWx0KShuZXdEYXRhKS5tYXAoZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgICAgIHJldHVybiBuZXcgX21vZGVsMi5kZWZhdWx0KHJlY29yZCwgX3RoaXMpO1xuICAgICAgICB9KS5jb2xsZWN0KCk7XG4gICAgICAgIGlmICh0aGlzLnBhZ2VTaXplKSB7XG4gICAgICAgICAgdGhpcy5wYWdlID0gZGF0YTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9ic2VydmFibGUuY2FsbCh0aGlzKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdsb2FkJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfcmVmID0gX2FzeW5jVG9HZW5lcmF0b3IocmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZShwcm94eSkge1xuICAgICAgICAgIHZhciByZXNwb25zZTtcbiAgICAgICAgICByZXR1cm4gcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMjtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYWpheDIuZGVmYXVsdC5yZXF1ZXN0KHByb3h5IHx8IHRoaXMucHJveHkpO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfY29udGV4dC5zZW50O1xuXG4gICAgICAgICAgICAgICAgICByZXNwb25zZSAmJiB0aGlzLmxvYWREYXRhKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoJ3JldHVybicsIHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgX2NhbGxlZSwgdGhpcyk7XG4gICAgICAgIH0pKTtcblxuICAgICAgICBmdW5jdGlvbiBsb2FkKF94KSB7XG4gICAgICAgICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsb2FkO1xuICAgICAgfSgpXG4gICAgfSwge1xuICAgICAga2V5OiAnbG9hZFBhZ2UnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWRQYWdlKHBhZ2UpIHtcbiAgICAgICAgdmFyIHByb3h5ID0gX2V4dDIuZGVmYXVsdC5leHRlbmQoe30sIHRoaXMucHJveHksIHsgdXJsOiB0aGlzLnByb3h5LnVybCArICc/cGFnZT0nICsgcGFnZSB9KTtcbiAgICAgICAgcmV0dXJuIGxvYWQocHJveHkpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2dldERhdGEnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldERhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnY29tbWl0Q2hhbmdlcycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tbWl0Q2hhbmdlcygpIHtcbiAgICAgICAgKDAsIF9saXN0Mi5kZWZhdWx0KSh0aGlzLmRhdGEpLmVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgICAgIHJldHVybiByZWNvcmQuc2F2ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vYnNlcnZhYmxlLmNhbGwodGhpcyk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAncmVqZWN0Q2hhbmdlcycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVqZWN0Q2hhbmdlcygpIHtcbiAgICAgICAgKDAsIF9saXN0Mi5kZWZhdWx0KSh0aGlzLmRhdGEpLmVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgICAgIHJldHVybiByZWNvcmQucmVqZWN0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm9ic2VydmFibGUuY2FsbCh0aGlzKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdnZXRBdCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QXQoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVtpbmRleF07XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIERhdGFTdG9yZTtcbiAgfSgpO1xuXG4gIHJldHVybiBuZXcgRGF0YVN0b3JlKCk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKSB7XG4gIHZhciBmbiA9IGRlc2NyaXB0b3IudmFsdWU7XG5cbiAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignQGJpbmQgZGVjb3JhdG9yIGlzIG9ubHkgYXBwbGllZCB0byBmdW5jdGlvbnMgbm90OiAnICsgKHR5cGVvZiBmbiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoZm4pKSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBmbi5iaW5kKHRoaXMpO1xuICAgIH1cbiAgfTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2V4dCA9IHJlcXVpcmUoJy4uL2NvcmUvZXh0Jyk7XG5cbnZhciBfZXh0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dCk7XG5cbnZhciBfbGlzdCA9IHJlcXVpcmUoJy4uL2NvcmUvbGlzdCcpO1xuXG52YXIgX2xpc3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGlzdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBPYnNlcnZhYmxlID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBPYnNlcnZhYmxlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBPYnNlcnZhYmxlKTtcblxuICAgIHRoaXMub2JzZXJ2ZXJzID0gW107XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoT2JzZXJ2YWJsZSwgW3tcbiAgICBrZXk6ICdzdWJzY3JpYmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Vuc3Vic2NyaWJlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5zdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICAgICgwLCBfbGlzdDIuZGVmYXVsdCkodGhpcy5vYnNlcnZlcnMpLmVhY2goZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgb2JzZXJ2ZXJzKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gb2JzZXJ2ZXIgJiYgb2JzZXJ2ZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjYWxsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FsbCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgICgwLCBfbGlzdDIuZGVmYXVsdCkodGhpcy5vYnNlcnZlcnMpLmVhY2goZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIHJldHVybiBvYnNlcnZlci5hcHBseShfdGhpcywgYXJncyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogJ2NyZWF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Zyb21FdmVudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZyb21FdmVudCh0YXJnZXQsIGV2ZW50TmFtZSkge1xuICAgICAgcmV0dXJuIG5ldyBFdmVudE9ic2VydmFibGUodGFyZ2V0LCBldmVudE5hbWUpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBPYnNlcnZhYmxlO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBPYnNlcnZhYmxlO1xuXG52YXIgRXZlbnRPYnNlcnZhYmxlID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBFdmVudE9ic2VydmFibGUodGFyZ2V0LCBldmVudE5hbWUpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRXZlbnRPYnNlcnZhYmxlKTtcblxuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgIHRoaXMuZXZlbnROYW1lID0gZXZlbnROYW1lO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEV2ZW50T2JzZXJ2YWJsZSwgW3tcbiAgICBrZXk6ICdzdWJzY3JpYmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5ldmVudE5hbWUsIG9ic2VydmVyKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRXZlbnRPYnNlcnZhYmxlO1xufSgpOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKSB7XG4gIHZhciBmbiA9IGRlc2NyaXB0b3IudmFsdWU7XG5cbiAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignQGluamVjdFByb3BzIGRlY29yYXRvciBpcyBvbmx5IGFwcGxpZWQgdG8gZnVuY3Rpb25zIG5vdDogJyArICh0eXBlb2YgZm4gPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGZuKSkpO1xuICB9XG5cbiAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZm4uYmluZCh0aGlzKSh0aGlzLnByb3BzKTtcbiAgfTtcbiAgcmV0dXJuIGRlc2NyaXB0b3I7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuQnV0dG9uID0gZXhwb3J0cy5GaWVsZCA9IGV4cG9ydHMuR3JpZCA9IGV4cG9ydHMuQ29udGFpbmVyID0gZXhwb3J0cy5MaW5rID0gZXhwb3J0cy5IYXNoUm91dGVyID0gZXhwb3J0cy5Sb3V0ZSA9IGV4cG9ydHMuYmluZCA9IGV4cG9ydHMud2l0aFByb3BzID0gZXhwb3J0cy5PYnNlcnZhYmxlID0gZXhwb3J0cy5Db21wb25lbnQgPSBleHBvcnRzLlNlcnZpY2UgPSBleHBvcnRzLk1vZGVsID0gZXhwb3J0cy5TdG9yZSA9IGV4cG9ydHMuQ2FjaGUgPSBleHBvcnRzLkFqYXggPSBleHBvcnRzLk1hcCA9IGV4cG9ydHMuTGlzdCA9IGV4cG9ydHMuU3RyaW5nID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3N0cmluZyA9IHJlcXVpcmUoJy4vY29yZS9zdHJpbmcnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTdHJpbmcnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHJpbmcpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2xpc3QgPSByZXF1aXJlKCcuL2NvcmUvbGlzdCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpc3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saXN0KS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9tYXAgPSByZXF1aXJlKCcuL2NvcmUvbWFwJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWFwJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFwKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9hamF4ID0gcmVxdWlyZSgnLi9kYXRhL2FqYXgnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdBamF4Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWpheCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfY2FjaGUgPSByZXF1aXJlKCcuL2RhdGEvY2FjaGUnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdDYWNoZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhY2hlKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9zdG9yZSA9IHJlcXVpcmUoJy4vZGF0YS9zdG9yZScpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1N0b3JlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RvcmUpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX21vZGVsID0gcmVxdWlyZSgnLi9kYXRhL21vZGVsJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTW9kZWwnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tb2RlbCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfc2VydmljZSA9IHJlcXVpcmUoJy4vYXBwL3NlcnZpY2UnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTZXJ2aWNlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2VydmljZSkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfY29tcG9uZW50ID0gcmVxdWlyZSgnLi9hcHAvY29tcG9uZW50Jyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnQ29tcG9uZW50Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcG9uZW50KS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9vYnNlcnZhYmxlID0gcmVxdWlyZSgnLi9taXhpbi9vYnNlcnZhYmxlJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT2JzZXJ2YWJsZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29ic2VydmFibGUpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX3dpdGhQcm9wcyA9IHJlcXVpcmUoJy4vbWl4aW4vd2l0aC1wcm9wcycpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3dpdGhQcm9wcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dpdGhQcm9wcykuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfYmluZCA9IHJlcXVpcmUoJy4vbWl4aW4vYmluZCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2JpbmQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iaW5kKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9yb3V0ZXIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvcm91dGVyJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUm91dGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yb3V0ZXIpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdIYXNoUm91dGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3JvdXRlci5IYXNoUm91dGVyO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9yb3V0ZXIuTGluaztcbiAgfVxufSk7XG5cbnZhciBfY29udGFpbmVyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2NvbnRhaW5lcicpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0NvbnRhaW5lcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRhaW5lcikuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfZ3JpZCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9ncmlkJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnR3JpZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dyaWQpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2Zvcm0gPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvZm9ybScpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0ZpZWxkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2Zvcm0uRmllbGQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdCdXR0b24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfZm9ybS5CdXR0b247XG4gIH1cbn0pO1xuXG5yZXF1aXJlKCdiYWJlbC1wb2x5ZmlsbCcpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9leHQgPSByZXF1aXJlKCcuL2NvcmUvZXh0Jyk7XG5cbnZhciBfZXh0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dCk7XG5cbnZhciBfbGlzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saXN0KTtcblxudmFyIF9hamF4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FqYXgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikgeyByZXR1cm4gZnVuY3Rpb24gKCkgeyB2YXIgZ2VuID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgZnVuY3Rpb24gc3RlcChrZXksIGFyZykgeyB0cnkgeyB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7IHZhciB2YWx1ZSA9IGluZm8udmFsdWU7IH0gY2F0Y2ggKGVycm9yKSB7IHJlamVjdChlcnJvcik7IHJldHVybjsgfSBpZiAoaW5mby5kb25lKSB7IHJlc29sdmUodmFsdWUpOyB9IGVsc2UgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkgeyBzdGVwKFwibmV4dFwiLCB2YWx1ZSk7IH0sIGZ1bmN0aW9uIChlcnIpIHsgc3RlcChcInRocm93XCIsIGVycik7IH0pOyB9IH0gcmV0dXJuIHN0ZXAoXCJuZXh0XCIpOyB9KTsgfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgUmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUmV4dCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmV4dCk7XG5cbiAgICB0aGlzLmV4dGVuZCA9IF9leHQyLmRlZmF1bHQuZXh0ZW5kO1xuICAgIHRoaXMuYWpheCA9IGZ1bmN0aW9uIChzZXR0aW5ncykge1xuICAgICAgcmV0dXJuIF9hamF4Mi5kZWZhdWx0LnJlcXVlc3Qoc2V0dGluZ3MpO1xuICAgIH07XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUmV4dCwgW3tcbiAgICBrZXk6ICdsYXVuY2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3JlZiA9IF9hc3luY1RvR2VuZXJhdG9yKHJlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUodmlld3BvcnQpIHtcbiAgICAgICAgdmFyIHJvb3Q7XG4gICAgICAgIHJldHVybiByZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBpZiAoIXdpbmRvdy5sb2NhdGlvbi5oYXNoKSB7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcvJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByb290ID0gX2V4dDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCc8ZGl2IGlkPVwicmVhY3Qtcm9vdFwiPjwvZGl2PicpO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyb290KTtcbiAgICAgICAgICAgICAgICBfY29udGV4dC50MCA9IF9leHQyLmRlZmF1bHQuaXNGdW5jdGlvbih2aWV3cG9ydCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIV9jb250ZXh0LnQwKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gODtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA3O1xuICAgICAgICAgICAgICAgIHJldHVybiB2aWV3cG9ydCgpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICB2aWV3cG9ydCA9IF9jb250ZXh0LnNlbnQ7XG5cbiAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICgwLCBfcmVhY3REb20ucmVuZGVyKSh2aWV3cG9ydCwgcm9vdCk7XG5cbiAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlLCB0aGlzKTtcbiAgICAgIH0pKTtcblxuICAgICAgZnVuY3Rpb24gbGF1bmNoKF94KSB7XG4gICAgICAgIHJldHVybiBfcmVmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsYXVuY2g7XG4gICAgfSgpXG4gIH1dKTtcblxuICByZXR1cm4gUmV4dDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gbmV3IFJleHQoKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIENvbXBvbmVudCB9IGZyb20gJ0AvcmV4dCdcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0AvcmV4dCc7XG5cbkBSb3V0ZSgnLycpXG5AQ29tcG9uZW50KHtcbiAgdmlldzogKHsgdm0gfSkgPT4gPENvbnRhaW5lciBjbGFzc05hbWU9XCJwYW5lbC1ib2R5XCI+PGgxPnt2bS50aXRsZX08L2gxPjwvQ29udGFpbmVyPlxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50aXRsZSA9ICdEYXNoYm9hcmQnXG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBSb3V0ZSwgQ29udGFpbmVyIH0gZnJvbSAnQC9yZXh0J1xuXG5AUm91dGUoJyonKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxDb250YWluZXI+XG4gICAgICA8aDE+Tm90IEZvdW5kPC9oMT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgfVxufSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0AvcmV4dCc7XG5pbXBvcnQgQ2FyZFN0b3JlIGZyb20gJyMvc3RvcmVzL2NhcmQnO1xuaW1wb3J0IFNlYXJjaEZvcm1WaWV3IGZyb20gJy4vc2VhcmNoLWZvcm0udmlldyc7XG5cbkBDb21wb25lbnQoe1xuICBjb21wb25lbnRBczogJ3NlYXJjaEZvcm0nLFxuICB2aWV3OiBTZWFyY2hGb3JtVmlld1xufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgc2VhcmNoKCkge1xuICAgIENhcmRTdG9yZS5sb2FkKCk7XG4gIH1cblxuICB0ZXN0KCkge1xuICAgIENhcmRTdG9yZS5nZXRBdCgwKS5zZXQoJ05hbWUnLCAnTmV3IE5hbWUnKTtcbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoUHJvcHMsIEZpZWxkLCBCdXR0b24gfSBmcm9tICdAL3JleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIEB3aXRoUHJvcHNcbiAgcmVuZGVyKHsgc2VhcmNoRm9ybSB9KSB7XG4gICAgcmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZm9ybS1pbmxpbmVcIj5cbiAgICAgIDxGaWVsZCAvPlxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG4gcHJpbWFyeVwiIHRleHQ9XCJTZWFyY2hcIiBvbkNsaWNrPXtzZWFyY2hGb3JtLnNlYXJjaH0gLz5cbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgdGV4dD1cIlRlc3RcIiBvbkNsaWNrPXtzZWFyY2hGb3JtLnRlc3R9IC8+XG4gICAgPC9zZWN0aW9uPjtcbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQgfSBmcm9tICdAL3JleHQnO1xuaW1wb3J0IENhcmRTdG9yZSBmcm9tICcjL3N0b3Jlcy9jYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxDb250YWluZXI+XG4gICAgICA8R3JpZCBzdG9yZT17Q2FyZFN0b3JlfT5cbiAgICAgICAgPGRpdiB0ZXh0PVwiSURcIiBkYXRhSW5kZXg9XCJJZFwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3t3aWR0aDoxNTB9fSAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJOYW1lXCIgZGF0YUluZGV4PVwiTmFtZVwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3t3aWR0aDoyNTB9fSAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJUeXBlXCIgZGF0YUluZGV4PVwiVHlwZVwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3t3aWR0aDoxMDB9fSAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJJbnRyb2R1Y3Rpb25cIiBkYXRhSW5kZXg9XCJJbnRyb2R1Y3Rpb25cIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6MTAwMH19IC8+XG4gICAgICAgIDxkaXYgdGV4dD1cIlNUUlwiIGRhdGFJbmRleD1cIlNUUlwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3t3aWR0aDo1MH19IC8+XG4gICAgICAgIDxkaXYgdGV4dD1cIkFHSVwiIGRhdGFJbmRleD1cIkFHSVwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3t3aWR0aDo1MH19IC8+XG4gICAgICAgIDxkaXYgdGV4dD1cIkhQXCIgZGF0YUluZGV4PVwiSFBcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6NTB9fSAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJERVhcIiBkYXRhSW5kZXg9XCJERVhcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6NTB9fSAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJJTlRcIiBkYXRhSW5kZXg9XCJJTlRcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6NTB9fSAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJTRU5cIiBkYXRhSW5kZXg9XCJTRU5cIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6NTB9fSAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJBcm1vclwiIGRhdGFJbmRleD1cIkFybW9yVXNhYmxlXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiBzdHlsZT17e3dpZHRoOjEwMH19IC8+XG4gICAgICAgIDxkaXYgdGV4dD1cIldlYXBvblwiIGRhdGFJbmRleD1cIldlYXBvblVzYWJsZVwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3t3aWR0aDoxMDB9fSAvPlxuICAgICAgPC9HcmlkPlxuICAgIDwvQ29udGFpbmVyPjtcbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29udGFpbmVyIH0gZnJvbSAnQC9yZXh0JztcbmltcG9ydCBTZWFyY2hGb3JtIGZyb20gJy4vc2VhcmNoLWZvcm0nO1xuaW1wb3J0IFNlYXJjaFJlc3VsdCBmcm9tICcuL3NlYXJjaC1yZXN1bHQnO1xuXG5AUm91dGUoJy9zZWFyY2gnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxDb250YWluZXIgY2xhc3NOYW1lPVwicGFuZWwtYm9keVwiPlxuICAgICAgPGgxPlNlYXJjaDwvaDE+XG4gICAgICA8U2VhcmNoRm9ybSAvPlxuICAgICAgPFNlYXJjaFJlc3VsdCAvPlxuICAgIDwvQ29udGFpbmVyPjtcbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Zm9vdGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdGV4dC1jZW50ZXJcIj4mY29weTsgMjAxNyBodXl0cm9uZ25ndXllbjwvZGl2PlxuICAgIDwvZm9vdGVyPjtcbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rLCBDYWNoZSB9IGZyb20gJ0AvcmV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8aGVhZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFuZFwiPlJlYWN0IENNUzwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXItYXV0b1wiPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+RGFzaGJvYXJkPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL3NlYXJjaFwiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+U2VhcmNoPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL3JlcG9ydGluZ1wiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+UmVwb3J0aW5nPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL2FkbWluXCIgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5BZG1pbmlzdHJhdGlvbjwvTGluaz5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGRpdj5IZWxsbywgPHN0cm9uZz57Q2FjaGUuZ2V0KCdjb25maWd1cmF0aW9uJykubmFtZX08L3N0cm9uZz48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPjtcbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgLi4ub3RoZXJzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiA8bmF2IHsuLi5vdGhlcnN9IC8+O1xuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxhc2lkZSBzdHlsZT17e3dpZHRoOjEwMH19IC8+O1xuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgSGFzaFJvdXRlciB9IGZyb20gJ0AvcmV4dCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCBTaWRlIGZyb20gJy4vc2lkZSc7XG5pbXBvcnQgTmF2IGZyb20gJy4vbmF2JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPENvbnRhaW5lcj5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxDb250YWluZXIgaGJveD5cbiAgICAgICAgPENvbnRhaW5lciBpZD1cIm1haW4tY29udGFpbmVyXCI+XG4gICAgICAgICAgPE5hdiAvPlxuICAgICAgICAgIDxIYXNoUm91dGVyIC8+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9Db250YWluZXI+O1xuICB9XG59IiwiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJleHQgZnJvbSAnQC9yZXh0JztcbmltcG9ydCBDb21tb25TZXJ2aWNlIGZyb20gJy4vc2VydmljZXMvY29tbW9uJztcbmltcG9ydCBWaWV3cG9ydCBmcm9tICcuL2NvbXBvbmVudHMvdmlld3BvcnQvdmlld3BvcnQnO1xuaW1wb3J0IERhc2hib2FyZCBmcm9tICcuL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZCc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoJztcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuL2NvbXBvbmVudHMvbm90Zm91bmQvbm90Zm91bmQnO1xuXG5SZXh0LmxhdW5jaChhc3luYyAoKSA9PiB7XG4gIGF3YWl0IENvbW1vblNlcnZpY2UuaW5pdEFwcCgpO1xuICByZXR1cm4gPFZpZXdwb3J0IC8+O1xufSk7IiwiaW1wb3J0IFJleHQsIHsgU2VydmljZSwgQWpheCwgQ2FjaGUgfSBmcm9tICdAL3JleHQnO1xuXG5AU2VydmljZVxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBhc3luYyBpbml0QXBwKCkge1xuICAgIGF3YWl0IEFqYXgucmVxdWVzdCh7XG4gICAgICB1cmw6ICcvYXBpL2NvbmZpZ3VyYXRpb24nLFxuICAgICAgbmV4dDogY29uZmlndXJhdGlvbiA9PiBDYWNoZS5zZXQoJ2NvbmZpZ3VyYXRpb24nLCBjb25maWd1cmF0aW9uKVxuICAgIH0pO1xuICB9XG59IiwiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAL3JleHQnXG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JlKHtcbiAgc3RvcmVJZDogJ0NhcmRTdG9yZScsXG4gIHByb3h5OiB7XG4gICAgdXJsOiAnL2FwaS9jYXJkcycsXG4gICAgbWV0aG9kOiAncG9zdCdcbiAgfVxufSk7Il19
