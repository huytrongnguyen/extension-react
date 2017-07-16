import React, { Component } from 'react';
import { Link } from '~/rext'

export default class Sidebar extends Component {
  render() {
    return <aside style={{width:300}}>
      <ul>
        <li><Link to="/" text="GETTING STARTED" /></li>
        <li><span className="nav-text">CORE CONCEPTS</span></li>
        <li><Link to="/core-concepts/component" text="Component" /></li>
        <li><span className="nav-text">API</span></li>
      </ul>
    </aside>
  }
}