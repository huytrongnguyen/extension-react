import 'babel-polyfill';
import React from 'react';
import Rext from '~/rext';
import Viewport from './components/viewport/viewport';

Rext.application({
  stores: [
    require('./components/example/stores/card'),
  ],
  views: [
    require('./components/getting-started/getting-started'),
    require('./components/core-concepts/component'),
    require('./components/core-concepts/screen-navigation'),
    require('./components/core-concepts/data-package'),
    require('./components/architecture/architecture'),
    // require('./components/ui-components/grid'),
    require('./components/example/dashboard'),
    require('./components/example/search'),
    require('./components/example/details'),
    require('./components/example/notfound'),
    require('./components/example/cards'),
  ],
  launch: () => <Viewport />
});