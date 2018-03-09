(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rext = require('../../../src/rext');

var _viewport = require('./components/viewport/viewport');

var _viewport2 = _interopRequireDefault(_viewport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = (_dec = (0, _rext.Application)({
  stores: [require('./components/example/stores/card')],
  views: [require('./components/getting-started/getting-started'), require('./components/core-concepts/component'), require('./components/core-concepts/screen-navigation'), require('./components/core-concepts/data-package'), require('./components/architecture/architecture'),
  // require('./components/ui-components/grid'),
  require('./components/example/dashboard'), require('./components/example/search'), require('./components/example/details'), require('./components/example/notfound'), require('./components/example/cards')]
}), _dec(_class = function (_PureComponent) {
  _inherits(App, _PureComponent);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_viewport2.default, null);
    }
  }]);

  return App;
}(_react.PureComponent)) || _class);
exports.default = App;

},{"../../../src/rext":38,"./components/architecture/architecture":2,"./components/core-concepts/component":3,"./components/core-concepts/data-package":4,"./components/core-concepts/screen-navigation":5,"./components/example/cards":6,"./components/example/dashboard":8,"./components/example/details":9,"./components/example/notfound":10,"./components/example/search":11,"./components/example/stores/card":12,"./components/getting-started/getting-started":13,"./components/viewport/viewport":14,"babel-polyfill":"babel-polyfill","react":"react"}],2:[function(require,module,exports){
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
          '// ./app.js\nimport \'babel-polyfill\';\nimport React, { PureComponent } from \'react\';\nimport { Application } from \'ext-react\';\n\n@Application({\n  stores: [\n    require(\'./stores/cards\'),\n  ],\n  views: [\n    require(\'./components/viewport/viewport\'),\n    require(\'./components/cards\'),\n  ],\n})\nexport default class App extends PureComponent {\n  render() {\n    return <Viewport />\n  }\n}'
        ),
        _react2.default.createElement(
          'pre',
          { className: 'mb-md' },
          '// ./stores/card\nimport { Store } from \'ext-react\';\n\nexport default Store({\n  storeId: \'CardStore\',\n  fields: [ \'Name\' ],\n  proxy: {\n    url: \'/data/card.json\'\n  }\n})'
        ),
        _react2.default.createElement(
          'pre',
          { className: 'mb-md' },
          '// ./components/cards.js\nimport { Route, Component } from \'ext-react\';\n\n@Route(\'/example/cards\')\n@Component({\n  stores: [ \'CardStore\' ],\n  view: CardView\n})\nexport default class Card {\n  @bind\n  saveChanges() {\n    this.stores.CardStore.sync({\n      fail: err => console.log(err)\n    });\n  }\n\n  @bind\n  rejectChanges() {\n    this.stores.CardStore.rejectChanges();\n  }\n}'
        ),
        _react2.default.createElement(
          'pre',
          null,
          '// ./components/cards.view.jsx\nimport React, { PureComponent } from \'react\';\nimport { Grid } from \'ext-react\';\n\nexport default class CardView extends PureComponent {\n  componentDidMount() {\n    this.props.stores.CardStore.load();\n  }\n  render() {\n    const {CardStore } = this.props.stores;\n    return <Grid store={CardStore}>\n      <div header="Id" dataIndex="Id" />\n      <div header="Name" dataIndex="Name" editable />\n      <div header="Type" dataIndex="Type" />\n    </Grid>\n  }\n}'
        )
      );
    }
  }]);

  return Architecture;
}(_react.PureComponent)) || _class);
exports.default = Architecture;

},{"../../../../../src/rext":38,"react":"react"}],3:[function(require,module,exports){
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

},{"../../../../../src/rext":38,"react":"react"}],4:[function(require,module,exports){
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
          'import React, { PureComponent } from \'react\';\nimport CardStore from \'~/stores/card\';\n\nexport default class Card extends PureComponent {\n  constructor(props) {\n    super(props);\n    this.reload = () => this.forceUpdate();\n  }\n\n  componentDidMount() {\n    CardStore.clearData();\n    CardStore.load();\n    CardStore.subscribe(this.reload);\n  }\n\n  render() {\n    const records = CardStore.getData();\n    return <section>\n      <section className="rx-grid-header">\n        <div className="d-flex flex-row rx-grid-header-container">\n          <div className="rx-grid-column-header text-sm-center" style={{width:\'20%\'}}>ID</div>\n          <div className="rx-grid-column-header text-sm-center" style={{width:\'20%\'}}>Name</div>\n          <div className="rx-grid-column-header text-sm-center" style={{width:\'20%\'}}>Type</div>\n          <div className="rx-grid-column-header text-sm-center" style={{width:\'20%\'}}>Armor</div>\n          <div className="rx-grid-column-header text-sm-center" style={{width:\'20%\'}}>Weapon</div>\n        </div>\n      </section>\n      <section className="rx-grid-body" style={{overflow:\'visible\'}}>\n        <section className="rx-grid-view">\n          {records.map(record => <article className="d-flex flex-row rx-grid-row">\n            <div className="rx-grid-cell" style={{width:\'20%\'}}>{record.get(\'Id\')}</div>\n            <div className="rx-grid-cell" style={{width:\'20%\'}}>{record.get(\'Name\')}</div>\n            <div className="rx-grid-cell" style={{width:\'20%\'}}>{record.get(\'Type\')}</div>\n            <div className="rx-grid-cell" style={{width:\'20%\'}}>{record.get(\'ArmorUsable\')}</div>\n            <div className="rx-grid-cell" style={{width:\'20%\'}}>{record.get(\'WeaponUsable\')}</div>\n          </article>)}\n        </section>\n      </section>\n    </section>;\n  }\n}'
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

},{"../../../../../src/rext":38,"react":"react"}],5:[function(require,module,exports){
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
          '// ./app.js\nimport \'babel-polyfill\';\nimport React, { PureComponent } from \'react\';\nimport { Application } from \'ext-react\';\nimport Viewport from \'./components/viewport/viewport\';\n\n@Application({\n  views: [\n    require(\'./components/search\'),\n    require(\'./components/details\'),\n    require(\'./components/notfound\'),\n  ],\n})\nexport default class App extends PureComponent {\n  render() {\n    return <Viewport />\n  }\n}'
        ),
        _react2.default.createElement(
          'pre',
          { className: 'mb-md' },
          '// ./components/viewport.js\nimport React from \'react\';\nimport { Link, HashRouter } from \'ext-react\';\n\nexport default function Viewport() {\n  return <section>\n    <Link to="/">Dashboard</Link>\n    <Link to="/search">Search</Link>\n    <Link to="/details/huynguyen">Details</Link>\n    <HashRouter />\n  </section>\n}'
        ),
        _react2.default.createElement(
          'pre',
          { className: 'mb-md' },
          '// ./components/search.js\nimport React from \'react\';\nimport { Route, Component } from \'ext-react\';\n\n@Route(\'/search\')\n@Component({\n  view: () => <section />\n})\nexport default class Search { }'
        ),
        _react2.default.createElement(
          'pre',
          { className: 'mb-md' },
          '// ./components/details.js\nimport React from \'react\';\nimport { Route, Component } from \'ext-react\';\n\n@Route(\'/details/:name\')\n@Component({\n  view: ({ params }) => <h1>{params.name}</h1>\n})\nexport default class Details { }'
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

},{"../../../../../src/rext":38,"react":"react"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class, _desc, _value, _class2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rext = require('../../../../../src/rext');

var _cards = require('./cards.view');

var _cards2 = _interopRequireDefault(_cards);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var Card = (_dec = (0, _rext.Route)('/example/cards'), _dec2 = (0, _rext.Component)({
  stores: ['CardStore'],
  view: _cards2.default
}), _dec(_class = _dec2(_class = (_class2 = function () {
  function Card() {
    _classCallCheck(this, Card);
  }

  _createClass(Card, [{
    key: 'saveChanges',
    value: function saveChanges() {
      this.stores.CardStore.sync({
        fail: function fail(err) {
          return console.log(err);
        }
      });
    }
  }, {
    key: 'rejectChanges',
    value: function rejectChanges() {
      this.stores.CardStore.rejectChanges();
    }
  }]);

  return Card;
}(), (_applyDecoratedDescriptor(_class2.prototype, 'saveChanges', [_rext.bind], Object.getOwnPropertyDescriptor(_class2.prototype, 'saveChanges'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'rejectChanges', [_rext.bind], Object.getOwnPropertyDescriptor(_class2.prototype, 'rejectChanges'), _class2.prototype)), _class2)) || _class) || _class);
exports.default = Card;

},{"../../../../../src/rext":38,"./cards.view":7,"react":"react"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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
      var _props = this.props,
          CardStore = _props.stores.CardStore,
          _props$$view = _props.$view,
          saveChanges = _props$$view.saveChanges,
          rejectChanges = _props$$view.rejectChanges;

      return _react2.default.createElement(
        _rext.Container,
        { className: 'main container' },
        _react2.default.createElement(
          _rext.Grid,
          { store: CardStore },
          _react2.default.createElement('div', { header: 'Id', dataIndex: 'Id' }),
          _react2.default.createElement('div', { header: 'Name', dataIndex: 'Name', editable: true }),
          _react2.default.createElement('div', { header: 'Type', dataIndex: 'Type' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'mt-md' },
          _react2.default.createElement(_rext.Button, { text: 'Save Changes', className: 'mr-md', onClick: saveChanges }),
          _react2.default.createElement(_rext.Button, { text: 'Reject Changes', onClick: rejectChanges })
        )
      );
    }
  }]);

  return CardView;
}(_react.PureComponent);

exports.default = CardView;

},{"../../../../../src/rext":38,"react":"react"}],8:[function(require,module,exports){
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

},{"../../../../../src/rext":38,"react":"react"}],9:[function(require,module,exports){
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

},{"../../../../../src/rext":38,"react":"react"}],10:[function(require,module,exports){
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

},{"../../../../../src/rext":38,"react":"react"}],11:[function(require,module,exports){
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

},{"../../../../../src/rext":38,"react":"react"}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rext = require('../../../../../../src/rext');

exports.default = (0, _rext.Store)({
  storeId: 'CardStore',
  fields: ['Name'],
  proxy: {
    url: '/data/card.json'
  }
});

},{"../../../../../../src/rext":38}],13:[function(require,module,exports){
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
          '// ./app.js\nimport \'babel-polyfill\';\nimport React, { PureComponent } from \'react\';\nimport { Application } from \'ext-react\';\nimport Viewport from \'./components/viewport/viewport\';\n\n@Application()\nexport default class App extends PureComponent {\n  render() {\n    return <Viewport />\n  }\n}'
        )
      );
    }
  }]);

  return GettingStarted;
}(_react.PureComponent)) || _class);
exports.default = GettingStarted;

},{"../../../../../src/rext":38,"react":"react"}],14:[function(require,module,exports){
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

},{"../../../../../src/rext":38,"react":"react"}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

var _storeManager = require('../data/store-manager');

var _storeManager2 = _interopRequireDefault(_storeManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (config) {
  return function (Viewport) {
    config && config.stores && _ext2.default.List(config.stores).each(function (store) {
      store = store.default;
      _storeManager2.default.set(store.storeId, store);
    });
    var root = _ext2.default.createElement('<div id="react-root"></div>');
    document.body.appendChild(root);
    (0, _reactDom.render)(_react2.default.createElement(Viewport, null), root);
  };
};

},{"../core/ext":29,"../data/store-manager":36,"react":"react","react-dom":"react-dom"}],16:[function(require,module,exports){
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

        var stores = _ext2.default.List(config.stores).reduce(function (stores, storeId) {
          stores[storeId] = _storeManager2.default.get(storeId);
          return stores;
        }, {}),
            controller = new Controller(props);

        controller.stores = stores;

        _ext2.default.initialState(_this, _defineProperty({
          stores: stores
        }, config.componentAs || '$view', controller));
        return _this;
      }

      _createClass(HocComponent, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          _ext2.default.Map(this.state.stores).values().each(function (store) {
            if (store.autoLoad) {
              store.load();
            }
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

},{"../core/ext":29,"../data/store-manager":36,"react":"react"}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (clazz) {
  var service = new clazz();
  service.serviceId = clazz.name;
  return service;
};

},{}],18:[function(require,module,exports){
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

},{"../core/ext":29,"react":"react"}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dialog = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _desc, _value, _class, _desc2, _value2, _class2;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

var _container = require('./container');

var _form = require('./form');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DialogManager = function () {
  function DialogManager() {
    _classCallCheck(this, DialogManager);
  }

  _createClass(DialogManager, [{
    key: 'show',
    value: function show(dialog) {
      var layer = _ext2.default.createElement('<div class="mask"></div>');
      document.body.appendChild(layer);
      (0, _reactDom.render)(dialog, layer);
    }
  }, {
    key: 'toast',
    value: function toast(_ref) {
      var _ref$delay = _ref.delay,
          delay = _ref$delay === undefined ? 3000 : _ref$delay,
          others = _objectWithoutProperties(_ref, ['delay']);

      // if (Ext.getElement('.notification').isEmpty()) {
      var layer = _ext2.default.createElement('<div class="notification"></div>');
      document.body.appendChild(layer);
      (0, _reactDom.render)(_react2.default.createElement(Toast, others), layer);
      setTimeout(function () {
        document.body.removeChild(layer);
      }, delay);
      // }
    }
  }, {
    key: 'msgbox',
    value: function msgbox(_ref2) {
      var others = _objectWithoutProperties(_ref2, []);

      // if (Ext.getElement('.msgbox').isEmpty()) {
      var layer = _ext2.default.createElement('<div class="mask"></div>');
      document.body.appendChild(layer);
      (0, _reactDom.render)(_react2.default.createElement(MsgBox, others), layer);
      // }
    }
  }]);

  return DialogManager;
}();

exports.default = new DialogManager();
var Dialog = exports.Dialog = (_class = function (_PureComponent) {
  _inherits(Dialog, _PureComponent);

  function Dialog() {
    _classCallCheck(this, Dialog);

    return _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).apply(this, arguments));
  }

  _createClass(Dialog, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$title = _props.title,
          title = _props$title === undefined ? 'Dialog' : _props$title,
          _props$className = _props.className,
          className = _props$className === undefined ? '' : _props$className,
          _props$closeButton = _props.closeButton,
          closeButton = _props$closeButton === undefined ? true : _props$closeButton,
          children = _props.children,
          others = _objectWithoutProperties(_props, ['title', 'className', 'closeButton', 'children']);

      return _react2.default.createElement(
        _container.Container,
        _extends({ layout: 'row', className: _ext2.default.className('dialog', className) }, others),
        _react2.default.createElement(
          'div',
          { className: 'dialog-header' },
          _react2.default.createElement(
            'p',
            { className: 'dialog-title text-center' },
            title
          ),
          closeButton && _react2.default.createElement('span', { className: 'tool', onClick: this.dispose })
        ),
        _react2.default.createElement(
          _container.Container,
          { layout: 'row', className: 'dialog-body' },
          children
        )
      );
    }
  }, {
    key: 'dispose',
    value: function dispose() {
      var onClose = this.props.onClose,
          parent = (0, _reactDom.findDOMNode)(this).parentElement;

      onClose && onClose();
      (0, _reactDom.unmountComponentAtNode)(parent);
      document.body.removeChild(parent);
    }
  }]);

  return Dialog;
}(_react.PureComponent), (_applyDecoratedDescriptor(_class.prototype, 'dispose', [_ext.bind], Object.getOwnPropertyDescriptor(_class.prototype, 'dispose'), _class.prototype)), _class);


var ALERT_TYPE = {
  success: { title: 'Success', icon: 'check' },
  error: { title: 'Error', icon: 'times' },
  warning: { title: 'Warning', icon: 'exclamation' },
  info: { title: 'Information', icon: 'info' }
};

var Toast = (_class2 = function (_PureComponent2) {
  _inherits(Toast, _PureComponent2);

  function Toast() {
    _classCallCheck(this, Toast);

    return _possibleConstructorReturn(this, (Toast.__proto__ || Object.getPrototypeOf(Toast)).apply(this, arguments));
  }

  _createClass(Toast, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          type = _props2.type,
          message = _props2.message;

      return _react2.default.createElement(
        _container.Container,
        { layout: 'row' },
        _react2.default.createElement(
          'h4',
          null,
          ALERT_TYPE[type].title
        ),
        _react2.default.createElement(
          _container.Container,
          { layout: 'column' },
          _react2.default.createElement(
            'div',
            { className: 'toast-icon' },
            _react2.default.createElement('i', { className: 'fa fa-2x fa-' + ALERT_TYPE[type].icon + '-circle' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'toast-content' },
            message
          )
        )
      );
    }
  }, {
    key: 'dispose',
    value: function dispose() {
      var parent = (0, _reactDom.findDOMNode)(this).parentElement;
      (0, _reactDom.unmountComponentAtNode)(parent);
      document.body.removeChild(parent);
    }
  }]);

  return Toast;
}(_react.PureComponent), (_applyDecoratedDescriptor(_class2.prototype, 'dispose', [_ext.bind], Object.getOwnPropertyDescriptor(_class2.prototype, 'dispose'), _class2.prototype)), _class2);

var MsgBox = function (_PureComponent3) {
  _inherits(MsgBox, _PureComponent3);

  function MsgBox() {
    _classCallCheck(this, MsgBox);

    return _possibleConstructorReturn(this, (MsgBox.__proto__ || Object.getPrototypeOf(MsgBox)).apply(this, arguments));
  }

  _createClass(MsgBox, [{
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props3 = this.props,
          title = _props3.title,
          icon = _props3.icon,
          message = _props3.message,
          _props3$buttons = _props3.buttons,
          buttons = _props3$buttons === undefined ? 'OK' : _props3$buttons,
          _props3$buttonText = _props3.buttonText,
          buttonText = _props3$buttonText === undefined ? {} : _props3$buttonText,
          fn = _props3.fn;

      return _react2.default.createElement(
        Dialog,
        { title: title, closeButton: false, className: 'msgbox' },
        _react2.default.createElement(
          _container.Container,
          { layout: 'row' },
          !icon && _react2.default.createElement(
            _container.Container,
            { layout: 'fit' },
            message
          ),
          icon && _react2.default.createElement(
            _container.Container,
            { layout: 'column' },
            _react2.default.createElement(
              'div',
              { className: 'toast-icon mr-sm' },
              _react2.default.createElement('i', { className: 'fa fa-2x fa-' + icon + '-circle' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'toast-content' },
              message
            )
          ),
          buttons === 'OKCANCEL' && _react2.default.createElement(
            'section',
            { className: 'text-center mt-md' },
            _react2.default.createElement(
              _form.Button,
              { className: 'mr-sm', onClick: function onClick() {
                  return _this4.dispose();
                } },
              buttonText.cancel || 'Cancel'
            ),
            _react2.default.createElement(
              _form.Button,
              { onClick: function onClick() {
                  _this4.dispose();fn && fn();
                } },
              buttonText.ok || 'OK'
            )
          ),
          buttons === 'OK' && _react2.default.createElement(
            'section',
            { className: 'text-center mt-sm' },
            _react2.default.createElement(
              _form.Button,
              { onClick: function onClick() {
                  _this4.dispose();fn && fn();
                } },
              buttonText.ok || 'OK'
            )
          )
        )
      );
    }
  }, {
    key: 'dispose',
    value: function dispose() {
      var parent = (0, _reactDom.findDOMNode)(this).parentElement;
      (0, _reactDom.unmountComponentAtNode)(parent);
      document.body.removeChild(parent);
    }
  }]);

  return MsgBox;
}(_react.PureComponent);

},{"../core/ext":29,"./container":18,"./form":20,"react":"react","react-dom":"react-dom"}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextArea = exports.Checkbox = exports.TextField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.Button = Button;
exports.ButtonLink = ButtonLink;
exports.Field = Field;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Button(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      text = _ref.text,
      children = _ref.children,
      others = _objectWithoutProperties(_ref, ['className', 'text', 'children']);

  return _react2.default.createElement(
    'button',
    _extends({ type: 'button', className: _ext2.default.className('btn', className) }, others),
    text || children
  );
}

function ButtonLink(_ref2) {
  var text = _ref2.text,
      children = _ref2.children,
      others = _objectWithoutProperties(_ref2, ['text', 'children']);

  return _react2.default.createElement(
    'a',
    _extends({ href: 'javascript:void(0)' }, others),
    text || children
  );
}

