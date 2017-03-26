"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Config = function () {
  function Config() {
    _classCallCheck(this, Config);

    this._config = {};
  }

  _createClass(Config, [{
    key: "add",
    value: function add(config) {
      this._config = Object.assign({}, this._config, config);
    }
  }, {
    key: "get",
    value: function get(key) {
      return this._config[key];
    }
  }, {
    key: "set",
    value: function set(key, value) {
      this._config[key] = value;
    }
  }]);

  return Config;
}();

exports.default = new Config();