class Ext {
  getById(id) {
    return document.getElementById(id);
  }

  extend() {
    return Object.assign.apply(null, arguments); // immutable object
  }

  createElement(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.children[0];
  }

  /**
   * Returns `true` if the passed value is a JavaScript Function, `false` otherwise.
   * @param {Object} value The value to test.
   * @return {Boolean}
   * @method
   */
  isFunction(value) {
    return !!value && typeof value === 'function';
  }
}

export default new Ext();