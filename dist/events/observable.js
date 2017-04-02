"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Observable = function () {
  function Observable() {
    _classCallCheck(this, Observable);
  }

  _createClass(Observable, [{
    key: "subscribers",
    value: function subscribers() {
      if (!this._subscribersMap) {
        this._subscribersMap = {};
      }
      return this._subscribersMap;
    }
  }, {
    key: "subscribe",
    value: function subscribe(name, cb) {
      var subs = this.subscribers();
      if (!subs[name]) {
        subs[name] = [cb];
      } else {
        subs[name].push(cb);
      }
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(name, cb) {
      var subs = this.subscribers()[name];
      for (var key in subs) {
        if (subs[key] == cb) {
          subs[key] = null;
        }
      }
    }
  }, {
    key: "clear",
    value: function clear(name) {
      delete this.subscribers()[name];
    }
  }, {
    key: "publish",
    value: function publish() {
      var args = [].slice.call(arguments),
          name = args.shift(),
          subs = this.subscribers()[name];

      for (var key in subs) {
        var sub = subs[key];
        if (sub) {
          sub.apply(this, args);
        }
      }
    }
  }]);

  return Observable;
}();

exports.default = new Observable();