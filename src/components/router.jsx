import React, { Component } from 'react'
import Observable from '~/mixin/observable'

const INDEX_ROUTE = '/'

const getRoute = () => window.location.hash.substring(1) || '/'

const matchPath = ({index, path}) => {
  const route = getRoute()
  if (index && route === INDEX_ROUTE) return true
  return route.startsWith(path)
}

export class Route extends Component {
  constructor(props) {
    super(props)
    this.state = {
      match: matchPath(props)
    }
  }

  componentDidMount() {
    Observable.fromEvent(window, 'hashchange')
    .subscribe(() => this.setState(() => ({ match: matchPath(this.props) })))
  }

  render() {
    const { match } = this.state,
          { component } = this.props

    if (!component) {
      console.error('component props should not be null')
      return null
    }

    return match ? React.createElement(component) : null
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