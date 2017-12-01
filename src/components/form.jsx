import React from 'react';
import Ext from '~/core/ext';

export function Button({ className = '', text, children, ...others }) {
  return <button type="button" className={Ext.className('btn', className)} {...others}>
    {text || children}
  </button>;
}

export function ButtonLink({ text, children, ...others }) {
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