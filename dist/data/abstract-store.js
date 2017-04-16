'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

var _observable = require('../mixin/observable');

var _observable2 = _interopRequireDefault(_observable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AbstractStore = function () {
  function AbstractStore(config) {
    _classCallCheck(this, AbstractStore);

    _ext2.default.extend(AbstractStore.prototype, config, {
      data: [],
      observable: _observable2.default.create(),
      modifiedRecords: {}
    });

    StoreManager[this.storeId] = this;
  }

  _createClass(AbstractStore, [{
    key: 'subscribe',
    value: function subscribe(observer) {
      this.observable.subscribe(observer);
    }
  }, {
    key: 'unsubscribe',
    value: function unsubscribe(observer) {
      this.observable.unsubscribe(observer);
    }
  }, {
    key: 'removeAll',
    value: function removeAll() {
      this.data = [];
    }
  }, {
    key: 'loadData',
    value: function loadData(data) {
      this.data = data;
      this.observable.call(this);
    }
  }]);

  return AbstractStore;
}();

exports.default = AbstractStore;