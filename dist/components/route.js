'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = exports.Route = exports.Router = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Router = exports.Router = function (_Component) {
  _inherits(Router, _Component);

  function Router() {
    _classCallCheck(this, Router);

    return _possibleConstructorReturn(this, (Router.__proto__ || Object.getPrototypeOf(Router)).apply(this, arguments));
  }

  return Router;
}(_react.Component);

var Route = exports.Route = function (_Component2) {
  _inherits(Route, _Component2);

  function Route(props) {
    _classCallCheck(this, Route);

    var _this2 = _possibleConstructorReturn(this, (Route.__proto__ || Object.getPrototypeOf(Route)).call(this, props));

    _this2.state = {
      match: _this2.matchPath(props)
    };
    return _this2;
  }

  _createClass(Route, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      this.setState(function () {
        return { match: _this3.matchPath(nextProps) };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var match = this.state.match,
          component = this.props.component;


      if (!component) {
        console.error('component props should not be null');
        return null;
      }

      return match ? _react2.default.createElement(component, {}) : null;
    }
  }, {
    key: 'matchPath',
    value: function matchPath(_ref) {
      var index = _ref.index,
          path = _ref.path;

      var route = window.location.hash.substring(1) || '/';
      if (index && route === '/') {
        return true;
      }
      console.log(route.startsWith(path));
      return route.startsWith(path);
    }
  }]);

  return Route;
}(_react.Component);

var Link = function Link(_ref2) {
  var to = _ref2.to,
      others = _objectWithoutProperties(_ref2, ['to']);

  return _react2.default.createElement('a', _extends({ href: '#' + to }, others));
};
exports.Link = Link;