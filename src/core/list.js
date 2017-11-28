export class List {
  constructor(value) {
    this.data = [];
    if (value && value.length) {
      this.data = value;
    }

    this.collect = () => this.data;
    this.count = () => this.data.length;
    this.getAt = index => this.data[index];
    this.add = item => this.data.push(item);
    this.insert = (item, index = 0) => this.data.splice(index, 0, item);
    this.removeAt = (index, count = 1) => this.data.splice(index, count);
    this.join = separator => this.data.join(separator);
  }

  each(iteratee) {
    for (let index in this.data) {
      iteratee(this.data[index], index, this.data);
    }
    return this;
  }

  filter(predicate) {
    const result = [];
    this.each((item, index, array) => {
      if (predicate(item, index, array)) {
        result.push(item);
      }
    });
    return new List(result);
  }

  map(iteratee) {
    const result = [];
    this.each((item, index, array) => result[index] = iteratee(item, index, array));
    return new List(result);
  }

  reduce(iteratee, accumulator) {
    this.each((item, index, array) => accumulator = iteratee(accumulator, item, index, array));
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

  removeIf(predicate) {
    const result = [];
    this.each((item, index, array) => {
      if (!predicate(item, index, array)) {
        result.push(item);
      }
    });
    this.data = result;
  }
}

export default (value) => new List(value);