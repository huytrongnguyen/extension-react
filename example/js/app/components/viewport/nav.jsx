import React, { Component } from 'react';

export default class extends Component {
  render() {
    const { ...others } = this.props;
    return <nav {...others} />;
  }
}