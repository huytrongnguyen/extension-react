import Ext from '~/core/ext';
import List from '~/core/list';

export default class Observable {
  constructor() {
    this.subscribers = [];
    return this;
  }

  static create() {
    return new Observable();
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  unsubscribe(subscriber) {
    List(this.subscribers).each((value, index, subscribers) => (value === subscriber) && (subscribers.splice(index, 1)));
  }

  call(...args) {
    List(this.subscribers).each(subscriber => subscriber.apply(this, args));
  }

  static fromEvent(target, eventName) {
    return new EventObservable(target, eventName);
  }
}

class EventObservable {
  constructor(target, eventName) {
    this.target = target;
    this.eventName = eventName;
    return this;
  }

  subscribe(subscriber) {
    this.target.addEventListener(this.eventName, subscriber);
  }
}