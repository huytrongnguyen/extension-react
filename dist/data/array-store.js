'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _abstractStore = require('./abstract-store');

var _abstractStore2 = _interopRequireDefault(_abstractStore);

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

var _list = require('../core/list');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArrayStore = function (_AbstractStore) {
  _inherits(ArrayStore, _AbstractStore);

  function ArrayStore(config) {
    _classCallCheck(this, ArrayStore);

    return _possibleConstructorReturn(this, (ArrayStore.__proto__ || Object.getPrototypeOf(ArrayStore)).call(this, config));
  }

  _createClass(ArrayStore, [{
    key: 'updateRecord',
    value: function updateRecord(record, fieldName, newValue) {
      !this.modifiedRecords[record.id] && (this.modifiedRecords[record.id] = new _model2.default(record));
      var modifiedRecord = this.modifiedRecords[record.id];
      modifiedRecord.set(fieldName, newValue);
      record[fieldName] = newValue;
      this.observable.call(this);
    }
  }, {
    key: 'commitChanges',
    value: function commitChanges() {
      this.modifiedRecords = {};
      this.observable.call(this);
    }
  }, {
    key: 'rejectChanges',
    value: function rejectChanges() {
      var _this2 = this;

      _list2.default.of(this.data).each(function (record, index, data) {
        if (_this2.modifiedRecords[record.id]) {
          data[index] = Ext.extend({}, _this2.modifiedRecords[record.id].phantom);
        }
      });
      this.commitChanges();
    }
  }]);

  return ArrayStore;
}(_abstractStore2.default);

exports.default = ArrayStore;