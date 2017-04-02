const EMPTY_LIST = []

export default class List {
  constructor(value) {
    this.array = EMPTY_LIST
    if (value && value.length > 0) {
      this.array = value.length > 1 ? value : (value[0] ? value[0] : EMPTY_LIST)
    }
    return this
  }

  static of(/*...values*/) {
    return new List(arguments)
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
    this.array = result
    return this
  }

  reduce(iteratee, accumulator) {
    this.each((item, index, array) => accumulator = iteratee(accumulator, item, index, array))
    return accumulator
  }
}