import ProxyStore from './proxy-store'

export default class PagingStore extends ProxyStore {
  constructor(config) {
    super(config)
  }

  loadPage(page) {
    return load({ url: `${this.proxy.url}?page=${page}` })
  }
}