import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Ext from './core/ext';
import List from './core/list';
import Ajax from './data/ajax';

class Rext {
  constructor() {
    this.extend = Ext.extend;
    this.ajax = (settings) => Ajax.request(settings);
    this.generateSetter = Ext.generateSetter;
    this.initialState = Ext.initialState;
  }

  async launch(viewport) {
    if (!window.location.hash) {
      window.location.hash = '/';
    }

    const root = Ext.createElement('<div id="react-root"></div>');
    document.body.appendChild(root);
    Ext.isFunction(viewport) && (viewport = await viewport());
    render(viewport, root);
  }
}

export default new Rext;

export { default as String } from './core/string';
export { default as List } from './core/list';
export { default as Map } from './core/map';

export { default as Ajax } from './data/ajax';

export { default as Cache } from './data/cache';
export { default as Store } from './data/store';
export { default as Model } from './data/model';

export { default as Service } from './app/service';
export { default as Component } from './app/component';

export { default as Observable } from './mixin/observable';
export { default as withProps } from './mixin/with-props';
export { default as bind } from './mixin/bind';

export { default as Route } from './components/router';
export { HashRouter, Link } from './components/router';
export { default as Container } from './components/container';
export { default as Grid } from './components/grid';
export { Field, Button, Dropdown } from './components/form';
export { default as DialogManager } from './components/dialog';
export { Dialog, Toast, MsgBox } from './components/dialog';
export { default as Viz } from './components/viz';