import React, { Component } from 'react';
import { Container, HashRouter } from '@/rext';
import Header from './header';
import Side from './side';
import Nav from './nav';
import Footer from './footer';

export default class Viewport extends Component {
  render() {
    return <Container>
      <Header />
      <Container hbox>
        <Container id="main-container">
          <Nav />
          <HashRouter />
        </Container>
      </Container>
      <Footer />
    </Container>;
  }
}