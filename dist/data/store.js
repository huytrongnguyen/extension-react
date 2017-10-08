'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

var _list = require('../core/list');

var _list2 = _interopRequireDefault(_list);

var _observable = require('../mixin/observable');

var _observable2 = _interopRequireDefault(_observable);

var _ajax = require('./ajax');

var _ajax2 = _interopRequireDefault(_ajax);

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

exports.default = function (config) {
  var DataStore = function () {
    function DataStore() {
      var _this = this;

      _classCallCheck(this, DataStore);

      this.totalCount = 0;
      this.pageSize = 0;
      this.currentPage = 1;
      _ext2.default.extend(this, config, {
        observable: _observable2.default.create()
      });
      this.createRecord = function (record) {
        return new _model2.default(record, _this);
      };
      this.data = (0, _list2.default)(config.data).map(this.createRecord);
      this.subscribe = function (observer) {
        return _this.observable.subscribe(observer);
      };
      this.unsubscribe = function (observer) {
        return _this.observable.unsubscribe(observer);
      };
    }

    _createClass(DataStore, [{
      key: 'clearData',
      value: function clearData() {
        var silent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        this.data = (0, _list2.default)();
        this.totalCount = 0;
        this.currentPage = 1;
        if (!silent) {
          this.observable.call(this);
        }
      }
    }, {
      key: 'load',
      value: function () {
        var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(proxy) {
          var response;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  proxy = _ext2.default.extend({}, this.proxy, proxy || {});
                  _context.next = 3;
                  return _ajax2.default.request(proxy);

                case 3:
                  response = _context.sent;

                  response && this.loadData(response);

                case 5:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function load(_x2) {
          return _ref.apply(this, arguments);
        }

        return load;
      }()
    }, {
      key: 'loadData',
      value: function loadData(data) {
        this.clearData(true);
        this.data = (0, _list2.default)((this.proxy && this.proxy.reader && this.proxy.reader.rootProperty ? data[this.proxy.reader.rootProperty] : data) || []).map(this.createRecord);
        if (this.pageSize && data) {
          this.totalCount = this.proxy && this.proxy.reader && this.proxy.reader.totalProperty ? data[this.proxy.reader.totalProperty] : this.count();
        }
        this.observable.call(this);
      }
    }, {
      key: 'loadPage',
      value: function loadPage(page) {
        this.currentPage = page;
        var proxy = _ext2.default.extend({}, this.proxy, { url: this.proxy.url + '?page=' + this.currentPage });
        return this.load(proxy);
      }
    }, {
      key: 'reloadPage',
      value: function reloadPage() {
        var proxy = _ext2.default.extend({}, this.proxy, { url: this.proxy.url + '?page=' + (this.currentPage - 1) });
        return this.load(proxy);
      }
    }, {
      key: 'getRecords',
      value: function getRecords() {
        return this.data;
      }
    }, {
      key: 'count',
      value: function count() {
        return this.data.count();
      }
    }, {
      key: 'getData',
      value: function getData() {
        return this.data.collect();
      }
    }, {
      key: 'getAt',
      value: function getAt(index) {
        return this.data.getAt(index);
      }
    }, {
      key: 'removeAt',
      value: function removeAt(index, count) {
        return this.data.removeAt(index, count);
      }
    }, {
      key: 'removeAll',
      value: function removeAll() {
        this.data = [];
        this.observable.call(this);
      }
    }, {
      key: 'filterBy',
      value: function filterBy(predicate) {
        return this.data.filter(predicate);
      }
    }, {
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
      key: 'commitChanges',
      value: function commitChanges() {
        (0, _list2.default)(this.data).each(function (record) {
          return record.save();
        });
        this.observable.call(this);
      }
    }, {
      key: 'rejectChanges',
      value: function rejectChanges() {
        (0, _list2.default)(this.data).each(function (record) {
          return record.reject();
        });
        this.observable.call(this);
      }
    }, {
      key: 'sync',
      value: function () {
        var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(proxy) {
          var _proxy$params;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  proxy = _ext2.default.extend({}, this.proxy, proxy || {});
                  proxy.method = 'post';
                  proxy.params = (0, _list2.default)(this.getModifiedRecords()).map(function (record) {
                    return record.data;
                  }).collect();
                  (_proxy$params = proxy.params).push.apply(_proxy$params, _toConsumableArray(this.getNewRecords().map(function (record) {
                    return record.data;
                  }).collect()));
                  if (proxy.writter && proxy.writter.transform) {
                    proxy.params = proxy.writter.transform(proxy.params);
                  }
                  _context2.next = 7;
                  return _ajax2.default.request(proxy);

                case 7:
                  return _context2.abrupt('return', _context2.sent);

                case 8:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function sync(_x3) {
          return _ref2.apply(this, arguments);
        }

        return sync;
      }()
    }, {
      key: 'getModifiedRecords',
      value: function getModifiedRecords() {
        return this.data.filter(function (record) {
          return record.isModified();
        });
      }
    }, {
      key: 'getSelectedRecords',
      value: function getSelectedRecords() {
        return this.data.filter(function (record) {
          return record.selected;
        });
      }
    }, {
      key: 'getNewRecords',
      value: function getNewRecords() {
        return this.data.filter(function (record) {
          return record.isNewlyCreated();
        });
      }
    }, {
      key: 'toggleSelectAll',
      value: function toggleSelectAll() {
        if (this.getSelectedRecords().count() === this.count()) {
          this.data.each(function (record) {
            return record.selected = false;
          });
        } else {
          this.data.each(function (record) {
            return record.selected = true;
          });
        }
        this.observable.call(this);
      }
    }, {
      key: 'add',
      value: function add(record) {
        record = this.createRecord(record);
        this.data.add(record);
        this.observable.call(this);
        return record;
      }
    }]);

    return DataStore;
  }();

  return new DataStore();
};