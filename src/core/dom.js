import { List } from './list';

class DOM extends List {
  show() {
    this.selectors.each(selector => selector.style.display = 'block');
  }

  hide() {
    this.selectors.each(selector => selector.style.display = 'none');
  }

  // parent() {
  //   this.comp = this.comp.parentElement;
  //   return this;
  // }

  // width() {
  //   return this.comp.clientWidth;
  // }

  // height() {
  //   return this.comp.clientHeight;
  // }

  // find(selector) {
  //   return this.comp.querySelector(selector);
  // }
}

export default (selector) => new DOM(document.querySelectorAll(selector));