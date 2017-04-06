import Ext from '~/core/ext'

export default class Model {
  constructor(data) {
    this.phantom = Ext.extend({}, data)
    this.data = {}
  }

  set(fieldName, newValue) {
    this.data[fieldName] = newValue
  }
}