import 'babel-polyfill';
import React from 'react';
import Rext from '~/rext';
import Viewport from './components/viewport/viewport';
// import DataPackage from './components/core-concepts/data-package';
// import Architecture from './components/architecture/architecture';
// import GridComponent from './components/ui-components/grid';

Rext.application({
  views: [
    require('./components/getting-started/getting-started'),
    require('./components/core-concepts/component'),
    require('./components/core-concepts/screen-navigation'),
    require('./components/example/dashboard'),
    require('./components/example/search'),
    require('./components/example/details'),
    require('./components/example/notfound'),
  ],
  launch: () => <Viewport />
});