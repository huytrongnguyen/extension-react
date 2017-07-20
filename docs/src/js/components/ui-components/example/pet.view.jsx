import React, { Component } from 'react';
import { Container, Viz } from '~/rext';
import PetStore from '@/stores/pet';

export default class PetView extends Component {
  constructor(props) {
    super(props);
    this.series = {
      type: 'pie',
      donut: 75,
      angleField: 'total',
      labelField: 'pet'
    }
  }

  render() {
    return <Container style={{minHeight:300}}>
      <Viz series={this.series} store={PetStore} />
    </Container>
  }
}