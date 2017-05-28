import React, { Component } from 'react';
import { Container, Grid } from '@/rext';
import CardStore from '#/stores/card';

export default class extends Component {
  render() {
    return <Container>
      <Grid store={CardStore}>
        <div text="ID" dataIndex="Id" />
        <div text="Name" dataIndex="Name" />
        <div text="Type" dataIndex="Type" />
        <div text="Introduction" dataIndex="Introduction" />
        <div text="STR" dataIndex="STR" />
        <div text="AGI" dataIndex="AGI" />
        <div text="HP" dataIndex="HP" />
        <div text="DEX" dataIndex="DEX" />
        <div text="INT" dataIndex="INT" />
        <div text="SEN" dataIndex="SEN" />
        <div text="Armor" dataIndex="ArmorUsable" />
        <div text="Weapon" dataIndex="WeaponUsable" />
      </Grid>
    </Container>;
  }
}