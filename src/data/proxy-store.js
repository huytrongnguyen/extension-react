import Ext from '~/core/ext';
import Ajax from './ajax';
import AbstractStore from './abstract-store';

export default class ProxyStore extends AbstractStore {
  constructor() {
    super();

    //#region configs
    this.proxy = {
      reader: {},
      writer: {}
    };
    //#endregion
  }

  async load(proxy) {
    proxy = Ext.extend({}, this.proxy, proxy || {});
    const response = await Ajax.request(proxy);
    if (response) {
      const { rootProperty, totalProperty } = this.proxy.reader;
      this.loadData(rootProperty ? response[rootProperty] : response);
      this.totalCount = (this.pageSize && totalProperty) ? response[totalProperty] : this.count();
    }
  }

  loadPage(page) {
    this.currentPage = page;
    const proxy = Ext.extend({}, this.proxy, { url: `${this.proxy.url}?page=${this.currentPage}&size=${this.pageSize}` });
    return this.load(proxy);
  }

  async sync(proxy) {
    proxy = Ext.extend({}, this.proxy, proxy || {});
    proxy.method = 'post';
    proxy.params = this.getModifiedRecords().map(record => record.data).collect();
    proxy.params.push(...this.getNewRecords().map(record => record.data).collect());
    const { transform } = proxy.writer;
    transform && (proxy.params = transform(proxy.params));
    return await Ajax.request(proxy);
  }
}