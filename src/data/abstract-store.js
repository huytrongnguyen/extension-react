import { Subject } from 'rxjs';
import { List } from '~/core/list';
import Model from './model';

export default class AbstractStore extends List {
  constructor() {
    super();

    //#region configs
    this.totalCount = 0;
    this.pageSize = 0;
    this.currentPage = 1;
    this.subject = new Subject();
    //#endregion

    //#region properties
    //#endregion

    //#region methods
    this.createRecord = record => new Model(record, this);
    this.getRecords = this.collect;
    this.getModifiedRecords = () => this.filter(record => record.isModified());
    this.getNewRecords = () => this.filter(record => record.isNewlyCreated());
    this.subscribe = observer => this.subject.subscribe({ next: value => observer(value) });
    this.fireEvent = () => this.subject.next(this);
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