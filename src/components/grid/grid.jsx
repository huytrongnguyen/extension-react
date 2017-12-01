import React, { PureComponent } from 'react';
import Ext from '~/core/ext';
import List from '~/core/list';
import { Container } from '~/components/container';
import GridHeader from './header';
import GridBody from './body';

export default class Grid extends PureComponent {
  constructor(props) {
    super(props);
    Ext.initialState(this, {
      columns: List(React.Children.toArray(props.children)).map(child => child.props).collect()
    });
  }

  render() {
    const { store, className, ...others } = this.props;
    return <Container layout="row" className={Ext.className('rx-grid', className)} {...others}>
      <GridHeader {...this.state} />
      <GridBody store={store} {...this.state} />
    </Container>
  }
}