import Ext from '~/core/ext'
import Ajax from '~/data/ajax'

export default (Store) => {
  Store = new Store
  class DataStore {
    constructor() {
      Ext.extend(DataStore.prototype, {
        name: Store.constructor.name,
        proxy: Store.proxy,
        data: []
      })
    }

    clearData() {
      this.data = []
    }

    loadData(data) {
      Ext.extend(this.data, data)
    }

    async load() {
      this.clearData()
      const response = await Ajax.request({ url: this.proxy.url })
      response && this.loadData(response)
      return this
    }
  }

  return new DataStore
}