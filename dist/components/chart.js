'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

var _d = require('../core/d3');

var _d2 = _interopRequireDefault(_d);

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

var Chart = (_class = function (_Component) {
  _inherits(Chart, _Component);

  function Chart(props) {
    _classCallCheck(this, Chart);

    var _this = _possibleConstructorReturn(this, (Chart.__proto__ || Object.getPrototypeOf(Chart)).call(this, props));

    _this.guid = _ext2.default.guid('rx-chart');
    _ext2.default.initialState(_this, {
      width: 0,
      height: 0
    });
    return _this;
  }

  _createClass(Chart, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.store.subscribe(this.redraw);
      _observable2.default.fromEvent(window, 'resize').subscribe(this.redraw);
      this.redraw();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.store.unsubscribe(this.redraw);
      _observable2.default.fromEvent(window, 'resize').unsubscribe(this.redraw);
    }
  }, {
    key: 'render',
    value: function render(_ref) {
      var store = _ref.store,
          others = _objectWithoutProperties(_ref, ['store']);

      var _state = this.state,
          width = _state.width,
          height = _state.height;

      return _react2.default.createElement(
        _container2.default,
        others,
        _react2.default.createElement('div', { id: this.guid, style: { width: width, height: height } })
      );
    }
  }, {
    key: 'redraw',
    value: function redraw() {
      var node = _ext2.default.getComp(this),
          parent = node.parent(),
          width = parent.width(),
          height = parent.height(),
          _props = this.props,
          store = _props.store,
          _props$series = _props.series,
          series = _props$series === undefined ? {} : _props$series,
          _props$legend = _props.legend,
          legend = _props$legend === undefined ? {} : _props$legend;


      this.setWidth(parent.width());
      this.setHeight(parent.height());

      (0, _d2.default)('#' + this.guid, width, height).setStore(store).setSeries(series).setLegend(legend).setTooltip();
    }
  }]);

  return Chart;
}(_react.Component), (_applyDecoratedDescriptor(_class.prototype, 'render', [_withProps2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'redraw', [_bind2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'redraw'), _class.prototype)), _class);
exports.default = Chart;