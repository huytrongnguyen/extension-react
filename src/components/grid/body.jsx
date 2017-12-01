import React, { PureComponent } from 'react';
import { Container } from '~/components/container';
import GridRow from './row';

export default class GridBody extends PureComponent {
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
    const { columns = [], store } = this.props;
    return <Container layout="row" className="rx-grid-body">
      <section className="rx-grid-view">
        <div style={{height:1}} />
        {store.getRecords().map((record, rowIndex) => <GridRow columns={columns} record={record} rowIndex={rowIndex} />)}
      </section>
    </Container>
  }
}