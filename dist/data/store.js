'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

var _ajax = require('./ajax');

var _ajax2 = _interopRequireDefault(_ajax);

var _observable = require('../events/observable');

var _observable2 = _interopRequireDefault(_observable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

exports.default = function (Store) {
  Store = new Store();

  var DataStore = function () {
    function DataStore() {
      _classCallCheck(this, DataStore);

      _ext2.default.extend(DataStore.prototype, {
        name: Store.constructor.name,
        proxy: Store.proxy,
        autoLoad: Store.autoLoad,
        observable: _observable2.default.create(),
        data: []
      });
    }

    _createClass(DataStore, [{
      key: 'clearData',
      value: function clearData() {
        this.data = [];
      }
    }, {
      key: 'loadData',
      value: function loadData(data) {
        _ext2.default.extend(this.data, data);
        this.observable.call(this);
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
                  this.clearData();
                  _context.next = 3;
                  return _ajax2.default.request(proxy || this.proxy);

                case 3:
                  response = _context.sent;

                  response && this.loadData(response);
                  return _context.abrupt('return', this);

                case 6:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function load(_x) {
          return _ref.apply(this, arguments);
        }

        return load;
      }()
    }]);

    return DataStore;
  }();

  return new DataStore();
};