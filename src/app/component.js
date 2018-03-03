import React, { PureComponent } from 'react';
import Ext from '~/core/ext';
import StoreManager from '~/data/store-manager';

export default config => Controller => {
  const WrappedComponent = config.view;

  return class HocComponent extends PureComponent {
    constructor(props) {
      super(props);
      const stores = Ext.List(config.stores).reduce((stores, storeId) => {
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

    componentDidMount() {
      Ext.Map(this.state.stores).values().each(store => {
        if (store.autoLoad) {
          store.load();
        }
      });
    }

    render() {
      return <WrappedComponent {...this.state} {...this.props} />;
    }
  }
}