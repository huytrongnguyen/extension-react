import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return <header>
      <div className="brand">Extension React</div>
      <div className="navbar">
        <ul className="navbar-nav mr-auto">
        </ul>
      </div>
    </header>;
  }
}