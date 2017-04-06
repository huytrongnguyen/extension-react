# Extension React

[![npm version](http://img.shields.io/npm/v/ext-react.svg?style=flat-square)](http://npmjs.org/package/ext-react)
[![Travis build status](https://travis-ci.org/huytrongnguyen/extension-react.svg)](https://travis-ci.org/huytrongnguyen/extension-react)
[![npm download](https://img.shields.io/npm/dm/ext-react.svg?style=flat-square)](https://npmjs.org/package/ext-react)
[![npm license](https://img.shields.io/npm/l/ext-react.svg)](https://npmjs.org/package/ext-react)

Utility Components and Services for React

## Installation

You'll need both React and Extension React:

[![ext-react](https://nodei.co/npm/ext-react.png?downloadRank=true&downloads=true)](https://npmjs.org/package/ext-react)

You'll also need ```babel-polyfill``` to use async/await function

## Features

This is very confusing document, I'll try to provide a clear document later

### Construct and launch the app

At first, you need to define the root component and launch the app by using ```Rext.bootstrap``` function:

```javascript
import React, { Component } from 'react'
import Rext from 'ext-react'
import App from './components/app'
Rext.bootstrap({
  selector: 'react-root',
  component: App,
  init: () => {
    // function will be fired before the App component be rendered
  }
})
```

This file is very stable. Once you've set it up, you may never change it again.

### Screen Navigation

```javascript
import React, { Component } from 'react'
import { Route, Link } from 'ext-react'
import Dashboard from './dashboard/dashboard'
import Search from './search/search'

export default class App extends Component {
  render() {
    return <section>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link to="/search" className="nav-link">Search</Link>
        </li>
      </ul>
      <Route index component={Dashboard} />
      <Route path="/search" component={Search} />
    </section>
  }
}
```

The ```Route``` component is a basic responsibility to render some UI when a location matches the route's path while ```Link``` provides declarative, accessible navigation around your application. It's very similar to ```react-router``` v4.

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
