# Getting Started

Getting started with Extension React couldn't be easier. With a single command, you'll have a fully functional "universal" starter application that can be run on a local web server.

##  Load application with `Rext.launch`

To launch your app, add the following to your `main.js` file

```js
import 'babel-polyfill';
import Rext from 'ext-react';
import Viewport from './components/viewport/viewport';

Rext.launch(<Viewport />);
```

The launch function renders the specified component into the document body. If you need to do something before initial render, just return the component to be rendered in a callback function:

```js
Rext.launch(() => {
  // do something before initial render

  // return the component to be rendered
  return (<App/>);
});
```

## Screen Navigation

`Route` decorator is most basic responsibility is to render UI when a location matches the route’s path.

`Link` provides declarative, accessible navigation around your application.

`HashRouter` uses the hash portion of the URL (i.e. window.location.hash) to keep your UI in sync with the URL.

```js
import 'babel-polyfill'
import React, { Component } from 'react'
import { Route, Link, HashRouter } from 'ext-react'

@Route('/')
class Dashboard extends Component {
  render() {
    return <section />
  }
}

@Route('/search')
class Search extends Component {
  render() {
    return <section />
  }
}

@Route('/details/:name')
export default class Details extends Component {
  render() {
    return <h1>{this.props.params.name}</h1>
  }
}

@Route('*')
export default class NotFound extends Component {
  render() {
    return <h1>Not Found</h1>
  }
}

class Viewport extends Component {
  render() {
    return <section>
      <Link to="/">Dashboard</Link>
      <Link to="/search">Search</Link>
      <Link to="/details/huynguyen">Details</Link>
      <HashRouter />
    </section>
  }
}

Rext.application({
  selector: 'react-root',
  viewport: Viewport
})
```