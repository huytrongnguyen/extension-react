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

},{"../core/ext":11,"../core/list":12,"../core/map":13,"../mixin/observable":21,"react":"react"}],2:[function(require,module,exports){
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
exports.Dropdown = exports.Button = exports.Field = undefined;

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

var _desc, _value, _class, _desc2, _value2, _class2, _desc3, _value3, _class3;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

var _list = require('../core/list');

var _list2 = _interopRequireDefault(_list);

var _observable = require('../mixin/observable');

var _observable2 = _interopRequireDefault(_observable);

var _withProps = require('../mixin/with-props');

var _withProps2 = _interopRequireDefault(_withProps);

var _withState = require('../mixin/with-state');

var _withState2 = _interopRequireDefault(_withState);

var _bind = require('../mixin/bind');

var _bind2 = _interopRequireDefault(_bind);

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
      var _ref$className = _ref.className,
          className = _ref$className === undefined ? '' : _ref$className,
          onChange = _ref.onChange,
          onKeyPress = _ref.onKeyPress,
          others = _objectWithoutProperties(_ref, ['className', 'onChange', 'onKeyPress']);

      return _react2.default.createElement('input', _extends({ type: 'text', value: this.state.value, className: 'form-control ' + className,
        onChange: this.onChange
      }, others));
    }
  }, {
    key: 'onChange',
    value: function onChange(e) {
      var value = e.target.value;

      this.setState(function () {
        return { value: value };
      });
      this.props.onChange && this.props.onChange(value);
    }
  }]);

  return Field;
}(_react.Component), (_applyDecoratedDescriptor(_class.prototype, 'render', [_withProps2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onChange', [_bind2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'onChange'), _class.prototype)), _class);
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

      return _react2.default.createElement('button', _extends({ className: 'btn ' + className }, others), text || children);
    }
  }]);

  return Button;
}(_react.Component), _applyDecoratedDescriptor(_class2.prototype, 'render', [_withProps2.default], Object.getOwnPropertyDescriptor(_class2.prototype, 'render'), _class2.prototype), _class2);
var Dropdown = exports.Dropdown = (_class3 = function (_Component3) {
  _inherits(Dropdown, _Component3);

  function Dropdown(props) {
    _classCallCheck(this, Dropdown);

    var _this3 = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

    var data = [],
        selection = (0, _list2.default)(props.value || data);
    _this3.state = {
      data: data,
      selection: selection,
      searchFilter: '',
      show: false
    };
    return _this3;
  }

  _createClass(Dropdown, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      _observable2.default.fromEvent(document, 'click').subscribe(this.closeOnBlur);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _observable2.default.fromEvent(document, 'click').unsubscribe(this.closeOnBlur);
    }
  }, {
    key: 'render',
    value: function render(_ref3) {
      var _this4 = this;

      var _ref3$className = _ref3.className,
          className = _ref3$className === undefined ? '' : _ref3$className,
          fieldLabel = _ref3.fieldLabel,
          _ref3$displayField = _ref3.displayField,
          displayField = _ref3$displayField === undefined ? 'name' : _ref3$displayField,
          others = _objectWithoutProperties(_ref3, ['className', 'fieldLabel', 'displayField']);

      var _state = this.state,
          show = _state.show,
          data = _state.data,
          selection = _state.selection,
          searchFilter = _state.searchFilter;

      return _react2.default.createElement('section', { className: 'dropdown ' + className }, _react2.default.createElement(Field, { className: 'dropdown-text', value: selection.map(function (rec) {
          return rec.get(displayField);
        }).collect().join(',') || fieldLabel, readOnly: true }), _react2.default.createElement(Button, { className: 'dropdown-toggle', onClick: this.toggle }), show && _react2.default.createElement('div', { className: 'dropdown-menu' }, _react2.default.createElement('div', { className: 'dropdown-action' }, _react2.default.createElement(Field, { value: searchFilter || '', onChange: this.filter, placeholder: 'Search...' })), _react2.default.createElement('div', { className: 'dropdown-list' }, data.map(function (rec) {
        return _react2.default.createElement('div', { className: _ext2.default.className({ 'dropdown-item': true,
            'selected': selection.contains(function (selected) {
              return selected.get(displayField) === rec.get(displayField);
            }) }),
          onClick: function onClick() {
            return _this4.select(rec);
          } }, rec.get(displayField));
      }))));
    }
  }, {
    key: 'toggle',
    value: function () {
      var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var show, _props, onCollapse, store, _props2, _store, queryMode, data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                show = this.state.show;

                show = !show;
                this.setState(function () {
                  return { show: show };
                });

                if (show) {
                  _context.next = 9;
                  break;
                }

                _props = this.props, onCollapse = _props.onCollapse, store = _props.store;

                onCollapse && onCollapse(this.state.selection.collect());
                this.setState(function () {
                  return { searchFilter: '', data: store.getData() };
                });
                _context.next = 17;
                break;

              case 9:
                _props2 = this.props, _store = _props2.store, queryMode = _props2.queryMode;
                data = this.state.data;

                if (!(!data || !data.length)) {
                  _context.next = 17;
                  break;
                }

                if (!(queryMode === 'remote')) {
                  _context.next = 15;
                  break;
                }

                _context.next = 15;
                return _store.load();

              case 15:
                data = _store.getData();
                this.setState(function () {
                  return { data: data };
                });

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function toggle() {
        return _ref4.apply(this, arguments);
      }

      return toggle;
    }()
  }, {
    key: 'select',
    value: function select(rec) {
      var onSelect = this.props.onSelect;

      onSelect && onSelect(rec);
      this.setState(function () {
        return { selection: (0, _list2.default)([rec]) };
      });
      this.toggle();
    }
  }, {
    key: 'filter',
    value: function filter(searchFilter) {
      var _props3 = this.props,
          store = _props3.store,
          displayField = _props3.displayField;

      this.setState(function () {
        return {
          searchFilter: searchFilter,
          data: store.filterBy(function (rec) {
            return rec.get(displayField).toLowerCase().startsWith(searchFilter.toLowerCase());
          }).collect()
        };
      });
    }
  }, {
    key: 'closeOnBlur',
    value: function closeOnBlur(e) {
      if (this.state.show) {
        try {
          var _target = e.target.parentElement,
              parentFound = false,
              node = (0, _reactDom.findDOMNode)(this);
          while (_target != null) {
            if (_target === node) {
              parentFound = true;
              break;
            }
            _target = _target.parentElement;
          }

          if (!parentFound) {
            this.toggle();
          }
        } catch (e) {
          console.error(e);
        }
      }
    }
  }]);

  return Dropdown;
}(_react.Component), (_applyDecoratedDescriptor(_class3.prototype, 'render', [_withProps2.default], Object.getOwnPropertyDescriptor(_class3.prototype, 'render'), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, 'toggle', [_bind2.default], Object.getOwnPropertyDescriptor(_class3.prototype, 'toggle'), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, 'select', [_bind2.default], Object.getOwnPropertyDescriptor(_class3.prototype, 'select'), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, 'filter', [_bind2.default], Object.getOwnPropertyDescriptor(_class3.prototype, 'filter'), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, 'closeOnBlur', [_bind2.default], Object.getOwnPropertyDescriptor(_class3.prototype, 'closeOnBlur'), _class3.prototype)), _class3);

},{"../core/ext":11,"../core/list":12,"../mixin/bind":20,"../mixin/observable":21,"../mixin/with-props":22,"../mixin/with-state":23,"react":"react","react-dom":"react-dom"}],5:[function(require,module,exports){
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

var _desc, _value, _class;

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

var _header = require('./grid/header');

var _header2 = _interopRequireDefault(_header);

var _body = require('./grid/body');

var _body2 = _interopRequireDefault(_body);

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
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.store.subscribe(this.reload);
      _observable2.default.fromEvent(window, 'resize').subscribe(this.resizeGrid);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.resizeGrid();
      var node = _ext2.default.getComp(this),
          header = node.find('.rx-grid-header'),
          body = node.find('.rx-grid-body');
      _observable2.default.fromEvent(body, 'scroll').subscribe(function (e) {
        return header.scrollLeft = body.scrollLeft;
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.store.unsubscribe(this.reload);
    }
  }, {
    key: 'render',
    value: function render(_ref) {
      var store = _ref.store;

      return _react2.default.createElement(_container2.default, { className: 'rx-grid' }, _react2.default.createElement(_header2.default, this.state), _react2.default.createElement(_body2.default, _extends({ data: store.getData() }, this.state)));
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
}(_react.Component), (_applyDecoratedDescriptor(_class.prototype, 'render', [_withProps2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'resizeGrid', [_bind2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'resizeGrid'), _class.prototype)), _class);

exports.default = _default;

},{"../core/ext":11,"../core/list":12,"../core/number":14,"../mixin/bind":20,"../mixin/observable":21,"../mixin/with-props":22,"./container":3,"./grid/body":6,"./grid/header":7,"react":"react"}],6:[function(require,module,exports){
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

var _desc, _value, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withProps = require('../../mixin/with-props');

var _withProps2 = _interopRequireDefault(_withProps);

var _container = require('../container');

var _container2 = _interopRequireDefault(_container);

var _row = require('./row');

var _row2 = _interopRequireDefault(_row);

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
      var columns = _ref.columns,
          bodyWidth = _ref.bodyWidth,
          data = _ref.data;

      return _react2.default.createElement(_container2.default, { className: 'rx-grid-body' }, _react2.default.createElement('section', { className: 'rx-grid-view', style: { width: bodyWidth } }, _react2.default.createElement('div', { style: { height: 1 } }), data && data.map(function (record, rowIndex) {
        return _react2.default.createElement(_row2.default, { columns: columns, record: record, rowIndex: rowIndex });
      })));
    }
  }]);

  return _default;
}(_react.Component), _applyDecoratedDescriptor(_class.prototype, 'render', [_withProps2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype), _class);

exports.default = _default;

},{"../../mixin/with-props":22,"../container":3,"./row":8,"react":"react"}],7:[function(require,module,exports){
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

var _desc, _value, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withProps = require('../../mixin/with-props');

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

var _default = (_class = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
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

  return _default;
}(_react.Component), _applyDecoratedDescriptor(_class.prototype, 'render', [_withProps2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype), _class);

exports.default = _default;

},{"../../mixin/with-props":22,"react":"react"}],8:[function(require,module,exports){
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

var _desc, _value, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withProps = require('../../mixin/with-props');

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

var _default = (_class = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: 'render',
    value: function render(_ref) {
      var columns = _ref.columns,
          record = _ref.record,
          rowIndex = _ref.rowIndex;

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

  return _default;
}(_react.Component), _applyDecoratedDescriptor(_class.prototype, 'render', [_withProps2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype), _class);

exports.default = _default;

},{"../../mixin/with-props":22,"react":"react"}],9:[function(require,module,exports){
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

},{"../core/list":12,"../mixin/observable":21,"react":"react"}],10:[function(require,module,exports){
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

},{"react-dom":"react-dom"}],11:[function(require,module,exports){
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
    key: 'className',
    value: function className(expression) {
      var cls = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.keys(expression)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key = _step.value;

          if (expression[key]) {
            cls.push(key);
          }
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

      return cls.join(' ');
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

},{"./component":10}],12:[function(require,module,exports){
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
    key: "count",
    value: function count() {
      return this.array.length;
    }
  }, {
    key: "each",
    value: function each(iteratee) {
      for (var index = 0, item; (item = this.array[index]) != null; ++index) {
        iteratee(item, index, this.array);
      }
    }
  }, {
    key: "findBy",
    value: function findBy(predicate) {
      var result = null;
      for (var index = 0, item; (item = this.array[index]) != null; ++index) {
        if (predicate(item, index, this.array)) {
          result = item;
          break;
        }
      }
      return result;
    }
  }, {
    key: "contains",
    value: function contains(predicate) {
      return this.findBy(predicate) !== null;
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
    key: "getAt",
    value: function getAt(index) {
      return this.array[index];
    }
  }, {
    key: "removeAt",
    value: function removeAt(index) {
      var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      return this.array.splice(index, count);
    }
  }, {
    key: "add",
    value: function add(item) {
      this.array.push(item);
    }
  }, {
    key: "insert",
    value: function insert(index, item) {
      this.array.splice(index, 0, item);
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

},{"./list":12}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
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

},{}],16:[function(require,module,exports){
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

},{"../core/ext":11,"../core/string":15}],17:[function(require,module,exports){
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
      this.store && this.store.observable.call(this.store);
    }
  }, {
    key: 'save',
    value: function save() {
      this.phantom = _ext2.default.extend({}, this.data);
      this.store && this.store.observable.call(this.store);
    }
  }, {
    key: 'reject',
    value: function reject() {
      this.data = _ext2.default.extend({}, this.phantom);
      this.save();
      this.store && this.store.observable.call(this.store);
    }
  }]);

  return Model;
}();

exports.default = Model;

},{"../core/ext":11,"../mixin/observable":21}],19:[function(require,module,exports){
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
      var _this = this;

      _classCallCheck(this, DataStore);

      _ext2.default.extend(this, config, {
        observable: _observable2.default.create()
      });
      this.data = (0, _list2.default)(config.data || []).map(function (record) {
        return new _model2.default(record, _this);
      });
    }

    _createClass(DataStore, [{
      key: 'load',
      value: function () {
        var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(proxy) {
          var response;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  proxy = _ext2.default.extend({}, this.proxy, proxy || {});
                  _context.next = 3;
                  return _ajax2.default.request(proxy);

                case 3:
                  response = _context.sent;

                  response && this.loadData(response);
                  return _context.abrupt('return', this);

                case 6:
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
      key: 'loadData',
      value: function loadData(data) {
        var _this2 = this;

        var newData = this.proxy.reader && this.proxy.reader.rootProperty ? data[this.proxy.reader.rootProperty] : data;
        this.data = (0, _list2.default)(newData).map(function (record) {
          return new _model2.default(record, _this2);
        });
        if (this.pageSize) {
          this.page = data;
        }
        this.observable.call(this);
      }
    }, {
      key: 'loadPage',
      value: function loadPage(page) {
        var proxy = _ext2.default.extend({}, this.proxy, { url: this.proxy.url + '?page=' + page });
        return load(proxy);
      }
    }, {
      key: 'count',
      value: function count() {
        return this.data.count();
      }
    }, {
      key: 'getData',
      value: function getData() {
        return this.data.collect();
      }
    }, {
      key: 'getAt',
      value: function getAt(index) {
        return this.data.getAt(index);
      }
    }, {
      key: 'removeAt',
      value: function removeAt(index, count) {
        return this.data.removeAt(index, count);
      }
    }, {
      key: 'removeAll',
      value: function removeAll() {
        this.data = [];
        this.observable.call(this);
      }
    }, {
      key: 'filterBy',
      value: function filterBy(predicate) {
        return this.data.filter(predicate);
      }
    }, {
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
    }]);

    return DataStore;
  }();

  return new DataStore();
};

},{"../core/ext":11,"../core/list":12,"../mixin/observable":21,"./ajax":16,"./model":18}],20:[function(require,module,exports){
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

},{}],21:[function(require,module,exports){
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

},{"../core/ext":11,"../core/list":12}],22:[function(require,module,exports){
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
    throw new Error('@withProps decorator is only applied to functions not: ' + (typeof fn === 'undefined' ? 'undefined' : _typeof(fn)));
  }

  descriptor.value = function () {
    return fn.bind(this)(this.props);
  };
  return descriptor;
};

},{}],23:[function(require,module,exports){
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
    throw new Error('@withState decorator is only applied to functions not: ' + (typeof fn === 'undefined' ? 'undefined' : _typeof(fn)));
  }

  descriptor.value = function () {
    return fn.bind(this)(this.state);
  };
  return descriptor;
};

},{}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = exports.Button = exports.Field = exports.Grid = exports.Container = exports.Link = exports.HashRouter = exports.Route = exports.bind = exports.withProps = exports.Observable = exports.Component = exports.Service = exports.Model = exports.Store = exports.Cache = exports.Ajax = exports.Map = exports.List = exports.String = undefined;

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

},{"./app/component":1,"./app/service":2,"./components/container":3,"./components/form":4,"./components/grid":5,"./components/router":9,"./core/ext":11,"./core/list":12,"./core/map":13,"./core/string":15,"./data/ajax":16,"./data/cache":17,"./data/model":18,"./data/store":19,"./mixin/bind":20,"./mixin/observable":21,"./mixin/with-props":22,"babel-polyfill":"babel-polyfill","react":"react","react-dom":"react-dom"}],25:[function(require,module,exports){
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

},{"../../../../../dist/rext":24,"react":"react"}],26:[function(require,module,exports){
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

},{"../../../../../dist/rext":24,"react":"react"}],27:[function(require,module,exports){
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

},{"../../../../../dist/rext":24,"../../stores/card":39,"./search-form.view":28}],28:[function(require,module,exports){
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

var _cardType = require('../../stores/card-type');

var _cardType2 = _interopRequireDefault(_cardType);

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
        _react2.default.createElement(_rext.Field, { className: 'mr-sm' }),
        _react2.default.createElement(_rext.Dropdown, { store: _cardType2.default, displayField: 'name', fieldLabel: 'Card Type', className: 'mr-sm' }),
        _react2.default.createElement(_rext.Button, { className: 'primary mr-sm', text: 'Search', onClick: searchForm.search })
      );
    }
  }]);

  return _default;
}(_react.Component), (_applyDecoratedDescriptor(_class.prototype, 'render', [_rext.withProps], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype)), _class);

