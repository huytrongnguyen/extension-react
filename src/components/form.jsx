import React, { Component } from 'react';

export class Field extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || ''
    }
  }

  render() {
    const { value } = this.state,
          { className = '', onChange, onKeyPress, ...others } = this.props;
    return <input type="text" value={value} className={`form-control ${className}`}
                  onChange={(e) => this.onChange(e.target.value)}
                  {...others} />;
  }

  onChange(value) {
    this.setState(() => ({ value }));
  }
}