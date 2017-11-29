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
  stores: [require('./components/example/store/card')],
  views: [require('./components/getting-started/getting-started'), require('./components/core-concepts/component'), require('./components/core-concepts/screen-navigation'), require('./components/core-concepts/data-package'), require('./components/architecture/architecture'),
  // require('./components/ui-components/grid'),
  require('./components/example/dashboard'), require('./components/example/search'), require('./components/example/details'), require('./components/example/notfound'), require('./components/example/cards')],
  launch: function launch() {
    return _react2.default.createElement(_viewport2.default, null);
  }
});

},{"../../../src/rext":30,"./components/architecture/architecture":2,"./components/core-concepts/component":3,"./components/core-concepts/data-package":4,"./components/core-concepts/screen-navigation":5,"./components/example/cards":6,"./components/example/dashboard":7,"./components/example/details":8,"./components/example/notfound":9,"./components/example/search":10,"./components/example/store/card":11,"./components/getting-started/getting-started":12,"./components/viewport/viewport":13,"babel-polyfill":"babel-polyfill","react":"react"}],2:[function(require,module,exports){
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
          'p',
          { className: 'mb-md' },
          'Extension React provides support for MVC+VM application architectures. To understand what is MVC+VM, we should start by further defining what the various abbreviations represent.'
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
              '(M) Model'
            ),
            ' - This is the data for your application. A set of classes (called "Models") defines the fields for their data (e.g. a User model with user-name and password fields). Models know how to persist themselves through the data package and can be linked to other models via associations. Models are normally used in conjunction with Stores to provide data for grids and other components. Models are also an ideal location for any data logic that you may need, such as validation, conversion, etc.'
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'strong',
              null,
              '(V) View'
            ),
            ' - A View is any type of component that is visually represented. For instance, grids, trees and panels are all considered Views.'
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'strong',
              null,
              '(C) Controller'
            ),
            ' - Controllers are used as a place to maintain the view\'s logic that makes your app work. This could entail rendering views, routing, instantiating Models, and any other sort of app logic.'
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'strong',
              null,
              '(VM) ViewModel'
            ),
            ' - The ViewModel is a class that manages data specific to the View. It allows interested components to bind to it and be updated whenever this data changes.'
          )
        ),
        _react2.default.createElement(
          'h3',
          { className: 'mb-md' },
          'Models and Stores'
        ),
        _react2.default.createElement(
          'p',
          { className: 'mb-md' },
          _react2.default.createElement(
            'code',
            null,
            'Models'
          ),
          ' and ',
          _react2.default.createElement(
            'code',
            null,
            'Stores'
          ),
          ' make up the information gateway of your application. Most of your data is sent, retrieved, organized, and "modeled" by these two classes.'
        ),
        _react2.default.createElement(
          'p',
          { className: 'mb-md' },
          'A ',
          _react2.default.createElement(
            'code',
            null,
            'Model'
          ),
          ' represents any type of persist-able data in your application. Each model has fields and functions that allow your application to "model" data. Models are most commonly used in conjunction with stores. Stores can then be consumed by data-bound components like grids, trees, and charts.'
        ),
        _react2.default.createElement(
          'p',
          { className: 'mb-md' },
          'A ',
          _react2.default.createElement(
            'code',
            null,
            'Store'
          ),
          ' is a client side cache of records (instances of a Model class). Stores provide functions for querying the records contained within.'
        ),
        _react2.default.createElement(
          'h3',
          { className: 'mb-md' },
          'ViewControllers'
        ),
        _react2.default.createElement(
          'p',
          { className: 'mb-md' },
          'Extension React delivers some exciting improvements for React. To enhance MVC applications, Extension React provides ViewControllers, also called as Component:'
        ),
        _react2.default.createElement(
          'ul',
          { className: 'mb-md' },
          _react2.default.createElement(
            'li',
            null,
            'Simplifies the connection to views using \u201CComponent\u201D decorator.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Leverages the life cycle of views to automatically manage their associated.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Reduces complexity based on a one-to-one relationship with the managed view.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Provides encapsulation to make nesting views reliable.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Retains the ability to select components and listen to their events at any level below the associated view.'
          )
        ),
        _react2.default.createElement(
          'pre',
          null,
          '// ./components/search/search.js\nimport React, { Component } from \'react\';\nimport Rext, { Container } from \'ext-react\';\nimport DataStore from \'~/stores/data\';\nimport SearchForm from \'./search-form\';\nimport SearchResult from \'./search-result\';\n\nexport default class Search extends Component {\n  render() {\n    return <Container>\n      <SearchForm />\n      <SearchResult />\n    </Container>\n  }\n}\n\n// ./components/search/search-form.js\nimport { Component } from \'ext-react\';\nimport DataStore from \'~/stores/data\';\nimport SearchFormView from \'./search-form.view\';\n\n@Component({\n  view: SearchFormView\n})\nexport default class SearchForm {\n  constructor() {\n    this.criteria = {\n      name: \'\',\n      statuses: [],\n      purposes: [],\n      activities: [],\n      products: []\n    };\n  }\n\n  search(criteria) {\n    criteria = this.correctCriteria(criteria);\n    DataStore.rejectChanges();\n    Rext.extend(DataStore.proxy, {\n      params: criteria,\n      fail: (response) => {\n        console.err(response.message);\n        DataStore.clearData();\n      }\n    });\n    DataStore.load();\n  }\n\n  clearSearchResult(comp) {\n    DataStore.rejectChanges();\n    DataStore.clearData();\n    comp.setState(() => (this.criteria));\n  }\n}\n\n// ./components/search/search-form.view.jsx\nimport React, { Component } from \'react\';\nimport { Field, Dropdown, Button } from \'ext-react\';\n\nexport default class SearchFormView extends Component {\n  constructor(props) {\n    super(props);\n    Ext.initialState(this, props.$view.criteria);\n  }\n\n  render() {\n    const { name, statuses, purposes, activities, products } = this.state,\n          { search, clearSearchResult } = this.props.$view;\n    return <section>\n      <Field value={name} placeholder="Name" onChange={this.setName} />\n      <Dropdown multiple options={[]} value={statuses} onBlur={this.setStatuses} />\n      <Dropdown multiple options={[]} value={purposes} onBlur={this.setPurposes} />\n      <Dropdown multiple options={[]} value={activities} onBlur={this.setActivities} />\n      <Dropdown multiple options={[]} value={products} onBlur={this.setProducts} />\n      <Button type="primary" text="Search" onClick={() => search(this.state)} />\n      <Button text="Clear" onClick={() => clearSearchResult(this)} />\n    </section>\n  }\n}\n\n// ./components/search/search-result.jsx\nimport React, { Component } from \'react\';\nimport { Container, Grid } from \'ext-react\';\nimport DataStore from \'~/stores/data\';\n\nexport default class SearchResult extends Component {\n  render() {\n    const { name, recordStatuses, purposes, activities, products } = this.state,\n          { search, clearSearchResult } = this.props.$view;\n    return <Container>\n      <Grid store={DataStore}>\n        <div text="ID" dataIndex="id" />\n        <div text="Name" dataIndex="name" />\n        <div text="Status" dataIndex="status" />\n        <div text="Purpose" dataIndex="purpose" />\n        <div text="Activity" dataIndex="activity" />\n        <div text="Product" dataIndex="product" />\n      </Grid>\n    </Container>\n  }\n}'
        )
      );
    }
  }]);

  return Architecture;
}(_react.PureComponent)) || _class);
exports.default = Architecture;

},{"../../../../../src/rext":30,"react":"react"}],3:[function(require,module,exports){
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
          '// ./components/dashboard/dashboard.view.jsx\nimport React, { PureComponent } from \'react\';\n\nexport default class DashboardView extends PureComponent {\n  render() {\n    return <h1>{this.props.$view.title}</h1>;\n  }\n}\n\n// ./components/dashboard/dashboard.js\nimport { Component } from \'ext-react\';\nimport DashboardView from \'./dashboard.view\';\n\n@Component({\n  view: DashboardView\n})\nexport default class Dashboard {\n  constructor(props) {\n    this.title = \'Dashboard\';\n  }\n}'
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
          'import { Component } from \'ext-react\';\n\n@Component({\n  view: ({ $view }) => <h1>{$view.title}</h1>\n})\nexport default class Dashboard {\n  constructor(props) {\n    this.title = \'Dashboard\';\n  }\n}'
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

},{"../../../../../src/rext":30,"react":"react"}],4:[function(require,module,exports){
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

},{"../../../../../src/rext":30,"react":"react"}],5:[function(require,module,exports){
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
          '// main.js\nimport \'babel-polyfill\';\nimport Rext from \'ext-react\';\nimport Viewport from \'./components/viewport\';\n\nRext.application({\n  views: [\n    require(\'./components/search\'),\n    require(\'./components/details\'),\n    require(\'./components/notfound\'),\n  ],\n  launch: () => <Viewport />\n});\n\nRext.launch(<Viewport />);\n\n// ./components/viewport.js\nimport React from \'react\';\nimport { Link, HashRouter } from \'ext-react\';\n\nexport default function Viewport() {\n  return <section>\n    <Link to="/">Dashboard</Link>\n    <Link to="/search">Search</Link>\n    <Link to="/details/huynguyen">Details</Link>\n    <HashRouter />\n  </section>\n}\n\n// ./components/search.js\nimport React from \'react\';\nimport { Route, Component } from \'ext-react\';\n\n@Route(\'/search\')\n@Component({\n  view: () => <section />\n})\nexport default class Search { }\n\n// ./components/details.js\nimport React from \'react\';\nimport { Route, Component } from \'ext-react\';\n\n@Route(\'/details/:name\')\n@Component({\n  view: ({ params }) => <h1>{params.name}</h1>\n})\nexport default class Details { }\n\n// ./components/notfound.js\nimport React, { PureComponent } from \'react\';\nimport { Route } from \'ext-react\';\n\n@Route(\'*\')\nexport default class NotFound extends PureComponent {\n  render() {\n    return <h1>\'{this.props.params.route}\' doesn\'t exist</h1>\n  }\n}'
        )
      );
    }
  }]);

  return ScreenNavigation;
}(_react.PureComponent)) || _class);
exports.default = ScreenNavigation;

},{"../../../../../src/rext":30,"react":"react"}],6:[function(require,module,exports){
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

var _card = require('./store/card');

var _card2 = _interopRequireDefault(_card);

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
      _card2.default.load();
    }
  }, {
    key: 'render',
    value: function render() {
      console.log('render card view');
      return _react2.default.createElement('section', null);
    }
  }]);

  return CardView;
}(_react.PureComponent);

