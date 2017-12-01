import React, { PureComponent } from 'react';
import { Container, Grid, Button } from '~/rext';

export default class CardView extends PureComponent {
  componentDidMount() {
    this.props.stores.CardStore.load();
  }
  render() {
    const { stores: { CardStore }, $view: { saveChanges, rejectChanges } } = this.props;
    return <Container className="main container">
      <Grid store={CardStore}>
        <div header="Id" dataIndex="Id" />
        <div header="Name" dataIndex="Name" editable />
        <div header="Type" dataIndex="Type" />
      </Grid>
      <div className="mt-md">
        <Button text="Save Changes" className="mr-md" onClick={saveChanges} />
        <Button text="Reject Changes" onClick={rejectChanges} />
      </div>
    </Container>
  }
}