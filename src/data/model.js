import Ext from '~/core/ext';

export default class Model {
  constructor(data, store) {
    //#region configs
    this.selected = false;
    //#endregion

    //#region properties
    this.data = data;
    this.store = store;
    const fieldConfig = (store && store.fields) ? store.fields : [];
    this.fields = Ext.List(fieldConfig).map(field => Ext.isString(field) ? ({ name: field, type: 'string' }) : field);
    this.idProperty = store ? store.idProperty : 'id';
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

  isEqual(fieldName) {
    const oldValue = this.phantom[fieldName],
          newValue = this.data[fieldName],
          field = this.fields.find(field => field.name === fieldName);

    return (field && field.equals) ? field.equals(newValue, oldValue) : newValue === oldValue;
  }

  isModified(fieldName) {
    if (!this.phantom[this.idProperty]) { // should not detect new record as a modified record
      return false;
    }

    return fieldName ? !this.isEqual(fieldName) : this.fields.contains(field => !this.isEqual(field.name));
  }

  setSelected(selected, silent) {
    this.selected = selected;
    (!silent && this.store) && (this.store.fireEvent());
  }
}