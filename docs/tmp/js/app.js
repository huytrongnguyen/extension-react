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

// import DataPackage from './components/core-concepts/data-package';
// import GridComponent from './components/ui-components/grid';

_rext2.default.application({
  views: [require('./components/getting-started/getting-started'), require('./components/core-concepts/component'), require('./components/core-concepts/screen-navigation'), require('./components/architecture/architecture'), require('./components/example/dashboard'), require('./components/example/search'), require('./components/example/details'), require('./components/example/notfound')],
  launch: function launch() {
    return _react2.default.createElement(_viewport2.default, null);
  }
});

},{"../../../src/rext":23,"./components/architecture/architecture":2,"./components/core-concepts/component":3,"./components/core-concepts/screen-navigation":4,"./components/example/dashboard":5,"./components/example/details":6,"./components/example/notfound":7,"./components/example/search":8,"./components/getting-started/getting-started":9,"./components/viewport/viewport":10,"babel-polyfill":"babel-polyfill","react":"react"}],2:[function(require,module,exports){
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

},{"../../../../../src/rext":23,"react":"react"}],3:[function(require,module,exports){
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

},{"../../../../../src/rext":23,"react":"react"}],4:[function(require,module,exports){
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

},{"../../../../../src/rext":23,"react":"react"}],5:[function(require,module,exports){
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

},{"../../../../../src/rext":23,"react":"react"}],6:[function(require,module,exports){
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

},{"../../../../../src/rext":23,"react":"react"}],7:[function(require,module,exports){
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

},{"../../../../../src/rext":23,"react":"react"}],8:[function(require,module,exports){
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

},{"../../../../../src/rext":23,"react":"react"}],9:[function(require,module,exports){
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

},{"../../../../../src/rext":23,"react":"react"}],10:[function(require,module,exports){
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

},{"../../../../../src/rext":23,"react":"react"}],11:[function(require,module,exports){
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

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
            store.subscribe(_this2.onDataChange);
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
        value: function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var stores, storeId, store;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    stores = this.state.stores;
                    _context.t0 = regeneratorRuntime.keys(stores);

                  case 2:
                    if ((_context.t1 = _context.t0()).done) {
                      _context.next = 11;
                      break;
                    }

                    storeId = _context.t1.value;
                    store = stores[storeId];
                    _context.t2 = store.autoLoad;

                    if (!_context.t2) {
                      _context.next = 9;
                      break;
                    }

                    _context.next = 9;
                    return store.load();

                  case 9:
                    _context.next = 2;
                    break;

                  case 11:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function componentDidMount() {
            return _ref.apply(this, arguments);
          }

          return componentDidMount;
        }()
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          var _this3 = this;

          (0, _dictionary2.default)(this.state.stores).each(function (storeId, store) {
            store.unsubscribe(_this3.onDataChanged);
            store.clearData(true);
          });
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

},{"../core/dictionary":14,"../core/ext":16,"../core/list":17,"../reactive/observable":21,"react":"react"}],12:[function(require,module,exports){
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

},{"../core/ext":16,"react":"react"}],13:[function(require,module,exports){
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

},{"../core/ext":16,"../core/list":17,"react":"react","rxjs":"rxjs"}],14:[function(require,module,exports){
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

},{"./list":17}],15:[function(require,module,exports){
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

},{"./list":17}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ext = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

    // this.SCROLL_WIDTH = this.getScrollWidth();
    // this.BORDER_WIDTH = 2;
    // this.CHECK_COLUMN_WIDTH = 33;
    // this.UNKNOWN_ERROR_MSG = 'An unknown error has occurred.';
    // this.XHR = new XMLHttpRequest();

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

    // this.clone = obj => JSON.parse(JSON.stringify(obj)); // deep clone

    // this.DOM = DOM;
    // this.String = String;
    // this.List = List;
    // this.Map = Dictionary;
    // this.Provider = new Dictionary();
  }

  // extend() {
  //   return Object.assign.apply(null, arguments); // immutable object
  // }

  _createClass(Ext, [{
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

    // getEl(selector) {
    //   return DOM(selector);
    // }

    // getScrollWidth() {
    //   const outer = this.createElement('<div style="visibility: hidden; width: 100px; overflow: scroll;"></div>');
    //   document.body.appendChild(outer);
    //   const widthNoScroll = outer.offsetWidth;

    //   // add innerdiv
    //   const inner = this.createElement('<div style="width: 100%;"></div>');
    //   outer.appendChild(inner);
    //   const widthWithScroll = inner.offsetWidth;

    //   // remove divs
    //   outer.parentNode.removeChild(outer);

    //   return widthNoScroll - widthWithScroll;
    // }
    //#endregion

  }]);

  return Ext;
}();

exports.default = new Ext();

// export function bind(target, name, descriptor) {
//   const fn = descriptor.value;

//   if (typeof fn !== 'function') {
//     throw new Error(`@bind decorator is only applied to functions not: ${typeof fn}`);
//   }

//   return {
//     configurable: true,
//     get() {
//       return fn.bind(this);
//     }
//   };
// }

// export function debounce(func, wait = 500) {
//   let timeout;
//   return function() {
//     const context = this,
//           args = arguments,
//           later = function() {
//             func.apply(context, args);
//           }

