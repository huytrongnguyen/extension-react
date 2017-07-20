import React from 'react';
import * as d3 from 'd3';
import { Component } from '~/rext';
import PetView from './pet.view';

@Component({
  view: PetView
})
export default class Pet {
  renderDonutChart() {
    const dataset = [
            { pet: 'Cats', households: 38, total: 93 },
            { pet: 'Dogs', households: 45, total: 79 },
            { pet: 'Fish', households: 13, total: 171 }
          ],
          width = 300,
          height = 300,
          radius = Math.min(width, height) / 2,
          donutWidth = 75,
          colorDefaults = [
            '#94ae0a',
            '#115fa6',
            '#a61120',
            '#ff8809',
            '#ffd13e',
            '#a61187',
            '#24ad9a',
            '#7c7474',
            '#a66111'
          ],
          color = d3.scaleOrdinal().range(colorDefaults),
          svg = d3.select('#donut')
                  .append('svg')
                  .attr('width', width)
                  .attr('height', height)
                  .append('g')
                  .attr('transform', 'translate(' + (width / 2) +  ',' + (height / 2) + ')'),
          arc = d3.arc()
                  .innerRadius(radius - donutWidth)
                  .outerRadius(radius),
          pie = d3.pie()
                  .value(d => d.total)
                  .sort(null),
          path = svg.selectAll('path')
                    .data(pie(dataset))
                    .enter()
                    .append('path')
                    .attr('d', arc)
                    .attr('fill', (d, i) => color(d.data.pet));
    //       legendRectSize = 18,
    //       legendSpacing = 4,
    //       legend = svg.selectAll('.legend')
    //                   .data(color.domain())
    //                   .enter()
    //                   .append('g')
    //                   .attr('class', 'legend')
    //                   .attr('transform', (d, i) => {
    //                     const height = legendRectSize + legendSpacing,
    //                           offset =  height * color.domain().length / 2,
    //                           horz = -2 * legendRectSize,
    //                           vert = i * height - offset;
    //                     return 'translate(' + horz + ',' + vert + ')';
    //                   }),
    //       tooltip = d3.select('#donut')
    //                   .append('div')
    //                   .attr('class', 'tooltip');
    // legend.append('rect').attr('width', legendRectSize).attr('height', legendRectSize).style('fill', color).style('stroke', color);
    // legend.append('text').attr('x', legendRectSize + legendSpacing).attr('y', legendRectSize - legendSpacing).text(d => d);
    // tooltip.append('div').attr('class', 'label');
    // tooltip.append('div').attr('class', 'count');
    // tooltip.append('div').attr('class', 'percent');
    // path.on('mouseover', d => {
    //   const total = d3.sum(dataset.map(d => d.total)),
    //         percent = Math.round(1000 * d.data.total / total) / 10;
    //   tooltip.select('.label').html(d.data.pet);
    //   tooltip.select('.count').html(d.data.total);
    //   tooltip.select('.percent').html(percent + '%');
    //   tooltip.style('position', 'absolute').style('display', 'block');
    // });
    // path.on('mousemove', d => tooltip.style('top', (d3.event.layerY + 10) + 'px').style('left', (d3.event.layerX + 10) + 'px'));
    // path.on('mouseout', () => tooltip.style('display', 'none'));
  }
}