import Ext from '~/core/ext';
import AbstractStore from './abstract-store';

export default class ArrayStore extends AbstractStore {
  constructor(config) {
    super();
    Ext.extend(this, config);
  }
}