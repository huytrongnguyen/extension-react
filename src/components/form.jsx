import React, { Component } from 'react';
import withProps from '~/mixin/with-props';

export class Field extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || ''
    }
  }

  @withProps
  render({ className = '', onChange, onKeyPress, ...others }) {
    return <input type="text" value={this.state.value} className={`form-control ${className}`}
                  onChange={(e) => this.onChange(e.target.value)}
                  {...others} />;
  }

  onChange(value) {
    this.setState(() => ({ value }));
  }
}

export class Button extends Component {
  @withProps
  render({ text, children, className = '', ...others }) {
    return <button className={`${className}`} {...others}>{text || children}</button>
  }
}