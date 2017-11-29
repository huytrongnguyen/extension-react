import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Ext } from './core/ext';

class Rext extends Ext {
  constructor() {
    super();
    // this.Cache = require('./data/cache');
    // this.Model = require('./data/model');
    // this.Observable = require('./reactive/observable');
    // this.DialogManager = require('./components/dialog');
  }

  async application({ launch }) {
    if (launch) {
      const root = this.createElement('<div id="react-root"></div>'),
            viewport = await launch();
      document.body.appendChild(root);
      render(viewport, root);
    }
  }
}

export default new Rext();

//#region Component
export { HashRouter, Link } from './components/router';
export { Container } from './components/container';
// export { Button, ButtonLink, Field, TextField, Checkbox, TextArea } from './components/form';
// export { default as Grid } from './components/grid';
// export { default as ListView } from './components/list';
// export { Dialog } from './components/dialog';
//#endregion

//#region Decorator (or Higher Order Function or Higher Order Component)
export { bind } from './core/ext';
export { Route } from './components/router';
// export { default as Component } from './app/component';
// export { default as Service } from './app/service';
// export { default as Store } from './data/store';
//#endregion