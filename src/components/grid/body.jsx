import React from 'react';
import { Container } from '~/components/container';
import GridRow from './row';

export default function GridBody({ outerWidth, bodyWidth, columns = [], store, ...others }) {
  return <Container layout="row" className="rx-grid-body" style={{width:outerWidth}}>
    <section className="rx-grid-view" style={{width:bodyWidth}}>
      <div style={{height:1}} />
      {store.getRecords().map((record, rowIndex) => <GridRow columns={columns} record={record} rowIndex={rowIndex} {...others} />)}
    </section>
  </Container>
}