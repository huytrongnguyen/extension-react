import Ext from '~/core/ext';
import ProxyStore from './proxy-store';

class Store extends ProxyStore {
  constructor(config) {
    super();
    Ext.extend(this, config);
  }
}

export default config => new Store(config);