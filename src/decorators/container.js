import React, { Component } from 'react'

const container = (config) => (WrappedComponent) => class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      store: {
        data: null
      }
    }
  }

  async componentDidMount() {
    if (config.service && config.service.init) {
      const response = await config.service.init()
      if (response) {
        const { store } = this.state
        store.data = response
        this.setState(() => { store })
      }
      console.log(config.service)
    }
  }

  render() {
    const { store } = this.state
    return <WrappedComponent store={store} service={config.service} />
  }
}

export default container