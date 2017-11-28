import React, { PureComponent } from 'react';
import { Container, HashRouter, Link } from '~/rext';

export default class Viewport extends PureComponent {
  render() {
    return <Container>
      <header>
        <div className="brand">Extension React</div>
        <div className="navbar">
          <ul className="navbar-nav mr-auto">
          </ul>
        </div>
      </header>
      <Container layout="column">
        <aside style={{width:300}}>
          <ul>
            <li><Link to="/" text="GETTING STARTED" /></li>
            <li><span className="nav-text">CORE CONCEPTS</span></li>
            <li><Link to="/core-concepts/component" text="Component" /></li>
            <li><Link to="/core-concepts/data-package" text="Data Package" /></li>
            <li><Link to="/core-concepts/screen-navigation" text="Screen Navigation" /></li>
            <li><Link to="/architecture" text="ARCHITECTURE" /></li>
            <li><span className="nav-text">UI COMPONENTS</span></li>
            <li><Link to="/ui-components/grids" text="Grids" /></li>
            <li><span className="nav-text">API</span></li>
          </ul>
        </aside>
        <Container id="main-container">
          <HashRouter />
        </Container>
      </Container>
      <footer>
        <div className="row text-center">&copy; 2017 huytrongnguyen</div>
      </footer>
    </Container>
  }
}