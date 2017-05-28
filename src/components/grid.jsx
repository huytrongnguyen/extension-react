import React, { Component } from 'react';
import List from '~/core/list';
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
      store: props.store
    };
  }

  componentDidMount() {
    this.resizeGrid();
    Observable.fromEvent(window, 'resize').subscribe(this.resizeGrid);
  }

  render() {
    const { columns, width, innerWidth, store } = this.state;
    return <Container className="rx-grid" style={{ width }}>
      <GridHeader {...this.state} />
      <GridBody data={store.getRecords()} {...this.state} />
    </Container>;
  }

  @bind
  resizeGrid() {
    const { columns } = this.state,
          node = Ext.getComp(this),
          parent = node.parent(),
          width = parent.width(),
          height = parent.height(),
          flexColumns = [];

    let innerWidth = List(columns).reduce((innerWidth, col) => {
      if (col.style && col.style.width) {
        innerWidth += col.style.width;
      } else {
        flexColumns.push(col);
      }
      return innerWidth;
    }, 0);

    if (innerWidth < width) {
      const remainWidth = width - innerWidth;
      List(flexColumns).each(col => {
        !col.style && (col.style = {});
        col.style.width = remainWidth / flexColumns.length;
      });
      innerWidth = width;
    }

    this.setState(() => ({ columns, width, innerWidth }));
  }
}

class GridHeader extends Component {
  @withProps
  render({ columns, width, innerWidth }) {
    return <section className="rx-grid-header" style={{ width }}>
      <div className="rx-grid-header-container d-flex flex-row">
        {columns && columns.map(col => {
          const { text, className, style, ...others } = col;
          return <div className={`rx-grid-column-header text-sm-center ${className || ''}`} style={style} { ...others }>
            {text || ''}
          </div>
        })}
      </div>
    </section>;
  }
}

class GridBody extends Component {
  @withProps
  render({ columns, width, innerWidth, data }) {
    return <Container className="rx-grid-body">
      <section className="rx-grid-view">
        <div style={{ width: innerWidth, marginTop: -1 }} />
        {data && data.map(record => <GridRow columns={columns} record={record} />)}
      </section>
    </Container>;
  }
}

class GridRow extends Component {
  @withProps
  render({ columns, record }) {
    return <div className="rx-grid-row d-flex flex-row">
      {columns && columns.map(col => {
        const { dataIndex, className, render, style, ...others } = col;
        return <div className={`rx-grid-cell text-sm-center ${className || ''}`} style={style} { ...others }>
          {render ? render(record[dataIndex], record, dataIndex) : record[dataIndex]}
        </div>
      })}
    </div>
  }
}