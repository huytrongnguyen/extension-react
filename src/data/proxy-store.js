import Ext from '~/core/ext';
import Ajax from './ajax';
import AbstractStore from './abstract-store';

export default class ProxyStore extends AbstractStore {
  constructor() {
    super();
  }

  async load(proxy) {
    proxy = Ext.extend({}, this.proxy, proxy || {});
    const response = await Ajax.request(proxy);
    response && this.loadData(
      proxy.reader && proxy.reader.rootProperty ? response[proxy.reader.rootProperty] : response,
      proxy.reader && proxy.reader.totalProperty && response[proxy.reader.totalProperty]
    );
  }

  loadPage(page) {
    this.currentPage = page;
    const proxy = Ext.extend({}, this.proxy, { url: `${this.proxy.url}?page=${this.currentPage}` });
    return this.load(proxy);
  }

  reloadPage() {
    const proxy = Ext.extend({}, this.proxy, { url: `${this.proxy.url}?page=${this.currentPage - 1}` });
    return this.load(proxy);
  }
}