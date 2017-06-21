import Ext from '~/core/ext';
import List from '~/core/list';
import Map from '~/core/map';
import Observable from '~/mixin/observable';

export default class Model {
  constructor(data, store) {
    this.data = data;
    this.store = store;
    this.fields = this.createFields((store && store.fields) ? store.fields : Object.keys(this.data));
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
    this.phantom = Ext.isPrimitive(this.data) ? this.data : Ext.extend({}, this.data);
  }

  reject() {
    this.data = Ext.extend({}, this.phantom);
    this.save();
  }

  isModified(fieldName) {
    if (fieldName) {
      return !this.isEqual(this.fields[fieldName]);
    }

    return Map(this.fields).values().contains(field => !this.isEqual(field));
  }

  isEqual(field) {
    return !field ? true :
        (field.equals ? field.equals(this.data[field.name], this.phantom[field.name]) :
            (this.data[field.name] === this.phantom[field.name]));
  }

  createFields(fields) {
    return List(fields).reduce((fieldByName, field) => {
      if (Ext.isObject(field)) {
        fieldByName[field.name] = field;
      } else {
        fieldByName[field] = { name: field };
      }
      return fieldByName;
    }, {});
  }
}