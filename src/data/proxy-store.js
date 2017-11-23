import Ext from '~/core/ext';
import Ajax from './ajax';
import AbstractStore from './abstract-store';

export default class ProxyStore extends AbstractStore {
  constructor() {
    super();

    //#region configs
    this.totalCount = 0;
    this.pageSize = 0;
    this.currentPage = 1;
    //#endregion
  }

  async load(proxy) {
    proxy = Ext.extend({}, this.proxy, proxy || {});
    const response = await Ajax.request(proxy);
    response && this.loadData(response);
  }

  async sync(proxy) {
    proxy = Ext.extend({}, this.proxy, proxy || {});
    proxy.method = 'post';
    proxy.params = this.getModifiedRecords().map(record => record.data).collect();
    proxy.params.push(...this.getNewRecords().map(record => record.data).collect());
    if (proxy.writter && proxy.writter.transform) {
      proxy.params = proxy.writter.transform(proxy.params);
    }
    return await Ajax.request(proxy);
  }
}