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
    for (let storeId in stores) {
      if (stores[storeId].autoLoad) {
        await stores[storeId].load()
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

  onDataChanged(store) {
    const { stores } = this.state
    stores[store.storeId] = store
    this.setState(() => ({ stores }))
  }
}