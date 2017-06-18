import Ext from '~/core/ext';
import Observable from '~/mixin/observable';

export default class Model {
  constructor(data, store) {
    Ext.extend(this, {
      data,
      store
    });
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
    this.store && this.store.observable.call(this.store);
  }

  reject() {
    this.data = Ext.extend({}, this.phantom);
    this.save();
    this.store && this.store.observable.call(this.store);
  }
}