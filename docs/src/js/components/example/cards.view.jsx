import React, { PureComponent } from 'react';
import { Grid } from '~/rext';

export default class CardView extends PureComponent {
  componentDidMount() {
    this.props.stores.CardStore.load();
  }
  render() {
    const {CardStore } = this.props.stores;
    return <Grid store={CardStore}>
      <div header="Id" dataIndex="Id" />
      <div header="Name" dataIndex="Name" />
      <div header="Type" dataIndex="Type" />
    </Grid>
  }
}