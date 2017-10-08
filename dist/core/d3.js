'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _d = require('d3');

var d3 = _interopRequireWildcard(_d);

var _ext = require('./ext');

var _ext2 = _interopRequireDefault(_ext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var D3 = function () {
  function D3(selector, width, height) {
    _classCallCheck(this, D3);

    this.color = d3.scaleOrdinal().range(_ext2.default.COLOR_DEFAULTS);
    this.width = width;
    this.height = height;
    this.selector = d3.select(selector);
    this.selector.select('svg').remove();
    this.svg = this.selector.append('svg').attr('width', this.width).attr('height', this.height).append('g');
  }

  _createClass(D3, [{
    key: 'setStore',
    value: function setStore(store) {
      this.data = store.getRecords().map(function (record) {
        return record.data;
      }).collect();
      return this;
    }
  }, {
    key: 'setSeries',
    value: function setSeries(series) {
      var _this = this;

      this.series = series;

      var selector = this.selector,
          width = this.width,
          height = this.height,
          data = this.data,
          _series = this.series,
          type = _series.type,
          angleField = _series.angleField,
          labelField = _series.labelField;


      this.path = this.svg.append('g').attr('class', 'rx-chart-' + type + 's').attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')').selectAll('path').data(d3[type]().value(function (d) {
        return d[angleField];
      }).sort(null)(data)).enter().append('path').attr('class', function (d, i) {
        return 'rx-chart-' + type + ' rx-chart-' + type + '-' + d.data[labelField];
      }).attr('fill', function (d, i) {
        return _this.color(d.data[labelField]);
      }).attr('cursor', 'pointer');

      if ('pie' === type) {
        var radius = Math.min(width, height) / 2,
            donutWidth = series.donut || radius,
            arc = d3.arc().innerRadius(radius - donutWidth).outerRadius(radius);

        this.path.attr('d', arc);
      }

      return this;
    }
  }, {
    key: 'setLegend',
    value: function setLegend(sprite) {
      var _this2 = this;

      var legendRectSize = 12,
          legendSpacing = 4,
          legendHeight = legendRectSize + legendSpacing * 2,
          legend = this.svg.append('g').attr('transform', 'translate(' + (this.width / 2 + this.height / 2 + legendRectSize * 2) + ',' + legendRectSize * 2 + ')').selectAll('.rx-chart-legend-item').data(this.color.domain()).enter().append('g').attr('class', function (d) {
        return 'rx-chart-legend-item rx-chart-legend-item-' + d;
      });

      legend.append('rect').attr('width', legendRectSize).attr('height', legendRectSize).attr('x', 0).attr('y', function (d, i) {
        return i * legendHeight + legendHeight * _this2.color.domain().length / 2;
      }).style('fill', this.color).style('stroke', this.color);

      legend.append('text').attr('x', legendRectSize + legendSpacing).attr('y', function (d, i) {
        return i * legendHeight + legendHeight * _this2.color.domain().length / 2 + legendRectSize;
      }).text(function (d) {
        return d;
      });

      return this;
    }
  }, {
    key: 'setTooltip',
    value: function setTooltip() {
      var _this3 = this;

      var tooltip = this.selector.append('div').attr('class', 'rx-chart-tooltip');

      tooltip.append('div').attr('class', 'rx-tooltip');

      this.path.on('mouseover', function (d) {
        var total = d3.sum(_this3.data.map(function (d) {
          return d[_this3.series.angleField];
        })),
            percent = Math.round(1000 * d.data[_this3.series.angleField] / total) / 10;
        tooltip.select('.rx-tooltip').html(d.data[_this3.series.labelField] + ': ' + d.data[_this3.series.angleField] + ' (' + percent + '%)');
        tooltip.style('position', 'absolute').style('display', 'block');
      });
      this.path.on('mousemove', function (d) {
        return tooltip.style('top', d3.event.layerY + 10 + 'px').style('left', d3.event.layerX + 10 + 'px');
      });
      this.path.on('mouseout', function () {
        return tooltip.style('display', 'none');
      });

      return this;
    }
  }]);

  return D3;
}();

exports.default = function (selector, width, height) {
  return new D3(selector, width, height);
};