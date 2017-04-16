import Ext from '~/core/ext'
import Observable from '~/mixin/observable'

export default class AbstractStore {
  constructor(config) {
    Ext.extend(AbstractStore.prototype, config, {
      data: [],
      observable: Observable.create(),
      modifiedRecords: {},
    })

    StoreManager[this.storeId] = this
  }

  subscribe(observer) {
    this.observable.subscribe(observer)
  }

  unsubscribe(observer) {
    this.observable.unsubscribe(observer)
  }

  removeAll() {
    this.data = []
  }

  loadData(data) {
    this.data = data
    this.observable.call(this)
  }
}