import React, { Component } from 'react';
import withProps from '~/mixin/with-props';

export default class extends Component {
  @withProps
  render({ columns, record, rowIndex }) {
    return <div className="rx-grid-row d-flex flex-row">
      {columns && columns.map(col => {
        const { dataIndex, className, render, style, ...others } = col;
        return <div className={`rx-grid-cell text-sm-center ${className || ''}`} style={style} { ...others }>
          {render ? render(record.get(dataIndex), record, dataIndex, rowIndex) : record.get(dataIndex)}
        </div>
      })}
    </div>
  }
}