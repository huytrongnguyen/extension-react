"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EMPTY_LIST = [];

var List = function () {
  function List(value) {
    _classCallCheck(this, List);

    this.array = EMPTY_LIST;
    if (value && value.length) {
      this.array = value;
    }
    return this;
  }

  _createClass(List, [{
    key: "collect",
    value: function collect() {
      return this.array;
    }
  }, {
    key: "count",
    value: function count() {
      return this.array.length;
    }
  }, {
    key: "each",
    value: function each(iteratee) {
      for (var index = 0, item; (item = this.array[index]) != null; ++index) {
        iteratee(item, index, this.array);
      }
    }
  }, {
    key: "findBy",
    value: function findBy(predicate) {
      var result = null;
      for (var index = 0, item; (item = this.array[index]) != null; ++index) {
        if (predicate(item, index, this.array)) {
          result = item;
          break;
        }
      }
      return result;
    }
  }, {
    key: "contains",
    value: function contains(predicate) {
      return this.findBy(predicate) !== null;
    }
  }, {
    key: "filter",
    value: function filter(predicate) {
      var result = [];
      this.each(function (item, index, array) {
        if (predicate(item, index, array)) {
          result.push(item);
        }
      });
      return new List(result);
    }
  }, {
    key: "map",
    value: function map(iteratee) {
      var result = [];
      this.each(function (item, index, array) {
        return result[index] = iteratee(item, index, array);
      });
      return new List(result);
    }
  }, {
    key: "reduce",
    value: function reduce(iteratee, accumulator) {
      this.each(function (item, index, array) {
        return accumulator = iteratee(accumulator, item, index, array);
      });
      return accumulator;
    }
  }, {
    key: "getAt",
    value: function getAt(index) {
      return this.array[index];
    }
  }, {
    key: "removeAt",
    value: function removeAt(index) {
      var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      return this.array.splice(index, count);
    }
  }, {
    key: "add",
    value: function add(item) {
      this.array.push(item);
    }
  }, {
    key: "insert",
    value: function insert(index, item) {
      this.array.splice(index, 0, item);
    }
  }]);

  return List;
}();

exports.default = function (value) {
  return new List(value);
};