import * as d3 from 'd3';
import Ext from './ext';

class D3 {
  constructor(selector, width, height) {
    this.color = d3.scaleOrdinal().range(Ext.COLOR_DEFAULTS);
    this.width = width;
    this.height = height;
    this.selector = d3.select(selector);
    this.selector.select('svg').remove();
    this.svg = this.selector.append('svg')
                            .attr('width', this.width)
                            .attr('height', this.height)
                            .append('g');
  }

  setStore(store) {
    this.data = store.getRecords().map(record => record.data).collect();
    return this;
  }

  setSeries(series) {
    this.series = series;

    const { selector, width, height, data, series: { type, angleField, labelField } } = this;

    this.path = this.svg.append('g')
                        .attr('class', `rx-chart-${type}s`)
                        .attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')')
                        .selectAll('path')
                        .data(d3[type]().value(d => d[angleField]).sort(null)(data))
                        .enter()
                        .append('path')
                        .attr('class', (d, i) => `rx-chart-${type} rx-chart-${type}-${d.data[labelField]}`)
                        .attr('fill', (d, i) => this.color(d.data[labelField]))
                        .attr('cursor', 'pointer');

    if ('pie' === type) {
      const radius = Math.min(width, height) / 2,
            donutWidth = series.donut || radius,
            arc = d3.arc()
                    .innerRadius(radius - donutWidth)
                    .outerRadius(radius);

      this.path.attr('d', arc);
    }

    return this;
  }

  setLegend(sprite) {
    const legendRectSize = 12,
          legendSpacing = 4,
          legendHeight = legendRectSize + (legendSpacing * 2),
          legend = this.svg .append('g')
                            .attr('transform', 'translate(' + ((this.width / 2) + (this.height / 2) + (legendRectSize * 2)) + ',' + (legendRectSize * 2) + ')')
                            .selectAll('.rx-chart-legend-item')
                            .data(this.color.domain())
                            .enter()
                            .append('g')
                            .attr('class', d => `rx-chart-legend-item rx-chart-legend-item-${d}`);

    legend.append('rect')
          .attr('width', legendRectSize)
          .attr('height', legendRectSize)
          .attr('x', 0)
          .attr('y', (d, i) => i * legendHeight + (legendHeight * this.color.domain().length / 2))
          .style('fill', this.color)
          .style('stroke', this.color);

    legend.append('text')
          .attr('x', legendRectSize + legendSpacing)
          .attr('y', (d, i) => i * legendHeight + (legendHeight * this.color.domain().length / 2) + legendRectSize)
          .text(d => d);

    return this;
  }

  setTooltip() {
    const tooltip = this.selector.append('div').attr('class', 'rx-chart-tooltip');

    tooltip.append('div').attr('class', 'rx-tooltip');

    this.path.on('mouseover', d => {
      const total = d3.sum(this.data.map(d => d[this.series.angleField])),
            percent = Math.round(1000 * d.data[this.series.angleField] / total) / 10;
      tooltip.select('.rx-tooltip').html(`${d.data[this.series.labelField]}: ${d.data[this.series.angleField]} (${percent}%)`);
      tooltip.style('position', 'absolute').style('display', 'block');
    });
    this.path.on('mousemove', d => tooltip.style('top', (d3.event.layerY + 10) + 'px').style('left', (d3.event.layerX + 10) + 'px'));
    this.path.on('mouseout', () => tooltip.style('display', 'none'));

    return this;
  }
}

export default (selector, width, height) => new D3(selector, width, height);