import React, { Component } from 'react';
import { render, unmountComponentAtNode, findDOMNode } from 'react-dom';
import Ext from '~/core/ext';
import bind from '~/mixin/bind';
import Container from './container';
import { Button } from './form';

class DialogManager {
  show(dialog) {
    const dom = Ext.append('<div class="mask"></div>');
    render(dialog, dom);
  }

  toast({ delay = 3000, ...others }) {
    const dom = Ext.append('<div class="notification"></div>');
    render(<Toast {...others} />, dom);
    window.setTimeout(() => {
      DialogManager.destroy(dom);
    }, delay);
  }

  msgbox({ ...others }) {
    const dom = Ext.append('<div class="mask"></div>');
    render(<MsgBox {...others} />, dom);
  }

  dispose(dialogId) {
    this.destroy(Ext.getById(dialogId).parentElement);
  }

  destroy(dom) {
    unmountComponentAtNode(parent);
    document.body.removeChild(parent);
  }

  showErrorMsgbox(message) {
    this.msgbox({
      title: 'Error',
      icon: 'times',
      message: message
    });
  }
}

export default new DialogManager();

export class Dialog extends Component {
  constructor(props) {
    super(props);
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

  @bind
  dispose() {
    const { onClose } = this.props,
          parent = Ext.getComp(this).parent();
    onClose && onClose();
    DialogManager.destroy(parent);
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
    DialogManager.destroy(Ext.getComp(this).parent());
  }
}

export class MsgBox extends Component {
  render() {
    const { title, icon, closeButton = true, message, buttons = 'OK', buttonText = {}, fn } = this.props;
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
      <div className="text-sm-center mt-sm">
        {(buttons === 'OKCANCEL') && <Button className="mr-sm" text={buttonText.cancel || 'Cancel'} onClick={() => this.dispose()} />}
        <Button  text={buttonText.ok || 'OK'} onClick={() => {this.dispose(); fn && fn();}} />
      </div>
    </Dialog>;
  }

  dispose() {
    DialogManager.destroy(Ext.getComp(this).parent());
  }
}