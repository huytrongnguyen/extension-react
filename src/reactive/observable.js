import EventObservable from './event';
import AjaxObservable from './ajax';

/**
 * From ReactiveX docs:
 *
 * Observable: An interface that listens for incoming notifications over a period of time
 * and pushes them to another interface that reacts to them.
 *
 * Subscription: When an Observable interface starts doing its work,
 * i.e. listening for notifications and pushing them out.
 *
 * Observer: An interface that reacts to data pushed from an Observable.
 *
 * Operators: Functions used to manipulate an Observable’s output, e.g. filter, map, reduce, etc.
 */

export default class Observable {
  constructor(subcriber = () => {}) {
    this.subcriber = subscriber;
  }

  subscribe({ next, error, complete }) {
    try {
      next && next(this.subcriber());
    } catch (err) {
      error && error(err)
    } finally {
      complete && complete();
    }
  }

  unsubscribe() {
    this.subcriber = null;
  }

  static create(subscriber) {
    return new Observable(subscriber);
  }

  static fromEvent(target, eventName) {
    return EventObservable.create(target, eventName);
  }

  static ajax(urlOrRequest) {
    return AjaxObservable.create(urlOrRequest);
  }
}