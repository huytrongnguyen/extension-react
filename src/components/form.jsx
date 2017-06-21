import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import Ext from '~/core/ext';
import List from '~/core/list';
import Observable from '~/mixin/observable';
import withProps from '~/mixin/with-props';
import withState from '~/mixin/with-state';
import bind from '~/mixin/bind';

export class Field extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || ''
    }
  }

  @withProps
  render({ className = '', onChange, onKeyPress, onBlur, ...others }) {
    return <input type="text" value={this.state.value} className={`form-control ${className}`}
                  onChange={this.onChange} onKeyPress={this.onEnter} onBlur={this.onBlur}
                  {...others} />;
  }

  @bind
  onChange(e) {
    const { value } = e.target;
    this.setState(() => ({ value }));
    this.props.onChange && this.props.onChange(value);
  }

  @bind
  onEnter(e) {
    const { value } = e.target;
    if (e.key === 'Enter') {
      this.props.onEnter && this.props.onEnter(value);
      this.props.onBlur && this.props.onBlur(value);
    }
  }

  @bind
  onBlur(e) {
    const { value } = e.target;
    this.props.onBlur && this.props.onBlur(value);
  }
}

export class Button extends Component {
  @withProps
  render({ text, children, className = '', ...others }) {
    return <button className={`btn ${className}`} {...others}>{text || children}</button>
  }
}

export class Dropdown extends Component {
  constructor(props) {
    super(props);
    const data = [],
          selection = List(props.value ? [props.value] : data);
    this.state = {
      data,
      selection,
      searchFilter: '',
      multiple: false,
      show: false
    }
  }

  componentWillMount() {
    Observable.fromEvent(document, 'click').subscribe(this.closeOnBlur);
  }

  componentWillUnmount() {
    Observable.fromEvent(document, 'click').unsubscribe(this.closeOnBlur);
  }

  @withProps
  render({ className = '', fieldLabel, displayField = 'name', ...others }) {
    const { show, data, selection, searchFilter } = this.state;
    return <section className={`dropdown ${className}`}>
      <Field className="dropdown-text" value={selection.map(rec => (rec.get ? rec.get(displayField) : rec)).collect().join(',') || fieldLabel} readOnly />
      <Button className="dropdown-toggle" onClick={this.toggle} />
      {show && <div className="dropdown-menu">
        <div className="dropdown-action">
          <Field value={searchFilter || ''} onChange={this.filter} placeholder="Search..." />
        </div>
        <div className="dropdown-list">
          {data.map(rec => {
            const className = Ext.className(['dropdown-item',
                {'selected': selection.contains(selected => (selected.get ? selected.get(displayField) : selected) === rec.get(displayField))}]);
            return <div className={className}
                        onClick={() => this.select(rec)}>
              {rec.get ? rec.get(displayField) : rec}
            </div>
          })}
        </div>
      </div>}
    </section>
  }

  @bind
  async toggle() {
    let { show } = this.state;
    show = !show;
    this.setState(() => ({ show }));
    if (!show) {
      const { onCollapse, store } = this.props,
            { multiple, selection } = this.state;
      onCollapse && onCollapse(multiple ? selection.map(rec => rec.data).collect() : selection.collect()[0].data);
      this.setState(() => ({ searchFilter: '', data: store.getData() }));
    } else {
      const { store, queryMode } = this.props;
      let { data } = this.state;
      if (!data || !data.length) {
        if (queryMode === 'remote') {
          await store.load();
        }
        data = store.getData();
        this.setState(() => ({ data }));
      }
    }
  }

  @bind
  select(rec) {
    const { onSelect } = this.props;
    onSelect && onSelect(rec);
    this.setState({ selection: List([rec]) }, this.toggle);
  }

  @bind
  filter(searchFilter) {
    const { store, displayField } = this.props;
    this.setState(() => ({
      searchFilter,
      data: store.filterBy(rec => rec.get(displayField).toLowerCase().startsWith(searchFilter.toLowerCase())).collect()
    }));
  }

  @bind
  closeOnBlur(e) {
    if (this.state.show) {
      let node = null;
      try {
        node = findDOMNode(this)
      } catch (e) {
        node = null;
      }

      if (node === null) {
        return;
      }

      let target = e.target.parentElement,
        parentFound = false;
      while (target != null) {
        if (target === node) {
          parentFound = true;
          break;
        }
        target = target.parentElement;
      }

      if (!parentFound) {
        this.toggle();
      }
    }
  }
}

export class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked
    };
  }

  render() {
    const { checked } = this.state,
          { ...others } = this.props;
    return <input type="checkbox" checked={checked} onChange={this.toggleCheck} {...others} />;
  }

  @bind
  toggleCheck() {
    let { checked } = this.state;
    checked = !checked;
    this.setState(() => ({ checked }));
    const { onCheckChange, model } = this.props;
    onCheckChange && onCheckChange(checked, model);
  }
}