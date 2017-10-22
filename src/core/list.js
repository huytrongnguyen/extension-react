export class List {
  constructor(value) {
    this.data = [];
    if (value && value.length) {
      this.data = value;
    }
  }

  collect() {
    return this.data;
  }

  count() {
    return this.data.length;
  }

  each(iteratee) {
    for (let index = 0, item; (item = this.data[index]) != null; ++index) {
      iteratee(item, index, this.data);
    }
  }

  filter(predicate) {
    const result = [];
    this.each((item, index, data) => {
      if (predicate(item, index, data)) {
        result.push(item);
      }
    });
    return new List(result);
  }

  map(iteratee) {
    const result = [];
    this.each((item, index, data) => result[index] = iteratee(item, index, data));
    return new List(result);
  }

  reduce(iteratee, accumulator) {
    this.each((item, index, data) => accumulator = iteratee(accumulator, item, index, data));
    return accumulator;
  }

  findIndex(predicate) {
    let index = -1;
    for (let idx = 0, item; (item = this.data[idx]) != null; ++idx) {
      if (predicate(item, idx, this.data)) {
        index = idx;
        break;
      }
    }
    return index;
  }

  find(predicate) {
    let index = this.findIndex(predicate);
    return index > -1 ? this.data[index] : null;
  }

  contains(predicate) {
    return this.find(predicate) !== null;
  }

  getAt(index) {
    return this.data[index];
  }

  removeAt(index, count = 1) {
    return this.data.splice(index, count);
  }

  add(item) {
    this.data.push(item);
  }

  insert(index, item) {
    this.data.splice(index, 0, item);
  }

  join(separator) {
    return this.data.join(separator);
  }
}

export default (value) => new List(value);