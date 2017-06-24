import React, { Component } from 'react';
import Ext from '~/core/ext';
import withProps from '~/mixin/with-props';
import bind from '~/mixin/bind';
import { Field, Button } from '~/components/form';

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
  render({ store: { data, totalCount, pageSize, currentPage } }) {
    const { page } = this.state,
          firstIndex = (currentPage - 1) * pageSize + 1,
          lastIndex = firstIndex + data.count() - 1,
          totalPages = Math.ceil(totalCount / pageSize) || 0;
    return <section className="toolbar top row">
      <div className="col-6">{(totalCount > 0) && `Displaying ${firstIndex} - ${lastIndex} of ${totalCount}`}</div>
      <div className="col-6">
        <div className="float-right">
          <div className="input-group">
            <Button className="input-group-addon" disabled={totalCount === 0} onClick={() => this.loadPage(currentPage)} text="Refresh" />
            <Button className="input-group-addon" disabled={currentPage === 1} onClick={() => this.loadPage(1)} text="First" />
            <Button className="input-group-addon" disabled={currentPage === 1} onClick={() => this.loadPage(currentPage - 1)} text="Previous" />
            <span className="input-group-addon">Page</span>
            <Field value={page} className="w5 text-center input-group-addon" disabled={page === 0} onChange={this.setPage} onEnter={page => this.loadPage(page)} />
            <span className="input-group-addon">of {totalPages}</span>
            <Button className="input-group-addon" disabled={totalPages === 0 || currentPage === totalPages} onClick={() => this.loadPage(currentPage + 1)} text="Next" />
            <Button className="input-group-addon" disabled={totalPages === 0 || currentPage === totalPages} onClick={() => this.loadPage(totalPages)} text="Last" />
          </div>
        </div>
      </div>
    </section>
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