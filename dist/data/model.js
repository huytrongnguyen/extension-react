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

var _map = require('../core/map');

var _map2 = _interopRequireDefault(_map);

var _observable = require('../mixin/observable');

var _observable2 = _interopRequireDefault(_observable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = function () {
  function Model(data, store) {
    _classCallCheck(this, Model);

    this.data = data;
    this.store = store;
    this.fields = this.createFields(store && store.fields ? store.fields : Object.keys(this.data));
    this.save();
  }

  _createClass(Model, [{
    key: 'get',
    value: function get(fieldName) {
      if (!fieldName || _ext2.default.isPrimitive(this.data)) {
        return this.data;
      }
      return this.data[fieldName];
    }
  }, {
    key: 'set',
    value: function set(fieldName, newValue) {
      if (!fieldName || _ext2.default.isPrimitive(this.data)) {
        this.data = newValue;
      } else {
        this.data[fieldName] = newValue;
      }
      this.store && this.store.observable.call(this.store);
    }
  }, {
    key: 'save',
    value: function save() {
      this.phantom = _ext2.default.isPrimitive(this.data) ? this.data : _ext2.default.extend({}, this.data);
    }
  }, {
    key: 'reject',
    value: function reject() {
      this.data = _ext2.default.extend({}, this.phantom);
      this.save();
    }
  }, {
    key: 'isModified',
    value: function isModified(fieldName) {
      var _this = this;

      if (fieldName) {
        return !this.isEqual(this.fields[fieldName]);
      }

      return (0, _map2.default)(this.fields).values().contains(function (field) {
        return !_this.isEqual(field);
      });
    }
  }, {
    key: 'isEqual',
    value: function isEqual(field) {
      return !field ? true : field.equals ? field.equals(this.data[field.name], this.phantom[field.name]) : this.data[field.name] === this.phantom[field.name];
    }
  }, {
    key: 'createFields',
    value: function createFields(fields) {
      return (0, _list2.default)(fields).reduce(function (fieldByName, field) {
        if (_ext2.default.isObject(field)) {
          fieldByName[field.name] = field;
        } else {
          fieldByName[field] = { name: field };
        }
        return fieldByName;
      }, {});
    }
  }]);

  return Model;
}();

exports.default = Model;