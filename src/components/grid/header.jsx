import React, { Component } from 'react';
import withProps from '~/mixin/with-props';
import { Checkbox } from '~/components/form';

export default class GridHeader extends Component {
  @withProps
  render({ width, headerWidth, checkColumn, total, columns }) {
    return <section className="rx-grid-header" style={{ width }}>
      <div className="rx-grid-header-container d-flex flex-row" style={{ width:headerWidth }}>
        {checkColumn && <div className="rx-grid-column-header text-sm-center" style={{width:26}}>
          {(checkColumn === 'multiple') && <Checkbox disabled={total === 0} />}
        </div>}
        {columns && columns.map(col => {
          const { text = '', className = '', ...others } = col;
          return <div className={`rx-grid-column-header text-center ${className}`} { ...others }>{text}</div>
        })}
      </div>
    </section>;
  }
}