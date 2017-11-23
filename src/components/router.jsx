import React, { PureComponent } from 'react';
import Ext from '~/core/ext';
import List from '~/core/list';
import Observable from '~/reactive/observable';

const ROUTES = {},
      getRoute = () => window.location.hash.substring(1) || '/',
      getRoutePath = route => route.split('/');

export function Route(route) {
  return comp => {
    ROUTES[route] = {
      route,
      comp,
      path: getRoutePath(route)
    }
  }
}

export class Link extends PureComponent {
  constructor(props) {
    super(props);
    this.onHashChange = () => this.forceUpdate();
  }

  componentDidMount() {
    Observable.fromEvent(window, 'hashchange').subscribe(this.onHashChange);
  }

  render() {
    const { to, className = '', activeClassName = 'active', text, children, ...others } = this.props;
    return <a href={`#${to}`} className={Ext.className('nav-link', className, { [activeClassName]: to === getRoute() })} {...others}>
      {text || children}
    </a>
  }
}

export class HashRouter extends PureComponent {
  constructor(props) {
    super(props);
    Ext.initialState(this, matchPath());
    this.onHashChange = () => this.setState(matchPath());
  }

  componentDidMount() {
    Observable.fromEvent(window, 'hashchange').subscribe(this.onHashChange);
  }

  render() {
    const { route, comp, params } = this.state;

    if (!comp) {
      console.error('Component not found!');
      return null;
    }

    return React.createElement(comp, { route, params });
  }
}

function matchPath() {
  const params = {},
        currentRoute = getRoute();

  // basic route (without params)
  if (ROUTES[currentRoute]) {
    return { route: currentRoute, comp: ROUTES[currentRoute].comp, params };
  }

  // advanced route (with params)
  const currentPath = getRoutePath(currentRoute);
  for(let route in ROUTES) {
    const mapRoute = ROUTES[route],
          routePath = mapRoute.path;

    let matched = true;
    List(mapRoute.path).each((routeName, index) => {
      if (routeName !== currentPath[index]) {
        if (routeName.startsWith(':')) { // detect param value
          params[routeName.substring(1)] = currentPath[index];
        } else {
          matched = false;
          return;
        }
      }
    });

    if (matched) {
      return { route: currentRoute, comp: mapRoute.comp, params };
    }
  }

  // with not found screen
  if (ROUTES['*']) {
    return { route: currentRoute, comp: ROUTES['*'].comp, params };
  }

  // without not found screen
  return { route: currentRoute, comp: null, params };
}