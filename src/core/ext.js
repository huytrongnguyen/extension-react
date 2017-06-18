import Component from './component';
import String from './string';

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

  isObject(value) {
    return toString.call(value) === '[object Object]';
  }

  isArray(value) {
    return toString.call(value) === '[object Array]';
  }

  isPrimitive(value) {
    const type = typeof value;
    return type === 'string' || type === 'number' || type === 'boolean';
  }

  className(expression) {
    const cls = [];
    for (let key of Object.keys(expression)) {
      if (expression[key]) {
        cls.push(key);
      }
    }
    return cls.join(' ');
  }

  generateSetter(state, comp) {
    for (let field of Object.keys(state)) {
      comp[`set${String.capitalize(field)}`] = (value) => comp.setState(() => ({ [field]: value }));
    }
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