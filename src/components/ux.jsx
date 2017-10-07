import React, { Component } from 'react';
import Ext from '~/core/ext';

const LAYOUT_CLASS = {
  'hbox': 'flex-row',
  'vbox': 'flex-column',
  'fit': '',
}

export class Container extends Component {
  render() {
    const { className = '', layout = 'vbox', children, ...others } = this.props;
    return <section className={Ext.className('d-flex', LAYOUT_CLASS[layout], className)} {...others}>{children}</section>
  }
}