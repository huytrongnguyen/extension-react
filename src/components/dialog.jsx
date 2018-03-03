import React, { PureComponent } from 'react';
import { render, unmountComponentAtNode, findDOMNode } from 'react-dom';
import Ext, { bind } from '~/core/ext';
import { Container } from '~/components/container';
import { Button } from '~/components/form';

class DialogManager {
  show(dialog) {
    const layer = Ext.createElement('<div class="mask"></div>');
    document.body.appendChild(layer);
    render(dialog, layer);
  }

  toast({ delay = 3000, ...others }) {
    // if (Ext.getElement('.notification').isEmpty()) {
      const layer = Ext.createElement('<div class="notification"></div>');
      document.body.appendChild(layer);
      render(<Toast {...others} />, layer);
      setTimeout(() => {
        document.body.removeChild(layer);
      }, delay);
    // }
  }

  msgbox({ ...others }) {
    // if (Ext.getElement('.msgbox').isEmpty()) {
      const layer = Ext.createElement('<div class="mask"></div>');
      document.body.appendChild(layer);
      render(<MsgBox {...others} />, layer);
    // }
  }
}

export default new DialogManager();

export class Dialog extends PureComponent {
  render() {
    const { title = 'Dialog', className = '', closeButton = true, children, ...others } = this.props;
    return <Container layout="row" className={Ext.className('dialog', className)} {...others}>
      <div className="dialog-header">
        <p className="dialog-title text-center">{title}</p>
        {closeButton && <span className="tool" onClick={this.dispose}></span>}
      </div>
      <Container layout="row" className="dialog-body">
        {children}
      </Container>
    </Container>;
  }

  @bind
  dispose() {
    const { onClose } = this.props,
          parent = findDOMNode(this).parentElement;
    onClose && onClose();
    unmountComponentAtNode(parent);
    document.body.removeChild(parent);
  }
}

const ALERT_TYPE = {
  success: { title: 'Success', icon: 'check' },
  error: { title: 'Error', icon: 'times' },
  warning: { title: 'Warning', icon: 'exclamation' },
  info: { title: 'Information', icon: 'info' },
};

class Toast extends PureComponent {
  render() {
    const { type, message } = this.props;
    return <Container layout="row">
      <h4>{ALERT_TYPE[type].title}</h4>
      <Container layout="column">
        <div className="toast-icon"><i className={`fa fa-2x fa-${ALERT_TYPE[type].icon}-circle`}></i></div>
        <div className="toast-content">{message}</div>
      </Container>
    </Container>;
  }

  @bind
  dispose() {
    const parent = findDOMNode(this).parentElement;
    unmountComponentAtNode(parent);
    document.body.removeChild(parent);
  }
}


class MsgBox extends PureComponent {
  render() {
    const { title, icon, message, buttons = 'OK', buttonText = {}, fn } = this.props;
    return <Dialog title={title} closeButton={false} className="msgbox">
      <Container layout="row">
        {!icon && <Container layout="fit">{message}</Container>}
        {icon && <Container layout="column">
          <div className="toast-icon mr-sm"><i className={`fa fa-2x fa-${icon}-circle`}></i></div>
          <div className="toast-content">{message}</div>
        </Container>}
        {(buttons === 'OKCANCEL') && <section className="text-center mt-md">
          <Button className="mr-sm" onClick={() => this.dispose()}>{buttonText.cancel || 'Cancel'}</Button>
          <Button onClick={() => {this.dispose(); fn && fn();}}>{buttonText.ok || 'OK'}</Button>
        </section>}
        {(buttons === 'OK') && <section className="text-center mt-sm">
          <Button onClick={() => {this.dispose(); fn && fn();}}>{buttonText.ok || 'OK'}</Button>
        </section>}
      </Container>
    </Dialog>;
  }

  dispose() {
    const parent = findDOMNode(this).parentElement;
    unmountComponentAtNode(parent);
    document.body.removeChild(parent);
  }
}