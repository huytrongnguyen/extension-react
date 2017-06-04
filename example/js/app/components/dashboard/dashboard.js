import React from 'react';
import { Route, Component } from '@/rext'
import { Container } from '@/rext';

@Route('/')
@Component({
  view: ({ vm }) => <Container className="panel-body"><h1>{vm.title}</h1></Container>
})
export default class {
  constructor() {
    this.title = 'Dashboard'
  }
}