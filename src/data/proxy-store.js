import { Observable } from 'rxjs';
import Ext from '~/core/ext';
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

  load() {
    let { url, method = 'get', responseType = 'json', params } = this.proxy;
    (method === 'get' && params) && (url = `${url}?${String.toQueryString(params)}`);
    Observable.ajax({
      url,
      method,
      responseType,
      body: method === 'post' && params
    })
    .map(value => value.response)
    .subscribe(response => {
      const { reader: { rootProperty, totalProperty } = {} } = this.proxy;
      this.loadData(rootProperty ? response[rootProperty] : response);
      this.totalCount = (this.pageSize && totalProperty) ? response[totalProperty] : this.count();
    });
  }

  // loadPage(page) {
  //   this.currentPage = page;
  //   this.proxy.params = Ext.extend({}, this.proxy.params, { page: this.currentPage, size: this.pageSize });
  //   return this.load({});
  // }

  // async sync({ done, fail, always }) {
  //   this.proxy.method = 'post';
  //   this.proxy.params = this.getModifiedRecords().map(record => record.data).collect();
  //   this.proxy.proxy.params.push(...this.getNewRecords().map(record => record.data).collect());
  //   const { transform } = proxy.writer;
  //   transform && (this.proxy.params = transform(this.proxy.params));
  //   Observable.ajax(this.proxy).subscribe({
  //     next: done,
  //     error: fail,
  //     complete: always
  //   });
  // }
}