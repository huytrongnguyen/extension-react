import List from './list';

class Map {
  constructor(keyValues) {
    this.map = {};
    if (keyValues && keyValues.length) {
      this.map = Object.assign({}, keyValues);
    }
    return this;
  }

  each(iteratee) {
    for (let key in this.map) {
      iteratee(key, this.map[key], this.map);
    }
    return this;
  }

  keys() {
    return List(Object.keys(this.map));
  }

  values() {
    return List(Object.values(this.map));
  }
}

export default (keyValues) => new Map(keyValues);