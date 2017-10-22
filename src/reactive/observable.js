import Ext from '~/core/ext';
import List from '~/core/list';

export default class Observable extends List {
  constructor() {
    super();
  }

  static create() {
    return new Observable();
  }

  subscribe(observer) {
    this.data.push(observer);
  }

  call(...args) {
    this.each(observer => observer.apply(this, args));
  }

  unsubscribe(observer) {
    this.data = this.filter(item => item !== observer).collect();
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
    this.target.addEventListener(this.eventName, observer, false);
  }

  unsubscribe(observer) {
    this.target.removeEventListener(this.eventName, observer, false);
  }
}