import React, { Component } from 'react';
import { Route, Container, String } from '~/rext';

@Route('/core-concepts/component')
export default class RextComponent extends Component {
  render() {
    return <Container>
      <div className="panel-header">
        <h1 className="panel-title">Component</h1>
      </div>
      <Container className="panel-body">
        <p>
          A component in Extension React is the combination of a React Component and a component class that controls a portion of the screen.
          Here is an example of a component that display a simple string:
          <pre className="editor">{`// ./components/dashboard/dashboard.js
import { Component } from 'ext-react';
import DashboardView from './dashboard.view';

@Component({
  view: DashboardView
})
export default class Dashboard {
  constructor() {
    this.title = 'Dashboard';
  }
}

// ./components/dashboard/dashboard.view.jsx
import React, { Component } from 'react';

export default class DashboardView extends Component {
  render() {
    return <h1>{this.props.$view.title}</h1>;
  }
}`}</pre>
          Every component begins with an <code>@Component</code> decorator function that takes a <em>metadata</em> object.
          The metadata object describes how the React Component and component class work together.
          That's mean you can access any property or method of component class via <code>this.props.$view</code>.
        </p>
      </Container>
    </Container>
  }
}