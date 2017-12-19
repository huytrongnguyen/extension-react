import React, { PureComponent } from 'react';
import { bind } from 'ext-react';
import * as d3 from 'd3';
import Series from './series';

class PieChart extends Series {
  render(node, { width, height, angleField, labelField, donut = 0 }, dataset) {
    const svg = d3.select(node)
                  .append('g')
                  .attr('transform', 'translate(' + (width / 2) +  ',' + (height / 2) + ')'),
          arc = d3.arc()
                  .innerRadius(donut)
                  .outerRadius(Math.min(width * 3 / 4, height * 3 / 4) / 2),
          pie = d3.pie()
                  .value(d => d[angleField])
                  .sort(null),
          path = svg.selectAll('path')
                    .data(pie(dataset))
                    .enter()
                    .append('path')
                    .attr('d', arc)
                    .attr('fill', d => this.color(d.data[labelField]));
  }
}

export default new PieChart();