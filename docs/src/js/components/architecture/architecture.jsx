import React, { PureComponent } from 'react';
import { Route, Container } from '~/rext';

@Route('/architecture')
export default class Architecture extends PureComponent {
  render() {
    return <Container className="main container scrollable">
      <h1 className="mb-md">Application Architecture</h1>
      <pre className="mb-md">
{`// ./app.js
import 'babel-polyfill';
import React from 'react';
import Rext from 'ext-react';
import Viewport from './components/viewport/viewport';

Rext.application({
  stores: [
    require('./stores/data'),
  ],
  views: [
    require('./components/search/search'),
  ],
  launch: () => <Viewport />
});`}
      </pre>
      <pre className="mb-md">
{`// ./stores/card
import { Store } from 'ext-react';

export default Store({
  storeId: 'DataStore',
  proxy: {
    url: '/data/sample.json'
  }
})`}
      </pre>
      <pre className="mb-md">
{`// ./components/search/search.js
import React from 'react';
import Rext, { Container } from 'ext-react';
import SearchForm from './search-form';
import SearchResult from './search-result';

export function Search() {
  return <Container>
    <SearchForm />
    <SearchResult />
  </Container>
}`}
      </pre>
      <pre className="mb-md">
{`// ./components/search/search-form.js
import { Component, bind } from 'ext-react';
import SearchFormView from './search-form.view';

@Component({
  store: [ 'DataStore' ]
  view: SearchFormView
})
export default class SearchForm {
  constructor() {
    this.criteria = {
      name: '',
      statuses: [],
      purposes: [],
      activities: [],
      products: []
    };
  }

  @bind
  search(criteria) {
    const { DataStore } = this.stores;
    DataStore.rejectChanges();
    Rext.extend(DataStore.proxy, {
      params: criteria,
      fail: (response) => {
        console.err(response.message);
        DataStore.clearData();
      }
    });
    DataStore.load();
  }

  @bind
  clearSearchResult(comp) {
    const { DataStore } = this.stores;
    DataStore.rejectChanges();
    DataStore.clearData();
    comp.setState(() => (this.criteria));
  }
}`}
      </pre>
      <pre className="mb-md">
{`// ./components/search/search-form.view.jsx
import React, { PureComponent } from 'react';
import { Field, Dropdown, Button } from 'ext-react';

export default class SearchFormView extends PureComponent {
  constructor(props) {
    super(props);
    Ext.initialState(this, props.$view.criteria);
  }

  render() {
    const { name, statuses, purposes, activities, products } = this.state,
          { search, clearSearchResult } = this.props.$view;
    return <section>
      <Field value={name} placeholder="Name" onChange={this.setName} />
      <Dropdown multiple options={[]} value={statuses} onBlur={this.setStatuses} />
      <Dropdown multiple options={[]} value={purposes} onBlur={this.setPurposes} />
      <Dropdown multiple options={[]} value={activities} onBlur={this.setActivities} />
      <Dropdown multiple options={[]} value={products} onBlur={this.setProducts} />
      <Button type="primary" text="Search" onClick={() => search(this.state)} />
      <Button text="Clear" onClick={() => clearSearchResult(this)} />
    </section>
  }
}`}
      </pre>
      <pre className="mb-md">
{`// ./components/search/search-result.jsx
import React, { PureComponent } from 'react';
import Rext, { Container, Grid } from 'ext-react';

export default class SearchResult extends PureComponent {
  constructor() {
    this.DataStore = Rext.StoreManager.get('DataStore');
  }

  render() {
    const { name, recordStatuses, purposes, activities, products } = this.state,
          { search, clearSearchResult } = this.props.$view;
    return <Container>
      <Grid store={this.DataStore}>
        <div text="ID" dataIndex="id" />
        <div text="Name" dataIndex="name" />
        <div text="Status" dataIndex="status" />
        <div text="Purpose" dataIndex="purpose" />
        <div text="Activity" dataIndex="activity" />
        <div text="Product" dataIndex="product" />
      </Grid>
    </Container>
  }
}`}
      </pre>
    </Container>
  }
}