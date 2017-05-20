# Extension React

[![npm version](http://img.shields.io/npm/v/ext-react.svg?style=flat-square)](http://npmjs.org/package/ext-react)
[![Travis build status](https://travis-ci.org/huytrongnguyen/extension-react.svg)](https://travis-ci.org/huytrongnguyen/extension-react)
[![npm download](https://img.shields.io/npm/dm/ext-react.svg?style=flat-square)](https://npmjs.org/package/ext-react)
[![npm license](https://img.shields.io/npm/l/ext-react.svg)](https://npmjs.org/package/ext-react)

## Introduction

Components are the heart of React's powerful, declarative programming model. Extension React is a library that build on top of React to help you build data-intensive, cross-platform web apps for desktops, tablets, and smartphones. Many concepts in this library are based on ExtJS, AngularJS, RxJS concepts.

## Installation

You'll need both React and Extension React:

[![ext-react](https://nodei.co/npm/ext-react.png?downloadRank=true&downloads=true)](https://npmjs.org/package/ext-react)

You'll also need `babel-polyfill` to use async/await function and `babel-preset-es2017` to use decorator

## Getting Started

Getting started with Extension React couldn't be easier. With a single command, you'll have a fully functional "universal" starter application that can be run on a local web server.

### Application Structure

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

### Load application with `Rext.launch`

To launch your app, add the following to your `main.js` file

```js
import 'babel-polyfill';
import Rext from 'ext-react';
import Viewport from './components/viewport/viewport';
import Dashboard from './components/dashboard/dashboard';
import Search from './components/search/search';
import NotFound from './components/notfound/notfound';

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
import React, { Component } from 'react'
import { Link, HashRouter } from 'ext-react'

export default class Viewport extends Component {
  render() {
    return <section>
      <Link to="/">Dashboard</Link>
      <Link to="/search">Search</Link>
      <Link to="/details/huynguyen">Details</Link>
      <HashRouter />
    </section>
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

## Examples

 * Application: [https://huytrongnguyen.github.io/extension-react/example](https://huytrongnguyen.github.io/extension-react/example)
 * Source code: [https://github.com/huytrongnguyen/extension-react/tree/master/example](https://github.com/huytrongnguyen/extension-react/tree/master/example)

## Core Concepts

 * [The Class System](https://huytrongnguyen.github.io/extension-react/docs/guides/the-class-system)
 * [Layouts and Containers](https://huytrongnguyen.github.io/extension-react/docs/guides/layouts-and-containers)
 * [Widgets](https://huytrongnguyen.github.io/extension-react/docs/guides/widgets)
 * [Components](https://huytrongnguyen.github.io/extension-react/docs/guides/components)
 * [Data Package](https://huytrongnguyen.github.io/extension-react/docs/guides/data-package)
 * [Events](https://huytrongnguyen.github.io/extension-react/docs/guides/events)

## Release Notes

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