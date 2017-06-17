'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = exports.Button = exports.Field = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _desc2, _value2, _class2, _desc3, _value3, _class3;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
          others = _objectWithoutProperties(_ref, ['className', 'onChange', 'onKeyPress']);

      return _react2.default.createElement('input', _extends({ type: 'text', value: this.state.value, className: 'form-control ' + className,
        onChange: this.onChange
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
  }]);

  return Field;
}(_react.Component), (_applyDecoratedDescriptor(_class.prototype, 'render', [_withProps2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onChange', [_bind2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'onChange'), _class.prototype)), _class);
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

      return _react2.default.createElement(
        'button',
        _extends({ className: 'btn ' + className }, others),
        text || children
      );
    }
  }]);

  return Button;
}(_react.Component), (_applyDecoratedDescriptor(_class2.prototype, 'render', [_withProps2.default], Object.getOwnPropertyDescriptor(_class2.prototype, 'render'), _class2.prototype)), _class2);
var Dropdown = exports.Dropdown = (_class3 = function (_Component3) {
  _inherits(Dropdown, _Component3);

  function Dropdown(props) {
    _classCallCheck(this, Dropdown);

    var _this3 = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

    var data = [],
        selection = (0, _list2.default)(props.value || data);
    _this3.state = {
      data: data,
      selection: selection,
      searchFilter: '',
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

      return _react2.default.createElement(
        'section',
        { className: 'dropdown ' + className },
        _react2.default.createElement(Field, { className: 'dropdown-text', value: selection.map(function (rec) {
            return rec.get(displayField);
          }).collect().join(',') || fieldLabel, readOnly: true }),
        _react2.default.createElement(Button, { className: 'dropdown-toggle', onClick: this.toggle }),
        show && _react2.default.createElement(
          'div',
          { className: 'dropdown-menu' },
          _react2.default.createElement(
            'div',
            { className: 'dropdown-action' },
            _react2.default.createElement(Field, { value: searchFilter || '', onChange: this.filter, placeholder: 'Search...' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'dropdown-list' },
            data.map(function (rec) {
              return _react2.default.createElement(
                'div',
                { className: _ext2.default.className({ 'dropdown-item': true,
                    'selected': selection.contains(function (selected) {
                      return selected.get(displayField) === rec.get(displayField);
                    }) }),
                  onClick: function onClick() {
                    return _this4.select(rec);
                  } },
                rec.get(displayField)
              );
            })
          )
        )
      );
    }
  }, {
    key: 'toggle',
    value: function () {
      var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var show, _props, onCollapse, store, _props2, _store, queryMode, data;

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

                _props = this.props, onCollapse = _props.onCollapse, store = _props.store;

                onCollapse && onCollapse(this.state.selection.collect());
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
      this.setState(function () {
        return { selection: (0, _list2.default)([rec]) };
      });
      this.toggle();
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
        try {
          var _target = e.target.parentElement,
              parentFound = false,
              node = (0, _reactDom.findDOMNode)(this);
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
        } catch (e) {
          console.error(e);
        }
      }
    }
  }]);

  return Dropdown;
}(_react.Component), (_applyDecoratedDescriptor(_class3.prototype, 'render', [_withProps2.default], Object.getOwnPropertyDescriptor(_class3.prototype, 'render'), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, 'toggle', [_bind2.default], Object.getOwnPropertyDescriptor(_class3.prototype, 'toggle'), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, 'select', [_bind2.default], Object.getOwnPropertyDescriptor(_class3.prototype, 'select'), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, 'filter', [_bind2.default], Object.getOwnPropertyDescriptor(_class3.prototype, 'filter'), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, 'closeOnBlur', [_bind2.default], Object.getOwnPropertyDescriptor(_class3.prototype, 'closeOnBlur'), _class3.prototype)), _class3);