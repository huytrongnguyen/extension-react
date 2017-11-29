import React, { PureComponent } from 'react';
import { Route } from '~/rext';

@Route('*')
export default class NotFound extends PureComponent {
  render() {
    return <h1>'{this.props.params.route}' doesn't exist</h1>
  }
}