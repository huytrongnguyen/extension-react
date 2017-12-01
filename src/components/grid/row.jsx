import React from 'react';
import { Container } from '~/components/container';
import GridCell from './cell';

export default function GridRow({ columns = [], ...others }) {
  return <Container layout="column" className="rx-grid-row">
    {columns.map(column => <GridCell {...column} {...others} />)}
  </Container>
}