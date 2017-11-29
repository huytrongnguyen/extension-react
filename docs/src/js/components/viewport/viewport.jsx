import React from 'react';
import { Container, HashRouter, Link } from '~/rext';

export default function Viewport() {
  return <Container>
    <header className="container"><h1>Extension React</h1></header>
    <Container layout="column">
      <aside style={{width:300}}>
        <ul className="navbar nav">
          <li><Link to="/" text="GETTING STARTED" /></li>
          <li>
            <span className="nav-text">CORE CONCEPTS</span>
            <ul>
              <li><Link to="/core-concepts/component" text="Component" /></li>
              <li><Link to="/core-concepts/data-package" text="Data Package" /></li>
              <li><Link to="/core-concepts/screen-navigation" text="Screen Navigation" /></li>
            </ul>
          </li>
          <li><Link to="/architecture" text="ARCHITECTURE" /></li>
          <li>
            <span className="nav-text">UI COMPONENTS</span>
            <ul>
              <li><Link to="/ui-components/grids" text="Grids" /></li>
            </ul>
          </li>
        </ul>
      </aside>
      <Container><HashRouter /></Container>
    </Container>
    <footer className="container"><p>&copy; 2017 huytrongnguyen</p></footer>
  </Container>
  // return <Container layout="column">
  //   <Container className="nav" style={{width:300}}>
  //     <header>
  //       <h1 className="brand">Extension React</h1>
  //       <div className="navbar">
  //         <ul className="navbar-nav mr-auto">
  //         </ul>
  //       </div>
  //     </header>
  //     <nav className="mb-auto d-flex">
        
  //     </nav>
  //     <footer>
  //       <div className="nav-text">&copy; 2017 huytrongnguyen</div>
  //     </footer>
  //   </Container>
  //   <Container>
  //     <HashRouter />
  //   </Container>
  // </Container>
}