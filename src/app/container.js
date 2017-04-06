import React, { Component } from 'react'
import List from '~/core/list'
import Map from '~/core/map'
import Observable from '~/mixin/observable'

export default (config) => (WrappedComponent) => class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stores: {}
    }
  }

  componentWillMount() {
    const stores = List.of(config.stores).reduce((stores, store) => {
      store.subscribe(this.onDataChanged.bind(this))
      stores[store.storeId] = store
      return stores
    }, {})
    this.setState(() => ({ stores }))
  }

  async componentDidMount() {
    const { stores } = this.state
    for (let name in stores) {
      if (stores[name].autoLoad) {
        await stores[name].load()
      }
    }
  }

  componentWillUnmount() {
    Map.of(this.state.store).each((storeId, store) => {
      store.unsubscribe(this.onDataChanged)
    })
  }

  render() {
    return <WrappedComponent {...this.state} {...this.props} />
  }

  prepareStores(stores) {
    return List.of(config.stores).reduce((stores, store) => {
      store.subscribe(this.onDataChanged)
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