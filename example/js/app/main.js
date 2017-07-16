import 'babel-polyfill';
import React from 'react';
import Rext from '~/rext';
import CommonService from './services/common';
import Viewport from './components/viewport/viewport';
import Dashboard from './components/dashboard/dashboard';
import Search from './components/search/search';
import NotFound from './components/notfound/notfound';

Rext.launch(async () => {
  await CommonService.initApp();
  return <Viewport />;
});