import ArrayStore from './abstract-store'
import ProxyStore from './proxy-store'
import PagingStore from './paging-store'

export default (config) => {
  if (config.pageSize) {
    return new PagingStore(config)
  }
  if (config.proxy) {
    return new ProxyStore(config)
  }
  return new ArrayStore(config)
}