import React, { Component } from 'react';
import { bind } from '~/rext';
import CardStore from '@/stores/card';

export default class Card extends Component {
  componentDidMount() {
    CardStore.clearData();
    CardStore.load();
    CardStore.subscribe(this.reload);
  }

  componentWillUnmount() {
    CardStore.unsubscribe(this.reload);
  }

  render() {
    const records = CardStore.getData();
    return <section className="rx-grid" style={{overflow:'visible'}}>
      <section className="rx-grid-header">
        <div className="d-flex flex-row rx-grid-header-container">
          <div className="rx-grid-column-header text-sm-center" style={{width:'20%'}}>ID</div>
          <div className="rx-grid-column-header text-sm-center" style={{width:'20%'}}>Name</div>
          <div className="rx-grid-column-header text-sm-center" style={{width:'20%'}}>Type</div>
          <div className="rx-grid-column-header text-sm-center" style={{width:'20%'}}>Armor</div>
          <div className="rx-grid-column-header text-sm-center" style={{width:'20%'}}>Weapon</div>
        </div>
      </section>
      <section className="rx-grid-body" style={{overflow:'visible'}}>
        <section className="rx-grid-view">
          {records.map(record => <article className="d-flex flex-row rx-grid-row">
            <div className="rx-grid-cell" style={{width:'20%'}}>{record.get('Id')}</div>
            <div className="rx-grid-cell" style={{width:'20%'}}>{record.get('Name')}</div>
            <div className="rx-grid-cell" style={{width:'20%'}}>{record.get('Type')}</div>
            <div className="rx-grid-cell" style={{width:'20%'}}>{record.get('ArmorUsable')}</div>
            <div className="rx-grid-cell" style={{width:'20%'}}>{record.get('WeaponUsable')}</div>
          </article>)}
        </section>
      </section>
    </section>;
  }

  @bind
  reload() {
    this.forceUpdate();
  }
}