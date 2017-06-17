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
    return this.data[fieldName];
  }

  set(fieldName, newValue) {
    this.data[fieldName] = newValue;
    this.store && this.store.observable.call(this.store);
  }

  save() {
    this.phantom = Ext.extend({}, this.data);
    this.store && this.store.observable.call(this.store);
  }

  reject() {
    this.data = Ext.extend({}, this.phantom);
    this.save();
    this.store && this.store.observable.call(this.store);
  }
}