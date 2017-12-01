import React, { PureComponent } from 'react';
import { Route, Component } from '~/rext';

class CardView extends PureComponent {
  componentDidMount() {
    this.props.stores.CardStore.load();
  }
  render() {
    return <section />
  }
}

@Route('/example/cards')
@Component({
  stores: [ 'CardStore' ],
  view: CardView
})
export default class Card { }