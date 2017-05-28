import Component from './component';

class Ext {
  getById(id) {
    return document.getElementById(id);
  }

  getComp(comp) {
    return new Component(comp);
  }

  extend() {
    return Object.assign.apply(null, arguments); // immutable object
  }

  createElement(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.children[0];
  }

  isFunction(value) {
    return !!value && typeof value === 'function';
  }
}

export default new Ext;