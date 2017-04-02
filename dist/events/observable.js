'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventObservable = function () {
  function EventObservable(target, eventName) {
    _classCallCheck(this, EventObservable);

    _ext2.default.extend(EventObservable.prototype, {
      target: target,
      eventName: eventName
    });
    return this;
  }

  _createClass(EventObservable, [{
    key: 'subscribe',
    value: function subscribe(subscriber) {
      this.target.addEventListener(this.eventName, subscriber);
    }
  }]);

  return EventObservable;
}();

var Observable = function () {
  function Observable() {
    _classCallCheck(this, Observable);

    this.subscriber = function () {};
    return this;
  }

  _createClass(Observable, [{
    key: 'subscribe',
    value: function subscribe(subscriber) {
      this.subscriber = subscriber;
    }
  }, {
    key: 'call',
    value: function call() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this.subscriber.apply(this, args);
    }
  }], [{
    key: 'create',
    value: function create() {
      return new Observable();
    }
  }, {
    key: 'fromEvent',
    value: function fromEvent(target, eventName) {
      return new EventObservable(target, eventName);
    }
  }]);

  return Observable;
}();

exports.default = Observable;