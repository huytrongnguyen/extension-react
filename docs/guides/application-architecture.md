# Application Architecture

At first, you define a simple store:

```js
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

```js
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

Finally, you just define a `FamilyService` like this:

```js
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

When `FamilyStore` is loaded, it will fire an action to `Container` to reload data. Data will be updated in `this.props.stores`.