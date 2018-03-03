import React, { Component } from 'react';
import Ext, { bind } from '~/core/ext';
import { Container } from '~/components/container';
import { Checkbox } from '~/components/form';
import GridCell from './cell';

export default class GridRow extends Component {
  render() {
    const { checkColumn, columns = [], record, ...others } = this.props;
    return <Container layout="column" className="rx-grid-row">
      {checkColumn && <div className="rx-grid-cell text-sm-center" style={{width:Ext.CHECK_COLUMN_WIDTH}}>
        <Checkbox checked={record.selected} onChange={this.toggleSelect} />
      </div>}
      {columns.map(column => <GridCell record={record} {...column} {...others} />)}
    </Container>
  }

  @bind
  toggleSelect() {
    const { record, checkColumn } = this.props;
    if (record.selected) {
        record.setSelected(false);
    } else {
      if (checkColumn !== 'multiple') {
        record.store.getSelectedRecords().each(record => record.setSelected(false));
      }
      record.setSelected(true);
    }
  }
}