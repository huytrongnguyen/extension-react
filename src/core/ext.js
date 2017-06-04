import Component from './component';

class Ext {
  constructor() {
    this.SCROLL_WIDTH = this.getScrollWidth();
    this.BORDER_WIDTH = 2;
  }

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

  getScrollWidth() {
    var outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

    document.body.appendChild(outer);

    var widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = "scroll";

    // add innerdiv
    var inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);

    var widthWithScroll = inner.offsetWidth;

    // remove divs
    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll;
  }
}

export default new Ext;