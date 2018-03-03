import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Ext } from './core/ext';
import DialogManager from './components/dialog';
import StoreManager from './data/store-manager';

class Rext extends Ext {
  constructor() {
    super();
    this.StoreManager = StoreManager;
    this.DialogManager = DialogManager;
  }

  async application({ stores, launch }) {
    if (stores) {
      this.List(stores).each(store => {
        store = store.default;
        this.StoreManager.set(store.storeId, store);
      });
    }
    if (launch) {
      const root = this.createElement('<div id="react-root"></div>'),
            viewport = await launch();
      document.body.appendChild(root);
      render(viewport, root);
    }
  }

  showErrorMsgbox(message) {
    this.DialogManager.msgbox({
      title: 'Error',
      icon: 'times',
      message: message || this.UNKNOWN_ERROR_MSG,
      buttons: 'OK'
    });
  }
}

export default new Rext();

//#region Component
export { HashRouter, Link } from './components/router';
export { Container } from './components/container';
export { Button, ButtonLink, Field, TextField, Checkbox, TextArea } from './components/form';
export { default as Grid } from './components/grid/grid';
export { Dialog } from './components/dialog';
//#endregion

//#region Decorator (or Higher Order Function or Higher Order Component)
export { bind, debounce } from './core/ext';
export { Route } from './components/router';
export { default as Application } from './app/application';
export { default as Component } from './app/component';
export { default as Service } from './app/service';
export { default as Store } from './data/store';
//#endregion