import List from './list'

const EMPTY_MAP = {}

export default class Map {
  constructor(keyValues) {
    this.map = EMPTY_MAP
    if (keyValues && keyValues.length) {
      this.map = Object.assign({}, keyValues)
    }
    return this
  }

  static of(keyValues) {
    return new Map(keyValues)
  }

  each(iteratee) {
    for (let key in this.map) {
      iteratee(key, this.map[key], this.map)
    }
    return this
  }

  keys() {
    return List.of(Object.keys(this.map));
  }

  values() {
    return List.of(Object.values(this.map));
  }
}