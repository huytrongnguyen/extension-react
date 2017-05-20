# Application Structure

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

# Application Architecture

At first, you define a simple store:

```js
// ~/stores/family.js
import { Store } from 'ext-react';

export default Store({
  storeId: 'FamilyStore',
  proxy: {
    url: '/api/family',
    method: 'post'
  }
});
```

Next, define a search screen with 2 component: search form and search result. Search form will fire an action to search while search result will receive a response from search

```js
// search.jsx
import React, { Component } from 'react';
import SearchForm from './search-form';
import SearchResult from './search-result';

export default class Search extends Component {
  render() {
    return (<section>
      <h1>Search</h1>
      <SearchForm />
      <SearchResult />
    </section>);
  }
}
```

```js
// search-form.jsx
import React, { Component } from 'react';

export default class SearchForm extends Component {
  render() {
    return (<section>
      <input type="button" value="Search" onClick={() => this.onSearch()} />
    </section>);
  }

  onSearch() {
    FamilyService.search({ status: 1, category: 1 });
  }
}
```

```js
// search-result.js
import React from 'react';
import { Component } from 'ext-react';
import FamilyStore from '~/stores/family';

@Component({
  view: SearchResultView,
  stores: [FamilyStore]
})
class SearchResult { }


class SearchResultView extends React.Component {
  render() {
    return (<section />);
  }
}
```

Finally, you just define a `FamilyService` like this:

```js
// ~/services/family.js
import { Service } from 'ext-react';
import FamilyStore from '~/stores/family';

class FamilyService {
  search(criteria) {
    FamilyStore.proxy.params = criteria;
    FamilyStore.load();
  }
}

export default new FamilyService();
```

When `FamilyStore` is loaded, it will fire an action to `Component` to reload data. Data will be updated in `this.props.stores`.