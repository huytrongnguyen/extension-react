'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Button = function Button(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === undefined ? 'secondary' : _ref$type,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      text = _ref.text,
      children = _ref.children,
      others = _objectWithoutProperties(_ref, ['type', 'className', 'text', 'children']);

  className = ['btn btn-sm', 'btn-' + type, className].join(' ');
  return _react2.default.createElement(
    'button',
    _extends({ type: 'button', className: className }, others),
    text || children
  );
};
exports.Button = Button;