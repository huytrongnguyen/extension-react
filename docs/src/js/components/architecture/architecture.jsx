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
  proxy: {
    url: '/data/card.json'
  }
})`}
      </pre>
      <pre className="mb-md">
{`// ./components/cards.view.jsx
import React, { PureComponent } from 'react';

export default class CardView extends PureComponent {
  componentDidMount() {
    this.props.stores.CardStore.load();
  }
  render() {
    return <section />
  }
}`}
      </pre>
      <pre>
{`// ./components/cards.js
import { Route, Component } from '~/rext';

@Route('/example/cards')
@Component({
  stores: [ 'CardStore' ],
  view: CardView
})
export default class Card { }`}
      </pre>
    </Container>
  }
}