var Card = (_dec = (0, _rext.Route)('/example/cards'), _dec2 = (0, _rext.Component)({
  stores: [_card2.default],
  view: CardView
}), _dec(_class = _dec2(_class = function Card() {
  _classCallCheck(this, Card);
}) || _class) || _class);
exports.default = Card;

},{"../../../../../src/rext":30,"./store/card":11,"react":"react"}],7:[function(require,module,exports){
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

},{"../../../../../src/rext":30,"react":"react"}],8:[function(require,module,exports){
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

},{"../../../../../src/rext":30,"react":"react"}],9:[function(require,module,exports){
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

},{"../../../../../src/rext":30,"react":"react"}],10:[function(require,module,exports){
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

},{"../../../../../src/rext":30,"react":"react"}],11:[function(require,module,exports){
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

},{"../../../../../../src/rext":30}],12:[function(require,module,exports){
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

},{"../../../../../src/rext":30,"react":"react"}],13:[function(require,module,exports){
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
  // return <Container layout="column">
  //   <Container className="nav" style={{width:300}}>
  //     <header>
  //       <h1 className="brand">Extension React</h1>
  //       <div className="navbar">
  //         <ul className="navbar-nav mr-auto">
  //         </ul>
  //       </div>
  //     </header>
  //     <nav className="mb-auto d-flex">

  //     </nav>
  //     <footer>
  //       <div className="nav-text">&copy; 2017 huytrongnguyen</div>
  //     </footer>
  //   </Container>
  //   <Container>
  //     <HashRouter />
  //   </Container>
  // </Container>
}

},{"../../../../../src/rext":30,"react":"react"}],14:[function(require,module,exports){
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

        _ext2.default.initialState(_this, _defineProperty({
          stores: {},
          services: {}
        }, config.componentAs || '$view', new Controller(props)));
        _this.onDataChanged = function () {
          return _this.forceUpdate();
        };
        return _this;
      }

      _createClass(HocComponent, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
          var _this2 = this;

          this.setStores((0, _list2.default)(config.stores).reduce(function (stores, store) {
            store.subscribe(_this2.onDataChanged);
            stores[store.storeId] = store;
            return stores;
          }, {}));

          this.setServices((0, _list2.default)(config.services).reduce(function (services, service) {
            services[service.serviceId] = service;
            return services;
          }, {}));
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(WrappedComponent, _extends({}, this.state, this.props));
        }
      }]);

      return HocComponent;
    }(_react.PureComponent);
  };
};

},{"../core/dictionary":17,"../core/ext":19,"../core/list":20,"../reactive/observable":28,"react":"react"}],15:[function(require,module,exports){
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
    if (keyValues && keyValues.length) {
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

},{"../core/ext":19,"./proxy-store":24}],26:[function(require,module,exports){
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

},{"../core/ext":19}],27:[function(require,module,exports){
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

},{}],28:[function(require,module,exports){
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

},{"./ajax":26,"./event":27,"./operator":29}],29:[function(require,module,exports){
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

},{}],30:[function(require,module,exports){
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

    console.log(_this);
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
                console.log(stores);
                if (stores) {
                  this.List(stores).reduce(function (stores, store) {
                    store = store.default;
                    stores[store.storeId] = store;
                    return stores;
                  }, {});
                }

                if (!launch) {
                  _context.next = 9;
                  break;
                }

                root = this.createElement('<div id="react-root"></div>');
                _context.next = 6;
                return launch();

              case 6:
                viewport = _context.sent;

                document.body.appendChild(root);
                (0, _reactDom.render)(viewport, root);

              case 9:
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

},{"./app/component":14,"./components/container":15,"./components/router":16,"./core/ext":19,"./data/store":25,"babel-polyfill":"babel-polyfill","react":"react","react-dom":"react-dom"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkb2NzL3NyYy9qcy9hcHAuanMiLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2FyY2hpdGVjdHVyZS9hcmNoaXRlY3R1cmUuanN4IiwiZG9jcy9zcmMvanMvY29tcG9uZW50cy9jb3JlLWNvbmNlcHRzL2NvbXBvbmVudC5qc3giLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2NvcmUtY29uY2VwdHMvZGF0YS1wYWNrYWdlLmpzeCIsImRvY3Mvc3JjL2pzL2NvbXBvbmVudHMvY29yZS1jb25jZXB0cy9zY3JlZW4tbmF2aWdhdGlvbi5qc3giLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUvY2FyZHMuanMiLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUvZGFzaGJvYXJkLmpzIiwiZG9jcy9zcmMvanMvY29tcG9uZW50cy9leGFtcGxlL2RldGFpbHMuanMiLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUvbm90Zm91bmQuanMiLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUvc2VhcmNoLmpzIiwiZG9jcy9zcmMvanMvY29tcG9uZW50cy9leGFtcGxlL3N0b3JlL2NhcmQuanMiLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2dldHRpbmctc3RhcnRlZC9nZXR0aW5nLXN0YXJ0ZWQuanN4IiwiZG9jcy9zcmMvanMvY29tcG9uZW50cy92aWV3cG9ydC92aWV3cG9ydC5qc3giLCJzcmMvYXBwL2NvbXBvbmVudC5qcyIsInNyYy9jb21wb25lbnRzL2NvbnRhaW5lci5qc3giLCJzcmMvY29tcG9uZW50cy9yb3V0ZXIuanN4Iiwic3JjL2NvcmUvZGljdGlvbmFyeS5qcyIsInNyYy9jb3JlL2RvbS5qcyIsInNyYy9jb3JlL2V4dC5qcyIsInNyYy9jb3JlL2xpc3QuanMiLCJzcmMvY29yZS9zdHJpbmcuanMiLCJzcmMvZGF0YS9hYnN0cmFjdC1zdG9yZS5qcyIsInNyYy9kYXRhL21vZGVsLmpzIiwic3JjL2RhdGEvcHJveHktc3RvcmUuanMiLCJzcmMvZGF0YS9zdG9yZS5qcyIsInNyYy9yZWFjdGl2ZS9hamF4LmpzIiwic3JjL3JlYWN0aXZlL2V2ZW50LmpzIiwic3JjL3JlYWN0aXZlL29ic2VydmFibGUuanMiLCJzcmMvcmVhY3RpdmUvb3BlcmF0b3IuanMiLCJzcmMvcmV4dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxlQUFLLFdBQUwsQ0FBaUI7QUFDZixVQUFRLENBQ04sUUFBUSxpQ0FBUixDQURNLENBRE87QUFJZixTQUFPLENBQ0wsUUFBUSw4Q0FBUixDQURLLEVBRUwsUUFBUSxzQ0FBUixDQUZLLEVBR0wsUUFBUSw4Q0FBUixDQUhLLEVBSUwsUUFBUSx5Q0FBUixDQUpLLEVBS0wsUUFBUSx3Q0FBUixDQUxLO0FBTUw7QUFDQSxVQUFRLGdDQUFSLENBUEssRUFRTCxRQUFRLDZCQUFSLENBUkssRUFTTCxRQUFRLDhCQUFSLENBVEssRUFVTCxRQUFRLCtCQUFSLENBVkssRUFXTCxRQUFRLDRCQUFSLENBWEssQ0FKUTtBQWlCZixVQUFRO0FBQUEsV0FBTSx1REFBTjtBQUFBO0FBakJPLENBQWpCOzs7Ozs7Ozs7Ozs7OztBQ0xBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFHcUIsWSxXQURwQixpQkFBTSxlQUFOLEM7Ozs7Ozs7Ozs7OzZCQUVVO0FBQ1AsYUFBTztBQUFBO0FBQUEsVUFBVyxXQUFVLDJCQUFyQjtBQUNMO0FBQUE7QUFBQSxZQUFJLFdBQVUsT0FBZDtBQUFBO0FBQUEsU0FESztBQUVMO0FBQUE7QUFBQSxZQUFHLFdBQVUsT0FBYjtBQUFBO0FBQUEsU0FGSztBQU1MO0FBQUE7QUFBQSxZQUFJLFdBQVUsT0FBZDtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUFBO0FBQUEsV0FERjtBQVFFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtB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RUFBUyxLQUFULEVBQW1CO0FBQzFDLDRCQUFRLE1BQU0sT0FBZDtBQUNBLDJCQUFPLE1BQU0sT0FBYixJQUF3QixLQUF4QjtBQUNBLDJCQUFPLE1BQVA7QUFDRCxtQkFKRCxFQUlHLEVBSkg7QUFLRDs7cUJBQ0csTTs7Ozs7QUFDSSxvQixHQUFPLEtBQUssYUFBTCxDQUFtQiw2QkFBbkIsQzs7dUJBQ1UsUTs7O0FBQWpCLHdCOztBQUNOLHlCQUFTLElBQVQsQ0FBYyxXQUFkLENBQTBCLElBQTFCO0FBQ0Esc0NBQU8sUUFBUCxFQUFpQixJQUFqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQUtTLElBQUksSUFBSixFOztBQUVmIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZXh0IGZyb20gJ34vcmV4dCc7XG5pbXBvcnQgVmlld3BvcnQgZnJvbSAnLi9jb21wb25lbnRzL3ZpZXdwb3J0L3ZpZXdwb3J0JztcblxuUmV4dC5hcHBsaWNhdGlvbih7XG4gIHN0b3JlczogW1xuICAgIHJlcXVpcmUoJy4vY29tcG9uZW50cy9leGFtcGxlL3N0b3JlL2NhcmQnKSxcbiAgXSxcbiAgdmlld3M6IFtcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvZ2V0dGluZy1zdGFydGVkL2dldHRpbmctc3RhcnRlZCcpLFxuICAgIHJlcXVpcmUoJy4vY29tcG9uZW50cy9jb3JlLWNvbmNlcHRzL2NvbXBvbmVudCcpLFxuICAgIHJlcXVpcmUoJy4vY29tcG9uZW50cy9jb3JlLWNvbmNlcHRzL3NjcmVlbi1uYXZpZ2F0aW9uJyksXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2NvcmUtY29uY2VwdHMvZGF0YS1wYWNrYWdlJyksXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2FyY2hpdGVjdHVyZS9hcmNoaXRlY3R1cmUnKSxcbiAgICAvLyByZXF1aXJlKCcuL2NvbXBvbmVudHMvdWktY29tcG9uZW50cy9ncmlkJyksXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2V4YW1wbGUvZGFzaGJvYXJkJyksXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2V4YW1wbGUvc2VhcmNoJyksXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2V4YW1wbGUvZGV0YWlscycpLFxuICAgIHJlcXVpcmUoJy4vY29tcG9uZW50cy9leGFtcGxlL25vdGZvdW5kJyksXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2V4YW1wbGUvY2FyZHMnKSxcbiAgXSxcbiAgbGF1bmNoOiAoKSA9PiA8Vmlld3BvcnQgLz5cbn0pOyIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIENvbnRhaW5lciB9IGZyb20gJ34vcmV4dCc7XG5cbkBSb3V0ZSgnL2FyY2hpdGVjdHVyZScpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcmNoaXRlY3R1cmUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Q29udGFpbmVyIGNsYXNzTmFtZT1cIm1haW4gY29udGFpbmVyIHNjcm9sbGFibGVcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi1tZFwiPkFwcGxpY2F0aW9uIEFyY2hpdGVjdHVyZTwvaDE+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlxuICAgICAgICBFeHRlbnNpb24gUmVhY3QgcHJvdmlkZXMgc3VwcG9ydCBmb3IgTVZDK1ZNIGFwcGxpY2F0aW9uIGFyY2hpdGVjdHVyZXMuIFxuICAgICAgICBUbyB1bmRlcnN0YW5kIHdoYXQgaXMgTVZDK1ZNLCB3ZSBzaG91bGQgc3RhcnQgYnkgZnVydGhlciBkZWZpbmluZyB3aGF0IHRoZSB2YXJpb3VzIGFiYnJldmlhdGlvbnMgcmVwcmVzZW50LlxuICAgICAgPC9wPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8c3Ryb25nPihNKSBNb2RlbDwvc3Ryb25nPiAtIFRoaXMgaXMgdGhlIGRhdGEgZm9yIHlvdXIgYXBwbGljYXRpb24uXG4gICAgICAgICAgQSBzZXQgb2YgY2xhc3NlcyAoY2FsbGVkIFwiTW9kZWxzXCIpIGRlZmluZXMgdGhlIGZpZWxkcyBmb3IgdGhlaXIgZGF0YSAoZS5nLiBhIFVzZXIgbW9kZWwgd2l0aCB1c2VyLW5hbWUgYW5kIHBhc3N3b3JkIGZpZWxkcykuXG4gICAgICAgICAgTW9kZWxzIGtub3cgaG93IHRvIHBlcnNpc3QgdGhlbXNlbHZlcyB0aHJvdWdoIHRoZSBkYXRhIHBhY2thZ2UgYW5kIGNhbiBiZSBsaW5rZWQgdG8gb3RoZXIgbW9kZWxzIHZpYSBhc3NvY2lhdGlvbnMuXG4gICAgICAgICAgTW9kZWxzIGFyZSBub3JtYWxseSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggU3RvcmVzIHRvIHByb3ZpZGUgZGF0YSBmb3IgZ3JpZHMgYW5kIG90aGVyIGNvbXBvbmVudHMuXG4gICAgICAgICAgTW9kZWxzIGFyZSBhbHNvIGFuIGlkZWFsIGxvY2F0aW9uIGZvciBhbnkgZGF0YSBsb2dpYyB0aGF0IHlvdSBtYXkgbmVlZCwgc3VjaCBhcyB2YWxpZGF0aW9uLCBjb252ZXJzaW9uLCBldGMuXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8c3Ryb25nPihWKSBWaWV3PC9zdHJvbmc+IC0gQSBWaWV3IGlzIGFueSB0eXBlIG9mIGNvbXBvbmVudCB0aGF0IGlzIHZpc3VhbGx5IHJlcHJlc2VudGVkLiBGb3IgaW5zdGFuY2UsIGdyaWRzLCB0cmVlcyBhbmQgcGFuZWxzIGFyZSBhbGwgY29uc2lkZXJlZCBWaWV3cy5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxzdHJvbmc+KEMpIENvbnRyb2xsZXI8L3N0cm9uZz4gLSBDb250cm9sbGVycyBhcmUgdXNlZCBhcyBhIHBsYWNlIHRvIG1haW50YWluIHRoZSB2aWV3J3MgbG9naWMgdGhhdCBtYWtlcyB5b3VyIGFwcCB3b3JrLlxuICAgICAgICAgIFRoaXMgY291bGQgZW50YWlsIHJlbmRlcmluZyB2aWV3cywgcm91dGluZywgaW5zdGFudGlhdGluZyBNb2RlbHMsIGFuZCBhbnkgb3RoZXIgc29ydCBvZiBhcHAgbG9naWMuXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8c3Ryb25nPihWTSkgVmlld01vZGVsPC9zdHJvbmc+IC0gVGhlIFZpZXdNb2RlbCBpcyBhIGNsYXNzIHRoYXQgbWFuYWdlcyBkYXRhIHNwZWNpZmljIHRvIHRoZSBWaWV3LlxuICAgICAgICAgIEl0IGFsbG93cyBpbnRlcmVzdGVkIGNvbXBvbmVudHMgdG8gYmluZCB0byBpdCBhbmQgYmUgdXBkYXRlZCB3aGVuZXZlciB0aGlzIGRhdGEgY2hhbmdlcy5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwibWItbWRcIj5Nb2RlbHMgYW5kIFN0b3JlczwvaDM+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlxuICAgICAgICA8Y29kZT5Nb2RlbHM8L2NvZGU+IGFuZCA8Y29kZT5TdG9yZXM8L2NvZGU+IG1ha2UgdXAgdGhlIGluZm9ybWF0aW9uIGdhdGV3YXkgb2YgeW91ciBhcHBsaWNhdGlvbi5cbiAgICAgICAgTW9zdCBvZiB5b3VyIGRhdGEgaXMgc2VudCwgcmV0cmlldmVkLCBvcmdhbml6ZWQsIGFuZCBcIm1vZGVsZWRcIiBieSB0aGVzZSB0d28gY2xhc3Nlcy5cbiAgICAgIDwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG4gICAgICAgIEEgPGNvZGU+TW9kZWw8L2NvZGU+IHJlcHJlc2VudHMgYW55IHR5cGUgb2YgcGVyc2lzdC1hYmxlIGRhdGEgaW4geW91ciBhcHBsaWNhdGlvbi5cbiAgICAgICAgRWFjaCBtb2RlbCBoYXMgZmllbGRzIGFuZCBmdW5jdGlvbnMgdGhhdCBhbGxvdyB5b3VyIGFwcGxpY2F0aW9uIHRvIFwibW9kZWxcIiBkYXRhLlxuICAgICAgICBNb2RlbHMgYXJlIG1vc3QgY29tbW9ubHkgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHN0b3Jlcy5cbiAgICAgICAgU3RvcmVzIGNhbiB0aGVuIGJlIGNvbnN1bWVkIGJ5IGRhdGEtYm91bmQgY29tcG9uZW50cyBsaWtlIGdyaWRzLCB0cmVlcywgYW5kIGNoYXJ0cy5cbiAgICAgIDwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG4gICAgICAgIEEgPGNvZGU+U3RvcmU8L2NvZGU+IGlzIGEgY2xpZW50IHNpZGUgY2FjaGUgb2YgcmVjb3JkcyAoaW5zdGFuY2VzIG9mIGEgTW9kZWwgY2xhc3MpLlxuICAgICAgICBTdG9yZXMgcHJvdmlkZSBmdW5jdGlvbnMgZm9yIHF1ZXJ5aW5nIHRoZSByZWNvcmRzIGNvbnRhaW5lZCB3aXRoaW4uXG4gICAgICA8L3A+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwibWItbWRcIj5WaWV3Q29udHJvbGxlcnM8L2gzPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5FeHRlbnNpb24gUmVhY3QgZGVsaXZlcnMgc29tZSBleGNpdGluZyBpbXByb3ZlbWVudHMgZm9yIFJlYWN0LiBUbyBlbmhhbmNlIE1WQyBhcHBsaWNhdGlvbnMsIEV4dGVuc2lvbiBSZWFjdCBwcm92aWRlcyBWaWV3Q29udHJvbGxlcnMsIGFsc28gY2FsbGVkIGFzIENvbXBvbmVudDo8L3A+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWItbWRcIj5cbiAgICAgICAgPGxpPlNpbXBsaWZpZXMgdGhlIGNvbm5lY3Rpb24gdG8gdmlld3MgdXNpbmcg4oCcQ29tcG9uZW504oCdIGRlY29yYXRvci48L2xpPlxuICAgICAgICA8bGk+TGV2ZXJhZ2VzIHRoZSBsaWZlIGN5Y2xlIG9mIHZpZXdzIHRvIGF1dG9tYXRpY2FsbHkgbWFuYWdlIHRoZWlyIGFzc29jaWF0ZWQuPC9saT5cbiAgICAgICAgPGxpPlJlZHVjZXMgY29tcGxleGl0eSBiYXNlZCBvbiBhIG9uZS10by1vbmUgcmVsYXRpb25zaGlwIHdpdGggdGhlIG1hbmFnZWQgdmlldy48L2xpPlxuICAgICAgICA8bGk+UHJvdmlkZXMgZW5jYXBzdWxhdGlvbiB0byBtYWtlIG5lc3Rpbmcgdmlld3MgcmVsaWFibGUuPC9saT5cbiAgICAgICAgPGxpPlJldGFpbnMgdGhlIGFiaWxpdHkgdG8gc2VsZWN0IGNvbXBvbmVudHMgYW5kIGxpc3RlbiB0byB0aGVpciBldmVudHMgYXQgYW55IGxldmVsIGJlbG93IHRoZSBhc3NvY2lhdGVkIHZpZXcuPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8cHJlPlxue2AvLyAuL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5qc1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZXh0LCB7IENvbnRhaW5lciB9IGZyb20gJ2V4dC1yZWFjdCc7XG5pbXBvcnQgRGF0YVN0b3JlIGZyb20gJ34vc3RvcmVzL2RhdGEnO1xuaW1wb3J0IFNlYXJjaEZvcm0gZnJvbSAnLi9zZWFyY2gtZm9ybSc7XG5pbXBvcnQgU2VhcmNoUmVzdWx0IGZyb20gJy4vc2VhcmNoLXJlc3VsdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPENvbnRhaW5lcj5cbiAgICAgIDxTZWFyY2hGb3JtIC8+XG4gICAgICA8U2VhcmNoUmVzdWx0IC8+XG4gICAgPC9Db250YWluZXI+XG4gIH1cbn1cblxuLy8gLi9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2gtZm9ybS5qc1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnZXh0LXJlYWN0JztcbmltcG9ydCBEYXRhU3RvcmUgZnJvbSAnfi9zdG9yZXMvZGF0YSc7XG5pbXBvcnQgU2VhcmNoRm9ybVZpZXcgZnJvbSAnLi9zZWFyY2gtZm9ybS52aWV3JztcblxuQENvbXBvbmVudCh7XG4gIHZpZXc6IFNlYXJjaEZvcm1WaWV3XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoRm9ybSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY3JpdGVyaWEgPSB7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIHN0YXR1c2VzOiBbXSxcbiAgICAgIHB1cnBvc2VzOiBbXSxcbiAgICAgIGFjdGl2aXRpZXM6IFtdLFxuICAgICAgcHJvZHVjdHM6IFtdXG4gICAgfTtcbiAgfVxuXG4gIHNlYXJjaChjcml0ZXJpYSkge1xuICAgIGNyaXRlcmlhID0gdGhpcy5jb3JyZWN0Q3JpdGVyaWEoY3JpdGVyaWEpO1xuICAgIERhdGFTdG9yZS5yZWplY3RDaGFuZ2VzKCk7XG4gICAgUmV4dC5leHRlbmQoRGF0YVN0b3JlLnByb3h5LCB7XG4gICAgICBwYXJhbXM6IGNyaXRlcmlhLFxuICAgICAgZmFpbDogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyKHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICBEYXRhU3RvcmUuY2xlYXJEYXRhKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgRGF0YVN0b3JlLmxvYWQoKTtcbiAgfVxuXG4gIGNsZWFyU2VhcmNoUmVzdWx0KGNvbXApIHtcbiAgICBEYXRhU3RvcmUucmVqZWN0Q2hhbmdlcygpO1xuICAgIERhdGFTdG9yZS5jbGVhckRhdGEoKTtcbiAgICBjb21wLnNldFN0YXRlKCgpID0+ICh0aGlzLmNyaXRlcmlhKSk7XG4gIH1cbn1cblxuLy8gLi9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2gtZm9ybS52aWV3LmpzeFxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZpZWxkLCBEcm9wZG93biwgQnV0dG9uIH0gZnJvbSAnZXh0LXJlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoRm9ybVZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBFeHQuaW5pdGlhbFN0YXRlKHRoaXMsIHByb3BzLiR2aWV3LmNyaXRlcmlhKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5hbWUsIHN0YXR1c2VzLCBwdXJwb3NlcywgYWN0aXZpdGllcywgcHJvZHVjdHMgfSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgeyBzZWFyY2gsIGNsZWFyU2VhcmNoUmVzdWx0IH0gPSB0aGlzLnByb3BzLiR2aWV3O1xuICAgIHJldHVybiA8c2VjdGlvbj5cbiAgICAgIDxGaWVsZCB2YWx1ZT17bmFtZX0gcGxhY2Vob2xkZXI9XCJOYW1lXCIgb25DaGFuZ2U9e3RoaXMuc2V0TmFtZX0gLz5cbiAgICAgIDxEcm9wZG93biBtdWx0aXBsZSBvcHRpb25zPXtbXX0gdmFsdWU9e3N0YXR1c2VzfSBvbkJsdXI9e3RoaXMuc2V0U3RhdHVzZXN9IC8+XG4gICAgICA8RHJvcGRvd24gbXVsdGlwbGUgb3B0aW9ucz17W119IHZhbHVlPXtwdXJwb3Nlc30gb25CbHVyPXt0aGlzLnNldFB1cnBvc2VzfSAvPlxuICAgICAgPERyb3Bkb3duIG11bHRpcGxlIG9wdGlvbnM9e1tdfSB2YWx1ZT17YWN0aXZpdGllc30gb25CbHVyPXt0aGlzLnNldEFjdGl2aXRpZXN9IC8+XG4gICAgICA8RHJvcGRvd24gbXVsdGlwbGUgb3B0aW9ucz17W119IHZhbHVlPXtwcm9kdWN0c30gb25CbHVyPXt0aGlzLnNldFByb2R1Y3RzfSAvPlxuICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHRleHQ9XCJTZWFyY2hcIiBvbkNsaWNrPXsoKSA9PiBzZWFyY2godGhpcy5zdGF0ZSl9IC8+XG4gICAgICA8QnV0dG9uIHRleHQ9XCJDbGVhclwiIG9uQ2xpY2s9eygpID0+IGNsZWFyU2VhcmNoUmVzdWx0KHRoaXMpfSAvPlxuICAgIDwvc2VjdGlvbj5cbiAgfVxufVxuXG4vLyAuL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC1yZXN1bHQuanN4XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkIH0gZnJvbSAnZXh0LXJlYWN0JztcbmltcG9ydCBEYXRhU3RvcmUgZnJvbSAnfi9zdG9yZXMvZGF0YSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaFJlc3VsdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5hbWUsIHJlY29yZFN0YXR1c2VzLCBwdXJwb3NlcywgYWN0aXZpdGllcywgcHJvZHVjdHMgfSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgeyBzZWFyY2gsIGNsZWFyU2VhcmNoUmVzdWx0IH0gPSB0aGlzLnByb3BzLiR2aWV3O1xuICAgIHJldHVybiA8Q29udGFpbmVyPlxuICAgICAgPEdyaWQgc3RvcmU9e0RhdGFTdG9yZX0+XG4gICAgICAgIDxkaXYgdGV4dD1cIklEXCIgZGF0YUluZGV4PVwiaWRcIiAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJOYW1lXCIgZGF0YUluZGV4PVwibmFtZVwiIC8+XG4gICAgICAgIDxkaXYgdGV4dD1cIlN0YXR1c1wiIGRhdGFJbmRleD1cInN0YXR1c1wiIC8+XG4gICAgICAgIDxkaXYgdGV4dD1cIlB1cnBvc2VcIiBkYXRhSW5kZXg9XCJwdXJwb3NlXCIgLz5cbiAgICAgICAgPGRpdiB0ZXh0PVwiQWN0aXZpdHlcIiBkYXRhSW5kZXg9XCJhY3Rpdml0eVwiIC8+XG4gICAgICAgIDxkaXYgdGV4dD1cIlByb2R1Y3RcIiBkYXRhSW5kZXg9XCJwcm9kdWN0XCIgLz5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgfVxufWB9XG4gICAgICA8L3ByZT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIENvbnRhaW5lciB9IGZyb20gJ34vcmV4dCc7XG5cbkBSb3V0ZSgnL2NvcmUtY29uY2VwdHMvY29tcG9uZW50JylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJleHRDb21wb25lbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Q29udGFpbmVyIGNsYXNzTmFtZT1cIm1haW4gY29udGFpbmVyIHNjcm9sbGFibGVcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi1tZFwiPkNvbXBvbmVudDwvaDE+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlxuICAgICAgICBBIGNvbXBvbmVudCBpbiBFeHRlbnNpb24gUmVhY3QgaXMgdGhlIGNvbWJpbmF0aW9uIG9mIGEgUmVhY3QgQ29tcG9uZW50IGFuZCBhIGNvbXBvbmVudCBjbGFzcyB0aGF0IGNvbnRyb2xzIGEgcG9ydGlvbiBvZiB0aGUgc2NyZWVuLlxuICAgICAgICBIZXJlIGlzIGFuIGV4YW1wbGUgb2YgYSBjb21wb25lbnQgdGhhdCBkaXNwbGF5IGEgc2ltcGxlIHN0cmluZzpcbiAgICAgIDwvcD5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntgLy8gLi9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQudmlldy5qc3hcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmRWaWV3IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGgxPnt0aGlzLnByb3BzLiR2aWV3LnRpdGxlfTwvaDE+O1xuICB9XG59XG5cbi8vIC4vY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmpzXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdleHQtcmVhY3QnO1xuaW1wb3J0IERhc2hib2FyZFZpZXcgZnJvbSAnLi9kYXNoYm9hcmQudmlldyc7XG5cbkBDb21wb25lbnQoe1xuICB2aWV3OiBEYXNoYm9hcmRWaWV3XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFzaGJvYXJkIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICB0aGlzLnRpdGxlID0gJ0Rhc2hib2FyZCc7XG4gIH1cbn1gfVxuICAgICAgPC9wcmU+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlxuICAgICAgICBFdmVyeSBjb21wb25lbnQgYmVnaW5zIHdpdGggYW4gPGNvZGU+QENvbXBvbmVudDwvY29kZT4gZGVjb3JhdG9yIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSA8ZW0+bWV0YWRhdGE8L2VtPiBvYmplY3QuXG4gICAgICAgIFRoZSBtZXRhZGF0YSBvYmplY3QgZGVzY3JpYmVzIGhvdyB0aGUgUmVhY3QgQ29tcG9uZW50IGFuZCBjb21wb25lbnQgY2xhc3Mgd29yayB0b2dldGhlci5cbiAgICAgICAgVGhhdCdzIG1lYW4geW91IGNhbiBhY2Nlc3MgYW55IHByb3BlcnR5IG9yIG1ldGhvZCBvZiBjb21wb25lbnQgY2xhc3MgdmlhIDxjb2RlPnRoaXMucHJvcHMuJHZpZXc8L2NvZGU+LlxuICAgICAgPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5cbiAgICAgICAgQWN0dWFsbHksIHdpdGggdGhlIGFib3ZlIGV4YW1wbGUsIGl0IGNhbiBiZSBpbXBsZW1lbnRlZCBsaWtlIHRoaXM6XG4gICAgICA8L3A+XG4gICAgICA8cHJlIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG57YGltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2V4dC1yZWFjdCc7XG5cbkBDb21wb25lbnQoe1xuICB2aWV3OiAoeyAkdmlldyB9KSA9PiA8aDE+eyR2aWV3LnRpdGxlfTwvaDE+XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFzaGJvYXJkIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICB0aGlzLnRpdGxlID0gJ0Rhc2hib2FyZCc7XG4gIH1cbn1gfVxuICAgICAgPC9wcmU+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPkV4dGVuc2lvbiBSZWFjdCBwcm92aWRlIGEgbmV3IHdheSB0byB3b3JrIHdpdGggc3RhdGU6PC9wPlxuICAgICAgPHByZSBjbGFzc05hbWU9XCJtYi1tZFwiPlxue2AvLyAuL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC52aWV3LmpzeFxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZXh0IGZyb20gJ2V4dGVuc2lvbi1yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaFZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBSZXh0LmluaXRpYWxTdGF0ZSh0aGlzLCB7XG4gICAgICBuYW1lOiBwcm9wcy5uYW1lXG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHRoaXMuc2V0TmFtZShuZXh0UHJvcHMubmFtZSk7XG4gIH1cbiAgLi4uXG59YH1cbiAgICAgIDwvcHJlPlxuICAgICAgPHA+XG4gICAgICAgIEluc3RlYWQgb2YgdXNpbmcgPGNvZGU+e2B0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUsIHByb3BzKSA9PiAoeyBuYW1lOiBwcm9wcy5uYW1lIH0pKWB9PC9jb2RlPiB0byB1cGRhdGUgdGhlIHN0YXRlLFxuICAgICAgICB5b3UgY2FuIHVzZSA8Y29kZT50aGlzLnNldE5hbWUocHJvcHMubmFtZSk8L2NvZGU+IHRvIG1ha2UgaXQgZWFzaWVyIHRvIHVuZGVyc3RhbmQgYW5kIG1vcmUgbmF0dXJhbCBieSB1c2luZyA8Y29kZT5SZXh0LmluaXRpYWxTdGF0ZTwvY29kZT4gZnVuY3Rpb24gdG8gZGVjbGFyZSB0aGUgc3RhdGUgaW4gY29uc3RydWN0b3IuXG4gICAgICA8L3A+XG4gICAgPC9Db250YWluZXI+XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBDb250YWluZXIgfSBmcm9tICd+L3JleHQnO1xuXG5AUm91dGUoJy9jb3JlLWNvbmNlcHRzL2RhdGEtcGFja2FnZScpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhUGFja2FnZSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxDb250YWluZXIgY2xhc3NOYW1lPVwibWFpbiBjb250YWluZXIgc2Nyb2xsYWJsZVwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLW1kXCI+RGF0YSBQYWNrYWdlPC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+VGhlIGRhdGEgcGFja2FnZSBpcyB3aGF0IGxvYWRzIGFuZCBzYXZlcyBhbGwgb2YgdGhlIGRhdGEgaW4geW91ciBhcHBsaWNhdGlvbi48L3A+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwibWItbWRcIj5Nb2RlbHM8L2gzPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5UaGUgY2VudGVycGllY2Ugb2YgdGhlIGRhdGEgcGFja2FnZSBpcyBgTW9kZWxgIHdoaWNoIHJlcHJlc2VudHMgYW4gZW50aXR5IGluIGFuIGFwcGxpY2F0aW9uLjwvcD5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi1tZFwiPlN0b3JlczwvaDM+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlRoZSA8Y29kZT5TdG9yZTwvY29kZT4gY2xhc3MgZW5jYXBzdWxhdGVzIGEgY2xpZW50IHNpZGUgY2FjaGUgb2YgPGNvZGU+TW9kZWw8L2NvZGU+IG9iamVjdHMuPC9wPlxuICAgICAgPHByZSBjbGFzc05hbWU9XCJtYi1tZFwiPlxue2BpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ2V4dC1yZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgU3RvcmUoe1xuICBzdG9yZUlkOiAnQ2FyZFN0b3JlJyxcbiAgcHJveHk6IHtcbiAgICB1cmw6ICcvZGF0YS9jYXJkLmpzb24nXG4gIH1cbn0pYH1cbiAgICAgIDwvcHJlPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5cbiAgICAgICAgSW4gdGhlIGV4YW1wbGUgYWJvdmUgd2UgY29uZmlndXJlZCBhbiBBSkFYIHByb3h5IHRvIGxvYWQgZGF0YSBmcm9tIHRoZSB1cmwgPGNvZGU+L2FwaS91c2VyL3NlYXJjaDwvY29kZT4uXG4gICAgICAgIFN0b3JlcyBsb2FkIGRhdGEgdmlhIDxjb2RlPnByb3h5PC9jb2RlPiB3aXRoIHRoaXMgZm9sbG93aW5nIHN0cnVjdHVyZTpcbiAgICAgIDwvcD5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntge1xuICB1cmw6ICAgIC8qIFRoZSBVUkwgZnJvbSB3aGljaCB0byByZXF1ZXN0IHRoZSBkYXRhIG9iamVjdCAqLyxcbiAgbWV0aG9kOiAvKiBUaGUgZGVmYXVsdCBIVFRQIG1ldGhvZCB0byBiZSB1c2VkIGZvciByZXF1ZXN0cy4gSWYgbm90IHNldCwgR0VUIHdpbGwgYmUgdXNlZC4gKi9cbiAgcGFyYW1zOiAvKiBSZXF1ZXN0IHBhcmFtZXRlcnMgc2VudCBhcyBqc29uIGRhdGEgKi9cbiAgcmVhZGVyOiAvKiBVc2UgdG8gZGVjb2RlIHRoZSBzZXJ2ZXIncyByZXNwb25zZSAqL1xufWB9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+U3RvcmVzIGNhbiBhbHNvIGxvYWQgZGF0YSBpbmxpbmUuIEludGVybmFsbHksIFN0b3JlIGNvbnZlcnRzIGVhY2ggb2YgdGhlIG9iamVjdHMgd2UgcGFzcyBpbiBhcyBjZmctZGF0YSBpbnRvIE1vZGVsIGluc3RhbmNlczo8L3A+XG4gICAgICA8cHJlIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG57YGltcG9ydCB7IFN0b3JlIH0gZnJvbSAnZXh0LXJlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBTdG9yZSh7XG4gIHN0b3JlSWQ6ICdVc2VyU3RvcmUnLFxuICBkYXRhOiBbXG4gICAge2ZpcnN0TmFtZTogJ1BldGVyJywgICBsYXN0TmFtZTogJ1ZlbmttYW4nfSxcbiAgICB7Zmlyc3ROYW1lOiAnRWdvbicsICAgIGxhc3ROYW1lOiAnU3BlbmdsZXInfSxcbiAgICB7Zmlyc3ROYW1lOiAnUmF5JywgICAgIGxhc3ROYW1lOiAnU3RhbnR6J30sXG4gICAge2ZpcnN0TmFtZTogJ1dpbnN0b24nLCBsYXN0TmFtZTogJ1plZGRlbW9yZSd9XG4gIF1cbn0pYH1cbiAgICAgIDwvcHJlPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5Ob3csIGp1c3QgYmluZCBhIHN0b3JlIHRvIHRoZSA8Y29kZT5Db21wb25lbnQ8L2NvZGU+OjwvcD5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntgaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGJpbmQgfSBmcm9tICdleHQtcmVhY3QnO1xuaW1wb3J0IENhcmRTdG9yZSBmcm9tICd+L3N0b3Jlcy9jYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIENhcmRTdG9yZS5jbGVhckRhdGEoKTtcbiAgICBDYXJkU3RvcmUubG9hZCgpO1xuICAgIENhcmRTdG9yZS5zdWJzY3JpYmUodGhpcy5yZWxvYWQpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgQ2FyZFN0b3JlLnVuc3Vic2NyaWJlKHRoaXMucmVsb2FkKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCByZWNvcmRzID0gQ2FyZFN0b3JlLmdldERhdGEoKTtcbiAgICByZXR1cm4gPHNlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyeC1ncmlkLWhlYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyByeC1ncmlkLWhlYWRlci1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ4LWdyaWQtY29sdW1uLWhlYWRlciB0ZXh0LXNtLWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6JzIwJSd9fT5JRDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicngtZ3JpZC1jb2x1bW4taGVhZGVyIHRleHQtc20tY2VudGVyXCIgc3R5bGU9e3t3aWR0aDonMjAlJ319Pk5hbWU8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ4LWdyaWQtY29sdW1uLWhlYWRlciB0ZXh0LXNtLWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6JzIwJSd9fT5UeXBlPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyeC1ncmlkLWNvbHVtbi1oZWFkZXIgdGV4dC1zbS1jZW50ZXJcIiBzdHlsZT17e3dpZHRoOicyMCUnfX0+QXJtb3I8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ4LWdyaWQtY29sdW1uLWhlYWRlciB0ZXh0LXNtLWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6JzIwJSd9fT5XZWFwb248L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyeC1ncmlkLWJvZHlcIiBzdHlsZT17e292ZXJmbG93Oid2aXNpYmxlJ319PlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyeC1ncmlkLXZpZXdcIj5cbiAgICAgICAgICB7cmVjb3Jkcy5tYXAocmVjb3JkID0+IDxhcnRpY2xlIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyByeC1ncmlkLXJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyeC1ncmlkLWNlbGxcIiBzdHlsZT17e3dpZHRoOicyMCUnfX0+e3JlY29yZC5nZXQoJ0lkJyl9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ4LWdyaWQtY2VsbFwiIHN0eWxlPXt7d2lkdGg6JzIwJSd9fT57cmVjb3JkLmdldCgnTmFtZScpfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyeC1ncmlkLWNlbGxcIiBzdHlsZT17e3dpZHRoOicyMCUnfX0+e3JlY29yZC5nZXQoJ1R5cGUnKX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicngtZ3JpZC1jZWxsXCIgc3R5bGU9e3t3aWR0aDonMjAlJ319PntyZWNvcmQuZ2V0KCdBcm1vclVzYWJsZScpfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyeC1ncmlkLWNlbGxcIiBzdHlsZT17e3dpZHRoOicyMCUnfX0+e3JlY29yZC5nZXQoJ1dlYXBvblVzYWJsZScpfTwvZGl2PlxuICAgICAgICAgIDwvYXJ0aWNsZT4pfVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9zZWN0aW9uPjtcbiAgfVxuXG4gIEBiaW5kXG4gIHJlbG9hZCgpIHtcbiAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gIH1cbn1gfVxuICAgICAgPC9wcmU+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlxuICAgICAgICBJbiB0aGlzIGFib3ZlIGV4YW1wbGUsIHdlIHVzZSA8Y29kZT5zdWJzY3JpYmU8L2NvZGU+IHRvIHVwZGF0ZSB0aGUgY29tcG9uZW50IHdoZW5ldmVyIGRhdGEncyBjaGFuZ2VkLlxuICAgICAgICBCZWNhdXNlIFN0b3JlIGNvbnZlcnQgZGF0YSB0byBNb2RlbCB0aGVuIHlvdSBuZWVkIHRvIHVzZSA8Y29kZT5nZXQ8L2NvZGU+IHRvIGFjY2VzcyBkYXRhLlxuICAgICAgPC9wPlxuICAgIDwvQ29udGFpbmVyPlxuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29udGFpbmVyIH0gZnJvbSAnfi9yZXh0JztcblxuQFJvdXRlKCcvY29yZS1jb25jZXB0cy9zY3JlZW4tbmF2aWdhdGlvbicpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JlZW5OYXZpZ2F0aW9uIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPENvbnRhaW5lciBjbGFzc05hbWU9XCJtYWluIGNvbnRhaW5lciBzY3JvbGxhYmxlXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwibWItbWRcIj5TY3JlZW4gTmF2aWdhdGlvbjwvaDE+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWItbWRcIj5cbiAgICAgICAgPGxpPjxzdHJvbmc+PGNvZGU+Um91dGU8L2NvZGU+PC9zdHJvbmc+IGRlY29yYXRvciBpcyBtb3N0IGJhc2ljIHJlc3BvbnNpYmlsaXR5IGlzIHRvIHJlbmRlciBVSSB3aGVuIGEgbG9jYXRpb24gbWF0Y2hlcyB0aGUgcm91dGXigJlzIHBhdGguPC9saT5cbiAgICAgICAgPGxpPjxzdHJvbmc+PGNvZGU+TGluazwvY29kZT48L3N0cm9uZz4gcHJvdmlkZXMgZGVjbGFyYXRpdmUsIGFjY2Vzc2libGUgbmF2aWdhdGlvbiBhcm91bmQgeW91ciBhcHBsaWNhdGlvbi48L2xpPlxuICAgICAgICA8bGk+PHN0cm9uZz48Y29kZT5IYXNoUm91dGVyPC9jb2RlPjwvc3Ryb25nPiB1c2VzIHRoZSBoYXNoIHBvcnRpb24gb2YgdGhlIFVSTCAoaS5lLiB3aW5kb3cubG9jYXRpb24uaGFzaCkgdG8ga2VlcCB5b3VyIFVJIGluIHN5bmMgd2l0aCB0aGUgVVJMLjwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPHByZSBjbGFzc05hbWU9XCJtYi1tZFwiPlxue2AvLyBtYWluLmpzXG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBSZXh0IGZyb20gJ2V4dC1yZWFjdCc7XG5pbXBvcnQgVmlld3BvcnQgZnJvbSAnLi9jb21wb25lbnRzL3ZpZXdwb3J0JztcblxuUmV4dC5hcHBsaWNhdGlvbih7XG4gIHZpZXdzOiBbXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL3NlYXJjaCcpLFxuICAgIHJlcXVpcmUoJy4vY29tcG9uZW50cy9kZXRhaWxzJyksXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL25vdGZvdW5kJyksXG4gIF0sXG4gIGxhdW5jaDogKCkgPT4gPFZpZXdwb3J0IC8+XG59KTtcblxuUmV4dC5sYXVuY2goPFZpZXdwb3J0IC8+KTtcblxuLy8gLi9jb21wb25lbnRzL3ZpZXdwb3J0LmpzXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgSGFzaFJvdXRlciB9IGZyb20gJ2V4dC1yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZXdwb3J0KCkge1xuICByZXR1cm4gPHNlY3Rpb24+XG4gICAgPExpbmsgdG89XCIvXCI+RGFzaGJvYXJkPC9MaW5rPlxuICAgIDxMaW5rIHRvPVwiL3NlYXJjaFwiPlNlYXJjaDwvTGluaz5cbiAgICA8TGluayB0bz1cIi9kZXRhaWxzL2h1eW5ndXllblwiPkRldGFpbHM8L0xpbms+XG4gICAgPEhhc2hSb3V0ZXIgLz5cbiAgPC9zZWN0aW9uPlxufVxuXG4vLyAuL2NvbXBvbmVudHMvc2VhcmNoLmpzXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIENvbXBvbmVudCB9IGZyb20gJ2V4dC1yZWFjdCc7XG5cbkBSb3V0ZSgnL3NlYXJjaCcpXG5AQ29tcG9uZW50KHtcbiAgdmlldzogKCkgPT4gPHNlY3Rpb24gLz5cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2ggeyB9XG5cbi8vIC4vY29tcG9uZW50cy9kZXRhaWxzLmpzXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIENvbXBvbmVudCB9IGZyb20gJ2V4dC1yZWFjdCc7XG5cbkBSb3V0ZSgnL2RldGFpbHMvOm5hbWUnKVxuQENvbXBvbmVudCh7XG4gIHZpZXc6ICh7IHBhcmFtcyB9KSA9PiA8aDE+e3BhcmFtcy5uYW1lfTwvaDE+XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV0YWlscyB7IH1cblxuLy8gLi9jb21wb25lbnRzL25vdGZvdW5kLmpzXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAnZXh0LXJlYWN0JztcblxuQFJvdXRlKCcqJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdEZvdW5kIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGgxPid7dGhpcy5wcm9wcy5wYXJhbXMucm91dGV9JyBkb2Vzbid0IGV4aXN0PC9oMT5cbiAgfVxufWB9XG4gICAgICA8L3ByZT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIENvbXBvbmVudCB9IGZyb20gJ34vcmV4dCc7XG5pbXBvcnQgQ2FyZFN0b3JlIGZyb20gJy4vc3RvcmUvY2FyZCc7XG5cbmNsYXNzIENhcmRWaWV3IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIENhcmRTdG9yZS5sb2FkKCk7XG4gIH1cbiAgcmVuZGVyKCkge2NvbnNvbGUubG9nKCdyZW5kZXIgY2FyZCB2aWV3JylcbiAgICByZXR1cm4gPHNlY3Rpb24gLz5cbiAgfVxufVxuXG5AUm91dGUoJy9leGFtcGxlL2NhcmRzJylcbkBDb21wb25lbnQoe1xuICBzdG9yZXM6IFsgQ2FyZFN0b3JlIF0sXG4gIHZpZXc6IENhcmRWaWV3XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCB7IH0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIENvbXBvbmVudCB9IGZyb20gJ34vcmV4dCc7XG5cbkBSb3V0ZSgnL2V4YW1wbGUvZGFzaGJvYXJkJylcbkBDb21wb25lbnQoe1xuICB2aWV3OiAoeyAkdmlldyB9KSA9PiA8aDE+eyR2aWV3LnRpdGxlfTwvaDE+XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFzaGJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50aXRsZSA9ICdEYXNoYm9hcmQnO1xuICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBDb21wb25lbnQgfSBmcm9tICd+L3JleHQnO1xuXG5AUm91dGUoJy9leGFtcGxlL2RldGFpbHMvOm5hbWUnKVxuQENvbXBvbmVudCh7XG4gIHZpZXc6ICh7IHBhcmFtcyB9KSA9PiA8aDE+e3BhcmFtcy5uYW1lfTwvaDE+XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV0YWlscyB7IH0iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAnfi9yZXh0JztcblxuQFJvdXRlKCcqJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdEZvdW5kIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGgxPid7dGhpcy5wcm9wcy5wYXJhbXMucm91dGV9JyBkb2Vzbid0IGV4aXN0PC9oMT5cbiAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29tcG9uZW50IH0gZnJvbSAnfi9yZXh0JztcblxuQFJvdXRlKCcvZXhhbXBsZS9zZWFyY2gnKVxuQENvbXBvbmVudCh7XG4gIHZpZXc6ICgpID0+IDxzZWN0aW9uIC8+XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFzaGJvYXJkIHsgfSIsImltcG9ydCB7IFN0b3JlIH0gZnJvbSAnfi9yZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgU3RvcmUoe1xuICBzdG9yZUlkOiAnQ2FyZFN0b3JlJyxcbiAgcHJveHk6IHtcbiAgICB1cmw6ICcvZGF0YS9jYXJkLmpzb24nXG4gIH1cbn0pIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29udGFpbmVyIH0gZnJvbSAnfi9yZXh0JztcblxuQFJvdXRlKCcvJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdldHRpbmdTdGFydGVkIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPENvbnRhaW5lciBjbGFzc05hbWU9XCJtYWluIGNvbnRhaW5lciBzY3JvbGxhYmxlXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwibWItbWRcIj5HZXR0aW5nIFN0YXJ0ZWQ8L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5cbiAgICAgICAgRXh0ZW5zaW9uIFJlYWN0IGlzIGEgbGlicmFyeSB0aGF0IGJ1aWxkIG9uIHRvcCBvZiBSZWFjdCwgaGVscGluZyB5b3UgYnVpbGQgZGF0YS1pbnRlbnNpdmUsIGNyb3NzLXBsYXRmb3JtIHdlYiBhcHBzIGZvciBkZXNrdG9wcywgdGFibGV0cywgYW5kIHNtYXJ0cGhvbmVzLlxuICAgICAgPC9wPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLW1kXCI+UXVpY2sgU3RhcnQ8L2gyPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLW1kXCI+MS4gU2V0dXAgYSBkZXZlbG9wbWVudCBlbnZpcm9tZW50PC9oMz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+VXNlIDxjb2RlPm5wbTwvY29kZT4gb3IgPGNvZGU+eWFybjwvY29kZT4gdG8gaW5zdGFsbCBmb2xsb3dpbmcgZGVwZW5kZW5jaWVzOjwvcD5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtYi1tZFwiPlxuICAgICAgICA8bGk+PGNvZGU+YmFiZWwtcG9seWZpbGw8L2NvZGU+PC9saT5cbiAgICAgICAgPGxpPjxjb2RlPmJhYmVsLXByZXNldC1lbnY8L2NvZGU+PC9saT5cbiAgICAgICAgPGxpPjxjb2RlPmJhYmVsLXByZXNldC1yZWFjdDwvY29kZT48L2xpPlxuICAgICAgICA8bGk+PGNvZGU+ZDM8L2NvZGU+PC9saT5cbiAgICAgICAgPGxpPjxjb2RlPnJlYWN0PC9jb2RlPjwvbGk+XG4gICAgICAgIDxsaT48Y29kZT5yeGpzPC9jb2RlPjwvbGk+XG4gICAgICAgIDxsaT48Y29kZT5leHQtcmVhY3Q8L2NvZGU+PC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwibWItbWRcIj4yLiBDcmVhdGUgYSBuZXcgcHJvamVjdDwvaDM+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlRoZSBmb2xsb3dpbmcgaXMgdGhlIHJlY29tbWVuZGVkIGRpcmVjdG9yeSBzdHJ1Y3R1cmUgZm9yIGFuIEV4dGVuc2lvbiBSZWFjdCBhcHBsaWNhdGlvbjo8L3A+XG4gICAgICA8cHJlIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG4gICAgICAgICstLSBub2RlX21vZHVsZXM6IE5QTSBjb21wb25lbnRzPGJyIC8+XG4gICAgICAgICstLSBkaXN0PGJyIC8+XG4gICAgICAgIHwgICArLS0gYXBwLm1pbi5jc3M8YnIgLz5cbiAgICAgICAgfCAgICstLSBhcHAubWluLmpzPGJyIC8+XG4gICAgICAgIHwgICArLS0gZnJhbWV3b3JrLm1pbi5qczxiciAvPlxuICAgICAgICArLS0gc3JjPGJyIC8+XG4gICAgICAgIHwgICArLS0gY3NzPGJyIC8+XG4gICAgICAgIHwgICB8ICAgKy0tIF92YXJpYWJsZXMuc2NzczogYXBwbGljYXRpb24gc3R5bGVzIGNvbnN0YW50IHZhbHVlczxiciAvPlxuICAgICAgICB8ICAgfCAgICstLSBhcHAuc2NzczogYXBwbGljYXRpb24gc3R5bGVzPGJyIC8+XG4gICAgICAgIHwgICArLS0ganM8YnIgLz5cbiAgICAgICAgfCAgIHwgICArLS0gY29tbW9uOiBjb2RlIG9mIHNoYXJlZCBmdW5jdGlvbnMgb3Igc2hhcmVkIGNvbXBvbmVudHM8YnIgLz5cbiAgICAgICAgfCAgIHwgICArLS0gY29tcG9uZW50czogY29kZSAoc2NyaXB0cyBhbmQgdmlld3MpIG9mIGV2ZXJ5IGZlYXR1cmUgc2hvdWxkIGJlIGEgc3ViLWRpcmVjdG9yeTxiciAvPlxuICAgICAgICB8ICAgfCAgICstLSBzZXJ2aWNlczogY29kZSBvZiBzZXJ2aWNlczxiciAvPlxuICAgICAgICB8ICAgfCAgICstLSBzdG9yZXM6IGNvZGUgb2Ygc3RvcmVzPGJyIC8+XG4gICAgICAgIHwgICB8ICAgKy0tIGFwcC5qczogbWFpbiBzY3JpcHQ8YnIgLz5cbiAgICAgICAgKy0tIGd1bHBmaWxlLmJhYmVsLmpzOiBidWlsZCBzY3JpcHRzIChvciB3ZWJwYWNrLmNvbmZpZy5qcyBpZiB5b3UgcHJlZmVyKTxiciAvPlxuICAgICAgICArLS0gaW5kZXguaHRtbDxiciAvPlxuICAgICAgICArLS0gcGFja2FnZS5qc29uOiBOUE0gcGFja2FnZSBkZWZpbml0aW9uPGJyIC8+XG4gICAgICAgICstLSBzZXJ2ZXIuanM6IGNvZGUgb2YgbG9jYWwgd2ViIHNlcnZlciAoRXhwcmVzc0pTKTxiciAvPlxuICAgICAgPC9wcmU+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPkxldOKAmXMgc3RhcnQgZXZhbHVhdGluZyB0aGUgYXBwbGljYXRpb24gYnkgbG9va2luZyBhdCA8Y29kZT5pbmRleC5odG1sPC9jb2RlPjwvcD5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntgPCEtLSBpbmRleC5odG1sIC0tPlxuPCFET0NUWVBFIGh0bWw+XG48aHRtbD5cbjxoZWFkPlxuPG1ldGEgY2hhcnNldD1cInV0Zi04XCIgLz5cbjxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cbjx0aXRsZT5FeHRlbnNpb24gUmVhY3QgQXBwbGljYXRpb248L3RpdGxlPlxuPGxpbmsgaHJlZj1cIi9ub2RlLW1vZHVsZXMvZXh0LXJlYWN0L2Nzcy9yZXh0Lm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbjwvaGVhZD5cbjxib2R5PlxuPHNjcmlwdCBzcmM9XCJhcHAuanNcIj48L3NjcmlwdD5cbjwvYm9keT5cbjwvaHRtbD5gfVxuICAgICAgPC9wcmU+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlRvIGxhdW5jaCB5b3VyIGFwcCwgYWRkIHRoZSBmb2xsb3dpbmcgdG8geW91ciA8Y29kZT5hcHAuanM8L2NvZGU+IGZpbGU8L3A+XG4gICAgICA8cHJlPlxue2AvLyBhcHAuanNcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZXh0IGZyb20gJ2V4dC1yZWFjdCc7XG5pbXBvcnQgVmlld3BvcnQgZnJvbSAnLi9jb21wb25lbnRzL3ZpZXdwb3J0L3ZpZXdwb3J0JztcblxuUmV4dC5hcHBsaWNhdGlvbih7XG4gIGxhdW5jaDogKCkgPT4gPFZpZXdwb3J0IC8+XG59KTtgfVxuICAgICAgPC9wcmU+XG4gICAgPC9Db250YWluZXI+XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBIYXNoUm91dGVyLCBMaW5rIH0gZnJvbSAnfi9yZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlld3BvcnQoKSB7XG4gIHJldHVybiA8Q29udGFpbmVyPlxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+PGgxPkV4dGVuc2lvbiBSZWFjdDwvaDE+PC9oZWFkZXI+XG4gICAgPENvbnRhaW5lciBsYXlvdXQ9XCJjb2x1bW5cIj5cbiAgICAgIDxhc2lkZSBzdHlsZT17e3dpZHRoOjMwMH19PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyIG5hdlwiPlxuICAgICAgICAgIDxsaT48TGluayB0bz1cIi9cIiB0ZXh0PVwiR0VUVElORyBTVEFSVEVEXCIgLz48L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi10ZXh0XCI+Q09SRSBDT05DRVBUUzwvc3Bhbj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL2NvcmUtY29uY2VwdHMvY29tcG9uZW50XCIgdGV4dD1cIkNvbXBvbmVudFwiIC8+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL2NvcmUtY29uY2VwdHMvc2NyZWVuLW5hdmlnYXRpb25cIiB0ZXh0PVwiU2NyZWVuIE5hdmlnYXRpb25cIiAvPjwvbGk+XG4gICAgICAgICAgICAgIDxsaT48TGluayB0bz1cIi9jb3JlLWNvbmNlcHRzL2RhdGEtcGFja2FnZVwiIHRleHQ9XCJEYXRhIFBhY2thZ2VcIiAvPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL2FyY2hpdGVjdHVyZVwiIHRleHQ9XCJBUkNISVRFQ1RVUkVcIiAvPjwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LXRleHRcIj5VSSBDT01QT05FTlRTPC9zcGFuPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+PExpbmsgdG89XCIvdWktY29tcG9uZW50cy9ncmlkc1wiIHRleHQ9XCJHcmlkc1wiIC8+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvYXNpZGU+XG4gICAgICA8Q29udGFpbmVyPjxIYXNoUm91dGVyIC8+PC9Db250YWluZXI+XG4gICAgPC9Db250YWluZXI+XG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJjb250YWluZXJcIj48cD4mY29weTsgMjAxNyBodXl0cm9uZ25ndXllbjwvcD48L2Zvb3Rlcj5cbiAgPC9Db250YWluZXI+XG4gIC8vIHJldHVybiA8Q29udGFpbmVyIGxheW91dD1cImNvbHVtblwiPlxuICAvLyAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwibmF2XCIgc3R5bGU9e3t3aWR0aDozMDB9fT5cbiAgLy8gICAgIDxoZWFkZXI+XG4gIC8vICAgICAgIDxoMSBjbGFzc05hbWU9XCJicmFuZFwiPkV4dGVuc2lvbiBSZWFjdDwvaDE+XG4gIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG4gIC8vICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXItYXV0b1wiPlxuICAvLyAgICAgICAgIDwvdWw+XG4gIC8vICAgICAgIDwvZGl2PlxuICAvLyAgICAgPC9oZWFkZXI+XG4gIC8vICAgICA8bmF2IGNsYXNzTmFtZT1cIm1iLWF1dG8gZC1mbGV4XCI+XG4gICAgICAgIFxuICAvLyAgICAgPC9uYXY+XG4gIC8vICAgICA8Zm9vdGVyPlxuICAvLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi10ZXh0XCI+JmNvcHk7IDIwMTcgaHV5dHJvbmduZ3V5ZW48L2Rpdj5cbiAgLy8gICAgIDwvZm9vdGVyPlxuICAvLyAgIDwvQ29udGFpbmVyPlxuICAvLyAgIDxDb250YWluZXI+XG4gIC8vICAgICA8SGFzaFJvdXRlciAvPlxuICAvLyAgIDwvQ29udGFpbmVyPlxuICAvLyA8L0NvbnRhaW5lcj5cbn0iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBFeHQgZnJvbSAnfi9jb3JlL2V4dCc7XG5pbXBvcnQgTGlzdCBmcm9tICd+L2NvcmUvbGlzdCc7XG5pbXBvcnQgRGljdGlvbmFyeSBmcm9tICd+L2NvcmUvZGljdGlvbmFyeSc7XG5pbXBvcnQgT2JzZXJ2YWJsZSBmcm9tICd+L3JlYWN0aXZlL29ic2VydmFibGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWcgPT4gQ29udHJvbGxlciA9PiB7XG4gIGNvbnN0IFdyYXBwZWRDb21wb25lbnQgPSBjb25maWcudmlldztcbiAgcmV0dXJuIGNsYXNzIEhvY0NvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICBFeHQuaW5pdGlhbFN0YXRlKHRoaXMsIHtcbiAgICAgICAgc3RvcmVzOiB7fSxcbiAgICAgICAgc2VydmljZXM6IHt9LFxuICAgICAgICBbY29uZmlnLmNvbXBvbmVudEFzIHx8ICckdmlldyddOiBuZXcgQ29udHJvbGxlcihwcm9wcylcbiAgICAgIH0pO1xuICAgICAgdGhpcy5vbkRhdGFDaGFuZ2VkID0gKCkgPT4gdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgIHRoaXMuc2V0U3RvcmVzKExpc3QoY29uZmlnLnN0b3JlcykucmVkdWNlKChzdG9yZXMsIHN0b3JlKSA9PiB7XG4gICAgICAgIHN0b3JlLnN1YnNjcmliZSh0aGlzLm9uRGF0YUNoYW5nZWQpO1xuICAgICAgICBzdG9yZXNbc3RvcmUuc3RvcmVJZF0gPSBzdG9yZTtcbiAgICAgICAgcmV0dXJuIHN0b3JlcztcbiAgICAgIH0sIHt9KSk7XG5cbiAgICAgIHRoaXMuc2V0U2VydmljZXMoTGlzdChjb25maWcuc2VydmljZXMpLnJlZHVjZSgoc2VydmljZXMsIHNlcnZpY2UpID0+IHtcbiAgICAgICAgc2VydmljZXNbc2VydmljZS5zZXJ2aWNlSWRdID0gc2VydmljZTtcbiAgICAgICAgcmV0dXJuIHNlcnZpY2VzO1xuICAgICAgfSwge30pKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gPFdyYXBwZWRDb21wb25lbnQgey4uLnRoaXMuc3RhdGV9IHsuLi50aGlzLnByb3BzfSAvPjtcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEV4dCBmcm9tICd+L2NvcmUvZXh0JztcblxuY29uc3QgTEFZT1VUX0NMQVNTID0ge1xuICAnY29sdW1uJzogJ2ZsZXgtcm93JyxcbiAgJ3Jvdyc6ICdmbGV4LWNvbHVtbicsXG4gICdmaXQnOiAnJyxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENvbnRhaW5lcih7IGNsYXNzTmFtZSA9ICcnLCBsYXlvdXQgPSAncm93JywgY2hpbGRyZW4sIC4uLm90aGVycyB9KSB7XG4gIHJldHVybiA8c2VjdGlvbiBjbGFzc05hbWU9e0V4dC5jbGFzc05hbWUoJ2QtZmxleCcsIExBWU9VVF9DTEFTU1tsYXlvdXRdLCBjbGFzc05hbWUpfSB7Li4ub3RoZXJzfT57Y2hpbGRyZW59PC9zZWN0aW9uPlxufSIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IEV4dCBmcm9tICd+L2NvcmUvZXh0JztcbmltcG9ydCBMaXN0IGZyb20gJ34vY29yZS9saXN0Jztcbi8vIGltcG9ydCBPYnNlcnZhYmxlIGZyb20gJ34vcmVhY3RpdmUvb2JzZXJ2YWJsZSc7XG5cbmNvbnN0IFJPVVRFUyA9IHt9LFxuICAgICAgZ2V0Um91dGUgPSAoKSA9PiB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSkgfHwgJy8nLFxuICAgICAgZ2V0Um91dGVQYXRoID0gcm91dGUgPT4gcm91dGUuc3BsaXQoJy8nKTtcblxuZXhwb3J0IGZ1bmN0aW9uIFJvdXRlKHJvdXRlKSB7XG4gIHJldHVybiBjb21wID0+IHtcbiAgICBST1VURVNbcm91dGVdID0ge1xuICAgICAgcm91dGUsXG4gICAgICBjb21wLFxuICAgICAgcGF0aDogZ2V0Um91dGVQYXRoKHJvdXRlKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gTGluayh7IHRvLCBjbGFzc05hbWUgPSAnJywgYWN0aXZlQ2xhc3NOYW1lID0gJ2FjdGl2ZScsIHRleHQsIGNoaWxkcmVuLCAuLi5vdGhlcnMgfSkge1xuICByZXR1cm4gPGEgaHJlZj17YCMke3RvfWB9IGNsYXNzTmFtZT17RXh0LmNsYXNzTmFtZSgnbmF2LWxpbmsnLCBjbGFzc05hbWUsIHsgW2FjdGl2ZUNsYXNzTmFtZV06IHRvID09PSBnZXRSb3V0ZSgpIH0pfSB7Li4ub3RoZXJzfT5cbiAgICB7dGV4dCB8fCBjaGlsZHJlbn1cbiAgPC9hPlxufVxuXG5leHBvcnQgY2xhc3MgSGFzaFJvdXRlciBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBFeHQuaW5pdGlhbFN0YXRlKHRoaXMsIG1hdGNoUGF0aCgpKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICghd2luZG93LmxvY2F0aW9uLmhhc2gpICYmICh3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcvJyk7XG4gICAgT2JzZXJ2YWJsZS5mcm9tRXZlbnQod2luZG93LCAnaGFzaGNoYW5nZScpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnNldFN0YXRlKG1hdGNoUGF0aCgpKSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZSwgY29tcCwgcGFyYW1zIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKCFjb21wKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdDb21wb25lbnQgbm90IGZvdW5kIScpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29tcCwgeyByb3V0ZSwgcGFyYW1zIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hdGNoUGF0aCgpIHtcbiAgY29uc3QgY3VycmVudFJvdXRlID0gZ2V0Um91dGUoKSxcbiAgICAgICAgcGFyYW1zID0geyByb3V0ZTogY3VycmVudFJvdXRlIH07XG5cbiAgLy8gYmFzaWMgcm91dGUgKHdpdGhvdXQgcGFyYW1zKVxuICBpZiAoUk9VVEVTW2N1cnJlbnRSb3V0ZV0pIHtcbiAgICByZXR1cm4geyByb3V0ZTogY3VycmVudFJvdXRlLCBjb21wOiBST1VURVNbY3VycmVudFJvdXRlXS5jb21wLCBwYXJhbXMgfTtcbiAgfVxuXG4gIC8vIGFkdmFuY2VkIHJvdXRlICh3aXRoIHBhcmFtcylcbiAgY29uc3QgY3VycmVudFBhdGggPSBnZXRSb3V0ZVBhdGgoY3VycmVudFJvdXRlKTtcbiAgZm9yKGxldCByb3V0ZSBpbiBST1VURVMpIHtcbiAgICBjb25zdCBtYXBSb3V0ZSA9IFJPVVRFU1tyb3V0ZV0sXG4gICAgICAgICAgcm91dGVQYXRoID0gbWFwUm91dGUucGF0aDtcblxuICAgIGxldCBtYXRjaGVkID0gdHJ1ZTtcbiAgICBMaXN0KG1hcFJvdXRlLnBhdGgpLmVhY2goKHJvdXRlTmFtZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChyb3V0ZU5hbWUgIT09IGN1cnJlbnRQYXRoW2luZGV4XSkge1xuICAgICAgICBpZiAocm91dGVOYW1lLnN0YXJ0c1dpdGgoJzonKSkgeyAvLyBkZXRlY3QgcGFyYW0gdmFsdWVcbiAgICAgICAgICBwYXJhbXNbcm91dGVOYW1lLnN1YnN0cmluZygxKV0gPSBjdXJyZW50UGF0aFtpbmRleF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWF0Y2hlZCA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKG1hdGNoZWQpIHtcbiAgICAgIHJldHVybiB7IHJvdXRlOiBjdXJyZW50Um91dGUsIGNvbXA6IG1hcFJvdXRlLmNvbXAsIHBhcmFtcyB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIHdpdGggbm90IGZvdW5kIHNjcmVlblxuICBpZiAoUk9VVEVTWycqJ10pIHtcbiAgICByZXR1cm4geyByb3V0ZTogY3VycmVudFJvdXRlLCBjb21wOiBST1VURVNbJyonXS5jb21wLCBwYXJhbXMgfTtcbiAgfVxuXG4gIC8vIHdpdGhvdXQgbm90IGZvdW5kIHNjcmVlblxuICByZXR1cm4geyByb3V0ZTogY3VycmVudFJvdXRlLCBjb21wOiBudWxsLCBwYXJhbXMgfTtcbn0iLCJpbXBvcnQgTGlzdCBmcm9tICcuL2xpc3QnO1xuXG5leHBvcnQgY2xhc3MgRGljdGlvbmFyeSB7XG4gIGNvbnN0cnVjdG9yKGtleVZhbHVlcykge1xuICAgIHRoaXMuZGF0YSA9IHt9O1xuICAgIGlmIChrZXlWYWx1ZXMgJiYga2V5VmFsdWVzLmxlbmd0aCkge1xuICAgICAgdGhpcy5kYXRhID0gT2JqZWN0LmFzc2lnbih7fSwga2V5VmFsdWVzKTtcbiAgICB9XG5cbiAgICB0aGlzLmtleXMgPSAoKSA9PiBMaXN0KE9iamVjdC5rZXlzKHRoaXMuZGF0YSkpO1xuICAgIHRoaXMudmFsdWVzID0gKCkgPT4gTGlzdChPYmplY3QudmFsdWVzKHRoaXMuZGF0YSkpO1xuICB9XG5cbiAgZWFjaChpdGVyYXRlZSkge1xuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmRhdGEpIHtcbiAgICAgIGl0ZXJhdGVlKHRoaXMuZGF0YVtrZXldLCBrZXksIHRoaXMuZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChrZXlWYWx1ZXMpID0+IG5ldyBEaWN0aW9uYXJ5KGtleVZhbHVlcyk7IiwiaW1wb3J0IHsgTGlzdCB9IGZyb20gJy4vbGlzdCc7XG5cbmNsYXNzIERPTSBleHRlbmRzIExpc3Qge1xuICBzaG93KCkge1xuICAgIHRoaXMuZGF0YS5lYWNoKHNlbGVjdG9yID0+IHNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snKTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgdGhpcy5kYXRhLmVhY2goc2VsZWN0b3IgPT4gc2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJyk7XG4gIH1cblxuICAvLyBwYXJlbnQoKSB7XG4gIC8vICAgdGhpcy5jb21wID0gdGhpcy5jb21wLnBhcmVudEVsZW1lbnQ7XG4gIC8vICAgcmV0dXJuIHRoaXM7XG4gIC8vIH1cblxuICAvLyB3aWR0aCgpIHtcbiAgLy8gICByZXR1cm4gdGhpcy5jb21wLmNsaWVudFdpZHRoO1xuICAvLyB9XG5cbiAgLy8gaGVpZ2h0KCkge1xuICAvLyAgIHJldHVybiB0aGlzLmNvbXAuY2xpZW50SGVpZ2h0O1xuICAvLyB9XG5cbiAgLy8gZmluZChzZWxlY3Rvcikge1xuICAvLyAgIHJldHVybiB0aGlzLmNvbXAucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIC8vIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2VsZWN0b3IgPT4gRE9NLmdldEVsKHNlbGVjdG9yKTsiLCJleHBvcnQgY2xhc3MgRXh0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ET00gPSByZXF1aXJlKCcuL2RvbScpLmRlZmF1bHQ7XG4gICAgdGhpcy5TdHJpbmcgPSByZXF1aXJlKCcuL3N0cmluZycpLmRlZmF1bHQ7XG4gICAgdGhpcy5MaXN0ID0gcmVxdWlyZSgnLi9saXN0JykuZGVmYXVsdDtcbiAgICB0aGlzLk1hcCA9IHJlcXVpcmUoJy4vZGljdGlvbmFyeScpLmRlZmF1bHQ7XG5cbiAgICB0aGlzLlNDUk9MTF9XSURUSCA9IHRoaXMuZ2V0U2Nyb2xsV2lkdGgoKTtcbiAgICB0aGlzLkJPUkRFUl9XSURUSCA9IDI7XG4gICAgdGhpcy5DSEVDS19DT0xVTU5fV0lEVEggPSAzMztcbiAgICB0aGlzLlVOS05PV05fRVJST1JfTVNHID0gJ0FuIHVua25vd24gZXJyb3IgaGFzIG9jY3VycmVkLic7XG5cbiAgICB0aGlzLmlzUHJpbWl0aXZlID0gdmFsdWUgPT4geyBjb25zdCB0eXBlID0gdHlwZW9mIHZhbHVlOyByZXR1cm4gdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZSA9PT0gJ251bWJlcicgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nOyB9XG4gICAgdGhpcy5pc1N0cmluZyA9IHZhbHVlID0+ICh0eXBlb2YgdmFsdWUpID09PSAnc3RyaW5nJztcbiAgICB0aGlzLmlzRnVuY3Rpb24gPSB2YWx1ZSA9PiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICB0aGlzLmlzT2JqZWN0ID0gdmFsdWUgPT4gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xuICAgIHRoaXMuaXNBcnJheSA9IHZhbHVlID0+IHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nO1xuXG4gICAgdGhpcy5jbG9uZSA9IG9iaiA9PiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpOyAvLyBkZWVwIGNsb25lXG4gIH1cblxuICBleHRlbmQoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24uYXBwbHkobnVsbCwgYXJndW1lbnRzKTsgLy8gaW1tdXRhYmxlIG9iamVjdFxuICB9XG5cbiAgaW5pdGlhbFN0YXRlKGNvbXAsIHN0YXRlKSB7XG4gICAgaWYgKCFjb21wIHx8ICFzdGF0ZSkgeyByZXR1cm47IH1cbiAgICBjb21wLnN0YXRlID0gc3RhdGU7XG4gICAgZm9yIChsZXQgZmllbGQgb2YgT2JqZWN0LmtleXMoc3RhdGUpKSB7XG4gICAgICBjb21wW2BzZXQke3RoaXMuU3RyaW5nLmNhcGl0YWxpemUoZmllbGQpfWBdID0gdmFsdWUgPT4gY29tcC5zZXRTdGF0ZSh7IFtmaWVsZF06IHZhbHVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNsYXNzTmFtZSguLi5leHByZXNzaW9ucykge1xuICAgIGNvbnN0IGNscyA9IFtdO1xuXG4gICAgdGhpcy5MaXN0KGV4cHJlc3Npb25zKS5lYWNoKGV4cCA9PiB7XG4gICAgICBpZiAoIWV4cCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZXhwID09PSAnc3RyaW5nJykge1xuICAgICAgICBjbHMucHVzaChleHApO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzT2JqZWN0KGV4cCkpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGV4cCkge1xuICAgICAgICAgIGlmIChleHBba2V5XSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY2xzLnB1c2goa2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY2xzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIC8vI3JlZ2lvbiBET01cbiAgY3JlYXRlRWxlbWVudChodG1sKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmlubmVySFRNTCA9IGh0bWw7XG4gICAgcmV0dXJuIGRpdi5jaGlsZHJlblswXTtcbiAgfVxuXG4gIGdldFNjcm9sbFdpZHRoKCkge1xuICAgIGNvbnN0IG91dGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCc8ZGl2IHN0eWxlPVwidmlzaWJpbGl0eTogaGlkZGVuOyB3aWR0aDogMTAwcHg7IG92ZXJmbG93OiBzY3JvbGw7XCI+PC9kaXY+Jyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdXRlcik7XG4gICAgY29uc3Qgd2lkdGhOb1Njcm9sbCA9IG91dGVyLm9mZnNldFdpZHRoO1xuXG4gICAgLy8gYWRkIGlubmVyZGl2XG4gICAgY29uc3QgaW5uZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJzxkaXYgc3R5bGU9XCJ3aWR0aDogMTAwJTtcIj48L2Rpdj4nKTtcbiAgICBvdXRlci5hcHBlbmRDaGlsZChpbm5lcik7XG4gICAgY29uc3Qgd2lkdGhXaXRoU2Nyb2xsID0gaW5uZXIub2Zmc2V0V2lkdGg7XG5cbiAgICAvLyByZW1vdmUgZGl2c1xuICAgIG91dGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob3V0ZXIpO1xuXG4gICAgcmV0dXJuIHdpZHRoTm9TY3JvbGwgLSB3aWR0aFdpdGhTY3JvbGw7XG4gIH1cbiAgLy8jZW5kcmVnaW9uXG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBFeHQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmQodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKSB7XG4gIGNvbnN0IGZuID0gZGVzY3JpcHRvci52YWx1ZTtcblxuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBAYmluZCBkZWNvcmF0b3IgaXMgb25seSBhcHBsaWVkIHRvIGZ1bmN0aW9ucyBub3Q6ICR7dHlwZW9mIGZufWApO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0KCkge1xuICAgICAgcmV0dXJuIGZuLmJpbmQodGhpcyk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCA9IDUwMCkge1xuICBsZXQgdGltZW91dDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLFxuICAgICAgICAgIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgICAgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgICAgfVxuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgfVxufSIsImV4cG9ydCBjbGFzcyBMaXN0IHtcbiAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoKSB7XG4gICAgICB0aGlzLmRhdGEgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbGxlY3QgPSAoKSA9PiB0aGlzLmRhdGE7XG4gICAgdGhpcy5jb3VudCA9ICgpID0+IHRoaXMuZGF0YS5sZW5ndGg7XG4gICAgdGhpcy5nZXRBdCA9IGluZGV4ID0+IHRoaXMuZGF0YVtpbmRleF07XG4gICAgdGhpcy5hZGQgPSBpdGVtID0+IHRoaXMuZGF0YS5wdXNoKGl0ZW0pO1xuICAgIHRoaXMuaW5zZXJ0ID0gKGl0ZW0sIGluZGV4ID0gMCkgPT4gdGhpcy5kYXRhLnNwbGljZShpbmRleCwgMCwgaXRlbSk7XG4gICAgdGhpcy5yZW1vdmVBdCA9IChpbmRleCwgY291bnQgPSAxKSA9PiB0aGlzLmRhdGEuc3BsaWNlKGluZGV4LCBjb3VudCk7XG4gICAgdGhpcy5qb2luID0gc2VwYXJhdG9yID0+IHRoaXMuZGF0YS5qb2luKHNlcGFyYXRvcik7XG4gIH1cblxuICBlYWNoKGl0ZXJhdGVlKSB7XG4gICAgZm9yIChsZXQgaW5kZXggaW4gdGhpcy5kYXRhKSB7XG4gICAgICBpdGVyYXRlZSh0aGlzLmRhdGFbaW5kZXhdLCBpbmRleCwgdGhpcy5kYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBmaWx0ZXIocHJlZGljYXRlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgdGhpcy5lYWNoKChpdGVtLCBpbmRleCwgYXJyYXkpID0+IHtcbiAgICAgIGlmIChwcmVkaWNhdGUoaXRlbSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgICByZXN1bHQucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbmV3IExpc3QocmVzdWx0KTtcbiAgfVxuXG4gIG1hcChpdGVyYXRlZSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIHRoaXMuZWFjaCgoaXRlbSwgaW5kZXgsIGFycmF5KSA9PiByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaXRlbSwgaW5kZXgsIGFycmF5KSk7XG4gICAgcmV0dXJuIG5ldyBMaXN0KHJlc3VsdCk7XG4gIH1cblxuICByZWR1Y2UoaXRlcmF0ZWUsIGFjY3VtdWxhdG9yKSB7XG4gICAgdGhpcy5lYWNoKChpdGVtLCBpbmRleCwgYXJyYXkpID0+IGFjY3VtdWxhdG9yID0gaXRlcmF0ZWUoYWNjdW11bGF0b3IsIGl0ZW0sIGluZGV4LCBhcnJheSkpO1xuICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgfVxuXG4gIGZpbmRJbmRleChwcmVkaWNhdGUpIHtcbiAgICBsZXQgZm91bmRBdCA9IC0xO1xuICAgIGZvciAobGV0IGluZGV4IGluIHRoaXMuZGF0YSkge1xuICAgICAgaWYgKHByZWRpY2F0ZShpdGVtLCBpbmRleCwgdGhpcy5kYXRhKSkge1xuICAgICAgICBmb3VuZEF0ID0gaW5kZXg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZm91bmRBdDtcbiAgfVxuXG4gIGZpbmQocHJlZGljYXRlKSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5maW5kSW5kZXgocHJlZGljYXRlKTtcbiAgICByZXR1cm4gaW5kZXggPiAtMSA/IHRoaXMuZGF0YVtpbmRleF0gOiBudWxsO1xuICB9XG5cbiAgY29udGFpbnMocHJlZGljYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMuZmluZChwcmVkaWNhdGUpICE9PSBudWxsO1xuICB9XG5cbiAgcmVtb3ZlSWYocHJlZGljYXRlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgdGhpcy5lYWNoKChpdGVtLCBpbmRleCwgYXJyYXkpID0+IHtcbiAgICAgIGlmICghcHJlZGljYXRlKGl0ZW0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5kYXRhID0gcmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh2YWx1ZSkgPT4gbmV3IExpc3QodmFsdWUpOyIsImNsYXNzIFN0cmluZyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FwaXRhbGl6ZSA9IHZhbHVlID0+IHZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSk7XG4gIH1cblxuICBodG1sRW5jb2RlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoLyYvZywgJyZhbXA7JylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csICcmIzM5OycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbiAgfVxuXG4gIGh0bWxEZWNvZGUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvJmFtcDsvZywgJycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLyZsdDsvZywgJzwnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8mZ3Q7Pi9nLCAnPicpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLyYjMzk7L2csIFwiJ1wiKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8mcXVvdDsvZywgJ1wiJyk7XG4gIH1cblxuICB0b1F1ZXJ5U3RyaW5nKHBhcmFtcywgc2VwLCBlbmNvZGUpIHtcbiAgICBzZXAgICAgPSBzZXAgPT09IHVuZGVmaW5lZCA/ICcmJyA6IHNlcDtcbiAgICBlbmNvZGUgPSBlbmNvZGUgPT09IGZhbHNlID8gZnVuY3Rpb24ocykgeyByZXR1cm4gczsgfSA6IGVuY29kZVVSSUNvbXBvbmVudDtcblxuICAgIGxldCBwYWlycyA9IFtdO1xuICAgIGZvciAobGV0IGtleSBpbiBwYXJhbXMpIHtcbiAgICAgIHBhaXJzLnB1c2goYCR7a2V5fT0ke2VuY29kZShwYXJhbXNba2V5XSl9YCk7XG4gICAgfVxuICAgIHJldHVybiBwYWlycy5qb2luKHNlcCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFN0cmluZygpOyIsImltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IExpc3QgfSBmcm9tICd+L2NvcmUvbGlzdCc7XG5pbXBvcnQgTW9kZWwgZnJvbSAnLi9tb2RlbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFic3RyYWN0U3RvcmUgZXh0ZW5kcyBMaXN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8vI3JlZ2lvbiBjb25maWdzXG4gICAgdGhpcy50b3RhbENvdW50ID0gMDtcbiAgICB0aGlzLnBhZ2VTaXplID0gMDtcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gMTtcbiAgICB0aGlzLnN1YmplY3QgPSBuZXcgU3ViamVjdCgpO1xuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgLy8jcmVnaW9uIHByb3BlcnRpZXNcbiAgICAvLyNlbmRyZWdpb25cblxuICAgIC8vI3JlZ2lvbiBtZXRob2RzXG4gICAgdGhpcy5jcmVhdGVSZWNvcmQgPSByZWNvcmQgPT4gbmV3IE1vZGVsKHJlY29yZCwgdGhpcyk7XG4gICAgdGhpcy5nZXRSZWNvcmRzID0gdGhpcy5jb2xsZWN0O1xuICAgIHRoaXMuZ2V0TW9kaWZpZWRSZWNvcmRzID0gKCkgPT4gdGhpcy5maWx0ZXIocmVjb3JkID0+IHJlY29yZC5pc01vZGlmaWVkKCkpO1xuICAgIHRoaXMuZ2V0TmV3UmVjb3JkcyA9ICgpID0+IHRoaXMuZmlsdGVyKHJlY29yZCA9PiByZWNvcmQuaXNOZXdseUNyZWF0ZWQoKSk7XG4gICAgdGhpcy5zdWJzY3JpYmUgPSBvYnNlcnZlciA9PiB0aGlzLnN1YmplY3Quc3Vic2NyaWJlKHsgbmV4dDogdmFsdWUgPT4gb2JzZXJ2ZXIodmFsdWUpIH0pO1xuICAgIHRoaXMuZmlyZUV2ZW50ID0gKCkgPT4gdGhpcy5zdWJqZWN0Lm5leHQodGhpcyk7XG4gICAgLy8jZW5kcmVnaW9uXG4gIH1cblxuICBjbGVhckRhdGEoc2lsZW50ID0gZmFsc2UpIHtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICAhc2lsZW50ICYmIHRoaXMuZmlyZUV2ZW50KCk7XG4gIH1cblxuICBsb2FkRGF0YShkYXRhKSB7XG4gICAgdGhpcy5jbGVhckRhdGEodHJ1ZSk7XG4gICAgdGhpcy5kYXRhID0gKG5ldyBMaXN0KGRhdGEpKS5tYXAodGhpcy5jcmVhdGVSZWNvcmQuYmluZCh0aGlzKSkuY29sbGVjdCgpO1xuICAgIHRoaXMuZmlyZUV2ZW50KCk7XG4gIH1cblxuICBjb21taXRDaGFuZ2VzKCkge1xuICAgIHRoaXMuZmlsdGVyKHJlY29yZCA9PiByZWNvcmQuaXNNb2RpZmllZCgpIHx8IHJlY29yZC5pc05ld2x5Q3JlYXRlZCgpKS5lYWNoKHJlY29yZCA9PiByZWNvcmQuc2F2ZSgpKTtcbiAgICB0aGlzLmZpcmVFdmVudCgpO1xuICB9XG5cbiAgcmVqZWN0Q2hhbmdlcygpIHtcbiAgICB0aGlzLmZpbHRlcihyZWNvcmQgPT4gcmVjb3JkLmlzTW9kaWZpZWQoKSkuZWFjaChyZWNvcmQgPT4gcmVjb3JkLnJlamVjdCh0cnVlKSk7XG4gICAgdGhpcy5kYXRhID0gdGhpcy5maWx0ZXIocmVjb3JkID0+ICFyZWNvcmQuaXNOZXdseUNyZWF0ZWQoKSkuY29sbGVjdCgpO1xuICAgIHRoaXMuZmlyZUV2ZW50KCk7XG4gIH1cbn0iLCJpbXBvcnQgRXh0IGZyb20gJ34vY29yZS9leHQnO1xuaW1wb3J0IExpc3QgZnJvbSAnfi9jb3JlL2xpc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKGRhdGEsIHN0b3JlKSB7XG4gICAgLy8jcmVnaW9uIGNvbmZpZ3NcbiAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgLy8jZW5kcmVnaW9uXG5cbiAgICAvLyNyZWdpb24gcHJvcGVydGllc1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5zdG9yZSA9IHN0b3JlO1xuICAgIHRoaXMuaWRQcm9wZXJ0eSA9IChzdG9yZSAmJiBzdG9yZS5pZFByb3BlcnR5KSA/IHN0b3JlLmlkUHJvcGVydHkgOiAnaWQnO1xuICAgIGNvbnN0IGZpZWxkQ29uZmlnID0gKHN0b3JlICYmIHN0b3JlLmZpZWxkcykgPyBzdG9yZS5maWVsZHMgOiBbXTtcbiAgICB0aGlzLmZpZWxkcyA9IExpc3QoZmllbGRDb25maWcpLm1hcChmaWVsZCA9PiBFeHQuaXNTdHJpbmcoZmllbGQpID8gKHsgbmFtZTogZmllbGQsIHR5cGU6ICdzdHJpbmcnIH0pIDogZmllbGQpO1xuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgLy8jcmVnaW9uIG1ldGhvZHNcbiAgICB0aGlzLmdldERhdGEgPSAoKSA9PiB0aGlzLmRhdGE7XG4gICAgdGhpcy5nZXQgPSBmaWVsZE5hbWUgPT4gdGhpcy5kYXRhW2ZpZWxkTmFtZV07XG4gICAgLy8jZW5kcmVnaW9uXG5cbiAgICB0aGlzLnNhdmUoKTtcbiAgfVxuXG4gIHNldChmaWVsZE5hbWUsIG5ld1ZhbHVlLCBzaWxlbnQpIHtcbiAgICB0aGlzLmRhdGFbZmllbGROYW1lXSA9IG5ld1ZhbHVlO1xuICAgIHRoaXMubW9kaWZpZWQgPSAhdGhpcy5pc0VxdWFsKGZpZWxkTmFtZSk7XG4gICAgKCFzaWxlbnQgJiYgdGhpcy5zdG9yZSkgJiYgKHRoaXMuc3RvcmUuZmlyZUV2ZW50KCkpO1xuICB9XG5cbiAgc2F2ZSgpIHtcbiAgICB0aGlzLnBoYW50b20gPSBFeHQuY2xvbmUodGhpcy5kYXRhKTtcbiAgICB0aGlzLm1vZGlmaWVkID0gZmFsc2U7XG4gIH1cblxuICByZWplY3Qoc2lsZW50KSB7XG4gICAgdGhpcy5kYXRhID0gRXh0LmNsb25lKHRoaXMucGhhbnRvbSk7XG4gICAgdGhpcy5zYXZlKCk7XG4gICAgKCFzaWxlbnQgJiYgdGhpcy5zdG9yZSkgJiYgKHRoaXMuc3RvcmUuZmlyZUV2ZW50KCkpO1xuICB9XG5cbiAgaXNFcXVhbChmaWVsZCkge1xuICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpcy5waGFudG9tW2ZpZWxkLm5hbWVdLFxuICAgICAgICAgIG5ld1ZhbHVlID0gdGhpcy5kYXRhW2ZpZWxkLm5hbWVdO1xuXG4gICAgcmV0dXJuIGZpZWxkLmVxdWFscyA/IGZpZWxkLmVxdWFscyhuZXdWYWx1ZSwgb2xkVmFsdWUpIDogbmV3VmFsdWUgPT09IG9sZFZhbHVlO1xuICB9XG5cbiAgaXNNb2RpZmllZChmaWVsZE5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RpZmllZCAmJiAhdGhpcy5waGFudG9tW3RoaXMuaWRQcm9wZXJ0eV07IC8vIHNob3VsZCBub3QgZGV0ZWN0IG5ldyByZWNvcmQgYXMgYSBtb2RpZmllZCByZWNvcmRcbiAgfVxuXG4gIGlzTmV3bHlDcmVhdGVkKCkge1xuICAgIHJldHVybiAhdGhpcy5waGFudG9tW3RoaXMuaWRQcm9wZXJ0eV07XG4gIH1cblxuICBzZXRTZWxlY3RlZChzZWxlY3RlZCwgc2lsZW50KSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgICghc2lsZW50ICYmIHRoaXMuc3RvcmUpICYmICh0aGlzLnN0b3JlLmZpcmVFdmVudCgpKTtcbiAgfVxufSIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCBFeHQgZnJvbSAnfi9jb3JlL2V4dCc7XG4vLyBpbXBvcnQgQWpheCBmcm9tICcuL2FqYXgnO1xuaW1wb3J0IEFic3RyYWN0U3RvcmUgZnJvbSAnLi9hYnN0cmFjdC1zdG9yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3h5U3RvcmUgZXh0ZW5kcyBBYnN0cmFjdFN0b3JlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8vI3JlZ2lvbiBjb25maWdzXG4gICAgdGhpcy5wcm94eSA9IHtcbiAgICAgIHJlYWRlcjoge30sXG4gICAgICB3cml0ZXI6IHt9XG4gICAgfTtcbiAgICAvLyNlbmRyZWdpb25cbiAgfVxuXG4gIGxvYWQoKSB7XG4gICAgbGV0IHsgdXJsLCBtZXRob2QgPSAnZ2V0JywgcmVzcG9uc2VUeXBlID0gJ2pzb24nLCBwYXJhbXMgfSA9IHRoaXMucHJveHk7XG4gICAgKG1ldGhvZCA9PT0gJ2dldCcgJiYgcGFyYW1zKSAmJiAodXJsID0gYCR7dXJsfT8ke1N0cmluZy50b1F1ZXJ5U3RyaW5nKHBhcmFtcyl9YCk7XG4gICAgT2JzZXJ2YWJsZS5hamF4KHtcbiAgICAgIHVybCxcbiAgICAgIG1ldGhvZCxcbiAgICAgIHJlc3BvbnNlVHlwZSxcbiAgICAgIGJvZHk6IG1ldGhvZCA9PT0gJ3Bvc3QnICYmIHBhcmFtc1xuICAgIH0pXG4gICAgLm1hcCh2YWx1ZSA9PiB2YWx1ZS5yZXNwb25zZSlcbiAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnN0IHsgcmVhZGVyOiB7IHJvb3RQcm9wZXJ0eSwgdG90YWxQcm9wZXJ0eSB9ID0ge30gfSA9IHRoaXMucHJveHk7XG4gICAgICB0aGlzLmxvYWREYXRhKHJvb3RQcm9wZXJ0eSA/IHJlc3BvbnNlW3Jvb3RQcm9wZXJ0eV0gOiByZXNwb25zZSk7XG4gICAgICB0aGlzLnRvdGFsQ291bnQgPSAodGhpcy5wYWdlU2l6ZSAmJiB0b3RhbFByb3BlcnR5KSA/IHJlc3BvbnNlW3RvdGFsUHJvcGVydHldIDogdGhpcy5jb3VudCgpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gbG9hZFBhZ2UocGFnZSkge1xuICAvLyAgIHRoaXMuY3VycmVudFBhZ2UgPSBwYWdlO1xuICAvLyAgIHRoaXMucHJveHkucGFyYW1zID0gRXh0LmV4dGVuZCh7fSwgdGhpcy5wcm94eS5wYXJhbXMsIHsgcGFnZTogdGhpcy5jdXJyZW50UGFnZSwgc2l6ZTogdGhpcy5wYWdlU2l6ZSB9KTtcbiAgLy8gICByZXR1cm4gdGhpcy5sb2FkKHt9KTtcbiAgLy8gfVxuXG4gIC8vIGFzeW5jIHN5bmMoeyBkb25lLCBmYWlsLCBhbHdheXMgfSkge1xuICAvLyAgIHRoaXMucHJveHkubWV0aG9kID0gJ3Bvc3QnO1xuICAvLyAgIHRoaXMucHJveHkucGFyYW1zID0gdGhpcy5nZXRNb2RpZmllZFJlY29yZHMoKS5tYXAocmVjb3JkID0+IHJlY29yZC5kYXRhKS5jb2xsZWN0KCk7XG4gIC8vICAgdGhpcy5wcm94eS5wcm94eS5wYXJhbXMucHVzaCguLi50aGlzLmdldE5ld1JlY29yZHMoKS5tYXAocmVjb3JkID0+IHJlY29yZC5kYXRhKS5jb2xsZWN0KCkpO1xuICAvLyAgIGNvbnN0IHsgdHJhbnNmb3JtIH0gPSBwcm94eS53cml0ZXI7XG4gIC8vICAgdHJhbnNmb3JtICYmICh0aGlzLnByb3h5LnBhcmFtcyA9IHRyYW5zZm9ybSh0aGlzLnByb3h5LnBhcmFtcykpO1xuICAvLyAgIE9ic2VydmFibGUuYWpheCh0aGlzLnByb3h5KS5zdWJzY3JpYmUoe1xuICAvLyAgICAgbmV4dDogZG9uZSxcbiAgLy8gICAgIGVycm9yOiBmYWlsLFxuICAvLyAgICAgY29tcGxldGU6IGFsd2F5c1xuICAvLyAgIH0pO1xuICAvLyB9XG59IiwiaW1wb3J0IEV4dCBmcm9tICd+L2NvcmUvZXh0JztcbmltcG9ydCBQcm94eVN0b3JlIGZyb20gJy4vcHJveHktc3RvcmUnO1xuXG5jbGFzcyBTdG9yZSBleHRlbmRzIFByb3h5U3RvcmUge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcigpO1xuICAgIEV4dC5leHRlbmQodGhpcywgY29uZmlnKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25maWcgPT4gbmV3IFN0b3JlKGNvbmZpZyk7IiwiaW1wb3J0IEV4dCBmcm9tICd+L2NvcmUvZXh0JztcblxuY2xhc3MgQWpheE9ic2VydmFibGUge1xuICBjb25zdHJ1Y3Rvcih1cmxPclJlcXVlc3QpIHtcbiAgICB0aGlzLnJlcXVlc3QgPSBFeHQuZXh0ZW5kKHtcbiAgICAgIHVybDogJycsXG4gICAgICBwYXJhbXM6ICcnLFxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04JyxcbiAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgfSwgRXh0LmlzU3RyaW5nKHVybE9yUmVxdWVzdCkgPyB7IHVybDogdXJsT3JSZXF1ZXN0IH0gOiB1cmxPclJlcXVlc3QpO1xuXG4gICAgdGhpcy5wcm9taXNlID0gcmVxdWVzdCA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmNyZWF0ZVJlcXVlc3QocmVxdWVzdCwgKGVycm9yLCByZXNwb25zZSkgPT4gZXJyb3IgPyByZWplY3QoZXJyb3IpIDogcmVzb2x2ZShyZXNwb25zZSkpO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgc3Vic2NyaWJlKHsgbmV4dCwgZXJyb3IsIGNvbXBsZXRlIH0pIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHJlc3BvbnNlO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnByb21pc2UoeyB1cmwsIGNvbnRlbnRUeXBlLCBtZXRob2QsIHBhcmFtcyB9KTtcbiAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYENhbm5vdCBnZXQgcmVzcG9uc2UgZnJvbSBzZXJ2ZXIgZm9yIHVybCBbJHt1cmx9XSBjYXVzZWQgYnk6ICR7ZXh9YCk7XG4gICAgICAgIGVycm9yICYmIGVycm9yKGV4KTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXh0ID8gbmV4dChyZXNwb25zZSkgOiByZXNwb25zZTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgY29tcGxldGUgJiYgY29tcGxldGUoKTtcbiAgICB9XG4gIH1cblxuICBzZW5kKHsgdXJsLCBjb250ZW50VHlwZSwgbWV0aG9kLCBwYXJhbXMgfSwgZG9uZSkge1xuICAgIChtZXRob2QgPT09ICdnZXQnICYmIHBhcmFtcykgJiYgKHVybCA9IGAke3VybH0/JHtTdHJpbmcudG9RdWVyeVN0cmluZyhwYXJhbXMpfWApO1xuICAgIGNvbnN0IHhociA9IEV4dC5YSFI7XG4gICAgeGhyLm9wZW4obWV0aG9kLCB1cmwsIHRydWUpO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCBjb250ZW50VHlwZSk7XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgIGlmKHhoci5yZWFkeVN0YXRlID09PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XG4gICAgICAgIC8vIGFqYXggd2lsbCByZXR1cm4gYXMgYSBqc29uIGJ5IGRlZmF1bHQsIGlmIHBhcnNlciBlcnJvciB0aGVuIGl0IHdpbGwgcmV0dXJuIGEgcmF3IHN0cmluZ1xuICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRvbmUobnVsbCwgSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZG9uZShudWxsLCB4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRvbmUoSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZG9uZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgeGhyLnNlbmQocGFyYW1zID8gSlNPTi5zdHJpbmdpZnkocGFyYW1zKSA6IG51bGwpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZSh1cmxPclJlcXVlc3QpIHtcbiAgICByZXR1cm4gbmV3IEFqYXhPYnNlcnZhYmxlKHVybE9yUmVxdWVzdCk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudE9ic2VydmFibGUge1xuICBjb25zdHJ1Y3Rvcih0YXJnZXQsIGV2ZW50TmFtZSwgb3B0aW9ucykge1xuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgIHRoaXMuZXZlbnROYW1lID0gZXZlbnROYW1lO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKHRoaXMuZXZlbnROYW1lLCBvYnNlcnZlciwgdGhpcy5vcHRpb25zKTtcbiAgfVxuXG4gIHVuc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50TmFtZSwgb2JzZXJ2ZXIsIHRoaXMub3B0aW9ucyk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlKHRhcmdldCwgZXZlbnROYW1lLCBvcHRpb25zID0gZmFsc2UpIHtcbiAgICByZXR1cm4gbmV3IEV2ZW50T2JzZXJ2YWJsZSh0YXJnZXQsIGV2ZW50TmFtZSwgb3B0aW9ucyk7XG4gIH1cbn0iLCJpbXBvcnQgT3BlcmF0b3IgZnJvbSAnLi9vcGVyYXRvcic7XG5pbXBvcnQgRXZlbnRPYnNlcnZhYmxlIGZyb20gJy4vZXZlbnQnO1xuaW1wb3J0IEFqYXhPYnNlcnZhYmxlIGZyb20gJy4vYWpheCc7XG5cbi8qKlxuICogRnJvbSBSZWFjdGl2ZVggZG9jczpcbiAqXG4gKiBPYnNlcnZhYmxlOiBBbiBpbnRlcmZhY2UgdGhhdCBsaXN0ZW5zIGZvciBpbmNvbWluZyBub3RpZmljYXRpb25zIG92ZXIgYSBwZXJpb2Qgb2YgdGltZVxuICogYW5kIHB1c2hlcyB0aGVtIHRvIGFub3RoZXIgaW50ZXJmYWNlIHRoYXQgcmVhY3RzIHRvIHRoZW0uXG4gKlxuICogU3Vic2NyaXB0aW9uOiBXaGVuIGFuIE9ic2VydmFibGUgaW50ZXJmYWNlIHN0YXJ0cyBkb2luZyBpdHMgd29yayxcbiAqIGkuZS4gbGlzdGVuaW5nIGZvciBub3RpZmljYXRpb25zIGFuZCBwdXNoaW5nIHRoZW0gb3V0LlxuICpcbiAqIE9ic2VydmVyOiBBbiBpbnRlcmZhY2UgdGhhdCByZWFjdHMgdG8gZGF0YSBwdXNoZWQgZnJvbSBhbiBPYnNlcnZhYmxlLlxuICpcbiAqIE9wZXJhdG9yczogRnVuY3Rpb25zIHVzZWQgdG8gbWFuaXB1bGF0ZSBhbiBPYnNlcnZhYmxl4oCZcyBvdXRwdXQsIGUuZy4gZmlsdGVyLCBtYXAsIHJlZHVjZSwgZXRjLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYnNlcnZhYmxlIGV4dGVuZHMgT3BlcmF0b3Ige1xuICBjb25zdHJ1Y3RvcihzdWJzY3JpYmUpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3Vic2NyaWJlID0gc3Vic2NyaWJlO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZShzdWJzY3JpYmUpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoc3Vic2NyaWJlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3IgZXhhbXBsZTpcbiAgICogY29uc3QgdW5zdWJjcmliZSA9IE9ic2VydmFibGUuZnJvbUV2ZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dCcpLCAnY2hhbmdlJykuc3Vic2NyaWJlKHtcbiAgICogICAgbmV4dDogZSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSlcbiAgICogfSk7XG4gICAqXG4gICAqIHNldFRpbWVvdXQodW5zdWJjcmliZSwgNTAwMCk7XG4gICAqXG4gICAqIEBwYXJhbSB0YXJnZXRcbiAgICogQHBhcmFtIGV2ZW50TmFtZVxuICAgKi9cbiAgc3RhdGljIGZyb21FdmVudCh0YXJnZXQsIGV2ZW50TmFtZSkge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShvYnNlcnZlciA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGUgPT4gb2JzZXJ2ZXIubmV4dChlKTtcbiAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGZhbHNlKTtcbiAgICAgIHJldHVybiAoKSA9PiB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrLCBmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgYWpheCh1cmxPclJlcXVlc3QpIHtcbiAgICByZXR1cm4gQWpheE9ic2VydmFibGUuY3JlYXRlKHVybE9yUmVxdWVzdCk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBPcGVyYXRvciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZmlsdGVyID0gcHJlZGljYXRlID0+IHsgLyogdG8gYmUgaW1wbGVtZW50ZWQgKi8gfTtcbiAgICB0aGlzLm1hcCA9IHByZWRpY2F0ZSA9PiB7IC8qIHRvIGJlIGltcGxlbWVudGVkICovIH07XG4gICAgdGhpcy5yZWR1Y2UgPSBwcmVkaWNhdGUgPT4geyAvKiB0byBiZSBpbXBsZW1lbnRlZCAqLyB9O1xuICB9XG59IiwiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IEV4dCB9IGZyb20gJy4vY29yZS9leHQnO1xuXG5jbGFzcyBSZXh0IGV4dGVuZHMgRXh0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtjb25zb2xlLmxvZyh0aGlzKVxuICAgIC8vIHRoaXMuQ2FjaGUgPSByZXF1aXJlKCcuL2RhdGEvY2FjaGUnKTtcbiAgICAvLyB0aGlzLk1vZGVsID0gcmVxdWlyZSgnLi9kYXRhL21vZGVsJyk7XG4gICAgLy8gdGhpcy5PYnNlcnZhYmxlID0gcmVxdWlyZSgnLi9yZWFjdGl2ZS9vYnNlcnZhYmxlJyk7XG4gICAgLy8gdGhpcy5EaWFsb2dNYW5hZ2VyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2RpYWxvZycpO1xuICB9XG5cbiAgYXN5bmMgYXBwbGljYXRpb24oeyBzdG9yZXMsIGxhdW5jaCB9KSB7Y29uc29sZS5sb2coc3RvcmVzKVxuICAgIGlmIChzdG9yZXMpIHtcbiAgICAgIHRoaXMuTGlzdChzdG9yZXMpLnJlZHVjZSgoc3RvcmVzLCBzdG9yZSkgPT4ge1xuICAgICAgICBzdG9yZSA9IHN0b3JlLmRlZmF1bHQ7XG4gICAgICAgIHN0b3Jlc1tzdG9yZS5zdG9yZUlkXSA9IHN0b3JlO1xuICAgICAgICByZXR1cm4gc3RvcmVzO1xuICAgICAgfSwge30pXG4gICAgfVxuICAgIGlmIChsYXVuY2gpIHtcbiAgICAgIGNvbnN0IHJvb3QgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJzxkaXYgaWQ9XCJyZWFjdC1yb290XCI+PC9kaXY+JyksXG4gICAgICAgICAgICB2aWV3cG9ydCA9IGF3YWl0IGxhdW5jaCgpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyb290KTtcbiAgICAgIHJlbmRlcih2aWV3cG9ydCwgcm9vdCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBSZXh0KCk7XG5cbi8vI3JlZ2lvbiBDb21wb25lbnRcbmV4cG9ydCB7IEhhc2hSb3V0ZXIsIExpbmsgfSBmcm9tICcuL2NvbXBvbmVudHMvcm91dGVyJztcbmV4cG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4vY29tcG9uZW50cy9jb250YWluZXInO1xuLy8gZXhwb3J0IHsgQnV0dG9uLCBCdXR0b25MaW5rLCBGaWVsZCwgVGV4dEZpZWxkLCBDaGVja2JveCwgVGV4dEFyZWEgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybSc7XG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIEdyaWQgfSBmcm9tICcuL2NvbXBvbmVudHMvZ3JpZCc7XG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIExpc3RWaWV3IH0gZnJvbSAnLi9jb21wb25lbnRzL2xpc3QnO1xuLy8gZXhwb3J0IHsgRGlhbG9nIH0gZnJvbSAnLi9jb21wb25lbnRzL2RpYWxvZyc7XG4vLyNlbmRyZWdpb25cblxuLy8jcmVnaW9uIERlY29yYXRvciAob3IgSGlnaGVyIE9yZGVyIEZ1bmN0aW9uIG9yIEhpZ2hlciBPcmRlciBDb21wb25lbnQpXG5leHBvcnQgeyBiaW5kIH0gZnJvbSAnLi9jb3JlL2V4dCc7XG5leHBvcnQgeyBSb3V0ZSB9IGZyb20gJy4vY29tcG9uZW50cy9yb3V0ZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb21wb25lbnQgfSBmcm9tICcuL2FwcC9jb21wb25lbnQnO1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXJ2aWNlIH0gZnJvbSAnLi9hcHAvc2VydmljZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFN0b3JlIH0gZnJvbSAnLi9kYXRhL3N0b3JlJztcbi8vI2VuZHJlZ2lvbiJdfQ==
