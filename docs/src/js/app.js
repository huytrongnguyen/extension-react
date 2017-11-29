import 'babel-polyfill';
import React from 'react';
import Rext from '~/rext';
import Viewport from './components/viewport/viewport';
// import './components/getting-started/getting-started';
// import RextComponent from './components/core-concepts/component';
// import DataPackage from './components/core-concepts/data-package';
// import ScreenNavigation from './components/core-concepts/screen-navigation';
// import Architecture from './components/architecture/architecture';
// import GridComponent from './components/ui-components/grid';

Rext.application({
  views: [
    require('./components/getting-started/getting-started'),
    require('./components/core-concepts/component'),
    require('./components/example/dashboard/dashboard'),
  ],
  launch: () => <Viewport />
});