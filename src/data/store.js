import Ext from '~/core/ext';
import AbstractStore from './abstract-store';
import ProxyStore from './proxy-store';
import ArrayStore from './array-store';

export default config => {
  if (!config.type) {
    return new ProxyStore(config);
  } else if (config.type === 'Array') {
    return new ArrayStore(config);
  } else {
    return new AbstractStore(config);
  }
}