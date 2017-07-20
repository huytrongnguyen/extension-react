import React, { Component } from 'react';
import Ext from '~/core/ext';
import D3 from '~/core/d3';
import Observable from '~/mixin/observable';
import withProps from '~/mixin/with-props';
import bind from '~/mixin/bind';
import Container from './container';

export default class Viz extends Component {
  constructor(props) {
    super(props);
    this.guid = Ext.guid('viz', 'body');
    Ext.initialState(this, {
      width: 0,
      height: 0
    });
  }

  componentDidMount() {
    this.props.store.subscribe(this.redraw);
    Observable.fromEvent(window, 'resize').subscribe(this.redraw);
    this.redraw();
  }

  componentWillUnmount() {
    this.props.store.unsubscribe(this.redraw);
    Observable.fromEvent(window, 'resize').unsubscribe(this.redraw);
  }

  @withProps
  render({ store, ...others }) {
    const { width, height } = this.state;
    return <Container {...others}>
      <div id={this.guid} style={{ width, height }} />
    </Container>
  }

  @bind
  redraw() {
    const node = Ext.getComp(this),
          parent = node.parent(),
          width = parent.width(),
          height = parent.height(),
          { series, store } = this.props;

    this.setWidth(parent.width());
    this.setHeight(parent.height());

    D3(`#${this.guid}`) .setWidth(width)
                        .setHeight(height)
                        .setData(store.getRecords().map(record => record.data).collect())
                        .setSeries(series)
                        ;
  }
}