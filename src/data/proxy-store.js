import Ext from '~/core/ext'
import ArrayStore from './array-store'
import Ajax from './ajax'

export default class ProxyStore extends ArrayStore {
  constructor(config) {
    super(config)
  }

  async load(options) {
    const proxy = Ext.extend({}, this.proxy, options),
          response = await Ajax.request(proxy)

    if (response) {
      const data = (proxy.reader && proxy.reader.rootProperty) ? response[reader.rootProperty] : response
      this.loadData(data)
      if (this.pageSize) { // support for PagingStore
        this.page = response
      }
    }
  }
}