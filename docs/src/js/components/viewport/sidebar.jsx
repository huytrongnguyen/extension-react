import React, { Component } from 'react';
import { Link } from '~/rext';

export default class Sidebar extends Component {
  render() {
    return <aside style={{width:300}}>
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
  }
}