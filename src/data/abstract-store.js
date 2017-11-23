import { List } from '~/core/list';
import Observable from '~/reactive/observable';
import Model from './model';

export default class AbstractStore extends List {
  constructor() {
    super();

    //#region configs
    this.observable = Observable.create();
    //#endregion

    //#region properties
    //#endregion

    //#region methods
    this.subscribe = observer => this.observable.subscribe(observer);
    this.unsubscribe = observer => this.observable.unsubscribe(observer);
    this.fireEvent = () => this.observable.call(this);
    this.createRecord = record => new Model(record, this);
    this.getRecords = this.collect;
    this.getModifiedRecords = () => this.filter(record => record.isModified());
    this.getNewRecords = () => this.filter(record => record.isNewlyCreated());
    //#endregion

  }

  clearData(silent = false) {
    this.data = [];
    !silent && this.fireEvent();
  }

  loadData(data) {
    this.clearData(true);
    this.data = (new List(data)).map(this.createRecord.bind(this)).collect();
    this.fireEvent();
  }

  commitChanges() {
    this.filter(record => record.isModified() || record.isNewlyCreated()).each(record => record.save());
    this.fireEvent();
  }

  rejectChanges() {
    this.filter(record => record.isModified()).each(record => record.reject(true));
    this.data = this.filter(record => !record.isNewlyCreated()).collect();
    this.fireEvent();
  }
}