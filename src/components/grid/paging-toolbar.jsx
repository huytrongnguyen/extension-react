import React, { Component } from 'react';
import withProps from '~/mixin/with-props';
import bind from '~/mixin/bind';
import { Field, Btn } from '~/components/form';

export default class GridPagingToolbar extends Component {
  constructor(props) {
    super(props);
    const { store: { totalCount, currentPage } } = props;
    this.state = {
      page: totalCount === 0 ? 0 : currentPage
    }
    Ext.generateSetter(this.state, this);
  }

  componentDidMount() {
    this.props.store.subscribe(this.reload);
  }

  componentWillUnmount() {
    this.props.store.unsubscribe(this.reload);
  }

  @withProps
  render({ store: { totalCount, pageSize, currentPage } }) {
    const { page } = this.state,
          firstIndex = (currentPage - 1) * pageSize + 1,
          lastIndex = currentPage * pageSize,
          totalPages = Math.ceil(totalCount / pageSize) || 0;
    return <section className="toolbar top row">
      <div className="col-6">{(totalCount > 0) && `Displaying ${firstIndex} - ${lastIndex} of ${totalCount}`}</div>
        <div className="col-6">
          <div className="float-sm-right">
            <div className="input-group input-group-sm">
              <span className="input-group-btn"><Btn disabled={totalCount === 0} onClick={() => this.loadPage(currentPage)}><i className="fa fa-refresh" /></Btn></span>
              <span className="input-group-btn"><Btn disabled={currentPage === 1} onClick={() => this.loadPage(1)}><i className="fa fa-fast-backward" /></Btn></span>
              <span className="input-group-btn"><Btn disabled={currentPage === 1} onClick={() => this.loadPage(currentPage - 1)}><i className="fa fa-backward" /></Btn></span>
              <span className="input-group-addon">Page</span>
              <Field value={page} className="w5 text-sm-center" disabled={page === 0} onChange={this.setPage} onEnter={page => this.loadPage(page)} />
              <span className="input-group-addon">of {totalPages}</span>
              <span className="input-group-btn"><Btn disabled={totalPages === 0 || currentPage === totalPages} onClick={() => this.loadPage(currentPage + 1)}><i className="fa fa-forward" /></Btn></span>
              <span className="input-group-btn"><Btn disabled={totalPages === 0 || currentPage === totalPages} onClick={() => this.loadPage(totalPages)}><i className="fa fa-fast-forward" /></Btn></span>
            </div>
          </div>
        </div>
    </section>;
  }

  @bind
  reload(store) {
    this.setPage(store.totalCount === 0 ? 0 : store.currentPage);
  }

  @bind
  loadPage(number) {
    const { store } = this.props,
          totalPages = Math.ceil(store.totalCount / store.pageSize) || 0;
    if (0 < number && number <= totalPages) {
      store.loadPage(number);
    } else {
      this.setPage(store.currentPage);
    }
  }
}