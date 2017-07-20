import Ext from '~/core/ext';
import List from '~/core/list';
import Observable from '~/mixin/observable';
import Ajax from './ajax';
import Model from './model';

export default (config) => {
  class DataStore {
    constructor() {
      this.totalCount = 0;
      this.pageSize = 0;
      this.currentPage = 1;
      Ext.extend(this, config, {
        observable: Observable.create()
      });
      this.createRecord = record => new Model(record, this);
      this.data = List(config.data).map(this.createRecord);
      this.subscribe = observer => this.observable.subscribe(observer);
      this.unsubscribe = observer => this.observable.unsubscribe(observer);
    }

    clearData(silent = false) {
      this.data = List();
      this.totalCount = 0;
      this.currentPage = 1;
      if (!silent) {
        this.observable.call(this);
      }
    }

    async load(proxy) {
      proxy = Ext.extend({}, this.proxy, proxy || {});
      const response = await Ajax.request(proxy);
      response && this.loadData(response);
    }

    loadData(data) {
      this.clearData(true);
      this.data = List((this.proxy && this.proxy.reader && this.proxy.reader.rootProperty ? data[this.proxy.reader.rootProperty] : data) || []).map(this.createRecord);
      if (this.pageSize && data) {
        this.totalCount = (this.proxy && this.proxy.reader && this.proxy.reader.totalProperty) ? data[this.proxy.reader.totalProperty] : this.count();
      }
      this.observable.call(this);
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

    getRecords() {
      return this.data;
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

    async sync(proxy) {
      proxy = Ext.extend({}, this.proxy, proxy || {});
      proxy.method = 'post';
      proxy.params = List(this.getModifiedRecords()).map(record => record.data).collect();
      proxy.params.push(...this.getNewRecords().map(record => record.data).collect());
      if (proxy.writter && proxy.writter.transform) {
        proxy.params = proxy.writter.transform(proxy.params);
      }
      return await Ajax.request(proxy);
    }

    getModifiedRecords() {
      return this.data.filter(record => record.isModified());
    }

    getSelectedRecords() {
      return this.data.filter(record => record.selected);
    }

    getNewRecords() {
      return this.data.filter(record => record.isNewlyCreated());
    }

    toggleSelectAll() {
      if (this.getSelectedRecords().count() === this.count()) {
        this.data.each(record => record.selected = false);
      } else {
        this.data.each(record => record.selected = true);
      }
      this.observable.call(this);
    }

    add(record) {
      record = this.createRecord(record);
      this.data.add(record);
      this.observable.call(this);
      return record;
    }
  }

  return new DataStore;
}