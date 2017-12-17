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

  load({ done, fail, always } = {}) {
    let { url, method = 'get', responseType = 'json', params } = this.proxy;
    (method === 'get' && params) && (url = `${url}?${String.toQueryString(params)}`);
    Observable.ajax({
      url,
      method,
      headers: { 'Content-Type': 'application/json' },
      body: method === 'post' && params,
      responseType,
    })
    .subscribe({
      next: value => {
        const { reader: { rootProperty, totalProperty } = {} } = this.proxy;
        let { response } = value;
        if (done) { response = done(response)}
        this.loadData(rootProperty ? response[rootProperty] : response);
        this.totalCount = (this.pageSize && totalProperty) ? response[totalProperty] : this.count();
      },
      error: err => fail (err.response || err.message),
      complete: always
    });
  }

  sync({ done, fail, always } = {}) {
    const { url, responseType = 'json', writer: { transform } = {} } = this.proxy;
    let params = this.getModifiedRecords().map(record => record.data).collect();console.log(params)
    transform && (params = transform(params));
    Observable.ajax({
      url,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: params,
      responseType,
    })
    .subscribe({
      next: value => done ? done(value.response) : value.response,
      error: err => fail (err.response || err.message),
      complete: always
    });
  }
}