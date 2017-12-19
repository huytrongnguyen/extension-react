import React from 'react';
import Ext from '~/core/ext';

const LAYOUT_CLASS = {
  'column': 'flex-row',
  'row': 'flex-column',
  'fit': '',
}

export function Container({ className = '', layout = 'row', children, ...others }) {
  return <section className={Ext.className('d-flex', LAYOUT_CLASS[layout], className)} {...others}>{children}</section>
}

export function Panel({ title = 'Panel', children, ...others }) {
  return <Container className="panel" {...others}>
    <div className="panel-header">{title}</div>
    <Container className="panel-body">
      <section className="panel-view">{children}</section>
    </Container>
  </Container>
}