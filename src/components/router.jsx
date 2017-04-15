import React, { Component } from 'react'
import Observable from '~/mixin/observable'

const ROUTES = {}

const INDEX_ROUTE = '/'

const getRoute = () => window.location.hash.substring(1) || '/'

const matchPath = () => {
  const route = getRoute()
  return ROUTES[route]
}

export class HashRouter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      component: matchPath()
    }
  }

  componentDidMount() {
    Observable.fromEvent(window, 'hashchange')
    .subscribe(() => this.setState(() => ({ component: matchPath() })))
  }

  render() {
    const { component } = this.state

    if (!component) {
      console.error('component props should not be null')
      return null
    }

    return React.createElement(component)
  }
}


export class Link extends Component {
  constructor(props) {
    super(props)
    this.state = {
      match: matchPath({ path: props.to })
    }
  }

  componentDidMount() {
    Observable.fromEvent(window, 'hashchange')
    .subscribe(() => this.setState(() => ({ match: matchPath({ path: this.props.to }) })))
  }

  render() {
    const { to, className, activeClassName = 'active', ...others } = this.props
    return <a href={`#${to}`} className={to === getRoute() ? [className, activeClassName].join(' ') : className} {...others} />
  }
}

export default (path) => {
  return (target) => {
    ROUTES[path] = target
  }
}