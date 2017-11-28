import React, { PureComponent } from 'react';
import { Container, HashRouter, Link } from '~/rext';

export default class Viewport extends PureComponent {
  render() {
    return <Container layout="column">
      <Container className="nav" style={{width:300}}>
        <header>
          <h1 className="brand">Extension React</h1>
          <div className="navbar">
            <ul className="navbar-nav mr-auto">
            </ul>
          </div>
        </header>
        <nav className="mb-auto d-flex">
          <ul>
            <li><Link to="/" text="GETTING STARTED" /></li>
            <li><span className="nav-text">CORE CONCEPTS</span></li>
            <li><Link to="/core-concepts/component" text="Component" /></li>
            <li><Link to="/core-concepts/data-package" text="Data Package" /></li>
            <li><Link to="/core-concepts/screen-navigation" text="Screen Navigation" /></li>
            <li><Link to="/architecture" text="ARCHITECTURE" /></li>
            <li><span className="nav-text">UI COMPONENTS</span></li>
            <li><Link to="/ui-components/grids" text="Grids" /></li>
          </ul>
        </nav>
        <footer>
          <div className="nav-text">&copy; 2017 huytrongnguyen</div>
        </footer>
      </Container>
      <Container id="main-container">
        <HashRouter />
      </Container>
    </Container>
  }
}