import Ext from '~/core/ext'
import List from '~/core/list'

class EventObservable {
  constructor(target, eventName) {
    Ext.extend(EventObservable.prototype, {
      target,
      eventName
    })
    return this
  }

  subscribe(subscriber) {
    this.target.addEventListener(this.eventName, subscriber)
  }
}

export default class Observable {
  constructor() {
    this.observers = []
    return this
  }

  static create() {
    return new Observable()
  }

  subscribe(observer) {
    this.observers.push(observer)
  }

  unsubscribe(observer) {
    List.of(this.observers).each((value, index, observers) => (value === observer) && (delete observers[index]))
  }

  call(...args) {
    List.of(this.observers).each(observer => observer.apply(this, args));
  }

  static fromEvent(target, eventName) {
    return new EventObservable(target, eventName)
  }
}