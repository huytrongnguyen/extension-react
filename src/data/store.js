import Ext from '~/core/ext'
import Ajax from '~/data/ajax'
import Observable from '~/events/observable'

export default (Store) => {
  Store = new Store
  class DataStore {
    constructor() {
      Ext.extend(DataStore.prototype, {
        name: Store.constructor.name,
        proxy: Store.proxy,
        autoLoad: Store.autoLoad,
        observable: Observable.create(),
        data: []
      })
    }

    clearData() {
      this.data = []
    }

    loadData(data) {
      Ext.extend(this.data, data)
      this.observable.call(this)
    }

    async load(proxy) {
      this.clearData()
      const response = await Ajax.request(proxy || this.proxy)
      response && this.loadData(response)
      return this
    }
  }

  return new DataStore
}