import Component from './component';
import String from './string';
import Number from './number';
import List from './list';

class Ext {
  constructor() {
    this.SCROLL_WIDTH = this.getScrollWidth();
    this.BORDER_WIDTH = 2;
    this.CHECK_COLUMN_WIDTH = 33;
    this.COLOR_DEFAULTS = [
      '#94ae0a',
      '#115fa6',
      '#a61120',
      '#ff8809',
      '#ffd13e',
      '#a61187',
      '#24ad9a',
      '#7c7474',
      '#a66111'
    ];
  }

  getById(id) {
    return document.getElementById(id);
  }

  getComp(comp) {
    return new Component(comp);
  }

  createElement(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.children[0];
  }

  append(html) {
    const dom = this.createElement(html);
    document.body.appendChild(dom);
    return dom;
  }

  extend() {
    return Object.assign.apply(null, arguments); // immutable object
  }

  clone(obj) {
    return JSON.parse(JSON.stringify(obj)); // deep clone
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

  isString(value) {
    return typeof value === 'string';
  }

  className(...expressions) {
    const cls = [];

    List(expressions).each(exp => {
      if (!exp) {
        return;
      }

      if (typeof exp === 'string') {
        cls.push(exp);
      } else if (this.isObject(exp)) {
        for (let key in exp) {
          if (exp[key] === true) {
            cls.push(key);
          }
        }
      }
    });
    return cls.join(' ');
  }

  initialState(comp, state) {
    if (!comp || !state) {
      return;
    }
    comp.state = state;
    for (let field of Object.keys(state)) {
      comp[`set${String.capitalize(field)}`] = value => comp.setState({ [field]: value });
    }
  }

  guid(prefix) {
    return `${prefix || ''}-${(Math.random() * (1<<30)).toString(16).replace('.', '')}`;
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