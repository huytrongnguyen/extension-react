import DOM from './dom';
import String from './string';
import List from './list';
import Dictionary from './dictionary';

export class Ext {
  constructor() {
    this.SCROLL_WIDTH = this.getScrollWidth();
    this.BORDER_WIDTH = 2;
    this.CHECK_COLUMN_WIDTH = 33;
    this.UNKNOWN_ERROR_MSG = 'An unknown error has occurred.';
    this.XHR = new XMLHttpRequest();

    this.isPrimitive = value => { const type = typeof value; return type === 'string' || type === 'number' || type === 'boolean'; }
    this.isString = value => (typeof value) === 'string';
    this.isFunction = value => !!value && typeof value === 'function';
    this.isObject = value => toString.call(value) === '[object Object]';
    this.isArray = value => toString.call(value) === '[object Array]';

    this.clone = obj => JSON.parse(JSON.stringify(obj)); // deep clone

    this.DOM = DOM;
    this.String = String;
    this.List = List;
    this.Map = Dictionary;
    this.Provider = new Dictionary();
  }

  extend() {
    return Object.assign.apply(null, arguments); // immutable object
  }

  initialState(comp, state) {
    if (!comp || !state) { return; }
    comp.state = state;
    for (let field of Object.keys(state)) {
      comp[`set${String.capitalize(field)}`] = value => comp.setState({ [field]: value });
    }
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

  //#region DOM
  createElement(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.children[0];
  }

  getEl(selector) {
    return DOM(selector);
  }

  getScrollWidth() {
    const outer = this.createElement('<div style="visibility: hidden; width: 100px; overflow: scroll;"></div>');
    document.body.appendChild(outer);
    const widthNoScroll = outer.offsetWidth;

    // add innerdiv
    const inner = this.createElement('<div style="width: 100%;"></div>');
    outer.appendChild(inner);
    const widthWithScroll = inner.offsetWidth;

    // remove divs
    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll;
  }
  //#endregion
}

export default new Ext();

export function bind(target, name, descriptor) {
  const fn = descriptor.value;

  if (typeof fn !== 'function') {
    throw new Error(`@bind decorator is only applied to functions not: ${typeof fn}`);
  }

  return {
    configurable: true,
    get() {
      return fn.bind(this);
    }
  };
}

export function debounce(func, wait = 500) {
  let timeout;
  return function() {
    const context = this,
          args = arguments,
          later = function() {
            func.apply(context, args);
          }

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }
}