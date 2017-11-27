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

  async load({ done, fail, always }) {
    Observable.ajax(this.proxy).subscribe({
      next: value => {
        const { rootProperty, totalProperty } = this.proxy.reader;
        this.loadData(rootProperty ? response[rootProperty] : response);
        this.totalCount = (this.pageSize && totalProperty) ? response[totalProperty] : this.count();
        done && done(this.getRecords());
      },
      error: fail,
      complete: always
    });
  }

  loadPage(page) {
    this.currentPage = page;
    this.proxy.params = Ext.extend({}, this.proxy.params, { page: this.currentPage, size: this.pageSize });
    return this.load({});
  }

  async sync({ done, fail, always }) {
    this.proxy.method = 'post';
    this.proxy.params = this.getModifiedRecords().map(record => record.data).collect();
    this.proxy.proxy.params.push(...this.getNewRecords().map(record => record.data).collect());
    const { transform } = proxy.writer;
    transform && (this.proxy.params = transform(this.proxy.params));
    Observable.ajax(this.proxy).subscribe({
      next: done,
      error: fail,
      complete: always
    });
  }
}