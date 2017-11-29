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
      if (!comp || !state) {
        return;
      }
      comp.state = state;

      var _loop = function _loop(field) {
        comp['set' + String.capitalize(field)] = function (value) {
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

      Ext.List(expressions).each(function (exp) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkb2NzL3NyYy9qcy9hcHAuanMiLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2FyY2hpdGVjdHVyZS9hcmNoaXRlY3R1cmUuanN4IiwiZG9jcy9zcmMvanMvY29tcG9uZW50cy9jb3JlLWNvbmNlcHRzL2NvbXBvbmVudC5qc3giLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2NvcmUtY29uY2VwdHMvZGF0YS1wYWNrYWdlLmpzeCIsImRvY3Mvc3JjL2pzL2NvbXBvbmVudHMvY29yZS1jb25jZXB0cy9zY3JlZW4tbmF2aWdhdGlvbi5qc3giLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUvY2FyZHMuanMiLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUvZGFzaGJvYXJkLmpzIiwiZG9jcy9zcmMvanMvY29tcG9uZW50cy9leGFtcGxlL2RldGFpbHMuanMiLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUvbm90Zm91bmQuanMiLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUvc2VhcmNoLmpzIiwiZG9jcy9zcmMvanMvY29tcG9uZW50cy9leGFtcGxlL3N0b3JlL2NhcmQuanMiLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2dldHRpbmctc3RhcnRlZC9nZXR0aW5nLXN0YXJ0ZWQuanN4IiwiZG9jcy9zcmMvanMvY29tcG9uZW50cy92aWV3cG9ydC92aWV3cG9ydC5qc3giLCJzcmMvYXBwL2NvbXBvbmVudC5qcyIsInNyYy9jb21wb25lbnRzL2NvbnRhaW5lci5qc3giLCJzcmMvY29tcG9uZW50cy9yb3V0ZXIuanN4Iiwic3JjL2NvcmUvZGljdGlvbmFyeS5qcyIsInNyYy9jb3JlL2RvbS5qcyIsInNyYy9jb3JlL2V4dC5qcyIsInNyYy9jb3JlL2xpc3QuanMiLCJzcmMvY29yZS9zdHJpbmcuanMiLCJzcmMvZGF0YS9hYnN0cmFjdC1zdG9yZS5qcyIsInNyYy9kYXRhL21vZGVsLmpzIiwic3JjL2RhdGEvcHJveHktc3RvcmUuanMiLCJzcmMvZGF0YS9zdG9yZS5qcyIsInNyYy9yZWFjdGl2ZS9hamF4LmpzIiwic3JjL3JlYWN0aXZlL2V2ZW50LmpzIiwic3JjL3JlYWN0aXZlL29ic2VydmFibGUuanMiLCJzcmMvcmVhY3RpdmUvb3BlcmF0b3IuanMiLCJzcmMvcmV4dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxlQUFLLFdBQUwsQ0FBaUI7QUFDZixVQUFRLENBQ04sUUFBUSxpQ0FBUixDQURNLENBRE87QUFJZixTQUFPLENBQ0wsUUFBUSw4Q0FBUixDQURLLEVBRUwsUUFBUSxzQ0FBUixDQUZLLEVBR0wsUUFBUSw4Q0FBUixDQUhLLEVBSUwsUUFBUSx5Q0FBUixDQUpLLEVBS0wsUUFBUSx3Q0FBUixDQUxLO0FBTUw7QUFDQSxVQUFRLGdDQUFSLENBUEssRUFRTCxRQUFRLDZCQUFSLENBUkssRUFTTCxRQUFRLDhCQUFSLENBVEssRUFVTCxRQUFRLCtCQUFSLENBVkssRUFXTCxRQUFRLDRCQUFSLENBWEssQ0FKUTtBQWlCZixVQUFRO0FBQUEsV0FBTSx1REFBTjtBQUFBO0FBakJPLENBQWpCOzs7Ozs7Ozs7Ozs7OztBQ0xBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFHcUIsWSxXQURwQixpQkFBTSxlQUFOLEM7Ozs7Ozs7Ozs7OzZCQUVVO0FBQ1AsYUFBTztBQUFBO0FBQUEsVUFBVyxXQUFVLDJCQUFyQjtBQUNMO0FBQUE7QUFBQSxZQUFJLFdBQVUsT0FBZDtBQUFBO0FBQUEsU0FESztBQUVMO0FBQUE7QUFBQSxZQUFHLFdBQVUsT0FBYjtBQUFBO0FBQUEsU0FGSztBQU1MO0FBQUE7QUFBQSxZQUFJLFdBQVUsT0FBZDtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUFBO0FBQUEsV0FERjtBQVFFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtB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QUFDMUMsNEJBQVEsTUFBTSxPQUFkO0FBQ0EsMkJBQU8sTUFBTSxPQUFiLElBQXdCLEtBQXhCO0FBQ0EsMkJBQU8sTUFBUDtBQUNELG1CQUpELEVBSUcsRUFKSDtBQUtEOztxQkFDRyxNOzs7OztBQUNJLG9CLEdBQU8sS0FBSyxhQUFMLENBQW1CLDZCQUFuQixDOzt1QkFDVSxROzs7QUFBakIsd0I7O0FBQ04seUJBQVMsSUFBVCxDQUFjLFdBQWQsQ0FBMEIsSUFBMUI7QUFDQSxzQ0FBTyxRQUFQLEVBQWlCLElBQWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBS1MsSUFBSSxJQUFKLEU7O0FBRWYiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJleHQgZnJvbSAnfi9yZXh0JztcbmltcG9ydCBWaWV3cG9ydCBmcm9tICcuL2NvbXBvbmVudHMvdmlld3BvcnQvdmlld3BvcnQnO1xuXG5SZXh0LmFwcGxpY2F0aW9uKHtcbiAgc3RvcmVzOiBbXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2V4YW1wbGUvc3RvcmUvY2FyZCcpLFxuICBdLFxuICB2aWV3czogW1xuICAgIHJlcXVpcmUoJy4vY29tcG9uZW50cy9nZXR0aW5nLXN0YXJ0ZWQvZ2V0dGluZy1zdGFydGVkJyksXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2NvcmUtY29uY2VwdHMvY29tcG9uZW50JyksXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2NvcmUtY29uY2VwdHMvc2NyZWVuLW5hdmlnYXRpb24nKSxcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvY29yZS1jb25jZXB0cy9kYXRhLXBhY2thZ2UnKSxcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvYXJjaGl0ZWN0dXJlL2FyY2hpdGVjdHVyZScpLFxuICAgIC8vIHJlcXVpcmUoJy4vY29tcG9uZW50cy91aS1jb21wb25lbnRzL2dyaWQnKSxcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvZXhhbXBsZS9kYXNoYm9hcmQnKSxcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvZXhhbXBsZS9zZWFyY2gnKSxcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvZXhhbXBsZS9kZXRhaWxzJyksXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2V4YW1wbGUvbm90Zm91bmQnKSxcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvZXhhbXBsZS9jYXJkcycpLFxuICBdLFxuICBsYXVuY2g6ICgpID0+IDxWaWV3cG9ydCAvPlxufSk7IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29udGFpbmVyIH0gZnJvbSAnfi9yZXh0JztcblxuQFJvdXRlKCcvYXJjaGl0ZWN0dXJlJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFyY2hpdGVjdHVyZSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxDb250YWluZXIgY2xhc3NOYW1lPVwibWFpbiBjb250YWluZXIgc2Nyb2xsYWJsZVwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLW1kXCI+QXBwbGljYXRpb24gQXJjaGl0ZWN0dXJlPC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG4gICAgICAgIEV4dGVuc2lvbiBSZWFjdCBwcm92aWRlcyBzdXBwb3J0IGZvciBNVkMrVk0gYXBwbGljYXRpb24gYXJjaGl0ZWN0dXJlcy4gXG4gICAgICAgIFRvIHVuZGVyc3RhbmQgd2hhdCBpcyBNVkMrVk0sIHdlIHNob3VsZCBzdGFydCBieSBmdXJ0aGVyIGRlZmluaW5nIHdoYXQgdGhlIHZhcmlvdXMgYWJicmV2aWF0aW9ucyByZXByZXNlbnQuXG4gICAgICA8L3A+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWItbWRcIj5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxzdHJvbmc+KE0pIE1vZGVsPC9zdHJvbmc+IC0gVGhpcyBpcyB0aGUgZGF0YSBmb3IgeW91ciBhcHBsaWNhdGlvbi5cbiAgICAgICAgICBBIHNldCBvZiBjbGFzc2VzIChjYWxsZWQgXCJNb2RlbHNcIikgZGVmaW5lcyB0aGUgZmllbGRzIGZvciB0aGVpciBkYXRhIChlLmcuIGEgVXNlciBtb2RlbCB3aXRoIHVzZXItbmFtZSBhbmQgcGFzc3dvcmQgZmllbGRzKS5cbiAgICAgICAgICBNb2RlbHMga25vdyBob3cgdG8gcGVyc2lzdCB0aGVtc2VsdmVzIHRocm91Z2ggdGhlIGRhdGEgcGFja2FnZSBhbmQgY2FuIGJlIGxpbmtlZCB0byBvdGhlciBtb2RlbHMgdmlhIGFzc29jaWF0aW9ucy5cbiAgICAgICAgICBNb2RlbHMgYXJlIG5vcm1hbGx5IHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBTdG9yZXMgdG8gcHJvdmlkZSBkYXRhIGZvciBncmlkcyBhbmQgb3RoZXIgY29tcG9uZW50cy5cbiAgICAgICAgICBNb2RlbHMgYXJlIGFsc28gYW4gaWRlYWwgbG9jYXRpb24gZm9yIGFueSBkYXRhIGxvZ2ljIHRoYXQgeW91IG1heSBuZWVkLCBzdWNoIGFzIHZhbGlkYXRpb24sIGNvbnZlcnNpb24sIGV0Yy5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxzdHJvbmc+KFYpIFZpZXc8L3N0cm9uZz4gLSBBIFZpZXcgaXMgYW55IHR5cGUgb2YgY29tcG9uZW50IHRoYXQgaXMgdmlzdWFsbHkgcmVwcmVzZW50ZWQuIEZvciBpbnN0YW5jZSwgZ3JpZHMsIHRyZWVzIGFuZCBwYW5lbHMgYXJlIGFsbCBjb25zaWRlcmVkIFZpZXdzLlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPHN0cm9uZz4oQykgQ29udHJvbGxlcjwvc3Ryb25nPiAtIENvbnRyb2xsZXJzIGFyZSB1c2VkIGFzIGEgcGxhY2UgdG8gbWFpbnRhaW4gdGhlIHZpZXcncyBsb2dpYyB0aGF0IG1ha2VzIHlvdXIgYXBwIHdvcmsuXG4gICAgICAgICAgVGhpcyBjb3VsZCBlbnRhaWwgcmVuZGVyaW5nIHZpZXdzLCByb3V0aW5nLCBpbnN0YW50aWF0aW5nIE1vZGVscywgYW5kIGFueSBvdGhlciBzb3J0IG9mIGFwcCBsb2dpYy5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxzdHJvbmc+KFZNKSBWaWV3TW9kZWw8L3N0cm9uZz4gLSBUaGUgVmlld01vZGVsIGlzIGEgY2xhc3MgdGhhdCBtYW5hZ2VzIGRhdGEgc3BlY2lmaWMgdG8gdGhlIFZpZXcuXG4gICAgICAgICAgSXQgYWxsb3dzIGludGVyZXN0ZWQgY29tcG9uZW50cyB0byBiaW5kIHRvIGl0IGFuZCBiZSB1cGRhdGVkIHdoZW5ldmVyIHRoaXMgZGF0YSBjaGFuZ2VzLlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi1tZFwiPk1vZGVscyBhbmQgU3RvcmVzPC9oMz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG4gICAgICAgIDxjb2RlPk1vZGVsczwvY29kZT4gYW5kIDxjb2RlPlN0b3JlczwvY29kZT4gbWFrZSB1cCB0aGUgaW5mb3JtYXRpb24gZ2F0ZXdheSBvZiB5b3VyIGFwcGxpY2F0aW9uLlxuICAgICAgICBNb3N0IG9mIHlvdXIgZGF0YSBpcyBzZW50LCByZXRyaWV2ZWQsIG9yZ2FuaXplZCwgYW5kIFwibW9kZWxlZFwiIGJ5IHRoZXNlIHR3byBjbGFzc2VzLlxuICAgICAgPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5cbiAgICAgICAgQSA8Y29kZT5Nb2RlbDwvY29kZT4gcmVwcmVzZW50cyBhbnkgdHlwZSBvZiBwZXJzaXN0LWFibGUgZGF0YSBpbiB5b3VyIGFwcGxpY2F0aW9uLlxuICAgICAgICBFYWNoIG1vZGVsIGhhcyBmaWVsZHMgYW5kIGZ1bmN0aW9ucyB0aGF0IGFsbG93IHlvdXIgYXBwbGljYXRpb24gdG8gXCJtb2RlbFwiIGRhdGEuXG4gICAgICAgIE1vZGVscyBhcmUgbW9zdCBjb21tb25seSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggc3RvcmVzLlxuICAgICAgICBTdG9yZXMgY2FuIHRoZW4gYmUgY29uc3VtZWQgYnkgZGF0YS1ib3VuZCBjb21wb25lbnRzIGxpa2UgZ3JpZHMsIHRyZWVzLCBhbmQgY2hhcnRzLlxuICAgICAgPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5cbiAgICAgICAgQSA8Y29kZT5TdG9yZTwvY29kZT4gaXMgYSBjbGllbnQgc2lkZSBjYWNoZSBvZiByZWNvcmRzIChpbnN0YW5jZXMgb2YgYSBNb2RlbCBjbGFzcykuXG4gICAgICAgIFN0b3JlcyBwcm92aWRlIGZ1bmN0aW9ucyBmb3IgcXVlcnlpbmcgdGhlIHJlY29yZHMgY29udGFpbmVkIHdpdGhpbi5cbiAgICAgIDwvcD5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi1tZFwiPlZpZXdDb250cm9sbGVyczwvaDM+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPkV4dGVuc2lvbiBSZWFjdCBkZWxpdmVycyBzb21lIGV4Y2l0aW5nIGltcHJvdmVtZW50cyBmb3IgUmVhY3QuIFRvIGVuaGFuY2UgTVZDIGFwcGxpY2F0aW9ucywgRXh0ZW5zaW9uIFJlYWN0IHByb3ZpZGVzIFZpZXdDb250cm9sbGVycywgYWxzbyBjYWxsZWQgYXMgQ29tcG9uZW50OjwvcD5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtYi1tZFwiPlxuICAgICAgICA8bGk+U2ltcGxpZmllcyB0aGUgY29ubmVjdGlvbiB0byB2aWV3cyB1c2luZyDigJxDb21wb25lbnTigJ0gZGVjb3JhdG9yLjwvbGk+XG4gICAgICAgIDxsaT5MZXZlcmFnZXMgdGhlIGxpZmUgY3ljbGUgb2Ygdmlld3MgdG8gYXV0b21hdGljYWxseSBtYW5hZ2UgdGhlaXIgYXNzb2NpYXRlZC48L2xpPlxuICAgICAgICA8bGk+UmVkdWNlcyBjb21wbGV4aXR5IGJhc2VkIG9uIGEgb25lLXRvLW9uZSByZWxhdGlvbnNoaXAgd2l0aCB0aGUgbWFuYWdlZCB2aWV3LjwvbGk+XG4gICAgICAgIDxsaT5Qcm92aWRlcyBlbmNhcHN1bGF0aW9uIHRvIG1ha2UgbmVzdGluZyB2aWV3cyByZWxpYWJsZS48L2xpPlxuICAgICAgICA8bGk+UmV0YWlucyB0aGUgYWJpbGl0eSB0byBzZWxlY3QgY29tcG9uZW50cyBhbmQgbGlzdGVuIHRvIHRoZWlyIGV2ZW50cyBhdCBhbnkgbGV2ZWwgYmVsb3cgdGhlIGFzc29jaWF0ZWQgdmlldy48L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDxwcmU+XG57YC8vIC4vY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmpzXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJleHQsIHsgQ29udGFpbmVyIH0gZnJvbSAnZXh0LXJlYWN0JztcbmltcG9ydCBEYXRhU3RvcmUgZnJvbSAnfi9zdG9yZXMvZGF0YSc7XG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tICcuL3NlYXJjaC1mb3JtJztcbmltcG9ydCBTZWFyY2hSZXN1bHQgZnJvbSAnLi9zZWFyY2gtcmVzdWx0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Q29udGFpbmVyPlxuICAgICAgPFNlYXJjaEZvcm0gLz5cbiAgICAgIDxTZWFyY2hSZXN1bHQgLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgfVxufVxuXG4vLyAuL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC1mb3JtLmpzXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdleHQtcmVhY3QnO1xuaW1wb3J0IERhdGFTdG9yZSBmcm9tICd+L3N0b3Jlcy9kYXRhJztcbmltcG9ydCBTZWFyY2hGb3JtVmlldyBmcm9tICcuL3NlYXJjaC1mb3JtLnZpZXcnO1xuXG5AQ29tcG9uZW50KHtcbiAgdmlldzogU2VhcmNoRm9ybVZpZXdcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hGb3JtIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jcml0ZXJpYSA9IHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgc3RhdHVzZXM6IFtdLFxuICAgICAgcHVycG9zZXM6IFtdLFxuICAgICAgYWN0aXZpdGllczogW10sXG4gICAgICBwcm9kdWN0czogW11cbiAgICB9O1xuICB9XG5cbiAgc2VhcmNoKGNyaXRlcmlhKSB7XG4gICAgY3JpdGVyaWEgPSB0aGlzLmNvcnJlY3RDcml0ZXJpYShjcml0ZXJpYSk7XG4gICAgRGF0YVN0b3JlLnJlamVjdENoYW5nZXMoKTtcbiAgICBSZXh0LmV4dGVuZChEYXRhU3RvcmUucHJveHksIHtcbiAgICAgIHBhcmFtczogY3JpdGVyaWEsXG4gICAgICBmYWlsOiAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnIocmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgIERhdGFTdG9yZS5jbGVhckRhdGEoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBEYXRhU3RvcmUubG9hZCgpO1xuICB9XG5cbiAgY2xlYXJTZWFyY2hSZXN1bHQoY29tcCkge1xuICAgIERhdGFTdG9yZS5yZWplY3RDaGFuZ2VzKCk7XG4gICAgRGF0YVN0b3JlLmNsZWFyRGF0YSgpO1xuICAgIGNvbXAuc2V0U3RhdGUoKCkgPT4gKHRoaXMuY3JpdGVyaWEpKTtcbiAgfVxufVxuXG4vLyAuL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC1mb3JtLnZpZXcuanN4XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmllbGQsIERyb3Bkb3duLCBCdXR0b24gfSBmcm9tICdleHQtcmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hGb3JtVmlldyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIEV4dC5pbml0aWFsU3RhdGUodGhpcywgcHJvcHMuJHZpZXcuY3JpdGVyaWEpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmFtZSwgc3RhdHVzZXMsIHB1cnBvc2VzLCBhY3Rpdml0aWVzLCBwcm9kdWN0cyB9ID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICB7IHNlYXJjaCwgY2xlYXJTZWFyY2hSZXN1bHQgfSA9IHRoaXMucHJvcHMuJHZpZXc7XG4gICAgcmV0dXJuIDxzZWN0aW9uPlxuICAgICAgPEZpZWxkIHZhbHVlPXtuYW1lfSBwbGFjZWhvbGRlcj1cIk5hbWVcIiBvbkNoYW5nZT17dGhpcy5zZXROYW1lfSAvPlxuICAgICAgPERyb3Bkb3duIG11bHRpcGxlIG9wdGlvbnM9e1tdfSB2YWx1ZT17c3RhdHVzZXN9IG9uQmx1cj17dGhpcy5zZXRTdGF0dXNlc30gLz5cbiAgICAgIDxEcm9wZG93biBtdWx0aXBsZSBvcHRpb25zPXtbXX0gdmFsdWU9e3B1cnBvc2VzfSBvbkJsdXI9e3RoaXMuc2V0UHVycG9zZXN9IC8+XG4gICAgICA8RHJvcGRvd24gbXVsdGlwbGUgb3B0aW9ucz17W119IHZhbHVlPXthY3Rpdml0aWVzfSBvbkJsdXI9e3RoaXMuc2V0QWN0aXZpdGllc30gLz5cbiAgICAgIDxEcm9wZG93biBtdWx0aXBsZSBvcHRpb25zPXtbXX0gdmFsdWU9e3Byb2R1Y3RzfSBvbkJsdXI9e3RoaXMuc2V0UHJvZHVjdHN9IC8+XG4gICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgdGV4dD1cIlNlYXJjaFwiIG9uQ2xpY2s9eygpID0+IHNlYXJjaCh0aGlzLnN0YXRlKX0gLz5cbiAgICAgIDxCdXR0b24gdGV4dD1cIkNsZWFyXCIgb25DbGljaz17KCkgPT4gY2xlYXJTZWFyY2hSZXN1bHQodGhpcyl9IC8+XG4gICAgPC9zZWN0aW9uPlxuICB9XG59XG5cbi8vIC4vY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLXJlc3VsdC5qc3hcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQgfSBmcm9tICdleHQtcmVhY3QnO1xuaW1wb3J0IERhdGFTdG9yZSBmcm9tICd+L3N0b3Jlcy9kYXRhJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoUmVzdWx0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmFtZSwgcmVjb3JkU3RhdHVzZXMsIHB1cnBvc2VzLCBhY3Rpdml0aWVzLCBwcm9kdWN0cyB9ID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICB7IHNlYXJjaCwgY2xlYXJTZWFyY2hSZXN1bHQgfSA9IHRoaXMucHJvcHMuJHZpZXc7XG4gICAgcmV0dXJuIDxDb250YWluZXI+XG4gICAgICA8R3JpZCBzdG9yZT17RGF0YVN0b3JlfT5cbiAgICAgICAgPGRpdiB0ZXh0PVwiSURcIiBkYXRhSW5kZXg9XCJpZFwiIC8+XG4gICAgICAgIDxkaXYgdGV4dD1cIk5hbWVcIiBkYXRhSW5kZXg9XCJuYW1lXCIgLz5cbiAgICAgICAgPGRpdiB0ZXh0PVwiU3RhdHVzXCIgZGF0YUluZGV4PVwic3RhdHVzXCIgLz5cbiAgICAgICAgPGRpdiB0ZXh0PVwiUHVycG9zZVwiIGRhdGFJbmRleD1cInB1cnBvc2VcIiAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJBY3Rpdml0eVwiIGRhdGFJbmRleD1cImFjdGl2aXR5XCIgLz5cbiAgICAgICAgPGRpdiB0ZXh0PVwiUHJvZHVjdFwiIGRhdGFJbmRleD1cInByb2R1Y3RcIiAvPlxuICAgICAgPC9HcmlkPlxuICAgIDwvQ29udGFpbmVyPlxuICB9XG59YH1cbiAgICAgIDwvcHJlPlxuICAgIDwvQ29udGFpbmVyPlxuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29udGFpbmVyIH0gZnJvbSAnfi9yZXh0JztcblxuQFJvdXRlKCcvY29yZS1jb25jZXB0cy9jb21wb25lbnQnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmV4dENvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxDb250YWluZXIgY2xhc3NOYW1lPVwibWFpbiBjb250YWluZXIgc2Nyb2xsYWJsZVwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLW1kXCI+Q29tcG9uZW50PC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG4gICAgICAgIEEgY29tcG9uZW50IGluIEV4dGVuc2lvbiBSZWFjdCBpcyB0aGUgY29tYmluYXRpb24gb2YgYSBSZWFjdCBDb21wb25lbnQgYW5kIGEgY29tcG9uZW50IGNsYXNzIHRoYXQgY29udHJvbHMgYSBwb3J0aW9uIG9mIHRoZSBzY3JlZW4uXG4gICAgICAgIEhlcmUgaXMgYW4gZXhhbXBsZSBvZiBhIGNvbXBvbmVudCB0aGF0IGRpc3BsYXkgYSBzaW1wbGUgc3RyaW5nOlxuICAgICAgPC9wPlxuICAgICAgPHByZSBjbGFzc05hbWU9XCJtYi1tZFwiPlxue2AvLyAuL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC52aWV3LmpzeFxuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhc2hib2FyZFZpZXcgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8aDE+e3RoaXMucHJvcHMuJHZpZXcudGl0bGV9PC9oMT47XG4gIH1cbn1cblxuLy8gLi9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuanNcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2V4dC1yZWFjdCc7XG5pbXBvcnQgRGFzaGJvYXJkVmlldyBmcm9tICcuL2Rhc2hib2FyZC52aWV3JztcblxuQENvbXBvbmVudCh7XG4gIHZpZXc6IERhc2hib2FyZFZpZXdcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMudGl0bGUgPSAnRGFzaGJvYXJkJztcbiAgfVxufWB9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG4gICAgICAgIEV2ZXJ5IGNvbXBvbmVudCBiZWdpbnMgd2l0aCBhbiA8Y29kZT5AQ29tcG9uZW50PC9jb2RlPiBkZWNvcmF0b3IgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIDxlbT5tZXRhZGF0YTwvZW0+IG9iamVjdC5cbiAgICAgICAgVGhlIG1ldGFkYXRhIG9iamVjdCBkZXNjcmliZXMgaG93IHRoZSBSZWFjdCBDb21wb25lbnQgYW5kIGNvbXBvbmVudCBjbGFzcyB3b3JrIHRvZ2V0aGVyLlxuICAgICAgICBUaGF0J3MgbWVhbiB5b3UgY2FuIGFjY2VzcyBhbnkgcHJvcGVydHkgb3IgbWV0aG9kIG9mIGNvbXBvbmVudCBjbGFzcyB2aWEgPGNvZGU+dGhpcy5wcm9wcy4kdmlldzwvY29kZT4uXG4gICAgICA8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlxuICAgICAgICBBY3R1YWxseSwgd2l0aCB0aGUgYWJvdmUgZXhhbXBsZSwgaXQgY2FuIGJlIGltcGxlbWVudGVkIGxpa2UgdGhpczpcbiAgICAgIDwvcD5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntgaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnZXh0LXJlYWN0JztcblxuQENvbXBvbmVudCh7XG4gIHZpZXc6ICh7ICR2aWV3IH0pID0+IDxoMT57JHZpZXcudGl0bGV9PC9oMT5cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMudGl0bGUgPSAnRGFzaGJvYXJkJztcbiAgfVxufWB9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+RXh0ZW5zaW9uIFJlYWN0IHByb3ZpZGUgYSBuZXcgd2F5IHRvIHdvcmsgd2l0aCBzdGF0ZTo8L3A+XG4gICAgICA8cHJlIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG57YC8vIC4vY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLnZpZXcuanN4XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJleHQgZnJvbSAnZXh0ZW5zaW9uLXJlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoVmlldyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIFJleHQuaW5pdGlhbFN0YXRlKHRoaXMsIHtcbiAgICAgIG5hbWU6IHByb3BzLm5hbWVcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdGhpcy5zZXROYW1lKG5leHRQcm9wcy5uYW1lKTtcbiAgfVxuICAuLi5cbn1gfVxuICAgICAgPC9wcmU+XG4gICAgICA8cD5cbiAgICAgICAgSW5zdGVhZCBvZiB1c2luZyA8Y29kZT57YHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSwgcHJvcHMpID0+ICh7IG5hbWU6IHByb3BzLm5hbWUgfSkpYH08L2NvZGU+IHRvIHVwZGF0ZSB0aGUgc3RhdGUsXG4gICAgICAgIHlvdSBjYW4gdXNlIDxjb2RlPnRoaXMuc2V0TmFtZShwcm9wcy5uYW1lKTwvY29kZT4gdG8gbWFrZSBpdCBlYXNpZXIgdG8gdW5kZXJzdGFuZCBhbmQgbW9yZSBuYXR1cmFsIGJ5IHVzaW5nIDxjb2RlPlJleHQuaW5pdGlhbFN0YXRlPC9jb2RlPiBmdW5jdGlvbiB0byBkZWNsYXJlIHRoZSBzdGF0ZSBpbiBjb25zdHJ1Y3Rvci5cbiAgICAgIDwvcD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIENvbnRhaW5lciB9IGZyb20gJ34vcmV4dCc7XG5cbkBSb3V0ZSgnL2NvcmUtY29uY2VwdHMvZGF0YS1wYWNrYWdlJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFQYWNrYWdlIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPENvbnRhaW5lciBjbGFzc05hbWU9XCJtYWluIGNvbnRhaW5lciBzY3JvbGxhYmxlXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwibWItbWRcIj5EYXRhIFBhY2thZ2U8L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5UaGUgZGF0YSBwYWNrYWdlIGlzIHdoYXQgbG9hZHMgYW5kIHNhdmVzIGFsbCBvZiB0aGUgZGF0YSBpbiB5b3VyIGFwcGxpY2F0aW9uLjwvcD5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi1tZFwiPk1vZGVsczwvaDM+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlRoZSBjZW50ZXJwaWVjZSBvZiB0aGUgZGF0YSBwYWNrYWdlIGlzIGBNb2RlbGAgd2hpY2ggcmVwcmVzZW50cyBhbiBlbnRpdHkgaW4gYW4gYXBwbGljYXRpb24uPC9wPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLW1kXCI+U3RvcmVzPC9oMz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+VGhlIDxjb2RlPlN0b3JlPC9jb2RlPiBjbGFzcyBlbmNhcHN1bGF0ZXMgYSBjbGllbnQgc2lkZSBjYWNoZSBvZiA8Y29kZT5Nb2RlbDwvY29kZT4gb2JqZWN0cy48L3A+XG4gICAgICA8cHJlIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG57YGltcG9ydCB7IFN0b3JlIH0gZnJvbSAnZXh0LXJlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBTdG9yZSh7XG4gIHN0b3JlSWQ6ICdDYXJkU3RvcmUnLFxuICBwcm94eToge1xuICAgIHVybDogJy9kYXRhL2NhcmQuanNvbidcbiAgfVxufSlgfVxuICAgICAgPC9wcmU+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlxuICAgICAgICBJbiB0aGUgZXhhbXBsZSBhYm92ZSB3ZSBjb25maWd1cmVkIGFuIEFKQVggcHJveHkgdG8gbG9hZCBkYXRhIGZyb20gdGhlIHVybCA8Y29kZT4vYXBpL3VzZXIvc2VhcmNoPC9jb2RlPi5cbiAgICAgICAgU3RvcmVzIGxvYWQgZGF0YSB2aWEgPGNvZGU+cHJveHk8L2NvZGU+IHdpdGggdGhpcyBmb2xsb3dpbmcgc3RydWN0dXJlOlxuICAgICAgPC9wPlxuICAgICAgPHByZSBjbGFzc05hbWU9XCJtYi1tZFwiPlxue2B7XG4gIHVybDogICAgLyogVGhlIFVSTCBmcm9tIHdoaWNoIHRvIHJlcXVlc3QgdGhlIGRhdGEgb2JqZWN0ICovLFxuICBtZXRob2Q6IC8qIFRoZSBkZWZhdWx0IEhUVFAgbWV0aG9kIHRvIGJlIHVzZWQgZm9yIHJlcXVlc3RzLiBJZiBub3Qgc2V0LCBHRVQgd2lsbCBiZSB1c2VkLiAqL1xuICBwYXJhbXM6IC8qIFJlcXVlc3QgcGFyYW1ldGVycyBzZW50IGFzIGpzb24gZGF0YSAqL1xuICByZWFkZXI6IC8qIFVzZSB0byBkZWNvZGUgdGhlIHNlcnZlcidzIHJlc3BvbnNlICovXG59YH1cbiAgICAgIDwvcHJlPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5TdG9yZXMgY2FuIGFsc28gbG9hZCBkYXRhIGlubGluZS4gSW50ZXJuYWxseSwgU3RvcmUgY29udmVydHMgZWFjaCBvZiB0aGUgb2JqZWN0cyB3ZSBwYXNzIGluIGFzIGNmZy1kYXRhIGludG8gTW9kZWwgaW5zdGFuY2VzOjwvcD5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntgaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdleHQtcmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JlKHtcbiAgc3RvcmVJZDogJ1VzZXJTdG9yZScsXG4gIGRhdGE6IFtcbiAgICB7Zmlyc3ROYW1lOiAnUGV0ZXInLCAgIGxhc3ROYW1lOiAnVmVua21hbid9LFxuICAgIHtmaXJzdE5hbWU6ICdFZ29uJywgICAgbGFzdE5hbWU6ICdTcGVuZ2xlcid9LFxuICAgIHtmaXJzdE5hbWU6ICdSYXknLCAgICAgbGFzdE5hbWU6ICdTdGFudHonfSxcbiAgICB7Zmlyc3ROYW1lOiAnV2luc3RvbicsIGxhc3ROYW1lOiAnWmVkZGVtb3JlJ31cbiAgXVxufSlgfVxuICAgICAgPC9wcmU+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPk5vdywganVzdCBiaW5kIGEgc3RvcmUgdG8gdGhlIDxjb2RlPkNvbXBvbmVudDwvY29kZT46PC9wPlxuICAgICAgPHByZSBjbGFzc05hbWU9XCJtYi1tZFwiPlxue2BpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYmluZCB9IGZyb20gJ2V4dC1yZWFjdCc7XG5pbXBvcnQgQ2FyZFN0b3JlIGZyb20gJ34vc3RvcmVzL2NhcmQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgQ2FyZFN0b3JlLmNsZWFyRGF0YSgpO1xuICAgIENhcmRTdG9yZS5sb2FkKCk7XG4gICAgQ2FyZFN0b3JlLnN1YnNjcmliZSh0aGlzLnJlbG9hZCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBDYXJkU3RvcmUudW5zdWJzY3JpYmUodGhpcy5yZWxvYWQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHJlY29yZHMgPSBDYXJkU3RvcmUuZ2V0RGF0YSgpO1xuICAgIHJldHVybiA8c2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJ4LWdyaWQtaGVhZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IHJ4LWdyaWQtaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicngtZ3JpZC1jb2x1bW4taGVhZGVyIHRleHQtc20tY2VudGVyXCIgc3R5bGU9e3t3aWR0aDonMjAlJ319PklEPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyeC1ncmlkLWNvbHVtbi1oZWFkZXIgdGV4dC1zbS1jZW50ZXJcIiBzdHlsZT17e3dpZHRoOicyMCUnfX0+TmFtZTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicngtZ3JpZC1jb2x1bW4taGVhZGVyIHRleHQtc20tY2VudGVyXCIgc3R5bGU9e3t3aWR0aDonMjAlJ319PlR5cGU8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ4LWdyaWQtY29sdW1uLWhlYWRlciB0ZXh0LXNtLWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6JzIwJSd9fT5Bcm1vcjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicngtZ3JpZC1jb2x1bW4taGVhZGVyIHRleHQtc20tY2VudGVyXCIgc3R5bGU9e3t3aWR0aDonMjAlJ319PldlYXBvbjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJ4LWdyaWQtYm9keVwiIHN0eWxlPXt7b3ZlcmZsb3c6J3Zpc2libGUnfX0+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJ4LWdyaWQtdmlld1wiPlxuICAgICAgICAgIHtyZWNvcmRzLm1hcChyZWNvcmQgPT4gPGFydGljbGUgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IHJ4LWdyaWQtcm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ4LWdyaWQtY2VsbFwiIHN0eWxlPXt7d2lkdGg6JzIwJSd9fT57cmVjb3JkLmdldCgnSWQnKX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicngtZ3JpZC1jZWxsXCIgc3R5bGU9e3t3aWR0aDonMjAlJ319PntyZWNvcmQuZ2V0KCdOYW1lJyl9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ4LWdyaWQtY2VsbFwiIHN0eWxlPXt7d2lkdGg6JzIwJSd9fT57cmVjb3JkLmdldCgnVHlwZScpfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyeC1ncmlkLWNlbGxcIiBzdHlsZT17e3dpZHRoOicyMCUnfX0+e3JlY29yZC5nZXQoJ0FybW9yVXNhYmxlJyl9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ4LWdyaWQtY2VsbFwiIHN0eWxlPXt7d2lkdGg6JzIwJSd9fT57cmVjb3JkLmdldCgnV2VhcG9uVXNhYmxlJyl9PC9kaXY+XG4gICAgICAgICAgPC9hcnRpY2xlPil9XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L3NlY3Rpb24+O1xuICB9XG5cbiAgQGJpbmRcbiAgcmVsb2FkKCkge1xuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfVxufWB9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG4gICAgICAgIEluIHRoaXMgYWJvdmUgZXhhbXBsZSwgd2UgdXNlIDxjb2RlPnN1YnNjcmliZTwvY29kZT4gdG8gdXBkYXRlIHRoZSBjb21wb25lbnQgd2hlbmV2ZXIgZGF0YSdzIGNoYW5nZWQuXG4gICAgICAgIEJlY2F1c2UgU3RvcmUgY29udmVydCBkYXRhIHRvIE1vZGVsIHRoZW4geW91IG5lZWQgdG8gdXNlIDxjb2RlPmdldDwvY29kZT4gdG8gYWNjZXNzIGRhdGEuXG4gICAgICA8L3A+XG4gICAgPC9Db250YWluZXI+XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBDb250YWluZXIgfSBmcm9tICd+L3JleHQnO1xuXG5AUm91dGUoJy9jb3JlLWNvbmNlcHRzL3NjcmVlbi1uYXZpZ2F0aW9uJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcmVlbk5hdmlnYXRpb24gZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Q29udGFpbmVyIGNsYXNzTmFtZT1cIm1haW4gY29udGFpbmVyIHNjcm9sbGFibGVcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi1tZFwiPlNjcmVlbiBOYXZpZ2F0aW9uPC9oMT5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtYi1tZFwiPlxuICAgICAgICA8bGk+PHN0cm9uZz48Y29kZT5Sb3V0ZTwvY29kZT48L3N0cm9uZz4gZGVjb3JhdG9yIGlzIG1vc3QgYmFzaWMgcmVzcG9uc2liaWxpdHkgaXMgdG8gcmVuZGVyIFVJIHdoZW4gYSBsb2NhdGlvbiBtYXRjaGVzIHRoZSByb3V0ZeKAmXMgcGF0aC48L2xpPlxuICAgICAgICA8bGk+PHN0cm9uZz48Y29kZT5MaW5rPC9jb2RlPjwvc3Ryb25nPiBwcm92aWRlcyBkZWNsYXJhdGl2ZSwgYWNjZXNzaWJsZSBuYXZpZ2F0aW9uIGFyb3VuZCB5b3VyIGFwcGxpY2F0aW9uLjwvbGk+XG4gICAgICAgIDxsaT48c3Ryb25nPjxjb2RlPkhhc2hSb3V0ZXI8L2NvZGU+PC9zdHJvbmc+IHVzZXMgdGhlIGhhc2ggcG9ydGlvbiBvZiB0aGUgVVJMIChpLmUuIHdpbmRvdy5sb2NhdGlvbi5oYXNoKSB0byBrZWVwIHlvdXIgVUkgaW4gc3luYyB3aXRoIHRoZSBVUkwuPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8cHJlIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG57YC8vIG1haW4uanNcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IFJleHQgZnJvbSAnZXh0LXJlYWN0JztcbmltcG9ydCBWaWV3cG9ydCBmcm9tICcuL2NvbXBvbmVudHMvdmlld3BvcnQnO1xuXG5SZXh0LmFwcGxpY2F0aW9uKHtcbiAgdmlld3M6IFtcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvc2VhcmNoJyksXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2RldGFpbHMnKSxcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvbm90Zm91bmQnKSxcbiAgXSxcbiAgbGF1bmNoOiAoKSA9PiA8Vmlld3BvcnQgLz5cbn0pO1xuXG5SZXh0LmxhdW5jaCg8Vmlld3BvcnQgLz4pO1xuXG4vLyAuL2NvbXBvbmVudHMvdmlld3BvcnQuanNcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rLCBIYXNoUm91dGVyIH0gZnJvbSAnZXh0LXJlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlld3BvcnQoKSB7XG4gIHJldHVybiA8c2VjdGlvbj5cbiAgICA8TGluayB0bz1cIi9cIj5EYXNoYm9hcmQ8L0xpbms+XG4gICAgPExpbmsgdG89XCIvc2VhcmNoXCI+U2VhcmNoPC9MaW5rPlxuICAgIDxMaW5rIHRvPVwiL2RldGFpbHMvaHV5bmd1eWVuXCI+RGV0YWlsczwvTGluaz5cbiAgICA8SGFzaFJvdXRlciAvPlxuICA8L3NlY3Rpb24+XG59XG5cbi8vIC4vY29tcG9uZW50cy9zZWFyY2guanNcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29tcG9uZW50IH0gZnJvbSAnZXh0LXJlYWN0JztcblxuQFJvdXRlKCcvc2VhcmNoJylcbkBDb21wb25lbnQoe1xuICB2aWV3OiAoKSA9PiA8c2VjdGlvbiAvPlxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCB7IH1cblxuLy8gLi9jb21wb25lbnRzL2RldGFpbHMuanNcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29tcG9uZW50IH0gZnJvbSAnZXh0LXJlYWN0JztcblxuQFJvdXRlKCcvZGV0YWlscy86bmFtZScpXG5AQ29tcG9uZW50KHtcbiAgdmlldzogKHsgcGFyYW1zIH0pID0+IDxoMT57cGFyYW1zLm5hbWV9PC9oMT5cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXRhaWxzIHsgfVxuXG4vLyAuL2NvbXBvbmVudHMvbm90Zm91bmQuanNcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUgfSBmcm9tICdleHQtcmVhY3QnO1xuXG5AUm91dGUoJyonKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90Rm91bmQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8aDE+J3t0aGlzLnByb3BzLnBhcmFtcy5yb3V0ZX0nIGRvZXNuJ3QgZXhpc3Q8L2gxPlxuICB9XG59YH1cbiAgICAgIDwvcHJlPlxuICAgIDwvQ29udGFpbmVyPlxuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29tcG9uZW50IH0gZnJvbSAnfi9yZXh0JztcbmltcG9ydCBDYXJkU3RvcmUgZnJvbSAnLi9zdG9yZS9jYXJkJztcblxuY2xhc3MgQ2FyZFZpZXcgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgQ2FyZFN0b3JlLmxvYWQoKTtcbiAgfVxuICByZW5kZXIoKSB7Y29uc29sZS5sb2coJ3JlbmRlciBjYXJkIHZpZXcnKVxuICAgIHJldHVybiA8c2VjdGlvbiAvPlxuICB9XG59XG5cbkBSb3V0ZSgnL2V4YW1wbGUvY2FyZHMnKVxuQENvbXBvbmVudCh7XG4gIHN0b3JlczogWyBDYXJkU3RvcmUgXSxcbiAgdmlldzogQ2FyZFZpZXdcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIHsgfSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29tcG9uZW50IH0gZnJvbSAnfi9yZXh0JztcblxuQFJvdXRlKCcvZXhhbXBsZS9kYXNoYm9hcmQnKVxuQENvbXBvbmVudCh7XG4gIHZpZXc6ICh7ICR2aWV3IH0pID0+IDxoMT57JHZpZXcudGl0bGV9PC9oMT5cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRpdGxlID0gJ0Rhc2hib2FyZCc7XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIENvbXBvbmVudCB9IGZyb20gJ34vcmV4dCc7XG5cbkBSb3V0ZSgnL2V4YW1wbGUvZGV0YWlscy86bmFtZScpXG5AQ29tcG9uZW50KHtcbiAgdmlldzogKHsgcGFyYW1zIH0pID0+IDxoMT57cGFyYW1zLm5hbWV9PC9oMT5cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXRhaWxzIHsgfSIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUgfSBmcm9tICd+L3JleHQnO1xuXG5AUm91dGUoJyonKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90Rm91bmQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8aDE+J3t0aGlzLnByb3BzLnBhcmFtcy5yb3V0ZX0nIGRvZXNuJ3QgZXhpc3Q8L2gxPlxuICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBDb21wb25lbnQgfSBmcm9tICd+L3JleHQnO1xuXG5AUm91dGUoJy9leGFtcGxlL3NlYXJjaCcpXG5AQ29tcG9uZW50KHtcbiAgdmlldzogKCkgPT4gPHNlY3Rpb24gLz5cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmQgeyB9IiwiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICd+L3JleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBTdG9yZSh7XG4gIHN0b3JlSWQ6ICdDYXJkU3RvcmUnLFxuICBwcm94eToge1xuICAgIHVybDogJy9kYXRhL2NhcmQuanNvbidcbiAgfVxufSkiLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBDb250YWluZXIgfSBmcm9tICd+L3JleHQnO1xuXG5AUm91dGUoJy8nKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2V0dGluZ1N0YXJ0ZWQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Q29udGFpbmVyIGNsYXNzTmFtZT1cIm1haW4gY29udGFpbmVyIHNjcm9sbGFibGVcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi1tZFwiPkdldHRpbmcgU3RhcnRlZDwvaDE+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlxuICAgICAgICBFeHRlbnNpb24gUmVhY3QgaXMgYSBsaWJyYXJ5IHRoYXQgYnVpbGQgb24gdG9wIG9mIFJlYWN0LCBoZWxwaW5nIHlvdSBidWlsZCBkYXRhLWludGVuc2l2ZSwgY3Jvc3MtcGxhdGZvcm0gd2ViIGFwcHMgZm9yIGRlc2t0b3BzLCB0YWJsZXRzLCBhbmQgc21hcnRwaG9uZXMuXG4gICAgICA8L3A+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwibWItbWRcIj5RdWljayBTdGFydDwvaDI+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwibWItbWRcIj4xLiBTZXR1cCBhIGRldmVsb3BtZW50IGVudmlyb21lbnQ8L2gzPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5Vc2UgPGNvZGU+bnBtPC9jb2RlPiBvciA8Y29kZT55YXJuPC9jb2RlPiB0byBpbnN0YWxsIGZvbGxvd2luZyBkZXBlbmRlbmNpZXM6PC9wPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG4gICAgICAgIDxsaT48Y29kZT5iYWJlbC1wb2x5ZmlsbDwvY29kZT48L2xpPlxuICAgICAgICA8bGk+PGNvZGU+YmFiZWwtcHJlc2V0LWVudjwvY29kZT48L2xpPlxuICAgICAgICA8bGk+PGNvZGU+YmFiZWwtcHJlc2V0LXJlYWN0PC9jb2RlPjwvbGk+XG4gICAgICAgIDxsaT48Y29kZT5kMzwvY29kZT48L2xpPlxuICAgICAgICA8bGk+PGNvZGU+cmVhY3Q8L2NvZGU+PC9saT5cbiAgICAgICAgPGxpPjxjb2RlPnJ4anM8L2NvZGU+PC9saT5cbiAgICAgICAgPGxpPjxjb2RlPmV4dC1yZWFjdDwvY29kZT48L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi1tZFwiPjIuIENyZWF0ZSBhIG5ldyBwcm9qZWN0PC9oMz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+VGhlIGZvbGxvd2luZyBpcyB0aGUgcmVjb21tZW5kZWQgZGlyZWN0b3J5IHN0cnVjdHVyZSBmb3IgYW4gRXh0ZW5zaW9uIFJlYWN0IGFwcGxpY2F0aW9uOjwvcD5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbiAgICAgICAgKy0tIG5vZGVfbW9kdWxlczogTlBNIGNvbXBvbmVudHM8YnIgLz5cbiAgICAgICAgKy0tIGRpc3Q8YnIgLz5cbiAgICAgICAgfCAgICstLSBhcHAubWluLmNzczxiciAvPlxuICAgICAgICB8ICAgKy0tIGFwcC5taW4uanM8YnIgLz5cbiAgICAgICAgfCAgICstLSBmcmFtZXdvcmsubWluLmpzPGJyIC8+XG4gICAgICAgICstLSBzcmM8YnIgLz5cbiAgICAgICAgfCAgICstLSBjc3M8YnIgLz5cbiAgICAgICAgfCAgIHwgICArLS0gX3ZhcmlhYmxlcy5zY3NzOiBhcHBsaWNhdGlvbiBzdHlsZXMgY29uc3RhbnQgdmFsdWVzPGJyIC8+XG4gICAgICAgIHwgICB8ICAgKy0tIGFwcC5zY3NzOiBhcHBsaWNhdGlvbiBzdHlsZXM8YnIgLz5cbiAgICAgICAgfCAgICstLSBqczxiciAvPlxuICAgICAgICB8ICAgfCAgICstLSBjb21tb246IGNvZGUgb2Ygc2hhcmVkIGZ1bmN0aW9ucyBvciBzaGFyZWQgY29tcG9uZW50czxiciAvPlxuICAgICAgICB8ICAgfCAgICstLSBjb21wb25lbnRzOiBjb2RlIChzY3JpcHRzIGFuZCB2aWV3cykgb2YgZXZlcnkgZmVhdHVyZSBzaG91bGQgYmUgYSBzdWItZGlyZWN0b3J5PGJyIC8+XG4gICAgICAgIHwgICB8ICAgKy0tIHNlcnZpY2VzOiBjb2RlIG9mIHNlcnZpY2VzPGJyIC8+XG4gICAgICAgIHwgICB8ICAgKy0tIHN0b3JlczogY29kZSBvZiBzdG9yZXM8YnIgLz5cbiAgICAgICAgfCAgIHwgICArLS0gYXBwLmpzOiBtYWluIHNjcmlwdDxiciAvPlxuICAgICAgICArLS0gZ3VscGZpbGUuYmFiZWwuanM6IGJ1aWxkIHNjcmlwdHMgKG9yIHdlYnBhY2suY29uZmlnLmpzIGlmIHlvdSBwcmVmZXIpPGJyIC8+XG4gICAgICAgICstLSBpbmRleC5odG1sPGJyIC8+XG4gICAgICAgICstLSBwYWNrYWdlLmpzb246IE5QTSBwYWNrYWdlIGRlZmluaXRpb248YnIgLz5cbiAgICAgICAgKy0tIHNlcnZlci5qczogY29kZSBvZiBsb2NhbCB3ZWIgc2VydmVyIChFeHByZXNzSlMpPGJyIC8+XG4gICAgICA8L3ByZT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+TGV04oCZcyBzdGFydCBldmFsdWF0aW5nIHRoZSBhcHBsaWNhdGlvbiBieSBsb29raW5nIGF0IDxjb2RlPmluZGV4Lmh0bWw8L2NvZGU+PC9wPlxuICAgICAgPHByZSBjbGFzc05hbWU9XCJtYi1tZFwiPlxue2A8IS0tIGluZGV4Lmh0bWwgLS0+XG48IURPQ1RZUEUgaHRtbD5cbjxodG1sPlxuPGhlYWQ+XG48bWV0YSBjaGFyc2V0PVwidXRmLThcIiAvPlxuPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuPHRpdGxlPkV4dGVuc2lvbiBSZWFjdCBBcHBsaWNhdGlvbjwvdGl0bGU+XG48bGluayBocmVmPVwiL25vZGUtbW9kdWxlcy9leHQtcmVhY3QvY3NzL3JleHQubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuPC9oZWFkPlxuPGJvZHk+XG48c2NyaXB0IHNyYz1cImFwcC5qc1wiPjwvc2NyaXB0PlxuPC9ib2R5PlxuPC9odG1sPmB9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+VG8gbGF1bmNoIHlvdXIgYXBwLCBhZGQgdGhlIGZvbGxvd2luZyB0byB5b3VyIDxjb2RlPmFwcC5qczwvY29kZT4gZmlsZTwvcD5cbiAgICAgIDxwcmU+XG57YC8vIGFwcC5qc1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJleHQgZnJvbSAnZXh0LXJlYWN0JztcbmltcG9ydCBWaWV3cG9ydCBmcm9tICcuL2NvbXBvbmVudHMvdmlld3BvcnQvdmlld3BvcnQnO1xuXG5SZXh0LmFwcGxpY2F0aW9uKHtcbiAgbGF1bmNoOiAoKSA9PiA8Vmlld3BvcnQgLz5cbn0pO2B9XG4gICAgICA8L3ByZT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIsIEhhc2hSb3V0ZXIsIExpbmsgfSBmcm9tICd+L3JleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWV3cG9ydCgpIHtcbiAgcmV0dXJuIDxDb250YWluZXI+XG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJjb250YWluZXJcIj48aDE+RXh0ZW5zaW9uIFJlYWN0PC9oMT48L2hlYWRlcj5cbiAgICA8Q29udGFpbmVyIGxheW91dD1cImNvbHVtblwiPlxuICAgICAgPGFzaWRlIHN0eWxlPXt7d2lkdGg6MzAwfX0+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXIgbmF2XCI+XG4gICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL1wiIHRleHQ9XCJHRVRUSU5HIFNUQVJURURcIiAvPjwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LXRleHRcIj5DT1JFIENPTkNFUFRTPC9zcGFuPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+PExpbmsgdG89XCIvY29yZS1jb25jZXB0cy9jb21wb25lbnRcIiB0ZXh0PVwiQ29tcG9uZW50XCIgLz48L2xpPlxuICAgICAgICAgICAgICA8bGk+PExpbmsgdG89XCIvY29yZS1jb25jZXB0cy9zY3JlZW4tbmF2aWdhdGlvblwiIHRleHQ9XCJTY3JlZW4gTmF2aWdhdGlvblwiIC8+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL2NvcmUtY29uY2VwdHMvZGF0YS1wYWNrYWdlXCIgdGV4dD1cIkRhdGEgUGFja2FnZVwiIC8+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+PExpbmsgdG89XCIvYXJjaGl0ZWN0dXJlXCIgdGV4dD1cIkFSQ0hJVEVDVFVSRVwiIC8+PC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtdGV4dFwiPlVJIENPTVBPTkVOVFM8L3NwYW4+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT48TGluayB0bz1cIi91aS1jb21wb25lbnRzL2dyaWRzXCIgdGV4dD1cIkdyaWRzXCIgLz48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9hc2lkZT5cbiAgICAgIDxDb250YWluZXI+PEhhc2hSb3V0ZXIgLz48L0NvbnRhaW5lcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPjxwPiZjb3B5OyAyMDE3IGh1eXRyb25nbmd1eWVuPC9wPjwvZm9vdGVyPlxuICA8L0NvbnRhaW5lcj5cbiAgLy8gcmV0dXJuIDxDb250YWluZXIgbGF5b3V0PVwiY29sdW1uXCI+XG4gIC8vICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJuYXZcIiBzdHlsZT17e3dpZHRoOjMwMH19PlxuICAvLyAgICAgPGhlYWRlcj5cbiAgLy8gICAgICAgPGgxIGNsYXNzTmFtZT1cImJyYW5kXCI+RXh0ZW5zaW9uIFJlYWN0PC9oMT5cbiAgLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgLy8gICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtci1hdXRvXCI+XG4gIC8vICAgICAgICAgPC91bD5cbiAgLy8gICAgICAgPC9kaXY+XG4gIC8vICAgICA8L2hlYWRlcj5cbiAgLy8gICAgIDxuYXYgY2xhc3NOYW1lPVwibWItYXV0byBkLWZsZXhcIj5cbiAgICAgICAgXG4gIC8vICAgICA8L25hdj5cbiAgLy8gICAgIDxmb290ZXI+XG4gIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LXRleHRcIj4mY29weTsgMjAxNyBodXl0cm9uZ25ndXllbjwvZGl2PlxuICAvLyAgICAgPC9mb290ZXI+XG4gIC8vICAgPC9Db250YWluZXI+XG4gIC8vICAgPENvbnRhaW5lcj5cbiAgLy8gICAgIDxIYXNoUm91dGVyIC8+XG4gIC8vICAgPC9Db250YWluZXI+XG4gIC8vIDwvQ29udGFpbmVyPlxufSIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEV4dCBmcm9tICd+L2NvcmUvZXh0JztcbmltcG9ydCBMaXN0IGZyb20gJ34vY29yZS9saXN0JztcbmltcG9ydCBEaWN0aW9uYXJ5IGZyb20gJ34vY29yZS9kaWN0aW9uYXJ5JztcbmltcG9ydCBPYnNlcnZhYmxlIGZyb20gJ34vcmVhY3RpdmUvb2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZyA9PiBDb250cm9sbGVyID0+IHtcbiAgY29uc3QgV3JhcHBlZENvbXBvbmVudCA9IGNvbmZpZy52aWV3O1xuICByZXR1cm4gY2xhc3MgSG9jQ29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIEV4dC5pbml0aWFsU3RhdGUodGhpcywge1xuICAgICAgICBzdG9yZXM6IHt9LFxuICAgICAgICBzZXJ2aWNlczoge30sXG4gICAgICAgIFtjb25maWcuY29tcG9uZW50QXMgfHwgJyR2aWV3J106IG5ldyBDb250cm9sbGVyKHByb3BzKVxuICAgICAgfSk7XG4gICAgICB0aGlzLm9uRGF0YUNoYW5nZWQgPSAoKSA9PiB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgdGhpcy5zZXRTdG9yZXMoTGlzdChjb25maWcuc3RvcmVzKS5yZWR1Y2UoKHN0b3Jlcywgc3RvcmUpID0+IHtcbiAgICAgICAgc3RvcmUuc3Vic2NyaWJlKHRoaXMub25EYXRhQ2hhbmdlZCk7XG4gICAgICAgIHN0b3Jlc1tzdG9yZS5zdG9yZUlkXSA9IHN0b3JlO1xuICAgICAgICByZXR1cm4gc3RvcmVzO1xuICAgICAgfSwge30pKTtcblxuICAgICAgdGhpcy5zZXRTZXJ2aWNlcyhMaXN0KGNvbmZpZy5zZXJ2aWNlcykucmVkdWNlKChzZXJ2aWNlcywgc2VydmljZSkgPT4ge1xuICAgICAgICBzZXJ2aWNlc1tzZXJ2aWNlLnNlcnZpY2VJZF0gPSBzZXJ2aWNlO1xuICAgICAgICByZXR1cm4gc2VydmljZXM7XG4gICAgICB9LCB7fSkpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiA8V3JhcHBlZENvbXBvbmVudCB7Li4udGhpcy5zdGF0ZX0gey4uLnRoaXMucHJvcHN9IC8+O1xuICAgIH1cbiAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRXh0IGZyb20gJ34vY29yZS9leHQnO1xuXG5jb25zdCBMQVlPVVRfQ0xBU1MgPSB7XG4gICdjb2x1bW4nOiAnZmxleC1yb3cnLFxuICAncm93JzogJ2ZsZXgtY29sdW1uJyxcbiAgJ2ZpdCc6ICcnLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gQ29udGFpbmVyKHsgY2xhc3NOYW1lID0gJycsIGxheW91dCA9ICdyb3cnLCBjaGlsZHJlbiwgLi4ub3RoZXJzIH0pIHtcbiAgcmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT17RXh0LmNsYXNzTmFtZSgnZC1mbGV4JywgTEFZT1VUX0NMQVNTW2xheW91dF0sIGNsYXNzTmFtZSl9IHsuLi5vdGhlcnN9PntjaGlsZHJlbn08L3NlY3Rpb24+XG59IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgRXh0IGZyb20gJ34vY29yZS9leHQnO1xuaW1wb3J0IExpc3QgZnJvbSAnfi9jb3JlL2xpc3QnO1xuLy8gaW1wb3J0IE9ic2VydmFibGUgZnJvbSAnfi9yZWFjdGl2ZS9vYnNlcnZhYmxlJztcblxuY29uc3QgUk9VVEVTID0ge30sXG4gICAgICBnZXRSb3V0ZSA9ICgpID0+IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKSB8fCAnLycsXG4gICAgICBnZXRSb3V0ZVBhdGggPSByb3V0ZSA9PiByb3V0ZS5zcGxpdCgnLycpO1xuXG5leHBvcnQgZnVuY3Rpb24gUm91dGUocm91dGUpIHtcbiAgcmV0dXJuIGNvbXAgPT4ge1xuICAgIFJPVVRFU1tyb3V0ZV0gPSB7XG4gICAgICByb3V0ZSxcbiAgICAgIGNvbXAsXG4gICAgICBwYXRoOiBnZXRSb3V0ZVBhdGgocm91dGUpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBMaW5rKHsgdG8sIGNsYXNzTmFtZSA9ICcnLCBhY3RpdmVDbGFzc05hbWUgPSAnYWN0aXZlJywgdGV4dCwgY2hpbGRyZW4sIC4uLm90aGVycyB9KSB7XG4gIHJldHVybiA8YSBocmVmPXtgIyR7dG99YH0gY2xhc3NOYW1lPXtFeHQuY2xhc3NOYW1lKCduYXYtbGluaycsIGNsYXNzTmFtZSwgeyBbYWN0aXZlQ2xhc3NOYW1lXTogdG8gPT09IGdldFJvdXRlKCkgfSl9IHsuLi5vdGhlcnN9PlxuICAgIHt0ZXh0IHx8IGNoaWxkcmVufVxuICA8L2E+XG59XG5cbmV4cG9ydCBjbGFzcyBIYXNoUm91dGVyIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIEV4dC5pbml0aWFsU3RhdGUodGhpcywgbWF0Y2hQYXRoKCkpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgKCF3aW5kb3cubG9jYXRpb24uaGFzaCkgJiYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJy8nKTtcbiAgICBPYnNlcnZhYmxlLmZyb21FdmVudCh3aW5kb3csICdoYXNoY2hhbmdlJykuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0U3RhdGUobWF0Y2hQYXRoKCkpKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJvdXRlLCBjb21wLCBwYXJhbXMgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAoIWNvbXApIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0NvbXBvbmVudCBub3QgZm91bmQhJyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChjb21wLCB7IHJvdXRlLCBwYXJhbXMgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWF0Y2hQYXRoKCkge1xuICBjb25zdCBjdXJyZW50Um91dGUgPSBnZXRSb3V0ZSgpLFxuICAgICAgICBwYXJhbXMgPSB7IHJvdXRlOiBjdXJyZW50Um91dGUgfTtcblxuICAvLyBiYXNpYyByb3V0ZSAod2l0aG91dCBwYXJhbXMpXG4gIGlmIChST1VURVNbY3VycmVudFJvdXRlXSkge1xuICAgIHJldHVybiB7IHJvdXRlOiBjdXJyZW50Um91dGUsIGNvbXA6IFJPVVRFU1tjdXJyZW50Um91dGVdLmNvbXAsIHBhcmFtcyB9O1xuICB9XG5cbiAgLy8gYWR2YW5jZWQgcm91dGUgKHdpdGggcGFyYW1zKVxuICBjb25zdCBjdXJyZW50UGF0aCA9IGdldFJvdXRlUGF0aChjdXJyZW50Um91dGUpO1xuICBmb3IobGV0IHJvdXRlIGluIFJPVVRFUykge1xuICAgIGNvbnN0IG1hcFJvdXRlID0gUk9VVEVTW3JvdXRlXSxcbiAgICAgICAgICByb3V0ZVBhdGggPSBtYXBSb3V0ZS5wYXRoO1xuXG4gICAgbGV0IG1hdGNoZWQgPSB0cnVlO1xuICAgIExpc3QobWFwUm91dGUucGF0aCkuZWFjaCgocm91dGVOYW1lLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHJvdXRlTmFtZSAhPT0gY3VycmVudFBhdGhbaW5kZXhdKSB7XG4gICAgICAgIGlmIChyb3V0ZU5hbWUuc3RhcnRzV2l0aCgnOicpKSB7IC8vIGRldGVjdCBwYXJhbSB2YWx1ZVxuICAgICAgICAgIHBhcmFtc1tyb3V0ZU5hbWUuc3Vic3RyaW5nKDEpXSA9IGN1cnJlbnRQYXRoW2luZGV4XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtYXRjaGVkID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAobWF0Y2hlZCkge1xuICAgICAgcmV0dXJuIHsgcm91dGU6IGN1cnJlbnRSb3V0ZSwgY29tcDogbWFwUm91dGUuY29tcCwgcGFyYW1zIH07XG4gICAgfVxuICB9XG5cbiAgLy8gd2l0aCBub3QgZm91bmQgc2NyZWVuXG4gIGlmIChST1VURVNbJyonXSkge1xuICAgIHJldHVybiB7IHJvdXRlOiBjdXJyZW50Um91dGUsIGNvbXA6IFJPVVRFU1snKiddLmNvbXAsIHBhcmFtcyB9O1xuICB9XG5cbiAgLy8gd2l0aG91dCBub3QgZm91bmQgc2NyZWVuXG4gIHJldHVybiB7IHJvdXRlOiBjdXJyZW50Um91dGUsIGNvbXA6IG51bGwsIHBhcmFtcyB9O1xufSIsImltcG9ydCBMaXN0IGZyb20gJy4vbGlzdCc7XG5cbmV4cG9ydCBjbGFzcyBEaWN0aW9uYXJ5IHtcbiAgY29uc3RydWN0b3Ioa2V5VmFsdWVzKSB7XG4gICAgdGhpcy5kYXRhID0ge307XG4gICAgaWYgKGtleVZhbHVlcyAmJiBrZXlWYWx1ZXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmRhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBrZXlWYWx1ZXMpO1xuICAgIH1cblxuICAgIHRoaXMua2V5cyA9ICgpID0+IExpc3QoT2JqZWN0LmtleXModGhpcy5kYXRhKSk7XG4gICAgdGhpcy52YWx1ZXMgPSAoKSA9PiBMaXN0KE9iamVjdC52YWx1ZXModGhpcy5kYXRhKSk7XG4gIH1cblxuICBlYWNoKGl0ZXJhdGVlKSB7XG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuZGF0YSkge1xuICAgICAgaXRlcmF0ZWUodGhpcy5kYXRhW2tleV0sIGtleSwgdGhpcy5kYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKGtleVZhbHVlcykgPT4gbmV3IERpY3Rpb25hcnkoa2V5VmFsdWVzKTsiLCJpbXBvcnQgeyBMaXN0IH0gZnJvbSAnLi9saXN0JztcblxuY2xhc3MgRE9NIGV4dGVuZHMgTGlzdCB7XG4gIHNob3coKSB7XG4gICAgdGhpcy5kYXRhLmVhY2goc2VsZWN0b3IgPT4gc2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jaycpO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLmRhdGEuZWFjaChzZWxlY3RvciA9PiBzZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKTtcbiAgfVxuXG4gIC8vIHBhcmVudCgpIHtcbiAgLy8gICB0aGlzLmNvbXAgPSB0aGlzLmNvbXAucGFyZW50RWxlbWVudDtcbiAgLy8gICByZXR1cm4gdGhpcztcbiAgLy8gfVxuXG4gIC8vIHdpZHRoKCkge1xuICAvLyAgIHJldHVybiB0aGlzLmNvbXAuY2xpZW50V2lkdGg7XG4gIC8vIH1cblxuICAvLyBoZWlnaHQoKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMuY29tcC5jbGllbnRIZWlnaHQ7XG4gIC8vIH1cblxuICAvLyBmaW5kKHNlbGVjdG9yKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMuY29tcC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgLy8gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzZWxlY3RvciA9PiBET00uZ2V0RWwoc2VsZWN0b3IpOyIsImV4cG9ydCBjbGFzcyBFeHQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLkRPTSA9IHJlcXVpcmUoJy4vZG9tJykuZGVmYXVsdDtcbiAgICB0aGlzLlN0cmluZyA9IHJlcXVpcmUoJy4vc3RyaW5nJykuZGVmYXVsdDtcbiAgICB0aGlzLkxpc3QgPSByZXF1aXJlKCcuL2xpc3QnKS5kZWZhdWx0O1xuICAgIHRoaXMuTWFwID0gcmVxdWlyZSgnLi9kaWN0aW9uYXJ5JykuZGVmYXVsdDtcblxuICAgIHRoaXMuU0NST0xMX1dJRFRIID0gdGhpcy5nZXRTY3JvbGxXaWR0aCgpO1xuICAgIHRoaXMuQk9SREVSX1dJRFRIID0gMjtcbiAgICB0aGlzLkNIRUNLX0NPTFVNTl9XSURUSCA9IDMzO1xuICAgIHRoaXMuVU5LTk9XTl9FUlJPUl9NU0cgPSAnQW4gdW5rbm93biBlcnJvciBoYXMgb2NjdXJyZWQuJztcblxuICAgIHRoaXMuaXNQcmltaXRpdmUgPSB2YWx1ZSA9PiB7IGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsdWU7IHJldHVybiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlID09PSAnbnVtYmVyJyB8fCB0eXBlID09PSAnYm9vbGVhbic7IH1cbiAgICB0aGlzLmlzU3RyaW5nID0gdmFsdWUgPT4gKHR5cGVvZiB2YWx1ZSkgPT09ICdzdHJpbmcnO1xuICAgIHRoaXMuaXNGdW5jdGlvbiA9IHZhbHVlID0+ICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xuICAgIHRoaXMuaXNPYmplY3QgPSB2YWx1ZSA9PiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG4gICAgdGhpcy5pc0FycmF5ID0gdmFsdWUgPT4gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG5cbiAgICB0aGlzLmNsb25lID0gb2JqID0+IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSk7IC8vIGRlZXAgY2xvbmVcbiAgfVxuXG4gIGV4dGVuZCgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbi5hcHBseShudWxsLCBhcmd1bWVudHMpOyAvLyBpbW11dGFibGUgb2JqZWN0XG4gIH1cblxuICBpbml0aWFsU3RhdGUoY29tcCwgc3RhdGUpIHtcbiAgICBpZiAoIWNvbXAgfHwgIXN0YXRlKSB7IHJldHVybjsgfVxuICAgIGNvbXAuc3RhdGUgPSBzdGF0ZTtcbiAgICBmb3IgKGxldCBmaWVsZCBvZiBPYmplY3Qua2V5cyhzdGF0ZSkpIHtcbiAgICAgIGNvbXBbYHNldCR7U3RyaW5nLmNhcGl0YWxpemUoZmllbGQpfWBdID0gdmFsdWUgPT4gY29tcC5zZXRTdGF0ZSh7IFtmaWVsZF06IHZhbHVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNsYXNzTmFtZSguLi5leHByZXNzaW9ucykge1xuICAgIGNvbnN0IGNscyA9IFtdO1xuXG4gICAgRXh0Lkxpc3QoZXhwcmVzc2lvbnMpLmVhY2goZXhwID0+IHtcbiAgICAgIGlmICghZXhwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBleHAgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNscy5wdXNoKGV4cCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNPYmplY3QoZXhwKSkge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gZXhwKSB7XG4gICAgICAgICAgaWYgKGV4cFtrZXldID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjbHMucHVzaChrZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjbHMuam9pbignICcpO1xuICB9XG5cbiAgLy8jcmVnaW9uIERPTVxuICBjcmVhdGVFbGVtZW50KGh0bWwpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gaHRtbDtcbiAgICByZXR1cm4gZGl2LmNoaWxkcmVuWzBdO1xuICB9XG5cbiAgZ2V0U2Nyb2xsV2lkdGgoKSB7XG4gICAgY29uc3Qgb3V0ZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJzxkaXYgc3R5bGU9XCJ2aXNpYmlsaXR5OiBoaWRkZW47IHdpZHRoOiAxMDBweDsgb3ZlcmZsb3c6IHNjcm9sbDtcIj48L2Rpdj4nKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG91dGVyKTtcbiAgICBjb25zdCB3aWR0aE5vU2Nyb2xsID0gb3V0ZXIub2Zmc2V0V2lkdGg7XG5cbiAgICAvLyBhZGQgaW5uZXJkaXZcbiAgICBjb25zdCBpbm5lciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnPGRpdiBzdHlsZT1cIndpZHRoOiAxMDAlO1wiPjwvZGl2PicpO1xuICAgIG91dGVyLmFwcGVuZENoaWxkKGlubmVyKTtcbiAgICBjb25zdCB3aWR0aFdpdGhTY3JvbGwgPSBpbm5lci5vZmZzZXRXaWR0aDtcblxuICAgIC8vIHJlbW92ZSBkaXZzXG4gICAgb3V0ZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvdXRlcik7XG5cbiAgICByZXR1cm4gd2lkdGhOb1Njcm9sbCAtIHdpZHRoV2l0aFNjcm9sbDtcbiAgfVxuICAvLyNlbmRyZWdpb25cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEV4dCgpO1xuXG5leHBvcnQgZnVuY3Rpb24gYmluZCh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpIHtcbiAgY29uc3QgZm4gPSBkZXNjcmlwdG9yLnZhbHVlO1xuXG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEBiaW5kIGRlY29yYXRvciBpcyBvbmx5IGFwcGxpZWQgdG8gZnVuY3Rpb25zIG5vdDogJHt0eXBlb2YgZm59YCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQoKSB7XG4gICAgICByZXR1cm4gZm4uYmluZCh0aGlzKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0ID0gNTAwKSB7XG4gIGxldCB0aW1lb3V0O1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsXG4gICAgICAgICAgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgICBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgICB9XG5cbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICB9XG59IiwiZXhwb3J0IGNsYXNzIExpc3Qge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZGF0YSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMuY29sbGVjdCA9ICgpID0+IHRoaXMuZGF0YTtcbiAgICB0aGlzLmNvdW50ID0gKCkgPT4gdGhpcy5kYXRhLmxlbmd0aDtcbiAgICB0aGlzLmdldEF0ID0gaW5kZXggPT4gdGhpcy5kYXRhW2luZGV4XTtcbiAgICB0aGlzLmFkZCA9IGl0ZW0gPT4gdGhpcy5kYXRhLnB1c2goaXRlbSk7XG4gICAgdGhpcy5pbnNlcnQgPSAoaXRlbSwgaW5kZXggPSAwKSA9PiB0aGlzLmRhdGEuc3BsaWNlKGluZGV4LCAwLCBpdGVtKTtcbiAgICB0aGlzLnJlbW92ZUF0ID0gKGluZGV4LCBjb3VudCA9IDEpID0+IHRoaXMuZGF0YS5zcGxpY2UoaW5kZXgsIGNvdW50KTtcbiAgICB0aGlzLmpvaW4gPSBzZXBhcmF0b3IgPT4gdGhpcy5kYXRhLmpvaW4oc2VwYXJhdG9yKTtcbiAgfVxuXG4gIGVhY2goaXRlcmF0ZWUpIHtcbiAgICBmb3IgKGxldCBpbmRleCBpbiB0aGlzLmRhdGEpIHtcbiAgICAgIGl0ZXJhdGVlKHRoaXMuZGF0YVtpbmRleF0sIGluZGV4LCB0aGlzLmRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGZpbHRlcihwcmVkaWNhdGUpIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICB0aGlzLmVhY2goKGl0ZW0sIGluZGV4LCBhcnJheSkgPT4ge1xuICAgICAgaWYgKHByZWRpY2F0ZShpdGVtLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBuZXcgTGlzdChyZXN1bHQpO1xuICB9XG5cbiAgbWFwKGl0ZXJhdGVlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgdGhpcy5lYWNoKChpdGVtLCBpbmRleCwgYXJyYXkpID0+IHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpdGVtLCBpbmRleCwgYXJyYXkpKTtcbiAgICByZXR1cm4gbmV3IExpc3QocmVzdWx0KTtcbiAgfVxuXG4gIHJlZHVjZShpdGVyYXRlZSwgYWNjdW11bGF0b3IpIHtcbiAgICB0aGlzLmVhY2goKGl0ZW0sIGluZGV4LCBhcnJheSkgPT4gYWNjdW11bGF0b3IgPSBpdGVyYXRlZShhY2N1bXVsYXRvciwgaXRlbSwgaW5kZXgsIGFycmF5KSk7XG4gICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICB9XG5cbiAgZmluZEluZGV4KHByZWRpY2F0ZSkge1xuICAgIGxldCBmb3VuZEF0ID0gLTE7XG4gICAgZm9yIChsZXQgaW5kZXggaW4gdGhpcy5kYXRhKSB7XG4gICAgICBpZiAocHJlZGljYXRlKGl0ZW0sIGluZGV4LCB0aGlzLmRhdGEpKSB7XG4gICAgICAgIGZvdW5kQXQgPSBpbmRleDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmb3VuZEF0O1xuICB9XG5cbiAgZmluZChwcmVkaWNhdGUpIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLmZpbmRJbmRleChwcmVkaWNhdGUpO1xuICAgIHJldHVybiBpbmRleCA+IC0xID8gdGhpcy5kYXRhW2luZGV4XSA6IG51bGw7XG4gIH1cblxuICBjb250YWlucyhwcmVkaWNhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5maW5kKHByZWRpY2F0ZSkgIT09IG51bGw7XG4gIH1cblxuICByZW1vdmVJZihwcmVkaWNhdGUpIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICB0aGlzLmVhY2goKGl0ZW0sIGluZGV4LCBhcnJheSkgPT4ge1xuICAgICAgaWYgKCFwcmVkaWNhdGUoaXRlbSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgICByZXN1bHQucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmRhdGEgPSByZXN1bHQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHZhbHVlKSA9PiBuZXcgTGlzdCh2YWx1ZSk7IiwiY2xhc3MgU3RyaW5nIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jYXBpdGFsaXplID0gdmFsdWUgPT4gdmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSgxKTtcbiAgfVxuXG4gIGh0bWxFbmNvZGUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLycvZywgJyYjMzk7JylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xuICB9XG5cbiAgaHRtbERlY29kZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC8mYW1wOy9nLCAnJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvJmx0Oy9nLCAnPCcpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLyZndDs+L2csICc+JylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvJiMzOTsvZywgXCInXCIpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLyZxdW90Oy9nLCAnXCInKTtcbiAgfVxuXG4gIHRvUXVlcnlTdHJpbmcocGFyYW1zLCBzZXAsIGVuY29kZSkge1xuICAgIHNlcCAgICA9IHNlcCA9PT0gdW5kZWZpbmVkID8gJyYnIDogc2VwO1xuICAgIGVuY29kZSA9IGVuY29kZSA9PT0gZmFsc2UgPyBmdW5jdGlvbihzKSB7IHJldHVybiBzOyB9IDogZW5jb2RlVVJJQ29tcG9uZW50O1xuXG4gICAgbGV0IHBhaXJzID0gW107XG4gICAgZm9yIChsZXQga2V5IGluIHBhcmFtcykge1xuICAgICAgcGFpcnMucHVzaChgJHtrZXl9PSR7ZW5jb2RlKHBhcmFtc1trZXldKX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhaXJzLmpvaW4oc2VwKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU3RyaW5nKCk7IiwiaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTGlzdCB9IGZyb20gJ34vY29yZS9saXN0JztcbmltcG9ydCBNb2RlbCBmcm9tICcuL21vZGVsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJzdHJhY3RTdG9yZSBleHRlbmRzIExpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLy8jcmVnaW9uIGNvbmZpZ3NcbiAgICB0aGlzLnRvdGFsQ291bnQgPSAwO1xuICAgIHRoaXMucGFnZVNpemUgPSAwO1xuICAgIHRoaXMuY3VycmVudFBhZ2UgPSAxO1xuICAgIHRoaXMuc3ViamVjdCA9IG5ldyBTdWJqZWN0KCk7XG4gICAgLy8jZW5kcmVnaW9uXG5cbiAgICAvLyNyZWdpb24gcHJvcGVydGllc1xuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgLy8jcmVnaW9uIG1ldGhvZHNcbiAgICB0aGlzLmNyZWF0ZVJlY29yZCA9IHJlY29yZCA9PiBuZXcgTW9kZWwocmVjb3JkLCB0aGlzKTtcbiAgICB0aGlzLmdldFJlY29yZHMgPSB0aGlzLmNvbGxlY3Q7XG4gICAgdGhpcy5nZXRNb2RpZmllZFJlY29yZHMgPSAoKSA9PiB0aGlzLmZpbHRlcihyZWNvcmQgPT4gcmVjb3JkLmlzTW9kaWZpZWQoKSk7XG4gICAgdGhpcy5nZXROZXdSZWNvcmRzID0gKCkgPT4gdGhpcy5maWx0ZXIocmVjb3JkID0+IHJlY29yZC5pc05ld2x5Q3JlYXRlZCgpKTtcbiAgICB0aGlzLnN1YnNjcmliZSA9IG9ic2VydmVyID0+IHRoaXMuc3ViamVjdC5zdWJzY3JpYmUoeyBuZXh0OiB2YWx1ZSA9PiBvYnNlcnZlcih2YWx1ZSkgfSk7XG4gICAgdGhpcy5maXJlRXZlbnQgPSAoKSA9PiB0aGlzLnN1YmplY3QubmV4dCh0aGlzKTtcbiAgICAvLyNlbmRyZWdpb25cbiAgfVxuXG4gIGNsZWFyRGF0YShzaWxlbnQgPSBmYWxzZSkge1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICFzaWxlbnQgJiYgdGhpcy5maXJlRXZlbnQoKTtcbiAgfVxuXG4gIGxvYWREYXRhKGRhdGEpIHtcbiAgICB0aGlzLmNsZWFyRGF0YSh0cnVlKTtcbiAgICB0aGlzLmRhdGEgPSAobmV3IExpc3QoZGF0YSkpLm1hcCh0aGlzLmNyZWF0ZVJlY29yZC5iaW5kKHRoaXMpKS5jb2xsZWN0KCk7XG4gICAgdGhpcy5maXJlRXZlbnQoKTtcbiAgfVxuXG4gIGNvbW1pdENoYW5nZXMoKSB7XG4gICAgdGhpcy5maWx0ZXIocmVjb3JkID0+IHJlY29yZC5pc01vZGlmaWVkKCkgfHwgcmVjb3JkLmlzTmV3bHlDcmVhdGVkKCkpLmVhY2gocmVjb3JkID0+IHJlY29yZC5zYXZlKCkpO1xuICAgIHRoaXMuZmlyZUV2ZW50KCk7XG4gIH1cblxuICByZWplY3RDaGFuZ2VzKCkge1xuICAgIHRoaXMuZmlsdGVyKHJlY29yZCA9PiByZWNvcmQuaXNNb2RpZmllZCgpKS5lYWNoKHJlY29yZCA9PiByZWNvcmQucmVqZWN0KHRydWUpKTtcbiAgICB0aGlzLmRhdGEgPSB0aGlzLmZpbHRlcihyZWNvcmQgPT4gIXJlY29yZC5pc05ld2x5Q3JlYXRlZCgpKS5jb2xsZWN0KCk7XG4gICAgdGhpcy5maXJlRXZlbnQoKTtcbiAgfVxufSIsImltcG9ydCBFeHQgZnJvbSAnfi9jb3JlL2V4dCc7XG5pbXBvcnQgTGlzdCBmcm9tICd+L2NvcmUvbGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGVsIHtcbiAgY29uc3RydWN0b3IoZGF0YSwgc3RvcmUpIHtcbiAgICAvLyNyZWdpb24gY29uZmlnc1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAvLyNlbmRyZWdpb25cblxuICAgIC8vI3JlZ2lvbiBwcm9wZXJ0aWVzXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLnN0b3JlID0gc3RvcmU7XG4gICAgdGhpcy5pZFByb3BlcnR5ID0gKHN0b3JlICYmIHN0b3JlLmlkUHJvcGVydHkpID8gc3RvcmUuaWRQcm9wZXJ0eSA6ICdpZCc7XG4gICAgY29uc3QgZmllbGRDb25maWcgPSAoc3RvcmUgJiYgc3RvcmUuZmllbGRzKSA/IHN0b3JlLmZpZWxkcyA6IFtdO1xuICAgIHRoaXMuZmllbGRzID0gTGlzdChmaWVsZENvbmZpZykubWFwKGZpZWxkID0+IEV4dC5pc1N0cmluZyhmaWVsZCkgPyAoeyBuYW1lOiBmaWVsZCwgdHlwZTogJ3N0cmluZycgfSkgOiBmaWVsZCk7XG4gICAgLy8jZW5kcmVnaW9uXG5cbiAgICAvLyNyZWdpb24gbWV0aG9kc1xuICAgIHRoaXMuZ2V0RGF0YSA9ICgpID0+IHRoaXMuZGF0YTtcbiAgICB0aGlzLmdldCA9IGZpZWxkTmFtZSA9PiB0aGlzLmRhdGFbZmllbGROYW1lXTtcbiAgICAvLyNlbmRyZWdpb25cblxuICAgIHRoaXMuc2F2ZSgpO1xuICB9XG5cbiAgc2V0KGZpZWxkTmFtZSwgbmV3VmFsdWUsIHNpbGVudCkge1xuICAgIHRoaXMuZGF0YVtmaWVsZE5hbWVdID0gbmV3VmFsdWU7XG4gICAgdGhpcy5tb2RpZmllZCA9ICF0aGlzLmlzRXF1YWwoZmllbGROYW1lKTtcbiAgICAoIXNpbGVudCAmJiB0aGlzLnN0b3JlKSAmJiAodGhpcy5zdG9yZS5maXJlRXZlbnQoKSk7XG4gIH1cblxuICBzYXZlKCkge1xuICAgIHRoaXMucGhhbnRvbSA9IEV4dC5jbG9uZSh0aGlzLmRhdGEpO1xuICAgIHRoaXMubW9kaWZpZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHJlamVjdChzaWxlbnQpIHtcbiAgICB0aGlzLmRhdGEgPSBFeHQuY2xvbmUodGhpcy5waGFudG9tKTtcbiAgICB0aGlzLnNhdmUoKTtcbiAgICAoIXNpbGVudCAmJiB0aGlzLnN0b3JlKSAmJiAodGhpcy5zdG9yZS5maXJlRXZlbnQoKSk7XG4gIH1cblxuICBpc0VxdWFsKGZpZWxkKSB7XG4gICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzLnBoYW50b21bZmllbGQubmFtZV0sXG4gICAgICAgICAgbmV3VmFsdWUgPSB0aGlzLmRhdGFbZmllbGQubmFtZV07XG5cbiAgICByZXR1cm4gZmllbGQuZXF1YWxzID8gZmllbGQuZXF1YWxzKG5ld1ZhbHVlLCBvbGRWYWx1ZSkgOiBuZXdWYWx1ZSA9PT0gb2xkVmFsdWU7XG4gIH1cblxuICBpc01vZGlmaWVkKGZpZWxkTmFtZSkge1xuICAgIHJldHVybiB0aGlzLm1vZGlmaWVkICYmICF0aGlzLnBoYW50b21bdGhpcy5pZFByb3BlcnR5XTsgLy8gc2hvdWxkIG5vdCBkZXRlY3QgbmV3IHJlY29yZCBhcyBhIG1vZGlmaWVkIHJlY29yZFxuICB9XG5cbiAgaXNOZXdseUNyZWF0ZWQoKSB7XG4gICAgcmV0dXJuICF0aGlzLnBoYW50b21bdGhpcy5pZFByb3BlcnR5XTtcbiAgfVxuXG4gIHNldFNlbGVjdGVkKHNlbGVjdGVkLCBzaWxlbnQpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgKCFzaWxlbnQgJiYgdGhpcy5zdG9yZSkgJiYgKHRoaXMuc3RvcmUuZmlyZUV2ZW50KCkpO1xuICB9XG59IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IEV4dCBmcm9tICd+L2NvcmUvZXh0Jztcbi8vIGltcG9ydCBBamF4IGZyb20gJy4vYWpheCc7XG5pbXBvcnQgQWJzdHJhY3RTdG9yZSBmcm9tICcuL2Fic3RyYWN0LXN0b3JlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJveHlTdG9yZSBleHRlbmRzIEFic3RyYWN0U3RvcmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLy8jcmVnaW9uIGNvbmZpZ3NcbiAgICB0aGlzLnByb3h5ID0ge1xuICAgICAgcmVhZGVyOiB7fSxcbiAgICAgIHdyaXRlcjoge31cbiAgICB9O1xuICAgIC8vI2VuZHJlZ2lvblxuICB9XG5cbiAgbG9hZCgpIHtcbiAgICBsZXQgeyB1cmwsIG1ldGhvZCA9ICdnZXQnLCByZXNwb25zZVR5cGUgPSAnanNvbicsIHBhcmFtcyB9ID0gdGhpcy5wcm94eTtcbiAgICAobWV0aG9kID09PSAnZ2V0JyAmJiBwYXJhbXMpICYmICh1cmwgPSBgJHt1cmx9PyR7U3RyaW5nLnRvUXVlcnlTdHJpbmcocGFyYW1zKX1gKTtcbiAgICBPYnNlcnZhYmxlLmFqYXgoe1xuICAgICAgdXJsLFxuICAgICAgbWV0aG9kLFxuICAgICAgcmVzcG9uc2VUeXBlLFxuICAgICAgYm9keTogbWV0aG9kID09PSAncG9zdCcgJiYgcGFyYW1zXG4gICAgfSlcbiAgICAubWFwKHZhbHVlID0+IHZhbHVlLnJlc3BvbnNlKVxuICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgY29uc3QgeyByZWFkZXI6IHsgcm9vdFByb3BlcnR5LCB0b3RhbFByb3BlcnR5IH0gPSB7fSB9ID0gdGhpcy5wcm94eTtcbiAgICAgIHRoaXMubG9hZERhdGEocm9vdFByb3BlcnR5ID8gcmVzcG9uc2Vbcm9vdFByb3BlcnR5XSA6IHJlc3BvbnNlKTtcbiAgICAgIHRoaXMudG90YWxDb3VudCA9ICh0aGlzLnBhZ2VTaXplICYmIHRvdGFsUHJvcGVydHkpID8gcmVzcG9uc2VbdG90YWxQcm9wZXJ0eV0gOiB0aGlzLmNvdW50KCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBsb2FkUGFnZShwYWdlKSB7XG4gIC8vICAgdGhpcy5jdXJyZW50UGFnZSA9IHBhZ2U7XG4gIC8vICAgdGhpcy5wcm94eS5wYXJhbXMgPSBFeHQuZXh0ZW5kKHt9LCB0aGlzLnByb3h5LnBhcmFtcywgeyBwYWdlOiB0aGlzLmN1cnJlbnRQYWdlLCBzaXplOiB0aGlzLnBhZ2VTaXplIH0pO1xuICAvLyAgIHJldHVybiB0aGlzLmxvYWQoe30pO1xuICAvLyB9XG5cbiAgLy8gYXN5bmMgc3luYyh7IGRvbmUsIGZhaWwsIGFsd2F5cyB9KSB7XG4gIC8vICAgdGhpcy5wcm94eS5tZXRob2QgPSAncG9zdCc7XG4gIC8vICAgdGhpcy5wcm94eS5wYXJhbXMgPSB0aGlzLmdldE1vZGlmaWVkUmVjb3JkcygpLm1hcChyZWNvcmQgPT4gcmVjb3JkLmRhdGEpLmNvbGxlY3QoKTtcbiAgLy8gICB0aGlzLnByb3h5LnByb3h5LnBhcmFtcy5wdXNoKC4uLnRoaXMuZ2V0TmV3UmVjb3JkcygpLm1hcChyZWNvcmQgPT4gcmVjb3JkLmRhdGEpLmNvbGxlY3QoKSk7XG4gIC8vICAgY29uc3QgeyB0cmFuc2Zvcm0gfSA9IHByb3h5LndyaXRlcjtcbiAgLy8gICB0cmFuc2Zvcm0gJiYgKHRoaXMucHJveHkucGFyYW1zID0gdHJhbnNmb3JtKHRoaXMucHJveHkucGFyYW1zKSk7XG4gIC8vICAgT2JzZXJ2YWJsZS5hamF4KHRoaXMucHJveHkpLnN1YnNjcmliZSh7XG4gIC8vICAgICBuZXh0OiBkb25lLFxuICAvLyAgICAgZXJyb3I6IGZhaWwsXG4gIC8vICAgICBjb21wbGV0ZTogYWx3YXlzXG4gIC8vICAgfSk7XG4gIC8vIH1cbn0iLCJpbXBvcnQgRXh0IGZyb20gJ34vY29yZS9leHQnO1xuaW1wb3J0IFByb3h5U3RvcmUgZnJvbSAnLi9wcm94eS1zdG9yZSc7XG5cbmNsYXNzIFN0b3JlIGV4dGVuZHMgUHJveHlTdG9yZSB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKCk7XG4gICAgRXh0LmV4dGVuZCh0aGlzLCBjb25maWcpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZyA9PiBuZXcgU3RvcmUoY29uZmlnKTsiLCJpbXBvcnQgRXh0IGZyb20gJ34vY29yZS9leHQnO1xuXG5jbGFzcyBBamF4T2JzZXJ2YWJsZSB7XG4gIGNvbnN0cnVjdG9yKHVybE9yUmVxdWVzdCkge1xuICAgIHRoaXMucmVxdWVzdCA9IEV4dC5leHRlbmQoe1xuICAgICAgdXJsOiAnJyxcbiAgICAgIHBhcmFtczogJycsXG4gICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnLFxuICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICB9LCBFeHQuaXNTdHJpbmcodXJsT3JSZXF1ZXN0KSA/IHsgdXJsOiB1cmxPclJlcXVlc3QgfSA6IHVybE9yUmVxdWVzdCk7XG5cbiAgICB0aGlzLnByb21pc2UgPSByZXF1ZXN0ID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuY3JlYXRlUmVxdWVzdChyZXF1ZXN0LCAoZXJyb3IsIHJlc3BvbnNlKSA9PiBlcnJvciA/IHJlamVjdChlcnJvcikgOiByZXNvbHZlKHJlc3BvbnNlKSk7XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBzdWJzY3JpYmUoeyBuZXh0LCBlcnJvciwgY29tcGxldGUgfSkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgcmVzcG9uc2U7XG4gICAgICB0cnkge1xuICAgICAgICByZXNwb25zZSA9IGF3YWl0IHRoaXMucHJvbWlzZSh7IHVybCwgY29udGVudFR5cGUsIG1ldGhvZCwgcGFyYW1zIH0pO1xuICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgQ2Fubm90IGdldCByZXNwb25zZSBmcm9tIHNlcnZlciBmb3IgdXJsIFske3VybH1dIGNhdXNlZCBieTogJHtleH1gKTtcbiAgICAgICAgZXJyb3IgJiYgZXJyb3IoZXgpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5leHQgPyBuZXh0KHJlc3BvbnNlKSA6IHJlc3BvbnNlO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBjb21wbGV0ZSAmJiBjb21wbGV0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNlbmQoeyB1cmwsIGNvbnRlbnRUeXBlLCBtZXRob2QsIHBhcmFtcyB9LCBkb25lKSB7XG4gICAgKG1ldGhvZCA9PT0gJ2dldCcgJiYgcGFyYW1zKSAmJiAodXJsID0gYCR7dXJsfT8ke1N0cmluZy50b1F1ZXJ5U3RyaW5nKHBhcmFtcyl9YCk7XG4gICAgY29uc3QgeGhyID0gRXh0LlhIUjtcbiAgICB4aHIub3BlbihtZXRob2QsIHVybCwgdHJ1ZSk7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsIGNvbnRlbnRUeXBlKTtcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgaWYoeGhyLnJlYWR5U3RhdGUgPT09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcbiAgICAgICAgLy8gYWpheCB3aWxsIHJldHVybiBhcyBhIGpzb24gYnkgZGVmYXVsdCwgaWYgcGFyc2VyIGVycm9yIHRoZW4gaXQgd2lsbCByZXR1cm4gYSByYXcgc3RyaW5nXG4gICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgZG9uZShudWxsLCBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBkb25lKG51bGwsIHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgZG9uZShKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBkb25lKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB4aHIuc2VuZChwYXJhbXMgPyBKU09OLnN0cmluZ2lmeShwYXJhbXMpIDogbnVsbCk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlKHVybE9yUmVxdWVzdCkge1xuICAgIHJldHVybiBuZXcgQWpheE9ic2VydmFibGUodXJsT3JSZXF1ZXN0KTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50T2JzZXJ2YWJsZSB7XG4gIGNvbnN0cnVjdG9yKHRhcmdldCwgZXZlbnROYW1lLCBvcHRpb25zKSB7XG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgdGhpcy5ldmVudE5hbWUgPSBldmVudE5hbWU7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIHN1YnNjcmliZShvYnNlcnZlcikge1xuICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5ldmVudE5hbWUsIG9ic2VydmVyLCB0aGlzLm9wdGlvbnMpO1xuICB9XG5cbiAgdW5zdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICB0aGlzLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMuZXZlbnROYW1lLCBvYnNlcnZlciwgdGhpcy5vcHRpb25zKTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUodGFyZ2V0LCBldmVudE5hbWUsIG9wdGlvbnMgPSBmYWxzZSkge1xuICAgIHJldHVybiBuZXcgRXZlbnRPYnNlcnZhYmxlKHRhcmdldCwgZXZlbnROYW1lLCBvcHRpb25zKTtcbiAgfVxufSIsImltcG9ydCBPcGVyYXRvciBmcm9tICcuL29wZXJhdG9yJztcbmltcG9ydCBFdmVudE9ic2VydmFibGUgZnJvbSAnLi9ldmVudCc7XG5pbXBvcnQgQWpheE9ic2VydmFibGUgZnJvbSAnLi9hamF4JztcblxuLyoqXG4gKiBGcm9tIFJlYWN0aXZlWCBkb2NzOlxuICpcbiAqIE9ic2VydmFibGU6IEFuIGludGVyZmFjZSB0aGF0IGxpc3RlbnMgZm9yIGluY29taW5nIG5vdGlmaWNhdGlvbnMgb3ZlciBhIHBlcmlvZCBvZiB0aW1lXG4gKiBhbmQgcHVzaGVzIHRoZW0gdG8gYW5vdGhlciBpbnRlcmZhY2UgdGhhdCByZWFjdHMgdG8gdGhlbS5cbiAqXG4gKiBTdWJzY3JpcHRpb246IFdoZW4gYW4gT2JzZXJ2YWJsZSBpbnRlcmZhY2Ugc3RhcnRzIGRvaW5nIGl0cyB3b3JrLFxuICogaS5lLiBsaXN0ZW5pbmcgZm9yIG5vdGlmaWNhdGlvbnMgYW5kIHB1c2hpbmcgdGhlbSBvdXQuXG4gKlxuICogT2JzZXJ2ZXI6IEFuIGludGVyZmFjZSB0aGF0IHJlYWN0cyB0byBkYXRhIHB1c2hlZCBmcm9tIGFuIE9ic2VydmFibGUuXG4gKlxuICogT3BlcmF0b3JzOiBGdW5jdGlvbnMgdXNlZCB0byBtYW5pcHVsYXRlIGFuIE9ic2VydmFibGXigJlzIG91dHB1dCwgZS5nLiBmaWx0ZXIsIG1hcCwgcmVkdWNlLCBldGMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9ic2VydmFibGUgZXh0ZW5kcyBPcGVyYXRvciB7XG4gIGNvbnN0cnVjdG9yKHN1YnNjcmliZSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlKHN1YnNjcmliZSkge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShzdWJzY3JpYmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvciBleGFtcGxlOlxuICAgKiBjb25zdCB1bnN1YmNyaWJlID0gT2JzZXJ2YWJsZS5mcm9tRXZlbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0JyksICdjaGFuZ2UnKS5zdWJzY3JpYmUoe1xuICAgKiAgICBuZXh0OiBlID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKVxuICAgKiB9KTtcbiAgICpcbiAgICogc2V0VGltZW91dCh1bnN1YmNyaWJlLCA1MDAwKTtcbiAgICpcbiAgICogQHBhcmFtIHRhcmdldFxuICAgKiBAcGFyYW0gZXZlbnROYW1lXG4gICAqL1xuICBzdGF0aWMgZnJvbUV2ZW50KHRhcmdldCwgZXZlbnROYW1lKSB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKG9ic2VydmVyID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZSA9PiBvYnNlcnZlci5uZXh0KGUpO1xuICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaywgZmFsc2UpO1xuICAgICAgcmV0dXJuICgpID0+IHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGZhbHNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBhamF4KHVybE9yUmVxdWVzdCkge1xuICAgIHJldHVybiBBamF4T2JzZXJ2YWJsZS5jcmVhdGUodXJsT3JSZXF1ZXN0KTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wZXJhdG9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5maWx0ZXIgPSBwcmVkaWNhdGUgPT4geyAvKiB0byBiZSBpbXBsZW1lbnRlZCAqLyB9O1xuICAgIHRoaXMubWFwID0gcHJlZGljYXRlID0+IHsgLyogdG8gYmUgaW1wbGVtZW50ZWQgKi8gfTtcbiAgICB0aGlzLnJlZHVjZSA9IHByZWRpY2F0ZSA9PiB7IC8qIHRvIGJlIGltcGxlbWVudGVkICovIH07XG4gIH1cbn0iLCJpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgRXh0IH0gZnJvbSAnLi9jb3JlL2V4dCc7XG5cbmNsYXNzIFJleHQgZXh0ZW5kcyBFeHQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO2NvbnNvbGUubG9nKHRoaXMpXG4gICAgLy8gdGhpcy5DYWNoZSA9IHJlcXVpcmUoJy4vZGF0YS9jYWNoZScpO1xuICAgIC8vIHRoaXMuTW9kZWwgPSByZXF1aXJlKCcuL2RhdGEvbW9kZWwnKTtcbiAgICAvLyB0aGlzLk9ic2VydmFibGUgPSByZXF1aXJlKCcuL3JlYWN0aXZlL29ic2VydmFibGUnKTtcbiAgICAvLyB0aGlzLkRpYWxvZ01hbmFnZXIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvZGlhbG9nJyk7XG4gIH1cblxuICBhc3luYyBhcHBsaWNhdGlvbih7IHN0b3JlcywgbGF1bmNoIH0pIHtjb25zb2xlLmxvZyhzdG9yZXMpXG4gICAgaWYgKHN0b3Jlcykge1xuICAgICAgdGhpcy5MaXN0KHN0b3JlcykucmVkdWNlKChzdG9yZXMsIHN0b3JlKSA9PiB7XG4gICAgICAgIHN0b3JlID0gc3RvcmUuZGVmYXVsdDtcbiAgICAgICAgc3RvcmVzW3N0b3JlLnN0b3JlSWRdID0gc3RvcmU7XG4gICAgICAgIHJldHVybiBzdG9yZXM7XG4gICAgICB9LCB7fSlcbiAgICB9XG4gICAgaWYgKGxhdW5jaCkge1xuICAgICAgY29uc3Qgcm9vdCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnPGRpdiBpZD1cInJlYWN0LXJvb3RcIj48L2Rpdj4nKSxcbiAgICAgICAgICAgIHZpZXdwb3J0ID0gYXdhaXQgbGF1bmNoKCk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJvb3QpO1xuICAgICAgcmVuZGVyKHZpZXdwb3J0LCByb290KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFJleHQoKTtcblxuLy8jcmVnaW9uIENvbXBvbmVudFxuZXhwb3J0IHsgSGFzaFJvdXRlciwgTGluayB9IGZyb20gJy4vY29tcG9uZW50cy9yb3V0ZXInO1xuZXhwb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRhaW5lcic7XG4vLyBleHBvcnQgeyBCdXR0b24sIEJ1dHRvbkxpbmssIEZpZWxkLCBUZXh0RmllbGQsIENoZWNrYm94LCBUZXh0QXJlYSB9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtJztcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgR3JpZCB9IGZyb20gJy4vY29tcG9uZW50cy9ncmlkJztcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgTGlzdFZpZXcgfSBmcm9tICcuL2NvbXBvbmVudHMvbGlzdCc7XG4vLyBleHBvcnQgeyBEaWFsb2cgfSBmcm9tICcuL2NvbXBvbmVudHMvZGlhbG9nJztcbi8vI2VuZHJlZ2lvblxuXG4vLyNyZWdpb24gRGVjb3JhdG9yIChvciBIaWdoZXIgT3JkZXIgRnVuY3Rpb24gb3IgSGlnaGVyIE9yZGVyIENvbXBvbmVudClcbmV4cG9ydCB7IGJpbmQgfSBmcm9tICcuL2NvcmUvZXh0JztcbmV4cG9ydCB7IFJvdXRlIH0gZnJvbSAnLi9jb21wb25lbnRzL3JvdXRlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbXBvbmVudCB9IGZyb20gJy4vYXBwL2NvbXBvbmVudCc7XG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIFNlcnZpY2UgfSBmcm9tICcuL2FwcC9zZXJ2aWNlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3RvcmUgfSBmcm9tICcuL2RhdGEvc3RvcmUnO1xuLy8jZW5kcmVnaW9uIl19
