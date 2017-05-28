import React, { Component } from 'react';

export default class extends Component {
  render() {
    const { className = '', hbox, children, ...others } = this.props;
    return <section className={`d-flex flex-${hbox ? 'row' : 'column'} ${className}`} {...others}>{children}</section>;
  }
}