import Ext from '~/core/ext';
import List from '~/core/list';
import Map from '~/core/map';
import Observable from '~/mixin/observable';

export default class Model {
  constructor(data, store) {
    this.data = data;
    this.store = store;
    this.fields = this.createFields((store && store.fields) ? store.fields : Object.keys(this.data));
    this.selected = false;
    this.save();
  }

  get(fieldName) {
    if (!fieldName || Ext.isPrimitive(this.data)) {
      return this.data;
    }
    return this.data[fieldName];
  }

  set(fieldName, newValue) {
    if (!fieldName || Ext.isPrimitive(this.data)) {
      this.data = newValue;
    } else {
      this.data[fieldName] = newValue;
    }
    this.store && this.store.observable.call(this.store);
  }

  save() {
    this.phantom = Ext.clone(this.data);
  }

  reject() {
    this.data = Ext.clone(this.phantom);
    this.save();
  }

  isModified(fieldName) {
    if (fieldName) {
      const field = this.fields.find(field => field.name === fieldName);
      return !field ? false : !this.isEqual(field);
    }

    return this.fields.contains(field => !this.isEqual(field));
  }

  isEqual(field) {
    return !field ? true :
        (field.equals ? field.equals(this.data[field.name], this.phantom[field.name]) :
            (this.data[field.name] === this.phantom[field.name]));
  }

  createFields(fields) {
    return List(fields).map(field => {
      if (Ext.isString(field)) {
        return { name: field };
      } else {
        return field;
      }
    });
  }

  setSelected(selected) {
    this.selected = selected;
    this.store && this.store.observable.call(this.store);
  }

  isNewlyCreated() {
    const idProperty = (this.store && this.store.idProperty) ? this.store.idProperty : id;
    return !this.phantom[idProperty];
  }
}