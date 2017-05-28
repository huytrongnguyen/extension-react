'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _desc2, _value2, _class2, _desc3, _value3, _class3, _desc4, _value4, _class4;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _list = require('../core/list');

var _list2 = _interopRequireDefault(_list);

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
      store: props.store
    };
    return _this;
  }

  _createClass(_default, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.resizeGrid();
      _observable2.default.fromEvent(window, 'resize').subscribe(this.resizeGrid);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          columns = _state.columns,
          width = _state.width,
          innerWidth = _state.innerWidth,
          store = _state.store;

      return _react2.default.createElement(
        _container2.default,
        { className: 'rx-grid', style: { width: width } },
        _react2.default.createElement(GridHeader, this.state),
        _react2.default.createElement(GridBody, _extends({ data: store.getRecords() }, this.state))
      );
    }
  }, {
    key: 'resizeGrid',
    value: function resizeGrid() {
      var columns = this.state.columns,
          node = _ext2.default.getComp(this),
          parent = node.parent(),
          width = parent.width(),
          height = parent.height(),
          flexColumns = [];


      var innerWidth = (0, _list2.default)(columns).reduce(function (innerWidth, col) {
        if (col.style && col.style.width) {
          innerWidth += col.style.width;
        } else {
          flexColumns.push(col);
        }
        return innerWidth;
      }, 0);

      if (innerWidth < width) {
        var remainWidth = width - innerWidth;
        (0, _list2.default)(flexColumns).each(function (col) {
          !col.style && (col.style = {});
          col.style.width = remainWidth / flexColumns.length;
        });
        innerWidth = width;
      }

      this.setState(function () {
        return { columns: columns, width: width, innerWidth: innerWidth };
      });
    }
  }]);

  return _default;
}(_react.Component), (_applyDecoratedDescriptor(_class.prototype, 'resizeGrid', [_bind2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'resizeGrid'), _class.prototype)), _class);

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
          width = _ref.width,
          innerWidth = _ref.innerWidth;

      return _react2.default.createElement(
        'section',
        { className: 'rx-grid-header', style: { width: width } },
        _react2.default.createElement(
          'div',
          { className: 'rx-grid-header-container d-flex flex-row' },
          columns && columns.map(function (col) {
            var text = col.text,
                className = col.className,
                style = col.style,
                others = _objectWithoutProperties(col, ['text', 'className', 'style']);

            return _react2.default.createElement(
              'div',
              _extends({ className: 'rx-grid-column-header text-sm-center ' + (className || ''), style: style }, others),
              text || ''
            );
          })
        )
      );
    }
  }]);

  return GridHeader;
}(_react.Component), (_applyDecoratedDescriptor(_class2.prototype, 'render', [_withProps2.default], Object.getOwnPropertyDescriptor(_class2.prototype, 'render'), _class2.prototype)), _class2);
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
          width = _ref2.width,
          innerWidth = _ref2.innerWidth,
          data = _ref2.data;

      return _react2.default.createElement(
        _container2.default,
        { className: 'rx-grid-body' },
        _react2.default.createElement(
          'section',
          { className: 'rx-grid-view' },
          _react2.default.createElement('div', { style: { width: innerWidth, marginTop: -1 } }),
          data && data.map(function (record) {
            return _react2.default.createElement(GridRow, { columns: columns, record: record });
          })
        )
      );
    }
  }]);

  return GridBody;
}(_react.Component), (_applyDecoratedDescriptor(_class3.prototype, 'render', [_withProps2.default], Object.getOwnPropertyDescriptor(_class3.prototype, 'render'), _class3.prototype)), _class3);
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
          record = _ref3.record;

      return _react2.default.createElement(
        'div',
        { className: 'rx-grid-row d-flex flex-row' },
        columns && columns.map(function (col) {
          var dataIndex = col.dataIndex,
              className = col.className,
              render = col.render,
              style = col.style,
              others = _objectWithoutProperties(col, ['dataIndex', 'className', 'render', 'style']);

          return _react2.default.createElement(
            'div',
            _extends({ className: 'rx-grid-cell text-sm-center ' + (className || ''), style: style }, others),
            render ? render(record[dataIndex], record, dataIndex) : record[dataIndex]
          );
        })
      );
    }
  }]);

  return GridRow;
}(_react.Component), (_applyDecoratedDescriptor(_class4.prototype, 'render', [_withProps2.default], Object.getOwnPropertyDescriptor(_class4.prototype, 'render'), _class4.prototype)), _class4);