import React, { Component } from 'react';
import withProps from '~/mixin/with-props';
import GridCell from './cell';

export default class GridRow extends Component {
  @withProps
  render({ columns, record, rowIndex }) {
    return <div className="rx-grid-row d-flex flex-row">
      {columns && columns.map(col => <GridCell record={record} rowIndex={rowIndex} {...col} />)}
    </div>
  }
}