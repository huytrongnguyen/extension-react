const EMPTY_LIST = []

export default class List {
  constructor(value) {
    this.array = EMPTY_LIST
    if (value && value.length) {
      this.array = value
    }
    return this
  }

  static of(value) {
    return new List(value)
  }

  collect() {
    return this.array
  }

  each(iteratee) {
    for (let index = 0, item; (item = this.array[index]) != null; ++index) {
      iteratee(item, index, this.array)
    }
  }

  map(iteratee) {
    const result = []
    this.each((item, index, array) => result[index] = iteratee(item, index, array))
    return new List(result)
  }

  reduce(iteratee, accumulator) {
    this.each((item, index, array) => accumulator = iteratee(accumulator, item, index, array))
    return accumulator
  }
}