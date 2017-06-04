import Ext from '~/core/ext';
import List from '~/core/list';

export default class Observable {
  constructor() {
    this.observers = [];
    return this;
  }

  static create() {
    return new Observable();
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    List(this.observers).each((value, index, observers) => (value === observer) && (observers.splice(index, 1)));
  }

  call(...args) {
    List(this.observers).each(observer => observer.apply(this, args));
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

  subscribe(observer) {
    this.target.addEventListener(this.eventName, observer);
  }
}