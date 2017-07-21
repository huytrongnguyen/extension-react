import React, { Component } from 'react';
import { Container, Chart } from '~/rext';
import PetStore from '@/stores/pet';

export default class Pet extends Component {
  render() {
    return <Container hbox className="row" style={{minHeight:300}}>
      <div className="col-6"><Chart store={PetStore} series={{type:'pie',angleField:'total',labelField:'pet'}} /></div>
      <div className="col-6"><Chart store={PetStore} series={{type:'pie',donut:75,angleField:'total',labelField:'pet'}} /></div>
    </Container>
  }
}