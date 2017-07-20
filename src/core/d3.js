import * as d3 from 'd3';
import Ext from './ext';

class D3 {
  constructor(selector) {
    this.color = d3.scaleOrdinal().range(Ext.COLOR_DEFAULTS);
    this.selector = d3.select(selector);
    Ext.initialSetter(this, ['width', 'height', 'data']);

  }

  setSeries(series) {
    const { type, angleField, labelField } = series,
          { selector, width, height, data } = this;

    this.svg = selector .append('svg')
                        .attr('width', width)
                        .attr('height', height)
                        .append('g')
                        .attr('transform', 'translate(' + (width / 2) +  ',' + (height / 2) + ')');

    this.series = d3[type]().value(d => d[angleField]).sort(null);

    this.path = this.svg.selectAll('path')
                        .data(this.series(data))
                        .enter()
                        .append('path')
                        .attr('fill', (d, i) => this.color(d.data[labelField]));

    if ('pie' === type) {
      const radius = Math.min(width, height) / 2,
            donutWidth = series.donut || 0,
            arc = d3.arc()
                    .innerRadius(radius - donutWidth)
                    .outerRadius(radius);

      this.path.attr('d', arc);
    }
  }
}

export default (selector) => new D3(selector);