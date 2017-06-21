'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
          return _react2.default.createElement(
            'div',
            _extends({ className: cls, style: style, onClick: function onClick() {
                return _this2.setReadOnly(false);
              } }, others),
            _render ? _render(value, record, dataIndex, rowIndex) : value
          );
        } else if (editable.type === 'dropdown') {
          return _react2.default.createElement(
            'div',
            _extends({ className: cls, style: style }, others),
            _react2.default.createElement(_form.Dropdown, { value: value, store: editable.store, fieldLabel: editable.fieldLabel, onSelect: function onSelect(rec) {
                return _this2.setValue(rec.data);
              }, onCollapse: this.afterEdit })
          );
        } else {
          return _react2.default.createElement(
            'div',
            _extends({ className: cls, style: style }, others),
            _react2.default.createElement(_form.Field, { value: value, autoFocus: true, onChange: this.setValue, onBlur: this.afterEdit })
          );
        }
      }

      return _react2.default.createElement(
        'div',
        _extends({ className: cls, style: style }, others),
        _render ? _render(value, record, dataIndex, rowIndex) : value
      );
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