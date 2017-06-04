import Ext from '~/core/ext';
import List from '~/core/list';
import Observable from '~/mixin/observable';
import Ajax from './ajax';
import Model from './model';

export default (config) => {
  class DataStore {
    constructor() {
      Ext.extend(this, config, {
        data: config.data || [],
        observable: Observable.create()
      });
    }

    subscribe(observer) {
      this.observable.subscribe(observer);
    }

    unsubscribe(observer) {
      this.observable.unsubscribe(observer);
    }

    removeAll() {
      this.data = [];
      this.observable.call(this);
    }

    loadData(data) {
      const newData = this.proxy.reader && this.proxy.reader.rootProperty ? data[this.proxy.reader.rootProperty] : data;
      this.data = List(newData).map(record => new Model(record, this)).collect();
      if (this.pageSize) {
        this.page = data;
      }
      this.observable.call(this);
    }

    async load(proxy) {
      proxy = Ext.extend({}, this.proxy, proxy || {});
      const response = await Ajax.request(proxy);
      response && this.loadData(response);
      return this;
    }

    loadPage(page) {
      const proxy = Ext.extend({}, this.proxy, { url: `${this.proxy.url}?page=${page}` });
      return load(proxy);
    }

    getData() {
      return this.data;
    }

    count() {
      return this.data.length;
    }

    commitChanges() {
      List(this.data).each(record => record.save());
      this.observable.call(this);
    }

    rejectChanges() {
      List(this.data).each(record => record.reject());
      this.observable.call(this);
    }

    getAt(index) {
      return this.data[index];
    }

    removeAt(index, count = 1) {
      return this.data.splice(index, count);
    }
  }

  return new DataStore;
}