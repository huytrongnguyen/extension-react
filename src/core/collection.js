export class List {
  constructor(value) {
    this.data = [];
    if (value && value.length) {
      this.data = value;
    }
    this.collect = () => this.data;
    this.count = () => this.data.length;
    this.isEmpty = () => this.count === 0;

    this.getAt = index => this.data[index];
    this.removeAt = (index, count = 1) => this.data.splice(index, count);
    this.subList = (start, end) => new List(this.data.slice(start, end));
    
    this.add = item => this.data.push(item);
    this.insert = (index, item) => this.data.splice(index, 0, item);
    
    this.findIndex = predicate => this.data.findIndex(predicate);
    this.find = predicate => this.data.find(predicate);
    this.contains = predicate => this.find(predicate) !== undefined;

    this.each = predicate => this.data.forEach(predicate);
    this.filter = predicate => new List(this.data.filter(predicate));
    this.map = predicate => new List(this.data.map(predicate));
    this.reduce = (predicate, initialValue) => this.data.reduce(predicate, initialValue);

    this.join = separator => this.data.join(separator);
  }
}

export class Dictionary {
  constructor(keyValues) {
    this.data = {};
    if (keyValues) {
      this.data = Object.assign({}, keyValues);
    }

    this.keys = () => new List(Object.keys(this.data));
    this.values = () => new List(Object.values(this.data));

    this.set = (key, value) => this.data[key] = value;
    this.get = key => this.data[key];
  }

  each(predicate) {
    for (let key in this.data) {
      predicate(this.data[key], key, this.data);
    }
  }
}