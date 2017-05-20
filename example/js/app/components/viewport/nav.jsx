import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    const { ...others } = this.props;
    return <nav {...others} />;
  }
}