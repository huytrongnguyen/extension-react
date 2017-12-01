(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rext = require('../../../src/rext');

var _rext2 = _interopRequireDefault(_rext);

var _viewport = require('./components/viewport/viewport');

var _viewport2 = _interopRequireDefault(_viewport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_rext2.default.application({
  stores: [require('./components/example/stores/card')],
  views: [require('./components/getting-started/getting-started'), require('./components/core-concepts/component'), require('./components/core-concepts/screen-navigation'), require('./components/core-concepts/data-package'), require('./components/architecture/architecture'),
  // require('./components/ui-components/grid'),
  require('./components/example/dashboard'), require('./components/example/search'), require('./components/example/details'), require('./components/example/notfound'), require('./components/example/cards')],
  launch: function launch() {
    return _react2.default.createElement(_viewport2.default, null);
  }
});

},{"../../../src/rext":31,"./components/architecture/architecture":2,"./components/core-concepts/component":3,"./components/core-concepts/data-package":4,"./components/core-concepts/screen-navigation":5,"./components/example/cards":6,"./components/example/dashboard":7,"./components/example/details":8,"./components/example/notfound":9,"./components/example/search":10,"./components/example/stores/card":11,"./components/getting-started/getting-started":12,"./components/viewport/viewport":13,"babel-polyfill":"babel-polyfill","react":"react"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rext = require('../../../../../src/rext');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Architecture = (_dec = (0, _rext.Route)('/architecture'), _dec(_class = function (_PureComponent) {
  _inherits(Architecture, _PureComponent);

  function Architecture() {
    _classCallCheck(this, Architecture);

    return _possibleConstructorReturn(this, (Architecture.__proto__ || Object.getPrototypeOf(Architecture)).apply(this, arguments));
  }

  _createClass(Architecture, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _rext.Container,
        { className: 'main container scrollable' },
        _react2.default.createElement(
          'h1',
          { className: 'mb-md' },
          'Application Architecture'
        ),
        _react2.default.createElement(
          'pre',
          { className: 'mb-md' },
          '// ./app.js\nimport \'babel-polyfill\';\nimport React from \'react\';\nimport Rext from \'ext-react\';\nimport Viewport from \'./components/viewport/viewport\';\n\nRext.application({\n  stores: [\n    require(\'./stores/data\'),\n  ],\n  views: [\n    require(\'./components/search/search\'),\n  ],\n  launch: () => <Viewport />\n});'
        ),
        _react2.default.createElement(
          'pre',
          { className: 'mb-md' },
          '// ./stores/card\nimport { Store } from \'ext-react\';\n\nexport default Store({\n  storeId: \'DataStore\',\n  proxy: {\n    url: \'/data/sample.json\'\n  }\n})'
        ),
        _react2.default.createElement(
          'pre',
          { className: 'mb-md' },
          '// ./components/search/search.js\nimport React from \'react\';\nimport Rext, { Container } from \'ext-react\';\nimport SearchForm from \'./search-form\';\nimport SearchResult from \'./search-result\';\n\nexport function Search() {\n  return <Container>\n    <SearchForm />\n    <SearchResult />\n  </Container>\n}'
        ),
        _react2.default.createElement(
          'pre',
          { className: 'mb-md' },
          '// ./components/search/search-form.js\nimport { Component, bind } from \'ext-react\';\nimport SearchFormView from \'./search-form.view\';\n\n@Component({\n  store: [ \'DataStore\' ]\n  view: SearchFormView\n})\nexport default class SearchForm {\n  constructor() {\n    this.criteria = {\n      name: \'\',\n      statuses: [],\n      purposes: [],\n      activities: [],\n      products: []\n    };\n  }\n\n  @bind\n  search(criteria) {\n    const { DataStore } = this.stores;\n    DataStore.rejectChanges();\n    Rext.extend(DataStore.proxy, {\n      params: criteria,\n      fail: (response) => {\n        console.err(response.message);\n        DataStore.clearData();\n      }\n    });\n    DataStore.load();\n  }\n\n  @bind\n  clearSearchResult(comp) {\n    const { DataStore } = this.stores;\n    DataStore.rejectChanges();\n    DataStore.clearData();\n    comp.setState(() => (this.criteria));\n  }\n}'
        ),
        _react2.default.createElement(
          'pre',
          { className: 'mb-md' },
          '// ./components/search/search-form.view.jsx\nimport React, { PureComponent } from \'react\';\nimport { Field, Dropdown, Button } from \'ext-react\';\n\nexport default class SearchFormView extends PureComponent {\n  constructor(props) {\n    super(props);\n    Ext.initialState(this, props.$view.criteria);\n  }\n\n  render() {\n    const { name, statuses, purposes, activities, products } = this.state,\n          { search, clearSearchResult } = this.props.$view;\n    return <section>\n      <Field value={name} placeholder="Name" onChange={this.setName} />\n      <Dropdown multiple options={[]} value={statuses} onBlur={this.setStatuses} />\n      <Dropdown multiple options={[]} value={purposes} onBlur={this.setPurposes} />\n      <Dropdown multiple options={[]} value={activities} onBlur={this.setActivities} />\n      <Dropdown multiple options={[]} value={products} onBlur={this.setProducts} />\n      <Button type="primary" text="Search" onClick={() => search(this.state)} />\n      <Button text="Clear" onClick={() => clearSearchResult(this)} />\n    </section>\n  }\n}'
        ),
        _react2.default.createElement(
          'pre',
          { className: 'mb-md' },
          '// ./components/search/search-result.jsx\nimport React, { PureComponent } from \'react\';\nimport Rext, { Container, Grid } from \'ext-react\';\n\nexport default class SearchResult extends PureComponent {\n  constructor() {\n    this.DataStore = Rext.StoreManager.get(\'DataStore\');\n  }\n\n  render() {\n    const { name, recordStatuses, purposes, activities, products } = this.state,\n          { search, clearSearchResult } = this.props.$view;\n    return <Container>\n      <Grid store={this.DataStore}>\n        <div text="ID" dataIndex="id" />\n        <div text="Name" dataIndex="name" />\n        <div text="Status" dataIndex="status" />\n        <div text="Purpose" dataIndex="purpose" />\n        <div text="Activity" dataIndex="activity" />\n        <div text="Product" dataIndex="product" />\n      </Grid>\n    </Container>\n  }\n}'
        )
      );
    }
  }]);

  return Architecture;
}(_react.PureComponent)) || _class);
exports.default = Architecture;

},{"../../../../../src/rext":31,"react":"react"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rext = require('../../../../../src/rext');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RextComponent = (_dec = (0, _rext.Route)('/core-concepts/component'), _dec(_class = function (_PureComponent) {
  _inherits(RextComponent, _PureComponent);

  function RextComponent() {
    _classCallCheck(this, RextComponent);

    return _possibleConstructorReturn(this, (RextComponent.__proto__ || Object.getPrototypeOf(RextComponent)).apply(this, arguments));
  }

  _createClass(RextComponent, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _rext.Container,
        { className: 'main container scrollable' },
        _react2.default.createElement(
          'h1',
          { className: 'mb-md' },
          'Component'
        ),
        _react2.default.createElement(
          'p',
          { className: 'mb-md' },
          'A component in Extension React is the combination of a React Component and a component class that controls a portion of the screen. Here is an example of a component that display a simple string:'
        ),
        _react2.default.createElement(
          'pre',
          { className: 'mb-md' },
          'import React, { PureComponent } from \'react\';\nimport { Component } from \'ext-react\';\n\nclass DashboardView extends PureComponent {\n  render() {\n    return <h1>{this.props.$view.title}</h1>;\n  }\n}\n\n@Component({\n  view: DashboardView\n})\nexport default class Dashboard {\n  constructor() {\n    this.title = \'Dashboard\';\n  }\n}'
        ),
        _react2.default.createElement(
          'p',
          { className: 'mb-md' },
          'Every component begins with an ',
          _react2.default.createElement(
            'code',
            null,
            '@Component'
          ),
          ' decorator function that takes a ',
          _react2.default.createElement(
            'em',
            null,
            'metadata'
          ),
          ' object. The metadata object describes how the React Component and component class work together. That\'s mean you can access any property or method of component class via ',
          _react2.default.createElement(
            'code',
            null,
            'this.props.$view'
          ),
          '.'
        ),
        _react2.default.createElement(
          'p',
          { className: 'mb-md' },
          'Actually, with the above example, it can be implemented like this:'
        ),
        _react2.default.createElement(
          'pre',
          { className: 'mb-md' },
          'import { Component } from \'ext-react\';\n\n@Component({\n  view: ({ $view }) => <h1>{$view.title}</h1>\n})\nexport default class Dashboard {\n  constructor() {\n    this.title = \'Dashboard\';\n  }\n}'
        ),
        _react2.default.createElement(
          'p',
          { className: 'mb-md' },
          'Extension React provide a new way to work with state:'
        ),
        _react2.default.createElement(
          'pre',
          { className: 'mb-md' },
          '// ./components/search/search.view.jsx\nimport React, { Component } from \'react\';\nimport Rext from \'extension-react\';\n\nexport default class SearchView extends Component {\n  constructor(props) {\n    super(props);\n    Rext.initialState(this, {\n      name: props.name\n    });\n  }\n\n  componentWillReceiveProps(nextProps) {\n    this.setName(nextProps.name);\n  }\n  ...\n}'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Instead of using ',
          _react2.default.createElement(
            'code',
            null,
            'this.setState((prevState, props) => ({ name: props.name }))'
          ),
          ' to update the state, you can use ',
          _react2.default.createElement(
            'code',
            null,
            'this.setName(props.name)'
          ),
          ' to make it easier to understand and more natural by using ',
          _react2.default.createElement(
            'code',
            null,
            'Rext.initialState'
          ),
          ' function to declare the state in constructor.'
        )
      );
    }
  }]);

  return RextComponent;
}(_react.PureComponent)) || _class);
exports.default = RextComponent;

},{"../../../../../src/rext":31,"react":"react"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rext = require('../../../../../src/rext');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DataPackage = (_dec = (0, _rext.Route)('/core-concepts/data-package'), _dec(_class = function (_PureComponent) {
  _inherits(DataPackage, _PureComponent);

  function DataPackage() {
    _classCallCheck(this, DataPackage);

    return _possibleConstructorReturn(this, (DataPackage.__proto__ || Object.getPrototypeOf(DataPackage)).apply(this, arguments));
  }

  _createClass(DataPackage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _rext.Container,
        { className: 'main container scrollable' },
        _react2.default.createElement(
          'h1',
          { className: 'mb-md' },
          'Data Package'
        ),
        _react2.default.createElement(
          'p',
          { className: 'mb-md' },
          'The data package is what loads and saves all of the data in your application.'
        ),
        _react2.default.createElement(
          'h3',
          { className: 'mb-md' },
          'Models'
        ),
        _react2.default.createElement(
          'p',
          { className: 'mb-md' },
          'The centerpiece of the data package is `Model` which represents an entity in an application.'
        ),
        _react2.default.createElement(
          'h3',
          { className: 'mb-md' },
          'Stores'
        ),
        _react2.default.createElement(
          'p',
          { className: 'mb-md' },
          'The ',
          _react2.default.createElement(
            'code',
            null,
            'Store'
          ),
          ' class encapsulates a client side cache of ',
          _react2.default.createElement(
            'code',
            null,
            'Model'
          ),
          ' objects.'
        ),
        _react2.default.createElement(
          'pre',
          { className: 'mb-md' },
          'import { Store } from \'ext-react\'\n\nexport default Store({\n  storeId: \'CardStore\',\n  proxy: {\n    url: \'/data/card.json\'\n  }\n})'
        ),
        _react2.default.createElement(
          'p',
          { className: 'mb-md' },
          'In the example above we configured an AJAX proxy to load data from the url ',
          _react2.default.createElement(
            'code',
            null,
            '/api/user/search'
          ),
          '. Stores load data via ',
          _react2.default.createElement(
            'code',
            null,
            'proxy'
          ),
          ' with this following structure:'
        ),
        _react2.default.createElement(
          'pre',
          { className: 'mb-md' },
          '{\n  url:    /* The URL from which to request the data object */,\n  method: /* The default HTTP method to be used for requests. If not set, GET will be used. */\n  params: /* Request parameters sent as json data */\n  reader: /* Use to decode the server\'s response */\n}'
        ),
        _react2.default.createElement(
          'p',
          { className: 'mb-md' },
          'Stores can also load data inline. Internally, Store converts each of the objects we pass in as cfg-data into Model instances:'
        ),
        _react2.default.createElement(
          'pre',
          { className: 'mb-md' },
          'import { Store } from \'ext-react\'\n\nexport default Store({\n  storeId: \'UserStore\',\n  data: [\n    {firstName: \'Peter\',   lastName: \'Venkman\'},\n    {firstName: \'Egon\',    lastName: \'Spengler\'},\n    {firstName: \'Ray\',     lastName: \'Stantz\'},\n    {firstName: \'Winston\', lastName: \'Zeddemore\'}\n  ]\n})'
        ),
        _react2.default.createElement(
          'p',
          { className: 'mb-md' },
          'Now, just bind a store to the ',
          _react2.default.createElement(
            'code',
            null,
            'Component'
          ),
          ':'
        ),
        _react2.default.createElement(
          'pre',
          { className: 'mb-md' },
          'import React, { Component } from \'react\';\nimport { bind } from \'ext-react\';\nimport CardStore from \'~/stores/card\';\n\nexport default class Card extends Component {\n  componentDidMount() {\n    CardStore.clearData();\n    CardStore.load();\n    CardStore.subscribe(this.reload);\n  }\n\n  componentWillUnmount() {\n    CardStore.unsubscribe(this.reload);\n  }\n\n  render() {\n    const records = CardStore.getData();\n    return <section>\n      <section className="rx-grid-header">\n        <div className="d-flex flex-row rx-grid-header-container">\n          <div className="rx-grid-column-header text-sm-center" style={{width:\'20%\'}}>ID</div>\n          <div className="rx-grid-column-header text-sm-center" style={{width:\'20%\'}}>Name</div>\n          <div className="rx-grid-column-header text-sm-center" style={{width:\'20%\'}}>Type</div>\n          <div className="rx-grid-column-header text-sm-center" style={{width:\'20%\'}}>Armor</div>\n          <div className="rx-grid-column-header text-sm-center" style={{width:\'20%\'}}>Weapon</div>\n        </div>\n      </section>\n      <section className="rx-grid-body" style={{overflow:\'visible\'}}>\n        <section className="rx-grid-view">\n          {records.map(record => <article className="d-flex flex-row rx-grid-row">\n            <div className="rx-grid-cell" style={{width:\'20%\'}}>{record.get(\'Id\')}</div>\n            <div className="rx-grid-cell" style={{width:\'20%\'}}>{record.get(\'Name\')}</div>\n            <div className="rx-grid-cell" style={{width:\'20%\'}}>{record.get(\'Type\')}</div>\n            <div className="rx-grid-cell" style={{width:\'20%\'}}>{record.get(\'ArmorUsable\')}</div>\n            <div className="rx-grid-cell" style={{width:\'20%\'}}>{record.get(\'WeaponUsable\')}</div>\n          </article>)}\n        </section>\n      </section>\n    </section>;\n  }\n\n  @bind\n  reload() {\n    this.forceUpdate();\n  }\n}'
        ),
        _react2.default.createElement(
          'p',
          { className: 'mb-md' },
          'In this above example, we use ',
          _react2.default.createElement(
            'code',
            null,
            'subscribe'
          ),
          ' to update the component whenever data\'s changed. Because Store convert data to Model then you need to use ',
          _react2.default.createElement(
            'code',
            null,
            'get'
          ),
          ' to access data.'
        )
      );
    }
  }]);

  return DataPackage;
}(_react.PureComponent)) || _class);
exports.default = DataPackage;

},{"../../../../../src/rext":31,"react":"react"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rext = require('../../../../../src/rext');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScreenNavigation = (_dec = (0, _rext.Route)('/core-concepts/screen-navigation'), _dec(_class = function (_PureComponent) {
  _inherits(ScreenNavigation, _PureComponent);

  function ScreenNavigation() {
    _classCallCheck(this, ScreenNavigation);

    return _possibleConstructorReturn(this, (ScreenNavigation.__proto__ || Object.getPrototypeOf(ScreenNavigation)).apply(this, arguments));
  }

  _createClass(ScreenNavigation, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _rext.Container,
        { className: 'main container scrollable' },
        _react2.default.createElement(
          'h1',
          { className: 'mb-md' },
          'Screen Navigation'
        ),
        _react2.default.createElement(
          'ul',
          { className: 'mb-md' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'strong',
              null,
              _react2.default.createElement(
                'code',
                null,
                'Route'
              )
            ),
            ' decorator is most basic responsibility is to render UI when a location matches the route\u2019s path.'
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'strong',
              null,
              _react2.default.createElement(
                'code',
                null,
                'Link'
              )
            ),
            ' provides declarative, accessible navigation around your application.'
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'strong',
              null,
              _react2.default.createElement(
                'code',
                null,
                'HashRouter'
              )
            ),
            ' uses the hash portion of the URL (i.e. window.location.hash) to keep your UI in sync with the URL.'
          )
        ),
        _react2.default.createElement(
          'pre',
          { className: 'mb-md' },
          '// main.js\nimport \'babel-polyfill\';\nimport Rext from \'ext-react\';\nimport Viewport from \'./components/viewport\';\n\nRext.application({\n  views: [\n    require(\'./components/search\'),\n    require(\'./components/details\'),\n    require(\'./components/notfound\'),\n  ],\n  launch: () => <Viewport />\n});\n\nRext.launch(<Viewport />);\n'
        ),
        _react2.default.createElement(
          'pre',
          { className: 'mb-md' },
          '// ./components/viewport.js\nimport React from \'react\';\nimport { Link, HashRouter } from \'ext-react\';\n\nexport default function Viewport() {\n  return <section>\n    <Link to="/">Dashboard</Link>\n    <Link to="/search">Search</Link>\n    <Link to="/details/huynguyen">Details</Link>\n    <HashRouter />\n  </section>\n}\n'
        ),
        _react2.default.createElement(
          'pre',
          { className: 'mb-md' },
          '// ./components/search.js\nimport React from \'react\';\nimport { Route, Component } from \'ext-react\';\n\n@Route(\'/search\')\n@Component({\n  view: () => <section />\n})\nexport default class Search { }\n'
        ),
        _react2.default.createElement(
          'pre',
          { className: 'mb-md' },
          '// ./components/details.js\nimport React from \'react\';\nimport { Route, Component } from \'ext-react\';\n\n@Route(\'/details/:name\')\n@Component({\n  view: ({ params }) => <h1>{params.name}</h1>\n})\nexport default class Details { }\n'
        ),
        _react2.default.createElement(
          'pre',
          { className: 'mb-md' },
          '// ./components/notfound.js\nimport React, { PureComponent } from \'react\';\nimport { Route } from \'ext-react\';\n\n@Route(\'*\')\nexport default class NotFound extends PureComponent {\n  render() {\n    return <h1>\'{this.props.params.route}\' doesn\'t exist</h1>\n  }\n}'
        )
      );
    }
  }]);

  return ScreenNavigation;
}(_react.PureComponent)) || _class);
exports.default = ScreenNavigation;

},{"../../../../../src/rext":31,"react":"react"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _dec2, _class;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rext = require('../../../../../src/rext');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardView = function (_PureComponent) {
  _inherits(CardView, _PureComponent);

  function CardView() {
    _classCallCheck(this, CardView);

    return _possibleConstructorReturn(this, (CardView.__proto__ || Object.getPrototypeOf(CardView)).apply(this, arguments));
  }

  _createClass(CardView, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.stores.CardStore.load();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('section', null);
    }
  }]);

  return CardView;
}(_react.PureComponent);

var Card = (_dec = (0, _rext.Route)('/example/cards'), _dec2 = (0, _rext.Component)({
  stores: ['CardStore'],
  view: CardView
}), _dec(_class = _dec2(_class = function Card() {
  _classCallCheck(this, Card);
}) || _class) || _class);
exports.default = Card;

},{"../../../../../src/rext":31,"react":"react"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _dec2, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rext = require('../../../../../src/rext');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dashboard = (_dec = (0, _rext.Route)('/example/dashboard'), _dec2 = (0, _rext.Component)({
  view: function view(_ref) {
    var $view = _ref.$view;
    return _react2.default.createElement(
      'h1',
      null,
      $view.title
    );
  }
}), _dec(_class = _dec2(_class = function Dashboard() {
  _classCallCheck(this, Dashboard);

  this.title = 'Dashboard';
}) || _class) || _class);
exports.default = Dashboard;

},{"../../../../../src/rext":31,"react":"react"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _dec2, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rext = require('../../../../../src/rext');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Details = (_dec = (0, _rext.Route)('/example/details/:name'), _dec2 = (0, _rext.Component)({
  view: function view(_ref) {
    var params = _ref.params;
    return _react2.default.createElement(
      'h1',
      null,
      params.name
    );
  }
}), _dec(_class = _dec2(_class = function Details() {
  _classCallCheck(this, Details);
}) || _class) || _class);
exports.default = Details;

},{"../../../../../src/rext":31,"react":"react"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rext = require('../../../../../src/rext');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotFound = (_dec = (0, _rext.Route)('*'), _dec(_class = function (_PureComponent) {
  _inherits(NotFound, _PureComponent);

  function NotFound() {
    _classCallCheck(this, NotFound);

    return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));
  }

  _createClass(NotFound, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'h1',
        null,
        '\'',
        this.props.params.route,
        '\' doesn\'t exist'
      );
    }
  }]);

  return NotFound;
}(_react.PureComponent)) || _class);
exports.default = NotFound;

},{"../../../../../src/rext":31,"react":"react"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _dec2, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rext = require('../../../../../src/rext');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dashboard = (_dec = (0, _rext.Route)('/example/search'), _dec2 = (0, _rext.Component)({
  view: function view() {
    return _react2.default.createElement('section', null);
  }
}), _dec(_class = _dec2(_class = function Dashboard() {
  _classCallCheck(this, Dashboard);
}) || _class) || _class);
exports.default = Dashboard;

},{"../../../../../src/rext":31,"react":"react"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rext = require('../../../../../../src/rext');

exports.default = (0, _rext.Store)({
  storeId: 'CardStore',
  proxy: {
    url: '/data/card.json'
  }
});

},{"../../../../../../src/rext":31}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rext = require('../../../../../src/rext');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GettingStarted = (_dec = (0, _rext.Route)('/'), _dec(_class = function (_PureComponent) {
  _inherits(GettingStarted, _PureComponent);

  function GettingStarted() {
    _classCallCheck(this, GettingStarted);

    return _possibleConstructorReturn(this, (GettingStarted.__proto__ || Object.getPrototypeOf(GettingStarted)).apply(this, arguments));
  }

  _createClass(GettingStarted, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _rext.Container,
        { className: 'main container scrollable' },
        _react2.default.createElement(
          'h1',
          { className: 'mb-md' },
          'Getting Started'
        ),
        _react2.default.createElement(
          'p',
          { className: 'mb-md' },
          'Extension React is a library that build on top of React, helping you build data-intensive, cross-platform web apps for desktops, tablets, and smartphones.'
        ),
        _react2.default.createElement(
          'h2',
          { className: 'mb-md' },
          'Quick Start'
        ),
        _react2.default.createElement(
          'h3',
          { className: 'mb-md' },
          '1. Setup a development enviroment'
        ),
        _react2.default.createElement(
          'p',
          { className: 'mb-md' },
          'Use ',
          _react2.default.createElement(
            'code',
            null,
            'npm'
          ),
          ' or ',
          _react2.default.createElement(
            'code',
            null,
            'yarn'
          ),
          ' to install following dependencies:'
        ),
        _react2.default.createElement(
          'ul',
          { className: 'mb-md' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'code',
              null,
              'babel-polyfill'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'code',
              null,
              'babel-preset-env'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'code',
              null,
              'babel-preset-react'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'code',
              null,
              'd3'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'code',
              null,
              'react'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'code',
              null,
              'react-dom'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'code',
              null,
              'rxjs'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'code',
              null,
              'ext-react'
            )
          )
        ),
        _react2.default.createElement(
          'h3',
          { className: 'mb-md' },
          '2. Create a new project'
        ),
        _react2.default.createElement(
          'p',
          { className: 'mb-md' },
          'The following is the recommended directory structure for an Extension React application:'
        ),
        _react2.default.createElement(
          'pre',
          { className: 'mb-md' },
          '+-- node_modules: NPM components',
          _react2.default.createElement('br', null),
          '+-- dist',
          _react2.default.createElement('br', null),
          '|   +-- app.min.css',
          _react2.default.createElement('br', null),
          '|   +-- app.min.js',
          _react2.default.createElement('br', null),
          '|   +-- framework.min.js',
          _react2.default.createElement('br', null),
          '+-- src',
          _react2.default.createElement('br', null),
          '|   +-- css',
          _react2.default.createElement('br', null),
          '|   |   +-- _variables.scss: application styles constant values',
          _react2.default.createElement('br', null),
          '|   |   +-- app.scss: application styles',
          _react2.default.createElement('br', null),
          '|   +-- js',
          _react2.default.createElement('br', null),
          '|   |   +-- common: code of shared functions or shared components',
          _react2.default.createElement('br', null),
          '|   |   +-- components: code (scripts and views) of every feature should be a sub-directory',
          _react2.default.createElement('br', null),
          '|   |   +-- services: code of services',
          _react2.default.createElement('br', null),
          '|   |   +-- stores: code of stores',
          _react2.default.createElement('br', null),
          '|   |   +-- app.js: main script',
          _react2.default.createElement('br', null),
          '+-- gulpfile.babel.js: build scripts (or webpack.config.js if you prefer)',
          _react2.default.createElement('br', null),
          '+-- index.html',
          _react2.default.createElement('br', null),
          '+-- package.json: NPM package definition',
          _react2.default.createElement('br', null),
          '+-- server.js: code of local web server (ExpressJS)',
          _react2.default.createElement('br', null)
        ),
        _react2.default.createElement(
          'p',
          { className: 'mb-md' },
          'Let\u2019s start evaluating the application by looking at ',
          _react2.default.createElement(
            'code',
            null,
            'index.html'
          )
        ),
        _react2.default.createElement(
          'pre',
          { className: 'mb-md' },
          '<!-- index.html -->\n<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8" />\n<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n<title>Extension React Application</title>\n<link href="/node-modules/ext-react/css/rext.min.css" rel="stylesheet" />\n</head>\n<body>\n<script src="app.js"></script>\n</body>\n</html>'
        ),
        _react2.default.createElement(
          'p',
          { className: 'mb-md' },
          'To launch your app, add the following to your ',
          _react2.default.createElement(
            'code',
            null,
            'app.js'
          ),
          ' file'
        ),
        _react2.default.createElement(
          'pre',
          null,
          '// app.js\nimport \'babel-polyfill\';\nimport React from \'react\';\nimport Rext from \'ext-react\';\nimport Viewport from \'./components/viewport/viewport\';\n\nRext.application({\n  launch: () => <Viewport />\n});'
        )
      );
    }
  }]);

  return GettingStarted;
}(_react.PureComponent)) || _class);
exports.default = GettingStarted;

},{"../../../../../src/rext":31,"react":"react"}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Viewport;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rext = require('../../../../../src/rext');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Viewport() {
  return _react2.default.createElement(
    _rext.Container,
    null,
    _react2.default.createElement(
      'header',
      { className: 'container' },
      _react2.default.createElement(
        'h1',
        null,
        'Extension React'
      )
    ),
    _react2.default.createElement(
      _rext.Container,
      { layout: 'column' },
      _react2.default.createElement(
        'aside',
        { style: { width: 300 } },
        _react2.default.createElement(
          'ul',
          { className: 'navbar nav' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(_rext.Link, { to: '/', text: 'GETTING STARTED' })
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'span',
              { className: 'nav-text' },
              'CORE CONCEPTS'
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(_rext.Link, { to: '/core-concepts/component', text: 'Component' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(_rext.Link, { to: '/core-concepts/screen-navigation', text: 'Screen Navigation' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(_rext.Link, { to: '/core-concepts/data-package', text: 'Data Package' })
              )
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(_rext.Link, { to: '/architecture', text: 'ARCHITECTURE' })
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'span',
              { className: 'nav-text' },
              'UI COMPONENTS'
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(_rext.Link, { to: '/ui-components/grids', text: 'Grids' })
              )
            )
          )
        )
      ),
      _react2.default.createElement(
        _rext.Container,
        null,
        _react2.default.createElement(_rext.HashRouter, null)
      )
    ),
    _react2.default.createElement(
      'footer',
      { className: 'container' },
      _react2.default.createElement(
        'p',
        null,
        '\xA9 2017 huytrongnguyen'
      )
    )
  );
}

},{"../../../../../src/rext":31,"react":"react"}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

