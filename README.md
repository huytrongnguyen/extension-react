# Extension React

[![npm version](http://img.shields.io/npm/v/ext-react.svg?style=flat-square)](http://npmjs.org/package/ext-react)
[![Travis build status](https://travis-ci.org/huytrongnguyen/extension-react.svg)](https://travis-ci.org/huytrongnguyen/extension-react)
[![npm download](https://img.shields.io/npm/dm/ext-react.svg?style=flat-square)](https://npmjs.org/package/ext-react)
[![npm license](https://img.shields.io/npm/l/ext-react.svg)](https://npmjs.org/package/ext-react)

Extension React is a JavaScript library that build on top of React

## Installation

You'll need both React and Extension React:

[![ext-react](https://nodei.co/npm/ext-react.png?downloadRank=true&downloads=true)](https://npmjs.org/package/ext-react)

You'll also need `babel-polyfill` to use async/await function and `babel-preset-es2017` to use decorator

## Getting Started

Getting started with Extension React couldn't be easier. With a single command, you'll have a fully functional "universal" starter application that can be run on a local web server.

### 1. Application Structure

Although not mandatory, all suggestions listed below should be considered as best-practice guidelines to keep your application well organized, extensible and maintainable. The following is the recommended directory structure for an Extension React application:

```
+-- node_modules: NPM components
+-- src
|   +-- css
|   |   +-- _variables.scss: application styles constant values
|   |   +-- app.scss: application styles
|   +-- js
|   |   +-- common: code of shared function
|   |   +-- components: code (scripts and views) of every feature should be a sub-directory
|   |   +-- services: code of services
|   |   +-- stores: code of stores
|   |   +-- ux: code of shared components
|   |   +-- main.js: main script
+-- gulpfile.babel.js: build scripts
+-- index.html: application page
+-- package.json: NPM package definition
+-- server.js: code of local web server (ExpressJS)
```

Based on this seed structure, you're ready to make any change to build your application.

For example: [https://github.com/huytrongnguyen/extension-react/tree/master/example](https://github.com/huytrongnguyen/extension-react/tree/master/example)

###  2. Load application with `Rext.launch`

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

### 3. Screen Navigation

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

## Core Concepts

### 1. Layouts and Containers

The layout system is one of the most powerful parts of Ext JS. It handles the sizing and positioning of every Component in your application.

Extenstion React provides a wide range of useful Components out of the box, and any `Component` can easily be extended to create a customized component.

#### 1.1 Container

Applications are made up of lots of components, usually nested inside one another. Containers allow you to render and arrange child Components inside them.

Most apps have a single top-level Container called a Viewport, which takes up the entire screen. Inside of this are child components.

```js
import React, { Component } from 'react';
import { Container, HashRouter } from '@/rext';
import Header from './header';
import Side from './side';
import Nav from './nav';
import Footer from './footer';

export default class Viewport extends Component {
  render() {
    return (<Container>
      <Header />
      <Container hbox>
        <Side />
        <Container id="main-container">
          <Nav />
          <HashRouter />
        </Container>
      </Container>
      <Footer />
    </Container>);
  }
}
```

Layouts determine how the child components should be laid out on the screen. By default, `Container` use VBox layout. If you need to use HBox layout, add `hbox` property to `Container` component.

#### 1.2 Grid

(Under Construction)

### 2. Components

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

export default class Dashboard extends Component {
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
    </section>
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

### 3. Data Package

The data package is what loads and saves all of the data in your application.

#### 3.1 Models

The centerpiece of the data package is `Model` which represents an entity in an application. (Under Construction)

#### 3.2 Stores

Models are typically used with a `Store`, which is basically a collection of records. Creating a `Store` and loading its data is simple:

```js
import { Store } from 'ext-react'

export default Store({
  storeId: 'DashboardStore',
  proxy: {
    url: '/api/dashboard'
  },
  autoLoad: true
})
```

In the example above we configured an AJAX proxy to load data from the url `/api/dashboard`.

Stores load data via ```proxy``` with this following structure:

```js
{
  url:    /* The URL from which to request the data object */,
  method: /* The default HTTP method to be used for requests. If not set, GET will be used. */
  params: /* Request parameters sent as json data */
  reader: /* Use to decode the server's response */
}
```

#### 3.3 Validations

Models also provide a bevy of support for validating data. (Under Construction)

### 4. Events

Events fire whenever something interesting happens to one of your Classes.

#### 4.1 Adding Observers

`Observable.create` is an alias for the `Observable` constructor, you can call the `subscribe` function after create the observable. For example:

```js
const observable = Observable.create()

observable.subscribe(store => {
  const { stores } = this.state
  stores[store.name] = store
  this.setState(() => ({ stores }))
})
```

#### 4.2 Firing Custom Events

Whenever `Observable` is called, all observers will be called:

```js
observable.call(/* observer */)
```

#### 4.3 Removing Observers

Just as we can add listeners at any time, we can also remove them. This time we use the `ubsubscribe` function. To remove a listener, we need a reference to its function.

```js
observable.ubsubscribe(fn)
```

#### 4.4 Listening for DOM Events

By targeting the DOM element, we can attach many native events to which the component can then listen.

```js
Observable.fromEvent(window, 'hashchange').subscribe(() => this.setState(() => (matchPath())));
```

## Change Logs

### 1.4.0
 * Change `Rext.application` to `Rext.launch`, do not need a separate target `<div id="root"/>` in index.html file.
 * Revise `Container` concept and change to `Component`
 * Provide `Container` component and CSS

### 1.3.3
 * Correct `List`, `Map`
 * Change `Rext.bootstrap` to `Rext.application` and `init` to `launch`
 * Provide `HashRouter` component and `Router` decorator
 * Revise `Store` with new implementation
 * Update README.md

### 1.2.1
 * Fix issue in `router` component
 * Update README.md

### 1.2.0
 * Improve `Store` and `Observable`
 * Implement `Model`

### 1.1.0
 * Implement `Observable`

### 1.0.0
 * Change params in `bootstrap` function
 * Implement `Store`, `Container` and `Router`

### 0.0.1
 * Define Architecture Overview
 * Implement `bootstrap` function to launch the app

## License

ext-react is released under the MIT license.
