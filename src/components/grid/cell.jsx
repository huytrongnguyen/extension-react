import React, { Component } from 'react';
import Ext from '~/core/ext';
import { Field, Dropdown } from '~/components/form';
import withProps from '~/mixin/with-props';
import bind from '~/mixin/bind';

export default class GridCell extends Component {
  constructor(props) {
    super(props);
    const { record, dataIndex } = props;
    this.state = {
      value: dataIndex ? record.get(dataIndex) : '',
      readOnly: true
    }
    Ext.generateSetter(this.state, this);
  }

  componentDidMount() {
    this.props.record.store.subscribe(this.reload);
  }

  componentWillUnmount() {
    this.props.record.store.unsubscribe(this.reload);
  }

  @withProps
  render({ className = '', style = {}, render, record, dataIndex, rowIndex, editable, ...others }) {
    const { value, readOnly } = this.state,
          cls = Ext.className(['rx-grid-cell', className, {'modified': dataIndex && record.isModified(dataIndex)}]);
    if (editable) {
      if (readOnly) {
        return <div className={cls} style={style} onClick={() => this.setReadOnly(false)} {...others}>
          {render ? render(value, record, dataIndex, rowIndex) : value}
        </div>
      } else if (editable.type === 'dropdown') {
        return <div className={cls} style={style} { ...others }>
          <Dropdown value={value} store={editable.store} fieldLabel={editable.fieldLabel} onSelect={rec => this.setValue(rec.data)} onCollapse={this.afterEdit} />
        </div>
      } else {
        return <div className={cls} style={style} {...others}>
          <Field value={value} autoFocus onChange={this.setValue} onBlur={this.afterEdit} />
        </div>
      }
    }

    return <div className={cls} style={style} {...others}>
      {render ? render(value, record, dataIndex, rowIndex) : value}
    </div>
  }

  @bind
  reload() {
    const { record, dataIndex } = this.props;
    this.setValue(dataIndex ? record.get(dataIndex) : '');
  }

  @bind
  afterEdit(value) {
    const { record, dataIndex } = this.props;
    record.set(dataIndex, value);
    this.setReadOnly(true);
  }
}