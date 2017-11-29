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
          ';',
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
          ' and ',
          _react2.default.createElement(
            'code',
            null,
            'unsubscribe'
          ),
          ' to update the component whenever data\'s changed. Because Store convert data to Model then you need to use ',
          _react2.default.createElement(
            'code',
            null,
            'get'
          ),
          ' to access data. Here is the ',
          _react2.default.createElement(
            'code',
            null,
            'card.json'
          ),
          ' file and result:'
        ),
        _react2.default.createElement(
          'pre',
          { className: 'mb-md' },
          '[\n  {"Id":"soldier_f","Name":"Soldier of Reboldoeux","Type":"Melee","STR":60,"AGI":50,"HP":70,"DEX":40,"INT":30,"SEN":50,"ArmorUsable":"Metal","WeaponUsable":"Polearm"},\n  {"Id":"idgebattle_f","Name":"Idge Imbrulia, the Battlesmith","Type":"Melee","STR":85,"AGI":95,"HP":85,"DEX":40,"INT":30,"SEN":50,"ArmorUsable":"Metal","WeaponUsable":"Greatsword"},\n  {"Id":"brunie_f","Name":"Brunie Etienne","Type":"Shoot","STR":40,"AGI":90,"HP":40,"DEX":70,"INT":30,"SEN":50,"ArmorUsable":"Leather","WeaponUsable":"Pistol"},\n  {"Id":"mifuyu_f","Name":"Asoka","Type":"Melee","STR":85,"AGI":75,"HP":95,"DEX":50,"INT":30,"SEN":50,"ArmorUsable":"Metal","WeaponUsable":"Greatsword"},\n  {"Id":"jin_f","Name":"Jin","Type":"Melee","STR":90,"AGI":80,"HP":80,"DEX":70,"INT":40,"SEN":45,"ArmorUsable":"Leather","WeaponUsable":"Dagger"}\n]'
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
      // CardStore.load();
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
        key: 'componentDidMount',
        value: function componentDidMount() {
          var stores = this.state.stores;

          for (var storeId in stores) {
            var store = stores[storeId];
            store.autoLoad && store.load();
          }
        }
      }, {
        key: 'render',
        value: function render() {
          console.log('render wrapped component');
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
      this.selectors.each(function (selector) {
        return selector.style.display = 'block';
      });
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.selectors.each(function (selector) {
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
  return new DOM(document.querySelectorAll(selector));
};

},{"./list":20}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ext = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.bind = bind;
exports.debounce = debounce;

var _dom = require('./dom');

var _dom2 = _interopRequireDefault(_dom);

var _string = require('./string');

var _string2 = _interopRequireDefault(_string);

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

var _dictionary = require('./dictionary');

var _dictionary2 = _interopRequireDefault(_dictionary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ext = exports.Ext = function () {
  function Ext() {
    _classCallCheck(this, Ext);

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

    this.DOM = _dom2.default;
    this.String = _string2.default;
    this.List = _list2.default;
    this.Map = _dictionary2.default;
    // this.Provider = new Dictionary();
  }

  _createClass(Ext, [{
    key: 'extend',
    value: function extend() {
      return Object.assign.apply(null, arguments); // immutable object
    }
  }, {
    key: 'initialState',
    value: function initialState(comp, state) {
      if (!comp || !state) {
        return;
      }
      comp.state = state;

      var _loop = function _loop(field) {
        comp['set' + _string2.default.capitalize(field)] = function (value) {
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
      var _this = this;

      var cls = [];

      for (var _len = arguments.length, expressions = Array(_len), _key = 0; _key < _len; _key++) {
        expressions[_key] = arguments[_key];
      }

      (0, _list2.default)(expressions).each(function (exp) {
        if (!exp) {
          return;
        }

        if (typeof exp === 'string') {
          cls.push(exp);
        } else if (_this.isObject(exp)) {
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

    return _possibleConstructorReturn(this, (Rext.__proto__ || Object.getPrototypeOf(Rext)).call(this));
    // this.Cache = require('./data/cache');
    // this.Model = require('./data/model');
    // this.Observable = require('./reactive/observable');
    // this.DialogManager = require('./components/dialog');
  }

  _createClass(Rext, [{
    key: 'application',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
        var launch = _ref.launch;
        var root, viewport;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!launch) {
                  _context.next = 7;
                  break;
                }

                root = this.createElement('<div id="react-root"></div>');
                _context.next = 4;
                return launch();

              case 4:
                viewport = _context.sent;

                document.body.appendChild(root);
                (0, _reactDom.render)(viewport, root);

              case 7:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkb2NzL3NyYy9qcy9hcHAuanMiLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2FyY2hpdGVjdHVyZS9hcmNoaXRlY3R1cmUuanN4IiwiZG9jcy9zcmMvanMvY29tcG9uZW50cy9jb3JlLWNvbmNlcHRzL2NvbXBvbmVudC5qc3giLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2NvcmUtY29uY2VwdHMvZGF0YS1wYWNrYWdlLmpzeCIsImRvY3Mvc3JjL2pzL2NvbXBvbmVudHMvY29yZS1jb25jZXB0cy9zY3JlZW4tbmF2aWdhdGlvbi5qc3giLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUvY2FyZHMuanMiLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUvZGFzaGJvYXJkLmpzIiwiZG9jcy9zcmMvanMvY29tcG9uZW50cy9leGFtcGxlL2RldGFpbHMuanMiLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUvbm90Zm91bmQuanMiLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUvc2VhcmNoLmpzIiwiZG9jcy9zcmMvanMvY29tcG9uZW50cy9leGFtcGxlL3N0b3JlL2NhcmQuanMiLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2dldHRpbmctc3RhcnRlZC9nZXR0aW5nLXN0YXJ0ZWQuanN4IiwiZG9jcy9zcmMvanMvY29tcG9uZW50cy92aWV3cG9ydC92aWV3cG9ydC5qc3giLCJzcmMvYXBwL2NvbXBvbmVudC5qcyIsInNyYy9jb21wb25lbnRzL2NvbnRhaW5lci5qc3giLCJzcmMvY29tcG9uZW50cy9yb3V0ZXIuanN4Iiwic3JjL2NvcmUvZGljdGlvbmFyeS5qcyIsInNyYy9jb3JlL2RvbS5qcyIsInNyYy9jb3JlL2V4dC5qcyIsInNyYy9jb3JlL2xpc3QuanMiLCJzcmMvY29yZS9zdHJpbmcuanMiLCJzcmMvZGF0YS9hYnN0cmFjdC1zdG9yZS5qcyIsInNyYy9kYXRhL21vZGVsLmpzIiwic3JjL2RhdGEvcHJveHktc3RvcmUuanMiLCJzcmMvZGF0YS9zdG9yZS5qcyIsInNyYy9yZWFjdGl2ZS9hamF4LmpzIiwic3JjL3JlYWN0aXZlL2V2ZW50LmpzIiwic3JjL3JlYWN0aXZlL29ic2VydmFibGUuanMiLCJzcmMvcmVhY3RpdmUvb3BlcmF0b3IuanMiLCJzcmMvcmV4dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxlQUFLLFdBQUwsQ0FBaUI7QUFDZixVQUFRLENBQ04sUUFBUSxpQ0FBUixDQURNLENBRE87QUFJZixTQUFPLENBQ0wsUUFBUSw4Q0FBUixDQURLLEVBRUwsUUFBUSxzQ0FBUixDQUZLLEVBR0wsUUFBUSw4Q0FBUixDQUhLLEVBSUwsUUFBUSx5Q0FBUixDQUpLLEVBS0wsUUFBUSx3Q0FBUixDQUxLO0FBTUw7QUFDQSxVQUFRLGdDQUFSLENBUEssRUFRTCxRQUFRLDZCQUFSLENBUkssRUFTTCxRQUFRLDhCQUFSLENBVEssRUFVTCxRQUFRLCtCQUFSLENBVkssRUFXTCxRQUFRLDRCQUFSLENBWEssQ0FKUTtBQWlCZixVQUFRO0FBQUEsV0FBTSx1REFBTjtBQUFBO0FBakJPLENBQWpCOzs7Ozs7Ozs7Ozs7OztBQ0xBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFHcUIsWSxXQURwQixpQkFBTSxlQUFOLEM7Ozs7Ozs7Ozs7OzZCQUVVO0FBQ1AsYUFBTztBQUFBO0FBQUEsVUFBVyxXQUFVLDJCQUFyQjtBQUNMO0FBQUE7QUFBQSxZQUFJLFdBQVUsT0FBZDtBQUFBO0FBQUEsU0FESztBQUVMO0FBQUE7QUFBQSxZQUFHLFdBQVUsT0FBYjtBQUFBO0FBQUEsU0FGSztBQU1MO0FBQUE7QUFBQSxZQUFJLFdBQVUsT0FBZDtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUFBO0FBQUEsV0FERjtBQVFFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtB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Ozs7Ozs7OzswQ0FFQSxPOzs7O0FBeENUOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUdNLEk7OztBQUNKLGtCQUFjO0FBQUE7O0FBQUE7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNEOzs7Ozs7WUFFbUIsTSxRQUFBLE07Ozs7OztxQkFDZCxNOzs7OztBQUNJLG9CLEdBQU8sS0FBSyxhQUFMLENBQW1CLDZCQUFuQixDOzt1QkFDVSxROzs7QUFBakIsd0I7O0FBQ04seUJBQVMsSUFBVCxDQUFjLFdBQWQsQ0FBMEIsSUFBMUI7QUFDQSxzQ0FBTyxRQUFQLEVBQWlCLElBQWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBS1MsSUFBSSxJQUFKLEU7O0FBRWYiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJleHQgZnJvbSAnfi9yZXh0JztcbmltcG9ydCBWaWV3cG9ydCBmcm9tICcuL2NvbXBvbmVudHMvdmlld3BvcnQvdmlld3BvcnQnO1xuXG5SZXh0LmFwcGxpY2F0aW9uKHtcbiAgc3RvcmVzOiBbXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2V4YW1wbGUvc3RvcmUvY2FyZCcpLFxuICBdLFxuICB2aWV3czogW1xuICAgIHJlcXVpcmUoJy4vY29tcG9uZW50cy9nZXR0aW5nLXN0YXJ0ZWQvZ2V0dGluZy1zdGFydGVkJyksXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2NvcmUtY29uY2VwdHMvY29tcG9uZW50JyksXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2NvcmUtY29uY2VwdHMvc2NyZWVuLW5hdmlnYXRpb24nKSxcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvY29yZS1jb25jZXB0cy9kYXRhLXBhY2thZ2UnKSxcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvYXJjaGl0ZWN0dXJlL2FyY2hpdGVjdHVyZScpLFxuICAgIC8vIHJlcXVpcmUoJy4vY29tcG9uZW50cy91aS1jb21wb25lbnRzL2dyaWQnKSxcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvZXhhbXBsZS9kYXNoYm9hcmQnKSxcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvZXhhbXBsZS9zZWFyY2gnKSxcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvZXhhbXBsZS9kZXRhaWxzJyksXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2V4YW1wbGUvbm90Zm91bmQnKSxcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvZXhhbXBsZS9jYXJkcycpLFxuICBdLFxuICBsYXVuY2g6ICgpID0+IDxWaWV3cG9ydCAvPlxufSk7IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29udGFpbmVyIH0gZnJvbSAnfi9yZXh0JztcblxuQFJvdXRlKCcvYXJjaGl0ZWN0dXJlJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFyY2hpdGVjdHVyZSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxDb250YWluZXIgY2xhc3NOYW1lPVwibWFpbiBjb250YWluZXIgc2Nyb2xsYWJsZVwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLW1kXCI+QXBwbGljYXRpb24gQXJjaGl0ZWN0dXJlPC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG4gICAgICAgIEV4dGVuc2lvbiBSZWFjdCBwcm92aWRlcyBzdXBwb3J0IGZvciBNVkMrVk0gYXBwbGljYXRpb24gYXJjaGl0ZWN0dXJlcy4gXG4gICAgICAgIFRvIHVuZGVyc3RhbmQgd2hhdCBpcyBNVkMrVk0sIHdlIHNob3VsZCBzdGFydCBieSBmdXJ0aGVyIGRlZmluaW5nIHdoYXQgdGhlIHZhcmlvdXMgYWJicmV2aWF0aW9ucyByZXByZXNlbnQuXG4gICAgICA8L3A+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWItbWRcIj5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxzdHJvbmc+KE0pIE1vZGVsPC9zdHJvbmc+IC0gVGhpcyBpcyB0aGUgZGF0YSBmb3IgeW91ciBhcHBsaWNhdGlvbi5cbiAgICAgICAgICBBIHNldCBvZiBjbGFzc2VzIChjYWxsZWQgXCJNb2RlbHNcIikgZGVmaW5lcyB0aGUgZmllbGRzIGZvciB0aGVpciBkYXRhIChlLmcuIGEgVXNlciBtb2RlbCB3aXRoIHVzZXItbmFtZSBhbmQgcGFzc3dvcmQgZmllbGRzKS5cbiAgICAgICAgICBNb2RlbHMga25vdyBob3cgdG8gcGVyc2lzdCB0aGVtc2VsdmVzIHRocm91Z2ggdGhlIGRhdGEgcGFja2FnZSBhbmQgY2FuIGJlIGxpbmtlZCB0byBvdGhlciBtb2RlbHMgdmlhIGFzc29jaWF0aW9ucy5cbiAgICAgICAgICBNb2RlbHMgYXJlIG5vcm1hbGx5IHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBTdG9yZXMgdG8gcHJvdmlkZSBkYXRhIGZvciBncmlkcyBhbmQgb3RoZXIgY29tcG9uZW50cy5cbiAgICAgICAgICBNb2RlbHMgYXJlIGFsc28gYW4gaWRlYWwgbG9jYXRpb24gZm9yIGFueSBkYXRhIGxvZ2ljIHRoYXQgeW91IG1heSBuZWVkLCBzdWNoIGFzIHZhbGlkYXRpb24sIGNvbnZlcnNpb24sIGV0Yy5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxzdHJvbmc+KFYpIFZpZXc8L3N0cm9uZz4gLSBBIFZpZXcgaXMgYW55IHR5cGUgb2YgY29tcG9uZW50IHRoYXQgaXMgdmlzdWFsbHkgcmVwcmVzZW50ZWQuIEZvciBpbnN0YW5jZSwgZ3JpZHMsIHRyZWVzIGFuZCBwYW5lbHMgYXJlIGFsbCBjb25zaWRlcmVkIFZpZXdzLlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPHN0cm9uZz4oQykgQ29udHJvbGxlcjwvc3Ryb25nPiAtIENvbnRyb2xsZXJzIGFyZSB1c2VkIGFzIGEgcGxhY2UgdG8gbWFpbnRhaW4gdGhlIHZpZXcncyBsb2dpYyB0aGF0IG1ha2VzIHlvdXIgYXBwIHdvcmsuXG4gICAgICAgICAgVGhpcyBjb3VsZCBlbnRhaWwgcmVuZGVyaW5nIHZpZXdzLCByb3V0aW5nLCBpbnN0YW50aWF0aW5nIE1vZGVscywgYW5kIGFueSBvdGhlciBzb3J0IG9mIGFwcCBsb2dpYy5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxzdHJvbmc+KFZNKSBWaWV3TW9kZWw8L3N0cm9uZz4gLSBUaGUgVmlld01vZGVsIGlzIGEgY2xhc3MgdGhhdCBtYW5hZ2VzIGRhdGEgc3BlY2lmaWMgdG8gdGhlIFZpZXcuXG4gICAgICAgICAgSXQgYWxsb3dzIGludGVyZXN0ZWQgY29tcG9uZW50cyB0byBiaW5kIHRvIGl0IGFuZCBiZSB1cGRhdGVkIHdoZW5ldmVyIHRoaXMgZGF0YSBjaGFuZ2VzLlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi1tZFwiPk1vZGVscyBhbmQgU3RvcmVzPC9oMz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG4gICAgICAgIDxjb2RlPk1vZGVsczwvY29kZT4gYW5kIDxjb2RlPlN0b3JlczwvY29kZT4gbWFrZSB1cCB0aGUgaW5mb3JtYXRpb24gZ2F0ZXdheSBvZiB5b3VyIGFwcGxpY2F0aW9uLlxuICAgICAgICBNb3N0IG9mIHlvdXIgZGF0YSBpcyBzZW50LCByZXRyaWV2ZWQsIG9yZ2FuaXplZCwgYW5kIFwibW9kZWxlZFwiIGJ5IHRoZXNlIHR3byBjbGFzc2VzLlxuICAgICAgPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5cbiAgICAgICAgQSA8Y29kZT5Nb2RlbDwvY29kZT4gcmVwcmVzZW50cyBhbnkgdHlwZSBvZiBwZXJzaXN0LWFibGUgZGF0YSBpbiB5b3VyIGFwcGxpY2F0aW9uLlxuICAgICAgICBFYWNoIG1vZGVsIGhhcyBmaWVsZHMgYW5kIGZ1bmN0aW9ucyB0aGF0IGFsbG93IHlvdXIgYXBwbGljYXRpb24gdG8gXCJtb2RlbFwiIGRhdGEuXG4gICAgICAgIE1vZGVscyBhcmUgbW9zdCBjb21tb25seSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggc3RvcmVzLlxuICAgICAgICBTdG9yZXMgY2FuIHRoZW4gYmUgY29uc3VtZWQgYnkgZGF0YS1ib3VuZCBjb21wb25lbnRzIGxpa2UgZ3JpZHMsIHRyZWVzLCBhbmQgY2hhcnRzLlxuICAgICAgPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5cbiAgICAgICAgQSA8Y29kZT5TdG9yZTwvY29kZT4gaXMgYSBjbGllbnQgc2lkZSBjYWNoZSBvZiByZWNvcmRzIChpbnN0YW5jZXMgb2YgYSBNb2RlbCBjbGFzcykuXG4gICAgICAgIFN0b3JlcyBwcm92aWRlIGZ1bmN0aW9ucyBmb3IgcXVlcnlpbmcgdGhlIHJlY29yZHMgY29udGFpbmVkIHdpdGhpbi5cbiAgICAgIDwvcD5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi1tZFwiPlZpZXdDb250cm9sbGVyczwvaDM+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPkV4dGVuc2lvbiBSZWFjdCBkZWxpdmVycyBzb21lIGV4Y2l0aW5nIGltcHJvdmVtZW50cyBmb3IgUmVhY3QuIFRvIGVuaGFuY2UgTVZDIGFwcGxpY2F0aW9ucywgRXh0ZW5zaW9uIFJlYWN0IHByb3ZpZGVzIFZpZXdDb250cm9sbGVycywgYWxzbyBjYWxsZWQgYXMgQ29tcG9uZW50OjwvcD5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtYi1tZFwiPlxuICAgICAgICA8bGk+U2ltcGxpZmllcyB0aGUgY29ubmVjdGlvbiB0byB2aWV3cyB1c2luZyDigJxDb21wb25lbnTigJ0gZGVjb3JhdG9yLjwvbGk+XG4gICAgICAgIDxsaT5MZXZlcmFnZXMgdGhlIGxpZmUgY3ljbGUgb2Ygdmlld3MgdG8gYXV0b21hdGljYWxseSBtYW5hZ2UgdGhlaXIgYXNzb2NpYXRlZC48L2xpPlxuICAgICAgICA8bGk+UmVkdWNlcyBjb21wbGV4aXR5IGJhc2VkIG9uIGEgb25lLXRvLW9uZSByZWxhdGlvbnNoaXAgd2l0aCB0aGUgbWFuYWdlZCB2aWV3LjwvbGk+XG4gICAgICAgIDxsaT5Qcm92aWRlcyBlbmNhcHN1bGF0aW9uIHRvIG1ha2UgbmVzdGluZyB2aWV3cyByZWxpYWJsZS48L2xpPlxuICAgICAgICA8bGk+UmV0YWlucyB0aGUgYWJpbGl0eSB0byBzZWxlY3QgY29tcG9uZW50cyBhbmQgbGlzdGVuIHRvIHRoZWlyIGV2ZW50cyBhdCBhbnkgbGV2ZWwgYmVsb3cgdGhlIGFzc29jaWF0ZWQgdmlldy48L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDxwcmU+XG57YC8vIC4vY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmpzXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJleHQsIHsgQ29udGFpbmVyIH0gZnJvbSAnZXh0LXJlYWN0JztcbmltcG9ydCBEYXRhU3RvcmUgZnJvbSAnfi9zdG9yZXMvZGF0YSc7XG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tICcuL3NlYXJjaC1mb3JtJztcbmltcG9ydCBTZWFyY2hSZXN1bHQgZnJvbSAnLi9zZWFyY2gtcmVzdWx0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Q29udGFpbmVyPlxuICAgICAgPFNlYXJjaEZvcm0gLz5cbiAgICAgIDxTZWFyY2hSZXN1bHQgLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgfVxufVxuXG4vLyAuL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC1mb3JtLmpzXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdleHQtcmVhY3QnO1xuaW1wb3J0IERhdGFTdG9yZSBmcm9tICd+L3N0b3Jlcy9kYXRhJztcbmltcG9ydCBTZWFyY2hGb3JtVmlldyBmcm9tICcuL3NlYXJjaC1mb3JtLnZpZXcnO1xuXG5AQ29tcG9uZW50KHtcbiAgdmlldzogU2VhcmNoRm9ybVZpZXdcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hGb3JtIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jcml0ZXJpYSA9IHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgc3RhdHVzZXM6IFtdLFxuICAgICAgcHVycG9zZXM6IFtdLFxuICAgICAgYWN0aXZpdGllczogW10sXG4gICAgICBwcm9kdWN0czogW11cbiAgICB9O1xuICB9XG5cbiAgc2VhcmNoKGNyaXRlcmlhKSB7XG4gICAgY3JpdGVyaWEgPSB0aGlzLmNvcnJlY3RDcml0ZXJpYShjcml0ZXJpYSk7XG4gICAgRGF0YVN0b3JlLnJlamVjdENoYW5nZXMoKTtcbiAgICBSZXh0LmV4dGVuZChEYXRhU3RvcmUucHJveHksIHtcbiAgICAgIHBhcmFtczogY3JpdGVyaWEsXG4gICAgICBmYWlsOiAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnIocmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgIERhdGFTdG9yZS5jbGVhckRhdGEoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBEYXRhU3RvcmUubG9hZCgpO1xuICB9XG5cbiAgY2xlYXJTZWFyY2hSZXN1bHQoY29tcCkge1xuICAgIERhdGFTdG9yZS5yZWplY3RDaGFuZ2VzKCk7XG4gICAgRGF0YVN0b3JlLmNsZWFyRGF0YSgpO1xuICAgIGNvbXAuc2V0U3RhdGUoKCkgPT4gKHRoaXMuY3JpdGVyaWEpKTtcbiAgfVxufVxuXG4vLyAuL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC1mb3JtLnZpZXcuanN4XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmllbGQsIERyb3Bkb3duLCBCdXR0b24gfSBmcm9tICdleHQtcmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hGb3JtVmlldyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIEV4dC5pbml0aWFsU3RhdGUodGhpcywgcHJvcHMuJHZpZXcuY3JpdGVyaWEpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmFtZSwgc3RhdHVzZXMsIHB1cnBvc2VzLCBhY3Rpdml0aWVzLCBwcm9kdWN0cyB9ID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICB7IHNlYXJjaCwgY2xlYXJTZWFyY2hSZXN1bHQgfSA9IHRoaXMucHJvcHMuJHZpZXc7XG4gICAgcmV0dXJuIDxzZWN0aW9uPlxuICAgICAgPEZpZWxkIHZhbHVlPXtuYW1lfSBwbGFjZWhvbGRlcj1cIk5hbWVcIiBvbkNoYW5nZT17dGhpcy5zZXROYW1lfSAvPlxuICAgICAgPERyb3Bkb3duIG11bHRpcGxlIG9wdGlvbnM9e1tdfSB2YWx1ZT17c3RhdHVzZXN9IG9uQmx1cj17dGhpcy5zZXRTdGF0dXNlc30gLz5cbiAgICAgIDxEcm9wZG93biBtdWx0aXBsZSBvcHRpb25zPXtbXX0gdmFsdWU9e3B1cnBvc2VzfSBvbkJsdXI9e3RoaXMuc2V0UHVycG9zZXN9IC8+XG4gICAgICA8RHJvcGRvd24gbXVsdGlwbGUgb3B0aW9ucz17W119IHZhbHVlPXthY3Rpdml0aWVzfSBvbkJsdXI9e3RoaXMuc2V0QWN0aXZpdGllc30gLz5cbiAgICAgIDxEcm9wZG93biBtdWx0aXBsZSBvcHRpb25zPXtbXX0gdmFsdWU9e3Byb2R1Y3RzfSBvbkJsdXI9e3RoaXMuc2V0UHJvZHVjdHN9IC8+XG4gICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgdGV4dD1cIlNlYXJjaFwiIG9uQ2xpY2s9eygpID0+IHNlYXJjaCh0aGlzLnN0YXRlKX0gLz5cbiAgICAgIDxCdXR0b24gdGV4dD1cIkNsZWFyXCIgb25DbGljaz17KCkgPT4gY2xlYXJTZWFyY2hSZXN1bHQodGhpcyl9IC8+XG4gICAgPC9zZWN0aW9uPlxuICB9XG59XG5cbi8vIC4vY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLXJlc3VsdC5qc3hcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQgfSBmcm9tICdleHQtcmVhY3QnO1xuaW1wb3J0IERhdGFTdG9yZSBmcm9tICd+L3N0b3Jlcy9kYXRhJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoUmVzdWx0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmFtZSwgcmVjb3JkU3RhdHVzZXMsIHB1cnBvc2VzLCBhY3Rpdml0aWVzLCBwcm9kdWN0cyB9ID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICB7IHNlYXJjaCwgY2xlYXJTZWFyY2hSZXN1bHQgfSA9IHRoaXMucHJvcHMuJHZpZXc7XG4gICAgcmV0dXJuIDxDb250YWluZXI+XG4gICAgICA8R3JpZCBzdG9yZT17RGF0YVN0b3JlfT5cbiAgICAgICAgPGRpdiB0ZXh0PVwiSURcIiBkYXRhSW5kZXg9XCJpZFwiIC8+XG4gICAgICAgIDxkaXYgdGV4dD1cIk5hbWVcIiBkYXRhSW5kZXg9XCJuYW1lXCIgLz5cbiAgICAgICAgPGRpdiB0ZXh0PVwiU3RhdHVzXCIgZGF0YUluZGV4PVwic3RhdHVzXCIgLz5cbiAgICAgICAgPGRpdiB0ZXh0PVwiUHVycG9zZVwiIGRhdGFJbmRleD1cInB1cnBvc2VcIiAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJBY3Rpdml0eVwiIGRhdGFJbmRleD1cImFjdGl2aXR5XCIgLz5cbiAgICAgICAgPGRpdiB0ZXh0PVwiUHJvZHVjdFwiIGRhdGFJbmRleD1cInByb2R1Y3RcIiAvPlxuICAgICAgPC9HcmlkPlxuICAgIDwvQ29udGFpbmVyPlxuICB9XG59YH1cbiAgICAgIDwvcHJlPlxuICAgIDwvQ29udGFpbmVyPlxuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29udGFpbmVyIH0gZnJvbSAnfi9yZXh0JztcblxuQFJvdXRlKCcvY29yZS1jb25jZXB0cy9jb21wb25lbnQnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmV4dENvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxDb250YWluZXIgY2xhc3NOYW1lPVwibWFpbiBjb250YWluZXIgc2Nyb2xsYWJsZVwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLW1kXCI+Q29tcG9uZW50PC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG4gICAgICAgIEEgY29tcG9uZW50IGluIEV4dGVuc2lvbiBSZWFjdCBpcyB0aGUgY29tYmluYXRpb24gb2YgYSBSZWFjdCBDb21wb25lbnQgYW5kIGEgY29tcG9uZW50IGNsYXNzIHRoYXQgY29udHJvbHMgYSBwb3J0aW9uIG9mIHRoZSBzY3JlZW4uXG4gICAgICAgIEhlcmUgaXMgYW4gZXhhbXBsZSBvZiBhIGNvbXBvbmVudCB0aGF0IGRpc3BsYXkgYSBzaW1wbGUgc3RyaW5nOlxuICAgICAgPC9wPlxuICAgICAgPHByZSBjbGFzc05hbWU9XCJtYi1tZFwiPlxue2AvLyAuL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC52aWV3LmpzeFxuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhc2hib2FyZFZpZXcgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8aDE+e3RoaXMucHJvcHMuJHZpZXcudGl0bGV9PC9oMT47XG4gIH1cbn1cblxuLy8gLi9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuanNcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2V4dC1yZWFjdCc7XG5pbXBvcnQgRGFzaGJvYXJkVmlldyBmcm9tICcuL2Rhc2hib2FyZC52aWV3JztcblxuQENvbXBvbmVudCh7XG4gIHZpZXc6IERhc2hib2FyZFZpZXdcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMudGl0bGUgPSAnRGFzaGJvYXJkJztcbiAgfVxufWB9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG4gICAgICAgIEV2ZXJ5IGNvbXBvbmVudCBiZWdpbnMgd2l0aCBhbiA8Y29kZT5AQ29tcG9uZW50PC9jb2RlPiBkZWNvcmF0b3IgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIDxlbT5tZXRhZGF0YTwvZW0+IG9iamVjdC5cbiAgICAgICAgVGhlIG1ldGFkYXRhIG9iamVjdCBkZXNjcmliZXMgaG93IHRoZSBSZWFjdCBDb21wb25lbnQgYW5kIGNvbXBvbmVudCBjbGFzcyB3b3JrIHRvZ2V0aGVyLlxuICAgICAgICBUaGF0J3MgbWVhbiB5b3UgY2FuIGFjY2VzcyBhbnkgcHJvcGVydHkgb3IgbWV0aG9kIG9mIGNvbXBvbmVudCBjbGFzcyB2aWEgPGNvZGU+dGhpcy5wcm9wcy4kdmlldzwvY29kZT4uXG4gICAgICA8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlxuICAgICAgICBBY3R1YWxseSwgd2l0aCB0aGUgYWJvdmUgZXhhbXBsZSwgaXQgY2FuIGJlIGltcGxlbWVudGVkIGxpa2UgdGhpczpcbiAgICAgIDwvcD5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntgaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnZXh0LXJlYWN0JztcblxuQENvbXBvbmVudCh7XG4gIHZpZXc6ICh7ICR2aWV3IH0pID0+IDxoMT57JHZpZXcudGl0bGV9PC9oMT5cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMudGl0bGUgPSAnRGFzaGJvYXJkJztcbiAgfVxufWB9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+RXh0ZW5zaW9uIFJlYWN0IHByb3ZpZGUgYSBuZXcgd2F5IHRvIHdvcmsgd2l0aCBzdGF0ZTo8L3A+XG4gICAgICA8cHJlIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG57YC8vIC4vY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLnZpZXcuanN4XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJleHQgZnJvbSAnZXh0ZW5zaW9uLXJlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoVmlldyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIFJleHQuaW5pdGlhbFN0YXRlKHRoaXMsIHtcbiAgICAgIG5hbWU6IHByb3BzLm5hbWVcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdGhpcy5zZXROYW1lKG5leHRQcm9wcy5uYW1lKTtcbiAgfVxuICAuLi5cbn1gfVxuICAgICAgPC9wcmU+XG4gICAgICA8cD5cbiAgICAgICAgSW5zdGVhZCBvZiB1c2luZyA8Y29kZT57YHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSwgcHJvcHMpID0+ICh7IG5hbWU6IHByb3BzLm5hbWUgfSkpYH08L2NvZGU+IHRvIHVwZGF0ZSB0aGUgc3RhdGUsXG4gICAgICAgIHlvdSBjYW4gdXNlIDxjb2RlPnRoaXMuc2V0TmFtZShwcm9wcy5uYW1lKTwvY29kZT4gdG8gbWFrZSBpdCBlYXNpZXIgdG8gdW5kZXJzdGFuZCBhbmQgbW9yZSBuYXR1cmFsIGJ5IHVzaW5nIDxjb2RlPlJleHQuaW5pdGlhbFN0YXRlPC9jb2RlPiBmdW5jdGlvbiB0byBkZWNsYXJlIHRoZSBzdGF0ZSBpbiBjb25zdHJ1Y3Rvci5cbiAgICAgIDwvcD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIENvbnRhaW5lciB9IGZyb20gJ34vcmV4dCc7XG5cbkBSb3V0ZSgnL2NvcmUtY29uY2VwdHMvZGF0YS1wYWNrYWdlJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFQYWNrYWdlIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPENvbnRhaW5lciBjbGFzc05hbWU9XCJtYWluIGNvbnRhaW5lciBzY3JvbGxhYmxlXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwibWItbWRcIj5EYXRhIFBhY2thZ2U8L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5UaGUgZGF0YSBwYWNrYWdlIGlzIHdoYXQgbG9hZHMgYW5kIHNhdmVzIGFsbCBvZiB0aGUgZGF0YSBpbiB5b3VyIGFwcGxpY2F0aW9uLjwvcD5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi1tZFwiPk1vZGVsczwvaDM+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlRoZSBjZW50ZXJwaWVjZSBvZiB0aGUgZGF0YSBwYWNrYWdlIGlzIGBNb2RlbGAgd2hpY2ggcmVwcmVzZW50cyBhbiBlbnRpdHkgaW4gYW4gYXBwbGljYXRpb24uPC9wPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLW1kXCI+U3RvcmVzPC9oMz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+VGhlIDxjb2RlPlN0b3JlPC9jb2RlPiBjbGFzcyBlbmNhcHN1bGF0ZXMgYSBjbGllbnQgc2lkZSBjYWNoZSBvZiA8Y29kZT5Nb2RlbDwvY29kZT4gb2JqZWN0cy48L3A+XG4gICAgICA8cHJlIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG57YGltcG9ydCB7IFN0b3JlIH0gZnJvbSAnZXh0LXJlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBTdG9yZSh7XG4gIHN0b3JlSWQ6ICdDYXJkU3RvcmUnLFxuICBwcm94eToge1xuICAgIHVybDogJy9kYXRhL2NhcmQuanNvbidcbiAgfVxufSlgfVxuICAgICAgPC9wcmU+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlxuICAgICAgICBJbiB0aGUgZXhhbXBsZSBhYm92ZSB3ZSBjb25maWd1cmVkIGFuIEFKQVggcHJveHkgdG8gbG9hZCBkYXRhIGZyb20gdGhlIHVybCA8Y29kZT4vYXBpL3VzZXIvc2VhcmNoPC9jb2RlPi5cbiAgICAgICAgU3RvcmVzIGxvYWQgZGF0YSB2aWEgPGNvZGU+cHJveHk8L2NvZGU+IHdpdGggdGhpcyBmb2xsb3dpbmcgc3RydWN0dXJlOlxuICAgICAgPC9wPlxuICAgICAgPHByZSBjbGFzc05hbWU9XCJtYi1tZFwiPlxue2B7XG4gIHVybDogICAgLyogVGhlIFVSTCBmcm9tIHdoaWNoIHRvIHJlcXVlc3QgdGhlIGRhdGEgb2JqZWN0ICovLFxuICBtZXRob2Q6IC8qIFRoZSBkZWZhdWx0IEhUVFAgbWV0aG9kIHRvIGJlIHVzZWQgZm9yIHJlcXVlc3RzLiBJZiBub3Qgc2V0LCBHRVQgd2lsbCBiZSB1c2VkLiAqL1xuICBwYXJhbXM6IC8qIFJlcXVlc3QgcGFyYW1ldGVycyBzZW50IGFzIGpzb24gZGF0YSAqL1xuICByZWFkZXI6IC8qIFVzZSB0byBkZWNvZGUgdGhlIHNlcnZlcidzIHJlc3BvbnNlICovXG59YH1cbiAgICAgIDwvcHJlPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5TdG9yZXMgY2FuIGFsc28gbG9hZCBkYXRhIGlubGluZS4gSW50ZXJuYWxseSwgU3RvcmUgY29udmVydHMgZWFjaCBvZiB0aGUgb2JqZWN0cyB3ZSBwYXNzIGluIGFzIGNmZy1kYXRhIGludG8gTW9kZWwgaW5zdGFuY2VzOjwvcD5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbjt7YGltcG9ydCB7IFN0b3JlIH0gZnJvbSAnZXh0LXJlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBTdG9yZSh7XG4gIHN0b3JlSWQ6ICdVc2VyU3RvcmUnLFxuICBkYXRhOiBbXG4gICAge2ZpcnN0TmFtZTogJ1BldGVyJywgICBsYXN0TmFtZTogJ1ZlbmttYW4nfSxcbiAgICB7Zmlyc3ROYW1lOiAnRWdvbicsICAgIGxhc3ROYW1lOiAnU3BlbmdsZXInfSxcbiAgICB7Zmlyc3ROYW1lOiAnUmF5JywgICAgIGxhc3ROYW1lOiAnU3RhbnR6J30sXG4gICAge2ZpcnN0TmFtZTogJ1dpbnN0b24nLCBsYXN0TmFtZTogJ1plZGRlbW9yZSd9XG4gIF1cbn0pYH1cbiAgICAgIDwvcHJlPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5Ob3csIGp1c3QgYmluZCBhIHN0b3JlIHRvIHRoZSA8Y29kZT5Db21wb25lbnQ8L2NvZGU+OjwvcD5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntgaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGJpbmQgfSBmcm9tICdleHQtcmVhY3QnO1xuaW1wb3J0IENhcmRTdG9yZSBmcm9tICd+L3N0b3Jlcy9jYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIENhcmRTdG9yZS5jbGVhckRhdGEoKTtcbiAgICBDYXJkU3RvcmUubG9hZCgpO1xuICAgIENhcmRTdG9yZS5zdWJzY3JpYmUodGhpcy5yZWxvYWQpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgQ2FyZFN0b3JlLnVuc3Vic2NyaWJlKHRoaXMucmVsb2FkKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCByZWNvcmRzID0gQ2FyZFN0b3JlLmdldERhdGEoKTtcbiAgICByZXR1cm4gPHNlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyeC1ncmlkLWhlYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyByeC1ncmlkLWhlYWRlci1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ4LWdyaWQtY29sdW1uLWhlYWRlciB0ZXh0LXNtLWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6JzIwJSd9fT5JRDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicngtZ3JpZC1jb2x1bW4taGVhZGVyIHRleHQtc20tY2VudGVyXCIgc3R5bGU9e3t3aWR0aDonMjAlJ319Pk5hbWU8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ4LWdyaWQtY29sdW1uLWhlYWRlciB0ZXh0LXNtLWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6JzIwJSd9fT5UeXBlPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyeC1ncmlkLWNvbHVtbi1oZWFkZXIgdGV4dC1zbS1jZW50ZXJcIiBzdHlsZT17e3dpZHRoOicyMCUnfX0+QXJtb3I8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ4LWdyaWQtY29sdW1uLWhlYWRlciB0ZXh0LXNtLWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6JzIwJSd9fT5XZWFwb248L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyeC1ncmlkLWJvZHlcIiBzdHlsZT17e292ZXJmbG93Oid2aXNpYmxlJ319PlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyeC1ncmlkLXZpZXdcIj5cbiAgICAgICAgICB7cmVjb3Jkcy5tYXAocmVjb3JkID0+IDxhcnRpY2xlIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyByeC1ncmlkLXJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyeC1ncmlkLWNlbGxcIiBzdHlsZT17e3dpZHRoOicyMCUnfX0+e3JlY29yZC5nZXQoJ0lkJyl9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ4LWdyaWQtY2VsbFwiIHN0eWxlPXt7d2lkdGg6JzIwJSd9fT57cmVjb3JkLmdldCgnTmFtZScpfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyeC1ncmlkLWNlbGxcIiBzdHlsZT17e3dpZHRoOicyMCUnfX0+e3JlY29yZC5nZXQoJ1R5cGUnKX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicngtZ3JpZC1jZWxsXCIgc3R5bGU9e3t3aWR0aDonMjAlJ319PntyZWNvcmQuZ2V0KCdBcm1vclVzYWJsZScpfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyeC1ncmlkLWNlbGxcIiBzdHlsZT17e3dpZHRoOicyMCUnfX0+e3JlY29yZC5nZXQoJ1dlYXBvblVzYWJsZScpfTwvZGl2PlxuICAgICAgICAgIDwvYXJ0aWNsZT4pfVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9zZWN0aW9uPjtcbiAgfVxuXG4gIEBiaW5kXG4gIHJlbG9hZCgpIHtcbiAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gIH1cbn1gfVxuICAgICAgPC9wcmU+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlxuICAgICAgICBJbiB0aGlzIGFib3ZlIGV4YW1wbGUsIHdlIHVzZSA8Y29kZT5zdWJzY3JpYmU8L2NvZGU+IGFuZCA8Y29kZT51bnN1YnNjcmliZTwvY29kZT4gdG8gdXBkYXRlIHRoZSBjb21wb25lbnQgd2hlbmV2ZXIgZGF0YSdzIGNoYW5nZWQuXG4gICAgICAgIEJlY2F1c2UgU3RvcmUgY29udmVydCBkYXRhIHRvIE1vZGVsIHRoZW4geW91IG5lZWQgdG8gdXNlIDxjb2RlPmdldDwvY29kZT4gdG8gYWNjZXNzIGRhdGEuXG4gICAgICAgIEhlcmUgaXMgdGhlIDxjb2RlPmNhcmQuanNvbjwvY29kZT4gZmlsZSBhbmQgcmVzdWx0OlxuICAgICAgPC9wPlxuICAgICAgPHByZSBjbGFzc05hbWU9XCJtYi1tZFwiPlxue2BbXG4gIHtcIklkXCI6XCJzb2xkaWVyX2ZcIixcIk5hbWVcIjpcIlNvbGRpZXIgb2YgUmVib2xkb2V1eFwiLFwiVHlwZVwiOlwiTWVsZWVcIixcIlNUUlwiOjYwLFwiQUdJXCI6NTAsXCJIUFwiOjcwLFwiREVYXCI6NDAsXCJJTlRcIjozMCxcIlNFTlwiOjUwLFwiQXJtb3JVc2FibGVcIjpcIk1ldGFsXCIsXCJXZWFwb25Vc2FibGVcIjpcIlBvbGVhcm1cIn0sXG4gIHtcIklkXCI6XCJpZGdlYmF0dGxlX2ZcIixcIk5hbWVcIjpcIklkZ2UgSW1icnVsaWEsIHRoZSBCYXR0bGVzbWl0aFwiLFwiVHlwZVwiOlwiTWVsZWVcIixcIlNUUlwiOjg1LFwiQUdJXCI6OTUsXCJIUFwiOjg1LFwiREVYXCI6NDAsXCJJTlRcIjozMCxcIlNFTlwiOjUwLFwiQXJtb3JVc2FibGVcIjpcIk1ldGFsXCIsXCJXZWFwb25Vc2FibGVcIjpcIkdyZWF0c3dvcmRcIn0sXG4gIHtcIklkXCI6XCJicnVuaWVfZlwiLFwiTmFtZVwiOlwiQnJ1bmllIEV0aWVubmVcIixcIlR5cGVcIjpcIlNob290XCIsXCJTVFJcIjo0MCxcIkFHSVwiOjkwLFwiSFBcIjo0MCxcIkRFWFwiOjcwLFwiSU5UXCI6MzAsXCJTRU5cIjo1MCxcIkFybW9yVXNhYmxlXCI6XCJMZWF0aGVyXCIsXCJXZWFwb25Vc2FibGVcIjpcIlBpc3RvbFwifSxcbiAge1wiSWRcIjpcIm1pZnV5dV9mXCIsXCJOYW1lXCI6XCJBc29rYVwiLFwiVHlwZVwiOlwiTWVsZWVcIixcIlNUUlwiOjg1LFwiQUdJXCI6NzUsXCJIUFwiOjk1LFwiREVYXCI6NTAsXCJJTlRcIjozMCxcIlNFTlwiOjUwLFwiQXJtb3JVc2FibGVcIjpcIk1ldGFsXCIsXCJXZWFwb25Vc2FibGVcIjpcIkdyZWF0c3dvcmRcIn0sXG4gIHtcIklkXCI6XCJqaW5fZlwiLFwiTmFtZVwiOlwiSmluXCIsXCJUeXBlXCI6XCJNZWxlZVwiLFwiU1RSXCI6OTAsXCJBR0lcIjo4MCxcIkhQXCI6ODAsXCJERVhcIjo3MCxcIklOVFwiOjQwLFwiU0VOXCI6NDUsXCJBcm1vclVzYWJsZVwiOlwiTGVhdGhlclwiLFwiV2VhcG9uVXNhYmxlXCI6XCJEYWdnZXJcIn1cbl1gfVxuICAgICAgPC9wcmU+XG4gICAgPC9Db250YWluZXI+XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBDb250YWluZXIgfSBmcm9tICd+L3JleHQnO1xuXG5AUm91dGUoJy9jb3JlLWNvbmNlcHRzL3NjcmVlbi1uYXZpZ2F0aW9uJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcmVlbk5hdmlnYXRpb24gZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Q29udGFpbmVyIGNsYXNzTmFtZT1cIm1haW4gY29udGFpbmVyIHNjcm9sbGFibGVcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi1tZFwiPlNjcmVlbiBOYXZpZ2F0aW9uPC9oMT5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtYi1tZFwiPlxuICAgICAgICA8bGk+PHN0cm9uZz48Y29kZT5Sb3V0ZTwvY29kZT48L3N0cm9uZz4gZGVjb3JhdG9yIGlzIG1vc3QgYmFzaWMgcmVzcG9uc2liaWxpdHkgaXMgdG8gcmVuZGVyIFVJIHdoZW4gYSBsb2NhdGlvbiBtYXRjaGVzIHRoZSByb3V0ZeKAmXMgcGF0aC48L2xpPlxuICAgICAgICA8bGk+PHN0cm9uZz48Y29kZT5MaW5rPC9jb2RlPjwvc3Ryb25nPiBwcm92aWRlcyBkZWNsYXJhdGl2ZSwgYWNjZXNzaWJsZSBuYXZpZ2F0aW9uIGFyb3VuZCB5b3VyIGFwcGxpY2F0aW9uLjwvbGk+XG4gICAgICAgIDxsaT48c3Ryb25nPjxjb2RlPkhhc2hSb3V0ZXI8L2NvZGU+PC9zdHJvbmc+IHVzZXMgdGhlIGhhc2ggcG9ydGlvbiBvZiB0aGUgVVJMIChpLmUuIHdpbmRvdy5sb2NhdGlvbi5oYXNoKSB0byBrZWVwIHlvdXIgVUkgaW4gc3luYyB3aXRoIHRoZSBVUkwuPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8cHJlIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG57YC8vIG1haW4uanNcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IFJleHQgZnJvbSAnZXh0LXJlYWN0JztcbmltcG9ydCBWaWV3cG9ydCBmcm9tICcuL2NvbXBvbmVudHMvdmlld3BvcnQnO1xuXG5SZXh0LmFwcGxpY2F0aW9uKHtcbiAgdmlld3M6IFtcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvc2VhcmNoJyksXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2RldGFpbHMnKSxcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvbm90Zm91bmQnKSxcbiAgXSxcbiAgbGF1bmNoOiAoKSA9PiA8Vmlld3BvcnQgLz5cbn0pO1xuXG5SZXh0LmxhdW5jaCg8Vmlld3BvcnQgLz4pO1xuXG4vLyAuL2NvbXBvbmVudHMvdmlld3BvcnQuanNcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rLCBIYXNoUm91dGVyIH0gZnJvbSAnZXh0LXJlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlld3BvcnQoKSB7XG4gIHJldHVybiA8c2VjdGlvbj5cbiAgICA8TGluayB0bz1cIi9cIj5EYXNoYm9hcmQ8L0xpbms+XG4gICAgPExpbmsgdG89XCIvc2VhcmNoXCI+U2VhcmNoPC9MaW5rPlxuICAgIDxMaW5rIHRvPVwiL2RldGFpbHMvaHV5bmd1eWVuXCI+RGV0YWlsczwvTGluaz5cbiAgICA8SGFzaFJvdXRlciAvPlxuICA8L3NlY3Rpb24+XG59XG5cbi8vIC4vY29tcG9uZW50cy9zZWFyY2guanNcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29tcG9uZW50IH0gZnJvbSAnZXh0LXJlYWN0JztcblxuQFJvdXRlKCcvc2VhcmNoJylcbkBDb21wb25lbnQoe1xuICB2aWV3OiAoKSA9PiA8c2VjdGlvbiAvPlxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCB7IH1cblxuLy8gLi9jb21wb25lbnRzL2RldGFpbHMuanNcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29tcG9uZW50IH0gZnJvbSAnZXh0LXJlYWN0JztcblxuQFJvdXRlKCcvZGV0YWlscy86bmFtZScpXG5AQ29tcG9uZW50KHtcbiAgdmlldzogKHsgcGFyYW1zIH0pID0+IDxoMT57cGFyYW1zLm5hbWV9PC9oMT5cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXRhaWxzIHsgfVxuXG4vLyAuL2NvbXBvbmVudHMvbm90Zm91bmQuanNcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUgfSBmcm9tICdleHQtcmVhY3QnO1xuXG5AUm91dGUoJyonKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90Rm91bmQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8aDE+J3t0aGlzLnByb3BzLnBhcmFtcy5yb3V0ZX0nIGRvZXNuJ3QgZXhpc3Q8L2gxPlxuICB9XG59YH1cbiAgICAgIDwvcHJlPlxuICAgIDwvQ29udGFpbmVyPlxuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29tcG9uZW50IH0gZnJvbSAnfi9yZXh0JztcbmltcG9ydCBDYXJkU3RvcmUgZnJvbSAnLi9zdG9yZS9jYXJkJztcblxuY2xhc3MgQ2FyZFZpZXcgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gQ2FyZFN0b3JlLmxvYWQoKTtcbiAgfVxuICByZW5kZXIoKSB7Y29uc29sZS5sb2coJ3JlbmRlciBjYXJkIHZpZXcnKVxuICAgIHJldHVybiA8c2VjdGlvbiAvPlxuICB9XG59XG5cbkBSb3V0ZSgnL2V4YW1wbGUvY2FyZHMnKVxuQENvbXBvbmVudCh7XG4gIHN0b3JlczogWyBDYXJkU3RvcmUgXSxcbiAgdmlldzogQ2FyZFZpZXdcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIHsgfSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29tcG9uZW50IH0gZnJvbSAnfi9yZXh0JztcblxuQFJvdXRlKCcvZXhhbXBsZS9kYXNoYm9hcmQnKVxuQENvbXBvbmVudCh7XG4gIHZpZXc6ICh7ICR2aWV3IH0pID0+IDxoMT57JHZpZXcudGl0bGV9PC9oMT5cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRpdGxlID0gJ0Rhc2hib2FyZCc7XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIENvbXBvbmVudCB9IGZyb20gJ34vcmV4dCc7XG5cbkBSb3V0ZSgnL2V4YW1wbGUvZGV0YWlscy86bmFtZScpXG5AQ29tcG9uZW50KHtcbiAgdmlldzogKHsgcGFyYW1zIH0pID0+IDxoMT57cGFyYW1zLm5hbWV9PC9oMT5cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXRhaWxzIHsgfSIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUgfSBmcm9tICd+L3JleHQnO1xuXG5AUm91dGUoJyonKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90Rm91bmQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8aDE+J3t0aGlzLnByb3BzLnBhcmFtcy5yb3V0ZX0nIGRvZXNuJ3QgZXhpc3Q8L2gxPlxuICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBDb21wb25lbnQgfSBmcm9tICd+L3JleHQnO1xuXG5AUm91dGUoJy9leGFtcGxlL3NlYXJjaCcpXG5AQ29tcG9uZW50KHtcbiAgdmlldzogKCkgPT4gPHNlY3Rpb24gLz5cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmQgeyB9IiwiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICd+L3JleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBTdG9yZSh7XG4gIHN0b3JlSWQ6ICdDYXJkU3RvcmUnLFxuICBwcm94eToge1xuICAgIHVybDogJy9kYXRhL2NhcmQuanNvbidcbiAgfVxufSkiLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBDb250YWluZXIgfSBmcm9tICd+L3JleHQnO1xuXG5AUm91dGUoJy8nKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2V0dGluZ1N0YXJ0ZWQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Q29udGFpbmVyIGNsYXNzTmFtZT1cIm1haW4gY29udGFpbmVyIHNjcm9sbGFibGVcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi1tZFwiPkdldHRpbmcgU3RhcnRlZDwvaDE+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlxuICAgICAgICBFeHRlbnNpb24gUmVhY3QgaXMgYSBsaWJyYXJ5IHRoYXQgYnVpbGQgb24gdG9wIG9mIFJlYWN0LCBoZWxwaW5nIHlvdSBidWlsZCBkYXRhLWludGVuc2l2ZSwgY3Jvc3MtcGxhdGZvcm0gd2ViIGFwcHMgZm9yIGRlc2t0b3BzLCB0YWJsZXRzLCBhbmQgc21hcnRwaG9uZXMuXG4gICAgICA8L3A+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwibWItbWRcIj5RdWljayBTdGFydDwvaDI+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwibWItbWRcIj4xLiBTZXR1cCBhIGRldmVsb3BtZW50IGVudmlyb21lbnQ8L2gzPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5Vc2UgPGNvZGU+bnBtPC9jb2RlPiBvciA8Y29kZT55YXJuPC9jb2RlPiB0byBpbnN0YWxsIGZvbGxvd2luZyBkZXBlbmRlbmNpZXM6PC9wPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG4gICAgICAgIDxsaT48Y29kZT5iYWJlbC1wb2x5ZmlsbDwvY29kZT48L2xpPlxuICAgICAgICA8bGk+PGNvZGU+YmFiZWwtcHJlc2V0LWVudjwvY29kZT48L2xpPlxuICAgICAgICA8bGk+PGNvZGU+YmFiZWwtcHJlc2V0LXJlYWN0PC9jb2RlPjwvbGk+XG4gICAgICAgIDxsaT48Y29kZT5kMzwvY29kZT48L2xpPlxuICAgICAgICA8bGk+PGNvZGU+cmVhY3Q8L2NvZGU+PC9saT5cbiAgICAgICAgPGxpPjxjb2RlPnJ4anM8L2NvZGU+PC9saT5cbiAgICAgICAgPGxpPjxjb2RlPmV4dC1yZWFjdDwvY29kZT48L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi1tZFwiPjIuIENyZWF0ZSBhIG5ldyBwcm9qZWN0PC9oMz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+VGhlIGZvbGxvd2luZyBpcyB0aGUgcmVjb21tZW5kZWQgZGlyZWN0b3J5IHN0cnVjdHVyZSBmb3IgYW4gRXh0ZW5zaW9uIFJlYWN0IGFwcGxpY2F0aW9uOjwvcD5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbiAgICAgICAgKy0tIG5vZGVfbW9kdWxlczogTlBNIGNvbXBvbmVudHM8YnIgLz5cbiAgICAgICAgKy0tIGRpc3Q8YnIgLz5cbiAgICAgICAgfCAgICstLSBhcHAubWluLmNzczxiciAvPlxuICAgICAgICB8ICAgKy0tIGFwcC5taW4uanM8YnIgLz5cbiAgICAgICAgfCAgICstLSBmcmFtZXdvcmsubWluLmpzPGJyIC8+XG4gICAgICAgICstLSBzcmM8YnIgLz5cbiAgICAgICAgfCAgICstLSBjc3M8YnIgLz5cbiAgICAgICAgfCAgIHwgICArLS0gX3ZhcmlhYmxlcy5zY3NzOiBhcHBsaWNhdGlvbiBzdHlsZXMgY29uc3RhbnQgdmFsdWVzPGJyIC8+XG4gICAgICAgIHwgICB8ICAgKy0tIGFwcC5zY3NzOiBhcHBsaWNhdGlvbiBzdHlsZXM8YnIgLz5cbiAgICAgICAgfCAgICstLSBqczxiciAvPlxuICAgICAgICB8ICAgfCAgICstLSBjb21tb246IGNvZGUgb2Ygc2hhcmVkIGZ1bmN0aW9ucyBvciBzaGFyZWQgY29tcG9uZW50czxiciAvPlxuICAgICAgICB8ICAgfCAgICstLSBjb21wb25lbnRzOiBjb2RlIChzY3JpcHRzIGFuZCB2aWV3cykgb2YgZXZlcnkgZmVhdHVyZSBzaG91bGQgYmUgYSBzdWItZGlyZWN0b3J5PGJyIC8+XG4gICAgICAgIHwgICB8ICAgKy0tIHNlcnZpY2VzOiBjb2RlIG9mIHNlcnZpY2VzPGJyIC8+XG4gICAgICAgIHwgICB8ICAgKy0tIHN0b3JlczogY29kZSBvZiBzdG9yZXM8YnIgLz5cbiAgICAgICAgfCAgIHwgICArLS0gYXBwLmpzOiBtYWluIHNjcmlwdDxiciAvPlxuICAgICAgICArLS0gZ3VscGZpbGUuYmFiZWwuanM6IGJ1aWxkIHNjcmlwdHMgKG9yIHdlYnBhY2suY29uZmlnLmpzIGlmIHlvdSBwcmVmZXIpPGJyIC8+XG4gICAgICAgICstLSBpbmRleC5odG1sPGJyIC8+XG4gICAgICAgICstLSBwYWNrYWdlLmpzb246IE5QTSBwYWNrYWdlIGRlZmluaXRpb248YnIgLz5cbiAgICAgICAgKy0tIHNlcnZlci5qczogY29kZSBvZiBsb2NhbCB3ZWIgc2VydmVyIChFeHByZXNzSlMpPGJyIC8+XG4gICAgICA8L3ByZT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+TGV04oCZcyBzdGFydCBldmFsdWF0aW5nIHRoZSBhcHBsaWNhdGlvbiBieSBsb29raW5nIGF0IDxjb2RlPmluZGV4Lmh0bWw8L2NvZGU+PC9wPlxuICAgICAgPHByZSBjbGFzc05hbWU9XCJtYi1tZFwiPlxue2A8IS0tIGluZGV4Lmh0bWwgLS0+XG48IURPQ1RZUEUgaHRtbD5cbjxodG1sPlxuPGhlYWQ+XG48bWV0YSBjaGFyc2V0PVwidXRmLThcIiAvPlxuPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuPHRpdGxlPkV4dGVuc2lvbiBSZWFjdCBBcHBsaWNhdGlvbjwvdGl0bGU+XG48bGluayBocmVmPVwiL25vZGUtbW9kdWxlcy9leHQtcmVhY3QvY3NzL3JleHQubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuPC9oZWFkPlxuPGJvZHk+XG48c2NyaXB0IHNyYz1cImFwcC5qc1wiPjwvc2NyaXB0PlxuPC9ib2R5PlxuPC9odG1sPmB9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+VG8gbGF1bmNoIHlvdXIgYXBwLCBhZGQgdGhlIGZvbGxvd2luZyB0byB5b3VyIDxjb2RlPmFwcC5qczwvY29kZT4gZmlsZTwvcD5cbiAgICAgIDxwcmU+XG57YC8vIGFwcC5qc1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJleHQgZnJvbSAnZXh0LXJlYWN0JztcbmltcG9ydCBWaWV3cG9ydCBmcm9tICcuL2NvbXBvbmVudHMvdmlld3BvcnQvdmlld3BvcnQnO1xuXG5SZXh0LmFwcGxpY2F0aW9uKHtcbiAgbGF1bmNoOiAoKSA9PiA8Vmlld3BvcnQgLz5cbn0pO2B9XG4gICAgICA8L3ByZT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIsIEhhc2hSb3V0ZXIsIExpbmsgfSBmcm9tICd+L3JleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWV3cG9ydCgpIHtcbiAgcmV0dXJuIDxDb250YWluZXI+XG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJjb250YWluZXJcIj48aDE+RXh0ZW5zaW9uIFJlYWN0PC9oMT48L2hlYWRlcj5cbiAgICA8Q29udGFpbmVyIGxheW91dD1cImNvbHVtblwiPlxuICAgICAgPGFzaWRlIHN0eWxlPXt7d2lkdGg6MzAwfX0+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXIgbmF2XCI+XG4gICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL1wiIHRleHQ9XCJHRVRUSU5HIFNUQVJURURcIiAvPjwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LXRleHRcIj5DT1JFIENPTkNFUFRTPC9zcGFuPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+PExpbmsgdG89XCIvY29yZS1jb25jZXB0cy9jb21wb25lbnRcIiB0ZXh0PVwiQ29tcG9uZW50XCIgLz48L2xpPlxuICAgICAgICAgICAgICA8bGk+PExpbmsgdG89XCIvY29yZS1jb25jZXB0cy9zY3JlZW4tbmF2aWdhdGlvblwiIHRleHQ9XCJTY3JlZW4gTmF2aWdhdGlvblwiIC8+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL2NvcmUtY29uY2VwdHMvZGF0YS1wYWNrYWdlXCIgdGV4dD1cIkRhdGEgUGFja2FnZVwiIC8+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+PExpbmsgdG89XCIvYXJjaGl0ZWN0dXJlXCIgdGV4dD1cIkFSQ0hJVEVDVFVSRVwiIC8+PC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtdGV4dFwiPlVJIENPTVBPTkVOVFM8L3NwYW4+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT48TGluayB0bz1cIi91aS1jb21wb25lbnRzL2dyaWRzXCIgdGV4dD1cIkdyaWRzXCIgLz48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9hc2lkZT5cbiAgICAgIDxDb250YWluZXI+PEhhc2hSb3V0ZXIgLz48L0NvbnRhaW5lcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPjxwPiZjb3B5OyAyMDE3IGh1eXRyb25nbmd1eWVuPC9wPjwvZm9vdGVyPlxuICA8L0NvbnRhaW5lcj5cbiAgLy8gcmV0dXJuIDxDb250YWluZXIgbGF5b3V0PVwiY29sdW1uXCI+XG4gIC8vICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJuYXZcIiBzdHlsZT17e3dpZHRoOjMwMH19PlxuICAvLyAgICAgPGhlYWRlcj5cbiAgLy8gICAgICAgPGgxIGNsYXNzTmFtZT1cImJyYW5kXCI+RXh0ZW5zaW9uIFJlYWN0PC9oMT5cbiAgLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgLy8gICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtci1hdXRvXCI+XG4gIC8vICAgICAgICAgPC91bD5cbiAgLy8gICAgICAgPC9kaXY+XG4gIC8vICAgICA8L2hlYWRlcj5cbiAgLy8gICAgIDxuYXYgY2xhc3NOYW1lPVwibWItYXV0byBkLWZsZXhcIj5cbiAgICAgICAgXG4gIC8vICAgICA8L25hdj5cbiAgLy8gICAgIDxmb290ZXI+XG4gIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LXRleHRcIj4mY29weTsgMjAxNyBodXl0cm9uZ25ndXllbjwvZGl2PlxuICAvLyAgICAgPC9mb290ZXI+XG4gIC8vICAgPC9Db250YWluZXI+XG4gIC8vICAgPENvbnRhaW5lcj5cbiAgLy8gICAgIDxIYXNoUm91dGVyIC8+XG4gIC8vICAgPC9Db250YWluZXI+XG4gIC8vIDwvQ29udGFpbmVyPlxufSIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEV4dCBmcm9tICd+L2NvcmUvZXh0JztcbmltcG9ydCBMaXN0IGZyb20gJ34vY29yZS9saXN0JztcbmltcG9ydCBEaWN0aW9uYXJ5IGZyb20gJ34vY29yZS9kaWN0aW9uYXJ5JztcbmltcG9ydCBPYnNlcnZhYmxlIGZyb20gJ34vcmVhY3RpdmUvb2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZyA9PiBDb250cm9sbGVyID0+IHtcbiAgY29uc3QgV3JhcHBlZENvbXBvbmVudCA9IGNvbmZpZy52aWV3O1xuICByZXR1cm4gY2xhc3MgSG9jQ29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIEV4dC5pbml0aWFsU3RhdGUodGhpcywge1xuICAgICAgICBzdG9yZXM6IHt9LFxuICAgICAgICBzZXJ2aWNlczoge30sXG4gICAgICAgIFtjb25maWcuY29tcG9uZW50QXMgfHwgJyR2aWV3J106IG5ldyBDb250cm9sbGVyKHByb3BzKVxuICAgICAgfSk7XG4gICAgICB0aGlzLm9uRGF0YUNoYW5nZWQgPSAoKSA9PiB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgdGhpcy5zZXRTdG9yZXMoTGlzdChjb25maWcuc3RvcmVzKS5yZWR1Y2UoKHN0b3Jlcywgc3RvcmUpID0+IHtcbiAgICAgICAgc3RvcmUuc3Vic2NyaWJlKHRoaXMub25EYXRhQ2hhbmdlZCk7XG4gICAgICAgIHN0b3Jlc1tzdG9yZS5zdG9yZUlkXSA9IHN0b3JlO1xuICAgICAgICByZXR1cm4gc3RvcmVzO1xuICAgICAgfSwge30pKTtcblxuICAgICAgdGhpcy5zZXRTZXJ2aWNlcyhMaXN0KGNvbmZpZy5zZXJ2aWNlcykucmVkdWNlKChzZXJ2aWNlcywgc2VydmljZSkgPT4ge1xuICAgICAgICBzZXJ2aWNlc1tzZXJ2aWNlLnNlcnZpY2VJZF0gPSBzZXJ2aWNlO1xuICAgICAgICByZXR1cm4gc2VydmljZXM7XG4gICAgICB9LCB7fSkpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgY29uc3QgeyBzdG9yZXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgICBmb3IgKGxldCBzdG9yZUlkIGluIHN0b3Jlcykge1xuICAgICAgICBjb25zdCBzdG9yZSA9IHN0b3Jlc1tzdG9yZUlkXTtcbiAgICAgICAgc3RvcmUuYXV0b0xvYWQgJiYgc3RvcmUubG9hZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtjb25zb2xlLmxvZygncmVuZGVyIHdyYXBwZWQgY29tcG9uZW50JylcbiAgICAgIHJldHVybiA8V3JhcHBlZENvbXBvbmVudCB7Li4udGhpcy5zdGF0ZX0gey4uLnRoaXMucHJvcHN9IC8+O1xuICAgIH1cbiAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRXh0IGZyb20gJ34vY29yZS9leHQnO1xuXG5jb25zdCBMQVlPVVRfQ0xBU1MgPSB7XG4gICdjb2x1bW4nOiAnZmxleC1yb3cnLFxuICAncm93JzogJ2ZsZXgtY29sdW1uJyxcbiAgJ2ZpdCc6ICcnLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gQ29udGFpbmVyKHsgY2xhc3NOYW1lID0gJycsIGxheW91dCA9ICdyb3cnLCBjaGlsZHJlbiwgLi4ub3RoZXJzIH0pIHtcbiAgcmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT17RXh0LmNsYXNzTmFtZSgnZC1mbGV4JywgTEFZT1VUX0NMQVNTW2xheW91dF0sIGNsYXNzTmFtZSl9IHsuLi5vdGhlcnN9PntjaGlsZHJlbn08L3NlY3Rpb24+XG59IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgRXh0IGZyb20gJ34vY29yZS9leHQnO1xuaW1wb3J0IExpc3QgZnJvbSAnfi9jb3JlL2xpc3QnO1xuLy8gaW1wb3J0IE9ic2VydmFibGUgZnJvbSAnfi9yZWFjdGl2ZS9vYnNlcnZhYmxlJztcblxuY29uc3QgUk9VVEVTID0ge30sXG4gICAgICBnZXRSb3V0ZSA9ICgpID0+IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKSB8fCAnLycsXG4gICAgICBnZXRSb3V0ZVBhdGggPSByb3V0ZSA9PiByb3V0ZS5zcGxpdCgnLycpO1xuXG5leHBvcnQgZnVuY3Rpb24gUm91dGUocm91dGUpIHtcbiAgcmV0dXJuIGNvbXAgPT4ge1xuICAgIFJPVVRFU1tyb3V0ZV0gPSB7XG4gICAgICByb3V0ZSxcbiAgICAgIGNvbXAsXG4gICAgICBwYXRoOiBnZXRSb3V0ZVBhdGgocm91dGUpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBMaW5rKHsgdG8sIGNsYXNzTmFtZSA9ICcnLCBhY3RpdmVDbGFzc05hbWUgPSAnYWN0aXZlJywgdGV4dCwgY2hpbGRyZW4sIC4uLm90aGVycyB9KSB7XG4gIHJldHVybiA8YSBocmVmPXtgIyR7dG99YH0gY2xhc3NOYW1lPXtFeHQuY2xhc3NOYW1lKCduYXYtbGluaycsIGNsYXNzTmFtZSwgeyBbYWN0aXZlQ2xhc3NOYW1lXTogdG8gPT09IGdldFJvdXRlKCkgfSl9IHsuLi5vdGhlcnN9PlxuICAgIHt0ZXh0IHx8IGNoaWxkcmVufVxuICA8L2E+XG59XG5cbmV4cG9ydCBjbGFzcyBIYXNoUm91dGVyIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIEV4dC5pbml0aWFsU3RhdGUodGhpcywgbWF0Y2hQYXRoKCkpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgKCF3aW5kb3cubG9jYXRpb24uaGFzaCkgJiYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJy8nKTtcbiAgICBPYnNlcnZhYmxlLmZyb21FdmVudCh3aW5kb3csICdoYXNoY2hhbmdlJykuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0U3RhdGUobWF0Y2hQYXRoKCkpKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJvdXRlLCBjb21wLCBwYXJhbXMgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAoIWNvbXApIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0NvbXBvbmVudCBub3QgZm91bmQhJyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChjb21wLCB7IHJvdXRlLCBwYXJhbXMgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWF0Y2hQYXRoKCkge1xuICBjb25zdCBjdXJyZW50Um91dGUgPSBnZXRSb3V0ZSgpLFxuICAgICAgICBwYXJhbXMgPSB7IHJvdXRlOiBjdXJyZW50Um91dGUgfTtcblxuICAvLyBiYXNpYyByb3V0ZSAod2l0aG91dCBwYXJhbXMpXG4gIGlmIChST1VURVNbY3VycmVudFJvdXRlXSkge1xuICAgIHJldHVybiB7IHJvdXRlOiBjdXJyZW50Um91dGUsIGNvbXA6IFJPVVRFU1tjdXJyZW50Um91dGVdLmNvbXAsIHBhcmFtcyB9O1xuICB9XG5cbiAgLy8gYWR2YW5jZWQgcm91dGUgKHdpdGggcGFyYW1zKVxuICBjb25zdCBjdXJyZW50UGF0aCA9IGdldFJvdXRlUGF0aChjdXJyZW50Um91dGUpO1xuICBmb3IobGV0IHJvdXRlIGluIFJPVVRFUykge1xuICAgIGNvbnN0IG1hcFJvdXRlID0gUk9VVEVTW3JvdXRlXSxcbiAgICAgICAgICByb3V0ZVBhdGggPSBtYXBSb3V0ZS5wYXRoO1xuXG4gICAgbGV0IG1hdGNoZWQgPSB0cnVlO1xuICAgIExpc3QobWFwUm91dGUucGF0aCkuZWFjaCgocm91dGVOYW1lLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHJvdXRlTmFtZSAhPT0gY3VycmVudFBhdGhbaW5kZXhdKSB7XG4gICAgICAgIGlmIChyb3V0ZU5hbWUuc3RhcnRzV2l0aCgnOicpKSB7IC8vIGRldGVjdCBwYXJhbSB2YWx1ZVxuICAgICAgICAgIHBhcmFtc1tyb3V0ZU5hbWUuc3Vic3RyaW5nKDEpXSA9IGN1cnJlbnRQYXRoW2luZGV4XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtYXRjaGVkID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAobWF0Y2hlZCkge1xuICAgICAgcmV0dXJuIHsgcm91dGU6IGN1cnJlbnRSb3V0ZSwgY29tcDogbWFwUm91dGUuY29tcCwgcGFyYW1zIH07XG4gICAgfVxuICB9XG5cbiAgLy8gd2l0aCBub3QgZm91bmQgc2NyZWVuXG4gIGlmIChST1VURVNbJyonXSkge1xuICAgIHJldHVybiB7IHJvdXRlOiBjdXJyZW50Um91dGUsIGNvbXA6IFJPVVRFU1snKiddLmNvbXAsIHBhcmFtcyB9O1xuICB9XG5cbiAgLy8gd2l0aG91dCBub3QgZm91bmQgc2NyZWVuXG4gIHJldHVybiB7IHJvdXRlOiBjdXJyZW50Um91dGUsIGNvbXA6IG51bGwsIHBhcmFtcyB9O1xufSIsImltcG9ydCBMaXN0IGZyb20gJy4vbGlzdCc7XG5cbmV4cG9ydCBjbGFzcyBEaWN0aW9uYXJ5IHtcbiAgY29uc3RydWN0b3Ioa2V5VmFsdWVzKSB7XG4gICAgdGhpcy5kYXRhID0ge307XG4gICAgaWYgKGtleVZhbHVlcyAmJiBrZXlWYWx1ZXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmRhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBrZXlWYWx1ZXMpO1xuICAgIH1cblxuICAgIHRoaXMua2V5cyA9ICgpID0+IExpc3QoT2JqZWN0LmtleXModGhpcy5kYXRhKSk7XG4gICAgdGhpcy52YWx1ZXMgPSAoKSA9PiBMaXN0KE9iamVjdC52YWx1ZXModGhpcy5kYXRhKSk7XG4gIH1cblxuICBlYWNoKGl0ZXJhdGVlKSB7XG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuZGF0YSkge1xuICAgICAgaXRlcmF0ZWUodGhpcy5kYXRhW2tleV0sIGtleSwgdGhpcy5kYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKGtleVZhbHVlcykgPT4gbmV3IERpY3Rpb25hcnkoa2V5VmFsdWVzKTsiLCJpbXBvcnQgeyBMaXN0IH0gZnJvbSAnLi9saXN0JztcblxuY2xhc3MgRE9NIGV4dGVuZHMgTGlzdCB7XG4gIHNob3coKSB7XG4gICAgdGhpcy5zZWxlY3RvcnMuZWFjaChzZWxlY3RvciA9PiBzZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJyk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMuc2VsZWN0b3JzLmVhY2goc2VsZWN0b3IgPT4gc2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJyk7XG4gIH1cblxuICAvLyBwYXJlbnQoKSB7XG4gIC8vICAgdGhpcy5jb21wID0gdGhpcy5jb21wLnBhcmVudEVsZW1lbnQ7XG4gIC8vICAgcmV0dXJuIHRoaXM7XG4gIC8vIH1cblxuICAvLyB3aWR0aCgpIHtcbiAgLy8gICByZXR1cm4gdGhpcy5jb21wLmNsaWVudFdpZHRoO1xuICAvLyB9XG5cbiAgLy8gaGVpZ2h0KCkge1xuICAvLyAgIHJldHVybiB0aGlzLmNvbXAuY2xpZW50SGVpZ2h0O1xuICAvLyB9XG5cbiAgLy8gZmluZChzZWxlY3Rvcikge1xuICAvLyAgIHJldHVybiB0aGlzLmNvbXAucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIC8vIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHNlbGVjdG9yKSA9PiBuZXcgRE9NKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTsiLCJpbXBvcnQgRE9NIGZyb20gJy4vZG9tJztcbmltcG9ydCBTdHJpbmcgZnJvbSAnLi9zdHJpbmcnO1xuaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0JztcbmltcG9ydCBEaWN0aW9uYXJ5IGZyb20gJy4vZGljdGlvbmFyeSc7XG5cbmV4cG9ydCBjbGFzcyBFeHQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLlNDUk9MTF9XSURUSCA9IHRoaXMuZ2V0U2Nyb2xsV2lkdGgoKTtcbiAgICB0aGlzLkJPUkRFUl9XSURUSCA9IDI7XG4gICAgdGhpcy5DSEVDS19DT0xVTU5fV0lEVEggPSAzMztcbiAgICB0aGlzLlVOS05PV05fRVJST1JfTVNHID0gJ0FuIHVua25vd24gZXJyb3IgaGFzIG9jY3VycmVkLic7XG5cbiAgICB0aGlzLmlzUHJpbWl0aXZlID0gdmFsdWUgPT4geyBjb25zdCB0eXBlID0gdHlwZW9mIHZhbHVlOyByZXR1cm4gdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZSA9PT0gJ251bWJlcicgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nOyB9XG4gICAgdGhpcy5pc1N0cmluZyA9IHZhbHVlID0+ICh0eXBlb2YgdmFsdWUpID09PSAnc3RyaW5nJztcbiAgICB0aGlzLmlzRnVuY3Rpb24gPSB2YWx1ZSA9PiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICB0aGlzLmlzT2JqZWN0ID0gdmFsdWUgPT4gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xuICAgIHRoaXMuaXNBcnJheSA9IHZhbHVlID0+IHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nO1xuXG4gICAgdGhpcy5jbG9uZSA9IG9iaiA9PiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpOyAvLyBkZWVwIGNsb25lXG5cbiAgICB0aGlzLkRPTSA9IERPTTtcbiAgICB0aGlzLlN0cmluZyA9IFN0cmluZztcbiAgICB0aGlzLkxpc3QgPSBMaXN0O1xuICAgIHRoaXMuTWFwID0gRGljdGlvbmFyeTtcbiAgICAvLyB0aGlzLlByb3ZpZGVyID0gbmV3IERpY3Rpb25hcnkoKTtcbiAgfVxuXG4gIGV4dGVuZCgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbi5hcHBseShudWxsLCBhcmd1bWVudHMpOyAvLyBpbW11dGFibGUgb2JqZWN0XG4gIH1cblxuICBpbml0aWFsU3RhdGUoY29tcCwgc3RhdGUpIHtcbiAgICBpZiAoIWNvbXAgfHwgIXN0YXRlKSB7IHJldHVybjsgfVxuICAgIGNvbXAuc3RhdGUgPSBzdGF0ZTtcbiAgICBmb3IgKGxldCBmaWVsZCBvZiBPYmplY3Qua2V5cyhzdGF0ZSkpIHtcbiAgICAgIGNvbXBbYHNldCR7U3RyaW5nLmNhcGl0YWxpemUoZmllbGQpfWBdID0gdmFsdWUgPT4gY29tcC5zZXRTdGF0ZSh7IFtmaWVsZF06IHZhbHVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNsYXNzTmFtZSguLi5leHByZXNzaW9ucykge1xuICAgIGNvbnN0IGNscyA9IFtdO1xuXG4gICAgTGlzdChleHByZXNzaW9ucykuZWFjaChleHAgPT4ge1xuICAgICAgaWYgKCFleHApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGV4cCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY2xzLnB1c2goZXhwKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc09iamVjdChleHApKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBleHApIHtcbiAgICAgICAgICBpZiAoZXhwW2tleV0gPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNscy5wdXNoKGtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGNscy5qb2luKCcgJyk7XG4gIH1cblxuICAvLyNyZWdpb24gRE9NXG4gIGNyZWF0ZUVsZW1lbnQoaHRtbCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5pbm5lckhUTUwgPSBodG1sO1xuICAgIHJldHVybiBkaXYuY2hpbGRyZW5bMF07XG4gIH1cblxuICBnZXRTY3JvbGxXaWR0aCgpIHtcbiAgICBjb25zdCBvdXRlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnPGRpdiBzdHlsZT1cInZpc2liaWxpdHk6IGhpZGRlbjsgd2lkdGg6IDEwMHB4OyBvdmVyZmxvdzogc2Nyb2xsO1wiPjwvZGl2PicpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3V0ZXIpO1xuICAgIGNvbnN0IHdpZHRoTm9TY3JvbGwgPSBvdXRlci5vZmZzZXRXaWR0aDtcblxuICAgIC8vIGFkZCBpbm5lcmRpdlxuICAgIGNvbnN0IGlubmVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCc8ZGl2IHN0eWxlPVwid2lkdGg6IDEwMCU7XCI+PC9kaXY+Jyk7XG4gICAgb3V0ZXIuYXBwZW5kQ2hpbGQoaW5uZXIpO1xuICAgIGNvbnN0IHdpZHRoV2l0aFNjcm9sbCA9IGlubmVyLm9mZnNldFdpZHRoO1xuXG4gICAgLy8gcmVtb3ZlIGRpdnNcbiAgICBvdXRlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG91dGVyKTtcblxuICAgIHJldHVybiB3aWR0aE5vU2Nyb2xsIC0gd2lkdGhXaXRoU2Nyb2xsO1xuICB9XG4gIC8vI2VuZHJlZ2lvblxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgRXh0KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcikge1xuICBjb25zdCBmbiA9IGRlc2NyaXB0b3IudmFsdWU7XG5cbiAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcihgQGJpbmQgZGVjb3JhdG9yIGlzIG9ubHkgYXBwbGllZCB0byBmdW5jdGlvbnMgbm90OiAke3R5cGVvZiBmbn1gKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldCgpIHtcbiAgICAgIHJldHVybiBmbi5iaW5kKHRoaXMpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQgPSA1MDApIHtcbiAgbGV0IHRpbWVvdXQ7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcyxcbiAgICAgICAgICBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICAgIGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgIH1cblxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gIH1cbn0iLCJleHBvcnQgY2xhc3MgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlLmxlbmd0aCkge1xuICAgICAgdGhpcy5kYXRhID0gdmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5jb2xsZWN0ID0gKCkgPT4gdGhpcy5kYXRhO1xuICAgIHRoaXMuY291bnQgPSAoKSA9PiB0aGlzLmRhdGEubGVuZ3RoO1xuICAgIHRoaXMuZ2V0QXQgPSBpbmRleCA9PiB0aGlzLmRhdGFbaW5kZXhdO1xuICAgIHRoaXMuYWRkID0gaXRlbSA9PiB0aGlzLmRhdGEucHVzaChpdGVtKTtcbiAgICB0aGlzLmluc2VydCA9IChpdGVtLCBpbmRleCA9IDApID0+IHRoaXMuZGF0YS5zcGxpY2UoaW5kZXgsIDAsIGl0ZW0pO1xuICAgIHRoaXMucmVtb3ZlQXQgPSAoaW5kZXgsIGNvdW50ID0gMSkgPT4gdGhpcy5kYXRhLnNwbGljZShpbmRleCwgY291bnQpO1xuICAgIHRoaXMuam9pbiA9IHNlcGFyYXRvciA9PiB0aGlzLmRhdGEuam9pbihzZXBhcmF0b3IpO1xuICB9XG5cbiAgZWFjaChpdGVyYXRlZSkge1xuICAgIGZvciAobGV0IGluZGV4IGluIHRoaXMuZGF0YSkge1xuICAgICAgaXRlcmF0ZWUodGhpcy5kYXRhW2luZGV4XSwgaW5kZXgsIHRoaXMuZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZmlsdGVyKHByZWRpY2F0ZSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIHRoaXMuZWFjaCgoaXRlbSwgaW5kZXgsIGFycmF5KSA9PiB7XG4gICAgICBpZiAocHJlZGljYXRlKGl0ZW0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBMaXN0KHJlc3VsdCk7XG4gIH1cblxuICBtYXAoaXRlcmF0ZWUpIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICB0aGlzLmVhY2goKGl0ZW0sIGluZGV4LCBhcnJheSkgPT4gcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGl0ZW0sIGluZGV4LCBhcnJheSkpO1xuICAgIHJldHVybiBuZXcgTGlzdChyZXN1bHQpO1xuICB9XG5cbiAgcmVkdWNlKGl0ZXJhdGVlLCBhY2N1bXVsYXRvcikge1xuICAgIHRoaXMuZWFjaCgoaXRlbSwgaW5kZXgsIGFycmF5KSA9PiBhY2N1bXVsYXRvciA9IGl0ZXJhdGVlKGFjY3VtdWxhdG9yLCBpdGVtLCBpbmRleCwgYXJyYXkpKTtcbiAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gIH1cblxuICBmaW5kSW5kZXgocHJlZGljYXRlKSB7XG4gICAgbGV0IGZvdW5kQXQgPSAtMTtcbiAgICBmb3IgKGxldCBpbmRleCBpbiB0aGlzLmRhdGEpIHtcbiAgICAgIGlmIChwcmVkaWNhdGUoaXRlbSwgaW5kZXgsIHRoaXMuZGF0YSkpIHtcbiAgICAgICAgZm91bmRBdCA9IGluZGV4O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZvdW5kQXQ7XG4gIH1cblxuICBmaW5kKHByZWRpY2F0ZSkge1xuICAgIGxldCBpbmRleCA9IHRoaXMuZmluZEluZGV4KHByZWRpY2F0ZSk7XG4gICAgcmV0dXJuIGluZGV4ID4gLTEgPyB0aGlzLmRhdGFbaW5kZXhdIDogbnVsbDtcbiAgfVxuXG4gIGNvbnRhaW5zKHByZWRpY2F0ZSkge1xuICAgIHJldHVybiB0aGlzLmZpbmQocHJlZGljYXRlKSAhPT0gbnVsbDtcbiAgfVxuXG4gIHJlbW92ZUlmKHByZWRpY2F0ZSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIHRoaXMuZWFjaCgoaXRlbSwgaW5kZXgsIGFycmF5KSA9PiB7XG4gICAgICBpZiAoIXByZWRpY2F0ZShpdGVtLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuZGF0YSA9IHJlc3VsdDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAodmFsdWUpID0+IG5ldyBMaXN0KHZhbHVlKTsiLCJjbGFzcyBTdHJpbmcge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNhcGl0YWxpemUgPSB2YWx1ZSA9PiB2YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKDEpO1xuICB9XG5cbiAgaHRtbEVuY29kZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7JylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvJy9nLCAnJiMzOTsnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG4gIH1cblxuICBodG1sRGVjb2RlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoLyZhbXA7L2csICcnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8mbHQ7L2csICc8JylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvJmd0Oz4vZywgJz4nKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8mIzM5Oy9nLCBcIidcIilcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvJnF1b3Q7L2csICdcIicpO1xuICB9XG5cbiAgdG9RdWVyeVN0cmluZyhwYXJhbXMsIHNlcCwgZW5jb2RlKSB7XG4gICAgc2VwICAgID0gc2VwID09PSB1bmRlZmluZWQgPyAnJicgOiBzZXA7XG4gICAgZW5jb2RlID0gZW5jb2RlID09PSBmYWxzZSA/IGZ1bmN0aW9uKHMpIHsgcmV0dXJuIHM7IH0gOiBlbmNvZGVVUklDb21wb25lbnQ7XG5cbiAgICBsZXQgcGFpcnMgPSBbXTtcbiAgICBmb3IgKGxldCBrZXkgaW4gcGFyYW1zKSB7XG4gICAgICBwYWlycy5wdXNoKGAke2tleX09JHtlbmNvZGUocGFyYW1zW2tleV0pfWApO1xuICAgIH1cbiAgICByZXR1cm4gcGFpcnMuam9pbihzZXApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBTdHJpbmcoKTsiLCJpbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnfi9jb3JlL2xpc3QnO1xuaW1wb3J0IE1vZGVsIGZyb20gJy4vbW9kZWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYnN0cmFjdFN0b3JlIGV4dGVuZHMgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICAvLyNyZWdpb24gY29uZmlnc1xuICAgIHRoaXMudG90YWxDb3VudCA9IDA7XG4gICAgdGhpcy5wYWdlU2l6ZSA9IDA7XG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XG4gICAgdGhpcy5zdWJqZWN0ID0gbmV3IFN1YmplY3QoKTtcbiAgICAvLyNlbmRyZWdpb25cblxuICAgIC8vI3JlZ2lvbiBwcm9wZXJ0aWVzXG4gICAgLy8jZW5kcmVnaW9uXG5cbiAgICAvLyNyZWdpb24gbWV0aG9kc1xuICAgIHRoaXMuY3JlYXRlUmVjb3JkID0gcmVjb3JkID0+IG5ldyBNb2RlbChyZWNvcmQsIHRoaXMpO1xuICAgIHRoaXMuZ2V0UmVjb3JkcyA9IHRoaXMuY29sbGVjdDtcbiAgICB0aGlzLmdldE1vZGlmaWVkUmVjb3JkcyA9ICgpID0+IHRoaXMuZmlsdGVyKHJlY29yZCA9PiByZWNvcmQuaXNNb2RpZmllZCgpKTtcbiAgICB0aGlzLmdldE5ld1JlY29yZHMgPSAoKSA9PiB0aGlzLmZpbHRlcihyZWNvcmQgPT4gcmVjb3JkLmlzTmV3bHlDcmVhdGVkKCkpO1xuICAgIHRoaXMuc3Vic2NyaWJlID0gb2JzZXJ2ZXIgPT4gdGhpcy5zdWJqZWN0LnN1YnNjcmliZSh7IG5leHQ6IHZhbHVlID0+IG9ic2VydmVyKHZhbHVlKSB9KTtcbiAgICB0aGlzLmZpcmVFdmVudCA9ICgpID0+IHRoaXMuc3ViamVjdC5uZXh0KHRoaXMpO1xuICAgIC8vI2VuZHJlZ2lvblxuICB9XG5cbiAgY2xlYXJEYXRhKHNpbGVudCA9IGZhbHNlKSB7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgIXNpbGVudCAmJiB0aGlzLmZpcmVFdmVudCgpO1xuICB9XG5cbiAgbG9hZERhdGEoZGF0YSkge1xuICAgIHRoaXMuY2xlYXJEYXRhKHRydWUpO1xuICAgIHRoaXMuZGF0YSA9IChuZXcgTGlzdChkYXRhKSkubWFwKHRoaXMuY3JlYXRlUmVjb3JkLmJpbmQodGhpcykpLmNvbGxlY3QoKTtcbiAgICB0aGlzLmZpcmVFdmVudCgpO1xuICB9XG5cbiAgY29tbWl0Q2hhbmdlcygpIHtcbiAgICB0aGlzLmZpbHRlcihyZWNvcmQgPT4gcmVjb3JkLmlzTW9kaWZpZWQoKSB8fCByZWNvcmQuaXNOZXdseUNyZWF0ZWQoKSkuZWFjaChyZWNvcmQgPT4gcmVjb3JkLnNhdmUoKSk7XG4gICAgdGhpcy5maXJlRXZlbnQoKTtcbiAgfVxuXG4gIHJlamVjdENoYW5nZXMoKSB7XG4gICAgdGhpcy5maWx0ZXIocmVjb3JkID0+IHJlY29yZC5pc01vZGlmaWVkKCkpLmVhY2gocmVjb3JkID0+IHJlY29yZC5yZWplY3QodHJ1ZSkpO1xuICAgIHRoaXMuZGF0YSA9IHRoaXMuZmlsdGVyKHJlY29yZCA9PiAhcmVjb3JkLmlzTmV3bHlDcmVhdGVkKCkpLmNvbGxlY3QoKTtcbiAgICB0aGlzLmZpcmVFdmVudCgpO1xuICB9XG59IiwiaW1wb3J0IEV4dCBmcm9tICd+L2NvcmUvZXh0JztcbmltcG9ydCBMaXN0IGZyb20gJ34vY29yZS9saXN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kZWwge1xuICBjb25zdHJ1Y3RvcihkYXRhLCBzdG9yZSkge1xuICAgIC8vI3JlZ2lvbiBjb25maWdzXG4gICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgLy8jcmVnaW9uIHByb3BlcnRpZXNcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMuc3RvcmUgPSBzdG9yZTtcbiAgICB0aGlzLmlkUHJvcGVydHkgPSAoc3RvcmUgJiYgc3RvcmUuaWRQcm9wZXJ0eSkgPyBzdG9yZS5pZFByb3BlcnR5IDogJ2lkJztcbiAgICBjb25zdCBmaWVsZENvbmZpZyA9IChzdG9yZSAmJiBzdG9yZS5maWVsZHMpID8gc3RvcmUuZmllbGRzIDogW107XG4gICAgdGhpcy5maWVsZHMgPSBMaXN0KGZpZWxkQ29uZmlnKS5tYXAoZmllbGQgPT4gRXh0LmlzU3RyaW5nKGZpZWxkKSA/ICh7IG5hbWU6IGZpZWxkLCB0eXBlOiAnc3RyaW5nJyB9KSA6IGZpZWxkKTtcbiAgICAvLyNlbmRyZWdpb25cblxuICAgIC8vI3JlZ2lvbiBtZXRob2RzXG4gICAgdGhpcy5nZXREYXRhID0gKCkgPT4gdGhpcy5kYXRhO1xuICAgIHRoaXMuZ2V0ID0gZmllbGROYW1lID0+IHRoaXMuZGF0YVtmaWVsZE5hbWVdO1xuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgdGhpcy5zYXZlKCk7XG4gIH1cblxuICBzZXQoZmllbGROYW1lLCBuZXdWYWx1ZSwgc2lsZW50KSB7XG4gICAgdGhpcy5kYXRhW2ZpZWxkTmFtZV0gPSBuZXdWYWx1ZTtcbiAgICB0aGlzLm1vZGlmaWVkID0gIXRoaXMuaXNFcXVhbChmaWVsZE5hbWUpO1xuICAgICghc2lsZW50ICYmIHRoaXMuc3RvcmUpICYmICh0aGlzLnN0b3JlLmZpcmVFdmVudCgpKTtcbiAgfVxuXG4gIHNhdmUoKSB7XG4gICAgdGhpcy5waGFudG9tID0gRXh0LmNsb25lKHRoaXMuZGF0YSk7XG4gICAgdGhpcy5tb2RpZmllZCA9IGZhbHNlO1xuICB9XG5cbiAgcmVqZWN0KHNpbGVudCkge1xuICAgIHRoaXMuZGF0YSA9IEV4dC5jbG9uZSh0aGlzLnBoYW50b20pO1xuICAgIHRoaXMuc2F2ZSgpO1xuICAgICghc2lsZW50ICYmIHRoaXMuc3RvcmUpICYmICh0aGlzLnN0b3JlLmZpcmVFdmVudCgpKTtcbiAgfVxuXG4gIGlzRXF1YWwoZmllbGQpIHtcbiAgICBjb25zdCBvbGRWYWx1ZSA9IHRoaXMucGhhbnRvbVtmaWVsZC5uYW1lXSxcbiAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMuZGF0YVtmaWVsZC5uYW1lXTtcblxuICAgIHJldHVybiBmaWVsZC5lcXVhbHMgPyBmaWVsZC5lcXVhbHMobmV3VmFsdWUsIG9sZFZhbHVlKSA6IG5ld1ZhbHVlID09PSBvbGRWYWx1ZTtcbiAgfVxuXG4gIGlzTW9kaWZpZWQoZmllbGROYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kaWZpZWQgJiYgIXRoaXMucGhhbnRvbVt0aGlzLmlkUHJvcGVydHldOyAvLyBzaG91bGQgbm90IGRldGVjdCBuZXcgcmVjb3JkIGFzIGEgbW9kaWZpZWQgcmVjb3JkXG4gIH1cblxuICBpc05ld2x5Q3JlYXRlZCgpIHtcbiAgICByZXR1cm4gIXRoaXMucGhhbnRvbVt0aGlzLmlkUHJvcGVydHldO1xuICB9XG5cbiAgc2V0U2VsZWN0ZWQoc2VsZWN0ZWQsIHNpbGVudCkge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICAoIXNpbGVudCAmJiB0aGlzLnN0b3JlKSAmJiAodGhpcy5zdG9yZS5maXJlRXZlbnQoKSk7XG4gIH1cbn0iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgRXh0IGZyb20gJ34vY29yZS9leHQnO1xuLy8gaW1wb3J0IEFqYXggZnJvbSAnLi9hamF4JztcbmltcG9ydCBBYnN0cmFjdFN0b3JlIGZyb20gJy4vYWJzdHJhY3Qtc3RvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm94eVN0b3JlIGV4dGVuZHMgQWJzdHJhY3RTdG9yZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICAvLyNyZWdpb24gY29uZmlnc1xuICAgIHRoaXMucHJveHkgPSB7XG4gICAgICByZWFkZXI6IHt9LFxuICAgICAgd3JpdGVyOiB7fVxuICAgIH07XG4gICAgLy8jZW5kcmVnaW9uXG4gIH1cblxuICBsb2FkKCkge1xuICAgIGxldCB7IHVybCwgbWV0aG9kID0gJ2dldCcsIHJlc3BvbnNlVHlwZSA9ICdqc29uJywgcGFyYW1zIH0gPSB0aGlzLnByb3h5O1xuICAgIChtZXRob2QgPT09ICdnZXQnICYmIHBhcmFtcykgJiYgKHVybCA9IGAke3VybH0/JHtTdHJpbmcudG9RdWVyeVN0cmluZyhwYXJhbXMpfWApO1xuICAgIE9ic2VydmFibGUuYWpheCh7XG4gICAgICB1cmwsXG4gICAgICBtZXRob2QsXG4gICAgICByZXNwb25zZVR5cGUsXG4gICAgICBib2R5OiBtZXRob2QgPT09ICdwb3N0JyAmJiBwYXJhbXNcbiAgICB9KVxuICAgIC5tYXAodmFsdWUgPT4gdmFsdWUucmVzcG9uc2UpXG4gICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCB7IHJlYWRlcjogeyByb290UHJvcGVydHksIHRvdGFsUHJvcGVydHkgfSA9IHt9IH0gPSB0aGlzLnByb3h5O1xuICAgICAgdGhpcy5sb2FkRGF0YShyb290UHJvcGVydHkgPyByZXNwb25zZVtyb290UHJvcGVydHldIDogcmVzcG9uc2UpO1xuICAgICAgdGhpcy50b3RhbENvdW50ID0gKHRoaXMucGFnZVNpemUgJiYgdG90YWxQcm9wZXJ0eSkgPyByZXNwb25zZVt0b3RhbFByb3BlcnR5XSA6IHRoaXMuY291bnQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGxvYWRQYWdlKHBhZ2UpIHtcbiAgLy8gICB0aGlzLmN1cnJlbnRQYWdlID0gcGFnZTtcbiAgLy8gICB0aGlzLnByb3h5LnBhcmFtcyA9IEV4dC5leHRlbmQoe30sIHRoaXMucHJveHkucGFyYW1zLCB7IHBhZ2U6IHRoaXMuY3VycmVudFBhZ2UsIHNpemU6IHRoaXMucGFnZVNpemUgfSk7XG4gIC8vICAgcmV0dXJuIHRoaXMubG9hZCh7fSk7XG4gIC8vIH1cblxuICAvLyBhc3luYyBzeW5jKHsgZG9uZSwgZmFpbCwgYWx3YXlzIH0pIHtcbiAgLy8gICB0aGlzLnByb3h5Lm1ldGhvZCA9ICdwb3N0JztcbiAgLy8gICB0aGlzLnByb3h5LnBhcmFtcyA9IHRoaXMuZ2V0TW9kaWZpZWRSZWNvcmRzKCkubWFwKHJlY29yZCA9PiByZWNvcmQuZGF0YSkuY29sbGVjdCgpO1xuICAvLyAgIHRoaXMucHJveHkucHJveHkucGFyYW1zLnB1c2goLi4udGhpcy5nZXROZXdSZWNvcmRzKCkubWFwKHJlY29yZCA9PiByZWNvcmQuZGF0YSkuY29sbGVjdCgpKTtcbiAgLy8gICBjb25zdCB7IHRyYW5zZm9ybSB9ID0gcHJveHkud3JpdGVyO1xuICAvLyAgIHRyYW5zZm9ybSAmJiAodGhpcy5wcm94eS5wYXJhbXMgPSB0cmFuc2Zvcm0odGhpcy5wcm94eS5wYXJhbXMpKTtcbiAgLy8gICBPYnNlcnZhYmxlLmFqYXgodGhpcy5wcm94eSkuc3Vic2NyaWJlKHtcbiAgLy8gICAgIG5leHQ6IGRvbmUsXG4gIC8vICAgICBlcnJvcjogZmFpbCxcbiAgLy8gICAgIGNvbXBsZXRlOiBhbHdheXNcbiAgLy8gICB9KTtcbiAgLy8gfVxufSIsImltcG9ydCBFeHQgZnJvbSAnfi9jb3JlL2V4dCc7XG5pbXBvcnQgUHJveHlTdG9yZSBmcm9tICcuL3Byb3h5LXN0b3JlJztcblxuY2xhc3MgU3RvcmUgZXh0ZW5kcyBQcm94eVN0b3JlIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoKTtcbiAgICBFeHQuZXh0ZW5kKHRoaXMsIGNvbmZpZyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnID0+IG5ldyBTdG9yZShjb25maWcpOyIsImltcG9ydCBFeHQgZnJvbSAnfi9jb3JlL2V4dCc7XG5cbmNsYXNzIEFqYXhPYnNlcnZhYmxlIHtcbiAgY29uc3RydWN0b3IodXJsT3JSZXF1ZXN0KSB7XG4gICAgdGhpcy5yZXF1ZXN0ID0gRXh0LmV4dGVuZCh7XG4gICAgICB1cmw6ICcnLFxuICAgICAgcGFyYW1zOiAnJyxcbiAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsXG4gICAgICBtZXRob2Q6ICdnZXQnLFxuICAgIH0sIEV4dC5pc1N0cmluZyh1cmxPclJlcXVlc3QpID8geyB1cmw6IHVybE9yUmVxdWVzdCB9IDogdXJsT3JSZXF1ZXN0KTtcblxuICAgIHRoaXMucHJvbWlzZSA9IHJlcXVlc3QgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5jcmVhdGVSZXF1ZXN0KHJlcXVlc3QsIChlcnJvciwgcmVzcG9uc2UpID0+IGVycm9yID8gcmVqZWN0KGVycm9yKSA6IHJlc29sdmUocmVzcG9uc2UpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIHN1YnNjcmliZSh7IG5leHQsIGVycm9yLCBjb21wbGV0ZSB9KSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCByZXNwb25zZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlc3BvbnNlID0gYXdhaXQgdGhpcy5wcm9taXNlKHsgdXJsLCBjb250ZW50VHlwZSwgbWV0aG9kLCBwYXJhbXMgfSk7XG4gICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBDYW5ub3QgZ2V0IHJlc3BvbnNlIGZyb20gc2VydmVyIGZvciB1cmwgWyR7dXJsfV0gY2F1c2VkIGJ5OiAke2V4fWApO1xuICAgICAgICBlcnJvciAmJiBlcnJvcihleCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV4dCA/IG5leHQocmVzcG9uc2UpIDogcmVzcG9uc2U7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGNvbXBsZXRlICYmIGNvbXBsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgc2VuZCh7IHVybCwgY29udGVudFR5cGUsIG1ldGhvZCwgcGFyYW1zIH0sIGRvbmUpIHtcbiAgICAobWV0aG9kID09PSAnZ2V0JyAmJiBwYXJhbXMpICYmICh1cmwgPSBgJHt1cmx9PyR7U3RyaW5nLnRvUXVlcnlTdHJpbmcocGFyYW1zKX1gKTtcbiAgICBjb25zdCB4aHIgPSBFeHQuWEhSO1xuICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgY29udGVudFR5cGUpO1xuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICBpZih4aHIucmVhZHlTdGF0ZSA9PT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xuICAgICAgICAvLyBhamF4IHdpbGwgcmV0dXJuIGFzIGEganNvbiBieSBkZWZhdWx0LCBpZiBwYXJzZXIgZXJyb3IgdGhlbiBpdCB3aWxsIHJldHVybiBhIHJhdyBzdHJpbmdcbiAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkb25lKG51bGwsIEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGRvbmUobnVsbCwgeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkb25lKEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGRvbmUoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHhoci5zZW5kKHBhcmFtcyA/IEpTT04uc3RyaW5naWZ5KHBhcmFtcykgOiBudWxsKTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUodXJsT3JSZXF1ZXN0KSB7XG4gICAgcmV0dXJuIG5ldyBBamF4T2JzZXJ2YWJsZSh1cmxPclJlcXVlc3QpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRPYnNlcnZhYmxlIHtcbiAgY29uc3RydWN0b3IodGFyZ2V0LCBldmVudE5hbWUsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICB0aGlzLmV2ZW50TmFtZSA9IGV2ZW50TmFtZTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50TmFtZSwgb2JzZXJ2ZXIsIHRoaXMub3B0aW9ucyk7XG4gIH1cblxuICB1bnN1YnNjcmliZShvYnNlcnZlcikge1xuICAgIHRoaXMudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5ldmVudE5hbWUsIG9ic2VydmVyLCB0aGlzLm9wdGlvbnMpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZSh0YXJnZXQsIGV2ZW50TmFtZSwgb3B0aW9ucyA9IGZhbHNlKSB7XG4gICAgcmV0dXJuIG5ldyBFdmVudE9ic2VydmFibGUodGFyZ2V0LCBldmVudE5hbWUsIG9wdGlvbnMpO1xuICB9XG59IiwiaW1wb3J0IE9wZXJhdG9yIGZyb20gJy4vb3BlcmF0b3InO1xuaW1wb3J0IEV2ZW50T2JzZXJ2YWJsZSBmcm9tICcuL2V2ZW50JztcbmltcG9ydCBBamF4T2JzZXJ2YWJsZSBmcm9tICcuL2FqYXgnO1xuXG4vKipcbiAqIEZyb20gUmVhY3RpdmVYIGRvY3M6XG4gKlxuICogT2JzZXJ2YWJsZTogQW4gaW50ZXJmYWNlIHRoYXQgbGlzdGVucyBmb3IgaW5jb21pbmcgbm90aWZpY2F0aW9ucyBvdmVyIGEgcGVyaW9kIG9mIHRpbWVcbiAqIGFuZCBwdXNoZXMgdGhlbSB0byBhbm90aGVyIGludGVyZmFjZSB0aGF0IHJlYWN0cyB0byB0aGVtLlxuICpcbiAqIFN1YnNjcmlwdGlvbjogV2hlbiBhbiBPYnNlcnZhYmxlIGludGVyZmFjZSBzdGFydHMgZG9pbmcgaXRzIHdvcmssXG4gKiBpLmUuIGxpc3RlbmluZyBmb3Igbm90aWZpY2F0aW9ucyBhbmQgcHVzaGluZyB0aGVtIG91dC5cbiAqXG4gKiBPYnNlcnZlcjogQW4gaW50ZXJmYWNlIHRoYXQgcmVhY3RzIHRvIGRhdGEgcHVzaGVkIGZyb20gYW4gT2JzZXJ2YWJsZS5cbiAqXG4gKiBPcGVyYXRvcnM6IEZ1bmN0aW9ucyB1c2VkIHRvIG1hbmlwdWxhdGUgYW4gT2JzZXJ2YWJsZeKAmXMgb3V0cHV0LCBlLmcuIGZpbHRlciwgbWFwLCByZWR1Y2UsIGV0Yy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JzZXJ2YWJsZSBleHRlbmRzIE9wZXJhdG9yIHtcbiAgY29uc3RydWN0b3Ioc3Vic2NyaWJlKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN1YnNjcmliZSA9IHN1YnNjcmliZTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUoc3Vic2NyaWJlKSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKHN1YnNjcmliZSk7XG4gIH1cblxuICAvKipcbiAgICogRm9yIGV4YW1wbGU6XG4gICAqIGNvbnN0IHVuc3ViY3JpYmUgPSBPYnNlcnZhYmxlLmZyb21FdmVudChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQnKSwgJ2NoYW5nZScpLnN1YnNjcmliZSh7XG4gICAqICAgIG5leHQ6IGUgPT4gY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpXG4gICAqIH0pO1xuICAgKlxuICAgKiBzZXRUaW1lb3V0KHVuc3ViY3JpYmUsIDUwMDApO1xuICAgKlxuICAgKiBAcGFyYW0gdGFyZ2V0XG4gICAqIEBwYXJhbSBldmVudE5hbWVcbiAgICovXG4gIHN0YXRpYyBmcm9tRXZlbnQodGFyZ2V0LCBldmVudE5hbWUpIHtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUob2JzZXJ2ZXIgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlID0+IG9ic2VydmVyLm5leHQoZSk7XG4gICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrLCBmYWxzZSk7XG4gICAgICByZXR1cm4gKCkgPT4gdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaywgZmFsc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGFqYXgodXJsT3JSZXF1ZXN0KSB7XG4gICAgcmV0dXJuIEFqYXhPYnNlcnZhYmxlLmNyZWF0ZSh1cmxPclJlcXVlc3QpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3BlcmF0b3Ige1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmZpbHRlciA9IHByZWRpY2F0ZSA9PiB7IC8qIHRvIGJlIGltcGxlbWVudGVkICovIH07XG4gICAgdGhpcy5tYXAgPSBwcmVkaWNhdGUgPT4geyAvKiB0byBiZSBpbXBsZW1lbnRlZCAqLyB9O1xuICAgIHRoaXMucmVkdWNlID0gcHJlZGljYXRlID0+IHsgLyogdG8gYmUgaW1wbGVtZW50ZWQgKi8gfTtcbiAgfVxufSIsImltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBFeHQgfSBmcm9tICcuL2NvcmUvZXh0JztcblxuY2xhc3MgUmV4dCBleHRlbmRzIEV4dCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgLy8gdGhpcy5DYWNoZSA9IHJlcXVpcmUoJy4vZGF0YS9jYWNoZScpO1xuICAgIC8vIHRoaXMuTW9kZWwgPSByZXF1aXJlKCcuL2RhdGEvbW9kZWwnKTtcbiAgICAvLyB0aGlzLk9ic2VydmFibGUgPSByZXF1aXJlKCcuL3JlYWN0aXZlL29ic2VydmFibGUnKTtcbiAgICAvLyB0aGlzLkRpYWxvZ01hbmFnZXIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvZGlhbG9nJyk7XG4gIH1cblxuICBhc3luYyBhcHBsaWNhdGlvbih7IGxhdW5jaCB9KSB7XG4gICAgaWYgKGxhdW5jaCkge1xuICAgICAgY29uc3Qgcm9vdCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnPGRpdiBpZD1cInJlYWN0LXJvb3RcIj48L2Rpdj4nKSxcbiAgICAgICAgICAgIHZpZXdwb3J0ID0gYXdhaXQgbGF1bmNoKCk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJvb3QpO1xuICAgICAgcmVuZGVyKHZpZXdwb3J0LCByb290KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFJleHQoKTtcblxuLy8jcmVnaW9uIENvbXBvbmVudFxuZXhwb3J0IHsgSGFzaFJvdXRlciwgTGluayB9IGZyb20gJy4vY29tcG9uZW50cy9yb3V0ZXInO1xuZXhwb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRhaW5lcic7XG4vLyBleHBvcnQgeyBCdXR0b24sIEJ1dHRvbkxpbmssIEZpZWxkLCBUZXh0RmllbGQsIENoZWNrYm94LCBUZXh0QXJlYSB9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtJztcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgR3JpZCB9IGZyb20gJy4vY29tcG9uZW50cy9ncmlkJztcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgTGlzdFZpZXcgfSBmcm9tICcuL2NvbXBvbmVudHMvbGlzdCc7XG4vLyBleHBvcnQgeyBEaWFsb2cgfSBmcm9tICcuL2NvbXBvbmVudHMvZGlhbG9nJztcbi8vI2VuZHJlZ2lvblxuXG4vLyNyZWdpb24gRGVjb3JhdG9yIChvciBIaWdoZXIgT3JkZXIgRnVuY3Rpb24gb3IgSGlnaGVyIE9yZGVyIENvbXBvbmVudClcbmV4cG9ydCB7IGJpbmQgfSBmcm9tICcuL2NvcmUvZXh0JztcbmV4cG9ydCB7IFJvdXRlIH0gZnJvbSAnLi9jb21wb25lbnRzL3JvdXRlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbXBvbmVudCB9IGZyb20gJy4vYXBwL2NvbXBvbmVudCc7XG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIFNlcnZpY2UgfSBmcm9tICcuL2FwcC9zZXJ2aWNlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3RvcmUgfSBmcm9tICcuL2RhdGEvc3RvcmUnO1xuLy8jZW5kcmVnaW9uIl19