var _list = require('../core/list');

var _list2 = _interopRequireDefault(_list);

var _dictionary = require('../core/dictionary');

var _dictionary2 = _interopRequireDefault(_dictionary);

var _observable = require('../reactive/observable');

var _observable2 = _interopRequireDefault(_observable);

var _storeManager = require('../data/store-manager');

var _storeManager2 = _interopRequireDefault(_storeManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (config) {
  return function (Controller) {
    var WrappedComponent = config.view;

    return function (_PureComponent) {
      _inherits(HocComponent, _PureComponent);

      function HocComponent(props) {
        _classCallCheck(this, HocComponent);

        var _this = _possibleConstructorReturn(this, (HocComponent.__proto__ || Object.getPrototypeOf(HocComponent)).call(this, props));

        var stores = (0, _list2.default)(config.stores).reduce(function (stores, storeId) {
          stores[storeId] = _storeManager2.default.get(storeId);
          return stores;
        }, {}),
            services = (0, _list2.default)(config.services).reduce(function (services, service) {
          services[service.serviceId] = service;
          return services;
        }, {}),
            controller = new Controller(props);

        controller.stores = stores;
        controller.services = services;

        _ext2.default.initialState(_this, _defineProperty({
          stores: stores,
          services: services
        }, config.componentAs || '$view', controller));
        return _this;
      }

      _createClass(HocComponent, [{
        key: 'render',
        value: function render() {
          return _react2.default.createElement(WrappedComponent, _extends({}, this.state, this.props));
        }
      }]);

      return HocComponent;
    }(_react.PureComponent);
  };
};

},{"../core/dictionary":17,"../core/ext":19,"../core/list":20,"../data/store-manager":25,"../reactive/observable":29,"react":"react"}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.Container = Container;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var LAYOUT_CLASS = {
  'column': 'flex-row',
  'row': 'flex-column',
  'fit': ''
};

function Container(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      _ref$layout = _ref.layout,
      layout = _ref$layout === undefined ? 'row' : _ref$layout,
      children = _ref.children,
      others = _objectWithoutProperties(_ref, ['className', 'layout', 'children']);

  return _react2.default.createElement(
    'section',
    _extends({ className: _ext2.default.className('d-flex', LAYOUT_CLASS[layout], className) }, others),
    children
  );
}

},{"../core/ext":19,"react":"react"}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HashRouter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.Route = Route;
exports.Link = Link;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rxjs = require('rxjs');

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

var _list = require('../core/list');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// import Observable from '~/reactive/observable';

var ROUTES = {},
    getRoute = function getRoute() {
  return window.location.hash.substring(1) || '/';
},
    getRoutePath = function getRoutePath(route) {
  return route.split('/');
};

function Route(route) {
  return function (comp) {
    ROUTES[route] = {
      route: route,
      comp: comp,
      path: getRoutePath(route)
    };
  };
}

function Link(_ref) {
  var to = _ref.to,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === undefined ? 'active' : _ref$activeClassName,
      text = _ref.text,
      children = _ref.children,
      others = _objectWithoutProperties(_ref, ['to', 'className', 'activeClassName', 'text', 'children']);

  return _react2.default.createElement(
    'a',
    _extends({ href: '#' + to, className: _ext2.default.className('nav-link', className, _defineProperty({}, activeClassName, to === getRoute())) }, others),
    text || children
  );
}

var HashRouter = exports.HashRouter = function (_PureComponent) {
  _inherits(HashRouter, _PureComponent);

  function HashRouter(props) {
    _classCallCheck(this, HashRouter);

    var _this = _possibleConstructorReturn(this, (HashRouter.__proto__ || Object.getPrototypeOf(HashRouter)).call(this, props));

    _ext2.default.initialState(_this, matchPath());
    return _this;
  }

  _createClass(HashRouter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      !window.location.hash && (window.location.hash = '/');
      _rxjs.Observable.fromEvent(window, 'hashchange').subscribe(function () {
        return _this2.setState(matchPath());
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          route = _state.route,
          comp = _state.comp,
          params = _state.params;


      if (!comp) {
        console.error('Component not found!');
        return null;
      }

      return _react2.default.createElement(comp, { route: route, params: params });
    }
  }]);

  return HashRouter;
}(_react.PureComponent);

function matchPath() {
  var currentRoute = getRoute(),
      params = { route: currentRoute };

  // basic route (without params)
  if (ROUTES[currentRoute]) {
    return { route: currentRoute, comp: ROUTES[currentRoute].comp, params: params };
  }

  // advanced route (with params)
  var currentPath = getRoutePath(currentRoute);
  for (var route in ROUTES) {
    var mapRoute = ROUTES[route],
        routePath = mapRoute.path;

    var matched = true;
    (0, _list2.default)(mapRoute.path).each(function (routeName, index) {
      if (routeName !== currentPath[index]) {
        if (routeName.startsWith(':')) {
          // detect param value
          params[routeName.substring(1)] = currentPath[index];
        } else {
          matched = false;
          return;
        }
      }
    });

    if (matched) {
      return { route: currentRoute, comp: mapRoute.comp, params: params };
    }
  }

  // with not found screen
  if (ROUTES['*']) {
    return { route: currentRoute, comp: ROUTES['*'].comp, params: params };
  }

  // without not found screen
  return { route: currentRoute, comp: null, params: params };
}

},{"../core/ext":19,"../core/list":20,"react":"react","rxjs":"rxjs"}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dictionary = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dictionary = exports.Dictionary = function () {
  function Dictionary(keyValues) {
    var _this = this;

    _classCallCheck(this, Dictionary);

    this.data = {};
    if (keyValues) {
      this.data = Object.assign({}, keyValues);
    }

    this.keys = function () {
      return (0, _list2.default)(Object.keys(_this.data));
    };
    this.values = function () {
      return (0, _list2.default)(Object.values(_this.data));
    };
  }

  _createClass(Dictionary, [{
    key: 'each',
    value: function each(iteratee) {
      for (var key in this.data) {
        iteratee(this.data[key], key, this.data);
      }
      return this;
    }
  }]);

  return Dictionary;
}();

exports.default = function (keyValues) {
  return new Dictionary(keyValues);
};

},{"./list":20}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _list = require('./list');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DOM = function (_List) {
  _inherits(DOM, _List);

  function DOM() {
    _classCallCheck(this, DOM);

    return _possibleConstructorReturn(this, (DOM.__proto__ || Object.getPrototypeOf(DOM)).apply(this, arguments));
  }

  _createClass(DOM, [{
    key: 'show',
    value: function show() {
      this.data.each(function (selector) {
        return selector.style.display = 'block';
      });
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.data.each(function (selector) {
        return selector.style.display = 'none';
      });
    }

    // parent() {
    //   this.comp = this.comp.parentElement;
    //   return this;
    // }

    // width() {
    //   return this.comp.clientWidth;
    // }

    // height() {
    //   return this.comp.clientHeight;
    // }

    // find(selector) {
    //   return this.comp.querySelector(selector);
    // }

  }]);

  return DOM;
}(_list.List);

exports.default = function (selector) {
  return DOM.getEl(selector);
};

},{"./list":20}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.bind = bind;
exports.debounce = debounce;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ext = exports.Ext = function () {
  function Ext() {
    _classCallCheck(this, Ext);

    this.DOM = require('./dom').default;
    this.String = require('./string').default;
    this.List = require('./list').default;
    this.Map = require('./dictionary').default;

    this.SCROLL_WIDTH = this.getScrollWidth();
    this.BORDER_WIDTH = 2;
    this.CHECK_COLUMN_WIDTH = 33;
    this.UNKNOWN_ERROR_MSG = 'An unknown error has occurred.';

    this.isPrimitive = function (value) {
      var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);return type === 'string' || type === 'number' || type === 'boolean';
    };
    this.isString = function (value) {
      return typeof value === 'string';
    };
    this.isFunction = function (value) {
      return !!value && typeof value === 'function';
    };
    this.isObject = function (value) {
      return toString.call(value) === '[object Object]';
    };
    this.isArray = function (value) {
      return toString.call(value) === '[object Array]';
    };

    this.clone = function (obj) {
      return JSON.parse(JSON.stringify(obj));
    }; // deep clone
  }

  _createClass(Ext, [{
    key: 'extend',
    value: function extend() {
      return Object.assign.apply(null, arguments); // immutable object
    }
  }, {
    key: 'initialState',
    value: function initialState(comp, state) {
      var _this = this;

      if (!comp || !state) {
        return;
      }
      comp.state = state;

      var _loop = function _loop(field) {
        comp['set' + _this.String.capitalize(field)] = function (value) {
          return comp.setState(_defineProperty({}, field, value));
        };
      };

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.keys(state)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var field = _step.value;

          _loop(field);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: 'className',
    value: function className() {
      var _this2 = this;

      var cls = [];

      for (var _len = arguments.length, expressions = Array(_len), _key = 0; _key < _len; _key++) {
        expressions[_key] = arguments[_key];
      }

      this.List(expressions).each(function (exp) {
        if (!exp) {
          return;
        }

        if (typeof exp === 'string') {
          cls.push(exp);
        } else if (_this2.isObject(exp)) {
          for (var key in exp) {
            if (exp[key] === true) {
              cls.push(key);
            }
          }
        }
      });
      return cls.join(' ');
    }

    //#region DOM

  }, {
    key: 'createElement',
    value: function createElement(html) {
      var div = document.createElement('div');
      div.innerHTML = html;
      return div.children[0];
    }
  }, {
    key: 'getScrollWidth',
    value: function getScrollWidth() {
      var outer = this.createElement('<div style="visibility: hidden; width: 100px; overflow: scroll;"></div>');
      document.body.appendChild(outer);
      var widthNoScroll = outer.offsetWidth;

      // add innerdiv
      var inner = this.createElement('<div style="width: 100%;"></div>');
      outer.appendChild(inner);
      var widthWithScroll = inner.offsetWidth;

      // remove divs
      outer.parentNode.removeChild(outer);

      return widthNoScroll - widthWithScroll;
    }
    //#endregion

  }]);

  return Ext;
}();

exports.default = new Ext();
function bind(target, name, descriptor) {
  var fn = descriptor.value;

  if (typeof fn !== 'function') {
    throw new Error('@bind decorator is only applied to functions not: ' + (typeof fn === 'undefined' ? 'undefined' : _typeof(fn)));
  }

  return {
    configurable: true,
    get: function get() {
      return fn.bind(this);
    }
  };
}

function debounce(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

  var timeout = void 0;
  return function () {
    var context = this,
        args = arguments,
        later = function later() {
      func.apply(context, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

},{"./dictionary":17,"./dom":18,"./list":20,"./string":21}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var List = exports.List = function () {
  function List(value) {
    var _this = this;

    _classCallCheck(this, List);

    this.data = [];
    if (value && value.length) {
      this.data = value;
    }

    this.collect = function () {
      return _this.data;
    };
    this.count = function () {
      return _this.data.length;
    };
    this.getAt = function (index) {
      return _this.data[index];
    };
    this.add = function (item) {
      return _this.data.push(item);
    };
    this.insert = function (item) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return _this.data.splice(index, 0, item);
    };
    this.removeAt = function (index) {
      var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      return _this.data.splice(index, count);
    };
    this.join = function (separator) {
      return _this.data.join(separator);
    };
  }

  _createClass(List, [{
    key: "each",
    value: function each(iteratee) {
      for (var index in this.data) {
        iteratee(this.data[index], index, this.data);
      }
      return this;
    }
  }, {
    key: "filter",
    value: function filter(predicate) {
      var result = [];
      this.each(function (item, index, array) {
        if (predicate(item, index, array)) {
          result.push(item);
        }
      });
      return new List(result);
    }
  }, {
    key: "map",
    value: function map(iteratee) {
      var result = [];
      this.each(function (item, index, array) {
        return result[index] = iteratee(item, index, array);
      });
      return new List(result);
    }
  }, {
    key: "reduce",
    value: function reduce(iteratee, accumulator) {
      this.each(function (item, index, array) {
        return accumulator = iteratee(accumulator, item, index, array);
      });
      return accumulator;
    }
  }, {
    key: "findIndex",
    value: function findIndex(predicate) {
      var foundAt = -1;
      for (var index in this.data) {
        if (predicate(item, index, this.data)) {
          foundAt = index;
          break;
        }
      }
      return foundAt;
    }
  }, {
    key: "find",
    value: function find(predicate) {
      var index = this.findIndex(predicate);
      return index > -1 ? this.data[index] : null;
    }
  }, {
    key: "contains",
    value: function contains(predicate) {
      return this.find(predicate) !== null;
    }
  }, {
    key: "removeIf",
    value: function removeIf(predicate) {
      var result = [];
      this.each(function (item, index, array) {
        if (!predicate(item, index, array)) {
          result.push(item);
        }
      });
      this.data = result;
    }
  }]);

  return List;
}();

exports.default = function (value) {
  return new List(value);
};

},{}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var String = function () {
  function String() {
    _classCallCheck(this, String);

    this.capitalize = function (value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    };
  }

  _createClass(String, [{
    key: 'htmlEncode',
    value: function htmlEncode(value) {
      return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');
    }
  }, {
    key: 'htmlDecode',
    value: function htmlDecode(value) {
      return value.replace(/&amp;/g, '').replace(/&lt;/g, '<').replace(/&gt;>/g, '>').replace(/&#39;/g, "'").replace(/&quot;/g, '"');
    }
  }, {
    key: 'toQueryString',
    value: function toQueryString(params, sep, encode) {
      sep = sep === undefined ? '&' : sep;
      encode = encode === false ? function (s) {
        return s;
      } : encodeURIComponent;

      var pairs = [];
      for (var key in params) {
        pairs.push(key + '=' + encode(params[key]));
      }
      return pairs.join(sep);
    }
  }]);

  return String;
}();

exports.default = new String();

},{}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rxjs = require('rxjs');

var _list = require('../core/list');

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractStore = function (_List) {
  _inherits(AbstractStore, _List);

  function AbstractStore() {
    _classCallCheck(this, AbstractStore);

    //#region configs
    var _this = _possibleConstructorReturn(this, (AbstractStore.__proto__ || Object.getPrototypeOf(AbstractStore)).call(this));

    _this.totalCount = 0;
    _this.pageSize = 0;
    _this.currentPage = 1;
    _this.subject = new _rxjs.Subject();
    //#endregion

    //#region properties
    //#endregion

    //#region methods
    _this.createRecord = function (record) {
      return new _model2.default(record, _this);
    };
    _this.getRecords = _this.collect;
    _this.getModifiedRecords = function () {
      return _this.filter(function (record) {
        return record.isModified();
      });
    };
    _this.getNewRecords = function () {
      return _this.filter(function (record) {
        return record.isNewlyCreated();
      });
    };
    _this.subscribe = function (observer) {
      return _this.subject.subscribe({ next: function next(value) {
          return observer(value);
        } });
    };
    _this.fireEvent = function () {
      return _this.subject.next(_this);
    };
    //#endregion
    return _this;
  }

  _createClass(AbstractStore, [{
    key: 'clearData',
    value: function clearData() {
      var silent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      this.data = [];
      !silent && this.fireEvent();
    }
  }, {
    key: 'loadData',
    value: function loadData(data) {
      this.clearData(true);
      this.data = new _list.List(data).map(this.createRecord.bind(this)).collect();
      this.fireEvent();
    }
  }, {
    key: 'commitChanges',
    value: function commitChanges() {
      this.filter(function (record) {
        return record.isModified() || record.isNewlyCreated();
      }).each(function (record) {
        return record.save();
      });
      this.fireEvent();
    }
  }, {
    key: 'rejectChanges',
    value: function rejectChanges() {
      this.filter(function (record) {
        return record.isModified();
      }).each(function (record) {
        return record.reject(true);
      });
      this.data = this.filter(function (record) {
        return !record.isNewlyCreated();
      }).collect();
      this.fireEvent();
    }
  }]);

  return AbstractStore;
}(_list.List);

exports.default = AbstractStore;

},{"../core/list":20,"./model":23,"rxjs":"rxjs"}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

var _list = require('../core/list');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = function () {
  function Model(data, store) {
    var _this = this;

    _classCallCheck(this, Model);

    //#region configs
    this.selected = false;
    //#endregion

    //#region properties
    this.data = data;
    this.store = store;
    this.idProperty = store && store.idProperty ? store.idProperty : 'id';
    var fieldConfig = store && store.fields ? store.fields : [];
    this.fields = (0, _list2.default)(fieldConfig).map(function (field) {
      return _ext2.default.isString(field) ? { name: field, type: 'string' } : field;
    });
    //#endregion

    //#region methods
    this.getData = function () {
      return _this.data;
    };
    this.get = function (fieldName) {
      return _this.data[fieldName];
    };
    //#endregion

    this.save();
  }

  _createClass(Model, [{
    key: 'set',
    value: function set(fieldName, newValue, silent) {
      this.data[fieldName] = newValue;
      this.modified = !this.isEqual(fieldName);
      !silent && this.store && this.store.fireEvent();
    }
  }, {
    key: 'save',
    value: function save() {
      this.phantom = _ext2.default.clone(this.data);
      this.modified = false;
    }
  }, {
    key: 'reject',
    value: function reject(silent) {
      this.data = _ext2.default.clone(this.phantom);
      this.save();
      !silent && this.store && this.store.fireEvent();
    }
  }, {
    key: 'isEqual',
    value: function isEqual(field) {
      var oldValue = this.phantom[field.name],
          newValue = this.data[field.name];

      return field.equals ? field.equals(newValue, oldValue) : newValue === oldValue;
    }
  }, {
    key: 'isModified',
    value: function isModified(fieldName) {
      return this.modified && !this.phantom[this.idProperty]; // should not detect new record as a modified record
    }
  }, {
    key: 'isNewlyCreated',
    value: function isNewlyCreated() {
      return !this.phantom[this.idProperty];
    }
  }, {
    key: 'setSelected',
    value: function setSelected(selected, silent) {
      this.selected = selected;
      !silent && this.store && this.store.fireEvent();
    }
  }]);

  return Model;
}();

exports.default = Model;

},{"../core/ext":19,"../core/list":20}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rxjs = require('rxjs');

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

var _abstractStore = require('./abstract-store');

var _abstractStore2 = _interopRequireDefault(_abstractStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Ajax from './ajax';


var ProxyStore = function (_AbstractStore) {
  _inherits(ProxyStore, _AbstractStore);

  function ProxyStore() {
    _classCallCheck(this, ProxyStore);

    //#region configs
    var _this = _possibleConstructorReturn(this, (ProxyStore.__proto__ || Object.getPrototypeOf(ProxyStore)).call(this));

    _this.proxy = {
      reader: {},
      writer: {}
    };
    //#endregion
    return _this;
  }

  _createClass(ProxyStore, [{
    key: 'load',
    value: function load() {
      var _this2 = this;

      var _proxy = this.proxy,
          url = _proxy.url,
          _proxy$method = _proxy.method,
          method = _proxy$method === undefined ? 'get' : _proxy$method,
          _proxy$responseType = _proxy.responseType,
          responseType = _proxy$responseType === undefined ? 'json' : _proxy$responseType,
          params = _proxy.params;

      method === 'get' && params && (url = url + '?' + String.toQueryString(params));
      _rxjs.Observable.ajax({
        url: url,
        method: method,
        responseType: responseType,
        body: method === 'post' && params
      }).map(function (value) {
        return value.response;
      }).subscribe(function (response) {
        var _proxy$reader = _this2.proxy.reader;
        _proxy$reader = _proxy$reader === undefined ? {} : _proxy$reader;
        var rootProperty = _proxy$reader.rootProperty,
            totalProperty = _proxy$reader.totalProperty;

        _this2.loadData(rootProperty ? response[rootProperty] : response);
        _this2.totalCount = _this2.pageSize && totalProperty ? response[totalProperty] : _this2.count();
      });
    }

    // loadPage(page) {
    //   this.currentPage = page;
    //   this.proxy.params = Ext.extend({}, this.proxy.params, { page: this.currentPage, size: this.pageSize });
    //   return this.load({});
    // }

    // async sync({ done, fail, always }) {
    //   this.proxy.method = 'post';
    //   this.proxy.params = this.getModifiedRecords().map(record => record.data).collect();
    //   this.proxy.proxy.params.push(...this.getNewRecords().map(record => record.data).collect());
    //   const { transform } = proxy.writer;
    //   transform && (this.proxy.params = transform(this.proxy.params));
    //   Observable.ajax(this.proxy).subscribe({
    //     next: done,
    //     error: fail,
    //     complete: always
    //   });
    // }

  }]);

  return ProxyStore;
}(_abstractStore2.default);

exports.default = ProxyStore;

},{"../core/ext":19,"./abstract-store":22,"rxjs":"rxjs"}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dictionary = require('../core/dictionary');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StoreManager = function (_Dictionary) {
  _inherits(StoreManager, _Dictionary);

  function StoreManager() {
    _classCallCheck(this, StoreManager);

    return _possibleConstructorReturn(this, (StoreManager.__proto__ || Object.getPrototypeOf(StoreManager)).apply(this, arguments));
  }

  _createClass(StoreManager, [{
    key: 'set',
    value: function set(key, value) {
      this.data[key] = value;
    }
  }, {
    key: 'get',
    value: function get(key) {
      return this.data[key];
    }
  }]);

  return StoreManager;
}(_dictionary.Dictionary);

exports.default = new StoreManager();

},{"../core/dictionary":17}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

var _proxyStore = require('./proxy-store');

var _proxyStore2 = _interopRequireDefault(_proxyStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Store = function (_ProxyStore) {
  _inherits(Store, _ProxyStore);

  function Store(config) {
    _classCallCheck(this, Store);

    var _this = _possibleConstructorReturn(this, (Store.__proto__ || Object.getPrototypeOf(Store)).call(this));

    _ext2.default.extend(_this, config);
    return _this;
  }

  return Store;
}(_proxyStore2.default);

exports.default = function (config) {
  return new Store(config);
};

},{"../core/ext":19,"./proxy-store":24}],27:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AjaxObservable = function () {
  function AjaxObservable(urlOrRequest) {
    var _this = this;

    _classCallCheck(this, AjaxObservable);

    this.request = _ext2.default.extend({
      url: '',
      params: '',
      contentType: 'application/json; charset=utf-8',
      method: 'get'
    }, _ext2.default.isString(urlOrRequest) ? { url: urlOrRequest } : urlOrRequest);

    this.promise = function (request) {
      return new Promise(function (resolve, reject) {
        _this.createRequest(request, function (error, response) {
          return error ? reject(error) : resolve(response);
        });
      });
    };
  }

  _createClass(AjaxObservable, [{
    key: 'subscribe',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
        var next = _ref.next,
            error = _ref.error,
            complete = _ref.complete;
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                response = void 0;
                _context.prev = 2;
                _context.next = 5;
                return this.promise({ url: url, contentType: contentType, method: method, params: params });

              case 5:
                response = _context.sent;
                _context.next = 13;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context['catch'](2);

                console.error('Cannot get response from server for url [' + url + '] caused by: ' + _context.t0);
                error && error(_context.t0);
                return _context.abrupt('return', null);

              case 13:
                return _context.abrupt('return', next ? next(response) : response);

              case 14:
                _context.prev = 14;

                complete && complete();
                return _context.finish(14);

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0,, 14, 17], [2, 8]]);
      }));

      function subscribe(_x) {
        return _ref2.apply(this, arguments);
      }

      return subscribe;
    }()
  }, {
    key: 'send',
    value: function send(_ref3, done) {
      var url = _ref3.url,
          contentType = _ref3.contentType,
          method = _ref3.method,
          params = _ref3.params;

      method === 'get' && params && (url = url + '?' + String.toQueryString(params));
      var xhr = _ext2.default.XHR;
      xhr.open(method, url, true);
      xhr.setRequestHeader('Content-Type', contentType);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          // ajax will return as a json by default, if parser error then it will return a raw string
          if (xhr.status === 200) {
            try {
              done(null, JSON.parse(xhr.responseText));
            } catch (e) {
              done(null, xhr.responseText);
            }
          } else {
            try {
              done(JSON.parse(xhr.responseText));
            } catch (e) {
              done(xhr.responseText);
            }
          }
        }
      };
      xhr.send(params ? JSON.stringify(params) : null);
    }
  }], [{
    key: 'create',
    value: function create(urlOrRequest) {
      return new AjaxObservable(urlOrRequest);
    }
  }]);

  return AjaxObservable;
}();

},{"../core/ext":19}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventObservable = function () {
  function EventObservable(target, eventName, options) {
    _classCallCheck(this, EventObservable);

    this.target = target;
    this.eventName = eventName;
    this.options = options;
  }

  _createClass(EventObservable, [{
    key: "subscribe",
    value: function subscribe(observer) {
      this.target.addEventListener(this.eventName, observer, this.options);
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(observer) {
      this.target.removeEventListener(this.eventName, observer, this.options);
    }
  }], [{
    key: "create",
    value: function create(target, eventName) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      return new EventObservable(target, eventName, options);
    }
  }]);

  return EventObservable;
}();

exports.default = EventObservable;

},{}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _operator = require('./operator');

var _operator2 = _interopRequireDefault(_operator);

var _event = require('./event');

var _event2 = _interopRequireDefault(_event);

var _ajax = require('./ajax');

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * From ReactiveX docs:
 *
 * Observable: An interface that listens for incoming notifications over a period of time
 * and pushes them to another interface that reacts to them.
 *
 * Subscription: When an Observable interface starts doing its work,
 * i.e. listening for notifications and pushing them out.
 *
 * Observer: An interface that reacts to data pushed from an Observable.
 *
 * Operators: Functions used to manipulate an Observable’s output, e.g. filter, map, reduce, etc.
 */
var Observable = function (_Operator) {
  _inherits(Observable, _Operator);

  function Observable(subscribe) {
    _classCallCheck(this, Observable);

    var _this = _possibleConstructorReturn(this, (Observable.__proto__ || Object.getPrototypeOf(Observable)).call(this));

    _this.subscribe = subscribe;
    return _this;
  }

  _createClass(Observable, null, [{
    key: 'create',
    value: function create(subscribe) {
      return new Observable(subscribe);
    }

    /**
     * For example:
     * const unsubcribe = Observable.fromEvent(document.getElementById('input'), 'change').subscribe({
     *    next: e => console.log(e.target.value)
     * });
     *
     * setTimeout(unsubcribe, 5000);
     *
     * @param target
     * @param eventName
     */

  }, {
    key: 'fromEvent',
    value: function fromEvent(target, eventName) {
      return Observable.create(function (observer) {
        var callback = function callback(e) {
          return observer.next(e);
        };
        target.addEventListener(eventName, callback, false);
        return function () {
          return target.removeEventListener(eventName, callback, false);
        };
      });
    }
  }, {
    key: 'ajax',
    value: function ajax(urlOrRequest) {
      return _ajax2.default.create(urlOrRequest);
    }
  }]);

  return Observable;
}(_operator2.default);

exports.default = Observable;

},{"./ajax":27,"./event":28,"./operator":30}],30:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Operator = function Operator() {
  _classCallCheck(this, Operator);

  this.filter = function (predicate) {/* to be implemented */};
  this.map = function (predicate) {/* to be implemented */};
  this.reduce = function (predicate) {/* to be implemented */};
};

exports.default = Operator;

},{}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Store = exports.Component = exports.Route = exports.bind = exports.Container = exports.Link = exports.HashRouter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _router = require('./components/router');

Object.defineProperty(exports, 'HashRouter', {
  enumerable: true,
  get: function get() {
    return _router.HashRouter;
  }
});
Object.defineProperty(exports, 'Link', {
  enumerable: true,
  get: function get() {
    return _router.Link;
  }
});

var _container = require('./components/container');

Object.defineProperty(exports, 'Container', {
  enumerable: true,
  get: function get() {
    return _container.Container;
  }
});

