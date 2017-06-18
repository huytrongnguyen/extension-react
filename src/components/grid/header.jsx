import React, { Component } from 'react';
import withProps from '~/mixin/with-props';

export default class GridHeader extends Component {
  @withProps
  render({ columns, headerWidth }) {
    return <section className="rx-grid-header">
      <div className="rx-grid-header-container d-flex flex-row" style={{ width:headerWidth }}>
        {columns && columns.map(col => {
          const { text, className, style, ...others } = col;
          return <div className={`rx-grid-column-header text-center ${className || ''}`} style={style} { ...others }>
            {text || ''}
          </div>
        })}
      </div>
    </section>;
  }
}