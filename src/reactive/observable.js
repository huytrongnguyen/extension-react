import Operator from './operator';
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
export default class Observable extends Operator {
  constructor(subscribe) {
    super();
    this.subscribe = subscribe;
  }

  static create(subscribe) {
    return new Observable(subscribe);
  }

  /**
   * For example:
   * const input$ = Observable.fromEvent(document.getElementById('input'), 'change');
   *
   * const unsubcribe = input$.subscribe({
   *    next: e => console.log(e.target.value)
   * });
   *
   * setTimeout(unsubcribe, 5000);
   *
   * @param target
   * @param eventName
   */
  static fromEvent(target, eventName) {
    return Observable.create(observer => {console.log(observer)
      const callback = e => observer.next(e);
      target.addEventListener(eventName, callback, false);
      return () => target.removeEventListener(eventName, callback, false);
    });
  }

  static ajax(urlOrRequest) {
    return AjaxObservable.create(urlOrRequest);
  }
}