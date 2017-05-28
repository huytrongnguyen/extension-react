import React, { Component } from 'react';
import { Container } from '@/rext';

export default class extends Component {
  render() {
    return <Container className="panel-body">
      <h1>{this.props.vm.title}</h1>
    </Container>;
  }
}