function Field(_ref3) {
  var _ref3$type = _ref3.type,
      type = _ref3$type === undefined ? 'text' : _ref3$type,
      _ref3$inline = _ref3.inline,
      inline = _ref3$inline === undefined ? false : _ref3$inline,
      _ref3$label = _ref3.label,
      label = _ref3$label === undefined ? '' : _ref3$label,
      _ref3$labelWidth = _ref3.labelWidth,
      labelWidth = _ref3$labelWidth === undefined ? 3 : _ref3$labelWidth,
      value = _ref3.value,
      onChange = _ref3.onChange,
      others = _objectWithoutProperties(_ref3, ['type', 'inline', 'label', 'labelWidth', 'value', 'onChange']);

  return _react2.default.createElement(
    'article',
    { className: _ext2.default.className('form-group', { 'row': inline }) },
    _react2.default.createElement(
      'label',
      { className: _ext2.default.className(_defineProperty({}, 'col-sm-' + labelWidth + ' text-sm-right', inline)) },
      label
    ),
    _react2.default.createElement(
      'div',
      { className: _ext2.default.className(_defineProperty({}, 'col-sm-' + (12 - labelWidth), inline)) },
      type === 'text' && _react2.default.createElement(TextField, _extends({ value: value, onChange: onChange }, others)),
      type === 'checkbox' && _react2.default.createElement(Checkbox, _extends({ value: value, onChange: onChange }, others)),
      type === 'textarea' && _react2.default.createElement(TextArea, _extends({ value: value, onChange: onChange }, others))
    )
  );
}

function TextField(_ref4) {
  var _ref4$value = _ref4.value,
      value = _ref4$value === undefined ? '' : _ref4$value,
      _ref4$className = _ref4.className,
      className = _ref4$className === undefined ? '' : _ref4$className,
      _onChange = _ref4.onChange,
      others = _objectWithoutProperties(_ref4, ['value', 'className', 'onChange']);

  return _react2.default.createElement('input', _extends({ type: 'text', className: _ext2.default.className('form-control', className),
    value: value, onChange: function onChange(e) {
      return _onChange && _onChange(e.target.value);
    } }, others));
}

exports.TextField = TextField;
function Checkbox(_ref5) {
  var _ref5$value = _ref5.value,
      value = _ref5$value === undefined ? false : _ref5$value,
      _onChange2 = _ref5.onChange,
      others = _objectWithoutProperties(_ref5, ['value', 'onChange']);

  return _react2.default.createElement('input', _extends({ type: 'checkbox', checked: value, onChange: function onChange() {
      return _onChange2(!value);
    } }, others));
}

exports.Checkbox = Checkbox;
function TextArea(_ref6) {
  var _ref6$rows = _ref6.rows,
      rows = _ref6$rows === undefined ? '3' : _ref6$rows,
      _ref6$value = _ref6.value,
      value = _ref6$value === undefined ? '' : _ref6$value,
      _ref6$className = _ref6.className,
      className = _ref6$className === undefined ? '' : _ref6$className,
      _onChange3 = _ref6.onChange,
      others = _objectWithoutProperties(_ref6, ['rows', 'value', 'className', 'onChange']);

  return _react2.default.createElement('textarea', _extends({ rows: rows, className: _ext2.default.className('form-control', className),
    value: value, onChange: function onChange(e) {
      return _onChange3 && _onChange3(e.target.value);
    } }, others));
}
exports.TextArea = TextArea;

},{"../core/ext":29,"react":"react"}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = GridBody;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _container = require('../container');

var _row = require('./row');

var _row2 = _interopRequireDefault(_row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function GridBody(_ref) {
  var outerWidth = _ref.outerWidth,
      bodyWidth = _ref.bodyWidth,
      _ref$columns = _ref.columns,
      columns = _ref$columns === undefined ? [] : _ref$columns,
      store = _ref.store,
      others = _objectWithoutProperties(_ref, ['outerWidth', 'bodyWidth', 'columns', 'store']);

  return _react2.default.createElement(
    _container.Container,
    { layout: 'row', className: 'rx-grid-body', style: { width: outerWidth } },
    _react2.default.createElement(
      'section',
      { className: 'rx-grid-view', style: { width: bodyWidth } },
      _react2.default.createElement('div', { style: { height: 1 } }),
      store.getRecords().map(function (record, rowIndex) {
        return _react2.default.createElement(_row2.default, _extends({ columns: columns, record: record, rowIndex: rowIndex }, others));
      })
    )
  );
}

},{"../container":18,"./row":25,"react":"react"}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ext = require('../../core/ext');

var _ext2 = _interopRequireDefault(_ext);

var _form = require('../form');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var GridCell = (_class = function (_PureComponent) {
  _inherits(GridCell, _PureComponent);

  function GridCell(props) {
    _classCallCheck(this, GridCell);

    var _this = _possibleConstructorReturn(this, (GridCell.__proto__ || Object.getPrototypeOf(GridCell)).call(this, props));

    var dataIndex = props.dataIndex,
        record = props.record;

    _ext2.default.initialState(_this, {
      value: dataIndex ? record.get(dataIndex) : '',
      readOnly: true
    });
    return _this;
  }

  _createClass(GridCell, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var dataIndex = _ref.dataIndex,
          record = _ref.record;

      this.setValue(dataIndex ? record.get(dataIndex) : '');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          value = _state.value,
          readOnly = _state.readOnly,
          _props = this.props,
          editable = _props.editable,
          noMarkDirty = _props.noMarkDirty,
          _props$className = _props.className,
          className = _props$className === undefined ? '' : _props$className,
          _props$render = _props.render,
          render = _props$render === undefined ? function (value) {
        return value;
      } : _props$render,
          record = _props.record,
          dataIndex = _props.dataIndex,
          rowIndex = _props.rowIndex,
          others = _objectWithoutProperties(_props, ['editable', 'noMarkDirty', 'className', 'render', 'record', 'dataIndex', 'rowIndex']),
          cls = _ext2.default.className('rx-grid-cell', className, { 'modified': !noMarkDirty && dataIndex && record.isModified(dataIndex) });

      if (!editable) {
        return _react2.default.createElement(
          'section',
          _extends({ className: cls, style: { flex: 1 } }, others),
          render(value, record, dataIndex, rowIndex)
        );
      }
      if (readOnly) {
        return _react2.default.createElement(
          'section',
          _extends({ className: cls, style: { flex: 1 }, onClick: function onClick() {
              return _this2.setReadOnly(false);
            } }, others),
          render(value, record, dataIndex, rowIndex)
        );
      }
      return _react2.default.createElement(
        'section',
        _extends({ className: cls, style: { flex: 1 } }, others),
        _react2.default.createElement(_form.TextField, { value: value, autoFocus: true, onChange: this.setValue, onBlur: this.afterEdit })
      );
    }
  }, {
    key: 'afterEdit',
    value: function afterEdit() {
      var value = this.state.value,
          _props2 = this.props,
          record = _props2.record,
          dataIndex = _props2.dataIndex;

      record.set(dataIndex, value);
      this.setReadOnly(true);
    }
  }]);

  return GridCell;
}(_react.PureComponent), (_applyDecoratedDescriptor(_class.prototype, 'afterEdit', [_ext.bind], Object.getOwnPropertyDescriptor(_class.prototype, 'afterEdit'), _class.prototype)), _class);
exports.default = GridCell;

},{"../../core/ext":29,"../form":20,"react":"react"}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _rxjs = require('rxjs');

var _ext = require('../../core/ext');

var _ext2 = _interopRequireDefault(_ext);

var _container = require('../container');

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _body = require('./body');

var _body2 = _interopRequireDefault(_body);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var Grid = (_class = function (_PureComponent) {
  _inherits(Grid, _PureComponent);

  function Grid(props) {
    _classCallCheck(this, Grid);

    var _this = _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).call(this, props));

    _ext2.default.initialState(_this, {
      outerWidth: 0,
      headerWidth: 0,
      bodyWidth: 0,
      checkColumn: props.checkColumn,
      columns: _ext2.default.List(_react2.default.Children.toArray(props.children)).map(function (child) {
        return child.props;
      }).collect()
    });
    _this.onDataChange = function () {
      return _this.forceUpdate();
    };
    return _this;
  }

  _createClass(Grid, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.resizeGrid();
      this.props.store.subscribe(this.onDataChange);
      this.resizeEvent = _rxjs.Observable.fromEvent(window, 'resize').subscribe(this.resizeGrid);
      this.scrollEvent = _rxjs.Observable.fromEvent((0, _reactDom.findDOMNode)(this).querySelector('.rx-grid-body'), 'scroll').subscribe(this.onScroll);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setColumns(_ext2.default.List(_react2.default.Children.toArray(nextProps.children)).map(function (child) {
        return child.props;
      }).collect());
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.resizeEvent.unsubscribe();
      this.scrollEvent.unsubscribe();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          store = _props.store,
          className = _props.className,
          noHeader = _props.noHeader,
          others = _objectWithoutProperties(_props, ['store', 'className', 'noHeader']);

      return _react2.default.createElement(
        _container.Container,
        _extends({ layout: 'row', className: _ext2.default.className('rx-grid', className) }, others),
        !noHeader && _react2.default.createElement(_header2.default, _extends({ store: store }, this.state)),
        _react2.default.createElement(_body2.default, _extends({ store: store }, this.state))
      );
    }
  }, {
    key: 'resizeGrid',
    value: function resizeGrid() {
      var _state = this.state,
          columns = _state.columns,
          columnConfig = _state.columnConfig,
          node = (0, _reactDom.findDOMNode)(this),
          parent = node.parentElement,
          outerWidth = parent.clientWidth,
          flexColumns = _ext2.default.List();

      var innerWidth = _ext2.default.List(columns).reduce(function (innerWidth, col) {
        if (col.style && col.style.width) {
          innerWidth += col.style.width;
        } else {
          flexColumns.add(col);
        }
        return innerWidth;
      }, this.props.checkColumn ? _ext2.default.CHECK_COLUMN_WIDTH : 0);

      this.setOuterWidth(outerWidth);
      this.setHeaderWidth(Math.max(innerWidth, outerWidth));
      this.setBodyWidth(Math.max(innerWidth, outerWidth) - _ext2.default.SCROLL_WIDTH);
    }
  }, {
    key: 'onScroll',
    value: function onScroll() {
      var node = (0, _reactDom.findDOMNode)(this),
          header = node.querySelector('.rx-grid-header');
      if (header) {
        header.scrollLeft = node.querySelector('.rx-grid-body').scrollLeft;
      }
    }
  }]);

  return Grid;
}(_react.PureComponent), (_applyDecoratedDescriptor(_class.prototype, 'resizeGrid', [_ext.bind], Object.getOwnPropertyDescriptor(_class.prototype, 'resizeGrid'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onScroll', [_ext.bind], Object.getOwnPropertyDescriptor(_class.prototype, 'onScroll'), _class.prototype)), _class);
exports.default = Grid;

},{"../../core/ext":29,"../container":18,"./body":21,"./header":24,"react":"react","react-dom":"react-dom","rxjs":"rxjs"}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = GridHeader;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ext = require('../../core/ext');

var _ext2 = _interopRequireDefault(_ext);

var _container = require('../container');

var _form = require('../form');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function GridHeader(_ref) {
  var outerWidth = _ref.outerWidth,
      headerWidth = _ref.headerWidth,
      checkColumn = _ref.checkColumn,
      _ref$columns = _ref.columns,
      columns = _ref$columns === undefined ? [] : _ref$columns,
      store = _ref.store,
      others = _objectWithoutProperties(_ref, ['outerWidth', 'headerWidth', 'checkColumn', 'columns', 'store']);

  return _react2.default.createElement(
    'section',
    { className: 'rx-grid-header', style: { width: outerWidth } },
    _react2.default.createElement(
      _container.Container,
      { layout: 'column', className: 'rx-grid-header-container', style: { width: headerWidth } },
      checkColumn && _react2.default.createElement(
        'div',
        { className: 'rx-grid-header-column', style: { width: _ext2.default.CHECK_COLUMN_WIDTH } },
        checkColumn === 'multiple' && _react2.default.createElement(_form.Checkbox, { disabled: store.count() === 0,
          checked: store.count() > 0 && store.getSelectedRecords().count() === store.count(),
          onChange: function onChange() {
            return store.toggleSelectAll();
          } })
      ),
      columns.map(function (_ref2) {
        var _ref2$header = _ref2.header,
            header = _ref2$header === undefined ? '' : _ref2$header,
            _ref2$className = _ref2.className,
            className = _ref2$className === undefined ? '' : _ref2$className,
            others = _objectWithoutProperties(_ref2, ['header', 'className']);

        return _react2.default.createElement(
          'div',
          _extends({ className: _ext2.default.className('rx-grid-header-column text-center', className), style: { flex: 1 } }, others),
          header
        );
      }),
      _react2.default.createElement('div', { style: { width: _ext2.default.SCROLL_WIDTH } })
    )
  );
}

},{"../../core/ext":29,"../container":18,"../form":20,"react":"react"}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ext = require('../../core/ext');

var _ext2 = _interopRequireDefault(_ext);

var _container = require('../container');

var _form = require('../form');

var _cell = require('./cell');

var _cell2 = _interopRequireDefault(_cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var GridRow = (_class = function (_Component) {
  _inherits(GridRow, _Component);

  function GridRow() {
    _classCallCheck(this, GridRow);

    return _possibleConstructorReturn(this, (GridRow.__proto__ || Object.getPrototypeOf(GridRow)).apply(this, arguments));
  }

  _createClass(GridRow, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          checkColumn = _props.checkColumn,
          _props$columns = _props.columns,
          columns = _props$columns === undefined ? [] : _props$columns,
          record = _props.record,
          others = _objectWithoutProperties(_props, ['checkColumn', 'columns', 'record']);

      return _react2.default.createElement(
        _container.Container,
        { layout: 'column', className: 'rx-grid-row' },
        checkColumn && _react2.default.createElement(
          'div',
          { className: 'rx-grid-cell text-sm-center', style: { width: _ext2.default.CHECK_COLUMN_WIDTH } },
          _react2.default.createElement(_form.Checkbox, { checked: record.selected, onChange: this.toggleSelect })
        ),
        columns.map(function (column) {
          return _react2.default.createElement(_cell2.default, _extends({ record: record }, column, others));
        })
      );
    }
  }, {
    key: 'toggleSelect',
    value: function toggleSelect() {
      var _props2 = this.props,
          record = _props2.record,
          checkColumn = _props2.checkColumn;

      if (record.selected) {
        record.setSelected(false);
      } else {
        if (checkColumn !== 'multiple') {
          record.store.getSelectedRecords().each(function (record) {
            return record.setSelected(false);
          });
        }
        record.setSelected(true);
      }
    }
  }]);

  return GridRow;
}(_react.Component), (_applyDecoratedDescriptor(_class.prototype, 'toggleSelect', [_ext.bind], Object.getOwnPropertyDescriptor(_class.prototype, 'toggleSelect'), _class.prototype)), _class);
exports.default = GridRow;

},{"../../core/ext":29,"../container":18,"../form":20,"./cell":22,"react":"react"}],26:[function(require,module,exports){
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
    _ext2.default.List(mapRoute.path).each(function (routeName, index) {
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

},{"../core/ext":29,"react":"react","rxjs":"rxjs"}],27:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var List = exports.List = function List(value) {
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
  this.isEmpty = function () {
    return _this.count === 0;
  };

  this.getAt = function (index) {
    return _this.data[index];
  };
  this.removeAt = function (index) {
    var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return _this.data.splice(index, count);
  };
  this.subList = function (start, end) {
    return new List(_this.data.slice(start, end));
  };

  this.add = function (item) {
    return _this.data.push(item);
  };
  this.insert = function (index, item) {
    return _this.data.splice(index, 0, item);
  };

  this.findIndex = function (predicate) {
    return _this.data.findIndex(predicate);
  };
  this.find = function (predicate) {
    return _this.data.find(predicate);
  };
  this.contains = function (predicate) {
    return _this.find(predicate) !== undefined;
  };

  this.each = function (predicate) {
    return _this.data.forEach(predicate);
  };
  this.filter = function (predicate) {
    return new List(_this.data.filter(predicate));
  };
  this.map = function (predicate) {
    return new List(_this.data.map(predicate));
  };
  this.reduce = function (predicate, initialValue) {
    return _this.data.reduce(predicate, initialValue);
  };

  this.join = function (separator) {
    return _this.data.join(separator);
  };
};

var Dictionary = exports.Dictionary = function () {
  function Dictionary(keyValues) {
    var _this2 = this;

    _classCallCheck(this, Dictionary);

    this.data = {};
    if (keyValues) {
      this.data = Object.assign({}, keyValues);
    }

    this.keys = function () {
      return new List(Object.keys(_this2.data));
    };
    this.values = function () {
      return new List(Object.values(_this2.data));
    };

    this.set = function (key, value) {
      return _this2.data[key] = value;
    };
    this.get = function (key) {
      return _this2.data[key];
    };
  }

  _createClass(Dictionary, [{
    key: "each",
    value: function each(predicate) {
      for (var key in this.data) {
        predicate(this.data[key], key, this.data);
      }
    }
  }]);

  return Dictionary;
}();

},{}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _collection = require('./collection');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dom = function (_List) {
  _inherits(Dom, _List);

  function Dom() {
    _classCallCheck(this, Dom);

    var _this = _possibleConstructorReturn(this, (Dom.__proto__ || Object.getPrototypeOf(Dom)).call(this));

    _this.display = function (status) {
      return _this.selectors.each(function (selector) {
        return selector.style.display = status;
      });
    };
    _this.show = function () {
      return _this.display('block');
    };
    _this.hide = function () {
      return _this.display('hide');
    };
    return _this;
  }

  return Dom;
}(_collection.List);

exports.default = function (selector) {
  return new Dom(document.querySelectorAll(selector));
};

},{"./collection":27}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ext = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.bind = bind;
exports.debounce = debounce;

var _rxjs = require('rxjs');

var _collection = require('./collection');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ext = exports.Ext = function () {
  function Ext() {
    _classCallCheck(this, Ext);

    this.DOM = require('./dom').default;
    this.String = require('./string').default;
    this.Ajax = require('../data/ajax').default;
    this.List = function (value) {
      return new _collection.List(value);
    };
    this.Map = function (keyValues) {
      return new _collection.Dictionary(keyValues);
    };
    this.StoreManager = new _collection.Dictionary();

    this.SCROLL_WIDTH = this.getScrollWidth();
    this.BORDER_WIDTH = 2;
    this.CHECK_COLUMN_WIDTH = 28;
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

    this.interval = function (period, action) {
      return _rxjs.Observable.interval(1000 * period).subscribe(function (x) {
        return action();
      });
    };
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

},{"../data/ajax":32,"./collection":27,"./dom":28,"./string":30,"rxjs":"rxjs"}],30:[function(require,module,exports){
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

    this.htmlEncode = function (value) {
      return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');
    };

    this.htmlDecode = function (value) {
      return value.replace(/&amp;/g, '').replace(/&lt;/g, '<').replace(/&gt;>/g, '>').replace(/&#39;/g, "'").replace(/&quot;/g, '"');
    };
  }

  _createClass(String, [{
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

},{}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rxjs = require('rxjs');

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

var _collection = require('../core/collection');

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractStore = function (_List) {
  _inherits(AbstractStore, _List);

  function AbstractStore(config) {
    _classCallCheck(this, AbstractStore);

    //#region configs
    var _this = _possibleConstructorReturn(this, (AbstractStore.__proto__ || Object.getPrototypeOf(AbstractStore)).call(this));

    _this.totalCount = 0;
    _this.pageSize = 0;
    _this.currentPage = 1;
    _this.subject = new _rxjs.Subject();
    _this.idProperty = 'id';
    //#endregion

    //#region properties
    //#endregion

    //#region methods
    _this.createRecord = function (record) {
      return new _model2.default(record, _this);
    };
    _this.getRecords = _this.collect;
    _this.getRawDatas = _this.map(function (record) {
      return record.getData();
    }).collect();
    _this.getModifiedRecords = function () {
      return _this.filter(function (record) {
        return record.isModified();
      });
    };
    _this.getSelectedRecords = function () {
      return _this.filter(function (record) {
        return record.selected;
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

    _ext2.default.extend(_this, config);
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
      this.data = new _collection.List(data).map(this.createRecord.bind(this)).collect();
      this.fireEvent();
    }
  }, {
    key: 'commitChanges',
    value: function commitChanges() {
      this.getModifiedRecords().each(function (record) {
        return record.save();
      });
      this.fireEvent();
    }
  }, {
    key: 'rejectChanges',
    value: function rejectChanges() {
      this.getModifiedRecords().each(function (record) {
        return record.reject(true);
      });
      this.fireEvent();
    }
  }, {
    key: 'addRecord',
    value: function addRecord() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.add(this.createRecord(data));
      this.fireEvent();
    }
  }, {
    key: 'removeSelectedRecords',
    value: function removeSelectedRecords() {
      this.data = this.data.filter(function (record) {
        return !record.selected;
      });
      this.fireEvent();
    }
  }, {
    key: 'toggleSelectAll',
    value: function toggleSelectAll() {
      var allSelected = this.getSelectedRecords().count() === this.count();
      this.each(function (record) {
        return record.selected = !allSelected;
      });
      this.fireEvent();
    }
  }]);

  return AbstractStore;
}(_collection.List);

exports.default = AbstractStore;

},{"../core/collection":27,"../core/ext":29,"./model":34,"rxjs":"rxjs"}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rxjs = require('rxjs');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ajax = function () {
  function Ajax() {
    _classCallCheck(this, Ajax);
  }

  _createClass(Ajax, [{
    key: 'request',
    value: function request(_ref) {
      var url = _ref.url,
          _ref$method = _ref.method,
          method = _ref$method === undefined ? 'get' : _ref$method,
          _ref$responseType = _ref.responseType,
          responseType = _ref$responseType === undefined ? 'json' : _ref$responseType,
          params = _ref.params;

      return new Promise(function (resolve, reject) {
        _rxjs.Observable.ajax({
          url: url,
          method: method,
          headers: { 'Content-Type': 'application/json' },
          body: method === 'post' && params,
          responseType: responseType
        }).subscribe({
          next: function next(value) {
            return resolve(value.response);
          },
          error: function error(err) {
            return reject(err.message || err.response);
          }
        });
      });
    }
  }]);

  return Ajax;
}();

exports.default = new Ajax();

},{"rxjs":"rxjs"}],33:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

