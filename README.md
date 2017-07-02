# Extension React

[![npm version](http://img.shields.io/npm/v/ext-react.svg?style=flat-square)](http://npmjs.org/package/ext-react)
[![Travis build status](https://travis-ci.org/huytrongnguyen/extension-react.svg)](https://travis-ci.org/huytrongnguyen/extension-react)
[![npm download](https://img.shields.io/npm/dm/ext-react.svg?style=flat-square)](https://npmjs.org/package/ext-react)
[![npm license](https://img.shields.io/npm/l/ext-react.svg)](https://npmjs.org/package/ext-react)

[![ext-react](https://nodei.co/npm/ext-react.png?downloadRank=true&downloads=true)](https://npmjs.org/package/ext-react)

Extension React is a library that build on top of React, helping you build data-intensive, cross-platform web apps for desktops, tablets, and smartphones.

## Quick Start

### Setup a development enviroment

Use `npm` or `yarn` to install following dependencies:

  * `babel-polyfill`
  * `babel-preset-env`
  * `babel-preset-react`
  * `d3`
  * `font-awesome`
  * `react`
  * `ext-react`

### Create a new project

The following is the recommended directory structure for an Extension React application:

```
+-- node_modules: NPM components
+-- dist
|   +-- app.min.css
|   +-- app.min.js
|   +-- framework.min.js
+-- src
|   +-- css
|   |   +-- _variables.scss: application styles constant values
|   |   +-- app.scss: application styles
|   +-- js
|   |   +-- common: code of shared functions or shared components
|   |   +-- components: code (scripts and views) of every feature should be a sub-directory
|   |   +-- services: code of services
|   |   +-- stores: code of stores
|   |   +-- app.js: main script
+-- gulpfile.babel.js: build scripts (or webpack.config.js if you prefer)
+-- index.html
+-- package.json: NPM package definition
+-- server.js: code of local web server (ExpressJS)
```

Let’s start evaluating the application by looking at index.html

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Extension React Application</title>
  <link href="/node-modules/ext-react/css/rext.min.css" rel="stylesheet" />
  <link href="/dist/app.min.css" rel="stylesheet" />
</head>
<body>
  <script src="/dist/framework.min.js"></script>
  <script src="/dist/app.min.js"></script>
</body>
</html>
```

To launch your app, add the following to your `app.js` file

```js
// app.js
import 'babel-polyfill';
import React from 'react';
import Rext from 'ext-react';
import Viewport from './components/viewport/viewport';

Rext.launch(<Viewport />);
```

## Core Concepts

### Components

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

export default class DashboardView extends Component {
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

### Screen Navigation

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
export default class Detail extends Component {
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

export default class DashboardView extends Component {
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

## Replace `setState` with a setter

Instead of create a function like: `(value) => this.setState(() => ({ value })`, now you can use `this.setValue(value)` to replace for `setState` by using `Rext.generateSetter` function. For example:

```js
import React, { Component } from 'react';
import Rext, { withProps, Field } from 'ext-react';

export default class GridCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      readOnly: true
    }
    Ext.generateSetter(this.state, this);
  }

  @withProps
  render({ className, style, ...others }) {
    const { value, readOnly } = this.state;
    return <div className={`rx-grid-cell ${className || ''}`} style={style} { ...others }>
      <Field value={value} onChange={value => this.setValue(value)} onBlur={() => this.setReadOnly(!readOnly)} />
    </div>
  }
}
```

## Built-in Components

Extension React has several build-in components to support for building responsive web. For example:

### Grid

`Grid` are an excellent way of showing large amounts of tabular data on the client side. Essentially a supercharged <table>, `Grid` makes it easy to fetch, sort and filter large amounts of data.

`Grid` are composed of two main pieces - a `Store` full of data and a set of columns to render.

```js
// app/stores/user.js
import { Store } from 'ext-react'

export default Store({
  storeId: 'UserStore',
  data: [
    { 'name': 'Lisa',  "email":"lisa@simpsons.com",  "phone":"555-111-1224" },
    { 'name': 'Bart',  "email":"bart@simpsons.com",  "phone":"555-222-1234" },
    { 'name': 'Homer', "email":"home@simpsons.com",  "phone":"555-222-1244" },
    { 'name': 'Marge', "email":"marge@simpsons.com", "phone":"555-222-1254" }
  ]
});
```

```js
// app/components//search-result.jsx
import React, { Component } from 'react';
import { Container, Grid } from 'ext-react';
import UserStore from '~/stores/user';

export default class SearchResult extends Component {
  render() {
    return <Container>
      <Grid store={UserStore}>
        <div text="Name" dataIndex="name" />
        <div text="Email" dataIndex="email" />
        <div text="Phone" dataIndex="phone" />
      </Grid>
    </Container>;
  }
}
```

### Dropdown

A `Dropdown` is like a combination of a traditional HTML text `<input>` field and a `<select>` field; the user is able to type freely into the field, and/or pick values from a dropdown selection list.


```js
// app/stores/card-type.js
import { Store } from '@/rext'

export default Store({
  storeId: 'CardTypeStore',
  data: [
    { id: null, code: 'MELEE', name: 'Melee' },
    { id: null, code: 'SHOOT', name: 'Shoot' },
    { id: null, code: 'MAGIC', name: 'Magic' },
  ]
});
```

```js
// app/components//search-form.view.jsx
import React, { Component } from 'react';
import { withProps, Field, Dropdown, Button } from 'ext-react';
import { CardTypeStore } from '~/app/stores/card-type';

export default class SearchFormView extends Component {
  @withProps
  render({ searchForm }) {
    return <section className="form-group form-inline">
      <Field className="mr-sm" />
      <Dropdown store={CardTypeStore} displayField="name" fieldLabel="Card Type" />
      <Button className="primary mr-sm" text="Search" onClick={searchForm.search} />
    </section>;
  }
}
```

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
  * [Grid](https://huytrongnguyen.github.io/extension-react/docs/api/grid)
  * [Dropdown](https://huytrongnguyen.github.io/extension-react/docs/api/dropdown)

## Examples

  * Source code: [https://github.com/huytrongnguyen/react-cms/tree/master/src](https://github.com/huytrongnguyen/react-cms/tree/master/src)

## Release Notes

### 1.6.x
  * Provide `Dropdown` component
  * Support `editable` for `Grid`
  * Add function `Rext.generateSetter` to handle `setState` for each field in state
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