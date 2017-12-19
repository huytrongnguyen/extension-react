import React, { Component } from 'react';
import { render, unmountComponentAtNode, findDOMNode } from 'react-dom';
import Ext from '~/core/ext';
import { Container } from './container';
import { Button } from './form';

class DialogManager {
  createLayer(html) {
    const div = document.createElement('div')
    div.innerHTML = html
    return div.children[0]
  }

  show(dialog) {
    const layer = this.createLayer('<div class="mask"></div>');
    document.body.appendChild(layer);
    render(dialog, layer);
  }

  toast({ delay = 3000, ...others }) {
    const layer = this.createLayer('<div class="notification"></div>');
    document.body.appendChild(layer);
    render(<Toast {...others} />, layer);
    window.setTimeout(() => {
      document.body.removeChild(layer);
    }, delay);
  }

  msgbox({ ...others }) {
    const layer = this.createLayer('<div class="mask"></div>');
    document.body.appendChild(layer);
    render(<MsgBox {...others} />, layer);
  }

  dispose(dialogId) {
    const parentNode = Ext.getEl(dialogId).parentNode;
    unmountComponentAtNode(parentNode);
    document.body.removeChild(parentNode);
  }
}

export default new DialogManager();

export class Dialog extends Component {
  constructor(props) {
    super(props);
    this.dispose = this.dispose.bind(this);
  }

  render() {
    const { title, className, children, closeButton = true, ...others } = this.props;
    return <Container className={`dialog ${className || ''}`} {...others}>
      <div className="dialog-header">
        <p className="dialog-title text-sm-center">{title || ''}</p>
        {closeButton && <span className="tool" onClick={this.dispose}></span>}
      </div>
      <Container className="dialog-body">
        <Container>{children}</Container>
      </Container>
    </Container>;
  }

  dispose() {
    const { onClose } = this.props,
          parentNode = findDOMNode(this).parentNode;
    onClose && onClose();
    unmountComponentAtNode(parentNode);
    document.body.removeChild(parentNode);
  }
}

const alert = {
  success: {
    title: 'Success',
    icon: 'check'
  },
  error: {
    title: 'Error',
    icon: 'times'
  },
  warning: {
    title: 'Warning',
    icon: 'exclamation'
  },
  info: {
    title: 'Information',
    icon: 'info'
  },
};

export class Toast extends Component {
  constructor(props) {
    super(props);
    this.dispose = this.dispose.bind(this);
  }

  render() {
    const { type, message } = this.props;
    return <Container>
      <h6 className="font-weight-bold">{alert[type].title}</h6>
      <div className="d-flex flex-row">
        <div className="toast-icon">
          <i className={`fa fa-2x fa-${alert[type].icon}-circle`}></i>
        </div>
        <div className="toast-content">
          {message}
        </div>
      </div>
    </Container>;
  }

  dispose() {
    const parentNode = findDOMNode(this).parentNode;
    unmountComponentAtNode(parentNode);
    document.body.removeChild(parentNode);
  }
}

export class MsgBox extends Component {
  dispose() {
    unmountComponentAtNode(findDOMNode(this).parentNode);
    $('#react-notify').hide();
  }

  render() {
    const { title, icon, closeButton = true, message, buttons, buttonText = {}, fn } = this.props;
    return <Dialog title={title} closeButton={closeButton}>
      {!icon && <div className="d-flex flex-row">
        {message}
      </div>}
      {icon && <div className="d-flex flex-row">
        <div className="toast-icon mr-sm">
          <i className={`fa fa-2x fa-${icon}-circle`}></i>
        </div>
        <div className="toast-content">
          {message}
        </div>
      </div>}
      {(buttons === 'OKCANCEL') && <div className="text-sm-center mt-sm">
        <Button className="mr-sm" onClick={() => this.dispose()}>{buttonText.cancel || 'Cancel'}</Button>
        <Button onClick={() => {this.dispose(); fn && fn();}}>{buttonText.ok || 'OK'}</Button>
      </div>}
      {(buttons === 'OK') && <div className="text-sm-center mt-sm">
        <Button onClick={() => {this.dispose(); fn && fn();}}>{buttonText.ok || 'OK'}</Button>
      </div>}
    </Dialog>;
  }

  dispose() {
    const parentNode = findDOMNode(this).parentNode;
    unmountComponentAtNode(parentNode);
    document.body.removeChild(parentNode);
  }
}