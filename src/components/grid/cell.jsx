import React, { PureComponent } from 'react';
import Ext, { bind } from '~/core/ext';
import { TextField } from '~/components/form';

export default class GridCell extends PureComponent {
  constructor(props) {
    super(props);
    const { dataIndex, record } = props;
    Ext.initialState(this, {
      value: dataIndex ? record.get(dataIndex) : '',
      readOnly: true
    });
  }

  componentWillReceiveProps({ dataIndex, record }) {
    this.setValue(dataIndex ? record.get(dataIndex) : '');
  }

  render() {
    const { value, readOnly } = this.state,
          { editable, noMarkDirty, className = '', render = value => value, record, dataIndex, rowIndex, ...others } = this.props,
          cls = Ext.className('rx-grid-cell', className, {'modified': !noMarkDirty && dataIndex && (record.isModified(dataIndex))});

    if (!editable) {
      return <section className={cls} style={{flex:1}} {...others}>
        {render(value, record, dataIndex, rowIndex)}
      </section>
    }
    if (readOnly) {
      return <section className={cls} style={{flex:1}} onClick={() => this.setReadOnly(false)} {...others}>
        {render(value, record, dataIndex, rowIndex)}
      </section>
    }
    return <section className={cls} style={{flex:1}} {...others}>
      <TextField value={value} autoFocus onChange={this.setValue} onBlur={this.afterEdit} />
    </section>
  }

  @bind
  afterEdit() {
    const { value } = this.state,
          { record, dataIndex } = this.props;
    record.set(dataIndex, value);
    this.setReadOnly(true);
  }
}