import React, { Component } from 'react';
import { Route, Container } from '@/rext';

@Route('/')
export default class GettingStarted extends Component {
  render() {
    return <Container className="panel-body">
      <h1>Getting Started</h1>
    </Container>
  }
}