import React, { Component } from 'react';
import Ext from '~/core/ext';
import List from '~/core/list';
import Map from '~/core/map';
import Observable from '~/mixin/observable';

export default (config) => (Controller) => {
  const WrappedComponent = config.view;
  return class HocComponent extends Component {
    constructor(props) {
      super(props);
      Ext.initialState(this, {
        stores: {},
        [config.controllerAs || config.componentAs || 'controller']: new Controller()
      });
      this.onDataChange = () => this.forceUpdate();
    }

    componentWillMount() {
      this.setStores(List(config.stores).reduce((stores, store) => {
        store.subscribe(this.onDataChanged.bind(this));
        stores[store.storeId] = store;
        return stores;
      }, {}));
    }

    async componentDidMount() {
      const { stores } = this.state;
      for (let storeId in stores) {
        if (stores[storeId].autoLoad) {
          await stores[storeId].load();
        }
      }
    }

    componentDidCatch(error) {
      // TODO need to show a message box in this case
      console.log(error);
    }

    componentWillUnmount() {
      Map(this.stores).each((storeId, store) => store.unsubscribe(this.onDataChange));
    }

    render() {
      return <WrappedComponent {...this.state} {...this.props} />;
    }
  }
}