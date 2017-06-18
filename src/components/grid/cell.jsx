import React, { Component } from 'react';
import Ext from '~/core/ext';
import { Field, Dropdown } from '~/components/form';
import withProps from '~/mixin/with-props';
import bind from '~/mixin/bind';

export default class GridCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.record.get(props.dataIndex),
      readOnly: true
    }
    Ext.generateSetter(this.state, this);
  }

  @withProps
  render({ record, rowIndex, dataIndex, className, render, style, editable, ...others }) {
    const { value, readOnly } = this.state;
    if (editable) {
      if (readOnly) {
        return <div className={`rx-grid-cell ${className || ''}`} style={style}
                    onClick={() => this.setReadOnly(false)} { ...others }>
          {render ? render(value, record, dataIndex, rowIndex) : value}
        </div>
      }

      if (editable.type === 'dropdown') {
        return <div className={`rx-grid-cell ${className || ''}`} style={style} { ...others }>
          <Dropdown value={value} store={editable.store} fieldLabel="Card Type" onSelect={rec => this.setValue(rec.data)} onCollapse={value => this.afterEdit(value)} />
        </div>
      }

      return <div className={`rx-grid-cell ${className || ''}`} style={style} { ...others }>
        <Field value={value} autoFocus onChange={value => this.setValue(value)} onBlur={value => this.afterEdit(value)} />
      </div>
    }

    return <div className={`rx-grid-cell ${className || ''}`} style={style} { ...others }>
      {render ? render(value, record, dataIndex, rowIndex) : value}
    </div>
  }

  @bind
  afterEdit(value) {
    const { record, dataIndex } = this.props;
    record.set(dataIndex, value);
    this.setReadOnly(true);
  }
}