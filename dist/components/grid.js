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

      return _react2.default.createElement(
        _container2.default,
        { className: 'rx-grid' },
        paging && _react2.default.createElement(_pagingToolbar2.default, { store: store }),
        _react2.default.createElement(_header2.default, this.state),
        _react2.default.createElement(_body2.default, _extends({ data: store.getData() }, this.state))
      );
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