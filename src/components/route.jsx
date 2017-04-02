import React, { Component } from 'react'

export default class Route extends Component {
  constructor(props) {
    super(props)
    this.state = {
      match: this.matchPath(props)
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState(() => ({ match: this.matchPath(nextProps) }))
  }

  render() {
    const { match } = this.state,
          { component } = this.props

    if (!component) {
      console.error('component props should not be null')
      return null
    }

    return match ? React.createElement(component, {}) : null
  }

  matchPath({ path }) {
    const route = window.location.hash.substring(1) || '/'
    return route.startsWith(path)
  }
}

export const Link = ({ to,  }) => <a href={`#${to}`} {...others} />