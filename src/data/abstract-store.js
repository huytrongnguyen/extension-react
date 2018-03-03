import { Subject } from 'rxjs';
import Ext from '~/core/ext';
import { List } from '~/core/collection';
import Model from './model';

export default class AbstractStore extends List {
  constructor(config) {
    super();

    //#region configs
    this.totalCount = 0;
    this.pageSize = 0;
    this.currentPage = 1;
    this.subject = new Subject();
    this.idProperty = 'id';
    //#endregion

    //#region properties
    //#endregion

    //#region methods
    this.createRecord = record => new Model(record, this);
    this.getRecords = this.collect;
    this.getRawDatas = this.map(record => record.getData()).collect();
    this.getModifiedRecords = () => this.filter(record => record.isModified());
    this.getSelectedRecords = () => this.filter(record => record.selected);
    this.getNewRecords = () => this.filter(record => record.isNewlyCreated());
    this.subscribe = observer => this.subject.subscribe({ next: value => observer(value) });
    this.fireEvent = () => this.subject.next(this);
    //#endregion

    Ext.extend(this, config);
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
    this.getModifiedRecords().each(record => record.save());
    this.fireEvent();
  }

  rejectChanges() {
    this.getModifiedRecords().each(record => record.reject(true));
    this.fireEvent();
  }

  addRecord(data = {}) {
    this.add(this.createRecord(data));
    this.fireEvent();
  }

  removeSelectedRecords() {
    this.data = this.data.filter(record => !record.selected);
    this.fireEvent();
  }

  toggleSelectAll() {
    const allSelected = this.getSelectedRecords().count() === this.count();
    this.each(record => record.selected = !allSelected);
    this.fireEvent();
  }
}