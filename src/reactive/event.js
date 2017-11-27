export default class EventObservable {
  constructor(target, eventName, options) {
    this.target = target;
    this.eventName = eventName;
    this.options = options;
  }

  subscribe(observer) {
    this.target.addEventListener(this.eventName, observer, this.options);
  }

  unsubscribe(observer) {
    this.target.removeEventListener(this.eventName, observer, this.options);
  }

  static create(target, eventName, options = false) {
    return new EventObservable(target, eventName, options);
  }
}