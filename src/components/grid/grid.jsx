import React, { PureComponent } from 'react';
import { findDOMNode } from 'react-dom';
import { Observable } from 'rxjs';
import Ext, { bind } from '~/core/ext';
import { Container } from '~/components/container';
import GridHeader from './header';
import GridBody from './body';

export default class Grid extends PureComponent {
  constructor(props) {
    super(props);
    Ext.initialState(this, {
      outerWidth: 0,
      headerWidth: 0,
      bodyWidth: 0,
      checkColumn: props.checkColumn,
      columns: Ext.List(React.Children.toArray(props.children)).map(child => child.props).collect(),
    });
    this.onDataChange = () => this.forceUpdate();
  }

  componentDidMount() {
    this.resizeGrid();
    this.props.store.subscribe(this.onDataChange);
    this.resizeEvent = Observable .fromEvent(window, 'resize')
                                  .subscribe(this.resizeGrid);
    this.scrollEvent = Observable .fromEvent(findDOMNode(this).querySelector('.rx-grid-body'), 'scroll')
                                  .subscribe(this.onScroll);
  }

  componentWillReceiveProps(nextProps) {
    this.setColumns(Ext.List(React.Children.toArray(nextProps.children)).map(child => child.props).collect());
  }

  componentWillUnmount() {
    this.resizeEvent.unsubscribe();
    this.scrollEvent.unsubscribe();
  }

  render() {
    const { store, className, noHeader, ...others } = this.props;
    return <Container layout="row" className={Ext.className('rx-grid', className)} {...others}>
      {!noHeader && <GridHeader store={store} {...this.state} />}
      <GridBody store={store} {...this.state} />
    </Container>
  }

  @bind
  resizeGrid() {
    const { columns, columnConfig } = this.state,
          node = findDOMNode(this),
          parent = node.parentElement,
          outerWidth = parent.clientWidth,
          flexColumns = Ext.List();
    let innerWidth = Ext.List(columns).reduce((innerWidth, col) => {
      if (col.style && col.style.width) {
        innerWidth += col.style.width;
      } else {
        flexColumns.add(col);
      }
      return innerWidth;
    }, this.props.checkColumn ? Ext.CHECK_COLUMN_WIDTH : 0);

    this.setOuterWidth(outerWidth);
    this.setHeaderWidth(Math.max(innerWidth, outerWidth));
    this.setBodyWidth(Math.max(innerWidth, outerWidth) - Ext.SCROLL_WIDTH);
  }

  @bind
  onScroll() {
    const node = findDOMNode(this),
          header = node.querySelector('.rx-grid-header');
    if (header) {
      header.scrollLeft = node.querySelector('.rx-grid-body').scrollLeft;
    }
  }
}