var _abstractStore = require('./abstract-store');

var _abstractStore2 = _interopRequireDefault(_abstractStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArrayStore = function (_AbstractStore) {
  _inherits(ArrayStore, _AbstractStore);

  function ArrayStore(config) {
    _classCallCheck(this, ArrayStore);

    var _this = _possibleConstructorReturn(this, (ArrayStore.__proto__ || Object.getPrototypeOf(ArrayStore)).call(this));

    _ext2.default.extend(_this, config);
    return _this;
  }

  return ArrayStore;
}(_abstractStore2.default);

exports.default = ArrayStore;

},{"../core/ext":29,"./abstract-store":31}],34:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

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
    var fieldConfig = store && store.fields ? store.fields : [];
    this.fields = _ext2.default.List(fieldConfig).map(function (field) {
      return _ext2.default.isString(field) ? { name: field, type: 'string' } : field;
    });
    this.idProperty = store ? store.idProperty : 'id';
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
    value: function isEqual(fieldName) {
      var oldValue = this.phantom[fieldName],
          newValue = this.data[fieldName],
          field = this.fields.find(function (field) {
        return field.name === fieldName;
      });

      return field && field.equals ? field.equals(newValue, oldValue) : newValue === oldValue;
    }
  }, {
    key: 'isModified',
    value: function isModified(fieldName) {
      var _this2 = this;

      if (!this.phantom[this.idProperty]) {
        // should not detect new record as a modified record
        return false;
      }

      return fieldName ? !this.isEqual(fieldName) : this.fields.contains(function (field) {
        return !_this2.isEqual(field.name);
      });
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

},{"../core/ext":29}],35:[function(require,module,exports){
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

var ProxyStore = function (_AbstractStore) {
  _inherits(ProxyStore, _AbstractStore);

  function ProxyStore(config) {
    _classCallCheck(this, ProxyStore);

    //#region configs
    var _this = _possibleConstructorReturn(this, (ProxyStore.__proto__ || Object.getPrototypeOf(ProxyStore)).call(this));

    _this.proxy = {
      reader: {},
      writer: {}
    };
    //#endregion

    _ext2.default.extend(_this, config);
    return _this;
  }

  _createClass(ProxyStore, [{
    key: 'load',
    value: function load() {
      var _this2 = this;

      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          done = _ref.done,
          fail = _ref.fail,
          always = _ref.always;

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
        headers: { 'Content-Type': 'application/json' },
        body: method === 'post' && params,
        responseType: responseType
      }).subscribe({
        next: function next(value) {
          var _proxy$reader = _this2.proxy.reader;
          _proxy$reader = _proxy$reader === undefined ? {} : _proxy$reader;
          var rootProperty = _proxy$reader.rootProperty,
              totalProperty = _proxy$reader.totalProperty;
          var response = value.response;

          if (done) {
            response = done(response);
          }
          _this2.loadData(rootProperty ? response[rootProperty] : response);
          _this2.totalCount = _this2.pageSize && totalProperty ? response[totalProperty] : _this2.count();
        },
        error: function error(err) {
          console.error(err.message || err.response);
          fail && fail(err.message || err.response);
        },
        complete: always
      });
    }
  }, {
    key: 'sync',
    value: function sync() {
      var _this3 = this;

      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          url = _ref2.url,
          done = _ref2.done,
          fail = _ref2.fail,
          always = _ref2.always;

      var _proxy2 = this.proxy,
          _proxy2$responseType = _proxy2.responseType,
          responseType = _proxy2$responseType === undefined ? 'json' : _proxy2$responseType,
          _proxy2$writer = _proxy2.writer;
      _proxy2$writer = _proxy2$writer === undefined ? {} : _proxy2$writer;
      var transform = _proxy2$writer.transform;

      var params = this.getModifiedRecords().map(function (record) {
        return record.data;
      }).collect();
      transform && (params = transform(params));
      _rxjs.Observable.ajax({
        url: url || this.proxy.url,
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: params,
        responseType: responseType
      }).subscribe({
        next: function next(value) {
          _this3.commitChanges();
          return done ? done(value.response) : value.response;
        },
        error: function error(err) {
          console.error(err.message || err.response);
          fail && fail(err.message || err.response);
        },
        complete: always
      });
    }
  }]);

  return ProxyStore;
}(_abstractStore2.default);

exports.default = ProxyStore;

},{"../core/ext":29,"./abstract-store":31,"rxjs":"rxjs"}],36:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _collection = require('../core/collection');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StoreManager = function (_Dictionary) {
  _inherits(StoreManager, _Dictionary);

  function StoreManager() {
    _classCallCheck(this, StoreManager);

    return _possibleConstructorReturn(this, (StoreManager.__proto__ || Object.getPrototypeOf(StoreManager)).apply(this, arguments));
  }

  return StoreManager;
}(_collection.Dictionary);

exports.default = new StoreManager();

},{"../core/collection":27}],37:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

var _abstractStore = require('./abstract-store');

var _abstractStore2 = _interopRequireDefault(_abstractStore);

var _proxyStore = require('./proxy-store');

var _proxyStore2 = _interopRequireDefault(_proxyStore);

var _arrayStore = require('./array-store');

var _arrayStore2 = _interopRequireDefault(_arrayStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (config) {
  if (!config.type) {
    return new _proxyStore2.default(config);
  } else if (config.type === 'Array') {
    return new _arrayStore2.default(config);
  } else {
    return new _abstractStore2.default(config);
  }
};

},{"../core/ext":29,"./abstract-store":31,"./array-store":33,"./proxy-store":35}],38:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Store = exports.Service = exports.Component = exports.Application = exports.Route = exports.debounce = exports.bind = exports.Dialog = exports.Grid = exports.TextArea = exports.Checkbox = exports.TextField = exports.Field = exports.ButtonLink = exports.Button = exports.Container = exports.Link = exports.HashRouter = undefined;

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

var _form = require('./components/form');

Object.defineProperty(exports, 'Button', {
  enumerable: true,
  get: function get() {
    return _form.Button;
  }
});
Object.defineProperty(exports, 'ButtonLink', {
  enumerable: true,
  get: function get() {
    return _form.ButtonLink;
  }
});
Object.defineProperty(exports, 'Field', {
  enumerable: true,
  get: function get() {
    return _form.Field;
  }
});
Object.defineProperty(exports, 'TextField', {
  enumerable: true,
  get: function get() {
    return _form.TextField;
  }
});
Object.defineProperty(exports, 'Checkbox', {
  enumerable: true,
  get: function get() {
    return _form.Checkbox;
  }
});
Object.defineProperty(exports, 'TextArea', {
  enumerable: true,
  get: function get() {
    return _form.TextArea;
  }
});

var _grid = require('./components/grid/grid');

Object.defineProperty(exports, 'Grid', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_grid).default;
  }
});

var _dialog = require('./components/dialog');

Object.defineProperty(exports, 'Dialog', {
  enumerable: true,
  get: function get() {
    return _dialog.Dialog;
  }
});

var _ext = require('./core/ext');

Object.defineProperty(exports, 'bind', {
  enumerable: true,
  get: function get() {
    return _ext.bind;
  }
});
Object.defineProperty(exports, 'debounce', {
  enumerable: true,
  get: function get() {
    return _ext.debounce;
  }
});
Object.defineProperty(exports, 'Route', {
  enumerable: true,
  get: function get() {
    return _router.Route;
  }
});

var _application = require('./app/application');

Object.defineProperty(exports, 'Application', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_application).default;
  }
});

var _component = require('./app/component');

Object.defineProperty(exports, 'Component', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_component).default;
  }
});

var _service = require('./app/service');

Object.defineProperty(exports, 'Service', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_service).default;
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

var _dialog2 = _interopRequireDefault(_dialog);

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
    _this.DialogManager = _dialog2.default;
    return _this;
  }

  _createClass(Rext, [{
    key: 'application',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
        var _this2 = this;

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
                    _this2.StoreManager.set(store.storeId, store);
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
  }, {
    key: 'showErrorMsgbox',
    value: function showErrorMsgbox(message) {
      this.DialogManager.msgbox({
        title: 'Error',
        icon: 'times',
        message: message || this.UNKNOWN_ERROR_MSG,
        buttons: 'OK'
      });
    }
  }]);

  return Rext;
}(_ext.Ext);

exports.default = new Rext();

