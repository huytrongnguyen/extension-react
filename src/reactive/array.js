import List from '~/core/list';

class ArrayObservable {
  constructor(list) {
    this.sink = list || List();
  }

  subscribe({ next, complete }) {
    this.sink.each(item => next && next(item));
    complete && complete();
  }

  static create(...array) {
    const length = array.length;
    if (length > 1) {
      return new ArrayObservable(array);
    } else if (length === 1) {
      return new ArrayObservable(array[0])
    } else {
      return new ArrayObservable();
    }
  }
}