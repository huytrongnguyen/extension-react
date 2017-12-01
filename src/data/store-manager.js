import { Dictionary } from '~/core/dictionary';

class StoreManager extends Dictionary {
  set(key, value) {
    this.data[key] = value;
  }

  get(key) {
    return this.data[key];
  }
}

export default new StoreManager();