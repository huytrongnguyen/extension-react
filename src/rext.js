/**
 * index.js
 *
 * This is the entry file for the application, only setup and boilerplate code.
 */

import React from 'react'
import { render } from 'react-dom'
import Ext from './core/ext'
import Ajax from './data/ajax'

class Rext {
  constructor() {
    Ext.extend(Rext.prototype, {
      extend: Ext.extend,
      ajax: (settings) => Ajax.request(settings)
    })
  }

  async bootstrap({ selector, component, onInit }) {
    if (!window.location.hash) {
      window.location.hash = '/'
    }
    await onInit()
    render(React.createElement(component, {}), Ext.getById(selector))
  }
}

export default new Rext

export { default as String } from './core/string'
export { default as List } from './core/list'
export { default as Map } from './core/map'

export { default as Ajax } from './data/ajax'

export { default as Cache } from './data/cache'
export { default as Store } from './data/store'

export { default as Service } from './app/service'
export { default as Container } from './app/container'

export { default as Observable } from './events/observable'

export { Route, Link } from './components/router'
export { Button } from './components/bootstrap'
