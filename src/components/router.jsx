import React, { Component } from 'react';
import List from '~/core/list';
import Observable from '~/mixin/observable';

const ROUTES = {},
      getRoute = () => window.location.hash.substring(1) || '/',
      getRoutePath = (route) => route.split('/'),
      isParam = (routeName) => routeName.startsWith(':'),
      matchPath = () => {
        const currentRoute = getRoute(),
              params = {};

        if (ROUTES[currentRoute]) {
          return { route: currentRoute, component: ROUTES[currentRoute].component, params };
        }

        const currentPath = getRoutePath(currentRoute);
        for (let key in ROUTES) {
          const route = ROUTES[key],
                routePath = route.path;
          let matched = true;
          List(routePath).each((routeName, index) => {
            if (routeName !== currentPath[index]) {
              if (isParam(routeName)) {
                params[routeName.substring(1)] = currentPath[index];
              } else {
                matched = false;
                return;
              }
            }
          });
          if (matched) {
            return { route: currentRoute, component: route.component, params };
          }
        }

        if (ROUTES['*']) {
          return { route: currentRoute, component: ROUTES['*'].component, params };
        }

        return { route: currentRoute, component: null, params };
      }

export class HashRouter extends Component {
  constructor(props) {
    super(props);
    this.state = matchPath();
  }

  componentDidMount() {
    Observable.fromEvent(window, 'hashchange').subscribe(() => this.setState(() => (matchPath())));
  }

  render() {
    const { route, component, params } = this.state;

    if (!component) {
      console.error('component props should not be null');
      return null;
    }

    return React.createElement(component, { route, params });
  }
}


export class Link extends Component {
  constructor(props) {
    super(props);
    this.state = matchPath();
  }

  componentDidMount() {
    Observable.fromEvent(window, 'hashchange').subscribe(() => this.setState(() => (matchPath())));
  }

  render() {
    const { route, component, params } = this.state,
          { to, className, activeClassName = 'active', text, children, ...others } = this.props;
    return <a href={`#${to}`} className={['nav-link', className, (to === getRoute() ? activeClassName : '')].join(' ')} {...others}>{text || children}</a>;
  }
}

export default (route) => {
  return (component) => {
    ROUTES[route] = {
      route,
      component,
      path: getRoutePath(route)
    };
  }
}