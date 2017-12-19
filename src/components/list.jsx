import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import Ext, { bind } from '~/core/ext';
import List from '~/core/list';
import { Container } from './container';
import { TextField } from './form';

export default class ListView extends Component {
  constructor(props) {
    super(props);
    Ext.initialState(this, {
      items: props.value || [],
      value: ''
    })
  }

  componentDidMount() {
    $('body').on('click', this.closeOnBlur);
  }

  componentWillUmount() {
    $('body').off('click', this.closeOnBlur);
  }

  render() {
    const { items, value } = this.state,
          { interactive, selective, options = [], autoFocus, ...others } = this.props;

    if (interactive) {
      return <Container className="list-group">
        {items.map((item, index) => <article className="list-group-item removable">
          <TextField value={item} onChange={value => this.updateItem(value, index)} />
          <button className="close"><span onClick={() => this.removeItemAt(index)}>&times;</span></button>
        </article>)}
        <article className="list-group-item">
          <TextField value={value} autoFocus={autoFocus} onChange={this.setValue} onEnter={this.addNewItem} />
        </article>
      </Container>
    }

    if (selective) {
      const list = List(options),
            selectedOptions = List(items).map(item => list.find(opt => opt.code === item)).collect(),
            remainOptions = list.filter(opt => items.indexOf(opt.code) === -1).collect();
      return <Container className="list-group">
        {selectedOptions.map(opt => <article className="list-group-item active" onClick={() => this.toggleItem(opt.code)}>{opt.name}</article>)}
        {remainOptions.map(opt => <article className="list-group-item" onClick={() => this.toggleItem(opt.code)}>{opt.name}</article>)}
    </Container>
    }

    return <Container className="list-group">
      {items.map((item, index) => <article className="list-group-item">{item}</article>)}
    </Container>
  }

  @bind
  addNewItem(newItem) {
    const { items } = this.state;
    items.push(newItem);
    this.updateItems(items);
  }

  updateItem(item, index) {
    const { items } = this.state;
    items[index] = item;
    this.updateItems(items);
  }

  removeItemAt(index) {
    const { items } = this.state;
    items.splice(index, 1);
    this.updateItems(items);
  }

  toggleItem(item) {
    const { items } = this.state;
    const index = items.indexOf(item);
    if (index > -1) {
      items.splice(index, 1);
    } else {
      items.push(item);
    }
    this.updateItems(items);
  }

  updateItems(items) {
    this.setItems(items);
    this.setValue('');
    this.props.onChange(items);
  }

  @bind
  closeOnBlur(e) {
    try {
      let target = e.target.parentElement,
        parentFound = false,
        node = findDOMNode(this);
      while (target != null) {
        if (target === node) {
          parentFound = true;
          break;
        }
        target = target.parentElement;
      }

      if (!parentFound) {
        const { onBlur } = this.props;
        onBlur && onBlur(this.state.items);
      }
    } catch (e) {}
  }
}