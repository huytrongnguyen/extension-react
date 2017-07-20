# Extension React

[![npm version](http://img.shields.io/npm/v/ext-react.svg?style=flat-square)](http://npmjs.org/package/ext-react)
[![Travis build status](https://travis-ci.org/huytrongnguyen/extension-react.svg)](https://travis-ci.org/huytrongnguyen/extension-react)
[![Dependency Status](https://david-dm.org/c3js/c3.svg)](https://david-dm.org/huytrongnguyen/extension-react)
[![devDependency Status](https://david-dm.org/c3js/c3/dev-status.svg)](https://david-dm.org/huytrongnguyen/extension-react#info=devDependencies)
[![npm download](https://img.shields.io/npm/dm/ext-react.svg?style=flat-square)](https://npmjs.org/package/ext-react)
[![npm license](https://img.shields.io/npm/l/ext-react.svg)](https://npmjs.org/package/ext-react)

[![ext-react](https://nodei.co/npm/ext-react.png?downloadRank=true&downloads=true)](https://npmjs.org/package/ext-react)

Extension React is a library that build on top of React, helping you build data-intensive, cross-platform web apps for desktops, tablets, and smartphones.

## Quick Start

Use `npm` or `yarn` to install following dependencies:

  * `babel-polyfill`
  * `babel-preset-env`
  * `babel-preset-react`
  * `d3`
  * `font-awesome`
  * `react`
  * `ext-react`

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

  * Full documentation: [https://huytrongnguyen.github.io/extension-react](https://huytrongnguyen.github.io/extension-react)
  * Example: [https://huytrongnguyen.github.io/react-cms](https://huytrongnguyen.github.io/react-cms)

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

// ./components/dashboard/dashboard.view.jsx
import React, { Component } from 'react';

export default class DashboardView extends Component {
  render() {
    return <h1>{this.props.$view.title}</h1>;
  }
}
```

Every component begins with an `@Component` decorator function that takes a *metadata* object. The metadata object describes how the React Component and component class work together. That's mean you can access any property or method of component class via `this.props.$view`.

### Data Package

Stores load data via a `Proxy`. Creating a `Store` is easy - we just tell it the `Proxy` to use for loading and saving its data:

```js
// ./stores/dashboard.js
import { Store } from 'ext-react';

export default Store({
  storeId: 'UserStore',
  proxy: {
    url: '/api/user/search'
  }
});
```

In the example above we configured an AJAX proxy to load data from the url `/api/user/search`.

Now, just bind a store to the `Component`:

```js
import React, { Component } from 'react';
import { bind } from 'ext-react';
import CardStore from '~/stores/card';

export default class Card extends Component {
  componentDidMount() {
    CardStore.clearData();
    CardStore.load();
    CardStore.subscribe(this.reload);
  }

  componentWillUnmount() {
    CardStore.unsubscribe(this.reload);
  }

  render() {
    const records = CardStore.getData();
    return <section>
      <section className="rx-grid-header">
        <div className="d-flex flex-row rx-grid-header-container">
          <div className="rx-grid-column-header text-sm-center" style={{width:'20%'}}>ID</div>
          <div className="rx-grid-column-header text-sm-center" style={{width:'20%'}}>Name</div>
          <div className="rx-grid-column-header text-sm-center" style={{width:'20%'}}>Type</div>
          <div className="rx-grid-column-header text-sm-center" style={{width:'20%'}}>Armor</div>
          <div className="rx-grid-column-header text-sm-center" style={{width:'20%'}}>Weapon</div>
        </div>
      </section>
      <section className="rx-grid-body" style={{overflow:'visible'}}>
        <section className="rx-grid-view">
          {records.map(record => <article className="d-flex flex-row rx-grid-row">
            <div className="rx-grid-cell" style={{width:'20%'}}>{record.get('Id')}</div>
            <div className="rx-grid-cell" style={{width:'20%'}}>{record.get('Name')}</div>
            <div className="rx-grid-cell" style={{width:'20%'}}>{record.get('Type')}</div>
            <div className="rx-grid-cell" style={{width:'20%'}}>{record.get('ArmorUsable')}</div>
            <div className="rx-grid-cell" style={{width:'20%'}}>{record.get('WeaponUsable')}</div>
          </article>)}
        </section>
      </section>
    </section>;
  }

  @bind
  reload() {
    this.forceUpdate();
  }
}
```

In this above example, we use `subscribe` and `unsubscribe` to update the component whenever data's changed. Because Store convert data to Model then you need to use `get` to access data.

### Screen Navigation

`Route` decorator is most basic responsibility is to render UI when a location matches the route’s path.

`Link` provides declarative, accessible navigation around your application.

`HashRouter` uses the hash portion of the URL (i.e. window.location.hash) to keep your UI in sync with the URL.

```js
// main.js
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
}
```

## Built-in Components

Extension React has several build-in components to support for building responsive web. For example:

  * `Grid` are an excellent way of showing large amounts of tabular data on the client side. Essentially a supercharged <table>, `Grid` iss an incredibly versatile component that provides an easy way to display and edit data.

## Release Notes

### [1.7.x]

  * Change default component alias to `$view`
  * Add function `Rext.initialState`
  * Update documentation

### [1.6.x]
  * Provide `Dropdown` component
  * Support `editable` for `Grid`
  * Add function `Rext.generateSetter` to handle `setState` for each field in state
  * Fix issue in routes
  * Update documentation for API

### [1.5.x]
  * `React.launch` now works with promise function (and `async/await` syntax)
  * Remove `Rext.application` function
  * Small refactor in `List` (`List([1,2,3])` instead of `List.of([1,2,3])`) and `Map` (`Map({a:1})` instead of `Map.of({a:1})`)
  * Provide `Grid` component and update `Store`, `Model` to support `Grid`
  * Add decorator `withProps` to `render` function
  * Fix issue in `get` and `set` of `Cache`
  * Update documentation for API

### [1.4.x]
  * Change `Rext.application` to `Rext.launch`, do not need a separate target `<div id="root"/>` in index.html file.
  * Revise `Container` concept and change to `Component`
  * Provide `Container` component and CSS

### [1.3.x]
  * Correct `List`, `Map`
  * Change `Rext.bootstrap` to `Rext.application` and `init` to `launch`
  * Provide `HashRouter` component and `Router` decorator
  * Revise `Store` with new implementation
  * Update README.md

### [1.2.x]
  * Fix issue in `router` component
  * Update README.md
  * Improve `Store` and `Observable`
  * Implement `Model`

### [1.1.x]
  * Implement `Observable`

### [1.0.x]
  * Change params in `bootstrap` function
  * Implement `Store`, `Container` and `Router`

### [0.0.1]
  * Define Architecture Overview
  * Implement `bootstrap` function to launch the app

## License

ext-react is released under the MIT license.