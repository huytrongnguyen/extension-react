import React, { Component } from 'react'
import List from '~/core/list'

export default (config) => (WrappedComponent) => class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stores: this.prepareStores(config.stores)
    }
  }

  async componentDidMount() {
    const { stores } = this.state
    for (let name in stores) {
      await stores[name].load()
    }
    this.setState(() => ({ stores }))
  }

  render() {
    return <WrappedComponent stores={this.state.stores} />
  }

  prepareStores(stores) {
    return List.of(config.stores).reduce((stores, store) => {
      stores[store.name] = store
      return stores
    }, {})
  }
}