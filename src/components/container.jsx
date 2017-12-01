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