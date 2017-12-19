import * as d3 from 'd3';

export default class Series {
  constructor() {
    this.color = d3.scaleOrdinal().range([
      '#94ae0a',
      '#115fa6',
      '#a61120',
      '#ff8809',
      '#ffd13e',
      '#a61187',
      '#24ad9a',
      '#7c7474',
      '#a66111'
    ]);
  }
}