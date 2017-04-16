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

###  2. Load application with `Rext.application`

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

### 1 Container

A `Container` is a special type of `Component` that can contain other `Components`. Containers are the glue that binds an application together.

```js
import React, { Component } from 'react'
import { Container } from 'ext-react'
import DashboardStore from '~/store/dashboard'

@Container({
  stores: [DashboardStore]
})
export default class Dashboard extends Component {
  render() {
    const { data } = this.props.store.DashboardStore
    return <section className="container-fluid">
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

The ```@Container``` decorator will provide a data stores to component's view. Note that you can load multiple data stores in one component, all data stores will be placed in ```props.store```.

### 2. Components

Extenstion React provides a wide range of useful Components out of the box, and any `Component` can easily be extended to create a customized component.

#### 2.1 Grid

(Under Construction)

### 3. Component Layout

`Component` has a `Layout` which defines how it sizes and positions its internal child items. (Under Construction)

### 4. Data Package

The data package is what loads and saves all of the data in your application.

#### 4.1 Models

The centerpiece of the data package is `Model` which represents an entity in an application. (Under Construction)

#### 4.2 Stores

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

```json
{
  url:    /* The URL from which to request the data object */,
  method: /* The default HTTP method to be used for requests. If not set, GET will be used. */
  params: /* Request parameters sent as json data */
  reader: /* Use to decode the server's response */
}
```

#### 4.3 Validations

Models also provide a bevy of support for validating data. (Under Construction)

### 5. Events

Events fire whenever something interesting happens to one of your Classes.

#### 5.1 Adding Observers

`Observable.create` is an alias for the `Observable` constructor, you can call the `subscribe` function after create the observable. For example:

```js
const observable = Observable.create()

observable.subscribe(store => {
  const { stores } = this.state
  stores[store.name] = store
  this.setState(() => ({ stores }))
})
```

#### 5.2 Firing Custom Events

Whenever `Observable` is called, all observers will be called:

```js
observable.call(/* observer */)
```

#### 5.3 Removing Observers

Just as we can add listeners at any time, we can also remove them. This time we use the `ubsubscribe` function. To remove a listener, we need a reference to its function.

```js
observable.ubsubscribe(fn)
```

#### 5.4 Listening for DOM Events

By targeting the DOM element, we can attach many native events to which the component can then listen.

```js
Observable.fromEvent(window, 'hashchange').subscribe(() => this.setState(() => (matchPath())));
```

## License

ext-react is released under the MIT license.
