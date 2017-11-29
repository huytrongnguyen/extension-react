import React, { PureComponent } from 'react';
import Ext from '~/core/ext';
import List from '~/core/list';
import Dictionary from '~/core/dictionary';
import Observable from '~/reactive/observable';

export default config => Controller => {
  const WrappedComponent = config.view;
  return class HocComponent extends PureComponent {
    constructor(props) {
      super(props);
      Ext.initialState(this, {
        stores: {},
        services: {},
        [config.componentAs || '$view']: new Controller(props)
      });
      this.onDataChanged = () => this.forceUpdate();
    }

    componentWillMount() {
      this.setStores(List(config.stores).reduce((stores, store) => {
        store.subscribe(this.onDataChanged);
        stores[store.storeId] = store;
        return stores;
      }, {}));

      this.setServices(List(config.services).reduce((services, service) => {
        services[service.serviceId] = service;
        return services;
      }, {}));
    }

    componentDidMount() {
      const { stores } = this.state;
      for (let storeId in stores) {
        const store = stores[storeId];
        store.autoLoad && store.load();
      }
    }

    render() {console.log('render wrapped component')
      return <WrappedComponent {...this.state} {...this.props} />;
    }
  }
}