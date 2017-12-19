import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Ext from '~/core/ext';
import List from '~/core/list';
import Map from '~/core/map';
import bind from '~/mixins/bind';
import { Field, Btn } from './base';


export default class DateRange extends Component {
  constructor(props) {
    super(props);
    Ext.initialState(this, {
      show: false,
      startDate: props.startDate ? moment(props.startDate, Ext.DATE_STRING_FORMAT) : '',
      endDate: props.endDate ? moment(props.endDate, Ext.DATE_STRING_FORMAT) : '',
      displayText: props.displayText || '',
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setStartDate(nextProps.startDate ? moment(nextProps.startDate, Ext.DATE_STRING_FORMAT) : '');
    this.setEndDate(nextProps.endDate ? moment(nextProps.endDate, Ext.DATE_STRING_FORMAT) : '');
    this.setDisplayText(nextProps.displayText || '');
  }

  componentWillMount() {
    $(document).on('click', this.closeOnBlur);
  }

  componentWillUmount() {
    $(document).off('click', this.closeOnBlur);
  }

  render() {
    const { show, startDate, endDate, displayText } = this.state,
          { className = '', onBlur, disabled, ...others } = this.props;

    return <section className={`dropdown btn-group date-range ${className || ''}`} {...others}>
      <div className="dropdown-inner" onClick={this.toggleDropdown}>
        <Field className="dropdown-text" value={this.getDisplayText() } placeholder={displayText} readOnly disabled={disabled} />
        <Btn className="dropdown-toggle-split" disabled={disabled}>
          <i className="fa fa-calendar" />
        </Btn>
      </div>
      {show && <div className="dropdown-menu show">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6"><DatePicker inline selected={startDate} onChange={this.setStartDate} /></div>
            <div className="col-sm-6"><DatePicker inline selected={endDate} onChange={this.setEndDate} /></div>
          </div>
          <div className="row">
            <div className="col-sm-12 text-sm-right"><Btn text="Clear" onClick={this.clear} /></div>
          </div>
        </div>
      </div>}
    </section>
  }

  getDisplayText() {
    const { startDate, endDate } = this.state;
    if (!startDate && !endDate) {
      return '';
    } else if (!endDate) {
      return `From ${startDate.format(Ext.DATE_DISPLAY_FORMAT)}`;
    } else if (!startDate) {
      return `To ${endDate.format(Ext.DATE_DISPLAY_FORMAT)}`;
    }
    return `${startDate.format(Ext.DATE_DISPLAY_FORMAT)} - ${endDate.format(Ext.DATE_DISPLAY_FORMAT)}`;
  }

  @bind
  clear() {
    this.setStartDate('');
    this.setEndDate('');
  }

  @bind
  toggleDropdown() {
    let { show } = this.state;
    show = !show;
    this.setShow(show);
    if (!show) {
      const { onBlur } = this.props,
            { startDate, endDate } = this.state;
      onBlur && onBlur({
        startDate: startDate ? startDate.format(Ext.DATE_STRING_FORMAT) : '',
        endDate: endDate ? endDate.format(Ext.DATE_STRING_FORMAT) : ''
      });
    }
  }

  @bind
  closeOnBlur(e) {
    const { show } = this.state;
    if (this.props.autoFocus || show) {
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