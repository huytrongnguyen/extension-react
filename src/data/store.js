import Ext from '~/core/ext';
import List from '~/core/list';
import Observable from '~/mixin/observable';
import Ajax from './ajax';
import Model from './model';

export default (config) => {
  class DataStore {
    constructor() {
      Ext.extend(DataStore.prototype, config, {
        data: [],
        observable: Observable.create(),
        modifiedRecords: {}
      });
    }

    subscribe(subscriber) {
      this.observable.subscribe(subscriber);
    }

    unsubscribe(subscriber) {
      this.observable.unsubscribe(subscriber);
    }

    removeAll() {
      this.data = [];
    }

    loadData(data) {
      this.data = this.proxy.reader && this.proxy.reader.rootProperty ? data[this.proxy.reader.rootProperty] : data;
      if (this.pageSize) {
        this.page = data;
      }
      this.observable.call(this);
    }

    async load(proxy) {
      const response = await Ajax.request(proxy || this.proxy);
      response && this.loadData(response);
      return this;
    }

    loadPage(page) {
      const proxy = Ext.extend({}, this.proxy, { url: `${this.proxy.url}?page=${page}` });
      return load(proxy);
    }

    getRecords() {
      return this.data;
    }

    commitChanges() {
      this.modifiedRecords = {};
      this.observable.call(this);
    }

    updateRecord(record, fieldName, newValue) {
      !this.modifiedRecords[record.id] && (this.modifiedRecords[record.id] = new Model(record));
      const modifiedRecord = this.modifiedRecords[record.id];
      modifiedRecord.set(fieldName, newValue);
      record[fieldName] = newValue;
      this.observable.call(this);
    }

    rejectChanges() {
      List(this.data).each((record, index, data) => {
        if (this.modifiedRecords[record.id]) {
          data[index] = Ext.extend({}, this.modifiedRecords[record.id].phantom);
        }
      })
      this.commitChanges();
    }
  }

  return new DataStore;
}