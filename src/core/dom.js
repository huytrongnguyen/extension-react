import { List } from './collection';

class Dom extends List {
  constructor() {
    super();
    this.display = status => this.selectors.each(selector => selector.style.display = status);
    this.show = () => this.display('block');
    this.hide = () => this.display('hide');
  }
}

export default (selector) => new Dom(document.querySelectorAll(selector));