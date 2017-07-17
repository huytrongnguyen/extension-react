import React, { Component } from 'react';
import { Container, Grid } from '~/rext';
import UserStore from '@/stores/user';

export default class UserGrid extends Component {
  render() {
    return <Container style={{minHeight:180}}>
      <Grid store={UserStore} style={{minHeight:180}}>
        <div text="Name" dataIndex="name" />
        <div text="Email" dataIndex="email" />
        <div text="Phone" dataIndex="phone" />
      </Grid>
    </Container>
  }
}