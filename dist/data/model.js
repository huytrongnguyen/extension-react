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
    this.selected = false;
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
      this.phantom = _ext2.default.clone(this.data);
    }
  }, {
    key: 'reject',
    value: function reject() {
      this.data = _ext2.default.clone(this.phantom);
      this.save();
    }
  }, {
    key: 'isModified',
    value: function isModified(fieldName) {
      var _this = this;

      if (fieldName) {
        var field = this.fields.find(function (field) {
          return field.name === fieldName;
        });
        return !field ? false : !this.isEqual(field);
      }

      return this.fields.contains(function (field) {
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
      return (0, _list2.default)(fields).map(function (field) {
        if (_ext2.default.isString(field)) {
          return { name: field };
        } else {
          return field;
        }
      });
    }
  }, {
    key: 'setSelected',
    value: function setSelected(selected) {
      this.selected = selected;
      this.store && this.store.observable.call(this.store);
    }
  }, {
    key: 'isNewlyCreated',
    value: function isNewlyCreated() {
      var idProperty = this.store && this.store.idProperty ? this.store.idProperty : id;
      return !this.phantom[idProperty];
    }
  }]);

  return Model;
}();

exports.default = Model;