import React from 'react';
import { render } from 'react-dom';
import Ext from '~/core/ext';
import StoreManager from '~/data/store-manager';

export default config => Viewport => {
  Ext.List(config.stores).each(store => {
    store = store.default;
    StoreManager.set(store.storeId, store);
  });
  const root = Ext.createElement('<div id="react-root"></div>');
  document.body.appendChild(root);
  render(<Viewport />, root);
}