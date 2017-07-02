import React, { Component } from 'react';
import { Container, HashRouter } from '@/rext';
import Header from './header';
import Sidebar from './sidebar';
import Footer from './footer';

export default class Viewport extends Component {
  render() {
    return <Container>
      <Header />
      <Container hbox>
        <Sidebar />
        <Container id="main-container">
          <HashRouter />
        </Container>
      </Container>
      <Footer />
    </Container>;
  }
}