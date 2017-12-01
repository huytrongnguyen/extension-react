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
    require('./stores/cards'),
  ],
  views: [
    require('./components/cards'),
  ],
  launch: () => <Viewport />
});`}
      </pre>
      <pre className="mb-md">
{`// ./stores/card
import { Store } from 'ext-react';

export default Store({
  storeId: 'CardStore',
  fields: [ 'Name' ],
  proxy: {
    url: '/data/card.json'
  }
})`}
      </pre>
      <pre className="mb-md">
{`// ./components/cards.js
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
}`}
      </pre>
      <pre>
{`// ./components/cards.view.jsx
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
}`}
      </pre>
    </Container>
  }
}