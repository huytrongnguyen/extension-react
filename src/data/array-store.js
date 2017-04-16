import AbstractStore from './abstract-store'
import Model from './model'
import List from '~/core/list'

export default class ArrayStore extends AbstractStore {
  constructor(config) {
    super(config)
  }

  updateRecord(record, fieldName, newValue) {
    !this.modifiedRecords[record.id] && (this.modifiedRecords[record.id] = new Model(record))
    const modifiedRecord = this.modifiedRecords[record.id]
    modifiedRecord.set(fieldName, newValue)
    record[fieldName] = newValue
    this.observable.call(this)
  }

  commitChanges() {
    this.modifiedRecords = {}
    this.observable.call(this)
  }

  rejectChanges() {
    List.of(this.data).each((record, index, data) => {
      if (this.modifiedRecords[record.id]) {
        data[index] = Ext.extend({}, this.modifiedRecords[record.id].phantom)
      }
    })
    this.commitChanges()
  }
}