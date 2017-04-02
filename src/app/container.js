import React, { Component } from 'react'
import List from '~/core/list'
import Observable from '~/events/observable'

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
      if (stores[name].autoLoad) {
        await stores[name].load()
      }
    }
    this.setState(() => ({ stores }))
  }

  render() {
    return <WrappedComponent stores={this.state.stores} />
  }

  prepareStores(stores) {
    return List.of(config.stores).reduce((stores, store) => {
      store.observable.subscribe(store => this.onDataChanged(store))
      stores[store.name] = store
      return stores
    }, {})
  }

  onDataChanged(store) {
    const { stores } = this.state
    stores[store.name] = store
    this.setState(() => ({ stores }))
  }
}