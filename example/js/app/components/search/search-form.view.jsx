import React, { Component } from 'react';
import { withProps, Field, Button } from '@/rext';

export default class extends Component {
  @withProps
  render({ searchForm }) {
    return <section className="form-group form-inline">
      <Field />
      <Button className="btn primary" text="Search" onClick={searchForm.search} />
      <Button className="btn" text="Test" onClick={searchForm.test} />
    </section>;
  }
}