import React, { PureComponent } from 'react';
import Ext from '~/core/ext';
import List from '~/core/list';
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
            controller = new Controller(props);

      controller.stores = stores;

      Ext.initialState(this, {
        stores,
        [config.componentAs || '$view']: controller
      });
    }

    render() {
      return <WrappedComponent {...this.state} {...this.props} />;
    }
  }
}