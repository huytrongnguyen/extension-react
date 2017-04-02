class Ext {
  getById(id) {
    return document.getElementById(id);
  }

  extend() {
    return Object.assign.apply(null, arguments) // immutable object
  }
}

export default new Ext