var _ext = require('./core/ext');

Object.defineProperty(exports, 'bind', {
  enumerable: true,
  get: function get() {
    return _ext.bind;
  }
});
Object.defineProperty(exports, 'Route', {
  enumerable: true,
  get: function get() {
    return _router.Route;
  }
});

var _component = require('./app/component');

Object.defineProperty(exports, 'Component', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_component).default;
  }
});

var _store = require('./data/store');

Object.defineProperty(exports, 'Store', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_store).default;
  }
});

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _storeManager = require('./data/store-manager');

var _storeManager2 = _interopRequireDefault(_storeManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rext = function (_Ext) {
  _inherits(Rext, _Ext);

  function Rext() {
    _classCallCheck(this, Rext);

    var _this = _possibleConstructorReturn(this, (Rext.__proto__ || Object.getPrototypeOf(Rext)).call(this));

    _this.StoreManager = _storeManager2.default;
    // this.Cache = require('./data/cache');
    // this.Model = require('./data/model');
    // this.Observable = require('./reactive/observable');
    // this.DialogManager = require('./components/dialog');
    return _this;
  }

  _createClass(Rext, [{
    key: 'application',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
        var stores = _ref.stores,
            launch = _ref.launch;
        var root, viewport;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (stores) {
                  this.List(stores).each(function (store) {
                    store = store.default;
                    _storeManager2.default.set(store.storeId, store);
                  });
                }

                if (!launch) {
                  _context.next = 8;
                  break;
                }

                root = this.createElement('<div id="react-root"></div>');
                _context.next = 5;
                return launch();

              case 5:
                viewport = _context.sent;

                document.body.appendChild(root);
                (0, _reactDom.render)(viewport, root);

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function application(_x) {
        return _ref2.apply(this, arguments);
      }

      return application;
    }()
  }]);

  return Rext;
}(_ext.Ext);

exports.default = new Rext();

