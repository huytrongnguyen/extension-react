import React, { Component } from 'react';
import { Container, Grid, Dropdown } from '@/rext';
import CardStore from '#/stores/card';
import CardTypeStore from '#/stores/card-type';

export default class SearchResult extends Component {
  render() {
    return <Container>
      <Grid store={CardStore} checkColumn paging>
        <div text="ID" dataIndex="Id" className="text-center" style={{width:150}} />
        <div text="Name" dataIndex="Name" className="text-center" style={{width:250}} editable />
        <div text="Type" dataIndex="Type" className="text-center" style={{width:100}} editable={{type:'dropdown',store:CardTypeStore,fieldLabel:'Card Type'}} />
        <div text="Introduction" dataIndex="Introduction" className="text-center" style={{width:1000}} />
        <div text="STR" dataIndex="STR" className="text-center" style={{width:50}} />
        <div text="AGI" dataIndex="AGI" className="text-center" style={{width:50}} />
        <div text="HP" dataIndex="HP" className="text-center" style={{width:50}} />
        <div text="DEX" dataIndex="DEX" className="text-center" style={{width:50}} />
        <div text="INT" dataIndex="INT" className="text-center" style={{width:50}} />
        <div text="SEN" dataIndex="SEN" className="text-center" style={{width:50}} />
        <div text="Armor" dataIndex="ArmorUsable" className="text-center" style={{width:100}} />
        <div text="Weapon" dataIndex="WeaponUsable" className="text-center" style={{width:100}} />
      </Grid>
    </Container>;
  }
}