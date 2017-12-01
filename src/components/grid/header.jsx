import React from 'react';
import Ext from '~/core/ext';
import { Container } from '~/components/container';

export default function GridHeader({ columns = [] }) {
  return <section className="rx-grid-header">
    <Container layout="column" className="rx-grid-header-container">
      {columns.map(({ header = '', className = '', ...others }) =>
        <div className={Ext.className('rx-grid-header-column text-center', className)} style={{flex:1}} {...others}>
          {header}
        </div>
      )}
      <div style={{width:Ext.SCROLL_WIDTH}} />
    </Container>
  </section>
}