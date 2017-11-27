import List from '~/core/list';

export default class Subject extends List {
  constructor() {
    super();
  }

  static create() {
    return new Subject();
  }

  subscribe(observer) {
    this.add(observer);
  }

  unsubscribe() {
    this.data = this.filter(item => item !== observer).collect();
  }

  next(...args) {
    this.each(observer => observer.apply(this, args));
  }
}