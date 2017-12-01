import React from 'react';
import Ext from '~/core/ext';

export default function GridCell({ className = '', render = value => value, record, dataIndex, rowIndex, ...others }) {
  return <section className={Ext.className('rx-grid-cell', className)} style={{flex:1}} {...others}>
    {render(dataIndex ? record.get(dataIndex) : '', record, dataIndex, rowIndex)}
  </section>
}