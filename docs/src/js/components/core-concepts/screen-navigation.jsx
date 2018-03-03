import React, { PureComponent } from 'react';
import { Route, Container } from '~/rext';

@Route('/core-concepts/screen-navigation')
export default class ScreenNavigation extends PureComponent {
  render() {
    return <Container className="main container scrollable">
      <h1 className="mb-md">Screen Navigation</h1>
      <ul className="mb-md">
        <li><strong><code>Route</code></strong> decorator is most basic responsibility is to render UI when a location matches the route’s path.</li>
        <li><strong><code>Link</code></strong> provides declarative, accessible navigation around your application.</li>
        <li><strong><code>HashRouter</code></strong> uses the hash portion of the URL (i.e. window.location.hash) to keep your UI in sync with the URL.</li>
      </ul>
      <pre className="mb-md">
{`// ./app.js
import 'babel-polyfill';
import React, { PureComponent } from 'react';
import { Application } from 'ext-react';

@Application({
  views: [
    require('./components/viewport/viewport'),
    require('./components/search'),
    require('./components/details'),
    require('./components/notfound'),
  ],
})
export default class App extends PureComponent {
  render() {
    return <Viewport />
  }
}`}
      </pre>
      <pre className="mb-md">
{`// ./components/viewport.js
import React from 'react';
import { Link, HashRouter } from 'ext-react';

export default function Viewport() {
  return <section>
    <Link to="/">Dashboard</Link>
    <Link to="/search">Search</Link>
    <Link to="/details/huynguyen">Details</Link>
    <HashRouter />
  </section>
}`}
      </pre>
      <pre className="mb-md">
{`// ./components/search.js
import React from 'react';
import { Route, Component } from 'ext-react';

@Route('/search')
@Component({
  view: () => <section />
})
export default class Search { }`}
      </pre>
      <pre className="mb-md">
{`// ./components/details.js
import React from 'react';
import { Route, Component } from 'ext-react';

@Route('/details/:name')
@Component({
  view: ({ params }) => <h1>{params.name}</h1>
})
export default class Details { }`}
      </pre>
      <pre className="mb-md">
{`// ./components/notfound.js
import React, { PureComponent } from 'react';
import { Route } from 'ext-react';

@Route('*')
export default class NotFound extends PureComponent {
  render() {
    return <h1>'{this.props.params.route}' doesn't exist</h1>
  }
}`}
      </pre>
    </Container>
  }
}