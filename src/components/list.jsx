import React, { PureComponent } from 'react';

export default class ListView extends PureComponent {
  constructor(props) {
    super(props);
    this.onDataChange = () => this.forceUpdate();
  }

  componentDidMount() {
    this.props.store.subscribe(this.onDataChange);
  }

  componentWillUnmount() {
    this.props.store.unsubscribe(this.onDataChange);
  }

  render() {
    const { store, render, draggable, onDragStart, ...others } = this.props;
    return <section className="list-group" {...others}>
      {store.data.map((record, rowIndex) => <section className="list-group-item">
        {render(record, rowIndex)}
      </section>)}
    </section>
  }
}