'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

      return _react2.default.createElement(
        'section',
        { className: 'toolbar top row' },
        _react2.default.createElement(
          'div',
          { className: 'col-6' },
          totalCount > 0 && 'Displaying ' + firstIndex + ' - ' + lastIndex + ' of ' + totalCount
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-6' },
          _react2.default.createElement(
            'div',
            { className: 'float-right' },
            _react2.default.createElement(
              'div',
              { className: 'input-group' },
              _react2.default.createElement(_form.Button, { className: 'input-group-addon', disabled: totalCount === 0, onClick: function onClick() {
                  return _this2.loadPage(currentPage);
                }, text: 'Refresh' }),
              _react2.default.createElement(_form.Button, { className: 'input-group-addon', disabled: currentPage === 1, onClick: function onClick() {
                  return _this2.loadPage(1);
                }, text: 'First' }),
              _react2.default.createElement(_form.Button, { className: 'input-group-addon', disabled: currentPage === 1, onClick: function onClick() {
                  return _this2.loadPage(currentPage - 1);
                }, text: 'Previous' }),
              _react2.default.createElement(
                'span',
                { className: 'input-group-addon' },
                'Page'
              ),
              _react2.default.createElement(_form.Field, { value: page, className: 'w5 text-center input-group-addon', disabled: page === 0, onChange: this.setPage, onEnter: function onEnter(page) {
                  return _this2.loadPage(page);
                } }),
              _react2.default.createElement(
                'span',
                { className: 'input-group-addon' },
                'of ',
                totalPages
              ),
              _react2.default.createElement(_form.Button, { className: 'input-group-addon', disabled: totalPages === 0 || currentPage === totalPages, onClick: function onClick() {
                  return _this2.loadPage(currentPage + 1);
                }, text: 'Next' }),
              _react2.default.createElement(_form.Button, { className: 'input-group-addon', disabled: totalPages === 0 || currentPage === totalPages, onClick: function onClick() {
                  return _this2.loadPage(totalPages);
                }, text: 'Last' })
            )
          )
        )
      );
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