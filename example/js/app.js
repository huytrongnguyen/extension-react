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
exports.Checkbox = exports.Dropdown = exports.Button = exports.Field = undefined;

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
          onBlur = _ref.onBlur,
          others = _objectWithoutProperties(_ref, ['className', 'onChange', 'onKeyPress', 'onBlur']);

      return _react2.default.createElement('input', _extends({ type: 'text', value: this.state.value, className: 'form-control ' + className,
        onChange: this.onChange, onKeyPress: this.onEnter, onBlur: this.onBlur
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
  }, {
    key: 'onEnter',
    value: function onEnter(e) {
      var value = e.target.value;

      if (e.key === 'Enter') {
        this.props.onEnter && this.props.onEnter(value);
        this.props.onBlur && this.props.onBlur(value);
      }
    }
  }, {
    key: 'onBlur',
    value: function onBlur(e) {
      var value = e.target.value;

      this.props.onBlur && this.props.onBlur(value);
    }
  }]);

  return Field;
}(_react.Component), (_applyDecoratedDescriptor(_class.prototype, 'render', [_withProps2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onChange', [_bind2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'onChange'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onEnter', [_bind2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'onEnter'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onBlur', [_bind2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'onBlur'), _class.prototype)), _class);
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
        var className = _ext2.default.className(['dropdown-item', { 'selected': selection.contains(function (selected) {
            return (selected.get ? selected.get(displayField) : selected) === rec.get(displayField);
          }) }]);
        return _react2.default.createElement('div', { className: className,
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
var Checkbox = exports.Checkbox = (_class4 = function (_Component4) {
  _inherits(Checkbox, _Component4);

  function Checkbox(props) {
    _classCallCheck(this, Checkbox);

    var _this5 = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));

    _this5.state = {
      checked: props.checked
    };
    return _this5;
  }

  _createClass(Checkbox, [{
    key: 'render',
    value: function render() {
      var checked = this.state.checked,
          others = _objectWithoutProperties(this.props, []);

      return _react2.default.createElement('input', _extends({ type: 'checkbox', checked: checked, onChange: this.toggleCheck }, others));
    }
  }, {
    key: 'toggleCheck',
    value: function toggleCheck() {
      var checked = this.state.checked;

      checked = !checked;
      this.setState(function () {
        return { checked: checked };
      });
      var _props4 = this.props,
          onCheckChange = _props4.onCheckChange,
          model = _props4.model;

      onCheckChange && onCheckChange(checked, model);
    }
  }]);

  return Checkbox;
}(_react.Component), _applyDecoratedDescriptor(_class4.prototype, 'toggleCheck', [_bind2.default], Object.getOwnPropertyDescriptor(_class4.prototype, 'toggleCheck'), _class4.prototype), _class4);

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
      columns: (0, _list2.default)(_react2.default.Children.toArray(props.children)).map(function (child) {
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
    value: function componentWillMount() {}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.resizeGrid();
      this.props.store.subscribe(this.reload);
      _observable2.default.fromEvent(window, 'resize').subscribe(this.resizeGrid);
      _observable2.default.fromEvent(_ext2.default.getComp(this).find('.rx-grid-body'), 'scroll').subscribe(this.onScroll);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.store.unsubscribe(this.reload);
      _observable2.default.fromEvent(window, 'resize').unsubscribe(this.resizeGrid);
      _observable2.default.fromEvent(_ext2.default.getComp(this).find('.rx-grid-body'), 'scroll').unsubscribe(this.onScroll);
    }
  }, {
    key: 'render',
    value: function render(_ref) {
      var store = _ref.store,
          paging = _ref.paging;

      return _react2.default.createElement(_container2.default, null, paging && _react2.default.createElement(_pagingToolbar2.default, { store: store }), _react2.default.createElement(_container2.default, { className: 'rx-grid' }, _react2.default.createElement(_header2.default, _extends({ total: store.count() }, this.state)), _react2.default.createElement(_body2.default, _extends({ data: store.getData() }, this.state))));
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
  }, {
    key: 'onScroll',
    value: function onScroll() {
      var node = _ext2.default.getComp(this);
      node.find('.rx-grid-header').scrollLeft = node.find('.rx-grid-body').scrollLeft;
    }
  }]);

  return Grid;
}(_react.Component), (_applyDecoratedDescriptor(_class.prototype, 'render', [_withProps2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'resizeGrid', [_bind2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'resizeGrid'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onScroll', [_bind2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'onScroll'), _class.prototype)), _class);
exports.default = Grid;

},{"../core/ext":13,"../core/list":14,"../core/number":16,"../mixin/bind":22,"../mixin/observable":23,"../mixin/with-props":24,"./container":3,"./grid/body":6,"./grid/header":8,"./grid/paging-toolbar":9,"react":"react"}],6:[function(require,module,exports){
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

var _container = require('../container');

var _container2 = _interopRequireDefault(_container);

var _row = require('./row');

var _row2 = _interopRequireDefault(_row);

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
          width = _ref.width,
          bodyWidth = _ref.bodyWidth,
          data = _ref.data,
          others = _objectWithoutProperties(_ref, ['columns', 'width', 'bodyWidth', 'data']);

      return _react2.default.createElement(_container2.default, { className: 'rx-grid-body', style: { width: width } }, _react2.default.createElement('section', { className: 'rx-grid-view', style: { width: bodyWidth } }, _react2.default.createElement('div', { style: { height: 1 } }), data && data.map(function (record, rowIndex) {
        return _react2.default.createElement(_row2.default, _extends({ rowIndex: rowIndex, record: record, columns: columns }, others));
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

    var record = props.record,
        dataIndex = props.dataIndex;

    _this.state = {
      value: dataIndex ? record.get(dataIndex) : '',
      readOnly: true
    };
    _ext2.default.generateSetter(_this.state, _this);
    return _this;
  }

  _createClass(GridCell, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.record.store.subscribe(this.reload);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.record.store.unsubscribe(this.reload);
    }
  }, {
    key: 'render',
    value: function render(_ref) {
      var _this2 = this;

      var _ref$className = _ref.className,
          className = _ref$className === undefined ? '' : _ref$className,
          _ref$style = _ref.style,
          style = _ref$style === undefined ? {} : _ref$style,
          _render = _ref.render,
          record = _ref.record,
          dataIndex = _ref.dataIndex,
          rowIndex = _ref.rowIndex,
          editable = _ref.editable,
          others = _objectWithoutProperties(_ref, ['className', 'style', 'render', 'record', 'dataIndex', 'rowIndex', 'editable']);

      var _state = this.state,
          value = _state.value,
          readOnly = _state.readOnly,
          cls = _ext2.default.className(['rx-grid-cell', className, { 'modified': dataIndex && record.isModified(dataIndex) }]);

      if (editable) {
        if (readOnly) {
          return _react2.default.createElement('div', _extends({ className: cls, style: style, onClick: function onClick() {
              return _this2.setReadOnly(false);
            } }, others), _render ? _render(value, record, dataIndex, rowIndex) : value);
        } else if (editable.type === 'dropdown') {
          return _react2.default.createElement('div', _extends({ className: cls, style: style }, others), _react2.default.createElement(_form.Dropdown, { value: value, store: editable.store, fieldLabel: editable.fieldLabel, onSelect: function onSelect(rec) {
              return _this2.setValue(rec.data);
            }, onCollapse: this.afterEdit }));
        } else {
          return _react2.default.createElement('div', _extends({ className: cls, style: style }, others), _react2.default.createElement(_form.Field, { value: value, autoFocus: true, onChange: this.setValue, onBlur: this.afterEdit }));
        }
      }

      return _react2.default.createElement('div', _extends({ className: cls, style: style }, others), _render ? _render(value, record, dataIndex, rowIndex) : value);
    }
  }, {
    key: 'reload',
    value: function reload() {
      var _props = this.props,
          record = _props.record,
          dataIndex = _props.dataIndex;

      this.setValue(dataIndex ? record.get(dataIndex) : '');
    }
  }, {
    key: 'afterEdit',
    value: function afterEdit(value) {
      var _props2 = this.props,
          record = _props2.record,
          dataIndex = _props2.dataIndex;

      record.set(dataIndex, value);
      this.setReadOnly(true);
    }
  }]);

  return GridCell;
}(_react.Component), (_applyDecoratedDescriptor(_class.prototype, 'render', [_withProps2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'reload', [_bind2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'reload'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'afterEdit', [_bind2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'afterEdit'), _class.prototype)), _class);
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

var _form = require('../form');

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
      var width = _ref.width,
          headerWidth = _ref.headerWidth,
          checkColumn = _ref.checkColumn,
          total = _ref.total,
          columns = _ref.columns;

      return _react2.default.createElement('section', { className: 'rx-grid-header', style: { width: width } }, _react2.default.createElement('div', { className: 'rx-grid-header-container d-flex flex-row', style: { width: headerWidth } }, checkColumn && _react2.default.createElement('div', { className: 'rx-grid-column-header text-sm-center', style: { width: 26 } }, checkColumn === 'multiple' && _react2.default.createElement(_form.Checkbox, { disabled: total === 0 })), columns && columns.map(function (col) {
        var _col$text = col.text,
            text = _col$text === undefined ? '' : _col$text,
            _col$className = col.className,
            className = _col$className === undefined ? '' : _col$className,
            others = _objectWithoutProperties(col, ['text', 'className']);

        return _react2.default.createElement('div', _extends({ className: 'rx-grid-column-header text-center ' + className }, others), text);
      })));
    }
  }]);

  return GridHeader;
}(_react.Component), _applyDecoratedDescriptor(_class.prototype, 'render', [_withProps2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype), _class);
exports.default = GridHeader;

},{"../../mixin/with-props":24,"../form":4,"react":"react"}],9:[function(require,module,exports){
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

var _bind = require('../../mixin/bind');

var _bind2 = _interopRequireDefault(_bind);

var _form = require('../form');

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

  function GridPagingToolbar(props) {
    _classCallCheck(this, GridPagingToolbar);

    var _this = _possibleConstructorReturn(this, (GridPagingToolbar.__proto__ || Object.getPrototypeOf(GridPagingToolbar)).call(this, props));

    var _props$store = props.store,
        totalCount = _props$store.totalCount,
        currentPage = _props$store.currentPage;

    _this.state = {
      page: totalCount === 0 ? 0 : currentPage
    };
    Ext.generateSetter(_this.state, _this);
    return _this;
  }

  _createClass(GridPagingToolbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.store.subscribe(this.reload);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.store.unsubscribe(this.reload);
    }
  }, {
    key: 'render',
    value: function render(_ref) {
      var _this2 = this;

      var _ref$store = _ref.store,
          totalCount = _ref$store.totalCount,
          pageSize = _ref$store.pageSize,
          currentPage = _ref$store.currentPage;
      var page = this.state.page,
          firstIndex = (currentPage - 1) * pageSize + 1,
          lastIndex = currentPage * pageSize,
          totalPages = Math.ceil(totalCount / pageSize) || 0;

      return _react2.default.createElement('section', { className: 'toolbar top row' }, _react2.default.createElement('div', { className: 'col-6' }, totalCount > 0 && 'Displaying ' + firstIndex + ' - ' + lastIndex + ' of ' + totalCount), _react2.default.createElement('div', { className: 'col-6' }, _react2.default.createElement('div', { className: 'float-sm-right' }, _react2.default.createElement('div', { className: 'input-group input-group-sm' }, _react2.default.createElement('span', { className: 'input-group-btn' }, _react2.default.createElement(_form.Btn, { disabled: totalCount === 0, onClick: function onClick() {
          return _this2.loadPage(currentPage);
        } }, _react2.default.createElement('i', { className: 'fa fa-refresh' }))), _react2.default.createElement('span', { className: 'input-group-btn' }, _react2.default.createElement(_form.Btn, { disabled: currentPage === 1, onClick: function onClick() {
          return _this2.loadPage(1);
        } }, _react2.default.createElement('i', { className: 'fa fa-fast-backward' }))), _react2.default.createElement('span', { className: 'input-group-btn' }, _react2.default.createElement(_form.Btn, { disabled: currentPage === 1, onClick: function onClick() {
          return _this2.loadPage(currentPage - 1);
        } }, _react2.default.createElement('i', { className: 'fa fa-backward' }))), _react2.default.createElement('span', { className: 'input-group-addon' }, 'Page'), _react2.default.createElement(_form.Field, { value: page, className: 'w5 text-sm-center', disabled: page === 0, onChange: this.setPage, onEnter: function onEnter(page) {
          return _this2.loadPage(page);
        } }), _react2.default.createElement('span', { className: 'input-group-addon' }, 'of ', totalPages), _react2.default.createElement('span', { className: 'input-group-btn' }, _react2.default.createElement(_form.Btn, { disabled: totalPages === 0 || currentPage === totalPages, onClick: function onClick() {
          return _this2.loadPage(currentPage + 1);
        } }, _react2.default.createElement('i', { className: 'fa fa-forward' }))), _react2.default.createElement('span', { className: 'input-group-btn' }, _react2.default.createElement(_form.Btn, { disabled: totalPages === 0 || currentPage === totalPages, onClick: function onClick() {
          return _this2.loadPage(totalPages);
        } }, _react2.default.createElement('i', { className: 'fa fa-fast-forward' })))))));
    }
  }, {
    key: 'reload',
    value: function reload(store) {
      this.setPage(store.totalCount === 0 ? 0 : store.currentPage);
    }
  }, {
    key: 'loadPage',
    value: function loadPage(number) {
      var store = this.props.store,
          totalPages = Math.ceil(store.totalCount / store.pageSize) || 0;

      if (0 < number && number <= totalPages) {
        store.loadPage(number);
      } else {
        this.setPage(store.currentPage);
      }
    }
  }]);

  return GridPagingToolbar;
}(_react.Component), (_applyDecoratedDescriptor(_class.prototype, 'render', [_withProps2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'reload', [_bind2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'reload'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'loadPage', [_bind2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'loadPage'), _class.prototype)), _class);
exports.default = GridPagingToolbar;

},{"../../mixin/bind":22,"../../mixin/with-props":24,"../form":4,"react":"react"}],10:[function(require,module,exports){
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

var _form = require('../form');

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
      var checkColumn = _ref.checkColumn,
          columns = _ref.columns,
          record = _ref.record,
          rowIndex = _ref.rowIndex;

      return _react2.default.createElement('article', { className: 'rx-grid-row d-flex flex-row' }, checkColumn && _react2.default.createElement('div', { className: 'rx-grid-cell text-sm-center', style: { width: 26 } }, _react2.default.createElement(_form.Checkbox, null)), columns && columns.map(function (col) {
        return _react2.default.createElement(_cell2.default, _extends({ record: record, rowIndex: rowIndex }, col));
      }));
    }
  }]);

  return GridRow;
}(_react.Component), _applyDecoratedDescriptor(_class.prototype, 'render', [_withProps2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype), _class);
exports.default = GridRow;

},{"../../mixin/with-props":24,"../form":4,"./cell":7,"react":"react"}],11:[function(require,module,exports){
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

var _component = require('./component');

var _component2 = _interopRequireDefault(_component);

var _string = require('./string');

var _string2 = _interopRequireDefault(_string);

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

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
    key: 'clone',
    value: function clone(o) {
      return _extends({}, o); // new object, not by ref
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
    value: function className(expressions) {
      var _this = this;

      var cls = [];

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
  }, {
    key: 'generateSetter',
    value: function generateSetter(state, comp) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var field = _step.value;

          comp['set' + _string2.default.capitalize(field)] = function (value) {
            return comp.setState(function () {
              return _defineProperty({}, field, value);
            });
          };
        };

        for (var _iterator = Object.keys(state)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          _loop();
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

},{"./component":12,"./list":14,"./string":17}],14:[function(require,module,exports){
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

var _list = require('../core/list');

var _list2 = _interopRequireDefault(_list);

var _map = require('../core/map');

var _map2 = _interopRequireDefault(_map);

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

    this.data = data;
    this.store = store;
    this.fields = this.createFields(store && store.fields ? store.fields : Object.keys(this.data));
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
    }
  }, {
    key: 'reject',
    value: function reject() {
      this.data = _ext2.default.extend({}, this.phantom);
      this.save();
    }
  }, {
    key: 'isModified',
    value: function isModified(fieldName) {
      var _this = this;

      if (fieldName) {
        return !this.isEqual(this.fields[fieldName]);
      }

      return (0, _map2.default)(this.fields).values().contains(function (field) {
        return !_this.isEqual(field);
      });
    }
  }, {
    key: 'isEqual',
    value: function isEqual(field) {
      return !field ? true : field.equals ? field.equals(this.data[field.name], this.phantom[field.name]) : this.data[field.name] === this.phantom[field.name];
    }
  }, {
    key: 'createFields',
    value: function createFields(fields) {
      return (0, _list2.default)(fields).reduce(function (fieldByName, field) {
        if (_ext2.default.isObject(field)) {
          fieldByName[field.name] = field;
        } else {
          fieldByName[field] = { name: field };
        }
        return fieldByName;
      }, {});
    }
  }]);

  return Model;
}();

