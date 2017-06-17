const EMPTY_LIST = [];

class List {
  constructor(value) {
    this.array = EMPTY_LIST;
    if (value && value.length) {
      this.array = value;
    }
    return this;
  }

  collect() {
    return this.array;
  }

  count() {
    return this.array.length;
  }

  each(iteratee) {
    for (let index = 0, item; (item = this.array[index]) != null; ++index) {
      iteratee(item, index, this.array);
    }
  }

  findBy(predicate) {
    let result = null;
    for (let index = 0, item; (item = this.array[index]) != null; ++index) {
      if (predicate(item, index, this.array)) {
        result = item;
        break;
      }
    }
    return result;
  }

  contains(predicate) {
    return this.findBy(predicate) !== null;
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

  getAt(index) {
    return this.array[index];
  }

  removeAt(index, count = 1) {
    return this.array.splice(index, count);
  }

  add(item) {
    this.array.push(item);
  }

  insert(index, item) {
    this.array.splice(index, 0, item);
  }
}

export default (value) => new List(value);