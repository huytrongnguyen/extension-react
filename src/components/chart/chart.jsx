import React, { PureComponent } from 'react';
import { findDOMNode } from 'react-dom';
import Ext, { bind } from '~/core/ext';
import PieChart from './series/pie';

export default class Chart extends PureComponent {
  constructor(props) {
    super(props);
    Ext.initialState(this, {
      width: 0,
      height: 0,
    });
  }

  componentDidMount() {
    this.resizeChart();
    this.updateChart();
    this.props.store.subscribe(this.updateChart);
  }

  render() {
    const { width, height } = this.state;
    return <svg ref={node => this.node = node} width={width} height={height} />
  }

  @bind
  resizeChart() {
    try {
      const node = findDOMNode(this),
            parent = node.parentElement;
      
      this.setWidth(parent.clientWidth);
      this.setHeight(parent.clientHeight);
    } catch (e) {}
  }

  @bind
  updateChart() {
    const { width, height } = this.state,
          { store, series } = this.props;
    
    series.width = width;
    series.height = height;

    if (series.type === 'pie') {
      PieChart.render(this.node, series, store.map(record => record.getData()).collect());
    }
  }
}