exports.default = Model;

},{"../core/ext":13,"../core/list":14,"../core/map":15,"../mixin/observable":23}],21:[function(require,module,exports){
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

      this.totalCount = 0;
      this.pageSize = 0;
      this.currentPage = 1;
      _ext2.default.extend(this, config, {
        observable: _observable2.default.create()
      });
      this.createRecord = function (record) {
        return new _model2.default(record, _this);
      };
      this.data = (0, _list2.default)(config.data || []).map(this.createRecord);
      this.subscribe = function (observer) {
        return _this.observable.subscribe(observer);
      };
      this.unsubscribe = function (observer) {
        return _this.observable.unsubscribe(observer);
      };
    }

    _createClass(DataStore, [{
      key: 'clearData',
      value: function clearData() {
        var silent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        this.data = (0, _list2.default)([]);
        if (!silent) {
          this.observable.call(this);
        }
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
                  proxy = _ext2.default.extend({}, this.proxy, proxy || {});
                  _context.next = 3;
                  return _ajax2.default.request(proxy);

                case 3:
                  response = _context.sent;

                  response && this.loadData(response);

                case 5:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function load(_x2) {
          return _ref.apply(this, arguments);
        }

        return load;
      }()
    }, {
      key: 'loadData',
      value: function loadData(data) {
        this.clearData(true);
        this.data = (0, _list2.default)((this.proxy && this.proxy.reader && this.proxy.reader.rootProperty ? data[this.proxy.reader.rootProperty] : data) || []).map(this.createRecord);
        if (this.pageSize && data) {
          this.totalCount = data[this.proxy.reader.totalProperty] || this.count();
        }
        this.observable.call(this);
      }
    }, {
      key: 'loadPage',
      value: function loadPage(page) {
        this.currentPage = page;
        var proxy = _ext2.default.extend({}, this.proxy, { url: this.proxy.url + '?page=' + this.currentPage });
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
    }, {
      key: 'sync',
      value: function () {
        var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(proxy) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  proxy = _ext2.default.extend({}, this.proxy, proxy || {});
                  proxy.method = 'post';
                  proxy.params = (0, _list2.default)(this.getModifiedRecords()).map(function (record) {
                    return record.data;
                  }).collect();
                  if (proxy.writter && proxy.writter.transform) {
                    proxy.params = proxy.writter.transform(proxy.params);
                  }
                  _context2.next = 6;
                  return _ajax2.default.request(proxy);

                case 6:
                  return _context2.abrupt('return', _context2.sent);

                case 7:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function sync(_x3) {
          return _ref2.apply(this, arguments);
        }

        return sync;
      }()
    }, {
      key: 'getModifiedRecords',
      value: function getModifiedRecords() {
        return this.data.filter(function (record) {
          return record.isModified();
        });
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
          _react2.default.createElement('div', { text: 'Type', dataIndex: 'Type', className: 'text-center', style: { width: 100 }, editable: { type: 'dropdown', store: _cardType2.default, fieldLabel: 'Card Type' } }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkaXN0L2FwcC9jb21wb25lbnQuanMiLCJkaXN0L2FwcC9zZXJ2aWNlLmpzIiwiZGlzdC9jb21wb25lbnRzL2NvbnRhaW5lci5qcyIsImRpc3QvY29tcG9uZW50cy9mb3JtLmpzIiwiZGlzdC9jb21wb25lbnRzL2dyaWQuanMiLCJkaXN0L2NvbXBvbmVudHMvZ3JpZC9ib2R5LmpzIiwiZGlzdC9jb21wb25lbnRzL2dyaWQvY2VsbC5qcyIsImRpc3QvY29tcG9uZW50cy9ncmlkL2hlYWRlci5qcyIsImRpc3QvY29tcG9uZW50cy9ncmlkL3BhZ2luZy10b29sYmFyLmpzIiwiZGlzdC9jb21wb25lbnRzL2dyaWQvcm93LmpzIiwiZGlzdC9jb21wb25lbnRzL3JvdXRlci5qcyIsImRpc3QvY29yZS9jb21wb25lbnQuanMiLCJkaXN0L2NvcmUvZXh0LmpzIiwiZGlzdC9jb3JlL2xpc3QuanMiLCJkaXN0L2NvcmUvbWFwLmpzIiwiZGlzdC9jb3JlL251bWJlci5qcyIsImRpc3QvY29yZS9zdHJpbmcuanMiLCJkaXN0L2RhdGEvYWpheC5qcyIsImRpc3QvZGF0YS9jYWNoZS5qcyIsImRpc3QvZGF0YS9tb2RlbC5qcyIsImRpc3QvZGF0YS9zdG9yZS5qcyIsImRpc3QvbWl4aW4vYmluZC5qcyIsImRpc3QvbWl4aW4vb2JzZXJ2YWJsZS5qcyIsImRpc3QvbWl4aW4vd2l0aC1wcm9wcy5qcyIsImRpc3QvbWl4aW4vd2l0aC1zdGF0ZS5qcyIsImRpc3QvcmV4dC5qcyIsImV4YW1wbGUvanMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5qcyIsImV4YW1wbGUvanMvYXBwL2NvbXBvbmVudHMvbm90Zm91bmQvbm90Zm91bmQuanN4IiwiZXhhbXBsZS9qcy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLWZvcm0uanMiLCJleGFtcGxlL2pzL2FwcC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2gtZm9ybS52aWV3LmpzeCIsImV4YW1wbGUvanMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC1yZXN1bHQuanN4IiwiZXhhbXBsZS9qcy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmpzeCIsImV4YW1wbGUvanMvYXBwL2NvbXBvbmVudHMvdmlld3BvcnQvZm9vdGVyLmpzeCIsImV4YW1wbGUvanMvYXBwL2NvbXBvbmVudHMvdmlld3BvcnQvaGVhZGVyLmpzeCIsImV4YW1wbGUvanMvYXBwL2NvbXBvbmVudHMvdmlld3BvcnQvbmF2LmpzeCIsImV4YW1wbGUvanMvYXBwL2NvbXBvbmVudHMvdmlld3BvcnQvc2lkZS5qc3giLCJleGFtcGxlL2pzL2FwcC9jb21wb25lbnRzL3ZpZXdwb3J0L3ZpZXdwb3J0LmpzeCIsImV4YW1wbGUvanMvYXBwL21haW4uanMiLCJleGFtcGxlL2pzL2FwcC9zZXJ2aWNlcy9jb21tb24uanMiLCJleGFtcGxlL2pzL2FwcC9zdG9yZXMvY2FyZC10eXBlLmpzIiwiZXhhbXBsZS9qcy9hcHAvc3RvcmVzL2NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7OztBQUVBLE9BQU8sY0FBUCxDQUFzQixPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUMzQyxTQUFPO0FBRG9DLENBQTdDOztBQUlBLElBQUksV0FBVyxPQUFPLE1BQVAsSUFBaUIsVUFBVSxNQUFWLEVBQWtCO0FBQUUsT0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLFVBQVUsTUFBOUIsRUFBc0MsR0FBdEMsRUFBMkM7QUFBRSxRQUFJLFNBQVMsVUFBVSxDQUFWLENBQWIsQ0FBMkIsS0FBSyxJQUFJLEdBQVQsSUFBZ0IsTUFBaEIsRUFBd0I7QUFBRSxVQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxNQUFyQyxFQUE2QyxHQUE3QyxDQUFKLEVBQXVEO0FBQUUsZUFBTyxHQUFQLElBQWMsT0FBTyxHQUFQLENBQWQ7QUFBNEI7QUFBRTtB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TCw2REFESztBQUVMO0FBQUE7QUFBQSxZQUFXLFVBQVg7QUFDRTtBQUFBO0FBQUEsY0FBVyxJQUFHLGdCQUFkO0FBQ0UsOERBREY7QUFFRTtBQUZGO0FBREYsU0FGSztBQVFMO0FBUkssT0FBUDtBQVVEOzs7Ozs7Ozs7OztBQ25CSDs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxlQUFLLE1BQUwsMkNBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ0osaUJBQWMsT0FBZCxFQURJOztBQUFBO0FBQUEsMkNBRUgsdURBRkc7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBWjs7Ozs7Ozs7Ozs7Ozs7QUNUQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUtVLFdBQUssT0FBTCxDQUFhO0FBQ2pCLHVCQUFLLG9CQURZO0FBRWpCLHdCQUFNO0FBQUEsMkJBQWlCLFlBQU0sR0FBTixDQUFVLGVBQVYsRUFBMkIsYUFBM0IsQ0FBakI7QUFBQTtBQUZXLGlCQUFiLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xWOztrQkFFZSxpQkFBTTtBQUNuQixXQUFTLGVBRFU7QUFFbkIsUUFBTSxDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLE9BQW5CO0FBRmEsQ0FBTixDOzs7Ozs7Ozs7QUNGZjs7a0JBRWUsaUJBQU07QUFDbkIsV0FBUyxXQURVO0FBRW5CLFNBQU87QUFDTCxTQUFLLFlBREE7QUFFTCxZQUFRO0FBRkg7QUFGWSxDQUFOLEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfZXh0ID0gcmVxdWlyZSgnLi4vY29yZS9leHQnKTtcblxudmFyIF9leHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0KTtcblxudmFyIF9saXN0ID0gcmVxdWlyZSgnLi4vY29yZS9saXN0Jyk7XG5cbnZhciBfbGlzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saXN0KTtcblxudmFyIF9tYXAgPSByZXF1aXJlKCcuLi9jb3JlL21hcCcpO1xuXG52YXIgX21hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXApO1xuXG52YXIgX29ic2VydmFibGUgPSByZXF1aXJlKCcuLi9taXhpbi9vYnNlcnZhYmxlJyk7XG5cbnZhciBfb2JzZXJ2YWJsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYnNlcnZhYmxlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgdmFyIGdlbiA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IGZ1bmN0aW9uIHN0ZXAoa2V5LCBhcmcpIHsgdHJ5IHsgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpOyB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlOyB9IGNhdGNoIChlcnJvcikgeyByZWplY3QoZXJyb3IpOyByZXR1cm47IH0gaWYgKGluZm8uZG9uZSkgeyByZXNvbHZlKHZhbHVlKTsgfSBlbHNlIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHsgc3RlcChcIm5leHRcIiwgdmFsdWUpOyB9LCBmdW5jdGlvbiAoZXJyKSB7IHN0ZXAoXCJ0aHJvd1wiLCBlcnIpOyB9KTsgfSB9IHJldHVybiBzdGVwKFwibmV4dFwiKTsgfSk7IH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoY29tcCkge1xuICAgIHZhciBXcmFwcGVkQ29tcG9uZW50ID0gY29uZmlnLnZpZXc7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgICBfaW5oZXJpdHMoSG9jQ29tcG9uZW50LCBfQ29tcG9uZW50KTtcblxuICAgICAgZnVuY3Rpb24gSG9jQ29tcG9uZW50KHByb3BzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIb2NDb21wb25lbnQpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChIb2NDb21wb25lbnQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihIb2NDb21wb25lbnQpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgICAgX3RoaXMuc3RhdGUgPSBfZGVmaW5lUHJvcGVydHkoe1xuICAgICAgICAgIHN0b3Jlczoge31cbiAgICAgICAgfSwgY29uZmlnLmNvbXBvbmVudEFzIHx8ICd2bScsIG5ldyBjb21wKCkpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICB9XG5cbiAgICAgIF9jcmVhdGVDbGFzcyhIb2NDb21wb25lbnQsIFt7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxNb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICB2YXIgc3RvcmVzID0gKDAsIF9saXN0Mi5kZWZhdWx0KShjb25maWcuc3RvcmVzKS5yZWR1Y2UoZnVuY3Rpb24gKHN0b3Jlcywgc3RvcmUpIHtcbiAgICAgICAgICAgIHN0b3JlLnN1YnNjcmliZShfdGhpczIub25EYXRhQ2hhbmdlZC5iaW5kKF90aGlzMikpO1xuICAgICAgICAgICAgc3RvcmVzW3N0b3JlLnN0b3JlSWRdID0gc3RvcmU7XG4gICAgICAgICAgICByZXR1cm4gc3RvcmVzO1xuICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN0b3Jlczogc3RvcmVzIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBfcmVmID0gX2FzeW5jVG9HZW5lcmF0b3IocmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZSgpIHtcbiAgICAgICAgICAgIHZhciBzdG9yZXMsIHN0b3JlSWQ7XG4gICAgICAgICAgICByZXR1cm4gcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlcyA9IHRoaXMuc3RhdGUuc3RvcmVzO1xuICAgICAgICAgICAgICAgICAgICBfY29udGV4dC50MCA9IHJlZ2VuZXJhdG9yUnVudGltZS5rZXlzKHN0b3Jlcyk7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgaWYgKChfY29udGV4dC50MSA9IF9jb250ZXh0LnQwKCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gOTtcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlSWQgPSBfY29udGV4dC50MS52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIXN0b3Jlc1tzdG9yZUlkXS5hdXRvTG9hZCkge1xuICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA3O1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDc7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdG9yZXNbc3RvcmVJZF0ubG9hZCgpO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIF9jYWxsZWUsIHRoaXMpO1xuICAgICAgICAgIH0pKTtcblxuICAgICAgICAgIGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29tcG9uZW50RGlkTW91bnQ7XG4gICAgICAgIH0oKVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICgwLCBfbWFwMi5kZWZhdWx0KSh0aGlzLnN0YXRlLnN0b3JlcykuZWFjaChmdW5jdGlvbiAoc3RvcmVJZCwgc3RvcmUpIHtcbiAgICAgICAgICAgIHN0b3JlLnVuc3Vic2NyaWJlKF90aGlzMy5vbkRhdGFDaGFuZ2VkKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChXcmFwcGVkQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgdGhpcy5zdGF0ZSwgdGhpcy5wcm9wcykpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ29uRGF0YUNoYW5nZWQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25EYXRhQ2hhbmdlZChzdG9yZSkge1xuICAgICAgICAgIHZhciBzdG9yZXMgPSB0aGlzLnN0YXRlLnN0b3JlcztcblxuICAgICAgICAgIHN0b3Jlc1tzdG9yZS5zdG9yZUlkXSA9IHN0b3JlO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3RvcmVzOiBzdG9yZXMgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSG9jQ29tcG9uZW50O1xuICAgIH0oX3JlYWN0LkNvbXBvbmVudCk7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoU2VydmljZSkge1xuICByZXR1cm4gbmV3IFNlcnZpY2UoKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ29udGFpbmVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKENvbnRhaW5lciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ29udGFpbmVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChDb250YWluZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDb250YWluZXIpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDb250YWluZXIsIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgX3Byb3BzJGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzJGNsYXNzTmFtZSA9PT0gdW5kZWZpbmVkID8gJycgOiBfcHJvcHMkY2xhc3NOYW1lLFxuICAgICAgICAgIGhib3ggPSBfcHJvcHMuaGJveCxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBvdGhlcnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2NsYXNzTmFtZScsICdoYm94JywgJ2NoaWxkcmVuJ10pO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzZWN0aW9uJyxcbiAgICAgICAgX2V4dGVuZHMoeyBjbGFzc05hbWU6ICdkLWZsZXggZmxleC0nICsgKGhib3ggPyAncm93JyA6ICdjb2x1bW4nKSArICcgJyArIGNsYXNzTmFtZSB9LCBvdGhlcnMpLFxuICAgICAgICBjaGlsZHJlblxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ29udGFpbmVyO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ29udGFpbmVyOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuQ2hlY2tib3ggPSBleHBvcnRzLkRyb3Bkb3duID0gZXhwb3J0cy5CdXR0b24gPSBleHBvcnRzLkZpZWxkID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2Rlc2MsIF92YWx1ZSwgX2NsYXNzLCBfZGVzYzIsIF92YWx1ZTIsIF9jbGFzczIsIF9kZXNjMywgX3ZhbHVlMywgX2NsYXNzMywgX2Rlc2M0LCBfdmFsdWU0LCBfY2xhc3M0O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9leHQgPSByZXF1aXJlKCcuLi9jb3JlL2V4dCcpO1xuXG52YXIgX2V4dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHQpO1xuXG52YXIgX2xpc3QgPSByZXF1aXJlKCcuLi9jb3JlL2xpc3QnKTtcblxudmFyIF9saXN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpc3QpO1xuXG52YXIgX29ic2VydmFibGUgPSByZXF1aXJlKCcuLi9taXhpbi9vYnNlcnZhYmxlJyk7XG5cbnZhciBfb2JzZXJ2YWJsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYnNlcnZhYmxlKTtcblxudmFyIF93aXRoUHJvcHMgPSByZXF1aXJlKCcuLi9taXhpbi93aXRoLXByb3BzJyk7XG5cbnZhciBfd2l0aFByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dpdGhQcm9wcyk7XG5cbnZhciBfd2l0aFN0YXRlID0gcmVxdWlyZSgnLi4vbWl4aW4vd2l0aC1zdGF0ZScpO1xuXG52YXIgX3dpdGhTdGF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93aXRoU3RhdGUpO1xuXG52YXIgX2JpbmQgPSByZXF1aXJlKCcuLi9taXhpbi9iaW5kJyk7XG5cbnZhciBfYmluZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iaW5kKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgdmFyIGdlbiA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IGZ1bmN0aW9uIHN0ZXAoa2V5LCBhcmcpIHsgdHJ5IHsgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpOyB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlOyB9IGNhdGNoIChlcnJvcikgeyByZWplY3QoZXJyb3IpOyByZXR1cm47IH0gaWYgKGluZm8uZG9uZSkgeyByZXNvbHZlKHZhbHVlKTsgfSBlbHNlIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHsgc3RlcChcIm5leHRcIiwgdmFsdWUpOyB9LCBmdW5jdGlvbiAoZXJyKSB7IHN0ZXAoXCJ0aHJvd1wiLCBlcnIpOyB9KTsgfSB9IHJldHVybiBzdGVwKFwibmV4dFwiKTsgfSk7IH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eSwgZGVjb3JhdG9ycywgZGVzY3JpcHRvciwgY29udGV4dCkge1xuICB2YXIgZGVzYyA9IHt9O1xuICBPYmplY3RbJ2tlJyArICd5cyddKGRlc2NyaXB0b3IpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGRlc2Nba2V5XSA9IGRlc2NyaXB0b3Jba2V5XTtcbiAgfSk7XG4gIGRlc2MuZW51bWVyYWJsZSA9ICEhZGVzYy5lbnVtZXJhYmxlO1xuICBkZXNjLmNvbmZpZ3VyYWJsZSA9ICEhZGVzYy5jb25maWd1cmFibGU7XG5cbiAgaWYgKCd2YWx1ZScgaW4gZGVzYyB8fCBkZXNjLmluaXRpYWxpemVyKSB7XG4gICAgZGVzYy53cml0YWJsZSA9IHRydWU7XG4gIH1cblxuICBkZXNjID0gZGVjb3JhdG9ycy5zbGljZSgpLnJldmVyc2UoKS5yZWR1Y2UoZnVuY3Rpb24gKGRlc2MsIGRlY29yYXRvcikge1xuICAgIHJldHVybiBkZWNvcmF0b3IodGFyZ2V0LCBwcm9wZXJ0eSwgZGVzYykgfHwgZGVzYztcbiAgfSwgZGVzYyk7XG5cbiAgaWYgKGNvbnRleHQgJiYgZGVzYy5pbml0aWFsaXplciAhPT0gdm9pZCAwKSB7XG4gICAgZGVzYy52YWx1ZSA9IGRlc2MuaW5pdGlhbGl6ZXIgPyBkZXNjLmluaXRpYWxpemVyLmNhbGwoY29udGV4dCkgOiB2b2lkIDA7XG4gICAgZGVzYy5pbml0aWFsaXplciA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmIChkZXNjLmluaXRpYWxpemVyID09PSB2b2lkIDApIHtcbiAgICBPYmplY3RbJ2RlZmluZScgKyAnUHJvcGVydHknXSh0YXJnZXQsIHByb3BlcnR5LCBkZXNjKTtcbiAgICBkZXNjID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBkZXNjO1xufVxuXG52YXIgRmllbGQgPSBleHBvcnRzLkZpZWxkID0gKF9jbGFzcyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhGaWVsZCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRmllbGQocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRmllbGQpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEZpZWxkLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRmllbGQpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiBwcm9wcy52YWx1ZSB8fCAnJ1xuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEZpZWxkLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcihfcmVmKSB7XG4gICAgICB2YXIgX3JlZiRjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfcmVmJGNsYXNzTmFtZSA9PT0gdW5kZWZpbmVkID8gJycgOiBfcmVmJGNsYXNzTmFtZSxcbiAgICAgICAgICBvbkNoYW5nZSA9IF9yZWYub25DaGFuZ2UsXG4gICAgICAgICAgb25LZXlQcmVzcyA9IF9yZWYub25LZXlQcmVzcyxcbiAgICAgICAgICBvbkJsdXIgPSBfcmVmLm9uQmx1cixcbiAgICAgICAgICBvdGhlcnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWydjbGFzc05hbWUnLCAnb25DaGFuZ2UnLCAnb25LZXlQcmVzcycsICdvbkJsdXInXSk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCBfZXh0ZW5kcyh7IHR5cGU6ICd0ZXh0JywgdmFsdWU6IHRoaXMuc3RhdGUudmFsdWUsIGNsYXNzTmFtZTogJ2Zvcm0tY29udHJvbCAnICsgY2xhc3NOYW1lLFxuICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZSwgb25LZXlQcmVzczogdGhpcy5vbkVudGVyLCBvbkJsdXI6IHRoaXMub25CbHVyXG4gICAgICB9LCBvdGhlcnMpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbkNoYW5nZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2hhbmdlKGUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlIH07XG4gICAgICB9KTtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25FbnRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uRW50ZXIoZSkge1xuICAgICAgdmFyIHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG5cbiAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICB0aGlzLnByb3BzLm9uRW50ZXIgJiYgdGhpcy5wcm9wcy5vbkVudGVyKHZhbHVlKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkJsdXIgJiYgdGhpcy5wcm9wcy5vbkJsdXIodmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uQmx1cicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQmx1cihlKSB7XG4gICAgICB2YXIgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcblxuICAgICAgdGhpcy5wcm9wcy5vbkJsdXIgJiYgdGhpcy5wcm9wcy5vbkJsdXIodmFsdWUpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBGaWVsZDtcbn0oX3JlYWN0LkNvbXBvbmVudCksIChfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdyZW5kZXInLCBbX3dpdGhQcm9wczIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ3JlbmRlcicpLCBfY2xhc3MucHJvdG90eXBlKSwgX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAnb25DaGFuZ2UnLCBbX2JpbmQyLmRlZmF1bHRdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdvbkNoYW5nZScpLCBfY2xhc3MucHJvdG90eXBlKSwgX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAnb25FbnRlcicsIFtfYmluZDIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ29uRW50ZXInKSwgX2NsYXNzLnByb3RvdHlwZSksIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ29uQmx1cicsIFtfYmluZDIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ29uQmx1cicpLCBfY2xhc3MucHJvdG90eXBlKSksIF9jbGFzcyk7XG52YXIgQnV0dG9uID0gZXhwb3J0cy5CdXR0b24gPSAoX2NsYXNzMiA9IGZ1bmN0aW9uIChfQ29tcG9uZW50Mikge1xuICBfaW5oZXJpdHMoQnV0dG9uLCBfQ29tcG9uZW50Mik7XG5cbiAgZnVuY3Rpb24gQnV0dG9uKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCdXR0b24pO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChCdXR0b24uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihCdXR0b24pKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhCdXR0b24sIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKF9yZWYyKSB7XG4gICAgICB2YXIgdGV4dCA9IF9yZWYyLnRleHQsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcmVmMi5jaGlsZHJlbixcbiAgICAgICAgICBfcmVmMiRjbGFzc05hbWUgPSBfcmVmMi5jbGFzc05hbWUsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3JlZjIkY2xhc3NOYW1lID09PSB1bmRlZmluZWQgPyAnJyA6IF9yZWYyJGNsYXNzTmFtZSxcbiAgICAgICAgICBvdGhlcnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZjIsIFsndGV4dCcsICdjaGlsZHJlbicsICdjbGFzc05hbWUnXSk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2J1dHRvbicsXG4gICAgICAgIF9leHRlbmRzKHsgY2xhc3NOYW1lOiAnYnRuICcgKyBjbGFzc05hbWUgfSwgb3RoZXJzKSxcbiAgICAgICAgdGV4dCB8fCBjaGlsZHJlblxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQnV0dG9uO1xufShfcmVhY3QuQ29tcG9uZW50KSwgKF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzMi5wcm90b3R5cGUsICdyZW5kZXInLCBbX3dpdGhQcm9wczIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzMi5wcm90b3R5cGUsICdyZW5kZXInKSwgX2NsYXNzMi5wcm90b3R5cGUpKSwgX2NsYXNzMik7XG52YXIgRHJvcGRvd24gPSBleHBvcnRzLkRyb3Bkb3duID0gKF9jbGFzczMgPSBmdW5jdGlvbiAoX0NvbXBvbmVudDMpIHtcbiAgX2luaGVyaXRzKERyb3Bkb3duLCBfQ29tcG9uZW50Myk7XG5cbiAgZnVuY3Rpb24gRHJvcGRvd24ocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRHJvcGRvd24pO1xuXG4gICAgdmFyIF90aGlzMyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChEcm9wZG93bi5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKERyb3Bkb3duKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgdmFyIGRhdGEgPSBbXSxcbiAgICAgICAgc2VsZWN0aW9uID0gKDAsIF9saXN0Mi5kZWZhdWx0KShwcm9wcy52YWx1ZSA/IFtwcm9wcy52YWx1ZV0gOiBkYXRhKTtcbiAgICBfdGhpczMuc3RhdGUgPSB7XG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgc2VsZWN0aW9uOiBzZWxlY3Rpb24sXG4gICAgICBzZWFyY2hGaWx0ZXI6ICcnLFxuICAgICAgbXVsdGlwbGU6IGZhbHNlLFxuICAgICAgc2hvdzogZmFsc2VcbiAgICB9O1xuICAgIHJldHVybiBfdGhpczM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRHJvcGRvd24sIFt7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgX29ic2VydmFibGUyLmRlZmF1bHQuZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKS5zdWJzY3JpYmUodGhpcy5jbG9zZU9uQmx1cik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIF9vYnNlcnZhYmxlMi5kZWZhdWx0LmZyb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJykudW5zdWJzY3JpYmUodGhpcy5jbG9zZU9uQmx1cik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKF9yZWYzKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgdmFyIF9yZWYzJGNsYXNzTmFtZSA9IF9yZWYzLmNsYXNzTmFtZSxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfcmVmMyRjbGFzc05hbWUgPT09IHVuZGVmaW5lZCA/ICcnIDogX3JlZjMkY2xhc3NOYW1lLFxuICAgICAgICAgIGZpZWxkTGFiZWwgPSBfcmVmMy5maWVsZExhYmVsLFxuICAgICAgICAgIF9yZWYzJGRpc3BsYXlGaWVsZCA9IF9yZWYzLmRpc3BsYXlGaWVsZCxcbiAgICAgICAgICBkaXNwbGF5RmllbGQgPSBfcmVmMyRkaXNwbGF5RmllbGQgPT09IHVuZGVmaW5lZCA/ICduYW1lJyA6IF9yZWYzJGRpc3BsYXlGaWVsZCxcbiAgICAgICAgICBvdGhlcnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZjMsIFsnY2xhc3NOYW1lJywgJ2ZpZWxkTGFiZWwnLCAnZGlzcGxheUZpZWxkJ10pO1xuXG4gICAgICB2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBzaG93ID0gX3N0YXRlLnNob3csXG4gICAgICAgICAgZGF0YSA9IF9zdGF0ZS5kYXRhLFxuICAgICAgICAgIHNlbGVjdGlvbiA9IF9zdGF0ZS5zZWxlY3Rpb24sXG4gICAgICAgICAgc2VhcmNoRmlsdGVyID0gX3N0YXRlLnNlYXJjaEZpbHRlcjtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc2VjdGlvbicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAnZHJvcGRvd24gJyArIGNsYXNzTmFtZSB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChGaWVsZCwgeyBjbGFzc05hbWU6ICdkcm9wZG93bi10ZXh0JywgdmFsdWU6IHNlbGVjdGlvbi5tYXAoZnVuY3Rpb24gKHJlYykge1xuICAgICAgICAgICAgcmV0dXJuIHJlYy5nZXQgPyByZWMuZ2V0KGRpc3BsYXlGaWVsZCkgOiByZWM7XG4gICAgICAgICAgfSkuY29sbGVjdCgpLmpvaW4oJywnKSB8fCBmaWVsZExhYmVsLCByZWFkT25seTogdHJ1ZSB9KSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IGNsYXNzTmFtZTogJ2Ryb3Bkb3duLXRvZ2dsZScsIG9uQ2xpY2s6IHRoaXMudG9nZ2xlIH0pLFxuICAgICAgICBzaG93ICYmIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAnZHJvcGRvd24tbWVudScgfSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdkcm9wZG93bi1hY3Rpb24nIH0sXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChGaWVsZCwgeyB2YWx1ZTogc2VhcmNoRmlsdGVyIHx8ICcnLCBvbkNoYW5nZTogdGhpcy5maWx0ZXIsIHBsYWNlaG9sZGVyOiAnU2VhcmNoLi4uJyB9KVxuICAgICAgICAgICksXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnZHJvcGRvd24tbGlzdCcgfSxcbiAgICAgICAgICAgIGRhdGEubWFwKGZ1bmN0aW9uIChyZWMpIHtcbiAgICAgICAgICAgICAgdmFyIGNsYXNzTmFtZSA9IF9leHQyLmRlZmF1bHQuY2xhc3NOYW1lKFsnZHJvcGRvd24taXRlbScsIHsgJ3NlbGVjdGVkJzogc2VsZWN0aW9uLmNvbnRhaW5zKGZ1bmN0aW9uIChzZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChzZWxlY3RlZC5nZXQgPyBzZWxlY3RlZC5nZXQoZGlzcGxheUZpZWxkKSA6IHNlbGVjdGVkKSA9PT0gcmVjLmdldChkaXNwbGF5RmllbGQpO1xuICAgICAgICAgICAgICAgIH0pIH1dKTtcbiAgICAgICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXM0LnNlbGVjdChyZWMpO1xuICAgICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgIHJlYy5nZXQgPyByZWMuZ2V0KGRpc3BsYXlGaWVsZCkgOiByZWNcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RvZ2dsZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfcmVmNCA9IF9hc3luY1RvR2VuZXJhdG9yKHJlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUoKSB7XG4gICAgICAgIHZhciBzaG93LCBfcHJvcHMsIG9uQ29sbGFwc2UsIHN0b3JlLCBfc3RhdGUyLCBtdWx0aXBsZSwgc2VsZWN0aW9uLCBfcHJvcHMyLCBfc3RvcmUsIHF1ZXJ5TW9kZSwgZGF0YTtcblxuICAgICAgICByZXR1cm4gcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgc2hvdyA9IHRoaXMuc3RhdGUuc2hvdztcblxuICAgICAgICAgICAgICAgIHNob3cgPSAhc2hvdztcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7IHNob3c6IHNob3cgfTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChzaG93KSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gOTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF9wcm9wcyA9IHRoaXMucHJvcHMsIG9uQ29sbGFwc2UgPSBfcHJvcHMub25Db2xsYXBzZSwgc3RvcmUgPSBfcHJvcHMuc3RvcmUsIF9zdGF0ZTIgPSB0aGlzLnN0YXRlLCBtdWx0aXBsZSA9IF9zdGF0ZTIubXVsdGlwbGUsIHNlbGVjdGlvbiA9IF9zdGF0ZTIuc2VsZWN0aW9uO1xuXG4gICAgICAgICAgICAgICAgb25Db2xsYXBzZSAmJiBvbkNvbGxhcHNlKG11bHRpcGxlID8gc2VsZWN0aW9uLm1hcChmdW5jdGlvbiAocmVjKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVjLmRhdGE7XG4gICAgICAgICAgICAgICAgfSkuY29sbGVjdCgpIDogc2VsZWN0aW9uLmNvbGxlY3QoKVswXS5kYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7IHNlYXJjaEZpbHRlcjogJycsIGRhdGE6IHN0b3JlLmdldERhdGEoKSB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxNztcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgX3Byb3BzMiA9IHRoaXMucHJvcHMsIF9zdG9yZSA9IF9wcm9wczIuc3RvcmUsIHF1ZXJ5TW9kZSA9IF9wcm9wczIucXVlcnlNb2RlO1xuICAgICAgICAgICAgICAgIGRhdGEgPSB0aGlzLnN0YXRlLmRhdGE7XG5cbiAgICAgICAgICAgICAgICBpZiAoISghZGF0YSB8fCAhZGF0YS5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTc7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIShxdWVyeU1vZGUgPT09ICdyZW1vdGUnKSkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDE1O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDE1O1xuICAgICAgICAgICAgICAgIHJldHVybiBfc3RvcmUubG9hZCgpO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgICAgICAgZGF0YSA9IF9zdG9yZS5nZXREYXRhKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4geyBkYXRhOiBkYXRhIH07XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxNzpcbiAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZSwgdGhpcyk7XG4gICAgICB9KSk7XG5cbiAgICAgIGZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgICAgICAgcmV0dXJuIF9yZWY0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0b2dnbGU7XG4gICAgfSgpXG4gIH0sIHtcbiAgICBrZXk6ICdzZWxlY3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZWxlY3QocmVjKSB7XG4gICAgICB2YXIgb25TZWxlY3QgPSB0aGlzLnByb3BzLm9uU2VsZWN0O1xuXG4gICAgICBvblNlbGVjdCAmJiBvblNlbGVjdChyZWMpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGlvbjogKDAsIF9saXN0Mi5kZWZhdWx0KShbcmVjXSkgfSwgdGhpcy50b2dnbGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2ZpbHRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZpbHRlcihzZWFyY2hGaWx0ZXIpIHtcbiAgICAgIHZhciBfcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBzdG9yZSA9IF9wcm9wczMuc3RvcmUsXG4gICAgICAgICAgZGlzcGxheUZpZWxkID0gX3Byb3BzMy5kaXNwbGF5RmllbGQ7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHNlYXJjaEZpbHRlcjogc2VhcmNoRmlsdGVyLFxuICAgICAgICAgIGRhdGE6IHN0b3JlLmZpbHRlckJ5KGZ1bmN0aW9uIChyZWMpIHtcbiAgICAgICAgICAgIHJldHVybiByZWMuZ2V0KGRpc3BsYXlGaWVsZCkudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKHNlYXJjaEZpbHRlci50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICB9KS5jb2xsZWN0KClcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Nsb3NlT25CbHVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2VPbkJsdXIoZSkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvdykge1xuICAgICAgICB2YXIgbm9kZSA9IG51bGw7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbm9kZSA9ICgwLCBfcmVhY3REb20uZmluZERPTU5vZGUpKHRoaXMpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgbm9kZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfdGFyZ2V0ID0gZS50YXJnZXQucGFyZW50RWxlbWVudCxcbiAgICAgICAgICAgIHBhcmVudEZvdW5kID0gZmFsc2U7XG4gICAgICAgIHdoaWxlIChfdGFyZ2V0ICE9IG51bGwpIHtcbiAgICAgICAgICBpZiAoX3RhcmdldCA9PT0gbm9kZSkge1xuICAgICAgICAgICAgcGFyZW50Rm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIF90YXJnZXQgPSBfdGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXBhcmVudEZvdW5kKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBEcm9wZG93bjtcbn0oX3JlYWN0LkNvbXBvbmVudCksIChfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzczMucHJvdG90eXBlLCAncmVuZGVyJywgW193aXRoUHJvcHMyLmRlZmF1bHRdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzczMucHJvdG90eXBlLCAncmVuZGVyJyksIF9jbGFzczMucHJvdG90eXBlKSwgX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MzLnByb3RvdHlwZSwgJ3RvZ2dsZScsIFtfYmluZDIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzMy5wcm90b3R5cGUsICd0b2dnbGUnKSwgX2NsYXNzMy5wcm90b3R5cGUpLCBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzczMucHJvdG90eXBlLCAnc2VsZWN0JywgW19iaW5kMi5kZWZhdWx0XSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfY2xhc3MzLnByb3RvdHlwZSwgJ3NlbGVjdCcpLCBfY2xhc3MzLnByb3RvdHlwZSksIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzMy5wcm90b3R5cGUsICdmaWx0ZXInLCBbX2JpbmQyLmRlZmF1bHRdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzczMucHJvdG90eXBlLCAnZmlsdGVyJyksIF9jbGFzczMucHJvdG90eXBlKSwgX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MzLnByb3RvdHlwZSwgJ2Nsb3NlT25CbHVyJywgW19iaW5kMi5kZWZhdWx0XSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfY2xhc3MzLnByb3RvdHlwZSwgJ2Nsb3NlT25CbHVyJyksIF9jbGFzczMucHJvdG90eXBlKSksIF9jbGFzczMpO1xudmFyIENoZWNrYm94ID0gZXhwb3J0cy5DaGVja2JveCA9IChfY2xhc3M0ID0gZnVuY3Rpb24gKF9Db21wb25lbnQ0KSB7XG4gIF9pbmhlcml0cyhDaGVja2JveCwgX0NvbXBvbmVudDQpO1xuXG4gIGZ1bmN0aW9uIENoZWNrYm94KHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENoZWNrYm94KTtcblxuICAgIHZhciBfdGhpczUgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ2hlY2tib3guX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDaGVja2JveCkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzNS5zdGF0ZSA9IHtcbiAgICAgIGNoZWNrZWQ6IHByb3BzLmNoZWNrZWRcbiAgICB9O1xuICAgIHJldHVybiBfdGhpczU7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ2hlY2tib3gsIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIGNoZWNrZWQgPSB0aGlzLnN0YXRlLmNoZWNrZWQsXG4gICAgICAgICAgb3RoZXJzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHRoaXMucHJvcHMsIFtdKTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIF9leHRlbmRzKHsgdHlwZTogJ2NoZWNrYm94JywgY2hlY2tlZDogY2hlY2tlZCwgb25DaGFuZ2U6IHRoaXMudG9nZ2xlQ2hlY2sgfSwgb3RoZXJzKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndG9nZ2xlQ2hlY2snLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b2dnbGVDaGVjaygpIHtcbiAgICAgIHZhciBjaGVja2VkID0gdGhpcy5zdGF0ZS5jaGVja2VkO1xuXG4gICAgICBjaGVja2VkID0gIWNoZWNrZWQ7XG4gICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHsgY2hlY2tlZDogY2hlY2tlZCB9O1xuICAgICAgfSk7XG4gICAgICB2YXIgX3Byb3BzNCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgb25DaGVja0NoYW5nZSA9IF9wcm9wczQub25DaGVja0NoYW5nZSxcbiAgICAgICAgICBtb2RlbCA9IF9wcm9wczQubW9kZWw7XG5cbiAgICAgIG9uQ2hlY2tDaGFuZ2UgJiYgb25DaGVja0NoYW5nZShjaGVja2VkLCBtb2RlbCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENoZWNrYm94O1xufShfcmVhY3QuQ29tcG9uZW50KSwgKF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzNC5wcm90b3R5cGUsICd0b2dnbGVDaGVjaycsIFtfYmluZDIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzNC5wcm90b3R5cGUsICd0b2dnbGVDaGVjaycpLCBfY2xhc3M0LnByb3RvdHlwZSkpLCBfY2xhc3M0KTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZGVzYywgX3ZhbHVlLCBfY2xhc3M7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9saXN0ID0gcmVxdWlyZSgnLi4vY29yZS9saXN0Jyk7XG5cbnZhciBfbGlzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saXN0KTtcblxudmFyIF9udW1iZXIgPSByZXF1aXJlKCcuLi9jb3JlL251bWJlcicpO1xuXG52YXIgX251bWJlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9udW1iZXIpO1xuXG52YXIgX2V4dCA9IHJlcXVpcmUoJy4uL2NvcmUvZXh0Jyk7XG5cbnZhciBfZXh0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dCk7XG5cbnZhciBfb2JzZXJ2YWJsZSA9IHJlcXVpcmUoJy4uL21peGluL29ic2VydmFibGUnKTtcblxudmFyIF9vYnNlcnZhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29ic2VydmFibGUpO1xuXG52YXIgX3dpdGhQcm9wcyA9IHJlcXVpcmUoJy4uL21peGluL3dpdGgtcHJvcHMnKTtcblxudmFyIF93aXRoUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2l0aFByb3BzKTtcblxudmFyIF9iaW5kID0gcmVxdWlyZSgnLi4vbWl4aW4vYmluZCcpO1xuXG52YXIgX2JpbmQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmluZCk7XG5cbnZhciBfY29udGFpbmVyID0gcmVxdWlyZSgnLi9jb250YWluZXInKTtcblxudmFyIF9jb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29udGFpbmVyKTtcblxudmFyIF9oZWFkZXIgPSByZXF1aXJlKCcuL2dyaWQvaGVhZGVyJyk7XG5cbnZhciBfaGVhZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlYWRlcik7XG5cbnZhciBfYm9keSA9IHJlcXVpcmUoJy4vZ3JpZC9ib2R5Jyk7XG5cbnZhciBfYm9keTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ib2R5KTtcblxudmFyIF9wYWdpbmdUb29sYmFyID0gcmVxdWlyZSgnLi9ncmlkL3BhZ2luZy10b29sYmFyJyk7XG5cbnZhciBfcGFnaW5nVG9vbGJhcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYWdpbmdUb29sYmFyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKHRhcmdldCwgcHJvcGVydHksIGRlY29yYXRvcnMsIGRlc2NyaXB0b3IsIGNvbnRleHQpIHtcbiAgdmFyIGRlc2MgPSB7fTtcbiAgT2JqZWN0WydrZScgKyAneXMnXShkZXNjcmlwdG9yKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBkZXNjW2tleV0gPSBkZXNjcmlwdG9yW2tleV07XG4gIH0pO1xuICBkZXNjLmVudW1lcmFibGUgPSAhIWRlc2MuZW51bWVyYWJsZTtcbiAgZGVzYy5jb25maWd1cmFibGUgPSAhIWRlc2MuY29uZmlndXJhYmxlO1xuXG4gIGlmICgndmFsdWUnIGluIGRlc2MgfHwgZGVzYy5pbml0aWFsaXplcikge1xuICAgIGRlc2Mud3JpdGFibGUgPSB0cnVlO1xuICB9XG5cbiAgZGVzYyA9IGRlY29yYXRvcnMuc2xpY2UoKS5yZXZlcnNlKCkucmVkdWNlKGZ1bmN0aW9uIChkZXNjLCBkZWNvcmF0b3IpIHtcbiAgICByZXR1cm4gZGVjb3JhdG9yKHRhcmdldCwgcHJvcGVydHksIGRlc2MpIHx8IGRlc2M7XG4gIH0sIGRlc2MpO1xuXG4gIGlmIChjb250ZXh0ICYmIGRlc2MuaW5pdGlhbGl6ZXIgIT09IHZvaWQgMCkge1xuICAgIGRlc2MudmFsdWUgPSBkZXNjLmluaXRpYWxpemVyID8gZGVzYy5pbml0aWFsaXplci5jYWxsKGNvbnRleHQpIDogdm9pZCAwO1xuICAgIGRlc2MuaW5pdGlhbGl6ZXIgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAoZGVzYy5pbml0aWFsaXplciA9PT0gdm9pZCAwKSB7XG4gICAgT2JqZWN0WydkZWZpbmUnICsgJ1Byb3BlcnR5J10odGFyZ2V0LCBwcm9wZXJ0eSwgZGVzYyk7XG4gICAgZGVzYyA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gZGVzYztcbn1cblxudmFyIEdyaWQgPSAoX2NsYXNzID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEdyaWQsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEdyaWQocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR3JpZCk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoR3JpZC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEdyaWQpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNvbHVtbnM6ICgwLCBfbGlzdDIuZGVmYXVsdCkoX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLnRvQXJyYXkocHJvcHMuY2hpbGRyZW4pKS5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIHJldHVybiBjaGlsZC5wcm9wcztcbiAgICAgIH0pLmNvbGxlY3QoKSxcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaW5uZXJXaWR0aDogMCxcbiAgICAgIGhlYWRlcldpZHRoOiAwLFxuICAgICAgYm9keVdpZHRoOiAwXG4gICAgfTtcbiAgICBfdGhpcy5yZWxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhHcmlkLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHt9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5yZXNpemVHcmlkKCk7XG4gICAgICB0aGlzLnByb3BzLnN0b3JlLnN1YnNjcmliZSh0aGlzLnJlbG9hZCk7XG4gICAgICBfb2JzZXJ2YWJsZTIuZGVmYXVsdC5mcm9tRXZlbnQod2luZG93LCAncmVzaXplJykuc3Vic2NyaWJlKHRoaXMucmVzaXplR3JpZCk7XG4gICAgICBfb2JzZXJ2YWJsZTIuZGVmYXVsdC5mcm9tRXZlbnQoX2V4dDIuZGVmYXVsdC5nZXRDb21wKHRoaXMpLmZpbmQoJy5yeC1ncmlkLWJvZHknKSwgJ3Njcm9sbCcpLnN1YnNjcmliZSh0aGlzLm9uU2Nyb2xsKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5wcm9wcy5zdG9yZS51bnN1YnNjcmliZSh0aGlzLnJlbG9hZCk7XG4gICAgICBfb2JzZXJ2YWJsZTIuZGVmYXVsdC5mcm9tRXZlbnQod2luZG93LCAncmVzaXplJykudW5zdWJzY3JpYmUodGhpcy5yZXNpemVHcmlkKTtcbiAgICAgIF9vYnNlcnZhYmxlMi5kZWZhdWx0LmZyb21FdmVudChfZXh0Mi5kZWZhdWx0LmdldENvbXAodGhpcykuZmluZCgnLnJ4LWdyaWQtYm9keScpLCAnc2Nyb2xsJykudW5zdWJzY3JpYmUodGhpcy5vblNjcm9sbCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKF9yZWYpIHtcbiAgICAgIHZhciBzdG9yZSA9IF9yZWYuc3RvcmUsXG4gICAgICAgICAgcGFnaW5nID0gX3JlZi5wYWdpbmc7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX2NvbnRhaW5lcjIuZGVmYXVsdCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgcGFnaW5nICYmIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9wYWdpbmdUb29sYmFyMi5kZWZhdWx0LCB7IHN0b3JlOiBzdG9yZSB9KSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgX2NvbnRhaW5lcjIuZGVmYXVsdCxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ3J4LWdyaWQnIH0sXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWRlcjIuZGVmYXVsdCwgX2V4dGVuZHMoeyB0b3RhbDogc3RvcmUuY291bnQoKSB9LCB0aGlzLnN0YXRlKSksXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2JvZHkyLmRlZmF1bHQsIF9leHRlbmRzKHsgZGF0YTogc3RvcmUuZ2V0RGF0YSgpIH0sIHRoaXMuc3RhdGUpKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Jlc2l6ZUdyaWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNpemVHcmlkKCkge1xuICAgICAgdmFyIGNvbHVtbnMgPSB0aGlzLnN0YXRlLmNvbHVtbnMsXG4gICAgICAgICAgbm9kZSA9IF9leHQyLmRlZmF1bHQuZ2V0Q29tcCh0aGlzKSxcbiAgICAgICAgICBwYXJlbnQgPSBub2RlLnBhcmVudCgpLFxuICAgICAgICAgIGZsZXhDb2x1bW5zID0gW107XG5cblxuICAgICAgdmFyIHdpZHRoID0gcGFyZW50LndpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gcGFyZW50LmhlaWdodCgpLFxuICAgICAgICAgIGlubmVyV2lkdGggPSAoMCwgX2xpc3QyLmRlZmF1bHQpKGNvbHVtbnMpLnJlZHVjZShmdW5jdGlvbiAoaW5uZXJXaWR0aCwgY29sKSB7XG4gICAgICAgIGlmIChjb2wuc3R5bGUgJiYgY29sLnN0eWxlLndpZHRoKSB7XG4gICAgICAgICAgaW5uZXJXaWR0aCArPSBjb2wuc3R5bGUud2lkdGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmxleENvbHVtbnMucHVzaChjb2wpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbm5lcldpZHRoO1xuICAgICAgfSwgMCksXG4gICAgICAgICAgaGVhZGVyV2lkdGggPSBpbm5lcldpZHRoICsgX2V4dDIuZGVmYXVsdC5TQ1JPTExfV0lEVEgsXG4gICAgICAgICAgYm9keVdpZHRoID0gaW5uZXJXaWR0aDtcblxuICAgICAgaWYgKGlubmVyV2lkdGggPCB3aWR0aCAmJiBmbGV4Q29sdW1ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciByZW1haW5XaWR0aCA9IHdpZHRoIC0gaW5uZXJXaWR0aCAtIF9leHQyLmRlZmF1bHQuU0NST0xMX1dJRFRIIC0gX2V4dDIuZGVmYXVsdC5CT1JERVJfV0lEVEgsXG4gICAgICAgICAgICByZW1haW5Db2x1bW4gPSBmbGV4Q29sdW1ucy5sZW5ndGg7XG4gICAgICAgICgwLCBfbGlzdDIuZGVmYXVsdCkoZmxleENvbHVtbnMpLmVhY2goZnVuY3Rpb24gKGNvbCkge1xuICAgICAgICAgICFjb2wuc3R5bGUgJiYgKGNvbC5zdHlsZSA9IHt9KTtcbiAgICAgICAgICB2YXIgd2lkdGggPSByZW1haW5Db2x1bW4gPT09IDEgPyByZW1haW5XaWR0aCA6IF9udW1iZXIyLmRlZmF1bHQucm91bmQocmVtYWluV2lkdGggLyByZW1haW5Db2x1bW4pO1xuICAgICAgICAgIGNvbC5zdHlsZS53aWR0aCA9IHdpZHRoO1xuICAgICAgICAgIHJlbWFpbldpZHRoIC09IHdpZHRoO1xuICAgICAgICAgIC0tcmVtYWluQ29sdW1uO1xuICAgICAgICB9KTtcbiAgICAgICAgaW5uZXJXaWR0aCA9IHdpZHRoO1xuICAgICAgICBoZWFkZXJXaWR0aCA9IHdpZHRoIC0gX2V4dDIuZGVmYXVsdC5CT1JERVJfV0lEVEg7XG4gICAgICAgIGJvZHlXaWR0aCA9IHdpZHRoIC0gX2V4dDIuZGVmYXVsdC5TQ1JPTExfV0lEVEggLSBfZXh0Mi5kZWZhdWx0LkJPUkRFUl9XSURUSDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7IGNvbHVtbnM6IGNvbHVtbnMsIHdpZHRoOiB3aWR0aCwgaW5uZXJXaWR0aDogaW5uZXJXaWR0aCwgaGVhZGVyV2lkdGg6IGhlYWRlcldpZHRoLCBib2R5V2lkdGg6IGJvZHlXaWR0aCB9O1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25TY3JvbGwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvblNjcm9sbCgpIHtcbiAgICAgIHZhciBub2RlID0gX2V4dDIuZGVmYXVsdC5nZXRDb21wKHRoaXMpO1xuICAgICAgbm9kZS5maW5kKCcucngtZ3JpZC1oZWFkZXInKS5zY3JvbGxMZWZ0ID0gbm9kZS5maW5kKCcucngtZ3JpZC1ib2R5Jykuc2Nyb2xsTGVmdDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gR3JpZDtcbn0oX3JlYWN0LkNvbXBvbmVudCksIChfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdyZW5kZXInLCBbX3dpdGhQcm9wczIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ3JlbmRlcicpLCBfY2xhc3MucHJvdG90eXBlKSwgX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAncmVzaXplR3JpZCcsIFtfYmluZDIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ3Jlc2l6ZUdyaWQnKSwgX2NsYXNzLnByb3RvdHlwZSksIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ29uU2Nyb2xsJywgW19iaW5kMi5kZWZhdWx0XSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAnb25TY3JvbGwnKSwgX2NsYXNzLnByb3RvdHlwZSkpLCBfY2xhc3MpO1xuZXhwb3J0cy5kZWZhdWx0ID0gR3JpZDsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZGVzYywgX3ZhbHVlLCBfY2xhc3M7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF93aXRoUHJvcHMgPSByZXF1aXJlKCcuLi8uLi9taXhpbi93aXRoLXByb3BzJyk7XG5cbnZhciBfd2l0aFByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dpdGhQcm9wcyk7XG5cbnZhciBfY29udGFpbmVyID0gcmVxdWlyZSgnLi4vY29udGFpbmVyJyk7XG5cbnZhciBfY29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRhaW5lcik7XG5cbnZhciBfcm93ID0gcmVxdWlyZSgnLi9yb3cnKTtcblxudmFyIF9yb3cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcm93KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eSwgZGVjb3JhdG9ycywgZGVzY3JpcHRvciwgY29udGV4dCkge1xuICB2YXIgZGVzYyA9IHt9O1xuICBPYmplY3RbJ2tlJyArICd5cyddKGRlc2NyaXB0b3IpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGRlc2Nba2V5XSA9IGRlc2NyaXB0b3Jba2V5XTtcbiAgfSk7XG4gIGRlc2MuZW51bWVyYWJsZSA9ICEhZGVzYy5lbnVtZXJhYmxlO1xuICBkZXNjLmNvbmZpZ3VyYWJsZSA9ICEhZGVzYy5jb25maWd1cmFibGU7XG5cbiAgaWYgKCd2YWx1ZScgaW4gZGVzYyB8fCBkZXNjLmluaXRpYWxpemVyKSB7XG4gICAgZGVzYy53cml0YWJsZSA9IHRydWU7XG4gIH1cblxuICBkZXNjID0gZGVjb3JhdG9ycy5zbGljZSgpLnJldmVyc2UoKS5yZWR1Y2UoZnVuY3Rpb24gKGRlc2MsIGRlY29yYXRvcikge1xuICAgIHJldHVybiBkZWNvcmF0b3IodGFyZ2V0LCBwcm9wZXJ0eSwgZGVzYykgfHwgZGVzYztcbiAgfSwgZGVzYyk7XG5cbiAgaWYgKGNvbnRleHQgJiYgZGVzYy5pbml0aWFsaXplciAhPT0gdm9pZCAwKSB7XG4gICAgZGVzYy52YWx1ZSA9IGRlc2MuaW5pdGlhbGl6ZXIgPyBkZXNjLmluaXRpYWxpemVyLmNhbGwoY29udGV4dCkgOiB2b2lkIDA7XG4gICAgZGVzYy5pbml0aWFsaXplciA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmIChkZXNjLmluaXRpYWxpemVyID09PSB2b2lkIDApIHtcbiAgICBPYmplY3RbJ2RlZmluZScgKyAnUHJvcGVydHknXSh0YXJnZXQsIHByb3BlcnR5LCBkZXNjKTtcbiAgICBkZXNjID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBkZXNjO1xufVxuXG52YXIgR3JpZEJvZHkgPSAoX2NsYXNzID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEdyaWRCb2R5LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBHcmlkQm9keSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR3JpZEJvZHkpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChHcmlkQm9keS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEdyaWRCb2R5KSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoR3JpZEJvZHksIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKF9yZWYpIHtcbiAgICAgIHZhciBjb2x1bW5zID0gX3JlZi5jb2x1bW5zLFxuICAgICAgICAgIHdpZHRoID0gX3JlZi53aWR0aCxcbiAgICAgICAgICBib2R5V2lkdGggPSBfcmVmLmJvZHlXaWR0aCxcbiAgICAgICAgICBkYXRhID0gX3JlZi5kYXRhLFxuICAgICAgICAgIG90aGVycyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ2NvbHVtbnMnLCAnd2lkdGgnLCAnYm9keVdpZHRoJywgJ2RhdGEnXSk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX2NvbnRhaW5lcjIuZGVmYXVsdCxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdyeC1ncmlkLWJvZHknLCBzdHlsZTogeyB3aWR0aDogd2lkdGggfSB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnc2VjdGlvbicsXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdyeC1ncmlkLXZpZXcnLCBzdHlsZTogeyB3aWR0aDogYm9keVdpZHRoIH0gfSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBzdHlsZTogeyBoZWlnaHQ6IDEgfSB9KSxcbiAgICAgICAgICBkYXRhICYmIGRhdGEubWFwKGZ1bmN0aW9uIChyZWNvcmQsIHJvd0luZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JvdzIuZGVmYXVsdCwgX2V4dGVuZHMoeyByb3dJbmRleDogcm93SW5kZXgsIHJlY29yZDogcmVjb3JkLCBjb2x1bW5zOiBjb2x1bW5zIH0sIG90aGVycykpO1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEdyaWRCb2R5O1xufShfcmVhY3QuQ29tcG9uZW50KSwgKF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ3JlbmRlcicsIFtfd2l0aFByb3BzMi5kZWZhdWx0XSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAncmVuZGVyJyksIF9jbGFzcy5wcm90b3R5cGUpKSwgX2NsYXNzKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEdyaWRCb2R5OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9kZXNjLCBfdmFsdWUsIF9jbGFzcztcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2V4dCA9IHJlcXVpcmUoJy4uLy4uL2NvcmUvZXh0Jyk7XG5cbnZhciBfZXh0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dCk7XG5cbnZhciBfZm9ybSA9IHJlcXVpcmUoJy4uL2Zvcm0nKTtcblxudmFyIF93aXRoUHJvcHMgPSByZXF1aXJlKCcuLi8uLi9taXhpbi93aXRoLXByb3BzJyk7XG5cbnZhciBfd2l0aFByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dpdGhQcm9wcyk7XG5cbnZhciBfYmluZCA9IHJlcXVpcmUoJy4uLy4uL21peGluL2JpbmQnKTtcblxudmFyIF9iaW5kMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2JpbmQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZnVuY3Rpb24gX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcih0YXJnZXQsIHByb3BlcnR5LCBkZWNvcmF0b3JzLCBkZXNjcmlwdG9yLCBjb250ZXh0KSB7XG4gIHZhciBkZXNjID0ge307XG4gIE9iamVjdFsna2UnICsgJ3lzJ10oZGVzY3JpcHRvcikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgZGVzY1trZXldID0gZGVzY3JpcHRvcltrZXldO1xuICB9KTtcbiAgZGVzYy5lbnVtZXJhYmxlID0gISFkZXNjLmVudW1lcmFibGU7XG4gIGRlc2MuY29uZmlndXJhYmxlID0gISFkZXNjLmNvbmZpZ3VyYWJsZTtcblxuICBpZiAoJ3ZhbHVlJyBpbiBkZXNjIHx8IGRlc2MuaW5pdGlhbGl6ZXIpIHtcbiAgICBkZXNjLndyaXRhYmxlID0gdHJ1ZTtcbiAgfVxuXG4gIGRlc2MgPSBkZWNvcmF0b3JzLnNsaWNlKCkucmV2ZXJzZSgpLnJlZHVjZShmdW5jdGlvbiAoZGVzYywgZGVjb3JhdG9yKSB7XG4gICAgcmV0dXJuIGRlY29yYXRvcih0YXJnZXQsIHByb3BlcnR5LCBkZXNjKSB8fCBkZXNjO1xuICB9LCBkZXNjKTtcblxuICBpZiAoY29udGV4dCAmJiBkZXNjLmluaXRpYWxpemVyICE9PSB2b2lkIDApIHtcbiAgICBkZXNjLnZhbHVlID0gZGVzYy5pbml0aWFsaXplciA/IGRlc2MuaW5pdGlhbGl6ZXIuY2FsbChjb250ZXh0KSA6IHZvaWQgMDtcbiAgICBkZXNjLmluaXRpYWxpemVyID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKGRlc2MuaW5pdGlhbGl6ZXIgPT09IHZvaWQgMCkge1xuICAgIE9iamVjdFsnZGVmaW5lJyArICdQcm9wZXJ0eSddKHRhcmdldCwgcHJvcGVydHksIGRlc2MpO1xuICAgIGRlc2MgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGRlc2M7XG59XG5cbnZhciBHcmlkQ2VsbCA9IChfY2xhc3MgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoR3JpZENlbGwsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEdyaWRDZWxsKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdyaWRDZWxsKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChHcmlkQ2VsbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEdyaWRDZWxsKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgdmFyIHJlY29yZCA9IHByb3BzLnJlY29yZCxcbiAgICAgICAgZGF0YUluZGV4ID0gcHJvcHMuZGF0YUluZGV4O1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogZGF0YUluZGV4ID8gcmVjb3JkLmdldChkYXRhSW5kZXgpIDogJycsXG4gICAgICByZWFkT25seTogdHJ1ZVxuICAgIH07XG4gICAgX2V4dDIuZGVmYXVsdC5nZW5lcmF0ZVNldHRlcihfdGhpcy5zdGF0ZSwgX3RoaXMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhHcmlkQ2VsbCwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5wcm9wcy5yZWNvcmQuc3RvcmUuc3Vic2NyaWJlKHRoaXMucmVsb2FkKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5wcm9wcy5yZWNvcmQuc3RvcmUudW5zdWJzY3JpYmUodGhpcy5yZWxvYWQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcihfcmVmKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIF9yZWYkY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3JlZiRjbGFzc05hbWUgPT09IHVuZGVmaW5lZCA/ICcnIDogX3JlZiRjbGFzc05hbWUsXG4gICAgICAgICAgX3JlZiRzdHlsZSA9IF9yZWYuc3R5bGUsXG4gICAgICAgICAgc3R5bGUgPSBfcmVmJHN0eWxlID09PSB1bmRlZmluZWQgPyB7fSA6IF9yZWYkc3R5bGUsXG4gICAgICAgICAgX3JlbmRlciA9IF9yZWYucmVuZGVyLFxuICAgICAgICAgIHJlY29yZCA9IF9yZWYucmVjb3JkLFxuICAgICAgICAgIGRhdGFJbmRleCA9IF9yZWYuZGF0YUluZGV4LFxuICAgICAgICAgIHJvd0luZGV4ID0gX3JlZi5yb3dJbmRleCxcbiAgICAgICAgICBlZGl0YWJsZSA9IF9yZWYuZWRpdGFibGUsXG4gICAgICAgICAgb3RoZXJzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsnY2xhc3NOYW1lJywgJ3N0eWxlJywgJ3JlbmRlcicsICdyZWNvcmQnLCAnZGF0YUluZGV4JywgJ3Jvd0luZGV4JywgJ2VkaXRhYmxlJ10pO1xuXG4gICAgICB2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICB2YWx1ZSA9IF9zdGF0ZS52YWx1ZSxcbiAgICAgICAgICByZWFkT25seSA9IF9zdGF0ZS5yZWFkT25seSxcbiAgICAgICAgICBjbHMgPSBfZXh0Mi5kZWZhdWx0LmNsYXNzTmFtZShbJ3J4LWdyaWQtY2VsbCcsIGNsYXNzTmFtZSwgeyAnbW9kaWZpZWQnOiBkYXRhSW5kZXggJiYgcmVjb3JkLmlzTW9kaWZpZWQoZGF0YUluZGV4KSB9XSk7XG5cbiAgICAgIGlmIChlZGl0YWJsZSkge1xuICAgICAgICBpZiAocmVhZE9ubHkpIHtcbiAgICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIF9leHRlbmRzKHsgY2xhc3NOYW1lOiBjbHMsIHN0eWxlOiBzdHlsZSwgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLnNldFJlYWRPbmx5KGZhbHNlKTtcbiAgICAgICAgICAgICAgfSB9LCBvdGhlcnMpLFxuICAgICAgICAgICAgX3JlbmRlciA/IF9yZW5kZXIodmFsdWUsIHJlY29yZCwgZGF0YUluZGV4LCByb3dJbmRleCkgOiB2YWx1ZVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAoZWRpdGFibGUudHlwZSA9PT0gJ2Ryb3Bkb3duJykge1xuICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgX2V4dGVuZHMoeyBjbGFzc05hbWU6IGNscywgc3R5bGU6IHN0eWxlIH0sIG90aGVycyksXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfZm9ybS5Ecm9wZG93biwgeyB2YWx1ZTogdmFsdWUsIHN0b3JlOiBlZGl0YWJsZS5zdG9yZSwgZmllbGRMYWJlbDogZWRpdGFibGUuZmllbGRMYWJlbCwgb25TZWxlY3Q6IGZ1bmN0aW9uIG9uU2VsZWN0KHJlYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczIuc2V0VmFsdWUocmVjLmRhdGEpO1xuICAgICAgICAgICAgICB9LCBvbkNvbGxhcHNlOiB0aGlzLmFmdGVyRWRpdCB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICBfZXh0ZW5kcyh7IGNsYXNzTmFtZTogY2xzLCBzdHlsZTogc3R5bGUgfSwgb3RoZXJzKSxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9mb3JtLkZpZWxkLCB7IHZhbHVlOiB2YWx1ZSwgYXV0b0ZvY3VzOiB0cnVlLCBvbkNoYW5nZTogdGhpcy5zZXRWYWx1ZSwgb25CbHVyOiB0aGlzLmFmdGVyRWRpdCB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgX2V4dGVuZHMoeyBjbGFzc05hbWU6IGNscywgc3R5bGU6IHN0eWxlIH0sIG90aGVycyksXG4gICAgICAgIF9yZW5kZXIgPyBfcmVuZGVyKHZhbHVlLCByZWNvcmQsIGRhdGFJbmRleCwgcm93SW5kZXgpIDogdmFsdWVcbiAgICAgICk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVsb2FkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVsb2FkKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgcmVjb3JkID0gX3Byb3BzLnJlY29yZCxcbiAgICAgICAgICBkYXRhSW5kZXggPSBfcHJvcHMuZGF0YUluZGV4O1xuXG4gICAgICB0aGlzLnNldFZhbHVlKGRhdGFJbmRleCA/IHJlY29yZC5nZXQoZGF0YUluZGV4KSA6ICcnKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdhZnRlckVkaXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZnRlckVkaXQodmFsdWUpIHtcbiAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICByZWNvcmQgPSBfcHJvcHMyLnJlY29yZCxcbiAgICAgICAgICBkYXRhSW5kZXggPSBfcHJvcHMyLmRhdGFJbmRleDtcblxuICAgICAgcmVjb3JkLnNldChkYXRhSW5kZXgsIHZhbHVlKTtcbiAgICAgIHRoaXMuc2V0UmVhZE9ubHkodHJ1ZSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEdyaWRDZWxsO1xufShfcmVhY3QuQ29tcG9uZW50KSwgKF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ3JlbmRlcicsIFtfd2l0aFByb3BzMi5kZWZhdWx0XSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAncmVuZGVyJyksIF9jbGFzcy5wcm90b3R5cGUpLCBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdyZWxvYWQnLCBbX2JpbmQyLmRlZmF1bHRdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdyZWxvYWQnKSwgX2NsYXNzLnByb3RvdHlwZSksIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2FmdGVyRWRpdCcsIFtfYmluZDIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2FmdGVyRWRpdCcpLCBfY2xhc3MucHJvdG90eXBlKSksIF9jbGFzcyk7XG5leHBvcnRzLmRlZmF1bHQgPSBHcmlkQ2VsbDsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZGVzYywgX3ZhbHVlLCBfY2xhc3M7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF93aXRoUHJvcHMgPSByZXF1aXJlKCcuLi8uLi9taXhpbi93aXRoLXByb3BzJyk7XG5cbnZhciBfd2l0aFByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dpdGhQcm9wcyk7XG5cbnZhciBfZm9ybSA9IHJlcXVpcmUoJy4uL2Zvcm0nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eSwgZGVjb3JhdG9ycywgZGVzY3JpcHRvciwgY29udGV4dCkge1xuICB2YXIgZGVzYyA9IHt9O1xuICBPYmplY3RbJ2tlJyArICd5cyddKGRlc2NyaXB0b3IpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGRlc2Nba2V5XSA9IGRlc2NyaXB0b3Jba2V5XTtcbiAgfSk7XG4gIGRlc2MuZW51bWVyYWJsZSA9ICEhZGVzYy5lbnVtZXJhYmxlO1xuICBkZXNjLmNvbmZpZ3VyYWJsZSA9ICEhZGVzYy5jb25maWd1cmFibGU7XG5cbiAgaWYgKCd2YWx1ZScgaW4gZGVzYyB8fCBkZXNjLmluaXRpYWxpemVyKSB7XG4gICAgZGVzYy53cml0YWJsZSA9IHRydWU7XG4gIH1cblxuICBkZXNjID0gZGVjb3JhdG9ycy5zbGljZSgpLnJldmVyc2UoKS5yZWR1Y2UoZnVuY3Rpb24gKGRlc2MsIGRlY29yYXRvcikge1xuICAgIHJldHVybiBkZWNvcmF0b3IodGFyZ2V0LCBwcm9wZXJ0eSwgZGVzYykgfHwgZGVzYztcbiAgfSwgZGVzYyk7XG5cbiAgaWYgKGNvbnRleHQgJiYgZGVzYy5pbml0aWFsaXplciAhPT0gdm9pZCAwKSB7XG4gICAgZGVzYy52YWx1ZSA9IGRlc2MuaW5pdGlhbGl6ZXIgPyBkZXNjLmluaXRpYWxpemVyLmNhbGwoY29udGV4dCkgOiB2b2lkIDA7XG4gICAgZGVzYy5pbml0aWFsaXplciA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmIChkZXNjLmluaXRpYWxpemVyID09PSB2b2lkIDApIHtcbiAgICBPYmplY3RbJ2RlZmluZScgKyAnUHJvcGVydHknXSh0YXJnZXQsIHByb3BlcnR5LCBkZXNjKTtcbiAgICBkZXNjID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBkZXNjO1xufVxuXG52YXIgR3JpZEhlYWRlciA9IChfY2xhc3MgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoR3JpZEhlYWRlciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gR3JpZEhlYWRlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR3JpZEhlYWRlcik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEdyaWRIZWFkZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihHcmlkSGVhZGVyKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoR3JpZEhlYWRlciwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoX3JlZikge1xuICAgICAgdmFyIHdpZHRoID0gX3JlZi53aWR0aCxcbiAgICAgICAgICBoZWFkZXJXaWR0aCA9IF9yZWYuaGVhZGVyV2lkdGgsXG4gICAgICAgICAgY2hlY2tDb2x1bW4gPSBfcmVmLmNoZWNrQ29sdW1uLFxuICAgICAgICAgIHRvdGFsID0gX3JlZi50b3RhbCxcbiAgICAgICAgICBjb2x1bW5zID0gX3JlZi5jb2x1bW5zO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzZWN0aW9uJyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdyeC1ncmlkLWhlYWRlcicsIHN0eWxlOiB7IHdpZHRoOiB3aWR0aCB9IH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAncngtZ3JpZC1oZWFkZXItY29udGFpbmVyIGQtZmxleCBmbGV4LXJvdycsIHN0eWxlOiB7IHdpZHRoOiBoZWFkZXJXaWR0aCB9IH0sXG4gICAgICAgICAgY2hlY2tDb2x1bW4gJiYgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAncngtZ3JpZC1jb2x1bW4taGVhZGVyIHRleHQtc20tY2VudGVyJywgc3R5bGU6IHsgd2lkdGg6IDI2IH0gfSxcbiAgICAgICAgICAgIGNoZWNrQ29sdW1uID09PSAnbXVsdGlwbGUnICYmIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9mb3JtLkNoZWNrYm94LCB7IGRpc2FibGVkOiB0b3RhbCA9PT0gMCB9KVxuICAgICAgICAgICksXG4gICAgICAgICAgY29sdW1ucyAmJiBjb2x1bW5zLm1hcChmdW5jdGlvbiAoY29sKSB7XG4gICAgICAgICAgICB2YXIgX2NvbCR0ZXh0ID0gY29sLnRleHQsXG4gICAgICAgICAgICAgICAgdGV4dCA9IF9jb2wkdGV4dCA9PT0gdW5kZWZpbmVkID8gJycgOiBfY29sJHRleHQsXG4gICAgICAgICAgICAgICAgX2NvbCRjbGFzc05hbWUgPSBjb2wuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IF9jb2wkY2xhc3NOYW1lID09PSB1bmRlZmluZWQgPyAnJyA6IF9jb2wkY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIG90aGVycyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhjb2wsIFsndGV4dCcsICdjbGFzc05hbWUnXSk7XG5cbiAgICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgIF9leHRlbmRzKHsgY2xhc3NOYW1lOiAncngtZ3JpZC1jb2x1bW4taGVhZGVyIHRleHQtY2VudGVyICcgKyBjbGFzc05hbWUgfSwgb3RoZXJzKSxcbiAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBHcmlkSGVhZGVyO1xufShfcmVhY3QuQ29tcG9uZW50KSwgKF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ3JlbmRlcicsIFtfd2l0aFByb3BzMi5kZWZhdWx0XSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAncmVuZGVyJyksIF9jbGFzcy5wcm90b3R5cGUpKSwgX2NsYXNzKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEdyaWRIZWFkZXI7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2Rlc2MsIF92YWx1ZSwgX2NsYXNzO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfd2l0aFByb3BzID0gcmVxdWlyZSgnLi4vLi4vbWl4aW4vd2l0aC1wcm9wcycpO1xuXG52YXIgX3dpdGhQcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93aXRoUHJvcHMpO1xuXG52YXIgX2JpbmQgPSByZXF1aXJlKCcuLi8uLi9taXhpbi9iaW5kJyk7XG5cbnZhciBfYmluZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iaW5kKTtcblxudmFyIF9mb3JtID0gcmVxdWlyZSgnLi4vZm9ybScpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eSwgZGVjb3JhdG9ycywgZGVzY3JpcHRvciwgY29udGV4dCkge1xuICB2YXIgZGVzYyA9IHt9O1xuICBPYmplY3RbJ2tlJyArICd5cyddKGRlc2NyaXB0b3IpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGRlc2Nba2V5XSA9IGRlc2NyaXB0b3Jba2V5XTtcbiAgfSk7XG4gIGRlc2MuZW51bWVyYWJsZSA9ICEhZGVzYy5lbnVtZXJhYmxlO1xuICBkZXNjLmNvbmZpZ3VyYWJsZSA9ICEhZGVzYy5jb25maWd1cmFibGU7XG5cbiAgaWYgKCd2YWx1ZScgaW4gZGVzYyB8fCBkZXNjLmluaXRpYWxpemVyKSB7XG4gICAgZGVzYy53cml0YWJsZSA9IHRydWU7XG4gIH1cblxuICBkZXNjID0gZGVjb3JhdG9ycy5zbGljZSgpLnJldmVyc2UoKS5yZWR1Y2UoZnVuY3Rpb24gKGRlc2MsIGRlY29yYXRvcikge1xuICAgIHJldHVybiBkZWNvcmF0b3IodGFyZ2V0LCBwcm9wZXJ0eSwgZGVzYykgfHwgZGVzYztcbiAgfSwgZGVzYyk7XG5cbiAgaWYgKGNvbnRleHQgJiYgZGVzYy5pbml0aWFsaXplciAhPT0gdm9pZCAwKSB7XG4gICAgZGVzYy52YWx1ZSA9IGRlc2MuaW5pdGlhbGl6ZXIgPyBkZXNjLmluaXRpYWxpemVyLmNhbGwoY29udGV4dCkgOiB2b2lkIDA7XG4gICAgZGVzYy5pbml0aWFsaXplciA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmIChkZXNjLmluaXRpYWxpemVyID09PSB2b2lkIDApIHtcbiAgICBPYmplY3RbJ2RlZmluZScgKyAnUHJvcGVydHknXSh0YXJnZXQsIHByb3BlcnR5LCBkZXNjKTtcbiAgICBkZXNjID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBkZXNjO1xufVxuXG52YXIgR3JpZFBhZ2luZ1Rvb2xiYXIgPSAoX2NsYXNzID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEdyaWRQYWdpbmdUb29sYmFyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBHcmlkUGFnaW5nVG9vbGJhcihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBHcmlkUGFnaW5nVG9vbGJhcik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoR3JpZFBhZ2luZ1Rvb2xiYXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihHcmlkUGFnaW5nVG9vbGJhcikpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIHZhciBfcHJvcHMkc3RvcmUgPSBwcm9wcy5zdG9yZSxcbiAgICAgICAgdG90YWxDb3VudCA9IF9wcm9wcyRzdG9yZS50b3RhbENvdW50LFxuICAgICAgICBjdXJyZW50UGFnZSA9IF9wcm9wcyRzdG9yZS5jdXJyZW50UGFnZTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgcGFnZTogdG90YWxDb3VudCA9PT0gMCA/IDAgOiBjdXJyZW50UGFnZVxuICAgIH07XG4gICAgRXh0LmdlbmVyYXRlU2V0dGVyKF90aGlzLnN0YXRlLCBfdGhpcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEdyaWRQYWdpbmdUb29sYmFyLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLnByb3BzLnN0b3JlLnN1YnNjcmliZSh0aGlzLnJlbG9hZCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMucHJvcHMuc3RvcmUudW5zdWJzY3JpYmUodGhpcy5yZWxvYWQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcihfcmVmKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIF9yZWYkc3RvcmUgPSBfcmVmLnN0b3JlLFxuICAgICAgICAgIHRvdGFsQ291bnQgPSBfcmVmJHN0b3JlLnRvdGFsQ291bnQsXG4gICAgICAgICAgcGFnZVNpemUgPSBfcmVmJHN0b3JlLnBhZ2VTaXplLFxuICAgICAgICAgIGN1cnJlbnRQYWdlID0gX3JlZiRzdG9yZS5jdXJyZW50UGFnZTtcbiAgICAgIHZhciBwYWdlID0gdGhpcy5zdGF0ZS5wYWdlLFxuICAgICAgICAgIGZpcnN0SW5kZXggPSAoY3VycmVudFBhZ2UgLSAxKSAqIHBhZ2VTaXplICsgMSxcbiAgICAgICAgICBsYXN0SW5kZXggPSBjdXJyZW50UGFnZSAqIHBhZ2VTaXplLFxuICAgICAgICAgIHRvdGFsUGFnZXMgPSBNYXRoLmNlaWwodG90YWxDb3VudCAvIHBhZ2VTaXplKSB8fCAwO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzZWN0aW9uJyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICd0b29sYmFyIHRvcCByb3cnIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAnY29sLTYnIH0sXG4gICAgICAgICAgdG90YWxDb3VudCA+IDAgJiYgJ0Rpc3BsYXlpbmcgJyArIGZpcnN0SW5kZXggKyAnIC0gJyArIGxhc3RJbmRleCArICcgb2YgJyArIHRvdGFsQ291bnRcbiAgICAgICAgKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdjb2wtNicgfSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdmbG9hdC1zbS1yaWdodCcgfSxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1zbScgfSxcbiAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnaW5wdXQtZ3JvdXAtYnRuJyB9LFxuICAgICAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgX2Zvcm0uQnRuLFxuICAgICAgICAgICAgICAgICAgeyBkaXNhYmxlZDogdG90YWxDb3VudCA9PT0gMCwgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLmxvYWRQYWdlKGN1cnJlbnRQYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2knLCB7IGNsYXNzTmFtZTogJ2ZhIGZhLXJlZnJlc2gnIH0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdpbnB1dC1ncm91cC1idG4nIH0sXG4gICAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICBfZm9ybS5CdG4sXG4gICAgICAgICAgICAgICAgICB7IGRpc2FibGVkOiBjdXJyZW50UGFnZSA9PT0gMSwgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLmxvYWRQYWdlKDEpO1xuICAgICAgICAgICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnaScsIHsgY2xhc3NOYW1lOiAnZmEgZmEtZmFzdC1iYWNrd2FyZCcgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2lucHV0LWdyb3VwLWJ0bicgfSxcbiAgICAgICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgIF9mb3JtLkJ0bixcbiAgICAgICAgICAgICAgICAgIHsgZGlzYWJsZWQ6IGN1cnJlbnRQYWdlID09PSAxLCBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczIubG9hZFBhZ2UoY3VycmVudFBhZ2UgLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2knLCB7IGNsYXNzTmFtZTogJ2ZhIGZhLWJhY2t3YXJkJyB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnaW5wdXQtZ3JvdXAtYWRkb24nIH0sXG4gICAgICAgICAgICAgICAgJ1BhZ2UnXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9mb3JtLkZpZWxkLCB7IHZhbHVlOiBwYWdlLCBjbGFzc05hbWU6ICd3NSB0ZXh0LXNtLWNlbnRlcicsIGRpc2FibGVkOiBwYWdlID09PSAwLCBvbkNoYW5nZTogdGhpcy5zZXRQYWdlLCBvbkVudGVyOiBmdW5jdGlvbiBvbkVudGVyKHBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczIubG9hZFBhZ2UocGFnZSk7XG4gICAgICAgICAgICAgICAgfSB9KSxcbiAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnaW5wdXQtZ3JvdXAtYWRkb24nIH0sXG4gICAgICAgICAgICAgICAgJ29mICcsXG4gICAgICAgICAgICAgICAgdG90YWxQYWdlc1xuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdpbnB1dC1ncm91cC1idG4nIH0sXG4gICAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICBfZm9ybS5CdG4sXG4gICAgICAgICAgICAgICAgICB7IGRpc2FibGVkOiB0b3RhbFBhZ2VzID09PSAwIHx8IGN1cnJlbnRQYWdlID09PSB0b3RhbFBhZ2VzLCBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczIubG9hZFBhZ2UoY3VycmVudFBhZ2UgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2knLCB7IGNsYXNzTmFtZTogJ2ZhIGZhLWZvcndhcmQnIH0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdpbnB1dC1ncm91cC1idG4nIH0sXG4gICAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICBfZm9ybS5CdG4sXG4gICAgICAgICAgICAgICAgICB7IGRpc2FibGVkOiB0b3RhbFBhZ2VzID09PSAwIHx8IGN1cnJlbnRQYWdlID09PSB0b3RhbFBhZ2VzLCBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczIubG9hZFBhZ2UodG90YWxQYWdlcyk7XG4gICAgICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdpJywgeyBjbGFzc05hbWU6ICdmYSBmYS1mYXN0LWZvcndhcmQnIH0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbG9hZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbG9hZChzdG9yZSkge1xuICAgICAgdGhpcy5zZXRQYWdlKHN0b3JlLnRvdGFsQ291bnQgPT09IDAgPyAwIDogc3RvcmUuY3VycmVudFBhZ2UpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2xvYWRQYWdlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZFBhZ2UobnVtYmVyKSB7XG4gICAgICB2YXIgc3RvcmUgPSB0aGlzLnByb3BzLnN0b3JlLFxuICAgICAgICAgIHRvdGFsUGFnZXMgPSBNYXRoLmNlaWwoc3RvcmUudG90YWxDb3VudCAvIHN0b3JlLnBhZ2VTaXplKSB8fCAwO1xuXG4gICAgICBpZiAoMCA8IG51bWJlciAmJiBudW1iZXIgPD0gdG90YWxQYWdlcykge1xuICAgICAgICBzdG9yZS5sb2FkUGFnZShudW1iZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRQYWdlKHN0b3JlLmN1cnJlbnRQYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gR3JpZFBhZ2luZ1Rvb2xiYXI7XG59KF9yZWFjdC5Db21wb25lbnQpLCAoX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAncmVuZGVyJywgW193aXRoUHJvcHMyLmRlZmF1bHRdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdyZW5kZXInKSwgX2NsYXNzLnByb3RvdHlwZSksIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ3JlbG9hZCcsIFtfYmluZDIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ3JlbG9hZCcpLCBfY2xhc3MucHJvdG90eXBlKSwgX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAnbG9hZFBhZ2UnLCBbX2JpbmQyLmRlZmF1bHRdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdsb2FkUGFnZScpLCBfY2xhc3MucHJvdG90eXBlKSksIF9jbGFzcyk7XG5leHBvcnRzLmRlZmF1bHQgPSBHcmlkUGFnaW5nVG9vbGJhcjsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZGVzYywgX3ZhbHVlLCBfY2xhc3M7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF93aXRoUHJvcHMgPSByZXF1aXJlKCcuLi8uLi9taXhpbi93aXRoLXByb3BzJyk7XG5cbnZhciBfd2l0aFByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dpdGhQcm9wcyk7XG5cbnZhciBfZm9ybSA9IHJlcXVpcmUoJy4uL2Zvcm0nKTtcblxudmFyIF9jZWxsID0gcmVxdWlyZSgnLi9jZWxsJyk7XG5cbnZhciBfY2VsbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jZWxsKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKHRhcmdldCwgcHJvcGVydHksIGRlY29yYXRvcnMsIGRlc2NyaXB0b3IsIGNvbnRleHQpIHtcbiAgdmFyIGRlc2MgPSB7fTtcbiAgT2JqZWN0WydrZScgKyAneXMnXShkZXNjcmlwdG9yKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBkZXNjW2tleV0gPSBkZXNjcmlwdG9yW2tleV07XG4gIH0pO1xuICBkZXNjLmVudW1lcmFibGUgPSAhIWRlc2MuZW51bWVyYWJsZTtcbiAgZGVzYy5jb25maWd1cmFibGUgPSAhIWRlc2MuY29uZmlndXJhYmxlO1xuXG4gIGlmICgndmFsdWUnIGluIGRlc2MgfHwgZGVzYy5pbml0aWFsaXplcikge1xuICAgIGRlc2Mud3JpdGFibGUgPSB0cnVlO1xuICB9XG5cbiAgZGVzYyA9IGRlY29yYXRvcnMuc2xpY2UoKS5yZXZlcnNlKCkucmVkdWNlKGZ1bmN0aW9uIChkZXNjLCBkZWNvcmF0b3IpIHtcbiAgICByZXR1cm4gZGVjb3JhdG9yKHRhcmdldCwgcHJvcGVydHksIGRlc2MpIHx8IGRlc2M7XG4gIH0sIGRlc2MpO1xuXG4gIGlmIChjb250ZXh0ICYmIGRlc2MuaW5pdGlhbGl6ZXIgIT09IHZvaWQgMCkge1xuICAgIGRlc2MudmFsdWUgPSBkZXNjLmluaXRpYWxpemVyID8gZGVzYy5pbml0aWFsaXplci5jYWxsKGNvbnRleHQpIDogdm9pZCAwO1xuICAgIGRlc2MuaW5pdGlhbGl6ZXIgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAoZGVzYy5pbml0aWFsaXplciA9PT0gdm9pZCAwKSB7XG4gICAgT2JqZWN0WydkZWZpbmUnICsgJ1Byb3BlcnR5J10odGFyZ2V0LCBwcm9wZXJ0eSwgZGVzYyk7XG4gICAgZGVzYyA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gZGVzYztcbn1cblxudmFyIEdyaWRSb3cgPSAoX2NsYXNzID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEdyaWRSb3csIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEdyaWRSb3coKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdyaWRSb3cpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChHcmlkUm93Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoR3JpZFJvdykpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEdyaWRSb3csIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKF9yZWYpIHtcbiAgICAgIHZhciBjaGVja0NvbHVtbiA9IF9yZWYuY2hlY2tDb2x1bW4sXG4gICAgICAgICAgY29sdW1ucyA9IF9yZWYuY29sdW1ucyxcbiAgICAgICAgICByZWNvcmQgPSBfcmVmLnJlY29yZCxcbiAgICAgICAgICByb3dJbmRleCA9IF9yZWYucm93SW5kZXg7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2FydGljbGUnLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ3J4LWdyaWQtcm93IGQtZmxleCBmbGV4LXJvdycgfSxcbiAgICAgICAgY2hlY2tDb2x1bW4gJiYgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdyeC1ncmlkLWNlbGwgdGV4dC1zbS1jZW50ZXInLCBzdHlsZTogeyB3aWR0aDogMjYgfSB9LFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9mb3JtLkNoZWNrYm94LCBudWxsKVxuICAgICAgICApLFxuICAgICAgICBjb2x1bW5zICYmIGNvbHVtbnMubWFwKGZ1bmN0aW9uIChjb2wpIHtcbiAgICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2NlbGwyLmRlZmF1bHQsIF9leHRlbmRzKHsgcmVjb3JkOiByZWNvcmQsIHJvd0luZGV4OiByb3dJbmRleCB9LCBjb2wpKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEdyaWRSb3c7XG59KF9yZWFjdC5Db21wb25lbnQpLCAoX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAncmVuZGVyJywgW193aXRoUHJvcHMyLmRlZmF1bHRdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdyZW5kZXInKSwgX2NsYXNzLnByb3RvdHlwZSkpLCBfY2xhc3MpO1xuZXhwb3J0cy5kZWZhdWx0ID0gR3JpZFJvdzsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkxpbmsgPSBleHBvcnRzLkhhc2hSb3V0ZXIgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9saXN0ID0gcmVxdWlyZSgnLi4vY29yZS9saXN0Jyk7XG5cbnZhciBfbGlzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saXN0KTtcblxudmFyIF9vYnNlcnZhYmxlID0gcmVxdWlyZSgnLi4vbWl4aW4vb2JzZXJ2YWJsZScpO1xuXG52YXIgX29ic2VydmFibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JzZXJ2YWJsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUk9VVEVTID0ge30sXG4gICAgZ2V0Um91dGUgPSBmdW5jdGlvbiBnZXRSb3V0ZSgpIHtcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKSB8fCAnLyc7XG59LFxuICAgIGdldFJvdXRlUGF0aCA9IGZ1bmN0aW9uIGdldFJvdXRlUGF0aChyb3V0ZSkge1xuICByZXR1cm4gcm91dGUuc3BsaXQoJy8nKTtcbn0sXG4gICAgaXNQYXJhbSA9IGZ1bmN0aW9uIGlzUGFyYW0ocm91dGVOYW1lKSB7XG4gIHJldHVybiByb3V0ZU5hbWUuc3RhcnRzV2l0aCgnOicpO1xufSxcbiAgICBtYXRjaFBhdGggPSBmdW5jdGlvbiBtYXRjaFBhdGgoKSB7XG4gIHZhciBjdXJyZW50Um91dGUgPSBnZXRSb3V0ZSgpLFxuICAgICAgcGFyYW1zID0ge307XG5cbiAgaWYgKFJPVVRFU1tjdXJyZW50Um91dGVdKSB7XG4gICAgcmV0dXJuIHsgcm91dGU6IGN1cnJlbnRSb3V0ZSwgY29tcG9uZW50OiBST1VURVNbY3VycmVudFJvdXRlXS5jb21wb25lbnQsIHBhcmFtczogcGFyYW1zIH07XG4gIH1cblxuICB2YXIgY3VycmVudFBhdGggPSBnZXRSb3V0ZVBhdGgoY3VycmVudFJvdXRlKTtcbiAgZm9yICh2YXIga2V5IGluIFJPVVRFUykge1xuICAgIHZhciByb3V0ZSA9IFJPVVRFU1trZXldLFxuICAgICAgICByb3V0ZVBhdGggPSByb3V0ZS5wYXRoO1xuICAgIHZhciBtYXRjaGVkID0gdHJ1ZTtcbiAgICAoMCwgX2xpc3QyLmRlZmF1bHQpKHJvdXRlUGF0aCkuZWFjaChmdW5jdGlvbiAocm91dGVOYW1lLCBpbmRleCkge1xuICAgICAgaWYgKHJvdXRlTmFtZSAhPT0gY3VycmVudFBhdGhbaW5kZXhdKSB7XG4gICAgICAgIGlmIChpc1BhcmFtKHJvdXRlTmFtZSkpIHtcbiAgICAgICAgICBwYXJhbXNbcm91dGVOYW1lLnN1YnN0cmluZygxKV0gPSBjdXJyZW50UGF0aFtpbmRleF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWF0Y2hlZCA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChtYXRjaGVkKSB7XG4gICAgICByZXR1cm4geyByb3V0ZTogY3VycmVudFJvdXRlLCBjb21wb25lbnQ6IHJvdXRlLmNvbXBvbmVudCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9XG4gIH1cblxuICBpZiAoUk9VVEVTWycqJ10pIHtcbiAgICByZXR1cm4geyByb3V0ZTogY3VycmVudFJvdXRlLCBjb21wb25lbnQ6IFJPVVRFU1snKiddLmNvbXBvbmVudCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgfVxuXG4gIHJldHVybiB7IHJvdXRlOiBjdXJyZW50Um91dGUsIGNvbXBvbmVudDogbnVsbCwgcGFyYW1zOiBwYXJhbXMgfTtcbn07XG5cbnZhciBIYXNoUm91dGVyID0gZXhwb3J0cy5IYXNoUm91dGVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEhhc2hSb3V0ZXIsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEhhc2hSb3V0ZXIocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSGFzaFJvdXRlcik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoSGFzaFJvdXRlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEhhc2hSb3V0ZXIpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IG1hdGNoUGF0aCgpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhIYXNoUm91dGVyLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgX29ic2VydmFibGUyLmRlZmF1bHQuZnJvbUV2ZW50KHdpbmRvdywgJ2hhc2hjaGFuZ2UnKS5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMyLnNldFN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gbWF0Y2hQYXRoKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgcm91dGUgPSBfc3RhdGUucm91dGUsXG4gICAgICAgICAgY29tcG9uZW50ID0gX3N0YXRlLmNvbXBvbmVudCxcbiAgICAgICAgICBwYXJhbXMgPSBfc3RhdGUucGFyYW1zO1xuXG5cbiAgICAgIGlmICghY29tcG9uZW50KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NvbXBvbmVudCBwcm9wcyBzaG91bGQgbm90IGJlIG51bGwnKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChjb21wb25lbnQsIHsgcm91dGU6IHJvdXRlLCBwYXJhbXM6IHBhcmFtcyB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSGFzaFJvdXRlcjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbnZhciBMaW5rID0gZXhwb3J0cy5MaW5rID0gZnVuY3Rpb24gKF9Db21wb25lbnQyKSB7XG4gIF9pbmhlcml0cyhMaW5rLCBfQ29tcG9uZW50Mik7XG5cbiAgZnVuY3Rpb24gTGluayhwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMaW5rKTtcblxuICAgIHZhciBfdGhpczMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoTGluay5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKExpbmspKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpczMuc3RhdGUgPSBtYXRjaFBhdGgoKTtcbiAgICByZXR1cm4gX3RoaXMzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKExpbmssIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICBfb2JzZXJ2YWJsZTIuZGVmYXVsdC5mcm9tRXZlbnQod2luZG93LCAnaGFzaGNoYW5nZScpLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpczQuc2V0U3RhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBtYXRjaFBhdGgoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3N0YXRlMiA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgcm91dGUgPSBfc3RhdGUyLnJvdXRlLFxuICAgICAgICAgIGNvbXBvbmVudCA9IF9zdGF0ZTIuY29tcG9uZW50LFxuICAgICAgICAgIHBhcmFtcyA9IF9zdGF0ZTIucGFyYW1zLFxuICAgICAgICAgIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgdG8gPSBfcHJvcHMudG8sXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICBfcHJvcHMkYWN0aXZlQ2xhc3NOYW0gPSBfcHJvcHMuYWN0aXZlQ2xhc3NOYW1lLFxuICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZSA9IF9wcm9wcyRhY3RpdmVDbGFzc05hbSA9PT0gdW5kZWZpbmVkID8gJ2FjdGl2ZScgOiBfcHJvcHMkYWN0aXZlQ2xhc3NOYW0sXG4gICAgICAgICAgb3RoZXJzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWyd0bycsICdjbGFzc05hbWUnLCAnYWN0aXZlQ2xhc3NOYW1lJ10pO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2EnLCBfZXh0ZW5kcyh7IGhyZWY6ICcjJyArIHRvLCBjbGFzc05hbWU6IHRvID09PSBnZXRSb3V0ZSgpID8gW2NsYXNzTmFtZSwgYWN0aXZlQ2xhc3NOYW1lXS5qb2luKCcgJykgOiBjbGFzc05hbWUgfSwgb3RoZXJzKSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIExpbms7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocm91dGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChjb21wb25lbnQpIHtcbiAgICBST1VURVNbcm91dGVdID0ge1xuICAgICAgcm91dGU6IHJvdXRlLFxuICAgICAgY29tcG9uZW50OiBjb21wb25lbnQsXG4gICAgICBwYXRoOiBnZXRSb3V0ZVBhdGgocm91dGUpXG4gICAgfTtcbiAgfTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gX2RlZmF1bHQoY29tcCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBfZGVmYXVsdCk7XG5cbiAgICB0aGlzLmNvbXAgPSAoMCwgX3JlYWN0RG9tLmZpbmRET01Ob2RlKShjb21wKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhfZGVmYXVsdCwgW3tcbiAgICBrZXk6ICdwYXJlbnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJlbnQoKSB7XG4gICAgICB0aGlzLmNvbXAgPSB0aGlzLmNvbXAucGFyZW50RWxlbWVudDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3dpZHRoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gd2lkdGgoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wLmNsaWVudFdpZHRoO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2hlaWdodCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhlaWdodCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbXAuY2xpZW50SGVpZ2h0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2ZpbmQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmaW5kKHNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBfZGVmYXVsdDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfY29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnQnKTtcblxudmFyIF9jb21wb25lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcG9uZW50KTtcblxudmFyIF9zdHJpbmcgPSByZXF1aXJlKCcuL3N0cmluZycpO1xuXG52YXIgX3N0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHJpbmcpO1xuXG52YXIgX2xpc3QgPSByZXF1aXJlKCcuL2xpc3QnKTtcblxudmFyIF9saXN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpc3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgRXh0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBFeHQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEV4dCk7XG5cbiAgICB0aGlzLlNDUk9MTF9XSURUSCA9IHRoaXMuZ2V0U2Nyb2xsV2lkdGgoKTtcbiAgICB0aGlzLkJPUkRFUl9XSURUSCA9IDI7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRXh0LCBbe1xuICAgIGtleTogJ2dldEJ5SWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRCeUlkKGlkKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldENvbXAnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDb21wKGNvbXApIHtcbiAgICAgIHJldHVybiBuZXcgX2NvbXBvbmVudDIuZGVmYXVsdChjb21wKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdleHRlbmQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbi5hcHBseShudWxsLCBhcmd1bWVudHMpOyAvLyBpbW11dGFibGUgb2JqZWN0XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2xvbmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9uZShvKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIG8pOyAvLyBuZXcgb2JqZWN0LCBub3QgYnkgcmVmXG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY3JlYXRlRWxlbWVudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoaHRtbCkge1xuICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGl2LmlubmVySFRNTCA9IGh0bWw7XG4gICAgICByZXR1cm4gZGl2LmNoaWxkcmVuWzBdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzRnVuY3Rpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaXNPYmplY3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBPYmplY3RdJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpc0FycmF5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNBcnJheSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzUHJpbWl0aXZlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNQcmltaXRpdmUodmFsdWUpIHtcbiAgICAgIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWx1ZSk7XG4gICAgICByZXR1cm4gdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZSA9PT0gJ251bWJlcicgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NsYXNzTmFtZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsYXNzTmFtZShleHByZXNzaW9ucykge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIGNscyA9IFtdO1xuXG4gICAgICAoMCwgX2xpc3QyLmRlZmF1bHQpKGV4cHJlc3Npb25zKS5lYWNoKGZ1bmN0aW9uIChleHApIHtcbiAgICAgICAgaWYgKCFleHApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGV4cCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjbHMucHVzaChleHApO1xuICAgICAgICB9IGVsc2UgaWYgKF90aGlzLmlzT2JqZWN0KGV4cCkpIHtcbiAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gZXhwKSB7XG4gICAgICAgICAgICBpZiAoZXhwW2tleV0gPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgY2xzLnB1c2goa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNscy5qb2luKCcgJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2VuZXJhdGVTZXR0ZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZW5lcmF0ZVNldHRlcihzdGF0ZSwgY29tcCkge1xuICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKCkge1xuICAgICAgICAgIHZhciBmaWVsZCA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgICAgY29tcFsnc2V0JyArIF9zdHJpbmcyLmRlZmF1bHQuY2FwaXRhbGl6ZShmaWVsZCldID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcC5zZXRTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfZGVmaW5lUHJvcGVydHkoe30sIGZpZWxkLCB2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IE9iamVjdC5rZXlzKHN0YXRlKVtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgICBfbG9vcCgpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRTY3JvbGxXaWR0aCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNjcm9sbFdpZHRoKCkge1xuICAgICAgdmFyIG91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG91dGVyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgb3V0ZXIuc3R5bGUud2lkdGggPSBcIjEwMHB4XCI7XG4gICAgICBvdXRlci5zdHlsZS5tc092ZXJmbG93U3R5bGUgPSBcInNjcm9sbGJhclwiOyAvLyBuZWVkZWQgZm9yIFdpbkpTIGFwcHNcblxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdXRlcik7XG5cbiAgICAgIHZhciB3aWR0aE5vU2Nyb2xsID0gb3V0ZXIub2Zmc2V0V2lkdGg7XG4gICAgICAvLyBmb3JjZSBzY3JvbGxiYXJzXG4gICAgICBvdXRlci5zdHlsZS5vdmVyZmxvdyA9IFwic2Nyb2xsXCI7XG5cbiAgICAgIC8vIGFkZCBpbm5lcmRpdlxuICAgICAgdmFyIGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGlubmVyLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICBvdXRlci5hcHBlbmRDaGlsZChpbm5lcik7XG5cbiAgICAgIHZhciB3aWR0aFdpdGhTY3JvbGwgPSBpbm5lci5vZmZzZXRXaWR0aDtcblxuICAgICAgLy8gcmVtb3ZlIGRpdnNcbiAgICAgIG91dGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob3V0ZXIpO1xuXG4gICAgICByZXR1cm4gd2lkdGhOb1Njcm9sbCAtIHdpZHRoV2l0aFNjcm9sbDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRXh0O1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBuZXcgRXh0KCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBFTVBUWV9MSVNUID0gW107XG5cbnZhciBMaXN0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBMaXN0KHZhbHVlKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExpc3QpO1xuXG4gICAgdGhpcy5hcnJheSA9IEVNUFRZX0xJU1Q7XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlLmxlbmd0aCkge1xuICAgICAgdGhpcy5hcnJheSA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhMaXN0LCBbe1xuICAgIGtleTogXCJjb2xsZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbGxlY3QoKSB7XG4gICAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY291bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY291bnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5hcnJheS5sZW5ndGg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImVhY2hcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZWFjaChpdGVyYXRlZSkge1xuICAgICAgZm9yICh2YXIgaW5kZXggPSAwLCBpdGVtOyAoaXRlbSA9IHRoaXMuYXJyYXlbaW5kZXhdKSAhPSBudWxsOyArK2luZGV4KSB7XG4gICAgICAgIGl0ZXJhdGVlKGl0ZW0sIGluZGV4LCB0aGlzLmFycmF5KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZmluZEJ5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZpbmRCeShwcmVkaWNhdGUpIHtcbiAgICAgIHZhciByZXN1bHQgPSBudWxsO1xuICAgICAgZm9yICh2YXIgaW5kZXggPSAwLCBpdGVtOyAoaXRlbSA9IHRoaXMuYXJyYXlbaW5kZXhdKSAhPSBudWxsOyArK2luZGV4KSB7XG4gICAgICAgIGlmIChwcmVkaWNhdGUoaXRlbSwgaW5kZXgsIHRoaXMuYXJyYXkpKSB7XG4gICAgICAgICAgcmVzdWx0ID0gaXRlbTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29udGFpbnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29udGFpbnMocHJlZGljYXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy5maW5kQnkocHJlZGljYXRlKSAhPT0gbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZmlsdGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZpbHRlcihwcmVkaWNhdGUpIHtcbiAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgsIGFycmF5KSB7XG4gICAgICAgIGlmIChwcmVkaWNhdGUoaXRlbSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgTGlzdChyZXN1bHQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJtYXBcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWFwKGl0ZXJhdGVlKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4LCBhcnJheSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGl0ZW0sIGluZGV4LCBhcnJheSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgTGlzdChyZXN1bHQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZWR1Y2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVkdWNlKGl0ZXJhdGVlLCBhY2N1bXVsYXRvcikge1xuICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCwgYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yID0gaXRlcmF0ZWUoYWNjdW11bGF0b3IsIGl0ZW0sIGluZGV4LCBhcnJheSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0QXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QXQoaW5kZXgpIHtcbiAgICAgIHJldHVybiB0aGlzLmFycmF5W2luZGV4XTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlQXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlQXQoaW5kZXgpIHtcbiAgICAgIHZhciBjb3VudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMTtcblxuICAgICAgcmV0dXJuIHRoaXMuYXJyYXkuc3BsaWNlKGluZGV4LCBjb3VudCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFkZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGQoaXRlbSkge1xuICAgICAgdGhpcy5hcnJheS5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpbnNlcnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5zZXJ0KGluZGV4LCBpdGVtKSB7XG4gICAgICB0aGlzLmFycmF5LnNwbGljZShpbmRleCwgMCwgaXRlbSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIExpc3Q7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gbmV3IExpc3QodmFsdWUpO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfbGlzdCA9IHJlcXVpcmUoJy4vbGlzdCcpO1xuXG52YXIgX2xpc3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGlzdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBFTVBUWV9NQVAgPSB7fTtcblxudmFyIE1hcCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTWFwKGtleVZhbHVlcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXApO1xuXG4gICAgdGhpcy5tYXAgPSBFTVBUWV9NQVA7XG4gICAgaWYgKGtleVZhbHVlcyAmJiBrZXlWYWx1ZXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLm1hcCA9IE9iamVjdC5hc3NpZ24oe30sIGtleVZhbHVlcyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1hcCwgW3tcbiAgICBrZXk6ICdlYWNoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZWFjaChpdGVyYXRlZSkge1xuICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMubWFwKSB7XG4gICAgICAgIGl0ZXJhdGVlKGtleSwgdGhpcy5tYXBba2V5XSwgdGhpcy5tYXApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAna2V5cycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGtleXMoKSB7XG4gICAgICByZXR1cm4gKDAsIF9saXN0Mi5kZWZhdWx0KShPYmplY3Qua2V5cyh0aGlzLm1hcCkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3ZhbHVlcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlcygpIHtcbiAgICAgIHJldHVybiAoMCwgX2xpc3QyLmRlZmF1bHQpKE9iamVjdC52YWx1ZXModGhpcy5tYXApKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWFwO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoa2V5VmFsdWVzKSB7XG4gIHJldHVybiBuZXcgTWFwKGtleVZhbHVlcyk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgTnVtYmVyID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBOdW1iZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE51bWJlcik7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTnVtYmVyLCBbe1xuICAgIGtleTogXCJyb3VuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByb3VuZCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBOdW1iZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG5ldyBOdW1iZXIoKTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBTdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN0cmluZygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RyaW5nKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTdHJpbmcsIFt7XG4gICAga2V5OiAndG9RdWVyeVN0cmluZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvUXVlcnlTdHJpbmcocGFyYW1zLCBzZXAsIGVuY29kZSkge1xuICAgICAgc2VwID0gc2VwID09PSB1bmRlZmluZWQgPyAnJicgOiBzZXA7XG4gICAgICBlbmNvZGUgPSBlbmNvZGUgPT09IGZhbHNlID8gZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgcmV0dXJuIHM7XG4gICAgICB9IDogZW5jb2RlVVJJQ29tcG9uZW50O1xuXG4gICAgICB2YXIgcGFpcnMgPSBbXTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBwYXJhbXMpIHtcbiAgICAgICAgcGFpcnMucHVzaChrZXkgKyAnPScgKyBlbmNvZGUocGFyYW1zW2tleV0pKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwYWlycy5qb2luKHNlcCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2FwaXRhbGl6ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyaW5nKSB7XG4gICAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTdHJpbmc7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG5ldyBTdHJpbmcoKTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfc3RyaW5nID0gcmVxdWlyZSgnLi4vY29yZS9zdHJpbmcnKTtcblxudmFyIF9zdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RyaW5nKTtcblxudmFyIF9leHQgPSByZXF1aXJlKCcuLi9jb3JlL2V4dCcpO1xuXG52YXIgX2V4dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikgeyByZXR1cm4gZnVuY3Rpb24gKCkgeyB2YXIgZ2VuID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgZnVuY3Rpb24gc3RlcChrZXksIGFyZykgeyB0cnkgeyB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7IHZhciB2YWx1ZSA9IGluZm8udmFsdWU7IH0gY2F0Y2ggKGVycm9yKSB7IHJlamVjdChlcnJvcik7IHJldHVybjsgfSBpZiAoaW5mby5kb25lKSB7IHJlc29sdmUodmFsdWUpOyB9IGVsc2UgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkgeyBzdGVwKFwibmV4dFwiLCB2YWx1ZSk7IH0sIGZ1bmN0aW9uIChlcnIpIHsgc3RlcChcInRocm93XCIsIGVycik7IH0pOyB9IH0gcmV0dXJuIHN0ZXAoXCJuZXh0XCIpOyB9KTsgfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgQWpheCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQWpheCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWpheCk7XG5cbiAgICBfZXh0Mi5kZWZhdWx0LmV4dGVuZChBamF4LnByb3RvdHlwZSwge1xuICAgICAgeGhyOiBuZXcgWE1MSHR0cFJlcXVlc3QoKSxcbiAgICAgIGFqYXhCZWZvcmU6IGZ1bmN0aW9uIGFqYXhCZWZvcmUoKSB7LyogdG8gYmUgaW1wbGVtZW50ZWQgKi99LFxuICAgICAgYWpheEVycm9yOiBmdW5jdGlvbiBhamF4RXJyb3IoZXJyb3IpIHsvKiB0byBiZSBpbXBsZW1lbnRlZCAqL30sXG4gICAgICBhamF4Q29tcGxldGU6IGZ1bmN0aW9uIGFqYXhDb21wbGV0ZSgpIHsvKiB0byBiZSBpbXBsZW1lbnRlZCAqL30sXG4gICAgICBCQVNFX1VSTDogbnVsbFxuICAgIH0pO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEFqYXgsIFt7XG4gICAga2V5OiAncmVxdWVzdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfcmVmID0gX2FzeW5jVG9HZW5lcmF0b3IocmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZShfcmVmMikge1xuICAgICAgICB2YXIgdXJsID0gX3JlZjIudXJsLFxuICAgICAgICAgICAgX3JlZjIkbWV0aG9kID0gX3JlZjIubWV0aG9kLFxuICAgICAgICAgICAgbWV0aG9kID0gX3JlZjIkbWV0aG9kID09PSB1bmRlZmluZWQgPyAnZ2V0JyA6IF9yZWYyJG1ldGhvZCxcbiAgICAgICAgICAgIHBhcmFtcyA9IF9yZWYyLnBhcmFtcyxcbiAgICAgICAgICAgIG5leHQgPSBfcmVmMi5uZXh0LFxuICAgICAgICAgICAgZXJyb3IgPSBfcmVmMi5lcnJvcixcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZjIuY29tcGxldGU7XG4gICAgICAgIHZhciByZXNwb25zZTtcbiAgICAgICAgcmV0dXJuIHJlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSAwO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hamF4QmVmb3JlKCk7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvbWlzZSh7IHVybDogdXJsLCBtZXRob2Q6IG1ldGhvZCwgcGFyYW1zOiBwYXJhbXMgfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2NvbnRleHQuc2VudDtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KCdyZXR1cm4nLCBuZXh0ID8gbmV4dChyZXNwb25zZSkgOiByZXNwb25zZSk7XG5cbiAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSA4O1xuICAgICAgICAgICAgICAgIF9jb250ZXh0LnQwID0gX2NvbnRleHRbJ2NhdGNoJ10oMCk7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDYW5ub3QgZ2V0IHJlc3BvbnNlIGZyb20gc2VydmVyIGZvciB1cmwgWycgKyB1cmwgKyAnXSBjYXVzZWQgYnk6ICcgKyBfY29udGV4dC50MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hamF4RXJyb3IoX2NvbnRleHQudDApO1xuICAgICAgICAgICAgICAgIGVycm9yICYmIGVycm9yKF9jb250ZXh0LnQwKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KCdyZXR1cm4nLCBudWxsKTtcblxuICAgICAgICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSAxNDtcblxuICAgICAgICAgICAgICAgIHRoaXMuYWpheENvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgY29tcGxldGUgJiYgY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuZmluaXNoKDE0KTtcblxuICAgICAgICAgICAgICBjYXNlIDE4OlxuICAgICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlLCB0aGlzLCBbWzAsIDgsIDE0LCAxOF1dKTtcbiAgICAgIH0pKTtcblxuICAgICAgZnVuY3Rpb24gcmVxdWVzdChfeCkge1xuICAgICAgICByZXR1cm4gX3JlZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVxdWVzdDtcbiAgICB9KClcbiAgfSwge1xuICAgIGtleTogJ3Byb21pc2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwcm9taXNlKHNldHRpbmdzKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBfdGhpcy5jcmVhdGVSZXF1ZXN0KHNldHRpbmdzLCBmdW5jdGlvbiAoZXJyLCByZXMpIHtcbiAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NyZWF0ZVJlcXVlc3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVSZXF1ZXN0KF9yZWYzLCBkb25lKSB7XG4gICAgICB2YXIgdXJsID0gX3JlZjMudXJsLFxuICAgICAgICAgIG1ldGhvZCA9IF9yZWYzLm1ldGhvZCxcbiAgICAgICAgICBwYXJhbXMgPSBfcmVmMy5wYXJhbXM7XG5cbiAgICAgIHRoaXMuQkFTRV9VUkwgJiYgKHVybCA9IHRoaXMuQkFTRV9VUkwgKyAnLycgKyB1cmwpO1xuICAgICAgbWV0aG9kID09PSAnZ2V0JyAmJiBwYXJhbXMgIT09IG51bGwgJiYgKHVybCA9IHVybCArICc/JyArIF9zdHJpbmcyLmRlZmF1bHQudG9RdWVyeVN0cmluZyhwYXJhbXMpKTtcbiAgICAgIHZhciB4aHIgPSB0aGlzLnhocjtcbiAgICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xuICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XG4gICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgZG9uZShudWxsLCBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgZG9uZShKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgZG9uZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB4aHIuc2VuZChwYXJhbXMgIT09IG51bGwgPyBKU09OLnN0cmluZ2lmeShwYXJhbXMpIDogbnVsbCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEFqYXg7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG5ldyBBamF4KCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgQ2FjaGUgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIENhY2hlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDYWNoZSk7XG5cbiAgICB0aGlzLl9jYWNoZSA9IHt9O1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENhY2hlLCBbe1xuICAgIGtleTogJ2hhc0xvY2FsU3RvcmFnZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhc0xvY2FsU3RvcmFnZSgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiAnbG9jYWxTdG9yYWdlJyBpbiB3aW5kb3cgJiYgd2luZG93LmxvY2FsU3RvcmFnZSAhPT0gbnVsbDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICAgIGlmICh0aGlzLmhhc0xvY2FsU3RvcmFnZSgpKSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpIHx8IHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYWNoZVtrZXldIHx8IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMuaGFzTG9jYWxTdG9yYWdlKCkpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fY2FjaGVba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbW92ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZShrZXkpIHtcbiAgICAgIGlmICgha2V5KSB7XG4gICAgICAgIHRoaXMuX2NhY2hlID0ge307XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaGFzTG9jYWxTdG9yYWdlKCkpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9jYWNoZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDYWNoZTtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gbmV3IENhY2hlKCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2V4dCA9IHJlcXVpcmUoJy4uL2NvcmUvZXh0Jyk7XG5cbnZhciBfZXh0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dCk7XG5cbnZhciBfbGlzdCA9IHJlcXVpcmUoJy4uL2NvcmUvbGlzdCcpO1xuXG52YXIgX2xpc3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGlzdCk7XG5cbnZhciBfbWFwID0gcmVxdWlyZSgnLi4vY29yZS9tYXAnKTtcblxudmFyIF9tYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFwKTtcblxudmFyIF9vYnNlcnZhYmxlID0gcmVxdWlyZSgnLi4vbWl4aW4vb2JzZXJ2YWJsZScpO1xuXG52YXIgX29ic2VydmFibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JzZXJ2YWJsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBNb2RlbCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTW9kZWwoZGF0YSwgc3RvcmUpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTW9kZWwpO1xuXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLnN0b3JlID0gc3RvcmU7XG4gICAgdGhpcy5maWVsZHMgPSB0aGlzLmNyZWF0ZUZpZWxkcyhzdG9yZSAmJiBzdG9yZS5maWVsZHMgPyBzdG9yZS5maWVsZHMgOiBPYmplY3Qua2V5cyh0aGlzLmRhdGEpKTtcbiAgICB0aGlzLnNhdmUoKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNb2RlbCwgW3tcbiAgICBrZXk6ICdnZXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQoZmllbGROYW1lKSB7XG4gICAgICBpZiAoIWZpZWxkTmFtZSB8fCBfZXh0Mi5kZWZhdWx0LmlzUHJpbWl0aXZlKHRoaXMuZGF0YSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmRhdGFbZmllbGROYW1lXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoZmllbGROYW1lLCBuZXdWYWx1ZSkge1xuICAgICAgaWYgKCFmaWVsZE5hbWUgfHwgX2V4dDIuZGVmYXVsdC5pc1ByaW1pdGl2ZSh0aGlzLmRhdGEpKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ld1ZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kYXRhW2ZpZWxkTmFtZV0gPSBuZXdWYWx1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc3RvcmUgJiYgdGhpcy5zdG9yZS5vYnNlcnZhYmxlLmNhbGwodGhpcy5zdG9yZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2F2ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNhdmUoKSB7XG4gICAgICB0aGlzLnBoYW50b20gPSBfZXh0Mi5kZWZhdWx0LmlzUHJpbWl0aXZlKHRoaXMuZGF0YSkgPyB0aGlzLmRhdGEgOiBfZXh0Mi5kZWZhdWx0LmV4dGVuZCh7fSwgdGhpcy5kYXRhKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZWplY3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZWplY3QoKSB7XG4gICAgICB0aGlzLmRhdGEgPSBfZXh0Mi5kZWZhdWx0LmV4dGVuZCh7fSwgdGhpcy5waGFudG9tKTtcbiAgICAgIHRoaXMuc2F2ZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzTW9kaWZpZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc01vZGlmaWVkKGZpZWxkTmFtZSkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKGZpZWxkTmFtZSkge1xuICAgICAgICByZXR1cm4gIXRoaXMuaXNFcXVhbCh0aGlzLmZpZWxkc1tmaWVsZE5hbWVdKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICgwLCBfbWFwMi5kZWZhdWx0KSh0aGlzLmZpZWxkcykudmFsdWVzKCkuY29udGFpbnMoZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgIHJldHVybiAhX3RoaXMuaXNFcXVhbChmaWVsZCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpc0VxdWFsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNFcXVhbChmaWVsZCkge1xuICAgICAgcmV0dXJuICFmaWVsZCA/IHRydWUgOiBmaWVsZC5lcXVhbHMgPyBmaWVsZC5lcXVhbHModGhpcy5kYXRhW2ZpZWxkLm5hbWVdLCB0aGlzLnBoYW50b21bZmllbGQubmFtZV0pIDogdGhpcy5kYXRhW2ZpZWxkLm5hbWVdID09PSB0aGlzLnBoYW50b21bZmllbGQubmFtZV07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY3JlYXRlRmllbGRzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlRmllbGRzKGZpZWxkcykge1xuICAgICAgcmV0dXJuICgwLCBfbGlzdDIuZGVmYXVsdCkoZmllbGRzKS5yZWR1Y2UoZnVuY3Rpb24gKGZpZWxkQnlOYW1lLCBmaWVsZCkge1xuICAgICAgICBpZiAoX2V4dDIuZGVmYXVsdC5pc09iamVjdChmaWVsZCkpIHtcbiAgICAgICAgICBmaWVsZEJ5TmFtZVtmaWVsZC5uYW1lXSA9IGZpZWxkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpZWxkQnlOYW1lW2ZpZWxkXSA9IHsgbmFtZTogZmllbGQgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmllbGRCeU5hbWU7XG4gICAgICB9LCB7fSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1vZGVsO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBNb2RlbDsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZXh0ID0gcmVxdWlyZSgnLi4vY29yZS9leHQnKTtcblxudmFyIF9leHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0KTtcblxudmFyIF9saXN0ID0gcmVxdWlyZSgnLi4vY29yZS9saXN0Jyk7XG5cbnZhciBfbGlzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saXN0KTtcblxudmFyIF9vYnNlcnZhYmxlID0gcmVxdWlyZSgnLi4vbWl4aW4vb2JzZXJ2YWJsZScpO1xuXG52YXIgX29ic2VydmFibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JzZXJ2YWJsZSk7XG5cbnZhciBfYWpheCA9IHJlcXVpcmUoJy4vYWpheCcpO1xuXG52YXIgX2FqYXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWpheCk7XG5cbnZhciBfbW9kZWwgPSByZXF1aXJlKCcuL21vZGVsJyk7XG5cbnZhciBfbW9kZWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbW9kZWwpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikgeyByZXR1cm4gZnVuY3Rpb24gKCkgeyB2YXIgZ2VuID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgZnVuY3Rpb24gc3RlcChrZXksIGFyZykgeyB0cnkgeyB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7IHZhciB2YWx1ZSA9IGluZm8udmFsdWU7IH0gY2F0Y2ggKGVycm9yKSB7IHJlamVjdChlcnJvcik7IHJldHVybjsgfSBpZiAoaW5mby5kb25lKSB7IHJlc29sdmUodmFsdWUpOyB9IGVsc2UgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkgeyBzdGVwKFwibmV4dFwiLCB2YWx1ZSk7IH0sIGZ1bmN0aW9uIChlcnIpIHsgc3RlcChcInRocm93XCIsIGVycik7IH0pOyB9IH0gcmV0dXJuIHN0ZXAoXCJuZXh0XCIpOyB9KTsgfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHZhciBEYXRhU3RvcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRGF0YVN0b3JlKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERhdGFTdG9yZSk7XG5cbiAgICAgIHRoaXMudG90YWxDb3VudCA9IDA7XG4gICAgICB0aGlzLnBhZ2VTaXplID0gMDtcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSAxO1xuICAgICAgX2V4dDIuZGVmYXVsdC5leHRlbmQodGhpcywgY29uZmlnLCB7XG4gICAgICAgIG9ic2VydmFibGU6IF9vYnNlcnZhYmxlMi5kZWZhdWx0LmNyZWF0ZSgpXG4gICAgICB9KTtcbiAgICAgIHRoaXMuY3JlYXRlUmVjb3JkID0gZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgICByZXR1cm4gbmV3IF9tb2RlbDIuZGVmYXVsdChyZWNvcmQsIF90aGlzKTtcbiAgICAgIH07XG4gICAgICB0aGlzLmRhdGEgPSAoMCwgX2xpc3QyLmRlZmF1bHQpKGNvbmZpZy5kYXRhIHx8IFtdKS5tYXAodGhpcy5jcmVhdGVSZWNvcmQpO1xuICAgICAgdGhpcy5zdWJzY3JpYmUgPSBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLm9ic2VydmFibGUuc3Vic2NyaWJlKG9ic2VydmVyKTtcbiAgICAgIH07XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5vYnNlcnZhYmxlLnVuc3Vic2NyaWJlKG9ic2VydmVyKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKERhdGFTdG9yZSwgW3tcbiAgICAgIGtleTogJ2NsZWFyRGF0YScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2xlYXJEYXRhKCkge1xuICAgICAgICB2YXIgc2lsZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBmYWxzZTtcblxuICAgICAgICB0aGlzLmRhdGEgPSAoMCwgX2xpc3QyLmRlZmF1bHQpKFtdKTtcbiAgICAgICAgaWYgKCFzaWxlbnQpIHtcbiAgICAgICAgICB0aGlzLm9ic2VydmFibGUuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2xvYWQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9yZWYgPSBfYXN5bmNUb0dlbmVyYXRvcihyZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlKHByb3h5KSB7XG4gICAgICAgICAgdmFyIHJlc3BvbnNlO1xuICAgICAgICAgIHJldHVybiByZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgIHByb3h5ID0gX2V4dDIuZGVmYXVsdC5leHRlbmQoe30sIHRoaXMucHJveHksIHByb3h5IHx8IHt9KTtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAzO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9hamF4Mi5kZWZhdWx0LnJlcXVlc3QocHJveHkpO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfY29udGV4dC5zZW50O1xuXG4gICAgICAgICAgICAgICAgICByZXNwb25zZSAmJiB0aGlzLmxvYWREYXRhKHJlc3BvbnNlKTtcblxuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIF9jYWxsZWUsIHRoaXMpO1xuICAgICAgICB9KSk7XG5cbiAgICAgICAgZnVuY3Rpb24gbG9hZChfeDIpIHtcbiAgICAgICAgICByZXR1cm4gX3JlZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxvYWQ7XG4gICAgICB9KClcbiAgICB9LCB7XG4gICAgICBrZXk6ICdsb2FkRGF0YScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZERhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLmNsZWFyRGF0YSh0cnVlKTtcbiAgICAgICAgdGhpcy5kYXRhID0gKDAsIF9saXN0Mi5kZWZhdWx0KSgodGhpcy5wcm94eSAmJiB0aGlzLnByb3h5LnJlYWRlciAmJiB0aGlzLnByb3h5LnJlYWRlci5yb290UHJvcGVydHkgPyBkYXRhW3RoaXMucHJveHkucmVhZGVyLnJvb3RQcm9wZXJ0eV0gOiBkYXRhKSB8fCBbXSkubWFwKHRoaXMuY3JlYXRlUmVjb3JkKTtcbiAgICAgICAgaWYgKHRoaXMucGFnZVNpemUgJiYgZGF0YSkge1xuICAgICAgICAgIHRoaXMudG90YWxDb3VudCA9IGRhdGFbdGhpcy5wcm94eS5yZWFkZXIudG90YWxQcm9wZXJ0eV0gfHwgdGhpcy5jb3VudCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub2JzZXJ2YWJsZS5jYWxsKHRoaXMpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2xvYWRQYWdlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkUGFnZShwYWdlKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBwYWdlO1xuICAgICAgICB2YXIgcHJveHkgPSBfZXh0Mi5kZWZhdWx0LmV4dGVuZCh7fSwgdGhpcy5wcm94eSwgeyB1cmw6IHRoaXMucHJveHkudXJsICsgJz9wYWdlPScgKyB0aGlzLmN1cnJlbnRQYWdlIH0pO1xuICAgICAgICByZXR1cm4gbG9hZChwcm94eSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnY291bnQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvdW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmNvdW50KCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZ2V0RGF0YScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5jb2xsZWN0KCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZ2V0QXQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEF0KGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuZ2V0QXQoaW5kZXgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3JlbW92ZUF0JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVBdChpbmRleCwgY291bnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5yZW1vdmVBdChpbmRleCwgY291bnQpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3JlbW92ZUFsbCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlQWxsKCkge1xuICAgICAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICAgICAgdGhpcy5vYnNlcnZhYmxlLmNhbGwodGhpcyk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZmlsdGVyQnknLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGZpbHRlckJ5KHByZWRpY2F0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmZpbHRlcihwcmVkaWNhdGUpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3N1YnNjcmliZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2YWJsZS5zdWJzY3JpYmUob2JzZXJ2ZXIpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3Vuc3Vic2NyaWJlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB1bnN1YnNjcmliZShvYnNlcnZlcikge1xuICAgICAgICB0aGlzLm9ic2VydmFibGUudW5zdWJzY3JpYmUob2JzZXJ2ZXIpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NvbW1pdENoYW5nZXMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbW1pdENoYW5nZXMoKSB7XG4gICAgICAgICgwLCBfbGlzdDIuZGVmYXVsdCkodGhpcy5kYXRhKS5lYWNoKGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgICByZXR1cm4gcmVjb3JkLnNhdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub2JzZXJ2YWJsZS5jYWxsKHRoaXMpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3JlamVjdENoYW5nZXMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlamVjdENoYW5nZXMoKSB7XG4gICAgICAgICgwLCBfbGlzdDIuZGVmYXVsdCkodGhpcy5kYXRhKS5lYWNoKGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgICByZXR1cm4gcmVjb3JkLnJlamVjdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vYnNlcnZhYmxlLmNhbGwodGhpcyk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnc3luYycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3JlZjIgPSBfYXN5bmNUb0dlbmVyYXRvcihyZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlMihwcm94eSkge1xuICAgICAgICAgIHJldHVybiByZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlMiQoX2NvbnRleHQyKSB7XG4gICAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0Mi5wcmV2ID0gX2NvbnRleHQyLm5leHQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICBwcm94eSA9IF9leHQyLmRlZmF1bHQuZXh0ZW5kKHt9LCB0aGlzLnByb3h5LCBwcm94eSB8fCB7fSk7XG4gICAgICAgICAgICAgICAgICBwcm94eS5tZXRob2QgPSAncG9zdCc7XG4gICAgICAgICAgICAgICAgICBwcm94eS5wYXJhbXMgPSAoMCwgX2xpc3QyLmRlZmF1bHQpKHRoaXMuZ2V0TW9kaWZpZWRSZWNvcmRzKCkpLm1hcChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWNvcmQuZGF0YTtcbiAgICAgICAgICAgICAgICAgIH0pLmNvbGxlY3QoKTtcbiAgICAgICAgICAgICAgICAgIGlmIChwcm94eS53cml0dGVyICYmIHByb3h5LndyaXR0ZXIudHJhbnNmb3JtKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3h5LnBhcmFtcyA9IHByb3h5LndyaXR0ZXIudHJhbnNmb3JtKHByb3h5LnBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDY7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2FqYXgyLmRlZmF1bHQucmVxdWVzdChwcm94eSk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLmFicnVwdCgncmV0dXJuJywgX2NvbnRleHQyLnNlbnQpO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLnN0b3AoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIF9jYWxsZWUyLCB0aGlzKTtcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHN5bmMoX3gzKSB7XG4gICAgICAgICAgcmV0dXJuIF9yZWYyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3luYztcbiAgICAgIH0oKVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2dldE1vZGlmaWVkUmVjb3JkcycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TW9kaWZpZWRSZWNvcmRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmZpbHRlcihmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlY29yZC5pc01vZGlmaWVkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBEYXRhU3RvcmU7XG4gIH0oKTtcblxuICByZXR1cm4gbmV3IERhdGFTdG9yZSgpO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcikge1xuICB2YXIgZm4gPSBkZXNjcmlwdG9yLnZhbHVlO1xuXG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0BiaW5kIGRlY29yYXRvciBpcyBvbmx5IGFwcGxpZWQgdG8gZnVuY3Rpb25zIG5vdDogJyArICh0eXBlb2YgZm4gPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGZuKSkpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gZm4uYmluZCh0aGlzKTtcbiAgICB9XG4gIH07XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9leHQgPSByZXF1aXJlKCcuLi9jb3JlL2V4dCcpO1xuXG52YXIgX2V4dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHQpO1xuXG52YXIgX2xpc3QgPSByZXF1aXJlKCcuLi9jb3JlL2xpc3QnKTtcblxudmFyIF9saXN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpc3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgT2JzZXJ2YWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gT2JzZXJ2YWJsZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgT2JzZXJ2YWJsZSk7XG5cbiAgICB0aGlzLm9ic2VydmVycyA9IFtdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE9ic2VydmFibGUsIFt7XG4gICAga2V5OiAnc3Vic2NyaWJlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICB0aGlzLm9ic2VydmVycy5wdXNoKG9ic2VydmVyKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd1bnN1YnNjcmliZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICAoMCwgX2xpc3QyLmRlZmF1bHQpKHRoaXMub2JzZXJ2ZXJzKS5lYWNoKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgsIG9ic2VydmVycykge1xuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG9ic2VydmVyICYmIG9ic2VydmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2FsbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhbGwoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICAoMCwgX2xpc3QyLmRlZmF1bHQpKHRoaXMub2JzZXJ2ZXJzKS5lYWNoKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICByZXR1cm4gb2JzZXJ2ZXIuYXBwbHkoX3RoaXMsIGFyZ3MpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6ICdjcmVhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdmcm9tRXZlbnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmcm9tRXZlbnQodGFyZ2V0LCBldmVudE5hbWUpIHtcbiAgICAgIHJldHVybiBuZXcgRXZlbnRPYnNlcnZhYmxlKHRhcmdldCwgZXZlbnROYW1lKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gT2JzZXJ2YWJsZTtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gT2JzZXJ2YWJsZTtcblxudmFyIEV2ZW50T2JzZXJ2YWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRXZlbnRPYnNlcnZhYmxlKHRhcmdldCwgZXZlbnROYW1lKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEV2ZW50T2JzZXJ2YWJsZSk7XG5cbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICB0aGlzLmV2ZW50TmFtZSA9IGV2ZW50TmFtZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhFdmVudE9ic2VydmFibGUsIFt7XG4gICAga2V5OiAnc3Vic2NyaWJlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKHRoaXMuZXZlbnROYW1lLCBvYnNlcnZlciwgZmFsc2UpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Vuc3Vic2NyaWJlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5zdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5ldmVudE5hbWUsIG9ic2VydmVyLCBmYWxzZSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEV2ZW50T2JzZXJ2YWJsZTtcbn0oKTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcikge1xuICB2YXIgZm4gPSBkZXNjcmlwdG9yLnZhbHVlO1xuXG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0B3aXRoUHJvcHMgZGVjb3JhdG9yIGlzIG9ubHkgYXBwbGllZCB0byBmdW5jdGlvbnMgbm90OiAnICsgKHR5cGVvZiBmbiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoZm4pKSk7XG4gIH1cblxuICBkZXNjcmlwdG9yLnZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmbi5iaW5kKHRoaXMpKHRoaXMucHJvcHMpO1xuICB9O1xuICByZXR1cm4gZGVzY3JpcHRvcjtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpIHtcbiAgdmFyIGZuID0gZGVzY3JpcHRvci52YWx1ZTtcblxuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdAd2l0aFN0YXRlIGRlY29yYXRvciBpcyBvbmx5IGFwcGxpZWQgdG8gZnVuY3Rpb25zIG5vdDogJyArICh0eXBlb2YgZm4gPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGZuKSkpO1xuICB9XG5cbiAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZm4uYmluZCh0aGlzKSh0aGlzLnN0YXRlKTtcbiAgfTtcbiAgcmV0dXJuIGRlc2NyaXB0b3I7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuRHJvcGRvd24gPSBleHBvcnRzLkJ1dHRvbiA9IGV4cG9ydHMuRmllbGQgPSBleHBvcnRzLkdyaWQgPSBleHBvcnRzLkNvbnRhaW5lciA9IGV4cG9ydHMuTGluayA9IGV4cG9ydHMuSGFzaFJvdXRlciA9IGV4cG9ydHMuUm91dGUgPSBleHBvcnRzLmJpbmQgPSBleHBvcnRzLndpdGhQcm9wcyA9IGV4cG9ydHMuT2JzZXJ2YWJsZSA9IGV4cG9ydHMuQ29tcG9uZW50ID0gZXhwb3J0cy5TZXJ2aWNlID0gZXhwb3J0cy5Nb2RlbCA9IGV4cG9ydHMuU3RvcmUgPSBleHBvcnRzLkNhY2hlID0gZXhwb3J0cy5BamF4ID0gZXhwb3J0cy5NYXAgPSBleHBvcnRzLkxpc3QgPSBleHBvcnRzLlN0cmluZyA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9zdHJpbmcgPSByZXF1aXJlKCcuL2NvcmUvc3RyaW5nJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU3RyaW5nJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RyaW5nKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9saXN0ID0gcmVxdWlyZSgnLi9jb3JlL2xpc3QnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGlzdCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfbWFwID0gcmVxdWlyZSgnLi9jb3JlL21hcCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01hcCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hcCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfYWpheCA9IHJlcXVpcmUoJy4vZGF0YS9hamF4Jyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnQWpheCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FqYXgpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2NhY2hlID0gcmVxdWlyZSgnLi9kYXRhL2NhY2hlJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnQ2FjaGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jYWNoZSkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfc3RvcmUgPSByZXF1aXJlKCcuL2RhdGEvc3RvcmUnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTdG9yZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0b3JlKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9tb2RlbCA9IHJlcXVpcmUoJy4vZGF0YS9tb2RlbCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01vZGVsJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbW9kZWwpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX3NlcnZpY2UgPSByZXF1aXJlKCcuL2FwcC9zZXJ2aWNlJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2VydmljZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NlcnZpY2UpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2NvbXBvbmVudCA9IHJlcXVpcmUoJy4vYXBwL2NvbXBvbmVudCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0NvbXBvbmVudCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBvbmVudCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfb2JzZXJ2YWJsZSA9IHJlcXVpcmUoJy4vbWl4aW4vb2JzZXJ2YWJsZScpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ09ic2VydmFibGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYnNlcnZhYmxlKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF93aXRoUHJvcHMgPSByZXF1aXJlKCcuL21peGluL3dpdGgtcHJvcHMnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd3aXRoUHJvcHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93aXRoUHJvcHMpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2JpbmQgPSByZXF1aXJlKCcuL21peGluL2JpbmQnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdiaW5kJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmluZCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfcm91dGVyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3JvdXRlcicpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JvdXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcm91dGVyKS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnSGFzaFJvdXRlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9yb3V0ZXIuSGFzaFJvdXRlcjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfcm91dGVyLkxpbms7XG4gIH1cbn0pO1xuXG52YXIgX2NvbnRhaW5lciA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9jb250YWluZXInKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdDb250YWluZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb250YWluZXIpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2dyaWQgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvZ3JpZCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0dyaWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ncmlkKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9mb3JtID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2Zvcm0nKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGaWVsZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9mb3JtLkZpZWxkO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnQnV0dG9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2Zvcm0uQnV0dG9uO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRHJvcGRvd24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfZm9ybS5Ecm9wZG93bjtcbiAgfVxufSk7XG5cbnJlcXVpcmUoJ2JhYmVsLXBvbHlmaWxsJyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX2V4dCA9IHJlcXVpcmUoJy4vY29yZS9leHQnKTtcblxudmFyIF9leHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0KTtcblxudmFyIF9saXN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpc3QpO1xuXG52YXIgX2FqYXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWpheCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHZhciBnZW4gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyBmdW5jdGlvbiBzdGVwKGtleSwgYXJnKSB7IHRyeSB7IHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTsgdmFyIHZhbHVlID0gaW5mby52YWx1ZTsgfSBjYXRjaCAoZXJyb3IpIHsgcmVqZWN0KGVycm9yKTsgcmV0dXJuOyB9IGlmIChpbmZvLmRvbmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0gZWxzZSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7IHN0ZXAoXCJuZXh0XCIsIHZhbHVlKTsgfSwgZnVuY3Rpb24gKGVycikgeyBzdGVwKFwidGhyb3dcIiwgZXJyKTsgfSk7IH0gfSByZXR1cm4gc3RlcChcIm5leHRcIik7IH0pOyB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBSZXh0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBSZXh0KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZXh0KTtcblxuICAgIHRoaXMuZXh0ZW5kID0gX2V4dDIuZGVmYXVsdC5leHRlbmQ7XG4gICAgdGhpcy5hamF4ID0gZnVuY3Rpb24gKHNldHRpbmdzKSB7XG4gICAgICByZXR1cm4gX2FqYXgyLmRlZmF1bHQucmVxdWVzdChzZXR0aW5ncyk7XG4gICAgfTtcbiAgICB0aGlzLmdlbmVyYXRlU2V0dGVyID0gX2V4dDIuZGVmYXVsdC5nZW5lcmF0ZVNldHRlcjtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhSZXh0LCBbe1xuICAgIGtleTogJ2xhdW5jaCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfcmVmID0gX2FzeW5jVG9HZW5lcmF0b3IocmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZSh2aWV3cG9ydCkge1xuICAgICAgICB2YXIgcm9vdDtcbiAgICAgICAgcmV0dXJuIHJlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGlmICghd2luZG93LmxvY2F0aW9uLmhhc2gpIHtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJy8nO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJvb3QgPSBfZXh0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJzxkaXYgaWQ9XCJyZWFjdC1yb290XCI+PC9kaXY+Jyk7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJvb3QpO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0LnQwID0gX2V4dDIuZGVmYXVsdC5pc0Z1bmN0aW9uKHZpZXdwb3J0KTtcblxuICAgICAgICAgICAgICAgIGlmICghX2NvbnRleHQudDApIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA4O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZpZXdwb3J0KCk7XG5cbiAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIHZpZXdwb3J0ID0gX2NvbnRleHQuc2VudDtcblxuICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgKDAsIF9yZWFjdERvbS5yZW5kZXIpKHZpZXdwb3J0LCByb290KTtcblxuICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIF9jYWxsZWUsIHRoaXMpO1xuICAgICAgfSkpO1xuXG4gICAgICBmdW5jdGlvbiBsYXVuY2goX3gpIHtcbiAgICAgICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxhdW5jaDtcbiAgICB9KClcbiAgfV0pO1xuXG4gIHJldHVybiBSZXh0O1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBuZXcgUmV4dCgpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29tcG9uZW50IH0gZnJvbSAnQC9yZXh0J1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQC9yZXh0JztcblxuQFJvdXRlKCcvJylcbkBDb21wb25lbnQoe1xuICB2aWV3OiAoeyB2bSB9KSA9PiA8Q29udGFpbmVyIGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj48aDE+e3ZtLnRpdGxlfTwvaDE+PC9Db250YWluZXI+XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRpdGxlID0gJ0Rhc2hib2FyZCdcbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFJvdXRlLCBDb250YWluZXIgfSBmcm9tICdAL3JleHQnXG5cbkBSb3V0ZSgnKicpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPENvbnRhaW5lcj5cbiAgICAgIDxoMT5Ob3QgRm91bmQ8L2gxPlxuICAgIDwvQ29udGFpbmVyPlxuICB9XG59IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQC9yZXh0JztcbmltcG9ydCBDYXJkU3RvcmUgZnJvbSAnIy9zdG9yZXMvY2FyZCc7XG5pbXBvcnQgU2VhcmNoRm9ybVZpZXcgZnJvbSAnLi9zZWFyY2gtZm9ybS52aWV3JztcblxuQENvbXBvbmVudCh7XG4gIGNvbXBvbmVudEFzOiAnc2VhcmNoRm9ybScsXG4gIHZpZXc6IFNlYXJjaEZvcm1WaWV3XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoRm9ybSB7XG4gIHNlYXJjaCgpIHtcbiAgICBDYXJkU3RvcmUubG9hZCgpO1xuICB9XG5cbiAgdGVzdCgpIHtcbiAgICBDYXJkU3RvcmUuZ2V0QXQoMCkuc2V0KCdOYW1lJywgJ05ldyBOYW1lJyk7XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFByb3BzLCBGaWVsZCwgRHJvcGRvd24sIEJ1dHRvbiB9IGZyb20gJ0AvcmV4dCc7XG5pbXBvcnQgQ2FyZFR5cGVTdG9yZSBmcm9tICcjL3N0b3Jlcy9jYXJkLXR5cGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hGb3JtVmlldyBleHRlbmRzIENvbXBvbmVudCB7XG4gIEB3aXRoUHJvcHNcbiAgcmVuZGVyKHsgc2VhcmNoRm9ybSB9KSB7XG4gICAgcmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZm9ybS1pbmxpbmVcIj5cbiAgICAgIDxGaWVsZCBjbGFzc05hbWU9XCJtci1zbVwiIC8+XG4gICAgICA8RHJvcGRvd24gc3RvcmU9e0NhcmRUeXBlU3RvcmV9IGZpZWxkTGFiZWw9XCJDYXJkIFR5cGVcIiBjbGFzc05hbWU9XCJtci1zbVwiIC8+XG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInByaW1hcnkgbXItc21cIiB0ZXh0PVwiU2VhcmNoXCIgb25DbGljaz17c2VhcmNoRm9ybS5zZWFyY2h9IC8+XG4gICAgPC9zZWN0aW9uPjtcbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQsIERyb3Bkb3duIH0gZnJvbSAnQC9yZXh0JztcbmltcG9ydCBDYXJkU3RvcmUgZnJvbSAnIy9zdG9yZXMvY2FyZCc7XG5pbXBvcnQgQ2FyZFR5cGVTdG9yZSBmcm9tICcjL3N0b3Jlcy9jYXJkLXR5cGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hSZXN1bHQgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxDb250YWluZXI+XG4gICAgICA8R3JpZCBzdG9yZT17Q2FyZFN0b3JlfT5cbiAgICAgICAgPGRpdiB0ZXh0PVwiSURcIiBkYXRhSW5kZXg9XCJJZFwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3t3aWR0aDoxNTB9fSAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJOYW1lXCIgZGF0YUluZGV4PVwiTmFtZVwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3t3aWR0aDoyNTB9fSBlZGl0YWJsZSAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJUeXBlXCIgZGF0YUluZGV4PVwiVHlwZVwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3t3aWR0aDoxMDB9fSBlZGl0YWJsZT17e3R5cGU6J2Ryb3Bkb3duJyxzdG9yZTpDYXJkVHlwZVN0b3JlLGZpZWxkTGFiZWw6J0NhcmQgVHlwZSd9fSAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJJbnRyb2R1Y3Rpb25cIiBkYXRhSW5kZXg9XCJJbnRyb2R1Y3Rpb25cIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6MTAwMH19IC8+XG4gICAgICAgIDxkaXYgdGV4dD1cIlNUUlwiIGRhdGFJbmRleD1cIlNUUlwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3t3aWR0aDo1MH19IC8+XG4gICAgICAgIDxkaXYgdGV4dD1cIkFHSVwiIGRhdGFJbmRleD1cIkFHSVwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3t3aWR0aDo1MH19IC8+XG4gICAgICAgIDxkaXYgdGV4dD1cIkhQXCIgZGF0YUluZGV4PVwiSFBcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6NTB9fSAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJERVhcIiBkYXRhSW5kZXg9XCJERVhcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6NTB9fSAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJJTlRcIiBkYXRhSW5kZXg9XCJJTlRcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6NTB9fSAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJTRU5cIiBkYXRhSW5kZXg9XCJTRU5cIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6NTB9fSAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJBcm1vclwiIGRhdGFJbmRleD1cIkFybW9yVXNhYmxlXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiBzdHlsZT17e3dpZHRoOjEwMH19IC8+XG4gICAgICAgIDxkaXYgdGV4dD1cIldlYXBvblwiIGRhdGFJbmRleD1cIldlYXBvblVzYWJsZVwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3t3aWR0aDoxMDB9fSAvPlxuICAgICAgPC9HcmlkPlxuICAgIDwvQ29udGFpbmVyPjtcbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29udGFpbmVyIH0gZnJvbSAnQC9yZXh0JztcbmltcG9ydCBTZWFyY2hGb3JtIGZyb20gJy4vc2VhcmNoLWZvcm0nO1xuaW1wb3J0IFNlYXJjaFJlc3VsdCBmcm9tICcuL3NlYXJjaC1yZXN1bHQnO1xuXG5AUm91dGUoJy9zZWFyY2gnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Q29udGFpbmVyIGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj5cbiAgICAgIDxoMT5TZWFyY2g8L2gxPlxuICAgICAgPFNlYXJjaEZvcm0gLz5cbiAgICAgIDxTZWFyY2hSZXN1bHQgLz5cbiAgICA8L0NvbnRhaW5lcj47XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGZvb3Rlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHRleHQtY2VudGVyXCI+JmNvcHk7IDIwMTcgaHV5dHJvbmduZ3V5ZW48L2Rpdj5cbiAgICA8L2Zvb3Rlcj47XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgQ2FjaGUgfSBmcm9tICdAL3JleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGhlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhbmRcIj5SZWFjdCBDTVM8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1yLWF1dG9cIj5cbiAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPkRhc2hib2FyZDwvTGluaz5cbiAgICAgICAgICA8TGluayB0bz1cIi9zZWFyY2hcIiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlNlYXJjaDwvTGluaz5cbiAgICAgICAgICA8TGluayB0bz1cIi9yZXBvcnRpbmdcIiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlJlcG9ydGluZzwvTGluaz5cbiAgICAgICAgICA8TGluayB0bz1cIi9hZG1pblwiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+QWRtaW5pc3RyYXRpb248L0xpbms+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxkaXY+SGVsbG8sIDxzdHJvbmc+e0NhY2hlLmdldCgnY29uZmlndXJhdGlvbicpLm5hbWV9PC9zdHJvbmc+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj47XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IC4uLm90aGVycyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gPG5hdiB7Li4ub3RoZXJzfSAvPjtcbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8YXNpZGUgc3R5bGU9e3t3aWR0aDoxMDB9fSAvPjtcbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIsIEhhc2hSb3V0ZXIgfSBmcm9tICdAL3JleHQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgU2lkZSBmcm9tICcuL3NpZGUnO1xuaW1wb3J0IE5hdiBmcm9tICcuL25hdic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxDb250YWluZXI+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8Q29udGFpbmVyIGhib3g+XG4gICAgICAgIDxDb250YWluZXIgaWQ9XCJtYWluLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxOYXYgLz5cbiAgICAgICAgICA8SGFzaFJvdXRlciAvPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvQ29udGFpbmVyPjtcbiAgfVxufSIsImltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZXh0IGZyb20gJ0AvcmV4dCc7XG5pbXBvcnQgQ29tbW9uU2VydmljZSBmcm9tICcuL3NlcnZpY2VzL2NvbW1vbic7XG5pbXBvcnQgVmlld3BvcnQgZnJvbSAnLi9jb21wb25lbnRzL3ZpZXdwb3J0L3ZpZXdwb3J0JztcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnLi9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaCc7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi9jb21wb25lbnRzL25vdGZvdW5kL25vdGZvdW5kJztcblxuUmV4dC5sYXVuY2goYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBDb21tb25TZXJ2aWNlLmluaXRBcHAoKTtcbiAgcmV0dXJuIDxWaWV3cG9ydCAvPjtcbn0pOyIsImltcG9ydCBSZXh0LCB7IFNlcnZpY2UsIEFqYXgsIENhY2hlIH0gZnJvbSAnQC9yZXh0JztcblxuQFNlcnZpY2VcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgYXN5bmMgaW5pdEFwcCgpIHtcbiAgICBhd2FpdCBBamF4LnJlcXVlc3Qoe1xuICAgICAgdXJsOiAnL2FwaS9jb25maWd1cmF0aW9uJyxcbiAgICAgIG5leHQ6IGNvbmZpZ3VyYXRpb24gPT4gQ2FjaGUuc2V0KCdjb25maWd1cmF0aW9uJywgY29uZmlndXJhdGlvbilcbiAgICB9KTtcbiAgfVxufSIsImltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQC9yZXh0J1xuXG5leHBvcnQgZGVmYXVsdCBTdG9yZSh7XG4gIHN0b3JlSWQ6ICdDYXJkVHlwZVN0b3JlJyxcbiAgZGF0YTogWydNZWxlZScsICdTaG9vdCcsICdNYWdpYyddXG59KTsiLCJpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0AvcmV4dCdcblxuZXhwb3J0IGRlZmF1bHQgU3RvcmUoe1xuICBzdG9yZUlkOiAnQ2FyZFN0b3JlJyxcbiAgcHJveHk6IHtcbiAgICB1cmw6ICcvYXBpL2NhcmRzJyxcbiAgICBtZXRob2Q6ICdwb3N0J1xuICB9XG59KTsiXX0=
