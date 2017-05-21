# Components

A component controls a patch of screen called a view. You define a component's application logic—what it does to support the view—inside a class. The class interacts with the view through an API of properties and methods. For example:

```js
// dashboard.js
import { Route, Component } from 'ext-react';
import DashboardStore from '~/stores/dashboard';
import DashboardView from './dashboard.view';

@Route('/')
@Component({
  componentAs: 'Dashboard',
  view: DashboardView,
  stores: [DashboardStore]
})
export default class Dashboard {
  constructor() {
    this.title = 'Dashboard';
  }
}
```

You define a component's view with React Component.

```js
// dashboard.view.jsx
import React, { Component } from 'react'

export default class DashboardView extends Component {
  render() {
    const { data } = this.props.stores.DashboardStore
    return <section className="container-fluid">
      <h1>{this.props.Dashboard.title}</h1>
      <table className="table table-sm table-hover table-striped">
        <thead>
          <tr>
            <th>Status</th>
            <th className="text-sm-right">Total Records</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map(item =>
            <tr>
              <td>{item[0]}</td>
              <td className="text-sm-right">{item[1]}</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>;
  }
}
```

Metadata tells Extension React how to process a class and you can attach metadata by using a `Component` decorator:

```js
@Component({
  componentAs: 'Dashboard',
  view: DashboardView,
  stores: [DashboardStore]
})
```

 * `componentAs`: binding the `Component` to the `View`, default is 'vm'. That's mean you can access any property or method of `Component` via `this.props.vm`. For above example, it would be `this.props.Dashboard`.
 * `view`: tell React how to render the component.
 * `stores`: array of stores that the component requires.