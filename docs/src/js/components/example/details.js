import React from 'react';
import { Route, Component } from '~/rext';

@Route('/example/details/:name')
@Component({
  view: ({ params }) => <h1>{params.name}</h1>
})
export default class Details { }