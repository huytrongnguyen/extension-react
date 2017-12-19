import React from 'react';
import Ext from '~/core/ext';
import { Panel } from './container';

export default function Form({ title = 'Form', labelWidth = 4, children, ...others }) {
  const fields = Rext.List(React.Children.toArray(children)).map(child => child.props).collect();

  return <Panel title={title} {...others}>
    {fields.map(props => <Field labelWidth={labelWidth} {...props} />)}
  </Panel>
}

function Field({ label, labelWidth, type = 'text', value, onChange, children, ...others }) {
  if (type === 'action') {
    return <div className="text-center">{children}</div>
  }
  return <article className="row form-group">
    <label className={`col-${labelWidth} form-label text-right`}>{label}</label>
    <div className={`col-${12 - labelWidth}`}>
      {(type === 'text') && <TextField value={value} onChange={onChange} {...others} />}
      {(type === 'checkbox') && <Checkbox checked={value} onCheckChange={onChange} {...others} />}
      {(type === 'textarea') && <TextArea value={value} onChange={onChange} {...others} />}
    </div>
  </article>
}

export function Button({ className = '', text, children, ...others }) {
  return <button type="button" className={Ext.className('btn', className)} {...others}>
    {text || children}
  </button>;
}

export function ButtonLink({ text, children, ...others }) {
  return <a href="javascript:void(0)" {...others}>{text || children}</a>
}

export function TextField({ value = '', className = '', onChange, ...others }) {
  return <input type="text" className={Ext.className('form-control', className)}
                value={value} onChange={e => onChange && onChange(e.target.value)} {...others} />;
}

export function Checkbox({ value = false, onChange, ...others }) {
  return <input type="checkbox" checked={value} onChange={() => onChange(!value)} {...others} />;
}

export function TextArea({ rows = '3', value = '', className = '', onChange, ...others }) {
  return <textarea rows={rows} className={Ext.className('form-control', className)}
                    value={value} onChange={e => onChange && onChange(e.target.value)} {...others} />;
}