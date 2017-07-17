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

var _withProps = require('../../mixin/with-props');

var _withProps2 = _interopRequireDefault(_withProps);

var _form = require('../form');

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

      return _react2.default.createElement(
        'section',
        { className: 'rx-grid-header', style: { width: width } },
        _react2.default.createElement(
          'div',
          { className: 'rx-grid-header-container d-flex flex-row', style: { width: headerWidth } },
          checkColumn && _react2.default.createElement(
            'div',
            { className: 'rx-grid-column-header text-sm-center', style: { width: _ext2.default.CHECK_COLUMN_WIDTH } },
            checkColumn === 'multiple' && _react2.default.createElement(_form.Checkbox, { disabled: store.count() === 0, onClick: function onClick() {
                return store.toggleSelectAll();
              } })
          ),
          headerTpl && _react2.default.createElement(headerTpl, { columns: columns }),
          !headerTpl && columns && columns.map(function (col) {
            var _col$text = col.text,
                text = _col$text === undefined ? '' : _col$text,
                _col$className = col.className,
                className = _col$className === undefined ? '' : _col$className,
                others = _objectWithoutProperties(col, ['text', 'className']);

            return _react2.default.createElement(
              'div',
              _extends({ className: 'rx-grid-column-header text-center ' + className }, others),
              text
            );
          })
        )
      );
    }
  }]);

  return GridHeader;
}(_react.Component), (_applyDecoratedDescriptor(_class.prototype, 'render', [_withProps2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype)), _class);
exports.default = GridHeader;