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
      _inherits(HocComponent, _Component);

      function HocComponent(props) {
        _classCallCheck(this, HocComponent);

        var _this = _possibleConstructorReturn(this, (HocComponent.__proto__ || Object.getPrototypeOf(HocComponent)).call(this, props));

        _this.state = _defineProperty({
          stores: {}
        }, config.componentAs || 'vm', new comp());
        return _this;
      }

      _createClass(HocComponent, [{
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

      return HocComponent;
    }(_react.Component);
  };
};

},{"../core/ext":13,"../core/list":14,"../core/map":15,"../mixin/observable":23,"react":"react"}],2:[function(require,module,exports){
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
        selection = (0, _list2.default)(props.value ? [props.value] : data);
    _this3.state = {
      data: data,
      selection: selection,
      searchFilter: '',
      multiple: false,
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
          return rec.get ? rec.get(displayField) : rec;
        }).collect().join(',') || fieldLabel, readOnly: true }), _react2.default.createElement(Button, { className: 'dropdown-toggle', onClick: this.toggle }), show && _react2.default.createElement('div', { className: 'dropdown-menu' }, _react2.default.createElement('div', { className: 'dropdown-action' }, _react2.default.createElement(Field, { value: searchFilter || '', onChange: this.filter, placeholder: 'Search...' })), _react2.default.createElement('div', { className: 'dropdown-list' }, data.map(function (rec) {
        return _react2.default.createElement('div', { className: _ext2.default.className({ 'dropdown-item': true,
            'selected': selection.contains(function (selected) {
              return (selected.get ? selected.get(displayField) : selected) === rec.get(displayField);
            }) }),
          onClick: function onClick() {
            return _this4.select(rec);
          } }, rec.get ? rec.get(displayField) : rec);
      }))));
    }
  }, {
    key: 'toggle',
    value: function () {
      var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var show, _props, onCollapse, store, _state2, multiple, selection, _props2, _store, queryMode, data;

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

                _props = this.props, onCollapse = _props.onCollapse, store = _props.store, _state2 = this.state, multiple = _state2.multiple, selection = _state2.selection;

                onCollapse && onCollapse(multiple ? selection.map(function (rec) {
                  return rec.data;
                }).collect() : selection.collect()[0].data);
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
      this.setState({ selection: (0, _list2.default)([rec]) }, this.toggle);
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
        var node = null;
        try {
          node = (0, _reactDom.findDOMNode)(this);
        } catch (e) {
          node = null;
        }

        if (node === null) {
          return;
        }

        var _target = e.target.parentElement,
            parentFound = false;
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
      }
    }
  }]);

  return Dropdown;
}(_react.Component), (_applyDecoratedDescriptor(_class3.prototype, 'render', [_withProps2.default], Object.getOwnPropertyDescriptor(_class3.prototype, 'render'), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, 'toggle', [_bind2.default], Object.getOwnPropertyDescriptor(_class3.prototype, 'toggle'), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, 'select', [_bind2.default], Object.getOwnPropertyDescriptor(_class3.prototype, 'select'), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, 'filter', [_bind2.default], Object.getOwnPropertyDescriptor(_class3.prototype, 'filter'), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, 'closeOnBlur', [_bind2.default], Object.getOwnPropertyDescriptor(_class3.prototype, 'closeOnBlur'), _class3.prototype)), _class3);

},{"../core/ext":13,"../core/list":14,"../mixin/bind":22,"../mixin/observable":23,"../mixin/with-props":24,"../mixin/with-state":25,"react":"react","react-dom":"react-dom"}],5:[function(require,module,exports){
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

var _pagingToolbar = require('./grid/paging-toolbar');

var _pagingToolbar2 = _interopRequireDefault(_pagingToolbar);

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

var Grid = (_class = function (_Component) {
  _inherits(Grid, _Component);

  function Grid(props) {
    _classCallCheck(this, Grid);

    var _this = _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).call(this, props));

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

  _createClass(Grid, [{
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
      var store = _ref.store,
          paging = _ref.paging;

      return _react2.default.createElement(_container2.default, { className: 'rx-grid' }, paging && _react2.default.createElement(_pagingToolbar2.default, { store: store }), _react2.default.createElement(_header2.default, this.state), _react2.default.createElement(_body2.default, _extends({ data: store.getData() }, this.state)));
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

  return Grid;
}(_react.Component), (_applyDecoratedDescriptor(_class.prototype, 'render', [_withProps2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'resizeGrid', [_bind2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'resizeGrid'), _class.prototype)), _class);
exports.default = Grid;

},{"../core/ext":13,"../core/list":14,"../core/number":16,"../mixin/bind":22,"../mixin/observable":23,"../mixin/with-props":24,"./container":3,"./grid/body":6,"./grid/header":8,"./grid/paging-toolbar":9,"react":"react"}],6:[function(require,module,exports){
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

var GridBody = (_class = function (_Component) {
  _inherits(GridBody, _Component);

  function GridBody() {
    _classCallCheck(this, GridBody);

    return _possibleConstructorReturn(this, (GridBody.__proto__ || Object.getPrototypeOf(GridBody)).apply(this, arguments));
  }

  _createClass(GridBody, [{
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

  return GridBody;
}(_react.Component), _applyDecoratedDescriptor(_class.prototype, 'render', [_withProps2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype), _class);
exports.default = GridBody;

},{"../../mixin/with-props":24,"../container":3,"./row":10,"react":"react"}],7:[function(require,module,exports){
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

var _ext = require('../../core/ext');

var _ext2 = _interopRequireDefault(_ext);

var _form = require('../form');

var _withProps = require('../../mixin/with-props');

var _withProps2 = _interopRequireDefault(_withProps);

var _bind = require('../../mixin/bind');

var _bind2 = _interopRequireDefault(_bind);

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

var GridCell = (_class = function (_Component) {
  _inherits(GridCell, _Component);

  function GridCell(props) {
    _classCallCheck(this, GridCell);

    var _this = _possibleConstructorReturn(this, (GridCell.__proto__ || Object.getPrototypeOf(GridCell)).call(this, props));

    _this.state = {
      value: props.record.get(props.dataIndex),
      readOnly: true
    };
    _ext2.default.generateSetter(_this.state, _this);
    return _this;
  }

  _createClass(GridCell, [{
    key: 'render',
    value: function render(_ref) {
      var _this2 = this;

      var record = _ref.record,
          rowIndex = _ref.rowIndex,
          dataIndex = _ref.dataIndex,
          className = _ref.className,
          _render = _ref.render,
          style = _ref.style,
          editable = _ref.editable,
          others = _objectWithoutProperties(_ref, ['record', 'rowIndex', 'dataIndex', 'className', 'render', 'style', 'editable']);

      var _state = this.state,
          value = _state.value,
          readOnly = _state.readOnly;

      if (editable) {
        if (readOnly) {
          return _react2.default.createElement('div', _extends({ className: 'rx-grid-cell ' + (className || ''), style: style,
            onClick: function onClick() {
              return _this2.setReadOnly(false);
            } }, others), _render ? _render(value, record, dataIndex, rowIndex) : value);
        }

        if (editable.type === 'dropdown') {
          return _react2.default.createElement('div', _extends({ className: 'rx-grid-cell ' + (className || ''), style: style }, others), _react2.default.createElement(_form.Dropdown, { value: value, store: editable.store, fieldLabel: 'Card Type', onSelect: function onSelect(rec) {
              return _this2.setValue(rec.data);
            }, onCollapse: function onCollapse(value) {
              return _this2.afterEdit(value);
            } }));
        }

        return _react2.default.createElement('div', _extends({ className: 'rx-grid-cell ' + (className || ''), style: style }, others), _react2.default.createElement(_form.Field, { value: value, autoFocus: true, onChange: function onChange(value) {
            return _this2.setValue(value);
          }, onBlur: function onBlur(value) {
            return _this2.afterEdit(value);
          } }));
      }

      return _react2.default.createElement('div', _extends({ className: 'rx-grid-cell ' + (className || ''), style: style }, others), _render ? _render(value, record, dataIndex, rowIndex) : value);
    }
  }, {
    key: 'afterEdit',
    value: function afterEdit(value) {
      var _props = this.props,
          record = _props.record,
          dataIndex = _props.dataIndex;

      record.set(dataIndex, value);
      this.setReadOnly(true);
    }
  }]);

  return GridCell;
}(_react.Component), (_applyDecoratedDescriptor(_class.prototype, 'render', [_withProps2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'afterEdit', [_bind2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'afterEdit'), _class.prototype)), _class);
exports.default = GridCell;

},{"../../core/ext":13,"../../mixin/bind":22,"../../mixin/with-props":24,"../form":4,"react":"react"}],8:[function(require,module,exports){
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

var GridHeader = (_class = function (_Component) {
  _inherits(GridHeader, _Component);

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
}(_react.Component), _applyDecoratedDescriptor(_class.prototype, 'render', [_withProps2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype), _class);
exports.default = GridHeader;

},{"../../mixin/with-props":24,"react":"react"}],9:[function(require,module,exports){
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

var GridPagingToolbar = (_class = function (_Component) {
  _inherits(GridPagingToolbar, _Component);

  function GridPagingToolbar() {
    _classCallCheck(this, GridPagingToolbar);

    return _possibleConstructorReturn(this, (GridPagingToolbar.__proto__ || Object.getPrototypeOf(GridPagingToolbar)).apply(this, arguments));
  }

  _createClass(GridPagingToolbar, [{
    key: 'render',
    value: function render(_ref) {
      var _ref$store$page = _ref.store.page,
          totalElements = _ref$store$page.totalElements,
          firstIndex = _ref$store$page.firstIndex,
          lastIndex = _ref$store$page.lastIndex;

      return _react2.default.createElement('section', { className: 'toolbar top row' }, _react2.default.createElement('div', { className: 'col-6' }, totalElements && 'Displaying ' + firstIndex + ' - ' + lastIndex + ' of ' + totalElements), _react2.default.createElement('div', { className: 'col-6 pagination' }));
    }
  }]);

  return GridPagingToolbar;
}(_react.Component), _applyDecoratedDescriptor(_class.prototype, 'render', [_withProps2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype), _class);
exports.default = GridPagingToolbar;

},{"../../mixin/with-props":24,"react":"react"}],10:[function(require,module,exports){
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

var _cell = require('./cell');

var _cell2 = _interopRequireDefault(_cell);

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

var GridRow = (_class = function (_Component) {
  _inherits(GridRow, _Component);

  function GridRow() {
    _classCallCheck(this, GridRow);

    return _possibleConstructorReturn(this, (GridRow.__proto__ || Object.getPrototypeOf(GridRow)).apply(this, arguments));
  }

  _createClass(GridRow, [{
    key: 'render',
    value: function render(_ref) {
      var columns = _ref.columns,
          record = _ref.record,
          rowIndex = _ref.rowIndex;

      return _react2.default.createElement('div', { className: 'rx-grid-row d-flex flex-row' }, columns && columns.map(function (col) {
        return _react2.default.createElement(_cell2.default, _extends({ record: record, rowIndex: rowIndex }, col));
      }));
    }
  }]);

  return GridRow;
}(_react.Component), _applyDecoratedDescriptor(_class.prototype, 'render', [_withProps2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype), _class);
exports.default = GridRow;

},{"../../mixin/with-props":24,"./cell":7,"react":"react"}],11:[function(require,module,exports){
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
    (0, _list2.default)(routePath).each(function (routeName, index) {
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

},{"../core/list":14,"../mixin/observable":23,"react":"react"}],12:[function(require,module,exports){
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

},{"react-dom":"react-dom"}],13:[function(require,module,exports){
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

var _string = require('./string');

var _string2 = _interopRequireDefault(_string);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
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
    key: 'isObject',
    value: function isObject(value) {
      return toString.call(value) === '[object Object]';
    }
  }, {
    key: 'isArray',
    value: function isArray(value) {
      return toString.call(value) === '[object Array]';
    }
  }, {
    key: 'isPrimitive',
    value: function isPrimitive(value) {
      var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
      return type === 'string' || type === 'number' || type === 'boolean';
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
    key: 'generateSetter',
    value: function generateSetter(state, comp) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        var _loop = function _loop() {
          var field = _step2.value;

          comp['set' + _string2.default.capitalize(field)] = function (value) {
            return comp.setState(function () {
              return _defineProperty({}, field, value);
            });
          };
        };

        for (var _iterator2 = Object.keys(state)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
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

},{"./component":12,"./string":17}],14:[function(require,module,exports){
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

},{"./list":14}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
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
  }, {
    key: 'capitalize',
    value: function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }]);

  return String;
}();

exports.default = new String();

},{}],18:[function(require,module,exports){
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

},{"../core/ext":13,"../core/string":17}],19:[function(require,module,exports){
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

},{}],20:[function(require,module,exports){
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
      if (!fieldName || _ext2.default.isPrimitive(this.data)) {
        return this.data;
      }
      return this.data[fieldName];
    }
  }, {
    key: 'set',
    value: function set(fieldName, newValue) {
      if (!fieldName || _ext2.default.isPrimitive(this.data)) {
        this.data = newValue;
      } else {
        this.data[fieldName] = newValue;
      }
      this.store && this.store.observable.call(this.store);
    }
  }, {
    key: 'save',
    value: function save() {
      this.phantom = _ext2.default.isPrimitive(this.data) ? this.data : _ext2.default.extend({}, this.data);
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

},{"../core/ext":13,"../mixin/observable":23}],21:[function(require,module,exports){
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

},{"../core/ext":13,"../core/list":14,"../mixin/observable":23,"./ajax":18,"./model":20}],22:[function(require,module,exports){
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

},{}],23:[function(require,module,exports){
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
      this.target.addEventListener(this.eventName, observer, false);
    }
  }, {
    key: 'unsubscribe',
    value: function unsubscribe(observer) {
      this.target.removeEventListener(this.eventName, observer, false);
    }
  }]);

  return EventObservable;
}();

},{"../core/ext":13,"../core/list":14}],24:[function(require,module,exports){
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

},{}],25:[function(require,module,exports){
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

},{}],26:[function(require,module,exports){
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

},{"./app/component":1,"./app/service":2,"./components/container":3,"./components/form":4,"./components/grid":5,"./components/router":11,"./core/ext":13,"./core/list":14,"./core/map":15,"./core/string":17,"./data/ajax":18,"./data/cache":19,"./data/model":20,"./data/store":21,"./mixin/bind":22,"./mixin/observable":23,"./mixin/with-props":24,"babel-polyfill":"babel-polyfill","react":"react","react-dom":"react-dom"}],27:[function(require,module,exports){
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

},{"../../../../../dist/rext":26,"react":"react"}],28:[function(require,module,exports){
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

},{"../../../../../dist/rext":26,"react":"react"}],29:[function(require,module,exports){
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

var SearchForm = (_dec = (0, _rext.Component)({
  componentAs: 'searchForm',
  view: _searchForm2.default
}), _dec(_class = function () {
  function SearchForm() {
    _classCallCheck(this, SearchForm);
  }

  _createClass(SearchForm, [{
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

  return SearchForm;
}()) || _class);
exports.default = SearchForm;

},{"../../../../../dist/rext":26,"../../stores/card":41,"./search-form.view":30}],30:[function(require,module,exports){
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

var SearchFormView = (_class = function (_Component) {
  _inherits(SearchFormView, _Component);

  function SearchFormView() {
    _classCallCheck(this, SearchFormView);

    return _possibleConstructorReturn(this, (SearchFormView.__proto__ || Object.getPrototypeOf(SearchFormView)).apply(this, arguments));
  }

  _createClass(SearchFormView, [{
    key: 'render',
    value: function render(_ref) {
      var searchForm = _ref.searchForm;

      return _react2.default.createElement(
        'section',
        { className: 'form-group form-inline' },
        _react2.default.createElement(_rext.Field, { className: 'mr-sm' }),
        _react2.default.createElement(_rext.Dropdown, { store: _cardType2.default, fieldLabel: 'Card Type', className: 'mr-sm' }),
        _react2.default.createElement(_rext.Button, { className: 'primary mr-sm', text: 'Search', onClick: searchForm.search })
      );
    }
  }]);

  return SearchFormView;
}(_react.Component), (_applyDecoratedDescriptor(_class.prototype, 'render', [_rext.withProps], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype)), _class);
exports.default = SearchFormView;

},{"../../../../../dist/rext":26,"../../stores/card-type":40,"react":"react"}],31:[function(require,module,exports){
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

var _cardType = require('../../stores/card-type');

var _cardType2 = _interopRequireDefault(_cardType);

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
      return _react2.default.createElement(
        _rext.Container,
        null,
        _react2.default.createElement(
          _rext.Grid,
          { store: _card2.default },
          _react2.default.createElement('div', { text: 'ID', dataIndex: 'Id', className: 'text-center', style: { width: 150 } }),
          _react2.default.createElement('div', { text: 'Name', dataIndex: 'Name', className: 'text-center', style: { width: 250 }, editable: true }),
          _react2.default.createElement('div', { text: 'Type', dataIndex: 'Type', className: 'text-center', style: { width: 100 }, editable: { type: 'dropdown', store: _cardType2.default } }),
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

  return SearchResult;
}(_react.Component);

exports.default = SearchResult;

},{"../../../../../dist/rext":26,"../../stores/card":41,"../../stores/card-type":40,"react":"react"}],32:[function(require,module,exports){
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

},{"../../../../../dist/rext":26,"./search-form":29,"./search-result":31,"react":"react"}],33:[function(require,module,exports){
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

},{"react":"react"}],34:[function(require,module,exports){
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

},{"../../../../../dist/rext":26,"react":"react"}],35:[function(require,module,exports){
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

},{"react":"react"}],36:[function(require,module,exports){
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

},{"react":"react"}],37:[function(require,module,exports){
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

},{"../../../../../dist/rext":26,"./footer":33,"./header":34,"./nav":35,"./side":36,"react":"react"}],38:[function(require,module,exports){
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

},{"../../../dist/rext":26,"./components/dashboard/dashboard":27,"./components/notfound/notfound":28,"./components/search/search":32,"./components/viewport/viewport":37,"./services/common":39,"babel-polyfill":"babel-polyfill","react":"react"}],39:[function(require,module,exports){
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

},{"../../../../dist/rext":26}],40:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rext = require('../../../../dist/rext');

exports.default = (0, _rext.Store)({
  storeId: 'CardTypeStore',
  data: ['Melee', 'Shoot', 'Magic']
});

},{"../../../../dist/rext":26}],41:[function(require,module,exports){
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

},{"../../../../dist/rext":26}]},{},[38])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkaXN0L2FwcC9jb21wb25lbnQuanMiLCJkaXN0L2FwcC9zZXJ2aWNlLmpzIiwiZGlzdC9jb21wb25lbnRzL2NvbnRhaW5lci5qcyIsImRpc3QvY29tcG9uZW50cy9mb3JtLmpzIiwiZGlzdC9jb21wb25lbnRzL2dyaWQuanMiLCJkaXN0L2NvbXBvbmVudHMvZ3JpZC9ib2R5LmpzIiwiZGlzdC9jb21wb25lbnRzL2dyaWQvY2VsbC5qcyIsImRpc3QvY29tcG9uZW50cy9ncmlkL2hlYWRlci5qcyIsImRpc3QvY29tcG9uZW50cy9ncmlkL3BhZ2luZy10b29sYmFyLmpzIiwiZGlzdC9jb21wb25lbnRzL2dyaWQvcm93LmpzIiwiZGlzdC9jb21wb25lbnRzL3JvdXRlci5qcyIsImRpc3QvY29yZS9jb21wb25lbnQuanMiLCJkaXN0L2NvcmUvZXh0LmpzIiwiZGlzdC9jb3JlL2xpc3QuanMiLCJkaXN0L2NvcmUvbWFwLmpzIiwiZGlzdC9jb3JlL251bWJlci5qcyIsImRpc3QvY29yZS9zdHJpbmcuanMiLCJkaXN0L2RhdGEvYWpheC5qcyIsImRpc3QvZGF0YS9jYWNoZS5qcyIsImRpc3QvZGF0YS9tb2RlbC5qcyIsImRpc3QvZGF0YS9zdG9yZS5qcyIsImRpc3QvbWl4aW4vYmluZC5qcyIsImRpc3QvbWl4aW4vb2JzZXJ2YWJsZS5qcyIsImRpc3QvbWl4aW4vd2l0aC1wcm9wcy5qcyIsImRpc3QvbWl4aW4vd2l0aC1zdGF0ZS5qcyIsImRpc3QvcmV4dC5qcyIsImV4YW1wbGUvanMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5qcyIsImV4YW1wbGUvanMvYXBwL2NvbXBvbmVudHMvbm90Zm91bmQvbm90Zm91bmQuanN4IiwiZXhhbXBsZS9qcy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLWZvcm0uanMiLCJleGFtcGxlL2pzL2FwcC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2gtZm9ybS52aWV3LmpzeCIsImV4YW1wbGUvanMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC1yZXN1bHQuanN4IiwiZXhhbXBsZS9qcy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmpzeCIsImV4YW1wbGUvanMvYXBwL2NvbXBvbmVudHMvdmlld3BvcnQvZm9vdGVyLmpzeCIsImV4YW1wbGUvanMvYXBwL2NvbXBvbmVudHMvdmlld3BvcnQvaGVhZGVyLmpzeCIsImV4YW1wbGUvanMvYXBwL2NvbXBvbmVudHMvdmlld3BvcnQvbmF2LmpzeCIsImV4YW1wbGUvanMvYXBwL2NvbXBvbmVudHMvdmlld3BvcnQvc2lkZS5qc3giLCJleGFtcGxlL2pzL2FwcC9jb21wb25lbnRzL3ZpZXdwb3J0L3ZpZXdwb3J0LmpzeCIsImV4YW1wbGUvanMvYXBwL21haW4uanMiLCJleGFtcGxlL2pzL2FwcC9zZXJ2aWNlcy9jb21tb24uanMiLCJleGFtcGxlL2pzL2FwcC9zdG9yZXMvY2FyZC10eXBlLmpzIiwiZXhhbXBsZS9qcy9hcHAvc3RvcmVzL2NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7OztBQUVBLE9BQU8sY0FBUCxDQUFzQixPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUMzQyxTQUFPO0FBRG9DLENBQTdDOztBQUlBLElBQUksV0FBVyxPQUFPLE1BQVAsSUFBaUIsVUFBVSxNQUFWLEVBQWtCO0FBQUUsT0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLFVBQVUsTUFBOUIsRUFBc0MsR0FBdEMsRUFBMkM7QUFBRSxRQUFJLFNBQVMsVUFBVSxDQUFWLENBQWIsQ0FBMkIsS0FBSyxJQUFJLEdBQVQsSUFBZ0IsTUFBaEIsRUFBd0I7QUFBRSxVQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxNQUFyQyxFQUE2QyxHQUE3QyxDQUFKLEVBQXVEO0FBQUUsZUFBTyxHQUFQLElBQWMsT0FBTyxHQUFQLENBQWQ7QUFBNEI7QUFBRTtB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Ozs7Ozs7QUNGZjs7a0JBRWUsaUJBQU07QUFDbkIsV0FBUyxXQURVO0FBRW5CLFNBQU87QUFDTCxTQUFLLFlBREE7QUFFTCxZQUFRO0FBRkg7QUFGWSxDQUFOLEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfZXh0ID0gcmVxdWlyZSgnLi4vY29yZS9leHQnKTtcblxudmFyIF9leHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0KTtcblxudmFyIF9saXN0ID0gcmVxdWlyZSgnLi4vY29yZS9saXN0Jyk7XG5cbnZhciBfbGlzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saXN0KTtcblxudmFyIF9tYXAgPSByZXF1aXJlKCcuLi9jb3JlL21hcCcpO1xuXG52YXIgX21hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXApO1xuXG52YXIgX29ic2VydmFibGUgPSByZXF1aXJlKCcuLi9taXhpbi9vYnNlcnZhYmxlJyk7XG5cbnZhciBfb2JzZXJ2YWJsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYnNlcnZhYmxlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgdmFyIGdlbiA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IGZ1bmN0aW9uIHN0ZXAoa2V5LCBhcmcpIHsgdHJ5IHsgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpOyB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlOyB9IGNhdGNoIChlcnJvcikgeyByZWplY3QoZXJyb3IpOyByZXR1cm47IH0gaWYgKGluZm8uZG9uZSkgeyByZXNvbHZlKHZhbHVlKTsgfSBlbHNlIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHsgc3RlcChcIm5leHRcIiwgdmFsdWUpOyB9LCBmdW5jdGlvbiAoZXJyKSB7IHN0ZXAoXCJ0aHJvd1wiLCBlcnIpOyB9KTsgfSB9IHJldHVybiBzdGVwKFwibmV4dFwiKTsgfSk7IH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoY29tcCkge1xuICAgIHZhciBXcmFwcGVkQ29tcG9uZW50ID0gY29uZmlnLnZpZXc7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgICBfaW5oZXJpdHMoSG9jQ29tcG9uZW50LCBfQ29tcG9uZW50KTtcblxuICAgICAgZnVuY3Rpb24gSG9jQ29tcG9uZW50KHByb3BzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIb2NDb21wb25lbnQpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChIb2NDb21wb25lbnQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihIb2NDb21wb25lbnQpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgICAgX3RoaXMuc3RhdGUgPSBfZGVmaW5lUHJvcGVydHkoe1xuICAgICAgICAgIHN0b3Jlczoge31cbiAgICAgICAgfSwgY29uZmlnLmNvbXBvbmVudEFzIHx8ICd2bScsIG5ldyBjb21wKCkpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICB9XG5cbiAgICAgIF9jcmVhdGVDbGFzcyhIb2NDb21wb25lbnQsIFt7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxNb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICB2YXIgc3RvcmVzID0gKDAsIF9saXN0Mi5kZWZhdWx0KShjb25maWcuc3RvcmVzKS5yZWR1Y2UoZnVuY3Rpb24gKHN0b3Jlcywgc3RvcmUpIHtcbiAgICAgICAgICAgIHN0b3JlLnN1YnNjcmliZShfdGhpczIub25EYXRhQ2hhbmdlZC5iaW5kKF90aGlzMikpO1xuICAgICAgICAgICAgc3RvcmVzW3N0b3JlLnN0b3JlSWRdID0gc3RvcmU7XG4gICAgICAgICAgICByZXR1cm4gc3RvcmVzO1xuICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN0b3Jlczogc3RvcmVzIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBfcmVmID0gX2FzeW5jVG9HZW5lcmF0b3IocmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZSgpIHtcbiAgICAgICAgICAgIHZhciBzdG9yZXMsIHN0b3JlSWQ7XG4gICAgICAgICAgICByZXR1cm4gcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlcyA9IHRoaXMuc3RhdGUuc3RvcmVzO1xuICAgICAgICAgICAgICAgICAgICBfY29udGV4dC50MCA9IHJlZ2VuZXJhdG9yUnVudGltZS5rZXlzKHN0b3Jlcyk7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgaWYgKChfY29udGV4dC50MSA9IF9jb250ZXh0LnQwKCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gOTtcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlSWQgPSBfY29udGV4dC50MS52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIXN0b3Jlc1tzdG9yZUlkXS5hdXRvTG9hZCkge1xuICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA3O1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDc7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdG9yZXNbc3RvcmVJZF0ubG9hZCgpO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIF9jYWxsZWUsIHRoaXMpO1xuICAgICAgICAgIH0pKTtcblxuICAgICAgICAgIGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29tcG9uZW50RGlkTW91bnQ7XG4gICAgICAgIH0oKVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICgwLCBfbWFwMi5kZWZhdWx0KSh0aGlzLnN0YXRlLnN0b3JlcykuZWFjaChmdW5jdGlvbiAoc3RvcmVJZCwgc3RvcmUpIHtcbiAgICAgICAgICAgIHN0b3JlLnVuc3Vic2NyaWJlKF90aGlzMy5vbkRhdGFDaGFuZ2VkKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChXcmFwcGVkQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgdGhpcy5zdGF0ZSwgdGhpcy5wcm9wcykpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ29uRGF0YUNoYW5nZWQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25EYXRhQ2hhbmdlZChzdG9yZSkge1xuICAgICAgICAgIHZhciBzdG9yZXMgPSB0aGlzLnN0YXRlLnN0b3JlcztcblxuICAgICAgICAgIHN0b3Jlc1tzdG9yZS5zdG9yZUlkXSA9IHN0b3JlO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3RvcmVzOiBzdG9yZXMgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSG9jQ29tcG9uZW50O1xuICAgIH0oX3JlYWN0LkNvbXBvbmVudCk7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoU2VydmljZSkge1xuICByZXR1cm4gbmV3IFNlcnZpY2UoKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ29udGFpbmVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKENvbnRhaW5lciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ29udGFpbmVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChDb250YWluZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDb250YWluZXIpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDb250YWluZXIsIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgX3Byb3BzJGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzJGNsYXNzTmFtZSA9PT0gdW5kZWZpbmVkID8gJycgOiBfcHJvcHMkY2xhc3NOYW1lLFxuICAgICAgICAgIGhib3ggPSBfcHJvcHMuaGJveCxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBvdGhlcnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2NsYXNzTmFtZScsICdoYm94JywgJ2NoaWxkcmVuJ10pO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzZWN0aW9uJyxcbiAgICAgICAgX2V4dGVuZHMoeyBjbGFzc05hbWU6ICdkLWZsZXggZmxleC0nICsgKGhib3ggPyAncm93JyA6ICdjb2x1bW4nKSArICcgJyArIGNsYXNzTmFtZSB9LCBvdGhlcnMpLFxuICAgICAgICBjaGlsZHJlblxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ29udGFpbmVyO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ29udGFpbmVyOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuRHJvcGRvd24gPSBleHBvcnRzLkJ1dHRvbiA9IGV4cG9ydHMuRmllbGQgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZGVzYywgX3ZhbHVlLCBfY2xhc3MsIF9kZXNjMiwgX3ZhbHVlMiwgX2NsYXNzMiwgX2Rlc2MzLCBfdmFsdWUzLCBfY2xhc3MzO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9leHQgPSByZXF1aXJlKCcuLi9jb3JlL2V4dCcpO1xuXG52YXIgX2V4dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHQpO1xuXG52YXIgX2xpc3QgPSByZXF1aXJlKCcuLi9jb3JlL2xpc3QnKTtcblxudmFyIF9saXN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpc3QpO1xuXG52YXIgX29ic2VydmFibGUgPSByZXF1aXJlKCcuLi9taXhpbi9vYnNlcnZhYmxlJyk7XG5cbnZhciBfb2JzZXJ2YWJsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYnNlcnZhYmxlKTtcblxudmFyIF93aXRoUHJvcHMgPSByZXF1aXJlKCcuLi9taXhpbi93aXRoLXByb3BzJyk7XG5cbnZhciBfd2l0aFByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dpdGhQcm9wcyk7XG5cbnZhciBfd2l0aFN0YXRlID0gcmVxdWlyZSgnLi4vbWl4aW4vd2l0aC1zdGF0ZScpO1xuXG52YXIgX3dpdGhTdGF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93aXRoU3RhdGUpO1xuXG52YXIgX2JpbmQgPSByZXF1aXJlKCcuLi9taXhpbi9iaW5kJyk7XG5cbnZhciBfYmluZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iaW5kKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgdmFyIGdlbiA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IGZ1bmN0aW9uIHN0ZXAoa2V5LCBhcmcpIHsgdHJ5IHsgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpOyB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlOyB9IGNhdGNoIChlcnJvcikgeyByZWplY3QoZXJyb3IpOyByZXR1cm47IH0gaWYgKGluZm8uZG9uZSkgeyByZXNvbHZlKHZhbHVlKTsgfSBlbHNlIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHsgc3RlcChcIm5leHRcIiwgdmFsdWUpOyB9LCBmdW5jdGlvbiAoZXJyKSB7IHN0ZXAoXCJ0aHJvd1wiLCBlcnIpOyB9KTsgfSB9IHJldHVybiBzdGVwKFwibmV4dFwiKTsgfSk7IH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eSwgZGVjb3JhdG9ycywgZGVzY3JpcHRvciwgY29udGV4dCkge1xuICB2YXIgZGVzYyA9IHt9O1xuICBPYmplY3RbJ2tlJyArICd5cyddKGRlc2NyaXB0b3IpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGRlc2Nba2V5XSA9IGRlc2NyaXB0b3Jba2V5XTtcbiAgfSk7XG4gIGRlc2MuZW51bWVyYWJsZSA9ICEhZGVzYy5lbnVtZXJhYmxlO1xuICBkZXNjLmNvbmZpZ3VyYWJsZSA9ICEhZGVzYy5jb25maWd1cmFibGU7XG5cbiAgaWYgKCd2YWx1ZScgaW4gZGVzYyB8fCBkZXNjLmluaXRpYWxpemVyKSB7XG4gICAgZGVzYy53cml0YWJsZSA9IHRydWU7XG4gIH1cblxuICBkZXNjID0gZGVjb3JhdG9ycy5zbGljZSgpLnJldmVyc2UoKS5yZWR1Y2UoZnVuY3Rpb24gKGRlc2MsIGRlY29yYXRvcikge1xuICAgIHJldHVybiBkZWNvcmF0b3IodGFyZ2V0LCBwcm9wZXJ0eSwgZGVzYykgfHwgZGVzYztcbiAgfSwgZGVzYyk7XG5cbiAgaWYgKGNvbnRleHQgJiYgZGVzYy5pbml0aWFsaXplciAhPT0gdm9pZCAwKSB7XG4gICAgZGVzYy52YWx1ZSA9IGRlc2MuaW5pdGlhbGl6ZXIgPyBkZXNjLmluaXRpYWxpemVyLmNhbGwoY29udGV4dCkgOiB2b2lkIDA7XG4gICAgZGVzYy5pbml0aWFsaXplciA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmIChkZXNjLmluaXRpYWxpemVyID09PSB2b2lkIDApIHtcbiAgICBPYmplY3RbJ2RlZmluZScgKyAnUHJvcGVydHknXSh0YXJnZXQsIHByb3BlcnR5LCBkZXNjKTtcbiAgICBkZXNjID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBkZXNjO1xufVxuXG52YXIgRmllbGQgPSBleHBvcnRzLkZpZWxkID0gKF9jbGFzcyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhGaWVsZCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRmllbGQocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRmllbGQpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEZpZWxkLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRmllbGQpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiBwcm9wcy52YWx1ZSB8fCAnJ1xuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEZpZWxkLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcihfcmVmKSB7XG4gICAgICB2YXIgX3JlZiRjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfcmVmJGNsYXNzTmFtZSA9PT0gdW5kZWZpbmVkID8gJycgOiBfcmVmJGNsYXNzTmFtZSxcbiAgICAgICAgICBvbkNoYW5nZSA9IF9yZWYub25DaGFuZ2UsXG4gICAgICAgICAgb25LZXlQcmVzcyA9IF9yZWYub25LZXlQcmVzcyxcbiAgICAgICAgICBvdGhlcnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWydjbGFzc05hbWUnLCAnb25DaGFuZ2UnLCAnb25LZXlQcmVzcyddKTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIF9leHRlbmRzKHsgdHlwZTogJ3RleHQnLCB2YWx1ZTogdGhpcy5zdGF0ZS52YWx1ZSwgY2xhc3NOYW1lOiAnZm9ybS1jb250cm9sICcgKyBjbGFzc05hbWUsXG4gICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlXG4gICAgICB9LCBvdGhlcnMpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbkNoYW5nZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2hhbmdlKGUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlIH07XG4gICAgICB9KTtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEZpZWxkO1xufShfcmVhY3QuQ29tcG9uZW50KSwgKF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ3JlbmRlcicsIFtfd2l0aFByb3BzMi5kZWZhdWx0XSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAncmVuZGVyJyksIF9jbGFzcy5wcm90b3R5cGUpLCBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdvbkNoYW5nZScsIFtfYmluZDIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ29uQ2hhbmdlJyksIF9jbGFzcy5wcm90b3R5cGUpKSwgX2NsYXNzKTtcbnZhciBCdXR0b24gPSBleHBvcnRzLkJ1dHRvbiA9IChfY2xhc3MyID0gZnVuY3Rpb24gKF9Db21wb25lbnQyKSB7XG4gIF9pbmhlcml0cyhCdXR0b24sIF9Db21wb25lbnQyKTtcblxuICBmdW5jdGlvbiBCdXR0b24oKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJ1dHRvbik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEJ1dHRvbi5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEJ1dHRvbikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEJ1dHRvbiwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoX3JlZjIpIHtcbiAgICAgIHZhciB0ZXh0ID0gX3JlZjIudGV4dCxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9yZWYyLmNoaWxkcmVuLFxuICAgICAgICAgIF9yZWYyJGNsYXNzTmFtZSA9IF9yZWYyLmNsYXNzTmFtZSxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfcmVmMiRjbGFzc05hbWUgPT09IHVuZGVmaW5lZCA/ICcnIDogX3JlZjIkY2xhc3NOYW1lLFxuICAgICAgICAgIG90aGVycyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmMiwgWyd0ZXh0JywgJ2NoaWxkcmVuJywgJ2NsYXNzTmFtZSddKTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgX2V4dGVuZHMoeyBjbGFzc05hbWU6ICdidG4gJyArIGNsYXNzTmFtZSB9LCBvdGhlcnMpLFxuICAgICAgICB0ZXh0IHx8IGNoaWxkcmVuXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBCdXR0b247XG59KF9yZWFjdC5Db21wb25lbnQpLCAoX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MyLnByb3RvdHlwZSwgJ3JlbmRlcicsIFtfd2l0aFByb3BzMi5kZWZhdWx0XSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfY2xhc3MyLnByb3RvdHlwZSwgJ3JlbmRlcicpLCBfY2xhc3MyLnByb3RvdHlwZSkpLCBfY2xhc3MyKTtcbnZhciBEcm9wZG93biA9IGV4cG9ydHMuRHJvcGRvd24gPSAoX2NsYXNzMyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50Mykge1xuICBfaW5oZXJpdHMoRHJvcGRvd24sIF9Db21wb25lbnQzKTtcblxuICBmdW5jdGlvbiBEcm9wZG93bihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEcm9wZG93bik7XG5cbiAgICB2YXIgX3RoaXMzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKERyb3Bkb3duLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRHJvcGRvd24pKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICB2YXIgZGF0YSA9IFtdLFxuICAgICAgICBzZWxlY3Rpb24gPSAoMCwgX2xpc3QyLmRlZmF1bHQpKHByb3BzLnZhbHVlID8gW3Byb3BzLnZhbHVlXSA6IGRhdGEpO1xuICAgIF90aGlzMy5zdGF0ZSA9IHtcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBzZWxlY3Rpb246IHNlbGVjdGlvbixcbiAgICAgIHNlYXJjaEZpbHRlcjogJycsXG4gICAgICBtdWx0aXBsZTogZmFsc2UsXG4gICAgICBzaG93OiBmYWxzZVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzMztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEcm9wZG93biwgW3tcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICBfb2JzZXJ2YWJsZTIuZGVmYXVsdC5mcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpLnN1YnNjcmliZSh0aGlzLmNsb3NlT25CbHVyKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgX29ic2VydmFibGUyLmRlZmF1bHQuZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKS51bnN1YnNjcmliZSh0aGlzLmNsb3NlT25CbHVyKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoX3JlZjMpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICB2YXIgX3JlZjMkY2xhc3NOYW1lID0gX3JlZjMuY2xhc3NOYW1lLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9yZWYzJGNsYXNzTmFtZSA9PT0gdW5kZWZpbmVkID8gJycgOiBfcmVmMyRjbGFzc05hbWUsXG4gICAgICAgICAgZmllbGRMYWJlbCA9IF9yZWYzLmZpZWxkTGFiZWwsXG4gICAgICAgICAgX3JlZjMkZGlzcGxheUZpZWxkID0gX3JlZjMuZGlzcGxheUZpZWxkLFxuICAgICAgICAgIGRpc3BsYXlGaWVsZCA9IF9yZWYzJGRpc3BsYXlGaWVsZCA9PT0gdW5kZWZpbmVkID8gJ25hbWUnIDogX3JlZjMkZGlzcGxheUZpZWxkLFxuICAgICAgICAgIG90aGVycyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmMywgWydjbGFzc05hbWUnLCAnZmllbGRMYWJlbCcsICdkaXNwbGF5RmllbGQnXSk7XG5cbiAgICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIHNob3cgPSBfc3RhdGUuc2hvdyxcbiAgICAgICAgICBkYXRhID0gX3N0YXRlLmRhdGEsXG4gICAgICAgICAgc2VsZWN0aW9uID0gX3N0YXRlLnNlbGVjdGlvbixcbiAgICAgICAgICBzZWFyY2hGaWx0ZXIgPSBfc3RhdGUuc2VhcmNoRmlsdGVyO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzZWN0aW9uJyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdkcm9wZG93biAnICsgY2xhc3NOYW1lIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEZpZWxkLCB7IGNsYXNzTmFtZTogJ2Ryb3Bkb3duLXRleHQnLCB2YWx1ZTogc2VsZWN0aW9uLm1hcChmdW5jdGlvbiAocmVjKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVjLmdldCA/IHJlYy5nZXQoZGlzcGxheUZpZWxkKSA6IHJlYztcbiAgICAgICAgICB9KS5jb2xsZWN0KCkuam9pbignLCcpIHx8IGZpZWxkTGFiZWwsIHJlYWRPbmx5OiB0cnVlIH0pLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgY2xhc3NOYW1lOiAnZHJvcGRvd24tdG9nZ2xlJywgb25DbGljazogdGhpcy50b2dnbGUgfSksXG4gICAgICAgIHNob3cgJiYgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdkcm9wZG93bi1tZW51JyB9LFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2Ryb3Bkb3duLWFjdGlvbicgfSxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEZpZWxkLCB7IHZhbHVlOiBzZWFyY2hGaWx0ZXIgfHwgJycsIG9uQ2hhbmdlOiB0aGlzLmZpbHRlciwgcGxhY2Vob2xkZXI6ICdTZWFyY2guLi4nIH0pXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdkcm9wZG93bi1saXN0JyB9LFxuICAgICAgICAgICAgZGF0YS5tYXAoZnVuY3Rpb24gKHJlYykge1xuICAgICAgICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IF9leHQyLmRlZmF1bHQuY2xhc3NOYW1lKHsgJ2Ryb3Bkb3duLWl0ZW0nOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAnc2VsZWN0ZWQnOiBzZWxlY3Rpb24uY29udGFpbnMoZnVuY3Rpb24gKHNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChzZWxlY3RlZC5nZXQgPyBzZWxlY3RlZC5nZXQoZGlzcGxheUZpZWxkKSA6IHNlbGVjdGVkKSA9PT0gcmVjLmdldChkaXNwbGF5RmllbGQpO1xuICAgICAgICAgICAgICAgICAgICB9KSB9KSxcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczQuc2VsZWN0KHJlYyk7XG4gICAgICAgICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICAgICAgcmVjLmdldCA/IHJlYy5nZXQoZGlzcGxheUZpZWxkKSA6IHJlY1xuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndG9nZ2xlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9yZWY0ID0gX2FzeW5jVG9HZW5lcmF0b3IocmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZSgpIHtcbiAgICAgICAgdmFyIHNob3csIF9wcm9wcywgb25Db2xsYXBzZSwgc3RvcmUsIF9zdGF0ZTIsIG11bHRpcGxlLCBzZWxlY3Rpb24sIF9wcm9wczIsIF9zdG9yZSwgcXVlcnlNb2RlLCBkYXRhO1xuXG4gICAgICAgIHJldHVybiByZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBzaG93ID0gdGhpcy5zdGF0ZS5zaG93O1xuXG4gICAgICAgICAgICAgICAgc2hvdyA9ICFzaG93O1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgc2hvdzogc2hvdyB9O1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNob3cpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA5O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX3Byb3BzID0gdGhpcy5wcm9wcywgb25Db2xsYXBzZSA9IF9wcm9wcy5vbkNvbGxhcHNlLCBzdG9yZSA9IF9wcm9wcy5zdG9yZSwgX3N0YXRlMiA9IHRoaXMuc3RhdGUsIG11bHRpcGxlID0gX3N0YXRlMi5tdWx0aXBsZSwgc2VsZWN0aW9uID0gX3N0YXRlMi5zZWxlY3Rpb247XG5cbiAgICAgICAgICAgICAgICBvbkNvbGxhcHNlICYmIG9uQ29sbGFwc2UobXVsdGlwbGUgPyBzZWxlY3Rpb24ubWFwKGZ1bmN0aW9uIChyZWMpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiByZWMuZGF0YTtcbiAgICAgICAgICAgICAgICB9KS5jb2xsZWN0KCkgOiBzZWxlY3Rpb24uY29sbGVjdCgpWzBdLmRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgc2VhcmNoRmlsdGVyOiAnJywgZGF0YTogc3RvcmUuZ2V0RGF0YSgpIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDE3O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICBfcHJvcHMyID0gdGhpcy5wcm9wcywgX3N0b3JlID0gX3Byb3BzMi5zdG9yZSwgcXVlcnlNb2RlID0gX3Byb3BzMi5xdWVyeU1vZGU7XG4gICAgICAgICAgICAgICAgZGF0YSA9IHRoaXMuc3RhdGUuZGF0YTtcblxuICAgICAgICAgICAgICAgIGlmICghKCFkYXRhIHx8ICFkYXRhLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxNztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghKHF1ZXJ5TW9kZSA9PT0gJ3JlbW90ZScpKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTU7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9zdG9yZS5sb2FkKCk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICAgICAgICBkYXRhID0gX3N0b3JlLmdldERhdGEoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7IGRhdGE6IGRhdGEgfTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDE3OlxuICAgICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlLCB0aGlzKTtcbiAgICAgIH0pKTtcblxuICAgICAgZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgICAgICByZXR1cm4gX3JlZjQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRvZ2dsZTtcbiAgICB9KClcbiAgfSwge1xuICAgIGtleTogJ3NlbGVjdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlbGVjdChyZWMpIHtcbiAgICAgIHZhciBvblNlbGVjdCA9IHRoaXMucHJvcHMub25TZWxlY3Q7XG5cbiAgICAgIG9uU2VsZWN0ICYmIG9uU2VsZWN0KHJlYyk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0aW9uOiAoMCwgX2xpc3QyLmRlZmF1bHQpKFtyZWNdKSB9LCB0aGlzLnRvZ2dsZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZmlsdGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmlsdGVyKHNlYXJjaEZpbHRlcikge1xuICAgICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHN0b3JlID0gX3Byb3BzMy5zdG9yZSxcbiAgICAgICAgICBkaXNwbGF5RmllbGQgPSBfcHJvcHMzLmRpc3BsYXlGaWVsZDtcblxuICAgICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc2VhcmNoRmlsdGVyOiBzZWFyY2hGaWx0ZXIsXG4gICAgICAgICAgZGF0YTogc3RvcmUuZmlsdGVyQnkoZnVuY3Rpb24gKHJlYykge1xuICAgICAgICAgICAgcmV0dXJuIHJlYy5nZXQoZGlzcGxheUZpZWxkKS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoc2VhcmNoRmlsdGVyLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgIH0pLmNvbGxlY3QoKVxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2xvc2VPbkJsdXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZU9uQmx1cihlKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5zaG93KSB7XG4gICAgICAgIHZhciBub2RlID0gbnVsbDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBub2RlID0gKDAsIF9yZWFjdERvbS5maW5kRE9NTm9kZSkodGhpcyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBub2RlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF90YXJnZXQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LFxuICAgICAgICAgICAgcGFyZW50Rm91bmQgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUgKF90YXJnZXQgIT0gbnVsbCkge1xuICAgICAgICAgIGlmIChfdGFyZ2V0ID09PSBub2RlKSB7XG4gICAgICAgICAgICBwYXJlbnRGb3VuZCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgX3RhcmdldCA9IF90YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcGFyZW50Rm91bmQpIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERyb3Bkb3duO1xufShfcmVhY3QuQ29tcG9uZW50KSwgKF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzMy5wcm90b3R5cGUsICdyZW5kZXInLCBbX3dpdGhQcm9wczIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzMy5wcm90b3R5cGUsICdyZW5kZXInKSwgX2NsYXNzMy5wcm90b3R5cGUpLCBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzczMucHJvdG90eXBlLCAndG9nZ2xlJywgW19iaW5kMi5kZWZhdWx0XSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfY2xhc3MzLnByb3RvdHlwZSwgJ3RvZ2dsZScpLCBfY2xhc3MzLnByb3RvdHlwZSksIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzMy5wcm90b3R5cGUsICdzZWxlY3QnLCBbX2JpbmQyLmRlZmF1bHRdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzczMucHJvdG90eXBlLCAnc2VsZWN0JyksIF9jbGFzczMucHJvdG90eXBlKSwgX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MzLnByb3RvdHlwZSwgJ2ZpbHRlcicsIFtfYmluZDIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzMy5wcm90b3R5cGUsICdmaWx0ZXInKSwgX2NsYXNzMy5wcm90b3R5cGUpLCBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzczMucHJvdG90eXBlLCAnY2xvc2VPbkJsdXInLCBbX2JpbmQyLmRlZmF1bHRdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzczMucHJvdG90eXBlLCAnY2xvc2VPbkJsdXInKSwgX2NsYXNzMy5wcm90b3R5cGUpKSwgX2NsYXNzMyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2Rlc2MsIF92YWx1ZSwgX2NsYXNzO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfbGlzdCA9IHJlcXVpcmUoJy4uL2NvcmUvbGlzdCcpO1xuXG52YXIgX2xpc3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGlzdCk7XG5cbnZhciBfbnVtYmVyID0gcmVxdWlyZSgnLi4vY29yZS9udW1iZXInKTtcblxudmFyIF9udW1iZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbnVtYmVyKTtcblxudmFyIF9leHQgPSByZXF1aXJlKCcuLi9jb3JlL2V4dCcpO1xuXG52YXIgX2V4dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHQpO1xuXG52YXIgX29ic2VydmFibGUgPSByZXF1aXJlKCcuLi9taXhpbi9vYnNlcnZhYmxlJyk7XG5cbnZhciBfb2JzZXJ2YWJsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYnNlcnZhYmxlKTtcblxudmFyIF93aXRoUHJvcHMgPSByZXF1aXJlKCcuLi9taXhpbi93aXRoLXByb3BzJyk7XG5cbnZhciBfd2l0aFByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dpdGhQcm9wcyk7XG5cbnZhciBfYmluZCA9IHJlcXVpcmUoJy4uL21peGluL2JpbmQnKTtcblxudmFyIF9iaW5kMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2JpbmQpO1xuXG52YXIgX2NvbnRhaW5lciA9IHJlcXVpcmUoJy4vY29udGFpbmVyJyk7XG5cbnZhciBfY29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRhaW5lcik7XG5cbnZhciBfaGVhZGVyID0gcmVxdWlyZSgnLi9ncmlkL2hlYWRlcicpO1xuXG52YXIgX2hlYWRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWFkZXIpO1xuXG52YXIgX2JvZHkgPSByZXF1aXJlKCcuL2dyaWQvYm9keScpO1xuXG52YXIgX2JvZHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYm9keSk7XG5cbnZhciBfcGFnaW5nVG9vbGJhciA9IHJlcXVpcmUoJy4vZ3JpZC9wYWdpbmctdG9vbGJhcicpO1xuXG52YXIgX3BhZ2luZ1Rvb2xiYXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGFnaW5nVG9vbGJhcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZnVuY3Rpb24gX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcih0YXJnZXQsIHByb3BlcnR5LCBkZWNvcmF0b3JzLCBkZXNjcmlwdG9yLCBjb250ZXh0KSB7XG4gIHZhciBkZXNjID0ge307XG4gIE9iamVjdFsna2UnICsgJ3lzJ10oZGVzY3JpcHRvcikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgZGVzY1trZXldID0gZGVzY3JpcHRvcltrZXldO1xuICB9KTtcbiAgZGVzYy5lbnVtZXJhYmxlID0gISFkZXNjLmVudW1lcmFibGU7XG4gIGRlc2MuY29uZmlndXJhYmxlID0gISFkZXNjLmNvbmZpZ3VyYWJsZTtcblxuICBpZiAoJ3ZhbHVlJyBpbiBkZXNjIHx8IGRlc2MuaW5pdGlhbGl6ZXIpIHtcbiAgICBkZXNjLndyaXRhYmxlID0gdHJ1ZTtcbiAgfVxuXG4gIGRlc2MgPSBkZWNvcmF0b3JzLnNsaWNlKCkucmV2ZXJzZSgpLnJlZHVjZShmdW5jdGlvbiAoZGVzYywgZGVjb3JhdG9yKSB7XG4gICAgcmV0dXJuIGRlY29yYXRvcih0YXJnZXQsIHByb3BlcnR5LCBkZXNjKSB8fCBkZXNjO1xuICB9LCBkZXNjKTtcblxuICBpZiAoY29udGV4dCAmJiBkZXNjLmluaXRpYWxpemVyICE9PSB2b2lkIDApIHtcbiAgICBkZXNjLnZhbHVlID0gZGVzYy5pbml0aWFsaXplciA/IGRlc2MuaW5pdGlhbGl6ZXIuY2FsbChjb250ZXh0KSA6IHZvaWQgMDtcbiAgICBkZXNjLmluaXRpYWxpemVyID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKGRlc2MuaW5pdGlhbGl6ZXIgPT09IHZvaWQgMCkge1xuICAgIE9iamVjdFsnZGVmaW5lJyArICdQcm9wZXJ0eSddKHRhcmdldCwgcHJvcGVydHksIGRlc2MpO1xuICAgIGRlc2MgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGRlc2M7XG59XG5cbnZhciBHcmlkID0gKF9jbGFzcyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhHcmlkLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBHcmlkKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdyaWQpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEdyaWQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihHcmlkKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBjb2x1bW5zOiAoMCwgX2xpc3QyLmRlZmF1bHQpKHByb3BzLmNoaWxkcmVuKS5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIHJldHVybiBjaGlsZC5wcm9wcztcbiAgICAgIH0pLmNvbGxlY3QoKSxcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaW5uZXJXaWR0aDogMCxcbiAgICAgIGhlYWRlcldpZHRoOiAwLFxuICAgICAgYm9keVdpZHRoOiAwXG4gICAgfTtcbiAgICBfdGhpcy5yZWxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhHcmlkLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgIHRoaXMucHJvcHMuc3RvcmUuc3Vic2NyaWJlKHRoaXMucmVsb2FkKTtcbiAgICAgIF9vYnNlcnZhYmxlMi5kZWZhdWx0LmZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKS5zdWJzY3JpYmUodGhpcy5yZXNpemVHcmlkKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5yZXNpemVHcmlkKCk7XG4gICAgICB2YXIgbm9kZSA9IF9leHQyLmRlZmF1bHQuZ2V0Q29tcCh0aGlzKSxcbiAgICAgICAgICBoZWFkZXIgPSBub2RlLmZpbmQoJy5yeC1ncmlkLWhlYWRlcicpLFxuICAgICAgICAgIGJvZHkgPSBub2RlLmZpbmQoJy5yeC1ncmlkLWJvZHknKTtcbiAgICAgIF9vYnNlcnZhYmxlMi5kZWZhdWx0LmZyb21FdmVudChib2R5LCAnc2Nyb2xsJykuc3Vic2NyaWJlKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBoZWFkZXIuc2Nyb2xsTGVmdCA9IGJvZHkuc2Nyb2xsTGVmdDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnByb3BzLnN0b3JlLnVuc3Vic2NyaWJlKHRoaXMucmVsb2FkKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoX3JlZikge1xuICAgICAgdmFyIHN0b3JlID0gX3JlZi5zdG9yZSxcbiAgICAgICAgICBwYWdpbmcgPSBfcmVmLnBhZ2luZztcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfY29udGFpbmVyMi5kZWZhdWx0LFxuICAgICAgICB7IGNsYXNzTmFtZTogJ3J4LWdyaWQnIH0sXG4gICAgICAgIHBhZ2luZyAmJiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcGFnaW5nVG9vbGJhcjIuZGVmYXVsdCwgeyBzdG9yZTogc3RvcmUgfSksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9oZWFkZXIyLmRlZmF1bHQsIHRoaXMuc3RhdGUpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfYm9keTIuZGVmYXVsdCwgX2V4dGVuZHMoeyBkYXRhOiBzdG9yZS5nZXREYXRhKCkgfSwgdGhpcy5zdGF0ZSkpXG4gICAgICApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Jlc2l6ZUdyaWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNpemVHcmlkKCkge1xuICAgICAgdmFyIGNvbHVtbnMgPSB0aGlzLnN0YXRlLmNvbHVtbnMsXG4gICAgICAgICAgbm9kZSA9IF9leHQyLmRlZmF1bHQuZ2V0Q29tcCh0aGlzKSxcbiAgICAgICAgICBwYXJlbnQgPSBub2RlLnBhcmVudCgpLFxuICAgICAgICAgIGZsZXhDb2x1bW5zID0gW107XG5cblxuICAgICAgdmFyIHdpZHRoID0gcGFyZW50LndpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gcGFyZW50LmhlaWdodCgpLFxuICAgICAgICAgIGlubmVyV2lkdGggPSAoMCwgX2xpc3QyLmRlZmF1bHQpKGNvbHVtbnMpLnJlZHVjZShmdW5jdGlvbiAoaW5uZXJXaWR0aCwgY29sKSB7XG4gICAgICAgIGlmIChjb2wuc3R5bGUgJiYgY29sLnN0eWxlLndpZHRoKSB7XG4gICAgICAgICAgaW5uZXJXaWR0aCArPSBjb2wuc3R5bGUud2lkdGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmxleENvbHVtbnMucHVzaChjb2wpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbm5lcldpZHRoO1xuICAgICAgfSwgMCksXG4gICAgICAgICAgaGVhZGVyV2lkdGggPSBpbm5lcldpZHRoICsgX2V4dDIuZGVmYXVsdC5TQ1JPTExfV0lEVEgsXG4gICAgICAgICAgYm9keVdpZHRoID0gaW5uZXJXaWR0aDtcblxuICAgICAgaWYgKGlubmVyV2lkdGggPCB3aWR0aCAmJiBmbGV4Q29sdW1ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciByZW1haW5XaWR0aCA9IHdpZHRoIC0gaW5uZXJXaWR0aCAtIF9leHQyLmRlZmF1bHQuU0NST0xMX1dJRFRIIC0gX2V4dDIuZGVmYXVsdC5CT1JERVJfV0lEVEgsXG4gICAgICAgICAgICByZW1haW5Db2x1bW4gPSBmbGV4Q29sdW1ucy5sZW5ndGg7XG4gICAgICAgICgwLCBfbGlzdDIuZGVmYXVsdCkoZmxleENvbHVtbnMpLmVhY2goZnVuY3Rpb24gKGNvbCkge1xuICAgICAgICAgICFjb2wuc3R5bGUgJiYgKGNvbC5zdHlsZSA9IHt9KTtcbiAgICAgICAgICB2YXIgd2lkdGggPSByZW1haW5Db2x1bW4gPT09IDEgPyByZW1haW5XaWR0aCA6IF9udW1iZXIyLmRlZmF1bHQucm91bmQocmVtYWluV2lkdGggLyByZW1haW5Db2x1bW4pO1xuICAgICAgICAgIGNvbC5zdHlsZS53aWR0aCA9IHdpZHRoO1xuICAgICAgICAgIHJlbWFpbldpZHRoIC09IHdpZHRoO1xuICAgICAgICAgIC0tcmVtYWluQ29sdW1uO1xuICAgICAgICB9KTtcbiAgICAgICAgaW5uZXJXaWR0aCA9IHdpZHRoO1xuICAgICAgICBoZWFkZXJXaWR0aCA9IHdpZHRoIC0gX2V4dDIuZGVmYXVsdC5CT1JERVJfV0lEVEg7XG4gICAgICAgIGJvZHlXaWR0aCA9IHdpZHRoIC0gX2V4dDIuZGVmYXVsdC5TQ1JPTExfV0lEVEggLSBfZXh0Mi5kZWZhdWx0LkJPUkRFUl9XSURUSDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7IGNvbHVtbnM6IGNvbHVtbnMsIHdpZHRoOiB3aWR0aCwgaW5uZXJXaWR0aDogaW5uZXJXaWR0aCwgaGVhZGVyV2lkdGg6IGhlYWRlcldpZHRoLCBib2R5V2lkdGg6IGJvZHlXaWR0aCB9O1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEdyaWQ7XG59KF9yZWFjdC5Db21wb25lbnQpLCAoX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAncmVuZGVyJywgW193aXRoUHJvcHMyLmRlZmF1bHRdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdyZW5kZXInKSwgX2NsYXNzLnByb3RvdHlwZSksIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ3Jlc2l6ZUdyaWQnLCBbX2JpbmQyLmRlZmF1bHRdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdyZXNpemVHcmlkJyksIF9jbGFzcy5wcm90b3R5cGUpKSwgX2NsYXNzKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEdyaWQ7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2Rlc2MsIF92YWx1ZSwgX2NsYXNzO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfd2l0aFByb3BzID0gcmVxdWlyZSgnLi4vLi4vbWl4aW4vd2l0aC1wcm9wcycpO1xuXG52YXIgX3dpdGhQcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93aXRoUHJvcHMpO1xuXG52YXIgX2NvbnRhaW5lciA9IHJlcXVpcmUoJy4uL2NvbnRhaW5lcicpO1xuXG52YXIgX2NvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb250YWluZXIpO1xuXG52YXIgX3JvdyA9IHJlcXVpcmUoJy4vcm93Jyk7XG5cbnZhciBfcm93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Jvdyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZnVuY3Rpb24gX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcih0YXJnZXQsIHByb3BlcnR5LCBkZWNvcmF0b3JzLCBkZXNjcmlwdG9yLCBjb250ZXh0KSB7XG4gIHZhciBkZXNjID0ge307XG4gIE9iamVjdFsna2UnICsgJ3lzJ10oZGVzY3JpcHRvcikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgZGVzY1trZXldID0gZGVzY3JpcHRvcltrZXldO1xuICB9KTtcbiAgZGVzYy5lbnVtZXJhYmxlID0gISFkZXNjLmVudW1lcmFibGU7XG4gIGRlc2MuY29uZmlndXJhYmxlID0gISFkZXNjLmNvbmZpZ3VyYWJsZTtcblxuICBpZiAoJ3ZhbHVlJyBpbiBkZXNjIHx8IGRlc2MuaW5pdGlhbGl6ZXIpIHtcbiAgICBkZXNjLndyaXRhYmxlID0gdHJ1ZTtcbiAgfVxuXG4gIGRlc2MgPSBkZWNvcmF0b3JzLnNsaWNlKCkucmV2ZXJzZSgpLnJlZHVjZShmdW5jdGlvbiAoZGVzYywgZGVjb3JhdG9yKSB7XG4gICAgcmV0dXJuIGRlY29yYXRvcih0YXJnZXQsIHByb3BlcnR5LCBkZXNjKSB8fCBkZXNjO1xuICB9LCBkZXNjKTtcblxuICBpZiAoY29udGV4dCAmJiBkZXNjLmluaXRpYWxpemVyICE9PSB2b2lkIDApIHtcbiAgICBkZXNjLnZhbHVlID0gZGVzYy5pbml0aWFsaXplciA/IGRlc2MuaW5pdGlhbGl6ZXIuY2FsbChjb250ZXh0KSA6IHZvaWQgMDtcbiAgICBkZXNjLmluaXRpYWxpemVyID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKGRlc2MuaW5pdGlhbGl6ZXIgPT09IHZvaWQgMCkge1xuICAgIE9iamVjdFsnZGVmaW5lJyArICdQcm9wZXJ0eSddKHRhcmdldCwgcHJvcGVydHksIGRlc2MpO1xuICAgIGRlc2MgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGRlc2M7XG59XG5cbnZhciBHcmlkQm9keSA9IChfY2xhc3MgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoR3JpZEJvZHksIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEdyaWRCb2R5KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBHcmlkQm9keSk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEdyaWRCb2R5Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoR3JpZEJvZHkpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhHcmlkQm9keSwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoX3JlZikge1xuICAgICAgdmFyIGNvbHVtbnMgPSBfcmVmLmNvbHVtbnMsXG4gICAgICAgICAgYm9keVdpZHRoID0gX3JlZi5ib2R5V2lkdGgsXG4gICAgICAgICAgZGF0YSA9IF9yZWYuZGF0YTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfY29udGFpbmVyMi5kZWZhdWx0LFxuICAgICAgICB7IGNsYXNzTmFtZTogJ3J4LWdyaWQtYm9keScgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ3NlY3Rpb24nLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAncngtZ3JpZC12aWV3Jywgc3R5bGU6IHsgd2lkdGg6IGJvZHlXaWR0aCB9IH0sXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgc3R5bGU6IHsgaGVpZ2h0OiAxIH0gfSksXG4gICAgICAgICAgZGF0YSAmJiBkYXRhLm1hcChmdW5jdGlvbiAocmVjb3JkLCByb3dJbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yb3cyLmRlZmF1bHQsIHsgY29sdW1uczogY29sdW1ucywgcmVjb3JkOiByZWNvcmQsIHJvd0luZGV4OiByb3dJbmRleCB9KTtcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBHcmlkQm9keTtcbn0oX3JlYWN0LkNvbXBvbmVudCksIChfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdyZW5kZXInLCBbX3dpdGhQcm9wczIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ3JlbmRlcicpLCBfY2xhc3MucHJvdG90eXBlKSksIF9jbGFzcyk7XG5leHBvcnRzLmRlZmF1bHQgPSBHcmlkQm9keTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZGVzYywgX3ZhbHVlLCBfY2xhc3M7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9leHQgPSByZXF1aXJlKCcuLi8uLi9jb3JlL2V4dCcpO1xuXG52YXIgX2V4dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHQpO1xuXG52YXIgX2Zvcm0gPSByZXF1aXJlKCcuLi9mb3JtJyk7XG5cbnZhciBfd2l0aFByb3BzID0gcmVxdWlyZSgnLi4vLi4vbWl4aW4vd2l0aC1wcm9wcycpO1xuXG52YXIgX3dpdGhQcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93aXRoUHJvcHMpO1xuXG52YXIgX2JpbmQgPSByZXF1aXJlKCcuLi8uLi9taXhpbi9iaW5kJyk7XG5cbnZhciBfYmluZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iaW5kKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eSwgZGVjb3JhdG9ycywgZGVzY3JpcHRvciwgY29udGV4dCkge1xuICB2YXIgZGVzYyA9IHt9O1xuICBPYmplY3RbJ2tlJyArICd5cyddKGRlc2NyaXB0b3IpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGRlc2Nba2V5XSA9IGRlc2NyaXB0b3Jba2V5XTtcbiAgfSk7XG4gIGRlc2MuZW51bWVyYWJsZSA9ICEhZGVzYy5lbnVtZXJhYmxlO1xuICBkZXNjLmNvbmZpZ3VyYWJsZSA9ICEhZGVzYy5jb25maWd1cmFibGU7XG5cbiAgaWYgKCd2YWx1ZScgaW4gZGVzYyB8fCBkZXNjLmluaXRpYWxpemVyKSB7XG4gICAgZGVzYy53cml0YWJsZSA9IHRydWU7XG4gIH1cblxuICBkZXNjID0gZGVjb3JhdG9ycy5zbGljZSgpLnJldmVyc2UoKS5yZWR1Y2UoZnVuY3Rpb24gKGRlc2MsIGRlY29yYXRvcikge1xuICAgIHJldHVybiBkZWNvcmF0b3IodGFyZ2V0LCBwcm9wZXJ0eSwgZGVzYykgfHwgZGVzYztcbiAgfSwgZGVzYyk7XG5cbiAgaWYgKGNvbnRleHQgJiYgZGVzYy5pbml0aWFsaXplciAhPT0gdm9pZCAwKSB7XG4gICAgZGVzYy52YWx1ZSA9IGRlc2MuaW5pdGlhbGl6ZXIgPyBkZXNjLmluaXRpYWxpemVyLmNhbGwoY29udGV4dCkgOiB2b2lkIDA7XG4gICAgZGVzYy5pbml0aWFsaXplciA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmIChkZXNjLmluaXRpYWxpemVyID09PSB2b2lkIDApIHtcbiAgICBPYmplY3RbJ2RlZmluZScgKyAnUHJvcGVydHknXSh0YXJnZXQsIHByb3BlcnR5LCBkZXNjKTtcbiAgICBkZXNjID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBkZXNjO1xufVxuXG52YXIgR3JpZENlbGwgPSAoX2NsYXNzID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEdyaWRDZWxsLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBHcmlkQ2VsbChwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBHcmlkQ2VsbCk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoR3JpZENlbGwuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihHcmlkQ2VsbCkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6IHByb3BzLnJlY29yZC5nZXQocHJvcHMuZGF0YUluZGV4KSxcbiAgICAgIHJlYWRPbmx5OiB0cnVlXG4gICAgfTtcbiAgICBfZXh0Mi5kZWZhdWx0LmdlbmVyYXRlU2V0dGVyKF90aGlzLnN0YXRlLCBfdGhpcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEdyaWRDZWxsLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcihfcmVmKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIHJlY29yZCA9IF9yZWYucmVjb3JkLFxuICAgICAgICAgIHJvd0luZGV4ID0gX3JlZi5yb3dJbmRleCxcbiAgICAgICAgICBkYXRhSW5kZXggPSBfcmVmLmRhdGFJbmRleCxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgICAgICBfcmVuZGVyID0gX3JlZi5yZW5kZXIsXG4gICAgICAgICAgc3R5bGUgPSBfcmVmLnN0eWxlLFxuICAgICAgICAgIGVkaXRhYmxlID0gX3JlZi5lZGl0YWJsZSxcbiAgICAgICAgICBvdGhlcnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWydyZWNvcmQnLCAncm93SW5kZXgnLCAnZGF0YUluZGV4JywgJ2NsYXNzTmFtZScsICdyZW5kZXInLCAnc3R5bGUnLCAnZWRpdGFibGUnXSk7XG5cbiAgICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIHZhbHVlID0gX3N0YXRlLnZhbHVlLFxuICAgICAgICAgIHJlYWRPbmx5ID0gX3N0YXRlLnJlYWRPbmx5O1xuXG4gICAgICBpZiAoZWRpdGFibGUpIHtcbiAgICAgICAgaWYgKHJlYWRPbmx5KSB7XG4gICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICBfZXh0ZW5kcyh7IGNsYXNzTmFtZTogJ3J4LWdyaWQtY2VsbCAnICsgKGNsYXNzTmFtZSB8fCAnJyksIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLnNldFJlYWRPbmx5KGZhbHNlKTtcbiAgICAgICAgICAgICAgfSB9LCBvdGhlcnMpLFxuICAgICAgICAgICAgX3JlbmRlciA/IF9yZW5kZXIodmFsdWUsIHJlY29yZCwgZGF0YUluZGV4LCByb3dJbmRleCkgOiB2YWx1ZVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWRpdGFibGUudHlwZSA9PT0gJ2Ryb3Bkb3duJykge1xuICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgX2V4dGVuZHMoeyBjbGFzc05hbWU6ICdyeC1ncmlkLWNlbGwgJyArIChjbGFzc05hbWUgfHwgJycpLCBzdHlsZTogc3R5bGUgfSwgb3RoZXJzKSxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9mb3JtLkRyb3Bkb3duLCB7IHZhbHVlOiB2YWx1ZSwgc3RvcmU6IGVkaXRhYmxlLnN0b3JlLCBmaWVsZExhYmVsOiAnQ2FyZCBUeXBlJywgb25TZWxlY3Q6IGZ1bmN0aW9uIG9uU2VsZWN0KHJlYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczIuc2V0VmFsdWUocmVjLmRhdGEpO1xuICAgICAgICAgICAgICB9LCBvbkNvbGxhcHNlOiBmdW5jdGlvbiBvbkNvbGxhcHNlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5hZnRlckVkaXQodmFsdWUpO1xuICAgICAgICAgICAgICB9IH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICBfZXh0ZW5kcyh7IGNsYXNzTmFtZTogJ3J4LWdyaWQtY2VsbCAnICsgKGNsYXNzTmFtZSB8fCAnJyksIHN0eWxlOiBzdHlsZSB9LCBvdGhlcnMpLFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9mb3JtLkZpZWxkLCB7IHZhbHVlOiB2YWx1ZSwgYXV0b0ZvY3VzOiB0cnVlLCBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICB9LCBvbkJsdXI6IGZ1bmN0aW9uIG9uQmx1cih2YWx1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLmFmdGVyRWRpdCh2YWx1ZSk7XG4gICAgICAgICAgICB9IH0pXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIF9leHRlbmRzKHsgY2xhc3NOYW1lOiAncngtZ3JpZC1jZWxsICcgKyAoY2xhc3NOYW1lIHx8ICcnKSwgc3R5bGU6IHN0eWxlIH0sIG90aGVycyksXG4gICAgICAgIF9yZW5kZXIgPyBfcmVuZGVyKHZhbHVlLCByZWNvcmQsIGRhdGFJbmRleCwgcm93SW5kZXgpIDogdmFsdWVcbiAgICAgICk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYWZ0ZXJFZGl0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWZ0ZXJFZGl0KHZhbHVlKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICByZWNvcmQgPSBfcHJvcHMucmVjb3JkLFxuICAgICAgICAgIGRhdGFJbmRleCA9IF9wcm9wcy5kYXRhSW5kZXg7XG5cbiAgICAgIHJlY29yZC5zZXQoZGF0YUluZGV4LCB2YWx1ZSk7XG4gICAgICB0aGlzLnNldFJlYWRPbmx5KHRydWUpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBHcmlkQ2VsbDtcbn0oX3JlYWN0LkNvbXBvbmVudCksIChfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdyZW5kZXInLCBbX3dpdGhQcm9wczIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ3JlbmRlcicpLCBfY2xhc3MucHJvdG90eXBlKSwgX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAnYWZ0ZXJFZGl0JywgW19iaW5kMi5kZWZhdWx0XSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAnYWZ0ZXJFZGl0JyksIF9jbGFzcy5wcm90b3R5cGUpKSwgX2NsYXNzKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEdyaWRDZWxsOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9kZXNjLCBfdmFsdWUsIF9jbGFzcztcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3dpdGhQcm9wcyA9IHJlcXVpcmUoJy4uLy4uL21peGluL3dpdGgtcHJvcHMnKTtcblxudmFyIF93aXRoUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2l0aFByb3BzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eSwgZGVjb3JhdG9ycywgZGVzY3JpcHRvciwgY29udGV4dCkge1xuICB2YXIgZGVzYyA9IHt9O1xuICBPYmplY3RbJ2tlJyArICd5cyddKGRlc2NyaXB0b3IpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGRlc2Nba2V5XSA9IGRlc2NyaXB0b3Jba2V5XTtcbiAgfSk7XG4gIGRlc2MuZW51bWVyYWJsZSA9ICEhZGVzYy5lbnVtZXJhYmxlO1xuICBkZXNjLmNvbmZpZ3VyYWJsZSA9ICEhZGVzYy5jb25maWd1cmFibGU7XG5cbiAgaWYgKCd2YWx1ZScgaW4gZGVzYyB8fCBkZXNjLmluaXRpYWxpemVyKSB7XG4gICAgZGVzYy53cml0YWJsZSA9IHRydWU7XG4gIH1cblxuICBkZXNjID0gZGVjb3JhdG9ycy5zbGljZSgpLnJldmVyc2UoKS5yZWR1Y2UoZnVuY3Rpb24gKGRlc2MsIGRlY29yYXRvcikge1xuICAgIHJldHVybiBkZWNvcmF0b3IodGFyZ2V0LCBwcm9wZXJ0eSwgZGVzYykgfHwgZGVzYztcbiAgfSwgZGVzYyk7XG5cbiAgaWYgKGNvbnRleHQgJiYgZGVzYy5pbml0aWFsaXplciAhPT0gdm9pZCAwKSB7XG4gICAgZGVzYy52YWx1ZSA9IGRlc2MuaW5pdGlhbGl6ZXIgPyBkZXNjLmluaXRpYWxpemVyLmNhbGwoY29udGV4dCkgOiB2b2lkIDA7XG4gICAgZGVzYy5pbml0aWFsaXplciA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmIChkZXNjLmluaXRpYWxpemVyID09PSB2b2lkIDApIHtcbiAgICBPYmplY3RbJ2RlZmluZScgKyAnUHJvcGVydHknXSh0YXJnZXQsIHByb3BlcnR5LCBkZXNjKTtcbiAgICBkZXNjID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBkZXNjO1xufVxuXG52YXIgR3JpZEhlYWRlciA9IChfY2xhc3MgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoR3JpZEhlYWRlciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gR3JpZEhlYWRlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR3JpZEhlYWRlcik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEdyaWRIZWFkZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihHcmlkSGVhZGVyKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoR3JpZEhlYWRlciwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoX3JlZikge1xuICAgICAgdmFyIGNvbHVtbnMgPSBfcmVmLmNvbHVtbnMsXG4gICAgICAgICAgaGVhZGVyV2lkdGggPSBfcmVmLmhlYWRlcldpZHRoO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzZWN0aW9uJyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdyeC1ncmlkLWhlYWRlcicgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdyeC1ncmlkLWhlYWRlci1jb250YWluZXIgZC1mbGV4IGZsZXgtcm93Jywgc3R5bGU6IHsgd2lkdGg6IGhlYWRlcldpZHRoIH0gfSxcbiAgICAgICAgICBjb2x1bW5zICYmIGNvbHVtbnMubWFwKGZ1bmN0aW9uIChjb2wpIHtcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gY29sLnRleHQsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gY29sLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBzdHlsZSA9IGNvbC5zdHlsZSxcbiAgICAgICAgICAgICAgICBvdGhlcnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoY29sLCBbJ3RleHQnLCAnY2xhc3NOYW1lJywgJ3N0eWxlJ10pO1xuXG4gICAgICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICBfZXh0ZW5kcyh7IGNsYXNzTmFtZTogJ3J4LWdyaWQtY29sdW1uLWhlYWRlciB0ZXh0LWNlbnRlciAnICsgKGNsYXNzTmFtZSB8fCAnJyksIHN0eWxlOiBzdHlsZSB9LCBvdGhlcnMpLFxuICAgICAgICAgICAgICB0ZXh0IHx8ICcnXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEdyaWRIZWFkZXI7XG59KF9yZWFjdC5Db21wb25lbnQpLCAoX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAncmVuZGVyJywgW193aXRoUHJvcHMyLmRlZmF1bHRdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdyZW5kZXInKSwgX2NsYXNzLnByb3RvdHlwZSkpLCBfY2xhc3MpO1xuZXhwb3J0cy5kZWZhdWx0ID0gR3JpZEhlYWRlcjsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZGVzYywgX3ZhbHVlLCBfY2xhc3M7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF93aXRoUHJvcHMgPSByZXF1aXJlKCcuLi8uLi9taXhpbi93aXRoLXByb3BzJyk7XG5cbnZhciBfd2l0aFByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dpdGhQcm9wcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZnVuY3Rpb24gX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcih0YXJnZXQsIHByb3BlcnR5LCBkZWNvcmF0b3JzLCBkZXNjcmlwdG9yLCBjb250ZXh0KSB7XG4gIHZhciBkZXNjID0ge307XG4gIE9iamVjdFsna2UnICsgJ3lzJ10oZGVzY3JpcHRvcikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgZGVzY1trZXldID0gZGVzY3JpcHRvcltrZXldO1xuICB9KTtcbiAgZGVzYy5lbnVtZXJhYmxlID0gISFkZXNjLmVudW1lcmFibGU7XG4gIGRlc2MuY29uZmlndXJhYmxlID0gISFkZXNjLmNvbmZpZ3VyYWJsZTtcblxuICBpZiAoJ3ZhbHVlJyBpbiBkZXNjIHx8IGRlc2MuaW5pdGlhbGl6ZXIpIHtcbiAgICBkZXNjLndyaXRhYmxlID0gdHJ1ZTtcbiAgfVxuXG4gIGRlc2MgPSBkZWNvcmF0b3JzLnNsaWNlKCkucmV2ZXJzZSgpLnJlZHVjZShmdW5jdGlvbiAoZGVzYywgZGVjb3JhdG9yKSB7XG4gICAgcmV0dXJuIGRlY29yYXRvcih0YXJnZXQsIHByb3BlcnR5LCBkZXNjKSB8fCBkZXNjO1xuICB9LCBkZXNjKTtcblxuICBpZiAoY29udGV4dCAmJiBkZXNjLmluaXRpYWxpemVyICE9PSB2b2lkIDApIHtcbiAgICBkZXNjLnZhbHVlID0gZGVzYy5pbml0aWFsaXplciA/IGRlc2MuaW5pdGlhbGl6ZXIuY2FsbChjb250ZXh0KSA6IHZvaWQgMDtcbiAgICBkZXNjLmluaXRpYWxpemVyID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKGRlc2MuaW5pdGlhbGl6ZXIgPT09IHZvaWQgMCkge1xuICAgIE9iamVjdFsnZGVmaW5lJyArICdQcm9wZXJ0eSddKHRhcmdldCwgcHJvcGVydHksIGRlc2MpO1xuICAgIGRlc2MgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGRlc2M7XG59XG5cbnZhciBHcmlkUGFnaW5nVG9vbGJhciA9IChfY2xhc3MgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoR3JpZFBhZ2luZ1Rvb2xiYXIsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEdyaWRQYWdpbmdUb29sYmFyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBHcmlkUGFnaW5nVG9vbGJhcik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEdyaWRQYWdpbmdUb29sYmFyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoR3JpZFBhZ2luZ1Rvb2xiYXIpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhHcmlkUGFnaW5nVG9vbGJhciwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoX3JlZikge1xuICAgICAgdmFyIF9yZWYkc3RvcmUkcGFnZSA9IF9yZWYuc3RvcmUucGFnZSxcbiAgICAgICAgICB0b3RhbEVsZW1lbnRzID0gX3JlZiRzdG9yZSRwYWdlLnRvdGFsRWxlbWVudHMsXG4gICAgICAgICAgZmlyc3RJbmRleCA9IF9yZWYkc3RvcmUkcGFnZS5maXJzdEluZGV4LFxuICAgICAgICAgIGxhc3RJbmRleCA9IF9yZWYkc3RvcmUkcGFnZS5sYXN0SW5kZXg7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NlY3Rpb24nLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ3Rvb2xiYXIgdG9wIHJvdycgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdjb2wtNicgfSxcbiAgICAgICAgICB0b3RhbEVsZW1lbnRzICYmICdEaXNwbGF5aW5nICcgKyBmaXJzdEluZGV4ICsgJyAtICcgKyBsYXN0SW5kZXggKyAnIG9mICcgKyB0b3RhbEVsZW1lbnRzXG4gICAgICAgICksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogJ2NvbC02IHBhZ2luYXRpb24nIH0pXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBHcmlkUGFnaW5nVG9vbGJhcjtcbn0oX3JlYWN0LkNvbXBvbmVudCksIChfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdyZW5kZXInLCBbX3dpdGhQcm9wczIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ3JlbmRlcicpLCBfY2xhc3MucHJvdG90eXBlKSksIF9jbGFzcyk7XG5leHBvcnRzLmRlZmF1bHQgPSBHcmlkUGFnaW5nVG9vbGJhcjsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZGVzYywgX3ZhbHVlLCBfY2xhc3M7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF93aXRoUHJvcHMgPSByZXF1aXJlKCcuLi8uLi9taXhpbi93aXRoLXByb3BzJyk7XG5cbnZhciBfd2l0aFByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dpdGhQcm9wcyk7XG5cbnZhciBfY2VsbCA9IHJlcXVpcmUoJy4vY2VsbCcpO1xuXG52YXIgX2NlbGwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2VsbCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZnVuY3Rpb24gX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcih0YXJnZXQsIHByb3BlcnR5LCBkZWNvcmF0b3JzLCBkZXNjcmlwdG9yLCBjb250ZXh0KSB7XG4gIHZhciBkZXNjID0ge307XG4gIE9iamVjdFsna2UnICsgJ3lzJ10oZGVzY3JpcHRvcikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgZGVzY1trZXldID0gZGVzY3JpcHRvcltrZXldO1xuICB9KTtcbiAgZGVzYy5lbnVtZXJhYmxlID0gISFkZXNjLmVudW1lcmFibGU7XG4gIGRlc2MuY29uZmlndXJhYmxlID0gISFkZXNjLmNvbmZpZ3VyYWJsZTtcblxuICBpZiAoJ3ZhbHVlJyBpbiBkZXNjIHx8IGRlc2MuaW5pdGlhbGl6ZXIpIHtcbiAgICBkZXNjLndyaXRhYmxlID0gdHJ1ZTtcbiAgfVxuXG4gIGRlc2MgPSBkZWNvcmF0b3JzLnNsaWNlKCkucmV2ZXJzZSgpLnJlZHVjZShmdW5jdGlvbiAoZGVzYywgZGVjb3JhdG9yKSB7XG4gICAgcmV0dXJuIGRlY29yYXRvcih0YXJnZXQsIHByb3BlcnR5LCBkZXNjKSB8fCBkZXNjO1xuICB9LCBkZXNjKTtcblxuICBpZiAoY29udGV4dCAmJiBkZXNjLmluaXRpYWxpemVyICE9PSB2b2lkIDApIHtcbiAgICBkZXNjLnZhbHVlID0gZGVzYy5pbml0aWFsaXplciA/IGRlc2MuaW5pdGlhbGl6ZXIuY2FsbChjb250ZXh0KSA6IHZvaWQgMDtcbiAgICBkZXNjLmluaXRpYWxpemVyID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKGRlc2MuaW5pdGlhbGl6ZXIgPT09IHZvaWQgMCkge1xuICAgIE9iamVjdFsnZGVmaW5lJyArICdQcm9wZXJ0eSddKHRhcmdldCwgcHJvcGVydHksIGRlc2MpO1xuICAgIGRlc2MgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGRlc2M7XG59XG5cbnZhciBHcmlkUm93ID0gKF9jbGFzcyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhHcmlkUm93LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBHcmlkUm93KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBHcmlkUm93KTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoR3JpZFJvdy5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEdyaWRSb3cpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhHcmlkUm93LCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcihfcmVmKSB7XG4gICAgICB2YXIgY29sdW1ucyA9IF9yZWYuY29sdW1ucyxcbiAgICAgICAgICByZWNvcmQgPSBfcmVmLnJlY29yZCxcbiAgICAgICAgICByb3dJbmRleCA9IF9yZWYucm93SW5kZXg7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAncngtZ3JpZC1yb3cgZC1mbGV4IGZsZXgtcm93JyB9LFxuICAgICAgICBjb2x1bW5zICYmIGNvbHVtbnMubWFwKGZ1bmN0aW9uIChjb2wpIHtcbiAgICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2NlbGwyLmRlZmF1bHQsIF9leHRlbmRzKHsgcmVjb3JkOiByZWNvcmQsIHJvd0luZGV4OiByb3dJbmRleCB9LCBjb2wpKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEdyaWRSb3c7XG59KF9yZWFjdC5Db21wb25lbnQpLCAoX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAncmVuZGVyJywgW193aXRoUHJvcHMyLmRlZmF1bHRdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdyZW5kZXInKSwgX2NsYXNzLnByb3RvdHlwZSkpLCBfY2xhc3MpO1xuZXhwb3J0cy5kZWZhdWx0ID0gR3JpZFJvdzsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkxpbmsgPSBleHBvcnRzLkhhc2hSb3V0ZXIgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9saXN0ID0gcmVxdWlyZSgnLi4vY29yZS9saXN0Jyk7XG5cbnZhciBfbGlzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saXN0KTtcblxudmFyIF9vYnNlcnZhYmxlID0gcmVxdWlyZSgnLi4vbWl4aW4vb2JzZXJ2YWJsZScpO1xuXG52YXIgX29ic2VydmFibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JzZXJ2YWJsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUk9VVEVTID0ge30sXG4gICAgZ2V0Um91dGUgPSBmdW5jdGlvbiBnZXRSb3V0ZSgpIHtcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKSB8fCAnLyc7XG59LFxuICAgIGdldFJvdXRlUGF0aCA9IGZ1bmN0aW9uIGdldFJvdXRlUGF0aChyb3V0ZSkge1xuICByZXR1cm4gcm91dGUuc3BsaXQoJy8nKTtcbn0sXG4gICAgaXNQYXJhbSA9IGZ1bmN0aW9uIGlzUGFyYW0ocm91dGVOYW1lKSB7XG4gIHJldHVybiByb3V0ZU5hbWUuc3RhcnRzV2l0aCgnOicpO1xufSxcbiAgICBtYXRjaFBhdGggPSBmdW5jdGlvbiBtYXRjaFBhdGgoKSB7XG4gIHZhciBjdXJyZW50Um91dGUgPSBnZXRSb3V0ZSgpLFxuICAgICAgcGFyYW1zID0ge307XG5cbiAgaWYgKFJPVVRFU1tjdXJyZW50Um91dGVdKSB7XG4gICAgcmV0dXJuIHsgcm91dGU6IGN1cnJlbnRSb3V0ZSwgY29tcG9uZW50OiBST1VURVNbY3VycmVudFJvdXRlXS5jb21wb25lbnQsIHBhcmFtczogcGFyYW1zIH07XG4gIH1cblxuICB2YXIgY3VycmVudFBhdGggPSBnZXRSb3V0ZVBhdGgoY3VycmVudFJvdXRlKTtcbiAgZm9yICh2YXIga2V5IGluIFJPVVRFUykge1xuICAgIHZhciByb3V0ZSA9IFJPVVRFU1trZXldLFxuICAgICAgICByb3V0ZVBhdGggPSByb3V0ZS5wYXRoO1xuICAgIHZhciBtYXRjaGVkID0gdHJ1ZTtcbiAgICAoMCwgX2xpc3QyLmRlZmF1bHQpKHJvdXRlUGF0aCkuZWFjaChmdW5jdGlvbiAocm91dGVOYW1lLCBpbmRleCkge1xuICAgICAgaWYgKHJvdXRlTmFtZSAhPT0gY3VycmVudFBhdGhbaW5kZXhdKSB7XG4gICAgICAgIGlmIChpc1BhcmFtKHJvdXRlTmFtZSkpIHtcbiAgICAgICAgICBwYXJhbXNbcm91dGVOYW1lLnN1YnN0cmluZygxKV0gPSBjdXJyZW50UGF0aFtpbmRleF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWF0Y2hlZCA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChtYXRjaGVkKSB7XG4gICAgICByZXR1cm4geyByb3V0ZTogY3VycmVudFJvdXRlLCBjb21wb25lbnQ6IHJvdXRlLmNvbXBvbmVudCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9XG4gIH1cblxuICBpZiAoUk9VVEVTWycqJ10pIHtcbiAgICByZXR1cm4geyByb3V0ZTogY3VycmVudFJvdXRlLCBjb21wb25lbnQ6IFJPVVRFU1snKiddLmNvbXBvbmVudCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgfVxuXG4gIHJldHVybiB7IHJvdXRlOiBjdXJyZW50Um91dGUsIGNvbXBvbmVudDogbnVsbCwgcGFyYW1zOiBwYXJhbXMgfTtcbn07XG5cbnZhciBIYXNoUm91dGVyID0gZXhwb3J0cy5IYXNoUm91dGVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEhhc2hSb3V0ZXIsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEhhc2hSb3V0ZXIocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSGFzaFJvdXRlcik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoSGFzaFJvdXRlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEhhc2hSb3V0ZXIpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IG1hdGNoUGF0aCgpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhIYXNoUm91dGVyLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgX29ic2VydmFibGUyLmRlZmF1bHQuZnJvbUV2ZW50KHdpbmRvdywgJ2hhc2hjaGFuZ2UnKS5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMyLnNldFN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gbWF0Y2hQYXRoKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgcm91dGUgPSBfc3RhdGUucm91dGUsXG4gICAgICAgICAgY29tcG9uZW50ID0gX3N0YXRlLmNvbXBvbmVudCxcbiAgICAgICAgICBwYXJhbXMgPSBfc3RhdGUucGFyYW1zO1xuXG5cbiAgICAgIGlmICghY29tcG9uZW50KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NvbXBvbmVudCBwcm9wcyBzaG91bGQgbm90IGJlIG51bGwnKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChjb21wb25lbnQsIHsgcm91dGU6IHJvdXRlLCBwYXJhbXM6IHBhcmFtcyB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSGFzaFJvdXRlcjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbnZhciBMaW5rID0gZXhwb3J0cy5MaW5rID0gZnVuY3Rpb24gKF9Db21wb25lbnQyKSB7XG4gIF9pbmhlcml0cyhMaW5rLCBfQ29tcG9uZW50Mik7XG5cbiAgZnVuY3Rpb24gTGluayhwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMaW5rKTtcblxuICAgIHZhciBfdGhpczMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoTGluay5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKExpbmspKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpczMuc3RhdGUgPSBtYXRjaFBhdGgoKTtcbiAgICByZXR1cm4gX3RoaXMzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKExpbmssIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICBfb2JzZXJ2YWJsZTIuZGVmYXVsdC5mcm9tRXZlbnQod2luZG93LCAnaGFzaGNoYW5nZScpLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpczQuc2V0U3RhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBtYXRjaFBhdGgoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3N0YXRlMiA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgcm91dGUgPSBfc3RhdGUyLnJvdXRlLFxuICAgICAgICAgIGNvbXBvbmVudCA9IF9zdGF0ZTIuY29tcG9uZW50LFxuICAgICAgICAgIHBhcmFtcyA9IF9zdGF0ZTIucGFyYW1zLFxuICAgICAgICAgIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgdG8gPSBfcHJvcHMudG8sXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICBfcHJvcHMkYWN0aXZlQ2xhc3NOYW0gPSBfcHJvcHMuYWN0aXZlQ2xhc3NOYW1lLFxuICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZSA9IF9wcm9wcyRhY3RpdmVDbGFzc05hbSA9PT0gdW5kZWZpbmVkID8gJ2FjdGl2ZScgOiBfcHJvcHMkYWN0aXZlQ2xhc3NOYW0sXG4gICAgICAgICAgb3RoZXJzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWyd0bycsICdjbGFzc05hbWUnLCAnYWN0aXZlQ2xhc3NOYW1lJ10pO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2EnLCBfZXh0ZW5kcyh7IGhyZWY6ICcjJyArIHRvLCBjbGFzc05hbWU6IHRvID09PSBnZXRSb3V0ZSgpID8gW2NsYXNzTmFtZSwgYWN0aXZlQ2xhc3NOYW1lXS5qb2luKCcgJykgOiBjbGFzc05hbWUgfSwgb3RoZXJzKSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIExpbms7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocm91dGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChjb21wb25lbnQpIHtcbiAgICBST1VURVNbcm91dGVdID0ge1xuICAgICAgcm91dGU6IHJvdXRlLFxuICAgICAgY29tcG9uZW50OiBjb21wb25lbnQsXG4gICAgICBwYXRoOiBnZXRSb3V0ZVBhdGgocm91dGUpXG4gICAgfTtcbiAgfTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gX2RlZmF1bHQoY29tcCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBfZGVmYXVsdCk7XG5cbiAgICB0aGlzLmNvbXAgPSAoMCwgX3JlYWN0RG9tLmZpbmRET01Ob2RlKShjb21wKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhfZGVmYXVsdCwgW3tcbiAgICBrZXk6ICdwYXJlbnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJlbnQoKSB7XG4gICAgICB0aGlzLmNvbXAgPSB0aGlzLmNvbXAucGFyZW50RWxlbWVudDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3dpZHRoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gd2lkdGgoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wLmNsaWVudFdpZHRoO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2hlaWdodCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhlaWdodCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbXAuY2xpZW50SGVpZ2h0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2ZpbmQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmaW5kKHNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBfZGVmYXVsdDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfY29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnQnKTtcblxudmFyIF9jb21wb25lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcG9uZW50KTtcblxudmFyIF9zdHJpbmcgPSByZXF1aXJlKCcuL3N0cmluZycpO1xuXG52YXIgX3N0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHJpbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgRXh0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBFeHQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEV4dCk7XG5cbiAgICB0aGlzLlNDUk9MTF9XSURUSCA9IHRoaXMuZ2V0U2Nyb2xsV2lkdGgoKTtcbiAgICB0aGlzLkJPUkRFUl9XSURUSCA9IDI7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRXh0LCBbe1xuICAgIGtleTogJ2dldEJ5SWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRCeUlkKGlkKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldENvbXAnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDb21wKGNvbXApIHtcbiAgICAgIHJldHVybiBuZXcgX2NvbXBvbmVudDIuZGVmYXVsdChjb21wKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdleHRlbmQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbi5hcHBseShudWxsLCBhcmd1bWVudHMpOyAvLyBpbW11dGFibGUgb2JqZWN0XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY3JlYXRlRWxlbWVudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoaHRtbCkge1xuICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGl2LmlubmVySFRNTCA9IGh0bWw7XG4gICAgICByZXR1cm4gZGl2LmNoaWxkcmVuWzBdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzRnVuY3Rpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaXNPYmplY3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBPYmplY3RdJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpc0FycmF5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNBcnJheSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzUHJpbWl0aXZlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNQcmltaXRpdmUodmFsdWUpIHtcbiAgICAgIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWx1ZSk7XG4gICAgICByZXR1cm4gdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZSA9PT0gJ251bWJlcicgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NsYXNzTmFtZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsYXNzTmFtZShleHByZXNzaW9uKSB7XG4gICAgICB2YXIgY2xzID0gW107XG4gICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gT2JqZWN0LmtleXMoZXhwcmVzc2lvbilbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgICAgdmFyIGtleSA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgICAgaWYgKGV4cHJlc3Npb25ba2V5XSkge1xuICAgICAgICAgICAgY2xzLnB1c2goa2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2xzLmpvaW4oJyAnKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZW5lcmF0ZVNldHRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdlbmVyYXRlU2V0dGVyKHN0YXRlLCBjb21wKSB7XG4gICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlO1xuICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yMiA9IGZhbHNlO1xuICAgICAgdmFyIF9pdGVyYXRvckVycm9yMiA9IHVuZGVmaW5lZDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoKSB7XG4gICAgICAgICAgdmFyIGZpZWxkID0gX3N0ZXAyLnZhbHVlO1xuXG4gICAgICAgICAgY29tcFsnc2V0JyArIF9zdHJpbmcyLmRlZmF1bHQuY2FwaXRhbGl6ZShmaWVsZCldID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcC5zZXRTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfZGVmaW5lUHJvcGVydHkoe30sIGZpZWxkLCB2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSBPYmplY3Qua2V5cyhzdGF0ZSlbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDI7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSAoX3N0ZXAyID0gX2l0ZXJhdG9yMi5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWUpIHtcbiAgICAgICAgICBfbG9vcCgpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IyID0gdHJ1ZTtcbiAgICAgICAgX2l0ZXJhdG9yRXJyb3IyID0gZXJyO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yICYmIF9pdGVyYXRvcjIucmV0dXJuKSB7XG4gICAgICAgICAgICBfaXRlcmF0b3IyLnJldHVybigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IyKSB7XG4gICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0U2Nyb2xsV2lkdGgnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTY3JvbGxXaWR0aCgpIHtcbiAgICAgIHZhciBvdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBvdXRlci5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgIG91dGVyLnN0eWxlLndpZHRoID0gXCIxMDBweFwiO1xuICAgICAgb3V0ZXIuc3R5bGUubXNPdmVyZmxvd1N0eWxlID0gXCJzY3JvbGxiYXJcIjsgLy8gbmVlZGVkIGZvciBXaW5KUyBhcHBzXG5cbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3V0ZXIpO1xuXG4gICAgICB2YXIgd2lkdGhOb1Njcm9sbCA9IG91dGVyLm9mZnNldFdpZHRoO1xuICAgICAgLy8gZm9yY2Ugc2Nyb2xsYmFyc1xuICAgICAgb3V0ZXIuc3R5bGUub3ZlcmZsb3cgPSBcInNjcm9sbFwiO1xuXG4gICAgICAvLyBhZGQgaW5uZXJkaXZcbiAgICAgIHZhciBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBpbm5lci5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgICAgb3V0ZXIuYXBwZW5kQ2hpbGQoaW5uZXIpO1xuXG4gICAgICB2YXIgd2lkdGhXaXRoU2Nyb2xsID0gaW5uZXIub2Zmc2V0V2lkdGg7XG5cbiAgICAgIC8vIHJlbW92ZSBkaXZzXG4gICAgICBvdXRlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG91dGVyKTtcblxuICAgICAgcmV0dXJuIHdpZHRoTm9TY3JvbGwgLSB3aWR0aFdpdGhTY3JvbGw7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEV4dDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gbmV3IEV4dCgpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgRU1QVFlfTElTVCA9IFtdO1xuXG52YXIgTGlzdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTGlzdCh2YWx1ZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMaXN0KTtcblxuICAgIHRoaXMuYXJyYXkgPSBFTVBUWV9MSVNUO1xuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuYXJyYXkgPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTGlzdCwgW3tcbiAgICBrZXk6IFwiY29sbGVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb2xsZWN0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvdW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuYXJyYXkubGVuZ3RoO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJlYWNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVhY2goaXRlcmF0ZWUpIHtcbiAgICAgIGZvciAodmFyIGluZGV4ID0gMCwgaXRlbTsgKGl0ZW0gPSB0aGlzLmFycmF5W2luZGV4XSkgIT0gbnVsbDsgKytpbmRleCkge1xuICAgICAgICBpdGVyYXRlZShpdGVtLCBpbmRleCwgdGhpcy5hcnJheSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZpbmRCeVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmaW5kQnkocHJlZGljYXRlKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgICAgIGZvciAodmFyIGluZGV4ID0gMCwgaXRlbTsgKGl0ZW0gPSB0aGlzLmFycmF5W2luZGV4XSkgIT0gbnVsbDsgKytpbmRleCkge1xuICAgICAgICBpZiAocHJlZGljYXRlKGl0ZW0sIGluZGV4LCB0aGlzLmFycmF5KSkge1xuICAgICAgICAgIHJlc3VsdCA9IGl0ZW07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbnRhaW5zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbnRhaW5zKHByZWRpY2F0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZmluZEJ5KHByZWRpY2F0ZSkgIT09IG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZpbHRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmaWx0ZXIocHJlZGljYXRlKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4LCBhcnJheSkge1xuICAgICAgICBpZiAocHJlZGljYXRlKGl0ZW0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IExpc3QocmVzdWx0KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibWFwXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1hcChpdGVyYXRlZSkge1xuICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCwgYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpdGVtLCBpbmRleCwgYXJyYXkpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IExpc3QocmVzdWx0KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVkdWNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlZHVjZShpdGVyYXRlZSwgYWNjdW11bGF0b3IpIHtcbiAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgsIGFycmF5KSB7XG4gICAgICAgIHJldHVybiBhY2N1bXVsYXRvciA9IGl0ZXJhdGVlKGFjY3VtdWxhdG9yLCBpdGVtLCBpbmRleCwgYXJyYXkpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEF0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEF0KGluZGV4KSB7XG4gICAgICByZXR1cm4gdGhpcy5hcnJheVtpbmRleF07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZUF0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUF0KGluZGV4KSB7XG4gICAgICB2YXIgY291bnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDE7XG5cbiAgICAgIHJldHVybiB0aGlzLmFycmF5LnNwbGljZShpbmRleCwgY291bnQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhZGRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkKGl0ZW0pIHtcbiAgICAgIHRoaXMuYXJyYXkucHVzaChpdGVtKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaW5zZXJ0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluc2VydChpbmRleCwgaXRlbSkge1xuICAgICAgdGhpcy5hcnJheS5zcGxpY2UoaW5kZXgsIDAsIGl0ZW0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBMaXN0O1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIG5ldyBMaXN0KHZhbHVlKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2xpc3QgPSByZXF1aXJlKCcuL2xpc3QnKTtcblxudmFyIF9saXN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpc3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgRU1QVFlfTUFQID0ge307XG5cbnZhciBNYXAgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE1hcChrZXlWYWx1ZXMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFwKTtcblxuICAgIHRoaXMubWFwID0gRU1QVFlfTUFQO1xuICAgIGlmIChrZXlWYWx1ZXMgJiYga2V5VmFsdWVzLmxlbmd0aCkge1xuICAgICAgdGhpcy5tYXAgPSBPYmplY3QuYXNzaWduKHt9LCBrZXlWYWx1ZXMpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNYXAsIFt7XG4gICAga2V5OiAnZWFjaCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVhY2goaXRlcmF0ZWUpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLm1hcCkge1xuICAgICAgICBpdGVyYXRlZShrZXksIHRoaXMubWFwW2tleV0sIHRoaXMubWFwKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2tleXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBrZXlzKCkge1xuICAgICAgcmV0dXJuICgwLCBfbGlzdDIuZGVmYXVsdCkoT2JqZWN0LmtleXModGhpcy5tYXApKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd2YWx1ZXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZXMoKSB7XG4gICAgICByZXR1cm4gKDAsIF9saXN0Mi5kZWZhdWx0KShPYmplY3QudmFsdWVzKHRoaXMubWFwKSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hcDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGtleVZhbHVlcykge1xuICByZXR1cm4gbmV3IE1hcChrZXlWYWx1ZXMpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIE51bWJlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTnVtYmVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOdW1iZXIpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE51bWJlciwgW3tcbiAgICBrZXk6IFwicm91bmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcm91bmQodmFsdWUpIHtcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTnVtYmVyO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBuZXcgTnVtYmVyKCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdHJpbmcoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0cmluZyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU3RyaW5nLCBbe1xuICAgIGtleTogJ3RvUXVlcnlTdHJpbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b1F1ZXJ5U3RyaW5nKHBhcmFtcywgc2VwLCBlbmNvZGUpIHtcbiAgICAgIHNlcCA9IHNlcCA9PT0gdW5kZWZpbmVkID8gJyYnIDogc2VwO1xuICAgICAgZW5jb2RlID0gZW5jb2RlID09PSBmYWxzZSA/IGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIHJldHVybiBzO1xuICAgICAgfSA6IGVuY29kZVVSSUNvbXBvbmVudDtcblxuICAgICAgdmFyIHBhaXJzID0gW107XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcGFyYW1zKSB7XG4gICAgICAgIHBhaXJzLnB1c2goa2V5ICsgJz0nICsgZW5jb2RlKHBhcmFtc1trZXldKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcGFpcnMuam9pbihzZXApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NhcGl0YWxpemUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYXBpdGFsaXplKHN0cmluZykge1xuICAgICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3RyaW5nO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBuZXcgU3RyaW5nKCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3N0cmluZyA9IHJlcXVpcmUoJy4uL2NvcmUvc3RyaW5nJyk7XG5cbnZhciBfc3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0cmluZyk7XG5cbnZhciBfZXh0ID0gcmVxdWlyZSgnLi4vY29yZS9leHQnKTtcblxudmFyIF9leHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgdmFyIGdlbiA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IGZ1bmN0aW9uIHN0ZXAoa2V5LCBhcmcpIHsgdHJ5IHsgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpOyB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlOyB9IGNhdGNoIChlcnJvcikgeyByZWplY3QoZXJyb3IpOyByZXR1cm47IH0gaWYgKGluZm8uZG9uZSkgeyByZXNvbHZlKHZhbHVlKTsgfSBlbHNlIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHsgc3RlcChcIm5leHRcIiwgdmFsdWUpOyB9LCBmdW5jdGlvbiAoZXJyKSB7IHN0ZXAoXCJ0aHJvd1wiLCBlcnIpOyB9KTsgfSB9IHJldHVybiBzdGVwKFwibmV4dFwiKTsgfSk7IH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEFqYXggPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEFqYXgoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFqYXgpO1xuXG4gICAgX2V4dDIuZGVmYXVsdC5leHRlbmQoQWpheC5wcm90b3R5cGUsIHtcbiAgICAgIHhocjogbmV3IFhNTEh0dHBSZXF1ZXN0KCksXG4gICAgICBhamF4QmVmb3JlOiBmdW5jdGlvbiBhamF4QmVmb3JlKCkgey8qIHRvIGJlIGltcGxlbWVudGVkICovfSxcbiAgICAgIGFqYXhFcnJvcjogZnVuY3Rpb24gYWpheEVycm9yKGVycm9yKSB7LyogdG8gYmUgaW1wbGVtZW50ZWQgKi99LFxuICAgICAgYWpheENvbXBsZXRlOiBmdW5jdGlvbiBhamF4Q29tcGxldGUoKSB7LyogdG8gYmUgaW1wbGVtZW50ZWQgKi99LFxuICAgICAgQkFTRV9VUkw6IG51bGxcbiAgICB9KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhBamF4LCBbe1xuICAgIGtleTogJ3JlcXVlc3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3JlZiA9IF9hc3luY1RvR2VuZXJhdG9yKHJlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUoX3JlZjIpIHtcbiAgICAgICAgdmFyIHVybCA9IF9yZWYyLnVybCxcbiAgICAgICAgICAgIF9yZWYyJG1ldGhvZCA9IF9yZWYyLm1ldGhvZCxcbiAgICAgICAgICAgIG1ldGhvZCA9IF9yZWYyJG1ldGhvZCA9PT0gdW5kZWZpbmVkID8gJ2dldCcgOiBfcmVmMiRtZXRob2QsXG4gICAgICAgICAgICBwYXJhbXMgPSBfcmVmMi5wYXJhbXMsXG4gICAgICAgICAgICBuZXh0ID0gX3JlZjIubmV4dCxcbiAgICAgICAgICAgIGVycm9yID0gX3JlZjIuZXJyb3IsXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYyLmNvbXBsZXRlO1xuICAgICAgICB2YXIgcmVzcG9uc2U7XG4gICAgICAgIHJldHVybiByZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMDtcblxuICAgICAgICAgICAgICAgIHRoaXMuYWpheEJlZm9yZSgpO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA0O1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb21pc2UoeyB1cmw6IHVybCwgbWV0aG9kOiBtZXRob2QsIHBhcmFtczogcGFyYW1zIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9jb250ZXh0LnNlbnQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdCgncmV0dXJuJywgbmV4dCA/IG5leHQocmVzcG9uc2UpIDogcmVzcG9uc2UpO1xuXG4gICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gODtcbiAgICAgICAgICAgICAgICBfY29udGV4dC50MCA9IF9jb250ZXh0WydjYXRjaCddKDApO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ2Fubm90IGdldCByZXNwb25zZSBmcm9tIHNlcnZlciBmb3IgdXJsIFsnICsgdXJsICsgJ10gY2F1c2VkIGJ5OiAnICsgX2NvbnRleHQudDApO1xuICAgICAgICAgICAgICAgIHRoaXMuYWpheEVycm9yKF9jb250ZXh0LnQwKTtcbiAgICAgICAgICAgICAgICBlcnJvciAmJiBlcnJvcihfY29udGV4dC50MCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdCgncmV0dXJuJywgbnVsbCk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMTQ7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFqYXhDb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIGNvbXBsZXRlICYmIGNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmZpbmlzaCgxNCk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZSwgdGhpcywgW1swLCA4LCAxNCwgMThdXSk7XG4gICAgICB9KSk7XG5cbiAgICAgIGZ1bmN0aW9uIHJlcXVlc3QoX3gpIHtcbiAgICAgICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgfSgpXG4gIH0sIHtcbiAgICBrZXk6ICdwcm9taXNlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJvbWlzZShzZXR0aW5ncykge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgX3RoaXMuY3JlYXRlUmVxdWVzdChzZXR0aW5ncywgZnVuY3Rpb24gKGVyciwgcmVzKSB7XG4gICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjcmVhdGVSZXF1ZXN0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlUmVxdWVzdChfcmVmMywgZG9uZSkge1xuICAgICAgdmFyIHVybCA9IF9yZWYzLnVybCxcbiAgICAgICAgICBtZXRob2QgPSBfcmVmMy5tZXRob2QsXG4gICAgICAgICAgcGFyYW1zID0gX3JlZjMucGFyYW1zO1xuXG4gICAgICB0aGlzLkJBU0VfVVJMICYmICh1cmwgPSB0aGlzLkJBU0VfVVJMICsgJy8nICsgdXJsKTtcbiAgICAgIG1ldGhvZCA9PT0gJ2dldCcgJiYgcGFyYW1zICE9PSBudWxsICYmICh1cmwgPSB1cmwgKyAnPycgKyBfc3RyaW5nMi5kZWZhdWx0LnRvUXVlcnlTdHJpbmcocGFyYW1zKSk7XG4gICAgICB2YXIgeGhyID0gdGhpcy54aHI7XG4gICAgICB4aHIub3BlbihtZXRob2QsIHVybCwgdHJ1ZSk7XG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xuICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIGRvbmUobnVsbCwgSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGRvbmUoSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIGRvbmUoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgeGhyLnNlbmQocGFyYW1zICE9PSBudWxsID8gSlNPTi5zdHJpbmdpZnkocGFyYW1zKSA6IG51bGwpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBBamF4O1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBuZXcgQWpheCgpOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIENhY2hlID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDYWNoZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2FjaGUpO1xuXG4gICAgdGhpcy5fY2FjaGUgPSB7fTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDYWNoZSwgW3tcbiAgICBrZXk6ICdoYXNMb2NhbFN0b3JhZ2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNMb2NhbFN0b3JhZ2UoKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gJ2xvY2FsU3RvcmFnZScgaW4gd2luZG93ICYmIHdpbmRvdy5sb2NhbFN0b3JhZ2UgIT09IG51bGw7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgICBpZiAodGhpcy5oYXNMb2NhbFN0b3JhZ2UoKSkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSB8fCB1bmRlZmluZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVba2V5XSB8fCB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLmhhc0xvY2FsU3RvcmFnZSgpKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2NhY2hlW2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW1vdmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoa2V5KSB7XG4gICAgICBpZiAoIWtleSkge1xuICAgICAgICB0aGlzLl9jYWNoZSA9IHt9O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmhhc0xvY2FsU3RvcmFnZSgpKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWxldGUgdGhpcy5fY2FjaGVba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ2FjaGU7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG5ldyBDYWNoZSgpOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9leHQgPSByZXF1aXJlKCcuLi9jb3JlL2V4dCcpO1xuXG52YXIgX2V4dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHQpO1xuXG52YXIgX29ic2VydmFibGUgPSByZXF1aXJlKCcuLi9taXhpbi9vYnNlcnZhYmxlJyk7XG5cbnZhciBfb2JzZXJ2YWJsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYnNlcnZhYmxlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIE1vZGVsID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBNb2RlbChkYXRhLCBzdG9yZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNb2RlbCk7XG5cbiAgICBfZXh0Mi5kZWZhdWx0LmV4dGVuZCh0aGlzLCB7XG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgc3RvcmU6IHN0b3JlXG4gICAgfSk7XG4gICAgdGhpcy5zYXZlKCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTW9kZWwsIFt7XG4gICAga2V5OiAnZ2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KGZpZWxkTmFtZSkge1xuICAgICAgaWYgKCFmaWVsZE5hbWUgfHwgX2V4dDIuZGVmYXVsdC5pc1ByaW1pdGl2ZSh0aGlzLmRhdGEpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5kYXRhW2ZpZWxkTmFtZV07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGZpZWxkTmFtZSwgbmV3VmFsdWUpIHtcbiAgICAgIGlmICghZmllbGROYW1lIHx8IF9leHQyLmRlZmF1bHQuaXNQcmltaXRpdmUodGhpcy5kYXRhKSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXdWYWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGF0YVtmaWVsZE5hbWVdID0gbmV3VmFsdWU7XG4gICAgICB9XG4gICAgICB0aGlzLnN0b3JlICYmIHRoaXMuc3RvcmUub2JzZXJ2YWJsZS5jYWxsKHRoaXMuc3RvcmUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NhdmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzYXZlKCkge1xuICAgICAgdGhpcy5waGFudG9tID0gX2V4dDIuZGVmYXVsdC5pc1ByaW1pdGl2ZSh0aGlzLmRhdGEpID8gdGhpcy5kYXRhIDogX2V4dDIuZGVmYXVsdC5leHRlbmQoe30sIHRoaXMuZGF0YSk7XG4gICAgICB0aGlzLnN0b3JlICYmIHRoaXMuc3RvcmUub2JzZXJ2YWJsZS5jYWxsKHRoaXMuc3RvcmUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlamVjdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlamVjdCgpIHtcbiAgICAgIHRoaXMuZGF0YSA9IF9leHQyLmRlZmF1bHQuZXh0ZW5kKHt9LCB0aGlzLnBoYW50b20pO1xuICAgICAgdGhpcy5zYXZlKCk7XG4gICAgICB0aGlzLnN0b3JlICYmIHRoaXMuc3RvcmUub2JzZXJ2YWJsZS5jYWxsKHRoaXMuc3RvcmUpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNb2RlbDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTW9kZWw7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2V4dCA9IHJlcXVpcmUoJy4uL2NvcmUvZXh0Jyk7XG5cbnZhciBfZXh0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dCk7XG5cbnZhciBfbGlzdCA9IHJlcXVpcmUoJy4uL2NvcmUvbGlzdCcpO1xuXG52YXIgX2xpc3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGlzdCk7XG5cbnZhciBfb2JzZXJ2YWJsZSA9IHJlcXVpcmUoJy4uL21peGluL29ic2VydmFibGUnKTtcblxudmFyIF9vYnNlcnZhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29ic2VydmFibGUpO1xuXG52YXIgX2FqYXggPSByZXF1aXJlKCcuL2FqYXgnKTtcblxudmFyIF9hamF4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FqYXgpO1xuXG52YXIgX21vZGVsID0gcmVxdWlyZSgnLi9tb2RlbCcpO1xuXG52YXIgX21vZGVsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21vZGVsKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgdmFyIGdlbiA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IGZ1bmN0aW9uIHN0ZXAoa2V5LCBhcmcpIHsgdHJ5IHsgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpOyB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlOyB9IGNhdGNoIChlcnJvcikgeyByZWplY3QoZXJyb3IpOyByZXR1cm47IH0gaWYgKGluZm8uZG9uZSkgeyByZXNvbHZlKHZhbHVlKTsgfSBlbHNlIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHsgc3RlcChcIm5leHRcIiwgdmFsdWUpOyB9LCBmdW5jdGlvbiAoZXJyKSB7IHN0ZXAoXCJ0aHJvd1wiLCBlcnIpOyB9KTsgfSB9IHJldHVybiBzdGVwKFwibmV4dFwiKTsgfSk7IH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICB2YXIgRGF0YVN0b3JlID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERhdGFTdG9yZSgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEYXRhU3RvcmUpO1xuXG4gICAgICBfZXh0Mi5kZWZhdWx0LmV4dGVuZCh0aGlzLCBjb25maWcsIHtcbiAgICAgICAgb2JzZXJ2YWJsZTogX29ic2VydmFibGUyLmRlZmF1bHQuY3JlYXRlKClcbiAgICAgIH0pO1xuICAgICAgdGhpcy5kYXRhID0gKDAsIF9saXN0Mi5kZWZhdWx0KShjb25maWcuZGF0YSB8fCBbXSkubWFwKGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBfbW9kZWwyLmRlZmF1bHQocmVjb3JkLCBfdGhpcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoRGF0YVN0b3JlLCBbe1xuICAgICAga2V5OiAnbG9hZCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3JlZiA9IF9hc3luY1RvR2VuZXJhdG9yKHJlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUocHJveHkpIHtcbiAgICAgICAgICB2YXIgcmVzcG9uc2U7XG4gICAgICAgICAgcmV0dXJuIHJlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgcHJveHkgPSBfZXh0Mi5kZWZhdWx0LmV4dGVuZCh7fSwgdGhpcy5wcm94eSwgcHJveHkgfHwge30pO1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDM7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2FqYXgyLmRlZmF1bHQucmVxdWVzdChwcm94eSk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9jb250ZXh0LnNlbnQ7XG5cbiAgICAgICAgICAgICAgICAgIHJlc3BvbnNlICYmIHRoaXMubG9hZERhdGEocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdCgncmV0dXJuJywgdGhpcyk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBfY2FsbGVlLCB0aGlzKTtcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGxvYWQoX3gpIHtcbiAgICAgICAgICByZXR1cm4gX3JlZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxvYWQ7XG4gICAgICB9KClcbiAgICB9LCB7XG4gICAgICBrZXk6ICdsb2FkRGF0YScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZERhdGEoZGF0YSkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB2YXIgbmV3RGF0YSA9IHRoaXMucHJveHkucmVhZGVyICYmIHRoaXMucHJveHkucmVhZGVyLnJvb3RQcm9wZXJ0eSA/IGRhdGFbdGhpcy5wcm94eS5yZWFkZXIucm9vdFByb3BlcnR5XSA6IGRhdGE7XG4gICAgICAgIHRoaXMuZGF0YSA9ICgwLCBfbGlzdDIuZGVmYXVsdCkobmV3RGF0YSkubWFwKGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IF9tb2RlbDIuZGVmYXVsdChyZWNvcmQsIF90aGlzMik7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5wYWdlU2l6ZSkge1xuICAgICAgICAgIHRoaXMucGFnZSA9IGRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vYnNlcnZhYmxlLmNhbGwodGhpcyk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnbG9hZFBhZ2UnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWRQYWdlKHBhZ2UpIHtcbiAgICAgICAgdmFyIHByb3h5ID0gX2V4dDIuZGVmYXVsdC5leHRlbmQoe30sIHRoaXMucHJveHksIHsgdXJsOiB0aGlzLnByb3h5LnVybCArICc/cGFnZT0nICsgcGFnZSB9KTtcbiAgICAgICAgcmV0dXJuIGxvYWQocHJveHkpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NvdW50JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5jb3VudCgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2dldERhdGEnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldERhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuY29sbGVjdCgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2dldEF0JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBdChpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmdldEF0KGluZGV4KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdyZW1vdmVBdCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlQXQoaW5kZXgsIGNvdW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEucmVtb3ZlQXQoaW5kZXgsIGNvdW50KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdyZW1vdmVBbGwnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUFsbCgpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgICAgIHRoaXMub2JzZXJ2YWJsZS5jYWxsKHRoaXMpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2ZpbHRlckJ5JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBmaWx0ZXJCeShwcmVkaWNhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5maWx0ZXIocHJlZGljYXRlKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdzdWJzY3JpYmUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN1YnNjcmliZShvYnNlcnZlcikge1xuICAgICAgICB0aGlzLm9ic2VydmFibGUuc3Vic2NyaWJlKG9ic2VydmVyKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICd1bnN1YnNjcmliZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdW5zdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZhYmxlLnVuc3Vic2NyaWJlKG9ic2VydmVyKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdjb21taXRDaGFuZ2VzJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21taXRDaGFuZ2VzKCkge1xuICAgICAgICAoMCwgX2xpc3QyLmRlZmF1bHQpKHRoaXMuZGF0YSkuZWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlY29yZC5zYXZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm9ic2VydmFibGUuY2FsbCh0aGlzKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdyZWplY3RDaGFuZ2VzJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWplY3RDaGFuZ2VzKCkge1xuICAgICAgICAoMCwgX2xpc3QyLmRlZmF1bHQpKHRoaXMuZGF0YSkuZWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlY29yZC5yZWplY3QoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub2JzZXJ2YWJsZS5jYWxsKHRoaXMpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBEYXRhU3RvcmU7XG4gIH0oKTtcblxuICByZXR1cm4gbmV3IERhdGFTdG9yZSgpO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcikge1xuICB2YXIgZm4gPSBkZXNjcmlwdG9yLnZhbHVlO1xuXG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0BiaW5kIGRlY29yYXRvciBpcyBvbmx5IGFwcGxpZWQgdG8gZnVuY3Rpb25zIG5vdDogJyArICh0eXBlb2YgZm4gPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGZuKSkpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gZm4uYmluZCh0aGlzKTtcbiAgICB9XG4gIH07XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9leHQgPSByZXF1aXJlKCcuLi9jb3JlL2V4dCcpO1xuXG52YXIgX2V4dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHQpO1xuXG52YXIgX2xpc3QgPSByZXF1aXJlKCcuLi9jb3JlL2xpc3QnKTtcblxudmFyIF9saXN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpc3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgT2JzZXJ2YWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gT2JzZXJ2YWJsZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgT2JzZXJ2YWJsZSk7XG5cbiAgICB0aGlzLm9ic2VydmVycyA9IFtdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE9ic2VydmFibGUsIFt7XG4gICAga2V5OiAnc3Vic2NyaWJlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICB0aGlzLm9ic2VydmVycy5wdXNoKG9ic2VydmVyKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd1bnN1YnNjcmliZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICAoMCwgX2xpc3QyLmRlZmF1bHQpKHRoaXMub2JzZXJ2ZXJzKS5lYWNoKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgsIG9ic2VydmVycykge1xuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG9ic2VydmVyICYmIG9ic2VydmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2FsbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhbGwoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICAoMCwgX2xpc3QyLmRlZmF1bHQpKHRoaXMub2JzZXJ2ZXJzKS5lYWNoKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICByZXR1cm4gb2JzZXJ2ZXIuYXBwbHkoX3RoaXMsIGFyZ3MpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6ICdjcmVhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdmcm9tRXZlbnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmcm9tRXZlbnQodGFyZ2V0LCBldmVudE5hbWUpIHtcbiAgICAgIHJldHVybiBuZXcgRXZlbnRPYnNlcnZhYmxlKHRhcmdldCwgZXZlbnROYW1lKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gT2JzZXJ2YWJsZTtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gT2JzZXJ2YWJsZTtcblxudmFyIEV2ZW50T2JzZXJ2YWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRXZlbnRPYnNlcnZhYmxlKHRhcmdldCwgZXZlbnROYW1lKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEV2ZW50T2JzZXJ2YWJsZSk7XG5cbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICB0aGlzLmV2ZW50TmFtZSA9IGV2ZW50TmFtZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhFdmVudE9ic2VydmFibGUsIFt7XG4gICAga2V5OiAnc3Vic2NyaWJlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKHRoaXMuZXZlbnROYW1lLCBvYnNlcnZlciwgZmFsc2UpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Vuc3Vic2NyaWJlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5zdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5ldmVudE5hbWUsIG9ic2VydmVyLCBmYWxzZSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEV2ZW50T2JzZXJ2YWJsZTtcbn0oKTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcikge1xuICB2YXIgZm4gPSBkZXNjcmlwdG9yLnZhbHVlO1xuXG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0B3aXRoUHJvcHMgZGVjb3JhdG9yIGlzIG9ubHkgYXBwbGllZCB0byBmdW5jdGlvbnMgbm90OiAnICsgKHR5cGVvZiBmbiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoZm4pKSk7XG4gIH1cblxuICBkZXNjcmlwdG9yLnZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmbi5iaW5kKHRoaXMpKHRoaXMucHJvcHMpO1xuICB9O1xuICByZXR1cm4gZGVzY3JpcHRvcjtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpIHtcbiAgdmFyIGZuID0gZGVzY3JpcHRvci52YWx1ZTtcblxuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdAd2l0aFN0YXRlIGRlY29yYXRvciBpcyBvbmx5IGFwcGxpZWQgdG8gZnVuY3Rpb25zIG5vdDogJyArICh0eXBlb2YgZm4gPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGZuKSkpO1xuICB9XG5cbiAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZm4uYmluZCh0aGlzKSh0aGlzLnN0YXRlKTtcbiAgfTtcbiAgcmV0dXJuIGRlc2NyaXB0b3I7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuRHJvcGRvd24gPSBleHBvcnRzLkJ1dHRvbiA9IGV4cG9ydHMuRmllbGQgPSBleHBvcnRzLkdyaWQgPSBleHBvcnRzLkNvbnRhaW5lciA9IGV4cG9ydHMuTGluayA9IGV4cG9ydHMuSGFzaFJvdXRlciA9IGV4cG9ydHMuUm91dGUgPSBleHBvcnRzLmJpbmQgPSBleHBvcnRzLndpdGhQcm9wcyA9IGV4cG9ydHMuT2JzZXJ2YWJsZSA9IGV4cG9ydHMuQ29tcG9uZW50ID0gZXhwb3J0cy5TZXJ2aWNlID0gZXhwb3J0cy5Nb2RlbCA9IGV4cG9ydHMuU3RvcmUgPSBleHBvcnRzLkNhY2hlID0gZXhwb3J0cy5BamF4ID0gZXhwb3J0cy5NYXAgPSBleHBvcnRzLkxpc3QgPSBleHBvcnRzLlN0cmluZyA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9zdHJpbmcgPSByZXF1aXJlKCcuL2NvcmUvc3RyaW5nJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU3RyaW5nJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RyaW5nKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9saXN0ID0gcmVxdWlyZSgnLi9jb3JlL2xpc3QnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGlzdCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfbWFwID0gcmVxdWlyZSgnLi9jb3JlL21hcCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01hcCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hcCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfYWpheCA9IHJlcXVpcmUoJy4vZGF0YS9hamF4Jyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnQWpheCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FqYXgpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2NhY2hlID0gcmVxdWlyZSgnLi9kYXRhL2NhY2hlJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnQ2FjaGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jYWNoZSkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfc3RvcmUgPSByZXF1aXJlKCcuL2RhdGEvc3RvcmUnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTdG9yZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0b3JlKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9tb2RlbCA9IHJlcXVpcmUoJy4vZGF0YS9tb2RlbCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01vZGVsJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbW9kZWwpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX3NlcnZpY2UgPSByZXF1aXJlKCcuL2FwcC9zZXJ2aWNlJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2VydmljZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NlcnZpY2UpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2NvbXBvbmVudCA9IHJlcXVpcmUoJy4vYXBwL2NvbXBvbmVudCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0NvbXBvbmVudCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBvbmVudCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfb2JzZXJ2YWJsZSA9IHJlcXVpcmUoJy4vbWl4aW4vb2JzZXJ2YWJsZScpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ09ic2VydmFibGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYnNlcnZhYmxlKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF93aXRoUHJvcHMgPSByZXF1aXJlKCcuL21peGluL3dpdGgtcHJvcHMnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd3aXRoUHJvcHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93aXRoUHJvcHMpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2JpbmQgPSByZXF1aXJlKCcuL21peGluL2JpbmQnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdiaW5kJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmluZCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfcm91dGVyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3JvdXRlcicpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JvdXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcm91dGVyKS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnSGFzaFJvdXRlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9yb3V0ZXIuSGFzaFJvdXRlcjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfcm91dGVyLkxpbms7XG4gIH1cbn0pO1xuXG52YXIgX2NvbnRhaW5lciA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9jb250YWluZXInKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdDb250YWluZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb250YWluZXIpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2dyaWQgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvZ3JpZCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0dyaWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ncmlkKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9mb3JtID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2Zvcm0nKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGaWVsZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9mb3JtLkZpZWxkO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnQnV0dG9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2Zvcm0uQnV0dG9uO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRHJvcGRvd24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfZm9ybS5Ecm9wZG93bjtcbiAgfVxufSk7XG5cbnJlcXVpcmUoJ2JhYmVsLXBvbHlmaWxsJyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX2V4dCA9IHJlcXVpcmUoJy4vY29yZS9leHQnKTtcblxudmFyIF9leHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0KTtcblxudmFyIF9saXN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpc3QpO1xuXG52YXIgX2FqYXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWpheCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHZhciBnZW4gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyBmdW5jdGlvbiBzdGVwKGtleSwgYXJnKSB7IHRyeSB7IHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTsgdmFyIHZhbHVlID0gaW5mby52YWx1ZTsgfSBjYXRjaCAoZXJyb3IpIHsgcmVqZWN0KGVycm9yKTsgcmV0dXJuOyB9IGlmIChpbmZvLmRvbmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0gZWxzZSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7IHN0ZXAoXCJuZXh0XCIsIHZhbHVlKTsgfSwgZnVuY3Rpb24gKGVycikgeyBzdGVwKFwidGhyb3dcIiwgZXJyKTsgfSk7IH0gfSByZXR1cm4gc3RlcChcIm5leHRcIik7IH0pOyB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBSZXh0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBSZXh0KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZXh0KTtcblxuICAgIHRoaXMuZXh0ZW5kID0gX2V4dDIuZGVmYXVsdC5leHRlbmQ7XG4gICAgdGhpcy5hamF4ID0gZnVuY3Rpb24gKHNldHRpbmdzKSB7XG4gICAgICByZXR1cm4gX2FqYXgyLmRlZmF1bHQucmVxdWVzdChzZXR0aW5ncyk7XG4gICAgfTtcbiAgICB0aGlzLmdlbmVyYXRlU2V0dGVyID0gX2V4dDIuZGVmYXVsdC5nZW5lcmF0ZVNldHRlcjtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhSZXh0LCBbe1xuICAgIGtleTogJ2xhdW5jaCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfcmVmID0gX2FzeW5jVG9HZW5lcmF0b3IocmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZSh2aWV3cG9ydCkge1xuICAgICAgICB2YXIgcm9vdDtcbiAgICAgICAgcmV0dXJuIHJlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGlmICghd2luZG93LmxvY2F0aW9uLmhhc2gpIHtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJy8nO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJvb3QgPSBfZXh0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJzxkaXYgaWQ9XCJyZWFjdC1yb290XCI+PC9kaXY+Jyk7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJvb3QpO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0LnQwID0gX2V4dDIuZGVmYXVsdC5pc0Z1bmN0aW9uKHZpZXdwb3J0KTtcblxuICAgICAgICAgICAgICAgIGlmICghX2NvbnRleHQudDApIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA4O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZpZXdwb3J0KCk7XG5cbiAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIHZpZXdwb3J0ID0gX2NvbnRleHQuc2VudDtcblxuICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgKDAsIF9yZWFjdERvbS5yZW5kZXIpKHZpZXdwb3J0LCByb290KTtcblxuICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIF9jYWxsZWUsIHRoaXMpO1xuICAgICAgfSkpO1xuXG4gICAgICBmdW5jdGlvbiBsYXVuY2goX3gpIHtcbiAgICAgICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxhdW5jaDtcbiAgICB9KClcbiAgfV0pO1xuXG4gIHJldHVybiBSZXh0O1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBuZXcgUmV4dCgpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29tcG9uZW50IH0gZnJvbSAnQC9yZXh0J1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQC9yZXh0JztcblxuQFJvdXRlKCcvJylcbkBDb21wb25lbnQoe1xuICB2aWV3OiAoeyB2bSB9KSA9PiA8Q29udGFpbmVyIGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj48aDE+e3ZtLnRpdGxlfTwvaDE+PC9Db250YWluZXI+XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRpdGxlID0gJ0Rhc2hib2FyZCdcbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFJvdXRlLCBDb250YWluZXIgfSBmcm9tICdAL3JleHQnXG5cbkBSb3V0ZSgnKicpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPENvbnRhaW5lcj5cbiAgICAgIDxoMT5Ob3QgRm91bmQ8L2gxPlxuICAgIDwvQ29udGFpbmVyPlxuICB9XG59IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQC9yZXh0JztcbmltcG9ydCBDYXJkU3RvcmUgZnJvbSAnIy9zdG9yZXMvY2FyZCc7XG5pbXBvcnQgU2VhcmNoRm9ybVZpZXcgZnJvbSAnLi9zZWFyY2gtZm9ybS52aWV3JztcblxuQENvbXBvbmVudCh7XG4gIGNvbXBvbmVudEFzOiAnc2VhcmNoRm9ybScsXG4gIHZpZXc6IFNlYXJjaEZvcm1WaWV3XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoRm9ybSB7XG4gIHNlYXJjaCgpIHtcbiAgICBDYXJkU3RvcmUubG9hZCgpO1xuICB9XG5cbiAgdGVzdCgpIHtcbiAgICBDYXJkU3RvcmUuZ2V0QXQoMCkuc2V0KCdOYW1lJywgJ05ldyBOYW1lJyk7XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFByb3BzLCBGaWVsZCwgRHJvcGRvd24sIEJ1dHRvbiB9IGZyb20gJ0AvcmV4dCc7XG5pbXBvcnQgQ2FyZFR5cGVTdG9yZSBmcm9tICcjL3N0b3Jlcy9jYXJkLXR5cGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hGb3JtVmlldyBleHRlbmRzIENvbXBvbmVudCB7XG4gIEB3aXRoUHJvcHNcbiAgcmVuZGVyKHsgc2VhcmNoRm9ybSB9KSB7XG4gICAgcmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZm9ybS1pbmxpbmVcIj5cbiAgICAgIDxGaWVsZCBjbGFzc05hbWU9XCJtci1zbVwiIC8+XG4gICAgICA8RHJvcGRvd24gc3RvcmU9e0NhcmRUeXBlU3RvcmV9IGZpZWxkTGFiZWw9XCJDYXJkIFR5cGVcIiBjbGFzc05hbWU9XCJtci1zbVwiIC8+XG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInByaW1hcnkgbXItc21cIiB0ZXh0PVwiU2VhcmNoXCIgb25DbGljaz17c2VhcmNoRm9ybS5zZWFyY2h9IC8+XG4gICAgPC9zZWN0aW9uPjtcbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQsIERyb3Bkb3duIH0gZnJvbSAnQC9yZXh0JztcbmltcG9ydCBDYXJkU3RvcmUgZnJvbSAnIy9zdG9yZXMvY2FyZCc7XG5pbXBvcnQgQ2FyZFR5cGVTdG9yZSBmcm9tICcjL3N0b3Jlcy9jYXJkLXR5cGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hSZXN1bHQgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxDb250YWluZXI+XG4gICAgICA8R3JpZCBzdG9yZT17Q2FyZFN0b3JlfT5cbiAgICAgICAgPGRpdiB0ZXh0PVwiSURcIiBkYXRhSW5kZXg9XCJJZFwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3t3aWR0aDoxNTB9fSAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJOYW1lXCIgZGF0YUluZGV4PVwiTmFtZVwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3t3aWR0aDoyNTB9fSBlZGl0YWJsZSAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJUeXBlXCIgZGF0YUluZGV4PVwiVHlwZVwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3t3aWR0aDoxMDB9fSBlZGl0YWJsZT17e3R5cGU6J2Ryb3Bkb3duJyxzdG9yZTpDYXJkVHlwZVN0b3JlfX0gLz5cbiAgICAgICAgPGRpdiB0ZXh0PVwiSW50cm9kdWN0aW9uXCIgZGF0YUluZGV4PVwiSW50cm9kdWN0aW9uXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiBzdHlsZT17e3dpZHRoOjEwMDB9fSAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJTVFJcIiBkYXRhSW5kZXg9XCJTVFJcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6NTB9fSAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJBR0lcIiBkYXRhSW5kZXg9XCJBR0lcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6NTB9fSAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJIUFwiIGRhdGFJbmRleD1cIkhQXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiBzdHlsZT17e3dpZHRoOjUwfX0gLz5cbiAgICAgICAgPGRpdiB0ZXh0PVwiREVYXCIgZGF0YUluZGV4PVwiREVYXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiBzdHlsZT17e3dpZHRoOjUwfX0gLz5cbiAgICAgICAgPGRpdiB0ZXh0PVwiSU5UXCIgZGF0YUluZGV4PVwiSU5UXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiBzdHlsZT17e3dpZHRoOjUwfX0gLz5cbiAgICAgICAgPGRpdiB0ZXh0PVwiU0VOXCIgZGF0YUluZGV4PVwiU0VOXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiBzdHlsZT17e3dpZHRoOjUwfX0gLz5cbiAgICAgICAgPGRpdiB0ZXh0PVwiQXJtb3JcIiBkYXRhSW5kZXg9XCJBcm1vclVzYWJsZVwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3t3aWR0aDoxMDB9fSAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJXZWFwb25cIiBkYXRhSW5kZXg9XCJXZWFwb25Vc2FibGVcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6MTAwfX0gLz5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0NvbnRhaW5lcj47XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIENvbnRhaW5lciB9IGZyb20gJ0AvcmV4dCc7XG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tICcuL3NlYXJjaC1mb3JtJztcbmltcG9ydCBTZWFyY2hSZXN1bHQgZnJvbSAnLi9zZWFyY2gtcmVzdWx0JztcblxuQFJvdXRlKCcvc2VhcmNoJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPENvbnRhaW5lciBjbGFzc05hbWU9XCJwYW5lbC1ib2R5XCI+XG4gICAgICA8aDE+U2VhcmNoPC9oMT5cbiAgICAgIDxTZWFyY2hGb3JtIC8+XG4gICAgICA8U2VhcmNoUmVzdWx0IC8+XG4gICAgPC9Db250YWluZXI+O1xuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxmb290ZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB0ZXh0LWNlbnRlclwiPiZjb3B5OyAyMDE3IGh1eXRyb25nbmd1eWVuPC9kaXY+XG4gICAgPC9mb290ZXI+O1xuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmssIENhY2hlIH0gZnJvbSAnQC9yZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxoZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYW5kXCI+UmVhY3QgQ01TPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtci1hdXRvXCI+XG4gICAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5EYXNoYm9hcmQ8L0xpbms+XG4gICAgICAgICAgPExpbmsgdG89XCIvc2VhcmNoXCIgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5TZWFyY2g8L0xpbms+XG4gICAgICAgICAgPExpbmsgdG89XCIvcmVwb3J0aW5nXCIgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5SZXBvcnRpbmc8L0xpbms+XG4gICAgICAgICAgPExpbmsgdG89XCIvYWRtaW5cIiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPkFkbWluaXN0cmF0aW9uPC9MaW5rPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8ZGl2PkhlbGxvLCA8c3Ryb25nPntDYWNoZS5nZXQoJ2NvbmZpZ3VyYXRpb24nKS5uYW1lfTwvc3Ryb25nPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+O1xuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyAuLi5vdGhlcnMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIDxuYXYgey4uLm90aGVyc30gLz47XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGFzaWRlIHN0eWxlPXt7d2lkdGg6MTAwfX0gLz47XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBIYXNoUm91dGVyIH0gZnJvbSAnQC9yZXh0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IFNpZGUgZnJvbSAnLi9zaWRlJztcbmltcG9ydCBOYXYgZnJvbSAnLi9uYXYnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3Rlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Q29udGFpbmVyPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPENvbnRhaW5lciBoYm94PlxuICAgICAgICA8Q29udGFpbmVyIGlkPVwibWFpbi1jb250YWluZXJcIj5cbiAgICAgICAgICA8TmF2IC8+XG4gICAgICAgICAgPEhhc2hSb3V0ZXIgLz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L0NvbnRhaW5lcj47XG4gIH1cbn0iLCJpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmV4dCBmcm9tICdAL3JleHQnO1xuaW1wb3J0IENvbW1vblNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlcy9jb21tb24nO1xuaW1wb3J0IFZpZXdwb3J0IGZyb20gJy4vY29tcG9uZW50cy92aWV3cG9ydC92aWV3cG9ydCc7XG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gJy4vY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkJztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2gnO1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4vY29tcG9uZW50cy9ub3Rmb3VuZC9ub3Rmb3VuZCc7XG5cblJleHQubGF1bmNoKGFzeW5jICgpID0+IHtcbiAgYXdhaXQgQ29tbW9uU2VydmljZS5pbml0QXBwKCk7XG4gIHJldHVybiA8Vmlld3BvcnQgLz47XG59KTsiLCJpbXBvcnQgUmV4dCwgeyBTZXJ2aWNlLCBBamF4LCBDYWNoZSB9IGZyb20gJ0AvcmV4dCc7XG5cbkBTZXJ2aWNlXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGFzeW5jIGluaXRBcHAoKSB7XG4gICAgYXdhaXQgQWpheC5yZXF1ZXN0KHtcbiAgICAgIHVybDogJy9hcGkvY29uZmlndXJhdGlvbicsXG4gICAgICBuZXh0OiBjb25maWd1cmF0aW9uID0+IENhY2hlLnNldCgnY29uZmlndXJhdGlvbicsIGNvbmZpZ3VyYXRpb24pXG4gICAgfSk7XG4gIH1cbn0iLCJpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0AvcmV4dCdcblxuZXhwb3J0IGRlZmF1bHQgU3RvcmUoe1xuICBzdG9yZUlkOiAnQ2FyZFR5cGVTdG9yZScsXG4gIGRhdGE6IFsnTWVsZWUnLCAnU2hvb3QnLCAnTWFnaWMnXVxufSk7IiwiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAL3JleHQnXG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JlKHtcbiAgc3RvcmVJZDogJ0NhcmRTdG9yZScsXG4gIHByb3h5OiB7XG4gICAgdXJsOiAnL2FwaS9jYXJkcycsXG4gICAgbWV0aG9kOiAncG9zdCdcbiAgfVxufSk7Il19
