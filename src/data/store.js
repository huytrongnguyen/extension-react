import Ext from '~/core/ext';
import List from '~/core/list';
import Observable from '~/mixin/observable';
import Ajax from './ajax';
import Model from './model';

export default (config) => {
  class DataStore {
    constructor() {
      Ext.extend(this, config, {
        observable: Observable.create()
      });
      this.data = List(config.data || []).map(record => new Model(record, this));
    }

    async load(proxy) {
      proxy = Ext.extend({}, this.proxy, proxy || {});
      const response = await Ajax.request(proxy);
      response && this.loadData(response);
      return this;
    }

    loadData(data) {
      const newData = this.proxy.reader && this.proxy.reader.rootProperty ? data[this.proxy.reader.rootProperty] : data;
      this.data = List(newData).map(record => new Model(record, this));
      if (this.pageSize) {
        this.page = data;
      }
      this.observable.call(this);
    }

    loadPage(page) {
      const proxy = Ext.extend({}, this.proxy, { url: `${this.proxy.url}?page=${page}` });
      return load(proxy);
    }

    count() {
      return this.data.count();
    }

    getData() {
      return this.data.collect();
    }

    getAt(index) {
      return this.data.getAt(index);
    }

    removeAt(index, count) {
      return this.data.removeAt(index, count);
    }

    removeAll() {
      this.data = [];
      this.observable.call(this);
    }

    filterBy(predicate) {
      return this.data.filter(predicate);
    }

    subscribe(observer) {
      this.observable.subscribe(observer);
    }

    unsubscribe(observer) {
      this.observable.unsubscribe(observer);
    }

    commitChanges() {
      List(this.data).each(record => record.save());
      this.observable.call(this);
    }

    rejectChanges() {
      List(this.data).each(record => record.reject());
      this.observable.call(this);
    }
  }

  return new DataStore;
}