'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

var _list = require('../core/list');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DomEvent = function () {
  function DomEvent(target, eventName) {
    _classCallCheck(this, DomEvent);

    this.target = target;
    this.eventName = eventName;
    return this;
  }

  _createClass(DomEvent, [{
    key: 'subscribe',
    value: function subscribe(subscriber) {
      this.target.addEventListener(this.eventName, subscriber);
    }
  }]);

  return DomEvent;
}();

var Event = function () {
  function Event() {
    _classCallCheck(this, Event);

    this.subscribers = [];
    return this;
  }

  _createClass(Event, [{
    key: 'on',
    value: function on(subscriber) {
      this.subscribers.push(subscriber);
    }
  }, {
    key: 'un',
    value: function un(subscriber) {
      _list2.default.of(this.subscribers).each(function (value, index, subscribers) {
        return value === subscriber && subscribers.splice(index, 1);
      });
    }
  }, {
    key: 'call',
    value: function call() {
      var _this = this;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _list2.default.of(this.subscribers).each(function (subscriber) {
        return subscriber.apply(_this, args);
      });
    }
  }], [{
    key: 'create',
    value: function create() {
      return new Event();
    }
  }, {
    key: 'listen',
    value: function listen(target, eventName) {
      return new DomEvent(target, eventName);
    }
  }]);

  return Event;
}();

exports.default = Event;