import React, { PureComponent } from 'react';
import { Route, Container, String } from '~/rext';

@Route('/core-concepts/component')
export default class RextComponent extends PureComponent {
  render() {
    return <Container className="main container scrollable">
      <h1 className="mb-md">Component</h1>
      <p className="mb-md">
        A component in Extension React is the combination of a React Component and a component class that controls a portion of the screen.
        Here is an example of a component that display a simple string:
      </p>
      <pre className="mb-md">
{`// ./components/dashboard/dashboard.view.jsx
import React, { PureComponent } from 'react';

export default class DashboardView extends PureComponent {
  render() {
    return <h1>{this.props.$view.title}</h1>;
  }
}

// ./components/dashboard/dashboard.js
import { Component } from 'ext-react';
import DashboardView from './dashboard.view';

@Component({
  view: DashboardView
})
export default class Dashboard {
  constructor(props) {
    this.title = 'Dashboard';
  }
}`}
      </pre>
      <p className="mb-md">
        Every component begins with an <code>@Component</code> decorator function that takes a <em>metadata</em> object.
        The metadata object describes how the React Component and component class work together.
        That's mean you can access any property or method of component class via <code>this.props.$view</code>.
      </p>
      <p className="mb-md">
        Actually, with the above example, it can be implemented like this:
      </p>
      <pre className="mb-md">
{`import { Component } from 'ext-react';

@Component({
  view: ({ $view }) => <h1>{$view.title}</h1>
})
export default class Dashboard {
  constructor(props) {
    this.title = 'Dashboard';
  }
}`}
      </pre>
      <p className="mb-md">Extension React provide a new way to work with state:</p>
      <pre className="mb-md">
{`// ./components/search/search.view.jsx
import React, { Component } from 'react';
import Rext from 'extension-react';

export default class SearchView extends Component {
  constructor(props) {
    super(props);
    Rext.initialState(this, {
      name: props.name
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setName(nextProps.name);
  }
  ...
}`}
      </pre>
      <p>
        Instead of using <code>{`this.setState((prevState, props) => ({ name: props.name }))`}</code> to update the state,
        you can use <code>this.setName(props.name)</code> to make it easier to understand and more natural by using <code>Rext.initialState</code> function to declare the state in constructor.
      </p>
    </Container>
  }
}