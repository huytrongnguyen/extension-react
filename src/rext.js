/**
 * index.js
 *
 * This is the entry file for the application, only setup and boilerplate code.
 */

import React from 'react'
import { render } from 'react-dom'
import service from './decorators/service'
import Config from './common/config'
import Xhr from './ajax/xhr'

@service
export default class Rext {
  constructor() {
    this.Config = Config
  }

  bootstrap(Component, selector, fn) {
    this.onInit(fn).then(() => {
      render(<Component />, selector)
    })
  }

  async onInit(fn) {
    return await fn()
  }

  ajax(url, method, params) {
    return Xhr.ajax(url, method, params)
  }
}

export { default as Service } from './decorators/service'
export { default as Container } from './decorators/container'
export { default as Route } from './components/route'
