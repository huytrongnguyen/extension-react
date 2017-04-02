import Ext from '~/core/ext'

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
    this.subscriber = () => {}
    return this
  }

  static create() {
    return new Observable()
  }

  subscribe(subscriber) {
    this.subscriber = subscriber
  }

  call(...args) {
    this.subscriber.apply(this, args)
  }

  static fromEvent(target, eventName) {
    return new EventObservable(target, eventName)
  }
}