import { findDOMNode } from 'react-dom';

export default class {
  constructor(comp) {
    this.comp = findDOMNode(comp);
  }

  parent() {
    this.comp = this.comp.parentElement;
    return this;
  }

  width() {
    return this.comp.clientWidth;
  }

  height() {
    return this.comp.clientHeight;
  }

  find(selector) {
    return this.comp.querySelector(selector);
  }
}