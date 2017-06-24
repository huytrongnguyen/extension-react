import React, { Component } from 'react';
import Ext from '~/core/ext';
import withProps from '~/mixin/with-props';
import { Checkbox } from '~/components/form';

export default class GridHeader extends Component {
  @withProps
  render({ width, headerWidth, checkColumn, store, columns, headerTpl }) {
    return <section className="rx-grid-header" style={{ width }}>
      <div className="rx-grid-header-container d-flex flex-row" style={{ width:headerWidth }}>
        {checkColumn && <div className="rx-grid-column-header text-sm-center" style={{width:Ext.CHECK_COLUMN_WIDTH}}>
          {(checkColumn === 'multiple') && <Checkbox disabled={store.count() === 0} onClick={() => store.toggleSelectAll()} />}
        </div>}
        {headerTpl && React.createElement(headerTpl, { columns })}
        {(!headerTpl && columns) && columns.map(col => {
          const { text = '', className = '', ...others } = col;
          return <div className={`rx-grid-column-header text-center ${className}`} {...others}>{text}</div>
        })}
      </div>
    </section>;
  }
}