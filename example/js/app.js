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

},{"../core/ext":14,"../core/list":15,"../core/map":16,"../mixin/observable":24,"react":"react"}],2:[function(require,module,exports){
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
exports.MsgBox = exports.Toast = exports.Dialog = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _desc, _value, _class;

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

var _reactDom = require('react-dom');

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

var _bind = require('../mixin/bind');

var _bind2 = _interopRequireDefault(_bind);

var _container = require('./container');

var _container2 = _interopRequireDefault(_container);

var _form = require('./form');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
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

      return _react2.default.createElement(_container2.default, _extends({ className: 'dialog ' + (className || '') }, others), _react2.default.createElement('div', { className: 'dialog-header' }, _react2.default.createElement('p', { className: 'dialog-title text-sm-center' }, title || ''), closeButton && _react2.default.createElement('span', { className: 'tool', onClick: this.dispose })), _react2.default.createElement(_container2.default, { className: 'dialog-body' }, _react2.default.createElement(_container2.default, null, children)));
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
}(_react.Component), _applyDecoratedDescriptor(_class.prototype, 'dispose', [_bind2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'dispose'), _class.prototype), _class);

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

      return _react2.default.createElement(_container2.default, null, _react2.default.createElement('h6', { className: 'font-weight-bold' }, alert[type].title), _react2.default.createElement('div', { className: 'd-flex flex-row' }, _react2.default.createElement('div', { className: 'toast-icon' }, _react2.default.createElement('i', { className: 'fa fa-2x fa-' + alert[type].icon + '-circle' })), _react2.default.createElement('div', { className: 'toast-content' }, message)));
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

      return _react2.default.createElement(Dialog, { title: title, closeButton: closeButton }, !icon && _react2.default.createElement('div', { className: 'd-flex flex-row' }, message), icon && _react2.default.createElement('div', { className: 'd-flex flex-row' }, _react2.default.createElement('div', { className: 'toast-icon mr-sm' }, _react2.default.createElement('i', { className: 'fa fa-2x fa-' + icon + '-circle' })), _react2.default.createElement('div', { className: 'toast-content' }, message)), _react2.default.createElement('div', { className: 'text-sm-center mt-sm' }, buttons === 'OKCANCEL' && _react2.default.createElement(_form.Button, { className: 'mr-sm', text: buttonText.cancel || 'Cancel', onClick: function onClick() {
          return _this4.dispose();
        } }), _react2.default.createElement(_form.Button, { text: buttonText.ok || 'OK', onClick: function onClick() {
          _this4.dispose();fn && fn();
        } })));
    }
  }, {
    key: 'dispose',
    value: function dispose() {
      DialogManager.destroy(_ext2.default.getComp(this).parent());
    }
  }]);

  return MsgBox;
}(_react.Component);

},{"../core/ext":14,"../mixin/bind":23,"./container":3,"./form":5,"react":"react","react-dom":"react-dom"}],5:[function(require,module,exports){
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

},{"../core/ext":14,"../core/list":15,"../mixin/bind":23,"../mixin/observable":24,"../mixin/with-props":25,"../mixin/with-state":26,"react":"react","react-dom":"react-dom"}],6:[function(require,module,exports){
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
      checkColumn: props.checkColumn,
      headerTpl: props.headerTpl,
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
      }, this.props.checkColumn ? _ext2.default.CHECK_COLUMN_WIDTH : 0),
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

},{"../core/ext":14,"../core/list":15,"../core/number":17,"../mixin/bind":23,"../mixin/observable":24,"../mixin/with-props":25,"./container":3,"./grid/body":7,"./grid/header":9,"./grid/paging-toolbar":10,"react":"react"}],7:[function(require,module,exports){
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

},{"../../mixin/with-props":25,"../container":3,"./row":11,"react":"react"}],8:[function(require,module,exports){
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

},{"../../core/ext":14,"../../mixin/bind":23,"../../mixin/with-props":25,"../form":5,"react":"react"}],9:[function(require,module,exports){
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
          store = _ref.store,
          columns = _ref.columns,
          headerTpl = _ref.headerTpl;

      return _react2.default.createElement('section', { className: 'rx-grid-header', style: { width: width } }, _react2.default.createElement('div', { className: 'rx-grid-header-container d-flex flex-row', style: { width: headerWidth } }, checkColumn && _react2.default.createElement('div', { className: 'rx-grid-column-header text-sm-center', style: { width: _ext2.default.CHECK_COLUMN_WIDTH } }, checkColumn === 'multiple' && _react2.default.createElement(_form.Checkbox, { disabled: store.count() === 0, onClick: function onClick() {
          return store.toggleSelectAll();
        } })), headerTpl && _react2.default.createElement(headerTpl, { columns: columns }), !headerTpl && columns && columns.map(function (col) {
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

},{"../../core/ext":14,"../../mixin/with-props":25,"../form":5,"react":"react"}],10:[function(require,module,exports){
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

var _ext = require('../../core/ext');

var _ext2 = _interopRequireDefault(_ext);

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
    _ext2.default.generateSetter(_this.state, _this);
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
          data = _ref$store.data,
          totalCount = _ref$store.totalCount,
          pageSize = _ref$store.pageSize,
          currentPage = _ref$store.currentPage;
      var page = this.state.page,
          firstIndex = (currentPage - 1) * pageSize + 1,
          lastIndex = firstIndex + data.count() - 1,
          totalPages = Math.ceil(totalCount / pageSize) || 0;

      return _react2.default.createElement('section', { className: 'toolbar top row' }, _react2.default.createElement('div', { className: 'col-6' }, totalCount > 0 && 'Displaying ' + firstIndex + ' - ' + lastIndex + ' of ' + totalCount), _react2.default.createElement('div', { className: 'col-6' }, _react2.default.createElement('div', { className: 'float-right' }, _react2.default.createElement('div', { className: 'input-group' }, _react2.default.createElement(_form.Button, { className: 'input-group-addon', disabled: totalCount === 0, onClick: function onClick() {
          return _this2.loadPage(currentPage);
        }, text: 'Refresh' }), _react2.default.createElement(_form.Button, { className: 'input-group-addon', disabled: currentPage === 1, onClick: function onClick() {
          return _this2.loadPage(1);
        }, text: 'First' }), _react2.default.createElement(_form.Button, { className: 'input-group-addon', disabled: currentPage === 1, onClick: function onClick() {
          return _this2.loadPage(currentPage - 1);
        }, text: 'Previous' }), _react2.default.createElement('span', { className: 'input-group-addon' }, 'Page'), _react2.default.createElement(_form.Field, { value: page, className: 'w5 text-center input-group-addon', disabled: page === 0, onChange: this.setPage, onEnter: function onEnter(page) {
          return _this2.loadPage(page);
        } }), _react2.default.createElement('span', { className: 'input-group-addon' }, 'of ', totalPages), _react2.default.createElement(_form.Button, { className: 'input-group-addon', disabled: totalPages === 0 || currentPage === totalPages, onClick: function onClick() {
          return _this2.loadPage(currentPage + 1);
        }, text: 'Next' }), _react2.default.createElement(_form.Button, { className: 'input-group-addon', disabled: totalPages === 0 || currentPage === totalPages, onClick: function onClick() {
          return _this2.loadPage(totalPages);
        }, text: 'Last' })))));
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

},{"../../core/ext":14,"../../mixin/bind":23,"../../mixin/with-props":25,"../form":5,"react":"react"}],11:[function(require,module,exports){
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

var _withProps = require('../../mixin/with-props');

var _withProps2 = _interopRequireDefault(_withProps);

var _bind = require('../../mixin/bind');

var _bind2 = _interopRequireDefault(_bind);

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

      return _react2.default.createElement('article', { className: _ext2.default.className(['rx-grid-row d-flex flex-row', { 'selected': record.selected }]) }, checkColumn && _react2.default.createElement('div', { className: 'rx-grid-cell text-sm-center', style: { width: _ext2.default.CHECK_COLUMN_WIDTH } }, _react2.default.createElement(_form.Checkbox, { checked: record.selected, onCheckChange: this.toggleSelect })), columns && columns.map(function (col) {
        return _react2.default.createElement(_cell2.default, _extends({ record: record, rowIndex: rowIndex }, col));
      }));
    }
  }, {
    key: 'toggleSelect',
    value: function toggleSelect() {
      var _props = this.props,
          record = _props.record,
          checkColumn = _props.checkColumn;

      if (record.selected) {
        record.setSelected(false);
      } else {
        if (checkColumn !== 'multiple') {
          record.store.getSelectedRecords().each(function (record) {
            return record.setSelected(false);
          });
        }
        record.setSelected(true);
      }
    }
  }]);

  return GridRow;
}(_react.Component), (_applyDecoratedDescriptor(_class.prototype, 'render', [_withProps2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'toggleSelect', [_bind2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'toggleSelect'), _class.prototype)), _class);
exports.default = GridRow;

},{"../../core/ext":14,"../../mixin/bind":23,"../../mixin/with-props":25,"../form":5,"./cell":8,"react":"react"}],12:[function(require,module,exports){
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

},{"../core/list":15,"../mixin/observable":24,"react":"react"}],13:[function(require,module,exports){
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

var Component = function () {
  function Component(comp) {
    _classCallCheck(this, Component);

    this.comp = (0, _reactDom.findDOMNode)(comp);
  }

  _createClass(Component, [{
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

  return Component;
}();

exports.default = Component;

},{"react-dom":"react-dom"}],14:[function(require,module,exports){
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
    this.CHECK_COLUMN_WIDTH = 33;
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
    key: 'createElement',
    value: function createElement(html) {
      var div = document.createElement('div');
      div.innerHTML = html;
      return div.children[0];
    }
  }, {
    key: 'append',
    value: function append(html) {
      var dom = this.createElement(html);
      document.body.appendChild(dom);
      return dom;
    }
  }, {
    key: 'extend',
    value: function extend() {
      return Object.assign.apply(null, arguments); // immutable object
    }
  }, {
    key: 'clone',
    value: function clone(obj) {
      return JSON.parse(JSON.stringify(obj)); // deep clone
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
    key: 'isString',
    value: function isString(value) {
      return typeof value === 'string';
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

},{"./component":13,"./list":15,"./string":18}],15:[function(require,module,exports){
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
    key: "findIndex",
    value: function findIndex(predicate) {
      var index = -1;
      for (var idx = 0, item; (item = this.array[idx]) != null; ++idx) {
        if (predicate(item, idx, this.array)) {
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
      return index > -1 ? this.array[index] : null;
    }
  }, {
    key: "contains",
    value: function contains(predicate) {
      return this.find(predicate) !== null;
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
  }, {
    key: "join",
    value: function join(separator) {
      return this.array.join(separator);
    }
  }]);

  return List;
}();

exports.default = function (value) {
  return new List(value);
};

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

},{"./list":15}],17:[function(require,module,exports){
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

},{}],19:[function(require,module,exports){
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

},{"../core/ext":14,"../core/string":18}],20:[function(require,module,exports){
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
    this.selected = false;
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
      this.phantom = _ext2.default.clone(this.data);
    }
  }, {
    key: 'reject',
    value: function reject() {
      this.data = _ext2.default.clone(this.phantom);
      this.save();
    }
  }, {
    key: 'isModified',
    value: function isModified(fieldName) {
      var _this = this;

      if (fieldName) {
        var field = this.fields.find(function (field) {
          return field.name === fieldName;
        });
        return !field ? false : !this.isEqual(field);
      }

      return this.fields.contains(function (field) {
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
      return (0, _list2.default)(fields).map(function (field) {
        if (_ext2.default.isString(field)) {
          return { name: field };
        } else {
          return field;
        }
      });
    }
  }, {
    key: 'setSelected',
    value: function setSelected(selected) {
      this.selected = selected;
      this.store && this.store.observable.call(this.store);
    }
  }, {
    key: 'isNewlyCreated',
    value: function isNewlyCreated() {
      var idProperty = this.store && this.store.idProperty ? this.store.idProperty : id;
      return !this.phantom[idProperty];
    }
  }]);

  return Model;
}();

exports.default = Model;

},{"../core/ext":14,"../core/list":15,"../core/map":16,"../mixin/observable":24}],22:[function(require,module,exports){
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

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  } else {
    return Array.from(arr);
  }
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
          this.totalCount = this.proxy && this.proxy.reader && this.proxy.reader.totalProperty ? data[this.proxy.reader.totalProperty] : this.count();
        }
        this.observable.call(this);
      }
    }, {
      key: 'loadPage',
      value: function loadPage(page) {
        this.currentPage = page;
        var proxy = _ext2.default.extend({}, this.proxy, { url: this.proxy.url + '?page=' + this.currentPage });
        return this.load(proxy);
      }
    }, {
      key: 'reloadPage',
      value: function reloadPage() {
        var proxy = _ext2.default.extend({}, this.proxy, { url: this.proxy.url + '?page=' + (this.currentPage - 1) });
        return this.load(proxy);
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
          var _proxy$params;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  proxy = _ext2.default.extend({}, this.proxy, proxy || {});
                  proxy.method = 'post';
                  proxy.params = (0, _list2.default)(this.getModifiedRecords()).map(function (record) {
                    return record.data;
                  }).collect();
                  (_proxy$params = proxy.params).push.apply(_proxy$params, _toConsumableArray(this.getNewRecords().map(function (record) {
                    return record.data;
                  }).collect()));
                  if (proxy.writter && proxy.writter.transform) {
                    proxy.params = proxy.writter.transform(proxy.params);
                  }
                  _context2.next = 7;
                  return _ajax2.default.request(proxy);

                case 7:
                  return _context2.abrupt('return', _context2.sent);

                case 8:
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
    }, {
      key: 'getSelectedRecords',
      value: function getSelectedRecords() {
        return this.data.filter(function (record) {
          return record.selected;
        });
      }
    }, {
      key: 'getNewRecords',
      value: function getNewRecords() {
        return this.data.filter(function (record) {
          return record.isNewlyCreated();
        });
      }
    }, {
      key: 'toggleSelectAll',
      value: function toggleSelectAll() {
        if (this.getSelectedRecords().count() === this.count()) {
          this.data.each(function (record) {
            return record.selected = false;
          });
        } else {
          this.data.each(function (record) {
            return record.selected = true;
          });
        }
        this.observable.call(this);
      }
    }, {
      key: 'add',
      value: function add(record) {
        record = this.createRecord(record);
        this.data.add(record);
        this.observable.call(this);
        return record;
      }
    }]);

    return DataStore;
  }();

  return new DataStore();
};

},{"../core/ext":14,"../core/list":15,"../mixin/observable":24,"./ajax":19,"./model":21}],23:[function(require,module,exports){
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

},{}],24:[function(require,module,exports){
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

},{"../core/ext":14,"../core/list":15}],25:[function(require,module,exports){
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

},{}],26:[function(require,module,exports){
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

},{}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgBox = exports.Toast = exports.Dialog = exports.DialogManager = exports.Dropdown = exports.Button = exports.Field = exports.Grid = exports.Container = exports.Link = exports.HashRouter = exports.Route = exports.bind = exports.withProps = exports.Observable = exports.Component = exports.Service = exports.Model = exports.Store = exports.Cache = exports.Ajax = exports.Map = exports.List = exports.String = undefined;

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

var _dialog = require('./components/dialog');

Object.defineProperty(exports, 'DialogManager', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_dialog).default;
  }
});
Object.defineProperty(exports, 'Dialog', {
  enumerable: true,
  get: function get() {
    return _dialog.Dialog;
  }
});
Object.defineProperty(exports, 'Toast', {
  enumerable: true,
  get: function get() {
    return _dialog.Toast;
  }
});
Object.defineProperty(exports, 'MsgBox', {
  enumerable: true,
  get: function get() {
    return _dialog.MsgBox;
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

},{"./app/component":1,"./app/service":2,"./components/container":3,"./components/dialog":4,"./components/form":5,"./components/grid":6,"./components/router":12,"./core/ext":14,"./core/list":15,"./core/map":16,"./core/string":18,"./data/ajax":19,"./data/cache":20,"./data/model":21,"./data/store":22,"./mixin/bind":23,"./mixin/observable":24,"./mixin/with-props":25,"babel-polyfill":"babel-polyfill","react":"react","react-dom":"react-dom"}],28:[function(require,module,exports){
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

},{"../../../../../dist/rext":27,"react":"react"}],29:[function(require,module,exports){
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

},{"../../../../../dist/rext":27,"react":"react"}],30:[function(require,module,exports){
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

},{"../../../../../dist/rext":27,"../../stores/card":42,"./search-form.view":31}],31:[function(require,module,exports){
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

},{"../../../../../dist/rext":27,"../../stores/card-type":41,"react":"react"}],32:[function(require,module,exports){
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
          { store: _card2.default, checkColumn: true, paging: true },
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

},{"../../../../../dist/rext":27,"../../stores/card":42,"../../stores/card-type":41,"react":"react"}],33:[function(require,module,exports){
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

},{"../../../../../dist/rext":27,"./search-form":30,"./search-result":32,"react":"react"}],34:[function(require,module,exports){
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

},{"../../../../../dist/rext":27,"react":"react"}],36:[function(require,module,exports){
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

},{"react":"react"}],37:[function(require,module,exports){
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

},{"react":"react"}],38:[function(require,module,exports){
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

},{"../../../../../dist/rext":27,"./footer":34,"./header":35,"./nav":36,"./side":37,"react":"react"}],39:[function(require,module,exports){
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

},{"../../../dist/rext":27,"./components/dashboard/dashboard":28,"./components/notfound/notfound":29,"./components/search/search":33,"./components/viewport/viewport":38,"./services/common":40,"babel-polyfill":"babel-polyfill","react":"react"}],40:[function(require,module,exports){
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

},{"../../../../dist/rext":27}],41:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rext = require('../../../../dist/rext');

exports.default = (0, _rext.Store)({
  storeId: 'CardTypeStore',
  data: ['Melee', 'Shoot', 'Magic']
});

},{"../../../../dist/rext":27}],42:[function(require,module,exports){
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
  },
  pageSize: 100
});

},{"../../../../dist/rext":27}]},{},[39])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkaXN0L2FwcC9jb21wb25lbnQuanMiLCJkaXN0L2FwcC9zZXJ2aWNlLmpzIiwiZGlzdC9jb21wb25lbnRzL2NvbnRhaW5lci5qcyIsImRpc3QvY29tcG9uZW50cy9kaWFsb2cuanMiLCJkaXN0L2NvbXBvbmVudHMvZm9ybS5qcyIsImRpc3QvY29tcG9uZW50cy9ncmlkLmpzIiwiZGlzdC9jb21wb25lbnRzL2dyaWQvYm9keS5qcyIsImRpc3QvY29tcG9uZW50cy9ncmlkL2NlbGwuanMiLCJkaXN0L2NvbXBvbmVudHMvZ3JpZC9oZWFkZXIuanMiLCJkaXN0L2NvbXBvbmVudHMvZ3JpZC9wYWdpbmctdG9vbGJhci5qcyIsImRpc3QvY29tcG9uZW50cy9ncmlkL3Jvdy5qcyIsImRpc3QvY29tcG9uZW50cy9yb3V0ZXIuanMiLCJkaXN0L2NvcmUvY29tcG9uZW50LmpzIiwiZGlzdC9jb3JlL2V4dC5qcyIsImRpc3QvY29yZS9saXN0LmpzIiwiZGlzdC9jb3JlL21hcC5qcyIsImRpc3QvY29yZS9udW1iZXIuanMiLCJkaXN0L2NvcmUvc3RyaW5nLmpzIiwiZGlzdC9kYXRhL2FqYXguanMiLCJkaXN0L2RhdGEvY2FjaGUuanMiLCJkaXN0L2RhdGEvbW9kZWwuanMiLCJkaXN0L2RhdGEvc3RvcmUuanMiLCJkaXN0L21peGluL2JpbmQuanMiLCJkaXN0L21peGluL29ic2VydmFibGUuanMiLCJkaXN0L21peGluL3dpdGgtcHJvcHMuanMiLCJkaXN0L21peGluL3dpdGgtc3RhdGUuanMiLCJkaXN0L3JleHQuanMiLCJleGFtcGxlL2pzL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuanMiLCJleGFtcGxlL2pzL2FwcC9jb21wb25lbnRzL25vdGZvdW5kL25vdGZvdW5kLmpzeCIsImV4YW1wbGUvanMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC1mb3JtLmpzIiwiZXhhbXBsZS9qcy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLWZvcm0udmlldy5qc3giLCJleGFtcGxlL2pzL2FwcC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2gtcmVzdWx0LmpzeCIsImV4YW1wbGUvanMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5qc3giLCJleGFtcGxlL2pzL2FwcC9jb21wb25lbnRzL3ZpZXdwb3J0L2Zvb3Rlci5qc3giLCJleGFtcGxlL2pzL2FwcC9jb21wb25lbnRzL3ZpZXdwb3J0L2hlYWRlci5qc3giLCJleGFtcGxlL2pzL2FwcC9jb21wb25lbnRzL3ZpZXdwb3J0L25hdi5qc3giLCJleGFtcGxlL2pzL2FwcC9jb21wb25lbnRzL3ZpZXdwb3J0L3NpZGUuanN4IiwiZXhhbXBsZS9qcy9hcHAvY29tcG9uZW50cy92aWV3cG9ydC92aWV3cG9ydC5qc3giLCJleGFtcGxlL2pzL2FwcC9tYWluLmpzIiwiZXhhbXBsZS9qcy9hcHAvc2VydmljZXMvY29tbW9uLmpzIiwiZXhhbXBsZS9qcy9hcHAvc3RvcmVzL2NhcmQtdHlwZS5qcyIsImV4YW1wbGUvanMvYXBwL3N0b3Jlcy9jYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7Ozs7QUFFQSxPQUFPLGNBQVAsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFDM0MsU0FBTztBQURvQyxDQUE3Qzs7QUFJQSxJQUFJLFdBQVcsT0FBTyxNQUFQLElBQWlCLFVBQVUsTUFBVixFQUFrQjtBQUFFLE9BQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxVQUFVLE1BQTlCLEVBQXNDLEdBQXRDLEVBQTJDO0FBQUUsUUFBSSxTQUFTLFVBQVUsQ0FBVixDQUFiLENBQTJCLEtBQUssSUFBSSxHQUFULElBQWdCLE1BQWhCLEVBQXdCO0FBQUUsVUFBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsTUFBckMsRUFBNkMsR0FBN0MsQ0FBSixFQUF1RDtBQUFFLGVBQU8sR0FBUCxJQUFj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Q0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFHVztBQUNQLGFBQU87QUFBQTtBQUFBO0FBQ0wsNkRBREs7QUFFTDtBQUFBO0FBQUEsWUFBVyxVQUFYO0FBQ0U7QUFBQTtBQUFBLGNBQVcsSUFBRyxnQkFBZDtBQUNFLDhEQURGO0FBRUU7QUFGRjtBQURGLFNBRks7QUFRTDtBQVJLLE9BQVA7QUFVRDs7Ozs7Ozs7Ozs7QUNuQkg7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsZUFBSyxNQUFMLDJDQUFZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNKLGlCQUFjLE9BQWQsRUFESTs7QUFBQTtBQUFBLDJDQUVILHVEQUZHOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQVo7Ozs7Ozs7Ozs7Ozs7O0FDVEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFLVSxXQUFLLE9BQUwsQ0FBYTtBQUNqQix1QkFBSyxvQkFEWTtBQUVqQix3QkFBTTtBQUFBLDJCQUFpQixZQUFNLEdBQU4sQ0FBVSxlQUFWLEVBQTJCLGFBQTNCLENBQWpCO0FBQUE7QUFGVyxpQkFBYixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMVjs7a0JBRWUsaUJBQU07QUFDbkIsV0FBUyxlQURVO0FBRW5CLFFBQU0sQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixPQUFuQjtBQUZhLENBQU4sQzs7Ozs7Ozs7O0FDRmY7O2tCQUVlLGlCQUFNO0FBQ25CLFdBQVMsV0FEVTtBQUVuQixTQUFPO0FBQ0wsU0FBSyxZQURBO0FBRUwsWUFBUTtBQUZILEdBRlk7QUFNbkIsWUFBVTtBQU5TLENBQU4sQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9leHQgPSByZXF1aXJlKCcuLi9jb3JlL2V4dCcpO1xuXG52YXIgX2V4dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHQpO1xuXG52YXIgX2xpc3QgPSByZXF1aXJlKCcuLi9jb3JlL2xpc3QnKTtcblxudmFyIF9saXN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpc3QpO1xuXG52YXIgX21hcCA9IHJlcXVpcmUoJy4uL2NvcmUvbWFwJyk7XG5cbnZhciBfbWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hcCk7XG5cbnZhciBfb2JzZXJ2YWJsZSA9IHJlcXVpcmUoJy4uL21peGluL29ic2VydmFibGUnKTtcblxudmFyIF9vYnNlcnZhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29ic2VydmFibGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikgeyByZXR1cm4gZnVuY3Rpb24gKCkgeyB2YXIgZ2VuID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgZnVuY3Rpb24gc3RlcChrZXksIGFyZykgeyB0cnkgeyB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7IHZhciB2YWx1ZSA9IGluZm8udmFsdWU7IH0gY2F0Y2ggKGVycm9yKSB7IHJlamVjdChlcnJvcik7IHJldHVybjsgfSBpZiAoaW5mby5kb25lKSB7IHJlc29sdmUodmFsdWUpOyB9IGVsc2UgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkgeyBzdGVwKFwibmV4dFwiLCB2YWx1ZSk7IH0sIGZ1bmN0aW9uIChlcnIpIHsgc3RlcChcInRocm93XCIsIGVycik7IH0pOyB9IH0gcmV0dXJuIHN0ZXAoXCJuZXh0XCIpOyB9KTsgfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChjb21wKSB7XG4gICAgdmFyIFdyYXBwZWRDb21wb25lbnQgPSBjb25maWcudmlldztcbiAgICByZXR1cm4gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICAgIF9pbmhlcml0cyhIb2NDb21wb25lbnQsIF9Db21wb25lbnQpO1xuXG4gICAgICBmdW5jdGlvbiBIb2NDb21wb25lbnQocHJvcHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhvY0NvbXBvbmVudCk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEhvY0NvbXBvbmVudC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEhvY0NvbXBvbmVudCkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgICBfdGhpcy5zdGF0ZSA9IF9kZWZpbmVQcm9wZXJ0eSh7XG4gICAgICAgICAgc3RvcmVzOiB7fVxuICAgICAgICB9LCBjb25maWcuY29tcG9uZW50QXMgfHwgJ3ZtJywgbmV3IGNvbXAoKSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgIH1cblxuICAgICAgX2NyZWF0ZUNsYXNzKEhvY0NvbXBvbmVudCwgW3tcbiAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbE1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgIHZhciBzdG9yZXMgPSAoMCwgX2xpc3QyLmRlZmF1bHQpKGNvbmZpZy5zdG9yZXMpLnJlZHVjZShmdW5jdGlvbiAoc3RvcmVzLCBzdG9yZSkge1xuICAgICAgICAgICAgc3RvcmUuc3Vic2NyaWJlKF90aGlzMi5vbkRhdGFDaGFuZ2VkLmJpbmQoX3RoaXMyKSk7XG4gICAgICAgICAgICBzdG9yZXNbc3RvcmUuc3RvcmVJZF0gPSBzdG9yZTtcbiAgICAgICAgICAgIHJldHVybiBzdG9yZXM7XG4gICAgICAgICAgfSwge30pO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3RvcmVzOiBzdG9yZXMgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIF9yZWYgPSBfYXN5bmNUb0dlbmVyYXRvcihyZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlKCkge1xuICAgICAgICAgICAgdmFyIHN0b3Jlcywgc3RvcmVJZDtcbiAgICAgICAgICAgIHJldHVybiByZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVzID0gdGhpcy5zdGF0ZS5zdG9yZXM7XG4gICAgICAgICAgICAgICAgICAgIF9jb250ZXh0LnQwID0gcmVnZW5lcmF0b3JSdW50aW1lLmtleXMoc3RvcmVzKTtcblxuICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBpZiAoKF9jb250ZXh0LnQxID0gX2NvbnRleHQudDAoKSkuZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA5O1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgc3RvcmVJZCA9IF9jb250ZXh0LnQxLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghc3RvcmVzW3N0b3JlSWRdLmF1dG9Mb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDc7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0b3Jlc1tzdG9yZUlkXS5sb2FkKCk7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgX2NhbGxlZSwgdGhpcyk7XG4gICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3JlZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb21wb25lbnREaWRNb3VudDtcbiAgICAgICAgfSgpXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgKDAsIF9tYXAyLmRlZmF1bHQpKHRoaXMuc3RhdGUuc3RvcmVzKS5lYWNoKGZ1bmN0aW9uIChzdG9yZUlkLCBzdG9yZSkge1xuICAgICAgICAgICAgc3RvcmUudW5zdWJzY3JpYmUoX3RoaXMzLm9uRGF0YUNoYW5nZWQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFdyYXBwZWRDb21wb25lbnQsIF9leHRlbmRzKHt9LCB0aGlzLnN0YXRlLCB0aGlzLnByb3BzKSk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnb25EYXRhQ2hhbmdlZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbkRhdGFDaGFuZ2VkKHN0b3JlKSB7XG4gICAgICAgICAgdmFyIHN0b3JlcyA9IHRoaXMuc3RhdGUuc3RvcmVzO1xuXG4gICAgICAgICAgc3RvcmVzW3N0b3JlLnN0b3JlSWRdID0gc3RvcmU7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdG9yZXM6IHN0b3JlcyB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBIb2NDb21wb25lbnQ7XG4gICAgfShfcmVhY3QuQ29tcG9uZW50KTtcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChTZXJ2aWNlKSB7XG4gIHJldHVybiBuZXcgU2VydmljZSgpO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDb250YWluZXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQ29udGFpbmVyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDb250YWluZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKENvbnRhaW5lci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENvbnRhaW5lcikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENvbnRhaW5lciwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBfcHJvcHMkY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMkY2xhc3NOYW1lID09PSB1bmRlZmluZWQgPyAnJyA6IF9wcm9wcyRjbGFzc05hbWUsXG4gICAgICAgICAgaGJveCA9IF9wcm9wcy5oYm94LFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIG90aGVycyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnY2xhc3NOYW1lJywgJ2hib3gnLCAnY2hpbGRyZW4nXSk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NlY3Rpb24nLFxuICAgICAgICBfZXh0ZW5kcyh7IGNsYXNzTmFtZTogJ2QtZmxleCBmbGV4LScgKyAoaGJveCA/ICdyb3cnIDogJ2NvbHVtbicpICsgJyAnICsgY2xhc3NOYW1lIH0sIG90aGVycyksXG4gICAgICAgIGNoaWxkcmVuXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDb250YWluZXI7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDb250YWluZXI7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5Nc2dCb3ggPSBleHBvcnRzLlRvYXN0ID0gZXhwb3J0cy5EaWFsb2cgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfZGVzYywgX3ZhbHVlLCBfY2xhc3M7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX2V4dCA9IHJlcXVpcmUoJy4uL2NvcmUvZXh0Jyk7XG5cbnZhciBfZXh0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dCk7XG5cbnZhciBfYmluZCA9IHJlcXVpcmUoJy4uL21peGluL2JpbmQnKTtcblxudmFyIF9iaW5kMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2JpbmQpO1xuXG52YXIgX2NvbnRhaW5lciA9IHJlcXVpcmUoJy4vY29udGFpbmVyJyk7XG5cbnZhciBfY29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRhaW5lcik7XG5cbnZhciBfZm9ybSA9IHJlcXVpcmUoJy4vZm9ybScpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eSwgZGVjb3JhdG9ycywgZGVzY3JpcHRvciwgY29udGV4dCkge1xuICB2YXIgZGVzYyA9IHt9O1xuICBPYmplY3RbJ2tlJyArICd5cyddKGRlc2NyaXB0b3IpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGRlc2Nba2V5XSA9IGRlc2NyaXB0b3Jba2V5XTtcbiAgfSk7XG4gIGRlc2MuZW51bWVyYWJsZSA9ICEhZGVzYy5lbnVtZXJhYmxlO1xuICBkZXNjLmNvbmZpZ3VyYWJsZSA9ICEhZGVzYy5jb25maWd1cmFibGU7XG5cbiAgaWYgKCd2YWx1ZScgaW4gZGVzYyB8fCBkZXNjLmluaXRpYWxpemVyKSB7XG4gICAgZGVzYy53cml0YWJsZSA9IHRydWU7XG4gIH1cblxuICBkZXNjID0gZGVjb3JhdG9ycy5zbGljZSgpLnJldmVyc2UoKS5yZWR1Y2UoZnVuY3Rpb24gKGRlc2MsIGRlY29yYXRvcikge1xuICAgIHJldHVybiBkZWNvcmF0b3IodGFyZ2V0LCBwcm9wZXJ0eSwgZGVzYykgfHwgZGVzYztcbiAgfSwgZGVzYyk7XG5cbiAgaWYgKGNvbnRleHQgJiYgZGVzYy5pbml0aWFsaXplciAhPT0gdm9pZCAwKSB7XG4gICAgZGVzYy52YWx1ZSA9IGRlc2MuaW5pdGlhbGl6ZXIgPyBkZXNjLmluaXRpYWxpemVyLmNhbGwoY29udGV4dCkgOiB2b2lkIDA7XG4gICAgZGVzYy5pbml0aWFsaXplciA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmIChkZXNjLmluaXRpYWxpemVyID09PSB2b2lkIDApIHtcbiAgICBPYmplY3RbJ2RlZmluZScgKyAnUHJvcGVydHknXSh0YXJnZXQsIHByb3BlcnR5LCBkZXNjKTtcbiAgICBkZXNjID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBkZXNjO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBEaWFsb2dNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBEaWFsb2dNYW5hZ2VyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEaWFsb2dNYW5hZ2VyKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEaWFsb2dNYW5hZ2VyLCBbe1xuICAgIGtleTogJ3Nob3cnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG93KGRpYWxvZykge1xuICAgICAgdmFyIGRvbSA9IF9leHQyLmRlZmF1bHQuYXBwZW5kKCc8ZGl2IGNsYXNzPVwibWFza1wiPjwvZGl2PicpO1xuICAgICAgKDAsIF9yZWFjdERvbS5yZW5kZXIpKGRpYWxvZywgZG9tKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0b2FzdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvYXN0KF9yZWYpIHtcbiAgICAgIHZhciBfcmVmJGRlbGF5ID0gX3JlZi5kZWxheSxcbiAgICAgICAgICBkZWxheSA9IF9yZWYkZGVsYXkgPT09IHVuZGVmaW5lZCA/IDMwMDAgOiBfcmVmJGRlbGF5LFxuICAgICAgICAgIG90aGVycyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ2RlbGF5J10pO1xuXG4gICAgICB2YXIgZG9tID0gX2V4dDIuZGVmYXVsdC5hcHBlbmQoJzxkaXYgY2xhc3M9XCJub3RpZmljYXRpb25cIj48L2Rpdj4nKTtcbiAgICAgICgwLCBfcmVhY3REb20ucmVuZGVyKShfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChUb2FzdCwgb3RoZXJzKSwgZG9tKTtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgRGlhbG9nTWFuYWdlci5kZXN0cm95KGRvbSk7XG4gICAgICB9LCBkZWxheSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbXNnYm94JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbXNnYm94KF9yZWYyKSB7XG4gICAgICB2YXIgb3RoZXJzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYyLCBbXSk7XG5cbiAgICAgIHZhciBkb20gPSBfZXh0Mi5kZWZhdWx0LmFwcGVuZCgnPGRpdiBjbGFzcz1cIm1hc2tcIj48L2Rpdj4nKTtcbiAgICAgICgwLCBfcmVhY3REb20ucmVuZGVyKShfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChNc2dCb3gsIG90aGVycyksIGRvbSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGlzcG9zZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc3Bvc2UoZGlhbG9nSWQpIHtcbiAgICAgIHRoaXMuZGVzdHJveShfZXh0Mi5kZWZhdWx0LmdldEJ5SWQoZGlhbG9nSWQpLnBhcmVudEVsZW1lbnQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Rlc3Ryb3knLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KGRvbSkge1xuICAgICAgKDAsIF9yZWFjdERvbS51bm1vdW50Q29tcG9uZW50QXROb2RlKShwYXJlbnQpO1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChwYXJlbnQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Nob3dFcnJvck1zZ2JveCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNob3dFcnJvck1zZ2JveChtZXNzYWdlKSB7XG4gICAgICB0aGlzLm1zZ2JveCh7XG4gICAgICAgIHRpdGxlOiAnRXJyb3InLFxuICAgICAgICBpY29uOiAndGltZXMnLFxuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRGlhbG9nTWFuYWdlcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gbmV3IERpYWxvZ01hbmFnZXIoKTtcbnZhciBEaWFsb2cgPSBleHBvcnRzLkRpYWxvZyA9IChfY2xhc3MgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoRGlhbG9nLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBEaWFsb2cocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGlhbG9nKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoRGlhbG9nLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRGlhbG9nKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKERpYWxvZywgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICB0aXRsZSA9IF9wcm9wcy50aXRsZSxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIF9wcm9wcyRjbG9zZUJ1dHRvbiA9IF9wcm9wcy5jbG9zZUJ1dHRvbixcbiAgICAgICAgICBjbG9zZUJ1dHRvbiA9IF9wcm9wcyRjbG9zZUJ1dHRvbiA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IF9wcm9wcyRjbG9zZUJ1dHRvbixcbiAgICAgICAgICBvdGhlcnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ3RpdGxlJywgJ2NsYXNzTmFtZScsICdjaGlsZHJlbicsICdjbG9zZUJ1dHRvbiddKTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfY29udGFpbmVyMi5kZWZhdWx0LFxuICAgICAgICBfZXh0ZW5kcyh7IGNsYXNzTmFtZTogJ2RpYWxvZyAnICsgKGNsYXNzTmFtZSB8fCAnJykgfSwgb3RoZXJzKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdkaWFsb2ctaGVhZGVyJyB9LFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ3AnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdkaWFsb2ctdGl0bGUgdGV4dC1zbS1jZW50ZXInIH0sXG4gICAgICAgICAgICB0aXRsZSB8fCAnJ1xuICAgICAgICAgICksXG4gICAgICAgICAgY2xvc2VCdXR0b24gJiYgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7IGNsYXNzTmFtZTogJ3Rvb2wnLCBvbkNsaWNrOiB0aGlzLmRpc3Bvc2UgfSlcbiAgICAgICAgKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgX2NvbnRhaW5lcjIuZGVmYXVsdCxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ2RpYWxvZy1ib2R5JyB9LFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgX2NvbnRhaW5lcjIuZGVmYXVsdCxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkaXNwb3NlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICAgIHZhciBvbkNsb3NlID0gdGhpcy5wcm9wcy5vbkNsb3NlLFxuICAgICAgICAgIHBhcmVudCA9IF9leHQyLmRlZmF1bHQuZ2V0Q29tcCh0aGlzKS5wYXJlbnQoKTtcblxuICAgICAgb25DbG9zZSAmJiBvbkNsb3NlKCk7XG4gICAgICBEaWFsb2dNYW5hZ2VyLmRlc3Ryb3kocGFyZW50KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRGlhbG9nO1xufShfcmVhY3QuQ29tcG9uZW50KSwgKF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2Rpc3Bvc2UnLCBbX2JpbmQyLmRlZmF1bHRdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdkaXNwb3NlJyksIF9jbGFzcy5wcm90b3R5cGUpKSwgX2NsYXNzKTtcblxuXG52YXIgYWxlcnQgPSB7XG4gIHN1Y2Nlc3M6IHtcbiAgICB0aXRsZTogJ1N1Y2Nlc3MnLFxuICAgIGljb246ICdjaGVjaydcbiAgfSxcbiAgZXJyb3I6IHtcbiAgICB0aXRsZTogJ0Vycm9yJyxcbiAgICBpY29uOiAndGltZXMnXG4gIH0sXG4gIHdhcm5pbmc6IHtcbiAgICB0aXRsZTogJ1dhcm5pbmcnLFxuICAgIGljb246ICdleGNsYW1hdGlvbidcbiAgfSxcbiAgaW5mbzoge1xuICAgIHRpdGxlOiAnSW5mb3JtYXRpb24nLFxuICAgIGljb246ICdpbmZvJ1xuICB9XG59O1xuXG52YXIgVG9hc3QgPSBleHBvcnRzLlRvYXN0ID0gZnVuY3Rpb24gKF9Db21wb25lbnQyKSB7XG4gIF9pbmhlcml0cyhUb2FzdCwgX0NvbXBvbmVudDIpO1xuXG4gIGZ1bmN0aW9uIFRvYXN0KHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRvYXN0KTtcblxuICAgIHZhciBfdGhpczIgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoVG9hc3QuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihUb2FzdCkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzMi5kaXNwb3NlID0gX3RoaXMyLmRpc3Bvc2UuYmluZChfdGhpczIpO1xuICAgIHJldHVybiBfdGhpczI7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVG9hc3QsIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHR5cGUgPSBfcHJvcHMyLnR5cGUsXG4gICAgICAgICAgbWVzc2FnZSA9IF9wcm9wczIubWVzc2FnZTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfY29udGFpbmVyMi5kZWZhdWx0LFxuICAgICAgICBudWxsLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnaDYnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAnZm9udC13ZWlnaHQtYm9sZCcgfSxcbiAgICAgICAgICBhbGVydFt0eXBlXS50aXRsZVxuICAgICAgICApLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ2QtZmxleCBmbGV4LXJvdycgfSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6ICd0b2FzdC1pY29uJyB9LFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2knLCB7IGNsYXNzTmFtZTogJ2ZhIGZhLTJ4IGZhLScgKyBhbGVydFt0eXBlXS5pY29uICsgJy1jaXJjbGUnIH0pXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6ICd0b2FzdC1jb250ZW50JyB9LFxuICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkaXNwb3NlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICAgIERpYWxvZ01hbmFnZXIuZGVzdHJveShfZXh0Mi5kZWZhdWx0LmdldENvbXAodGhpcykucGFyZW50KCkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBUb2FzdDtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbnZhciBNc2dCb3ggPSBleHBvcnRzLk1zZ0JveCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50Mykge1xuICBfaW5oZXJpdHMoTXNnQm94LCBfQ29tcG9uZW50Myk7XG5cbiAgZnVuY3Rpb24gTXNnQm94KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNc2dCb3gpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChNc2dCb3guX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihNc2dCb3gpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNc2dCb3gsIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHZhciBfcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICB0aXRsZSA9IF9wcm9wczMudGl0bGUsXG4gICAgICAgICAgaWNvbiA9IF9wcm9wczMuaWNvbixcbiAgICAgICAgICBfcHJvcHMzJGNsb3NlQnV0dG9uID0gX3Byb3BzMy5jbG9zZUJ1dHRvbixcbiAgICAgICAgICBjbG9zZUJ1dHRvbiA9IF9wcm9wczMkY2xvc2VCdXR0b24gPT09IHVuZGVmaW5lZCA/IHRydWUgOiBfcHJvcHMzJGNsb3NlQnV0dG9uLFxuICAgICAgICAgIG1lc3NhZ2UgPSBfcHJvcHMzLm1lc3NhZ2UsXG4gICAgICAgICAgX3Byb3BzMyRidXR0b25zID0gX3Byb3BzMy5idXR0b25zLFxuICAgICAgICAgIGJ1dHRvbnMgPSBfcHJvcHMzJGJ1dHRvbnMgPT09IHVuZGVmaW5lZCA/ICdPSycgOiBfcHJvcHMzJGJ1dHRvbnMsXG4gICAgICAgICAgX3Byb3BzMyRidXR0b25UZXh0ID0gX3Byb3BzMy5idXR0b25UZXh0LFxuICAgICAgICAgIGJ1dHRvblRleHQgPSBfcHJvcHMzJGJ1dHRvblRleHQgPT09IHVuZGVmaW5lZCA/IHt9IDogX3Byb3BzMyRidXR0b25UZXh0LFxuICAgICAgICAgIGZuID0gX3Byb3BzMy5mbjtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBEaWFsb2csXG4gICAgICAgIHsgdGl0bGU6IHRpdGxlLCBjbG9zZUJ1dHRvbjogY2xvc2VCdXR0b24gfSxcbiAgICAgICAgIWljb24gJiYgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdkLWZsZXggZmxleC1yb3cnIH0sXG4gICAgICAgICAgbWVzc2FnZVxuICAgICAgICApLFxuICAgICAgICBpY29uICYmIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAnZC1mbGV4IGZsZXgtcm93JyB9LFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3RvYXN0LWljb24gbXItc20nIH0sXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnaScsIHsgY2xhc3NOYW1lOiAnZmEgZmEtMnggZmEtJyArIGljb24gKyAnLWNpcmNsZScgfSlcbiAgICAgICAgICApLFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3RvYXN0LWNvbnRlbnQnIH0sXG4gICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgICAgKVxuICAgICAgICApLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ3RleHQtc20tY2VudGVyIG10LXNtJyB9LFxuICAgICAgICAgIGJ1dHRvbnMgPT09ICdPS0NBTkNFTCcgJiYgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2Zvcm0uQnV0dG9uLCB7IGNsYXNzTmFtZTogJ21yLXNtJywgdGV4dDogYnV0dG9uVGV4dC5jYW5jZWwgfHwgJ0NhbmNlbCcsIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpczQuZGlzcG9zZSgpO1xuICAgICAgICAgICAgfSB9KSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfZm9ybS5CdXR0b24sIHsgdGV4dDogYnV0dG9uVGV4dC5vayB8fCAnT0snLCBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgICAgICBfdGhpczQuZGlzcG9zZSgpO2ZuICYmIGZuKCk7XG4gICAgICAgICAgICB9IH0pXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGlzcG9zZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICBEaWFsb2dNYW5hZ2VyLmRlc3Ryb3koX2V4dDIuZGVmYXVsdC5nZXRDb21wKHRoaXMpLnBhcmVudCgpKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTXNnQm94O1xufShfcmVhY3QuQ29tcG9uZW50KTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkNoZWNrYm94ID0gZXhwb3J0cy5Ecm9wZG93biA9IGV4cG9ydHMuQnV0dG9uID0gZXhwb3J0cy5GaWVsZCA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9kZXNjLCBfdmFsdWUsIF9jbGFzcywgX2Rlc2MyLCBfdmFsdWUyLCBfY2xhc3MyLCBfZGVzYzMsIF92YWx1ZTMsIF9jbGFzczMsIF9kZXNjNCwgX3ZhbHVlNCwgX2NsYXNzNDtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfZXh0ID0gcmVxdWlyZSgnLi4vY29yZS9leHQnKTtcblxudmFyIF9leHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0KTtcblxudmFyIF9saXN0ID0gcmVxdWlyZSgnLi4vY29yZS9saXN0Jyk7XG5cbnZhciBfbGlzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saXN0KTtcblxudmFyIF9vYnNlcnZhYmxlID0gcmVxdWlyZSgnLi4vbWl4aW4vb2JzZXJ2YWJsZScpO1xuXG52YXIgX29ic2VydmFibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JzZXJ2YWJsZSk7XG5cbnZhciBfd2l0aFByb3BzID0gcmVxdWlyZSgnLi4vbWl4aW4vd2l0aC1wcm9wcycpO1xuXG52YXIgX3dpdGhQcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93aXRoUHJvcHMpO1xuXG52YXIgX3dpdGhTdGF0ZSA9IHJlcXVpcmUoJy4uL21peGluL3dpdGgtc3RhdGUnKTtcblxudmFyIF93aXRoU3RhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2l0aFN0YXRlKTtcblxudmFyIF9iaW5kID0gcmVxdWlyZSgnLi4vbWl4aW4vYmluZCcpO1xuXG52YXIgX2JpbmQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmluZCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHZhciBnZW4gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyBmdW5jdGlvbiBzdGVwKGtleSwgYXJnKSB7IHRyeSB7IHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTsgdmFyIHZhbHVlID0gaW5mby52YWx1ZTsgfSBjYXRjaCAoZXJyb3IpIHsgcmVqZWN0KGVycm9yKTsgcmV0dXJuOyB9IGlmIChpbmZvLmRvbmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0gZWxzZSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7IHN0ZXAoXCJuZXh0XCIsIHZhbHVlKTsgfSwgZnVuY3Rpb24gKGVycikgeyBzdGVwKFwidGhyb3dcIiwgZXJyKTsgfSk7IH0gfSByZXR1cm4gc3RlcChcIm5leHRcIik7IH0pOyB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKHRhcmdldCwgcHJvcGVydHksIGRlY29yYXRvcnMsIGRlc2NyaXB0b3IsIGNvbnRleHQpIHtcbiAgdmFyIGRlc2MgPSB7fTtcbiAgT2JqZWN0WydrZScgKyAneXMnXShkZXNjcmlwdG9yKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBkZXNjW2tleV0gPSBkZXNjcmlwdG9yW2tleV07XG4gIH0pO1xuICBkZXNjLmVudW1lcmFibGUgPSAhIWRlc2MuZW51bWVyYWJsZTtcbiAgZGVzYy5jb25maWd1cmFibGUgPSAhIWRlc2MuY29uZmlndXJhYmxlO1xuXG4gIGlmICgndmFsdWUnIGluIGRlc2MgfHwgZGVzYy5pbml0aWFsaXplcikge1xuICAgIGRlc2Mud3JpdGFibGUgPSB0cnVlO1xuICB9XG5cbiAgZGVzYyA9IGRlY29yYXRvcnMuc2xpY2UoKS5yZXZlcnNlKCkucmVkdWNlKGZ1bmN0aW9uIChkZXNjLCBkZWNvcmF0b3IpIHtcbiAgICByZXR1cm4gZGVjb3JhdG9yKHRhcmdldCwgcHJvcGVydHksIGRlc2MpIHx8IGRlc2M7XG4gIH0sIGRlc2MpO1xuXG4gIGlmIChjb250ZXh0ICYmIGRlc2MuaW5pdGlhbGl6ZXIgIT09IHZvaWQgMCkge1xuICAgIGRlc2MudmFsdWUgPSBkZXNjLmluaXRpYWxpemVyID8gZGVzYy5pbml0aWFsaXplci5jYWxsKGNvbnRleHQpIDogdm9pZCAwO1xuICAgIGRlc2MuaW5pdGlhbGl6ZXIgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAoZGVzYy5pbml0aWFsaXplciA9PT0gdm9pZCAwKSB7XG4gICAgT2JqZWN0WydkZWZpbmUnICsgJ1Byb3BlcnR5J10odGFyZ2V0LCBwcm9wZXJ0eSwgZGVzYyk7XG4gICAgZGVzYyA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gZGVzYztcbn1cblxudmFyIEZpZWxkID0gZXhwb3J0cy5GaWVsZCA9IChfY2xhc3MgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoRmllbGQsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEZpZWxkKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZpZWxkKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChGaWVsZC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEZpZWxkKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogcHJvcHMudmFsdWUgfHwgJydcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhGaWVsZCwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoX3JlZikge1xuICAgICAgdmFyIF9yZWYkY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3JlZiRjbGFzc05hbWUgPT09IHVuZGVmaW5lZCA/ICcnIDogX3JlZiRjbGFzc05hbWUsXG4gICAgICAgICAgb25DaGFuZ2UgPSBfcmVmLm9uQ2hhbmdlLFxuICAgICAgICAgIG9uS2V5UHJlc3MgPSBfcmVmLm9uS2V5UHJlc3MsXG4gICAgICAgICAgb25CbHVyID0gX3JlZi5vbkJsdXIsXG4gICAgICAgICAgb3RoZXJzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsnY2xhc3NOYW1lJywgJ29uQ2hhbmdlJywgJ29uS2V5UHJlc3MnLCAnb25CbHVyJ10pO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgX2V4dGVuZHMoeyB0eXBlOiAndGV4dCcsIHZhbHVlOiB0aGlzLnN0YXRlLnZhbHVlLCBjbGFzc05hbWU6ICdmb3JtLWNvbnRyb2wgJyArIGNsYXNzTmFtZSxcbiAgICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2UsIG9uS2V5UHJlc3M6IHRoaXMub25FbnRlciwgb25CbHVyOiB0aGlzLm9uQmx1clxuICAgICAgfSwgb3RoZXJzKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25DaGFuZ2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNoYW5nZShlKSB7XG4gICAgICB2YXIgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7IHZhbHVlOiB2YWx1ZSB9O1xuICAgICAgfSk7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uRW50ZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkVudGVyKGUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuXG4gICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkVudGVyICYmIHRoaXMucHJvcHMub25FbnRlcih2YWx1ZSk7XG4gICAgICAgIHRoaXMucHJvcHMub25CbHVyICYmIHRoaXMucHJvcHMub25CbHVyKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbkJsdXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkJsdXIoZSkge1xuICAgICAgdmFyIHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG5cbiAgICAgIHRoaXMucHJvcHMub25CbHVyICYmIHRoaXMucHJvcHMub25CbHVyKHZhbHVlKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRmllbGQ7XG59KF9yZWFjdC5Db21wb25lbnQpLCAoX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAncmVuZGVyJywgW193aXRoUHJvcHMyLmRlZmF1bHRdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdyZW5kZXInKSwgX2NsYXNzLnByb3RvdHlwZSksIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ29uQ2hhbmdlJywgW19iaW5kMi5kZWZhdWx0XSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAnb25DaGFuZ2UnKSwgX2NsYXNzLnByb3RvdHlwZSksIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ29uRW50ZXInLCBbX2JpbmQyLmRlZmF1bHRdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdvbkVudGVyJyksIF9jbGFzcy5wcm90b3R5cGUpLCBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdvbkJsdXInLCBbX2JpbmQyLmRlZmF1bHRdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdvbkJsdXInKSwgX2NsYXNzLnByb3RvdHlwZSkpLCBfY2xhc3MpO1xudmFyIEJ1dHRvbiA9IGV4cG9ydHMuQnV0dG9uID0gKF9jbGFzczIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudDIpIHtcbiAgX2luaGVyaXRzKEJ1dHRvbiwgX0NvbXBvbmVudDIpO1xuXG4gIGZ1bmN0aW9uIEJ1dHRvbigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQnV0dG9uKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQnV0dG9uLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQnV0dG9uKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQnV0dG9uLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcihfcmVmMikge1xuICAgICAgdmFyIHRleHQgPSBfcmVmMi50ZXh0LFxuICAgICAgICAgIGNoaWxkcmVuID0gX3JlZjIuY2hpbGRyZW4sXG4gICAgICAgICAgX3JlZjIkY2xhc3NOYW1lID0gX3JlZjIuY2xhc3NOYW1lLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9yZWYyJGNsYXNzTmFtZSA9PT0gdW5kZWZpbmVkID8gJycgOiBfcmVmMiRjbGFzc05hbWUsXG4gICAgICAgICAgb3RoZXJzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYyLCBbJ3RleHQnLCAnY2hpbGRyZW4nLCAnY2xhc3NOYW1lJ10pO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdidXR0b24nLFxuICAgICAgICBfZXh0ZW5kcyh7IGNsYXNzTmFtZTogJ2J0biAnICsgY2xhc3NOYW1lIH0sIG90aGVycyksXG4gICAgICAgIHRleHQgfHwgY2hpbGRyZW5cbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEJ1dHRvbjtcbn0oX3JlYWN0LkNvbXBvbmVudCksIChfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzczIucHJvdG90eXBlLCAncmVuZGVyJywgW193aXRoUHJvcHMyLmRlZmF1bHRdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzczIucHJvdG90eXBlLCAncmVuZGVyJyksIF9jbGFzczIucHJvdG90eXBlKSksIF9jbGFzczIpO1xudmFyIERyb3Bkb3duID0gZXhwb3J0cy5Ecm9wZG93biA9IChfY2xhc3MzID0gZnVuY3Rpb24gKF9Db21wb25lbnQzKSB7XG4gIF9pbmhlcml0cyhEcm9wZG93biwgX0NvbXBvbmVudDMpO1xuXG4gIGZ1bmN0aW9uIERyb3Bkb3duKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERyb3Bkb3duKTtcblxuICAgIHZhciBfdGhpczMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoRHJvcGRvd24uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihEcm9wZG93bikpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIHZhciBkYXRhID0gW10sXG4gICAgICAgIHNlbGVjdGlvbiA9ICgwLCBfbGlzdDIuZGVmYXVsdCkocHJvcHMudmFsdWUgPyBbcHJvcHMudmFsdWVdIDogZGF0YSk7XG4gICAgX3RoaXMzLnN0YXRlID0ge1xuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIHNlbGVjdGlvbjogc2VsZWN0aW9uLFxuICAgICAgc2VhcmNoRmlsdGVyOiAnJyxcbiAgICAgIG11bHRpcGxlOiBmYWxzZSxcbiAgICAgIHNob3c6IGZhbHNlXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXMzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKERyb3Bkb3duLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgIF9vYnNlcnZhYmxlMi5kZWZhdWx0LmZyb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJykuc3Vic2NyaWJlKHRoaXMuY2xvc2VPbkJsdXIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBfb2JzZXJ2YWJsZTIuZGVmYXVsdC5mcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpLnVuc3Vic2NyaWJlKHRoaXMuY2xvc2VPbkJsdXIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcihfcmVmMykge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHZhciBfcmVmMyRjbGFzc05hbWUgPSBfcmVmMy5jbGFzc05hbWUsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3JlZjMkY2xhc3NOYW1lID09PSB1bmRlZmluZWQgPyAnJyA6IF9yZWYzJGNsYXNzTmFtZSxcbiAgICAgICAgICBmaWVsZExhYmVsID0gX3JlZjMuZmllbGRMYWJlbCxcbiAgICAgICAgICBfcmVmMyRkaXNwbGF5RmllbGQgPSBfcmVmMy5kaXNwbGF5RmllbGQsXG4gICAgICAgICAgZGlzcGxheUZpZWxkID0gX3JlZjMkZGlzcGxheUZpZWxkID09PSB1bmRlZmluZWQgPyAnbmFtZScgOiBfcmVmMyRkaXNwbGF5RmllbGQsXG4gICAgICAgICAgb3RoZXJzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYzLCBbJ2NsYXNzTmFtZScsICdmaWVsZExhYmVsJywgJ2Rpc3BsYXlGaWVsZCddKTtcblxuICAgICAgdmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgc2hvdyA9IF9zdGF0ZS5zaG93LFxuICAgICAgICAgIGRhdGEgPSBfc3RhdGUuZGF0YSxcbiAgICAgICAgICBzZWxlY3Rpb24gPSBfc3RhdGUuc2VsZWN0aW9uLFxuICAgICAgICAgIHNlYXJjaEZpbHRlciA9IF9zdGF0ZS5zZWFyY2hGaWx0ZXI7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NlY3Rpb24nLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ2Ryb3Bkb3duICcgKyBjbGFzc05hbWUgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoRmllbGQsIHsgY2xhc3NOYW1lOiAnZHJvcGRvd24tdGV4dCcsIHZhbHVlOiBzZWxlY3Rpb24ubWFwKGZ1bmN0aW9uIChyZWMpIHtcbiAgICAgICAgICAgIHJldHVybiByZWMuZ2V0ID8gcmVjLmdldChkaXNwbGF5RmllbGQpIDogcmVjO1xuICAgICAgICAgIH0pLmNvbGxlY3QoKS5qb2luKCcsJykgfHwgZmllbGRMYWJlbCwgcmVhZE9ubHk6IHRydWUgfSksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBjbGFzc05hbWU6ICdkcm9wZG93bi10b2dnbGUnLCBvbkNsaWNrOiB0aGlzLnRvZ2dsZSB9KSxcbiAgICAgICAgc2hvdyAmJiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ2Ryb3Bkb3duLW1lbnUnIH0sXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnZHJvcGRvd24tYWN0aW9uJyB9LFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoRmllbGQsIHsgdmFsdWU6IHNlYXJjaEZpbHRlciB8fCAnJywgb25DaGFuZ2U6IHRoaXMuZmlsdGVyLCBwbGFjZWhvbGRlcjogJ1NlYXJjaC4uLicgfSlcbiAgICAgICAgICApLFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2Ryb3Bkb3duLWxpc3QnIH0sXG4gICAgICAgICAgICBkYXRhLm1hcChmdW5jdGlvbiAocmVjKSB7XG4gICAgICAgICAgICAgIHZhciBjbGFzc05hbWUgPSBfZXh0Mi5kZWZhdWx0LmNsYXNzTmFtZShbJ2Ryb3Bkb3duLWl0ZW0nLCB7ICdzZWxlY3RlZCc6IHNlbGVjdGlvbi5jb250YWlucyhmdW5jdGlvbiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoc2VsZWN0ZWQuZ2V0ID8gc2VsZWN0ZWQuZ2V0KGRpc3BsYXlGaWVsZCkgOiBzZWxlY3RlZCkgPT09IHJlYy5nZXQoZGlzcGxheUZpZWxkKTtcbiAgICAgICAgICAgICAgICB9KSB9XSk7XG4gICAgICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNC5zZWxlY3QocmVjKTtcbiAgICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICByZWMuZ2V0ID8gcmVjLmdldChkaXNwbGF5RmllbGQpIDogcmVjXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0b2dnbGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3JlZjQgPSBfYXN5bmNUb0dlbmVyYXRvcihyZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlKCkge1xuICAgICAgICB2YXIgc2hvdywgX3Byb3BzLCBvbkNvbGxhcHNlLCBzdG9yZSwgX3N0YXRlMiwgbXVsdGlwbGUsIHNlbGVjdGlvbiwgX3Byb3BzMiwgX3N0b3JlLCBxdWVyeU1vZGUsIGRhdGE7XG5cbiAgICAgICAgcmV0dXJuIHJlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHNob3cgPSB0aGlzLnN0YXRlLnNob3c7XG5cbiAgICAgICAgICAgICAgICBzaG93ID0gIXNob3c7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4geyBzaG93OiBzaG93IH07XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2hvdykge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfcHJvcHMgPSB0aGlzLnByb3BzLCBvbkNvbGxhcHNlID0gX3Byb3BzLm9uQ29sbGFwc2UsIHN0b3JlID0gX3Byb3BzLnN0b3JlLCBfc3RhdGUyID0gdGhpcy5zdGF0ZSwgbXVsdGlwbGUgPSBfc3RhdGUyLm11bHRpcGxlLCBzZWxlY3Rpb24gPSBfc3RhdGUyLnNlbGVjdGlvbjtcblxuICAgICAgICAgICAgICAgIG9uQ29sbGFwc2UgJiYgb25Db2xsYXBzZShtdWx0aXBsZSA/IHNlbGVjdGlvbi5tYXAoZnVuY3Rpb24gKHJlYykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlYy5kYXRhO1xuICAgICAgICAgICAgICAgIH0pLmNvbGxlY3QoKSA6IHNlbGVjdGlvbi5jb2xsZWN0KClbMF0uZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4geyBzZWFyY2hGaWx0ZXI6ICcnLCBkYXRhOiBzdG9yZS5nZXREYXRhKCkgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgIF9wcm9wczIgPSB0aGlzLnByb3BzLCBfc3RvcmUgPSBfcHJvcHMyLnN0b3JlLCBxdWVyeU1vZGUgPSBfcHJvcHMyLnF1ZXJ5TW9kZTtcbiAgICAgICAgICAgICAgICBkYXRhID0gdGhpcy5zdGF0ZS5kYXRhO1xuXG4gICAgICAgICAgICAgICAgaWYgKCEoIWRhdGEgfHwgIWRhdGEubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDE3O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCEocXVlcnlNb2RlID09PSAncmVtb3RlJykpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxNTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxNTtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3N0b3JlLmxvYWQoKTtcblxuICAgICAgICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgICAgICAgIGRhdGEgPSBfc3RvcmUuZ2V0RGF0YSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgZGF0YTogZGF0YSB9O1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTc6XG4gICAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIF9jYWxsZWUsIHRoaXMpO1xuICAgICAgfSkpO1xuXG4gICAgICBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgICAgIHJldHVybiBfcmVmNC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdG9nZ2xlO1xuICAgIH0oKVxuICB9LCB7XG4gICAga2V5OiAnc2VsZWN0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VsZWN0KHJlYykge1xuICAgICAgdmFyIG9uU2VsZWN0ID0gdGhpcy5wcm9wcy5vblNlbGVjdDtcblxuICAgICAgb25TZWxlY3QgJiYgb25TZWxlY3QocmVjKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3Rpb246ICgwLCBfbGlzdDIuZGVmYXVsdCkoW3JlY10pIH0sIHRoaXMudG9nZ2xlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdmaWx0ZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmaWx0ZXIoc2VhcmNoRmlsdGVyKSB7XG4gICAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgc3RvcmUgPSBfcHJvcHMzLnN0b3JlLFxuICAgICAgICAgIGRpc3BsYXlGaWVsZCA9IF9wcm9wczMuZGlzcGxheUZpZWxkO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzZWFyY2hGaWx0ZXI6IHNlYXJjaEZpbHRlcixcbiAgICAgICAgICBkYXRhOiBzdG9yZS5maWx0ZXJCeShmdW5jdGlvbiAocmVjKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVjLmdldChkaXNwbGF5RmllbGQpLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aChzZWFyY2hGaWx0ZXIudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgfSkuY29sbGVjdCgpXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjbG9zZU9uQmx1cicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsb3NlT25CbHVyKGUpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNob3cpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBudWxsO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG5vZGUgPSAoMCwgX3JlYWN0RG9tLmZpbmRET01Ob2RlKSh0aGlzKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIG5vZGUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX3RhcmdldCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQsXG4gICAgICAgICAgICBwYXJlbnRGb3VuZCA9IGZhbHNlO1xuICAgICAgICB3aGlsZSAoX3RhcmdldCAhPSBudWxsKSB7XG4gICAgICAgICAgaWYgKF90YXJnZXQgPT09IG5vZGUpIHtcbiAgICAgICAgICAgIHBhcmVudEZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBfdGFyZ2V0ID0gX3RhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwYXJlbnRGb3VuZCkge1xuICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRHJvcGRvd247XG59KF9yZWFjdC5Db21wb25lbnQpLCAoX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MzLnByb3RvdHlwZSwgJ3JlbmRlcicsIFtfd2l0aFByb3BzMi5kZWZhdWx0XSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfY2xhc3MzLnByb3RvdHlwZSwgJ3JlbmRlcicpLCBfY2xhc3MzLnByb3RvdHlwZSksIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzMy5wcm90b3R5cGUsICd0b2dnbGUnLCBbX2JpbmQyLmRlZmF1bHRdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzczMucHJvdG90eXBlLCAndG9nZ2xlJyksIF9jbGFzczMucHJvdG90eXBlKSwgX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MzLnByb3RvdHlwZSwgJ3NlbGVjdCcsIFtfYmluZDIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzMy5wcm90b3R5cGUsICdzZWxlY3QnKSwgX2NsYXNzMy5wcm90b3R5cGUpLCBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzczMucHJvdG90eXBlLCAnZmlsdGVyJywgW19iaW5kMi5kZWZhdWx0XSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfY2xhc3MzLnByb3RvdHlwZSwgJ2ZpbHRlcicpLCBfY2xhc3MzLnByb3RvdHlwZSksIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzMy5wcm90b3R5cGUsICdjbG9zZU9uQmx1cicsIFtfYmluZDIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzMy5wcm90b3R5cGUsICdjbG9zZU9uQmx1cicpLCBfY2xhc3MzLnByb3RvdHlwZSkpLCBfY2xhc3MzKTtcbnZhciBDaGVja2JveCA9IGV4cG9ydHMuQ2hlY2tib3ggPSAoX2NsYXNzNCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50NCkge1xuICBfaW5oZXJpdHMoQ2hlY2tib3gsIF9Db21wb25lbnQ0KTtcblxuICBmdW5jdGlvbiBDaGVja2JveChwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDaGVja2JveCk7XG5cbiAgICB2YXIgX3RoaXM1ID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKENoZWNrYm94Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2hlY2tib3gpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpczUuc3RhdGUgPSB7XG4gICAgICBjaGVja2VkOiBwcm9wcy5jaGVja2VkXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM1O1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENoZWNrYm94LCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBjaGVja2VkID0gdGhpcy5zdGF0ZS5jaGVja2VkLFxuICAgICAgICAgIG90aGVycyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyh0aGlzLnByb3BzLCBbXSk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCBfZXh0ZW5kcyh7IHR5cGU6ICdjaGVja2JveCcsIGNoZWNrZWQ6IGNoZWNrZWQsIG9uQ2hhbmdlOiB0aGlzLnRvZ2dsZUNoZWNrIH0sIG90aGVycykpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RvZ2dsZUNoZWNrJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9nZ2xlQ2hlY2soKSB7XG4gICAgICB2YXIgY2hlY2tlZCA9IHRoaXMuc3RhdGUuY2hlY2tlZDtcblxuICAgICAgY2hlY2tlZCA9ICFjaGVja2VkO1xuICAgICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7IGNoZWNrZWQ6IGNoZWNrZWQgfTtcbiAgICAgIH0pO1xuICAgICAgdmFyIF9wcm9wczQgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIG9uQ2hlY2tDaGFuZ2UgPSBfcHJvcHM0Lm9uQ2hlY2tDaGFuZ2UsXG4gICAgICAgICAgbW9kZWwgPSBfcHJvcHM0Lm1vZGVsO1xuXG4gICAgICBvbkNoZWNrQ2hhbmdlICYmIG9uQ2hlY2tDaGFuZ2UoY2hlY2tlZCwgbW9kZWwpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDaGVja2JveDtcbn0oX3JlYWN0LkNvbXBvbmVudCksIChfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzczQucHJvdG90eXBlLCAndG9nZ2xlQ2hlY2snLCBbX2JpbmQyLmRlZmF1bHRdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzczQucHJvdG90eXBlLCAndG9nZ2xlQ2hlY2snKSwgX2NsYXNzNC5wcm90b3R5cGUpKSwgX2NsYXNzNCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2Rlc2MsIF92YWx1ZSwgX2NsYXNzO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfbGlzdCA9IHJlcXVpcmUoJy4uL2NvcmUvbGlzdCcpO1xuXG52YXIgX2xpc3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGlzdCk7XG5cbnZhciBfbnVtYmVyID0gcmVxdWlyZSgnLi4vY29yZS9udW1iZXInKTtcblxudmFyIF9udW1iZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbnVtYmVyKTtcblxudmFyIF9leHQgPSByZXF1aXJlKCcuLi9jb3JlL2V4dCcpO1xuXG52YXIgX2V4dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHQpO1xuXG52YXIgX29ic2VydmFibGUgPSByZXF1aXJlKCcuLi9taXhpbi9vYnNlcnZhYmxlJyk7XG5cbnZhciBfb2JzZXJ2YWJsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYnNlcnZhYmxlKTtcblxudmFyIF93aXRoUHJvcHMgPSByZXF1aXJlKCcuLi9taXhpbi93aXRoLXByb3BzJyk7XG5cbnZhciBfd2l0aFByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dpdGhQcm9wcyk7XG5cbnZhciBfYmluZCA9IHJlcXVpcmUoJy4uL21peGluL2JpbmQnKTtcblxudmFyIF9iaW5kMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2JpbmQpO1xuXG52YXIgX2NvbnRhaW5lciA9IHJlcXVpcmUoJy4vY29udGFpbmVyJyk7XG5cbnZhciBfY29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRhaW5lcik7XG5cbnZhciBfaGVhZGVyID0gcmVxdWlyZSgnLi9ncmlkL2hlYWRlcicpO1xuXG52YXIgX2hlYWRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWFkZXIpO1xuXG52YXIgX2JvZHkgPSByZXF1aXJlKCcuL2dyaWQvYm9keScpO1xuXG52YXIgX2JvZHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYm9keSk7XG5cbnZhciBfcGFnaW5nVG9vbGJhciA9IHJlcXVpcmUoJy4vZ3JpZC9wYWdpbmctdG9vbGJhcicpO1xuXG52YXIgX3BhZ2luZ1Rvb2xiYXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGFnaW5nVG9vbGJhcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZnVuY3Rpb24gX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcih0YXJnZXQsIHByb3BlcnR5LCBkZWNvcmF0b3JzLCBkZXNjcmlwdG9yLCBjb250ZXh0KSB7XG4gIHZhciBkZXNjID0ge307XG4gIE9iamVjdFsna2UnICsgJ3lzJ10oZGVzY3JpcHRvcikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgZGVzY1trZXldID0gZGVzY3JpcHRvcltrZXldO1xuICB9KTtcbiAgZGVzYy5lbnVtZXJhYmxlID0gISFkZXNjLmVudW1lcmFibGU7XG4gIGRlc2MuY29uZmlndXJhYmxlID0gISFkZXNjLmNvbmZpZ3VyYWJsZTtcblxuICBpZiAoJ3ZhbHVlJyBpbiBkZXNjIHx8IGRlc2MuaW5pdGlhbGl6ZXIpIHtcbiAgICBkZXNjLndyaXRhYmxlID0gdHJ1ZTtcbiAgfVxuXG4gIGRlc2MgPSBkZWNvcmF0b3JzLnNsaWNlKCkucmV2ZXJzZSgpLnJlZHVjZShmdW5jdGlvbiAoZGVzYywgZGVjb3JhdG9yKSB7XG4gICAgcmV0dXJuIGRlY29yYXRvcih0YXJnZXQsIHByb3BlcnR5LCBkZXNjKSB8fCBkZXNjO1xuICB9LCBkZXNjKTtcblxuICBpZiAoY29udGV4dCAmJiBkZXNjLmluaXRpYWxpemVyICE9PSB2b2lkIDApIHtcbiAgICBkZXNjLnZhbHVlID0gZGVzYy5pbml0aWFsaXplciA/IGRlc2MuaW5pdGlhbGl6ZXIuY2FsbChjb250ZXh0KSA6IHZvaWQgMDtcbiAgICBkZXNjLmluaXRpYWxpemVyID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKGRlc2MuaW5pdGlhbGl6ZXIgPT09IHZvaWQgMCkge1xuICAgIE9iamVjdFsnZGVmaW5lJyArICdQcm9wZXJ0eSddKHRhcmdldCwgcHJvcGVydHksIGRlc2MpO1xuICAgIGRlc2MgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGRlc2M7XG59XG5cbnZhciBHcmlkID0gKF9jbGFzcyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhHcmlkLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBHcmlkKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdyaWQpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEdyaWQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihHcmlkKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBjaGVja0NvbHVtbjogcHJvcHMuY2hlY2tDb2x1bW4sXG4gICAgICBoZWFkZXJUcGw6IHByb3BzLmhlYWRlclRwbCxcbiAgICAgIGNvbHVtbnM6ICgwLCBfbGlzdDIuZGVmYXVsdCkoX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLnRvQXJyYXkocHJvcHMuY2hpbGRyZW4pKS5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIHJldHVybiBjaGlsZC5wcm9wcztcbiAgICAgIH0pLmNvbGxlY3QoKSxcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaW5uZXJXaWR0aDogMCxcbiAgICAgIGhlYWRlcldpZHRoOiAwLFxuICAgICAgYm9keVdpZHRoOiAwXG4gICAgfTtcbiAgICBfdGhpcy5yZWxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhHcmlkLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHt9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5yZXNpemVHcmlkKCk7XG4gICAgICB0aGlzLnByb3BzLnN0b3JlLnN1YnNjcmliZSh0aGlzLnJlbG9hZCk7XG4gICAgICBfb2JzZXJ2YWJsZTIuZGVmYXVsdC5mcm9tRXZlbnQod2luZG93LCAncmVzaXplJykuc3Vic2NyaWJlKHRoaXMucmVzaXplR3JpZCk7XG4gICAgICBfb2JzZXJ2YWJsZTIuZGVmYXVsdC5mcm9tRXZlbnQoX2V4dDIuZGVmYXVsdC5nZXRDb21wKHRoaXMpLmZpbmQoJy5yeC1ncmlkLWJvZHknKSwgJ3Njcm9sbCcpLnN1YnNjcmliZSh0aGlzLm9uU2Nyb2xsKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5wcm9wcy5zdG9yZS51bnN1YnNjcmliZSh0aGlzLnJlbG9hZCk7XG4gICAgICBfb2JzZXJ2YWJsZTIuZGVmYXVsdC5mcm9tRXZlbnQod2luZG93LCAncmVzaXplJykudW5zdWJzY3JpYmUodGhpcy5yZXNpemVHcmlkKTtcbiAgICAgIF9vYnNlcnZhYmxlMi5kZWZhdWx0LmZyb21FdmVudChfZXh0Mi5kZWZhdWx0LmdldENvbXAodGhpcykuZmluZCgnLnJ4LWdyaWQtYm9keScpLCAnc2Nyb2xsJykudW5zdWJzY3JpYmUodGhpcy5vblNjcm9sbCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKF9yZWYpIHtcbiAgICAgIHZhciBzdG9yZSA9IF9yZWYuc3RvcmUsXG4gICAgICAgICAgcGFnaW5nID0gX3JlZi5wYWdpbmc7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX2NvbnRhaW5lcjIuZGVmYXVsdCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgcGFnaW5nICYmIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9wYWdpbmdUb29sYmFyMi5kZWZhdWx0LCB7IHN0b3JlOiBzdG9yZSB9KSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgX2NvbnRhaW5lcjIuZGVmYXVsdCxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ3J4LWdyaWQnIH0sXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWRlcjIuZGVmYXVsdCwgX2V4dGVuZHMoeyB0b3RhbDogc3RvcmUuY291bnQoKSB9LCB0aGlzLnN0YXRlKSksXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2JvZHkyLmRlZmF1bHQsIF9leHRlbmRzKHsgZGF0YTogc3RvcmUuZ2V0RGF0YSgpIH0sIHRoaXMuc3RhdGUpKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Jlc2l6ZUdyaWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNpemVHcmlkKCkge1xuICAgICAgdmFyIGNvbHVtbnMgPSB0aGlzLnN0YXRlLmNvbHVtbnMsXG4gICAgICAgICAgbm9kZSA9IF9leHQyLmRlZmF1bHQuZ2V0Q29tcCh0aGlzKSxcbiAgICAgICAgICBwYXJlbnQgPSBub2RlLnBhcmVudCgpLFxuICAgICAgICAgIGZsZXhDb2x1bW5zID0gW107XG5cblxuICAgICAgdmFyIHdpZHRoID0gcGFyZW50LndpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gcGFyZW50LmhlaWdodCgpLFxuICAgICAgICAgIGlubmVyV2lkdGggPSAoMCwgX2xpc3QyLmRlZmF1bHQpKGNvbHVtbnMpLnJlZHVjZShmdW5jdGlvbiAoaW5uZXJXaWR0aCwgY29sKSB7XG4gICAgICAgIGlmIChjb2wuc3R5bGUgJiYgY29sLnN0eWxlLndpZHRoKSB7XG4gICAgICAgICAgaW5uZXJXaWR0aCArPSBjb2wuc3R5bGUud2lkdGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmxleENvbHVtbnMucHVzaChjb2wpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbm5lcldpZHRoO1xuICAgICAgfSwgdGhpcy5wcm9wcy5jaGVja0NvbHVtbiA/IF9leHQyLmRlZmF1bHQuQ0hFQ0tfQ09MVU1OX1dJRFRIIDogMCksXG4gICAgICAgICAgaGVhZGVyV2lkdGggPSBpbm5lcldpZHRoICsgX2V4dDIuZGVmYXVsdC5TQ1JPTExfV0lEVEgsXG4gICAgICAgICAgYm9keVdpZHRoID0gaW5uZXJXaWR0aDtcblxuICAgICAgaWYgKGlubmVyV2lkdGggPCB3aWR0aCAmJiBmbGV4Q29sdW1ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciByZW1haW5XaWR0aCA9IHdpZHRoIC0gaW5uZXJXaWR0aCAtIF9leHQyLmRlZmF1bHQuU0NST0xMX1dJRFRIIC0gX2V4dDIuZGVmYXVsdC5CT1JERVJfV0lEVEgsXG4gICAgICAgICAgICByZW1haW5Db2x1bW4gPSBmbGV4Q29sdW1ucy5sZW5ndGg7XG4gICAgICAgICgwLCBfbGlzdDIuZGVmYXVsdCkoZmxleENvbHVtbnMpLmVhY2goZnVuY3Rpb24gKGNvbCkge1xuICAgICAgICAgICFjb2wuc3R5bGUgJiYgKGNvbC5zdHlsZSA9IHt9KTtcbiAgICAgICAgICB2YXIgd2lkdGggPSByZW1haW5Db2x1bW4gPT09IDEgPyByZW1haW5XaWR0aCA6IF9udW1iZXIyLmRlZmF1bHQucm91bmQocmVtYWluV2lkdGggLyByZW1haW5Db2x1bW4pO1xuICAgICAgICAgIGNvbC5zdHlsZS53aWR0aCA9IHdpZHRoO1xuICAgICAgICAgIHJlbWFpbldpZHRoIC09IHdpZHRoO1xuICAgICAgICAgIC0tcmVtYWluQ29sdW1uO1xuICAgICAgICB9KTtcbiAgICAgICAgaW5uZXJXaWR0aCA9IHdpZHRoO1xuICAgICAgICBoZWFkZXJXaWR0aCA9IHdpZHRoIC0gX2V4dDIuZGVmYXVsdC5CT1JERVJfV0lEVEg7XG4gICAgICAgIGJvZHlXaWR0aCA9IHdpZHRoIC0gX2V4dDIuZGVmYXVsdC5TQ1JPTExfV0lEVEggLSBfZXh0Mi5kZWZhdWx0LkJPUkRFUl9XSURUSDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7IGNvbHVtbnM6IGNvbHVtbnMsIHdpZHRoOiB3aWR0aCwgaW5uZXJXaWR0aDogaW5uZXJXaWR0aCwgaGVhZGVyV2lkdGg6IGhlYWRlcldpZHRoLCBib2R5V2lkdGg6IGJvZHlXaWR0aCB9O1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25TY3JvbGwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvblNjcm9sbCgpIHtcbiAgICAgIHZhciBub2RlID0gX2V4dDIuZGVmYXVsdC5nZXRDb21wKHRoaXMpO1xuICAgICAgbm9kZS5maW5kKCcucngtZ3JpZC1oZWFkZXInKS5zY3JvbGxMZWZ0ID0gbm9kZS5maW5kKCcucngtZ3JpZC1ib2R5Jykuc2Nyb2xsTGVmdDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gR3JpZDtcbn0oX3JlYWN0LkNvbXBvbmVudCksIChfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdyZW5kZXInLCBbX3dpdGhQcm9wczIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ3JlbmRlcicpLCBfY2xhc3MucHJvdG90eXBlKSwgX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAncmVzaXplR3JpZCcsIFtfYmluZDIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ3Jlc2l6ZUdyaWQnKSwgX2NsYXNzLnByb3RvdHlwZSksIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ29uU2Nyb2xsJywgW19iaW5kMi5kZWZhdWx0XSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAnb25TY3JvbGwnKSwgX2NsYXNzLnByb3RvdHlwZSkpLCBfY2xhc3MpO1xuZXhwb3J0cy5kZWZhdWx0ID0gR3JpZDsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZGVzYywgX3ZhbHVlLCBfY2xhc3M7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF93aXRoUHJvcHMgPSByZXF1aXJlKCcuLi8uLi9taXhpbi93aXRoLXByb3BzJyk7XG5cbnZhciBfd2l0aFByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dpdGhQcm9wcyk7XG5cbnZhciBfY29udGFpbmVyID0gcmVxdWlyZSgnLi4vY29udGFpbmVyJyk7XG5cbnZhciBfY29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRhaW5lcik7XG5cbnZhciBfcm93ID0gcmVxdWlyZSgnLi9yb3cnKTtcblxudmFyIF9yb3cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcm93KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eSwgZGVjb3JhdG9ycywgZGVzY3JpcHRvciwgY29udGV4dCkge1xuICB2YXIgZGVzYyA9IHt9O1xuICBPYmplY3RbJ2tlJyArICd5cyddKGRlc2NyaXB0b3IpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGRlc2Nba2V5XSA9IGRlc2NyaXB0b3Jba2V5XTtcbiAgfSk7XG4gIGRlc2MuZW51bWVyYWJsZSA9ICEhZGVzYy5lbnVtZXJhYmxlO1xuICBkZXNjLmNvbmZpZ3VyYWJsZSA9ICEhZGVzYy5jb25maWd1cmFibGU7XG5cbiAgaWYgKCd2YWx1ZScgaW4gZGVzYyB8fCBkZXNjLmluaXRpYWxpemVyKSB7XG4gICAgZGVzYy53cml0YWJsZSA9IHRydWU7XG4gIH1cblxuICBkZXNjID0gZGVjb3JhdG9ycy5zbGljZSgpLnJldmVyc2UoKS5yZWR1Y2UoZnVuY3Rpb24gKGRlc2MsIGRlY29yYXRvcikge1xuICAgIHJldHVybiBkZWNvcmF0b3IodGFyZ2V0LCBwcm9wZXJ0eSwgZGVzYykgfHwgZGVzYztcbiAgfSwgZGVzYyk7XG5cbiAgaWYgKGNvbnRleHQgJiYgZGVzYy5pbml0aWFsaXplciAhPT0gdm9pZCAwKSB7XG4gICAgZGVzYy52YWx1ZSA9IGRlc2MuaW5pdGlhbGl6ZXIgPyBkZXNjLmluaXRpYWxpemVyLmNhbGwoY29udGV4dCkgOiB2b2lkIDA7XG4gICAgZGVzYy5pbml0aWFsaXplciA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmIChkZXNjLmluaXRpYWxpemVyID09PSB2b2lkIDApIHtcbiAgICBPYmplY3RbJ2RlZmluZScgKyAnUHJvcGVydHknXSh0YXJnZXQsIHByb3BlcnR5LCBkZXNjKTtcbiAgICBkZXNjID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBkZXNjO1xufVxuXG52YXIgR3JpZEJvZHkgPSAoX2NsYXNzID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEdyaWRCb2R5LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBHcmlkQm9keSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR3JpZEJvZHkpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChHcmlkQm9keS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEdyaWRCb2R5KSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoR3JpZEJvZHksIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKF9yZWYpIHtcbiAgICAgIHZhciBjb2x1bW5zID0gX3JlZi5jb2x1bW5zLFxuICAgICAgICAgIHdpZHRoID0gX3JlZi53aWR0aCxcbiAgICAgICAgICBib2R5V2lkdGggPSBfcmVmLmJvZHlXaWR0aCxcbiAgICAgICAgICBkYXRhID0gX3JlZi5kYXRhLFxuICAgICAgICAgIG90aGVycyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ2NvbHVtbnMnLCAnd2lkdGgnLCAnYm9keVdpZHRoJywgJ2RhdGEnXSk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX2NvbnRhaW5lcjIuZGVmYXVsdCxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdyeC1ncmlkLWJvZHknLCBzdHlsZTogeyB3aWR0aDogd2lkdGggfSB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnc2VjdGlvbicsXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdyeC1ncmlkLXZpZXcnLCBzdHlsZTogeyB3aWR0aDogYm9keVdpZHRoIH0gfSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBzdHlsZTogeyBoZWlnaHQ6IDEgfSB9KSxcbiAgICAgICAgICBkYXRhICYmIGRhdGEubWFwKGZ1bmN0aW9uIChyZWNvcmQsIHJvd0luZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JvdzIuZGVmYXVsdCwgX2V4dGVuZHMoeyByb3dJbmRleDogcm93SW5kZXgsIHJlY29yZDogcmVjb3JkLCBjb2x1bW5zOiBjb2x1bW5zIH0sIG90aGVycykpO1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEdyaWRCb2R5O1xufShfcmVhY3QuQ29tcG9uZW50KSwgKF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ3JlbmRlcicsIFtfd2l0aFByb3BzMi5kZWZhdWx0XSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAncmVuZGVyJyksIF9jbGFzcy5wcm90b3R5cGUpKSwgX2NsYXNzKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEdyaWRCb2R5OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9kZXNjLCBfdmFsdWUsIF9jbGFzcztcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2V4dCA9IHJlcXVpcmUoJy4uLy4uL2NvcmUvZXh0Jyk7XG5cbnZhciBfZXh0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dCk7XG5cbnZhciBfZm9ybSA9IHJlcXVpcmUoJy4uL2Zvcm0nKTtcblxudmFyIF93aXRoUHJvcHMgPSByZXF1aXJlKCcuLi8uLi9taXhpbi93aXRoLXByb3BzJyk7XG5cbnZhciBfd2l0aFByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dpdGhQcm9wcyk7XG5cbnZhciBfYmluZCA9IHJlcXVpcmUoJy4uLy4uL21peGluL2JpbmQnKTtcblxudmFyIF9iaW5kMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2JpbmQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZnVuY3Rpb24gX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcih0YXJnZXQsIHByb3BlcnR5LCBkZWNvcmF0b3JzLCBkZXNjcmlwdG9yLCBjb250ZXh0KSB7XG4gIHZhciBkZXNjID0ge307XG4gIE9iamVjdFsna2UnICsgJ3lzJ10oZGVzY3JpcHRvcikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgZGVzY1trZXldID0gZGVzY3JpcHRvcltrZXldO1xuICB9KTtcbiAgZGVzYy5lbnVtZXJhYmxlID0gISFkZXNjLmVudW1lcmFibGU7XG4gIGRlc2MuY29uZmlndXJhYmxlID0gISFkZXNjLmNvbmZpZ3VyYWJsZTtcblxuICBpZiAoJ3ZhbHVlJyBpbiBkZXNjIHx8IGRlc2MuaW5pdGlhbGl6ZXIpIHtcbiAgICBkZXNjLndyaXRhYmxlID0gdHJ1ZTtcbiAgfVxuXG4gIGRlc2MgPSBkZWNvcmF0b3JzLnNsaWNlKCkucmV2ZXJzZSgpLnJlZHVjZShmdW5jdGlvbiAoZGVzYywgZGVjb3JhdG9yKSB7XG4gICAgcmV0dXJuIGRlY29yYXRvcih0YXJnZXQsIHByb3BlcnR5LCBkZXNjKSB8fCBkZXNjO1xuICB9LCBkZXNjKTtcblxuICBpZiAoY29udGV4dCAmJiBkZXNjLmluaXRpYWxpemVyICE9PSB2b2lkIDApIHtcbiAgICBkZXNjLnZhbHVlID0gZGVzYy5pbml0aWFsaXplciA/IGRlc2MuaW5pdGlhbGl6ZXIuY2FsbChjb250ZXh0KSA6IHZvaWQgMDtcbiAgICBkZXNjLmluaXRpYWxpemVyID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKGRlc2MuaW5pdGlhbGl6ZXIgPT09IHZvaWQgMCkge1xuICAgIE9iamVjdFsnZGVmaW5lJyArICdQcm9wZXJ0eSddKHRhcmdldCwgcHJvcGVydHksIGRlc2MpO1xuICAgIGRlc2MgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGRlc2M7XG59XG5cbnZhciBHcmlkQ2VsbCA9IChfY2xhc3MgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoR3JpZENlbGwsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEdyaWRDZWxsKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdyaWRDZWxsKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChHcmlkQ2VsbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEdyaWRDZWxsKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgdmFyIHJlY29yZCA9IHByb3BzLnJlY29yZCxcbiAgICAgICAgZGF0YUluZGV4ID0gcHJvcHMuZGF0YUluZGV4O1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogZGF0YUluZGV4ID8gcmVjb3JkLmdldChkYXRhSW5kZXgpIDogJycsXG4gICAgICByZWFkT25seTogdHJ1ZVxuICAgIH07XG4gICAgX2V4dDIuZGVmYXVsdC5nZW5lcmF0ZVNldHRlcihfdGhpcy5zdGF0ZSwgX3RoaXMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhHcmlkQ2VsbCwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5wcm9wcy5yZWNvcmQuc3RvcmUuc3Vic2NyaWJlKHRoaXMucmVsb2FkKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5wcm9wcy5yZWNvcmQuc3RvcmUudW5zdWJzY3JpYmUodGhpcy5yZWxvYWQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcihfcmVmKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIF9yZWYkY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3JlZiRjbGFzc05hbWUgPT09IHVuZGVmaW5lZCA/ICcnIDogX3JlZiRjbGFzc05hbWUsXG4gICAgICAgICAgX3JlZiRzdHlsZSA9IF9yZWYuc3R5bGUsXG4gICAgICAgICAgc3R5bGUgPSBfcmVmJHN0eWxlID09PSB1bmRlZmluZWQgPyB7fSA6IF9yZWYkc3R5bGUsXG4gICAgICAgICAgX3JlbmRlciA9IF9yZWYucmVuZGVyLFxuICAgICAgICAgIHJlY29yZCA9IF9yZWYucmVjb3JkLFxuICAgICAgICAgIGRhdGFJbmRleCA9IF9yZWYuZGF0YUluZGV4LFxuICAgICAgICAgIHJvd0luZGV4ID0gX3JlZi5yb3dJbmRleCxcbiAgICAgICAgICBlZGl0YWJsZSA9IF9yZWYuZWRpdGFibGUsXG4gICAgICAgICAgb3RoZXJzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsnY2xhc3NOYW1lJywgJ3N0eWxlJywgJ3JlbmRlcicsICdyZWNvcmQnLCAnZGF0YUluZGV4JywgJ3Jvd0luZGV4JywgJ2VkaXRhYmxlJ10pO1xuXG4gICAgICB2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICB2YWx1ZSA9IF9zdGF0ZS52YWx1ZSxcbiAgICAgICAgICByZWFkT25seSA9IF9zdGF0ZS5yZWFkT25seSxcbiAgICAgICAgICBjbHMgPSBfZXh0Mi5kZWZhdWx0LmNsYXNzTmFtZShbJ3J4LWdyaWQtY2VsbCcsIGNsYXNzTmFtZSwgeyAnbW9kaWZpZWQnOiBkYXRhSW5kZXggJiYgcmVjb3JkLmlzTW9kaWZpZWQoZGF0YUluZGV4KSB9XSk7XG5cbiAgICAgIGlmIChlZGl0YWJsZSkge1xuICAgICAgICBpZiAocmVhZE9ubHkpIHtcbiAgICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIF9leHRlbmRzKHsgY2xhc3NOYW1lOiBjbHMsIHN0eWxlOiBzdHlsZSwgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLnNldFJlYWRPbmx5KGZhbHNlKTtcbiAgICAgICAgICAgICAgfSB9LCBvdGhlcnMpLFxuICAgICAgICAgICAgX3JlbmRlciA/IF9yZW5kZXIodmFsdWUsIHJlY29yZCwgZGF0YUluZGV4LCByb3dJbmRleCkgOiB2YWx1ZVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAoZWRpdGFibGUudHlwZSA9PT0gJ2Ryb3Bkb3duJykge1xuICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgX2V4dGVuZHMoeyBjbGFzc05hbWU6IGNscywgc3R5bGU6IHN0eWxlIH0sIG90aGVycyksXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfZm9ybS5Ecm9wZG93biwgeyB2YWx1ZTogdmFsdWUsIHN0b3JlOiBlZGl0YWJsZS5zdG9yZSwgZmllbGRMYWJlbDogZWRpdGFibGUuZmllbGRMYWJlbCwgb25TZWxlY3Q6IGZ1bmN0aW9uIG9uU2VsZWN0KHJlYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczIuc2V0VmFsdWUocmVjLmRhdGEpO1xuICAgICAgICAgICAgICB9LCBvbkNvbGxhcHNlOiB0aGlzLmFmdGVyRWRpdCB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICBfZXh0ZW5kcyh7IGNsYXNzTmFtZTogY2xzLCBzdHlsZTogc3R5bGUgfSwgb3RoZXJzKSxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9mb3JtLkZpZWxkLCB7IHZhbHVlOiB2YWx1ZSwgYXV0b0ZvY3VzOiB0cnVlLCBvbkNoYW5nZTogdGhpcy5zZXRWYWx1ZSwgb25CbHVyOiB0aGlzLmFmdGVyRWRpdCB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgX2V4dGVuZHMoeyBjbGFzc05hbWU6IGNscywgc3R5bGU6IHN0eWxlIH0sIG90aGVycyksXG4gICAgICAgIF9yZW5kZXIgPyBfcmVuZGVyKHZhbHVlLCByZWNvcmQsIGRhdGFJbmRleCwgcm93SW5kZXgpIDogdmFsdWVcbiAgICAgICk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVsb2FkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVsb2FkKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgcmVjb3JkID0gX3Byb3BzLnJlY29yZCxcbiAgICAgICAgICBkYXRhSW5kZXggPSBfcHJvcHMuZGF0YUluZGV4O1xuXG4gICAgICB0aGlzLnNldFZhbHVlKGRhdGFJbmRleCA/IHJlY29yZC5nZXQoZGF0YUluZGV4KSA6ICcnKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdhZnRlckVkaXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZnRlckVkaXQodmFsdWUpIHtcbiAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICByZWNvcmQgPSBfcHJvcHMyLnJlY29yZCxcbiAgICAgICAgICBkYXRhSW5kZXggPSBfcHJvcHMyLmRhdGFJbmRleDtcblxuICAgICAgcmVjb3JkLnNldChkYXRhSW5kZXgsIHZhbHVlKTtcbiAgICAgIHRoaXMuc2V0UmVhZE9ubHkodHJ1ZSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEdyaWRDZWxsO1xufShfcmVhY3QuQ29tcG9uZW50KSwgKF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ3JlbmRlcicsIFtfd2l0aFByb3BzMi5kZWZhdWx0XSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAncmVuZGVyJyksIF9jbGFzcy5wcm90b3R5cGUpLCBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdyZWxvYWQnLCBbX2JpbmQyLmRlZmF1bHRdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdyZWxvYWQnKSwgX2NsYXNzLnByb3RvdHlwZSksIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2FmdGVyRWRpdCcsIFtfYmluZDIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2FmdGVyRWRpdCcpLCBfY2xhc3MucHJvdG90eXBlKSksIF9jbGFzcyk7XG5leHBvcnRzLmRlZmF1bHQgPSBHcmlkQ2VsbDsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZGVzYywgX3ZhbHVlLCBfY2xhc3M7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9leHQgPSByZXF1aXJlKCcuLi8uLi9jb3JlL2V4dCcpO1xuXG52YXIgX2V4dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHQpO1xuXG52YXIgX3dpdGhQcm9wcyA9IHJlcXVpcmUoJy4uLy4uL21peGluL3dpdGgtcHJvcHMnKTtcblxudmFyIF93aXRoUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2l0aFByb3BzKTtcblxudmFyIF9mb3JtID0gcmVxdWlyZSgnLi4vZm9ybScpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZnVuY3Rpb24gX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcih0YXJnZXQsIHByb3BlcnR5LCBkZWNvcmF0b3JzLCBkZXNjcmlwdG9yLCBjb250ZXh0KSB7XG4gIHZhciBkZXNjID0ge307XG4gIE9iamVjdFsna2UnICsgJ3lzJ10oZGVzY3JpcHRvcikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgZGVzY1trZXldID0gZGVzY3JpcHRvcltrZXldO1xuICB9KTtcbiAgZGVzYy5lbnVtZXJhYmxlID0gISFkZXNjLmVudW1lcmFibGU7XG4gIGRlc2MuY29uZmlndXJhYmxlID0gISFkZXNjLmNvbmZpZ3VyYWJsZTtcblxuICBpZiAoJ3ZhbHVlJyBpbiBkZXNjIHx8IGRlc2MuaW5pdGlhbGl6ZXIpIHtcbiAgICBkZXNjLndyaXRhYmxlID0gdHJ1ZTtcbiAgfVxuXG4gIGRlc2MgPSBkZWNvcmF0b3JzLnNsaWNlKCkucmV2ZXJzZSgpLnJlZHVjZShmdW5jdGlvbiAoZGVzYywgZGVjb3JhdG9yKSB7XG4gICAgcmV0dXJuIGRlY29yYXRvcih0YXJnZXQsIHByb3BlcnR5LCBkZXNjKSB8fCBkZXNjO1xuICB9LCBkZXNjKTtcblxuICBpZiAoY29udGV4dCAmJiBkZXNjLmluaXRpYWxpemVyICE9PSB2b2lkIDApIHtcbiAgICBkZXNjLnZhbHVlID0gZGVzYy5pbml0aWFsaXplciA/IGRlc2MuaW5pdGlhbGl6ZXIuY2FsbChjb250ZXh0KSA6IHZvaWQgMDtcbiAgICBkZXNjLmluaXRpYWxpemVyID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKGRlc2MuaW5pdGlhbGl6ZXIgPT09IHZvaWQgMCkge1xuICAgIE9iamVjdFsnZGVmaW5lJyArICdQcm9wZXJ0eSddKHRhcmdldCwgcHJvcGVydHksIGRlc2MpO1xuICAgIGRlc2MgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGRlc2M7XG59XG5cbnZhciBHcmlkSGVhZGVyID0gKF9jbGFzcyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhHcmlkSGVhZGVyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBHcmlkSGVhZGVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBHcmlkSGVhZGVyKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoR3JpZEhlYWRlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEdyaWRIZWFkZXIpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhHcmlkSGVhZGVyLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcihfcmVmKSB7XG4gICAgICB2YXIgd2lkdGggPSBfcmVmLndpZHRoLFxuICAgICAgICAgIGhlYWRlcldpZHRoID0gX3JlZi5oZWFkZXJXaWR0aCxcbiAgICAgICAgICBjaGVja0NvbHVtbiA9IF9yZWYuY2hlY2tDb2x1bW4sXG4gICAgICAgICAgc3RvcmUgPSBfcmVmLnN0b3JlLFxuICAgICAgICAgIGNvbHVtbnMgPSBfcmVmLmNvbHVtbnMsXG4gICAgICAgICAgaGVhZGVyVHBsID0gX3JlZi5oZWFkZXJUcGw7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NlY3Rpb24nLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ3J4LWdyaWQtaGVhZGVyJywgc3R5bGU6IHsgd2lkdGg6IHdpZHRoIH0gfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdyeC1ncmlkLWhlYWRlci1jb250YWluZXIgZC1mbGV4IGZsZXgtcm93Jywgc3R5bGU6IHsgd2lkdGg6IGhlYWRlcldpZHRoIH0gfSxcbiAgICAgICAgICBjaGVja0NvbHVtbiAmJiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdyeC1ncmlkLWNvbHVtbi1oZWFkZXIgdGV4dC1zbS1jZW50ZXInLCBzdHlsZTogeyB3aWR0aDogX2V4dDIuZGVmYXVsdC5DSEVDS19DT0xVTU5fV0lEVEggfSB9LFxuICAgICAgICAgICAgY2hlY2tDb2x1bW4gPT09ICdtdWx0aXBsZScgJiYgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2Zvcm0uQ2hlY2tib3gsIHsgZGlzYWJsZWQ6IHN0b3JlLmNvdW50KCkgPT09IDAsIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0b3JlLnRvZ2dsZVNlbGVjdEFsbCgpO1xuICAgICAgICAgICAgICB9IH0pXG4gICAgICAgICAgKSxcbiAgICAgICAgICBoZWFkZXJUcGwgJiYgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoaGVhZGVyVHBsLCB7IGNvbHVtbnM6IGNvbHVtbnMgfSksXG4gICAgICAgICAgIWhlYWRlclRwbCAmJiBjb2x1bW5zICYmIGNvbHVtbnMubWFwKGZ1bmN0aW9uIChjb2wpIHtcbiAgICAgICAgICAgIHZhciBfY29sJHRleHQgPSBjb2wudGV4dCxcbiAgICAgICAgICAgICAgICB0ZXh0ID0gX2NvbCR0ZXh0ID09PSB1bmRlZmluZWQgPyAnJyA6IF9jb2wkdGV4dCxcbiAgICAgICAgICAgICAgICBfY29sJGNsYXNzTmFtZSA9IGNvbC5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gX2NvbCRjbGFzc05hbWUgPT09IHVuZGVmaW5lZCA/ICcnIDogX2NvbCRjbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgb3RoZXJzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKGNvbCwgWyd0ZXh0JywgJ2NsYXNzTmFtZSddKTtcblxuICAgICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgX2V4dGVuZHMoeyBjbGFzc05hbWU6ICdyeC1ncmlkLWNvbHVtbi1oZWFkZXIgdGV4dC1jZW50ZXIgJyArIGNsYXNzTmFtZSB9LCBvdGhlcnMpLFxuICAgICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEdyaWRIZWFkZXI7XG59KF9yZWFjdC5Db21wb25lbnQpLCAoX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAncmVuZGVyJywgW193aXRoUHJvcHMyLmRlZmF1bHRdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdyZW5kZXInKSwgX2NsYXNzLnByb3RvdHlwZSkpLCBfY2xhc3MpO1xuZXhwb3J0cy5kZWZhdWx0ID0gR3JpZEhlYWRlcjsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZGVzYywgX3ZhbHVlLCBfY2xhc3M7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9leHQgPSByZXF1aXJlKCcuLi8uLi9jb3JlL2V4dCcpO1xuXG52YXIgX2V4dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHQpO1xuXG52YXIgX3dpdGhQcm9wcyA9IHJlcXVpcmUoJy4uLy4uL21peGluL3dpdGgtcHJvcHMnKTtcblxudmFyIF93aXRoUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2l0aFByb3BzKTtcblxudmFyIF9iaW5kID0gcmVxdWlyZSgnLi4vLi4vbWl4aW4vYmluZCcpO1xuXG52YXIgX2JpbmQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmluZCk7XG5cbnZhciBfZm9ybSA9IHJlcXVpcmUoJy4uL2Zvcm0nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKHRhcmdldCwgcHJvcGVydHksIGRlY29yYXRvcnMsIGRlc2NyaXB0b3IsIGNvbnRleHQpIHtcbiAgdmFyIGRlc2MgPSB7fTtcbiAgT2JqZWN0WydrZScgKyAneXMnXShkZXNjcmlwdG9yKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBkZXNjW2tleV0gPSBkZXNjcmlwdG9yW2tleV07XG4gIH0pO1xuICBkZXNjLmVudW1lcmFibGUgPSAhIWRlc2MuZW51bWVyYWJsZTtcbiAgZGVzYy5jb25maWd1cmFibGUgPSAhIWRlc2MuY29uZmlndXJhYmxlO1xuXG4gIGlmICgndmFsdWUnIGluIGRlc2MgfHwgZGVzYy5pbml0aWFsaXplcikge1xuICAgIGRlc2Mud3JpdGFibGUgPSB0cnVlO1xuICB9XG5cbiAgZGVzYyA9IGRlY29yYXRvcnMuc2xpY2UoKS5yZXZlcnNlKCkucmVkdWNlKGZ1bmN0aW9uIChkZXNjLCBkZWNvcmF0b3IpIHtcbiAgICByZXR1cm4gZGVjb3JhdG9yKHRhcmdldCwgcHJvcGVydHksIGRlc2MpIHx8IGRlc2M7XG4gIH0sIGRlc2MpO1xuXG4gIGlmIChjb250ZXh0ICYmIGRlc2MuaW5pdGlhbGl6ZXIgIT09IHZvaWQgMCkge1xuICAgIGRlc2MudmFsdWUgPSBkZXNjLmluaXRpYWxpemVyID8gZGVzYy5pbml0aWFsaXplci5jYWxsKGNvbnRleHQpIDogdm9pZCAwO1xuICAgIGRlc2MuaW5pdGlhbGl6ZXIgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAoZGVzYy5pbml0aWFsaXplciA9PT0gdm9pZCAwKSB7XG4gICAgT2JqZWN0WydkZWZpbmUnICsgJ1Byb3BlcnR5J10odGFyZ2V0LCBwcm9wZXJ0eSwgZGVzYyk7XG4gICAgZGVzYyA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gZGVzYztcbn1cblxudmFyIEdyaWRQYWdpbmdUb29sYmFyID0gKF9jbGFzcyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhHcmlkUGFnaW5nVG9vbGJhciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gR3JpZFBhZ2luZ1Rvb2xiYXIocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR3JpZFBhZ2luZ1Rvb2xiYXIpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEdyaWRQYWdpbmdUb29sYmFyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoR3JpZFBhZ2luZ1Rvb2xiYXIpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICB2YXIgX3Byb3BzJHN0b3JlID0gcHJvcHMuc3RvcmUsXG4gICAgICAgIHRvdGFsQ291bnQgPSBfcHJvcHMkc3RvcmUudG90YWxDb3VudCxcbiAgICAgICAgY3VycmVudFBhZ2UgPSBfcHJvcHMkc3RvcmUuY3VycmVudFBhZ2U7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBhZ2U6IHRvdGFsQ291bnQgPT09IDAgPyAwIDogY3VycmVudFBhZ2VcbiAgICB9O1xuICAgIF9leHQyLmRlZmF1bHQuZ2VuZXJhdGVTZXR0ZXIoX3RoaXMuc3RhdGUsIF90aGlzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoR3JpZFBhZ2luZ1Rvb2xiYXIsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMucHJvcHMuc3RvcmUuc3Vic2NyaWJlKHRoaXMucmVsb2FkKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5wcm9wcy5zdG9yZS51bnN1YnNjcmliZSh0aGlzLnJlbG9hZCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKF9yZWYpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgX3JlZiRzdG9yZSA9IF9yZWYuc3RvcmUsXG4gICAgICAgICAgZGF0YSA9IF9yZWYkc3RvcmUuZGF0YSxcbiAgICAgICAgICB0b3RhbENvdW50ID0gX3JlZiRzdG9yZS50b3RhbENvdW50LFxuICAgICAgICAgIHBhZ2VTaXplID0gX3JlZiRzdG9yZS5wYWdlU2l6ZSxcbiAgICAgICAgICBjdXJyZW50UGFnZSA9IF9yZWYkc3RvcmUuY3VycmVudFBhZ2U7XG4gICAgICB2YXIgcGFnZSA9IHRoaXMuc3RhdGUucGFnZSxcbiAgICAgICAgICBmaXJzdEluZGV4ID0gKGN1cnJlbnRQYWdlIC0gMSkgKiBwYWdlU2l6ZSArIDEsXG4gICAgICAgICAgbGFzdEluZGV4ID0gZmlyc3RJbmRleCArIGRhdGEuY291bnQoKSAtIDEsXG4gICAgICAgICAgdG90YWxQYWdlcyA9IE1hdGguY2VpbCh0b3RhbENvdW50IC8gcGFnZVNpemUpIHx8IDA7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NlY3Rpb24nLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ3Rvb2xiYXIgdG9wIHJvdycgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdjb2wtNicgfSxcbiAgICAgICAgICB0b3RhbENvdW50ID4gMCAmJiAnRGlzcGxheWluZyAnICsgZmlyc3RJbmRleCArICcgLSAnICsgbGFzdEluZGV4ICsgJyBvZiAnICsgdG90YWxDb3VudFxuICAgICAgICApLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ2NvbC02JyB9LFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2Zsb2F0LXJpZ2h0JyB9LFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2lucHV0LWdyb3VwJyB9LFxuICAgICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfZm9ybS5CdXR0b24sIHsgY2xhc3NOYW1lOiAnaW5wdXQtZ3JvdXAtYWRkb24nLCBkaXNhYmxlZDogdG90YWxDb3VudCA9PT0gMCwgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczIubG9hZFBhZ2UoY3VycmVudFBhZ2UpO1xuICAgICAgICAgICAgICAgIH0sIHRleHQ6ICdSZWZyZXNoJyB9KSxcbiAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2Zvcm0uQnV0dG9uLCB7IGNsYXNzTmFtZTogJ2lucHV0LWdyb3VwLWFkZG9uJywgZGlzYWJsZWQ6IGN1cnJlbnRQYWdlID09PSAxLCBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5sb2FkUGFnZSgxKTtcbiAgICAgICAgICAgICAgICB9LCB0ZXh0OiAnRmlyc3QnIH0pLFxuICAgICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfZm9ybS5CdXR0b24sIHsgY2xhc3NOYW1lOiAnaW5wdXQtZ3JvdXAtYWRkb24nLCBkaXNhYmxlZDogY3VycmVudFBhZ2UgPT09IDEsIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLmxvYWRQYWdlKGN1cnJlbnRQYWdlIC0gMSk7XG4gICAgICAgICAgICAgICAgfSwgdGV4dDogJ1ByZXZpb3VzJyB9KSxcbiAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnaW5wdXQtZ3JvdXAtYWRkb24nIH0sXG4gICAgICAgICAgICAgICAgJ1BhZ2UnXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9mb3JtLkZpZWxkLCB7IHZhbHVlOiBwYWdlLCBjbGFzc05hbWU6ICd3NSB0ZXh0LWNlbnRlciBpbnB1dC1ncm91cC1hZGRvbicsIGRpc2FibGVkOiBwYWdlID09PSAwLCBvbkNoYW5nZTogdGhpcy5zZXRQYWdlLCBvbkVudGVyOiBmdW5jdGlvbiBvbkVudGVyKHBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczIubG9hZFBhZ2UocGFnZSk7XG4gICAgICAgICAgICAgICAgfSB9KSxcbiAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnaW5wdXQtZ3JvdXAtYWRkb24nIH0sXG4gICAgICAgICAgICAgICAgJ29mICcsXG4gICAgICAgICAgICAgICAgdG90YWxQYWdlc1xuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfZm9ybS5CdXR0b24sIHsgY2xhc3NOYW1lOiAnaW5wdXQtZ3JvdXAtYWRkb24nLCBkaXNhYmxlZDogdG90YWxQYWdlcyA9PT0gMCB8fCBjdXJyZW50UGFnZSA9PT0gdG90YWxQYWdlcywgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczIubG9hZFBhZ2UoY3VycmVudFBhZ2UgKyAxKTtcbiAgICAgICAgICAgICAgICB9LCB0ZXh0OiAnTmV4dCcgfSksXG4gICAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9mb3JtLkJ1dHRvbiwgeyBjbGFzc05hbWU6ICdpbnB1dC1ncm91cC1hZGRvbicsIGRpc2FibGVkOiB0b3RhbFBhZ2VzID09PSAwIHx8IGN1cnJlbnRQYWdlID09PSB0b3RhbFBhZ2VzLCBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5sb2FkUGFnZSh0b3RhbFBhZ2VzKTtcbiAgICAgICAgICAgICAgICB9LCB0ZXh0OiAnTGFzdCcgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVsb2FkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVsb2FkKHN0b3JlKSB7XG4gICAgICB0aGlzLnNldFBhZ2Uoc3RvcmUudG90YWxDb3VudCA9PT0gMCA/IDAgOiBzdG9yZS5jdXJyZW50UGFnZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbG9hZFBhZ2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkUGFnZShudW1iZXIpIHtcbiAgICAgIHZhciBzdG9yZSA9IHRoaXMucHJvcHMuc3RvcmUsXG4gICAgICAgICAgdG90YWxQYWdlcyA9IE1hdGguY2VpbChzdG9yZS50b3RhbENvdW50IC8gc3RvcmUucGFnZVNpemUpIHx8IDA7XG5cbiAgICAgIGlmICgwIDwgbnVtYmVyICYmIG51bWJlciA8PSB0b3RhbFBhZ2VzKSB7XG4gICAgICAgIHN0b3JlLmxvYWRQYWdlKG51bWJlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFBhZ2Uoc3RvcmUuY3VycmVudFBhZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBHcmlkUGFnaW5nVG9vbGJhcjtcbn0oX3JlYWN0LkNvbXBvbmVudCksIChfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdyZW5kZXInLCBbX3dpdGhQcm9wczIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ3JlbmRlcicpLCBfY2xhc3MucHJvdG90eXBlKSwgX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAncmVsb2FkJywgW19iaW5kMi5kZWZhdWx0XSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAncmVsb2FkJyksIF9jbGFzcy5wcm90b3R5cGUpLCBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdsb2FkUGFnZScsIFtfYmluZDIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2xvYWRQYWdlJyksIF9jbGFzcy5wcm90b3R5cGUpKSwgX2NsYXNzKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEdyaWRQYWdpbmdUb29sYmFyOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9kZXNjLCBfdmFsdWUsIF9jbGFzcztcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2V4dCA9IHJlcXVpcmUoJy4uLy4uL2NvcmUvZXh0Jyk7XG5cbnZhciBfZXh0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dCk7XG5cbnZhciBfd2l0aFByb3BzID0gcmVxdWlyZSgnLi4vLi4vbWl4aW4vd2l0aC1wcm9wcycpO1xuXG52YXIgX3dpdGhQcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93aXRoUHJvcHMpO1xuXG52YXIgX2JpbmQgPSByZXF1aXJlKCcuLi8uLi9taXhpbi9iaW5kJyk7XG5cbnZhciBfYmluZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iaW5kKTtcblxudmFyIF9mb3JtID0gcmVxdWlyZSgnLi4vZm9ybScpO1xuXG52YXIgX2NlbGwgPSByZXF1aXJlKCcuL2NlbGwnKTtcblxudmFyIF9jZWxsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NlbGwpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eSwgZGVjb3JhdG9ycywgZGVzY3JpcHRvciwgY29udGV4dCkge1xuICB2YXIgZGVzYyA9IHt9O1xuICBPYmplY3RbJ2tlJyArICd5cyddKGRlc2NyaXB0b3IpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGRlc2Nba2V5XSA9IGRlc2NyaXB0b3Jba2V5XTtcbiAgfSk7XG4gIGRlc2MuZW51bWVyYWJsZSA9ICEhZGVzYy5lbnVtZXJhYmxlO1xuICBkZXNjLmNvbmZpZ3VyYWJsZSA9ICEhZGVzYy5jb25maWd1cmFibGU7XG5cbiAgaWYgKCd2YWx1ZScgaW4gZGVzYyB8fCBkZXNjLmluaXRpYWxpemVyKSB7XG4gICAgZGVzYy53cml0YWJsZSA9IHRydWU7XG4gIH1cblxuICBkZXNjID0gZGVjb3JhdG9ycy5zbGljZSgpLnJldmVyc2UoKS5yZWR1Y2UoZnVuY3Rpb24gKGRlc2MsIGRlY29yYXRvcikge1xuICAgIHJldHVybiBkZWNvcmF0b3IodGFyZ2V0LCBwcm9wZXJ0eSwgZGVzYykgfHwgZGVzYztcbiAgfSwgZGVzYyk7XG5cbiAgaWYgKGNvbnRleHQgJiYgZGVzYy5pbml0aWFsaXplciAhPT0gdm9pZCAwKSB7XG4gICAgZGVzYy52YWx1ZSA9IGRlc2MuaW5pdGlhbGl6ZXIgPyBkZXNjLmluaXRpYWxpemVyLmNhbGwoY29udGV4dCkgOiB2b2lkIDA7XG4gICAgZGVzYy5pbml0aWFsaXplciA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmIChkZXNjLmluaXRpYWxpemVyID09PSB2b2lkIDApIHtcbiAgICBPYmplY3RbJ2RlZmluZScgKyAnUHJvcGVydHknXSh0YXJnZXQsIHByb3BlcnR5LCBkZXNjKTtcbiAgICBkZXNjID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBkZXNjO1xufVxuXG52YXIgR3JpZFJvdyA9IChfY2xhc3MgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoR3JpZFJvdywgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gR3JpZFJvdygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR3JpZFJvdyk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEdyaWRSb3cuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihHcmlkUm93KSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoR3JpZFJvdywgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoX3JlZikge1xuICAgICAgdmFyIGNoZWNrQ29sdW1uID0gX3JlZi5jaGVja0NvbHVtbixcbiAgICAgICAgICBjb2x1bW5zID0gX3JlZi5jb2x1bW5zLFxuICAgICAgICAgIHJlY29yZCA9IF9yZWYucmVjb3JkLFxuICAgICAgICAgIHJvd0luZGV4ID0gX3JlZi5yb3dJbmRleDtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnYXJ0aWNsZScsXG4gICAgICAgIHsgY2xhc3NOYW1lOiBfZXh0Mi5kZWZhdWx0LmNsYXNzTmFtZShbJ3J4LWdyaWQtcm93IGQtZmxleCBmbGV4LXJvdycsIHsgJ3NlbGVjdGVkJzogcmVjb3JkLnNlbGVjdGVkIH1dKSB9LFxuICAgICAgICBjaGVja0NvbHVtbiAmJiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ3J4LWdyaWQtY2VsbCB0ZXh0LXNtLWNlbnRlcicsIHN0eWxlOiB7IHdpZHRoOiBfZXh0Mi5kZWZhdWx0LkNIRUNLX0NPTFVNTl9XSURUSCB9IH0sXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2Zvcm0uQ2hlY2tib3gsIHsgY2hlY2tlZDogcmVjb3JkLnNlbGVjdGVkLCBvbkNoZWNrQ2hhbmdlOiB0aGlzLnRvZ2dsZVNlbGVjdCB9KVxuICAgICAgICApLFxuICAgICAgICBjb2x1bW5zICYmIGNvbHVtbnMubWFwKGZ1bmN0aW9uIChjb2wpIHtcbiAgICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2NlbGwyLmRlZmF1bHQsIF9leHRlbmRzKHsgcmVjb3JkOiByZWNvcmQsIHJvd0luZGV4OiByb3dJbmRleCB9LCBjb2wpKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndG9nZ2xlU2VsZWN0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9nZ2xlU2VsZWN0KCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgcmVjb3JkID0gX3Byb3BzLnJlY29yZCxcbiAgICAgICAgICBjaGVja0NvbHVtbiA9IF9wcm9wcy5jaGVja0NvbHVtbjtcblxuICAgICAgaWYgKHJlY29yZC5zZWxlY3RlZCkge1xuICAgICAgICByZWNvcmQuc2V0U2VsZWN0ZWQoZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNoZWNrQ29sdW1uICE9PSAnbXVsdGlwbGUnKSB7XG4gICAgICAgICAgcmVjb3JkLnN0b3JlLmdldFNlbGVjdGVkUmVjb3JkcygpLmVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlY29yZC5zZXRTZWxlY3RlZChmYWxzZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVjb3JkLnNldFNlbGVjdGVkKHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBHcmlkUm93O1xufShfcmVhY3QuQ29tcG9uZW50KSwgKF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ3JlbmRlcicsIFtfd2l0aFByb3BzMi5kZWZhdWx0XSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAncmVuZGVyJyksIF9jbGFzcy5wcm90b3R5cGUpLCBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICd0b2dnbGVTZWxlY3QnLCBbX2JpbmQyLmRlZmF1bHRdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICd0b2dnbGVTZWxlY3QnKSwgX2NsYXNzLnByb3RvdHlwZSkpLCBfY2xhc3MpO1xuZXhwb3J0cy5kZWZhdWx0ID0gR3JpZFJvdzsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkxpbmsgPSBleHBvcnRzLkhhc2hSb3V0ZXIgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9saXN0ID0gcmVxdWlyZSgnLi4vY29yZS9saXN0Jyk7XG5cbnZhciBfbGlzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saXN0KTtcblxudmFyIF9vYnNlcnZhYmxlID0gcmVxdWlyZSgnLi4vbWl4aW4vb2JzZXJ2YWJsZScpO1xuXG52YXIgX29ic2VydmFibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JzZXJ2YWJsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUk9VVEVTID0ge30sXG4gICAgZ2V0Um91dGUgPSBmdW5jdGlvbiBnZXRSb3V0ZSgpIHtcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKSB8fCAnLyc7XG59LFxuICAgIGdldFJvdXRlUGF0aCA9IGZ1bmN0aW9uIGdldFJvdXRlUGF0aChyb3V0ZSkge1xuICByZXR1cm4gcm91dGUuc3BsaXQoJy8nKTtcbn0sXG4gICAgaXNQYXJhbSA9IGZ1bmN0aW9uIGlzUGFyYW0ocm91dGVOYW1lKSB7XG4gIHJldHVybiByb3V0ZU5hbWUuc3RhcnRzV2l0aCgnOicpO1xufSxcbiAgICBtYXRjaFBhdGggPSBmdW5jdGlvbiBtYXRjaFBhdGgoKSB7XG4gIHZhciBjdXJyZW50Um91dGUgPSBnZXRSb3V0ZSgpLFxuICAgICAgcGFyYW1zID0ge307XG5cbiAgaWYgKFJPVVRFU1tjdXJyZW50Um91dGVdKSB7XG4gICAgcmV0dXJuIHsgcm91dGU6IGN1cnJlbnRSb3V0ZSwgY29tcG9uZW50OiBST1VURVNbY3VycmVudFJvdXRlXS5jb21wb25lbnQsIHBhcmFtczogcGFyYW1zIH07XG4gIH1cblxuICB2YXIgY3VycmVudFBhdGggPSBnZXRSb3V0ZVBhdGgoY3VycmVudFJvdXRlKTtcbiAgZm9yICh2YXIga2V5IGluIFJPVVRFUykge1xuICAgIHZhciByb3V0ZSA9IFJPVVRFU1trZXldLFxuICAgICAgICByb3V0ZVBhdGggPSByb3V0ZS5wYXRoO1xuICAgIHZhciBtYXRjaGVkID0gdHJ1ZTtcbiAgICAoMCwgX2xpc3QyLmRlZmF1bHQpKHJvdXRlUGF0aCkuZWFjaChmdW5jdGlvbiAocm91dGVOYW1lLCBpbmRleCkge1xuICAgICAgaWYgKHJvdXRlTmFtZSAhPT0gY3VycmVudFBhdGhbaW5kZXhdKSB7XG4gICAgICAgIGlmIChpc1BhcmFtKHJvdXRlTmFtZSkpIHtcbiAgICAgICAgICBwYXJhbXNbcm91dGVOYW1lLnN1YnN0cmluZygxKV0gPSBjdXJyZW50UGF0aFtpbmRleF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWF0Y2hlZCA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChtYXRjaGVkKSB7XG4gICAgICByZXR1cm4geyByb3V0ZTogY3VycmVudFJvdXRlLCBjb21wb25lbnQ6IHJvdXRlLmNvbXBvbmVudCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9XG4gIH1cblxuICBpZiAoUk9VVEVTWycqJ10pIHtcbiAgICByZXR1cm4geyByb3V0ZTogY3VycmVudFJvdXRlLCBjb21wb25lbnQ6IFJPVVRFU1snKiddLmNvbXBvbmVudCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgfVxuXG4gIHJldHVybiB7IHJvdXRlOiBjdXJyZW50Um91dGUsIGNvbXBvbmVudDogbnVsbCwgcGFyYW1zOiBwYXJhbXMgfTtcbn07XG5cbnZhciBIYXNoUm91dGVyID0gZXhwb3J0cy5IYXNoUm91dGVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEhhc2hSb3V0ZXIsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEhhc2hSb3V0ZXIocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSGFzaFJvdXRlcik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoSGFzaFJvdXRlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEhhc2hSb3V0ZXIpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IG1hdGNoUGF0aCgpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhIYXNoUm91dGVyLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgX29ic2VydmFibGUyLmRlZmF1bHQuZnJvbUV2ZW50KHdpbmRvdywgJ2hhc2hjaGFuZ2UnKS5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMyLnNldFN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gbWF0Y2hQYXRoKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgcm91dGUgPSBfc3RhdGUucm91dGUsXG4gICAgICAgICAgY29tcG9uZW50ID0gX3N0YXRlLmNvbXBvbmVudCxcbiAgICAgICAgICBwYXJhbXMgPSBfc3RhdGUucGFyYW1zO1xuXG5cbiAgICAgIGlmICghY29tcG9uZW50KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NvbXBvbmVudCBwcm9wcyBzaG91bGQgbm90IGJlIG51bGwnKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChjb21wb25lbnQsIHsgcm91dGU6IHJvdXRlLCBwYXJhbXM6IHBhcmFtcyB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSGFzaFJvdXRlcjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbnZhciBMaW5rID0gZXhwb3J0cy5MaW5rID0gZnVuY3Rpb24gKF9Db21wb25lbnQyKSB7XG4gIF9pbmhlcml0cyhMaW5rLCBfQ29tcG9uZW50Mik7XG5cbiAgZnVuY3Rpb24gTGluayhwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMaW5rKTtcblxuICAgIHZhciBfdGhpczMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoTGluay5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKExpbmspKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpczMuc3RhdGUgPSBtYXRjaFBhdGgoKTtcbiAgICByZXR1cm4gX3RoaXMzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKExpbmssIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICBfb2JzZXJ2YWJsZTIuZGVmYXVsdC5mcm9tRXZlbnQod2luZG93LCAnaGFzaGNoYW5nZScpLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpczQuc2V0U3RhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBtYXRjaFBhdGgoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3N0YXRlMiA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgcm91dGUgPSBfc3RhdGUyLnJvdXRlLFxuICAgICAgICAgIGNvbXBvbmVudCA9IF9zdGF0ZTIuY29tcG9uZW50LFxuICAgICAgICAgIHBhcmFtcyA9IF9zdGF0ZTIucGFyYW1zLFxuICAgICAgICAgIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgdG8gPSBfcHJvcHMudG8sXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICBfcHJvcHMkYWN0aXZlQ2xhc3NOYW0gPSBfcHJvcHMuYWN0aXZlQ2xhc3NOYW1lLFxuICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZSA9IF9wcm9wcyRhY3RpdmVDbGFzc05hbSA9PT0gdW5kZWZpbmVkID8gJ2FjdGl2ZScgOiBfcHJvcHMkYWN0aXZlQ2xhc3NOYW0sXG4gICAgICAgICAgb3RoZXJzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWyd0bycsICdjbGFzc05hbWUnLCAnYWN0aXZlQ2xhc3NOYW1lJ10pO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2EnLCBfZXh0ZW5kcyh7IGhyZWY6ICcjJyArIHRvLCBjbGFzc05hbWU6IHRvID09PSBnZXRSb3V0ZSgpID8gW2NsYXNzTmFtZSwgYWN0aXZlQ2xhc3NOYW1lXS5qb2luKCcgJykgOiBjbGFzc05hbWUgfSwgb3RoZXJzKSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIExpbms7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocm91dGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChjb21wb25lbnQpIHtcbiAgICBST1VURVNbcm91dGVdID0ge1xuICAgICAgcm91dGU6IHJvdXRlLFxuICAgICAgY29tcG9uZW50OiBjb21wb25lbnQsXG4gICAgICBwYXRoOiBnZXRSb3V0ZVBhdGgocm91dGUpXG4gICAgfTtcbiAgfTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBDb21wb25lbnQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIENvbXBvbmVudChjb21wKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbXBvbmVudCk7XG5cbiAgICB0aGlzLmNvbXAgPSAoMCwgX3JlYWN0RG9tLmZpbmRET01Ob2RlKShjb21wKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDb21wb25lbnQsIFt7XG4gICAga2V5OiAncGFyZW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyZW50KCkge1xuICAgICAgdGhpcy5jb21wID0gdGhpcy5jb21wLnBhcmVudEVsZW1lbnQ7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd3aWR0aCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdpZHRoKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcC5jbGllbnRXaWR0aDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdoZWlnaHQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoZWlnaHQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wLmNsaWVudEhlaWdodDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdmaW5kJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmluZChzZWxlY3Rvcikge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ29tcG9uZW50O1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDb21wb25lbnQ7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfY29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnQnKTtcblxudmFyIF9jb21wb25lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcG9uZW50KTtcblxudmFyIF9zdHJpbmcgPSByZXF1aXJlKCcuL3N0cmluZycpO1xuXG52YXIgX3N0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHJpbmcpO1xuXG52YXIgX2xpc3QgPSByZXF1aXJlKCcuL2xpc3QnKTtcblxudmFyIF9saXN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpc3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgRXh0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBFeHQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEV4dCk7XG5cbiAgICB0aGlzLlNDUk9MTF9XSURUSCA9IHRoaXMuZ2V0U2Nyb2xsV2lkdGgoKTtcbiAgICB0aGlzLkJPUkRFUl9XSURUSCA9IDI7XG4gICAgdGhpcy5DSEVDS19DT0xVTU5fV0lEVEggPSAzMztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhFeHQsIFt7XG4gICAga2V5OiAnZ2V0QnlJZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEJ5SWQoaWQpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q29tcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENvbXAoY29tcCkge1xuICAgICAgcmV0dXJuIG5ldyBfY29tcG9uZW50Mi5kZWZhdWx0KGNvbXApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NyZWF0ZUVsZW1lbnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KGh0bWwpIHtcbiAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRpdi5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgcmV0dXJuIGRpdi5jaGlsZHJlblswXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdhcHBlbmQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmQoaHRtbCkge1xuICAgICAgdmFyIGRvbSA9IHRoaXMuY3JlYXRlRWxlbWVudChodG1sKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9tKTtcbiAgICAgIHJldHVybiBkb207XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZXh0ZW5kJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0ZW5kKCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24uYXBwbHkobnVsbCwgYXJndW1lbnRzKTsgLy8gaW1tdXRhYmxlIG9iamVjdFxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Nsb25lJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xvbmUob2JqKSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTsgLy8gZGVlcCBjbG9uZVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzRnVuY3Rpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaXNPYmplY3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBPYmplY3RdJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpc0FycmF5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNBcnJheSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzUHJpbWl0aXZlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNQcmltaXRpdmUodmFsdWUpIHtcbiAgICAgIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWx1ZSk7XG4gICAgICByZXR1cm4gdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZSA9PT0gJ251bWJlcicgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzU3RyaW5nJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NsYXNzTmFtZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsYXNzTmFtZShleHByZXNzaW9ucykge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIGNscyA9IFtdO1xuXG4gICAgICAoMCwgX2xpc3QyLmRlZmF1bHQpKGV4cHJlc3Npb25zKS5lYWNoKGZ1bmN0aW9uIChleHApIHtcbiAgICAgICAgaWYgKCFleHApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGV4cCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjbHMucHVzaChleHApO1xuICAgICAgICB9IGVsc2UgaWYgKF90aGlzLmlzT2JqZWN0KGV4cCkpIHtcbiAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gZXhwKSB7XG4gICAgICAgICAgICBpZiAoZXhwW2tleV0gPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgY2xzLnB1c2goa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNscy5qb2luKCcgJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2VuZXJhdGVTZXR0ZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZW5lcmF0ZVNldHRlcihzdGF0ZSwgY29tcCkge1xuICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKCkge1xuICAgICAgICAgIHZhciBmaWVsZCA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgICAgY29tcFsnc2V0JyArIF9zdHJpbmcyLmRlZmF1bHQuY2FwaXRhbGl6ZShmaWVsZCldID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcC5zZXRTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfZGVmaW5lUHJvcGVydHkoe30sIGZpZWxkLCB2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IE9iamVjdC5rZXlzKHN0YXRlKVtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgICBfbG9vcCgpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRTY3JvbGxXaWR0aCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNjcm9sbFdpZHRoKCkge1xuICAgICAgdmFyIG91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG91dGVyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgb3V0ZXIuc3R5bGUud2lkdGggPSBcIjEwMHB4XCI7XG4gICAgICBvdXRlci5zdHlsZS5tc092ZXJmbG93U3R5bGUgPSBcInNjcm9sbGJhclwiOyAvLyBuZWVkZWQgZm9yIFdpbkpTIGFwcHNcblxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdXRlcik7XG5cbiAgICAgIHZhciB3aWR0aE5vU2Nyb2xsID0gb3V0ZXIub2Zmc2V0V2lkdGg7XG4gICAgICAvLyBmb3JjZSBzY3JvbGxiYXJzXG4gICAgICBvdXRlci5zdHlsZS5vdmVyZmxvdyA9IFwic2Nyb2xsXCI7XG5cbiAgICAgIC8vIGFkZCBpbm5lcmRpdlxuICAgICAgdmFyIGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGlubmVyLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICBvdXRlci5hcHBlbmRDaGlsZChpbm5lcik7XG5cbiAgICAgIHZhciB3aWR0aFdpdGhTY3JvbGwgPSBpbm5lci5vZmZzZXRXaWR0aDtcblxuICAgICAgLy8gcmVtb3ZlIGRpdnNcbiAgICAgIG91dGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob3V0ZXIpO1xuXG4gICAgICByZXR1cm4gd2lkdGhOb1Njcm9sbCAtIHdpZHRoV2l0aFNjcm9sbDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRXh0O1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBuZXcgRXh0KCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBFTVBUWV9MSVNUID0gW107XG5cbnZhciBMaXN0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBMaXN0KHZhbHVlKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExpc3QpO1xuXG4gICAgdGhpcy5hcnJheSA9IEVNUFRZX0xJU1Q7XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlLmxlbmd0aCkge1xuICAgICAgdGhpcy5hcnJheSA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhMaXN0LCBbe1xuICAgIGtleTogXCJjb2xsZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbGxlY3QoKSB7XG4gICAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY291bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY291bnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5hcnJheS5sZW5ndGg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImVhY2hcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZWFjaChpdGVyYXRlZSkge1xuICAgICAgZm9yICh2YXIgaW5kZXggPSAwLCBpdGVtOyAoaXRlbSA9IHRoaXMuYXJyYXlbaW5kZXhdKSAhPSBudWxsOyArK2luZGV4KSB7XG4gICAgICAgIGl0ZXJhdGVlKGl0ZW0sIGluZGV4LCB0aGlzLmFycmF5KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZmluZEluZGV4XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZpbmRJbmRleChwcmVkaWNhdGUpIHtcbiAgICAgIHZhciBpbmRleCA9IC0xO1xuICAgICAgZm9yICh2YXIgaWR4ID0gMCwgaXRlbTsgKGl0ZW0gPSB0aGlzLmFycmF5W2lkeF0pICE9IG51bGw7ICsraWR4KSB7XG4gICAgICAgIGlmIChwcmVkaWNhdGUoaXRlbSwgaWR4LCB0aGlzLmFycmF5KSkge1xuICAgICAgICAgIGluZGV4ID0gaWR4O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZpbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmluZChwcmVkaWNhdGUpIHtcbiAgICAgIHZhciBpbmRleCA9IHRoaXMuZmluZEluZGV4KHByZWRpY2F0ZSk7XG4gICAgICByZXR1cm4gaW5kZXggPiAtMSA/IHRoaXMuYXJyYXlbaW5kZXhdIDogbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29udGFpbnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29udGFpbnMocHJlZGljYXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy5maW5kKHByZWRpY2F0ZSkgIT09IG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZpbHRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmaWx0ZXIocHJlZGljYXRlKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4LCBhcnJheSkge1xuICAgICAgICBpZiAocHJlZGljYXRlKGl0ZW0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IExpc3QocmVzdWx0KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibWFwXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1hcChpdGVyYXRlZSkge1xuICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCwgYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpdGVtLCBpbmRleCwgYXJyYXkpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IExpc3QocmVzdWx0KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVkdWNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlZHVjZShpdGVyYXRlZSwgYWNjdW11bGF0b3IpIHtcbiAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgsIGFycmF5KSB7XG4gICAgICAgIHJldHVybiBhY2N1bXVsYXRvciA9IGl0ZXJhdGVlKGFjY3VtdWxhdG9yLCBpdGVtLCBpbmRleCwgYXJyYXkpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEF0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEF0KGluZGV4KSB7XG4gICAgICByZXR1cm4gdGhpcy5hcnJheVtpbmRleF07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZUF0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUF0KGluZGV4KSB7XG4gICAgICB2YXIgY291bnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDE7XG5cbiAgICAgIHJldHVybiB0aGlzLmFycmF5LnNwbGljZShpbmRleCwgY291bnQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhZGRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkKGl0ZW0pIHtcbiAgICAgIHRoaXMuYXJyYXkucHVzaChpdGVtKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaW5zZXJ0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluc2VydChpbmRleCwgaXRlbSkge1xuICAgICAgdGhpcy5hcnJheS5zcGxpY2UoaW5kZXgsIDAsIGl0ZW0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJqb2luXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGpvaW4oc2VwYXJhdG9yKSB7XG4gICAgICByZXR1cm4gdGhpcy5hcnJheS5qb2luKHNlcGFyYXRvcik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIExpc3Q7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gbmV3IExpc3QodmFsdWUpO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfbGlzdCA9IHJlcXVpcmUoJy4vbGlzdCcpO1xuXG52YXIgX2xpc3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGlzdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBFTVBUWV9NQVAgPSB7fTtcblxudmFyIE1hcCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTWFwKGtleVZhbHVlcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXApO1xuXG4gICAgdGhpcy5tYXAgPSBFTVBUWV9NQVA7XG4gICAgaWYgKGtleVZhbHVlcyAmJiBrZXlWYWx1ZXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLm1hcCA9IE9iamVjdC5hc3NpZ24oe30sIGtleVZhbHVlcyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1hcCwgW3tcbiAgICBrZXk6ICdlYWNoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZWFjaChpdGVyYXRlZSkge1xuICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMubWFwKSB7XG4gICAgICAgIGl0ZXJhdGVlKGtleSwgdGhpcy5tYXBba2V5XSwgdGhpcy5tYXApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAna2V5cycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGtleXMoKSB7XG4gICAgICByZXR1cm4gKDAsIF9saXN0Mi5kZWZhdWx0KShPYmplY3Qua2V5cyh0aGlzLm1hcCkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3ZhbHVlcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlcygpIHtcbiAgICAgIHJldHVybiAoMCwgX2xpc3QyLmRlZmF1bHQpKE9iamVjdC52YWx1ZXModGhpcy5tYXApKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWFwO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoa2V5VmFsdWVzKSB7XG4gIHJldHVybiBuZXcgTWFwKGtleVZhbHVlcyk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgTnVtYmVyID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBOdW1iZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE51bWJlcik7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTnVtYmVyLCBbe1xuICAgIGtleTogXCJyb3VuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByb3VuZCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBOdW1iZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG5ldyBOdW1iZXIoKTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBTdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN0cmluZygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RyaW5nKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTdHJpbmcsIFt7XG4gICAga2V5OiAndG9RdWVyeVN0cmluZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvUXVlcnlTdHJpbmcocGFyYW1zLCBzZXAsIGVuY29kZSkge1xuICAgICAgc2VwID0gc2VwID09PSB1bmRlZmluZWQgPyAnJicgOiBzZXA7XG4gICAgICBlbmNvZGUgPSBlbmNvZGUgPT09IGZhbHNlID8gZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgcmV0dXJuIHM7XG4gICAgICB9IDogZW5jb2RlVVJJQ29tcG9uZW50O1xuXG4gICAgICB2YXIgcGFpcnMgPSBbXTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBwYXJhbXMpIHtcbiAgICAgICAgcGFpcnMucHVzaChrZXkgKyAnPScgKyBlbmNvZGUocGFyYW1zW2tleV0pKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwYWlycy5qb2luKHNlcCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2FwaXRhbGl6ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyaW5nKSB7XG4gICAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTdHJpbmc7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG5ldyBTdHJpbmcoKTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfc3RyaW5nID0gcmVxdWlyZSgnLi4vY29yZS9zdHJpbmcnKTtcblxudmFyIF9zdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RyaW5nKTtcblxudmFyIF9leHQgPSByZXF1aXJlKCcuLi9jb3JlL2V4dCcpO1xuXG52YXIgX2V4dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikgeyByZXR1cm4gZnVuY3Rpb24gKCkgeyB2YXIgZ2VuID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgZnVuY3Rpb24gc3RlcChrZXksIGFyZykgeyB0cnkgeyB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7IHZhciB2YWx1ZSA9IGluZm8udmFsdWU7IH0gY2F0Y2ggKGVycm9yKSB7IHJlamVjdChlcnJvcik7IHJldHVybjsgfSBpZiAoaW5mby5kb25lKSB7IHJlc29sdmUodmFsdWUpOyB9IGVsc2UgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkgeyBzdGVwKFwibmV4dFwiLCB2YWx1ZSk7IH0sIGZ1bmN0aW9uIChlcnIpIHsgc3RlcChcInRocm93XCIsIGVycik7IH0pOyB9IH0gcmV0dXJuIHN0ZXAoXCJuZXh0XCIpOyB9KTsgfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgQWpheCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQWpheCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWpheCk7XG5cbiAgICBfZXh0Mi5kZWZhdWx0LmV4dGVuZChBamF4LnByb3RvdHlwZSwge1xuICAgICAgeGhyOiBuZXcgWE1MSHR0cFJlcXVlc3QoKSxcbiAgICAgIGFqYXhCZWZvcmU6IGZ1bmN0aW9uIGFqYXhCZWZvcmUoKSB7LyogdG8gYmUgaW1wbGVtZW50ZWQgKi99LFxuICAgICAgYWpheEVycm9yOiBmdW5jdGlvbiBhamF4RXJyb3IoZXJyb3IpIHsvKiB0byBiZSBpbXBsZW1lbnRlZCAqL30sXG4gICAgICBhamF4Q29tcGxldGU6IGZ1bmN0aW9uIGFqYXhDb21wbGV0ZSgpIHsvKiB0byBiZSBpbXBsZW1lbnRlZCAqL30sXG4gICAgICBCQVNFX1VSTDogbnVsbFxuICAgIH0pO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEFqYXgsIFt7XG4gICAga2V5OiAncmVxdWVzdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfcmVmID0gX2FzeW5jVG9HZW5lcmF0b3IocmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZShfcmVmMikge1xuICAgICAgICB2YXIgdXJsID0gX3JlZjIudXJsLFxuICAgICAgICAgICAgX3JlZjIkbWV0aG9kID0gX3JlZjIubWV0aG9kLFxuICAgICAgICAgICAgbWV0aG9kID0gX3JlZjIkbWV0aG9kID09PSB1bmRlZmluZWQgPyAnZ2V0JyA6IF9yZWYyJG1ldGhvZCxcbiAgICAgICAgICAgIHBhcmFtcyA9IF9yZWYyLnBhcmFtcyxcbiAgICAgICAgICAgIG5leHQgPSBfcmVmMi5uZXh0LFxuICAgICAgICAgICAgZXJyb3IgPSBfcmVmMi5lcnJvcixcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZjIuY29tcGxldGU7XG4gICAgICAgIHZhciByZXNwb25zZTtcbiAgICAgICAgcmV0dXJuIHJlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSAwO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hamF4QmVmb3JlKCk7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvbWlzZSh7IHVybDogdXJsLCBtZXRob2Q6IG1ldGhvZCwgcGFyYW1zOiBwYXJhbXMgfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2NvbnRleHQuc2VudDtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KCdyZXR1cm4nLCBuZXh0ID8gbmV4dChyZXNwb25zZSkgOiByZXNwb25zZSk7XG5cbiAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSA4O1xuICAgICAgICAgICAgICAgIF9jb250ZXh0LnQwID0gX2NvbnRleHRbJ2NhdGNoJ10oMCk7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDYW5ub3QgZ2V0IHJlc3BvbnNlIGZyb20gc2VydmVyIGZvciB1cmwgWycgKyB1cmwgKyAnXSBjYXVzZWQgYnk6ICcgKyBfY29udGV4dC50MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hamF4RXJyb3IoX2NvbnRleHQudDApO1xuICAgICAgICAgICAgICAgIGVycm9yICYmIGVycm9yKF9jb250ZXh0LnQwKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KCdyZXR1cm4nLCBudWxsKTtcblxuICAgICAgICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSAxNDtcblxuICAgICAgICAgICAgICAgIHRoaXMuYWpheENvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgY29tcGxldGUgJiYgY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuZmluaXNoKDE0KTtcblxuICAgICAgICAgICAgICBjYXNlIDE4OlxuICAgICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlLCB0aGlzLCBbWzAsIDgsIDE0LCAxOF1dKTtcbiAgICAgIH0pKTtcblxuICAgICAgZnVuY3Rpb24gcmVxdWVzdChfeCkge1xuICAgICAgICByZXR1cm4gX3JlZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVxdWVzdDtcbiAgICB9KClcbiAgfSwge1xuICAgIGtleTogJ3Byb21pc2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwcm9taXNlKHNldHRpbmdzKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBfdGhpcy5jcmVhdGVSZXF1ZXN0KHNldHRpbmdzLCBmdW5jdGlvbiAoZXJyLCByZXMpIHtcbiAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NyZWF0ZVJlcXVlc3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVSZXF1ZXN0KF9yZWYzLCBkb25lKSB7XG4gICAgICB2YXIgdXJsID0gX3JlZjMudXJsLFxuICAgICAgICAgIG1ldGhvZCA9IF9yZWYzLm1ldGhvZCxcbiAgICAgICAgICBwYXJhbXMgPSBfcmVmMy5wYXJhbXM7XG5cbiAgICAgIHRoaXMuQkFTRV9VUkwgJiYgKHVybCA9IHRoaXMuQkFTRV9VUkwgKyAnLycgKyB1cmwpO1xuICAgICAgbWV0aG9kID09PSAnZ2V0JyAmJiBwYXJhbXMgIT09IG51bGwgJiYgKHVybCA9IHVybCArICc/JyArIF9zdHJpbmcyLmRlZmF1bHQudG9RdWVyeVN0cmluZyhwYXJhbXMpKTtcbiAgICAgIHZhciB4aHIgPSB0aGlzLnhocjtcbiAgICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xuICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XG4gICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgZG9uZShudWxsLCBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgZG9uZShKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgZG9uZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB4aHIuc2VuZChwYXJhbXMgIT09IG51bGwgPyBKU09OLnN0cmluZ2lmeShwYXJhbXMpIDogbnVsbCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEFqYXg7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG5ldyBBamF4KCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgQ2FjaGUgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIENhY2hlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDYWNoZSk7XG5cbiAgICB0aGlzLl9jYWNoZSA9IHt9O1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENhY2hlLCBbe1xuICAgIGtleTogJ2hhc0xvY2FsU3RvcmFnZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhc0xvY2FsU3RvcmFnZSgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiAnbG9jYWxTdG9yYWdlJyBpbiB3aW5kb3cgJiYgd2luZG93LmxvY2FsU3RvcmFnZSAhPT0gbnVsbDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICAgIGlmICh0aGlzLmhhc0xvY2FsU3RvcmFnZSgpKSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpIHx8IHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYWNoZVtrZXldIHx8IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMuaGFzTG9jYWxTdG9yYWdlKCkpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fY2FjaGVba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbW92ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZShrZXkpIHtcbiAgICAgIGlmICgha2V5KSB7XG4gICAgICAgIHRoaXMuX2NhY2hlID0ge307XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaGFzTG9jYWxTdG9yYWdlKCkpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9jYWNoZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDYWNoZTtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gbmV3IENhY2hlKCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2V4dCA9IHJlcXVpcmUoJy4uL2NvcmUvZXh0Jyk7XG5cbnZhciBfZXh0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dCk7XG5cbnZhciBfbGlzdCA9IHJlcXVpcmUoJy4uL2NvcmUvbGlzdCcpO1xuXG52YXIgX2xpc3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGlzdCk7XG5cbnZhciBfbWFwID0gcmVxdWlyZSgnLi4vY29yZS9tYXAnKTtcblxudmFyIF9tYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFwKTtcblxudmFyIF9vYnNlcnZhYmxlID0gcmVxdWlyZSgnLi4vbWl4aW4vb2JzZXJ2YWJsZScpO1xuXG52YXIgX29ic2VydmFibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JzZXJ2YWJsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBNb2RlbCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTW9kZWwoZGF0YSwgc3RvcmUpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTW9kZWwpO1xuXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLnN0b3JlID0gc3RvcmU7XG4gICAgdGhpcy5maWVsZHMgPSB0aGlzLmNyZWF0ZUZpZWxkcyhzdG9yZSAmJiBzdG9yZS5maWVsZHMgPyBzdG9yZS5maWVsZHMgOiBPYmplY3Qua2V5cyh0aGlzLmRhdGEpKTtcbiAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5zYXZlKCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTW9kZWwsIFt7XG4gICAga2V5OiAnZ2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KGZpZWxkTmFtZSkge1xuICAgICAgaWYgKCFmaWVsZE5hbWUgfHwgX2V4dDIuZGVmYXVsdC5pc1ByaW1pdGl2ZSh0aGlzLmRhdGEpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5kYXRhW2ZpZWxkTmFtZV07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGZpZWxkTmFtZSwgbmV3VmFsdWUpIHtcbiAgICAgIGlmICghZmllbGROYW1lIHx8IF9leHQyLmRlZmF1bHQuaXNQcmltaXRpdmUodGhpcy5kYXRhKSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXdWYWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGF0YVtmaWVsZE5hbWVdID0gbmV3VmFsdWU7XG4gICAgICB9XG4gICAgICB0aGlzLnN0b3JlICYmIHRoaXMuc3RvcmUub2JzZXJ2YWJsZS5jYWxsKHRoaXMuc3RvcmUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NhdmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzYXZlKCkge1xuICAgICAgdGhpcy5waGFudG9tID0gX2V4dDIuZGVmYXVsdC5jbG9uZSh0aGlzLmRhdGEpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlamVjdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlamVjdCgpIHtcbiAgICAgIHRoaXMuZGF0YSA9IF9leHQyLmRlZmF1bHQuY2xvbmUodGhpcy5waGFudG9tKTtcbiAgICAgIHRoaXMuc2F2ZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzTW9kaWZpZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc01vZGlmaWVkKGZpZWxkTmFtZSkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKGZpZWxkTmFtZSkge1xuICAgICAgICB2YXIgZmllbGQgPSB0aGlzLmZpZWxkcy5maW5kKGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgICAgIHJldHVybiBmaWVsZC5uYW1lID09PSBmaWVsZE5hbWU7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gIWZpZWxkID8gZmFsc2UgOiAhdGhpcy5pc0VxdWFsKGZpZWxkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZmllbGRzLmNvbnRhaW5zKGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgICByZXR1cm4gIV90aGlzLmlzRXF1YWwoZmllbGQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaXNFcXVhbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzRXF1YWwoZmllbGQpIHtcbiAgICAgIHJldHVybiAhZmllbGQgPyB0cnVlIDogZmllbGQuZXF1YWxzID8gZmllbGQuZXF1YWxzKHRoaXMuZGF0YVtmaWVsZC5uYW1lXSwgdGhpcy5waGFudG9tW2ZpZWxkLm5hbWVdKSA6IHRoaXMuZGF0YVtmaWVsZC5uYW1lXSA9PT0gdGhpcy5waGFudG9tW2ZpZWxkLm5hbWVdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NyZWF0ZUZpZWxkcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUZpZWxkcyhmaWVsZHMpIHtcbiAgICAgIHJldHVybiAoMCwgX2xpc3QyLmRlZmF1bHQpKGZpZWxkcykubWFwKGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgICBpZiAoX2V4dDIuZGVmYXVsdC5pc1N0cmluZyhmaWVsZCkpIHtcbiAgICAgICAgICByZXR1cm4geyBuYW1lOiBmaWVsZCB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmaWVsZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0U2VsZWN0ZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRTZWxlY3RlZChzZWxlY3RlZCkge1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgICAgdGhpcy5zdG9yZSAmJiB0aGlzLnN0b3JlLm9ic2VydmFibGUuY2FsbCh0aGlzLnN0b3JlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpc05ld2x5Q3JlYXRlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzTmV3bHlDcmVhdGVkKCkge1xuICAgICAgdmFyIGlkUHJvcGVydHkgPSB0aGlzLnN0b3JlICYmIHRoaXMuc3RvcmUuaWRQcm9wZXJ0eSA/IHRoaXMuc3RvcmUuaWRQcm9wZXJ0eSA6IGlkO1xuICAgICAgcmV0dXJuICF0aGlzLnBoYW50b21baWRQcm9wZXJ0eV07XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1vZGVsO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBNb2RlbDsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZXh0ID0gcmVxdWlyZSgnLi4vY29yZS9leHQnKTtcblxudmFyIF9leHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0KTtcblxudmFyIF9saXN0ID0gcmVxdWlyZSgnLi4vY29yZS9saXN0Jyk7XG5cbnZhciBfbGlzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saXN0KTtcblxudmFyIF9vYnNlcnZhYmxlID0gcmVxdWlyZSgnLi4vbWl4aW4vb2JzZXJ2YWJsZScpO1xuXG52YXIgX29ic2VydmFibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JzZXJ2YWJsZSk7XG5cbnZhciBfYWpheCA9IHJlcXVpcmUoJy4vYWpheCcpO1xuXG52YXIgX2FqYXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWpheCk7XG5cbnZhciBfbW9kZWwgPSByZXF1aXJlKCcuL21vZGVsJyk7XG5cbnZhciBfbW9kZWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbW9kZWwpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgdmFyIGdlbiA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IGZ1bmN0aW9uIHN0ZXAoa2V5LCBhcmcpIHsgdHJ5IHsgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpOyB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlOyB9IGNhdGNoIChlcnJvcikgeyByZWplY3QoZXJyb3IpOyByZXR1cm47IH0gaWYgKGluZm8uZG9uZSkgeyByZXNvbHZlKHZhbHVlKTsgfSBlbHNlIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHsgc3RlcChcIm5leHRcIiwgdmFsdWUpOyB9LCBmdW5jdGlvbiAoZXJyKSB7IHN0ZXAoXCJ0aHJvd1wiLCBlcnIpOyB9KTsgfSB9IHJldHVybiBzdGVwKFwibmV4dFwiKTsgfSk7IH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICB2YXIgRGF0YVN0b3JlID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERhdGFTdG9yZSgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEYXRhU3RvcmUpO1xuXG4gICAgICB0aGlzLnRvdGFsQ291bnQgPSAwO1xuICAgICAgdGhpcy5wYWdlU2l6ZSA9IDA7XG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gMTtcbiAgICAgIF9leHQyLmRlZmF1bHQuZXh0ZW5kKHRoaXMsIGNvbmZpZywge1xuICAgICAgICBvYnNlcnZhYmxlOiBfb2JzZXJ2YWJsZTIuZGVmYXVsdC5jcmVhdGUoKVxuICAgICAgfSk7XG4gICAgICB0aGlzLmNyZWF0ZVJlY29yZCA9IGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBfbW9kZWwyLmRlZmF1bHQocmVjb3JkLCBfdGhpcyk7XG4gICAgICB9O1xuICAgICAgdGhpcy5kYXRhID0gKDAsIF9saXN0Mi5kZWZhdWx0KShjb25maWcuZGF0YSB8fCBbXSkubWFwKHRoaXMuY3JlYXRlUmVjb3JkKTtcbiAgICAgIHRoaXMuc3Vic2NyaWJlID0gZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5vYnNlcnZhYmxlLnN1YnNjcmliZShvYnNlcnZlcik7XG4gICAgICB9O1xuICAgICAgdGhpcy51bnN1YnNjcmliZSA9IGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICByZXR1cm4gX3RoaXMub2JzZXJ2YWJsZS51bnN1YnNjcmliZShvYnNlcnZlcik7XG4gICAgICB9O1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhEYXRhU3RvcmUsIFt7XG4gICAgICBrZXk6ICdjbGVhckRhdGEnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsZWFyRGF0YSgpIHtcbiAgICAgICAgdmFyIHNpbGVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG5cbiAgICAgICAgdGhpcy5kYXRhID0gKDAsIF9saXN0Mi5kZWZhdWx0KShbXSk7XG4gICAgICAgIGlmICghc2lsZW50KSB7XG4gICAgICAgICAgdGhpcy5vYnNlcnZhYmxlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdsb2FkJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfcmVmID0gX2FzeW5jVG9HZW5lcmF0b3IocmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZShwcm94eSkge1xuICAgICAgICAgIHZhciByZXNwb25zZTtcbiAgICAgICAgICByZXR1cm4gcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICBwcm94eSA9IF9leHQyLmRlZmF1bHQuZXh0ZW5kKHt9LCB0aGlzLnByb3h5LCBwcm94eSB8fCB7fSk7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMztcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYWpheDIuZGVmYXVsdC5yZXF1ZXN0KHByb3h5KTtcblxuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2NvbnRleHQuc2VudDtcblxuICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgJiYgdGhpcy5sb2FkRGF0YShyZXNwb25zZSk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBfY2FsbGVlLCB0aGlzKTtcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGxvYWQoX3gyKSB7XG4gICAgICAgICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsb2FkO1xuICAgICAgfSgpXG4gICAgfSwge1xuICAgICAga2V5OiAnbG9hZERhdGEnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWREYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy5jbGVhckRhdGEodHJ1ZSk7XG4gICAgICAgIHRoaXMuZGF0YSA9ICgwLCBfbGlzdDIuZGVmYXVsdCkoKHRoaXMucHJveHkgJiYgdGhpcy5wcm94eS5yZWFkZXIgJiYgdGhpcy5wcm94eS5yZWFkZXIucm9vdFByb3BlcnR5ID8gZGF0YVt0aGlzLnByb3h5LnJlYWRlci5yb290UHJvcGVydHldIDogZGF0YSkgfHwgW10pLm1hcCh0aGlzLmNyZWF0ZVJlY29yZCk7XG4gICAgICAgIGlmICh0aGlzLnBhZ2VTaXplICYmIGRhdGEpIHtcbiAgICAgICAgICB0aGlzLnRvdGFsQ291bnQgPSB0aGlzLnByb3h5ICYmIHRoaXMucHJveHkucmVhZGVyICYmIHRoaXMucHJveHkucmVhZGVyLnRvdGFsUHJvcGVydHkgPyBkYXRhW3RoaXMucHJveHkucmVhZGVyLnRvdGFsUHJvcGVydHldIDogdGhpcy5jb3VudCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub2JzZXJ2YWJsZS5jYWxsKHRoaXMpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2xvYWRQYWdlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkUGFnZShwYWdlKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBwYWdlO1xuICAgICAgICB2YXIgcHJveHkgPSBfZXh0Mi5kZWZhdWx0LmV4dGVuZCh7fSwgdGhpcy5wcm94eSwgeyB1cmw6IHRoaXMucHJveHkudXJsICsgJz9wYWdlPScgKyB0aGlzLmN1cnJlbnRQYWdlIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5sb2FkKHByb3h5KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdyZWxvYWRQYWdlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWxvYWRQYWdlKCkge1xuICAgICAgICB2YXIgcHJveHkgPSBfZXh0Mi5kZWZhdWx0LmV4dGVuZCh7fSwgdGhpcy5wcm94eSwgeyB1cmw6IHRoaXMucHJveHkudXJsICsgJz9wYWdlPScgKyAodGhpcy5jdXJyZW50UGFnZSAtIDEpIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5sb2FkKHByb3h5KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdjb3VudCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuY291bnQoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdnZXREYXRhJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmNvbGxlY3QoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdnZXRBdCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QXQoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5nZXRBdChpbmRleCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAncmVtb3ZlQXQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUF0KGluZGV4LCBjb3VudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLnJlbW92ZUF0KGluZGV4LCBjb3VudCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAncmVtb3ZlQWxsJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVBbGwoKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICAgICB0aGlzLm9ic2VydmFibGUuY2FsbCh0aGlzKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdmaWx0ZXJCeScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZmlsdGVyQnkocHJlZGljYXRlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuZmlsdGVyKHByZWRpY2F0ZSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnc3Vic2NyaWJlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZhYmxlLnN1YnNjcmliZShvYnNlcnZlcik7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAndW5zdWJzY3JpYmUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2YWJsZS51bnN1YnNjcmliZShvYnNlcnZlcik7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnY29tbWl0Q2hhbmdlcycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tbWl0Q2hhbmdlcygpIHtcbiAgICAgICAgKDAsIF9saXN0Mi5kZWZhdWx0KSh0aGlzLmRhdGEpLmVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgICAgIHJldHVybiByZWNvcmQuc2F2ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vYnNlcnZhYmxlLmNhbGwodGhpcyk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAncmVqZWN0Q2hhbmdlcycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVqZWN0Q2hhbmdlcygpIHtcbiAgICAgICAgKDAsIF9saXN0Mi5kZWZhdWx0KSh0aGlzLmRhdGEpLmVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgICAgIHJldHVybiByZWNvcmQucmVqZWN0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm9ic2VydmFibGUuY2FsbCh0aGlzKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdzeW5jJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfcmVmMiA9IF9hc3luY1RvR2VuZXJhdG9yKHJlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUyKHByb3h5KSB7XG4gICAgICAgICAgdmFyIF9wcm94eSRwYXJhbXM7XG5cbiAgICAgICAgICByZXR1cm4gcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZTIkKF9jb250ZXh0Mikge1xuICAgICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dDIucHJldiA9IF9jb250ZXh0Mi5uZXh0KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgcHJveHkgPSBfZXh0Mi5kZWZhdWx0LmV4dGVuZCh7fSwgdGhpcy5wcm94eSwgcHJveHkgfHwge30pO1xuICAgICAgICAgICAgICAgICAgcHJveHkubWV0aG9kID0gJ3Bvc3QnO1xuICAgICAgICAgICAgICAgICAgcHJveHkucGFyYW1zID0gKDAsIF9saXN0Mi5kZWZhdWx0KSh0aGlzLmdldE1vZGlmaWVkUmVjb3JkcygpKS5tYXAoZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVjb3JkLmRhdGE7XG4gICAgICAgICAgICAgICAgICB9KS5jb2xsZWN0KCk7XG4gICAgICAgICAgICAgICAgICAoX3Byb3h5JHBhcmFtcyA9IHByb3h5LnBhcmFtcykucHVzaC5hcHBseShfcHJveHkkcGFyYW1zLCBfdG9Db25zdW1hYmxlQXJyYXkodGhpcy5nZXROZXdSZWNvcmRzKCkubWFwKGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlY29yZC5kYXRhO1xuICAgICAgICAgICAgICAgICAgfSkuY29sbGVjdCgpKSk7XG4gICAgICAgICAgICAgICAgICBpZiAocHJveHkud3JpdHRlciAmJiBwcm94eS53cml0dGVyLnRyYW5zZm9ybSkge1xuICAgICAgICAgICAgICAgICAgICBwcm94eS5wYXJhbXMgPSBwcm94eS53cml0dGVyLnRyYW5zZm9ybShwcm94eS5wYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSA3O1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9hamF4Mi5kZWZhdWx0LnJlcXVlc3QocHJveHkpO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5hYnJ1cHQoJ3JldHVybicsIF9jb250ZXh0Mi5zZW50KTtcblxuICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5zdG9wKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBfY2FsbGVlMiwgdGhpcyk7XG4gICAgICAgIH0pKTtcblxuICAgICAgICBmdW5jdGlvbiBzeW5jKF94Mykge1xuICAgICAgICAgIHJldHVybiBfcmVmMi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN5bmM7XG4gICAgICB9KClcbiAgICB9LCB7XG4gICAgICBrZXk6ICdnZXRNb2RpZmllZFJlY29yZHMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldE1vZGlmaWVkUmVjb3JkcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5maWx0ZXIoZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgICAgIHJldHVybiByZWNvcmQuaXNNb2RpZmllZCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdnZXRTZWxlY3RlZFJlY29yZHMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNlbGVjdGVkUmVjb3JkcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5maWx0ZXIoZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgICAgIHJldHVybiByZWNvcmQuc2VsZWN0ZWQ7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2dldE5ld1JlY29yZHMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldE5ld1JlY29yZHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuZmlsdGVyKGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgICByZXR1cm4gcmVjb3JkLmlzTmV3bHlDcmVhdGVkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3RvZ2dsZVNlbGVjdEFsbCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdG9nZ2xlU2VsZWN0QWxsKCkge1xuICAgICAgICBpZiAodGhpcy5nZXRTZWxlY3RlZFJlY29yZHMoKS5jb3VudCgpID09PSB0aGlzLmNvdW50KCkpIHtcbiAgICAgICAgICB0aGlzLmRhdGEuZWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVjb3JkLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kYXRhLmVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlY29yZC5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vYnNlcnZhYmxlLmNhbGwodGhpcyk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnYWRkJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGQocmVjb3JkKSB7XG4gICAgICAgIHJlY29yZCA9IHRoaXMuY3JlYXRlUmVjb3JkKHJlY29yZCk7XG4gICAgICAgIHRoaXMuZGF0YS5hZGQocmVjb3JkKTtcbiAgICAgICAgdGhpcy5vYnNlcnZhYmxlLmNhbGwodGhpcyk7XG4gICAgICAgIHJldHVybiByZWNvcmQ7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIERhdGFTdG9yZTtcbiAgfSgpO1xuXG4gIHJldHVybiBuZXcgRGF0YVN0b3JlKCk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKSB7XG4gIHZhciBmbiA9IGRlc2NyaXB0b3IudmFsdWU7XG5cbiAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignQGJpbmQgZGVjb3JhdG9yIGlzIG9ubHkgYXBwbGllZCB0byBmdW5jdGlvbnMgbm90OiAnICsgKHR5cGVvZiBmbiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoZm4pKSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBmbi5iaW5kKHRoaXMpO1xuICAgIH1cbiAgfTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2V4dCA9IHJlcXVpcmUoJy4uL2NvcmUvZXh0Jyk7XG5cbnZhciBfZXh0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dCk7XG5cbnZhciBfbGlzdCA9IHJlcXVpcmUoJy4uL2NvcmUvbGlzdCcpO1xuXG52YXIgX2xpc3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGlzdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBPYnNlcnZhYmxlID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBPYnNlcnZhYmxlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBPYnNlcnZhYmxlKTtcblxuICAgIHRoaXMub2JzZXJ2ZXJzID0gW107XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoT2JzZXJ2YWJsZSwgW3tcbiAgICBrZXk6ICdzdWJzY3JpYmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Vuc3Vic2NyaWJlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5zdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICAgICgwLCBfbGlzdDIuZGVmYXVsdCkodGhpcy5vYnNlcnZlcnMpLmVhY2goZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgb2JzZXJ2ZXJzKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gb2JzZXJ2ZXIgJiYgb2JzZXJ2ZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjYWxsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FsbCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgICgwLCBfbGlzdDIuZGVmYXVsdCkodGhpcy5vYnNlcnZlcnMpLmVhY2goZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIHJldHVybiBvYnNlcnZlci5hcHBseShfdGhpcywgYXJncyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogJ2NyZWF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Zyb21FdmVudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZyb21FdmVudCh0YXJnZXQsIGV2ZW50TmFtZSkge1xuICAgICAgcmV0dXJuIG5ldyBFdmVudE9ic2VydmFibGUodGFyZ2V0LCBldmVudE5hbWUpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBPYnNlcnZhYmxlO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBPYnNlcnZhYmxlO1xuXG52YXIgRXZlbnRPYnNlcnZhYmxlID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBFdmVudE9ic2VydmFibGUodGFyZ2V0LCBldmVudE5hbWUpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRXZlbnRPYnNlcnZhYmxlKTtcblxuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgIHRoaXMuZXZlbnROYW1lID0gZXZlbnROYW1lO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEV2ZW50T2JzZXJ2YWJsZSwgW3tcbiAgICBrZXk6ICdzdWJzY3JpYmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5ldmVudE5hbWUsIG9ic2VydmVyLCBmYWxzZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndW5zdWJzY3JpYmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bnN1YnNjcmliZShvYnNlcnZlcikge1xuICAgICAgdGhpcy50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50TmFtZSwgb2JzZXJ2ZXIsIGZhbHNlKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRXZlbnRPYnNlcnZhYmxlO1xufSgpOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKSB7XG4gIHZhciBmbiA9IGRlc2NyaXB0b3IudmFsdWU7XG5cbiAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignQHdpdGhQcm9wcyBkZWNvcmF0b3IgaXMgb25seSBhcHBsaWVkIHRvIGZ1bmN0aW9ucyBub3Q6ICcgKyAodHlwZW9mIGZuID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihmbikpKTtcbiAgfVxuXG4gIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZuLmJpbmQodGhpcykodGhpcy5wcm9wcyk7XG4gIH07XG4gIHJldHVybiBkZXNjcmlwdG9yO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcikge1xuICB2YXIgZm4gPSBkZXNjcmlwdG9yLnZhbHVlO1xuXG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0B3aXRoU3RhdGUgZGVjb3JhdG9yIGlzIG9ubHkgYXBwbGllZCB0byBmdW5jdGlvbnMgbm90OiAnICsgKHR5cGVvZiBmbiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoZm4pKSk7XG4gIH1cblxuICBkZXNjcmlwdG9yLnZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmbi5iaW5kKHRoaXMpKHRoaXMuc3RhdGUpO1xuICB9O1xuICByZXR1cm4gZGVzY3JpcHRvcjtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5Nc2dCb3ggPSBleHBvcnRzLlRvYXN0ID0gZXhwb3J0cy5EaWFsb2cgPSBleHBvcnRzLkRpYWxvZ01hbmFnZXIgPSBleHBvcnRzLkRyb3Bkb3duID0gZXhwb3J0cy5CdXR0b24gPSBleHBvcnRzLkZpZWxkID0gZXhwb3J0cy5HcmlkID0gZXhwb3J0cy5Db250YWluZXIgPSBleHBvcnRzLkxpbmsgPSBleHBvcnRzLkhhc2hSb3V0ZXIgPSBleHBvcnRzLlJvdXRlID0gZXhwb3J0cy5iaW5kID0gZXhwb3J0cy53aXRoUHJvcHMgPSBleHBvcnRzLk9ic2VydmFibGUgPSBleHBvcnRzLkNvbXBvbmVudCA9IGV4cG9ydHMuU2VydmljZSA9IGV4cG9ydHMuTW9kZWwgPSBleHBvcnRzLlN0b3JlID0gZXhwb3J0cy5DYWNoZSA9IGV4cG9ydHMuQWpheCA9IGV4cG9ydHMuTWFwID0gZXhwb3J0cy5MaXN0ID0gZXhwb3J0cy5TdHJpbmcgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfc3RyaW5nID0gcmVxdWlyZSgnLi9jb3JlL3N0cmluZycpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1N0cmluZycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0cmluZykuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfbGlzdCA9IHJlcXVpcmUoJy4vY29yZS9saXN0Jyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlzdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpc3QpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX21hcCA9IHJlcXVpcmUoJy4vY29yZS9tYXAnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNYXAnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXApLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2FqYXggPSByZXF1aXJlKCcuL2RhdGEvYWpheCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0FqYXgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hamF4KS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9jYWNoZSA9IHJlcXVpcmUoJy4vZGF0YS9jYWNoZScpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0NhY2hlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2FjaGUpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX3N0b3JlID0gcmVxdWlyZSgnLi9kYXRhL3N0b3JlJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU3RvcmUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdG9yZSkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfbW9kZWwgPSByZXF1aXJlKCcuL2RhdGEvbW9kZWwnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNb2RlbCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21vZGVsKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9zZXJ2aWNlID0gcmVxdWlyZSgnLi9hcHAvc2VydmljZScpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NlcnZpY2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXJ2aWNlKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9jb21wb25lbnQgPSByZXF1aXJlKCcuL2FwcC9jb21wb25lbnQnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdDb21wb25lbnQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wb25lbnQpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX29ic2VydmFibGUgPSByZXF1aXJlKCcuL21peGluL29ic2VydmFibGUnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPYnNlcnZhYmxlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JzZXJ2YWJsZSkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfd2l0aFByb3BzID0gcmVxdWlyZSgnLi9taXhpbi93aXRoLXByb3BzJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnd2l0aFByb3BzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2l0aFByb3BzKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9iaW5kID0gcmVxdWlyZSgnLi9taXhpbi9iaW5kJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnYmluZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2JpbmQpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX3JvdXRlciA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9yb3V0ZXInKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSb3V0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JvdXRlcikuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0hhc2hSb3V0ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfcm91dGVyLkhhc2hSb3V0ZXI7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3JvdXRlci5MaW5rO1xuICB9XG59KTtcblxudmFyIF9jb250YWluZXIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvY29udGFpbmVyJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnQ29udGFpbmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29udGFpbmVyKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9ncmlkID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2dyaWQnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdHcmlkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ3JpZCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfZm9ybSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9mb3JtJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRmllbGQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfZm9ybS5GaWVsZDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0J1dHRvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9mb3JtLkJ1dHRvbjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Ryb3Bkb3duJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2Zvcm0uRHJvcGRvd247XG4gIH1cbn0pO1xuXG52YXIgX2RpYWxvZyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9kaWFsb2cnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdEaWFsb2dNYW5hZ2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGlhbG9nKS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRGlhbG9nJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2RpYWxvZy5EaWFsb2c7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdUb2FzdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9kaWFsb2cuVG9hc3Q7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNc2dCb3gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfZGlhbG9nLk1zZ0JveDtcbiAgfVxufSk7XG5cbnJlcXVpcmUoJ2JhYmVsLXBvbHlmaWxsJyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX2V4dCA9IHJlcXVpcmUoJy4vY29yZS9leHQnKTtcblxudmFyIF9leHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0KTtcblxudmFyIF9saXN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpc3QpO1xuXG52YXIgX2FqYXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWpheCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHZhciBnZW4gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyBmdW5jdGlvbiBzdGVwKGtleSwgYXJnKSB7IHRyeSB7IHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTsgdmFyIHZhbHVlID0gaW5mby52YWx1ZTsgfSBjYXRjaCAoZXJyb3IpIHsgcmVqZWN0KGVycm9yKTsgcmV0dXJuOyB9IGlmIChpbmZvLmRvbmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0gZWxzZSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7IHN0ZXAoXCJuZXh0XCIsIHZhbHVlKTsgfSwgZnVuY3Rpb24gKGVycikgeyBzdGVwKFwidGhyb3dcIiwgZXJyKTsgfSk7IH0gfSByZXR1cm4gc3RlcChcIm5leHRcIik7IH0pOyB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBSZXh0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBSZXh0KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZXh0KTtcblxuICAgIHRoaXMuZXh0ZW5kID0gX2V4dDIuZGVmYXVsdC5leHRlbmQ7XG4gICAgdGhpcy5hamF4ID0gZnVuY3Rpb24gKHNldHRpbmdzKSB7XG4gICAgICByZXR1cm4gX2FqYXgyLmRlZmF1bHQucmVxdWVzdChzZXR0aW5ncyk7XG4gICAgfTtcbiAgICB0aGlzLmdlbmVyYXRlU2V0dGVyID0gX2V4dDIuZGVmYXVsdC5nZW5lcmF0ZVNldHRlcjtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhSZXh0LCBbe1xuICAgIGtleTogJ2xhdW5jaCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfcmVmID0gX2FzeW5jVG9HZW5lcmF0b3IocmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZSh2aWV3cG9ydCkge1xuICAgICAgICB2YXIgcm9vdDtcbiAgICAgICAgcmV0dXJuIHJlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGlmICghd2luZG93LmxvY2F0aW9uLmhhc2gpIHtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJy8nO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJvb3QgPSBfZXh0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJzxkaXYgaWQ9XCJyZWFjdC1yb290XCI+PC9kaXY+Jyk7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJvb3QpO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0LnQwID0gX2V4dDIuZGVmYXVsdC5pc0Z1bmN0aW9uKHZpZXdwb3J0KTtcblxuICAgICAgICAgICAgICAgIGlmICghX2NvbnRleHQudDApIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA4O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZpZXdwb3J0KCk7XG5cbiAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIHZpZXdwb3J0ID0gX2NvbnRleHQuc2VudDtcblxuICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgKDAsIF9yZWFjdERvbS5yZW5kZXIpKHZpZXdwb3J0LCByb290KTtcblxuICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIF9jYWxsZWUsIHRoaXMpO1xuICAgICAgfSkpO1xuXG4gICAgICBmdW5jdGlvbiBsYXVuY2goX3gpIHtcbiAgICAgICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxhdW5jaDtcbiAgICB9KClcbiAgfV0pO1xuXG4gIHJldHVybiBSZXh0O1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBuZXcgUmV4dCgpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29tcG9uZW50IH0gZnJvbSAnQC9yZXh0J1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQC9yZXh0JztcblxuQFJvdXRlKCcvJylcbkBDb21wb25lbnQoe1xuICB2aWV3OiAoeyB2bSB9KSA9PiA8Q29udGFpbmVyIGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj48aDE+e3ZtLnRpdGxlfTwvaDE+PC9Db250YWluZXI+XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRpdGxlID0gJ0Rhc2hib2FyZCdcbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFJvdXRlLCBDb250YWluZXIgfSBmcm9tICdAL3JleHQnXG5cbkBSb3V0ZSgnKicpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPENvbnRhaW5lcj5cbiAgICAgIDxoMT5Ob3QgRm91bmQ8L2gxPlxuICAgIDwvQ29udGFpbmVyPlxuICB9XG59IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQC9yZXh0JztcbmltcG9ydCBDYXJkU3RvcmUgZnJvbSAnIy9zdG9yZXMvY2FyZCc7XG5pbXBvcnQgU2VhcmNoRm9ybVZpZXcgZnJvbSAnLi9zZWFyY2gtZm9ybS52aWV3JztcblxuQENvbXBvbmVudCh7XG4gIGNvbXBvbmVudEFzOiAnc2VhcmNoRm9ybScsXG4gIHZpZXc6IFNlYXJjaEZvcm1WaWV3XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoRm9ybSB7XG4gIHNlYXJjaCgpIHtcbiAgICBDYXJkU3RvcmUubG9hZCgpO1xuICB9XG5cbiAgdGVzdCgpIHtcbiAgICBDYXJkU3RvcmUuZ2V0QXQoMCkuc2V0KCdOYW1lJywgJ05ldyBOYW1lJyk7XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFByb3BzLCBGaWVsZCwgRHJvcGRvd24sIEJ1dHRvbiB9IGZyb20gJ0AvcmV4dCc7XG5pbXBvcnQgQ2FyZFR5cGVTdG9yZSBmcm9tICcjL3N0b3Jlcy9jYXJkLXR5cGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hGb3JtVmlldyBleHRlbmRzIENvbXBvbmVudCB7XG4gIEB3aXRoUHJvcHNcbiAgcmVuZGVyKHsgc2VhcmNoRm9ybSB9KSB7XG4gICAgcmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZm9ybS1pbmxpbmVcIj5cbiAgICAgIDxGaWVsZCBjbGFzc05hbWU9XCJtci1zbVwiIC8+XG4gICAgICA8RHJvcGRvd24gc3RvcmU9e0NhcmRUeXBlU3RvcmV9IGZpZWxkTGFiZWw9XCJDYXJkIFR5cGVcIiBjbGFzc05hbWU9XCJtci1zbVwiIC8+XG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInByaW1hcnkgbXItc21cIiB0ZXh0PVwiU2VhcmNoXCIgb25DbGljaz17c2VhcmNoRm9ybS5zZWFyY2h9IC8+XG4gICAgPC9zZWN0aW9uPjtcbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQsIERyb3Bkb3duIH0gZnJvbSAnQC9yZXh0JztcbmltcG9ydCBDYXJkU3RvcmUgZnJvbSAnIy9zdG9yZXMvY2FyZCc7XG5pbXBvcnQgQ2FyZFR5cGVTdG9yZSBmcm9tICcjL3N0b3Jlcy9jYXJkLXR5cGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hSZXN1bHQgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxDb250YWluZXI+XG4gICAgICA8R3JpZCBzdG9yZT17Q2FyZFN0b3JlfSBjaGVja0NvbHVtbiBwYWdpbmc+XG4gICAgICAgIDxkaXYgdGV4dD1cIklEXCIgZGF0YUluZGV4PVwiSWRcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6MTUwfX0gLz5cbiAgICAgICAgPGRpdiB0ZXh0PVwiTmFtZVwiIGRhdGFJbmRleD1cIk5hbWVcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6MjUwfX0gZWRpdGFibGUgLz5cbiAgICAgICAgPGRpdiB0ZXh0PVwiVHlwZVwiIGRhdGFJbmRleD1cIlR5cGVcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6MTAwfX0gZWRpdGFibGU9e3t0eXBlOidkcm9wZG93bicsc3RvcmU6Q2FyZFR5cGVTdG9yZSxmaWVsZExhYmVsOidDYXJkIFR5cGUnfX0gLz5cbiAgICAgICAgPGRpdiB0ZXh0PVwiSW50cm9kdWN0aW9uXCIgZGF0YUluZGV4PVwiSW50cm9kdWN0aW9uXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiBzdHlsZT17e3dpZHRoOjEwMDB9fSAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJTVFJcIiBkYXRhSW5kZXg9XCJTVFJcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6NTB9fSAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJBR0lcIiBkYXRhSW5kZXg9XCJBR0lcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6NTB9fSAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJIUFwiIGRhdGFJbmRleD1cIkhQXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiBzdHlsZT17e3dpZHRoOjUwfX0gLz5cbiAgICAgICAgPGRpdiB0ZXh0PVwiREVYXCIgZGF0YUluZGV4PVwiREVYXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiBzdHlsZT17e3dpZHRoOjUwfX0gLz5cbiAgICAgICAgPGRpdiB0ZXh0PVwiSU5UXCIgZGF0YUluZGV4PVwiSU5UXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiBzdHlsZT17e3dpZHRoOjUwfX0gLz5cbiAgICAgICAgPGRpdiB0ZXh0PVwiU0VOXCIgZGF0YUluZGV4PVwiU0VOXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiBzdHlsZT17e3dpZHRoOjUwfX0gLz5cbiAgICAgICAgPGRpdiB0ZXh0PVwiQXJtb3JcIiBkYXRhSW5kZXg9XCJBcm1vclVzYWJsZVwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3t3aWR0aDoxMDB9fSAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJXZWFwb25cIiBkYXRhSW5kZXg9XCJXZWFwb25Vc2FibGVcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6MTAwfX0gLz5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0NvbnRhaW5lcj47XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIENvbnRhaW5lciB9IGZyb20gJ0AvcmV4dCc7XG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tICcuL3NlYXJjaC1mb3JtJztcbmltcG9ydCBTZWFyY2hSZXN1bHQgZnJvbSAnLi9zZWFyY2gtcmVzdWx0JztcblxuQFJvdXRlKCcvc2VhcmNoJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPENvbnRhaW5lciBjbGFzc05hbWU9XCJwYW5lbC1ib2R5XCI+XG4gICAgICA8aDE+U2VhcmNoPC9oMT5cbiAgICAgIDxTZWFyY2hGb3JtIC8+XG4gICAgICA8U2VhcmNoUmVzdWx0IC8+XG4gICAgPC9Db250YWluZXI+O1xuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxmb290ZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB0ZXh0LWNlbnRlclwiPiZjb3B5OyAyMDE3IGh1eXRyb25nbmd1eWVuPC9kaXY+XG4gICAgPC9mb290ZXI+O1xuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmssIENhY2hlIH0gZnJvbSAnQC9yZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxoZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYW5kXCI+UmVhY3QgQ01TPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtci1hdXRvXCI+XG4gICAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5EYXNoYm9hcmQ8L0xpbms+XG4gICAgICAgICAgPExpbmsgdG89XCIvc2VhcmNoXCIgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5TZWFyY2g8L0xpbms+XG4gICAgICAgICAgPExpbmsgdG89XCIvcmVwb3J0aW5nXCIgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5SZXBvcnRpbmc8L0xpbms+XG4gICAgICAgICAgPExpbmsgdG89XCIvYWRtaW5cIiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPkFkbWluaXN0cmF0aW9uPC9MaW5rPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8ZGl2PkhlbGxvLCA8c3Ryb25nPntDYWNoZS5nZXQoJ2NvbmZpZ3VyYXRpb24nKS5uYW1lfTwvc3Ryb25nPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+O1xuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyAuLi5vdGhlcnMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIDxuYXYgey4uLm90aGVyc30gLz47XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGFzaWRlIHN0eWxlPXt7d2lkdGg6MTAwfX0gLz47XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBIYXNoUm91dGVyIH0gZnJvbSAnQC9yZXh0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IFNpZGUgZnJvbSAnLi9zaWRlJztcbmltcG9ydCBOYXYgZnJvbSAnLi9uYXYnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3Rlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Q29udGFpbmVyPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPENvbnRhaW5lciBoYm94PlxuICAgICAgICA8Q29udGFpbmVyIGlkPVwibWFpbi1jb250YWluZXJcIj5cbiAgICAgICAgICA8TmF2IC8+XG4gICAgICAgICAgPEhhc2hSb3V0ZXIgLz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L0NvbnRhaW5lcj47XG4gIH1cbn0iLCJpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmV4dCBmcm9tICdAL3JleHQnO1xuaW1wb3J0IENvbW1vblNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlcy9jb21tb24nO1xuaW1wb3J0IFZpZXdwb3J0IGZyb20gJy4vY29tcG9uZW50cy92aWV3cG9ydC92aWV3cG9ydCc7XG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gJy4vY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkJztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2gnO1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4vY29tcG9uZW50cy9ub3Rmb3VuZC9ub3Rmb3VuZCc7XG5cblJleHQubGF1bmNoKGFzeW5jICgpID0+IHtcbiAgYXdhaXQgQ29tbW9uU2VydmljZS5pbml0QXBwKCk7XG4gIHJldHVybiA8Vmlld3BvcnQgLz47XG59KTsiLCJpbXBvcnQgUmV4dCwgeyBTZXJ2aWNlLCBBamF4LCBDYWNoZSB9IGZyb20gJ0AvcmV4dCc7XG5cbkBTZXJ2aWNlXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGFzeW5jIGluaXRBcHAoKSB7XG4gICAgYXdhaXQgQWpheC5yZXF1ZXN0KHtcbiAgICAgIHVybDogJy9hcGkvY29uZmlndXJhdGlvbicsXG4gICAgICBuZXh0OiBjb25maWd1cmF0aW9uID0+IENhY2hlLnNldCgnY29uZmlndXJhdGlvbicsIGNvbmZpZ3VyYXRpb24pXG4gICAgfSk7XG4gIH1cbn0iLCJpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0AvcmV4dCdcblxuZXhwb3J0IGRlZmF1bHQgU3RvcmUoe1xuICBzdG9yZUlkOiAnQ2FyZFR5cGVTdG9yZScsXG4gIGRhdGE6IFsnTWVsZWUnLCAnU2hvb3QnLCAnTWFnaWMnXVxufSk7IiwiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAL3JleHQnXG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JlKHtcbiAgc3RvcmVJZDogJ0NhcmRTdG9yZScsXG4gIHByb3h5OiB7XG4gICAgdXJsOiAnL2FwaS9jYXJkcycsXG4gICAgbWV0aG9kOiAncG9zdCdcbiAgfSxcbiAgcGFnZVNpemU6IDEwMFxufSk7Il19
