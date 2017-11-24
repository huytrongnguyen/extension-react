import React from 'react';
import Ext from '~/core/ext';

export function Button({ className = '', text, children, ...others }) {
  return <button type="button" className={Ext.className('btn', className)} {...others}>
    {text || children}
  </button>;
}

export function BtnLink({ text, children, ...others }) {
  return <a href="javascript:void(0)" {...others}>{text || children}</a>
}

export function Field({ type = 'text', inline = false, label = '', labelWidth = 3, value, onChange, ...others }) {
  return <article className={Ext.className('form-group', { 'row': inline })}>
  <label className={Ext.className({ [`col-sm-${labelWidth} text-sm-right`]: inline })}>{label}</label>
  <div className={Ext.className({ [`col-sm-${12 - labelWidth}`]: inline })}>
    {(type === 'text') && <TextField value={value} onChange={onChange} {...others} />}
    {(type === 'checkbox') && <Checkbox value={value} onChange={onChange} {...others} />}
    {(type === 'textarea') && <TextArea value={value} onChange={onChange} {...others} />}
  </div>
</article>
}

export function TextField({ value = '', className = '', onChange, ...others }) {
  const handleChange = e => onChange && onChange(e.target.value);
  return <input type="text" className={Ext.className('form-control', className)}
                value={value} onChange={this.handleChange} {...others} />;
}

export function Checkbox({ value = false, onChange, ...others }) {
  const toggleCheck = () => onChange(!value);
  return <input type="checkbox" checked={value} onChange={this.toggleCheck} {...others} />;
}

export function TextArea({ rows = '3', value = '', className = '', onChange, ...others }) {
  const handleChange = e => onChange && onChange(e.target.value);
  return <textarea rows={rows} className={Ext.className('form-control', className)}
                    value={value} onChange={this.handleChange} {...others} />;
}