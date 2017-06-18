import React, { Component } from 'react';
import List from '~/core/list';
import Number from '~/core/number';
import Ext from '~/core/ext';
import Observable from '~/mixin/observable';
import withProps from '~/mixin/with-props';
import bind from '~/mixin/bind';
import Container from './container';
import GridHeader from './grid/header';
import GridBody from './grid/body';
import GridPagingToolbar from './grid/paging-toolbar';

export default class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: List(props.children).map(child => child.props).collect(),
      width: 0,
      innerWidth: 0,
      headerWidth: 0,
      bodyWidth: 0
    };
    this.reload = () => this.forceUpdate();
  }

  componentWillMount() {
    this.props.store.subscribe(this.reload);
    Observable.fromEvent(window, 'resize').subscribe(this.resizeGrid);

  }

  componentDidMount() {
    this.resizeGrid();
    const node = Ext.getComp(this),
          header = node.find('.rx-grid-header'),
          body = node.find('.rx-grid-body');
    Observable.fromEvent(body, 'scroll').subscribe(e => header.scrollLeft = body.scrollLeft);
  }

  componentWillUnmount() {
    this.props.store.unsubscribe(this.reload);
  }

  @withProps
  render({ store, paging }) {
    return <Container className="rx-grid">
      {paging && <GridPagingToolbar store={store} />}
      <GridHeader {...this.state} />
      <GridBody data={store.getData()} {...this.state} />
    </Container>;
  }

  @bind
  resizeGrid() {
    const { columns } = this.state,
          node = Ext.getComp(this),
          parent = node.parent(),
          flexColumns = [];

    let width = parent.width(),
        height = parent.height(),
        innerWidth = List(columns).reduce((innerWidth, col) => {
          if (col.style && col.style.width) {
            innerWidth += col.style.width;
          } else {
            flexColumns.push(col);
          }
          return innerWidth;
        }, 0),
        headerWidth = innerWidth + Ext.SCROLL_WIDTH,
        bodyWidth = innerWidth;

    if (innerWidth < width && flexColumns.length > 0) {
      let remainWidth = width - innerWidth - Ext.SCROLL_WIDTH - Ext.BORDER_WIDTH,
          remainColumn = flexColumns.length;
      List(flexColumns).each(col => {
        !col.style && (col.style = {});
        const width = remainColumn === 1 ? remainWidth : Number.round(remainWidth / remainColumn);
        col.style.width = width;
        remainWidth -= width;
        --remainColumn;
      });
      innerWidth = width;
      headerWidth = width - Ext.BORDER_WIDTH;
      bodyWidth = width - Ext.SCROLL_WIDTH - Ext.BORDER_WIDTH;
    }

    this.setState(() => ({ columns, width, innerWidth, headerWidth, bodyWidth }));
  }
}