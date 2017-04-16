'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _abstractStore = require('./abstract-store');

var _abstractStore2 = _interopRequireDefault(_abstractStore);

var _proxyStore = require('./proxy-store');

var _proxyStore2 = _interopRequireDefault(_proxyStore);

var _pagingStore = require('./paging-store');

var _pagingStore2 = _interopRequireDefault(_pagingStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (config) {
  if (config.pageSize) {
    return new _pagingStore2.default(config);
  }
  if (config.proxy) {
    return new _proxyStore2.default(config);
  }
  return new _abstractStore2.default(config);
};