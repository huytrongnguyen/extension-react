# Extension React

[![npm version](http://img.shields.io/npm/v/ext-react.svg?style=flat-square)](http://npmjs.org/package/ext-react)
[![Travis build status](https://travis-ci.org/huytrongnguyen/extension-react.svg)](https://travis-ci.org/huytrongnguyen/extension-react)
[![npm download](https://img.shields.io/npm/dm/ext-react.svg?style=flat-square)](https://npmjs.org/package/ext-react)
[![npm license](https://img.shields.io/npm/l/ext-react.svg)](https://npmjs.org/package/ext-react)

Extension React is a JavaScript library that build on top of React

## Installation

You'll need both React and Extension React:

[![ext-react](https://nodei.co/npm/ext-react.png?downloadRank=true&downloads=true)](https://npmjs.org/package/ext-react)

You'll also need `babel-polyfill` to use async/await function

## Getting Started

Getting started with Extension React couldn't be easier. With a single command, you'll have a fully functional "universal" starter application that can be run on a local web server.

### Application Structure

Although not mandatory, all suggestions listed below should be considered as best-practice guidelines to keep your application well organized, extensible and maintainable. The following is the recommended directory structure for an Extension React application:

```
+-- `dist`
|   +-- `index.html`: application page
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
+-- `package.json`: NPM package definition
+-- `server.js`: code of local web server (ExpressJS), should point to `dist` folder
```

Based on this seed structure, you're ready to make any change to build your application.

For example: [https://github.com/huytrongnguyen/react-cms](https://github.com/huytrongnguyen/react-cms)

###  Load application with `Rext.application`

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

### Screen Navigation

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

### Manage application state

```javascript
import { Store } from 'ext-react'

@Store
export default class DashboardStore {
  constructor() {
    this.proxy = {
      url: '/api/dashboard'
    }
  }
}
```

Stores manage the application state for a particular domain within the application. Stores load data via ```proxy```, you can define a proxy follow this structure:

```javascript
{
  url: /* The URL from which to request the data object */,
  method: /* GET, POST, PUT, DELETE. Default is GET */
  params: /* request parameters sent as json data */
}
```

You have some function to work with store such as: ```subscribe```, ```unsubscribe```, ```removeAll```, ```loadData```, ```load```, ```loadPage```, ```updateRecord```, ```commitChanges```, ```rejectChanges```

### Container Components

```javascript
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

### Observer pattern

Then ```Observable.create``` is an alias for the ```Observable``` constructor, you can call the ```subscribe``` function after create the observable. For example:

```javascript
const observable = Observable.create()

observable.subscribe(store => {
  const { stores } = this.state
  stores[store.name] = store
  this.setState(() => ({ stores }))
})
```

Whenever ```Observable``` is called, all observers will be called:

```javascript
observable.call(/* observer */)
```

Also, you can unsubscribe:

```javascript
observable.ubsubscribe(fn)
```

### Separation of Concerns

At first, you define a simple store:

```javascript
import { Store } from 'ext-react'

@Store
export default class FamilyStore {
  constructor() {
    this.proxy = {
      url: '/api/family',
      method: 'post'
    }
  }
}
```

Next, define a search screen with 2 component: search form and search result. Search form will fire an action to search while search result will receive a response from search

```javascript
import React, { Component } from 'react'
import FamilyStore from '~/stores/family'
import FamilyService from '~/services/family'
import { Button } from '~/components/bootstrap'

export default class Search extends Component {
  render() {
    return <section>
      <h1>Search</h1>
      <SearchForm />
      <SearchResult />
    </section>
  }
}

class SearchForm extends Component {
  render() {
    return <section>
      <Button text="Search" onClick={() => this.onSearch()} />
    </section>
  }

  onSearch() {
    FamilyService.search({ status: 1, category: 1 })
  }
}

@Container({
  stores: [FamilyStore]
})
export default class SearchResult extends Component {
  render() {
    return <section></section>
  }
}
```

Finally, you just define a ```FamilyService``` like this:

```javascript
import { Service } from 'ext-react'
import FamilyStore from '~/stores/family'

class FamilyService {
  search(criteria) {
    FamilyStore.proxy.params = criteria
    FamilyStore.load()
  }
}

export default new FamilyService
```

When ```FamilyStore``` is loaded, it will fire an action to ```Container``` to reload data. Data will be updated in ```this.props.stores```.

### Storing Data Locally In The Browser

 * Saving cache

```js
import { Cache } from 'ext-react'

Cache.set('token', { tokenId: 1, accessToken: 'abcdef' })
```

 * Retrieving cache

```js
const token = Cache.get('token') // token = { tokenId: 1, accessToken: 'abcdef' }
```

 * Flushing cache

```js
Cache.remove('token')
Cache.remove() // remove all cached data
```


## License

ext-react is released under the MIT license.
