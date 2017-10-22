import { List } from '~/core/list';
import Observable from '~/reactive/observable';
import Model from './model';

export default class AbstractStore extends List {
  constructor() {
    super();
    this.totalCount = 0;
    this.pageSize = 0;
    this.currentPage = 1;
    this.createRecord = record => new Model(record, this);
    this.observable = Observable.create();
    this.subscribe = observer => this.observable.subscribe(observer);
    this.unsubcribe = observer => this.observable.unsubcribe(observer);
  }

  clearData(silent = false) {
    this.data = [];
    this.totalCount = 0;
    this.currentPage = 1;
    if (!silent) {
      this.observable.call(this);
    }
  }

  loadData(data, totalCount) {
    this.clearData(true);
    this.data = (new List(data)).map(this.createRecord.bind(this)).collect();
    if (this.pageSize && data) {
      this.totalCount = totalCount || this.count();
    }
    this.observable.call(this);
  }

  commitChanges() {
    this.each(record => record.save());
    this.observable.call(this);
  }

  rejectChanges() {
    this.each(record => record.reject());
    this.observable.call(this);
  }

  getModifiedRecords() {
    return this.filter(record => record.isModified());
  }

  getSelectedRecords() {
    return this.filter(record => record.selected);
  }

  getNewRecords() {
    return this.filter(record => record.isNewlyCreated());
  }

  toggleSelectAll() {
    if (this.getSelectedRecords().count() === this.count()) {
      this.each(record => record.selected = false);
    } else {
      this.each(record => record.selected = true);
    }
    this.observable.call(this);
  }

  add(record) {
    record = this.createRecord(record);
    super.add(record);
    this.observable.call(this);
    return record;
  }
}