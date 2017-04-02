import React, { Component } from 'react'

export const Button = ({ type = 'secondary', className = '', text, children, ...others }) => {
  className = ['btn btn-sm', `btn-${type}`, className].join(' ')
  return <button type="button" className={className} {...others}>{text || children}</button>
}