//#region Component

},{"./app/component":14,"./components/container":15,"./components/router":16,"./core/ext":19,"./data/store":26,"./data/store-manager":25,"babel-polyfill":"babel-polyfill","react":"react","react-dom":"react-dom"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkb2NzL3NyYy9qcy9hcHAuanMiLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2FyY2hpdGVjdHVyZS9hcmNoaXRlY3R1cmUuanN4IiwiZG9jcy9zcmMvanMvY29tcG9uZW50cy9jb3JlLWNvbmNlcHRzL2NvbXBvbmVudC5qc3giLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2NvcmUtY29uY2VwdHMvZGF0YS1wYWNrYWdlLmpzeCIsImRvY3Mvc3JjL2pzL2NvbXBvbmVudHMvY29yZS1jb25jZXB0cy9zY3JlZW4tbmF2aWdhdGlvbi5qc3giLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUvY2FyZHMuanMiLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUvZGFzaGJvYXJkLmpzIiwiZG9jcy9zcmMvanMvY29tcG9uZW50cy9leGFtcGxlL2RldGFpbHMuanMiLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUvbm90Zm91bmQuanMiLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUvc2VhcmNoLmpzIiwiZG9jcy9zcmMvanMvY29tcG9uZW50cy9leGFtcGxlL3N0b3Jlcy9jYXJkLmpzIiwiZG9jcy9zcmMvanMvY29tcG9uZW50cy9nZXR0aW5nLXN0YXJ0ZWQvZ2V0dGluZy1zdGFydGVkLmpzeCIsImRvY3Mvc3JjL2pzL2NvbXBvbmVudHMvdmlld3BvcnQvdmlld3BvcnQuanN4Iiwic3JjL2FwcC9jb21wb25lbnQuanMiLCJzcmMvY29tcG9uZW50cy9jb250YWluZXIuanN4Iiwic3JjL2NvbXBvbmVudHMvcm91dGVyLmpzeCIsInNyYy9jb3JlL2RpY3Rpb25hcnkuanMiLCJzcmMvY29yZS9kb20uanMiLCJzcmMvY29yZS9leHQuanMiLCJzcmMvY29yZS9saXN0LmpzIiwic3JjL2NvcmUvc3RyaW5nLmpzIiwic3JjL2RhdGEvYWJzdHJhY3Qtc3RvcmUuanMiLCJzcmMvZGF0YS9tb2RlbC5qcyIsInNyYy9kYXRhL3Byb3h5LXN0b3JlLmpzIiwic3JjL2RhdGEvc3RvcmUtbWFuYWdlci5qcyIsInNyYy9kYXRhL3N0b3JlLmpzIiwic3JjL3JlYWN0aXZlL2FqYXguanMiLCJzcmMvcmVhY3RpdmUvZXZlbnQuanMiLCJzcmMvcmVhY3RpdmUvb2JzZXJ2YWJsZS5qcyIsInNyYy9yZWFjdGl2ZS9vcGVyYXRvci5qcyIsInNyYy9yZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLGVBQUssV0FBTCxDQUFpQjtBQUNmLFVBQVEsQ0FDTixRQUFRLGtDQUFSLENBRE0sQ0FETztBQUlmLFNBQU8sQ0FDTCxRQUFRLDhDQUFSLENBREssRUFFTCxRQUFRLHNDQUFSLENBRkssRUFHTCxRQUFRLDhDQUFSLENBSEssRUFJTCxRQUFRLHlDQUFSLENBSkssRUFLTCxRQUFRLHdDQUFSLENBTEs7QUFNTDtBQUNBLFVBQVEsZ0NBQVIsQ0FQSyxFQVFMLFFBQVEsNkJBQVIsQ0FSSyxFQVNMLFFBQVEsOEJBQVIsQ0FUSyxFQVVMLFFBQVEsK0JBQVIsQ0FWSyxFQVdMLFFBQVEsNEJBQVIsQ0FYSyxDQUpRO0FBaUJmLFVBQVE7QUFBQSxXQUFNLHVEQUFOO0FBQUE7QUFqQk8sQ0FBakI7Ozs7Ozs7Ozs7Ozs7O0FDTEE7Ozs7QUFDQTs7Ozs7Ozs7OztJQUdxQixZLFdBRHBCLGlCQUFNLGVBQU4sQzs7Ozs7Ozs7Ozs7NkJBRVU7QUFDUCxhQUFPO0FBQUE7QUFBQSxVQUFXLFdBQVUsMkJBQXJCO0FBQ0w7QUFBQTtBQUFBLFlBQUksV0FBVSxPQUFkO0FBQUE7QUFBQSxTQURLO0FBRUw7QUFBQTtBQUFBLFlBQUssV0FBVSxPQUFmO0FBQUE7QUFBQSxTQUZLO0FBbUJMO0FBQUE7QUFBQSxZQUFLLFdBQVUsT0FBZjtBQUFBO0FBQUEsU0FuQks7QUE4Qkw7QUFBQTtBQUFBLFlBQUssV0FBVSxPQUFmO0FBQUE7QUFBQSxTQTlCSztBQTRDTDtBQUFBO0FBQUEsWUFBSyxXQUFVLE9BQWY7QUFBQTtBQUFBLFNBNUNLO0FBdUZMO0FBQUE7QUFBQSxZQUFLLFdBQVUsT0FBZjtBQUFBO0FBQUEsU0F2Rks7QUFpSEw7QUFBQTtBQUFBLFlBQUssV0FBVSxPQUFmO0FBQUE7QUFBQTtBQWpISyxPQUFQO0FBNElEOzs7OztrQkE5SWtCLFk7Ozs7Ozs7Ozs7Ozs7O0FDSnJCOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFHcUIsYSxXQURwQixpQkFBTSwwQkFBTixDOzs7Ozs7Ozs7Ozs2QkFFVTtBQUNQLGFBQU87QUFBQTtBQUFBLFVBQVcsV0FBVSwyQkFBckI7QUFDTDtBQUFBO0FBQUEsWUFBSSxXQUFVLE9BQWQ7QUFBQTtBQUFBLFNBREs7QUFFTDtBQUFBO0FBQUEsWUFBRyxXQUFVLE9BQWI7QUFBQTtBQUFBLFNBRks7QUFNTDtBQUFBO0FBQUEsWUFBSyxXQUFVLE9BQWY7QUFBQTtBQUFBLFNBTks7QUF5Qkw7QUFBQTtBQUFBLFlBQUcsV0FBVSxPQUFiO0FBQUE7QUFDaUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURqQztBQUFBO0FBQ3lGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEekY7QUFBQTtBQUcyRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSDNFO0FBQUE7QUFBQSxTQXpCSztBQThCTDtBQUFBO0FBQUEsWUFBRyxXQUFVLE9BQWI7QUFBQTtBQUFBLFNBOUJLO0FBaUNMO0FBQUE7QUFBQSxZQUFLLFdBQVUsT0FBZjtBQUFBO0FBQUEsU0FqQ0s7QUE2Q0w7QUFBQTtBQUFBLFlBQUcsV0FBVSxPQUFiO0FBQUE7QUFBQSxTQTdDSztBQThDTDtBQUFBO0FBQUEsWUFBSyxXQUFVLE9BQWY7QUFBQTtBQUFBLFNBOUNLO0FBaUVMO0FBQUE7QUFBQTtBQUFBO0FBQ21CO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEbkI7QUFBQTtBQUVjO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGZDtBQUFBO0FBRThHO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGOUc7QUFBQTtBQUFBO0FBakVLLE9BQVA7QUFzRUQ7Ozs7O2tCQXhFa0IsYTs7Ozs7Ozs7Ozs7Ozs7QUNKckI7Ozs7QUFDQTs7Ozs7Ozs7OztJQUdxQixXLFdBRHBCLGlCQUFNLDZCQUFOLEM7Ozs7Ozs7Ozs7OzZCQUVVO0FBQ1AsYUFBTztBQUFBO0FBQUEsVUFBVyxXQUFVLDJCQUFyQjtBQUNMO0FBQUE7QUFBQSxZQUFJLFdBQVUsT0FBZDtBQUFBO0FBQUEsU0FESztBQUVMO0FBQUE7QUFBQSxZQUFHLFdBQVUsT0FBYjtBQUFBO0FBQUEsU0FGSztBQUdMO0FBQUE7QUFBQSxZQUFJLFdBQVUsT0FBZDtBQUFBO0FBQUEsU0FISztBQUlMO0FBQUE7QUFBQSxZQUFHLFdBQVUsT0FBYjtBQUFBO0FBQUEsU0FKSztBQUtMO0FBQUE7QUFBQSxZQUFJLFdBQVUsT0FBZDtBQUFBO0FBQUEsU0FMSztBQU1MO0FBQUE7QUFBQSxZQUFHLFdBQVUsT0FBYjtBQUFBO0FBQXlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBekI7QUFBQTtBQUFzRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXRGO0FBQUE7QUFBQSxTQU5LO0FBT0w7QUFBQTtBQUFBLFlBQUssV0FBVSxPQUFmO0FBQUE7QUFBQSxTQVBLO0FBaUJMO0FBQUE7QUFBQSxZQUFHLFdBQVUsT0FBYjtBQUFBO0FBQzZFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEN0U7QUFBQTtBQUV1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRnZCO0FBQUE7QUFBQSxTQWpCSztBQXFCTDtBQUFBO0FBQUEsWUFBSyxXQUFVLE9BQWY7QUFBQTtBQUFBLFNBckJLO0FBNkJMO0FBQUE7QUFBQSxZQUFHLFdBQVUsT0FBYjtBQUFBO0FBQUEsU0E3Qks7QUE4Qkw7QUFBQTtBQUFBLFlBQUssV0FBVSxPQUFmO0FBQUE7QUFBQSxTQTlCSztBQTJDTDtBQUFBO0FBQUEsWUFBRyxXQUFVLE9BQWI7QUFBQTtBQUFtRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQW5EO0FBQUE7QUFBQSxTQTNDSztBQTRDTDtBQUFBO0FBQUEsWUFBSyxXQUFVLE9BQWY7QUFBQTtBQUFBLFNBNUNLO0FBNEZMO0FBQUE7QUFBQSxZQUFHLFdBQVUsT0FBYjtBQUFBO0FBQ2dDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEaEM7QUFBQTtBQUUyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRjNEO0FBQUE7QUFBQTtBQTVGSyxPQUFQO0FBaUdEOzs7OztrQkFuR2tCLFc7Ozs7Ozs7Ozs7Ozs7O0FDSnJCOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFHcUIsZ0IsV0FEcEIsaUJBQU0sa0NBQU4sQzs7Ozs7Ozs7Ozs7NkJBRVU7QUFDUCxhQUFPO0FBQUE7QUFBQSxVQUFXLFdBQVUsMkJBQXJCO0FBQ0w7QUFBQTtBQUFBLFlBQUksV0FBVSxPQUFkO0FBQUE7QUFBQSxTQURLO0FBRUw7QUFBQTtBQUFBLFlBQUksV0FBVSxPQUFkO0FBQ0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFSLGFBQUo7QUFBQTtBQUFBLFdBREY7QUFFRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVIsYUFBSjtBQUFBO0FBQUEsV0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBUixhQUFKO0FBQUE7QUFBQTtBQUhGLFNBRks7QUFPTDtBQUFBO0FBQUEsWUFBSyxXQUFVLE9BQWY7QUFBQTtBQUFBLFNBUEs7QUF5Qkw7QUFBQTtBQUFBLFlBQUssV0FBVSxPQUFmO0FBQUE7QUFBQSxTQXpCSztBQXdDTDtBQUFBO0FBQUEsWUFBSyxXQUFVLE9BQWY7QUFBQTtBQUFBLFNBeENLO0FBb0RMO0FBQUE7QUFBQSxZQUFLLFdBQVUsT0FBZjtBQUFBO0FBQUEsU0FwREs7QUFnRUw7QUFBQTtBQUFBLFlBQUssV0FBVSxPQUFmO0FBQUE7QUFBQTtBQWhFSyxPQUFQO0FBNkVEOzs7OztrQkEvRWtCLGdCOzs7Ozs7Ozs7Ozs7OztBQ0pyQjs7OztBQUNBOzs7Ozs7Ozs7O0lBRU0sUTs7Ozs7Ozs7Ozs7d0NBQ2dCO0FBQ2xCLFdBQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0IsU0FBbEIsQ0FBNEIsSUFBNUI7QUFDRDs7OzZCQUNRO0FBQ1AsYUFBTyw4Q0FBUDtBQUNEOzs7Ozs7SUFRa0IsSSxXQUxwQixpQkFBTSxnQkFBTixDLFVBQ0EscUJBQVU7QUFDVCxVQUFRLENBQUUsV0FBRixDQURDO0FBRVQsUUFBTTtBQUZHLENBQVYsQzs7O2tCQUlvQixJOzs7Ozs7Ozs7Ozs7QUNqQnJCOzs7O0FBQ0E7Ozs7OztJQU1xQixTLFdBSnBCLGlCQUFNLG9CQUFOLEMsVUFDQSxxQkFBVTtBQUNULFFBQU07QUFBQSxRQUFHLEtBQUgsUUFBRyxLQUFIO0FBQUEsV0FBZTtBQUFBO0FBQUE7QUFBSyxZQUFNO0FBQVgsS0FBZjtBQUFBO0FBREcsQ0FBVixDLCtCQUlDLHFCQUFjO0FBQUE7O0FBQ1osT0FBSyxLQUFMLEdBQWEsV0FBYjtBQUNELEM7a0JBSGtCLFM7Ozs7Ozs7Ozs7OztBQ1ByQjs7OztBQUNBOzs7Ozs7SUFNcUIsTyxXQUpwQixpQkFBTSx3QkFBTixDLFVBQ0EscUJBQVU7QUFDVCxRQUFNO0FBQUEsUUFBRyxNQUFILFFBQUcsTUFBSDtBQUFBLFdBQWdCO0FBQUE7QUFBQTtBQUFLLGFBQU87QUFBWixLQUFoQjtBQUFBO0FBREcsQ0FBVixDOzs7a0JBR29CLE87Ozs7Ozs7Ozs7Ozs7O0FDUHJCOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFHcUIsUSxXQURwQixpQkFBTSxHQUFOLEM7Ozs7Ozs7Ozs7OzZCQUVVO0FBQ1AsYUFBTztBQUFBO0FBQUE7QUFBQTtBQUFNLGFBQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0IsS0FBeEI7QUFBQTtBQUFBLE9BQVA7QUFDRDs7Ozs7a0JBSGtCLFE7Ozs7Ozs7Ozs7OztBQ0pyQjs7OztBQUNBOzs7Ozs7SUFNcUIsUyxXQUpwQixpQkFBTSxpQkFBTixDLFVBQ0EscUJBQVU7QUFDVCxRQUFNO0FBQUEsV0FBTSw4Q0FBTjtBQUFBO0FBREcsQ0FBVixDOzs7a0JBR29CLFM7Ozs7Ozs7OztBQ1ByQjs7a0JBRWUsaUJBQU07QUFDbkIsV0FBUyxXQURVO0FBRW5CLFNBQU87QUFDTCxTQUFLO0FBREE7QUFGWSxDQUFOLEM7Ozs7Ozs7Ozs7Ozs7O0FDRmY7Ozs7QUFDQTs7Ozs7Ozs7OztJQUdxQixjLFdBRHBCLGlCQUFNLEdBQU4sQzs7Ozs7Ozs7Ozs7NkJBRVU7QUFDUCxhQUFPO0FBQUE7QUFBQSxVQUFXLFdBQVUsMkJBQXJCO0FBQ0w7QUFBQTtBQUFBLFlBQUksV0FBVSxPQUFkO0FBQUE7QUFBQSxTQURLO0FBRUw7QUFBQTtBQUFBLFlBQUcsV0FBVSxPQUFiO0FBQUE7QUFBQSxTQUZLO0FBS0w7QUFBQTtBQUFBLFlBQUksV0FBVSxPQUFkO0FBQUE7QUFBQSxTQUxLO0FBTUw7QUFBQTtBQUFBLFlBQUksV0FBVSxPQUFkO0FBQUE7QUFBQSxTQU5LO0FBT0w7QUFBQTtBQUFBLFlBQUcsV0FBVSxPQUFiO0FBQUE7QUFBeUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUF6QjtBQUFBO0FBQTZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBN0M7QUFBQTtBQUFBLFNBUEs7QUFRTDtBQUFBO0FBQUEsWUFBSSxXQUFVLE9BQWQ7QUFDRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUosV0FERjtBQUVFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSixXQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKLFdBSEY7QUFJRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUosV0FKRjtBQUtFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSixXQUxGO0FBTUU7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKLFdBTkY7QUFPRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUosV0FQRjtBQVFFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQVJGLFNBUks7QUFrQkw7QUFBQTtBQUFBLFlBQUksV0FBVSxPQUFkO0FBQUE7QUFBQSxTQWxCSztBQW1CTDtBQUFBO0FBQUEsWUFBRyxXQUFVLE9BQWI7QUFBQTtBQUFBLFNBbkJLO0FBb0JMO0FBQUE7QUFBQSxZQUFLLFdBQVUsT0FBZjtBQUFBO0FBQ2tDLG1EQURsQztBQUFBO0FBRVUsbURBRlY7QUFBQTtBQUdxQixtREFIckI7QUFBQTtBQUlvQixtREFKcEI7QUFBQTtBQUswQixtREFMMUI7QUFBQTtBQU1TLG1EQU5UO0FBQUE7QUFPYSxtREFQYjtBQUFBO0FBUWlFLG1EQVJqRTtBQUFBO0FBUzBDLG1EQVQxQztBQUFBO0FBVVksbURBVlo7QUFBQTtBQVdtRSxtREFYbkU7QUFBQTtBQVk2RixtREFaN0Y7QUFBQTtBQWF3QyxtREFieEM7QUFBQTtBQWNvQyxtREFkcEM7QUFBQTtBQWVpQyxtREFmakM7QUFBQTtBQWdCMkUsbURBaEIzRTtBQUFBO0FBaUJnQixtREFqQmhCO0FBQUE7QUFrQjBDLG1EQWxCMUM7QUFBQTtBQW1CcUQ7QUFuQnJELFNBcEJLO0FBeUNMO0FBQUE7QUFBQSxZQUFHLFdBQVUsT0FBYjtBQUFBO0FBQTBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMUUsU0F6Q0s7QUEwQ0w7QUFBQTtBQUFBLFlBQUssV0FBVSxPQUFmO0FBQUE7QUFBQSxTQTFDSztBQXlETDtBQUFBO0FBQUEsWUFBRyxXQUFVLE9BQWI7QUFBQTtBQUFtRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQW5FO0FBQUE7QUFBQSxTQXpESztBQTBETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMURLLE9BQVA7QUFzRUQ7Ozs7O2tCQXhFa0IsYzs7Ozs7Ozs7a0JDREcsUTs7QUFIeEI7Ozs7QUFDQTs7OztBQUVlLFNBQVMsUUFBVCxHQUFvQjtBQUNqQyxTQUFPO0FBQUE7QUFBQTtBQUNMO0FBQUE7QUFBQSxRQUFRLFdBQVUsV0FBbEI7QUFBOEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE5QixLQURLO0FBRUw7QUFBQTtBQUFBLFFBQVcsUUFBTyxRQUFsQjtBQUNFO0FBQUE7QUFBQSxVQUFPLE9BQU8sRUFBQyxPQUFNLEdBQVAsRUFBZDtBQUNFO0FBQUE7QUFBQSxZQUFJLFdBQVUsWUFBZDtBQUNFO0FBQUE7QUFBQTtBQUFJLHdEQUFNLElBQUcsR0FBVCxFQUFhLE1BQUssaUJBQWxCO0FBQUosV0FERjtBQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxnQkFBTSxXQUFVLFVBQWhCO0FBQUE7QUFBQSxhQURGO0FBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUksNERBQU0sSUFBRywwQkFBVCxFQUFvQyxNQUFLLFdBQXpDO0FBQUosZUFERjtBQUVFO0FBQUE7QUFBQTtBQUFJLDREQUFNLElBQUcsa0NBQVQsRUFBNEMsTUFBSyxtQkFBakQ7QUFBSixlQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUksNERBQU0sSUFBRyw2QkFBVCxFQUF1QyxNQUFLLGNBQTVDO0FBQUo7QUFIRjtBQUZGLFdBRkY7QUFVRTtBQUFBO0FBQUE7QUFBSSx3REFBTSxJQUFHLGVBQVQsRUFBeUIsTUFBSyxjQUE5QjtBQUFKLFdBVkY7QUFXRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsZ0JBQU0sV0FBVSxVQUFoQjtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFJLDREQUFNLElBQUcsc0JBQVQsRUFBZ0MsTUFBSyxPQUFyQztBQUFKO0FBREY7QUFGRjtBQVhGO0FBREYsT0FERjtBQXFCRTtBQUFBO0FBQUE7QUFBVztBQUFYO0FBckJGLEtBRks7QUF5Qkw7QUFBQTtBQUFBLFFBQVEsV0FBVSxXQUFsQjtBQUE4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTlCO0FBekJLLEdBQVA7QUEyQkQ7Ozs7Ozs7Ozs7Ozs7QUMvQkQ7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztrQkFFZTtBQUFBLFNBQVUsc0JBQWM7QUFDckMsUUFBTSxtQkFBbUIsT0FBTyxJQUFoQzs7QUFFQTtBQUFBOztBQUNFLDRCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSUFDWCxLQURXOztBQUVqQixZQUFNLFNBQVMsb0JBQUssT0FBTyxNQUFaLEVBQW9CLE1BQXBCLENBQTJCLFVBQUMsTUFBRCxFQUFTLE9BQVQsRUFBcUI7QUFDdkQsaUJBQU8sT0FBUCxJQUFrQix1QkFBYSxHQUFiLENBQWlCLE9BQWpCLENBQWxCO0FBQ0EsaUJBQU8sTUFBUDtBQUNELFNBSFEsRUFHTixFQUhNLENBQWY7QUFBQSxZQUlNLFdBQVcsb0JBQUssT0FBTyxRQUFaLEVBQXNCLE1BQXRCLENBQTZCLFVBQUMsUUFBRCxFQUFXLE9BQVgsRUFBdUI7QUFDN0QsbUJBQVMsUUFBUSxTQUFqQixJQUE4QixPQUE5QjtBQUNBLGlCQUFPLFFBQVA7QUFDRCxTQUhVLEVBR1IsRUFIUSxDQUpqQjtBQUFBLFlBUU0sYUFBYSxJQUFJLFVBQUosQ0FBZSxLQUFmLENBUm5COztBQVVBLG1CQUFXLE1BQVgsR0FBb0IsTUFBcEI7QUFDQSxtQkFBVyxRQUFYLEdBQXNCLFFBQXRCOztBQUVBLHNCQUFJLFlBQUo7QUFDRSx3QkFERjtBQUVFO0FBRkYsV0FHRyxPQUFPLFdBQVAsSUFBc0IsT0FIekIsRUFHbUMsVUFIbkM7QUFmaUI7QUFvQmxCOztBQXJCSDtBQUFBO0FBQUEsaUNBdUJXO0FBQ1AsaUJBQU8sOEJBQUMsZ0JBQUQsZUFBc0IsS0FBSyxLQUEzQixFQUFzQyxLQUFLLEtBQTNDLEVBQVA7QUFDRDtBQXpCSDs7QUFBQTtBQUFBO0FBMkJELEdBOUJjO0FBQUEsQzs7Ozs7Ozs7Ozs7UUNFQyxTLEdBQUEsUzs7QUFUaEI7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNLGVBQWU7QUFDbkIsWUFBVSxVQURTO0FBRW5CLFNBQU8sYUFGWTtBQUduQixTQUFPO0FBSFksQ0FBckI7O0FBTU8sU0FBUyxTQUFULE9BQTRFO0FBQUEsNEJBQXZELFNBQXVEO0FBQUEsTUFBdkQsU0FBdUQsa0NBQTNDLEVBQTJDO0FBQUEseUJBQXZDLE1BQXVDO0FBQUEsTUFBdkMsTUFBdUMsK0JBQTlCLEtBQThCO0FBQUEsTUFBdkIsUUFBdUIsUUFBdkIsUUFBdUI7QUFBQSxNQUFWLE1BQVU7O0FBQ2pGLFNBQU87QUFBQTtBQUFBLGVBQVMsV0FBVyxjQUFJLFNBQUosQ0FBYyxRQUFkLEVBQXdCLGFBQWEsTUFBYixDQUF4QixFQUE4QyxTQUE5QyxDQUFwQixJQUFrRixNQUFsRjtBQUEyRjtBQUEzRixHQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7O1FDRGUsSyxHQUFBLEs7UUFVQSxJLEdBQUEsSTs7QUFwQmhCOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUVBLElBQU0sU0FBUyxFQUFmO0FBQUEsSUFDTSxXQUFXLFNBQVgsUUFBVztBQUFBLFNBQU0sT0FBTyxRQUFQLENBQWdCLElBQWhCLENBQXFCLFNBQXJCLENBQStCLENBQS9CLEtBQXFDLEdBQTNDO0FBQUEsQ0FEakI7QUFBQSxJQUVNLGVBQWUsU0FBZixZQUFlO0FBQUEsU0FBUyxNQUFNLEtBQU4sQ0FBWSxHQUFaLENBQVQ7QUFBQSxDQUZyQjs7QUFJTyxTQUFTLEtBQVQsQ0FBZSxLQUFmLEVBQXNCO0FBQzNCLFNBQU8sZ0JBQVE7QUFDYixXQUFPLEtBQVAsSUFBZ0I7QUFDZCxrQkFEYztBQUVkLGdCQUZjO0FBR2QsWUFBTSxhQUFhLEtBQWI7QUFIUSxLQUFoQjtBQUtELEdBTkQ7QUFPRDs7QUFFTSxTQUFTLElBQVQsT0FBNkY7QUFBQSxNQUE3RSxFQUE2RSxRQUE3RSxFQUE2RTtBQUFBLDRCQUF6RSxTQUF5RTtBQUFBLE1BQXpFLFNBQXlFLGtDQUE3RCxFQUE2RDtBQUFBLGtDQUF6RCxlQUF5RDtBQUFBLE1BQXpELGVBQXlELHdDQUF2QyxRQUF1QztBQUFBLE1BQTdCLElBQTZCLFFBQTdCLElBQTZCO0FBQUEsTUFBdkIsUUFBdUIsUUFBdkIsUUFBdUI7QUFBQSxNQUFWLE1BQVU7O0FBQ2xHLFNBQU87QUFBQTtBQUFBLGVBQUcsWUFBVSxFQUFiLEVBQW1CLFdBQVcsY0FBSSxTQUFKLENBQWMsVUFBZCxFQUEwQixTQUExQixzQkFBd0MsZUFBeEMsRUFBMEQsT0FBTyxVQUFqRSxFQUE5QixJQUFrSCxNQUFsSDtBQUNKLFlBQVE7QUFESixHQUFQO0FBR0Q7O0lBRVksVSxXQUFBLFU7OztBQUNYLHNCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3SEFDWCxLQURXOztBQUVqQixrQkFBSSxZQUFKLFFBQXVCLFdBQXZCO0FBRmlCO0FBR2xCOzs7O3dDQUVtQjtBQUFBOztBQUNqQixPQUFDLE9BQU8sUUFBUCxDQUFnQixJQUFsQixLQUE0QixPQUFPLFFBQVAsQ0FBZ0IsSUFBaEIsR0FBdUIsR0FBbkQ7QUFDQSx1QkFBVyxTQUFYLENBQXFCLE1BQXJCLEVBQTZCLFlBQTdCLEVBQTJDLFNBQTNDLENBQXFEO0FBQUEsZUFBTSxPQUFLLFFBQUwsQ0FBYyxXQUFkLENBQU47QUFBQSxPQUFyRDtBQUNEOzs7NkJBRVE7QUFBQSxtQkFDeUIsS0FBSyxLQUQ5QjtBQUFBLFVBQ0MsS0FERCxVQUNDLEtBREQ7QUFBQSxVQUNRLElBRFIsVUFDUSxJQURSO0FBQUEsVUFDYyxNQURkLFVBQ2MsTUFEZDs7O0FBR1AsVUFBSSxDQUFDLElBQUwsRUFBVztBQUNULGdCQUFRLEtBQVIsQ0FBYyxzQkFBZDtBQUNBLGVBQU8sSUFBUDtBQUNEOztBQUVELGFBQU8sZ0JBQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixFQUFFLFlBQUYsRUFBUyxjQUFULEVBQTFCLENBQVA7QUFDRDs7Ozs7O0FBR0gsU0FBUyxTQUFULEdBQXFCO0FBQ25CLE1BQU0sZUFBZSxVQUFyQjtBQUFBLE1BQ00sU0FBUyxFQUFFLE9BQU8sWUFBVCxFQURmOztBQUdBO0FBQ0EsTUFBSSxPQUFPLFlBQVAsQ0FBSixFQUEwQjtBQUN4QixXQUFPLEVBQUUsT0FBTyxZQUFULEVBQXVCLE1BQU0sT0FBTyxZQUFQLEVBQXFCLElBQWxELEVBQXdELGNBQXhELEVBQVA7QUFDRDs7QUFFRDtBQUNBLE1BQU0sY0FBYyxhQUFhLFlBQWIsQ0FBcEI7QUFDQSxPQUFJLElBQUksS0FBUixJQUFpQixNQUFqQixFQUF5QjtBQUN2QixRQUFNLFdBQVcsT0FBTyxLQUFQLENBQWpCO0FBQUEsUUFDTSxZQUFZLFNBQVMsSUFEM0I7O0FBR0EsUUFBSSxVQUFVLElBQWQ7QUFDQSx3QkFBSyxTQUFTLElBQWQsRUFBb0IsSUFBcEIsQ0FBeUIsVUFBQyxTQUFELEVBQVksS0FBWixFQUFzQjtBQUM3QyxVQUFJLGNBQWMsWUFBWSxLQUFaLENBQWxCLEVBQXNDO0FBQ3BDLFlBQUksVUFBVSxVQUFWLENBQXFCLEdBQXJCLENBQUosRUFBK0I7QUFBRTtBQUMvQixpQkFBTyxVQUFVLFNBQVYsQ0FBb0IsQ0FBcEIsQ0FBUCxJQUFpQyxZQUFZLEtBQVosQ0FBakM7QUFDRCxTQUZELE1BRU87QUFDTCxvQkFBVSxLQUFWO0FBQ0E7QUFDRDtBQUNGO0FBQ0YsS0FURDs7QUFXQSxRQUFJLE9BQUosRUFBYTtBQUNYLGFBQU8sRUFBRSxPQUFPLFlBQVQsRUFBdUIsTUFBTSxTQUFTLElBQXRDLEVBQTRDLGNBQTVDLEVBQVA7QUFDRDtBQUNGOztBQUVEO0FBQ0EsTUFBSSxPQUFPLEdBQVAsQ0FBSixFQUFpQjtBQUNmLFdBQU8sRUFBRSxPQUFPLFlBQVQsRUFBdUIsTUFBTSxPQUFPLEdBQVAsRUFBWSxJQUF6QyxFQUErQyxjQUEvQyxFQUFQO0FBQ0Q7O0FBRUQ7QUFDQSxTQUFPLEVBQUUsT0FBTyxZQUFULEVBQXVCLE1BQU0sSUFBN0IsRUFBbUMsY0FBbkMsRUFBUDtBQUNEOzs7Ozs7Ozs7Ozs7QUN4RkQ7Ozs7Ozs7O0lBRWEsVSxXQUFBLFU7QUFDWCxzQkFBWSxTQUFaLEVBQXVCO0FBQUE7O0FBQUE7O0FBQ3JCLFNBQUssSUFBTCxHQUFZLEVBQVo7QUFDQSxRQUFJLFNBQUosRUFBZTtBQUNiLFdBQUssSUFBTCxHQUFZLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0IsU0FBbEIsQ0FBWjtBQUNEOztBQUVELFNBQUssSUFBTCxHQUFZO0FBQUEsYUFBTSxvQkFBSyxPQUFPLElBQVAsQ0FBWSxNQUFLLElBQWpCLENBQUwsQ0FBTjtBQUFBLEtBQVo7QUFDQSxTQUFLLE1BQUwsR0FBYztBQUFBLGFBQU0sb0JBQUssT0FBTyxNQUFQLENBQWMsTUFBSyxJQUFuQixDQUFMLENBQU47QUFBQSxLQUFkO0FBQ0Q7Ozs7eUJBRUksUSxFQUFVO0FBQ2IsV0FBSyxJQUFJLEdBQVQsSUFBZ0IsS0FBSyxJQUFyQixFQUEyQjtBQUN6QixpQkFBUyxLQUFLLElBQUwsQ0FBVSxHQUFWLENBQVQsRUFBeUIsR0FBekIsRUFBOEIsS0FBSyxJQUFuQztBQUNEO0FBQ0QsYUFBTyxJQUFQO0FBQ0Q7Ozs7OztrQkFHWSxVQUFDLFNBQUQ7QUFBQSxTQUFlLElBQUksVUFBSixDQUFlLFNBQWYsQ0FBZjtBQUFBLEM7Ozs7Ozs7Ozs7O0FDckJmOzs7Ozs7OztJQUVNLEc7Ozs7Ozs7Ozs7OzJCQUNHO0FBQ0wsV0FBSyxJQUFMLENBQVUsSUFBVixDQUFlO0FBQUEsZUFBWSxTQUFTLEtBQVQsQ0FBZSxPQUFmLEdBQXlCLE9BQXJDO0FBQUEsT0FBZjtBQUNEOzs7MkJBRU07QUFDTCxXQUFLLElBQUwsQ0FBVSxJQUFWLENBQWU7QUFBQSxlQUFZLFNBQVMsS0FBVCxDQUFlLE9BQWYsR0FBeUIsTUFBckM7QUFBQSxPQUFmO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7a0JBR2E7QUFBQSxTQUFZLElBQUksS0FBSixDQUFVLFFBQVYsQ0FBWjtBQUFBLEM7Ozs7Ozs7Ozs7Ozs7UUNvREMsSSxHQUFBLEk7UUFlQSxRLEdBQUEsUTs7Ozs7O0lBaEdILEcsV0FBQSxHO0FBQ1gsaUJBQWM7QUFBQTs7QUFDWixTQUFLLEdBQUwsR0FBVyxRQUFRLE9BQVIsRUFBaUIsT0FBNUI7QUFDQSxTQUFLLE1BQUwsR0FBYyxRQUFRLFVBQVIsRUFBb0IsT0FBbEM7QUFDQSxTQUFLLElBQUwsR0FBWSxRQUFRLFFBQVIsRUFBa0IsT0FBOUI7QUFDQSxTQUFLLEdBQUwsR0FBVyxRQUFRLGNBQVIsRUFBd0IsT0FBbkM7O0FBRUEsU0FBSyxZQUFMLEdBQW9CLEtBQUssY0FBTCxFQUFwQjtBQUNBLFNBQUssWUFBTCxHQUFvQixDQUFwQjtBQUNBLFNBQUssa0JBQUwsR0FBMEIsRUFBMUI7QUFDQSxTQUFLLGlCQUFMLEdBQXlCLGdDQUF6Qjs7QUFFQSxTQUFLLFdBQUwsR0FBbUIsaUJBQVM7QUFBRSxVQUFNLGNBQWMsS0FBZCx5Q0FBYyxLQUFkLENBQU4sQ0FBMkIsT0FBTyxTQUFTLFFBQVQsSUFBcUIsU0FBUyxRQUE5QixJQUEwQyxTQUFTLFNBQTFEO0FBQXNFLEtBQS9IO0FBQ0EsU0FBSyxRQUFMLEdBQWdCO0FBQUEsYUFBVSxPQUFPLEtBQVIsS0FBbUIsUUFBNUI7QUFBQSxLQUFoQjtBQUNBLFNBQUssVUFBTCxHQUFrQjtBQUFBLGFBQVMsQ0FBQyxDQUFDLEtBQUYsSUFBVyxPQUFPLEtBQVAsS0FBaUIsVUFBckM7QUFBQSxLQUFsQjtBQUNBLFNBQUssUUFBTCxHQUFnQjtBQUFBLGFBQVMsU0FBUyxJQUFULENBQWMsS0FBZCxNQUF5QixpQkFBbEM7QUFBQSxLQUFoQjtBQUNBLFNBQUssT0FBTCxHQUFlO0FBQUEsYUFBUyxTQUFTLElBQVQsQ0FBYyxLQUFkLE1BQXlCLGdCQUFsQztBQUFBLEtBQWY7O0FBRUEsU0FBSyxLQUFMLEdBQWE7QUFBQSxhQUFPLEtBQUssS0FBTCxDQUFXLEtBQUssU0FBTCxDQUFlLEdBQWYsQ0FBWCxDQUFQO0FBQUEsS0FBYixDQWpCWSxDQWlCeUM7QUFDdEQ7Ozs7NkJBRVE7QUFDUCxhQUFPLE9BQU8sTUFBUCxDQUFjLEtBQWQsQ0FBb0IsSUFBcEIsRUFBMEIsU0FBMUIsQ0FBUCxDQURPLENBQ3NDO0FBQzlDOzs7aUNBRVksSSxFQUFNLEssRUFBTztBQUFBOztBQUN4QixVQUFJLENBQUMsSUFBRCxJQUFTLENBQUMsS0FBZCxFQUFxQjtBQUFFO0FBQVM7QUFDaEMsV0FBSyxLQUFMLEdBQWEsS0FBYjs7QUFGd0IsaUNBR2YsS0FIZTtBQUl0QixxQkFBVyxNQUFLLE1BQUwsQ0FBWSxVQUFaLENBQXVCLEtBQXZCLENBQVgsSUFBOEM7QUFBQSxpQkFBUyxLQUFLLFFBQUwscUJBQWlCLEtBQWpCLEVBQXlCLEtBQXpCLEVBQVQ7QUFBQSxTQUE5QztBQUpzQjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFHeEIsNkJBQWtCLE9BQU8sSUFBUCxDQUFZLEtBQVosQ0FBbEIsOEhBQXNDO0FBQUEsY0FBN0IsS0FBNkI7O0FBQUEsZ0JBQTdCLEtBQTZCO0FBRXJDO0FBTHVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNekI7OztnQ0FFeUI7QUFBQTs7QUFDeEIsVUFBTSxNQUFNLEVBQVo7O0FBRHdCLHdDQUFiLFdBQWE7QUFBYixtQkFBYTtBQUFBOztBQUd4QixXQUFLLElBQUwsQ0FBVSxXQUFWLEVBQXVCLElBQXZCLENBQTRCLGVBQU87QUFDakMsWUFBSSxDQUFDLEdBQUwsRUFBVTtBQUNSO0FBQ0Q7O0FBRUQsWUFBSSxPQUFPLEdBQVAsS0FBZSxRQUFuQixFQUE2QjtBQUMzQixjQUFJLElBQUosQ0FBUyxHQUFUO0FBQ0QsU0FGRCxNQUVPLElBQUksT0FBSyxRQUFMLENBQWMsR0FBZCxDQUFKLEVBQXdCO0FBQzdCLGVBQUssSUFBSSxHQUFULElBQWdCLEdBQWhCLEVBQXFCO0FBQ25CLGdCQUFJLElBQUksR0FBSixNQUFhLElBQWpCLEVBQXVCO0FBQ3JCLGtCQUFJLElBQUosQ0FBUyxHQUFUO0FBQ0Q7QUFDRjtBQUNGO0FBQ0YsT0FkRDtBQWVBLGFBQU8sSUFBSSxJQUFKLENBQVMsR0FBVCxDQUFQO0FBQ0Q7O0FBRUQ7Ozs7a0NBQ2MsSSxFQUFNO0FBQ2xCLFVBQU0sTUFBTSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBLFVBQUksU0FBSixHQUFnQixJQUFoQjtBQUNBLGFBQU8sSUFBSSxRQUFKLENBQWEsQ0FBYixDQUFQO0FBQ0Q7OztxQ0FFZ0I7QUFDZixVQUFNLFFBQVEsS0FBSyxhQUFMLENBQW1CLHlFQUFuQixDQUFkO0FBQ0EsZUFBUyxJQUFULENBQWMsV0FBZCxDQUEwQixLQUExQjtBQUNBLFVBQU0sZ0JBQWdCLE1BQU0sV0FBNUI7O0FBRUE7QUFDQSxVQUFNLFFBQVEsS0FBSyxhQUFMLENBQW1CLGtDQUFuQixDQUFkO0FBQ0EsWUFBTSxXQUFOLENBQWtCLEtBQWxCO0FBQ0EsVUFBTSxrQkFBa0IsTUFBTSxXQUE5Qjs7QUFFQTtBQUNBLFlBQU0sVUFBTixDQUFpQixXQUFqQixDQUE2QixLQUE3Qjs7QUFFQSxhQUFPLGdCQUFnQixlQUF2QjtBQUNEO0FBQ0Q7Ozs7Ozs7a0JBR2EsSUFBSSxHQUFKLEU7QUFFUixTQUFTLElBQVQsQ0FBYyxNQUFkLEVBQXNCLElBQXRCLEVBQTRCLFVBQTVCLEVBQXdDO0FBQzdDLE1BQU0sS0FBSyxXQUFXLEtBQXRCOztBQUVBLE1BQUksT0FBTyxFQUFQLEtBQWMsVUFBbEIsRUFBOEI7QUFDNUIsVUFBTSxJQUFJLEtBQUosZ0VBQXNFLEVBQXRFLHlDQUFzRSxFQUF0RSxHQUFOO0FBQ0Q7O0FBRUQsU0FBTztBQUNMLGtCQUFjLElBRFQ7QUFFTCxPQUZLLGlCQUVDO0FBQ0osYUFBTyxHQUFHLElBQUgsQ0FBUSxJQUFSLENBQVA7QUFDRDtBQUpJLEdBQVA7QUFNRDs7QUFFTSxTQUFTLFFBQVQsQ0FBa0IsSUFBbEIsRUFBb0M7QUFBQSxNQUFaLElBQVksdUVBQUwsR0FBSzs7QUFDekMsTUFBSSxnQkFBSjtBQUNBLFNBQU8sWUFBVztBQUNoQixRQUFNLFVBQVUsSUFBaEI7QUFBQSxRQUNNLE9BQU8sU0FEYjtBQUFBLFFBRU0sUUFBUSxTQUFSLEtBQVEsR0FBVztBQUNqQixXQUFLLEtBQUwsQ0FBVyxPQUFYLEVBQW9CLElBQXBCO0FBQ0QsS0FKUDs7QUFNQSxpQkFBYSxPQUFiO0FBQ0EsY0FBVSxXQUFXLEtBQVgsRUFBa0IsSUFBbEIsQ0FBVjtBQUNELEdBVEQ7QUFVRDs7Ozs7Ozs7Ozs7OztJQzVHWSxJLFdBQUEsSTtBQUNYLGdCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsU0FBSyxJQUFMLEdBQVksRUFBWjtBQUNBLFFBQUksU0FBUyxNQUFNLE1BQW5CLEVBQTJCO0FBQ3pCLFdBQUssSUFBTCxHQUFZLEtBQVo7QUFDRDs7QUFFRCxTQUFLLE9BQUwsR0FBZTtBQUFBLGFBQU0sTUFBSyxJQUFYO0FBQUEsS0FBZjtBQUNBLFNBQUssS0FBTCxHQUFhO0FBQUEsYUFBTSxNQUFLLElBQUwsQ0FBVSxNQUFoQjtBQUFBLEtBQWI7QUFDQSxTQUFLLEtBQUwsR0FBYTtBQUFBLGFBQVMsTUFBSyxJQUFMLENBQVUsS0FBVixDQUFUO0FBQUEsS0FBYjtBQUNBLFNBQUssR0FBTCxHQUFXO0FBQUEsYUFBUSxNQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsSUFBZixDQUFSO0FBQUEsS0FBWDtBQUNBLFNBQUssTUFBTCxHQUFjLFVBQUMsSUFBRDtBQUFBLFVBQU8sS0FBUCx1RUFBZSxDQUFmO0FBQUEsYUFBcUIsTUFBSyxJQUFMLENBQVUsTUFBVixDQUFpQixLQUFqQixFQUF3QixDQUF4QixFQUEyQixJQUEzQixDQUFyQjtBQUFBLEtBQWQ7QUFDQSxTQUFLLFFBQUwsR0FBZ0IsVUFBQyxLQUFEO0FBQUEsVUFBUSxLQUFSLHVFQUFnQixDQUFoQjtBQUFBLGFBQXNCLE1BQUssSUFBTCxDQUFVLE1BQVYsQ0FBaUIsS0FBakIsRUFBd0IsS0FBeEIsQ0FBdEI7QUFBQSxLQUFoQjtBQUNBLFNBQUssSUFBTCxHQUFZO0FBQUEsYUFBYSxNQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsU0FBZixDQUFiO0FBQUEsS0FBWjtBQUNEOzs7O3lCQUVJLFEsRUFBVTtBQUNiLFdBQUssSUFBSSxLQUFULElBQWtCLEtBQUssSUFBdkIsRUFBNkI7QUFDM0IsaUJBQVMsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFULEVBQTJCLEtBQTNCLEVBQWtDLEtBQUssSUFBdkM7QUFDRDtBQUNELGFBQU8sSUFBUDtBQUNEOzs7MkJBRU0sUyxFQUFXO0FBQ2hCLFVBQU0sU0FBUyxFQUFmO0FBQ0EsV0FBSyxJQUFMLENBQVUsVUFBQyxJQUFELEVBQU8sS0FBUCxFQUFjLEtBQWQsRUFBd0I7QUFDaEMsWUFBSSxVQUFVLElBQVYsRUFBZ0IsS0FBaEIsRUFBdUIsS0FBdkIsQ0FBSixFQUFtQztBQUNqQyxpQkFBTyxJQUFQLENBQVksSUFBWjtBQUNEO0FBQ0YsT0FKRDtBQUtBLGFBQU8sSUFBSSxJQUFKLENBQVMsTUFBVCxDQUFQO0FBQ0Q7Ozt3QkFFRyxRLEVBQVU7QUFDWixVQUFNLFNBQVMsRUFBZjtBQUNBLFdBQUssSUFBTCxDQUFVLFVBQUMsSUFBRCxFQUFPLEtBQVAsRUFBYyxLQUFkO0FBQUEsZUFBd0IsT0FBTyxLQUFQLElBQWdCLFNBQVMsSUFBVCxFQUFlLEtBQWYsRUFBc0IsS0FBdEIsQ0FBeEM7QUFBQSxPQUFWO0FBQ0EsYUFBTyxJQUFJLElBQUosQ0FBUyxNQUFULENBQVA7QUFDRDs7OzJCQUVNLFEsRUFBVSxXLEVBQWE7QUFDNUIsV0FBSyxJQUFMLENBQVUsVUFBQyxJQUFELEVBQU8sS0FBUCxFQUFjLEtBQWQ7QUFBQSxlQUF3QixjQUFjLFNBQVMsV0FBVCxFQUFzQixJQUF0QixFQUE0QixLQUE1QixFQUFtQyxLQUFuQyxDQUF0QztBQUFBLE9BQVY7QUFDQSxhQUFPLFdBQVA7QUFDRDs7OzhCQUVTLFMsRUFBVztBQUNuQixVQUFJLFVBQVUsQ0FBQyxDQUFmO0FBQ0EsV0FBSyxJQUFJLEtBQVQsSUFBa0IsS0FBSyxJQUF2QixFQUE2QjtBQUMzQixZQUFJLFVBQVUsSUFBVixFQUFnQixLQUFoQixFQUF1QixLQUFLLElBQTVCLENBQUosRUFBdUM7QUFDckMsb0JBQVUsS0FBVjtBQUNBO0FBQ0Q7QUFDRjtBQUNELGFBQU8sT0FBUDtBQUNEOzs7eUJBRUksUyxFQUFXO0FBQ2QsVUFBSSxRQUFRLEtBQUssU0FBTCxDQUFlLFNBQWYsQ0FBWjtBQUNBLGFBQU8sUUFBUSxDQUFDLENBQVQsR0FBYSxLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWIsR0FBZ0MsSUFBdkM7QUFDRDs7OzZCQUVRLFMsRUFBVztBQUNsQixhQUFPLEtBQUssSUFBTCxDQUFVLFNBQVYsTUFBeUIsSUFBaEM7QUFDRDs7OzZCQUVRLFMsRUFBVztBQUNsQixVQUFNLFNBQVMsRUFBZjtBQUNBLFdBQUssSUFBTCxDQUFVLFVBQUMsSUFBRCxFQUFPLEtBQVAsRUFBYyxLQUFkLEVBQXdCO0FBQ2hDLFlBQUksQ0FBQyxVQUFVLElBQVYsRUFBZ0IsS0FBaEIsRUFBdUIsS0FBdkIsQ0FBTCxFQUFvQztBQUNsQyxpQkFBTyxJQUFQLENBQVksSUFBWjtBQUNEO0FBQ0YsT0FKRDtBQUtBLFdBQUssSUFBTCxHQUFZLE1BQVo7QUFDRDs7Ozs7O2tCQUdZLFVBQUMsS0FBRDtBQUFBLFNBQVcsSUFBSSxJQUFKLENBQVMsS0FBVCxDQUFYO0FBQUEsQzs7Ozs7Ozs7Ozs7OztJQzNFVCxNO0FBQ0osb0JBQWM7QUFBQTs7QUFDWixTQUFLLFVBQUwsR0FBa0I7QUFBQSxhQUFTLE1BQU0sTUFBTixDQUFhLENBQWIsRUFBZ0IsV0FBaEIsS0FBZ0MsTUFBTSxLQUFOLENBQVksQ0FBWixDQUF6QztBQUFBLEtBQWxCO0FBQ0Q7Ozs7K0JBRVUsSyxFQUFPO0FBQ2hCLGFBQU8sTUFBTSxPQUFOLENBQWMsSUFBZCxFQUFvQixPQUFwQixFQUNNLE9BRE4sQ0FDYyxJQURkLEVBQ29CLE1BRHBCLEVBRU0sT0FGTixDQUVjLElBRmQsRUFFb0IsTUFGcEIsRUFHTSxPQUhOLENBR2MsSUFIZCxFQUdvQixPQUhwQixFQUlNLE9BSk4sQ0FJYyxJQUpkLEVBSW9CLFFBSnBCLENBQVA7QUFLRDs7OytCQUVVLEssRUFBTztBQUNoQixhQUFPLE1BQU0sT0FBTixDQUFjLFFBQWQsRUFBd0IsRUFBeEIsRUFDTSxPQUROLENBQ2MsT0FEZCxFQUN1QixHQUR2QixFQUVNLE9BRk4sQ0FFYyxRQUZkLEVBRXdCLEdBRnhCLEVBR00sT0FITixDQUdjLFFBSGQsRUFHd0IsR0FIeEIsRUFJTSxPQUpOLENBSWMsU0FKZCxFQUl5QixHQUp6QixDQUFQO0FBS0Q7OztrQ0FFYSxNLEVBQVEsRyxFQUFLLE0sRUFBUTtBQUNqQyxZQUFTLFFBQVEsU0FBUixHQUFvQixHQUFwQixHQUEwQixHQUFuQztBQUNBLGVBQVMsV0FBVyxLQUFYLEdBQW1CLFVBQVMsQ0FBVCxFQUFZO0FBQUUsZUFBTyxDQUFQO0FBQVcsT0FBNUMsR0FBK0Msa0JBQXhEOztBQUVBLFVBQUksUUFBUSxFQUFaO0FBQ0EsV0FBSyxJQUFJLEdBQVQsSUFBZ0IsTUFBaEIsRUFBd0I7QUFDdEIsY0FBTSxJQUFOLENBQWMsR0FBZCxTQUFxQixPQUFPLE9BQU8sR0FBUCxDQUFQLENBQXJCO0FBQ0Q7QUFDRCxhQUFPLE1BQU0sSUFBTixDQUFXLEdBQVgsQ0FBUDtBQUNEOzs7Ozs7a0JBR1ksSUFBSSxNQUFKLEU7Ozs7Ozs7Ozs7OztBQ2pDZjs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCLGE7OztBQUNuQiwyQkFBYztBQUFBOztBQUdaO0FBSFk7O0FBSVosVUFBSyxVQUFMLEdBQWtCLENBQWxCO0FBQ0EsVUFBSyxRQUFMLEdBQWdCLENBQWhCO0FBQ0EsVUFBSyxXQUFMLEdBQW1CLENBQW5CO0FBQ0EsVUFBSyxPQUFMLEdBQWUsbUJBQWY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsVUFBSyxZQUFMLEdBQW9CO0FBQUEsYUFBVSxvQkFBVSxNQUFWLFFBQVY7QUFBQSxLQUFwQjtBQUNBLFVBQUssVUFBTCxHQUFrQixNQUFLLE9BQXZCO0FBQ0EsVUFBSyxrQkFBTCxHQUEwQjtBQUFBLGFBQU0sTUFBSyxNQUFMLENBQVk7QUFBQSxlQUFVLE9BQU8sVUFBUCxFQUFWO0FBQUEsT0FBWixDQUFOO0FBQUEsS0FBMUI7QUFDQSxVQUFLLGFBQUwsR0FBcUI7QUFBQSxhQUFNLE1BQUssTUFBTCxDQUFZO0FBQUEsZUFBVSxPQUFPLGNBQVAsRUFBVjtBQUFBLE9BQVosQ0FBTjtBQUFBLEtBQXJCO0FBQ0EsVUFBSyxTQUFMLEdBQWlCO0FBQUEsYUFBWSxNQUFLLE9BQUwsQ0FBYSxTQUFiLENBQXVCLEVBQUUsTUFBTTtBQUFBLGlCQUFTLFNBQVMsS0FBVCxDQUFUO0FBQUEsU0FBUixFQUF2QixDQUFaO0FBQUEsS0FBakI7QUFDQSxVQUFLLFNBQUwsR0FBaUI7QUFBQSxhQUFNLE1BQUssT0FBTCxDQUFhLElBQWIsT0FBTjtBQUFBLEtBQWpCO0FBQ0E7QUFwQlk7QUFxQmI7Ozs7Z0NBRXlCO0FBQUEsVUFBaEIsTUFBZ0IsdUVBQVAsS0FBTzs7QUFDeEIsV0FBSyxJQUFMLEdBQVksRUFBWjtBQUNBLE9BQUMsTUFBRCxJQUFXLEtBQUssU0FBTCxFQUFYO0FBQ0Q7Ozs2QkFFUSxJLEVBQU07QUFDYixXQUFLLFNBQUwsQ0FBZSxJQUFmO0FBQ0EsV0FBSyxJQUFMLEdBQWEsZUFBUyxJQUFULENBQUQsQ0FBaUIsR0FBakIsQ0FBcUIsS0FBSyxZQUFMLENBQWtCLElBQWxCLENBQXVCLElBQXZCLENBQXJCLEVBQW1ELE9BQW5ELEVBQVo7QUFDQSxXQUFLLFNBQUw7QUFDRDs7O29DQUVlO0FBQ2QsV0FBSyxNQUFMLENBQVk7QUFBQSxlQUFVLE9BQU8sVUFBUCxNQUF1QixPQUFPLGNBQVAsRUFBakM7QUFBQSxPQUFaLEVBQXNFLElBQXRFLENBQTJFO0FBQUEsZUFBVSxPQUFPLElBQVAsRUFBVjtBQUFBLE9BQTNFO0FBQ0EsV0FBSyxTQUFMO0FBQ0Q7OztvQ0FFZTtBQUNkLFdBQUssTUFBTCxDQUFZO0FBQUEsZUFBVSxPQUFPLFVBQVAsRUFBVjtBQUFBLE9BQVosRUFBMkMsSUFBM0MsQ0FBZ0Q7QUFBQSxlQUFVLE9BQU8sTUFBUCxDQUFjLElBQWQsQ0FBVjtBQUFBLE9BQWhEO0FBQ0EsV0FBSyxJQUFMLEdBQVksS0FBSyxNQUFMLENBQVk7QUFBQSxlQUFVLENBQUMsT0FBTyxjQUFQLEVBQVg7QUFBQSxPQUFaLEVBQWdELE9BQWhELEVBQVo7QUFDQSxXQUFLLFNBQUw7QUFDRDs7Ozs7O2tCQTVDa0IsYTs7Ozs7Ozs7Ozs7O0FDSnJCOzs7O0FBQ0E7Ozs7Ozs7O0lBRXFCLEs7QUFDbkIsaUJBQVksSUFBWixFQUFrQixLQUFsQixFQUF5QjtBQUFBOztBQUFBOztBQUN2QjtBQUNBLFNBQUssUUFBTCxHQUFnQixLQUFoQjtBQUNBOztBQUVBO0FBQ0EsU0FBSyxJQUFMLEdBQVksSUFBWjtBQUNBLFNBQUssS0FBTCxHQUFhLEtBQWI7QUFDQSxTQUFLLFVBQUwsR0FBbUIsU0FBUyxNQUFNLFVBQWhCLEdBQThCLE1BQU0sVUFBcEMsR0FBaUQsSUFBbkU7QUFDQSxRQUFNLGNBQWUsU0FBUyxNQUFNLE1BQWhCLEdBQTBCLE1BQU0sTUFBaEMsR0FBeUMsRUFBN0Q7QUFDQSxTQUFLLE1BQUwsR0FBYyxvQkFBSyxXQUFMLEVBQWtCLEdBQWxCLENBQXNCO0FBQUEsYUFBUyxjQUFJLFFBQUosQ0FBYSxLQUFiLElBQXVCLEVBQUUsTUFBTSxLQUFSLEVBQWUsTUFBTSxRQUFyQixFQUF2QixHQUEwRCxLQUFuRTtBQUFBLEtBQXRCLENBQWQ7QUFDQTs7QUFFQTtBQUNBLFNBQUssT0FBTCxHQUFlO0FBQUEsYUFBTSxNQUFLLElBQVg7QUFBQSxLQUFmO0FBQ0EsU0FBSyxHQUFMLEdBQVc7QUFBQSxhQUFhLE1BQUssSUFBTCxDQUFVLFNBQVYsQ0FBYjtBQUFBLEtBQVg7QUFDQTs7QUFFQSxTQUFLLElBQUw7QUFDRDs7Ozt3QkFFRyxTLEVBQVcsUSxFQUFVLE0sRUFBUTtBQUMvQixXQUFLLElBQUwsQ0FBVSxTQUFWLElBQXVCLFFBQXZCO0FBQ0EsV0FBSyxRQUFMLEdBQWdCLENBQUMsS0FBSyxPQUFMLENBQWEsU0FBYixDQUFqQjtBQUNDLE9BQUMsTUFBRCxJQUFXLEtBQUssS0FBakIsSUFBNEIsS0FBSyxLQUFMLENBQVcsU0FBWCxFQUE1QjtBQUNEOzs7MkJBRU07QUFDTCxXQUFLLE9BQUwsR0FBZSxjQUFJLEtBQUosQ0FBVSxLQUFLLElBQWYsQ0FBZjtBQUNBLFdBQUssUUFBTCxHQUFnQixLQUFoQjtBQUNEOzs7MkJBRU0sTSxFQUFRO0FBQ2IsV0FBSyxJQUFMLEdBQVksY0FBSSxLQUFKLENBQVUsS0FBSyxPQUFmLENBQVo7QUFDQSxXQUFLLElBQUw7QUFDQyxPQUFDLE1BQUQsSUFBVyxLQUFLLEtBQWpCLElBQTRCLEtBQUssS0FBTCxDQUFXLFNBQVgsRUFBNUI7QUFDRDs7OzRCQUVPLEssRUFBTztBQUNiLFVBQU0sV0FBVyxLQUFLLE9BQUwsQ0FBYSxNQUFNLElBQW5CLENBQWpCO0FBQUEsVUFDTSxXQUFXLEtBQUssSUFBTCxDQUFVLE1BQU0sSUFBaEIsQ0FEakI7O0FBR0EsYUFBTyxNQUFNLE1BQU4sR0FBZSxNQUFNLE1BQU4sQ0FBYSxRQUFiLEVBQXVCLFFBQXZCLENBQWYsR0FBa0QsYUFBYSxRQUF0RTtBQUNEOzs7K0JBRVUsUyxFQUFXO0FBQ3BCLGFBQU8sS0FBSyxRQUFMLElBQWlCLENBQUMsS0FBSyxPQUFMLENBQWEsS0FBSyxVQUFsQixDQUF6QixDQURvQixDQUNvQztBQUN6RDs7O3FDQUVnQjtBQUNmLGFBQU8sQ0FBQyxLQUFLLE9BQUwsQ0FBYSxLQUFLLFVBQWxCLENBQVI7QUFDRDs7O2dDQUVXLFEsRUFBVSxNLEVBQVE7QUFDNUIsV0FBSyxRQUFMLEdBQWdCLFFBQWhCO0FBQ0MsT0FBQyxNQUFELElBQVcsS0FBSyxLQUFqQixJQUE0QixLQUFLLEtBQUwsQ0FBVyxTQUFYLEVBQTVCO0FBQ0Q7Ozs7OztrQkF6RGtCLEs7Ozs7Ozs7Ozs7OztBQ0hyQjs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7OztBQURBOzs7SUFHcUIsVTs7O0FBQ25CLHdCQUFjO0FBQUE7O0FBR1o7QUFIWTs7QUFJWixVQUFLLEtBQUwsR0FBYTtBQUNYLGNBQVEsRUFERztBQUVYLGNBQVE7QUFGRyxLQUFiO0FBSUE7QUFSWTtBQVNiOzs7OzJCQUVNO0FBQUE7O0FBQUEsbUJBQ3dELEtBQUssS0FEN0Q7QUFBQSxVQUNDLEdBREQsVUFDQyxHQUREO0FBQUEsaUNBQ00sTUFETjtBQUFBLFVBQ00sTUFETixpQ0FDZSxLQURmO0FBQUEsdUNBQ3NCLFlBRHRCO0FBQUEsVUFDc0IsWUFEdEIsdUNBQ3FDLE1BRHJDO0FBQUEsVUFDNkMsTUFEN0MsVUFDNkMsTUFEN0M7O0FBRUosaUJBQVcsS0FBWCxJQUFvQixNQUFyQixLQUFpQyxNQUFTLEdBQVQsU0FBZ0IsT0FBTyxhQUFQLENBQXFCLE1BQXJCLENBQWpEO0FBQ0EsdUJBQVcsSUFBWCxDQUFnQjtBQUNkLGdCQURjO0FBRWQsc0JBRmM7QUFHZCxrQ0FIYztBQUlkLGNBQU0sV0FBVyxNQUFYLElBQXFCO0FBSmIsT0FBaEIsRUFNQyxHQU5ELENBTUs7QUFBQSxlQUFTLE1BQU0sUUFBZjtBQUFBLE9BTkwsRUFPQyxTQVBELENBT1csb0JBQVk7QUFBQSw0QkFDb0MsT0FBSyxLQUR6QyxDQUNiLE1BRGE7QUFBQSxzREFDNkIsRUFEN0I7QUFBQSxZQUNILFlBREcsaUJBQ0gsWUFERztBQUFBLFlBQ1csYUFEWCxpQkFDVyxhQURYOztBQUVyQixlQUFLLFFBQUwsQ0FBYyxlQUFlLFNBQVMsWUFBVCxDQUFmLEdBQXdDLFFBQXREO0FBQ0EsZUFBSyxVQUFMLEdBQW1CLE9BQUssUUFBTCxJQUFpQixhQUFsQixHQUFtQyxTQUFTLGFBQVQsQ0FBbkMsR0FBNkQsT0FBSyxLQUFMLEVBQS9FO0FBQ0QsT0FYRDtBQVlEOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O2tCQTlDbUIsVTs7Ozs7Ozs7Ozs7QUNMckI7Ozs7Ozs7O0lBRU0sWTs7Ozs7Ozs7Ozs7d0JBQ0EsRyxFQUFLLEssRUFBTztBQUNkLFdBQUssSUFBTCxDQUFVLEdBQVYsSUFBaUIsS0FBakI7QUFDRDs7O3dCQUVHLEcsRUFBSztBQUNQLGFBQU8sS0FBSyxJQUFMLENBQVUsR0FBVixDQUFQO0FBQ0Q7Ozs7OztrQkFHWSxJQUFJLFlBQUosRTs7Ozs7Ozs7O0FDWmY7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU0sSzs7O0FBQ0osaUJBQVksTUFBWixFQUFvQjtBQUFBOztBQUFBOztBQUVsQixrQkFBSSxNQUFKLFFBQWlCLE1BQWpCO0FBRmtCO0FBR25COzs7OztrQkFHWTtBQUFBLFNBQVUsSUFBSSxLQUFKLENBQVUsTUFBVixDQUFWO0FBQUEsQzs7Ozs7OztBQ1ZmOzs7Ozs7Ozs7O0lBRU0sYztBQUNKLDBCQUFZLFlBQVosRUFBMEI7QUFBQTs7QUFBQTs7QUFDeEIsU0FBSyxPQUFMLEdBQWUsY0FBSSxNQUFKLENBQVc7QUFDeEIsV0FBSyxFQURtQjtBQUV4QixjQUFRLEVBRmdCO0FBR3hCLG1CQUFhLGlDQUhXO0FBSXhCLGNBQVE7QUFKZ0IsS0FBWCxFQUtaLGNBQUksUUFBSixDQUFhLFlBQWIsSUFBNkIsRUFBRSxLQUFLLFlBQVAsRUFBN0IsR0FBcUQsWUFMekMsQ0FBZjs7QUFPQSxTQUFLLE9BQUwsR0FBZTtBQUFBLGFBQVcsSUFBSSxPQUFKLENBQVksVUFBQyxPQUFELEVBQVUsTUFBVixFQUFxQjtBQUN6RCxjQUFLLGFBQUwsQ0FBbUIsT0FBbkIsRUFBNEIsVUFBQyxLQUFELEVBQVEsUUFBUjtBQUFBLGlCQUFxQixRQUFRLE9BQU8sS0FBUCxDQUFSLEdBQXdCLFFBQVEsUUFBUixDQUE3QztBQUFBLFNBQTVCO0FBQ0QsT0FGeUIsQ0FBWDtBQUFBLEtBQWY7QUFHRDs7Ozs7O1lBRWlCLEksUUFBQSxJO1lBQU0sSyxRQUFBLEs7WUFBTyxRLFFBQUEsUTs7Ozs7OztBQUV2Qix3Qjs7O3VCQUVlLEtBQUssT0FBTCxDQUFhLEVBQUUsUUFBRixFQUFPLHdCQUFQLEVBQW9CLGNBQXBCLEVBQTRCLGNBQTVCLEVBQWIsQzs7O0FBQWpCLHdCOzs7Ozs7OztBQUVBLHdCQUFRLEtBQVIsK0NBQTBELEdBQTFEO0FBQ0EseUJBQVMsa0JBQVQ7aURBQ08sSTs7O2lEQUdGLE9BQU8sS0FBSyxRQUFMLENBQVAsR0FBd0IsUTs7Ozs7QUFFL0IsNEJBQVksVUFBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FJdUMsSSxFQUFNO0FBQUEsVUFBMUMsR0FBMEMsU0FBMUMsR0FBMEM7QUFBQSxVQUFyQyxXQUFxQyxTQUFyQyxXQUFxQztBQUFBLFVBQXhCLE1BQXdCLFNBQXhCLE1BQXdCO0FBQUEsVUFBaEIsTUFBZ0IsU0FBaEIsTUFBZ0I7O0FBQzlDLGlCQUFXLEtBQVgsSUFBb0IsTUFBckIsS0FBaUMsTUFBUyxHQUFULFNBQWdCLE9BQU8sYUFBUCxDQUFxQixNQUFyQixDQUFqRDtBQUNBLFVBQU0sTUFBTSxjQUFJLEdBQWhCO0FBQ0EsVUFBSSxJQUFKLENBQVMsTUFBVCxFQUFpQixHQUFqQixFQUFzQixJQUF0QjtBQUNBLFVBQUksZ0JBQUosQ0FBcUIsY0FBckIsRUFBcUMsV0FBckM7QUFDQSxVQUFJLGtCQUFKLEdBQXlCLFlBQU07QUFDN0IsWUFBRyxJQUFJLFVBQUosS0FBbUIsZUFBZSxJQUFyQyxFQUEyQztBQUN6QztBQUNBLGNBQUksSUFBSSxNQUFKLEtBQWUsR0FBbkIsRUFBd0I7QUFDdEIsZ0JBQUk7QUFDRixtQkFBSyxJQUFMLEVBQVcsS0FBSyxLQUFMLENBQVcsSUFBSSxZQUFmLENBQVg7QUFDRCxhQUZELENBRUUsT0FBTyxDQUFQLEVBQVU7QUFDVixtQkFBSyxJQUFMLEVBQVcsSUFBSSxZQUFmO0FBQ0Q7QUFDRixXQU5ELE1BTU87QUFDTCxnQkFBSTtBQUNGLG1CQUFLLEtBQUssS0FBTCxDQUFXLElBQUksWUFBZixDQUFMO0FBQ0QsYUFGRCxDQUVFLE9BQU8sQ0FBUCxFQUFVO0FBQ1YsbUJBQUssSUFBSSxZQUFUO0FBQ0Q7QUFDRjtBQUNGO0FBQ0YsT0FqQkQ7QUFrQkEsVUFBSSxJQUFKLENBQVMsU0FBUyxLQUFLLFNBQUwsQ0FBZSxNQUFmLENBQVQsR0FBa0MsSUFBM0M7QUFDRDs7OzJCQUVhLFksRUFBYztBQUMxQixhQUFPLElBQUksY0FBSixDQUFtQixZQUFuQixDQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDN0RrQixlO0FBQ25CLDJCQUFZLE1BQVosRUFBb0IsU0FBcEIsRUFBK0IsT0FBL0IsRUFBd0M7QUFBQTs7QUFDdEMsU0FBSyxNQUFMLEdBQWMsTUFBZDtBQUNBLFNBQUssU0FBTCxHQUFpQixTQUFqQjtBQUNBLFNBQUssT0FBTCxHQUFlLE9BQWY7QUFDRDs7Ozs4QkFFUyxRLEVBQVU7QUFDbEIsV0FBSyxNQUFMLENBQVksZ0JBQVosQ0FBNkIsS0FBSyxTQUFsQyxFQUE2QyxRQUE3QyxFQUF1RCxLQUFLLE9BQTVEO0FBQ0Q7OztnQ0FFVyxRLEVBQVU7QUFDcEIsV0FBSyxNQUFMLENBQVksbUJBQVosQ0FBZ0MsS0FBSyxTQUFyQyxFQUFnRCxRQUFoRCxFQUEwRCxLQUFLLE9BQS9EO0FBQ0Q7OzsyQkFFYSxNLEVBQVEsUyxFQUE0QjtBQUFBLFVBQWpCLE9BQWlCLHVFQUFQLEtBQU87O0FBQ2hELGFBQU8sSUFBSSxlQUFKLENBQW9CLE1BQXBCLEVBQTRCLFNBQTVCLEVBQXVDLE9BQXZDLENBQVA7QUFDRDs7Ozs7O2tCQWpCa0IsZTs7Ozs7Ozs7Ozs7O0FDQXJCOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7SUFhcUIsVTs7O0FBQ25CLHNCQUFZLFNBQVosRUFBdUI7QUFBQTs7QUFBQTs7QUFFckIsVUFBSyxTQUFMLEdBQWlCLFNBQWpCO0FBRnFCO0FBR3RCOzs7OzJCQUVhLFMsRUFBVztBQUN2QixhQUFPLElBQUksVUFBSixDQUFlLFNBQWYsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs4QkFXaUIsTSxFQUFRLFMsRUFBVztBQUNsQyxhQUFPLFdBQVcsTUFBWCxDQUFrQixvQkFBWTtBQUNuQyxZQUFNLFdBQVcsU0FBWCxRQUFXO0FBQUEsaUJBQUssU0FBUyxJQUFULENBQWMsQ0FBZCxDQUFMO0FBQUEsU0FBakI7QUFDQSxlQUFPLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLFFBQW5DLEVBQTZDLEtBQTdDO0FBQ0EsZUFBTztBQUFBLGlCQUFNLE9BQU8sbUJBQVAsQ0FBMkIsU0FBM0IsRUFBc0MsUUFBdEMsRUFBZ0QsS0FBaEQsQ0FBTjtBQUFBLFNBQVA7QUFDRCxPQUpNLENBQVA7QUFLRDs7O3lCQUVXLFksRUFBYztBQUN4QixhQUFPLGVBQWUsTUFBZixDQUFzQixZQUF0QixDQUFQO0FBQ0Q7Ozs7OztrQkEvQmtCLFU7Ozs7Ozs7Ozs7O0lDakJBLFEsR0FDbkIsb0JBQWM7QUFBQTs7QUFDWixPQUFLLE1BQUwsR0FBYyxxQkFBYSxDQUFFLHVCQUF5QixDQUF0RDtBQUNBLE9BQUssR0FBTCxHQUFXLHFCQUFhLENBQUUsdUJBQXlCLENBQW5EO0FBQ0EsT0FBSyxNQUFMLEdBQWMscUJBQWEsQ0FBRSx1QkFBeUIsQ0FBdEQ7QUFDRCxDOztrQkFMa0IsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJDbUNaLFU7Ozs7OzttQkFBWSxJOzs7Ozs7Ozs7c0JBQ1osUzs7OztBQWpDVDs7Ozs7Z0JBeUNTLEk7Ozs7OzttQkFDQSxLOzs7Ozs7Ozs7OENBQ0EsTzs7Ozs7Ozs7OzBDQUVBLE87Ozs7QUFoRFQ7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7SUFFTSxJOzs7QUFDSixrQkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUssWUFBTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTlk7QUFPYjs7Ozs7O1lBRW1CLE0sUUFBQSxNO1lBQVEsTSxRQUFBLE07Ozs7OztBQUMxQixvQkFBSSxNQUFKLEVBQVk7QUFDVix1QkFBSyxJQUFMLENBQVUsTUFBVixFQUFrQixJQUFsQixDQUF1QixpQkFBUztBQUM5Qiw0QkFBUSxNQUFNLE9BQWQ7QUFDQSwyQ0FBYSxHQUFiLENBQWlCLE1BQU0sT0FBdkIsRUFBZ0MsS0FBaEM7QUFDRCxtQkFIRDtBQUlEOztxQkFDRyxNOzs7OztBQUNJLG9CLEdBQU8sS0FBSyxhQUFMLENBQW1CLDZCQUFuQixDOzt1QkFDVSxROzs7QUFBakIsd0I7O0FBQ04seUJBQVMsSUFBVCxDQUFjLFdBQWQsQ0FBMEIsSUFBMUI7QUFDQSxzQ0FBTyxRQUFQLEVBQWlCLElBQWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBS1MsSUFBSSxJQUFKLEU7O0FBRWYiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJleHQgZnJvbSAnfi9yZXh0JztcbmltcG9ydCBWaWV3cG9ydCBmcm9tICcuL2NvbXBvbmVudHMvdmlld3BvcnQvdmlld3BvcnQnO1xuXG5SZXh0LmFwcGxpY2F0aW9uKHtcbiAgc3RvcmVzOiBbXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2V4YW1wbGUvc3RvcmVzL2NhcmQnKSxcbiAgXSxcbiAgdmlld3M6IFtcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvZ2V0dGluZy1zdGFydGVkL2dldHRpbmctc3RhcnRlZCcpLFxuICAgIHJlcXVpcmUoJy4vY29tcG9uZW50cy9jb3JlLWNvbmNlcHRzL2NvbXBvbmVudCcpLFxuICAgIHJlcXVpcmUoJy4vY29tcG9uZW50cy9jb3JlLWNvbmNlcHRzL3NjcmVlbi1uYXZpZ2F0aW9uJyksXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2NvcmUtY29uY2VwdHMvZGF0YS1wYWNrYWdlJyksXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2FyY2hpdGVjdHVyZS9hcmNoaXRlY3R1cmUnKSxcbiAgICAvLyByZXF1aXJlKCcuL2NvbXBvbmVudHMvdWktY29tcG9uZW50cy9ncmlkJyksXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2V4YW1wbGUvZGFzaGJvYXJkJyksXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2V4YW1wbGUvc2VhcmNoJyksXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2V4YW1wbGUvZGV0YWlscycpLFxuICAgIHJlcXVpcmUoJy4vY29tcG9uZW50cy9leGFtcGxlL25vdGZvdW5kJyksXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2V4YW1wbGUvY2FyZHMnKSxcbiAgXSxcbiAgbGF1bmNoOiAoKSA9PiA8Vmlld3BvcnQgLz5cbn0pOyIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIENvbnRhaW5lciB9IGZyb20gJ34vcmV4dCc7XG5cbkBSb3V0ZSgnL2FyY2hpdGVjdHVyZScpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcmNoaXRlY3R1cmUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Q29udGFpbmVyIGNsYXNzTmFtZT1cIm1haW4gY29udGFpbmVyIHNjcm9sbGFibGVcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi1tZFwiPkFwcGxpY2F0aW9uIEFyY2hpdGVjdHVyZTwvaDE+XG4gICAgICA8cHJlIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG57YC8vIC4vYXBwLmpzXG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmV4dCBmcm9tICdleHQtcmVhY3QnO1xuaW1wb3J0IFZpZXdwb3J0IGZyb20gJy4vY29tcG9uZW50cy92aWV3cG9ydC92aWV3cG9ydCc7XG5cblJleHQuYXBwbGljYXRpb24oe1xuICBzdG9yZXM6IFtcbiAgICByZXF1aXJlKCcuL3N0b3Jlcy9kYXRhJyksXG4gIF0sXG4gIHZpZXdzOiBbXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2gnKSxcbiAgXSxcbiAgbGF1bmNoOiAoKSA9PiA8Vmlld3BvcnQgLz5cbn0pO2B9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntgLy8gLi9zdG9yZXMvY2FyZFxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdleHQtcmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBTdG9yZSh7XG4gIHN0b3JlSWQ6ICdEYXRhU3RvcmUnLFxuICBwcm94eToge1xuICAgIHVybDogJy9kYXRhL3NhbXBsZS5qc29uJ1xuICB9XG59KWB9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntgLy8gLi9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guanNcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmV4dCwgeyBDb250YWluZXIgfSBmcm9tICdleHQtcmVhY3QnO1xuaW1wb3J0IFNlYXJjaEZvcm0gZnJvbSAnLi9zZWFyY2gtZm9ybSc7XG5pbXBvcnQgU2VhcmNoUmVzdWx0IGZyb20gJy4vc2VhcmNoLXJlc3VsdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBTZWFyY2goKSB7XG4gIHJldHVybiA8Q29udGFpbmVyPlxuICAgIDxTZWFyY2hGb3JtIC8+XG4gICAgPFNlYXJjaFJlc3VsdCAvPlxuICA8L0NvbnRhaW5lcj5cbn1gfVxuICAgICAgPC9wcmU+XG4gICAgICA8cHJlIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG57YC8vIC4vY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLWZvcm0uanNcbmltcG9ydCB7IENvbXBvbmVudCwgYmluZCB9IGZyb20gJ2V4dC1yZWFjdCc7XG5pbXBvcnQgU2VhcmNoRm9ybVZpZXcgZnJvbSAnLi9zZWFyY2gtZm9ybS52aWV3JztcblxuQENvbXBvbmVudCh7XG4gIHN0b3JlOiBbICdEYXRhU3RvcmUnIF1cbiAgdmlldzogU2VhcmNoRm9ybVZpZXdcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hGb3JtIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jcml0ZXJpYSA9IHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgc3RhdHVzZXM6IFtdLFxuICAgICAgcHVycG9zZXM6IFtdLFxuICAgICAgYWN0aXZpdGllczogW10sXG4gICAgICBwcm9kdWN0czogW11cbiAgICB9O1xuICB9XG5cbiAgQGJpbmRcbiAgc2VhcmNoKGNyaXRlcmlhKSB7XG4gICAgY29uc3QgeyBEYXRhU3RvcmUgfSA9IHRoaXMuc3RvcmVzO1xuICAgIERhdGFTdG9yZS5yZWplY3RDaGFuZ2VzKCk7XG4gICAgUmV4dC5leHRlbmQoRGF0YVN0b3JlLnByb3h5LCB7XG4gICAgICBwYXJhbXM6IGNyaXRlcmlhLFxuICAgICAgZmFpbDogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyKHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICBEYXRhU3RvcmUuY2xlYXJEYXRhKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgRGF0YVN0b3JlLmxvYWQoKTtcbiAgfVxuXG4gIEBiaW5kXG4gIGNsZWFyU2VhcmNoUmVzdWx0KGNvbXApIHtcbiAgICBjb25zdCB7IERhdGFTdG9yZSB9ID0gdGhpcy5zdG9yZXM7XG4gICAgRGF0YVN0b3JlLnJlamVjdENoYW5nZXMoKTtcbiAgICBEYXRhU3RvcmUuY2xlYXJEYXRhKCk7XG4gICAgY29tcC5zZXRTdGF0ZSgoKSA9PiAodGhpcy5jcml0ZXJpYSkpO1xuICB9XG59YH1cbiAgICAgIDwvcHJlPlxuICAgICAgPHByZSBjbGFzc05hbWU9XCJtYi1tZFwiPlxue2AvLyAuL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC1mb3JtLnZpZXcuanN4XG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZpZWxkLCBEcm9wZG93biwgQnV0dG9uIH0gZnJvbSAnZXh0LXJlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoRm9ybVZpZXcgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgRXh0LmluaXRpYWxTdGF0ZSh0aGlzLCBwcm9wcy4kdmlldy5jcml0ZXJpYSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBuYW1lLCBzdGF0dXNlcywgcHVycG9zZXMsIGFjdGl2aXRpZXMsIHByb2R1Y3RzIH0gPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIHsgc2VhcmNoLCBjbGVhclNlYXJjaFJlc3VsdCB9ID0gdGhpcy5wcm9wcy4kdmlldztcbiAgICByZXR1cm4gPHNlY3Rpb24+XG4gICAgICA8RmllbGQgdmFsdWU9e25hbWV9IHBsYWNlaG9sZGVyPVwiTmFtZVwiIG9uQ2hhbmdlPXt0aGlzLnNldE5hbWV9IC8+XG4gICAgICA8RHJvcGRvd24gbXVsdGlwbGUgb3B0aW9ucz17W119IHZhbHVlPXtzdGF0dXNlc30gb25CbHVyPXt0aGlzLnNldFN0YXR1c2VzfSAvPlxuICAgICAgPERyb3Bkb3duIG11bHRpcGxlIG9wdGlvbnM9e1tdfSB2YWx1ZT17cHVycG9zZXN9IG9uQmx1cj17dGhpcy5zZXRQdXJwb3Nlc30gLz5cbiAgICAgIDxEcm9wZG93biBtdWx0aXBsZSBvcHRpb25zPXtbXX0gdmFsdWU9e2FjdGl2aXRpZXN9IG9uQmx1cj17dGhpcy5zZXRBY3Rpdml0aWVzfSAvPlxuICAgICAgPERyb3Bkb3duIG11bHRpcGxlIG9wdGlvbnM9e1tdfSB2YWx1ZT17cHJvZHVjdHN9IG9uQmx1cj17dGhpcy5zZXRQcm9kdWN0c30gLz5cbiAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiB0ZXh0PVwiU2VhcmNoXCIgb25DbGljaz17KCkgPT4gc2VhcmNoKHRoaXMuc3RhdGUpfSAvPlxuICAgICAgPEJ1dHRvbiB0ZXh0PVwiQ2xlYXJcIiBvbkNsaWNrPXsoKSA9PiBjbGVhclNlYXJjaFJlc3VsdCh0aGlzKX0gLz5cbiAgICA8L3NlY3Rpb24+XG4gIH1cbn1gfVxuICAgICAgPC9wcmU+XG4gICAgICA8cHJlIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG57YC8vIC4vY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLXJlc3VsdC5qc3hcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJleHQsIHsgQ29udGFpbmVyLCBHcmlkIH0gZnJvbSAnZXh0LXJlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoUmVzdWx0IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuRGF0YVN0b3JlID0gUmV4dC5TdG9yZU1hbmFnZXIuZ2V0KCdEYXRhU3RvcmUnKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5hbWUsIHJlY29yZFN0YXR1c2VzLCBwdXJwb3NlcywgYWN0aXZpdGllcywgcHJvZHVjdHMgfSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgeyBzZWFyY2gsIGNsZWFyU2VhcmNoUmVzdWx0IH0gPSB0aGlzLnByb3BzLiR2aWV3O1xuICAgIHJldHVybiA8Q29udGFpbmVyPlxuICAgICAgPEdyaWQgc3RvcmU9e3RoaXMuRGF0YVN0b3JlfT5cbiAgICAgICAgPGRpdiB0ZXh0PVwiSURcIiBkYXRhSW5kZXg9XCJpZFwiIC8+XG4gICAgICAgIDxkaXYgdGV4dD1cIk5hbWVcIiBkYXRhSW5kZXg9XCJuYW1lXCIgLz5cbiAgICAgICAgPGRpdiB0ZXh0PVwiU3RhdHVzXCIgZGF0YUluZGV4PVwic3RhdHVzXCIgLz5cbiAgICAgICAgPGRpdiB0ZXh0PVwiUHVycG9zZVwiIGRhdGFJbmRleD1cInB1cnBvc2VcIiAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJBY3Rpdml0eVwiIGRhdGFJbmRleD1cImFjdGl2aXR5XCIgLz5cbiAgICAgICAgPGRpdiB0ZXh0PVwiUHJvZHVjdFwiIGRhdGFJbmRleD1cInByb2R1Y3RcIiAvPlxuICAgICAgPC9HcmlkPlxuICAgIDwvQ29udGFpbmVyPlxuICB9XG59YH1cbiAgICAgIDwvcHJlPlxuICAgIDwvQ29udGFpbmVyPlxuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29udGFpbmVyIH0gZnJvbSAnfi9yZXh0JztcblxuQFJvdXRlKCcvY29yZS1jb25jZXB0cy9jb21wb25lbnQnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmV4dENvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxDb250YWluZXIgY2xhc3NOYW1lPVwibWFpbiBjb250YWluZXIgc2Nyb2xsYWJsZVwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLW1kXCI+Q29tcG9uZW50PC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG4gICAgICAgIEEgY29tcG9uZW50IGluIEV4dGVuc2lvbiBSZWFjdCBpcyB0aGUgY29tYmluYXRpb24gb2YgYSBSZWFjdCBDb21wb25lbnQgYW5kIGEgY29tcG9uZW50IGNsYXNzIHRoYXQgY29udHJvbHMgYSBwb3J0aW9uIG9mIHRoZSBzY3JlZW4uXG4gICAgICAgIEhlcmUgaXMgYW4gZXhhbXBsZSBvZiBhIGNvbXBvbmVudCB0aGF0IGRpc3BsYXkgYSBzaW1wbGUgc3RyaW5nOlxuICAgICAgPC9wPlxuICAgICAgPHByZSBjbGFzc05hbWU9XCJtYi1tZFwiPlxue2BpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2V4dC1yZWFjdCc7XG5cbmNsYXNzIERhc2hib2FyZFZpZXcgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8aDE+e3RoaXMucHJvcHMuJHZpZXcudGl0bGV9PC9oMT47XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHZpZXc6IERhc2hib2FyZFZpZXdcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRpdGxlID0gJ0Rhc2hib2FyZCc7XG4gIH1cbn1gfVxuICAgICAgPC9wcmU+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlxuICAgICAgICBFdmVyeSBjb21wb25lbnQgYmVnaW5zIHdpdGggYW4gPGNvZGU+QENvbXBvbmVudDwvY29kZT4gZGVjb3JhdG9yIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSA8ZW0+bWV0YWRhdGE8L2VtPiBvYmplY3QuXG4gICAgICAgIFRoZSBtZXRhZGF0YSBvYmplY3QgZGVzY3JpYmVzIGhvdyB0aGUgUmVhY3QgQ29tcG9uZW50IGFuZCBjb21wb25lbnQgY2xhc3Mgd29yayB0b2dldGhlci5cbiAgICAgICAgVGhhdCdzIG1lYW4geW91IGNhbiBhY2Nlc3MgYW55IHByb3BlcnR5IG9yIG1ldGhvZCBvZiBjb21wb25lbnQgY2xhc3MgdmlhIDxjb2RlPnRoaXMucHJvcHMuJHZpZXc8L2NvZGU+LlxuICAgICAgPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5cbiAgICAgICAgQWN0dWFsbHksIHdpdGggdGhlIGFib3ZlIGV4YW1wbGUsIGl0IGNhbiBiZSBpbXBsZW1lbnRlZCBsaWtlIHRoaXM6XG4gICAgICA8L3A+XG4gICAgICA8cHJlIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG57YGltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2V4dC1yZWFjdCc7XG5cbkBDb21wb25lbnQoe1xuICB2aWV3OiAoeyAkdmlldyB9KSA9PiA8aDE+eyR2aWV3LnRpdGxlfTwvaDE+XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFzaGJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50aXRsZSA9ICdEYXNoYm9hcmQnO1xuICB9XG59YH1cbiAgICAgIDwvcHJlPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5FeHRlbnNpb24gUmVhY3QgcHJvdmlkZSBhIG5ldyB3YXkgdG8gd29yayB3aXRoIHN0YXRlOjwvcD5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntgLy8gLi9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2gudmlldy5qc3hcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmV4dCBmcm9tICdleHRlbnNpb24tcmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hWaWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgUmV4dC5pbml0aWFsU3RhdGUodGhpcywge1xuICAgICAgbmFtZTogcHJvcHMubmFtZVxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB0aGlzLnNldE5hbWUobmV4dFByb3BzLm5hbWUpO1xuICB9XG4gIC4uLlxufWB9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwPlxuICAgICAgICBJbnN0ZWFkIG9mIHVzaW5nIDxjb2RlPntgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlLCBwcm9wcykgPT4gKHsgbmFtZTogcHJvcHMubmFtZSB9KSlgfTwvY29kZT4gdG8gdXBkYXRlIHRoZSBzdGF0ZSxcbiAgICAgICAgeW91IGNhbiB1c2UgPGNvZGU+dGhpcy5zZXROYW1lKHByb3BzLm5hbWUpPC9jb2RlPiB0byBtYWtlIGl0IGVhc2llciB0byB1bmRlcnN0YW5kIGFuZCBtb3JlIG5hdHVyYWwgYnkgdXNpbmcgPGNvZGU+UmV4dC5pbml0aWFsU3RhdGU8L2NvZGU+IGZ1bmN0aW9uIHRvIGRlY2xhcmUgdGhlIHN0YXRlIGluIGNvbnN0cnVjdG9yLlxuICAgICAgPC9wPlxuICAgIDwvQ29udGFpbmVyPlxuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29udGFpbmVyIH0gZnJvbSAnfi9yZXh0JztcblxuQFJvdXRlKCcvY29yZS1jb25jZXB0cy9kYXRhLXBhY2thZ2UnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YVBhY2thZ2UgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Q29udGFpbmVyIGNsYXNzTmFtZT1cIm1haW4gY29udGFpbmVyIHNjcm9sbGFibGVcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi1tZFwiPkRhdGEgUGFja2FnZTwvaDE+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlRoZSBkYXRhIHBhY2thZ2UgaXMgd2hhdCBsb2FkcyBhbmQgc2F2ZXMgYWxsIG9mIHRoZSBkYXRhIGluIHlvdXIgYXBwbGljYXRpb24uPC9wPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLW1kXCI+TW9kZWxzPC9oMz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+VGhlIGNlbnRlcnBpZWNlIG9mIHRoZSBkYXRhIHBhY2thZ2UgaXMgYE1vZGVsYCB3aGljaCByZXByZXNlbnRzIGFuIGVudGl0eSBpbiBhbiBhcHBsaWNhdGlvbi48L3A+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwibWItbWRcIj5TdG9yZXM8L2gzPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5UaGUgPGNvZGU+U3RvcmU8L2NvZGU+IGNsYXNzIGVuY2Fwc3VsYXRlcyBhIGNsaWVudCBzaWRlIGNhY2hlIG9mIDxjb2RlPk1vZGVsPC9jb2RlPiBvYmplY3RzLjwvcD5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntgaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdleHQtcmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JlKHtcbiAgc3RvcmVJZDogJ0NhcmRTdG9yZScsXG4gIHByb3h5OiB7XG4gICAgdXJsOiAnL2RhdGEvY2FyZC5qc29uJ1xuICB9XG59KWB9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG4gICAgICAgIEluIHRoZSBleGFtcGxlIGFib3ZlIHdlIGNvbmZpZ3VyZWQgYW4gQUpBWCBwcm94eSB0byBsb2FkIGRhdGEgZnJvbSB0aGUgdXJsIDxjb2RlPi9hcGkvdXNlci9zZWFyY2g8L2NvZGU+LlxuICAgICAgICBTdG9yZXMgbG9hZCBkYXRhIHZpYSA8Y29kZT5wcm94eTwvY29kZT4gd2l0aCB0aGlzIGZvbGxvd2luZyBzdHJ1Y3R1cmU6XG4gICAgICA8L3A+XG4gICAgICA8cHJlIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG57YHtcbiAgdXJsOiAgICAvKiBUaGUgVVJMIGZyb20gd2hpY2ggdG8gcmVxdWVzdCB0aGUgZGF0YSBvYmplY3QgKi8sXG4gIG1ldGhvZDogLyogVGhlIGRlZmF1bHQgSFRUUCBtZXRob2QgdG8gYmUgdXNlZCBmb3IgcmVxdWVzdHMuIElmIG5vdCBzZXQsIEdFVCB3aWxsIGJlIHVzZWQuICovXG4gIHBhcmFtczogLyogUmVxdWVzdCBwYXJhbWV0ZXJzIHNlbnQgYXMganNvbiBkYXRhICovXG4gIHJlYWRlcjogLyogVXNlIHRvIGRlY29kZSB0aGUgc2VydmVyJ3MgcmVzcG9uc2UgKi9cbn1gfVxuICAgICAgPC9wcmU+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlN0b3JlcyBjYW4gYWxzbyBsb2FkIGRhdGEgaW5saW5lLiBJbnRlcm5hbGx5LCBTdG9yZSBjb252ZXJ0cyBlYWNoIG9mIHRoZSBvYmplY3RzIHdlIHBhc3MgaW4gYXMgY2ZnLWRhdGEgaW50byBNb2RlbCBpbnN0YW5jZXM6PC9wPlxuICAgICAgPHByZSBjbGFzc05hbWU9XCJtYi1tZFwiPlxue2BpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ2V4dC1yZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgU3RvcmUoe1xuICBzdG9yZUlkOiAnVXNlclN0b3JlJyxcbiAgZGF0YTogW1xuICAgIHtmaXJzdE5hbWU6ICdQZXRlcicsICAgbGFzdE5hbWU6ICdWZW5rbWFuJ30sXG4gICAge2ZpcnN0TmFtZTogJ0Vnb24nLCAgICBsYXN0TmFtZTogJ1NwZW5nbGVyJ30sXG4gICAge2ZpcnN0TmFtZTogJ1JheScsICAgICBsYXN0TmFtZTogJ1N0YW50eid9LFxuICAgIHtmaXJzdE5hbWU6ICdXaW5zdG9uJywgbGFzdE5hbWU6ICdaZWRkZW1vcmUnfVxuICBdXG59KWB9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+Tm93LCBqdXN0IGJpbmQgYSBzdG9yZSB0byB0aGUgPGNvZGU+Q29tcG9uZW50PC9jb2RlPjo8L3A+XG4gICAgICA8cHJlIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG57YGltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBiaW5kIH0gZnJvbSAnZXh0LXJlYWN0JztcbmltcG9ydCBDYXJkU3RvcmUgZnJvbSAnfi9zdG9yZXMvY2FyZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBDYXJkU3RvcmUuY2xlYXJEYXRhKCk7XG4gICAgQ2FyZFN0b3JlLmxvYWQoKTtcbiAgICBDYXJkU3RvcmUuc3Vic2NyaWJlKHRoaXMucmVsb2FkKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIENhcmRTdG9yZS51bnN1YnNjcmliZSh0aGlzLnJlbG9hZCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcmVjb3JkcyA9IENhcmRTdG9yZS5nZXREYXRhKCk7XG4gICAgcmV0dXJuIDxzZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicngtZ3JpZC1oZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cgcngtZ3JpZC1oZWFkZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyeC1ncmlkLWNvbHVtbi1oZWFkZXIgdGV4dC1zbS1jZW50ZXJcIiBzdHlsZT17e3dpZHRoOicyMCUnfX0+SUQ8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ4LWdyaWQtY29sdW1uLWhlYWRlciB0ZXh0LXNtLWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6JzIwJSd9fT5OYW1lPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyeC1ncmlkLWNvbHVtbi1oZWFkZXIgdGV4dC1zbS1jZW50ZXJcIiBzdHlsZT17e3dpZHRoOicyMCUnfX0+VHlwZTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicngtZ3JpZC1jb2x1bW4taGVhZGVyIHRleHQtc20tY2VudGVyXCIgc3R5bGU9e3t3aWR0aDonMjAlJ319PkFybW9yPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyeC1ncmlkLWNvbHVtbi1oZWFkZXIgdGV4dC1zbS1jZW50ZXJcIiBzdHlsZT17e3dpZHRoOicyMCUnfX0+V2VhcG9uPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicngtZ3JpZC1ib2R5XCIgc3R5bGU9e3tvdmVyZmxvdzondmlzaWJsZSd9fT5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicngtZ3JpZC12aWV3XCI+XG4gICAgICAgICAge3JlY29yZHMubWFwKHJlY29yZCA9PiA8YXJ0aWNsZSBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cgcngtZ3JpZC1yb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicngtZ3JpZC1jZWxsXCIgc3R5bGU9e3t3aWR0aDonMjAlJ319PntyZWNvcmQuZ2V0KCdJZCcpfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyeC1ncmlkLWNlbGxcIiBzdHlsZT17e3dpZHRoOicyMCUnfX0+e3JlY29yZC5nZXQoJ05hbWUnKX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicngtZ3JpZC1jZWxsXCIgc3R5bGU9e3t3aWR0aDonMjAlJ319PntyZWNvcmQuZ2V0KCdUeXBlJyl9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ4LWdyaWQtY2VsbFwiIHN0eWxlPXt7d2lkdGg6JzIwJSd9fT57cmVjb3JkLmdldCgnQXJtb3JVc2FibGUnKX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicngtZ3JpZC1jZWxsXCIgc3R5bGU9e3t3aWR0aDonMjAlJ319PntyZWNvcmQuZ2V0KCdXZWFwb25Vc2FibGUnKX08L2Rpdj5cbiAgICAgICAgICA8L2FydGljbGU+KX1cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvc2VjdGlvbj47XG4gIH1cblxuICBAYmluZFxuICByZWxvYWQoKSB7XG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICB9XG59YH1cbiAgICAgIDwvcHJlPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5cbiAgICAgICAgSW4gdGhpcyBhYm92ZSBleGFtcGxlLCB3ZSB1c2UgPGNvZGU+c3Vic2NyaWJlPC9jb2RlPiB0byB1cGRhdGUgdGhlIGNvbXBvbmVudCB3aGVuZXZlciBkYXRhJ3MgY2hhbmdlZC5cbiAgICAgICAgQmVjYXVzZSBTdG9yZSBjb252ZXJ0IGRhdGEgdG8gTW9kZWwgdGhlbiB5b3UgbmVlZCB0byB1c2UgPGNvZGU+Z2V0PC9jb2RlPiB0byBhY2Nlc3MgZGF0YS5cbiAgICAgIDwvcD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIENvbnRhaW5lciB9IGZyb20gJ34vcmV4dCc7XG5cbkBSb3V0ZSgnL2NvcmUtY29uY2VwdHMvc2NyZWVuLW5hdmlnYXRpb24nKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NyZWVuTmF2aWdhdGlvbiBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxDb250YWluZXIgY2xhc3NOYW1lPVwibWFpbiBjb250YWluZXIgc2Nyb2xsYWJsZVwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLW1kXCI+U2NyZWVuIE5hdmlnYXRpb248L2gxPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG4gICAgICAgIDxsaT48c3Ryb25nPjxjb2RlPlJvdXRlPC9jb2RlPjwvc3Ryb25nPiBkZWNvcmF0b3IgaXMgbW9zdCBiYXNpYyByZXNwb25zaWJpbGl0eSBpcyB0byByZW5kZXIgVUkgd2hlbiBhIGxvY2F0aW9uIG1hdGNoZXMgdGhlIHJvdXRl4oCZcyBwYXRoLjwvbGk+XG4gICAgICAgIDxsaT48c3Ryb25nPjxjb2RlPkxpbms8L2NvZGU+PC9zdHJvbmc+IHByb3ZpZGVzIGRlY2xhcmF0aXZlLCBhY2Nlc3NpYmxlIG5hdmlnYXRpb24gYXJvdW5kIHlvdXIgYXBwbGljYXRpb24uPC9saT5cbiAgICAgICAgPGxpPjxzdHJvbmc+PGNvZGU+SGFzaFJvdXRlcjwvY29kZT48L3N0cm9uZz4gdXNlcyB0aGUgaGFzaCBwb3J0aW9uIG9mIHRoZSBVUkwgKGkuZS4gd2luZG93LmxvY2F0aW9uLmhhc2gpIHRvIGtlZXAgeW91ciBVSSBpbiBzeW5jIHdpdGggdGhlIFVSTC48L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntgLy8gbWFpbi5qc1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgUmV4dCBmcm9tICdleHQtcmVhY3QnO1xuaW1wb3J0IFZpZXdwb3J0IGZyb20gJy4vY29tcG9uZW50cy92aWV3cG9ydCc7XG5cblJleHQuYXBwbGljYXRpb24oe1xuICB2aWV3czogW1xuICAgIHJlcXVpcmUoJy4vY29tcG9uZW50cy9zZWFyY2gnKSxcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvZGV0YWlscycpLFxuICAgIHJlcXVpcmUoJy4vY29tcG9uZW50cy9ub3Rmb3VuZCcpLFxuICBdLFxuICBsYXVuY2g6ICgpID0+IDxWaWV3cG9ydCAvPlxufSk7XG5cblJleHQubGF1bmNoKDxWaWV3cG9ydCAvPik7XG5gfVxuICAgICAgPC9wcmU+XG4gICAgICA8cHJlIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG57YC8vIC4vY29tcG9uZW50cy92aWV3cG9ydC5qc1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmssIEhhc2hSb3V0ZXIgfSBmcm9tICdleHQtcmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWV3cG9ydCgpIHtcbiAgcmV0dXJuIDxzZWN0aW9uPlxuICAgIDxMaW5rIHRvPVwiL1wiPkRhc2hib2FyZDwvTGluaz5cbiAgICA8TGluayB0bz1cIi9zZWFyY2hcIj5TZWFyY2g8L0xpbms+XG4gICAgPExpbmsgdG89XCIvZGV0YWlscy9odXluZ3V5ZW5cIj5EZXRhaWxzPC9MaW5rPlxuICAgIDxIYXNoUm91dGVyIC8+XG4gIDwvc2VjdGlvbj5cbn1cbmB9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntgLy8gLi9jb21wb25lbnRzL3NlYXJjaC5qc1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBDb21wb25lbnQgfSBmcm9tICdleHQtcmVhY3QnO1xuXG5AUm91dGUoJy9zZWFyY2gnKVxuQENvbXBvbmVudCh7XG4gIHZpZXc6ICgpID0+IDxzZWN0aW9uIC8+XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoIHsgfVxuYH1cbiAgICAgIDwvcHJlPlxuICAgICAgPHByZSBjbGFzc05hbWU9XCJtYi1tZFwiPlxue2AvLyAuL2NvbXBvbmVudHMvZGV0YWlscy5qc1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBDb21wb25lbnQgfSBmcm9tICdleHQtcmVhY3QnO1xuXG5AUm91dGUoJy9kZXRhaWxzLzpuYW1lJylcbkBDb21wb25lbnQoe1xuICB2aWV3OiAoeyBwYXJhbXMgfSkgPT4gPGgxPntwYXJhbXMubmFtZX08L2gxPlxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERldGFpbHMgeyB9XG5gfVxuICAgICAgPC9wcmU+XG4gICAgICA8cHJlIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG57YC8vIC4vY29tcG9uZW50cy9ub3Rmb3VuZC5qc1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ2V4dC1yZWFjdCc7XG5cbkBSb3V0ZSgnKicpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RGb3VuZCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxoMT4ne3RoaXMucHJvcHMucGFyYW1zLnJvdXRlfScgZG9lc24ndCBleGlzdDwvaDE+XG4gIH1cbn1gfVxuICAgICAgPC9wcmU+XG4gICAgPC9Db250YWluZXI+XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBDb21wb25lbnQgfSBmcm9tICd+L3JleHQnO1xuXG5jbGFzcyBDYXJkVmlldyBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLnN0b3Jlcy5DYXJkU3RvcmUubG9hZCgpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPHNlY3Rpb24gLz5cbiAgfVxufVxuXG5AUm91dGUoJy9leGFtcGxlL2NhcmRzJylcbkBDb21wb25lbnQoe1xuICBzdG9yZXM6IFsgJ0NhcmRTdG9yZScgXSxcbiAgdmlldzogQ2FyZFZpZXdcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIHsgfSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29tcG9uZW50IH0gZnJvbSAnfi9yZXh0JztcblxuQFJvdXRlKCcvZXhhbXBsZS9kYXNoYm9hcmQnKVxuQENvbXBvbmVudCh7XG4gIHZpZXc6ICh7ICR2aWV3IH0pID0+IDxoMT57JHZpZXcudGl0bGV9PC9oMT5cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRpdGxlID0gJ0Rhc2hib2FyZCc7XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIENvbXBvbmVudCB9IGZyb20gJ34vcmV4dCc7XG5cbkBSb3V0ZSgnL2V4YW1wbGUvZGV0YWlscy86bmFtZScpXG5AQ29tcG9uZW50KHtcbiAgdmlldzogKHsgcGFyYW1zIH0pID0+IDxoMT57cGFyYW1zLm5hbWV9PC9oMT5cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXRhaWxzIHsgfSIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUgfSBmcm9tICd+L3JleHQnO1xuXG5AUm91dGUoJyonKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90Rm91bmQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8aDE+J3t0aGlzLnByb3BzLnBhcmFtcy5yb3V0ZX0nIGRvZXNuJ3QgZXhpc3Q8L2gxPlxuICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBDb21wb25lbnQgfSBmcm9tICd+L3JleHQnO1xuXG5AUm91dGUoJy9leGFtcGxlL3NlYXJjaCcpXG5AQ29tcG9uZW50KHtcbiAgdmlldzogKCkgPT4gPHNlY3Rpb24gLz5cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmQgeyB9IiwiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICd+L3JleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBTdG9yZSh7XG4gIHN0b3JlSWQ6ICdDYXJkU3RvcmUnLFxuICBwcm94eToge1xuICAgIHVybDogJy9kYXRhL2NhcmQuanNvbidcbiAgfVxufSkiLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBDb250YWluZXIgfSBmcm9tICd+L3JleHQnO1xuXG5AUm91dGUoJy8nKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2V0dGluZ1N0YXJ0ZWQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Q29udGFpbmVyIGNsYXNzTmFtZT1cIm1haW4gY29udGFpbmVyIHNjcm9sbGFibGVcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi1tZFwiPkdldHRpbmcgU3RhcnRlZDwvaDE+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlxuICAgICAgICBFeHRlbnNpb24gUmVhY3QgaXMgYSBsaWJyYXJ5IHRoYXQgYnVpbGQgb24gdG9wIG9mIFJlYWN0LCBoZWxwaW5nIHlvdSBidWlsZCBkYXRhLWludGVuc2l2ZSwgY3Jvc3MtcGxhdGZvcm0gd2ViIGFwcHMgZm9yIGRlc2t0b3BzLCB0YWJsZXRzLCBhbmQgc21hcnRwaG9uZXMuXG4gICAgICA8L3A+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwibWItbWRcIj5RdWljayBTdGFydDwvaDI+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwibWItbWRcIj4xLiBTZXR1cCBhIGRldmVsb3BtZW50IGVudmlyb21lbnQ8L2gzPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5Vc2UgPGNvZGU+bnBtPC9jb2RlPiBvciA8Y29kZT55YXJuPC9jb2RlPiB0byBpbnN0YWxsIGZvbGxvd2luZyBkZXBlbmRlbmNpZXM6PC9wPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG4gICAgICAgIDxsaT48Y29kZT5iYWJlbC1wb2x5ZmlsbDwvY29kZT48L2xpPlxuICAgICAgICA8bGk+PGNvZGU+YmFiZWwtcHJlc2V0LWVudjwvY29kZT48L2xpPlxuICAgICAgICA8bGk+PGNvZGU+YmFiZWwtcHJlc2V0LXJlYWN0PC9jb2RlPjwvbGk+XG4gICAgICAgIDxsaT48Y29kZT5kMzwvY29kZT48L2xpPlxuICAgICAgICA8bGk+PGNvZGU+cmVhY3Q8L2NvZGU+PC9saT5cbiAgICAgICAgPGxpPjxjb2RlPnJlYWN0LWRvbTwvY29kZT48L2xpPlxuICAgICAgICA8bGk+PGNvZGU+cnhqczwvY29kZT48L2xpPlxuICAgICAgICA8bGk+PGNvZGU+ZXh0LXJlYWN0PC9jb2RlPjwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLW1kXCI+Mi4gQ3JlYXRlIGEgbmV3IHByb2plY3Q8L2gzPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5UaGUgZm9sbG93aW5nIGlzIHRoZSByZWNvbW1lbmRlZCBkaXJlY3Rvcnkgc3RydWN0dXJlIGZvciBhbiBFeHRlbnNpb24gUmVhY3QgYXBwbGljYXRpb246PC9wPlxuICAgICAgPHByZSBjbGFzc05hbWU9XCJtYi1tZFwiPlxuICAgICAgICArLS0gbm9kZV9tb2R1bGVzOiBOUE0gY29tcG9uZW50czxiciAvPlxuICAgICAgICArLS0gZGlzdDxiciAvPlxuICAgICAgICB8ICAgKy0tIGFwcC5taW4uY3NzPGJyIC8+XG4gICAgICAgIHwgICArLS0gYXBwLm1pbi5qczxiciAvPlxuICAgICAgICB8ICAgKy0tIGZyYW1ld29yay5taW4uanM8YnIgLz5cbiAgICAgICAgKy0tIHNyYzxiciAvPlxuICAgICAgICB8ICAgKy0tIGNzczxiciAvPlxuICAgICAgICB8ICAgfCAgICstLSBfdmFyaWFibGVzLnNjc3M6IGFwcGxpY2F0aW9uIHN0eWxlcyBjb25zdGFudCB2YWx1ZXM8YnIgLz5cbiAgICAgICAgfCAgIHwgICArLS0gYXBwLnNjc3M6IGFwcGxpY2F0aW9uIHN0eWxlczxiciAvPlxuICAgICAgICB8ICAgKy0tIGpzPGJyIC8+XG4gICAgICAgIHwgICB8ICAgKy0tIGNvbW1vbjogY29kZSBvZiBzaGFyZWQgZnVuY3Rpb25zIG9yIHNoYXJlZCBjb21wb25lbnRzPGJyIC8+XG4gICAgICAgIHwgICB8ICAgKy0tIGNvbXBvbmVudHM6IGNvZGUgKHNjcmlwdHMgYW5kIHZpZXdzKSBvZiBldmVyeSBmZWF0dXJlIHNob3VsZCBiZSBhIHN1Yi1kaXJlY3Rvcnk8YnIgLz5cbiAgICAgICAgfCAgIHwgICArLS0gc2VydmljZXM6IGNvZGUgb2Ygc2VydmljZXM8YnIgLz5cbiAgICAgICAgfCAgIHwgICArLS0gc3RvcmVzOiBjb2RlIG9mIHN0b3JlczxiciAvPlxuICAgICAgICB8ICAgfCAgICstLSBhcHAuanM6IG1haW4gc2NyaXB0PGJyIC8+XG4gICAgICAgICstLSBndWxwZmlsZS5iYWJlbC5qczogYnVpbGQgc2NyaXB0cyAob3Igd2VicGFjay5jb25maWcuanMgaWYgeW91IHByZWZlcik8YnIgLz5cbiAgICAgICAgKy0tIGluZGV4Lmh0bWw8YnIgLz5cbiAgICAgICAgKy0tIHBhY2thZ2UuanNvbjogTlBNIHBhY2thZ2UgZGVmaW5pdGlvbjxiciAvPlxuICAgICAgICArLS0gc2VydmVyLmpzOiBjb2RlIG9mIGxvY2FsIHdlYiBzZXJ2ZXIgKEV4cHJlc3NKUyk8YnIgLz5cbiAgICAgIDwvcHJlPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5MZXTigJlzIHN0YXJ0IGV2YWx1YXRpbmcgdGhlIGFwcGxpY2F0aW9uIGJ5IGxvb2tpbmcgYXQgPGNvZGU+aW5kZXguaHRtbDwvY29kZT48L3A+XG4gICAgICA8cHJlIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG57YDwhLS0gaW5kZXguaHRtbCAtLT5cbjwhRE9DVFlQRSBodG1sPlxuPGh0bWw+XG48aGVhZD5cbjxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8+XG48bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG48dGl0bGU+RXh0ZW5zaW9uIFJlYWN0IEFwcGxpY2F0aW9uPC90aXRsZT5cbjxsaW5rIGhyZWY9XCIvbm9kZS1tb2R1bGVzL2V4dC1yZWFjdC9jc3MvcmV4dC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG48L2hlYWQ+XG48Ym9keT5cbjxzY3JpcHQgc3JjPVwiYXBwLmpzXCI+PC9zY3JpcHQ+XG48L2JvZHk+XG48L2h0bWw+YH1cbiAgICAgIDwvcHJlPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5UbyBsYXVuY2ggeW91ciBhcHAsIGFkZCB0aGUgZm9sbG93aW5nIHRvIHlvdXIgPGNvZGU+YXBwLmpzPC9jb2RlPiBmaWxlPC9wPlxuICAgICAgPHByZT5cbntgLy8gYXBwLmpzXG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmV4dCBmcm9tICdleHQtcmVhY3QnO1xuaW1wb3J0IFZpZXdwb3J0IGZyb20gJy4vY29tcG9uZW50cy92aWV3cG9ydC92aWV3cG9ydCc7XG5cblJleHQuYXBwbGljYXRpb24oe1xuICBsYXVuY2g6ICgpID0+IDxWaWV3cG9ydCAvPlxufSk7YH1cbiAgICAgIDwvcHJlPlxuICAgIDwvQ29udGFpbmVyPlxuICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgSGFzaFJvdXRlciwgTGluayB9IGZyb20gJ34vcmV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZXdwb3J0KCkge1xuICByZXR1cm4gPENvbnRhaW5lcj5cbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPjxoMT5FeHRlbnNpb24gUmVhY3Q8L2gxPjwvaGVhZGVyPlxuICAgIDxDb250YWluZXIgbGF5b3V0PVwiY29sdW1uXCI+XG4gICAgICA8YXNpZGUgc3R5bGU9e3t3aWR0aDozMDB9fT5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhciBuYXZcIj5cbiAgICAgICAgICA8bGk+PExpbmsgdG89XCIvXCIgdGV4dD1cIkdFVFRJTkcgU1RBUlRFRFwiIC8+PC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtdGV4dFwiPkNPUkUgQ09OQ0VQVFM8L3NwYW4+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT48TGluayB0bz1cIi9jb3JlLWNvbmNlcHRzL2NvbXBvbmVudFwiIHRleHQ9XCJDb21wb25lbnRcIiAvPjwvbGk+XG4gICAgICAgICAgICAgIDxsaT48TGluayB0bz1cIi9jb3JlLWNvbmNlcHRzL3NjcmVlbi1uYXZpZ2F0aW9uXCIgdGV4dD1cIlNjcmVlbiBOYXZpZ2F0aW9uXCIgLz48L2xpPlxuICAgICAgICAgICAgICA8bGk+PExpbmsgdG89XCIvY29yZS1jb25jZXB0cy9kYXRhLXBhY2thZ2VcIiB0ZXh0PVwiRGF0YSBQYWNrYWdlXCIgLz48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT48TGluayB0bz1cIi9hcmNoaXRlY3R1cmVcIiB0ZXh0PVwiQVJDSElURUNUVVJFXCIgLz48L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi10ZXh0XCI+VUkgQ09NUE9ORU5UUzwvc3Bhbj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL3VpLWNvbXBvbmVudHMvZ3JpZHNcIiB0ZXh0PVwiR3JpZHNcIiAvPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2FzaWRlPlxuICAgICAgPENvbnRhaW5lcj48SGFzaFJvdXRlciAvPjwvQ29udGFpbmVyPlxuICAgIDwvQ29udGFpbmVyPlxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+PHA+JmNvcHk7IDIwMTcgaHV5dHJvbmduZ3V5ZW48L3A+PC9mb290ZXI+XG4gIDwvQ29udGFpbmVyPlxufSIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEV4dCBmcm9tICd+L2NvcmUvZXh0JztcbmltcG9ydCBMaXN0IGZyb20gJ34vY29yZS9saXN0JztcbmltcG9ydCBEaWN0aW9uYXJ5IGZyb20gJ34vY29yZS9kaWN0aW9uYXJ5JztcbmltcG9ydCBPYnNlcnZhYmxlIGZyb20gJ34vcmVhY3RpdmUvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgU3RvcmVNYW5hZ2VyIGZyb20gJ34vZGF0YS9zdG9yZS1tYW5hZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnID0+IENvbnRyb2xsZXIgPT4ge1xuICBjb25zdCBXcmFwcGVkQ29tcG9uZW50ID0gY29uZmlnLnZpZXc7XG5cbiAgcmV0dXJuIGNsYXNzIEhvY0NvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICBjb25zdCBzdG9yZXMgPSBMaXN0KGNvbmZpZy5zdG9yZXMpLnJlZHVjZSgoc3RvcmVzLCBzdG9yZUlkKSA9PiB7XG4gICAgICAgICAgICAgIHN0b3Jlc1tzdG9yZUlkXSA9IFN0b3JlTWFuYWdlci5nZXQoc3RvcmVJZCk7XG4gICAgICAgICAgICAgIHJldHVybiBzdG9yZXM7XG4gICAgICAgICAgICB9LCB7fSksXG4gICAgICAgICAgICBzZXJ2aWNlcyA9IExpc3QoY29uZmlnLnNlcnZpY2VzKS5yZWR1Y2UoKHNlcnZpY2VzLCBzZXJ2aWNlKSA9PiB7XG4gICAgICAgICAgICAgIHNlcnZpY2VzW3NlcnZpY2Uuc2VydmljZUlkXSA9IHNlcnZpY2U7XG4gICAgICAgICAgICAgIHJldHVybiBzZXJ2aWNlcztcbiAgICAgICAgICAgIH0sIHt9KSxcbiAgICAgICAgICAgIGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcihwcm9wcyk7XG5cbiAgICAgIGNvbnRyb2xsZXIuc3RvcmVzID0gc3RvcmVzO1xuICAgICAgY29udHJvbGxlci5zZXJ2aWNlcyA9IHNlcnZpY2VzO1xuXG4gICAgICBFeHQuaW5pdGlhbFN0YXRlKHRoaXMsIHtcbiAgICAgICAgc3RvcmVzLFxuICAgICAgICBzZXJ2aWNlcyxcbiAgICAgICAgW2NvbmZpZy5jb21wb25lbnRBcyB8fCAnJHZpZXcnXTogY29udHJvbGxlclxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50IHsuLi50aGlzLnN0YXRlfSB7Li4udGhpcy5wcm9wc30gLz47XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBFeHQgZnJvbSAnfi9jb3JlL2V4dCc7XG5cbmNvbnN0IExBWU9VVF9DTEFTUyA9IHtcbiAgJ2NvbHVtbic6ICdmbGV4LXJvdycsXG4gICdyb3cnOiAnZmxleC1jb2x1bW4nLFxuICAnZml0JzogJycsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIoeyBjbGFzc05hbWUgPSAnJywgbGF5b3V0ID0gJ3JvdycsIGNoaWxkcmVuLCAuLi5vdGhlcnMgfSkge1xuICByZXR1cm4gPHNlY3Rpb24gY2xhc3NOYW1lPXtFeHQuY2xhc3NOYW1lKCdkLWZsZXgnLCBMQVlPVVRfQ0xBU1NbbGF5b3V0XSwgY2xhc3NOYW1lKX0gey4uLm90aGVyc30+e2NoaWxkcmVufTwvc2VjdGlvbj5cbn0iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCBFeHQgZnJvbSAnfi9jb3JlL2V4dCc7XG5pbXBvcnQgTGlzdCBmcm9tICd+L2NvcmUvbGlzdCc7XG4vLyBpbXBvcnQgT2JzZXJ2YWJsZSBmcm9tICd+L3JlYWN0aXZlL29ic2VydmFibGUnO1xuXG5jb25zdCBST1VURVMgPSB7fSxcbiAgICAgIGdldFJvdXRlID0gKCkgPT4gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpIHx8ICcvJyxcbiAgICAgIGdldFJvdXRlUGF0aCA9IHJvdXRlID0+IHJvdXRlLnNwbGl0KCcvJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBSb3V0ZShyb3V0ZSkge1xuICByZXR1cm4gY29tcCA9PiB7XG4gICAgUk9VVEVTW3JvdXRlXSA9IHtcbiAgICAgIHJvdXRlLFxuICAgICAgY29tcCxcbiAgICAgIHBhdGg6IGdldFJvdXRlUGF0aChyb3V0ZSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExpbmsoeyB0bywgY2xhc3NOYW1lID0gJycsIGFjdGl2ZUNsYXNzTmFtZSA9ICdhY3RpdmUnLCB0ZXh0LCBjaGlsZHJlbiwgLi4ub3RoZXJzIH0pIHtcbiAgcmV0dXJuIDxhIGhyZWY9e2AjJHt0b31gfSBjbGFzc05hbWU9e0V4dC5jbGFzc05hbWUoJ25hdi1saW5rJywgY2xhc3NOYW1lLCB7IFthY3RpdmVDbGFzc05hbWVdOiB0byA9PT0gZ2V0Um91dGUoKSB9KX0gey4uLm90aGVyc30+XG4gICAge3RleHQgfHwgY2hpbGRyZW59XG4gIDwvYT5cbn1cblxuZXhwb3J0IGNsYXNzIEhhc2hSb3V0ZXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgRXh0LmluaXRpYWxTdGF0ZSh0aGlzLCBtYXRjaFBhdGgoKSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAoIXdpbmRvdy5sb2NhdGlvbi5oYXNoKSAmJiAod2luZG93LmxvY2F0aW9uLmhhc2ggPSAnLycpO1xuICAgIE9ic2VydmFibGUuZnJvbUV2ZW50KHdpbmRvdywgJ2hhc2hjaGFuZ2UnKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zZXRTdGF0ZShtYXRjaFBhdGgoKSkpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcm91dGUsIGNvbXAsIHBhcmFtcyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmICghY29tcCkge1xuICAgICAgY29uc29sZS5lcnJvcignQ29tcG9uZW50IG5vdCBmb3VuZCEnKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGNvbXAsIHsgcm91dGUsIHBhcmFtcyB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXRjaFBhdGgoKSB7XG4gIGNvbnN0IGN1cnJlbnRSb3V0ZSA9IGdldFJvdXRlKCksXG4gICAgICAgIHBhcmFtcyA9IHsgcm91dGU6IGN1cnJlbnRSb3V0ZSB9O1xuXG4gIC8vIGJhc2ljIHJvdXRlICh3aXRob3V0IHBhcmFtcylcbiAgaWYgKFJPVVRFU1tjdXJyZW50Um91dGVdKSB7XG4gICAgcmV0dXJuIHsgcm91dGU6IGN1cnJlbnRSb3V0ZSwgY29tcDogUk9VVEVTW2N1cnJlbnRSb3V0ZV0uY29tcCwgcGFyYW1zIH07XG4gIH1cblxuICAvLyBhZHZhbmNlZCByb3V0ZSAod2l0aCBwYXJhbXMpXG4gIGNvbnN0IGN1cnJlbnRQYXRoID0gZ2V0Um91dGVQYXRoKGN1cnJlbnRSb3V0ZSk7XG4gIGZvcihsZXQgcm91dGUgaW4gUk9VVEVTKSB7XG4gICAgY29uc3QgbWFwUm91dGUgPSBST1VURVNbcm91dGVdLFxuICAgICAgICAgIHJvdXRlUGF0aCA9IG1hcFJvdXRlLnBhdGg7XG5cbiAgICBsZXQgbWF0Y2hlZCA9IHRydWU7XG4gICAgTGlzdChtYXBSb3V0ZS5wYXRoKS5lYWNoKChyb3V0ZU5hbWUsIGluZGV4KSA9PiB7XG4gICAgICBpZiAocm91dGVOYW1lICE9PSBjdXJyZW50UGF0aFtpbmRleF0pIHtcbiAgICAgICAgaWYgKHJvdXRlTmFtZS5zdGFydHNXaXRoKCc6JykpIHsgLy8gZGV0ZWN0IHBhcmFtIHZhbHVlXG4gICAgICAgICAgcGFyYW1zW3JvdXRlTmFtZS5zdWJzdHJpbmcoMSldID0gY3VycmVudFBhdGhbaW5kZXhdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1hdGNoZWQgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChtYXRjaGVkKSB7XG4gICAgICByZXR1cm4geyByb3V0ZTogY3VycmVudFJvdXRlLCBjb21wOiBtYXBSb3V0ZS5jb21wLCBwYXJhbXMgfTtcbiAgICB9XG4gIH1cblxuICAvLyB3aXRoIG5vdCBmb3VuZCBzY3JlZW5cbiAgaWYgKFJPVVRFU1snKiddKSB7XG4gICAgcmV0dXJuIHsgcm91dGU6IGN1cnJlbnRSb3V0ZSwgY29tcDogUk9VVEVTWycqJ10uY29tcCwgcGFyYW1zIH07XG4gIH1cblxuICAvLyB3aXRob3V0IG5vdCBmb3VuZCBzY3JlZW5cbiAgcmV0dXJuIHsgcm91dGU6IGN1cnJlbnRSb3V0ZSwgY29tcDogbnVsbCwgcGFyYW1zIH07XG59IiwiaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0JztcblxuZXhwb3J0IGNsYXNzIERpY3Rpb25hcnkge1xuICBjb25zdHJ1Y3RvcihrZXlWYWx1ZXMpIHtcbiAgICB0aGlzLmRhdGEgPSB7fTtcbiAgICBpZiAoa2V5VmFsdWVzKSB7XG4gICAgICB0aGlzLmRhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBrZXlWYWx1ZXMpO1xuICAgIH1cblxuICAgIHRoaXMua2V5cyA9ICgpID0+IExpc3QoT2JqZWN0LmtleXModGhpcy5kYXRhKSk7XG4gICAgdGhpcy52YWx1ZXMgPSAoKSA9PiBMaXN0KE9iamVjdC52YWx1ZXModGhpcy5kYXRhKSk7XG4gIH1cblxuICBlYWNoKGl0ZXJhdGVlKSB7XG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuZGF0YSkge1xuICAgICAgaXRlcmF0ZWUodGhpcy5kYXRhW2tleV0sIGtleSwgdGhpcy5kYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKGtleVZhbHVlcykgPT4gbmV3IERpY3Rpb25hcnkoa2V5VmFsdWVzKTsiLCJpbXBvcnQgeyBMaXN0IH0gZnJvbSAnLi9saXN0JztcblxuY2xhc3MgRE9NIGV4dGVuZHMgTGlzdCB7XG4gIHNob3coKSB7XG4gICAgdGhpcy5kYXRhLmVhY2goc2VsZWN0b3IgPT4gc2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jaycpO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLmRhdGEuZWFjaChzZWxlY3RvciA9PiBzZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKTtcbiAgfVxuXG4gIC8vIHBhcmVudCgpIHtcbiAgLy8gICB0aGlzLmNvbXAgPSB0aGlzLmNvbXAucGFyZW50RWxlbWVudDtcbiAgLy8gICByZXR1cm4gdGhpcztcbiAgLy8gfVxuXG4gIC8vIHdpZHRoKCkge1xuICAvLyAgIHJldHVybiB0aGlzLmNvbXAuY2xpZW50V2lkdGg7XG4gIC8vIH1cblxuICAvLyBoZWlnaHQoKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMuY29tcC5jbGllbnRIZWlnaHQ7XG4gIC8vIH1cblxuICAvLyBmaW5kKHNlbGVjdG9yKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMuY29tcC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgLy8gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzZWxlY3RvciA9PiBET00uZ2V0RWwoc2VsZWN0b3IpOyIsImV4cG9ydCBjbGFzcyBFeHQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLkRPTSA9IHJlcXVpcmUoJy4vZG9tJykuZGVmYXVsdDtcbiAgICB0aGlzLlN0cmluZyA9IHJlcXVpcmUoJy4vc3RyaW5nJykuZGVmYXVsdDtcbiAgICB0aGlzLkxpc3QgPSByZXF1aXJlKCcuL2xpc3QnKS5kZWZhdWx0O1xuICAgIHRoaXMuTWFwID0gcmVxdWlyZSgnLi9kaWN0aW9uYXJ5JykuZGVmYXVsdDtcblxuICAgIHRoaXMuU0NST0xMX1dJRFRIID0gdGhpcy5nZXRTY3JvbGxXaWR0aCgpO1xuICAgIHRoaXMuQk9SREVSX1dJRFRIID0gMjtcbiAgICB0aGlzLkNIRUNLX0NPTFVNTl9XSURUSCA9IDMzO1xuICAgIHRoaXMuVU5LTk9XTl9FUlJPUl9NU0cgPSAnQW4gdW5rbm93biBlcnJvciBoYXMgb2NjdXJyZWQuJztcblxuICAgIHRoaXMuaXNQcmltaXRpdmUgPSB2YWx1ZSA9PiB7IGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsdWU7IHJldHVybiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlID09PSAnbnVtYmVyJyB8fCB0eXBlID09PSAnYm9vbGVhbic7IH1cbiAgICB0aGlzLmlzU3RyaW5nID0gdmFsdWUgPT4gKHR5cGVvZiB2YWx1ZSkgPT09ICdzdHJpbmcnO1xuICAgIHRoaXMuaXNGdW5jdGlvbiA9IHZhbHVlID0+ICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xuICAgIHRoaXMuaXNPYmplY3QgPSB2YWx1ZSA9PiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG4gICAgdGhpcy5pc0FycmF5ID0gdmFsdWUgPT4gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG5cbiAgICB0aGlzLmNsb25lID0gb2JqID0+IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSk7IC8vIGRlZXAgY2xvbmVcbiAgfVxuXG4gIGV4dGVuZCgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbi5hcHBseShudWxsLCBhcmd1bWVudHMpOyAvLyBpbW11dGFibGUgb2JqZWN0XG4gIH1cblxuICBpbml0aWFsU3RhdGUoY29tcCwgc3RhdGUpIHtcbiAgICBpZiAoIWNvbXAgfHwgIXN0YXRlKSB7IHJldHVybjsgfVxuICAgIGNvbXAuc3RhdGUgPSBzdGF0ZTtcbiAgICBmb3IgKGxldCBmaWVsZCBvZiBPYmplY3Qua2V5cyhzdGF0ZSkpIHtcbiAgICAgIGNvbXBbYHNldCR7dGhpcy5TdHJpbmcuY2FwaXRhbGl6ZShmaWVsZCl9YF0gPSB2YWx1ZSA9PiBjb21wLnNldFN0YXRlKHsgW2ZpZWxkXTogdmFsdWUgfSk7XG4gICAgfVxuICB9XG5cbiAgY2xhc3NOYW1lKC4uLmV4cHJlc3Npb25zKSB7XG4gICAgY29uc3QgY2xzID0gW107XG5cbiAgICB0aGlzLkxpc3QoZXhwcmVzc2lvbnMpLmVhY2goZXhwID0+IHtcbiAgICAgIGlmICghZXhwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBleHAgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNscy5wdXNoKGV4cCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNPYmplY3QoZXhwKSkge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gZXhwKSB7XG4gICAgICAgICAgaWYgKGV4cFtrZXldID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjbHMucHVzaChrZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjbHMuam9pbignICcpO1xuICB9XG5cbiAgLy8jcmVnaW9uIERPTVxuICBjcmVhdGVFbGVtZW50KGh0bWwpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gaHRtbDtcbiAgICByZXR1cm4gZGl2LmNoaWxkcmVuWzBdO1xuICB9XG5cbiAgZ2V0U2Nyb2xsV2lkdGgoKSB7XG4gICAgY29uc3Qgb3V0ZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJzxkaXYgc3R5bGU9XCJ2aXNpYmlsaXR5OiBoaWRkZW47IHdpZHRoOiAxMDBweDsgb3ZlcmZsb3c6IHNjcm9sbDtcIj48L2Rpdj4nKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG91dGVyKTtcbiAgICBjb25zdCB3aWR0aE5vU2Nyb2xsID0gb3V0ZXIub2Zmc2V0V2lkdGg7XG5cbiAgICAvLyBhZGQgaW5uZXJkaXZcbiAgICBjb25zdCBpbm5lciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnPGRpdiBzdHlsZT1cIndpZHRoOiAxMDAlO1wiPjwvZGl2PicpO1xuICAgIG91dGVyLmFwcGVuZENoaWxkKGlubmVyKTtcbiAgICBjb25zdCB3aWR0aFdpdGhTY3JvbGwgPSBpbm5lci5vZmZzZXRXaWR0aDtcblxuICAgIC8vIHJlbW92ZSBkaXZzXG4gICAgb3V0ZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvdXRlcik7XG5cbiAgICByZXR1cm4gd2lkdGhOb1Njcm9sbCAtIHdpZHRoV2l0aFNjcm9sbDtcbiAgfVxuICAvLyNlbmRyZWdpb25cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEV4dCgpO1xuXG5leHBvcnQgZnVuY3Rpb24gYmluZCh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpIHtcbiAgY29uc3QgZm4gPSBkZXNjcmlwdG9yLnZhbHVlO1xuXG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEBiaW5kIGRlY29yYXRvciBpcyBvbmx5IGFwcGxpZWQgdG8gZnVuY3Rpb25zIG5vdDogJHt0eXBlb2YgZm59YCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQoKSB7XG4gICAgICByZXR1cm4gZm4uYmluZCh0aGlzKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0ID0gNTAwKSB7XG4gIGxldCB0aW1lb3V0O1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsXG4gICAgICAgICAgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgICBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgICB9XG5cbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICB9XG59IiwiZXhwb3J0IGNsYXNzIExpc3Qge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZGF0YSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMuY29sbGVjdCA9ICgpID0+IHRoaXMuZGF0YTtcbiAgICB0aGlzLmNvdW50ID0gKCkgPT4gdGhpcy5kYXRhLmxlbmd0aDtcbiAgICB0aGlzLmdldEF0ID0gaW5kZXggPT4gdGhpcy5kYXRhW2luZGV4XTtcbiAgICB0aGlzLmFkZCA9IGl0ZW0gPT4gdGhpcy5kYXRhLnB1c2goaXRlbSk7XG4gICAgdGhpcy5pbnNlcnQgPSAoaXRlbSwgaW5kZXggPSAwKSA9PiB0aGlzLmRhdGEuc3BsaWNlKGluZGV4LCAwLCBpdGVtKTtcbiAgICB0aGlzLnJlbW92ZUF0ID0gKGluZGV4LCBjb3VudCA9IDEpID0+IHRoaXMuZGF0YS5zcGxpY2UoaW5kZXgsIGNvdW50KTtcbiAgICB0aGlzLmpvaW4gPSBzZXBhcmF0b3IgPT4gdGhpcy5kYXRhLmpvaW4oc2VwYXJhdG9yKTtcbiAgfVxuXG4gIGVhY2goaXRlcmF0ZWUpIHtcbiAgICBmb3IgKGxldCBpbmRleCBpbiB0aGlzLmRhdGEpIHtcbiAgICAgIGl0ZXJhdGVlKHRoaXMuZGF0YVtpbmRleF0sIGluZGV4LCB0aGlzLmRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGZpbHRlcihwcmVkaWNhdGUpIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICB0aGlzLmVhY2goKGl0ZW0sIGluZGV4LCBhcnJheSkgPT4ge1xuICAgICAgaWYgKHByZWRpY2F0ZShpdGVtLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBuZXcgTGlzdChyZXN1bHQpO1xuICB9XG5cbiAgbWFwKGl0ZXJhdGVlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgdGhpcy5lYWNoKChpdGVtLCBpbmRleCwgYXJyYXkpID0+IHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpdGVtLCBpbmRleCwgYXJyYXkpKTtcbiAgICByZXR1cm4gbmV3IExpc3QocmVzdWx0KTtcbiAgfVxuXG4gIHJlZHVjZShpdGVyYXRlZSwgYWNjdW11bGF0b3IpIHtcbiAgICB0aGlzLmVhY2goKGl0ZW0sIGluZGV4LCBhcnJheSkgPT4gYWNjdW11bGF0b3IgPSBpdGVyYXRlZShhY2N1bXVsYXRvciwgaXRlbSwgaW5kZXgsIGFycmF5KSk7XG4gICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICB9XG5cbiAgZmluZEluZGV4KHByZWRpY2F0ZSkge1xuICAgIGxldCBmb3VuZEF0ID0gLTE7XG4gICAgZm9yIChsZXQgaW5kZXggaW4gdGhpcy5kYXRhKSB7XG4gICAgICBpZiAocHJlZGljYXRlKGl0ZW0sIGluZGV4LCB0aGlzLmRhdGEpKSB7XG4gICAgICAgIGZvdW5kQXQgPSBpbmRleDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmb3VuZEF0O1xuICB9XG5cbiAgZmluZChwcmVkaWNhdGUpIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLmZpbmRJbmRleChwcmVkaWNhdGUpO1xuICAgIHJldHVybiBpbmRleCA+IC0xID8gdGhpcy5kYXRhW2luZGV4XSA6IG51bGw7XG4gIH1cblxuICBjb250YWlucyhwcmVkaWNhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5maW5kKHByZWRpY2F0ZSkgIT09IG51bGw7XG4gIH1cblxuICByZW1vdmVJZihwcmVkaWNhdGUpIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICB0aGlzLmVhY2goKGl0ZW0sIGluZGV4LCBhcnJheSkgPT4ge1xuICAgICAgaWYgKCFwcmVkaWNhdGUoaXRlbSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgICByZXN1bHQucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmRhdGEgPSByZXN1bHQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHZhbHVlKSA9PiBuZXcgTGlzdCh2YWx1ZSk7IiwiY2xhc3MgU3RyaW5nIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jYXBpdGFsaXplID0gdmFsdWUgPT4gdmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSgxKTtcbiAgfVxuXG4gIGh0bWxFbmNvZGUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLycvZywgJyYjMzk7JylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xuICB9XG5cbiAgaHRtbERlY29kZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC8mYW1wOy9nLCAnJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvJmx0Oy9nLCAnPCcpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLyZndDs+L2csICc+JylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvJiMzOTsvZywgXCInXCIpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLyZxdW90Oy9nLCAnXCInKTtcbiAgfVxuXG4gIHRvUXVlcnlTdHJpbmcocGFyYW1zLCBzZXAsIGVuY29kZSkge1xuICAgIHNlcCAgICA9IHNlcCA9PT0gdW5kZWZpbmVkID8gJyYnIDogc2VwO1xuICAgIGVuY29kZSA9IGVuY29kZSA9PT0gZmFsc2UgPyBmdW5jdGlvbihzKSB7IHJldHVybiBzOyB9IDogZW5jb2RlVVJJQ29tcG9uZW50O1xuXG4gICAgbGV0IHBhaXJzID0gW107XG4gICAgZm9yIChsZXQga2V5IGluIHBhcmFtcykge1xuICAgICAgcGFpcnMucHVzaChgJHtrZXl9PSR7ZW5jb2RlKHBhcmFtc1trZXldKX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhaXJzLmpvaW4oc2VwKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU3RyaW5nKCk7IiwiaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTGlzdCB9IGZyb20gJ34vY29yZS9saXN0JztcbmltcG9ydCBNb2RlbCBmcm9tICcuL21vZGVsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJzdHJhY3RTdG9yZSBleHRlbmRzIExpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLy8jcmVnaW9uIGNvbmZpZ3NcbiAgICB0aGlzLnRvdGFsQ291bnQgPSAwO1xuICAgIHRoaXMucGFnZVNpemUgPSAwO1xuICAgIHRoaXMuY3VycmVudFBhZ2UgPSAxO1xuICAgIHRoaXMuc3ViamVjdCA9IG5ldyBTdWJqZWN0KCk7XG4gICAgLy8jZW5kcmVnaW9uXG5cbiAgICAvLyNyZWdpb24gcHJvcGVydGllc1xuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgLy8jcmVnaW9uIG1ldGhvZHNcbiAgICB0aGlzLmNyZWF0ZVJlY29yZCA9IHJlY29yZCA9PiBuZXcgTW9kZWwocmVjb3JkLCB0aGlzKTtcbiAgICB0aGlzLmdldFJlY29yZHMgPSB0aGlzLmNvbGxlY3Q7XG4gICAgdGhpcy5nZXRNb2RpZmllZFJlY29yZHMgPSAoKSA9PiB0aGlzLmZpbHRlcihyZWNvcmQgPT4gcmVjb3JkLmlzTW9kaWZpZWQoKSk7XG4gICAgdGhpcy5nZXROZXdSZWNvcmRzID0gKCkgPT4gdGhpcy5maWx0ZXIocmVjb3JkID0+IHJlY29yZC5pc05ld2x5Q3JlYXRlZCgpKTtcbiAgICB0aGlzLnN1YnNjcmliZSA9IG9ic2VydmVyID0+IHRoaXMuc3ViamVjdC5zdWJzY3JpYmUoeyBuZXh0OiB2YWx1ZSA9PiBvYnNlcnZlcih2YWx1ZSkgfSk7XG4gICAgdGhpcy5maXJlRXZlbnQgPSAoKSA9PiB0aGlzLnN1YmplY3QubmV4dCh0aGlzKTtcbiAgICAvLyNlbmRyZWdpb25cbiAgfVxuXG4gIGNsZWFyRGF0YShzaWxlbnQgPSBmYWxzZSkge1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICFzaWxlbnQgJiYgdGhpcy5maXJlRXZlbnQoKTtcbiAgfVxuXG4gIGxvYWREYXRhKGRhdGEpIHtcbiAgICB0aGlzLmNsZWFyRGF0YSh0cnVlKTtcbiAgICB0aGlzLmRhdGEgPSAobmV3IExpc3QoZGF0YSkpLm1hcCh0aGlzLmNyZWF0ZVJlY29yZC5iaW5kKHRoaXMpKS5jb2xsZWN0KCk7XG4gICAgdGhpcy5maXJlRXZlbnQoKTtcbiAgfVxuXG4gIGNvbW1pdENoYW5nZXMoKSB7XG4gICAgdGhpcy5maWx0ZXIocmVjb3JkID0+IHJlY29yZC5pc01vZGlmaWVkKCkgfHwgcmVjb3JkLmlzTmV3bHlDcmVhdGVkKCkpLmVhY2gocmVjb3JkID0+IHJlY29yZC5zYXZlKCkpO1xuICAgIHRoaXMuZmlyZUV2ZW50KCk7XG4gIH1cblxuICByZWplY3RDaGFuZ2VzKCkge1xuICAgIHRoaXMuZmlsdGVyKHJlY29yZCA9PiByZWNvcmQuaXNNb2RpZmllZCgpKS5lYWNoKHJlY29yZCA9PiByZWNvcmQucmVqZWN0KHRydWUpKTtcbiAgICB0aGlzLmRhdGEgPSB0aGlzLmZpbHRlcihyZWNvcmQgPT4gIXJlY29yZC5pc05ld2x5Q3JlYXRlZCgpKS5jb2xsZWN0KCk7XG4gICAgdGhpcy5maXJlRXZlbnQoKTtcbiAgfVxufSIsImltcG9ydCBFeHQgZnJvbSAnfi9jb3JlL2V4dCc7XG5pbXBvcnQgTGlzdCBmcm9tICd+L2NvcmUvbGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGVsIHtcbiAgY29uc3RydWN0b3IoZGF0YSwgc3RvcmUpIHtcbiAgICAvLyNyZWdpb24gY29uZmlnc1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAvLyNlbmRyZWdpb25cblxuICAgIC8vI3JlZ2lvbiBwcm9wZXJ0aWVzXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLnN0b3JlID0gc3RvcmU7XG4gICAgdGhpcy5pZFByb3BlcnR5ID0gKHN0b3JlICYmIHN0b3JlLmlkUHJvcGVydHkpID8gc3RvcmUuaWRQcm9wZXJ0eSA6ICdpZCc7XG4gICAgY29uc3QgZmllbGRDb25maWcgPSAoc3RvcmUgJiYgc3RvcmUuZmllbGRzKSA/IHN0b3JlLmZpZWxkcyA6IFtdO1xuICAgIHRoaXMuZmllbGRzID0gTGlzdChmaWVsZENvbmZpZykubWFwKGZpZWxkID0+IEV4dC5pc1N0cmluZyhmaWVsZCkgPyAoeyBuYW1lOiBmaWVsZCwgdHlwZTogJ3N0cmluZycgfSkgOiBmaWVsZCk7XG4gICAgLy8jZW5kcmVnaW9uXG5cbiAgICAvLyNyZWdpb24gbWV0aG9kc1xuICAgIHRoaXMuZ2V0RGF0YSA9ICgpID0+IHRoaXMuZGF0YTtcbiAgICB0aGlzLmdldCA9IGZpZWxkTmFtZSA9PiB0aGlzLmRhdGFbZmllbGROYW1lXTtcbiAgICAvLyNlbmRyZWdpb25cblxuICAgIHRoaXMuc2F2ZSgpO1xuICB9XG5cbiAgc2V0KGZpZWxkTmFtZSwgbmV3VmFsdWUsIHNpbGVudCkge1xuICAgIHRoaXMuZGF0YVtmaWVsZE5hbWVdID0gbmV3VmFsdWU7XG4gICAgdGhpcy5tb2RpZmllZCA9ICF0aGlzLmlzRXF1YWwoZmllbGROYW1lKTtcbiAgICAoIXNpbGVudCAmJiB0aGlzLnN0b3JlKSAmJiAodGhpcy5zdG9yZS5maXJlRXZlbnQoKSk7XG4gIH1cblxuICBzYXZlKCkge1xuICAgIHRoaXMucGhhbnRvbSA9IEV4dC5jbG9uZSh0aGlzLmRhdGEpO1xuICAgIHRoaXMubW9kaWZpZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHJlamVjdChzaWxlbnQpIHtcbiAgICB0aGlzLmRhdGEgPSBFeHQuY2xvbmUodGhpcy5waGFudG9tKTtcbiAgICB0aGlzLnNhdmUoKTtcbiAgICAoIXNpbGVudCAmJiB0aGlzLnN0b3JlKSAmJiAodGhpcy5zdG9yZS5maXJlRXZlbnQoKSk7XG4gIH1cblxuICBpc0VxdWFsKGZpZWxkKSB7XG4gICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzLnBoYW50b21bZmllbGQubmFtZV0sXG4gICAgICAgICAgbmV3VmFsdWUgPSB0aGlzLmRhdGFbZmllbGQubmFtZV07XG5cbiAgICByZXR1cm4gZmllbGQuZXF1YWxzID8gZmllbGQuZXF1YWxzKG5ld1ZhbHVlLCBvbGRWYWx1ZSkgOiBuZXdWYWx1ZSA9PT0gb2xkVmFsdWU7XG4gIH1cblxuICBpc01vZGlmaWVkKGZpZWxkTmFtZSkge1xuICAgIHJldHVybiB0aGlzLm1vZGlmaWVkICYmICF0aGlzLnBoYW50b21bdGhpcy5pZFByb3BlcnR5XTsgLy8gc2hvdWxkIG5vdCBkZXRlY3QgbmV3IHJlY29yZCBhcyBhIG1vZGlmaWVkIHJlY29yZFxuICB9XG5cbiAgaXNOZXdseUNyZWF0ZWQoKSB7XG4gICAgcmV0dXJuICF0aGlzLnBoYW50b21bdGhpcy5pZFByb3BlcnR5XTtcbiAgfVxuXG4gIHNldFNlbGVjdGVkKHNlbGVjdGVkLCBzaWxlbnQpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgKCFzaWxlbnQgJiYgdGhpcy5zdG9yZSkgJiYgKHRoaXMuc3RvcmUuZmlyZUV2ZW50KCkpO1xuICB9XG59IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IEV4dCBmcm9tICd+L2NvcmUvZXh0Jztcbi8vIGltcG9ydCBBamF4IGZyb20gJy4vYWpheCc7XG5pbXBvcnQgQWJzdHJhY3RTdG9yZSBmcm9tICcuL2Fic3RyYWN0LXN0b3JlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJveHlTdG9yZSBleHRlbmRzIEFic3RyYWN0U3RvcmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLy8jcmVnaW9uIGNvbmZpZ3NcbiAgICB0aGlzLnByb3h5ID0ge1xuICAgICAgcmVhZGVyOiB7fSxcbiAgICAgIHdyaXRlcjoge31cbiAgICB9O1xuICAgIC8vI2VuZHJlZ2lvblxuICB9XG5cbiAgbG9hZCgpIHtcbiAgICBsZXQgeyB1cmwsIG1ldGhvZCA9ICdnZXQnLCByZXNwb25zZVR5cGUgPSAnanNvbicsIHBhcmFtcyB9ID0gdGhpcy5wcm94eTtcbiAgICAobWV0aG9kID09PSAnZ2V0JyAmJiBwYXJhbXMpICYmICh1cmwgPSBgJHt1cmx9PyR7U3RyaW5nLnRvUXVlcnlTdHJpbmcocGFyYW1zKX1gKTtcbiAgICBPYnNlcnZhYmxlLmFqYXgoe1xuICAgICAgdXJsLFxuICAgICAgbWV0aG9kLFxuICAgICAgcmVzcG9uc2VUeXBlLFxuICAgICAgYm9keTogbWV0aG9kID09PSAncG9zdCcgJiYgcGFyYW1zXG4gICAgfSlcbiAgICAubWFwKHZhbHVlID0+IHZhbHVlLnJlc3BvbnNlKVxuICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgY29uc3QgeyByZWFkZXI6IHsgcm9vdFByb3BlcnR5LCB0b3RhbFByb3BlcnR5IH0gPSB7fSB9ID0gdGhpcy5wcm94eTtcbiAgICAgIHRoaXMubG9hZERhdGEocm9vdFByb3BlcnR5ID8gcmVzcG9uc2Vbcm9vdFByb3BlcnR5XSA6IHJlc3BvbnNlKTtcbiAgICAgIHRoaXMudG90YWxDb3VudCA9ICh0aGlzLnBhZ2VTaXplICYmIHRvdGFsUHJvcGVydHkpID8gcmVzcG9uc2VbdG90YWxQcm9wZXJ0eV0gOiB0aGlzLmNvdW50KCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBsb2FkUGFnZShwYWdlKSB7XG4gIC8vICAgdGhpcy5jdXJyZW50UGFnZSA9IHBhZ2U7XG4gIC8vICAgdGhpcy5wcm94eS5wYXJhbXMgPSBFeHQuZXh0ZW5kKHt9LCB0aGlzLnByb3h5LnBhcmFtcywgeyBwYWdlOiB0aGlzLmN1cnJlbnRQYWdlLCBzaXplOiB0aGlzLnBhZ2VTaXplIH0pO1xuICAvLyAgIHJldHVybiB0aGlzLmxvYWQoe30pO1xuICAvLyB9XG5cbiAgLy8gYXN5bmMgc3luYyh7IGRvbmUsIGZhaWwsIGFsd2F5cyB9KSB7XG4gIC8vICAgdGhpcy5wcm94eS5tZXRob2QgPSAncG9zdCc7XG4gIC8vICAgdGhpcy5wcm94eS5wYXJhbXMgPSB0aGlzLmdldE1vZGlmaWVkUmVjb3JkcygpLm1hcChyZWNvcmQgPT4gcmVjb3JkLmRhdGEpLmNvbGxlY3QoKTtcbiAgLy8gICB0aGlzLnByb3h5LnByb3h5LnBhcmFtcy5wdXNoKC4uLnRoaXMuZ2V0TmV3UmVjb3JkcygpLm1hcChyZWNvcmQgPT4gcmVjb3JkLmRhdGEpLmNvbGxlY3QoKSk7XG4gIC8vICAgY29uc3QgeyB0cmFuc2Zvcm0gfSA9IHByb3h5LndyaXRlcjtcbiAgLy8gICB0cmFuc2Zvcm0gJiYgKHRoaXMucHJveHkucGFyYW1zID0gdHJhbnNmb3JtKHRoaXMucHJveHkucGFyYW1zKSk7XG4gIC8vICAgT2JzZXJ2YWJsZS5hamF4KHRoaXMucHJveHkpLnN1YnNjcmliZSh7XG4gIC8vICAgICBuZXh0OiBkb25lLFxuICAvLyAgICAgZXJyb3I6IGZhaWwsXG4gIC8vICAgICBjb21wbGV0ZTogYWx3YXlzXG4gIC8vICAgfSk7XG4gIC8vIH1cbn0iLCJpbXBvcnQgeyBEaWN0aW9uYXJ5IH0gZnJvbSAnfi9jb3JlL2RpY3Rpb25hcnknO1xuXG5jbGFzcyBTdG9yZU1hbmFnZXIgZXh0ZW5kcyBEaWN0aW9uYXJ5IHtcbiAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICB0aGlzLmRhdGFba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0KGtleSkge1xuICAgIHJldHVybiB0aGlzLmRhdGFba2V5XTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU3RvcmVNYW5hZ2VyKCk7IiwiaW1wb3J0IEV4dCBmcm9tICd+L2NvcmUvZXh0JztcbmltcG9ydCBQcm94eVN0b3JlIGZyb20gJy4vcHJveHktc3RvcmUnO1xuXG5jbGFzcyBTdG9yZSBleHRlbmRzIFByb3h5U3RvcmUge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcigpO1xuICAgIEV4dC5leHRlbmQodGhpcywgY29uZmlnKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25maWcgPT4gbmV3IFN0b3JlKGNvbmZpZyk7IiwiaW1wb3J0IEV4dCBmcm9tICd+L2NvcmUvZXh0JztcblxuY2xhc3MgQWpheE9ic2VydmFibGUge1xuICBjb25zdHJ1Y3Rvcih1cmxPclJlcXVlc3QpIHtcbiAgICB0aGlzLnJlcXVlc3QgPSBFeHQuZXh0ZW5kKHtcbiAgICAgIHVybDogJycsXG4gICAgICBwYXJhbXM6ICcnLFxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04JyxcbiAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgfSwgRXh0LmlzU3RyaW5nKHVybE9yUmVxdWVzdCkgPyB7IHVybDogdXJsT3JSZXF1ZXN0IH0gOiB1cmxPclJlcXVlc3QpO1xuXG4gICAgdGhpcy5wcm9taXNlID0gcmVxdWVzdCA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmNyZWF0ZVJlcXVlc3QocmVxdWVzdCwgKGVycm9yLCByZXNwb25zZSkgPT4gZXJyb3IgPyByZWplY3QoZXJyb3IpIDogcmVzb2x2ZShyZXNwb25zZSkpO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgc3Vic2NyaWJlKHsgbmV4dCwgZXJyb3IsIGNvbXBsZXRlIH0pIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHJlc3BvbnNlO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnByb21pc2UoeyB1cmwsIGNvbnRlbnRUeXBlLCBtZXRob2QsIHBhcmFtcyB9KTtcbiAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYENhbm5vdCBnZXQgcmVzcG9uc2UgZnJvbSBzZXJ2ZXIgZm9yIHVybCBbJHt1cmx9XSBjYXVzZWQgYnk6ICR7ZXh9YCk7XG4gICAgICAgIGVycm9yICYmIGVycm9yKGV4KTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXh0ID8gbmV4dChyZXNwb25zZSkgOiByZXNwb25zZTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgY29tcGxldGUgJiYgY29tcGxldGUoKTtcbiAgICB9XG4gIH1cblxuICBzZW5kKHsgdXJsLCBjb250ZW50VHlwZSwgbWV0aG9kLCBwYXJhbXMgfSwgZG9uZSkge1xuICAgIChtZXRob2QgPT09ICdnZXQnICYmIHBhcmFtcykgJiYgKHVybCA9IGAke3VybH0/JHtTdHJpbmcudG9RdWVyeVN0cmluZyhwYXJhbXMpfWApO1xuICAgIGNvbnN0IHhociA9IEV4dC5YSFI7XG4gICAgeGhyLm9wZW4obWV0aG9kLCB1cmwsIHRydWUpO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCBjb250ZW50VHlwZSk7XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgIGlmKHhoci5yZWFkeVN0YXRlID09PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XG4gICAgICAgIC8vIGFqYXggd2lsbCByZXR1cm4gYXMgYSBqc29uIGJ5IGRlZmF1bHQsIGlmIHBhcnNlciBlcnJvciB0aGVuIGl0IHdpbGwgcmV0dXJuIGEgcmF3IHN0cmluZ1xuICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRvbmUobnVsbCwgSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZG9uZShudWxsLCB4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRvbmUoSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZG9uZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgeGhyLnNlbmQocGFyYW1zID8gSlNPTi5zdHJpbmdpZnkocGFyYW1zKSA6IG51bGwpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZSh1cmxPclJlcXVlc3QpIHtcbiAgICByZXR1cm4gbmV3IEFqYXhPYnNlcnZhYmxlKHVybE9yUmVxdWVzdCk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudE9ic2VydmFibGUge1xuICBjb25zdHJ1Y3Rvcih0YXJnZXQsIGV2ZW50TmFtZSwgb3B0aW9ucykge1xuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgIHRoaXMuZXZlbnROYW1lID0gZXZlbnROYW1lO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKHRoaXMuZXZlbnROYW1lLCBvYnNlcnZlciwgdGhpcy5vcHRpb25zKTtcbiAgfVxuXG4gIHVuc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50TmFtZSwgb2JzZXJ2ZXIsIHRoaXMub3B0aW9ucyk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlKHRhcmdldCwgZXZlbnROYW1lLCBvcHRpb25zID0gZmFsc2UpIHtcbiAgICByZXR1cm4gbmV3IEV2ZW50T2JzZXJ2YWJsZSh0YXJnZXQsIGV2ZW50TmFtZSwgb3B0aW9ucyk7XG4gIH1cbn0iLCJpbXBvcnQgT3BlcmF0b3IgZnJvbSAnLi9vcGVyYXRvcic7XG5pbXBvcnQgRXZlbnRPYnNlcnZhYmxlIGZyb20gJy4vZXZlbnQnO1xuaW1wb3J0IEFqYXhPYnNlcnZhYmxlIGZyb20gJy4vYWpheCc7XG5cbi8qKlxuICogRnJvbSBSZWFjdGl2ZVggZG9jczpcbiAqXG4gKiBPYnNlcnZhYmxlOiBBbiBpbnRlcmZhY2UgdGhhdCBsaXN0ZW5zIGZvciBpbmNvbWluZyBub3RpZmljYXRpb25zIG92ZXIgYSBwZXJpb2Qgb2YgdGltZVxuICogYW5kIHB1c2hlcyB0aGVtIHRvIGFub3RoZXIgaW50ZXJmYWNlIHRoYXQgcmVhY3RzIHRvIHRoZW0uXG4gKlxuICogU3Vic2NyaXB0aW9uOiBXaGVuIGFuIE9ic2VydmFibGUgaW50ZXJmYWNlIHN0YXJ0cyBkb2luZyBpdHMgd29yayxcbiAqIGkuZS4gbGlzdGVuaW5nIGZvciBub3RpZmljYXRpb25zIGFuZCBwdXNoaW5nIHRoZW0gb3V0LlxuICpcbiAqIE9ic2VydmVyOiBBbiBpbnRlcmZhY2UgdGhhdCByZWFjdHMgdG8gZGF0YSBwdXNoZWQgZnJvbSBhbiBPYnNlcnZhYmxlLlxuICpcbiAqIE9wZXJhdG9yczogRnVuY3Rpb25zIHVzZWQgdG8gbWFuaXB1bGF0ZSBhbiBPYnNlcnZhYmxl4oCZcyBvdXRwdXQsIGUuZy4gZmlsdGVyLCBtYXAsIHJlZHVjZSwgZXRjLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYnNlcnZhYmxlIGV4dGVuZHMgT3BlcmF0b3Ige1xuICBjb25zdHJ1Y3RvcihzdWJzY3JpYmUpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3Vic2NyaWJlID0gc3Vic2NyaWJlO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZShzdWJzY3JpYmUpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoc3Vic2NyaWJlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3IgZXhhbXBsZTpcbiAgICogY29uc3QgdW5zdWJjcmliZSA9IE9ic2VydmFibGUuZnJvbUV2ZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dCcpLCAnY2hhbmdlJykuc3Vic2NyaWJlKHtcbiAgICogICAgbmV4dDogZSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSlcbiAgICogfSk7XG4gICAqXG4gICAqIHNldFRpbWVvdXQodW5zdWJjcmliZSwgNTAwMCk7XG4gICAqXG4gICAqIEBwYXJhbSB0YXJnZXRcbiAgICogQHBhcmFtIGV2ZW50TmFtZVxuICAgKi9cbiAgc3RhdGljIGZyb21FdmVudCh0YXJnZXQsIGV2ZW50TmFtZSkge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShvYnNlcnZlciA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGUgPT4gb2JzZXJ2ZXIubmV4dChlKTtcbiAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGZhbHNlKTtcbiAgICAgIHJldHVybiAoKSA9PiB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrLCBmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgYWpheCh1cmxPclJlcXVlc3QpIHtcbiAgICByZXR1cm4gQWpheE9ic2VydmFibGUuY3JlYXRlKHVybE9yUmVxdWVzdCk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBPcGVyYXRvciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZmlsdGVyID0gcHJlZGljYXRlID0+IHsgLyogdG8gYmUgaW1wbGVtZW50ZWQgKi8gfTtcbiAgICB0aGlzLm1hcCA9IHByZWRpY2F0ZSA9PiB7IC8qIHRvIGJlIGltcGxlbWVudGVkICovIH07XG4gICAgdGhpcy5yZWR1Y2UgPSBwcmVkaWNhdGUgPT4geyAvKiB0byBiZSBpbXBsZW1lbnRlZCAqLyB9O1xuICB9XG59IiwiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IEV4dCB9IGZyb20gJy4vY29yZS9leHQnO1xuaW1wb3J0IFN0b3JlTWFuYWdlciBmcm9tICcuL2RhdGEvc3RvcmUtbWFuYWdlcic7XG5cbmNsYXNzIFJleHQgZXh0ZW5kcyBFeHQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuU3RvcmVNYW5hZ2VyID0gU3RvcmVNYW5hZ2VyO1xuICAgIC8vIHRoaXMuQ2FjaGUgPSByZXF1aXJlKCcuL2RhdGEvY2FjaGUnKTtcbiAgICAvLyB0aGlzLk1vZGVsID0gcmVxdWlyZSgnLi9kYXRhL21vZGVsJyk7XG4gICAgLy8gdGhpcy5PYnNlcnZhYmxlID0gcmVxdWlyZSgnLi9yZWFjdGl2ZS9vYnNlcnZhYmxlJyk7XG4gICAgLy8gdGhpcy5EaWFsb2dNYW5hZ2VyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2RpYWxvZycpO1xuICB9XG5cbiAgYXN5bmMgYXBwbGljYXRpb24oeyBzdG9yZXMsIGxhdW5jaCB9KSB7XG4gICAgaWYgKHN0b3Jlcykge1xuICAgICAgdGhpcy5MaXN0KHN0b3JlcykuZWFjaChzdG9yZSA9PiB7XG4gICAgICAgIHN0b3JlID0gc3RvcmUuZGVmYXVsdDtcbiAgICAgICAgU3RvcmVNYW5hZ2VyLnNldChzdG9yZS5zdG9yZUlkLCBzdG9yZSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGxhdW5jaCkge1xuICAgICAgY29uc3Qgcm9vdCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnPGRpdiBpZD1cInJlYWN0LXJvb3RcIj48L2Rpdj4nKSxcbiAgICAgICAgICAgIHZpZXdwb3J0ID0gYXdhaXQgbGF1bmNoKCk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJvb3QpO1xuICAgICAgcmVuZGVyKHZpZXdwb3J0LCByb290KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFJleHQoKTtcblxuLy8jcmVnaW9uIENvbXBvbmVudFxuZXhwb3J0IHsgSGFzaFJvdXRlciwgTGluayB9IGZyb20gJy4vY29tcG9uZW50cy9yb3V0ZXInO1xuZXhwb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRhaW5lcic7XG4vLyBleHBvcnQgeyBCdXR0b24sIEJ1dHRvbkxpbmssIEZpZWxkLCBUZXh0RmllbGQsIENoZWNrYm94LCBUZXh0QXJlYSB9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtJztcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgR3JpZCB9IGZyb20gJy4vY29tcG9uZW50cy9ncmlkJztcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgTGlzdFZpZXcgfSBmcm9tICcuL2NvbXBvbmVudHMvbGlzdCc7XG4vLyBleHBvcnQgeyBEaWFsb2cgfSBmcm9tICcuL2NvbXBvbmVudHMvZGlhbG9nJztcbi8vI2VuZHJlZ2lvblxuXG4vLyNyZWdpb24gRGVjb3JhdG9yIChvciBIaWdoZXIgT3JkZXIgRnVuY3Rpb24gb3IgSGlnaGVyIE9yZGVyIENvbXBvbmVudClcbmV4cG9ydCB7IGJpbmQgfSBmcm9tICcuL2NvcmUvZXh0JztcbmV4cG9ydCB7IFJvdXRlIH0gZnJvbSAnLi9jb21wb25lbnRzL3JvdXRlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbXBvbmVudCB9IGZyb20gJy4vYXBwL2NvbXBvbmVudCc7XG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIFNlcnZpY2UgfSBmcm9tICcuL2FwcC9zZXJ2aWNlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3RvcmUgfSBmcm9tICcuL2RhdGEvc3RvcmUnO1xuLy8jZW5kcmVnaW9uIl19
