import React, { Component } from 'react';
import Ext from '~/core/ext';
import withProps from '~/mixin/with-props';
import bind from '~/mixin/bind';
import { Checkbox } from '~/components/form';
import GridCell from './cell';

export default class GridRow extends Component {
  @withProps
  render({ checkColumn, columns, record, rowIndex }) {
    return <article className={Ext.className(['rx-grid-row d-flex flex-row', {'selected':record.selected}])}>
      {checkColumn && <div className="rx-grid-cell text-sm-center" style={{width:Ext.CHECK_COLUMN_WIDTH}}>
        <Checkbox checked={record.selected} onCheckChange={this.toggleSelect} />
      </div>}
      {columns && columns.map(col => <GridCell record={record} rowIndex={rowIndex} {...col} />)}
    </article>
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