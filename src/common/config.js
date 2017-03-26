class Config {
  constructor() {
    this._config = {}
  }

  add(config) {
    this._config = Object.assign({}, this._config, config)
  }

  get(key) {
    return this._config[key]
  }

  set(key, value) {
    this._config[key] = value
  }
}

export default new Config