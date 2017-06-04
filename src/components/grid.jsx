import React, { Component } from 'react';
import List from '~/core/list';
import Number from '~/core/number';
import Ext from '~/core/ext';
import Observable from '~/mixin/observable';
import withProps from '~/mixin/with-props';
import bind from '~/mixin/bind';
import Container from './container';

export default class extends Component {
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

  componentDidMount() {
    this.resizeGrid();
    Observable.fromEvent(window, 'resize').subscribe(this.resizeGrid);
    const node = Ext.getComp(this),
          header = node.find('.rx-grid-header'),
          body = node.find('.rx-grid-body');
    Observable.fromEvent(body, 'scroll').subscribe(e => header.scrollLeft = body.scrollLeft);
    this.props.store.subscribe(this.reload);
  }

  componentWillUnmount() {
    this.props.store.unsubscribe(this.reload);
  }

  render() {
    const { store } = this.props;
    return <Container className="rx-grid">
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

class GridHeader extends Component {
  @withProps
  render({ columns, headerWidth }) {
    return <section className="rx-grid-header">
      <div className="rx-grid-header-container d-flex flex-row" style={{ width:headerWidth }}>
        {columns && columns.map(col => {
          const { text, className, style, ...others } = col;
          return <div className={`rx-grid-column-header text-center ${className || ''}`} style={style} { ...others }>
            {text || ''}
          </div>
        })}
      </div>
    </section>;
  }
}

class GridBody extends Component {
  @withProps
  render({ columns, bodyWidth, data }) {
    return <Container className="rx-grid-body">
      <section className="rx-grid-view" style={{ width:bodyWidth }}>
        <div style={{ height:1 }} />
        {data && data.map((record, rowIndex) => <GridRow columns={columns} record={record} rowIndex={rowIndex} />)}
      </section>
    </Container>;
  }
}

class GridRow extends Component {
  @withProps
  render({ columns, record, rowIndex }) {
    return <div className="rx-grid-row d-flex flex-row">
      {columns && columns.map(col => {
        const { dataIndex, className, render, style, ...others } = col;
        return <div className={`rx-grid-cell text-sm-center ${className || ''}`} style={style} { ...others }>
          {render ? render(record.get(dataIndex), record, dataIndex, rowIndex) : record.get(dataIndex)}
        </div>
      })}
    </div>
  }
}