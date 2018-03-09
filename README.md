# Extension React

[![npm version](http://img.shields.io/npm/v/ext-react.svg?style=flat-square)](http://npmjs.org/package/ext-react)
[![Travis build status](https://travis-ci.org/huytrongnguyen/extension-react.svg)](https://travis-ci.org/huytrongnguyen/extension-react)
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
  * `react`
  * `react-dom`
  * `rxjs`
  * `ext-react`

To launch your app, add the following to your `app.js` file

```js
// ./app.js
import 'babel-polyfill';
import React, { PureComponent } from 'react';
import { Application } from 'ext-react';
import Viewport from './components/viewport/viewport';

@Application()
export default class App extends PureComponent {
  render() {
    return <Viewport />
  }
}
```

## Core Concepts

Full documentation: [https://huytrongnguyen.github.io/extension-react](https://huytrongnguyen.github.io/extension-react)

### Components

A component in Extension React is the combination of a React Component and a component class that controls a portion of the screen. Here is an example of a component that display a simple string:

```js
import React, { PureComponent } from 'react';
import { Component } from 'ext-react';

class DashboardView extends PureComponent {
  render() {
    return <h1>{this.props.$view.title}</h1>;
  }
}

@Component({
  view: DashboardView
})
export default class Dashboard {
  constructor() {
    this.title = 'Dashboard';
  }
}
```

Every component begins with an `@Component` decorator function that takes a *metadata* object. The metadata object describes how the React Component and component class work together. That's mean you can access any property or method of component class via `this.props.$view`.

Actually, with the above example, it can be implemented like this:

```js
import { Component } from 'ext-react';

@Component({
  view: ({ $view }) => <h1>{$view.title}</h1>
})
export default class Dashboard {
  constructor() {
    this.title = 'Dashboard';
  }
}
```

### Data Package

Stores load data via a `Proxy`. Creating a `Store` is easy - we just tell it the `Proxy` to use for loading and saving its data:

```js
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
import React, { PureComponent } from 'react';
import CardStore from '~/stores/card';

export default class Card extends PureComponent {
  constructor(props) {
    super(props);
    this.reload = () => this.forceUpdate();
  }

  componentDidMount() {
    CardStore.clearData();
    CardStore.load();
    CardStore.subscribe(this.reload);
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
}
```

In this above example, we use `subscribe` to update the component whenever data's changed. Because Store convert data to Model then you need to use `get` to access data.

### Screen Navigation

`Route` decorator is most basic responsibility is to render UI when a location matches the route’s path.

`Link` provides declarative, accessible navigation around your application.

`HashRouter` uses the hash portion of the URL (i.e. window.location.hash) to keep your UI in sync with the URL.

```js
// ./app.js
import 'babel-polyfill';
import React, { PureComponent } from 'react';
import { Application } from 'ext-react';
import Viewport from './components/viewport/viewport';

@Application({
  views: [
    require('./components/search'),
    require('./components/details'),
    require('./components/notfound'),
  ],
})
export default class App extends PureComponent {
  render() {
    return <Viewport />
  }
}

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
import React from 'react';
import { Route, Component } from 'ext-react';

@Route('/search')
@Component({
  view: () => <section />
})
export default class Search { }

// /components/search/detail.js
import React from 'react';
import { Route, Component } from 'ext-react';

@Route('/details/:name')
@Component({
  view: ({ params }) => <h1>{params.name}</h1>
})
export default class Details { }

// ./components/notfound/notfound.js
import React, { PureComponent } from 'react';
import { Route } from 'ext-react';

@Route('*')
export default class NotFound extends PureComponent {
  render() {
    return <h1>'{this.props.params.route}' doesn't exist</h1>
  }
}
```

## Built-in Components

Extension React has several build-in components to support for building responsive web. For example:

  * `Grid` are an excellent way of showing large amounts of tabular data on the client side. Essentially a supercharged <table>, `Grid` iss an incredibly versatile component that provides an easy way to display and edit data.

```js
// ./app.js
import 'babel-polyfill';
import React, { PureComponent } from 'react';
import { Application } from 'ext-react';

@Application({
  stores: [
    require('./stores/cards'),
  ],
  views: [
    require('./components/viewport/viewport'),
    require('./components/cards'),
  ],
})
export default class App extends PureComponent {
  render() {
    return <Viewport />
  }
}

// ./stores/card
import { Store } from 'ext-react';

export default Store({
  storeId: 'CardStore',
  fields: [ 'Name' ],
  proxy: {
    url: '/data/card.json'
  }
})

// ./components/cards.js
import { Route, Component } from 'ext-react';

@Route('/example/cards')
@Component({
  stores: [ 'CardStore' ],
  view: CardView
})
export default class Card {
  @bind
  saveChanges() {
    this.stores.CardStore.sync({
      fail: err => console.log(err)
    });
  }

  @bind
  rejectChanges() {
    this.stores.CardStore.rejectChanges();
  }
}

// ./components/cards.view.jsx
import React, { PureComponent } from 'react';
import { Grid } from 'ext-react';

export default class CardView extends PureComponent {
  componentDidMount() {
    this.props.stores.CardStore.load();
  }
  render() {
    const {CardStore } = this.props.stores;
    return <Grid store={CardStore}>
      <div header="Id" dataIndex="Id" />
      <div header="Name" dataIndex="Name" editable />
      <div header="Type" dataIndex="Type" />
    </Grid>
  }
}
```

## Release Notes

### [2.1.1]

  * Using `@Application` to launch the app instead of `Rext.application`
  * `Ajax` should support to use `async`/`await`

### [2.0.1]

  * Change `Rext.launch` to `Rext.application` with new configuration
  * Apply `rxjs`
  * Update scss

### [1.8.0]

  * Refactor `Rext` core
    * Changed in `Ext`, `Rext` is extended from `Ext`
    * Replaced `core/component` with `core/dom`, all the functions like jquery
    * A little bit change in `core/list`, `core/string`
    * Replaced `core/map` with `core/dictionary`
  * Replace `Component` with `PureComponent` in `Link`, `HashRouter`
  * Refactor `Model`
  * Refactor `Store`
    * Separate to multiple class, derived from List: `List` > `AbstractStore` > `ProxyStore` > `Store`
    * Provide StoreManager to initial all stores on first load, support to lookup by store id
  * Using function component instead of class component in `core/container`, `core/form`
  * Update scss

### [1.7.1]

  * Change default component alias to `$view`
  * Add function `Rext.initialState`
  * Update documentation

### [1.6.2]
  * Provide `Dropdown` component
  * Support `editable` for `Grid`
  * Add function `Rext.generateSetter` to handle `setState` for each field in state
  * Fix issue in routes
  * Update documentation for API

### [1.5.0]
  * `React.launch` now works with promise function (and `async/await` syntax)
  * Remove `Rext.application` function
  * Small refactor in `List` (`List([1,2,3])` instead of `List.of([1,2,3])`) and `Map` (`Map({a:1})` instead of `Map.of({a:1})`)
  * Provide `Grid` component and update `Store`, `Model` to support `Grid`
  * Add decorator `withProps` to `render` function
  * Fix issue in `get` and `set` of `Cache`
  * Update documentation for API

### [1.4.4]
  * Change `Rext.application` to `Rext.launch`, do not need a separate target `<div id="root"/>` in index.html file.
  * Revise `Container` concept and change to `Component`
  * Provide `Container` component and CSS

### [1.3.4]
  * Correct `List`, `Map`
  * Change `Rext.bootstrap` to `Rext.application` and `init` to `launch`
  * Provide `HashRouter` component and `Router` decorator
  * Revise `Store` with new implementation
  * Update README.md

### [1.2.1]
  * Fix issue in `router` component
  * Update README.md
  * Improve `Store` and `Observable`
  * Implement `Model`

### [1.1.0]
  * Implement `Observable`

### [1.0.0]
  * Change params in `bootstrap` function
  * Implement `Store`, `Container` and `Router`

### [0.0.1]
  * Define Architecture Overview
  * Implement `bootstrap` function to launch the app

## License

ext-react is released under the MIT license.