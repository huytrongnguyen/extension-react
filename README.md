# Extension React

[![npm version](http://img.shields.io/npm/v/ext-react.svg?style=flat-square)](http://npmjs.org/package/ext-react)
[![Travis build status](https://travis-ci.org/huytrongnguyen/extension-react.svg)](https://travis-ci.org/huytrongnguyen/extension-react)
[![npm download](https://img.shields.io/npm/dm/ext-react.svg?style=flat-square)](https://npmjs.org/package/ext-react)
[![npm license](https://img.shields.io/npm/l/ext-react.svg)](https://npmjs.org/package/ext-react)

## Introduction

Components are the heart of React's powerful, declarative programming model. Extension React is a library that build on top of React to help you build data-intensive, cross-platform web apps for desktops, tablets, and smartphones. Many concepts in this library are based on ExtJS, AngularJS, RxJS concepts. This documentation is also copied and re-composed from ExtJS.

## Installation

You'll need both React and Extension React:

[![ext-react](https://nodei.co/npm/ext-react.png?downloadRank=true&downloads=true)](https://npmjs.org/package/ext-react)

You'll also need `babel-polyfill` to use async/await function and `babel-preset-es2017` to use decorator

## Quick Start

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>React CMS</title>
  <link href="/node-modules/ext-react/css/rext.css" rel="stylesheet" />
</head>
<body>
  <script src="/node-modules/ext-react/js/framework.min.js"></script>
  <script src="/js/app.min.js"></script>
</body>
</html>
```

To launch your app, add the following to your `main.js` file

```js
// main.js
import 'babel-polyfill';
import React from 'react';
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

You can also work with async/await function before initial render:

```js
import 'babel-polyfill';
import React from 'react';
import Rext from 'ext-react';
import CommonService from './services/common';
import Viewport from './components/viewport/viewport';

Rext.launch(async () => {
  await CommonService.initApp();
  return <Viewport />;
});
```

## Components

A component in Extension React is the combination of a React Component and a component class that controls a portion of the screen. Here is an example of a component that display a simple string:

```js
// ./components/dashboard/dashboard.js
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
```

```js
// ./components/dashboard/dashboard.view.jsx
import React, { Component } from 'react';

export default class Dashboard extends Component {
  render() {
    return <h1>{this.props.vm.title}</h1>;
  }
}
```

Every component begins with an `@Component` decorator function that takes a *metadata* object. The metadata object describes how the React Component and component class work together. That's mean you can access any property or method of component class via `this.props.vm`. You can rename `vm` to your name by using `componentAs` property in *metadata*. For example:

```js
@Component({
  componentAs: 'dashboard',
  view: DashboardView
})
```

Then you will access properties and methods of component class via `this.props.dashboard`.

## Screen Navigation

`Route` decorator is most basic responsibility is to render UI when a location matches the route’s path.

`Link` provides declarative, accessible navigation around your application.

`HashRouter` uses the hash portion of the URL (i.e. window.location.hash) to keep your UI in sync with the URL.

```js
// main.js
import 'babel-polyfill';
import Rext from 'ext-react';
import Viewport from './components/viewport/viewport';
import Dashboard from './components/dashboard/dashboard';
import Search from './components/search/search';
import Details from './components/search/details';
import NotFound from './components/notfound/notfound';

Rext.launch(<Viewport />);
```

```js
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
```

```js
// ./components/dashboard/dashboard.js
import React, { Component } from 'react';
import { Route } from 'ext-react';

@Route('/')
export default class Dashboard extends Component {
  render() {
    return <section />;
  }
}
```

```js
// ./components/search/search.js
import React, { Component } from 'react';
import { Route } from 'ext-react';

@Route('/')
export default class Search extends Component {
  render() {
    return <section />;
  }
}
```

```js
// ./components/notfound/notfound.js
import React, { Component } from 'react';
import { Route } from 'ext-react';

@Route('/')
export default class NotFound extends Component {
  render() {
    return <h1>Not Found</h1>;
  }
}
```


```js
// ./components/search/detail.js
import React, { Component } from 'react';
import { Route } from 'ext-react';

@Route('/details/:name')
export default class Details extends Component {
  render() {
    return <h1>{this.props.params.name}</h1>;
  }
}
```

## Stores

Stores load data via a `Proxy`. Creating a `Store` is easy - we just tell it the `Proxy` to use for loading and saving its data:

```js
// ./stores/dashboard.js
import { Store } from 'ext-react';

export default Store({
  storeId: 'DashboardStore',
  proxy: {
    url: '/api/dashboard'
  },
  autoLoad: true
});
```

In the example above we configured an AJAX proxy to load data from the url `/api/dashboard`.

Now, just bind a store to the `Component`. When store's data changed, it will fire an event to re-render the `Component`:

```js
// ./components/dashboard/dashboard.js
import { Component } from 'ext-react';
import DashboardView from './dashboard.view';
import DashboardStore from '~/stores/dashboard';

@Component({
  view: DashboardView,
  stores: [DashboardStore]
})
export default class Dashboard {
  constructor() {
    this.title = 'Dashboard';
  }
}
```

You can access store's data via `this.props.stores`. For example:

```js
// ./components/dashboard/dashboard.view.jsx
import React, { Component } from 'react';

export default class Dashboard extends Component {
  render() {
    return <section>
      <h1>{this.props.vm.title}</h1>
      <p>{JSON.stringify(this.props.stores.DashboardStore.data)}</p>
    </section>;
  }
}
```

## Observable

`Observable.create` is an alias for the `Observable` constructor, you can call the `subscribe` function after create the observable. For example:

```js
const observable = Observable.create();

observable.subscribe(store => {
  const { stores } = this.state;
  stores[store.name] = store;
  this.setState(() => ({ stores }));
})
```

Whenever `Observable` is called, all observers will be called:

```js
observable.call(/* observer */);
```

Just as we can add listeners at any time, we can also remove them. This time we use the `unsubscribe` function. To remove a listener, we need a reference to its function.

```js
observable.unsubscribe(fn);
```

`Observable` is used in `@Component` to connect Store and View.

## Core Concepts

  * [The Class System](https://huytrongnguyen.github.io/extension-react/docs/guides/the-class-system)
  * [Data Package](https://huytrongnguyen.github.io/extension-react/docs/guides/data-package)
  * [Events](https://huytrongnguyen.github.io/extension-react/docs/guides/events)
  * [Layouts and Containers](https://huytrongnguyen.github.io/extension-react/docs/guides/layouts-and-containers)
  * [Components](https://huytrongnguyen.github.io/extension-react/docs/guides/components)
  * [Application Architecture](https://huytrongnguyen.github.io/extension-react/docs/guides/application-architecture)
  * [Controlling an Application with Router](https://huytrongnguyen.github.io/extension-react/docs/guides/controlling-an-application-with-router)
  * [ViewModel and Data Binding](https://huytrongnguyen.github.io/extension-react/docs/guides/viewmodel-and-data-binding)

## Application Architecture

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

## API

  * [Rext](https://huytrongnguyen.github.io/extension-react/docs/api/rext)
  * [Model](https://huytrongnguyen.github.io/extension-react/docs/api/model)
  * [Store](https://huytrongnguyen.github.io/extension-react/docs/api/store)

## Examples

  * Source code: [https://github.com/huytrongnguyen/react-cms/tree/master/src](https://github.com/huytrongnguyen/react-cms/tree/master/src)

## Release Notes

### 1.6.x

  * Provide `Dropdown` component
  * Fix issue in routes
  * Update documentation for API

### 1.5.x
  * `React.launch` now works with promise function (and `async/await` syntax)
  * Remove `Rext.application` function
  * Small refactor in `List` (`List([1,2,3])` instead of `List.of([1,2,3])`) and `Map` (`Map({a:1})` instead of `Map.of({a:1})`)
  * Provide `Grid` component and update `Store`, `Model` to support `Grid`
  * Add decorator `withProps` to `render` function
  * Fix issue in `get` and `set` of `Cache`
  * Update documentation for API

### 1.4.x
  * Change `Rext.application` to `Rext.launch`, do not need a separate target `<div id="root"/>` in index.html file.
  * Revise `Container` concept and change to `Component`
  * Provide `Container` component and CSS

### 1.3.x
  * Correct `List`, `Map`
  * Change `Rext.bootstrap` to `Rext.application` and `init` to `launch`
  * Provide `HashRouter` component and `Router` decorator
  * Revise `Store` with new implementation
  * Update README.md

### 1.2.x
  * Fix issue in `router` component
  * Update README.md
  * Improve `Store` and `Observable`
  * Implement `Model`

### 1.1.x
  * Implement `Observable`

### 1.0.x
  * Change params in `bootstrap` function
  * Implement `Store`, `Container` and `Router`

### 0.0.1
  * Define Architecture Overview
  * Implement `bootstrap` function to launch the app

## License

ext-react is released under the MIT license.