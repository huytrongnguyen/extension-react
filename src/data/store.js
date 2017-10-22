import Ext from '~/core/ext';
import List from '~/core/list';
import Observable from '~/mixin/observable';
import Ajax from './ajax';
import Model from './model';
import ProxyStore from './proxy-store';

export class Store extends ProxyStore {
  constructor(config) {
    super();
    Ext.extend(this, config);
  }
}

export default config => new Store(config);