//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//   }
// }

},{"./dictionary":14,"./dom":15,"./list":17,"./string":18}],17:[function(require,module,exports){
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
      var index = -1;
      for (var idx = 0, item; (item = this.data[idx]) != null; ++idx) {
        if (predicate(item, idx, this.data)) {
          index = idx;
          break;
        }
      }
      return index;
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

},{}],18:[function(require,module,exports){
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

},{}],19:[function(require,module,exports){
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

},{"../core/ext":16}],20:[function(require,module,exports){
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

},{}],21:[function(require,module,exports){
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

},{"./ajax":19,"./event":20,"./operator":22}],22:[function(require,module,exports){
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

},{}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = exports.Route = exports.bind = exports.Container = exports.Link = exports.HashRouter = undefined;

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

},{"./app/component":11,"./components/container":12,"./components/router":13,"./core/ext":16,"babel-polyfill":"babel-polyfill","react":"react","react-dom":"react-dom"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkb2NzL3NyYy9qcy9hcHAuanMiLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2FyY2hpdGVjdHVyZS9hcmNoaXRlY3R1cmUuanN4IiwiZG9jcy9zcmMvanMvY29tcG9uZW50cy9jb3JlLWNvbmNlcHRzL2NvbXBvbmVudC5qc3giLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2NvcmUtY29uY2VwdHMvc2NyZWVuLW5hdmlnYXRpb24uanN4IiwiZG9jcy9zcmMvanMvY29tcG9uZW50cy9leGFtcGxlL2Rhc2hib2FyZC5qcyIsImRvY3Mvc3JjL2pzL2NvbXBvbmVudHMvZXhhbXBsZS9kZXRhaWxzLmpzIiwiZG9jcy9zcmMvanMvY29tcG9uZW50cy9leGFtcGxlL25vdGZvdW5kLmpzIiwiZG9jcy9zcmMvanMvY29tcG9uZW50cy9leGFtcGxlL3NlYXJjaC5qcyIsImRvY3Mvc3JjL2pzL2NvbXBvbmVudHMvZ2V0dGluZy1zdGFydGVkL2dldHRpbmctc3RhcnRlZC5qc3giLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL3ZpZXdwb3J0L3ZpZXdwb3J0LmpzeCIsInNyYy9hcHAvY29tcG9uZW50LmpzIiwic3JjL2NvbXBvbmVudHMvY29udGFpbmVyLmpzeCIsInNyYy9jb21wb25lbnRzL3JvdXRlci5qc3giLCJzcmMvY29yZS9kaWN0aW9uYXJ5LmpzIiwic3JjL2NvcmUvZG9tLmpzIiwic3JjL2NvcmUvZXh0LmpzIiwic3JjL2NvcmUvbGlzdC5qcyIsInNyYy9jb3JlL3N0cmluZy5qcyIsInNyYy9yZWFjdGl2ZS9hamF4LmpzIiwic3JjL3JlYWN0aXZlL2V2ZW50LmpzIiwic3JjL3JlYWN0aXZlL29ic2VydmFibGUuanMiLCJzcmMvcmVhY3RpdmUvb3BlcmF0b3IuanMiLCJzcmMvcmV4dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7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QUNEOzs7Ozs7WUFFbUIsTSxRQUFBLE07Ozs7OztxQkFDZCxNOzs7OztBQUNJLG9CLEdBQU8sS0FBSyxhQUFMLENBQW1CLDZCQUFuQixDOzt1QkFDVSxROzs7QUFBakIsd0I7O0FBQ04seUJBQVMsSUFBVCxDQUFjLFdBQWQsQ0FBMEIsSUFBMUI7QUFDQSxzQ0FBTyxRQUFQLEVBQWlCLElBQWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBS1MsSUFBSSxJQUFKLEU7O0FBRWYiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJleHQgZnJvbSAnfi9yZXh0JztcbmltcG9ydCBWaWV3cG9ydCBmcm9tICcuL2NvbXBvbmVudHMvdmlld3BvcnQvdmlld3BvcnQnO1xuLy8gaW1wb3J0IERhdGFQYWNrYWdlIGZyb20gJy4vY29tcG9uZW50cy9jb3JlLWNvbmNlcHRzL2RhdGEtcGFja2FnZSc7XG4vLyBpbXBvcnQgR3JpZENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvdWktY29tcG9uZW50cy9ncmlkJztcblxuUmV4dC5hcHBsaWNhdGlvbih7XG4gIHZpZXdzOiBbXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2dldHRpbmctc3RhcnRlZC9nZXR0aW5nLXN0YXJ0ZWQnKSxcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvY29yZS1jb25jZXB0cy9jb21wb25lbnQnKSxcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvY29yZS1jb25jZXB0cy9zY3JlZW4tbmF2aWdhdGlvbicpLFxuICAgIHJlcXVpcmUoJy4vY29tcG9uZW50cy9hcmNoaXRlY3R1cmUvYXJjaGl0ZWN0dXJlJyksXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2V4YW1wbGUvZGFzaGJvYXJkJyksXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2V4YW1wbGUvc2VhcmNoJyksXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2V4YW1wbGUvZGV0YWlscycpLFxuICAgIHJlcXVpcmUoJy4vY29tcG9uZW50cy9leGFtcGxlL25vdGZvdW5kJyksXG4gIF0sXG4gIGxhdW5jaDogKCkgPT4gPFZpZXdwb3J0IC8+XG59KTsiLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBDb250YWluZXIsIFN0cmluZyB9IGZyb20gJ34vcmV4dCc7XG5cbkBSb3V0ZSgnL2FyY2hpdGVjdHVyZScpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcmNoaXRlY3R1cmUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Q29udGFpbmVyIGNsYXNzTmFtZT1cIm1haW4gY29udGFpbmVyIHNjcm9sbGFibGVcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi1tZFwiPkFwcGxpY2F0aW9uIEFyY2hpdGVjdHVyZTwvaDE+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlxuICAgICAgICBFeHRlbnNpb24gUmVhY3QgcHJvdmlkZXMgc3VwcG9ydCBmb3IgTVZDK1ZNIGFwcGxpY2F0aW9uIGFyY2hpdGVjdHVyZXMuIFxuICAgICAgICBUbyB1bmRlcnN0YW5kIHdoYXQgaXMgTVZDK1ZNLCB3ZSBzaG91bGQgc3RhcnQgYnkgZnVydGhlciBkZWZpbmluZyB3aGF0IHRoZSB2YXJpb3VzIGFiYnJldmlhdGlvbnMgcmVwcmVzZW50LlxuICAgICAgPC9wPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8c3Ryb25nPihNKSBNb2RlbDwvc3Ryb25nPiAtIFRoaXMgaXMgdGhlIGRhdGEgZm9yIHlvdXIgYXBwbGljYXRpb24uXG4gICAgICAgICAgQSBzZXQgb2YgY2xhc3NlcyAoY2FsbGVkIFwiTW9kZWxzXCIpIGRlZmluZXMgdGhlIGZpZWxkcyBmb3IgdGhlaXIgZGF0YSAoZS5nLiBhIFVzZXIgbW9kZWwgd2l0aCB1c2VyLW5hbWUgYW5kIHBhc3N3b3JkIGZpZWxkcykuXG4gICAgICAgICAgTW9kZWxzIGtub3cgaG93IHRvIHBlcnNpc3QgdGhlbXNlbHZlcyB0aHJvdWdoIHRoZSBkYXRhIHBhY2thZ2UgYW5kIGNhbiBiZSBsaW5rZWQgdG8gb3RoZXIgbW9kZWxzIHZpYSBhc3NvY2lhdGlvbnMuXG4gICAgICAgICAgTW9kZWxzIGFyZSBub3JtYWxseSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggU3RvcmVzIHRvIHByb3ZpZGUgZGF0YSBmb3IgZ3JpZHMgYW5kIG90aGVyIGNvbXBvbmVudHMuXG4gICAgICAgICAgTW9kZWxzIGFyZSBhbHNvIGFuIGlkZWFsIGxvY2F0aW9uIGZvciBhbnkgZGF0YSBsb2dpYyB0aGF0IHlvdSBtYXkgbmVlZCwgc3VjaCBhcyB2YWxpZGF0aW9uLCBjb252ZXJzaW9uLCBldGMuXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8c3Ryb25nPihWKSBWaWV3PC9zdHJvbmc+IC0gQSBWaWV3IGlzIGFueSB0eXBlIG9mIGNvbXBvbmVudCB0aGF0IGlzIHZpc3VhbGx5IHJlcHJlc2VudGVkLiBGb3IgaW5zdGFuY2UsIGdyaWRzLCB0cmVlcyBhbmQgcGFuZWxzIGFyZSBhbGwgY29uc2lkZXJlZCBWaWV3cy5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxzdHJvbmc+KEMpIENvbnRyb2xsZXI8L3N0cm9uZz4gLSBDb250cm9sbGVycyBhcmUgdXNlZCBhcyBhIHBsYWNlIHRvIG1haW50YWluIHRoZSB2aWV3J3MgbG9naWMgdGhhdCBtYWtlcyB5b3VyIGFwcCB3b3JrLlxuICAgICAgICAgIFRoaXMgY291bGQgZW50YWlsIHJlbmRlcmluZyB2aWV3cywgcm91dGluZywgaW5zdGFudGlhdGluZyBNb2RlbHMsIGFuZCBhbnkgb3RoZXIgc29ydCBvZiBhcHAgbG9naWMuXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8c3Ryb25nPihWTSkgVmlld01vZGVsPC9zdHJvbmc+IC0gVGhlIFZpZXdNb2RlbCBpcyBhIGNsYXNzIHRoYXQgbWFuYWdlcyBkYXRhIHNwZWNpZmljIHRvIHRoZSBWaWV3LlxuICAgICAgICAgIEl0IGFsbG93cyBpbnRlcmVzdGVkIGNvbXBvbmVudHMgdG8gYmluZCB0byBpdCBhbmQgYmUgdXBkYXRlZCB3aGVuZXZlciB0aGlzIGRhdGEgY2hhbmdlcy5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwibWItbWRcIj5Nb2RlbHMgYW5kIFN0b3JlczwvaDM+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlxuICAgICAgICA8Y29kZT5Nb2RlbHM8L2NvZGU+IGFuZCA8Y29kZT5TdG9yZXM8L2NvZGU+IG1ha2UgdXAgdGhlIGluZm9ybWF0aW9uIGdhdGV3YXkgb2YgeW91ciBhcHBsaWNhdGlvbi5cbiAgICAgICAgTW9zdCBvZiB5b3VyIGRhdGEgaXMgc2VudCwgcmV0cmlldmVkLCBvcmdhbml6ZWQsIGFuZCBcIm1vZGVsZWRcIiBieSB0aGVzZSB0d28gY2xhc3Nlcy5cbiAgICAgIDwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG4gICAgICAgIEEgPGNvZGU+TW9kZWw8L2NvZGU+IHJlcHJlc2VudHMgYW55IHR5cGUgb2YgcGVyc2lzdC1hYmxlIGRhdGEgaW4geW91ciBhcHBsaWNhdGlvbi5cbiAgICAgICAgRWFjaCBtb2RlbCBoYXMgZmllbGRzIGFuZCBmdW5jdGlvbnMgdGhhdCBhbGxvdyB5b3VyIGFwcGxpY2F0aW9uIHRvIFwibW9kZWxcIiBkYXRhLlxuICAgICAgICBNb2RlbHMgYXJlIG1vc3QgY29tbW9ubHkgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHN0b3Jlcy5cbiAgICAgICAgU3RvcmVzIGNhbiB0aGVuIGJlIGNvbnN1bWVkIGJ5IGRhdGEtYm91bmQgY29tcG9uZW50cyBsaWtlIGdyaWRzLCB0cmVlcywgYW5kIGNoYXJ0cy5cbiAgICAgIDwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG4gICAgICAgIEEgPGNvZGU+U3RvcmU8L2NvZGU+IGlzIGEgY2xpZW50IHNpZGUgY2FjaGUgb2YgcmVjb3JkcyAoaW5zdGFuY2VzIG9mIGEgTW9kZWwgY2xhc3MpLlxuICAgICAgICBTdG9yZXMgcHJvdmlkZSBmdW5jdGlvbnMgZm9yIHF1ZXJ5aW5nIHRoZSByZWNvcmRzIGNvbnRhaW5lZCB3aXRoaW4uXG4gICAgICA8L3A+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwibWItbWRcIj5WaWV3Q29udHJvbGxlcnM8L2gzPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5FeHRlbnNpb24gUmVhY3QgZGVsaXZlcnMgc29tZSBleGNpdGluZyBpbXByb3ZlbWVudHMgZm9yIFJlYWN0LiBUbyBlbmhhbmNlIE1WQyBhcHBsaWNhdGlvbnMsIEV4dGVuc2lvbiBSZWFjdCBwcm92aWRlcyBWaWV3Q29udHJvbGxlcnMsIGFsc28gY2FsbGVkIGFzIENvbXBvbmVudDo8L3A+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWItbWRcIj5cbiAgICAgICAgPGxpPlNpbXBsaWZpZXMgdGhlIGNvbm5lY3Rpb24gdG8gdmlld3MgdXNpbmcg4oCcQ29tcG9uZW504oCdIGRlY29yYXRvci48L2xpPlxuICAgICAgICA8bGk+TGV2ZXJhZ2VzIHRoZSBsaWZlIGN5Y2xlIG9mIHZpZXdzIHRvIGF1dG9tYXRpY2FsbHkgbWFuYWdlIHRoZWlyIGFzc29jaWF0ZWQuPC9saT5cbiAgICAgICAgPGxpPlJlZHVjZXMgY29tcGxleGl0eSBiYXNlZCBvbiBhIG9uZS10by1vbmUgcmVsYXRpb25zaGlwIHdpdGggdGhlIG1hbmFnZWQgdmlldy48L2xpPlxuICAgICAgICA8bGk+UHJvdmlkZXMgZW5jYXBzdWxhdGlvbiB0byBtYWtlIG5lc3Rpbmcgdmlld3MgcmVsaWFibGUuPC9saT5cbiAgICAgICAgPGxpPlJldGFpbnMgdGhlIGFiaWxpdHkgdG8gc2VsZWN0IGNvbXBvbmVudHMgYW5kIGxpc3RlbiB0byB0aGVpciBldmVudHMgYXQgYW55IGxldmVsIGJlbG93IHRoZSBhc3NvY2lhdGVkIHZpZXcuPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8cHJlPlxue2AvLyAuL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5qc1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZXh0LCB7IENvbnRhaW5lciB9IGZyb20gJ2V4dC1yZWFjdCc7XG5pbXBvcnQgRGF0YVN0b3JlIGZyb20gJ34vc3RvcmVzL2RhdGEnO1xuaW1wb3J0IFNlYXJjaEZvcm0gZnJvbSAnLi9zZWFyY2gtZm9ybSc7XG5pbXBvcnQgU2VhcmNoUmVzdWx0IGZyb20gJy4vc2VhcmNoLXJlc3VsdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPENvbnRhaW5lcj5cbiAgICAgIDxTZWFyY2hGb3JtIC8+XG4gICAgICA8U2VhcmNoUmVzdWx0IC8+XG4gICAgPC9Db250YWluZXI+XG4gIH1cbn1cblxuLy8gLi9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2gtZm9ybS5qc1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnZXh0LXJlYWN0JztcbmltcG9ydCBEYXRhU3RvcmUgZnJvbSAnfi9zdG9yZXMvZGF0YSc7XG5pbXBvcnQgU2VhcmNoRm9ybVZpZXcgZnJvbSAnLi9zZWFyY2gtZm9ybS52aWV3JztcblxuQENvbXBvbmVudCh7XG4gIHZpZXc6IFNlYXJjaEZvcm1WaWV3XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoRm9ybSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY3JpdGVyaWEgPSB7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIHN0YXR1c2VzOiBbXSxcbiAgICAgIHB1cnBvc2VzOiBbXSxcbiAgICAgIGFjdGl2aXRpZXM6IFtdLFxuICAgICAgcHJvZHVjdHM6IFtdXG4gICAgfTtcbiAgfVxuXG4gIHNlYXJjaChjcml0ZXJpYSkge1xuICAgIGNyaXRlcmlhID0gdGhpcy5jb3JyZWN0Q3JpdGVyaWEoY3JpdGVyaWEpO1xuICAgIERhdGFTdG9yZS5yZWplY3RDaGFuZ2VzKCk7XG4gICAgUmV4dC5leHRlbmQoRGF0YVN0b3JlLnByb3h5LCB7XG4gICAgICBwYXJhbXM6IGNyaXRlcmlhLFxuICAgICAgZmFpbDogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyKHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICBEYXRhU3RvcmUuY2xlYXJEYXRhKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgRGF0YVN0b3JlLmxvYWQoKTtcbiAgfVxuXG4gIGNsZWFyU2VhcmNoUmVzdWx0KGNvbXApIHtcbiAgICBEYXRhU3RvcmUucmVqZWN0Q2hhbmdlcygpO1xuICAgIERhdGFTdG9yZS5jbGVhckRhdGEoKTtcbiAgICBjb21wLnNldFN0YXRlKCgpID0+ICh0aGlzLmNyaXRlcmlhKSk7XG4gIH1cbn1cblxuLy8gLi9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2gtZm9ybS52aWV3LmpzeFxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZpZWxkLCBEcm9wZG93biwgQnV0dG9uIH0gZnJvbSAnZXh0LXJlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoRm9ybVZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBFeHQuaW5pdGlhbFN0YXRlKHRoaXMsIHByb3BzLiR2aWV3LmNyaXRlcmlhKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5hbWUsIHN0YXR1c2VzLCBwdXJwb3NlcywgYWN0aXZpdGllcywgcHJvZHVjdHMgfSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgeyBzZWFyY2gsIGNsZWFyU2VhcmNoUmVzdWx0IH0gPSB0aGlzLnByb3BzLiR2aWV3O1xuICAgIHJldHVybiA8c2VjdGlvbj5cbiAgICAgIDxGaWVsZCB2YWx1ZT17bmFtZX0gcGxhY2Vob2xkZXI9XCJOYW1lXCIgb25DaGFuZ2U9e3RoaXMuc2V0TmFtZX0gLz5cbiAgICAgIDxEcm9wZG93biBtdWx0aXBsZSBvcHRpb25zPXtbXX0gdmFsdWU9e3N0YXR1c2VzfSBvbkJsdXI9e3RoaXMuc2V0U3RhdHVzZXN9IC8+XG4gICAgICA8RHJvcGRvd24gbXVsdGlwbGUgb3B0aW9ucz17W119IHZhbHVlPXtwdXJwb3Nlc30gb25CbHVyPXt0aGlzLnNldFB1cnBvc2VzfSAvPlxuICAgICAgPERyb3Bkb3duIG11bHRpcGxlIG9wdGlvbnM9e1tdfSB2YWx1ZT17YWN0aXZpdGllc30gb25CbHVyPXt0aGlzLnNldEFjdGl2aXRpZXN9IC8+XG4gICAgICA8RHJvcGRvd24gbXVsdGlwbGUgb3B0aW9ucz17W119IHZhbHVlPXtwcm9kdWN0c30gb25CbHVyPXt0aGlzLnNldFByb2R1Y3RzfSAvPlxuICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHRleHQ9XCJTZWFyY2hcIiBvbkNsaWNrPXsoKSA9PiBzZWFyY2godGhpcy5zdGF0ZSl9IC8+XG4gICAgICA8QnV0dG9uIHRleHQ9XCJDbGVhclwiIG9uQ2xpY2s9eygpID0+IGNsZWFyU2VhcmNoUmVzdWx0KHRoaXMpfSAvPlxuICAgIDwvc2VjdGlvbj5cbiAgfVxufVxuXG4vLyAuL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC1yZXN1bHQuanN4XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkIH0gZnJvbSAnZXh0LXJlYWN0JztcbmltcG9ydCBEYXRhU3RvcmUgZnJvbSAnfi9zdG9yZXMvZGF0YSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaFJlc3VsdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5hbWUsIHJlY29yZFN0YXR1c2VzLCBwdXJwb3NlcywgYWN0aXZpdGllcywgcHJvZHVjdHMgfSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgeyBzZWFyY2gsIGNsZWFyU2VhcmNoUmVzdWx0IH0gPSB0aGlzLnByb3BzLiR2aWV3O1xuICAgIHJldHVybiA8Q29udGFpbmVyPlxuICAgICAgPEdyaWQgc3RvcmU9e0RhdGFTdG9yZX0+XG4gICAgICAgIDxkaXYgdGV4dD1cIklEXCIgZGF0YUluZGV4PVwiaWRcIiAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJOYW1lXCIgZGF0YUluZGV4PVwibmFtZVwiIC8+XG4gICAgICAgIDxkaXYgdGV4dD1cIlN0YXR1c1wiIGRhdGFJbmRleD1cInN0YXR1c1wiIC8+XG4gICAgICAgIDxkaXYgdGV4dD1cIlB1cnBvc2VcIiBkYXRhSW5kZXg9XCJwdXJwb3NlXCIgLz5cbiAgICAgICAgPGRpdiB0ZXh0PVwiQWN0aXZpdHlcIiBkYXRhSW5kZXg9XCJhY3Rpdml0eVwiIC8+XG4gICAgICAgIDxkaXYgdGV4dD1cIlByb2R1Y3RcIiBkYXRhSW5kZXg9XCJwcm9kdWN0XCIgLz5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgfVxufWB9XG4gICAgICA8L3ByZT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIENvbnRhaW5lciwgU3RyaW5nIH0gZnJvbSAnfi9yZXh0JztcblxuQFJvdXRlKCcvY29yZS1jb25jZXB0cy9jb21wb25lbnQnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmV4dENvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxDb250YWluZXIgY2xhc3NOYW1lPVwibWFpbiBjb250YWluZXIgc2Nyb2xsYWJsZVwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLW1kXCI+Q29tcG9uZW50PC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG4gICAgICAgIEEgY29tcG9uZW50IGluIEV4dGVuc2lvbiBSZWFjdCBpcyB0aGUgY29tYmluYXRpb24gb2YgYSBSZWFjdCBDb21wb25lbnQgYW5kIGEgY29tcG9uZW50IGNsYXNzIHRoYXQgY29udHJvbHMgYSBwb3J0aW9uIG9mIHRoZSBzY3JlZW4uXG4gICAgICAgIEhlcmUgaXMgYW4gZXhhbXBsZSBvZiBhIGNvbXBvbmVudCB0aGF0IGRpc3BsYXkgYSBzaW1wbGUgc3RyaW5nOlxuICAgICAgPC9wPlxuICAgICAgPHByZSBjbGFzc05hbWU9XCJtYi1tZFwiPlxue2AvLyAuL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC52aWV3LmpzeFxuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhc2hib2FyZFZpZXcgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8aDE+e3RoaXMucHJvcHMuJHZpZXcudGl0bGV9PC9oMT47XG4gIH1cbn1cblxuLy8gLi9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuanNcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2V4dC1yZWFjdCc7XG5pbXBvcnQgRGFzaGJvYXJkVmlldyBmcm9tICcuL2Rhc2hib2FyZC52aWV3JztcblxuQENvbXBvbmVudCh7XG4gIHZpZXc6IERhc2hib2FyZFZpZXdcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMudGl0bGUgPSAnRGFzaGJvYXJkJztcbiAgfVxufWB9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG4gICAgICAgIEV2ZXJ5IGNvbXBvbmVudCBiZWdpbnMgd2l0aCBhbiA8Y29kZT5AQ29tcG9uZW50PC9jb2RlPiBkZWNvcmF0b3IgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIDxlbT5tZXRhZGF0YTwvZW0+IG9iamVjdC5cbiAgICAgICAgVGhlIG1ldGFkYXRhIG9iamVjdCBkZXNjcmliZXMgaG93IHRoZSBSZWFjdCBDb21wb25lbnQgYW5kIGNvbXBvbmVudCBjbGFzcyB3b3JrIHRvZ2V0aGVyLlxuICAgICAgICBUaGF0J3MgbWVhbiB5b3UgY2FuIGFjY2VzcyBhbnkgcHJvcGVydHkgb3IgbWV0aG9kIG9mIGNvbXBvbmVudCBjbGFzcyB2aWEgPGNvZGU+dGhpcy5wcm9wcy4kdmlldzwvY29kZT4uXG4gICAgICA8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlxuICAgICAgICBBY3R1YWxseSwgd2l0aCB0aGUgYWJvdmUgZXhhbXBsZSwgaXQgY2FuIGJlIGltcGxlbWVudGVkIGxpa2UgdGhpczpcbiAgICAgIDwvcD5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntgaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnZXh0LXJlYWN0JztcblxuQENvbXBvbmVudCh7XG4gIHZpZXc6ICh7ICR2aWV3IH0pID0+IDxoMT57JHZpZXcudGl0bGV9PC9oMT5cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMudGl0bGUgPSAnRGFzaGJvYXJkJztcbiAgfVxufWB9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+RXh0ZW5zaW9uIFJlYWN0IHByb3ZpZGUgYSBuZXcgd2F5IHRvIHdvcmsgd2l0aCBzdGF0ZTo8L3A+XG4gICAgICA8cHJlIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG57YC8vIC4vY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLnZpZXcuanN4XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJleHQgZnJvbSAnZXh0ZW5zaW9uLXJlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoVmlldyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIFJleHQuaW5pdGlhbFN0YXRlKHRoaXMsIHtcbiAgICAgIG5hbWU6IHByb3BzLm5hbWVcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdGhpcy5zZXROYW1lKG5leHRQcm9wcy5uYW1lKTtcbiAgfVxuICAuLi5cbn1gfVxuICAgICAgPC9wcmU+XG4gICAgICA8cD5cbiAgICAgICAgSW5zdGVhZCBvZiB1c2luZyA8Y29kZT57YHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSwgcHJvcHMpID0+ICh7IG5hbWU6IHByb3BzLm5hbWUgfSkpYH08L2NvZGU+IHRvIHVwZGF0ZSB0aGUgc3RhdGUsXG4gICAgICAgIHlvdSBjYW4gdXNlIDxjb2RlPnRoaXMuc2V0TmFtZShwcm9wcy5uYW1lKTwvY29kZT4gdG8gbWFrZSBpdCBlYXNpZXIgdG8gdW5kZXJzdGFuZCBhbmQgbW9yZSBuYXR1cmFsIGJ5IHVzaW5nIDxjb2RlPlJleHQuaW5pdGlhbFN0YXRlPC9jb2RlPiBmdW5jdGlvbiB0byBkZWNsYXJlIHRoZSBzdGF0ZSBpbiBjb25zdHJ1Y3Rvci5cbiAgICAgIDwvcD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIENvbnRhaW5lciwgU3RyaW5nIH0gZnJvbSAnfi9yZXh0JztcblxuQFJvdXRlKCcvY29yZS1jb25jZXB0cy9zY3JlZW4tbmF2aWdhdGlvbicpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JlZW5OYXZpZ2F0aW9uIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPENvbnRhaW5lciBjbGFzc05hbWU9XCJtYWluIGNvbnRhaW5lciBzY3JvbGxhYmxlXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwibWItbWRcIj5TY3JlZW4gTmF2aWdhdGlvbjwvaDE+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWItbWRcIj5cbiAgICAgICAgPGxpPjxzdHJvbmc+PGNvZGU+Um91dGU8L2NvZGU+PC9zdHJvbmc+IGRlY29yYXRvciBpcyBtb3N0IGJhc2ljIHJlc3BvbnNpYmlsaXR5IGlzIHRvIHJlbmRlciBVSSB3aGVuIGEgbG9jYXRpb24gbWF0Y2hlcyB0aGUgcm91dGXigJlzIHBhdGguPC9saT5cbiAgICAgICAgPGxpPjxzdHJvbmc+PGNvZGU+TGluazwvY29kZT48L3N0cm9uZz4gcHJvdmlkZXMgZGVjbGFyYXRpdmUsIGFjY2Vzc2libGUgbmF2aWdhdGlvbiBhcm91bmQgeW91ciBhcHBsaWNhdGlvbi48L2xpPlxuICAgICAgICA8bGk+PHN0cm9uZz48Y29kZT5IYXNoUm91dGVyPC9jb2RlPjwvc3Ryb25nPiB1c2VzIHRoZSBoYXNoIHBvcnRpb24gb2YgdGhlIFVSTCAoaS5lLiB3aW5kb3cubG9jYXRpb24uaGFzaCkgdG8ga2VlcCB5b3VyIFVJIGluIHN5bmMgd2l0aCB0aGUgVVJMLjwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPHByZSBjbGFzc05hbWU9XCJtYi1tZFwiPlxue2AvLyBtYWluLmpzXG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBSZXh0IGZyb20gJ2V4dC1yZWFjdCc7XG5pbXBvcnQgVmlld3BvcnQgZnJvbSAnLi9jb21wb25lbnRzL3ZpZXdwb3J0JztcblxuUmV4dC5hcHBsaWNhdGlvbih7XG4gIHZpZXdzOiBbXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL3NlYXJjaCcpLFxuICAgIHJlcXVpcmUoJy4vY29tcG9uZW50cy9kZXRhaWxzJyksXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL25vdGZvdW5kJyksXG4gIF0sXG4gIGxhdW5jaDogKCkgPT4gPFZpZXdwb3J0IC8+XG59KTtcblxuUmV4dC5sYXVuY2goPFZpZXdwb3J0IC8+KTtcblxuLy8gLi9jb21wb25lbnRzL3ZpZXdwb3J0LmpzXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgSGFzaFJvdXRlciB9IGZyb20gJ2V4dC1yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZXdwb3J0KCkge1xuICByZXR1cm4gPHNlY3Rpb24+XG4gICAgPExpbmsgdG89XCIvXCI+RGFzaGJvYXJkPC9MaW5rPlxuICAgIDxMaW5rIHRvPVwiL3NlYXJjaFwiPlNlYXJjaDwvTGluaz5cbiAgICA8TGluayB0bz1cIi9kZXRhaWxzL2h1eW5ndXllblwiPkRldGFpbHM8L0xpbms+XG4gICAgPEhhc2hSb3V0ZXIgLz5cbiAgPC9zZWN0aW9uPlxufVxuXG4vLyAuL2NvbXBvbmVudHMvc2VhcmNoLmpzXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIENvbXBvbmVudCB9IGZyb20gJ2V4dC1yZWFjdCc7XG5cbkBSb3V0ZSgnL3NlYXJjaCcpXG5AQ29tcG9uZW50KHtcbiAgdmlldzogKCkgPT4gPHNlY3Rpb24gLz5cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2ggeyB9XG5cbi8vIC4vY29tcG9uZW50cy9kZXRhaWxzLmpzXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIENvbXBvbmVudCB9IGZyb20gJ2V4dC1yZWFjdCc7XG5cbkBSb3V0ZSgnL2RldGFpbHMvOm5hbWUnKVxuQENvbXBvbmVudCh7XG4gIHZpZXc6ICh7IHBhcmFtcyB9KSA9PiA8aDE+e3BhcmFtcy5uYW1lfTwvaDE+XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV0YWlscyB7IH1cblxuLy8gLi9jb21wb25lbnRzL25vdGZvdW5kLmpzXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAnZXh0LXJlYWN0JztcblxuQFJvdXRlKCcqJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdEZvdW5kIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGgxPid7dGhpcy5wcm9wcy5wYXJhbXMucm91dGV9JyBkb2Vzbid0IGV4aXN0PC9oMT5cbiAgfVxufWB9XG4gICAgICA8L3ByZT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29tcG9uZW50IH0gZnJvbSAnfi9yZXh0JztcblxuQFJvdXRlKCcvZXhhbXBsZS9kYXNoYm9hcmQnKVxuQENvbXBvbmVudCh7XG4gIHZpZXc6ICh7ICR2aWV3IH0pID0+IDxoMT57JHZpZXcudGl0bGV9PC9oMT5cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRpdGxlID0gJ0Rhc2hib2FyZCc7XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIENvbXBvbmVudCB9IGZyb20gJ34vcmV4dCc7XG5cbkBSb3V0ZSgnL2V4YW1wbGUvZGV0YWlscy86bmFtZScpXG5AQ29tcG9uZW50KHtcbiAgdmlldzogKHsgcGFyYW1zIH0pID0+IDxoMT57cGFyYW1zLm5hbWV9PC9oMT5cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXRhaWxzIHsgfSIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUgfSBmcm9tICd+L3JleHQnO1xuXG5AUm91dGUoJyonKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90Rm91bmQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8aDE+J3t0aGlzLnByb3BzLnBhcmFtcy5yb3V0ZX0nIGRvZXNuJ3QgZXhpc3Q8L2gxPlxuICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBDb21wb25lbnQgfSBmcm9tICd+L3JleHQnO1xuXG5AUm91dGUoJy9leGFtcGxlL3NlYXJjaCcpXG5AQ29tcG9uZW50KHtcbiAgdmlldzogKCkgPT4gPHNlY3Rpb24gLz5cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmQgeyB9IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29udGFpbmVyIH0gZnJvbSAnfi9yZXh0JztcblxuQFJvdXRlKCcvJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdldHRpbmdTdGFydGVkIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPENvbnRhaW5lciBjbGFzc05hbWU9XCJtYWluIGNvbnRhaW5lciBzY3JvbGxhYmxlXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwibWItbWRcIj5HZXR0aW5nIFN0YXJ0ZWQ8L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5cbiAgICAgICAgRXh0ZW5zaW9uIFJlYWN0IGlzIGEgbGlicmFyeSB0aGF0IGJ1aWxkIG9uIHRvcCBvZiBSZWFjdCwgaGVscGluZyB5b3UgYnVpbGQgZGF0YS1pbnRlbnNpdmUsIGNyb3NzLXBsYXRmb3JtIHdlYiBhcHBzIGZvciBkZXNrdG9wcywgdGFibGV0cywgYW5kIHNtYXJ0cGhvbmVzLlxuICAgICAgPC9wPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLW1kXCI+UXVpY2sgU3RhcnQ8L2gyPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLW1kXCI+MS4gU2V0dXAgYSBkZXZlbG9wbWVudCBlbnZpcm9tZW50PC9oMz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+VXNlIDxjb2RlPm5wbTwvY29kZT4gb3IgPGNvZGU+eWFybjwvY29kZT4gdG8gaW5zdGFsbCBmb2xsb3dpbmcgZGVwZW5kZW5jaWVzOjwvcD5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtYi1tZFwiPlxuICAgICAgICA8bGk+PGNvZGU+YmFiZWwtcG9seWZpbGw8L2NvZGU+PC9saT5cbiAgICAgICAgPGxpPjxjb2RlPmJhYmVsLXByZXNldC1lbnY8L2NvZGU+PC9saT5cbiAgICAgICAgPGxpPjxjb2RlPmJhYmVsLXByZXNldC1yZWFjdDwvY29kZT48L2xpPlxuICAgICAgICA8bGk+PGNvZGU+ZDM8L2NvZGU+PC9saT5cbiAgICAgICAgPGxpPjxjb2RlPnJlYWN0PC9jb2RlPjwvbGk+XG4gICAgICAgIDxsaT48Y29kZT5yeGpzPC9jb2RlPjwvbGk+XG4gICAgICAgIDxsaT48Y29kZT5leHQtcmVhY3Q8L2NvZGU+PC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwibWItbWRcIj4yLiBDcmVhdGUgYSBuZXcgcHJvamVjdDwvaDM+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlRoZSBmb2xsb3dpbmcgaXMgdGhlIHJlY29tbWVuZGVkIGRpcmVjdG9yeSBzdHJ1Y3R1cmUgZm9yIGFuIEV4dGVuc2lvbiBSZWFjdCBhcHBsaWNhdGlvbjo8L3A+XG4gICAgICA8cHJlIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG4gICAgICAgICstLSBub2RlX21vZHVsZXM6IE5QTSBjb21wb25lbnRzPGJyIC8+XG4gICAgICAgICstLSBkaXN0PGJyIC8+XG4gICAgICAgIHwgICArLS0gYXBwLm1pbi5jc3M8YnIgLz5cbiAgICAgICAgfCAgICstLSBhcHAubWluLmpzPGJyIC8+XG4gICAgICAgIHwgICArLS0gZnJhbWV3b3JrLm1pbi5qczxiciAvPlxuICAgICAgICArLS0gc3JjPGJyIC8+XG4gICAgICAgIHwgICArLS0gY3NzPGJyIC8+XG4gICAgICAgIHwgICB8ICAgKy0tIF92YXJpYWJsZXMuc2NzczogYXBwbGljYXRpb24gc3R5bGVzIGNvbnN0YW50IHZhbHVlczxiciAvPlxuICAgICAgICB8ICAgfCAgICstLSBhcHAuc2NzczogYXBwbGljYXRpb24gc3R5bGVzPGJyIC8+XG4gICAgICAgIHwgICArLS0ganM8YnIgLz5cbiAgICAgICAgfCAgIHwgICArLS0gY29tbW9uOiBjb2RlIG9mIHNoYXJlZCBmdW5jdGlvbnMgb3Igc2hhcmVkIGNvbXBvbmVudHM8YnIgLz5cbiAgICAgICAgfCAgIHwgICArLS0gY29tcG9uZW50czogY29kZSAoc2NyaXB0cyBhbmQgdmlld3MpIG9mIGV2ZXJ5IGZlYXR1cmUgc2hvdWxkIGJlIGEgc3ViLWRpcmVjdG9yeTxiciAvPlxuICAgICAgICB8ICAgfCAgICstLSBzZXJ2aWNlczogY29kZSBvZiBzZXJ2aWNlczxiciAvPlxuICAgICAgICB8ICAgfCAgICstLSBzdG9yZXM6IGNvZGUgb2Ygc3RvcmVzPGJyIC8+XG4gICAgICAgIHwgICB8ICAgKy0tIGFwcC5qczogbWFpbiBzY3JpcHQ8YnIgLz5cbiAgICAgICAgKy0tIGd1bHBmaWxlLmJhYmVsLmpzOiBidWlsZCBzY3JpcHRzIChvciB3ZWJwYWNrLmNvbmZpZy5qcyBpZiB5b3UgcHJlZmVyKTxiciAvPlxuICAgICAgICArLS0gaW5kZXguaHRtbDxiciAvPlxuICAgICAgICArLS0gcGFja2FnZS5qc29uOiBOUE0gcGFja2FnZSBkZWZpbml0aW9uPGJyIC8+XG4gICAgICAgICstLSBzZXJ2ZXIuanM6IGNvZGUgb2YgbG9jYWwgd2ViIHNlcnZlciAoRXhwcmVzc0pTKTxiciAvPlxuICAgICAgPC9wcmU+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPkxldOKAmXMgc3RhcnQgZXZhbHVhdGluZyB0aGUgYXBwbGljYXRpb24gYnkgbG9va2luZyBhdCA8Y29kZT5pbmRleC5odG1sPC9jb2RlPjwvcD5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntgPCEtLSBpbmRleC5odG1sIC0tPlxuPCFET0NUWVBFIGh0bWw+XG48aHRtbD5cbjxoZWFkPlxuPG1ldGEgY2hhcnNldD1cInV0Zi04XCIgLz5cbjxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cbjx0aXRsZT5FeHRlbnNpb24gUmVhY3QgQXBwbGljYXRpb248L3RpdGxlPlxuPGxpbmsgaHJlZj1cIi9ub2RlLW1vZHVsZXMvZXh0LXJlYWN0L2Nzcy9yZXh0Lm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbjwvaGVhZD5cbjxib2R5PlxuPHNjcmlwdCBzcmM9XCJhcHAuanNcIj48L3NjcmlwdD5cbjwvYm9keT5cbjwvaHRtbD5gfVxuICAgICAgPC9wcmU+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlRvIGxhdW5jaCB5b3VyIGFwcCwgYWRkIHRoZSBmb2xsb3dpbmcgdG8geW91ciA8Y29kZT5hcHAuanM8L2NvZGU+IGZpbGU8L3A+XG4gICAgICA8cHJlPlxue2AvLyBhcHAuanNcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZXh0IGZyb20gJ2V4dC1yZWFjdCc7XG5pbXBvcnQgVmlld3BvcnQgZnJvbSAnLi9jb21wb25lbnRzL3ZpZXdwb3J0L3ZpZXdwb3J0JztcblxuUmV4dC5hcHBsaWNhdGlvbih7XG4gIGxhdW5jaDogKCkgPT4gPFZpZXdwb3J0IC8+XG59KTtgfVxuICAgICAgPC9wcmU+XG4gICAgPC9Db250YWluZXI+XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBIYXNoUm91dGVyLCBMaW5rIH0gZnJvbSAnfi9yZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlld3BvcnQoKSB7XG4gIHJldHVybiA8Q29udGFpbmVyPlxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+PGgxPkV4dGVuc2lvbiBSZWFjdDwvaDE+PC9oZWFkZXI+XG4gICAgPENvbnRhaW5lciBsYXlvdXQ9XCJjb2x1bW5cIj5cbiAgICAgIDxhc2lkZSBzdHlsZT17e3dpZHRoOjMwMH19PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyIG5hdlwiPlxuICAgICAgICAgIDxsaT48TGluayB0bz1cIi9cIiB0ZXh0PVwiR0VUVElORyBTVEFSVEVEXCIgLz48L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi10ZXh0XCI+Q09SRSBDT05DRVBUUzwvc3Bhbj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL2NvcmUtY29uY2VwdHMvY29tcG9uZW50XCIgdGV4dD1cIkNvbXBvbmVudFwiIC8+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL2NvcmUtY29uY2VwdHMvc2NyZWVuLW5hdmlnYXRpb25cIiB0ZXh0PVwiU2NyZWVuIE5hdmlnYXRpb25cIiAvPjwvbGk+XG4gICAgICAgICAgICAgIDxsaT48TGluayB0bz1cIi9jb3JlLWNvbmNlcHRzL2RhdGEtcGFja2FnZVwiIHRleHQ9XCJEYXRhIFBhY2thZ2VcIiAvPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL2FyY2hpdGVjdHVyZVwiIHRleHQ9XCJBUkNISVRFQ1RVUkVcIiAvPjwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LXRleHRcIj5VSSBDT01QT05FTlRTPC9zcGFuPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+PExpbmsgdG89XCIvdWktY29tcG9uZW50cy9ncmlkc1wiIHRleHQ9XCJHcmlkc1wiIC8+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvYXNpZGU+XG4gICAgICA8Q29udGFpbmVyPjxIYXNoUm91dGVyIC8+PC9Db250YWluZXI+XG4gICAgPC9Db250YWluZXI+XG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJjb250YWluZXJcIj48cD4mY29weTsgMjAxNyBodXl0cm9uZ25ndXllbjwvcD48L2Zvb3Rlcj5cbiAgPC9Db250YWluZXI+XG4gIC8vIHJldHVybiA8Q29udGFpbmVyIGxheW91dD1cImNvbHVtblwiPlxuICAvLyAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwibmF2XCIgc3R5bGU9e3t3aWR0aDozMDB9fT5cbiAgLy8gICAgIDxoZWFkZXI+XG4gIC8vICAgICAgIDxoMSBjbGFzc05hbWU9XCJicmFuZFwiPkV4dGVuc2lvbiBSZWFjdDwvaDE+XG4gIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG4gIC8vICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXItYXV0b1wiPlxuICAvLyAgICAgICAgIDwvdWw+XG4gIC8vICAgICAgIDwvZGl2PlxuICAvLyAgICAgPC9oZWFkZXI+XG4gIC8vICAgICA8bmF2IGNsYXNzTmFtZT1cIm1iLWF1dG8gZC1mbGV4XCI+XG4gICAgICAgIFxuICAvLyAgICAgPC9uYXY+XG4gIC8vICAgICA8Zm9vdGVyPlxuICAvLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi10ZXh0XCI+JmNvcHk7IDIwMTcgaHV5dHJvbmduZ3V5ZW48L2Rpdj5cbiAgLy8gICAgIDwvZm9vdGVyPlxuICAvLyAgIDwvQ29udGFpbmVyPlxuICAvLyAgIDxDb250YWluZXI+XG4gIC8vICAgICA8SGFzaFJvdXRlciAvPlxuICAvLyAgIDwvQ29udGFpbmVyPlxuICAvLyA8L0NvbnRhaW5lcj5cbn0iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBFeHQgZnJvbSAnfi9jb3JlL2V4dCc7XG5pbXBvcnQgTGlzdCBmcm9tICd+L2NvcmUvbGlzdCc7XG5pbXBvcnQgRGljdGlvbmFyeSBmcm9tICd+L2NvcmUvZGljdGlvbmFyeSc7XG5pbXBvcnQgT2JzZXJ2YWJsZSBmcm9tICd+L3JlYWN0aXZlL29ic2VydmFibGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWcgPT4gQ29udHJvbGxlciA9PiB7XG4gIGNvbnN0IFdyYXBwZWRDb21wb25lbnQgPSBjb25maWcudmlldztcbiAgcmV0dXJuIGNsYXNzIEhvY0NvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICBFeHQuaW5pdGlhbFN0YXRlKHRoaXMsIHtcbiAgICAgICAgc3RvcmVzOiB7fSxcbiAgICAgICAgc2VydmljZXM6IHt9LFxuICAgICAgICBbY29uZmlnLmNvbXBvbmVudEFzIHx8ICckdmlldyddOiBuZXcgQ29udHJvbGxlcihwcm9wcylcbiAgICAgIH0pO1xuICAgICAgdGhpcy5vbkRhdGFDaGFuZ2VkID0gKCkgPT4gdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgIHRoaXMuc2V0U3RvcmVzKExpc3QoY29uZmlnLnN0b3JlcykucmVkdWNlKChzdG9yZXMsIHN0b3JlKSA9PiB7XG4gICAgICAgIHN0b3JlLnN1YnNjcmliZSh0aGlzLm9uRGF0YUNoYW5nZSk7XG4gICAgICAgIHN0b3Jlc1tzdG9yZS5zdG9yZUlkXSA9IHN0b3JlO1xuICAgICAgICByZXR1cm4gc3RvcmVzO1xuICAgICAgfSwge30pKTtcblxuICAgICAgdGhpcy5zZXRTZXJ2aWNlcyhMaXN0KGNvbmZpZy5zZXJ2aWNlcykucmVkdWNlKChzZXJ2aWNlcywgc2VydmljZSkgPT4ge1xuICAgICAgICBzZXJ2aWNlc1tzZXJ2aWNlLnNlcnZpY2VJZF0gPSBzZXJ2aWNlO1xuICAgICAgICByZXR1cm4gc2VydmljZXM7XG4gICAgICB9LCB7fSkpO1xuICAgIH1cblxuICAgIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgY29uc3QgeyBzdG9yZXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgICBmb3IgKGxldCBzdG9yZUlkIGluIHN0b3Jlcykge1xuICAgICAgICBjb25zdCBzdG9yZSA9IHN0b3Jlc1tzdG9yZUlkXTtcbiAgICAgICAgc3RvcmUuYXV0b0xvYWQgJiYgKGF3YWl0IHN0b3JlLmxvYWQoKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBEaWN0aW9uYXJ5KHRoaXMuc3RhdGUuc3RvcmVzKS5lYWNoKChzdG9yZUlkLCBzdG9yZSkgPT4ge1xuICAgICAgICBzdG9yZS51bnN1YnNjcmliZSh0aGlzLm9uRGF0YUNoYW5nZWQpO1xuICAgICAgICBzdG9yZS5jbGVhckRhdGEodHJ1ZSk7XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiA8V3JhcHBlZENvbXBvbmVudCB7Li4udGhpcy5zdGF0ZX0gey4uLnRoaXMucHJvcHN9IC8+O1xuICAgIH1cbiAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRXh0IGZyb20gJ34vY29yZS9leHQnO1xuXG5jb25zdCBMQVlPVVRfQ0xBU1MgPSB7XG4gICdjb2x1bW4nOiAnZmxleC1yb3cnLFxuICAncm93JzogJ2ZsZXgtY29sdW1uJyxcbiAgJ2ZpdCc6ICcnLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gQ29udGFpbmVyKHsgY2xhc3NOYW1lID0gJycsIGxheW91dCA9ICdyb3cnLCBjaGlsZHJlbiwgLi4ub3RoZXJzIH0pIHtcbiAgcmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT17RXh0LmNsYXNzTmFtZSgnZC1mbGV4JywgTEFZT1VUX0NMQVNTW2xheW91dF0sIGNsYXNzTmFtZSl9IHsuLi5vdGhlcnN9PntjaGlsZHJlbn08L3NlY3Rpb24+XG59IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgRXh0IGZyb20gJ34vY29yZS9leHQnO1xuaW1wb3J0IExpc3QgZnJvbSAnfi9jb3JlL2xpc3QnO1xuLy8gaW1wb3J0IE9ic2VydmFibGUgZnJvbSAnfi9yZWFjdGl2ZS9vYnNlcnZhYmxlJztcblxuY29uc3QgUk9VVEVTID0ge30sXG4gICAgICBnZXRSb3V0ZSA9ICgpID0+IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKSB8fCAnLycsXG4gICAgICBnZXRSb3V0ZVBhdGggPSByb3V0ZSA9PiByb3V0ZS5zcGxpdCgnLycpO1xuXG5leHBvcnQgZnVuY3Rpb24gUm91dGUocm91dGUpIHtcbiAgcmV0dXJuIGNvbXAgPT4ge1xuICAgIFJPVVRFU1tyb3V0ZV0gPSB7XG4gICAgICByb3V0ZSxcbiAgICAgIGNvbXAsXG4gICAgICBwYXRoOiBnZXRSb3V0ZVBhdGgocm91dGUpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBMaW5rKHsgdG8sIGNsYXNzTmFtZSA9ICcnLCBhY3RpdmVDbGFzc05hbWUgPSAnYWN0aXZlJywgdGV4dCwgY2hpbGRyZW4sIC4uLm90aGVycyB9KSB7XG4gIHJldHVybiA8YSBocmVmPXtgIyR7dG99YH0gY2xhc3NOYW1lPXtFeHQuY2xhc3NOYW1lKCduYXYtbGluaycsIGNsYXNzTmFtZSwgeyBbYWN0aXZlQ2xhc3NOYW1lXTogdG8gPT09IGdldFJvdXRlKCkgfSl9IHsuLi5vdGhlcnN9PlxuICAgIHt0ZXh0IHx8IGNoaWxkcmVufVxuICA8L2E+XG59XG5cbmV4cG9ydCBjbGFzcyBIYXNoUm91dGVyIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIEV4dC5pbml0aWFsU3RhdGUodGhpcywgbWF0Y2hQYXRoKCkpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgKCF3aW5kb3cubG9jYXRpb24uaGFzaCkgJiYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJy8nKTtcbiAgICBPYnNlcnZhYmxlLmZyb21FdmVudCh3aW5kb3csICdoYXNoY2hhbmdlJykuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0U3RhdGUobWF0Y2hQYXRoKCkpKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJvdXRlLCBjb21wLCBwYXJhbXMgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAoIWNvbXApIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0NvbXBvbmVudCBub3QgZm91bmQhJyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChjb21wLCB7IHJvdXRlLCBwYXJhbXMgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWF0Y2hQYXRoKCkge1xuICBjb25zdCBjdXJyZW50Um91dGUgPSBnZXRSb3V0ZSgpLFxuICAgICAgICBwYXJhbXMgPSB7IHJvdXRlOiBjdXJyZW50Um91dGUgfTtcblxuICAvLyBiYXNpYyByb3V0ZSAod2l0aG91dCBwYXJhbXMpXG4gIGlmIChST1VURVNbY3VycmVudFJvdXRlXSkge1xuICAgIHJldHVybiB7IHJvdXRlOiBjdXJyZW50Um91dGUsIGNvbXA6IFJPVVRFU1tjdXJyZW50Um91dGVdLmNvbXAsIHBhcmFtcyB9O1xuICB9XG5cbiAgLy8gYWR2YW5jZWQgcm91dGUgKHdpdGggcGFyYW1zKVxuICBjb25zdCBjdXJyZW50UGF0aCA9IGdldFJvdXRlUGF0aChjdXJyZW50Um91dGUpO1xuICBmb3IobGV0IHJvdXRlIGluIFJPVVRFUykge1xuICAgIGNvbnN0IG1hcFJvdXRlID0gUk9VVEVTW3JvdXRlXSxcbiAgICAgICAgICByb3V0ZVBhdGggPSBtYXBSb3V0ZS5wYXRoO1xuXG4gICAgbGV0IG1hdGNoZWQgPSB0cnVlO1xuICAgIExpc3QobWFwUm91dGUucGF0aCkuZWFjaCgocm91dGVOYW1lLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHJvdXRlTmFtZSAhPT0gY3VycmVudFBhdGhbaW5kZXhdKSB7XG4gICAgICAgIGlmIChyb3V0ZU5hbWUuc3RhcnRzV2l0aCgnOicpKSB7IC8vIGRldGVjdCBwYXJhbSB2YWx1ZVxuICAgICAgICAgIHBhcmFtc1tyb3V0ZU5hbWUuc3Vic3RyaW5nKDEpXSA9IGN1cnJlbnRQYXRoW2luZGV4XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtYXRjaGVkID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAobWF0Y2hlZCkge1xuICAgICAgcmV0dXJuIHsgcm91dGU6IGN1cnJlbnRSb3V0ZSwgY29tcDogbWFwUm91dGUuY29tcCwgcGFyYW1zIH07XG4gICAgfVxuICB9XG5cbiAgLy8gd2l0aCBub3QgZm91bmQgc2NyZWVuXG4gIGlmIChST1VURVNbJyonXSkge1xuICAgIHJldHVybiB7IHJvdXRlOiBjdXJyZW50Um91dGUsIGNvbXA6IFJPVVRFU1snKiddLmNvbXAsIHBhcmFtcyB9O1xuICB9XG5cbiAgLy8gd2l0aG91dCBub3QgZm91bmQgc2NyZWVuXG4gIHJldHVybiB7IHJvdXRlOiBjdXJyZW50Um91dGUsIGNvbXA6IG51bGwsIHBhcmFtcyB9O1xufSIsImltcG9ydCBMaXN0IGZyb20gJy4vbGlzdCc7XG5cbmV4cG9ydCBjbGFzcyBEaWN0aW9uYXJ5IHtcbiAgY29uc3RydWN0b3Ioa2V5VmFsdWVzKSB7XG4gICAgdGhpcy5kYXRhID0ge307XG4gICAgaWYgKGtleVZhbHVlcyAmJiBrZXlWYWx1ZXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmRhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBrZXlWYWx1ZXMpO1xuICAgIH1cblxuICAgIHRoaXMua2V5cyA9ICgpID0+IExpc3QoT2JqZWN0LmtleXModGhpcy5kYXRhKSk7XG4gICAgdGhpcy52YWx1ZXMgPSAoKSA9PiBMaXN0KE9iamVjdC52YWx1ZXModGhpcy5kYXRhKSk7XG4gIH1cblxuICBlYWNoKGl0ZXJhdGVlKSB7XG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuZGF0YSkge1xuICAgICAgaXRlcmF0ZWUodGhpcy5kYXRhW2tleV0sIGtleSwgdGhpcy5kYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKGtleVZhbHVlcykgPT4gbmV3IERpY3Rpb25hcnkoa2V5VmFsdWVzKTsiLCJpbXBvcnQgeyBMaXN0IH0gZnJvbSAnLi9saXN0JztcblxuY2xhc3MgRE9NIGV4dGVuZHMgTGlzdCB7XG4gIHNob3coKSB7XG4gICAgdGhpcy5zZWxlY3RvcnMuZWFjaChzZWxlY3RvciA9PiBzZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJyk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMuc2VsZWN0b3JzLmVhY2goc2VsZWN0b3IgPT4gc2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJyk7XG4gIH1cblxuICAvLyBwYXJlbnQoKSB7XG4gIC8vICAgdGhpcy5jb21wID0gdGhpcy5jb21wLnBhcmVudEVsZW1lbnQ7XG4gIC8vICAgcmV0dXJuIHRoaXM7XG4gIC8vIH1cblxuICAvLyB3aWR0aCgpIHtcbiAgLy8gICByZXR1cm4gdGhpcy5jb21wLmNsaWVudFdpZHRoO1xuICAvLyB9XG5cbiAgLy8gaGVpZ2h0KCkge1xuICAvLyAgIHJldHVybiB0aGlzLmNvbXAuY2xpZW50SGVpZ2h0O1xuICAvLyB9XG5cbiAgLy8gZmluZChzZWxlY3Rvcikge1xuICAvLyAgIHJldHVybiB0aGlzLmNvbXAucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIC8vIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHNlbGVjdG9yKSA9PiBuZXcgRE9NKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTsiLCJpbXBvcnQgRE9NIGZyb20gJy4vZG9tJztcbmltcG9ydCBTdHJpbmcgZnJvbSAnLi9zdHJpbmcnO1xuaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0JztcbmltcG9ydCBEaWN0aW9uYXJ5IGZyb20gJy4vZGljdGlvbmFyeSc7XG5cbmV4cG9ydCBjbGFzcyBFeHQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyB0aGlzLlNDUk9MTF9XSURUSCA9IHRoaXMuZ2V0U2Nyb2xsV2lkdGgoKTtcbiAgICAvLyB0aGlzLkJPUkRFUl9XSURUSCA9IDI7XG4gICAgLy8gdGhpcy5DSEVDS19DT0xVTU5fV0lEVEggPSAzMztcbiAgICAvLyB0aGlzLlVOS05PV05fRVJST1JfTVNHID0gJ0FuIHVua25vd24gZXJyb3IgaGFzIG9jY3VycmVkLic7XG4gICAgLy8gdGhpcy5YSFIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIHRoaXMuaXNQcmltaXRpdmUgPSB2YWx1ZSA9PiB7IGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsdWU7IHJldHVybiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlID09PSAnbnVtYmVyJyB8fCB0eXBlID09PSAnYm9vbGVhbic7IH1cbiAgICB0aGlzLmlzU3RyaW5nID0gdmFsdWUgPT4gKHR5cGVvZiB2YWx1ZSkgPT09ICdzdHJpbmcnO1xuICAgIHRoaXMuaXNGdW5jdGlvbiA9IHZhbHVlID0+ICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xuICAgIHRoaXMuaXNPYmplY3QgPSB2YWx1ZSA9PiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG4gICAgdGhpcy5pc0FycmF5ID0gdmFsdWUgPT4gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG5cbiAgICAvLyB0aGlzLmNsb25lID0gb2JqID0+IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSk7IC8vIGRlZXAgY2xvbmVcblxuICAgIC8vIHRoaXMuRE9NID0gRE9NO1xuICAgIC8vIHRoaXMuU3RyaW5nID0gU3RyaW5nO1xuICAgIC8vIHRoaXMuTGlzdCA9IExpc3Q7XG4gICAgLy8gdGhpcy5NYXAgPSBEaWN0aW9uYXJ5O1xuICAgIC8vIHRoaXMuUHJvdmlkZXIgPSBuZXcgRGljdGlvbmFyeSgpO1xuICB9XG5cbiAgLy8gZXh0ZW5kKCkge1xuICAvLyAgIHJldHVybiBPYmplY3QuYXNzaWduLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7IC8vIGltbXV0YWJsZSBvYmplY3RcbiAgLy8gfVxuXG4gIGluaXRpYWxTdGF0ZShjb21wLCBzdGF0ZSkge1xuICAgIGlmICghY29tcCB8fCAhc3RhdGUpIHsgcmV0dXJuOyB9XG4gICAgY29tcC5zdGF0ZSA9IHN0YXRlO1xuICAgIGZvciAobGV0IGZpZWxkIG9mIE9iamVjdC5rZXlzKHN0YXRlKSkge1xuICAgICAgY29tcFtgc2V0JHtTdHJpbmcuY2FwaXRhbGl6ZShmaWVsZCl9YF0gPSB2YWx1ZSA9PiBjb21wLnNldFN0YXRlKHsgW2ZpZWxkXTogdmFsdWUgfSk7XG4gICAgfVxuICB9XG5cbiAgY2xhc3NOYW1lKC4uLmV4cHJlc3Npb25zKSB7XG4gICAgY29uc3QgY2xzID0gW107XG5cbiAgICBMaXN0KGV4cHJlc3Npb25zKS5lYWNoKGV4cCA9PiB7XG4gICAgICBpZiAoIWV4cCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZXhwID09PSAnc3RyaW5nJykge1xuICAgICAgICBjbHMucHVzaChleHApO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzT2JqZWN0KGV4cCkpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGV4cCkge1xuICAgICAgICAgIGlmIChleHBba2V5XSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY2xzLnB1c2goa2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY2xzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIC8vI3JlZ2lvbiBET01cbiAgY3JlYXRlRWxlbWVudChodG1sKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmlubmVySFRNTCA9IGh0bWw7XG4gICAgcmV0dXJuIGRpdi5jaGlsZHJlblswXTtcbiAgfVxuXG4gIC8vIGdldEVsKHNlbGVjdG9yKSB7XG4gIC8vICAgcmV0dXJuIERPTShzZWxlY3Rvcik7XG4gIC8vIH1cblxuICAvLyBnZXRTY3JvbGxXaWR0aCgpIHtcbiAgLy8gICBjb25zdCBvdXRlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnPGRpdiBzdHlsZT1cInZpc2liaWxpdHk6IGhpZGRlbjsgd2lkdGg6IDEwMHB4OyBvdmVyZmxvdzogc2Nyb2xsO1wiPjwvZGl2PicpO1xuICAvLyAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3V0ZXIpO1xuICAvLyAgIGNvbnN0IHdpZHRoTm9TY3JvbGwgPSBvdXRlci5vZmZzZXRXaWR0aDtcblxuICAvLyAgIC8vIGFkZCBpbm5lcmRpdlxuICAvLyAgIGNvbnN0IGlubmVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCc8ZGl2IHN0eWxlPVwid2lkdGg6IDEwMCU7XCI+PC9kaXY+Jyk7XG4gIC8vICAgb3V0ZXIuYXBwZW5kQ2hpbGQoaW5uZXIpO1xuICAvLyAgIGNvbnN0IHdpZHRoV2l0aFNjcm9sbCA9IGlubmVyLm9mZnNldFdpZHRoO1xuXG4gIC8vICAgLy8gcmVtb3ZlIGRpdnNcbiAgLy8gICBvdXRlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG91dGVyKTtcblxuICAvLyAgIHJldHVybiB3aWR0aE5vU2Nyb2xsIC0gd2lkdGhXaXRoU2Nyb2xsO1xuICAvLyB9XG4gIC8vI2VuZHJlZ2lvblxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgRXh0KCk7XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBiaW5kKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcikge1xuLy8gICBjb25zdCBmbiA9IGRlc2NyaXB0b3IudmFsdWU7XG5cbi8vICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuLy8gICAgIHRocm93IG5ldyBFcnJvcihgQGJpbmQgZGVjb3JhdG9yIGlzIG9ubHkgYXBwbGllZCB0byBmdW5jdGlvbnMgbm90OiAke3R5cGVvZiBmbn1gKTtcbi8vICAgfVxuXG4vLyAgIHJldHVybiB7XG4vLyAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuLy8gICAgIGdldCgpIHtcbi8vICAgICAgIHJldHVybiBmbi5iaW5kKHRoaXMpO1xuLy8gICAgIH1cbi8vICAgfTtcbi8vIH1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQgPSA1MDApIHtcbi8vICAgbGV0IHRpbWVvdXQ7XG4vLyAgIHJldHVybiBmdW5jdGlvbigpIHtcbi8vICAgICBjb25zdCBjb250ZXh0ID0gdGhpcyxcbi8vICAgICAgICAgICBhcmdzID0gYXJndW1lbnRzLFxuLy8gICAgICAgICAgIGxhdGVyID0gZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuLy8gICAgICAgICAgIH1cblxuLy8gICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbi8vICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4vLyAgIH1cbi8vIH0iLCJleHBvcnQgY2xhc3MgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlLmxlbmd0aCkge1xuICAgICAgdGhpcy5kYXRhID0gdmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5jb2xsZWN0ID0gKCkgPT4gdGhpcy5kYXRhO1xuICAgIHRoaXMuY291bnQgPSAoKSA9PiB0aGlzLmRhdGEubGVuZ3RoO1xuICAgIHRoaXMuZ2V0QXQgPSBpbmRleCA9PiB0aGlzLmRhdGFbaW5kZXhdO1xuICAgIHRoaXMuYWRkID0gaXRlbSA9PiB0aGlzLmRhdGEucHVzaChpdGVtKTtcbiAgICB0aGlzLmluc2VydCA9IChpdGVtLCBpbmRleCA9IDApID0+IHRoaXMuZGF0YS5zcGxpY2UoaW5kZXgsIDAsIGl0ZW0pO1xuICAgIHRoaXMucmVtb3ZlQXQgPSAoaW5kZXgsIGNvdW50ID0gMSkgPT4gdGhpcy5kYXRhLnNwbGljZShpbmRleCwgY291bnQpO1xuICAgIHRoaXMuam9pbiA9IHNlcGFyYXRvciA9PiB0aGlzLmRhdGEuam9pbihzZXBhcmF0b3IpO1xuICB9XG5cbiAgZWFjaChpdGVyYXRlZSkge1xuICAgIGZvciAobGV0IGluZGV4IGluIHRoaXMuZGF0YSkge1xuICAgICAgaXRlcmF0ZWUodGhpcy5kYXRhW2luZGV4XSwgaW5kZXgsIHRoaXMuZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZmlsdGVyKHByZWRpY2F0ZSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIHRoaXMuZWFjaCgoaXRlbSwgaW5kZXgsIGFycmF5KSA9PiB7XG4gICAgICBpZiAocHJlZGljYXRlKGl0ZW0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBMaXN0KHJlc3VsdCk7XG4gIH1cblxuICBtYXAoaXRlcmF0ZWUpIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICB0aGlzLmVhY2goKGl0ZW0sIGluZGV4LCBhcnJheSkgPT4gcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGl0ZW0sIGluZGV4LCBhcnJheSkpO1xuICAgIHJldHVybiBuZXcgTGlzdChyZXN1bHQpO1xuICB9XG5cbiAgcmVkdWNlKGl0ZXJhdGVlLCBhY2N1bXVsYXRvcikge1xuICAgIHRoaXMuZWFjaCgoaXRlbSwgaW5kZXgsIGFycmF5KSA9PiBhY2N1bXVsYXRvciA9IGl0ZXJhdGVlKGFjY3VtdWxhdG9yLCBpdGVtLCBpbmRleCwgYXJyYXkpKTtcbiAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gIH1cblxuICBmaW5kSW5kZXgocHJlZGljYXRlKSB7XG4gICAgbGV0IGluZGV4ID0gLTE7XG4gICAgZm9yIChsZXQgaWR4ID0gMCwgaXRlbTsgKGl0ZW0gPSB0aGlzLmRhdGFbaWR4XSkgIT0gbnVsbDsgKytpZHgpIHtcbiAgICAgIGlmIChwcmVkaWNhdGUoaXRlbSwgaWR4LCB0aGlzLmRhdGEpKSB7XG4gICAgICAgIGluZGV4ID0gaWR4O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgZmluZChwcmVkaWNhdGUpIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLmZpbmRJbmRleChwcmVkaWNhdGUpO1xuICAgIHJldHVybiBpbmRleCA+IC0xID8gdGhpcy5kYXRhW2luZGV4XSA6IG51bGw7XG4gIH1cblxuICBjb250YWlucyhwcmVkaWNhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5maW5kKHByZWRpY2F0ZSkgIT09IG51bGw7XG4gIH1cblxuICByZW1vdmVJZihwcmVkaWNhdGUpIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICB0aGlzLmVhY2goKGl0ZW0sIGluZGV4LCBhcnJheSkgPT4ge1xuICAgICAgaWYgKCFwcmVkaWNhdGUoaXRlbSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgICByZXN1bHQucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmRhdGEgPSByZXN1bHQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHZhbHVlKSA9PiBuZXcgTGlzdCh2YWx1ZSk7IiwiY2xhc3MgU3RyaW5nIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jYXBpdGFsaXplID0gdmFsdWUgPT4gdmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSgxKTtcbiAgfVxuXG4gIGh0bWxFbmNvZGUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLycvZywgJyYjMzk7JylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xuICB9XG5cbiAgaHRtbERlY29kZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC8mYW1wOy9nLCAnJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvJmx0Oy9nLCAnPCcpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLyZndDs+L2csICc+JylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvJiMzOTsvZywgXCInXCIpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLyZxdW90Oy9nLCAnXCInKTtcbiAgfVxuXG4gIHRvUXVlcnlTdHJpbmcocGFyYW1zLCBzZXAsIGVuY29kZSkge1xuICAgIHNlcCAgICA9IHNlcCA9PT0gdW5kZWZpbmVkID8gJyYnIDogc2VwO1xuICAgIGVuY29kZSA9IGVuY29kZSA9PT0gZmFsc2UgPyBmdW5jdGlvbihzKSB7IHJldHVybiBzOyB9IDogZW5jb2RlVVJJQ29tcG9uZW50O1xuXG4gICAgbGV0IHBhaXJzID0gW107XG4gICAgZm9yIChsZXQga2V5IGluIHBhcmFtcykge1xuICAgICAgcGFpcnMucHVzaChgJHtrZXl9PSR7ZW5jb2RlKHBhcmFtc1trZXldKX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhaXJzLmpvaW4oc2VwKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU3RyaW5nKCk7IiwiaW1wb3J0IEV4dCBmcm9tICd+L2NvcmUvZXh0JztcblxuY2xhc3MgQWpheE9ic2VydmFibGUge1xuICBjb25zdHJ1Y3Rvcih1cmxPclJlcXVlc3QpIHtcbiAgICB0aGlzLnJlcXVlc3QgPSBFeHQuZXh0ZW5kKHtcbiAgICAgIHVybDogJycsXG4gICAgICBwYXJhbXM6ICcnLFxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04JyxcbiAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgfSwgRXh0LmlzU3RyaW5nKHVybE9yUmVxdWVzdCkgPyB7IHVybDogdXJsT3JSZXF1ZXN0IH0gOiB1cmxPclJlcXVlc3QpO1xuXG4gICAgdGhpcy5wcm9taXNlID0gcmVxdWVzdCA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmNyZWF0ZVJlcXVlc3QocmVxdWVzdCwgKGVycm9yLCByZXNwb25zZSkgPT4gZXJyb3IgPyByZWplY3QoZXJyb3IpIDogcmVzb2x2ZShyZXNwb25zZSkpO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgc3Vic2NyaWJlKHsgbmV4dCwgZXJyb3IsIGNvbXBsZXRlIH0pIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHJlc3BvbnNlO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnByb21pc2UoeyB1cmwsIGNvbnRlbnRUeXBlLCBtZXRob2QsIHBhcmFtcyB9KTtcbiAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYENhbm5vdCBnZXQgcmVzcG9uc2UgZnJvbSBzZXJ2ZXIgZm9yIHVybCBbJHt1cmx9XSBjYXVzZWQgYnk6ICR7ZXh9YCk7XG4gICAgICAgIGVycm9yICYmIGVycm9yKGV4KTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXh0ID8gbmV4dChyZXNwb25zZSkgOiByZXNwb25zZTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgY29tcGxldGUgJiYgY29tcGxldGUoKTtcbiAgICB9XG4gIH1cblxuICBzZW5kKHsgdXJsLCBjb250ZW50VHlwZSwgbWV0aG9kLCBwYXJhbXMgfSwgZG9uZSkge1xuICAgIChtZXRob2QgPT09ICdnZXQnICYmIHBhcmFtcykgJiYgKHVybCA9IGAke3VybH0/JHtTdHJpbmcudG9RdWVyeVN0cmluZyhwYXJhbXMpfWApO1xuICAgIGNvbnN0IHhociA9IEV4dC5YSFI7XG4gICAgeGhyLm9wZW4obWV0aG9kLCB1cmwsIHRydWUpO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCBjb250ZW50VHlwZSk7XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgIGlmKHhoci5yZWFkeVN0YXRlID09PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XG4gICAgICAgIC8vIGFqYXggd2lsbCByZXR1cm4gYXMgYSBqc29uIGJ5IGRlZmF1bHQsIGlmIHBhcnNlciBlcnJvciB0aGVuIGl0IHdpbGwgcmV0dXJuIGEgcmF3IHN0cmluZ1xuICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRvbmUobnVsbCwgSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZG9uZShudWxsLCB4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRvbmUoSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZG9uZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgeGhyLnNlbmQocGFyYW1zID8gSlNPTi5zdHJpbmdpZnkocGFyYW1zKSA6IG51bGwpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZSh1cmxPclJlcXVlc3QpIHtcbiAgICByZXR1cm4gbmV3IEFqYXhPYnNlcnZhYmxlKHVybE9yUmVxdWVzdCk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudE9ic2VydmFibGUge1xuICBjb25zdHJ1Y3Rvcih0YXJnZXQsIGV2ZW50TmFtZSwgb3B0aW9ucykge1xuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgIHRoaXMuZXZlbnROYW1lID0gZXZlbnROYW1lO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKHRoaXMuZXZlbnROYW1lLCBvYnNlcnZlciwgdGhpcy5vcHRpb25zKTtcbiAgfVxuXG4gIHVuc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50TmFtZSwgb2JzZXJ2ZXIsIHRoaXMub3B0aW9ucyk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlKHRhcmdldCwgZXZlbnROYW1lLCBvcHRpb25zID0gZmFsc2UpIHtcbiAgICByZXR1cm4gbmV3IEV2ZW50T2JzZXJ2YWJsZSh0YXJnZXQsIGV2ZW50TmFtZSwgb3B0aW9ucyk7XG4gIH1cbn0iLCJpbXBvcnQgT3BlcmF0b3IgZnJvbSAnLi9vcGVyYXRvcic7XG5pbXBvcnQgRXZlbnRPYnNlcnZhYmxlIGZyb20gJy4vZXZlbnQnO1xuaW1wb3J0IEFqYXhPYnNlcnZhYmxlIGZyb20gJy4vYWpheCc7XG5cbi8qKlxuICogRnJvbSBSZWFjdGl2ZVggZG9jczpcbiAqXG4gKiBPYnNlcnZhYmxlOiBBbiBpbnRlcmZhY2UgdGhhdCBsaXN0ZW5zIGZvciBpbmNvbWluZyBub3RpZmljYXRpb25zIG92ZXIgYSBwZXJpb2Qgb2YgdGltZVxuICogYW5kIHB1c2hlcyB0aGVtIHRvIGFub3RoZXIgaW50ZXJmYWNlIHRoYXQgcmVhY3RzIHRvIHRoZW0uXG4gKlxuICogU3Vic2NyaXB0aW9uOiBXaGVuIGFuIE9ic2VydmFibGUgaW50ZXJmYWNlIHN0YXJ0cyBkb2luZyBpdHMgd29yayxcbiAqIGkuZS4gbGlzdGVuaW5nIGZvciBub3RpZmljYXRpb25zIGFuZCBwdXNoaW5nIHRoZW0gb3V0LlxuICpcbiAqIE9ic2VydmVyOiBBbiBpbnRlcmZhY2UgdGhhdCByZWFjdHMgdG8gZGF0YSBwdXNoZWQgZnJvbSBhbiBPYnNlcnZhYmxlLlxuICpcbiAqIE9wZXJhdG9yczogRnVuY3Rpb25zIHVzZWQgdG8gbWFuaXB1bGF0ZSBhbiBPYnNlcnZhYmxl4oCZcyBvdXRwdXQsIGUuZy4gZmlsdGVyLCBtYXAsIHJlZHVjZSwgZXRjLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYnNlcnZhYmxlIGV4dGVuZHMgT3BlcmF0b3Ige1xuICBjb25zdHJ1Y3RvcihzdWJzY3JpYmUpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3Vic2NyaWJlID0gc3Vic2NyaWJlO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZShzdWJzY3JpYmUpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoc3Vic2NyaWJlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3IgZXhhbXBsZTpcbiAgICogY29uc3QgdW5zdWJjcmliZSA9IE9ic2VydmFibGUuZnJvbUV2ZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dCcpLCAnY2hhbmdlJykuc3Vic2NyaWJlKHtcbiAgICogICAgbmV4dDogZSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSlcbiAgICogfSk7XG4gICAqXG4gICAqIHNldFRpbWVvdXQodW5zdWJjcmliZSwgNTAwMCk7XG4gICAqXG4gICAqIEBwYXJhbSB0YXJnZXRcbiAgICogQHBhcmFtIGV2ZW50TmFtZVxuICAgKi9cbiAgc3RhdGljIGZyb21FdmVudCh0YXJnZXQsIGV2ZW50TmFtZSkge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShvYnNlcnZlciA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGUgPT4gb2JzZXJ2ZXIubmV4dChlKTtcbiAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGZhbHNlKTtcbiAgICAgIHJldHVybiAoKSA9PiB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrLCBmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgYWpheCh1cmxPclJlcXVlc3QpIHtcbiAgICByZXR1cm4gQWpheE9ic2VydmFibGUuY3JlYXRlKHVybE9yUmVxdWVzdCk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBPcGVyYXRvciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZmlsdGVyID0gcHJlZGljYXRlID0+IHsgLyogdG8gYmUgaW1wbGVtZW50ZWQgKi8gfTtcbiAgICB0aGlzLm1hcCA9IHByZWRpY2F0ZSA9PiB7IC8qIHRvIGJlIGltcGxlbWVudGVkICovIH07XG4gICAgdGhpcy5yZWR1Y2UgPSBwcmVkaWNhdGUgPT4geyAvKiB0byBiZSBpbXBsZW1lbnRlZCAqLyB9O1xuICB9XG59IiwiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IEV4dCB9IGZyb20gJy4vY29yZS9leHQnO1xuXG5jbGFzcyBSZXh0IGV4dGVuZHMgRXh0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICAvLyB0aGlzLkNhY2hlID0gcmVxdWlyZSgnLi9kYXRhL2NhY2hlJyk7XG4gICAgLy8gdGhpcy5Nb2RlbCA9IHJlcXVpcmUoJy4vZGF0YS9tb2RlbCcpO1xuICAgIC8vIHRoaXMuT2JzZXJ2YWJsZSA9IHJlcXVpcmUoJy4vcmVhY3RpdmUvb2JzZXJ2YWJsZScpO1xuICAgIC8vIHRoaXMuRGlhbG9nTWFuYWdlciA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9kaWFsb2cnKTtcbiAgfVxuXG4gIGFzeW5jIGFwcGxpY2F0aW9uKHsgbGF1bmNoIH0pIHtcbiAgICBpZiAobGF1bmNoKSB7XG4gICAgICBjb25zdCByb290ID0gdGhpcy5jcmVhdGVFbGVtZW50KCc8ZGl2IGlkPVwicmVhY3Qtcm9vdFwiPjwvZGl2PicpLFxuICAgICAgICAgICAgdmlld3BvcnQgPSBhd2FpdCBsYXVuY2goKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocm9vdCk7XG4gICAgICByZW5kZXIodmlld3BvcnQsIHJvb3QpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUmV4dCgpO1xuXG4vLyNyZWdpb24gQ29tcG9uZW50XG5leHBvcnQgeyBIYXNoUm91dGVyLCBMaW5rIH0gZnJvbSAnLi9jb21wb25lbnRzL3JvdXRlcic7XG5leHBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvY29udGFpbmVyJztcbi8vIGV4cG9ydCB7IEJ1dHRvbiwgQnV0dG9uTGluaywgRmllbGQsIFRleHRGaWVsZCwgQ2hlY2tib3gsIFRleHRBcmVhIH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0nO1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBHcmlkIH0gZnJvbSAnLi9jb21wb25lbnRzL2dyaWQnO1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBMaXN0VmlldyB9IGZyb20gJy4vY29tcG9uZW50cy9saXN0Jztcbi8vIGV4cG9ydCB7IERpYWxvZyB9IGZyb20gJy4vY29tcG9uZW50cy9kaWFsb2cnO1xuLy8jZW5kcmVnaW9uXG5cbi8vI3JlZ2lvbiBEZWNvcmF0b3IgKG9yIEhpZ2hlciBPcmRlciBGdW5jdGlvbiBvciBIaWdoZXIgT3JkZXIgQ29tcG9uZW50KVxuZXhwb3J0IHsgYmluZCB9IGZyb20gJy4vY29yZS9leHQnO1xuZXhwb3J0IHsgUm91dGUgfSBmcm9tICcuL2NvbXBvbmVudHMvcm91dGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAvY29tcG9uZW50Jztcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgU2VydmljZSB9IGZyb20gJy4vYXBwL3NlcnZpY2UnO1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBTdG9yZSB9IGZyb20gJy4vZGF0YS9zdG9yZSc7XG4vLyNlbmRyZWdpb24iXX0=
