import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import Ext, { bind } from '~/core/ext';
import List from '~/core/list';
import { Field, Btn } from './base';

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.idProp = props.idProp || 'code';
    this.displayProp = props.displayProp || 'name';
    Ext.initialState(this, {
      show: false,
      searchFilter: '',
      buttonText: props.buttonText || 'Choose...',
      options: this.getOptionFromProp(props),
    });
  }

  componentWillMount() {
    $(document).on('click', this.closeOnBlur);
  }

  componentWillReceiveProps(nextProps) {
    this.setOptions(this.getOptionFromProp(nextProps));
  }

  componentWillUmount() {
    $(document).off('click', this.closeOnBlur);
  }

  render() {
    const { show, options, buttonText, searchFilter } = this.state,
          { autoFocus, className = '', multiple, onBlur, disabled, hideOnEmpty, ...others } = this.props;

    if (!options || !options.length) {
      return !hideOnEmpty && <section className={`dropdown btn-group ${className}`} {...others}>
        <div className="dropdown-inner">
          <Field className="dropdown-text" value={this.getDisplayText()} placeholder={buttonText} disabled />
          <Btn className="dropdown-toggle dropdown-toggle-split" disabled />
        </div>
      </section>
    }

    return <section className={`dropdown btn-group ${className}`} {...others}>
      <div className="dropdown-inner">
        <Field className="dropdown-text" value={this.getDisplayText()} placeholder={buttonText} readOnly disabled={disabled} />
        <Btn className="dropdown-toggle dropdown-toggle-split" onClick={this.toggleDropdown} disabled={disabled} />
      </div>
      {(autoFocus || show) && <div className="dropdown-menu show">
        {multiple && <div className="dropdown-action">
          <Btn className="btn-block" onClick={() => this.toggleSelectAll(options)}>{this.isAllSelected() ? 'Deselect All' : 'Select All'}</Btn>
        </div>}
        <div className="dropdown-action">
          <Field value={searchFilter || ''} onChange={this.setSearchFilter} placeholder="Search..." autoFocus />
        </div>
        <div className="dropdown-list">
          {(!searchFilter ? options : this.getFilteredList(searchFilter)).map(opt => {
            return <div className={`dropdown-item ${opt.selected ? 'selected' : ''}`} onClick={() => this.select(opt[this.idProp])}>
              {opt[this.displayProp]}
            </div>}
          )}
        </div>
      </div>}
    </section>
  }

  getOptionFromProp(props) {
    const values = List(props.multiple ? props.value : [props.value]);
    return List(Ext.clone(props.options || [])).map(opt => {
      opt.selected = values.contains(val => `${val}` === `${opt[this.idProp]}`);
      return opt;
    }).collect()
  }

  getDisplayText() {
    return List(this.state.options).filter(item => item.selected).map(item => item[this.displayProp]).join(',');
  }

  getFilteredList(searchFilter) {
    return !searchFilter
        ? this.state.options
        : List(this.state.options).filter(opt => opt[this.displayProp].toLowerCase().startsWith(searchFilter.toLowerCase())).collect();
  }

  @bind
  toggleDropdown() {
    let { show } = this.state;
    show = !show;
    this.setShow(show);
    if (!show) {
      this.setSearchFilter('');
      const { onBlur, multiple } = this.props,
            selectedValues = List(this.state.options).filter(item => item.selected).map(item => item[this.idProp]).collect();
      onBlur && onBlur(multiple ? selectedValues : selectedValues[0]);
    }
  }

  select(selectedValue) {
    const { multiple } = this.props,
          options = List(this.state.options);
    if (multiple) {
      this.setOptions(options.map(opt => {
        if (opt[this.idProp] === selectedValue) {
          opt.selected = !opt.selected;
        }
        return opt;
      }).collect());
      if (options.count() < 2) {
        this.toggleDropdown();
      }
    } else {
      this.setOptions(options.map(opt => {
        opt.selected = (opt[this.idProp] === selectedValue);
        return opt;
      }).collect());
      this.toggleDropdown();
    }
  }

  toggleSelectAll() {
    const { options } = this.state,
          allSelected = this.isAllSelected();
    this.setOptions(List(options).map(opt => { opt.selected = !allSelected; return opt; }).collect());
  }

  isAllSelected() {
    const { options } = this.state,
          selectedValues = List(options).filter(opt => opt.selected);
    return selectedValues.count() === options.length;
  }

  @bind
  closeOnBlur(e) {
    if (this.props.autoFocus || this.state.show) {
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
          this.toggleDropdown();
        }
      } catch (e) {}
    }
  }
}