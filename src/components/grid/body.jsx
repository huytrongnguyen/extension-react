import React, { Component } from 'react';
import withProps from '~/mixin/with-props';
import Container from '~/components/container';
import GridRow from './row';

export default class GridBody extends Component {
  @withProps
  render({ columns, width, bodyWidth, data, ...others }) {
    return <Container className="rx-grid-body" style={{ width }}>
      <section className="rx-grid-view" style={{ width:bodyWidth }}>
        <div style={{ height:1 }} />
        {data && data.map((record, rowIndex) => <GridRow rowIndex={rowIndex} record={record} columns={columns} {...others} />)}
      </section>
    </Container>;
  }
}