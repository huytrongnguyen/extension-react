# Getting Started

Getting started with Extension React couldn't be easier. With a single command, you'll have a fully functional "universal" starter application that can be run on a local web server.

## Application Structure

Although not mandatory, all suggestions listed below should be considered as best-practice guidelines to keep your application well organized, extensible and maintainable. The following is the recommended directory structure for an Extension React application:

```
+-- `node_modules`: NPM components
+-- `src`
|   +-- `css`
|   |   +-- `_variables.scss`: application styles constant values
|   |   +-- `app.scss`: application styles
|   +-- `js`
|   |   +-- `common`: code of shared function
|   |   +-- `components`: code (scripts and views) of every feature should be a sub-directory
|   |   +-- `services`: code of services
|   |   +-- `stores`: code of stores
|   |   +-- `ux`: code of shared components
|   |   +-- `main.js`: main script
+-- `gulpfile.babel.js`: build scripts
+-- `index.html`: application page
+-- `package.json`: NPM package definition
+-- `server.js`: code of local web server (ExpressJS)
```

Based on this seed structure, you're ready to make any change to build your application.

For example: [https://github.com/huytrongnguyen/react-cms](https://github.com/huytrongnguyen/react-cms)

##  Load application with `Rext.application`

Loads application and starts it up with given configuration after the page is ready

```js
import 'babel-polyfill'
import Rext from 'ext-react'
import Viewport from './components/viewport/viewport'

Rext.application({
  selector: 'react-root',
  viewport: Viewport,
  launch: () => {
    // Called automatically when the page has completely loaded.
  }
})
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