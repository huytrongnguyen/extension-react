import React, { PureComponent } from 'react';
import Ext from '~/core/ext';
import List from '~/core/list';
import Dictionary from '~/core/dictionary';
import Observable from '~/reactive/observable';
import StoreManager from '~/data/store-manager';

export default config => Controller => {
  const WrappedComponent = config.view;

  return class HocComponent extends PureComponent {
    constructor(props) {
      super(props);
      const stores = List(config.stores).reduce((stores, storeId) => {
              stores[storeId] = StoreManager.get(storeId);
              return stores;
            }, {}),
            services = List(config.services).reduce((services, service) => {
              services[service.serviceId] = service;
              return services;
            }, {}),
            controller = new Controller(props);

      controller.stores = stores;
      controller.services = services;

      Ext.initialState(this, {
        stores,
        services,
        [config.componentAs || '$view']: controller
      });
    }

    render() {
      return <WrappedComponent {...this.state} {...this.props} />;
    }
  }
}