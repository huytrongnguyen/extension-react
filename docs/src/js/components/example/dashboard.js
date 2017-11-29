import React from 'react';
import { Route, Component } from '~/rext';

@Route('/example/dashboard')
@Component({
  view: ({ $view }) => <h1>{$view.title}</h1>
})
export default class Dashboard {
  constructor() {
    this.title = 'Dashboard';
  }
}