exports.default = _default;

},{"../../../../../dist/rext":24,"../../stores/card-type":38,"react":"react"}],29:[function(require,module,exports){
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

},{"../../../../../dist/rext":24,"../../stores/card":39,"react":"react"}],30:[function(require,module,exports){
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

},{"../../../../../dist/rext":24,"./search-form":27,"./search-result":29,"react":"react"}],31:[function(require,module,exports){
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

},{"react":"react"}],32:[function(require,module,exports){
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

},{"../../../../../dist/rext":24,"react":"react"}],33:[function(require,module,exports){
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

},{"react":"react"}],34:[function(require,module,exports){
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

},{"react":"react"}],35:[function(require,module,exports){
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

},{"../../../../../dist/rext":24,"./footer":31,"./header":32,"./nav":33,"./side":34,"react":"react"}],36:[function(require,module,exports){
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

},{"../../../dist/rext":24,"./components/dashboard/dashboard":25,"./components/notfound/notfound":26,"./components/search/search":30,"./components/viewport/viewport":35,"./services/common":37,"babel-polyfill":"babel-polyfill","react":"react"}],37:[function(require,module,exports){
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

},{"../../../../dist/rext":24}],38:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rext = require('../../../../dist/rext');

exports.default = (0, _rext.Store)({
  storeId: 'CardTypeStore',
  data: [{ id: null, code: 'MELEE', name: 'Melee' }, { id: null, code: 'SHOOT', name: 'Shoot' }, { id: null, code: 'MAGIC', name: 'Magic' }]
});

},{"../../../../dist/rext":24}],39:[function(require,module,exports){
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

},{"../../../../dist/rext":24}]},{},[36])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkaXN0L2FwcC9jb21wb25lbnQuanMiLCJkaXN0L2FwcC9zZXJ2aWNlLmpzIiwiZGlzdC9jb21wb25lbnRzL2NvbnRhaW5lci5qcyIsImRpc3QvY29tcG9uZW50cy9mb3JtLmpzIiwiZGlzdC9jb21wb25lbnRzL2dyaWQuanMiLCJkaXN0L2NvbXBvbmVudHMvZ3JpZC9ib2R5LmpzIiwiZGlzdC9jb21wb25lbnRzL2dyaWQvaGVhZGVyLmpzIiwiZGlzdC9jb21wb25lbnRzL2dyaWQvcm93LmpzIiwiZGlzdC9jb21wb25lbnRzL3JvdXRlci5qcyIsImRpc3QvY29yZS9jb21wb25lbnQuanMiLCJkaXN0L2NvcmUvZXh0LmpzIiwiZGlzdC9jb3JlL2xpc3QuanMiLCJkaXN0L2NvcmUvbWFwLmpzIiwiZGlzdC9jb3JlL251bWJlci5qcyIsImRpc3QvY29yZS9zdHJpbmcuanMiLCJkaXN0L2RhdGEvYWpheC5qcyIsImRpc3QvZGF0YS9jYWNoZS5qcyIsImRpc3QvZGF0YS9tb2RlbC5qcyIsImRpc3QvZGF0YS9zdG9yZS5qcyIsImRpc3QvbWl4aW4vYmluZC5qcyIsImRpc3QvbWl4aW4vb2JzZXJ2YWJsZS5qcyIsImRpc3QvbWl4aW4vd2l0aC1wcm9wcy5qcyIsImRpc3QvbWl4aW4vd2l0aC1zdGF0ZS5qcyIsImRpc3QvcmV4dC5qcyIsImV4YW1wbGUvanMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5qcyIsImV4YW1wbGUvanMvYXBwL2NvbXBvbmVudHMvbm90Zm91bmQvbm90Zm91bmQuanN4IiwiZXhhbXBsZS9qcy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLWZvcm0uanMiLCJleGFtcGxlL2pzL2FwcC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2gtZm9ybS52aWV3LmpzeCIsImV4YW1wbGUvanMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC1yZXN1bHQuanN4IiwiZXhhbXBsZS9qcy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmpzeCIsImV4YW1wbGUvanMvYXBwL2NvbXBvbmVudHMvdmlld3BvcnQvZm9vdGVyLmpzeCIsImV4YW1wbGUvanMvYXBwL2NvbXBvbmVudHMvdmlld3BvcnQvaGVhZGVyLmpzeCIsImV4YW1wbGUvanMvYXBwL2NvbXBvbmVudHMvdmlld3BvcnQvbmF2LmpzeCIsImV4YW1wbGUvanMvYXBwL2NvbXBvbmVudHMvdmlld3BvcnQvc2lkZS5qc3giLCJleGFtcGxlL2pzL2FwcC9jb21wb25lbnRzL3ZpZXdwb3J0L3ZpZXdwb3J0LmpzeCIsImV4YW1wbGUvanMvYXBwL21haW4uanMiLCJleGFtcGxlL2pzL2FwcC9zZXJ2aWNlcy9jb21tb24uanMiLCJleGFtcGxlL2pzL2FwcC9zdG9yZXMvY2FyZC10eXBlLmpzIiwiZXhhbXBsZS9qcy9hcHAvc3RvcmVzL2NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7OztBQUVBLE9BQU8sY0FBUCxDQUFzQixPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUMzQyxTQUFPO0FBRG9DLENBQTdDOztBQUlBLElBQUksV0FBVyxPQUFPLE1BQVAsSUFBaUIsVUFBVSxNQUFWLEVBQWtCO0FBQUUsT0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLFVBQVUsTUFBOUIsRUFBc0MsR0FBdEMsRUFBMkM7QUFBRSxRQUFJLFNBQVMsVUFBVSxDQUFWLENBQWIsQ0FBMkIsS0FBSyxJQUFJLEdBQVQsSUFBZ0IsTUFBaEIsRUFBd0I7QUFBRSxVQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxNQUFyQyxFQUE2QyxHQUE3QyxDQUFKLEVBQXVEO0FBQUUsZUFBTyxHQUFQLElBQWMsT0FBTyxHQUFQLENBQWQ7QUFBNEI7QUFBRTtBQUFFLEdBQUMsT0FBTyxNQUFQO0FBQWdCLENBQWhROztBQUVBLElBQUksZUFBZSxZQUFZO0FBQUUsV0FBUyxnQkFBVCxDQUEw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QU4sRUFBWSxNQUFNLE9BQWxCLEVBQTJCLE1BQU0sT0FBakMsRUFESSxFQUVKLEVBQUUsSUFBSSxJQUFOLEVBQVksTUFBTSxPQUFsQixFQUEyQixNQUFNLE9BQWpDLEVBRkksRUFHSixFQUFFLElBQUksSUFBTixFQUFZLE1BQU0sT0FBbEIsRUFBMkIsTUFBTSxPQUFqQyxFQUhJO0FBRmEsQ0FBTixDOzs7Ozs7Ozs7QUNGZjs7a0JBRWUsaUJBQU07QUFDbkIsV0FBUyxXQURVO0FBRW5CLFNBQU87QUFDTCxTQUFLLFlBREE7QUFFTCxZQUFRO0FBRkg7QUFGWSxDQUFOLEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfZXh0ID0gcmVxdWlyZSgnLi4vY29yZS9leHQnKTtcblxudmFyIF9leHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0KTtcblxudmFyIF9saXN0ID0gcmVxdWlyZSgnLi4vY29yZS9saXN0Jyk7XG5cbnZhciBfbGlzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saXN0KTtcblxudmFyIF9tYXAgPSByZXF1aXJlKCcuLi9jb3JlL21hcCcpO1xuXG52YXIgX21hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXApO1xuXG52YXIgX29ic2VydmFibGUgPSByZXF1aXJlKCcuLi9taXhpbi9vYnNlcnZhYmxlJyk7XG5cbnZhciBfb2JzZXJ2YWJsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYnNlcnZhYmxlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgdmFyIGdlbiA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IGZ1bmN0aW9uIHN0ZXAoa2V5LCBhcmcpIHsgdHJ5IHsgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpOyB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlOyB9IGNhdGNoIChlcnJvcikgeyByZWplY3QoZXJyb3IpOyByZXR1cm47IH0gaWYgKGluZm8uZG9uZSkgeyByZXNvbHZlKHZhbHVlKTsgfSBlbHNlIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHsgc3RlcChcIm5leHRcIiwgdmFsdWUpOyB9LCBmdW5jdGlvbiAoZXJyKSB7IHN0ZXAoXCJ0aHJvd1wiLCBlcnIpOyB9KTsgfSB9IHJldHVybiBzdGVwKFwibmV4dFwiKTsgfSk7IH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoY29tcCkge1xuICAgIHZhciBXcmFwcGVkQ29tcG9uZW50ID0gY29uZmlnLnZpZXc7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgICBfaW5oZXJpdHMoX2NsYXNzLCBfQ29tcG9uZW50KTtcblxuICAgICAgZnVuY3Rpb24gX2NsYXNzKHByb3BzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBfY2xhc3MpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfY2xhc3MuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihfY2xhc3MpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgICAgX3RoaXMuc3RhdGUgPSBfZGVmaW5lUHJvcGVydHkoe1xuICAgICAgICAgIHN0b3Jlczoge31cbiAgICAgICAgfSwgY29uZmlnLmNvbXBvbmVudEFzIHx8ICd2bScsIG5ldyBjb21wKCkpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICB9XG5cbiAgICAgIF9jcmVhdGVDbGFzcyhfY2xhc3MsIFt7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxNb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICB2YXIgc3RvcmVzID0gKDAsIF9saXN0Mi5kZWZhdWx0KShjb25maWcuc3RvcmVzKS5yZWR1Y2UoZnVuY3Rpb24gKHN0b3Jlcywgc3RvcmUpIHtcbiAgICAgICAgICAgIHN0b3JlLnN1YnNjcmliZShfdGhpczIub25EYXRhQ2hhbmdlZC5iaW5kKF90aGlzMikpO1xuICAgICAgICAgICAgc3RvcmVzW3N0b3JlLnN0b3JlSWRdID0gc3RvcmU7XG4gICAgICAgICAgICByZXR1cm4gc3RvcmVzO1xuICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN0b3Jlczogc3RvcmVzIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBfcmVmID0gX2FzeW5jVG9HZW5lcmF0b3IocmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZSgpIHtcbiAgICAgICAgICAgIHZhciBzdG9yZXMsIHN0b3JlSWQ7XG4gICAgICAgICAgICByZXR1cm4gcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlcyA9IHRoaXMuc3RhdGUuc3RvcmVzO1xuICAgICAgICAgICAgICAgICAgICBfY29udGV4dC50MCA9IHJlZ2VuZXJhdG9yUnVudGltZS5rZXlzKHN0b3Jlcyk7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgaWYgKChfY29udGV4dC50MSA9IF9jb250ZXh0LnQwKCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gOTtcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlSWQgPSBfY29udGV4dC50MS52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIXN0b3Jlc1tzdG9yZUlkXS5hdXRvTG9hZCkge1xuICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA3O1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDc7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdG9yZXNbc3RvcmVJZF0ubG9hZCgpO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIF9jYWxsZWUsIHRoaXMpO1xuICAgICAgICAgIH0pKTtcblxuICAgICAgICAgIGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29tcG9uZW50RGlkTW91bnQ7XG4gICAgICAgIH0oKVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICgwLCBfbWFwMi5kZWZhdWx0KSh0aGlzLnN0YXRlLnN0b3JlcykuZWFjaChmdW5jdGlvbiAoc3RvcmVJZCwgc3RvcmUpIHtcbiAgICAgICAgICAgIHN0b3JlLnVuc3Vic2NyaWJlKF90aGlzMy5vbkRhdGFDaGFuZ2VkKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChXcmFwcGVkQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgdGhpcy5zdGF0ZSwgdGhpcy5wcm9wcykpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ29uRGF0YUNoYW5nZWQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25EYXRhQ2hhbmdlZChzdG9yZSkge1xuICAgICAgICAgIHZhciBzdG9yZXMgPSB0aGlzLnN0YXRlLnN0b3JlcztcblxuICAgICAgICAgIHN0b3Jlc1tzdG9yZS5zdG9yZUlkXSA9IHN0b3JlO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3RvcmVzOiBzdG9yZXMgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gX2NsYXNzO1xuICAgIH0oX3JlYWN0LkNvbXBvbmVudCk7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoU2VydmljZSkge1xuICByZXR1cm4gbmV3IFNlcnZpY2UoKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoX2RlZmF1bHQsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIF9kZWZhdWx0KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBfZGVmYXVsdCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9kZWZhdWx0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoX2RlZmF1bHQpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhfZGVmYXVsdCwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBfcHJvcHMkY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMkY2xhc3NOYW1lID09PSB1bmRlZmluZWQgPyAnJyA6IF9wcm9wcyRjbGFzc05hbWUsXG4gICAgICAgICAgaGJveCA9IF9wcm9wcy5oYm94LFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIG90aGVycyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnY2xhc3NOYW1lJywgJ2hib3gnLCAnY2hpbGRyZW4nXSk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NlY3Rpb24nLFxuICAgICAgICBfZXh0ZW5kcyh7IGNsYXNzTmFtZTogJ2QtZmxleCBmbGV4LScgKyAoaGJveCA/ICdyb3cnIDogJ2NvbHVtbicpICsgJyAnICsgY2xhc3NOYW1lIH0sIG90aGVycyksXG4gICAgICAgIGNoaWxkcmVuXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBfZGVmYXVsdDtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuRHJvcGRvd24gPSBleHBvcnRzLkJ1dHRvbiA9IGV4cG9ydHMuRmllbGQgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZGVzYywgX3ZhbHVlLCBfY2xhc3MsIF9kZXNjMiwgX3ZhbHVlMiwgX2NsYXNzMiwgX2Rlc2MzLCBfdmFsdWUzLCBfY2xhc3MzO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9leHQgPSByZXF1aXJlKCcuLi9jb3JlL2V4dCcpO1xuXG52YXIgX2V4dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHQpO1xuXG52YXIgX2xpc3QgPSByZXF1aXJlKCcuLi9jb3JlL2xpc3QnKTtcblxudmFyIF9saXN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpc3QpO1xuXG52YXIgX29ic2VydmFibGUgPSByZXF1aXJlKCcuLi9taXhpbi9vYnNlcnZhYmxlJyk7XG5cbnZhciBfb2JzZXJ2YWJsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYnNlcnZhYmxlKTtcblxudmFyIF93aXRoUHJvcHMgPSByZXF1aXJlKCcuLi9taXhpbi93aXRoLXByb3BzJyk7XG5cbnZhciBfd2l0aFByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dpdGhQcm9wcyk7XG5cbnZhciBfd2l0aFN0YXRlID0gcmVxdWlyZSgnLi4vbWl4aW4vd2l0aC1zdGF0ZScpO1xuXG52YXIgX3dpdGhTdGF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93aXRoU3RhdGUpO1xuXG52YXIgX2JpbmQgPSByZXF1aXJlKCcuLi9taXhpbi9iaW5kJyk7XG5cbnZhciBfYmluZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iaW5kKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgdmFyIGdlbiA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IGZ1bmN0aW9uIHN0ZXAoa2V5LCBhcmcpIHsgdHJ5IHsgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpOyB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlOyB9IGNhdGNoIChlcnJvcikgeyByZWplY3QoZXJyb3IpOyByZXR1cm47IH0gaWYgKGluZm8uZG9uZSkgeyByZXNvbHZlKHZhbHVlKTsgfSBlbHNlIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHsgc3RlcChcIm5leHRcIiwgdmFsdWUpOyB9LCBmdW5jdGlvbiAoZXJyKSB7IHN0ZXAoXCJ0aHJvd1wiLCBlcnIpOyB9KTsgfSB9IHJldHVybiBzdGVwKFwibmV4dFwiKTsgfSk7IH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eSwgZGVjb3JhdG9ycywgZGVzY3JpcHRvciwgY29udGV4dCkge1xuICB2YXIgZGVzYyA9IHt9O1xuICBPYmplY3RbJ2tlJyArICd5cyddKGRlc2NyaXB0b3IpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGRlc2Nba2V5XSA9IGRlc2NyaXB0b3Jba2V5XTtcbiAgfSk7XG4gIGRlc2MuZW51bWVyYWJsZSA9ICEhZGVzYy5lbnVtZXJhYmxlO1xuICBkZXNjLmNvbmZpZ3VyYWJsZSA9ICEhZGVzYy5jb25maWd1cmFibGU7XG5cbiAgaWYgKCd2YWx1ZScgaW4gZGVzYyB8fCBkZXNjLmluaXRpYWxpemVyKSB7XG4gICAgZGVzYy53cml0YWJsZSA9IHRydWU7XG4gIH1cblxuICBkZXNjID0gZGVjb3JhdG9ycy5zbGljZSgpLnJldmVyc2UoKS5yZWR1Y2UoZnVuY3Rpb24gKGRlc2MsIGRlY29yYXRvcikge1xuICAgIHJldHVybiBkZWNvcmF0b3IodGFyZ2V0LCBwcm9wZXJ0eSwgZGVzYykgfHwgZGVzYztcbiAgfSwgZGVzYyk7XG5cbiAgaWYgKGNvbnRleHQgJiYgZGVzYy5pbml0aWFsaXplciAhPT0gdm9pZCAwKSB7XG4gICAgZGVzYy52YWx1ZSA9IGRlc2MuaW5pdGlhbGl6ZXIgPyBkZXNjLmluaXRpYWxpemVyLmNhbGwoY29udGV4dCkgOiB2b2lkIDA7XG4gICAgZGVzYy5pbml0aWFsaXplciA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmIChkZXNjLmluaXRpYWxpemVyID09PSB2b2lkIDApIHtcbiAgICBPYmplY3RbJ2RlZmluZScgKyAnUHJvcGVydHknXSh0YXJnZXQsIHByb3BlcnR5LCBkZXNjKTtcbiAgICBkZXNjID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBkZXNjO1xufVxuXG52YXIgRmllbGQgPSBleHBvcnRzLkZpZWxkID0gKF9jbGFzcyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhGaWVsZCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRmllbGQocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRmllbGQpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEZpZWxkLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRmllbGQpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiBwcm9wcy52YWx1ZSB8fCAnJ1xuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEZpZWxkLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcihfcmVmKSB7XG4gICAgICB2YXIgX3JlZiRjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfcmVmJGNsYXNzTmFtZSA9PT0gdW5kZWZpbmVkID8gJycgOiBfcmVmJGNsYXNzTmFtZSxcbiAgICAgICAgICBvbkNoYW5nZSA9IF9yZWYub25DaGFuZ2UsXG4gICAgICAgICAgb25LZXlQcmVzcyA9IF9yZWYub25LZXlQcmVzcyxcbiAgICAgICAgICBvdGhlcnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWydjbGFzc05hbWUnLCAnb25DaGFuZ2UnLCAnb25LZXlQcmVzcyddKTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIF9leHRlbmRzKHsgdHlwZTogJ3RleHQnLCB2YWx1ZTogdGhpcy5zdGF0ZS52YWx1ZSwgY2xhc3NOYW1lOiAnZm9ybS1jb250cm9sICcgKyBjbGFzc05hbWUsXG4gICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlXG4gICAgICB9LCBvdGhlcnMpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbkNoYW5nZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2hhbmdlKGUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlIH07XG4gICAgICB9KTtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEZpZWxkO1xufShfcmVhY3QuQ29tcG9uZW50KSwgKF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ3JlbmRlcicsIFtfd2l0aFByb3BzMi5kZWZhdWx0XSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAncmVuZGVyJyksIF9jbGFzcy5wcm90b3R5cGUpLCBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdvbkNoYW5nZScsIFtfYmluZDIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ29uQ2hhbmdlJyksIF9jbGFzcy5wcm90b3R5cGUpKSwgX2NsYXNzKTtcbnZhciBCdXR0b24gPSBleHBvcnRzLkJ1dHRvbiA9IChfY2xhc3MyID0gZnVuY3Rpb24gKF9Db21wb25lbnQyKSB7XG4gIF9pbmhlcml0cyhCdXR0b24sIF9Db21wb25lbnQyKTtcblxuICBmdW5jdGlvbiBCdXR0b24oKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJ1dHRvbik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEJ1dHRvbi5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEJ1dHRvbikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEJ1dHRvbiwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoX3JlZjIpIHtcbiAgICAgIHZhciB0ZXh0ID0gX3JlZjIudGV4dCxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9yZWYyLmNoaWxkcmVuLFxuICAgICAgICAgIF9yZWYyJGNsYXNzTmFtZSA9IF9yZWYyLmNsYXNzTmFtZSxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfcmVmMiRjbGFzc05hbWUgPT09IHVuZGVmaW5lZCA/ICcnIDogX3JlZjIkY2xhc3NOYW1lLFxuICAgICAgICAgIG90aGVycyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmMiwgWyd0ZXh0JywgJ2NoaWxkcmVuJywgJ2NsYXNzTmFtZSddKTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgX2V4dGVuZHMoeyBjbGFzc05hbWU6ICdidG4gJyArIGNsYXNzTmFtZSB9LCBvdGhlcnMpLFxuICAgICAgICB0ZXh0IHx8IGNoaWxkcmVuXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBCdXR0b247XG59KF9yZWFjdC5Db21wb25lbnQpLCAoX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MyLnByb3RvdHlwZSwgJ3JlbmRlcicsIFtfd2l0aFByb3BzMi5kZWZhdWx0XSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfY2xhc3MyLnByb3RvdHlwZSwgJ3JlbmRlcicpLCBfY2xhc3MyLnByb3RvdHlwZSkpLCBfY2xhc3MyKTtcbnZhciBEcm9wZG93biA9IGV4cG9ydHMuRHJvcGRvd24gPSAoX2NsYXNzMyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50Mykge1xuICBfaW5oZXJpdHMoRHJvcGRvd24sIF9Db21wb25lbnQzKTtcblxuICBmdW5jdGlvbiBEcm9wZG93bihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEcm9wZG93bik7XG5cbiAgICB2YXIgX3RoaXMzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKERyb3Bkb3duLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRHJvcGRvd24pKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICB2YXIgZGF0YSA9IFtdLFxuICAgICAgICBzZWxlY3Rpb24gPSAoMCwgX2xpc3QyLmRlZmF1bHQpKHByb3BzLnZhbHVlIHx8IGRhdGEpO1xuICAgIF90aGlzMy5zdGF0ZSA9IHtcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBzZWxlY3Rpb246IHNlbGVjdGlvbixcbiAgICAgIHNlYXJjaEZpbHRlcjogJycsXG4gICAgICBzaG93OiBmYWxzZVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzMztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEcm9wZG93biwgW3tcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICBfb2JzZXJ2YWJsZTIuZGVmYXVsdC5mcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpLnN1YnNjcmliZSh0aGlzLmNsb3NlT25CbHVyKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgX29ic2VydmFibGUyLmRlZmF1bHQuZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKS51bnN1YnNjcmliZSh0aGlzLmNsb3NlT25CbHVyKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoX3JlZjMpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICB2YXIgX3JlZjMkY2xhc3NOYW1lID0gX3JlZjMuY2xhc3NOYW1lLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9yZWYzJGNsYXNzTmFtZSA9PT0gdW5kZWZpbmVkID8gJycgOiBfcmVmMyRjbGFzc05hbWUsXG4gICAgICAgICAgZmllbGRMYWJlbCA9IF9yZWYzLmZpZWxkTGFiZWwsXG4gICAgICAgICAgX3JlZjMkZGlzcGxheUZpZWxkID0gX3JlZjMuZGlzcGxheUZpZWxkLFxuICAgICAgICAgIGRpc3BsYXlGaWVsZCA9IF9yZWYzJGRpc3BsYXlGaWVsZCA9PT0gdW5kZWZpbmVkID8gJ25hbWUnIDogX3JlZjMkZGlzcGxheUZpZWxkLFxuICAgICAgICAgIG90aGVycyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmMywgWydjbGFzc05hbWUnLCAnZmllbGRMYWJlbCcsICdkaXNwbGF5RmllbGQnXSk7XG5cbiAgICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIHNob3cgPSBfc3RhdGUuc2hvdyxcbiAgICAgICAgICBkYXRhID0gX3N0YXRlLmRhdGEsXG4gICAgICAgICAgc2VsZWN0aW9uID0gX3N0YXRlLnNlbGVjdGlvbixcbiAgICAgICAgICBzZWFyY2hGaWx0ZXIgPSBfc3RhdGUuc2VhcmNoRmlsdGVyO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzZWN0aW9uJyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdkcm9wZG93biAnICsgY2xhc3NOYW1lIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEZpZWxkLCB7IGNsYXNzTmFtZTogJ2Ryb3Bkb3duLXRleHQnLCB2YWx1ZTogc2VsZWN0aW9uLm1hcChmdW5jdGlvbiAocmVjKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVjLmdldChkaXNwbGF5RmllbGQpO1xuICAgICAgICAgIH0pLmNvbGxlY3QoKS5qb2luKCcsJykgfHwgZmllbGRMYWJlbCwgcmVhZE9ubHk6IHRydWUgfSksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBjbGFzc05hbWU6ICdkcm9wZG93bi10b2dnbGUnLCBvbkNsaWNrOiB0aGlzLnRvZ2dsZSB9KSxcbiAgICAgICAgc2hvdyAmJiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ2Ryb3Bkb3duLW1lbnUnIH0sXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnZHJvcGRvd24tYWN0aW9uJyB9LFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoRmllbGQsIHsgdmFsdWU6IHNlYXJjaEZpbHRlciB8fCAnJywgb25DaGFuZ2U6IHRoaXMuZmlsdGVyLCBwbGFjZWhvbGRlcjogJ1NlYXJjaC4uLicgfSlcbiAgICAgICAgICApLFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2Ryb3Bkb3duLWxpc3QnIH0sXG4gICAgICAgICAgICBkYXRhLm1hcChmdW5jdGlvbiAocmVjKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogX2V4dDIuZGVmYXVsdC5jbGFzc05hbWUoeyAnZHJvcGRvd24taXRlbSc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICdzZWxlY3RlZCc6IHNlbGVjdGlvbi5jb250YWlucyhmdW5jdGlvbiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWQuZ2V0KGRpc3BsYXlGaWVsZCkgPT09IHJlYy5nZXQoZGlzcGxheUZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgfSkgfSksXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXM0LnNlbGVjdChyZWMpO1xuICAgICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgIHJlYy5nZXQoZGlzcGxheUZpZWxkKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndG9nZ2xlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9yZWY0ID0gX2FzeW5jVG9HZW5lcmF0b3IocmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZSgpIHtcbiAgICAgICAgdmFyIHNob3csIF9wcm9wcywgb25Db2xsYXBzZSwgc3RvcmUsIF9wcm9wczIsIF9zdG9yZSwgcXVlcnlNb2RlLCBkYXRhO1xuXG4gICAgICAgIHJldHVybiByZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBzaG93ID0gdGhpcy5zdGF0ZS5zaG93O1xuXG4gICAgICAgICAgICAgICAgc2hvdyA9ICFzaG93O1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgc2hvdzogc2hvdyB9O1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNob3cpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA5O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX3Byb3BzID0gdGhpcy5wcm9wcywgb25Db2xsYXBzZSA9IF9wcm9wcy5vbkNvbGxhcHNlLCBzdG9yZSA9IF9wcm9wcy5zdG9yZTtcblxuICAgICAgICAgICAgICAgIG9uQ29sbGFwc2UgJiYgb25Db2xsYXBzZSh0aGlzLnN0YXRlLnNlbGVjdGlvbi5jb2xsZWN0KCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgc2VhcmNoRmlsdGVyOiAnJywgZGF0YTogc3RvcmUuZ2V0RGF0YSgpIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDE3O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICBfcHJvcHMyID0gdGhpcy5wcm9wcywgX3N0b3JlID0gX3Byb3BzMi5zdG9yZSwgcXVlcnlNb2RlID0gX3Byb3BzMi5xdWVyeU1vZGU7XG4gICAgICAgICAgICAgICAgZGF0YSA9IHRoaXMuc3RhdGUuZGF0YTtcblxuICAgICAgICAgICAgICAgIGlmICghKCFkYXRhIHx8ICFkYXRhLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxNztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghKHF1ZXJ5TW9kZSA9PT0gJ3JlbW90ZScpKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTU7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9zdG9yZS5sb2FkKCk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICAgICAgICBkYXRhID0gX3N0b3JlLmdldERhdGEoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7IGRhdGE6IGRhdGEgfTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDE3OlxuICAgICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlLCB0aGlzKTtcbiAgICAgIH0pKTtcblxuICAgICAgZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgICAgICByZXR1cm4gX3JlZjQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRvZ2dsZTtcbiAgICB9KClcbiAgfSwge1xuICAgIGtleTogJ3NlbGVjdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlbGVjdChyZWMpIHtcbiAgICAgIHZhciBvblNlbGVjdCA9IHRoaXMucHJvcHMub25TZWxlY3Q7XG5cbiAgICAgIG9uU2VsZWN0ICYmIG9uU2VsZWN0KHJlYyk7XG4gICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHsgc2VsZWN0aW9uOiAoMCwgX2xpc3QyLmRlZmF1bHQpKFtyZWNdKSB9O1xuICAgICAgfSk7XG4gICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2ZpbHRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZpbHRlcihzZWFyY2hGaWx0ZXIpIHtcbiAgICAgIHZhciBfcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBzdG9yZSA9IF9wcm9wczMuc3RvcmUsXG4gICAgICAgICAgZGlzcGxheUZpZWxkID0gX3Byb3BzMy5kaXNwbGF5RmllbGQ7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHNlYXJjaEZpbHRlcjogc2VhcmNoRmlsdGVyLFxuICAgICAgICAgIGRhdGE6IHN0b3JlLmZpbHRlckJ5KGZ1bmN0aW9uIChyZWMpIHtcbiAgICAgICAgICAgIHJldHVybiByZWMuZ2V0KGRpc3BsYXlGaWVsZCkudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKHNlYXJjaEZpbHRlci50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICB9KS5jb2xsZWN0KClcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Nsb3NlT25CbHVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2VPbkJsdXIoZSkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvdykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciBfdGFyZ2V0ID0gZS50YXJnZXQucGFyZW50RWxlbWVudCxcbiAgICAgICAgICAgICAgcGFyZW50Rm91bmQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgbm9kZSA9ICgwLCBfcmVhY3REb20uZmluZERPTU5vZGUpKHRoaXMpO1xuICAgICAgICAgIHdoaWxlIChfdGFyZ2V0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChfdGFyZ2V0ID09PSBub2RlKSB7XG4gICAgICAgICAgICAgIHBhcmVudEZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGFyZ2V0ID0gX3RhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghcGFyZW50Rm91bmQpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBEcm9wZG93bjtcbn0oX3JlYWN0LkNvbXBvbmVudCksIChfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzczMucHJvdG90eXBlLCAncmVuZGVyJywgW193aXRoUHJvcHMyLmRlZmF1bHRdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzczMucHJvdG90eXBlLCAncmVuZGVyJyksIF9jbGFzczMucHJvdG90eXBlKSwgX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MzLnByb3RvdHlwZSwgJ3RvZ2dsZScsIFtfYmluZDIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzMy5wcm90b3R5cGUsICd0b2dnbGUnKSwgX2NsYXNzMy5wcm90b3R5cGUpLCBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzczMucHJvdG90eXBlLCAnc2VsZWN0JywgW19iaW5kMi5kZWZhdWx0XSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfY2xhc3MzLnByb3RvdHlwZSwgJ3NlbGVjdCcpLCBfY2xhc3MzLnByb3RvdHlwZSksIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzMy5wcm90b3R5cGUsICdmaWx0ZXInLCBbX2JpbmQyLmRlZmF1bHRdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzczMucHJvdG90eXBlLCAnZmlsdGVyJyksIF9jbGFzczMucHJvdG90eXBlKSwgX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MzLnByb3RvdHlwZSwgJ2Nsb3NlT25CbHVyJywgW19iaW5kMi5kZWZhdWx0XSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfY2xhc3MzLnByb3RvdHlwZSwgJ2Nsb3NlT25CbHVyJyksIF9jbGFzczMucHJvdG90eXBlKSksIF9jbGFzczMpOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9kZXNjLCBfdmFsdWUsIF9jbGFzcztcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2xpc3QgPSByZXF1aXJlKCcuLi9jb3JlL2xpc3QnKTtcblxudmFyIF9saXN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpc3QpO1xuXG52YXIgX251bWJlciA9IHJlcXVpcmUoJy4uL2NvcmUvbnVtYmVyJyk7XG5cbnZhciBfbnVtYmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX251bWJlcik7XG5cbnZhciBfZXh0ID0gcmVxdWlyZSgnLi4vY29yZS9leHQnKTtcblxudmFyIF9leHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0KTtcblxudmFyIF9vYnNlcnZhYmxlID0gcmVxdWlyZSgnLi4vbWl4aW4vb2JzZXJ2YWJsZScpO1xuXG52YXIgX29ic2VydmFibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JzZXJ2YWJsZSk7XG5cbnZhciBfd2l0aFByb3BzID0gcmVxdWlyZSgnLi4vbWl4aW4vd2l0aC1wcm9wcycpO1xuXG52YXIgX3dpdGhQcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93aXRoUHJvcHMpO1xuXG52YXIgX2JpbmQgPSByZXF1aXJlKCcuLi9taXhpbi9iaW5kJyk7XG5cbnZhciBfYmluZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iaW5kKTtcblxudmFyIF9jb250YWluZXIgPSByZXF1aXJlKCcuL2NvbnRhaW5lcicpO1xuXG52YXIgX2NvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb250YWluZXIpO1xuXG52YXIgX2hlYWRlciA9IHJlcXVpcmUoJy4vZ3JpZC9oZWFkZXInKTtcblxudmFyIF9oZWFkZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVhZGVyKTtcblxudmFyIF9ib2R5ID0gcmVxdWlyZSgnLi9ncmlkL2JvZHknKTtcblxudmFyIF9ib2R5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2JvZHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eSwgZGVjb3JhdG9ycywgZGVzY3JpcHRvciwgY29udGV4dCkge1xuICB2YXIgZGVzYyA9IHt9O1xuICBPYmplY3RbJ2tlJyArICd5cyddKGRlc2NyaXB0b3IpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGRlc2Nba2V5XSA9IGRlc2NyaXB0b3Jba2V5XTtcbiAgfSk7XG4gIGRlc2MuZW51bWVyYWJsZSA9ICEhZGVzYy5lbnVtZXJhYmxlO1xuICBkZXNjLmNvbmZpZ3VyYWJsZSA9ICEhZGVzYy5jb25maWd1cmFibGU7XG5cbiAgaWYgKCd2YWx1ZScgaW4gZGVzYyB8fCBkZXNjLmluaXRpYWxpemVyKSB7XG4gICAgZGVzYy53cml0YWJsZSA9IHRydWU7XG4gIH1cblxuICBkZXNjID0gZGVjb3JhdG9ycy5zbGljZSgpLnJldmVyc2UoKS5yZWR1Y2UoZnVuY3Rpb24gKGRlc2MsIGRlY29yYXRvcikge1xuICAgIHJldHVybiBkZWNvcmF0b3IodGFyZ2V0LCBwcm9wZXJ0eSwgZGVzYykgfHwgZGVzYztcbiAgfSwgZGVzYyk7XG5cbiAgaWYgKGNvbnRleHQgJiYgZGVzYy5pbml0aWFsaXplciAhPT0gdm9pZCAwKSB7XG4gICAgZGVzYy52YWx1ZSA9IGRlc2MuaW5pdGlhbGl6ZXIgPyBkZXNjLmluaXRpYWxpemVyLmNhbGwoY29udGV4dCkgOiB2b2lkIDA7XG4gICAgZGVzYy5pbml0aWFsaXplciA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmIChkZXNjLmluaXRpYWxpemVyID09PSB2b2lkIDApIHtcbiAgICBPYmplY3RbJ2RlZmluZScgKyAnUHJvcGVydHknXSh0YXJnZXQsIHByb3BlcnR5LCBkZXNjKTtcbiAgICBkZXNjID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBkZXNjO1xufVxuXG52YXIgX2RlZmF1bHQgPSAoX2NsYXNzID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKF9kZWZhdWx0LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBfZGVmYXVsdChwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBfZGVmYXVsdCk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX2RlZmF1bHQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihfZGVmYXVsdCkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgY29sdW1uczogKDAsIF9saXN0Mi5kZWZhdWx0KShwcm9wcy5jaGlsZHJlbikubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICByZXR1cm4gY2hpbGQucHJvcHM7XG4gICAgICB9KS5jb2xsZWN0KCksXG4gICAgICB3aWR0aDogMCxcbiAgICAgIGlubmVyV2lkdGg6IDAsXG4gICAgICBoZWFkZXJXaWR0aDogMCxcbiAgICAgIGJvZHlXaWR0aDogMFxuICAgIH07XG4gICAgX3RoaXMucmVsb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoX2RlZmF1bHQsIFt7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgdGhpcy5wcm9wcy5zdG9yZS5zdWJzY3JpYmUodGhpcy5yZWxvYWQpO1xuICAgICAgX29ic2VydmFibGUyLmRlZmF1bHQuZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpLnN1YnNjcmliZSh0aGlzLnJlc2l6ZUdyaWQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLnJlc2l6ZUdyaWQoKTtcbiAgICAgIHZhciBub2RlID0gX2V4dDIuZGVmYXVsdC5nZXRDb21wKHRoaXMpLFxuICAgICAgICAgIGhlYWRlciA9IG5vZGUuZmluZCgnLnJ4LWdyaWQtaGVhZGVyJyksXG4gICAgICAgICAgYm9keSA9IG5vZGUuZmluZCgnLnJ4LWdyaWQtYm9keScpO1xuICAgICAgX29ic2VydmFibGUyLmRlZmF1bHQuZnJvbUV2ZW50KGJvZHksICdzY3JvbGwnKS5zdWJzY3JpYmUoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGhlYWRlci5zY3JvbGxMZWZ0ID0gYm9keS5zY3JvbGxMZWZ0O1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMucHJvcHMuc3RvcmUudW5zdWJzY3JpYmUodGhpcy5yZWxvYWQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcihfcmVmKSB7XG4gICAgICB2YXIgc3RvcmUgPSBfcmVmLnN0b3JlO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9jb250YWluZXIyLmRlZmF1bHQsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAncngtZ3JpZCcgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWRlcjIuZGVmYXVsdCwgdGhpcy5zdGF0ZSksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9ib2R5Mi5kZWZhdWx0LCBfZXh0ZW5kcyh7IGRhdGE6IHN0b3JlLmdldERhdGEoKSB9LCB0aGlzLnN0YXRlKSlcbiAgICAgICk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVzaXplR3JpZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2l6ZUdyaWQoKSB7XG4gICAgICB2YXIgY29sdW1ucyA9IHRoaXMuc3RhdGUuY29sdW1ucyxcbiAgICAgICAgICBub2RlID0gX2V4dDIuZGVmYXVsdC5nZXRDb21wKHRoaXMpLFxuICAgICAgICAgIHBhcmVudCA9IG5vZGUucGFyZW50KCksXG4gICAgICAgICAgZmxleENvbHVtbnMgPSBbXTtcblxuXG4gICAgICB2YXIgd2lkdGggPSBwYXJlbnQud2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSBwYXJlbnQuaGVpZ2h0KCksXG4gICAgICAgICAgaW5uZXJXaWR0aCA9ICgwLCBfbGlzdDIuZGVmYXVsdCkoY29sdW1ucykucmVkdWNlKGZ1bmN0aW9uIChpbm5lcldpZHRoLCBjb2wpIHtcbiAgICAgICAgaWYgKGNvbC5zdHlsZSAmJiBjb2wuc3R5bGUud2lkdGgpIHtcbiAgICAgICAgICBpbm5lcldpZHRoICs9IGNvbC5zdHlsZS53aWR0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmbGV4Q29sdW1ucy5wdXNoKGNvbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlubmVyV2lkdGg7XG4gICAgICB9LCAwKSxcbiAgICAgICAgICBoZWFkZXJXaWR0aCA9IGlubmVyV2lkdGggKyBfZXh0Mi5kZWZhdWx0LlNDUk9MTF9XSURUSCxcbiAgICAgICAgICBib2R5V2lkdGggPSBpbm5lcldpZHRoO1xuXG4gICAgICBpZiAoaW5uZXJXaWR0aCA8IHdpZHRoICYmIGZsZXhDb2x1bW5zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIHJlbWFpbldpZHRoID0gd2lkdGggLSBpbm5lcldpZHRoIC0gX2V4dDIuZGVmYXVsdC5TQ1JPTExfV0lEVEggLSBfZXh0Mi5kZWZhdWx0LkJPUkRFUl9XSURUSCxcbiAgICAgICAgICAgIHJlbWFpbkNvbHVtbiA9IGZsZXhDb2x1bW5zLmxlbmd0aDtcbiAgICAgICAgKDAsIF9saXN0Mi5kZWZhdWx0KShmbGV4Q29sdW1ucykuZWFjaChmdW5jdGlvbiAoY29sKSB7XG4gICAgICAgICAgIWNvbC5zdHlsZSAmJiAoY29sLnN0eWxlID0ge30pO1xuICAgICAgICAgIHZhciB3aWR0aCA9IHJlbWFpbkNvbHVtbiA9PT0gMSA/IHJlbWFpbldpZHRoIDogX251bWJlcjIuZGVmYXVsdC5yb3VuZChyZW1haW5XaWR0aCAvIHJlbWFpbkNvbHVtbik7XG4gICAgICAgICAgY29sLnN0eWxlLndpZHRoID0gd2lkdGg7XG4gICAgICAgICAgcmVtYWluV2lkdGggLT0gd2lkdGg7XG4gICAgICAgICAgLS1yZW1haW5Db2x1bW47XG4gICAgICAgIH0pO1xuICAgICAgICBpbm5lcldpZHRoID0gd2lkdGg7XG4gICAgICAgIGhlYWRlcldpZHRoID0gd2lkdGggLSBfZXh0Mi5kZWZhdWx0LkJPUkRFUl9XSURUSDtcbiAgICAgICAgYm9keVdpZHRoID0gd2lkdGggLSBfZXh0Mi5kZWZhdWx0LlNDUk9MTF9XSURUSCAtIF9leHQyLmRlZmF1bHQuQk9SREVSX1dJRFRIO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHsgY29sdW1uczogY29sdW1ucywgd2lkdGg6IHdpZHRoLCBpbm5lcldpZHRoOiBpbm5lcldpZHRoLCBoZWFkZXJXaWR0aDogaGVhZGVyV2lkdGgsIGJvZHlXaWR0aDogYm9keVdpZHRoIH07XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gX2RlZmF1bHQ7XG59KF9yZWFjdC5Db21wb25lbnQpLCAoX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAncmVuZGVyJywgW193aXRoUHJvcHMyLmRlZmF1bHRdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdyZW5kZXInKSwgX2NsYXNzLnByb3RvdHlwZSksIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ3Jlc2l6ZUdyaWQnLCBbX2JpbmQyLmRlZmF1bHRdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdyZXNpemVHcmlkJyksIF9jbGFzcy5wcm90b3R5cGUpKSwgX2NsYXNzKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2Rlc2MsIF92YWx1ZSwgX2NsYXNzO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfd2l0aFByb3BzID0gcmVxdWlyZSgnLi4vLi4vbWl4aW4vd2l0aC1wcm9wcycpO1xuXG52YXIgX3dpdGhQcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93aXRoUHJvcHMpO1xuXG52YXIgX2NvbnRhaW5lciA9IHJlcXVpcmUoJy4uL2NvbnRhaW5lcicpO1xuXG52YXIgX2NvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb250YWluZXIpO1xuXG52YXIgX3JvdyA9IHJlcXVpcmUoJy4vcm93Jyk7XG5cbnZhciBfcm93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Jvdyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZnVuY3Rpb24gX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcih0YXJnZXQsIHByb3BlcnR5LCBkZWNvcmF0b3JzLCBkZXNjcmlwdG9yLCBjb250ZXh0KSB7XG4gIHZhciBkZXNjID0ge307XG4gIE9iamVjdFsna2UnICsgJ3lzJ10oZGVzY3JpcHRvcikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgZGVzY1trZXldID0gZGVzY3JpcHRvcltrZXldO1xuICB9KTtcbiAgZGVzYy5lbnVtZXJhYmxlID0gISFkZXNjLmVudW1lcmFibGU7XG4gIGRlc2MuY29uZmlndXJhYmxlID0gISFkZXNjLmNvbmZpZ3VyYWJsZTtcblxuICBpZiAoJ3ZhbHVlJyBpbiBkZXNjIHx8IGRlc2MuaW5pdGlhbGl6ZXIpIHtcbiAgICBkZXNjLndyaXRhYmxlID0gdHJ1ZTtcbiAgfVxuXG4gIGRlc2MgPSBkZWNvcmF0b3JzLnNsaWNlKCkucmV2ZXJzZSgpLnJlZHVjZShmdW5jdGlvbiAoZGVzYywgZGVjb3JhdG9yKSB7XG4gICAgcmV0dXJuIGRlY29yYXRvcih0YXJnZXQsIHByb3BlcnR5LCBkZXNjKSB8fCBkZXNjO1xuICB9LCBkZXNjKTtcblxuICBpZiAoY29udGV4dCAmJiBkZXNjLmluaXRpYWxpemVyICE9PSB2b2lkIDApIHtcbiAgICBkZXNjLnZhbHVlID0gZGVzYy5pbml0aWFsaXplciA/IGRlc2MuaW5pdGlhbGl6ZXIuY2FsbChjb250ZXh0KSA6IHZvaWQgMDtcbiAgICBkZXNjLmluaXRpYWxpemVyID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKGRlc2MuaW5pdGlhbGl6ZXIgPT09IHZvaWQgMCkge1xuICAgIE9iamVjdFsnZGVmaW5lJyArICdQcm9wZXJ0eSddKHRhcmdldCwgcHJvcGVydHksIGRlc2MpO1xuICAgIGRlc2MgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGRlc2M7XG59XG5cbnZhciBfZGVmYXVsdCA9IChfY2xhc3MgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoX2RlZmF1bHQsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIF9kZWZhdWx0KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBfZGVmYXVsdCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9kZWZhdWx0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoX2RlZmF1bHQpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhfZGVmYXVsdCwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoX3JlZikge1xuICAgICAgdmFyIGNvbHVtbnMgPSBfcmVmLmNvbHVtbnMsXG4gICAgICAgICAgYm9keVdpZHRoID0gX3JlZi5ib2R5V2lkdGgsXG4gICAgICAgICAgZGF0YSA9IF9yZWYuZGF0YTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfY29udGFpbmVyMi5kZWZhdWx0LFxuICAgICAgICB7IGNsYXNzTmFtZTogJ3J4LWdyaWQtYm9keScgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ3NlY3Rpb24nLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAncngtZ3JpZC12aWV3Jywgc3R5bGU6IHsgd2lkdGg6IGJvZHlXaWR0aCB9IH0sXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgc3R5bGU6IHsgaGVpZ2h0OiAxIH0gfSksXG4gICAgICAgICAgZGF0YSAmJiBkYXRhLm1hcChmdW5jdGlvbiAocmVjb3JkLCByb3dJbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yb3cyLmRlZmF1bHQsIHsgY29sdW1uczogY29sdW1ucywgcmVjb3JkOiByZWNvcmQsIHJvd0luZGV4OiByb3dJbmRleCB9KTtcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBfZGVmYXVsdDtcbn0oX3JlYWN0LkNvbXBvbmVudCksIChfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdyZW5kZXInLCBbX3dpdGhQcm9wczIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ3JlbmRlcicpLCBfY2xhc3MucHJvdG90eXBlKSksIF9jbGFzcyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9kZXNjLCBfdmFsdWUsIF9jbGFzcztcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3dpdGhQcm9wcyA9IHJlcXVpcmUoJy4uLy4uL21peGluL3dpdGgtcHJvcHMnKTtcblxudmFyIF93aXRoUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2l0aFByb3BzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eSwgZGVjb3JhdG9ycywgZGVzY3JpcHRvciwgY29udGV4dCkge1xuICB2YXIgZGVzYyA9IHt9O1xuICBPYmplY3RbJ2tlJyArICd5cyddKGRlc2NyaXB0b3IpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGRlc2Nba2V5XSA9IGRlc2NyaXB0b3Jba2V5XTtcbiAgfSk7XG4gIGRlc2MuZW51bWVyYWJsZSA9ICEhZGVzYy5lbnVtZXJhYmxlO1xuICBkZXNjLmNvbmZpZ3VyYWJsZSA9ICEhZGVzYy5jb25maWd1cmFibGU7XG5cbiAgaWYgKCd2YWx1ZScgaW4gZGVzYyB8fCBkZXNjLmluaXRpYWxpemVyKSB7XG4gICAgZGVzYy53cml0YWJsZSA9IHRydWU7XG4gIH1cblxuICBkZXNjID0gZGVjb3JhdG9ycy5zbGljZSgpLnJldmVyc2UoKS5yZWR1Y2UoZnVuY3Rpb24gKGRlc2MsIGRlY29yYXRvcikge1xuICAgIHJldHVybiBkZWNvcmF0b3IodGFyZ2V0LCBwcm9wZXJ0eSwgZGVzYykgfHwgZGVzYztcbiAgfSwgZGVzYyk7XG5cbiAgaWYgKGNvbnRleHQgJiYgZGVzYy5pbml0aWFsaXplciAhPT0gdm9pZCAwKSB7XG4gICAgZGVzYy52YWx1ZSA9IGRlc2MuaW5pdGlhbGl6ZXIgPyBkZXNjLmluaXRpYWxpemVyLmNhbGwoY29udGV4dCkgOiB2b2lkIDA7XG4gICAgZGVzYy5pbml0aWFsaXplciA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmIChkZXNjLmluaXRpYWxpemVyID09PSB2b2lkIDApIHtcbiAgICBPYmplY3RbJ2RlZmluZScgKyAnUHJvcGVydHknXSh0YXJnZXQsIHByb3BlcnR5LCBkZXNjKTtcbiAgICBkZXNjID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBkZXNjO1xufVxuXG52YXIgX2RlZmF1bHQgPSAoX2NsYXNzID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKF9kZWZhdWx0LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBfZGVmYXVsdCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgX2RlZmF1bHQpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfZGVmYXVsdC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKF9kZWZhdWx0KSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoX2RlZmF1bHQsIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKF9yZWYpIHtcbiAgICAgIHZhciBjb2x1bW5zID0gX3JlZi5jb2x1bW5zLFxuICAgICAgICAgIGhlYWRlcldpZHRoID0gX3JlZi5oZWFkZXJXaWR0aDtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc2VjdGlvbicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAncngtZ3JpZC1oZWFkZXInIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAncngtZ3JpZC1oZWFkZXItY29udGFpbmVyIGQtZmxleCBmbGV4LXJvdycsIHN0eWxlOiB7IHdpZHRoOiBoZWFkZXJXaWR0aCB9IH0sXG4gICAgICAgICAgY29sdW1ucyAmJiBjb2x1bW5zLm1hcChmdW5jdGlvbiAoY29sKSB7XG4gICAgICAgICAgICB2YXIgdGV4dCA9IGNvbC50ZXh0LFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNvbC5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgc3R5bGUgPSBjb2wuc3R5bGUsXG4gICAgICAgICAgICAgICAgb3RoZXJzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKGNvbCwgWyd0ZXh0JywgJ2NsYXNzTmFtZScsICdzdHlsZSddKTtcblxuICAgICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgX2V4dGVuZHMoeyBjbGFzc05hbWU6ICdyeC1ncmlkLWNvbHVtbi1oZWFkZXIgdGV4dC1jZW50ZXIgJyArIChjbGFzc05hbWUgfHwgJycpLCBzdHlsZTogc3R5bGUgfSwgb3RoZXJzKSxcbiAgICAgICAgICAgICAgdGV4dCB8fCAnJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBfZGVmYXVsdDtcbn0oX3JlYWN0LkNvbXBvbmVudCksIChfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdyZW5kZXInLCBbX3dpdGhQcm9wczIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ3JlbmRlcicpLCBfY2xhc3MucHJvdG90eXBlKSksIF9jbGFzcyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9kZXNjLCBfdmFsdWUsIF9jbGFzcztcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3dpdGhQcm9wcyA9IHJlcXVpcmUoJy4uLy4uL21peGluL3dpdGgtcHJvcHMnKTtcblxudmFyIF93aXRoUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2l0aFByb3BzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eSwgZGVjb3JhdG9ycywgZGVzY3JpcHRvciwgY29udGV4dCkge1xuICB2YXIgZGVzYyA9IHt9O1xuICBPYmplY3RbJ2tlJyArICd5cyddKGRlc2NyaXB0b3IpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGRlc2Nba2V5XSA9IGRlc2NyaXB0b3Jba2V5XTtcbiAgfSk7XG4gIGRlc2MuZW51bWVyYWJsZSA9ICEhZGVzYy5lbnVtZXJhYmxlO1xuICBkZXNjLmNvbmZpZ3VyYWJsZSA9ICEhZGVzYy5jb25maWd1cmFibGU7XG5cbiAgaWYgKCd2YWx1ZScgaW4gZGVzYyB8fCBkZXNjLmluaXRpYWxpemVyKSB7XG4gICAgZGVzYy53cml0YWJsZSA9IHRydWU7XG4gIH1cblxuICBkZXNjID0gZGVjb3JhdG9ycy5zbGljZSgpLnJldmVyc2UoKS5yZWR1Y2UoZnVuY3Rpb24gKGRlc2MsIGRlY29yYXRvcikge1xuICAgIHJldHVybiBkZWNvcmF0b3IodGFyZ2V0LCBwcm9wZXJ0eSwgZGVzYykgfHwgZGVzYztcbiAgfSwgZGVzYyk7XG5cbiAgaWYgKGNvbnRleHQgJiYgZGVzYy5pbml0aWFsaXplciAhPT0gdm9pZCAwKSB7XG4gICAgZGVzYy52YWx1ZSA9IGRlc2MuaW5pdGlhbGl6ZXIgPyBkZXNjLmluaXRpYWxpemVyLmNhbGwoY29udGV4dCkgOiB2b2lkIDA7XG4gICAgZGVzYy5pbml0aWFsaXplciA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmIChkZXNjLmluaXRpYWxpemVyID09PSB2b2lkIDApIHtcbiAgICBPYmplY3RbJ2RlZmluZScgKyAnUHJvcGVydHknXSh0YXJnZXQsIHByb3BlcnR5LCBkZXNjKTtcbiAgICBkZXNjID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBkZXNjO1xufVxuXG52YXIgX2RlZmF1bHQgPSAoX2NsYXNzID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKF9kZWZhdWx0LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBfZGVmYXVsdCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgX2RlZmF1bHQpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfZGVmYXVsdC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKF9kZWZhdWx0KSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoX2RlZmF1bHQsIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKF9yZWYpIHtcbiAgICAgIHZhciBjb2x1bW5zID0gX3JlZi5jb2x1bW5zLFxuICAgICAgICAgIHJlY29yZCA9IF9yZWYucmVjb3JkLFxuICAgICAgICAgIHJvd0luZGV4ID0gX3JlZi5yb3dJbmRleDtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdyeC1ncmlkLXJvdyBkLWZsZXggZmxleC1yb3cnIH0sXG4gICAgICAgIGNvbHVtbnMgJiYgY29sdW1ucy5tYXAoZnVuY3Rpb24gKGNvbCkge1xuICAgICAgICAgIHZhciBkYXRhSW5kZXggPSBjb2wuZGF0YUluZGV4LFxuICAgICAgICAgICAgICBjbGFzc05hbWUgPSBjb2wuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICByZW5kZXIgPSBjb2wucmVuZGVyLFxuICAgICAgICAgICAgICBzdHlsZSA9IGNvbC5zdHlsZSxcbiAgICAgICAgICAgICAgb3RoZXJzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKGNvbCwgWydkYXRhSW5kZXgnLCAnY2xhc3NOYW1lJywgJ3JlbmRlcicsICdzdHlsZSddKTtcblxuICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgX2V4dGVuZHMoeyBjbGFzc05hbWU6ICdyeC1ncmlkLWNlbGwgdGV4dC1zbS1jZW50ZXIgJyArIChjbGFzc05hbWUgfHwgJycpLCBzdHlsZTogc3R5bGUgfSwgb3RoZXJzKSxcbiAgICAgICAgICAgIHJlbmRlciA/IHJlbmRlcihyZWNvcmQuZ2V0KGRhdGFJbmRleCksIHJlY29yZCwgZGF0YUluZGV4LCByb3dJbmRleCkgOiByZWNvcmQuZ2V0KGRhdGFJbmRleClcbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gX2RlZmF1bHQ7XG59KF9yZWFjdC5Db21wb25lbnQpLCAoX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAncmVuZGVyJywgW193aXRoUHJvcHMyLmRlZmF1bHRdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdyZW5kZXInKSwgX2NsYXNzLnByb3RvdHlwZSkpLCBfY2xhc3MpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkxpbmsgPSBleHBvcnRzLkhhc2hSb3V0ZXIgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9saXN0ID0gcmVxdWlyZSgnLi4vY29yZS9saXN0Jyk7XG5cbnZhciBfbGlzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saXN0KTtcblxudmFyIF9vYnNlcnZhYmxlID0gcmVxdWlyZSgnLi4vbWl4aW4vb2JzZXJ2YWJsZScpO1xuXG52YXIgX29ic2VydmFibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JzZXJ2YWJsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUk9VVEVTID0ge30sXG4gICAgZ2V0Um91dGUgPSBmdW5jdGlvbiBnZXRSb3V0ZSgpIHtcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKSB8fCAnLyc7XG59LFxuICAgIGdldFJvdXRlUGF0aCA9IGZ1bmN0aW9uIGdldFJvdXRlUGF0aChyb3V0ZSkge1xuICByZXR1cm4gcm91dGUuc3BsaXQoJy8nKTtcbn0sXG4gICAgaXNQYXJhbSA9IGZ1bmN0aW9uIGlzUGFyYW0ocm91dGVOYW1lKSB7XG4gIHJldHVybiByb3V0ZU5hbWUuc3RhcnRzV2l0aCgnOicpO1xufSxcbiAgICBtYXRjaFBhdGggPSBmdW5jdGlvbiBtYXRjaFBhdGgoKSB7XG4gIHZhciBjdXJyZW50Um91dGUgPSBnZXRSb3V0ZSgpLFxuICAgICAgcGFyYW1zID0ge307XG5cbiAgaWYgKFJPVVRFU1tjdXJyZW50Um91dGVdKSB7XG4gICAgcmV0dXJuIHsgcm91dGU6IGN1cnJlbnRSb3V0ZSwgY29tcG9uZW50OiBST1VURVNbY3VycmVudFJvdXRlXS5jb21wb25lbnQsIHBhcmFtczogcGFyYW1zIH07XG4gIH1cblxuICB2YXIgY3VycmVudFBhdGggPSBnZXRSb3V0ZVBhdGgoY3VycmVudFJvdXRlKTtcbiAgZm9yICh2YXIga2V5IGluIFJPVVRFUykge1xuICAgIHZhciByb3V0ZSA9IFJPVVRFU1trZXldLFxuICAgICAgICByb3V0ZVBhdGggPSByb3V0ZS5wYXRoO1xuICAgIHZhciBtYXRjaGVkID0gdHJ1ZTtcbiAgICBfbGlzdDIuZGVmYXVsdC5vZihyb3V0ZVBhdGgpLmVhY2goZnVuY3Rpb24gKHJvdXRlTmFtZSwgaW5kZXgpIHtcbiAgICAgIGlmIChyb3V0ZU5hbWUgIT09IGN1cnJlbnRQYXRoW2luZGV4XSkge1xuICAgICAgICBpZiAoaXNQYXJhbShyb3V0ZU5hbWUpKSB7XG4gICAgICAgICAgcGFyYW1zW3JvdXRlTmFtZS5zdWJzdHJpbmcoMSldID0gY3VycmVudFBhdGhbaW5kZXhdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1hdGNoZWQgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAobWF0Y2hlZCkge1xuICAgICAgcmV0dXJuIHsgcm91dGU6IGN1cnJlbnRSb3V0ZSwgY29tcG9uZW50OiByb3V0ZS5jb21wb25lbnQsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfVxuICB9XG5cbiAgaWYgKFJPVVRFU1snKiddKSB7XG4gICAgcmV0dXJuIHsgcm91dGU6IGN1cnJlbnRSb3V0ZSwgY29tcG9uZW50OiBST1VURVNbJyonXS5jb21wb25lbnQsIHBhcmFtczogcGFyYW1zIH07XG4gIH1cblxuICByZXR1cm4geyByb3V0ZTogY3VycmVudFJvdXRlLCBjb21wb25lbnQ6IG51bGwsIHBhcmFtczogcGFyYW1zIH07XG59O1xuXG52YXIgSGFzaFJvdXRlciA9IGV4cG9ydHMuSGFzaFJvdXRlciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhIYXNoUm91dGVyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBIYXNoUm91dGVyKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhhc2hSb3V0ZXIpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEhhc2hSb3V0ZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihIYXNoUm91dGVyKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMuc3RhdGUgPSBtYXRjaFBhdGgoKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSGFzaFJvdXRlciwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIF9vYnNlcnZhYmxlMi5kZWZhdWx0LmZyb21FdmVudCh3aW5kb3csICdoYXNoY2hhbmdlJykuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5zZXRTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIG1hdGNoUGF0aCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIHJvdXRlID0gX3N0YXRlLnJvdXRlLFxuICAgICAgICAgIGNvbXBvbmVudCA9IF9zdGF0ZS5jb21wb25lbnQsXG4gICAgICAgICAgcGFyYW1zID0gX3N0YXRlLnBhcmFtcztcblxuXG4gICAgICBpZiAoIWNvbXBvbmVudCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdjb21wb25lbnQgcHJvcHMgc2hvdWxkIG5vdCBiZSBudWxsJyk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCB7IHJvdXRlOiByb3V0ZSwgcGFyYW1zOiBwYXJhbXMgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEhhc2hSb3V0ZXI7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG52YXIgTGluayA9IGV4cG9ydHMuTGluayA9IGZ1bmN0aW9uIChfQ29tcG9uZW50Mikge1xuICBfaW5oZXJpdHMoTGluaywgX0NvbXBvbmVudDIpO1xuXG4gIGZ1bmN0aW9uIExpbmsocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGluayk7XG5cbiAgICB2YXIgX3RoaXMzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKExpbmsuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihMaW5rKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMzLnN0YXRlID0gbWF0Y2hQYXRoKCk7XG4gICAgcmV0dXJuIF90aGlzMztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhMaW5rLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgX29ic2VydmFibGUyLmRlZmF1bHQuZnJvbUV2ZW50KHdpbmRvdywgJ2hhc2hjaGFuZ2UnKS5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXM0LnNldFN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gbWF0Y2hQYXRoKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9zdGF0ZTIgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIHJvdXRlID0gX3N0YXRlMi5yb3V0ZSxcbiAgICAgICAgICBjb21wb25lbnQgPSBfc3RhdGUyLmNvbXBvbmVudCxcbiAgICAgICAgICBwYXJhbXMgPSBfc3RhdGUyLnBhcmFtcyxcbiAgICAgICAgICBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHRvID0gX3Byb3BzLnRvLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgX3Byb3BzJGFjdGl2ZUNsYXNzTmFtID0gX3Byb3BzLmFjdGl2ZUNsYXNzTmFtZSxcbiAgICAgICAgICBhY3RpdmVDbGFzc05hbWUgPSBfcHJvcHMkYWN0aXZlQ2xhc3NOYW0gPT09IHVuZGVmaW5lZCA/ICdhY3RpdmUnIDogX3Byb3BzJGFjdGl2ZUNsYXNzTmFtLFxuICAgICAgICAgIG90aGVycyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsndG8nLCAnY2xhc3NOYW1lJywgJ2FjdGl2ZUNsYXNzTmFtZSddKTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdhJywgX2V4dGVuZHMoeyBocmVmOiAnIycgKyB0bywgY2xhc3NOYW1lOiB0byA9PT0gZ2V0Um91dGUoKSA/IFtjbGFzc05hbWUsIGFjdGl2ZUNsYXNzTmFtZV0uam9pbignICcpIDogY2xhc3NOYW1lIH0sIG90aGVycykpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBMaW5rO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHJvdXRlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoY29tcG9uZW50KSB7XG4gICAgUk9VVEVTW3JvdXRlXSA9IHtcbiAgICAgIHJvdXRlOiByb3V0ZSxcbiAgICAgIGNvbXBvbmVudDogY29tcG9uZW50LFxuICAgICAgcGF0aDogZ2V0Um91dGVQYXRoKHJvdXRlKVxuICAgIH07XG4gIH07XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIF9kZWZhdWx0KGNvbXApIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgX2RlZmF1bHQpO1xuXG4gICAgdGhpcy5jb21wID0gKDAsIF9yZWFjdERvbS5maW5kRE9NTm9kZSkoY29tcCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoX2RlZmF1bHQsIFt7XG4gICAga2V5OiAncGFyZW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyZW50KCkge1xuICAgICAgdGhpcy5jb21wID0gdGhpcy5jb21wLnBhcmVudEVsZW1lbnQ7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd3aWR0aCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdpZHRoKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcC5jbGllbnRXaWR0aDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdoZWlnaHQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoZWlnaHQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wLmNsaWVudEhlaWdodDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdmaW5kJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmluZChzZWxlY3Rvcikge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gX2RlZmF1bHQ7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9jb21wb25lbnQgPSByZXF1aXJlKCcuL2NvbXBvbmVudCcpO1xuXG52YXIgX2NvbXBvbmVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wb25lbnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgRXh0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBFeHQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEV4dCk7XG5cbiAgICB0aGlzLlNDUk9MTF9XSURUSCA9IHRoaXMuZ2V0U2Nyb2xsV2lkdGgoKTtcbiAgICB0aGlzLkJPUkRFUl9XSURUSCA9IDI7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRXh0LCBbe1xuICAgIGtleTogJ2dldEJ5SWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRCeUlkKGlkKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldENvbXAnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDb21wKGNvbXApIHtcbiAgICAgIHJldHVybiBuZXcgX2NvbXBvbmVudDIuZGVmYXVsdChjb21wKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdleHRlbmQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbi5hcHBseShudWxsLCBhcmd1bWVudHMpOyAvLyBpbW11dGFibGUgb2JqZWN0XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY3JlYXRlRWxlbWVudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoaHRtbCkge1xuICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGl2LmlubmVySFRNTCA9IGh0bWw7XG4gICAgICByZXR1cm4gZGl2LmNoaWxkcmVuWzBdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzRnVuY3Rpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2xhc3NOYW1lJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xhc3NOYW1lKGV4cHJlc3Npb24pIHtcbiAgICAgIHZhciBjbHMgPSBbXTtcbiAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBPYmplY3Qua2V5cyhleHByZXNzaW9uKVtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgICB2YXIga2V5ID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgICAgICBpZiAoZXhwcmVzc2lvbltrZXldKSB7XG4gICAgICAgICAgICBjbHMucHVzaChrZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjbHMuam9pbignICcpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFNjcm9sbFdpZHRoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2Nyb2xsV2lkdGgoKSB7XG4gICAgICB2YXIgb3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgb3V0ZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICBvdXRlci5zdHlsZS53aWR0aCA9IFwiMTAwcHhcIjtcbiAgICAgIG91dGVyLnN0eWxlLm1zT3ZlcmZsb3dTdHlsZSA9IFwic2Nyb2xsYmFyXCI7IC8vIG5lZWRlZCBmb3IgV2luSlMgYXBwc1xuXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG91dGVyKTtcblxuICAgICAgdmFyIHdpZHRoTm9TY3JvbGwgPSBvdXRlci5vZmZzZXRXaWR0aDtcbiAgICAgIC8vIGZvcmNlIHNjcm9sbGJhcnNcbiAgICAgIG91dGVyLnN0eWxlLm92ZXJmbG93ID0gXCJzY3JvbGxcIjtcblxuICAgICAgLy8gYWRkIGlubmVyZGl2XG4gICAgICB2YXIgaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgaW5uZXIuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICAgIG91dGVyLmFwcGVuZENoaWxkKGlubmVyKTtcblxuICAgICAgdmFyIHdpZHRoV2l0aFNjcm9sbCA9IGlubmVyLm9mZnNldFdpZHRoO1xuXG4gICAgICAvLyByZW1vdmUgZGl2c1xuICAgICAgb3V0ZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvdXRlcik7XG5cbiAgICAgIHJldHVybiB3aWR0aE5vU2Nyb2xsIC0gd2lkdGhXaXRoU2Nyb2xsO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBFeHQ7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG5ldyBFeHQoKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEVNUFRZX0xJU1QgPSBbXTtcblxudmFyIExpc3QgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIExpc3QodmFsdWUpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGlzdCk7XG5cbiAgICB0aGlzLmFycmF5ID0gRU1QVFlfTElTVDtcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoKSB7XG4gICAgICB0aGlzLmFycmF5ID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKExpc3QsIFt7XG4gICAga2V5OiBcImNvbGxlY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29sbGVjdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmFycmF5O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb3VudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZWFjaFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlYWNoKGl0ZXJhdGVlKSB7XG4gICAgICBmb3IgKHZhciBpbmRleCA9IDAsIGl0ZW07IChpdGVtID0gdGhpcy5hcnJheVtpbmRleF0pICE9IG51bGw7ICsraW5kZXgpIHtcbiAgICAgICAgaXRlcmF0ZWUoaXRlbSwgaW5kZXgsIHRoaXMuYXJyYXkpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmaW5kQnlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmluZEJ5KHByZWRpY2F0ZSkge1xuICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XG4gICAgICBmb3IgKHZhciBpbmRleCA9IDAsIGl0ZW07IChpdGVtID0gdGhpcy5hcnJheVtpbmRleF0pICE9IG51bGw7ICsraW5kZXgpIHtcbiAgICAgICAgaWYgKHByZWRpY2F0ZShpdGVtLCBpbmRleCwgdGhpcy5hcnJheSkpIHtcbiAgICAgICAgICByZXN1bHQgPSBpdGVtO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb250YWluc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb250YWlucyhwcmVkaWNhdGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbmRCeShwcmVkaWNhdGUpICE9PSBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmaWx0ZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmlsdGVyKHByZWRpY2F0ZSkge1xuICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCwgYXJyYXkpIHtcbiAgICAgICAgaWYgKHByZWRpY2F0ZShpdGVtLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ldyBMaXN0KHJlc3VsdCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm1hcFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtYXAoaXRlcmF0ZWUpIHtcbiAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgsIGFycmF5KSB7XG4gICAgICAgIHJldHVybiByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaXRlbSwgaW5kZXgsIGFycmF5KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ldyBMaXN0KHJlc3VsdCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlZHVjZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZWR1Y2UoaXRlcmF0ZWUsIGFjY3VtdWxhdG9yKSB7XG4gICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4LCBhcnJheSkge1xuICAgICAgICByZXR1cm4gYWNjdW11bGF0b3IgPSBpdGVyYXRlZShhY2N1bXVsYXRvciwgaXRlbSwgaW5kZXgsIGFycmF5KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRBdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBdChpbmRleCkge1xuICAgICAgcmV0dXJuIHRoaXMuYXJyYXlbaW5kZXhdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVBdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVBdChpbmRleCkge1xuICAgICAgdmFyIGNvdW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAxO1xuXG4gICAgICByZXR1cm4gdGhpcy5hcnJheS5zcGxpY2UoaW5kZXgsIGNvdW50KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZChpdGVtKSB7XG4gICAgICB0aGlzLmFycmF5LnB1c2goaXRlbSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImluc2VydFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbnNlcnQoaW5kZXgsIGl0ZW0pIHtcbiAgICAgIHRoaXMuYXJyYXkuc3BsaWNlKGluZGV4LCAwLCBpdGVtKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTGlzdDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBuZXcgTGlzdCh2YWx1ZSk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9saXN0ID0gcmVxdWlyZSgnLi9saXN0Jyk7XG5cbnZhciBfbGlzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saXN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEVNUFRZX01BUCA9IHt9O1xuXG52YXIgTWFwID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBNYXAoa2V5VmFsdWVzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hcCk7XG5cbiAgICB0aGlzLm1hcCA9IEVNUFRZX01BUDtcbiAgICBpZiAoa2V5VmFsdWVzICYmIGtleVZhbHVlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubWFwID0gT2JqZWN0LmFzc2lnbih7fSwga2V5VmFsdWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWFwLCBbe1xuICAgIGtleTogJ2VhY2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlYWNoKGl0ZXJhdGVlKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5tYXApIHtcbiAgICAgICAgaXRlcmF0ZWUoa2V5LCB0aGlzLm1hcFtrZXldLCB0aGlzLm1hcCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdrZXlzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24ga2V5cygpIHtcbiAgICAgIHJldHVybiAoMCwgX2xpc3QyLmRlZmF1bHQpKE9iamVjdC5rZXlzKHRoaXMubWFwKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndmFsdWVzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWVzKCkge1xuICAgICAgcmV0dXJuICgwLCBfbGlzdDIuZGVmYXVsdCkoT2JqZWN0LnZhbHVlcyh0aGlzLm1hcCkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYXA7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChrZXlWYWx1ZXMpIHtcbiAgcmV0dXJuIG5ldyBNYXAoa2V5VmFsdWVzKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBOdW1iZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE51bWJlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTnVtYmVyKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhOdW1iZXIsIFt7XG4gICAga2V5OiBcInJvdW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJvdW5kKHZhbHVlKSB7XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE51bWJlcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gbmV3IE51bWJlcigpOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFN0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3RyaW5nKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdHJpbmcpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFN0cmluZywgW3tcbiAgICBrZXk6ICd0b1F1ZXJ5U3RyaW5nJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9RdWVyeVN0cmluZyhwYXJhbXMsIHNlcCwgZW5jb2RlKSB7XG4gICAgICBzZXAgPSBzZXAgPT09IHVuZGVmaW5lZCA/ICcmJyA6IHNlcDtcbiAgICAgIGVuY29kZSA9IGVuY29kZSA9PT0gZmFsc2UgPyBmdW5jdGlvbiAocykge1xuICAgICAgICByZXR1cm4gcztcbiAgICAgIH0gOiBlbmNvZGVVUklDb21wb25lbnQ7XG5cbiAgICAgIHZhciBwYWlycyA9IFtdO1xuICAgICAgZm9yICh2YXIga2V5IGluIHBhcmFtcykge1xuICAgICAgICBwYWlycy5wdXNoKGtleSArICc9JyArIGVuY29kZShwYXJhbXNba2V5XSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBhaXJzLmpvaW4oc2VwKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3RyaW5nO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBuZXcgU3RyaW5nKCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3N0cmluZyA9IHJlcXVpcmUoJy4uL2NvcmUvc3RyaW5nJyk7XG5cbnZhciBfc3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0cmluZyk7XG5cbnZhciBfZXh0ID0gcmVxdWlyZSgnLi4vY29yZS9leHQnKTtcblxudmFyIF9leHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgdmFyIGdlbiA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IGZ1bmN0aW9uIHN0ZXAoa2V5LCBhcmcpIHsgdHJ5IHsgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpOyB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlOyB9IGNhdGNoIChlcnJvcikgeyByZWplY3QoZXJyb3IpOyByZXR1cm47IH0gaWYgKGluZm8uZG9uZSkgeyByZXNvbHZlKHZhbHVlKTsgfSBlbHNlIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHsgc3RlcChcIm5leHRcIiwgdmFsdWUpOyB9LCBmdW5jdGlvbiAoZXJyKSB7IHN0ZXAoXCJ0aHJvd1wiLCBlcnIpOyB9KTsgfSB9IHJldHVybiBzdGVwKFwibmV4dFwiKTsgfSk7IH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEFqYXggPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEFqYXgoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFqYXgpO1xuXG4gICAgX2V4dDIuZGVmYXVsdC5leHRlbmQoQWpheC5wcm90b3R5cGUsIHtcbiAgICAgIHhocjogbmV3IFhNTEh0dHBSZXF1ZXN0KCksXG4gICAgICBhamF4QmVmb3JlOiBmdW5jdGlvbiBhamF4QmVmb3JlKCkgey8qIHRvIGJlIGltcGxlbWVudGVkICovfSxcbiAgICAgIGFqYXhFcnJvcjogZnVuY3Rpb24gYWpheEVycm9yKGVycm9yKSB7LyogdG8gYmUgaW1wbGVtZW50ZWQgKi99LFxuICAgICAgYWpheENvbXBsZXRlOiBmdW5jdGlvbiBhamF4Q29tcGxldGUoKSB7LyogdG8gYmUgaW1wbGVtZW50ZWQgKi99LFxuICAgICAgQkFTRV9VUkw6IG51bGxcbiAgICB9KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhBamF4LCBbe1xuICAgIGtleTogJ3JlcXVlc3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3JlZiA9IF9hc3luY1RvR2VuZXJhdG9yKHJlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUoX3JlZjIpIHtcbiAgICAgICAgdmFyIHVybCA9IF9yZWYyLnVybCxcbiAgICAgICAgICAgIF9yZWYyJG1ldGhvZCA9IF9yZWYyLm1ldGhvZCxcbiAgICAgICAgICAgIG1ldGhvZCA9IF9yZWYyJG1ldGhvZCA9PT0gdW5kZWZpbmVkID8gJ2dldCcgOiBfcmVmMiRtZXRob2QsXG4gICAgICAgICAgICBwYXJhbXMgPSBfcmVmMi5wYXJhbXMsXG4gICAgICAgICAgICBuZXh0ID0gX3JlZjIubmV4dCxcbiAgICAgICAgICAgIGVycm9yID0gX3JlZjIuZXJyb3IsXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYyLmNvbXBsZXRlO1xuICAgICAgICB2YXIgcmVzcG9uc2U7XG4gICAgICAgIHJldHVybiByZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMDtcblxuICAgICAgICAgICAgICAgIHRoaXMuYWpheEJlZm9yZSgpO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA0O1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb21pc2UoeyB1cmw6IHVybCwgbWV0aG9kOiBtZXRob2QsIHBhcmFtczogcGFyYW1zIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9jb250ZXh0LnNlbnQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdCgncmV0dXJuJywgbmV4dCA/IG5leHQocmVzcG9uc2UpIDogcmVzcG9uc2UpO1xuXG4gICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gODtcbiAgICAgICAgICAgICAgICBfY29udGV4dC50MCA9IF9jb250ZXh0WydjYXRjaCddKDApO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ2Fubm90IGdldCByZXNwb25zZSBmcm9tIHNlcnZlciBmb3IgdXJsIFsnICsgdXJsICsgJ10gY2F1c2VkIGJ5OiAnICsgX2NvbnRleHQudDApO1xuICAgICAgICAgICAgICAgIHRoaXMuYWpheEVycm9yKF9jb250ZXh0LnQwKTtcbiAgICAgICAgICAgICAgICBlcnJvciAmJiBlcnJvcihfY29udGV4dC50MCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdCgncmV0dXJuJywgbnVsbCk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMTQ7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFqYXhDb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIGNvbXBsZXRlICYmIGNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmZpbmlzaCgxNCk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZSwgdGhpcywgW1swLCA4LCAxNCwgMThdXSk7XG4gICAgICB9KSk7XG5cbiAgICAgIGZ1bmN0aW9uIHJlcXVlc3QoX3gpIHtcbiAgICAgICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgfSgpXG4gIH0sIHtcbiAgICBrZXk6ICdwcm9taXNlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJvbWlzZShzZXR0aW5ncykge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgX3RoaXMuY3JlYXRlUmVxdWVzdChzZXR0aW5ncywgZnVuY3Rpb24gKGVyciwgcmVzKSB7XG4gICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjcmVhdGVSZXF1ZXN0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlUmVxdWVzdChfcmVmMywgZG9uZSkge1xuICAgICAgdmFyIHVybCA9IF9yZWYzLnVybCxcbiAgICAgICAgICBtZXRob2QgPSBfcmVmMy5tZXRob2QsXG4gICAgICAgICAgcGFyYW1zID0gX3JlZjMucGFyYW1zO1xuXG4gICAgICB0aGlzLkJBU0VfVVJMICYmICh1cmwgPSB0aGlzLkJBU0VfVVJMICsgJy8nICsgdXJsKTtcbiAgICAgIG1ldGhvZCA9PT0gJ2dldCcgJiYgcGFyYW1zICE9PSBudWxsICYmICh1cmwgPSB1cmwgKyAnPycgKyBfc3RyaW5nMi5kZWZhdWx0LnRvUXVlcnlTdHJpbmcocGFyYW1zKSk7XG4gICAgICB2YXIgeGhyID0gdGhpcy54aHI7XG4gICAgICB4aHIub3BlbihtZXRob2QsIHVybCwgdHJ1ZSk7XG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xuICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIGRvbmUobnVsbCwgSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGRvbmUoSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIGRvbmUoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgeGhyLnNlbmQocGFyYW1zICE9PSBudWxsID8gSlNPTi5zdHJpbmdpZnkocGFyYW1zKSA6IG51bGwpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBBamF4O1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBuZXcgQWpheCgpOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIENhY2hlID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDYWNoZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2FjaGUpO1xuXG4gICAgdGhpcy5fY2FjaGUgPSB7fTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDYWNoZSwgW3tcbiAgICBrZXk6ICdoYXNMb2NhbFN0b3JhZ2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNMb2NhbFN0b3JhZ2UoKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gJ2xvY2FsU3RvcmFnZScgaW4gd2luZG93ICYmIHdpbmRvdy5sb2NhbFN0b3JhZ2UgIT09IG51bGw7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgICBpZiAodGhpcy5oYXNMb2NhbFN0b3JhZ2UoKSkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSB8fCB1bmRlZmluZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVba2V5XSB8fCB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLmhhc0xvY2FsU3RvcmFnZSgpKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2NhY2hlW2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW1vdmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoa2V5KSB7XG4gICAgICBpZiAoIWtleSkge1xuICAgICAgICB0aGlzLl9jYWNoZSA9IHt9O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmhhc0xvY2FsU3RvcmFnZSgpKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWxldGUgdGhpcy5fY2FjaGVba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ2FjaGU7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG5ldyBDYWNoZSgpOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9leHQgPSByZXF1aXJlKCcuLi9jb3JlL2V4dCcpO1xuXG52YXIgX2V4dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHQpO1xuXG52YXIgX29ic2VydmFibGUgPSByZXF1aXJlKCcuLi9taXhpbi9vYnNlcnZhYmxlJyk7XG5cbnZhciBfb2JzZXJ2YWJsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYnNlcnZhYmxlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIE1vZGVsID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBNb2RlbChkYXRhLCBzdG9yZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNb2RlbCk7XG5cbiAgICBfZXh0Mi5kZWZhdWx0LmV4dGVuZCh0aGlzLCB7XG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgc3RvcmU6IHN0b3JlXG4gICAgfSk7XG4gICAgdGhpcy5zYXZlKCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTW9kZWwsIFt7XG4gICAga2V5OiAnZ2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KGZpZWxkTmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YVtmaWVsZE5hbWVdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChmaWVsZE5hbWUsIG5ld1ZhbHVlKSB7XG4gICAgICB0aGlzLmRhdGFbZmllbGROYW1lXSA9IG5ld1ZhbHVlO1xuICAgICAgdGhpcy5zdG9yZSAmJiB0aGlzLnN0b3JlLm9ic2VydmFibGUuY2FsbCh0aGlzLnN0b3JlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzYXZlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2F2ZSgpIHtcbiAgICAgIHRoaXMucGhhbnRvbSA9IF9leHQyLmRlZmF1bHQuZXh0ZW5kKHt9LCB0aGlzLmRhdGEpO1xuICAgICAgdGhpcy5zdG9yZSAmJiB0aGlzLnN0b3JlLm9ic2VydmFibGUuY2FsbCh0aGlzLnN0b3JlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZWplY3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZWplY3QoKSB7XG4gICAgICB0aGlzLmRhdGEgPSBfZXh0Mi5kZWZhdWx0LmV4dGVuZCh7fSwgdGhpcy5waGFudG9tKTtcbiAgICAgIHRoaXMuc2F2ZSgpO1xuICAgICAgdGhpcy5zdG9yZSAmJiB0aGlzLnN0b3JlLm9ic2VydmFibGUuY2FsbCh0aGlzLnN0b3JlKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTW9kZWw7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE1vZGVsOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9leHQgPSByZXF1aXJlKCcuLi9jb3JlL2V4dCcpO1xuXG52YXIgX2V4dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHQpO1xuXG52YXIgX2xpc3QgPSByZXF1aXJlKCcuLi9jb3JlL2xpc3QnKTtcblxudmFyIF9saXN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpc3QpO1xuXG52YXIgX29ic2VydmFibGUgPSByZXF1aXJlKCcuLi9taXhpbi9vYnNlcnZhYmxlJyk7XG5cbnZhciBfb2JzZXJ2YWJsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYnNlcnZhYmxlKTtcblxudmFyIF9hamF4ID0gcmVxdWlyZSgnLi9hamF4Jyk7XG5cbnZhciBfYWpheDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hamF4KTtcblxudmFyIF9tb2RlbCA9IHJlcXVpcmUoJy4vbW9kZWwnKTtcblxudmFyIF9tb2RlbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tb2RlbCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHZhciBnZW4gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyBmdW5jdGlvbiBzdGVwKGtleSwgYXJnKSB7IHRyeSB7IHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTsgdmFyIHZhbHVlID0gaW5mby52YWx1ZTsgfSBjYXRjaCAoZXJyb3IpIHsgcmVqZWN0KGVycm9yKTsgcmV0dXJuOyB9IGlmIChpbmZvLmRvbmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0gZWxzZSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7IHN0ZXAoXCJuZXh0XCIsIHZhbHVlKTsgfSwgZnVuY3Rpb24gKGVycikgeyBzdGVwKFwidGhyb3dcIiwgZXJyKTsgfSk7IH0gfSByZXR1cm4gc3RlcChcIm5leHRcIik7IH0pOyB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdmFyIERhdGFTdG9yZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEYXRhU3RvcmUoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGF0YVN0b3JlKTtcblxuICAgICAgX2V4dDIuZGVmYXVsdC5leHRlbmQodGhpcywgY29uZmlnLCB7XG4gICAgICAgIG9ic2VydmFibGU6IF9vYnNlcnZhYmxlMi5kZWZhdWx0LmNyZWF0ZSgpXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZGF0YSA9ICgwLCBfbGlzdDIuZGVmYXVsdCkoY29uZmlnLmRhdGEgfHwgW10pLm1hcChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgIHJldHVybiBuZXcgX21vZGVsMi5kZWZhdWx0KHJlY29yZCwgX3RoaXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKERhdGFTdG9yZSwgW3tcbiAgICAgIGtleTogJ2xvYWQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9yZWYgPSBfYXN5bmNUb0dlbmVyYXRvcihyZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlKHByb3h5KSB7XG4gICAgICAgICAgdmFyIHJlc3BvbnNlO1xuICAgICAgICAgIHJldHVybiByZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgIHByb3h5ID0gX2V4dDIuZGVmYXVsdC5leHRlbmQoe30sIHRoaXMucHJveHksIHByb3h5IHx8IHt9KTtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAzO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9hamF4Mi5kZWZhdWx0LnJlcXVlc3QocHJveHkpO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfY29udGV4dC5zZW50O1xuXG4gICAgICAgICAgICAgICAgICByZXNwb25zZSAmJiB0aGlzLmxvYWREYXRhKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoJ3JldHVybicsIHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgX2NhbGxlZSwgdGhpcyk7XG4gICAgICAgIH0pKTtcblxuICAgICAgICBmdW5jdGlvbiBsb2FkKF94KSB7XG4gICAgICAgICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsb2FkO1xuICAgICAgfSgpXG4gICAgfSwge1xuICAgICAga2V5OiAnbG9hZERhdGEnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWREYXRhKGRhdGEpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIG5ld0RhdGEgPSB0aGlzLnByb3h5LnJlYWRlciAmJiB0aGlzLnByb3h5LnJlYWRlci5yb290UHJvcGVydHkgPyBkYXRhW3RoaXMucHJveHkucmVhZGVyLnJvb3RQcm9wZXJ0eV0gOiBkYXRhO1xuICAgICAgICB0aGlzLmRhdGEgPSAoMCwgX2xpc3QyLmRlZmF1bHQpKG5ld0RhdGEpLm1hcChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBfbW9kZWwyLmRlZmF1bHQocmVjb3JkLCBfdGhpczIpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMucGFnZVNpemUpIHtcbiAgICAgICAgICB0aGlzLnBhZ2UgPSBkYXRhO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub2JzZXJ2YWJsZS5jYWxsKHRoaXMpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2xvYWRQYWdlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkUGFnZShwYWdlKSB7XG4gICAgICAgIHZhciBwcm94eSA9IF9leHQyLmRlZmF1bHQuZXh0ZW5kKHt9LCB0aGlzLnByb3h5LCB7IHVybDogdGhpcy5wcm94eS51cmwgKyAnP3BhZ2U9JyArIHBhZ2UgfSk7XG4gICAgICAgIHJldHVybiBsb2FkKHByb3h5KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdjb3VudCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuY291bnQoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdnZXREYXRhJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmNvbGxlY3QoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdnZXRBdCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QXQoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5nZXRBdChpbmRleCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAncmVtb3ZlQXQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUF0KGluZGV4LCBjb3VudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLnJlbW92ZUF0KGluZGV4LCBjb3VudCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAncmVtb3ZlQWxsJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVBbGwoKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICAgICB0aGlzLm9ic2VydmFibGUuY2FsbCh0aGlzKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdmaWx0ZXJCeScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZmlsdGVyQnkocHJlZGljYXRlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuZmlsdGVyKHByZWRpY2F0ZSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnc3Vic2NyaWJlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZhYmxlLnN1YnNjcmliZShvYnNlcnZlcik7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAndW5zdWJzY3JpYmUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2YWJsZS51bnN1YnNjcmliZShvYnNlcnZlcik7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnY29tbWl0Q2hhbmdlcycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tbWl0Q2hhbmdlcygpIHtcbiAgICAgICAgKDAsIF9saXN0Mi5kZWZhdWx0KSh0aGlzLmRhdGEpLmVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgICAgIHJldHVybiByZWNvcmQuc2F2ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vYnNlcnZhYmxlLmNhbGwodGhpcyk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAncmVqZWN0Q2hhbmdlcycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVqZWN0Q2hhbmdlcygpIHtcbiAgICAgICAgKDAsIF9saXN0Mi5kZWZhdWx0KSh0aGlzLmRhdGEpLmVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgICAgIHJldHVybiByZWNvcmQucmVqZWN0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm9ic2VydmFibGUuY2FsbCh0aGlzKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gRGF0YVN0b3JlO1xuICB9KCk7XG5cbiAgcmV0dXJuIG5ldyBEYXRhU3RvcmUoKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpIHtcbiAgdmFyIGZuID0gZGVzY3JpcHRvci52YWx1ZTtcblxuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdAYmluZCBkZWNvcmF0b3IgaXMgb25seSBhcHBsaWVkIHRvIGZ1bmN0aW9ucyBub3Q6ICcgKyAodHlwZW9mIGZuID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihmbikpKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIGZuLmJpbmQodGhpcyk7XG4gICAgfVxuICB9O1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZXh0ID0gcmVxdWlyZSgnLi4vY29yZS9leHQnKTtcblxudmFyIF9leHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0KTtcblxudmFyIF9saXN0ID0gcmVxdWlyZSgnLi4vY29yZS9saXN0Jyk7XG5cbnZhciBfbGlzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saXN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIE9ic2VydmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE9ic2VydmFibGUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE9ic2VydmFibGUpO1xuXG4gICAgdGhpcy5vYnNlcnZlcnMgPSBbXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhPYnNlcnZhYmxlLCBbe1xuICAgIGtleTogJ3N1YnNjcmliZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1YnNjcmliZShvYnNlcnZlcikge1xuICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChvYnNlcnZlcik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndW5zdWJzY3JpYmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bnN1YnNjcmliZShvYnNlcnZlcikge1xuICAgICAgKDAsIF9saXN0Mi5kZWZhdWx0KSh0aGlzLm9ic2VydmVycykuZWFjaChmdW5jdGlvbiAodmFsdWUsIGluZGV4LCBvYnNlcnZlcnMpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBvYnNlcnZlciAmJiBvYnNlcnZlcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NhbGwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYWxsKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgKDAsIF9saXN0Mi5kZWZhdWx0KSh0aGlzLm9ic2VydmVycykuZWFjaChmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgcmV0dXJuIG9ic2VydmVyLmFwcGx5KF90aGlzLCBhcmdzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiAnY3JlYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZnJvbUV2ZW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZnJvbUV2ZW50KHRhcmdldCwgZXZlbnROYW1lKSB7XG4gICAgICByZXR1cm4gbmV3IEV2ZW50T2JzZXJ2YWJsZSh0YXJnZXQsIGV2ZW50TmFtZSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE9ic2VydmFibGU7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE9ic2VydmFibGU7XG5cbnZhciBFdmVudE9ic2VydmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEV2ZW50T2JzZXJ2YWJsZSh0YXJnZXQsIGV2ZW50TmFtZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFdmVudE9ic2VydmFibGUpO1xuXG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgdGhpcy5ldmVudE5hbWUgPSBldmVudE5hbWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRXZlbnRPYnNlcnZhYmxlLCBbe1xuICAgIGtleTogJ3N1YnNjcmliZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1YnNjcmliZShvYnNlcnZlcikge1xuICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50TmFtZSwgb2JzZXJ2ZXIpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBFdmVudE9ic2VydmFibGU7XG59KCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpIHtcbiAgdmFyIGZuID0gZGVzY3JpcHRvci52YWx1ZTtcblxuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdAd2l0aFByb3BzIGRlY29yYXRvciBpcyBvbmx5IGFwcGxpZWQgdG8gZnVuY3Rpb25zIG5vdDogJyArICh0eXBlb2YgZm4gPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGZuKSkpO1xuICB9XG5cbiAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZm4uYmluZCh0aGlzKSh0aGlzLnByb3BzKTtcbiAgfTtcbiAgcmV0dXJuIGRlc2NyaXB0b3I7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKSB7XG4gIHZhciBmbiA9IGRlc2NyaXB0b3IudmFsdWU7XG5cbiAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignQHdpdGhTdGF0ZSBkZWNvcmF0b3IgaXMgb25seSBhcHBsaWVkIHRvIGZ1bmN0aW9ucyBub3Q6ICcgKyAodHlwZW9mIGZuID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihmbikpKTtcbiAgfVxuXG4gIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZuLmJpbmQodGhpcykodGhpcy5zdGF0ZSk7XG4gIH07XG4gIHJldHVybiBkZXNjcmlwdG9yO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkRyb3Bkb3duID0gZXhwb3J0cy5CdXR0b24gPSBleHBvcnRzLkZpZWxkID0gZXhwb3J0cy5HcmlkID0gZXhwb3J0cy5Db250YWluZXIgPSBleHBvcnRzLkxpbmsgPSBleHBvcnRzLkhhc2hSb3V0ZXIgPSBleHBvcnRzLlJvdXRlID0gZXhwb3J0cy5iaW5kID0gZXhwb3J0cy53aXRoUHJvcHMgPSBleHBvcnRzLk9ic2VydmFibGUgPSBleHBvcnRzLkNvbXBvbmVudCA9IGV4cG9ydHMuU2VydmljZSA9IGV4cG9ydHMuTW9kZWwgPSBleHBvcnRzLlN0b3JlID0gZXhwb3J0cy5DYWNoZSA9IGV4cG9ydHMuQWpheCA9IGV4cG9ydHMuTWFwID0gZXhwb3J0cy5MaXN0ID0gZXhwb3J0cy5TdHJpbmcgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfc3RyaW5nID0gcmVxdWlyZSgnLi9jb3JlL3N0cmluZycpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1N0cmluZycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0cmluZykuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfbGlzdCA9IHJlcXVpcmUoJy4vY29yZS9saXN0Jyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlzdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpc3QpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX21hcCA9IHJlcXVpcmUoJy4vY29yZS9tYXAnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNYXAnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXApLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2FqYXggPSByZXF1aXJlKCcuL2RhdGEvYWpheCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0FqYXgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hamF4KS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9jYWNoZSA9IHJlcXVpcmUoJy4vZGF0YS9jYWNoZScpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0NhY2hlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2FjaGUpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX3N0b3JlID0gcmVxdWlyZSgnLi9kYXRhL3N0b3JlJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU3RvcmUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdG9yZSkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfbW9kZWwgPSByZXF1aXJlKCcuL2RhdGEvbW9kZWwnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNb2RlbCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21vZGVsKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9zZXJ2aWNlID0gcmVxdWlyZSgnLi9hcHAvc2VydmljZScpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NlcnZpY2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXJ2aWNlKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9jb21wb25lbnQgPSByZXF1aXJlKCcuL2FwcC9jb21wb25lbnQnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdDb21wb25lbnQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wb25lbnQpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX29ic2VydmFibGUgPSByZXF1aXJlKCcuL21peGluL29ic2VydmFibGUnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPYnNlcnZhYmxlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JzZXJ2YWJsZSkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfd2l0aFByb3BzID0gcmVxdWlyZSgnLi9taXhpbi93aXRoLXByb3BzJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnd2l0aFByb3BzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2l0aFByb3BzKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9iaW5kID0gcmVxdWlyZSgnLi9taXhpbi9iaW5kJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnYmluZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2JpbmQpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX3JvdXRlciA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9yb3V0ZXInKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSb3V0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JvdXRlcikuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0hhc2hSb3V0ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfcm91dGVyLkhhc2hSb3V0ZXI7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3JvdXRlci5MaW5rO1xuICB9XG59KTtcblxudmFyIF9jb250YWluZXIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvY29udGFpbmVyJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnQ29udGFpbmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29udGFpbmVyKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9ncmlkID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2dyaWQnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdHcmlkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ3JpZCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfZm9ybSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9mb3JtJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRmllbGQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfZm9ybS5GaWVsZDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0J1dHRvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9mb3JtLkJ1dHRvbjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Ryb3Bkb3duJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2Zvcm0uRHJvcGRvd247XG4gIH1cbn0pO1xuXG5yZXF1aXJlKCdiYWJlbC1wb2x5ZmlsbCcpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9leHQgPSByZXF1aXJlKCcuL2NvcmUvZXh0Jyk7XG5cbnZhciBfZXh0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dCk7XG5cbnZhciBfbGlzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saXN0KTtcblxudmFyIF9hamF4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FqYXgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikgeyByZXR1cm4gZnVuY3Rpb24gKCkgeyB2YXIgZ2VuID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgZnVuY3Rpb24gc3RlcChrZXksIGFyZykgeyB0cnkgeyB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7IHZhciB2YWx1ZSA9IGluZm8udmFsdWU7IH0gY2F0Y2ggKGVycm9yKSB7IHJlamVjdChlcnJvcik7IHJldHVybjsgfSBpZiAoaW5mby5kb25lKSB7IHJlc29sdmUodmFsdWUpOyB9IGVsc2UgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkgeyBzdGVwKFwibmV4dFwiLCB2YWx1ZSk7IH0sIGZ1bmN0aW9uIChlcnIpIHsgc3RlcChcInRocm93XCIsIGVycik7IH0pOyB9IH0gcmV0dXJuIHN0ZXAoXCJuZXh0XCIpOyB9KTsgfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgUmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUmV4dCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmV4dCk7XG5cbiAgICB0aGlzLmV4dGVuZCA9IF9leHQyLmRlZmF1bHQuZXh0ZW5kO1xuICAgIHRoaXMuYWpheCA9IGZ1bmN0aW9uIChzZXR0aW5ncykge1xuICAgICAgcmV0dXJuIF9hamF4Mi5kZWZhdWx0LnJlcXVlc3Qoc2V0dGluZ3MpO1xuICAgIH07XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUmV4dCwgW3tcbiAgICBrZXk6ICdsYXVuY2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3JlZiA9IF9hc3luY1RvR2VuZXJhdG9yKHJlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUodmlld3BvcnQpIHtcbiAgICAgICAgdmFyIHJvb3Q7XG4gICAgICAgIHJldHVybiByZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBpZiAoIXdpbmRvdy5sb2NhdGlvbi5oYXNoKSB7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcvJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByb290ID0gX2V4dDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCc8ZGl2IGlkPVwicmVhY3Qtcm9vdFwiPjwvZGl2PicpO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyb290KTtcbiAgICAgICAgICAgICAgICBfY29udGV4dC50MCA9IF9leHQyLmRlZmF1bHQuaXNGdW5jdGlvbih2aWV3cG9ydCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIV9jb250ZXh0LnQwKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gODtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA3O1xuICAgICAgICAgICAgICAgIHJldHVybiB2aWV3cG9ydCgpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICB2aWV3cG9ydCA9IF9jb250ZXh0LnNlbnQ7XG5cbiAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICgwLCBfcmVhY3REb20ucmVuZGVyKSh2aWV3cG9ydCwgcm9vdCk7XG5cbiAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlLCB0aGlzKTtcbiAgICAgIH0pKTtcblxuICAgICAgZnVuY3Rpb24gbGF1bmNoKF94KSB7XG4gICAgICAgIHJldHVybiBfcmVmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsYXVuY2g7XG4gICAgfSgpXG4gIH1dKTtcblxuICByZXR1cm4gUmV4dDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gbmV3IFJleHQoKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIENvbXBvbmVudCB9IGZyb20gJ0AvcmV4dCdcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0AvcmV4dCc7XG5cbkBSb3V0ZSgnLycpXG5AQ29tcG9uZW50KHtcbiAgdmlldzogKHsgdm0gfSkgPT4gPENvbnRhaW5lciBjbGFzc05hbWU9XCJwYW5lbC1ib2R5XCI+PGgxPnt2bS50aXRsZX08L2gxPjwvQ29udGFpbmVyPlxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50aXRsZSA9ICdEYXNoYm9hcmQnXG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBSb3V0ZSwgQ29udGFpbmVyIH0gZnJvbSAnQC9yZXh0J1xuXG5AUm91dGUoJyonKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxDb250YWluZXI+XG4gICAgICA8aDE+Tm90IEZvdW5kPC9oMT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgfVxufSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0AvcmV4dCc7XG5pbXBvcnQgQ2FyZFN0b3JlIGZyb20gJyMvc3RvcmVzL2NhcmQnO1xuaW1wb3J0IFNlYXJjaEZvcm1WaWV3IGZyb20gJy4vc2VhcmNoLWZvcm0udmlldyc7XG5cbkBDb21wb25lbnQoe1xuICBjb21wb25lbnRBczogJ3NlYXJjaEZvcm0nLFxuICB2aWV3OiBTZWFyY2hGb3JtVmlld1xufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgc2VhcmNoKCkge1xuICAgIENhcmRTdG9yZS5sb2FkKCk7XG4gIH1cblxuICB0ZXN0KCkge1xuICAgIENhcmRTdG9yZS5nZXRBdCgwKS5zZXQoJ05hbWUnLCAnTmV3IE5hbWUnKTtcbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoUHJvcHMsIEZpZWxkLCBEcm9wZG93biwgQnV0dG9uIH0gZnJvbSAnQC9yZXh0JztcbmltcG9ydCBDYXJkVHlwZVN0b3JlIGZyb20gJyMvc3RvcmVzL2NhcmQtdHlwZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgQHdpdGhQcm9wc1xuICByZW5kZXIoeyBzZWFyY2hGb3JtIH0pIHtcbiAgICByZXR1cm4gPHNlY3Rpb24gY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBmb3JtLWlubGluZVwiPlxuICAgICAgPEZpZWxkIGNsYXNzTmFtZT1cIm1yLXNtXCIgLz5cbiAgICAgIDxEcm9wZG93biBzdG9yZT17Q2FyZFR5cGVTdG9yZX0gZGlzcGxheUZpZWxkPVwibmFtZVwiIGZpZWxkTGFiZWw9XCJDYXJkIFR5cGVcIiBjbGFzc05hbWU9XCJtci1zbVwiIC8+XG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInByaW1hcnkgbXItc21cIiB0ZXh0PVwiU2VhcmNoXCIgb25DbGljaz17c2VhcmNoRm9ybS5zZWFyY2h9IC8+XG4gICAgPC9zZWN0aW9uPjtcbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQgfSBmcm9tICdAL3JleHQnO1xuaW1wb3J0IENhcmRTdG9yZSBmcm9tICcjL3N0b3Jlcy9jYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxDb250YWluZXI+XG4gICAgICA8R3JpZCBzdG9yZT17Q2FyZFN0b3JlfT5cbiAgICAgICAgPGRpdiB0ZXh0PVwiSURcIiBkYXRhSW5kZXg9XCJJZFwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3t3aWR0aDoxNTB9fSAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJOYW1lXCIgZGF0YUluZGV4PVwiTmFtZVwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3t3aWR0aDoyNTB9fSAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJUeXBlXCIgZGF0YUluZGV4PVwiVHlwZVwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3t3aWR0aDoxMDB9fSAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJJbnRyb2R1Y3Rpb25cIiBkYXRhSW5kZXg9XCJJbnRyb2R1Y3Rpb25cIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6MTAwMH19IC8+XG4gICAgICAgIDxkaXYgdGV4dD1cIlNUUlwiIGRhdGFJbmRleD1cIlNUUlwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3t3aWR0aDo1MH19IC8+XG4gICAgICAgIDxkaXYgdGV4dD1cIkFHSVwiIGRhdGFJbmRleD1cIkFHSVwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3t3aWR0aDo1MH19IC8+XG4gICAgICAgIDxkaXYgdGV4dD1cIkhQXCIgZGF0YUluZGV4PVwiSFBcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6NTB9fSAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJERVhcIiBkYXRhSW5kZXg9XCJERVhcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6NTB9fSAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJJTlRcIiBkYXRhSW5kZXg9XCJJTlRcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6NTB9fSAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJTRU5cIiBkYXRhSW5kZXg9XCJTRU5cIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6NTB9fSAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJBcm1vclwiIGRhdGFJbmRleD1cIkFybW9yVXNhYmxlXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiBzdHlsZT17e3dpZHRoOjEwMH19IC8+XG4gICAgICAgIDxkaXYgdGV4dD1cIldlYXBvblwiIGRhdGFJbmRleD1cIldlYXBvblVzYWJsZVwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3t3aWR0aDoxMDB9fSAvPlxuICAgICAgPC9HcmlkPlxuICAgIDwvQ29udGFpbmVyPjtcbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29udGFpbmVyIH0gZnJvbSAnQC9yZXh0JztcbmltcG9ydCBTZWFyY2hGb3JtIGZyb20gJy4vc2VhcmNoLWZvcm0nO1xuaW1wb3J0IFNlYXJjaFJlc3VsdCBmcm9tICcuL3NlYXJjaC1yZXN1bHQnO1xuXG5AUm91dGUoJy9zZWFyY2gnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxDb250YWluZXIgY2xhc3NOYW1lPVwicGFuZWwtYm9keVwiPlxuICAgICAgPGgxPlNlYXJjaDwvaDE+XG4gICAgICA8U2VhcmNoRm9ybSAvPlxuICAgICAgPFNlYXJjaFJlc3VsdCAvPlxuICAgIDwvQ29udGFpbmVyPjtcbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Zm9vdGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdGV4dC1jZW50ZXJcIj4mY29weTsgMjAxNyBodXl0cm9uZ25ndXllbjwvZGl2PlxuICAgIDwvZm9vdGVyPjtcbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rLCBDYWNoZSB9IGZyb20gJ0AvcmV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8aGVhZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFuZFwiPlJlYWN0IENNUzwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXItYXV0b1wiPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+RGFzaGJvYXJkPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL3NlYXJjaFwiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+U2VhcmNoPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL3JlcG9ydGluZ1wiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+UmVwb3J0aW5nPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL2FkbWluXCIgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5BZG1pbmlzdHJhdGlvbjwvTGluaz5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGRpdj5IZWxsbywgPHN0cm9uZz57Q2FjaGUuZ2V0KCdjb25maWd1cmF0aW9uJykubmFtZX08L3N0cm9uZz48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPjtcbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgLi4ub3RoZXJzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiA8bmF2IHsuLi5vdGhlcnN9IC8+O1xuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxhc2lkZSBzdHlsZT17e3dpZHRoOjEwMH19IC8+O1xuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgSGFzaFJvdXRlciB9IGZyb20gJ0AvcmV4dCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCBTaWRlIGZyb20gJy4vc2lkZSc7XG5pbXBvcnQgTmF2IGZyb20gJy4vbmF2JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPENvbnRhaW5lcj5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxDb250YWluZXIgaGJveD5cbiAgICAgICAgPENvbnRhaW5lciBpZD1cIm1haW4tY29udGFpbmVyXCI+XG4gICAgICAgICAgPE5hdiAvPlxuICAgICAgICAgIDxIYXNoUm91dGVyIC8+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9Db250YWluZXI+O1xuICB9XG59IiwiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJleHQgZnJvbSAnQC9yZXh0JztcbmltcG9ydCBDb21tb25TZXJ2aWNlIGZyb20gJy4vc2VydmljZXMvY29tbW9uJztcbmltcG9ydCBWaWV3cG9ydCBmcm9tICcuL2NvbXBvbmVudHMvdmlld3BvcnQvdmlld3BvcnQnO1xuaW1wb3J0IERhc2hib2FyZCBmcm9tICcuL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZCc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoJztcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuL2NvbXBvbmVudHMvbm90Zm91bmQvbm90Zm91bmQnO1xuXG5SZXh0LmxhdW5jaChhc3luYyAoKSA9PiB7XG4gIGF3YWl0IENvbW1vblNlcnZpY2UuaW5pdEFwcCgpO1xuICByZXR1cm4gPFZpZXdwb3J0IC8+O1xufSk7IiwiaW1wb3J0IFJleHQsIHsgU2VydmljZSwgQWpheCwgQ2FjaGUgfSBmcm9tICdAL3JleHQnO1xuXG5AU2VydmljZVxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBhc3luYyBpbml0QXBwKCkge1xuICAgIGF3YWl0IEFqYXgucmVxdWVzdCh7XG4gICAgICB1cmw6ICcvYXBpL2NvbmZpZ3VyYXRpb24nLFxuICAgICAgbmV4dDogY29uZmlndXJhdGlvbiA9PiBDYWNoZS5zZXQoJ2NvbmZpZ3VyYXRpb24nLCBjb25maWd1cmF0aW9uKVxuICAgIH0pO1xuICB9XG59IiwiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAL3JleHQnXG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JlKHtcbiAgc3RvcmVJZDogJ0NhcmRUeXBlU3RvcmUnLFxuICBkYXRhOiBbXG4gICAgeyBpZDogbnVsbCwgY29kZTogJ01FTEVFJywgbmFtZTogJ01lbGVlJyB9LFxuICAgIHsgaWQ6IG51bGwsIGNvZGU6ICdTSE9PVCcsIG5hbWU6ICdTaG9vdCcgfSxcbiAgICB7IGlkOiBudWxsLCBjb2RlOiAnTUFHSUMnLCBuYW1lOiAnTWFnaWMnIH0sXG4gIF1cbn0pOyIsImltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQC9yZXh0J1xuXG5leHBvcnQgZGVmYXVsdCBTdG9yZSh7XG4gIHN0b3JlSWQ6ICdDYXJkU3RvcmUnLFxuICBwcm94eToge1xuICAgIHVybDogJy9hcGkvY2FyZHMnLFxuICAgIG1ldGhvZDogJ3Bvc3QnXG4gIH1cbn0pOyJdfQ==
