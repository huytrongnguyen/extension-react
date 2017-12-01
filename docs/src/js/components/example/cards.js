import React, { PureComponent } from 'react';
import { Route, Component } from '~/rext';
import CardView from './cards.view';

@Route('/example/cards')
@Component({
  stores: [ 'CardStore' ],
  view: CardView
})
export default class Card { }