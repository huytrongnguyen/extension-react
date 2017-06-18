import React, { Component } from 'react';
import withProps from '~/mixin/with-props';

export default class GridPagingToolbar extends Component {
  @withProps
  render({ store: { page: { totalElements, firstIndex, lastIndex } } }) {
    return <section className="toolbar top row">
      <div className="col-6">{totalElements && `Displaying ${firstIndex} - ${lastIndex} of ${totalElements}`}</div>
      <div className="col-6 pagination"></div>
    </section>;
  }
}