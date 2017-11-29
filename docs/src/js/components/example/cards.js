import React, { PureComponent } from 'react';
import { Route, Component } from '~/rext';
import CardStore from './store/card';

class CardView extends PureComponent {
  componentDidMount() {
    CardStore.load();
  }
  render() {console.log('render card view')
    return <section />
  }
}

@Route('/example/cards')
@Component({
  stores: [ CardStore ],
  view: CardView
})
export default class Card { }