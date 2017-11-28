import List from './list';

export class Dictionary {
  constructor(keyValues) {
    this.data = {};
    if (keyValues && keyValues.length) {
      this.data = Object.assign({}, keyValues);
    }

    this.keys = () => List(Object.keys(this.data));
    this.values = () => List(Object.values(this.data));
  }

  each(iteratee) {
    for (let key in this.data) {
      iteratee(this.data[key], key, this.data);
    }
    return this;
  }
}

export default (keyValues) => new Dictionary(keyValues);