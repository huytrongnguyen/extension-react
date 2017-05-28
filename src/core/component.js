import { findDOMNode } from 'react-dom';

export default class {
  constructor(comp) {
    this.comp = findDOMNode(comp);
  }

  parent() {
    this.comp = this.comp.parentNode;
    return this;
  }

  width() {
    return this.comp.clientWidth;
  }

  height() {
    return this.comp.clientHeight;
  }
}