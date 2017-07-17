import React, { Component } from 'react';
import { Route, Container, String } from '~/rext';

@Route('/architecture')
export default class Architecture extends Component {
  render() {
    return <Container>
      <div className="panel-header">
        <h1 className="panel-title">Application Architecture</h1>
      </div>
      <Container className="panel-body">
        <p>
          Extension React provides support for MVC+VM application architectures. To understand what is MVC+VM, we should start by further defining what the various abbreviations represent.
        </p>
        <p>
          <ul className="list-style-disc">
            <li>
              <strong>(M) Model</strong> - This is the data for your application.
              A set of classes (called “Models”) defines the fields for their data (e.g. a User model with user-name and password fields).
              Models know how to persist themselves through the data package and can be linked to other models via associations.
              Models are normally used in conjunction with Stores to provide data for grids and other components.
              Models are also an ideal location for any data logic that you may need, such as validation, conversion, etc.
            </li>
            <li>
              <strong>(V) View</strong> - A View is any type of component that is visually represented. For instance, grids, trees and panels are all considered Views.
            </li>
            <li>
              <strong>(C) Controller</strong> - Controllers are used as a place to maintain the view's logic that makes your app work.
              This could entail rendering views, routing, instantiating Models, and any other sort of app logic.
            </li>

            <li>
              <strong>(VM) ViewModel</strong> - The ViewModel is a class that manages data specific to the View.
              It allows interested components to bind to it and be updated whenever this data changes.
            </li>
          </ul>
        </p>

        <h3>Models and Stores</h3>
        <p>
          <code>Models</code> and <code>Stores</code> make up the information gateway of your application.
          Most of your data is sent, retrieved, organized, and "modeled" by these two classes.
        </p>
        <p>
          A <code>Model</code> represents any type of persist-able data in your application.
          Each model has fields and functions that allow your application to "model" data.
          Models are most commonly used in conjunction with stores.
          Stores can then be consumed by data-bound components like grids, trees, and charts.
        </p>
        <p>
          A <code>Store</code> is a client side cache of records (instances of a Model class).
          Stores provide functions for querying the records contained within.
        </p>

        <h3>ViewControllers</h3>
        <p>Extension React delivers some exciting improvements for React. To enhance MVC applications, Extension React provides ViewControllers, also called as Component:</p>
        <p>
          <ul className="list-style-disc">
            <li>Simplifies the connection to views using “Component” decorator.</li>
            <li>Leverages the life cycle of views to automatically manage their associated.</li>
            <li>Reduces complexity based on a one-to-one relationship with the managed view.</li>
            <li>Provides encapsulation to make nesting views reliable.</li>
            <li>Retains the ability to select components and listen to their events at any level below the associated view.</li>
          </ul>
        </p>

        <pre className="editor">{`// ./components/search/search.js
import React, { Component } from 'react';
import Rext, { Container } from 'ext-react';
import DataStore from '~/stores/data';
import SearchForm from './search-form';
import SearchResult from './search-result';

export default class Search extends Component {
  render() {
    return <Container>
      <SearchForm />
      <SearchResult />
    </Container>
  }
}

// ./components/search/search-form.js
import { Component } from 'ext-react';
import DataStore from '~/stores/data';
import SearchFormView from './search-form.view';

@Component({
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

  search(criteria) {
    criteria = this.correctCriteria(criteria);
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

  clearSearchResult(comp) {
    DataStore.rejectChanges();
    DataStore.clearData();
    comp.setState(() => (this.criteria));
  }
}

// ./components/search/search-form.view.jsx
import React, { Component } from 'react';
import { Field, Dropdown, Button } from 'ext-react';

export default class SearchFormView extends Component {
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
}

// ./components/search/search-result.jsx
import React, { Component } from 'react';
import { Container, Grid } from 'ext-react';
import DataStore from '~/stores/data';

export default class SearchResult extends Component {
  render() {
    const { name, recordStatuses, purposes, activities, products } = this.state,
          { search, clearSearchResult } = this.props.$view;
    return <Container>
      <Grid store={DataStore}>
        <div text="ID" dataIndex="id" />
        <div text="Name" dataIndex="name" />
        <div text="Status" dataIndex="status" />
        <div text="Purpose" dataIndex="purpose" />
        <div text="Activity" dataIndex="activity" />
        <div text="Product" dataIndex="product" />
      </Grid>
    </Container>
  }
}`}</pre>
      </Container>
    </Container>
  }
}