import Ext from '~/core/ext';
import List from '~/core/list';

export default class Model {
  constructor(data, store) {
    //#region configs
    this.selected = false;
    //#endregion

    //#region properties
    this.data = data;
    this.store = store;
    this.idProperty = (store && store.idProperty) ? store.idProperty : 'id';
    const fieldConfig = (store && store.fields) ? store.fields : [];
    this.fields = List(fieldConfig).map(field => Ext.isString(field) ? ({ name: field, type: 'string' }) : field);
    //#endregion

    //#region methods
    this.getData = () => this.data;
    this.get = fieldName => this.data[fieldName];
    //#endregion

    this.save();
  }

  set(fieldName, newValue, silent) {
    this.data[fieldName] = newValue;
    this.modified = !this.isEqual(fieldName);
    (!silent && this.store) && (this.store.fireEvent());
  }

  save() {
    this.phantom = Ext.clone(this.data);
    this.modified = false;
  }

  reject(silent) {
    this.data = Ext.clone(this.phantom);
    this.save();
    (!silent && this.store) && (this.store.fireEvent());
  }

  isEqual(field) {
    const oldValue = this.phantom[field.name],
          newValue = this.data[field.name];

    return field.equals ? field.equals(newValue, oldValue) : newValue === oldValue;
  }

  isModified(fieldName) {
    return this.modified && !this.phantom[this.idProperty]; // should not detect new record as a modified record
  }

  isNewlyCreated() {
    return !this.phantom[this.idProperty];
  }

  setSelected(selected, silent) {
    this.selected = selected;
    (!silent && this.store) && (this.store.fireEvent());
  }
}