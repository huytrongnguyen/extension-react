import React, { PureComponent } from 'react';
import { Route, Component, bind } from '~/rext';
import CardView from './cards.view';

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
}