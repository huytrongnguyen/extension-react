import React, { Component } from 'react';
import { Route, Container } from '@/rext';

export default class Dashboard extends Component {
  render() {
    return (<Container>
      <h1>{this.props.Dashboard.title}</h1>
    </Container>);
  }
}