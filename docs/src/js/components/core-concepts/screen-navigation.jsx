import React, { Component } from 'react';
import { Route, Container, String } from '~/rext';

@Route('/core-concepts/screen-navigation')
export default class ScreenNavigation extends Component {
  render() {
    return <Container>
      <div className="panel-header">
        <h1 className="panel-title">Screen Navigation</h1>
      </div>
      <Container className="panel-body">
        <ul className="list-style-disc">
          <li><code>Route</code> decorator is most basic responsibility is to render UI when a location matches the route’s path.</li>
          <li><code>Link</code> provides declarative, accessible navigation around your application.</li>
          <li><code>HashRouter</code> uses the hash portion of the URL (i.e. window.location.hash) to keep your UI in sync with the URL.</li>
        </ul>
        <pre className="editor">{`// main.js
import 'babel-polyfill';
import Rext from 'ext-react';
import Viewport from './components/viewport/viewport';
import Search from './components/search/search';
import Details from './components/search/details';
import NotFound from './components/notfound/notfound';

Rext.launch(<Viewport />);

// ./components/viewport/viewport.js
import React, { Component } from 'react';
import { Link, HashRouter } from 'ext-react';

export default class Viewport extends Component {
  render() {
    return <section>
      <Link to="/">Dashboard</Link>
      <Link to="/search">Search</Link>
      <Link to="/details/huynguyen">Details</Link>
      <HashRouter />
    </section>;
  }
}

// ./components/search/search.js
import React, { Component } from 'react';
import { Route } from 'ext-react';

@Route('/')
export default class Search extends Component {
  render() {
    return <section />;
  }
}

// ./components/search/detail.js
import React, { Component } from 'react';
import { Route } from 'ext-react';

@Route('/details/:name')
export default class Detail extends Component {
  render() {
    return <h1>{this.props.params.name}</h1>;
  }
}

// ./components/notfound/notfound.js
import React, { Component } from 'react';
import { Route } from 'ext-react';

@Route('*')
export default class NotFound extends Component {
  render() {
    return <h1>Not Found</h1>;
  }
}`}</pre>
      </Container>
    </Container>
  }
}