//#region Component

},{"./app/application":15,"./app/component":16,"./app/service":17,"./components/container":18,"./components/dialog":19,"./components/form":20,"./components/grid/grid":23,"./components/router":26,"./core/ext":29,"./data/store":37,"./data/store-manager":36,"babel-polyfill":"babel-polyfill","react":"react","react-dom":"react-dom"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkb2NzL3NyYy9qcy9hcHAuanMiLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2FyY2hpdGVjdHVyZS9hcmNoaXRlY3R1cmUuanN4IiwiZG9jcy9zcmMvanMvY29tcG9uZW50cy9jb3JlLWNvbmNlcHRzL2NvbXBvbmVudC5qc3giLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2NvcmUtY29uY2VwdHMvZGF0YS1wYWNrYWdlLmpzeCIsImRvY3Mvc3JjL2pzL2NvbXBvbmVudHMvY29yZS1jb25jZXB0cy9zY3JlZW4tbmF2aWdhdGlvbi5qc3giLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUvY2FyZHMuanMiLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUvY2FyZHMudmlldy5qc3giLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUvZGFzaGJvYXJkLmpzIiwiZG9jcy9zcmMvanMvY29tcG9uZW50cy9leGFtcGxlL2RldGFpbHMuanMiLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUvbm90Zm91bmQuanMiLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUvc2VhcmNoLmpzIiwiZG9jcy9zcmMvanMvY29tcG9uZW50cy9leGFtcGxlL3N0b3Jlcy9jYXJkLmpzIiwiZG9jcy9zcmMvanMvY29tcG9uZW50cy9nZXR0aW5nLXN0YXJ0ZWQvZ2V0dGluZy1zdGFydGVkLmpzeCIsImRvY3Mvc3JjL2pzL2NvbXBvbmVudHMvdmlld3BvcnQvdmlld3BvcnQuanN4Iiwic3JjL2FwcC9hcHBsaWNhdGlvbi5qcyIsInNyYy9hcHAvY29tcG9uZW50LmpzIiwic3JjL2FwcC9zZXJ2aWNlLmpzIiwic3JjL2NvbXBvbmVudHMvY29udGFpbmVyLmpzeCIsInNyYy9jb21wb25lbnRzL2RpYWxvZy5qc3giLCJzcmMvY29tcG9uZW50cy9mb3JtLmpzeCIsInNyYy9jb21wb25lbnRzL2dyaWQvYm9keS5qc3giLCJzcmMvY29tcG9uZW50cy9ncmlkL2NlbGwuanN4Iiwic3JjL2NvbXBvbmVudHMvZ3JpZC9ncmlkLmpzeCIsInNyYy9jb21wb25lbnRzL2dyaWQvaGVhZGVyLmpzeCIsInNyYy9jb21wb25lbnRzL2dyaWQvcm93LmpzeCIsInNyYy9jb21wb25lbnRzL3JvdXRlci5qc3giLCJzcmMvY29yZS9jb2xsZWN0aW9uLmpzIiwic3JjL2NvcmUvZG9tLmpzIiwic3JjL2NvcmUvZXh0LmpzIiwic3JjL2NvcmUvc3RyaW5nLmpzIiwic3JjL2RhdGEvYWJzdHJhY3Qtc3RvcmUuanMiLCJzcmMvZGF0YS9hamF4LmpzIiwic3JjL2RhdGEvYXJyYXktc3RvcmUuanMiLCJzcmMvZGF0YS9tb2RlbC5qcyIsInNyYy9kYXRhL3Byb3h5LXN0b3JlLmpzIiwic3JjL2RhdGEvc3RvcmUtbWFuYWdlci5qcyIsInNyYy9kYXRhL3N0b3JlLmpzIiwic3JjL3JleHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQ0FBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQW9CcUIsRyxXQWxCcEIsdUJBQVk7QUFDWCxVQUFRLENBQ04sUUFBUSxrQ0FBUixDQURNLENBREc7QUFJWCxTQUFPLENBQ0wsUUFBUSw4Q0FBUixDQURLLEVBRUwsUUFBUSxzQ0FBUixDQUZLLEVBR0wsUUFBUSw4Q0FBUixDQUhLLEVBSUwsUUFBUSx5Q0FBUixDQUpLLEVBS0wsUUFBUSx3Q0FBUixDQUxLO0FBTUw7QUFDQSxVQUFRLGdDQUFSLENBUEssRUFRTCxRQUFRLDZCQUFSLENBUkssRUFTTCxRQUFRLDhCQUFSLENBVEssRUFVTCxRQUFRLCtCQUFSLENBVkssRUFXTCxRQUFRLDRCQUFSLENBWEs7QUFKSSxDQUFaLEM7Ozs7Ozs7Ozs7OzZCQW1CVTtBQUNQLGFBQU8sdURBQVA7QUFDRDs7Ozs7a0JBSGtCLEc7Ozs7Ozs7Ozs7Ozs7O0FDdkJyQjs7OztBQUNBOzs7Ozs7Ozs7O0lBR3FC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QUssYUFBTCxDQUFtQixNQUFuQixDQUEwQjtBQUN4QixlQUFPLE9BRGlCO0FBRXhCLGNBQU0sT0FGa0I7QUFHeEIsaUJBQVMsV0FBVyxLQUFLLGlCQUhEO0FBSXhCLGlCQUFTO0FBSmUsT0FBMUI7QUFNRDs7Ozs7O2tCQUdZLElBQUksSUFBSixFOztBQUVmIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBcHBsaWNhdGlvbiB9IGZyb20gJ34vcmV4dCc7XG5pbXBvcnQgVmlld3BvcnQgZnJvbSAnLi9jb21wb25lbnRzL3ZpZXdwb3J0L3ZpZXdwb3J0JztcblxuQEFwcGxpY2F0aW9uKHtcbiAgc3RvcmVzOiBbXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2V4YW1wbGUvc3RvcmVzL2NhcmQnKSxcbiAgXSxcbiAgdmlld3M6IFtcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvZ2V0dGluZy1zdGFydGVkL2dldHRpbmctc3RhcnRlZCcpLFxuICAgIHJlcXVpcmUoJy4vY29tcG9uZW50cy9jb3JlLWNvbmNlcHRzL2NvbXBvbmVudCcpLFxuICAgIHJlcXVpcmUoJy4vY29tcG9uZW50cy9jb3JlLWNvbmNlcHRzL3NjcmVlbi1uYXZpZ2F0aW9uJyksXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2NvcmUtY29uY2VwdHMvZGF0YS1wYWNrYWdlJyksXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2FyY2hpdGVjdHVyZS9hcmNoaXRlY3R1cmUnKSxcbiAgICAvLyByZXF1aXJlKCcuL2NvbXBvbmVudHMvdWktY29tcG9uZW50cy9ncmlkJyksXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2V4YW1wbGUvZGFzaGJvYXJkJyksXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2V4YW1wbGUvc2VhcmNoJyksXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2V4YW1wbGUvZGV0YWlscycpLFxuICAgIHJlcXVpcmUoJy4vY29tcG9uZW50cy9leGFtcGxlL25vdGZvdW5kJyksXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2V4YW1wbGUvY2FyZHMnKSxcbiAgXSxcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Vmlld3BvcnQgLz5cbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIENvbnRhaW5lciB9IGZyb20gJ34vcmV4dCc7XG5cbkBSb3V0ZSgnL2FyY2hpdGVjdHVyZScpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcmNoaXRlY3R1cmUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Q29udGFpbmVyIGNsYXNzTmFtZT1cIm1haW4gY29udGFpbmVyIHNjcm9sbGFibGVcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi1tZFwiPkFwcGxpY2F0aW9uIEFyY2hpdGVjdHVyZTwvaDE+XG4gICAgICA8cHJlIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG57YC8vIC4vYXBwLmpzXG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXBwbGljYXRpb24gfSBmcm9tICdleHQtcmVhY3QnO1xuXG5AQXBwbGljYXRpb24oe1xuICBzdG9yZXM6IFtcbiAgICByZXF1aXJlKCcuL3N0b3Jlcy9jYXJkcycpLFxuICBdLFxuICB2aWV3czogW1xuICAgIHJlcXVpcmUoJy4vY29tcG9uZW50cy92aWV3cG9ydC92aWV3cG9ydCcpLFxuICAgIHJlcXVpcmUoJy4vY29tcG9uZW50cy9jYXJkcycpLFxuICBdLFxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxWaWV3cG9ydCAvPlxuICB9XG59YH1cbiAgICAgIDwvcHJlPlxuICAgICAgPHByZSBjbGFzc05hbWU9XCJtYi1tZFwiPlxue2AvLyAuL3N0b3Jlcy9jYXJkXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ2V4dC1yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JlKHtcbiAgc3RvcmVJZDogJ0NhcmRTdG9yZScsXG4gIGZpZWxkczogWyAnTmFtZScgXSxcbiAgcHJveHk6IHtcbiAgICB1cmw6ICcvZGF0YS9jYXJkLmpzb24nXG4gIH1cbn0pYH1cbiAgICAgIDwvcHJlPlxuICAgICAgPHByZSBjbGFzc05hbWU9XCJtYi1tZFwiPlxue2AvLyAuL2NvbXBvbmVudHMvY2FyZHMuanNcbmltcG9ydCB7IFJvdXRlLCBDb21wb25lbnQgfSBmcm9tICdleHQtcmVhY3QnO1xuXG5AUm91dGUoJy9leGFtcGxlL2NhcmRzJylcbkBDb21wb25lbnQoe1xuICBzdG9yZXM6IFsgJ0NhcmRTdG9yZScgXSxcbiAgdmlldzogQ2FyZFZpZXdcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIHtcbiAgQGJpbmRcbiAgc2F2ZUNoYW5nZXMoKSB7XG4gICAgdGhpcy5zdG9yZXMuQ2FyZFN0b3JlLnN5bmMoe1xuICAgICAgZmFpbDogZXJyID0+IGNvbnNvbGUubG9nKGVycilcbiAgICB9KTtcbiAgfVxuXG4gIEBiaW5kXG4gIHJlamVjdENoYW5nZXMoKSB7XG4gICAgdGhpcy5zdG9yZXMuQ2FyZFN0b3JlLnJlamVjdENoYW5nZXMoKTtcbiAgfVxufWB9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwcmU+XG57YC8vIC4vY29tcG9uZW50cy9jYXJkcy52aWV3LmpzeFxuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnZXh0LXJlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZFZpZXcgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5zdG9yZXMuQ2FyZFN0b3JlLmxvYWQoKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge0NhcmRTdG9yZSB9ID0gdGhpcy5wcm9wcy5zdG9yZXM7XG4gICAgcmV0dXJuIDxHcmlkIHN0b3JlPXtDYXJkU3RvcmV9PlxuICAgICAgPGRpdiBoZWFkZXI9XCJJZFwiIGRhdGFJbmRleD1cIklkXCIgLz5cbiAgICAgIDxkaXYgaGVhZGVyPVwiTmFtZVwiIGRhdGFJbmRleD1cIk5hbWVcIiBlZGl0YWJsZSAvPlxuICAgICAgPGRpdiBoZWFkZXI9XCJUeXBlXCIgZGF0YUluZGV4PVwiVHlwZVwiIC8+XG4gICAgPC9HcmlkPlxuICB9XG59YH1cbiAgICAgIDwvcHJlPlxuICAgIDwvQ29udGFpbmVyPlxuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29udGFpbmVyIH0gZnJvbSAnfi9yZXh0JztcblxuQFJvdXRlKCcvY29yZS1jb25jZXB0cy9jb21wb25lbnQnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmV4dENvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxDb250YWluZXIgY2xhc3NOYW1lPVwibWFpbiBjb250YWluZXIgc2Nyb2xsYWJsZVwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLW1kXCI+Q29tcG9uZW50PC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG4gICAgICAgIEEgY29tcG9uZW50IGluIEV4dGVuc2lvbiBSZWFjdCBpcyB0aGUgY29tYmluYXRpb24gb2YgYSBSZWFjdCBDb21wb25lbnQgYW5kIGEgY29tcG9uZW50IGNsYXNzIHRoYXQgY29udHJvbHMgYSBwb3J0aW9uIG9mIHRoZSBzY3JlZW4uXG4gICAgICAgIEhlcmUgaXMgYW4gZXhhbXBsZSBvZiBhIGNvbXBvbmVudCB0aGF0IGRpc3BsYXkgYSBzaW1wbGUgc3RyaW5nOlxuICAgICAgPC9wPlxuICAgICAgPHByZSBjbGFzc05hbWU9XCJtYi1tZFwiPlxue2BpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2V4dC1yZWFjdCc7XG5cbmNsYXNzIERhc2hib2FyZFZpZXcgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8aDE+e3RoaXMucHJvcHMuJHZpZXcudGl0bGV9PC9oMT47XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHZpZXc6IERhc2hib2FyZFZpZXdcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRpdGxlID0gJ0Rhc2hib2FyZCc7XG4gIH1cbn1gfVxuICAgICAgPC9wcmU+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlxuICAgICAgICBFdmVyeSBjb21wb25lbnQgYmVnaW5zIHdpdGggYW4gPGNvZGU+QENvbXBvbmVudDwvY29kZT4gZGVjb3JhdG9yIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSA8ZW0+bWV0YWRhdGE8L2VtPiBvYmplY3QuXG4gICAgICAgIFRoZSBtZXRhZGF0YSBvYmplY3QgZGVzY3JpYmVzIGhvdyB0aGUgUmVhY3QgQ29tcG9uZW50IGFuZCBjb21wb25lbnQgY2xhc3Mgd29yayB0b2dldGhlci5cbiAgICAgICAgVGhhdCdzIG1lYW4geW91IGNhbiBhY2Nlc3MgYW55IHByb3BlcnR5IG9yIG1ldGhvZCBvZiBjb21wb25lbnQgY2xhc3MgdmlhIDxjb2RlPnRoaXMucHJvcHMuJHZpZXc8L2NvZGU+LlxuICAgICAgPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5cbiAgICAgICAgQWN0dWFsbHksIHdpdGggdGhlIGFib3ZlIGV4YW1wbGUsIGl0IGNhbiBiZSBpbXBsZW1lbnRlZCBsaWtlIHRoaXM6XG4gICAgICA8L3A+XG4gICAgICA8cHJlIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG57YGltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2V4dC1yZWFjdCc7XG5cbkBDb21wb25lbnQoe1xuICB2aWV3OiAoeyAkdmlldyB9KSA9PiA8aDE+eyR2aWV3LnRpdGxlfTwvaDE+XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFzaGJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50aXRsZSA9ICdEYXNoYm9hcmQnO1xuICB9XG59YH1cbiAgICAgIDwvcHJlPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5FeHRlbnNpb24gUmVhY3QgcHJvdmlkZSBhIG5ldyB3YXkgdG8gd29yayB3aXRoIHN0YXRlOjwvcD5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntgLy8gLi9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2gudmlldy5qc3hcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmV4dCBmcm9tICdleHRlbnNpb24tcmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hWaWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgUmV4dC5pbml0aWFsU3RhdGUodGhpcywge1xuICAgICAgbmFtZTogcHJvcHMubmFtZVxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB0aGlzLnNldE5hbWUobmV4dFByb3BzLm5hbWUpO1xuICB9XG4gIC4uLlxufWB9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwPlxuICAgICAgICBJbnN0ZWFkIG9mIHVzaW5nIDxjb2RlPntgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlLCBwcm9wcykgPT4gKHsgbmFtZTogcHJvcHMubmFtZSB9KSlgfTwvY29kZT4gdG8gdXBkYXRlIHRoZSBzdGF0ZSxcbiAgICAgICAgeW91IGNhbiB1c2UgPGNvZGU+dGhpcy5zZXROYW1lKHByb3BzLm5hbWUpPC9jb2RlPiB0byBtYWtlIGl0IGVhc2llciB0byB1bmRlcnN0YW5kIGFuZCBtb3JlIG5hdHVyYWwgYnkgdXNpbmcgPGNvZGU+UmV4dC5pbml0aWFsU3RhdGU8L2NvZGU+IGZ1bmN0aW9uIHRvIGRlY2xhcmUgdGhlIHN0YXRlIGluIGNvbnN0cnVjdG9yLlxuICAgICAgPC9wPlxuICAgIDwvQ29udGFpbmVyPlxuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29udGFpbmVyIH0gZnJvbSAnfi9yZXh0JztcblxuQFJvdXRlKCcvY29yZS1jb25jZXB0cy9kYXRhLXBhY2thZ2UnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YVBhY2thZ2UgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Q29udGFpbmVyIGNsYXNzTmFtZT1cIm1haW4gY29udGFpbmVyIHNjcm9sbGFibGVcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi1tZFwiPkRhdGEgUGFja2FnZTwvaDE+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlRoZSBkYXRhIHBhY2thZ2UgaXMgd2hhdCBsb2FkcyBhbmQgc2F2ZXMgYWxsIG9mIHRoZSBkYXRhIGluIHlvdXIgYXBwbGljYXRpb24uPC9wPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLW1kXCI+TW9kZWxzPC9oMz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+VGhlIGNlbnRlcnBpZWNlIG9mIHRoZSBkYXRhIHBhY2thZ2UgaXMgYE1vZGVsYCB3aGljaCByZXByZXNlbnRzIGFuIGVudGl0eSBpbiBhbiBhcHBsaWNhdGlvbi48L3A+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwibWItbWRcIj5TdG9yZXM8L2gzPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5UaGUgPGNvZGU+U3RvcmU8L2NvZGU+IGNsYXNzIGVuY2Fwc3VsYXRlcyBhIGNsaWVudCBzaWRlIGNhY2hlIG9mIDxjb2RlPk1vZGVsPC9jb2RlPiBvYmplY3RzLjwvcD5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntgaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdleHQtcmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JlKHtcbiAgc3RvcmVJZDogJ0NhcmRTdG9yZScsXG4gIHByb3h5OiB7XG4gICAgdXJsOiAnL2RhdGEvY2FyZC5qc29uJ1xuICB9XG59KWB9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG4gICAgICAgIEluIHRoZSBleGFtcGxlIGFib3ZlIHdlIGNvbmZpZ3VyZWQgYW4gQUpBWCBwcm94eSB0byBsb2FkIGRhdGEgZnJvbSB0aGUgdXJsIDxjb2RlPi9hcGkvdXNlci9zZWFyY2g8L2NvZGU+LlxuICAgICAgICBTdG9yZXMgbG9hZCBkYXRhIHZpYSA8Y29kZT5wcm94eTwvY29kZT4gd2l0aCB0aGlzIGZvbGxvd2luZyBzdHJ1Y3R1cmU6XG4gICAgICA8L3A+XG4gICAgICA8cHJlIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG57YHtcbiAgdXJsOiAgICAvKiBUaGUgVVJMIGZyb20gd2hpY2ggdG8gcmVxdWVzdCB0aGUgZGF0YSBvYmplY3QgKi8sXG4gIG1ldGhvZDogLyogVGhlIGRlZmF1bHQgSFRUUCBtZXRob2QgdG8gYmUgdXNlZCBmb3IgcmVxdWVzdHMuIElmIG5vdCBzZXQsIEdFVCB3aWxsIGJlIHVzZWQuICovXG4gIHBhcmFtczogLyogUmVxdWVzdCBwYXJhbWV0ZXJzIHNlbnQgYXMganNvbiBkYXRhICovXG4gIHJlYWRlcjogLyogVXNlIHRvIGRlY29kZSB0aGUgc2VydmVyJ3MgcmVzcG9uc2UgKi9cbn1gfVxuICAgICAgPC9wcmU+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlN0b3JlcyBjYW4gYWxzbyBsb2FkIGRhdGEgaW5saW5lLiBJbnRlcm5hbGx5LCBTdG9yZSBjb252ZXJ0cyBlYWNoIG9mIHRoZSBvYmplY3RzIHdlIHBhc3MgaW4gYXMgY2ZnLWRhdGEgaW50byBNb2RlbCBpbnN0YW5jZXM6PC9wPlxuICAgICAgPHByZSBjbGFzc05hbWU9XCJtYi1tZFwiPlxue2BpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ2V4dC1yZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgU3RvcmUoe1xuICBzdG9yZUlkOiAnVXNlclN0b3JlJyxcbiAgZGF0YTogW1xuICAgIHtmaXJzdE5hbWU6ICdQZXRlcicsICAgbGFzdE5hbWU6ICdWZW5rbWFuJ30sXG4gICAge2ZpcnN0TmFtZTogJ0Vnb24nLCAgICBsYXN0TmFtZTogJ1NwZW5nbGVyJ30sXG4gICAge2ZpcnN0TmFtZTogJ1JheScsICAgICBsYXN0TmFtZTogJ1N0YW50eid9LFxuICAgIHtmaXJzdE5hbWU6ICdXaW5zdG9uJywgbGFzdE5hbWU6ICdaZWRkZW1vcmUnfVxuICBdXG59KWB9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+Tm93LCBqdXN0IGJpbmQgYSBzdG9yZSB0byB0aGUgPGNvZGU+Q29tcG9uZW50PC9jb2RlPjo8L3A+XG4gICAgICA8cHJlIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG57YGltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhcmRTdG9yZSBmcm9tICd+L3N0b3Jlcy9jYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnJlbG9hZCA9ICgpID0+IHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIENhcmRTdG9yZS5jbGVhckRhdGEoKTtcbiAgICBDYXJkU3RvcmUubG9hZCgpO1xuICAgIENhcmRTdG9yZS5zdWJzY3JpYmUodGhpcy5yZWxvYWQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHJlY29yZHMgPSBDYXJkU3RvcmUuZ2V0RGF0YSgpO1xuICAgIHJldHVybiA8c2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJ4LWdyaWQtaGVhZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IHJ4LWdyaWQtaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicngtZ3JpZC1jb2x1bW4taGVhZGVyIHRleHQtc20tY2VudGVyXCIgc3R5bGU9e3t3aWR0aDonMjAlJ319PklEPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyeC1ncmlkLWNvbHVtbi1oZWFkZXIgdGV4dC1zbS1jZW50ZXJcIiBzdHlsZT17e3dpZHRoOicyMCUnfX0+TmFtZTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicngtZ3JpZC1jb2x1bW4taGVhZGVyIHRleHQtc20tY2VudGVyXCIgc3R5bGU9e3t3aWR0aDonMjAlJ319PlR5cGU8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ4LWdyaWQtY29sdW1uLWhlYWRlciB0ZXh0LXNtLWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6JzIwJSd9fT5Bcm1vcjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicngtZ3JpZC1jb2x1bW4taGVhZGVyIHRleHQtc20tY2VudGVyXCIgc3R5bGU9e3t3aWR0aDonMjAlJ319PldlYXBvbjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJ4LWdyaWQtYm9keVwiIHN0eWxlPXt7b3ZlcmZsb3c6J3Zpc2libGUnfX0+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJ4LWdyaWQtdmlld1wiPlxuICAgICAgICAgIHtyZWNvcmRzLm1hcChyZWNvcmQgPT4gPGFydGljbGUgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IHJ4LWdyaWQtcm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ4LWdyaWQtY2VsbFwiIHN0eWxlPXt7d2lkdGg6JzIwJSd9fT57cmVjb3JkLmdldCgnSWQnKX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicngtZ3JpZC1jZWxsXCIgc3R5bGU9e3t3aWR0aDonMjAlJ319PntyZWNvcmQuZ2V0KCdOYW1lJyl9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ4LWdyaWQtY2VsbFwiIHN0eWxlPXt7d2lkdGg6JzIwJSd9fT57cmVjb3JkLmdldCgnVHlwZScpfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyeC1ncmlkLWNlbGxcIiBzdHlsZT17e3dpZHRoOicyMCUnfX0+e3JlY29yZC5nZXQoJ0FybW9yVXNhYmxlJyl9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ4LWdyaWQtY2VsbFwiIHN0eWxlPXt7d2lkdGg6JzIwJSd9fT57cmVjb3JkLmdldCgnV2VhcG9uVXNhYmxlJyl9PC9kaXY+XG4gICAgICAgICAgPC9hcnRpY2xlPil9XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L3NlY3Rpb24+O1xuICB9XG59YH1cbiAgICAgIDwvcHJlPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5cbiAgICAgICAgSW4gdGhpcyBhYm92ZSBleGFtcGxlLCB3ZSB1c2UgPGNvZGU+c3Vic2NyaWJlPC9jb2RlPiB0byB1cGRhdGUgdGhlIGNvbXBvbmVudCB3aGVuZXZlciBkYXRhJ3MgY2hhbmdlZC5cbiAgICAgICAgQmVjYXVzZSBTdG9yZSBjb252ZXJ0IGRhdGEgdG8gTW9kZWwgdGhlbiB5b3UgbmVlZCB0byB1c2UgPGNvZGU+Z2V0PC9jb2RlPiB0byBhY2Nlc3MgZGF0YS5cbiAgICAgIDwvcD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIENvbnRhaW5lciB9IGZyb20gJ34vcmV4dCc7XG5cbkBSb3V0ZSgnL2NvcmUtY29uY2VwdHMvc2NyZWVuLW5hdmlnYXRpb24nKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NyZWVuTmF2aWdhdGlvbiBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxDb250YWluZXIgY2xhc3NOYW1lPVwibWFpbiBjb250YWluZXIgc2Nyb2xsYWJsZVwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLW1kXCI+U2NyZWVuIE5hdmlnYXRpb248L2gxPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG4gICAgICAgIDxsaT48c3Ryb25nPjxjb2RlPlJvdXRlPC9jb2RlPjwvc3Ryb25nPiBkZWNvcmF0b3IgaXMgbW9zdCBiYXNpYyByZXNwb25zaWJpbGl0eSBpcyB0byByZW5kZXIgVUkgd2hlbiBhIGxvY2F0aW9uIG1hdGNoZXMgdGhlIHJvdXRl4oCZcyBwYXRoLjwvbGk+XG4gICAgICAgIDxsaT48c3Ryb25nPjxjb2RlPkxpbms8L2NvZGU+PC9zdHJvbmc+IHByb3ZpZGVzIGRlY2xhcmF0aXZlLCBhY2Nlc3NpYmxlIG5hdmlnYXRpb24gYXJvdW5kIHlvdXIgYXBwbGljYXRpb24uPC9saT5cbiAgICAgICAgPGxpPjxzdHJvbmc+PGNvZGU+SGFzaFJvdXRlcjwvY29kZT48L3N0cm9uZz4gdXNlcyB0aGUgaGFzaCBwb3J0aW9uIG9mIHRoZSBVUkwgKGkuZS4gd2luZG93LmxvY2F0aW9uLmhhc2gpIHRvIGtlZXAgeW91ciBVSSBpbiBzeW5jIHdpdGggdGhlIFVSTC48L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntgLy8gLi9hcHAuanNcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBcHBsaWNhdGlvbiB9IGZyb20gJ2V4dC1yZWFjdCc7XG5pbXBvcnQgVmlld3BvcnQgZnJvbSAnLi9jb21wb25lbnRzL3ZpZXdwb3J0L3ZpZXdwb3J0JztcblxuQEFwcGxpY2F0aW9uKHtcbiAgdmlld3M6IFtcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvc2VhcmNoJyksXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2RldGFpbHMnKSxcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvbm90Zm91bmQnKSxcbiAgXSxcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Vmlld3BvcnQgLz5cbiAgfVxufWB9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntgLy8gLi9jb21wb25lbnRzL3ZpZXdwb3J0LmpzXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgSGFzaFJvdXRlciB9IGZyb20gJ2V4dC1yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZXdwb3J0KCkge1xuICByZXR1cm4gPHNlY3Rpb24+XG4gICAgPExpbmsgdG89XCIvXCI+RGFzaGJvYXJkPC9MaW5rPlxuICAgIDxMaW5rIHRvPVwiL3NlYXJjaFwiPlNlYXJjaDwvTGluaz5cbiAgICA8TGluayB0bz1cIi9kZXRhaWxzL2h1eW5ndXllblwiPkRldGFpbHM8L0xpbms+XG4gICAgPEhhc2hSb3V0ZXIgLz5cbiAgPC9zZWN0aW9uPlxufWB9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntgLy8gLi9jb21wb25lbnRzL3NlYXJjaC5qc1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBDb21wb25lbnQgfSBmcm9tICdleHQtcmVhY3QnO1xuXG5AUm91dGUoJy9zZWFyY2gnKVxuQENvbXBvbmVudCh7XG4gIHZpZXc6ICgpID0+IDxzZWN0aW9uIC8+XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoIHsgfWB9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntgLy8gLi9jb21wb25lbnRzL2RldGFpbHMuanNcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29tcG9uZW50IH0gZnJvbSAnZXh0LXJlYWN0JztcblxuQFJvdXRlKCcvZGV0YWlscy86bmFtZScpXG5AQ29tcG9uZW50KHtcbiAgdmlldzogKHsgcGFyYW1zIH0pID0+IDxoMT57cGFyYW1zLm5hbWV9PC9oMT5cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXRhaWxzIHsgfWB9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntgLy8gLi9jb21wb25lbnRzL25vdGZvdW5kLmpzXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAnZXh0LXJlYWN0JztcblxuQFJvdXRlKCcqJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdEZvdW5kIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGgxPid7dGhpcy5wcm9wcy5wYXJhbXMucm91dGV9JyBkb2Vzbid0IGV4aXN0PC9oMT5cbiAgfVxufWB9XG4gICAgICA8L3ByZT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIENvbXBvbmVudCwgYmluZCB9IGZyb20gJ34vcmV4dCc7XG5pbXBvcnQgQ2FyZFZpZXcgZnJvbSAnLi9jYXJkcy52aWV3JztcblxuQFJvdXRlKCcvZXhhbXBsZS9jYXJkcycpXG5AQ29tcG9uZW50KHtcbiAgc3RvcmVzOiBbICdDYXJkU3RvcmUnIF0sXG4gIHZpZXc6IENhcmRWaWV3XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCB7XG4gIEBiaW5kXG4gIHNhdmVDaGFuZ2VzKCkge1xuICAgIHRoaXMuc3RvcmVzLkNhcmRTdG9yZS5zeW5jKHtcbiAgICAgIGZhaWw6IGVyciA9PiBjb25zb2xlLmxvZyhlcnIpXG4gICAgfSk7XG4gIH1cblxuICBAYmluZFxuICByZWplY3RDaGFuZ2VzKCkge1xuICAgIHRoaXMuc3RvcmVzLkNhcmRTdG9yZS5yZWplY3RDaGFuZ2VzKCk7XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCwgQnV0dG9uIH0gZnJvbSAnfi9yZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZFZpZXcgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5zdG9yZXMuQ2FyZFN0b3JlLmxvYWQoKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdG9yZXM6IHsgQ2FyZFN0b3JlIH0sICR2aWV3OiB7IHNhdmVDaGFuZ2VzLCByZWplY3RDaGFuZ2VzIH0gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIDxDb250YWluZXIgY2xhc3NOYW1lPVwibWFpbiBjb250YWluZXJcIj5cbiAgICAgIDxHcmlkIHN0b3JlPXtDYXJkU3RvcmV9PlxuICAgICAgICA8ZGl2IGhlYWRlcj1cIklkXCIgZGF0YUluZGV4PVwiSWRcIiAvPlxuICAgICAgICA8ZGl2IGhlYWRlcj1cIk5hbWVcIiBkYXRhSW5kZXg9XCJOYW1lXCIgZWRpdGFibGUgLz5cbiAgICAgICAgPGRpdiBoZWFkZXI9XCJUeXBlXCIgZGF0YUluZGV4PVwiVHlwZVwiIC8+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LW1kXCI+XG4gICAgICAgIDxCdXR0b24gdGV4dD1cIlNhdmUgQ2hhbmdlc1wiIGNsYXNzTmFtZT1cIm1yLW1kXCIgb25DbGljaz17c2F2ZUNoYW5nZXN9IC8+XG4gICAgICAgIDxCdXR0b24gdGV4dD1cIlJlamVjdCBDaGFuZ2VzXCIgb25DbGljaz17cmVqZWN0Q2hhbmdlc30gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ29udGFpbmVyPlxuICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBDb21wb25lbnQgfSBmcm9tICd+L3JleHQnO1xuXG5AUm91dGUoJy9leGFtcGxlL2Rhc2hib2FyZCcpXG5AQ29tcG9uZW50KHtcbiAgdmlldzogKHsgJHZpZXcgfSkgPT4gPGgxPnskdmlldy50aXRsZX08L2gxPlxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhc2hib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGl0bGUgPSAnRGFzaGJvYXJkJztcbiAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29tcG9uZW50IH0gZnJvbSAnfi9yZXh0JztcblxuQFJvdXRlKCcvZXhhbXBsZS9kZXRhaWxzLzpuYW1lJylcbkBDb21wb25lbnQoe1xuICB2aWV3OiAoeyBwYXJhbXMgfSkgPT4gPGgxPntwYXJhbXMubmFtZX08L2gxPlxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERldGFpbHMgeyB9IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ34vcmV4dCc7XG5cbkBSb3V0ZSgnKicpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RGb3VuZCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxoMT4ne3RoaXMucHJvcHMucGFyYW1zLnJvdXRlfScgZG9lc24ndCBleGlzdDwvaDE+XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIENvbXBvbmVudCB9IGZyb20gJ34vcmV4dCc7XG5cbkBSb3V0ZSgnL2V4YW1wbGUvc2VhcmNoJylcbkBDb21wb25lbnQoe1xuICB2aWV3OiAoKSA9PiA8c2VjdGlvbiAvPlxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhc2hib2FyZCB7IH0iLCJpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ34vcmV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JlKHtcbiAgc3RvcmVJZDogJ0NhcmRTdG9yZScsXG4gIGZpZWxkczogWyAnTmFtZScgXSxcbiAgcHJveHk6IHtcbiAgICB1cmw6ICcvZGF0YS9jYXJkLmpzb24nXG4gIH1cbn0pIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29udGFpbmVyIH0gZnJvbSAnfi9yZXh0JztcblxuQFJvdXRlKCcvJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdldHRpbmdTdGFydGVkIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPENvbnRhaW5lciBjbGFzc05hbWU9XCJtYWluIGNvbnRhaW5lciBzY3JvbGxhYmxlXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwibWItbWRcIj5HZXR0aW5nIFN0YXJ0ZWQ8L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5cbiAgICAgICAgRXh0ZW5zaW9uIFJlYWN0IGlzIGEgbGlicmFyeSB0aGF0IGJ1aWxkIG9uIHRvcCBvZiBSZWFjdCwgaGVscGluZyB5b3UgYnVpbGQgZGF0YS1pbnRlbnNpdmUsIGNyb3NzLXBsYXRmb3JtIHdlYiBhcHBzIGZvciBkZXNrdG9wcywgdGFibGV0cywgYW5kIHNtYXJ0cGhvbmVzLlxuICAgICAgPC9wPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLW1kXCI+UXVpY2sgU3RhcnQ8L2gyPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLW1kXCI+MS4gU2V0dXAgYSBkZXZlbG9wbWVudCBlbnZpcm9tZW50PC9oMz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+VXNlIDxjb2RlPm5wbTwvY29kZT4gb3IgPGNvZGU+eWFybjwvY29kZT4gdG8gaW5zdGFsbCBmb2xsb3dpbmcgZGVwZW5kZW5jaWVzOjwvcD5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtYi1tZFwiPlxuICAgICAgICA8bGk+PGNvZGU+YmFiZWwtcG9seWZpbGw8L2NvZGU+PC9saT5cbiAgICAgICAgPGxpPjxjb2RlPmJhYmVsLXByZXNldC1lbnY8L2NvZGU+PC9saT5cbiAgICAgICAgPGxpPjxjb2RlPmJhYmVsLXByZXNldC1yZWFjdDwvY29kZT48L2xpPlxuICAgICAgICA8bGk+PGNvZGU+ZDM8L2NvZGU+PC9saT5cbiAgICAgICAgPGxpPjxjb2RlPnJlYWN0PC9jb2RlPjwvbGk+XG4gICAgICAgIDxsaT48Y29kZT5yZWFjdC1kb208L2NvZGU+PC9saT5cbiAgICAgICAgPGxpPjxjb2RlPnJ4anM8L2NvZGU+PC9saT5cbiAgICAgICAgPGxpPjxjb2RlPmV4dC1yZWFjdDwvY29kZT48L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi1tZFwiPjIuIENyZWF0ZSBhIG5ldyBwcm9qZWN0PC9oMz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+VGhlIGZvbGxvd2luZyBpcyB0aGUgcmVjb21tZW5kZWQgZGlyZWN0b3J5IHN0cnVjdHVyZSBmb3IgYW4gRXh0ZW5zaW9uIFJlYWN0IGFwcGxpY2F0aW9uOjwvcD5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbiAgICAgICAgKy0tIG5vZGVfbW9kdWxlczogTlBNIGNvbXBvbmVudHM8YnIgLz5cbiAgICAgICAgKy0tIGRpc3Q8YnIgLz5cbiAgICAgICAgfCAgICstLSBhcHAubWluLmNzczxiciAvPlxuICAgICAgICB8ICAgKy0tIGFwcC5taW4uanM8YnIgLz5cbiAgICAgICAgfCAgICstLSBmcmFtZXdvcmsubWluLmpzPGJyIC8+XG4gICAgICAgICstLSBzcmM8YnIgLz5cbiAgICAgICAgfCAgICstLSBjc3M8YnIgLz5cbiAgICAgICAgfCAgIHwgICArLS0gX3ZhcmlhYmxlcy5zY3NzOiBhcHBsaWNhdGlvbiBzdHlsZXMgY29uc3RhbnQgdmFsdWVzPGJyIC8+XG4gICAgICAgIHwgICB8ICAgKy0tIGFwcC5zY3NzOiBhcHBsaWNhdGlvbiBzdHlsZXM8YnIgLz5cbiAgICAgICAgfCAgICstLSBqczxiciAvPlxuICAgICAgICB8ICAgfCAgICstLSBjb21tb246IGNvZGUgb2Ygc2hhcmVkIGZ1bmN0aW9ucyBvciBzaGFyZWQgY29tcG9uZW50czxiciAvPlxuICAgICAgICB8ICAgfCAgICstLSBjb21wb25lbnRzOiBjb2RlIChzY3JpcHRzIGFuZCB2aWV3cykgb2YgZXZlcnkgZmVhdHVyZSBzaG91bGQgYmUgYSBzdWItZGlyZWN0b3J5PGJyIC8+XG4gICAgICAgIHwgICB8ICAgKy0tIHNlcnZpY2VzOiBjb2RlIG9mIHNlcnZpY2VzPGJyIC8+XG4gICAgICAgIHwgICB8ICAgKy0tIHN0b3JlczogY29kZSBvZiBzdG9yZXM8YnIgLz5cbiAgICAgICAgfCAgIHwgICArLS0gYXBwLmpzOiBtYWluIHNjcmlwdDxiciAvPlxuICAgICAgICArLS0gZ3VscGZpbGUuYmFiZWwuanM6IGJ1aWxkIHNjcmlwdHMgKG9yIHdlYnBhY2suY29uZmlnLmpzIGlmIHlvdSBwcmVmZXIpPGJyIC8+XG4gICAgICAgICstLSBpbmRleC5odG1sPGJyIC8+XG4gICAgICAgICstLSBwYWNrYWdlLmpzb246IE5QTSBwYWNrYWdlIGRlZmluaXRpb248YnIgLz5cbiAgICAgICAgKy0tIHNlcnZlci5qczogY29kZSBvZiBsb2NhbCB3ZWIgc2VydmVyIChFeHByZXNzSlMpPGJyIC8+XG4gICAgICA8L3ByZT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+TGV04oCZcyBzdGFydCBldmFsdWF0aW5nIHRoZSBhcHBsaWNhdGlvbiBieSBsb29raW5nIGF0IDxjb2RlPmluZGV4Lmh0bWw8L2NvZGU+PC9wPlxuICAgICAgPHByZSBjbGFzc05hbWU9XCJtYi1tZFwiPlxue2A8IS0tIGluZGV4Lmh0bWwgLS0+XG48IURPQ1RZUEUgaHRtbD5cbjxodG1sPlxuPGhlYWQ+XG48bWV0YSBjaGFyc2V0PVwidXRmLThcIiAvPlxuPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuPHRpdGxlPkV4dGVuc2lvbiBSZWFjdCBBcHBsaWNhdGlvbjwvdGl0bGU+XG48bGluayBocmVmPVwiL25vZGUtbW9kdWxlcy9leHQtcmVhY3QvY3NzL3JleHQubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuPC9oZWFkPlxuPGJvZHk+XG48c2NyaXB0IHNyYz1cImFwcC5qc1wiPjwvc2NyaXB0PlxuPC9ib2R5PlxuPC9odG1sPmB9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+VG8gbGF1bmNoIHlvdXIgYXBwLCBhZGQgdGhlIGZvbGxvd2luZyB0byB5b3VyIDxjb2RlPmFwcC5qczwvY29kZT4gZmlsZTwvcD5cbiAgICAgIDxwcmU+XG57YC8vIC4vYXBwLmpzXG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXBwbGljYXRpb24gfSBmcm9tICdleHQtcmVhY3QnO1xuaW1wb3J0IFZpZXdwb3J0IGZyb20gJy4vY29tcG9uZW50cy92aWV3cG9ydC92aWV3cG9ydCc7XG5cbkBBcHBsaWNhdGlvbigpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Vmlld3BvcnQgLz5cbiAgfVxufWB9XG4gICAgICA8L3ByZT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIsIEhhc2hSb3V0ZXIsIExpbmsgfSBmcm9tICd+L3JleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWV3cG9ydCgpIHtcbiAgcmV0dXJuIDxDb250YWluZXI+XG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJjb250YWluZXJcIj48aDE+RXh0ZW5zaW9uIFJlYWN0PC9oMT48L2hlYWRlcj5cbiAgICA8Q29udGFpbmVyIGxheW91dD1cImNvbHVtblwiPlxuICAgICAgPGFzaWRlIHN0eWxlPXt7d2lkdGg6MzAwfX0+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXIgbmF2XCI+XG4gICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL1wiIHRleHQ9XCJHRVRUSU5HIFNUQVJURURcIiAvPjwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LXRleHRcIj5DT1JFIENPTkNFUFRTPC9zcGFuPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+PExpbmsgdG89XCIvY29yZS1jb25jZXB0cy9jb21wb25lbnRcIiB0ZXh0PVwiQ29tcG9uZW50XCIgLz48L2xpPlxuICAgICAgICAgICAgICA8bGk+PExpbmsgdG89XCIvY29yZS1jb25jZXB0cy9zY3JlZW4tbmF2aWdhdGlvblwiIHRleHQ9XCJTY3JlZW4gTmF2aWdhdGlvblwiIC8+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL2NvcmUtY29uY2VwdHMvZGF0YS1wYWNrYWdlXCIgdGV4dD1cIkRhdGEgUGFja2FnZVwiIC8+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+PExpbmsgdG89XCIvYXJjaGl0ZWN0dXJlXCIgdGV4dD1cIkFSQ0hJVEVDVFVSRVwiIC8+PC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtdGV4dFwiPlVJIENPTVBPTkVOVFM8L3NwYW4+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT48TGluayB0bz1cIi91aS1jb21wb25lbnRzL2dyaWRzXCIgdGV4dD1cIkdyaWRzXCIgLz48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9hc2lkZT5cbiAgICAgIDxDb250YWluZXI+PEhhc2hSb3V0ZXIgLz48L0NvbnRhaW5lcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPjxwPiZjb3B5OyAyMDE3IGh1eXRyb25nbmd1eWVuPC9wPjwvZm9vdGVyPlxuICA8L0NvbnRhaW5lcj5cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBFeHQgZnJvbSAnfi9jb3JlL2V4dCc7XG5pbXBvcnQgU3RvcmVNYW5hZ2VyIGZyb20gJ34vZGF0YS9zdG9yZS1tYW5hZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnID0+IFZpZXdwb3J0ID0+IHtcbiAgKGNvbmZpZyAmJiBjb25maWcuc3RvcmVzKSAmJiBFeHQuTGlzdChjb25maWcuc3RvcmVzKS5lYWNoKHN0b3JlID0+IHtcbiAgICBzdG9yZSA9IHN0b3JlLmRlZmF1bHQ7XG4gICAgU3RvcmVNYW5hZ2VyLnNldChzdG9yZS5zdG9yZUlkLCBzdG9yZSk7XG4gIH0pO1xuICBjb25zdCByb290ID0gRXh0LmNyZWF0ZUVsZW1lbnQoJzxkaXYgaWQ9XCJyZWFjdC1yb290XCI+PC9kaXY+Jyk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocm9vdCk7XG4gIHJlbmRlcig8Vmlld3BvcnQgLz4sIHJvb3QpO1xufSIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEV4dCBmcm9tICd+L2NvcmUvZXh0JztcbmltcG9ydCBTdG9yZU1hbmFnZXIgZnJvbSAnfi9kYXRhL3N0b3JlLW1hbmFnZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWcgPT4gQ29udHJvbGxlciA9PiB7XG4gIGNvbnN0IFdyYXBwZWRDb21wb25lbnQgPSBjb25maWcudmlldztcblxuICByZXR1cm4gY2xhc3MgSG9jQ29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIGNvbnN0IHN0b3JlcyA9IEV4dC5MaXN0KGNvbmZpZy5zdG9yZXMpLnJlZHVjZSgoc3RvcmVzLCBzdG9yZUlkKSA9PiB7XG4gICAgICAgICAgICAgIHN0b3Jlc1tzdG9yZUlkXSA9IFN0b3JlTWFuYWdlci5nZXQoc3RvcmVJZCk7XG4gICAgICAgICAgICAgIHJldHVybiBzdG9yZXM7XG4gICAgICAgICAgICB9LCB7fSksXG4gICAgICAgICAgICBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIocHJvcHMpO1xuXG4gICAgICBjb250cm9sbGVyLnN0b3JlcyA9IHN0b3JlcztcblxuICAgICAgRXh0LmluaXRpYWxTdGF0ZSh0aGlzLCB7XG4gICAgICAgIHN0b3JlcyxcbiAgICAgICAgW2NvbmZpZy5jb21wb25lbnRBcyB8fCAnJHZpZXcnXTogY29udHJvbGxlclxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBFeHQuTWFwKHRoaXMuc3RhdGUuc3RvcmVzKS52YWx1ZXMoKS5lYWNoKHN0b3JlID0+IHtcbiAgICAgICAgaWYgKHN0b3JlLmF1dG9Mb2FkKSB7XG4gICAgICAgICAgc3RvcmUubG9hZCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gPFdyYXBwZWRDb21wb25lbnQgey4uLnRoaXMuc3RhdGV9IHsuLi50aGlzLnByb3BzfSAvPjtcbiAgICB9XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGF6eiA9PiB7XG4gIGNvbnN0IHNlcnZpY2UgPSBuZXcgY2xhenooKTtcbiAgc2VydmljZS5zZXJ2aWNlSWQgPSBjbGF6ei5uYW1lO1xuICByZXR1cm4gc2VydmljZTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEV4dCBmcm9tICd+L2NvcmUvZXh0JztcblxuY29uc3QgTEFZT1VUX0NMQVNTID0ge1xuICAnY29sdW1uJzogJ2ZsZXgtcm93JyxcbiAgJ3Jvdyc6ICdmbGV4LWNvbHVtbicsXG4gICdmaXQnOiAnJyxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENvbnRhaW5lcih7IGNsYXNzTmFtZSA9ICcnLCBsYXlvdXQgPSAncm93JywgY2hpbGRyZW4sIC4uLm90aGVycyB9KSB7XG4gIHJldHVybiA8c2VjdGlvbiBjbGFzc05hbWU9e0V4dC5jbGFzc05hbWUoJ2QtZmxleCcsIExBWU9VVF9DTEFTU1tsYXlvdXRdLCBjbGFzc05hbWUpfSB7Li4ub3RoZXJzfT57Y2hpbGRyZW59PC9zZWN0aW9uPlxufSIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyLCB1bm1vdW50Q29tcG9uZW50QXROb2RlLCBmaW5kRE9NTm9kZSB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgRXh0LCB7IGJpbmQgfSBmcm9tICd+L2NvcmUvZXh0JztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ34vY29tcG9uZW50cy9jb250YWluZXInO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnfi9jb21wb25lbnRzL2Zvcm0nO1xuXG5jbGFzcyBEaWFsb2dNYW5hZ2VyIHtcbiAgc2hvdyhkaWFsb2cpIHtcbiAgICBjb25zdCBsYXllciA9IEV4dC5jcmVhdGVFbGVtZW50KCc8ZGl2IGNsYXNzPVwibWFza1wiPjwvZGl2PicpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGF5ZXIpO1xuICAgIHJlbmRlcihkaWFsb2csIGxheWVyKTtcbiAgfVxuXG4gIHRvYXN0KHsgZGVsYXkgPSAzMDAwLCAuLi5vdGhlcnMgfSkge1xuICAgIC8vIGlmIChFeHQuZ2V0RWxlbWVudCgnLm5vdGlmaWNhdGlvbicpLmlzRW1wdHkoKSkge1xuICAgICAgY29uc3QgbGF5ZXIgPSBFeHQuY3JlYXRlRWxlbWVudCgnPGRpdiBjbGFzcz1cIm5vdGlmaWNhdGlvblwiPjwvZGl2PicpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsYXllcik7XG4gICAgICByZW5kZXIoPFRvYXN0IHsuLi5vdGhlcnN9IC8+LCBsYXllcik7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsYXllcik7XG4gICAgICB9LCBkZWxheSk7XG4gICAgLy8gfVxuICB9XG5cbiAgbXNnYm94KHsgLi4ub3RoZXJzIH0pIHtcbiAgICAvLyBpZiAoRXh0LmdldEVsZW1lbnQoJy5tc2dib3gnKS5pc0VtcHR5KCkpIHtcbiAgICAgIGNvbnN0IGxheWVyID0gRXh0LmNyZWF0ZUVsZW1lbnQoJzxkaXYgY2xhc3M9XCJtYXNrXCI+PC9kaXY+Jyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxheWVyKTtcbiAgICAgIHJlbmRlcig8TXNnQm94IHsuLi5vdGhlcnN9IC8+LCBsYXllcik7XG4gICAgLy8gfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBEaWFsb2dNYW5hZ2VyKCk7XG5cbmV4cG9ydCBjbGFzcyBEaWFsb2cgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGl0bGUgPSAnRGlhbG9nJywgY2xhc3NOYW1lID0gJycsIGNsb3NlQnV0dG9uID0gdHJ1ZSwgY2hpbGRyZW4sIC4uLm90aGVycyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gPENvbnRhaW5lciBsYXlvdXQ9XCJyb3dcIiBjbGFzc05hbWU9e0V4dC5jbGFzc05hbWUoJ2RpYWxvZycsIGNsYXNzTmFtZSl9IHsuLi5vdGhlcnN9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2ctaGVhZGVyXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImRpYWxvZy10aXRsZSB0ZXh0LWNlbnRlclwiPnt0aXRsZX08L3A+XG4gICAgICAgIHtjbG9zZUJ1dHRvbiAmJiA8c3BhbiBjbGFzc05hbWU9XCJ0b29sXCIgb25DbGljaz17dGhpcy5kaXNwb3NlfT48L3NwYW4+fVxuICAgICAgPC9kaXY+XG4gICAgICA8Q29udGFpbmVyIGxheW91dD1cInJvd1wiIGNsYXNzTmFtZT1cImRpYWxvZy1ib2R5XCI+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQ29udGFpbmVyPjtcbiAgfVxuXG4gIEBiaW5kXG4gIGRpc3Bvc2UoKSB7XG4gICAgY29uc3QgeyBvbkNsb3NlIH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHBhcmVudCA9IGZpbmRET01Ob2RlKHRoaXMpLnBhcmVudEVsZW1lbnQ7XG4gICAgb25DbG9zZSAmJiBvbkNsb3NlKCk7XG4gICAgdW5tb3VudENvbXBvbmVudEF0Tm9kZShwYXJlbnQpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQocGFyZW50KTtcbiAgfVxufVxuXG5jb25zdCBBTEVSVF9UWVBFID0ge1xuICBzdWNjZXNzOiB7IHRpdGxlOiAnU3VjY2VzcycsIGljb246ICdjaGVjaycgfSxcbiAgZXJyb3I6IHsgdGl0bGU6ICdFcnJvcicsIGljb246ICd0aW1lcycgfSxcbiAgd2FybmluZzogeyB0aXRsZTogJ1dhcm5pbmcnLCBpY29uOiAnZXhjbGFtYXRpb24nIH0sXG4gIGluZm86IHsgdGl0bGU6ICdJbmZvcm1hdGlvbicsIGljb246ICdpbmZvJyB9LFxufTtcblxuY2xhc3MgVG9hc3QgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdHlwZSwgbWVzc2FnZSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gPENvbnRhaW5lciBsYXlvdXQ9XCJyb3dcIj5cbiAgICAgIDxoND57QUxFUlRfVFlQRVt0eXBlXS50aXRsZX08L2g0PlxuICAgICAgPENvbnRhaW5lciBsYXlvdXQ9XCJjb2x1bW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2FzdC1pY29uXCI+PGkgY2xhc3NOYW1lPXtgZmEgZmEtMnggZmEtJHtBTEVSVF9UWVBFW3R5cGVdLmljb259LWNpcmNsZWB9PjwvaT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2FzdC1jb250ZW50XCI+e21lc3NhZ2V9PC9kaXY+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0NvbnRhaW5lcj47XG4gIH1cblxuICBAYmluZFxuICBkaXNwb3NlKCkge1xuICAgIGNvbnN0IHBhcmVudCA9IGZpbmRET01Ob2RlKHRoaXMpLnBhcmVudEVsZW1lbnQ7XG4gICAgdW5tb3VudENvbXBvbmVudEF0Tm9kZShwYXJlbnQpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQocGFyZW50KTtcbiAgfVxufVxuXG5cbmNsYXNzIE1zZ0JveCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aXRsZSwgaWNvbiwgbWVzc2FnZSwgYnV0dG9ucyA9ICdPSycsIGJ1dHRvblRleHQgPSB7fSwgZm4gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIDxEaWFsb2cgdGl0bGU9e3RpdGxlfSBjbG9zZUJ1dHRvbj17ZmFsc2V9IGNsYXNzTmFtZT1cIm1zZ2JveFwiPlxuICAgICAgPENvbnRhaW5lciBsYXlvdXQ9XCJyb3dcIj5cbiAgICAgICAgeyFpY29uICYmIDxDb250YWluZXIgbGF5b3V0PVwiZml0XCI+e21lc3NhZ2V9PC9Db250YWluZXI+fVxuICAgICAgICB7aWNvbiAmJiA8Q29udGFpbmVyIGxheW91dD1cImNvbHVtblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9hc3QtaWNvbiBtci1zbVwiPjxpIGNsYXNzTmFtZT17YGZhIGZhLTJ4IGZhLSR7aWNvbn0tY2lyY2xlYH0+PC9pPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9hc3QtY29udGVudFwiPnttZXNzYWdlfTwvZGl2PlxuICAgICAgICA8L0NvbnRhaW5lcj59XG4gICAgICAgIHsoYnV0dG9ucyA9PT0gJ09LQ0FOQ0VMJykgJiYgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtbWRcIj5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm1yLXNtXCIgb25DbGljaz17KCkgPT4gdGhpcy5kaXNwb3NlKCl9PntidXR0b25UZXh0LmNhbmNlbCB8fCAnQ2FuY2VsJ308L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHt0aGlzLmRpc3Bvc2UoKTsgZm4gJiYgZm4oKTt9fT57YnV0dG9uVGV4dC5vayB8fCAnT0snfTwvQnV0dG9uPlxuICAgICAgICA8L3NlY3Rpb24+fVxuICAgICAgICB7KGJ1dHRvbnMgPT09ICdPSycpICYmIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LXNtXCI+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7dGhpcy5kaXNwb3NlKCk7IGZuICYmIGZuKCk7fX0+e2J1dHRvblRleHQub2sgfHwgJ09LJ308L0J1dHRvbj5cbiAgICAgICAgPC9zZWN0aW9uPn1cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvRGlhbG9nPjtcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgY29uc3QgcGFyZW50ID0gZmluZERPTU5vZGUodGhpcykucGFyZW50RWxlbWVudDtcbiAgICB1bm1vdW50Q29tcG9uZW50QXROb2RlKHBhcmVudCk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChwYXJlbnQpO1xuICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBFeHQgZnJvbSAnfi9jb3JlL2V4dCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBCdXR0b24oeyBjbGFzc05hbWUgPSAnJywgdGV4dCwgY2hpbGRyZW4sIC4uLm90aGVycyB9KSB7XG4gIHJldHVybiA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e0V4dC5jbGFzc05hbWUoJ2J0bicsIGNsYXNzTmFtZSl9IHsuLi5vdGhlcnN9PlxuICAgIHt0ZXh0IHx8IGNoaWxkcmVufVxuICA8L2J1dHRvbj47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBCdXR0b25MaW5rKHsgdGV4dCwgY2hpbGRyZW4sIC4uLm90aGVycyB9KSB7XG4gIHJldHVybiA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgey4uLm90aGVyc30+e3RleHQgfHwgY2hpbGRyZW59PC9hPlxufVxuXG5leHBvcnQgZnVuY3Rpb24gRmllbGQoeyB0eXBlID0gJ3RleHQnLCBpbmxpbmUgPSBmYWxzZSwgbGFiZWwgPSAnJywgbGFiZWxXaWR0aCA9IDMsIHZhbHVlLCBvbkNoYW5nZSwgLi4ub3RoZXJzIH0pIHtcbiAgcmV0dXJuIDxhcnRpY2xlIGNsYXNzTmFtZT17RXh0LmNsYXNzTmFtZSgnZm9ybS1ncm91cCcsIHsgJ3Jvdyc6IGlubGluZSB9KX0+XG4gIDxsYWJlbCBjbGFzc05hbWU9e0V4dC5jbGFzc05hbWUoeyBbYGNvbC1zbS0ke2xhYmVsV2lkdGh9IHRleHQtc20tcmlnaHRgXTogaW5saW5lIH0pfT57bGFiZWx9PC9sYWJlbD5cbiAgPGRpdiBjbGFzc05hbWU9e0V4dC5jbGFzc05hbWUoeyBbYGNvbC1zbS0kezEyIC0gbGFiZWxXaWR0aH1gXTogaW5saW5lIH0pfT5cbiAgICB7KHR5cGUgPT09ICd0ZXh0JykgJiYgPFRleHRGaWVsZCB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gey4uLm90aGVyc30gLz59XG4gICAgeyh0eXBlID09PSAnY2hlY2tib3gnKSAmJiA8Q2hlY2tib3ggdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17b25DaGFuZ2V9IHsuLi5vdGhlcnN9IC8+fVxuICAgIHsodHlwZSA9PT0gJ3RleHRhcmVhJykgJiYgPFRleHRBcmVhIHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e29uQ2hhbmdlfSB7Li4ub3RoZXJzfSAvPn1cbiAgPC9kaXY+XG48L2FydGljbGU+XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUZXh0RmllbGQoeyB2YWx1ZSA9ICcnLCBjbGFzc05hbWUgPSAnJywgb25DaGFuZ2UsIC4uLm90aGVycyB9KSB7XG4gIHJldHVybiA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9e0V4dC5jbGFzc05hbWUoJ2Zvcm0tY29udHJvbCcsIGNsYXNzTmFtZSl9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZSAmJiBvbkNoYW5nZShlLnRhcmdldC52YWx1ZSl9IHsuLi5vdGhlcnN9IC8+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2hlY2tib3goeyB2YWx1ZSA9IGZhbHNlLCBvbkNoYW5nZSwgLi4ub3RoZXJzIH0pIHtcbiAgcmV0dXJuIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXt2YWx1ZX0gb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlKCF2YWx1ZSl9IHsuLi5vdGhlcnN9IC8+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVGV4dEFyZWEoeyByb3dzID0gJzMnLCB2YWx1ZSA9ICcnLCBjbGFzc05hbWUgPSAnJywgb25DaGFuZ2UsIC4uLm90aGVycyB9KSB7XG4gIHJldHVybiA8dGV4dGFyZWEgcm93cz17cm93c30gY2xhc3NOYW1lPXtFeHQuY2xhc3NOYW1lKCdmb3JtLWNvbnRyb2wnLCBjbGFzc05hbWUpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlICYmIG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX0gey4uLm90aGVyc30gLz47XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ34vY29tcG9uZW50cy9jb250YWluZXInO1xuaW1wb3J0IEdyaWRSb3cgZnJvbSAnLi9yb3cnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHcmlkQm9keSh7IG91dGVyV2lkdGgsIGJvZHlXaWR0aCwgY29sdW1ucyA9IFtdLCBzdG9yZSwgLi4ub3RoZXJzIH0pIHtcbiAgcmV0dXJuIDxDb250YWluZXIgbGF5b3V0PVwicm93XCIgY2xhc3NOYW1lPVwicngtZ3JpZC1ib2R5XCIgc3R5bGU9e3t3aWR0aDpvdXRlcldpZHRofX0+XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicngtZ3JpZC12aWV3XCIgc3R5bGU9e3t3aWR0aDpib2R5V2lkdGh9fT5cbiAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6MX19IC8+XG4gICAgICB7c3RvcmUuZ2V0UmVjb3JkcygpLm1hcCgocmVjb3JkLCByb3dJbmRleCkgPT4gPEdyaWRSb3cgY29sdW1ucz17Y29sdW1uc30gcmVjb3JkPXtyZWNvcmR9IHJvd0luZGV4PXtyb3dJbmRleH0gey4uLm90aGVyc30gLz4pfVxuICAgIDwvc2VjdGlvbj5cbiAgPC9Db250YWluZXI+XG59IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRXh0LCB7IGJpbmQgfSBmcm9tICd+L2NvcmUvZXh0JztcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gJ34vY29tcG9uZW50cy9mb3JtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZENlbGwgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgeyBkYXRhSW5kZXgsIHJlY29yZCB9ID0gcHJvcHM7XG4gICAgRXh0LmluaXRpYWxTdGF0ZSh0aGlzLCB7XG4gICAgICB2YWx1ZTogZGF0YUluZGV4ID8gcmVjb3JkLmdldChkYXRhSW5kZXgpIDogJycsXG4gICAgICByZWFkT25seTogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyh7IGRhdGFJbmRleCwgcmVjb3JkIH0pIHtcbiAgICB0aGlzLnNldFZhbHVlKGRhdGFJbmRleCA/IHJlY29yZC5nZXQoZGF0YUluZGV4KSA6ICcnKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHZhbHVlLCByZWFkT25seSB9ID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICB7IGVkaXRhYmxlLCBub01hcmtEaXJ0eSwgY2xhc3NOYW1lID0gJycsIHJlbmRlciA9IHZhbHVlID0+IHZhbHVlLCByZWNvcmQsIGRhdGFJbmRleCwgcm93SW5kZXgsIC4uLm90aGVycyB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjbHMgPSBFeHQuY2xhc3NOYW1lKCdyeC1ncmlkLWNlbGwnLCBjbGFzc05hbWUsIHsnbW9kaWZpZWQnOiAhbm9NYXJrRGlydHkgJiYgZGF0YUluZGV4ICYmIChyZWNvcmQuaXNNb2RpZmllZChkYXRhSW5kZXgpKX0pO1xuXG4gICAgaWYgKCFlZGl0YWJsZSkge1xuICAgICAgcmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xzfSBzdHlsZT17e2ZsZXg6MX19IHsuLi5vdGhlcnN9PlxuICAgICAgICB7cmVuZGVyKHZhbHVlLCByZWNvcmQsIGRhdGFJbmRleCwgcm93SW5kZXgpfVxuICAgICAgPC9zZWN0aW9uPlxuICAgIH1cbiAgICBpZiAocmVhZE9ubHkpIHtcbiAgICAgIHJldHVybiA8c2VjdGlvbiBjbGFzc05hbWU9e2Nsc30gc3R5bGU9e3tmbGV4OjF9fSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFJlYWRPbmx5KGZhbHNlKX0gey4uLm90aGVyc30+XG4gICAgICAgIHtyZW5kZXIodmFsdWUsIHJlY29yZCwgZGF0YUluZGV4LCByb3dJbmRleCl9XG4gICAgICA8L3NlY3Rpb24+XG4gICAgfVxuICAgIHJldHVybiA8c2VjdGlvbiBjbGFzc05hbWU9e2Nsc30gc3R5bGU9e3tmbGV4OjF9fSB7Li4ub3RoZXJzfT5cbiAgICAgIDxUZXh0RmllbGQgdmFsdWU9e3ZhbHVlfSBhdXRvRm9jdXMgb25DaGFuZ2U9e3RoaXMuc2V0VmFsdWV9IG9uQmx1cj17dGhpcy5hZnRlckVkaXR9IC8+XG4gICAgPC9zZWN0aW9uPlxuICB9XG5cbiAgQGJpbmRcbiAgYWZ0ZXJFZGl0KCkge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgeyByZWNvcmQsIGRhdGFJbmRleCB9ID0gdGhpcy5wcm9wcztcbiAgICByZWNvcmQuc2V0KGRhdGFJbmRleCwgdmFsdWUpO1xuICAgIHRoaXMuc2V0UmVhZE9ubHkodHJ1ZSk7XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCBFeHQsIHsgYmluZCB9IGZyb20gJ34vY29yZS9leHQnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnfi9jb21wb25lbnRzL2NvbnRhaW5lcic7XG5pbXBvcnQgR3JpZEhlYWRlciBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgR3JpZEJvZHkgZnJvbSAnLi9ib2R5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBFeHQuaW5pdGlhbFN0YXRlKHRoaXMsIHtcbiAgICAgIG91dGVyV2lkdGg6IDAsXG4gICAgICBoZWFkZXJXaWR0aDogMCxcbiAgICAgIGJvZHlXaWR0aDogMCxcbiAgICAgIGNoZWNrQ29sdW1uOiBwcm9wcy5jaGVja0NvbHVtbixcbiAgICAgIGNvbHVtbnM6IEV4dC5MaXN0KFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkocHJvcHMuY2hpbGRyZW4pKS5tYXAoY2hpbGQgPT4gY2hpbGQucHJvcHMpLmNvbGxlY3QoKSxcbiAgICB9KTtcbiAgICB0aGlzLm9uRGF0YUNoYW5nZSA9ICgpID0+IHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucmVzaXplR3JpZCgpO1xuICAgIHRoaXMucHJvcHMuc3RvcmUuc3Vic2NyaWJlKHRoaXMub25EYXRhQ2hhbmdlKTtcbiAgICB0aGlzLnJlc2l6ZUV2ZW50ID0gT2JzZXJ2YWJsZSAuZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSh0aGlzLnJlc2l6ZUdyaWQpO1xuICAgIHRoaXMuc2Nyb2xsRXZlbnQgPSBPYnNlcnZhYmxlIC5mcm9tRXZlbnQoZmluZERPTU5vZGUodGhpcykucXVlcnlTZWxlY3RvcignLnJ4LWdyaWQtYm9keScpLCAnc2Nyb2xsJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHRoaXMub25TY3JvbGwpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB0aGlzLnNldENvbHVtbnMoRXh0Lkxpc3QoUmVhY3QuQ2hpbGRyZW4udG9BcnJheShuZXh0UHJvcHMuY2hpbGRyZW4pKS5tYXAoY2hpbGQgPT4gY2hpbGQucHJvcHMpLmNvbGxlY3QoKSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnJlc2l6ZUV2ZW50LnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5zY3JvbGxFdmVudC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RvcmUsIGNsYXNzTmFtZSwgbm9IZWFkZXIsIC4uLm90aGVycyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gPENvbnRhaW5lciBsYXlvdXQ9XCJyb3dcIiBjbGFzc05hbWU9e0V4dC5jbGFzc05hbWUoJ3J4LWdyaWQnLCBjbGFzc05hbWUpfSB7Li4ub3RoZXJzfT5cbiAgICAgIHshbm9IZWFkZXIgJiYgPEdyaWRIZWFkZXIgc3RvcmU9e3N0b3JlfSB7Li4udGhpcy5zdGF0ZX0gLz59XG4gICAgICA8R3JpZEJvZHkgc3RvcmU9e3N0b3JlfSB7Li4udGhpcy5zdGF0ZX0gLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgfVxuXG4gIEBiaW5kXG4gIHJlc2l6ZUdyaWQoKSB7XG4gICAgY29uc3QgeyBjb2x1bW5zLCBjb2x1bW5Db25maWcgfSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgbm9kZSA9IGZpbmRET01Ob2RlKHRoaXMpLFxuICAgICAgICAgIHBhcmVudCA9IG5vZGUucGFyZW50RWxlbWVudCxcbiAgICAgICAgICBvdXRlcldpZHRoID0gcGFyZW50LmNsaWVudFdpZHRoLFxuICAgICAgICAgIGZsZXhDb2x1bW5zID0gRXh0Lkxpc3QoKTtcbiAgICBsZXQgaW5uZXJXaWR0aCA9IEV4dC5MaXN0KGNvbHVtbnMpLnJlZHVjZSgoaW5uZXJXaWR0aCwgY29sKSA9PiB7XG4gICAgICBpZiAoY29sLnN0eWxlICYmIGNvbC5zdHlsZS53aWR0aCkge1xuICAgICAgICBpbm5lcldpZHRoICs9IGNvbC5zdHlsZS53aWR0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZsZXhDb2x1bW5zLmFkZChjb2wpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlubmVyV2lkdGg7XG4gICAgfSwgdGhpcy5wcm9wcy5jaGVja0NvbHVtbiA/IEV4dC5DSEVDS19DT0xVTU5fV0lEVEggOiAwKTtcblxuICAgIHRoaXMuc2V0T3V0ZXJXaWR0aChvdXRlcldpZHRoKTtcbiAgICB0aGlzLnNldEhlYWRlcldpZHRoKE1hdGgubWF4KGlubmVyV2lkdGgsIG91dGVyV2lkdGgpKTtcbiAgICB0aGlzLnNldEJvZHlXaWR0aChNYXRoLm1heChpbm5lcldpZHRoLCBvdXRlcldpZHRoKSAtIEV4dC5TQ1JPTExfV0lEVEgpO1xuICB9XG5cbiAgQGJpbmRcbiAgb25TY3JvbGwoKSB7XG4gICAgY29uc3Qgbm9kZSA9IGZpbmRET01Ob2RlKHRoaXMpLFxuICAgICAgICAgIGhlYWRlciA9IG5vZGUucXVlcnlTZWxlY3RvcignLnJ4LWdyaWQtaGVhZGVyJyk7XG4gICAgaWYgKGhlYWRlcikge1xuICAgICAgaGVhZGVyLnNjcm9sbExlZnQgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5yeC1ncmlkLWJvZHknKS5zY3JvbGxMZWZ0O1xuICAgIH1cbiAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRXh0IGZyb20gJ34vY29yZS9leHQnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnfi9jb21wb25lbnRzL2NvbnRhaW5lcic7XG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gJ34vY29tcG9uZW50cy9mb3JtJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR3JpZEhlYWRlcih7IG91dGVyV2lkdGgsIGhlYWRlcldpZHRoLCBjaGVja0NvbHVtbiwgY29sdW1ucyA9IFtdLCBzdG9yZSwgLi4ub3RoZXJzIH0pIHtcbiAgcmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJ4LWdyaWQtaGVhZGVyXCIgc3R5bGU9e3t3aWR0aDpvdXRlcldpZHRofX0+XG4gICAgPENvbnRhaW5lciBsYXlvdXQ9XCJjb2x1bW5cIiBjbGFzc05hbWU9XCJyeC1ncmlkLWhlYWRlci1jb250YWluZXJcIiBzdHlsZT17e3dpZHRoOmhlYWRlcldpZHRofX0+XG4gICAgICB7Y2hlY2tDb2x1bW4gJiYgPGRpdiBjbGFzc05hbWU9XCJyeC1ncmlkLWhlYWRlci1jb2x1bW5cIiBzdHlsZT17e3dpZHRoOkV4dC5DSEVDS19DT0xVTU5fV0lEVEh9fT5cbiAgICAgICAgICB7KGNoZWNrQ29sdW1uID09PSAnbXVsdGlwbGUnKSAmJiA8Q2hlY2tib3ggZGlzYWJsZWQ9e3N0b3JlLmNvdW50KCkgPT09IDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzdG9yZS5jb3VudCgpID4gMCAmJiBzdG9yZS5nZXRTZWxlY3RlZFJlY29yZHMoKS5jb3VudCgpID09PSBzdG9yZS5jb3VudCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHN0b3JlLnRvZ2dsZVNlbGVjdEFsbCgpfSAvPn1cbiAgICAgICAgPC9kaXY+fVxuICAgICAge2NvbHVtbnMubWFwKCh7IGhlYWRlciA9ICcnLCBjbGFzc05hbWUgPSAnJywgLi4ub3RoZXJzIH0pID0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtFeHQuY2xhc3NOYW1lKCdyeC1ncmlkLWhlYWRlci1jb2x1bW4gdGV4dC1jZW50ZXInLCBjbGFzc05hbWUpfSBzdHlsZT17e2ZsZXg6MX19IHsuLi5vdGhlcnN9PlxuICAgICAgICAgIHtoZWFkZXJ9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpFeHQuU0NST0xMX1dJRFRIfX0gLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9zZWN0aW9uPlxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRXh0LCB7IGJpbmQgfSBmcm9tICd+L2NvcmUvZXh0JztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ34vY29tcG9uZW50cy9jb250YWluZXInO1xuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tICd+L2NvbXBvbmVudHMvZm9ybSc7XG5pbXBvcnQgR3JpZENlbGwgZnJvbSAnLi9jZWxsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZFJvdyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoZWNrQ29sdW1uLCBjb2x1bW5zID0gW10sIHJlY29yZCwgLi4ub3RoZXJzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiA8Q29udGFpbmVyIGxheW91dD1cImNvbHVtblwiIGNsYXNzTmFtZT1cInJ4LWdyaWQtcm93XCI+XG4gICAgICB7Y2hlY2tDb2x1bW4gJiYgPGRpdiBjbGFzc05hbWU9XCJyeC1ncmlkLWNlbGwgdGV4dC1zbS1jZW50ZXJcIiBzdHlsZT17e3dpZHRoOkV4dC5DSEVDS19DT0xVTU5fV0lEVEh9fT5cbiAgICAgICAgPENoZWNrYm94IGNoZWNrZWQ9e3JlY29yZC5zZWxlY3RlZH0gb25DaGFuZ2U9e3RoaXMudG9nZ2xlU2VsZWN0fSAvPlxuICAgICAgPC9kaXY+fVxuICAgICAge2NvbHVtbnMubWFwKGNvbHVtbiA9PiA8R3JpZENlbGwgcmVjb3JkPXtyZWNvcmR9IHsuLi5jb2x1bW59IHsuLi5vdGhlcnN9IC8+KX1cbiAgICA8L0NvbnRhaW5lcj5cbiAgfVxuXG4gIEBiaW5kXG4gIHRvZ2dsZVNlbGVjdCgpIHtcbiAgICBjb25zdCB7IHJlY29yZCwgY2hlY2tDb2x1bW4gfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHJlY29yZC5zZWxlY3RlZCkge1xuICAgICAgICByZWNvcmQuc2V0U2VsZWN0ZWQoZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY2hlY2tDb2x1bW4gIT09ICdtdWx0aXBsZScpIHtcbiAgICAgICAgcmVjb3JkLnN0b3JlLmdldFNlbGVjdGVkUmVjb3JkcygpLmVhY2gocmVjb3JkID0+IHJlY29yZC5zZXRTZWxlY3RlZChmYWxzZSkpO1xuICAgICAgfVxuICAgICAgcmVjb3JkLnNldFNlbGVjdGVkKHRydWUpO1xuICAgIH1cbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IEV4dCBmcm9tICd+L2NvcmUvZXh0JztcblxuY29uc3QgUk9VVEVTID0ge30sXG4gICAgICBnZXRSb3V0ZSA9ICgpID0+IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKSB8fCAnLycsXG4gICAgICBnZXRSb3V0ZVBhdGggPSByb3V0ZSA9PiByb3V0ZS5zcGxpdCgnLycpO1xuXG5leHBvcnQgZnVuY3Rpb24gUm91dGUocm91dGUpIHtcbiAgcmV0dXJuIGNvbXAgPT4ge1xuICAgIFJPVVRFU1tyb3V0ZV0gPSB7XG4gICAgICByb3V0ZSxcbiAgICAgIGNvbXAsXG4gICAgICBwYXRoOiBnZXRSb3V0ZVBhdGgocm91dGUpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBMaW5rKHsgdG8sIGNsYXNzTmFtZSA9ICcnLCBhY3RpdmVDbGFzc05hbWUgPSAnYWN0aXZlJywgdGV4dCwgY2hpbGRyZW4sIC4uLm90aGVycyB9KSB7XG4gIHJldHVybiA8YSBocmVmPXtgIyR7dG99YH0gY2xhc3NOYW1lPXtFeHQuY2xhc3NOYW1lKCduYXYtbGluaycsIGNsYXNzTmFtZSwgeyBbYWN0aXZlQ2xhc3NOYW1lXTogdG8gPT09IGdldFJvdXRlKCkgfSl9IHsuLi5vdGhlcnN9PlxuICAgIHt0ZXh0IHx8IGNoaWxkcmVufVxuICA8L2E+XG59XG5cbmV4cG9ydCBjbGFzcyBIYXNoUm91dGVyIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIEV4dC5pbml0aWFsU3RhdGUodGhpcywgbWF0Y2hQYXRoKCkpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgKCF3aW5kb3cubG9jYXRpb24uaGFzaCkgJiYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJy8nKTtcbiAgICBPYnNlcnZhYmxlLmZyb21FdmVudCh3aW5kb3csICdoYXNoY2hhbmdlJykuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0U3RhdGUobWF0Y2hQYXRoKCkpKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJvdXRlLCBjb21wLCBwYXJhbXMgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAoIWNvbXApIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0NvbXBvbmVudCBub3QgZm91bmQhJyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChjb21wLCB7IHJvdXRlLCBwYXJhbXMgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWF0Y2hQYXRoKCkge1xuICBjb25zdCBjdXJyZW50Um91dGUgPSBnZXRSb3V0ZSgpLFxuICAgICAgICBwYXJhbXMgPSB7IHJvdXRlOiBjdXJyZW50Um91dGUgfTtcblxuICAvLyBiYXNpYyByb3V0ZSAod2l0aG91dCBwYXJhbXMpXG4gIGlmIChST1VURVNbY3VycmVudFJvdXRlXSkge1xuICAgIHJldHVybiB7IHJvdXRlOiBjdXJyZW50Um91dGUsIGNvbXA6IFJPVVRFU1tjdXJyZW50Um91dGVdLmNvbXAsIHBhcmFtcyB9O1xuICB9XG5cbiAgLy8gYWR2YW5jZWQgcm91dGUgKHdpdGggcGFyYW1zKVxuICBjb25zdCBjdXJyZW50UGF0aCA9IGdldFJvdXRlUGF0aChjdXJyZW50Um91dGUpO1xuICBmb3IobGV0IHJvdXRlIGluIFJPVVRFUykge1xuICAgIGNvbnN0IG1hcFJvdXRlID0gUk9VVEVTW3JvdXRlXSxcbiAgICAgICAgICByb3V0ZVBhdGggPSBtYXBSb3V0ZS5wYXRoO1xuXG4gICAgbGV0IG1hdGNoZWQgPSB0cnVlO1xuICAgIEV4dC5MaXN0KG1hcFJvdXRlLnBhdGgpLmVhY2goKHJvdXRlTmFtZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChyb3V0ZU5hbWUgIT09IGN1cnJlbnRQYXRoW2luZGV4XSkge1xuICAgICAgICBpZiAocm91dGVOYW1lLnN0YXJ0c1dpdGgoJzonKSkgeyAvLyBkZXRlY3QgcGFyYW0gdmFsdWVcbiAgICAgICAgICBwYXJhbXNbcm91dGVOYW1lLnN1YnN0cmluZygxKV0gPSBjdXJyZW50UGF0aFtpbmRleF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWF0Y2hlZCA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKG1hdGNoZWQpIHtcbiAgICAgIHJldHVybiB7IHJvdXRlOiBjdXJyZW50Um91dGUsIGNvbXA6IG1hcFJvdXRlLmNvbXAsIHBhcmFtcyB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIHdpdGggbm90IGZvdW5kIHNjcmVlblxuICBpZiAoUk9VVEVTWycqJ10pIHtcbiAgICByZXR1cm4geyByb3V0ZTogY3VycmVudFJvdXRlLCBjb21wOiBST1VURVNbJyonXS5jb21wLCBwYXJhbXMgfTtcbiAgfVxuXG4gIC8vIHdpdGhvdXQgbm90IGZvdW5kIHNjcmVlblxuICByZXR1cm4geyByb3V0ZTogY3VycmVudFJvdXRlLCBjb21wOiBudWxsLCBwYXJhbXMgfTtcbn0iLCJleHBvcnQgY2xhc3MgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlLmxlbmd0aCkge1xuICAgICAgdGhpcy5kYXRhID0gdmFsdWU7XG4gICAgfVxuICAgIHRoaXMuY29sbGVjdCA9ICgpID0+IHRoaXMuZGF0YTtcbiAgICB0aGlzLmNvdW50ID0gKCkgPT4gdGhpcy5kYXRhLmxlbmd0aDtcbiAgICB0aGlzLmlzRW1wdHkgPSAoKSA9PiB0aGlzLmNvdW50ID09PSAwO1xuXG4gICAgdGhpcy5nZXRBdCA9IGluZGV4ID0+IHRoaXMuZGF0YVtpbmRleF07XG4gICAgdGhpcy5yZW1vdmVBdCA9IChpbmRleCwgY291bnQgPSAxKSA9PiB0aGlzLmRhdGEuc3BsaWNlKGluZGV4LCBjb3VudCk7XG4gICAgdGhpcy5zdWJMaXN0ID0gKHN0YXJ0LCBlbmQpID0+IG5ldyBMaXN0KHRoaXMuZGF0YS5zbGljZShzdGFydCwgZW5kKSk7XG4gICAgXG4gICAgdGhpcy5hZGQgPSBpdGVtID0+IHRoaXMuZGF0YS5wdXNoKGl0ZW0pO1xuICAgIHRoaXMuaW5zZXJ0ID0gKGluZGV4LCBpdGVtKSA9PiB0aGlzLmRhdGEuc3BsaWNlKGluZGV4LCAwLCBpdGVtKTtcbiAgICBcbiAgICB0aGlzLmZpbmRJbmRleCA9IHByZWRpY2F0ZSA9PiB0aGlzLmRhdGEuZmluZEluZGV4KHByZWRpY2F0ZSk7XG4gICAgdGhpcy5maW5kID0gcHJlZGljYXRlID0+IHRoaXMuZGF0YS5maW5kKHByZWRpY2F0ZSk7XG4gICAgdGhpcy5jb250YWlucyA9IHByZWRpY2F0ZSA9PiB0aGlzLmZpbmQocHJlZGljYXRlKSAhPT0gdW5kZWZpbmVkO1xuXG4gICAgdGhpcy5lYWNoID0gcHJlZGljYXRlID0+IHRoaXMuZGF0YS5mb3JFYWNoKHByZWRpY2F0ZSk7XG4gICAgdGhpcy5maWx0ZXIgPSBwcmVkaWNhdGUgPT4gbmV3IExpc3QodGhpcy5kYXRhLmZpbHRlcihwcmVkaWNhdGUpKTtcbiAgICB0aGlzLm1hcCA9IHByZWRpY2F0ZSA9PiBuZXcgTGlzdCh0aGlzLmRhdGEubWFwKHByZWRpY2F0ZSkpO1xuICAgIHRoaXMucmVkdWNlID0gKHByZWRpY2F0ZSwgaW5pdGlhbFZhbHVlKSA9PiB0aGlzLmRhdGEucmVkdWNlKHByZWRpY2F0ZSwgaW5pdGlhbFZhbHVlKTtcblxuICAgIHRoaXMuam9pbiA9IHNlcGFyYXRvciA9PiB0aGlzLmRhdGEuam9pbihzZXBhcmF0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEaWN0aW9uYXJ5IHtcbiAgY29uc3RydWN0b3Ioa2V5VmFsdWVzKSB7XG4gICAgdGhpcy5kYXRhID0ge307XG4gICAgaWYgKGtleVZhbHVlcykge1xuICAgICAgdGhpcy5kYXRhID0gT2JqZWN0LmFzc2lnbih7fSwga2V5VmFsdWVzKTtcbiAgICB9XG5cbiAgICB0aGlzLmtleXMgPSAoKSA9PiBuZXcgTGlzdChPYmplY3Qua2V5cyh0aGlzLmRhdGEpKTtcbiAgICB0aGlzLnZhbHVlcyA9ICgpID0+IG5ldyBMaXN0KE9iamVjdC52YWx1ZXModGhpcy5kYXRhKSk7XG5cbiAgICB0aGlzLnNldCA9IChrZXksIHZhbHVlKSA9PiB0aGlzLmRhdGFba2V5XSA9IHZhbHVlO1xuICAgIHRoaXMuZ2V0ID0ga2V5ID0+IHRoaXMuZGF0YVtrZXldO1xuICB9XG5cbiAgZWFjaChwcmVkaWNhdGUpIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5kYXRhKSB7XG4gICAgICBwcmVkaWNhdGUodGhpcy5kYXRhW2tleV0sIGtleSwgdGhpcy5kYXRhKTtcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgeyBMaXN0IH0gZnJvbSAnLi9jb2xsZWN0aW9uJztcblxuY2xhc3MgRG9tIGV4dGVuZHMgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5kaXNwbGF5ID0gc3RhdHVzID0+IHRoaXMuc2VsZWN0b3JzLmVhY2goc2VsZWN0b3IgPT4gc2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9IHN0YXR1cyk7XG4gICAgdGhpcy5zaG93ID0gKCkgPT4gdGhpcy5kaXNwbGF5KCdibG9jaycpO1xuICAgIHRoaXMuaGlkZSA9ICgpID0+IHRoaXMuZGlzcGxheSgnaGlkZScpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChzZWxlY3RvcikgPT4gbmV3IERvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTGlzdCwgRGljdGlvbmFyeSB9IGZyb20gJy4vY29sbGVjdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBFeHQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLkRPTSA9IHJlcXVpcmUoJy4vZG9tJykuZGVmYXVsdDtcbiAgICB0aGlzLlN0cmluZyA9IHJlcXVpcmUoJy4vc3RyaW5nJykuZGVmYXVsdDtcbiAgICB0aGlzLkFqYXggPSByZXF1aXJlKCd+L2RhdGEvYWpheCcpLmRlZmF1bHQ7XG4gICAgdGhpcy5MaXN0ID0gdmFsdWUgPT4gbmV3IExpc3QodmFsdWUpO1xuICAgIHRoaXMuTWFwID0ga2V5VmFsdWVzID0+IG5ldyBEaWN0aW9uYXJ5KGtleVZhbHVlcyk7XG4gICAgdGhpcy5TdG9yZU1hbmFnZXIgPSBuZXcgRGljdGlvbmFyeSgpO1xuXG4gICAgdGhpcy5TQ1JPTExfV0lEVEggPSB0aGlzLmdldFNjcm9sbFdpZHRoKCk7XG4gICAgdGhpcy5CT1JERVJfV0lEVEggPSAyO1xuICAgIHRoaXMuQ0hFQ0tfQ09MVU1OX1dJRFRIID0gMjg7XG4gICAgdGhpcy5VTktOT1dOX0VSUk9SX01TRyA9ICdBbiB1bmtub3duIGVycm9yIGhhcyBvY2N1cnJlZC4nO1xuXG4gICAgdGhpcy5pc1ByaW1pdGl2ZSA9IHZhbHVlID0+IHsgY29uc3QgdHlwZSA9IHR5cGVvZiB2YWx1ZTsgcmV0dXJuIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGUgPT09ICdudW1iZXInIHx8IHR5cGUgPT09ICdib29sZWFuJzsgfVxuICAgIHRoaXMuaXNTdHJpbmcgPSB2YWx1ZSA9PiAodHlwZW9mIHZhbHVlKSA9PT0gJ3N0cmluZyc7XG4gICAgdGhpcy5pc0Z1bmN0aW9uID0gdmFsdWUgPT4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG4gICAgdGhpcy5pc09iamVjdCA9IHZhbHVlID0+IHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBPYmplY3RdJztcbiAgICB0aGlzLmlzQXJyYXkgPSB2YWx1ZSA9PiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcblxuICAgIHRoaXMuY2xvbmUgPSBvYmogPT4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTsgLy8gZGVlcCBjbG9uZVxuXG4gICAgdGhpcy5pbnRlcnZhbCA9IChwZXJpb2QsIGFjdGlvbikgPT4gT2JzZXJ2YWJsZS5pbnRlcnZhbCgxMDAwICogcGVyaW9kKS5zdWJzY3JpYmUoeCA9PiBhY3Rpb24oKSk7XG4gIH1cblxuICBleHRlbmQoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24uYXBwbHkobnVsbCwgYXJndW1lbnRzKTsgLy8gaW1tdXRhYmxlIG9iamVjdFxuICB9XG5cbiAgaW5pdGlhbFN0YXRlKGNvbXAsIHN0YXRlKSB7XG4gICAgaWYgKCFjb21wIHx8ICFzdGF0ZSkgeyByZXR1cm47IH1cbiAgICBjb21wLnN0YXRlID0gc3RhdGU7XG4gICAgZm9yIChsZXQgZmllbGQgb2YgT2JqZWN0LmtleXMoc3RhdGUpKSB7XG4gICAgICBjb21wW2BzZXQke3RoaXMuU3RyaW5nLmNhcGl0YWxpemUoZmllbGQpfWBdID0gdmFsdWUgPT4gY29tcC5zZXRTdGF0ZSh7IFtmaWVsZF06IHZhbHVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNsYXNzTmFtZSguLi5leHByZXNzaW9ucykge1xuICAgIGNvbnN0IGNscyA9IFtdO1xuXG4gICAgdGhpcy5MaXN0KGV4cHJlc3Npb25zKS5lYWNoKGV4cCA9PiB7XG4gICAgICBpZiAoIWV4cCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZXhwID09PSAnc3RyaW5nJykge1xuICAgICAgICBjbHMucHVzaChleHApO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzT2JqZWN0KGV4cCkpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGV4cCkge1xuICAgICAgICAgIGlmIChleHBba2V5XSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY2xzLnB1c2goa2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY2xzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIC8vI3JlZ2lvbiBET01cbiAgY3JlYXRlRWxlbWVudChodG1sKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmlubmVySFRNTCA9IGh0bWw7XG4gICAgcmV0dXJuIGRpdi5jaGlsZHJlblswXTtcbiAgfVxuXG4gIGdldFNjcm9sbFdpZHRoKCkge1xuICAgIGNvbnN0IG91dGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCc8ZGl2IHN0eWxlPVwidmlzaWJpbGl0eTogaGlkZGVuOyB3aWR0aDogMTAwcHg7IG92ZXJmbG93OiBzY3JvbGw7XCI+PC9kaXY+Jyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdXRlcik7XG4gICAgY29uc3Qgd2lkdGhOb1Njcm9sbCA9IG91dGVyLm9mZnNldFdpZHRoO1xuXG4gICAgLy8gYWRkIGlubmVyZGl2XG4gICAgY29uc3QgaW5uZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJzxkaXYgc3R5bGU9XCJ3aWR0aDogMTAwJTtcIj48L2Rpdj4nKTtcbiAgICBvdXRlci5hcHBlbmRDaGlsZChpbm5lcik7XG4gICAgY29uc3Qgd2lkdGhXaXRoU2Nyb2xsID0gaW5uZXIub2Zmc2V0V2lkdGg7XG5cbiAgICAvLyByZW1vdmUgZGl2c1xuICAgIG91dGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob3V0ZXIpO1xuXG4gICAgcmV0dXJuIHdpZHRoTm9TY3JvbGwgLSB3aWR0aFdpdGhTY3JvbGw7XG4gIH1cbiAgLy8jZW5kcmVnaW9uXG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBFeHQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmQodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKSB7XG4gIGNvbnN0IGZuID0gZGVzY3JpcHRvci52YWx1ZTtcblxuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBAYmluZCBkZWNvcmF0b3IgaXMgb25seSBhcHBsaWVkIHRvIGZ1bmN0aW9ucyBub3Q6ICR7dHlwZW9mIGZufWApO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0KCkge1xuICAgICAgcmV0dXJuIGZuLmJpbmQodGhpcyk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCA9IDUwMCkge1xuICBsZXQgdGltZW91dDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLFxuICAgICAgICAgIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgICAgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgICAgfVxuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgfVxufSIsImNsYXNzIFN0cmluZyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FwaXRhbGl6ZSA9IHZhbHVlID0+IHZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSk7XG5cbiAgICB0aGlzLmh0bWxFbmNvZGUgPSB2YWx1ZSA9PiB2YWx1ZS5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJy9nLCAnJiMzOTsnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcblxuICAgIHRoaXMuaHRtbERlY29kZSA9IHZhbHVlID0+IHZhbHVlLnJlcGxhY2UoLyZhbXA7L2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyZsdDsvZywgJzwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyZndDs+L2csICc+JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8mIzM5Oy9nLCBcIidcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8mcXVvdDsvZywgJ1wiJyk7XG4gIH1cblxuICB0b1F1ZXJ5U3RyaW5nKHBhcmFtcywgc2VwLCBlbmNvZGUpIHtcbiAgICBzZXAgICAgPSBzZXAgPT09IHVuZGVmaW5lZCA/ICcmJyA6IHNlcDtcbiAgICBlbmNvZGUgPSBlbmNvZGUgPT09IGZhbHNlID8gZnVuY3Rpb24ocykgeyByZXR1cm4gczsgfSA6IGVuY29kZVVSSUNvbXBvbmVudDtcblxuICAgIGxldCBwYWlycyA9IFtdO1xuICAgIGZvciAobGV0IGtleSBpbiBwYXJhbXMpIHtcbiAgICAgIHBhaXJzLnB1c2goYCR7a2V5fT0ke2VuY29kZShwYXJhbXNba2V5XSl9YCk7XG4gICAgfVxuICAgIHJldHVybiBwYWlycy5qb2luKHNlcCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFN0cmluZygpOyIsImltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCBFeHQgZnJvbSAnfi9jb3JlL2V4dCc7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnfi9jb3JlL2NvbGxlY3Rpb24nO1xuaW1wb3J0IE1vZGVsIGZyb20gJy4vbW9kZWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYnN0cmFjdFN0b3JlIGV4dGVuZHMgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKCk7XG5cbiAgICAvLyNyZWdpb24gY29uZmlnc1xuICAgIHRoaXMudG90YWxDb3VudCA9IDA7XG4gICAgdGhpcy5wYWdlU2l6ZSA9IDA7XG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XG4gICAgdGhpcy5zdWJqZWN0ID0gbmV3IFN1YmplY3QoKTtcbiAgICB0aGlzLmlkUHJvcGVydHkgPSAnaWQnO1xuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgLy8jcmVnaW9uIHByb3BlcnRpZXNcbiAgICAvLyNlbmRyZWdpb25cblxuICAgIC8vI3JlZ2lvbiBtZXRob2RzXG4gICAgdGhpcy5jcmVhdGVSZWNvcmQgPSByZWNvcmQgPT4gbmV3IE1vZGVsKHJlY29yZCwgdGhpcyk7XG4gICAgdGhpcy5nZXRSZWNvcmRzID0gdGhpcy5jb2xsZWN0O1xuICAgIHRoaXMuZ2V0UmF3RGF0YXMgPSB0aGlzLm1hcChyZWNvcmQgPT4gcmVjb3JkLmdldERhdGEoKSkuY29sbGVjdCgpO1xuICAgIHRoaXMuZ2V0TW9kaWZpZWRSZWNvcmRzID0gKCkgPT4gdGhpcy5maWx0ZXIocmVjb3JkID0+IHJlY29yZC5pc01vZGlmaWVkKCkpO1xuICAgIHRoaXMuZ2V0U2VsZWN0ZWRSZWNvcmRzID0gKCkgPT4gdGhpcy5maWx0ZXIocmVjb3JkID0+IHJlY29yZC5zZWxlY3RlZCk7XG4gICAgdGhpcy5nZXROZXdSZWNvcmRzID0gKCkgPT4gdGhpcy5maWx0ZXIocmVjb3JkID0+IHJlY29yZC5pc05ld2x5Q3JlYXRlZCgpKTtcbiAgICB0aGlzLnN1YnNjcmliZSA9IG9ic2VydmVyID0+IHRoaXMuc3ViamVjdC5zdWJzY3JpYmUoeyBuZXh0OiB2YWx1ZSA9PiBvYnNlcnZlcih2YWx1ZSkgfSk7XG4gICAgdGhpcy5maXJlRXZlbnQgPSAoKSA9PiB0aGlzLnN1YmplY3QubmV4dCh0aGlzKTtcbiAgICAvLyNlbmRyZWdpb25cblxuICAgIEV4dC5leHRlbmQodGhpcywgY29uZmlnKTtcbiAgfVxuXG4gIGNsZWFyRGF0YShzaWxlbnQgPSBmYWxzZSkge1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICFzaWxlbnQgJiYgdGhpcy5maXJlRXZlbnQoKTtcbiAgfVxuXG4gIGxvYWREYXRhKGRhdGEpIHtcbiAgICB0aGlzLmNsZWFyRGF0YSh0cnVlKTtcbiAgICB0aGlzLmRhdGEgPSAobmV3IExpc3QoZGF0YSkpLm1hcCh0aGlzLmNyZWF0ZVJlY29yZC5iaW5kKHRoaXMpKS5jb2xsZWN0KCk7XG4gICAgdGhpcy5maXJlRXZlbnQoKTtcbiAgfVxuXG4gIGNvbW1pdENoYW5nZXMoKSB7XG4gICAgdGhpcy5nZXRNb2RpZmllZFJlY29yZHMoKS5lYWNoKHJlY29yZCA9PiByZWNvcmQuc2F2ZSgpKTtcbiAgICB0aGlzLmZpcmVFdmVudCgpO1xuICB9XG5cbiAgcmVqZWN0Q2hhbmdlcygpIHtcbiAgICB0aGlzLmdldE1vZGlmaWVkUmVjb3JkcygpLmVhY2gocmVjb3JkID0+IHJlY29yZC5yZWplY3QodHJ1ZSkpO1xuICAgIHRoaXMuZmlyZUV2ZW50KCk7XG4gIH1cblxuICBhZGRSZWNvcmQoZGF0YSA9IHt9KSB7XG4gICAgdGhpcy5hZGQodGhpcy5jcmVhdGVSZWNvcmQoZGF0YSkpO1xuICAgIHRoaXMuZmlyZUV2ZW50KCk7XG4gIH1cblxuICByZW1vdmVTZWxlY3RlZFJlY29yZHMoKSB7XG4gICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLmZpbHRlcihyZWNvcmQgPT4gIXJlY29yZC5zZWxlY3RlZCk7XG4gICAgdGhpcy5maXJlRXZlbnQoKTtcbiAgfVxuXG4gIHRvZ2dsZVNlbGVjdEFsbCgpIHtcbiAgICBjb25zdCBhbGxTZWxlY3RlZCA9IHRoaXMuZ2V0U2VsZWN0ZWRSZWNvcmRzKCkuY291bnQoKSA9PT0gdGhpcy5jb3VudCgpO1xuICAgIHRoaXMuZWFjaChyZWNvcmQgPT4gcmVjb3JkLnNlbGVjdGVkID0gIWFsbFNlbGVjdGVkKTtcbiAgICB0aGlzLmZpcmVFdmVudCgpO1xuICB9XG59IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5jbGFzcyBBamF4IHtcbiAgcmVxdWVzdCh7IHVybCwgbWV0aG9kID0gJ2dldCcsIHJlc3BvbnNlVHlwZSA9ICdqc29uJywgcGFyYW1zIH0pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgT2JzZXJ2YWJsZS5hamF4KHtcbiAgICAgICAgdXJsLFxuICAgICAgICBtZXRob2QsXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICBib2R5OiBtZXRob2QgPT09ICdwb3N0JyAmJiBwYXJhbXMsXG4gICAgICAgIHJlc3BvbnNlVHlwZSxcbiAgICAgIH0pXG4gICAgICAuc3Vic2NyaWJlKHtcbiAgICAgICAgbmV4dDogdmFsdWUgPT4gcmVzb2x2ZSh2YWx1ZS5yZXNwb25zZSksXG4gICAgICAgIGVycm9yOiBlcnIgPT4gcmVqZWN0KGVyci5tZXNzYWdlIHx8IGVyci5yZXNwb25zZSksXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQWpheCgpOyIsImltcG9ydCBFeHQgZnJvbSAnfi9jb3JlL2V4dCc7XG5pbXBvcnQgQWJzdHJhY3RTdG9yZSBmcm9tICcuL2Fic3RyYWN0LXN0b3JlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJyYXlTdG9yZSBleHRlbmRzIEFic3RyYWN0U3RvcmUge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcigpO1xuICAgIEV4dC5leHRlbmQodGhpcywgY29uZmlnKTtcbiAgfVxufSIsImltcG9ydCBFeHQgZnJvbSAnfi9jb3JlL2V4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGVsIHtcbiAgY29uc3RydWN0b3IoZGF0YSwgc3RvcmUpIHtcbiAgICAvLyNyZWdpb24gY29uZmlnc1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAvLyNlbmRyZWdpb25cblxuICAgIC8vI3JlZ2lvbiBwcm9wZXJ0aWVzXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLnN0b3JlID0gc3RvcmU7XG4gICAgY29uc3QgZmllbGRDb25maWcgPSAoc3RvcmUgJiYgc3RvcmUuZmllbGRzKSA/IHN0b3JlLmZpZWxkcyA6IFtdO1xuICAgIHRoaXMuZmllbGRzID0gRXh0Lkxpc3QoZmllbGRDb25maWcpLm1hcChmaWVsZCA9PiBFeHQuaXNTdHJpbmcoZmllbGQpID8gKHsgbmFtZTogZmllbGQsIHR5cGU6ICdzdHJpbmcnIH0pIDogZmllbGQpO1xuICAgIHRoaXMuaWRQcm9wZXJ0eSA9IHN0b3JlID8gc3RvcmUuaWRQcm9wZXJ0eSA6ICdpZCc7XG4gICAgLy8jZW5kcmVnaW9uXG5cbiAgICAvLyNyZWdpb24gbWV0aG9kc1xuICAgIHRoaXMuZ2V0RGF0YSA9ICgpID0+IHRoaXMuZGF0YTtcbiAgICB0aGlzLmdldCA9IGZpZWxkTmFtZSA9PiB0aGlzLmRhdGFbZmllbGROYW1lXTtcbiAgICAvLyNlbmRyZWdpb25cblxuICAgIHRoaXMuc2F2ZSgpO1xuICB9XG5cbiAgc2V0KGZpZWxkTmFtZSwgbmV3VmFsdWUsIHNpbGVudCkge1xuICAgIHRoaXMuZGF0YVtmaWVsZE5hbWVdID0gbmV3VmFsdWU7XG4gICAgdGhpcy5tb2RpZmllZCA9ICF0aGlzLmlzRXF1YWwoZmllbGROYW1lKTtcbiAgICAoIXNpbGVudCAmJiB0aGlzLnN0b3JlKSAmJiAodGhpcy5zdG9yZS5maXJlRXZlbnQoKSk7XG4gIH1cblxuICBzYXZlKCkge1xuICAgIHRoaXMucGhhbnRvbSA9IEV4dC5jbG9uZSh0aGlzLmRhdGEpO1xuICAgIHRoaXMubW9kaWZpZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHJlamVjdChzaWxlbnQpIHtcbiAgICB0aGlzLmRhdGEgPSBFeHQuY2xvbmUodGhpcy5waGFudG9tKTtcbiAgICB0aGlzLnNhdmUoKTtcbiAgICAoIXNpbGVudCAmJiB0aGlzLnN0b3JlKSAmJiAodGhpcy5zdG9yZS5maXJlRXZlbnQoKSk7XG4gIH1cblxuICBpc0VxdWFsKGZpZWxkTmFtZSkge1xuICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpcy5waGFudG9tW2ZpZWxkTmFtZV0sXG4gICAgICAgICAgbmV3VmFsdWUgPSB0aGlzLmRhdGFbZmllbGROYW1lXSxcbiAgICAgICAgICBmaWVsZCA9IHRoaXMuZmllbGRzLmZpbmQoZmllbGQgPT4gZmllbGQubmFtZSA9PT0gZmllbGROYW1lKTtcblxuICAgIHJldHVybiAoZmllbGQgJiYgZmllbGQuZXF1YWxzKSA/IGZpZWxkLmVxdWFscyhuZXdWYWx1ZSwgb2xkVmFsdWUpIDogbmV3VmFsdWUgPT09IG9sZFZhbHVlO1xuICB9XG5cbiAgaXNNb2RpZmllZChmaWVsZE5hbWUpIHtcbiAgICBpZiAoIXRoaXMucGhhbnRvbVt0aGlzLmlkUHJvcGVydHldKSB7IC8vIHNob3VsZCBub3QgZGV0ZWN0IG5ldyByZWNvcmQgYXMgYSBtb2RpZmllZCByZWNvcmRcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmllbGROYW1lID8gIXRoaXMuaXNFcXVhbChmaWVsZE5hbWUpIDogdGhpcy5maWVsZHMuY29udGFpbnMoZmllbGQgPT4gIXRoaXMuaXNFcXVhbChmaWVsZC5uYW1lKSk7XG4gIH1cblxuICBzZXRTZWxlY3RlZChzZWxlY3RlZCwgc2lsZW50KSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgICghc2lsZW50ICYmIHRoaXMuc3RvcmUpICYmICh0aGlzLnN0b3JlLmZpcmVFdmVudCgpKTtcbiAgfVxufSIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCBFeHQgZnJvbSAnfi9jb3JlL2V4dCc7XG5pbXBvcnQgQWJzdHJhY3RTdG9yZSBmcm9tICcuL2Fic3RyYWN0LXN0b3JlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJveHlTdG9yZSBleHRlbmRzIEFic3RyYWN0U3RvcmUge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLy8jcmVnaW9uIGNvbmZpZ3NcbiAgICB0aGlzLnByb3h5ID0ge1xuICAgICAgcmVhZGVyOiB7fSxcbiAgICAgIHdyaXRlcjoge31cbiAgICB9O1xuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgRXh0LmV4dGVuZCh0aGlzLCBjb25maWcpO1xuICB9XG5cbiAgbG9hZCh7IGRvbmUsIGZhaWwsIGFsd2F5cyB9ID0ge30pIHtcbiAgICBsZXQgeyB1cmwsIG1ldGhvZCA9ICdnZXQnLCByZXNwb25zZVR5cGUgPSAnanNvbicsIHBhcmFtcyB9ID0gdGhpcy5wcm94eTtcbiAgICAobWV0aG9kID09PSAnZ2V0JyAmJiBwYXJhbXMpICYmICh1cmwgPSBgJHt1cmx9PyR7U3RyaW5nLnRvUXVlcnlTdHJpbmcocGFyYW1zKX1gKTtcbiAgICBPYnNlcnZhYmxlLmFqYXgoe1xuICAgICAgdXJsLFxuICAgICAgbWV0aG9kLFxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICBib2R5OiBtZXRob2QgPT09ICdwb3N0JyAmJiBwYXJhbXMsXG4gICAgICByZXNwb25zZVR5cGUsXG4gICAgfSlcbiAgICAuc3Vic2NyaWJlKHtcbiAgICAgIG5leHQ6IHZhbHVlID0+IHtcbiAgICAgICAgY29uc3QgeyByZWFkZXI6IHsgcm9vdFByb3BlcnR5LCB0b3RhbFByb3BlcnR5IH0gPSB7fSB9ID0gdGhpcy5wcm94eTtcbiAgICAgICAgbGV0IHsgcmVzcG9uc2UgfSA9IHZhbHVlO1xuICAgICAgICBpZiAoZG9uZSkgeyByZXNwb25zZSA9IGRvbmUocmVzcG9uc2UpfVxuICAgICAgICB0aGlzLmxvYWREYXRhKHJvb3RQcm9wZXJ0eSA/IHJlc3BvbnNlW3Jvb3RQcm9wZXJ0eV0gOiByZXNwb25zZSk7XG4gICAgICAgIHRoaXMudG90YWxDb3VudCA9ICh0aGlzLnBhZ2VTaXplICYmIHRvdGFsUHJvcGVydHkpID8gcmVzcG9uc2VbdG90YWxQcm9wZXJ0eV0gOiB0aGlzLmNvdW50KCk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyLnJlc3BvbnNlKTtcbiAgICAgICAgZmFpbCAmJiBmYWlsKGVyci5tZXNzYWdlIHx8IGVyci5yZXNwb25zZSk7XG4gICAgICB9LFxuICAgICAgY29tcGxldGU6IGFsd2F5c1xuICAgIH0pO1xuICB9XG5cbiAgc3luYyh7IHVybCwgZG9uZSwgZmFpbCwgYWx3YXlzIH0gPSB7fSkge1xuICAgIGNvbnN0IHsgcmVzcG9uc2VUeXBlID0gJ2pzb24nLCB3cml0ZXI6IHsgdHJhbnNmb3JtIH0gPSB7fSB9ID0gdGhpcy5wcm94eTtcbiAgICBsZXQgcGFyYW1zID0gdGhpcy5nZXRNb2RpZmllZFJlY29yZHMoKS5tYXAocmVjb3JkID0+IHJlY29yZC5kYXRhKS5jb2xsZWN0KCk7XG4gICAgdHJhbnNmb3JtICYmIChwYXJhbXMgPSB0cmFuc2Zvcm0ocGFyYW1zKSk7XG4gICAgT2JzZXJ2YWJsZS5hamF4KHtcbiAgICAgIHVybDogdXJsIHx8IHRoaXMucHJveHkudXJsLFxuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgIGJvZHk6IHBhcmFtcyxcbiAgICAgIHJlc3BvbnNlVHlwZSxcbiAgICB9KVxuICAgIC5zdWJzY3JpYmUoe1xuICAgICAgbmV4dDogdmFsdWUgPT4ge1xuICAgICAgICB0aGlzLmNvbW1pdENoYW5nZXMoKTtcbiAgICAgICAgcmV0dXJuIGRvbmUgPyBkb25lKHZhbHVlLnJlc3BvbnNlKSA6IHZhbHVlLnJlc3BvbnNlO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiBlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlIHx8IGVyci5yZXNwb25zZSk7XG4gICAgICAgIGZhaWwgJiYgZmFpbChlcnIubWVzc2FnZSB8fCBlcnIucmVzcG9uc2UpO1xuICAgICAgfSxcbiAgICAgIGNvbXBsZXRlOiBhbHdheXNcbiAgICB9KTtcbiAgfVxufSIsImltcG9ydCB7IERpY3Rpb25hcnkgfSBmcm9tICd+L2NvcmUvY29sbGVjdGlvbic7XG5cbmNsYXNzIFN0b3JlTWFuYWdlciBleHRlbmRzIERpY3Rpb25hcnkgeyB9XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBTdG9yZU1hbmFnZXIoKTsiLCJpbXBvcnQgRXh0IGZyb20gJ34vY29yZS9leHQnO1xuaW1wb3J0IEFic3RyYWN0U3RvcmUgZnJvbSAnLi9hYnN0cmFjdC1zdG9yZSc7XG5pbXBvcnQgUHJveHlTdG9yZSBmcm9tICcuL3Byb3h5LXN0b3JlJztcbmltcG9ydCBBcnJheVN0b3JlIGZyb20gJy4vYXJyYXktc3RvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWcgPT4ge1xuICBpZiAoIWNvbmZpZy50eXBlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm94eVN0b3JlKGNvbmZpZyk7XG4gIH0gZWxzZSBpZiAoY29uZmlnLnR5cGUgPT09ICdBcnJheScpIHtcbiAgICByZXR1cm4gbmV3IEFycmF5U3RvcmUoY29uZmlnKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IEFic3RyYWN0U3RvcmUoY29uZmlnKTtcbiAgfVxufSIsImltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBFeHQgfSBmcm9tICcuL2NvcmUvZXh0JztcbmltcG9ydCBEaWFsb2dNYW5hZ2VyIGZyb20gJy4vY29tcG9uZW50cy9kaWFsb2cnO1xuaW1wb3J0IFN0b3JlTWFuYWdlciBmcm9tICcuL2RhdGEvc3RvcmUtbWFuYWdlcic7XG5cbmNsYXNzIFJleHQgZXh0ZW5kcyBFeHQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuU3RvcmVNYW5hZ2VyID0gU3RvcmVNYW5hZ2VyO1xuICAgIHRoaXMuRGlhbG9nTWFuYWdlciA9IERpYWxvZ01hbmFnZXI7XG4gIH1cblxuICBhc3luYyBhcHBsaWNhdGlvbih7IHN0b3JlcywgbGF1bmNoIH0pIHtcbiAgICBpZiAoc3RvcmVzKSB7XG4gICAgICB0aGlzLkxpc3Qoc3RvcmVzKS5lYWNoKHN0b3JlID0+IHtcbiAgICAgICAgc3RvcmUgPSBzdG9yZS5kZWZhdWx0O1xuICAgICAgICB0aGlzLlN0b3JlTWFuYWdlci5zZXQoc3RvcmUuc3RvcmVJZCwgc3RvcmUpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChsYXVuY2gpIHtcbiAgICAgIGNvbnN0IHJvb3QgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJzxkaXYgaWQ9XCJyZWFjdC1yb290XCI+PC9kaXY+JyksXG4gICAgICAgICAgICB2aWV3cG9ydCA9IGF3YWl0IGxhdW5jaCgpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyb290KTtcbiAgICAgIHJlbmRlcih2aWV3cG9ydCwgcm9vdCk7XG4gICAgfVxuICB9XG5cbiAgc2hvd0Vycm9yTXNnYm94KG1lc3NhZ2UpIHtcbiAgICB0aGlzLkRpYWxvZ01hbmFnZXIubXNnYm94KHtcbiAgICAgIHRpdGxlOiAnRXJyb3InLFxuICAgICAgaWNvbjogJ3RpbWVzJyxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UgfHwgdGhpcy5VTktOT1dOX0VSUk9SX01TRyxcbiAgICAgIGJ1dHRvbnM6ICdPSydcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUmV4dCgpO1xuXG4vLyNyZWdpb24gQ29tcG9uZW50XG5leHBvcnQgeyBIYXNoUm91dGVyLCBMaW5rIH0gZnJvbSAnLi9jb21wb25lbnRzL3JvdXRlcic7XG5leHBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvY29udGFpbmVyJztcbmV4cG9ydCB7IEJ1dHRvbiwgQnV0dG9uTGluaywgRmllbGQsIFRleHRGaWVsZCwgQ2hlY2tib3gsIFRleHRBcmVhIH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBHcmlkIH0gZnJvbSAnLi9jb21wb25lbnRzL2dyaWQvZ3JpZCc7XG5leHBvcnQgeyBEaWFsb2cgfSBmcm9tICcuL2NvbXBvbmVudHMvZGlhbG9nJztcbi8vI2VuZHJlZ2lvblxuXG4vLyNyZWdpb24gRGVjb3JhdG9yIChvciBIaWdoZXIgT3JkZXIgRnVuY3Rpb24gb3IgSGlnaGVyIE9yZGVyIENvbXBvbmVudClcbmV4cG9ydCB7IGJpbmQsIGRlYm91bmNlIH0gZnJvbSAnLi9jb3JlL2V4dCc7XG5leHBvcnQgeyBSb3V0ZSB9IGZyb20gJy4vY29tcG9uZW50cy9yb3V0ZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBcHBsaWNhdGlvbiB9IGZyb20gJy4vYXBwL2FwcGxpY2F0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAvY29tcG9uZW50JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VydmljZSB9IGZyb20gJy4vYXBwL3NlcnZpY2UnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTdG9yZSB9IGZyb20gJy4vZGF0YS9zdG9yZSc7XG4vLyNlbmRyZWdpb24iXX0=
