import React, { Component } from 'react';
import withProps from '~/mixin/with-props';
import Container from '~/components/container';
import GridRow from './row';

export default class GridBody extends Component {
  @withProps
  render({ columns, bodyWidth, data }) {
    return <Container className="rx-grid-body">
      <section className="rx-grid-view" style={{ width:bodyWidth }}>
        <div style={{ height:1 }} />
        {data && data.map((record, rowIndex) => <GridRow columns={columns} record={record} rowIndex={rowIndex} />)}
      </section>
    </Container>;
  }
}