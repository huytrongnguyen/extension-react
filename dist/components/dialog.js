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

var _bind = require('../mixin/bind');

var _bind2 = _interopRequireDefault(_bind);

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
}(_react.Component), (_applyDecoratedDescriptor(_class.prototype, 'dispose', [_bind2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'dispose'), _class.prototype)), _class);


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