import Ext from '~/core/ext';
import List from '~/core/list';

class DomEvent {
  constructor(target, eventName) {
    this.target = target;
    this.eventName = eventName;
    return this;
  }

  subscribe(subscriber) {
    this.target.addEventListener(this.eventName, subscriber);
  }
}

export default class Event {
  constructor() {
    this.subscribers = [];
    return this;
  }

  static create() {
    return new Event();
  }

  on(subscriber) {
    this.subscribers.push(subscriber);
  }

  un(subscriber) {
    List.of(this.subscribers).each((value, index, subscribers) => (value === subscriber) && (subscribers.splice(index, 1)));
  }

  call(...args) {
    List.of(this.subscribers).each(subscriber => subscriber.apply(this, args));
  }

  static listen(target, eventName) {
    return new DomEvent(target, eventName);
  }
}