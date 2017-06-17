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
  render({ className = '', onChange, onKeyPress, ...others }) {
    return <input type="text" value={this.state.value} className={`form-control ${className}`}
                  onChange={this.onChange}
                  {...others} />;
  }

  @bind
  onChange(e) {
    const { value } = e.target;
    this.setState(() => ({ value }));
    this.props.onChange && this.props.onChange(value);
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
          selection = List(props.value || data);
    this.state = {
      data,
      selection,
      searchFilter: '',
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
      <Field className="dropdown-text" value={selection.map(rec => rec.get(displayField)).collect().join(',') || fieldLabel} readOnly />
      <Button className="dropdown-toggle" onClick={this.toggle} />
      {show && <div className="dropdown-menu">
        <div className="dropdown-action">
          <Field value={searchFilter || ''} onChange={this.filter} placeholder="Search..." />
        </div>
        <div className="dropdown-list">
          {data.map(rec => {
            return <div className={Ext.className({'dropdown-item': true,
                                                  'selected': selection.contains(selected => selected.get(displayField) === rec.get(displayField))})}
                        onClick={() => this.select(rec)}>
              {rec.get(displayField)}
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
      const { onCollapse, store } = this.props;
      onCollapse && onCollapse(this.state.selection.collect());
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
    this.setState(() => ({ selection: List([rec]) }));
    this.toggle();
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
          this.toggle();
        }
      } catch (e) {
        console.error(e);
      }
    }
  }
}