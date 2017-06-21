import React, { Component } from 'react';
import withProps from '~/mixin/with-props';
import { Checkbox } from '~/components/form';
import GridCell from './cell';

export default class GridRow extends Component {
  @withProps
  render({ checkColumn, columns, record, rowIndex }) {
    return <article className="rx-grid-row d-flex flex-row">
      {checkColumn && <div className="rx-grid-cell text-sm-center" style={{width:26}}>
        <Checkbox />
      </div>}
      {columns && columns.map(col => <GridCell record={record} rowIndex={rowIndex} {...col} />)}
    </article>
  }
}