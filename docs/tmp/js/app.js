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
          '// ./app.js\nimport \'babel-polyfill\';\nimport React, { PureComponent } from \'react\';\nimport { Application } from \'ext-react\';\n\n@Application({\n  views: [\n    require(\'./components/viewport/viewport\'),\n    require(\'./components/search\'),\n    require(\'./components/details\'),\n    require(\'./components/notfound\'),\n  ],\n})\nexport default class App extends PureComponent {\n  render() {\n    return <Viewport />\n  }\n}'
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
          '// ./app.js\nimport \'babel-polyfill\';\nimport React, { PureComponent } from \'react\';\nimport { Application } from \'ext-react\';\n\n@Application({\n  views: [\n    require(\'./components/viewport/viewport\'),\n  ],\n})\nexport default class App extends PureComponent {\n  render() {\n    return <Viewport />\n  }\n}'
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
    _ext2.default.List(config.stores).each(function (store) {
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
          params = _ref.params,
          done = _ref.done,
          fail = _ref.fail,
          always = _ref.always;

      _rxjs.Observable.ajax({
        url: url,
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: method === 'post' && params,
        responseType: responseType
      }).subscribe({
        next: function next(value) {
          return done && done(value.response);
        },
        error: function error(err) {
          return fail && fail(err.message || err.response);
        },
        complete: always
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkb2NzL3NyYy9qcy9hcHAuanMiLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2FyY2hpdGVjdHVyZS9hcmNoaXRlY3R1cmUuanN4IiwiZG9jcy9zcmMvanMvY29tcG9uZW50cy9jb3JlLWNvbmNlcHRzL2NvbXBvbmVudC5qc3giLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2NvcmUtY29uY2VwdHMvZGF0YS1wYWNrYWdlLmpzeCIsImRvY3Mvc3JjL2pzL2NvbXBvbmVudHMvY29yZS1jb25jZXB0cy9zY3JlZW4tbmF2aWdhdGlvbi5qc3giLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUvY2FyZHMuanMiLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUvY2FyZHMudmlldy5qc3giLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUvZGFzaGJvYXJkLmpzIiwiZG9jcy9zcmMvanMvY29tcG9uZW50cy9leGFtcGxlL2RldGFpbHMuanMiLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUvbm90Zm91bmQuanMiLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUvc2VhcmNoLmpzIiwiZG9jcy9zcmMvanMvY29tcG9uZW50cy9leGFtcGxlL3N0b3Jlcy9jYXJkLmpzIiwiZG9jcy9zcmMvanMvY29tcG9uZW50cy9nZXR0aW5nLXN0YXJ0ZWQvZ2V0dGluZy1zdGFydGVkLmpzeCIsImRvY3Mvc3JjL2pzL2NvbXBvbmVudHMvdmlld3BvcnQvdmlld3BvcnQuanN4Iiwic3JjL2FwcC9hcHBsaWNhdGlvbi5qcyIsInNyYy9hcHAvY29tcG9uZW50LmpzIiwic3JjL2FwcC9zZXJ2aWNlLmpzIiwic3JjL2NvbXBvbmVudHMvY29udGFpbmVyLmpzeCIsInNyYy9jb21wb25lbnRzL2RpYWxvZy5qc3giLCJzcmMvY29tcG9uZW50cy9mb3JtLmpzeCIsInNyYy9jb21wb25lbnRzL2dyaWQvYm9keS5qc3giLCJzcmMvY29tcG9uZW50cy9ncmlkL2NlbGwuanN4Iiwic3JjL2NvbXBvbmVudHMvZ3JpZC9ncmlkLmpzeCIsInNyYy9jb21wb25lbnRzL2dyaWQvaGVhZGVyLmpzeCIsInNyYy9jb21wb25lbnRzL2dyaWQvcm93LmpzeCIsInNyYy9jb21wb25lbnRzL3JvdXRlci5qc3giLCJzcmMvY29yZS9jb2xsZWN0aW9uLmpzIiwic3JjL2NvcmUvZG9tLmpzIiwic3JjL2NvcmUvZXh0LmpzIiwic3JjL2NvcmUvc3RyaW5nLmpzIiwic3JjL2RhdGEvYWJzdHJhY3Qtc3RvcmUuanMiLCJzcmMvZGF0YS9hamF4LmpzIiwic3JjL2RhdGEvYXJyYXktc3RvcmUuanMiLCJzcmMvZGF0YS9tb2RlbC5qcyIsInNyYy9kYXRhL3Byb3h5LXN0b3JlLmpzIiwic3JjL2RhdGEvc3RvcmUtbWFuYWdlci5qcyIsInNyYy9kYXRhL3N0b3JlLmpzIiwic3JjL3JleHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsZUFBSyxXQUFMLENBQWlCO0FBQ2YsVUFBUSxDQUNOLFFBQVEsa0NBQVIsQ0FETSxDQURPO0FBSWYsU0FBTyxDQUNMLFFBQVEsOENBQVIsQ0FESyxFQUVMLFFBQVEsc0NBQVIsQ0FGSyxFQUdMLFFBQVEsOENBQVIsQ0FISyxFQUlMLFFBQVEseUNBQVIsQ0FKSyxFQUtMLFFBQVEsd0NBQVIsQ0FMSztBQU1MO0FBQ0EsVUFBUSxnQ0FBUixDQVBLLEVBUUwsUUFBUSw2QkFBUixDQVJLLEVBU0wsUUFBUSw4QkFBUixDQVRLLEVBVUwsUUFBUSwrQkFBUixDQVZLLEVBV0wsUUFBUSw0QkFBUixDQVhLLENBSlE7QUFpQmYsVUFBUTtBQUFBLFdBQU0sdURBQU47QUFBQTtBQWpCTyxDQUFqQjs7Ozs7Ozs7Ozs7Ozs7QUNMQTs7OztBQUNBOzs7Ozs7Ozs7O0lBR3FCLFksV0FEcEIsaUJBQU0sZUFBTixDOzs7Ozs7Ozs7Ozs2QkFFVTtBQUNQLGFBQU87QUFBQTtBQUFBLFVBQVcsV0FBVSwyQkFBckI7QUFDTDtBQUFBO0FBQUEsWUFBSSxXQUFVLE9BQWQ7QUFBQTtBQUFBLFNBREs7QUFFTDtBQUFBO0FBQUEsWUFBSyxXQUFVLE9BQWY7QUFBQTtBQUFBLFNBRks7QUF1Qkw7QUFBQTtBQUFBLFlBQUssV0FBVSxPQUFmO0FBQUE7QUFBQSxTQXZCSztBQW1DTDtBQUFBO0FBQUEsWUFBSyxXQUFVLE9BQWY7QUFBQTtBQUFBLFNBbkNLO0FBMERMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUExREssT0FBUDtBQThFRDs7Ozs7a0JBaEZrQixZOzs7Ozs7Ozs7Ozs7OztBQ0pyQjs7OztBQUNBOzs7Ozs7Ozs7O0lBR3FCLGEsV0FEcEIsaUJBQU0sMEJBQU4sQzs7Ozs7Ozs7Ozs7NkJBRVU7QUFDUCxhQUFPO0FBQUE7QUFBQSxVQUFXLFdBQVUsMkJBQXJCO0FBQ0w7QUFBQTtBQUFBLFlBQUksV0FBVSxPQUFkO0FBQUE7QUFBQSxTQURLO0FBRUw7QUFBQTtBQUFBLFlBQUcsV0FBVSxPQUFiO0FBQUE7QUFBQSxTQUZLO0FBTUw7QUFBQTtBQUFBLFlBQUssV0FBVSxPQUFmO0FBQUE7QUFBQSxTQU5LO0FBeUJMO0FBQUE7QUFBQSxZQUFHLFdBQVUsT0FBYjtBQUFBO0FBQ2lDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEakM7QUFBQTtBQUN5RjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRHpGO0FBQUE7QUFHMkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUgzRTtBQUFBO0FBQUEsU0F6Qks7QUE4Qkw7QUFBQTtBQUFBLFlBQUcsV0FBVSxPQUFiO0FBQUE7QUFBQSxTQTlCSztBQWlDTDtBQUFBO0FBQUEsWUFBSyxXQUFVLE9BQWY7QUFBQTtBQUFBLFNBakNLO0FBNkNMO0FBQUE7QUFBQSxZQUFHLFdBQVUsT0FBYjtBQUFBO0FBQUEsU0E3Q0s7QUE4Q0w7QUFBQTtBQUFBLFlBQUssV0FBVSxPQUFmO0FBQUE7QUFBQSxTQTlDSztBQWlFTDtBQUFBO0FBQUE7QUFBQTtBQUNtQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRG5CO0FBQUE7QUFFYztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRmQ7QUFBQTtBQUU4RztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRjlHO0FBQUE7QUFBQTtBQWpFSyxPQUFQO0FBc0VEOzs7OztrQkF4RWtCLGE7Ozs7Ozs7Ozs7Ozs7O0FDSnJCOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFHcUIsVyxXQURwQixpQkFBTSw2QkFBTixDOzs7Ozs7Ozs7Ozs2QkFFVTtBQUNQLGFBQU87QUFBQTtBQUFBLFVBQVcsV0FBVSwyQkFBckI7QUFDTDtBQUFBO0FBQUEsWUFBSSxXQUFVLE9BQWQ7QUFBQTtBQUFBLFNBREs7QUFFTDtBQUFBO0FBQUEsWUFBRyxXQUFVLE9BQWI7QUFBQTtBQUFBLFNBRks7QUFHTDtBQUFBO0FBQUEsWUFBSSxXQUFVLE9BQWQ7QUFBQTtBQUFBLFNBSEs7QUFJTDtBQUFBO0FBQUEsWUFBRyxXQUFVLE9BQWI7QUFBQTtBQUFBLFNBSks7QUFLTDtBQUFBO0FBQUEsWUFBSSxXQUFVLE9BQWQ7QUFBQTtBQUFBLFNBTEs7QUFNTDtBQUFBO0FBQUEsWUFBRyxXQUFVLE9BQWI7QUFBQTtBQUF5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXpCO0FBQUE7QUFBc0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUF0RjtBQUFBO0FBQUEsU0FOSztBQU9MO0FBQUE7QUFBQSxZQUFLLFdBQVUsT0FBZjtBQUFBO0FBQUEsU0FQSztBQWlCTDtBQUFBO0FBQUEsWUFBRyxXQUFVLE9BQWI7QUFBQTtBQUM2RTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRDdFO0FBQUE7QUFFdUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZ2QjtBQUFBO0FBQUEsU0FqQks7QUFxQkw7QUFBQTtBQUFBLFlBQUssV0FBVSxPQUFmO0FBQUE7QUFBQSxTQXJCSztBQTZCTDtBQUFBO0FBQUEsWUFBRyxXQUFVLE9BQWI7QUFBQTtBQUFBLFNBN0JLO0FBOEJMO0FBQUE7QUFBQSxZQUFLLFdBQVUsT0FBZjtBQUFBO0FBQUEsU0E5Qks7QUEyQ0w7QUFBQTtBQUFBLFlBQUcsV0FBVSxPQUFiO0FBQUE7QUFBbUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFuRDtBQUFBO0FBQUEsU0EzQ0s7QUE0Q0w7QUFBQTtBQUFBLFlBQUssV0FBVSxPQUFmO0FBQUE7QUFBQSxTQTVDSztBQXVGTDtBQUFBO0FBQUEsWUFBRyxXQUFVLE9BQWI7QUFBQTtBQUNnQztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGhDO0FBQUE7QUFFMkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUYzRDtBQUFBO0FBQUE7QUF2RkssT0FBUDtBQTRGRDs7Ozs7a0JBOUZrQixXOzs7Ozs7Ozs7Ozs7OztBQ0pyQjs7OztBQUNBOzs7Ozs7Ozs7O0lBR3FCLGdCLFdBRHBCLGlCQUFNLGtDQUFOLEM7Ozs7Ozs7Ozs7OzZCQUVVO0FBQ1AsYUFBTztBQUFBO0FBQUEsVUFBVyxXQUFVLDJCQUFyQjtBQUNMO0FBQUE7QUFBQSxZQUFJLFdBQVUsT0FBZDtBQUFBO0FBQUEsU0FESztBQUVMO0FBQUE7QUFBQSxZQUFJLFdBQVUsT0FBZDtBQUNFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBUixhQUFKO0FBQUE7QUFBQSxXQURGO0FBRUU7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFSLGFBQUo7QUFBQTtBQUFBLFdBRkY7QUFHRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVIsYUFBSjtBQUFBO0FBQUE7QUFIRixTQUZLO0FBT0w7QUFBQTtBQUFBLFlBQUssV0FBVSxPQUFmO0FBQUE7QUFBQSxTQVBLO0FBMkJMO0FBQUE7QUFBQSxZQUFLLFdBQVUsT0FBZjtBQUFBO0FBQUEsU0EzQks7QUF5Q0w7QUFBQTtBQUFBLFlBQUssV0FBVSxPQUFmO0FBQUE7QUFBQSxTQXpDSztBQW9ETDtBQUFBO0FBQUEsWUFBSyxXQUFVLE9BQWY7QUFBQTtBQUFBLFNBcERLO0FBK0RMO0FBQUE7QUFBQSxZQUFLLFdBQVUsT0FBZjtBQUFBO0FBQUE7QUEvREssT0FBUDtBQTRFRDs7Ozs7a0JBOUVrQixnQjs7Ozs7Ozs7Ozs7Ozs7QUNKckI7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU9xQixJLFdBTHBCLGlCQUFNLGdCQUFOLEMsVUFDQSxxQkFBVTtBQUNULFVBQVEsQ0FBRSxXQUFGLENBREM7QUFFVDtBQUZTLENBQVYsQzs7Ozs7OztrQ0FNZTtBQUNaLFdBQUssTUFBTCxDQUFZLFNBQVosQ0FBc0IsSUFBdEIsQ0FBMkI7QUFDekIsY0FBTTtBQUFBLGlCQUFPLFFBQVEsR0FBUixDQUFZLEdBQVosQ0FBUDtBQUFBO0FBRG1CLE9BQTNCO0FBR0Q7OztvQ0FHZTtBQUNkLFdBQUssTUFBTCxDQUFZLFNBQVosQ0FBc0IsYUFBdEI7QUFDRDs7Ozs7a0JBWGtCLEk7Ozs7Ozs7Ozs7OztBQ1RyQjs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCLFE7Ozs7Ozs7Ozs7O3dDQUNDO0FBQ2xCLFdBQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0IsU0FBbEIsQ0FBNEIsSUFBNUI7QUFDRDs7OzZCQUNRO0FBQUEsbUJBQ2tFLEtBQUssS0FEdkU7QUFBQSxVQUNXLFNBRFgsVUFDQyxNQURELENBQ1csU0FEWDtBQUFBLGdDQUN3QixLQUR4QjtBQUFBLFVBQ2lDLFdBRGpDLGdCQUNpQyxXQURqQztBQUFBLFVBQzhDLGFBRDlDLGdCQUM4QyxhQUQ5Qzs7QUFFUCxhQUFPO0FBQUE7QUFBQSxVQUFXLFdBQVUsZ0JBQXJCO0FBQ0w7QUFBQTtBQUFBLFlBQU0sT0FBTyxTQUFiO0FBQ0UsaURBQUssUUFBTyxJQUFaLEVBQWlCLFdBQVUsSUFBM0IsR0FERjtBQUVFLGlEQUFLLFFBQU8sTUFBWixFQUFtQixXQUFVLE1BQTdCLEVBQW9DLGNBQXBDLEdBRkY7QUFHRSxpREFBSyxRQUFPLE1BQVosRUFBbUIsV0FBVSxNQUE3QjtBQUhGLFNBREs7QUFNTDtBQUFBO0FBQUEsWUFBSyxXQUFVLE9BQWY7QUFDRSx3REFBUSxNQUFLLGNBQWIsRUFBNEIsV0FBVSxPQUF0QyxFQUE4QyxTQUFTLFdBQXZELEdBREY7QUFFRSx3REFBUSxNQUFLLGdCQUFiLEVBQThCLFNBQVMsYUFBdkM7QUFGRjtBQU5LLE9BQVA7QUFXRDs7Ozs7O2tCQWpCa0IsUTs7Ozs7Ozs7Ozs7O0FDSHJCOzs7O0FBQ0E7Ozs7OztJQU1xQixTLFdBSnBCLGlCQUFNLG9CQUFOLEMsVUFDQSxxQkFBVTtBQUNULFFBQU07QUFBQSxRQUFHLEtBQUgsUUFBRyxLQUFIO0FBQUEsV0FBZTtBQUFBO0FBQUE7QUFBSyxZQUFNO0FBQVgsS0FBZjtBQUFBO0FBREcsQ0FBVixDLCtCQUlDLHFCQUFjO0FBQUE7O0FBQ1osT0FBSyxLQUFMLEdBQWEsV0FBYjtBQUNELEM7a0JBSGtCLFM7Ozs7Ozs7Ozs7OztBQ1ByQjs7OztBQUNBOzs7Ozs7SUFNcUIsTyxXQUpwQixpQkFBTSx3QkFBTixDLFVBQ0EscUJBQVU7QUFDVCxRQUFNO0FBQUEsUUFBRyxNQUFILFFBQUcsTUFBSDtBQUFBLFdBQWdCO0FBQUE7QUFBQTtBQUFLLGFBQU87QUFBWixLQUFoQjtBQUFBO0FBREcsQ0FBVixDOzs7a0JBR29CLE87Ozs7Ozs7Ozs7Ozs7O0FDUHJCOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFHcUIsUSxXQURwQixpQkFBTSxHQUFOLEM7Ozs7Ozs7Ozs7OzZCQUVVO0FBQ1AsYUFBTztBQUFBO0FBQUE7QUFBQTtBQUFNLGFBQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0IsS0FBeEI7QUFBQTtBQUFBLE9BQVA7QUFDRDs7Ozs7a0JBSGtCLFE7Ozs7Ozs7Ozs7OztBQ0pyQjs7OztBQUNBOzs7Ozs7SUFNcUIsUyxXQUpwQixpQkFBTSxpQkFBTixDLFVBQ0EscUJBQVU7QUFDVCxRQUFNO0FBQUEsV0FBTSw4Q0FBTjtBQUFBO0FBREcsQ0FBVixDOzs7a0JBR29CLFM7Ozs7Ozs7OztBQ1ByQjs7a0JBRWUsaUJBQU07QUFDbkIsV0FBUyxXQURVO0FBRW5CLFVBQVEsQ0FBRSxNQUFGLENBRlc7QUFHbkIsU0FBTztBQUNMLFNBQUs7QUFEQTtBQUhZLENBQU4sQzs7Ozs7Ozs7Ozs7Ozs7QUNGZjs7OztBQUNBOzs7Ozs7Ozs7O0lBR3FCLGMsV0FEcEIsaUJBQU0sR0FBTixDOzs7Ozs7Ozs7Ozs2QkFFVTtBQUNQLGFBQU87QUFBQTtBQUFBLFVBQVcsV0FBVSwyQkFBckI7QUFDTDtBQUFBO0FBQUEsWUFBSSxXQUFVLE9BQWQ7QUFBQTtBQUFBLFNBREs7QUFFTDtBQUFBO0FBQUEsWUFBRyxXQUFVLE9BQWI7QUFBQTtBQUFBLFNBRks7QUFLTDtBQUFBO0FBQUEsWUFBSSxXQUFVLE9BQWQ7QUFBQTtBQUFBLFNBTEs7QUFNTDtBQUFBO0FBQUEsWUFBSSxXQUFVLE9BQWQ7QUFBQTtBQUFBLFNBTks7QUFPTDtBQUFBO0FBQUEsWUFBRyxXQUFVLE9BQWI7QUFBQTtBQUF5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXpCO0FBQUE7QUFBNkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUE3QztBQUFBO0FBQUEsU0FQSztBQVFMO0FBQUE7QUFBQSxZQUFJLFdBQVUsT0FBZDtBQUNFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSixXQURGO0FBRUU7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKLFdBRkY7QUFHRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUosV0FIRjtBQUlFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSixXQUpGO0FBS0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKLFdBTEY7QUFNRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUosV0FORjtBQU9FO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSixXQVBGO0FBUUU7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBUkYsU0FSSztBQWtCTDtBQUFBO0FBQUEsWUFBSSxXQUFVLE9BQWQ7QUFBQTtBQUFBLFNBbEJLO0FBbUJMO0FBQUE7QUFBQSxZQUFHLFdBQVUsT0FBYjtBQUFBO0FBQUEsU0FuQks7QUFvQkw7QUFBQTtBQUFBLFlBQUssV0FBVSxPQUFmO0FBQUE7QUFDa0MsbURBRGxDO0FBQUE7QUFFVSxtREFGVjtBQUFBO0FBR3FCLG1EQUhyQjtBQUFBO0FBSW9CLG1EQUpwQjtBQUFBO0FBSzBCLG1EQUwxQjtBQUFBO0FBTVMsbURBTlQ7QUFBQTtBQU9hLG1EQVBiO0FBQUE7QUFRaUUsbURBUmpFO0FBQUE7QUFTMEMsbURBVDFDO0FBQUE7QUFVWSxtREFWWjtBQUFBO0FBV21FLG1EQVhuRTtBQUFBO0FBWTZGLG1EQVo3RjtBQUFBO0FBYXdDLG1EQWJ4QztBQUFBO0FBY29DLG1EQWRwQztBQUFBO0FBZWlDLG1EQWZqQztBQUFBO0FBZ0IyRSxtREFoQjNFO0FBQUE7QUFpQmdCLG1EQWpCaEI7QUFBQTtBQWtCMEMsbURBbEIxQztBQUFBO0FBbUJxRDtBQW5CckQsU0FwQks7QUF5Q0w7QUFBQTtBQUFBLFlBQUcsV0FBVSxPQUFiO0FBQUE7QUFBMEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUExRSxTQXpDSztBQTBDTDtBQUFBO0FBQUEsWUFBSyxXQUFVLE9BQWY7QUFBQTtBQUFBLFNBMUNLO0FBeURMO0FBQUE7QUFBQSxZQUFHLFdBQVUsT0FBYjtBQUFBO0FBQW1FO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBbkU7QUFBQTtBQUFBLFNBekRLO0FBMERMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUExREssT0FBUDtBQTRFRDs7Ozs7a0JBOUVrQixjOzs7Ozs7OztrQkNERyxROztBQUh4Qjs7OztBQUNBOzs7O0FBRWUsU0FBUyxRQUFULEdBQW9CO0FBQ2pDLFNBQU87QUFBQTtBQUFBO0FBQ0w7QUFBQTtBQUFBLFFBQVEsV0FBVSxXQUFsQjtBQUE4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTlCLEtBREs7QUFFTDtBQUFBO0FBQUEsUUFBVyxRQUFPLFFBQWxCO0FBQ0U7QUFBQTtBQUFBLFVBQU8sT0FBTyxFQUFDLE9BQU0sR0FBUCxFQUFkO0FBQ0U7QUFBQTtBQUFBLFlBQUksV0FBVSxZQUFkO0FBQ0U7QUFBQTtBQUFBO0FBQUksd0RBQU0sSUFBRyxHQUFULEVBQWEsTUFBSyxpQkFBbEI7QUFBSixXQURGO0FBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGdCQUFNLFdBQVUsVUFBaEI7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBSSw0REFBTSxJQUFHLDBCQUFULEVBQW9DLE1BQUssV0FBekM7QUFBSixlQURGO0FBRUU7QUFBQTtBQUFBO0FBQUksNERBQU0sSUFBRyxrQ0FBVCxFQUE0QyxNQUFLLG1CQUFqRDtBQUFKLGVBRkY7QUFHRTtBQUFBO0FBQUE7QUFBSSw0REFBTSxJQUFHLDZCQUFULEVBQXVDLE1BQUssY0FBNUM7QUFBSjtBQUhGO0FBRkYsV0FGRjtBQVVFO0FBQUE7QUFBQTtBQUFJLHdEQUFNLElBQUcsZUFBVCxFQUF5QixNQUFLLGNBQTlCO0FBQUosV0FWRjtBQVdFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxnQkFBTSxXQUFVLFVBQWhCO0FBQUE7QUFBQSxhQURGO0FBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUksNERBQU0sSUFBRyxzQkFBVCxFQUFnQyxNQUFLLE9BQXJDO0FBQUo7QUFERjtBQUZGO0FBWEY7QUFERixPQURGO0FBcUJFO0FBQUE7QUFBQTtBQUFXO0FBQVg7QUFyQkYsS0FGSztBQXlCTDtBQUFBO0FBQUEsUUFBUSxXQUFVLFdBQWxCO0FBQThCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOUI7QUF6QkssR0FBUDtBQTJCRDs7Ozs7Ozs7O0FDL0JEOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUVlO0FBQUEsU0FBVSxvQkFBWTtBQUNuQyxrQkFBSSxJQUFKLENBQVMsT0FBTyxNQUFoQixFQUF3QixJQUF4QixDQUE2QixpQkFBUztBQUNwQyxjQUFRLE1BQU0sT0FBZDtBQUNBLDZCQUFhLEdBQWIsQ0FBaUIsTUFBTSxPQUF2QixFQUFnQyxLQUFoQztBQUNELEtBSEQ7QUFJQSxRQUFNLE9BQU8sY0FBSSxhQUFKLENBQWtCLDZCQUFsQixDQUFiO0FBQ0EsYUFBUyxJQUFULENBQWMsV0FBZCxDQUEwQixJQUExQjtBQUNBLDBCQUFPLDhCQUFDLFFBQUQsT0FBUCxFQUFxQixJQUFyQjtBQUNELEdBUmM7QUFBQSxDOzs7Ozs7Ozs7Ozs7O0FDTGY7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztrQkFFZTtBQUFBLFNBQVUsc0JBQWM7QUFDckMsUUFBTSxtQkFBbUIsT0FBTyxJQUFoQzs7QUFFQTtBQUFBOztBQUNFLDRCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSUFDWCxLQURXOztBQUVqQixZQUFNLFNBQVMsY0FBSSxJQUFKLENBQVMsT0FBTyxNQUFoQixFQUF3QixNQUF4QixDQUErQixVQUFDLE1BQUQsRUFBUyxPQUFULEVBQXFCO0FBQzNELGlCQUFPLE9BQVAsSUFBa0IsdUJBQWEsR0FBYixDQUFpQixPQUFqQixDQUFsQjtBQUNBLGlCQUFPLE1BQVA7QUFDRCxTQUhRLEVBR04sRUFITSxDQUFmO0FBQUEsWUFJTSxhQUFhLElBQUksVUFBSixDQUFlLEtBQWYsQ0FKbkI7O0FBTUEsbUJBQVcsTUFBWCxHQUFvQixNQUFwQjs7QUFFQSxzQkFBSSxZQUFKO0FBQ0U7QUFERixXQUVHLE9BQU8sV0FBUCxJQUFzQixPQUZ6QixFQUVtQyxVQUZuQztBQVZpQjtBQWNsQjs7QUFmSDtBQUFBO0FBQUEsNENBaUJzQjtBQUNsQix3QkFBSSxHQUFKLENBQVEsS0FBSyxLQUFMLENBQVcsTUFBbkIsRUFBMkIsTUFBM0IsR0FBb0MsSUFBcEMsQ0FBeUMsaUJBQVM7QUFDaEQsZ0JBQUksTUFBTSxRQUFWLEVBQW9CO0FBQ2xCLG9CQUFNLElBQU47QUFDRDtBQUNGLFdBSkQ7QUFLRDtBQXZCSDtBQUFBO0FBQUEsaUNBeUJXO0FBQ1AsaUJBQU8sOEJBQUMsZ0JBQUQsZUFBc0IsS0FBSyxLQUEzQixFQUFzQyxLQUFLLEtBQTNDLEVBQVA7QUFDRDtBQTNCSDs7QUFBQTtBQUFBO0FBNkJELEdBaENjO0FBQUEsQzs7Ozs7Ozs7O2tCQ0pBLGlCQUFTO0FBQ3RCLE1BQU0sVUFBVSxJQUFJLEtBQUosRUFBaEI7QUFDQSxVQUFRLFNBQVIsR0FBb0IsTUFBTSxJQUExQjtBQUNBLFNBQU8sT0FBUDtBQUNELEM7Ozs7Ozs7Ozs7O1FDS2UsUyxHQUFBLFM7O0FBVGhCOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTSxlQUFlO0FBQ25CLFlBQVUsVUFEUztBQUVuQixTQUFPLGFBRlk7QUFHbkIsU0FBTztBQUhZLENBQXJCOztBQU1PLFNBQVMsU0FBVCxPQUE0RTtBQUFBLDRCQUF2RCxTQUF1RDtBQUFBLE1BQXZELFNBQXVELGtDQUEzQyxFQUEyQztBQUFBLHlCQUF2QyxNQUF1QztBQUFBLE1BQXZDLE1BQXVDLCtCQUE5QixLQUE4QjtBQUFBLE1BQXZCLFFBQXVCLFFBQXZCLFFBQXVCO0FBQUEsTUFBVixNQUFVOztBQUNqRixTQUFPO0FBQUE7QUFBQSxlQUFTLFdBQVcsY0FBSSxTQUFKLENBQWMsUUFBZCxFQUF3QixhQUFhLE1BQWIsQ0FBeEIsRUFBOEMsU0FBOUMsQ0FBcEIsSUFBa0YsTUFBbEY7QUFBMkY7QUFBM0YsR0FBUDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7O0FDWEQ7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNLGE7Ozs7Ozs7eUJBQ0MsTSxFQUFRO0FBQ1gsVUFBTSxRQUFRLGNBQUksYUFBSixDQUFrQiwwQkFBbEIsQ0FBZDtBQUNBLGVBQVMsSUFBVCxDQUFjLFdBQWQsQ0FBMEIsS0FBMUI7QUFDQSw0QkFBTyxNQUFQLEVBQWUsS0FBZjtBQUNEOzs7Z0NBRWtDO0FBQUEsNEJBQTNCLEtBQTJCO0FBQUEsVUFBM0IsS0FBMkIsOEJBQW5CLElBQW1CO0FBQUEsVUFBVixNQUFVOztBQUNqQztBQUNFLFVBQU0sUUFBUSxjQUFJLGFBQUosQ0FBa0Isa0NBQWxCLENBQWQ7QUFDQSxlQUFTLElBQVQsQ0FBYyxXQUFkLENBQTBCLEtBQTFCO0FBQ0EsNEJBQU8sOEJBQUMsS0FBRCxFQUFXLE1BQVgsQ0FBUCxFQUE4QixLQUE5QjtBQUNBLGlCQUFXLFlBQU07QUFDZixpQkFBUyxJQUFULENBQWMsV0FBZCxDQUEwQixLQUExQjtBQUNELE9BRkQsRUFFRyxLQUZIO0FBR0Y7QUFDRDs7O2tDQUVxQjtBQUFBLFVBQVYsTUFBVTs7QUFDcEI7QUFDRSxVQUFNLFFBQVEsY0FBSSxhQUFKLENBQWtCLDBCQUFsQixDQUFkO0FBQ0EsZUFBUyxJQUFULENBQWMsV0FBZCxDQUEwQixLQUExQjtBQUNBLDRCQUFPLDhCQUFDLE1BQUQsRUFBWSxNQUFaLENBQVAsRUFBK0IsS0FBL0I7QUFDRjtBQUNEOzs7Ozs7a0JBR1ksSUFBSSxhQUFKLEU7SUFFRixNLFdBQUEsTTs7Ozs7Ozs7Ozs7NkJBQ0Y7QUFBQSxtQkFDK0UsS0FBSyxLQURwRjtBQUFBLGdDQUNDLEtBREQ7QUFBQSxVQUNDLEtBREQsZ0NBQ1MsUUFEVDtBQUFBLG9DQUNtQixTQURuQjtBQUFBLFVBQ21CLFNBRG5CLG9DQUMrQixFQUQvQjtBQUFBLHNDQUNtQyxXQURuQztBQUFBLFVBQ21DLFdBRG5DLHNDQUNpRCxJQURqRDtBQUFBLFVBQ3VELFFBRHZELFVBQ3VELFFBRHZEO0FBQUEsVUFDb0UsTUFEcEU7O0FBRVAsYUFBTztBQUFBO0FBQUEsbUJBQVcsUUFBTyxLQUFsQixFQUF3QixXQUFXLGNBQUksU0FBSixDQUFjLFFBQWQsRUFBd0IsU0FBeEIsQ0FBbkMsSUFBMkUsTUFBM0U7QUFDTDtBQUFBO0FBQUEsWUFBSyxXQUFVLGVBQWY7QUFDRTtBQUFBO0FBQUEsY0FBRyxXQUFVLDBCQUFiO0FBQXlDO0FBQXpDLFdBREY7QUFFRyx5QkFBZSx3Q0FBTSxXQUFVLE1BQWhCLEVBQXVCLFNBQVMsS0FBSyxPQUFyQztBQUZsQixTQURLO0FBS0w7QUFBQTtBQUFBLFlBQVcsUUFBTyxLQUFsQixFQUF3QixXQUFVLGFBQWxDO0FBQ0c7QUFESDtBQUxLLE9BQVA7QUFTRDs7OzhCQUdTO0FBQ0YsVUFBRSxPQUFGLEdBQWMsS0FBSyxLQUFuQixDQUFFLE9BQUY7QUFBQSxVQUNBLE1BREEsR0FDUywyQkFBWSxJQUFaLEVBQWtCLGFBRDNCOztBQUVOLGlCQUFXLFNBQVg7QUFDQSw0Q0FBdUIsTUFBdkI7QUFDQSxlQUFTLElBQVQsQ0FBYyxXQUFkLENBQTBCLE1BQTFCO0FBQ0Q7Ozs7Ozs7QUFHSCxJQUFNLGFBQWE7QUFDakIsV0FBUyxFQUFFLE9BQU8sU0FBVCxFQUFvQixNQUFNLE9BQTFCLEVBRFE7QUFFakIsU0FBTyxFQUFFLE9BQU8sT0FBVCxFQUFrQixNQUFNLE9BQXhCLEVBRlU7QUFHakIsV0FBUyxFQUFFLE9BQU8sU0FBVCxFQUFvQixNQUFNLGFBQTFCLEVBSFE7QUFJakIsUUFBTSxFQUFFLE9BQU8sYUFBVCxFQUF3QixNQUFNLE1BQTlCO0FBSlcsQ0FBbkI7O0lBT00sSzs7Ozs7Ozs7Ozs7NkJBQ0s7QUFBQSxvQkFDbUIsS0FBSyxLQUR4QjtBQUFBLFVBQ0MsSUFERCxXQUNDLElBREQ7QUFBQSxVQUNPLE9BRFAsV0FDTyxPQURQOztBQUVQLGFBQU87QUFBQTtBQUFBLFVBQVcsUUFBTyxLQUFsQjtBQUNMO0FBQUE7QUFBQTtBQUFLLHFCQUFXLElBQVgsRUFBaUI7QUFBdEIsU0FESztBQUVMO0FBQUE7QUFBQSxZQUFXLFFBQU8sUUFBbEI7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLFlBQWY7QUFBNEIsaURBQUcsNEJBQTBCLFdBQVcsSUFBWCxFQUFpQixJQUEzQyxZQUFIO0FBQTVCLFdBREY7QUFFRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGVBQWY7QUFBZ0M7QUFBaEM7QUFGRjtBQUZLLE9BQVA7QUFPRDs7OzhCQUdTO0FBQ1IsVUFBTSxTQUFTLDJCQUFZLElBQVosRUFBa0IsYUFBakM7QUFDQSw0Q0FBdUIsTUFBdkI7QUFDQSxlQUFTLElBQVQsQ0FBYyxXQUFkLENBQTBCLE1BQTFCO0FBQ0Q7Ozs7OztJQUlHLE07Ozs7Ozs7Ozs7OzZCQUNLO0FBQUE7O0FBQUEsb0JBQytELEtBQUssS0FEcEU7QUFBQSxVQUNDLEtBREQsV0FDQyxLQUREO0FBQUEsVUFDUSxJQURSLFdBQ1EsSUFEUjtBQUFBLFVBQ2MsT0FEZCxXQUNjLE9BRGQ7QUFBQSxvQ0FDdUIsT0FEdkI7QUFBQSxVQUN1QixPQUR2QixtQ0FDaUMsSUFEakM7QUFBQSx1Q0FDdUMsVUFEdkM7QUFBQSxVQUN1QyxVQUR2QyxzQ0FDb0QsRUFEcEQ7QUFBQSxVQUN3RCxFQUR4RCxXQUN3RCxFQUR4RDs7QUFFUCxhQUFPO0FBQUMsY0FBRDtBQUFBLFVBQVEsT0FBTyxLQUFmLEVBQXNCLGFBQWEsS0FBbkMsRUFBMEMsV0FBVSxRQUFwRDtBQUNMO0FBQUE7QUFBQSxZQUFXLFFBQU8sS0FBbEI7QUFDRyxXQUFDLElBQUQsSUFBUztBQUFBO0FBQUEsY0FBVyxRQUFPLEtBQWxCO0FBQXlCO0FBQXpCLFdBRFo7QUFFRyxrQkFBUTtBQUFBO0FBQUEsY0FBVyxRQUFPLFFBQWxCO0FBQ1A7QUFBQTtBQUFBLGdCQUFLLFdBQVUsa0JBQWY7QUFBa0MsbURBQUcsNEJBQTBCLElBQTFCLFlBQUg7QUFBbEMsYUFETztBQUVQO0FBQUE7QUFBQSxnQkFBSyxXQUFVLGVBQWY7QUFBZ0M7QUFBaEM7QUFGTyxXQUZYO0FBTUksc0JBQVksVUFBYixJQUE0QjtBQUFBO0FBQUEsY0FBUyxXQUFVLG1CQUFuQjtBQUMzQjtBQUFBO0FBQUEsZ0JBQVEsV0FBVSxPQUFsQixFQUEwQixTQUFTO0FBQUEseUJBQU0sT0FBSyxPQUFMLEVBQU47QUFBQSxpQkFBbkM7QUFBMEQseUJBQVcsTUFBWCxJQUFxQjtBQUEvRSxhQUQyQjtBQUUzQjtBQUFBO0FBQUEsZ0JBQVEsU0FBUyxtQkFBTTtBQUFDLHlCQUFLLE9BQUwsR0FBZ0IsTUFBTSxJQUFOO0FBQVksaUJBQXBEO0FBQXVELHlCQUFXLEVBQVgsSUFBaUI7QUFBeEU7QUFGMkIsV0FOL0I7QUFVSSxzQkFBWSxJQUFiLElBQXNCO0FBQUE7QUFBQSxjQUFTLFdBQVUsbUJBQW5CO0FBQ3JCO0FBQUE7QUFBQSxnQkFBUSxTQUFTLG1CQUFNO0FBQUMseUJBQUssT0FBTCxHQUFnQixNQUFNLElBQU47QUFBWSxpQkFBcEQ7QUFBdUQseUJBQVcsRUFBWCxJQUFpQjtBQUF4RTtBQURxQjtBQVZ6QjtBQURLLE9BQVA7QUFnQkQ7Ozs4QkFFUztBQUNSLFVBQU0sU0FBUywyQkFBWSxJQUFaLEVBQWtCLGFBQWpDO0FBQ0EsNENBQXVCLE1BQXZCO0FBQ0EsZUFBUyxJQUFULENBQWMsV0FBZCxDQUEwQixNQUExQjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7O1FDN0dhLE0sR0FBQSxNO1FBTUEsVSxHQUFBLFU7UUFJQSxLLEdBQUEsSzs7QUFiaEI7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVPLFNBQVMsTUFBVCxPQUErRDtBQUFBLDRCQUE3QyxTQUE2QztBQUFBLE1BQTdDLFNBQTZDLGtDQUFqQyxFQUFpQztBQUFBLE1BQTdCLElBQTZCLFFBQTdCLElBQTZCO0FBQUEsTUFBdkIsUUFBdUIsUUFBdkIsUUFBdUI7QUFBQSxNQUFWLE1BQVU7O0FBQ3BFLFNBQU87QUFBQTtBQUFBLGVBQVEsTUFBSyxRQUFiLEVBQXNCLFdBQVcsY0FBSSxTQUFKLENBQWMsS0FBZCxFQUFxQixTQUFyQixDQUFqQyxJQUFzRSxNQUF0RTtBQUNKLFlBQVE7QUFESixHQUFQO0FBR0Q7O0FBRU0sU0FBUyxVQUFULFFBQW1EO0FBQUEsTUFBN0IsSUFBNkIsU0FBN0IsSUFBNkI7QUFBQSxNQUF2QixRQUF1QixTQUF2QixRQUF1QjtBQUFBLE1BQVYsTUFBVTs7QUFDeEQsU0FBTztBQUFBO0FBQUEsZUFBRyxNQUFLLG9CQUFSLElBQWlDLE1BQWpDO0FBQTBDLFlBQVE7QUFBbEQsR0FBUDtBQUNEOztBQUVNLFNBQVMsS0FBVCxRQUEwRztBQUFBLHlCQUF6RixJQUF5RjtBQUFBLE1BQXpGLElBQXlGLDhCQUFsRixNQUFrRjtBQUFBLDJCQUExRSxNQUEwRTtBQUFBLE1BQTFFLE1BQTBFLGdDQUFqRSxLQUFpRTtBQUFBLDBCQUExRCxLQUEwRDtBQUFBLE1BQTFELEtBQTBELCtCQUFsRCxFQUFrRDtBQUFBLCtCQUE5QyxVQUE4QztBQUFBLE1BQTlDLFVBQThDLG9DQUFqQyxDQUFpQztBQUFBLE1BQTlCLEtBQThCLFNBQTlCLEtBQThCO0FBQUEsTUFBdkIsUUFBdUIsU0FBdkIsUUFBdUI7QUFBQSxNQUFWLE1BQVU7O0FBQy9HLFNBQU87QUFBQTtBQUFBLE1BQVMsV0FBVyxjQUFJLFNBQUosQ0FBYyxZQUFkLEVBQTRCLEVBQUUsT0FBTyxNQUFULEVBQTVCLENBQXBCO0FBQ1A7QUFBQTtBQUFBLFFBQU8sV0FBVyxjQUFJLFNBQUosaUNBQTJCLFVBQTNCLHFCQUF3RCxNQUF4RCxFQUFsQjtBQUFzRjtBQUF0RixLQURPO0FBRVA7QUFBQTtBQUFBLFFBQUssV0FBVyxjQUFJLFNBQUosa0NBQTJCLEtBQUssVUFBaEMsR0FBK0MsTUFBL0MsRUFBaEI7QUFDSSxlQUFTLE1BQVYsSUFBcUIsOEJBQUMsU0FBRCxhQUFXLE9BQU8sS0FBbEIsRUFBeUIsVUFBVSxRQUFuQyxJQUFpRCxNQUFqRCxFQUR4QjtBQUVJLGVBQVMsVUFBVixJQUF5Qiw4QkFBQyxRQUFELGFBQVUsT0FBTyxLQUFqQixFQUF3QixVQUFVLFFBQWxDLElBQWdELE1BQWhELEVBRjVCO0FBR0ksZUFBUyxVQUFWLElBQXlCLDhCQUFDLFFBQUQsYUFBVSxPQUFPLEtBQWpCLEVBQXdCLFVBQVUsUUFBbEMsSUFBZ0QsTUFBaEQ7QUFINUI7QUFGTyxHQUFQO0FBUUQ7O0FBRU0sU0FBUyxTQUFULFFBQXdFO0FBQUEsMEJBQW5ELEtBQW1EO0FBQUEsTUFBbkQsS0FBbUQsK0JBQTNDLEVBQTJDO0FBQUEsOEJBQXZDLFNBQXVDO0FBQUEsTUFBdkMsU0FBdUMsbUNBQTNCLEVBQTJCO0FBQUEsTUFBdkIsU0FBdUIsU0FBdkIsUUFBdUI7QUFBQSxNQUFWLE1BQVU7O0FBQzdFLFNBQU8sa0RBQU8sTUFBSyxNQUFaLEVBQW1CLFdBQVcsY0FBSSxTQUFKLENBQWMsY0FBZCxFQUE4QixTQUE5QixDQUE5QjtBQUNPLFdBQU8sS0FEZCxFQUNxQixVQUFVO0FBQUEsYUFBSyxhQUFZLFVBQVMsRUFBRSxNQUFGLENBQVMsS0FBbEIsQ0FBakI7QUFBQSxLQUQvQixJQUM4RSxNQUQ5RSxFQUFQO0FBRUQ7OztBQUVNLFNBQVMsUUFBVCxRQUEwRDtBQUFBLDBCQUF0QyxLQUFzQztBQUFBLE1BQXRDLEtBQXNDLCtCQUE5QixLQUE4QjtBQUFBLE1BQXZCLFVBQXVCLFNBQXZCLFFBQXVCO0FBQUEsTUFBVixNQUFVOztBQUMvRCxTQUFPLGtEQUFPLE1BQUssVUFBWixFQUF1QixTQUFTLEtBQWhDLEVBQXVDLFVBQVU7QUFBQSxhQUFNLFdBQVMsQ0FBQyxLQUFWLENBQU47QUFBQSxLQUFqRCxJQUE2RSxNQUE3RSxFQUFQO0FBQ0Q7OztBQUVNLFNBQVMsUUFBVCxRQUFtRjtBQUFBLHlCQUEvRCxJQUErRDtBQUFBLE1BQS9ELElBQStELDhCQUF4RCxHQUF3RDtBQUFBLDBCQUFuRCxLQUFtRDtBQUFBLE1BQW5ELEtBQW1ELCtCQUEzQyxFQUEyQztBQUFBLDhCQUF2QyxTQUF1QztBQUFBLE1BQXZDLFNBQXVDLG1DQUEzQixFQUEyQjtBQUFBLE1BQXZCLFVBQXVCLFNBQXZCLFFBQXVCO0FBQUEsTUFBVixNQUFVOztBQUN4RixTQUFPLHFEQUFVLE1BQU0sSUFBaEIsRUFBc0IsV0FBVyxjQUFJLFNBQUosQ0FBYyxjQUFkLEVBQThCLFNBQTlCLENBQWpDO0FBQ1csV0FBTyxLQURsQixFQUN5QixVQUFVO0FBQUEsYUFBSyxjQUFZLFdBQVMsRUFBRSxNQUFGLENBQVMsS0FBbEIsQ0FBakI7QUFBQSxLQURuQyxJQUNrRixNQURsRixFQUFQO0FBRUQ7Ozs7Ozs7Ozs7OztrQkNoQ3VCLFE7O0FBSnhCOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRWUsU0FBUyxRQUFULE9BQTZFO0FBQUEsTUFBekQsVUFBeUQsUUFBekQsVUFBeUQ7QUFBQSxNQUE3QyxTQUE2QyxRQUE3QyxTQUE2QztBQUFBLDBCQUFsQyxPQUFrQztBQUFBLE1BQWxDLE9BQWtDLGdDQUF4QixFQUF3QjtBQUFBLE1BQXBCLEtBQW9CLFFBQXBCLEtBQW9CO0FBQUEsTUFBVixNQUFVOztBQUMxRixTQUFPO0FBQUE7QUFBQSxNQUFXLFFBQU8sS0FBbEIsRUFBd0IsV0FBVSxjQUFsQyxFQUFpRCxPQUFPLEVBQUMsT0FBTSxVQUFQLEVBQXhEO0FBQ0w7QUFBQTtBQUFBLFFBQVMsV0FBVSxjQUFuQixFQUFrQyxPQUFPLEVBQUMsT0FBTSxTQUFQLEVBQXpDO0FBQ0UsNkNBQUssT0FBTyxFQUFDLFFBQU8sQ0FBUixFQUFaLEdBREY7QUFFRyxZQUFNLFVBQU4sR0FBbUIsR0FBbkIsQ0FBdUIsVUFBQyxNQUFELEVBQVMsUUFBVDtBQUFBLGVBQXNCLHdEQUFTLFNBQVMsT0FBbEIsRUFBMkIsUUFBUSxNQUFuQyxFQUEyQyxVQUFVLFFBQXJELElBQW1FLE1BQW5FLEVBQXRCO0FBQUEsT0FBdkI7QUFGSDtBQURLLEdBQVA7QUFNRDs7Ozs7Ozs7Ozs7Ozs7OztBQ1hEOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsUTs7O0FBQ25CLG9CQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDWCxLQURXOztBQUFBLFFBRVQsU0FGUyxHQUVhLEtBRmIsQ0FFVCxTQUZTO0FBQUEsUUFFRSxNQUZGLEdBRWEsS0FGYixDQUVFLE1BRkY7O0FBR2pCLGtCQUFJLFlBQUosUUFBdUI7QUFDckIsYUFBTyxZQUFZLE9BQU8sR0FBUCxDQUFXLFNBQVgsQ0FBWixHQUFvQyxFQUR0QjtBQUVyQixnQkFBVTtBQUZXLEtBQXZCO0FBSGlCO0FBT2xCOzs7O29EQUVnRDtBQUFBLFVBQXJCLFNBQXFCLFFBQXJCLFNBQXFCO0FBQUEsVUFBVixNQUFVLFFBQVYsTUFBVTs7QUFDL0MsV0FBSyxRQUFMLENBQWMsWUFBWSxPQUFPLEdBQVAsQ0FBVyxTQUFYLENBQVosR0FBb0MsRUFBbEQ7QUFDRDs7OzZCQUVRO0FBQUE7O0FBQUEsbUJBQ3FCLEtBQUssS0FEMUI7QUFBQSxVQUNDLEtBREQsVUFDQyxLQUREO0FBQUEsVUFDUSxRQURSLFVBQ1EsUUFEUjtBQUFBLG1CQUU0RyxLQUFLLEtBRmpIO0FBQUEsVUFFQyxRQUZELFVBRUMsUUFGRDtBQUFBLFVBRVcsV0FGWCxVQUVXLFdBRlg7QUFBQSxvQ0FFd0IsU0FGeEI7QUFBQSxVQUV3QixTQUZ4QixvQ0FFb0MsRUFGcEM7QUFBQSxpQ0FFd0MsTUFGeEM7QUFBQSxVQUV3QyxNQUZ4QyxpQ0FFaUQ7QUFBQSxlQUFTLEtBQVQ7QUFBQSxPQUZqRDtBQUFBLFVBRWlFLE1BRmpFLFVBRWlFLE1BRmpFO0FBQUEsVUFFeUUsU0FGekUsVUFFeUUsU0FGekU7QUFBQSxVQUVvRixRQUZwRixVQUVvRixRQUZwRjtBQUFBLFVBRWlHLE1BRmpHO0FBQUEsVUFHRCxHQUhDLEdBR0ssY0FBSSxTQUFKLENBQWMsY0FBZCxFQUE4QixTQUE5QixFQUF5QyxFQUFDLFlBQVksQ0FBQyxXQUFELElBQWdCLFNBQWhCLElBQThCLE9BQU8sVUFBUCxDQUFrQixTQUFsQixDQUEzQyxFQUF6QyxDQUhMOztBQUtQLFVBQUksQ0FBQyxRQUFMLEVBQWU7QUFDYixlQUFPO0FBQUE7QUFBQSxxQkFBUyxXQUFXLEdBQXBCLEVBQXlCLE9BQU8sRUFBQyxNQUFLLENBQU4sRUFBaEMsSUFBOEMsTUFBOUM7QUFDSixpQkFBTyxLQUFQLEVBQWMsTUFBZCxFQUFzQixTQUF0QixFQUFpQyxRQUFqQztBQURJLFNBQVA7QUFHRDtBQUNELFVBQUksUUFBSixFQUFjO0FBQ1osZUFBTztBQUFBO0FBQUEscUJBQVMsV0FBVyxHQUFwQixFQUF5QixPQUFPLEVBQUMsTUFBSyxDQUFOLEVBQWhDLEVBQTBDLFNBQVM7QUFBQSxxQkFBTSxPQUFLLFdBQUwsQ0FBaUIsS0FBakIsQ0FBTjtBQUFBLGFBQW5ELElBQXNGLE1BQXRGO0FBQ0osaUJBQU8sS0FBUCxFQUFjLE1BQWQsRUFBc0IsU0FBdEIsRUFBaUMsUUFBakM7QUFESSxTQUFQO0FBR0Q7QUFDRCxhQUFPO0FBQUE7QUFBQSxtQkFBUyxXQUFXLEdBQXBCLEVBQXlCLE9BQU8sRUFBQyxNQUFLLENBQU4sRUFBaEMsSUFBOEMsTUFBOUM7QUFDTCx5REFBVyxPQUFPLEtBQWxCLEVBQXlCLGVBQXpCLEVBQW1DLFVBQVUsS0FBSyxRQUFsRCxFQUE0RCxRQUFRLEtBQUssU0FBekU7QUFESyxPQUFQO0FBR0Q7OztnQ0FHVztBQUNKLFVBQUUsS0FBRixHQUFZLEtBQUssS0FBakIsQ0FBRSxLQUFGO0FBQUEsb0JBQ3dCLEtBQUssS0FEN0I7QUFBQSxVQUNFLE1BREYsV0FDRSxNQURGO0FBQUEsVUFDVSxTQURWLFdBQ1UsU0FEVjs7QUFFTixhQUFPLEdBQVAsQ0FBVyxTQUFYLEVBQXNCLEtBQXRCO0FBQ0EsV0FBSyxXQUFMLENBQWlCLElBQWpCO0FBQ0Q7Ozs7O2tCQXhDa0IsUTs7Ozs7Ozs7Ozs7Ozs7OztBQ0pyQjs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQixJOzs7QUFDbkIsZ0JBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLDRHQUNYLEtBRFc7O0FBRWpCLGtCQUFJLFlBQUosUUFBdUI7QUFDckIsa0JBQVksQ0FEUztBQUVyQixtQkFBYSxDQUZRO0FBR3JCLGlCQUFXLENBSFU7QUFJckIsbUJBQWEsTUFBTSxXQUpFO0FBS3JCLGVBQVMsY0FBSSxJQUFKLENBQVMsZ0JBQU0sUUFBTixDQUFlLE9BQWYsQ0FBdUIsTUFBTSxRQUE3QixDQUFULEVBQWlELEdBQWpELENBQXFEO0FBQUEsZUFBUyxNQUFNLEtBQWY7QUFBQSxPQUFyRCxFQUEyRSxPQUEzRTtBQUxZLEtBQXZCO0FBT0EsVUFBSyxZQUFMLEdBQW9CO0FBQUEsYUFBTSxNQUFLLFdBQUwsRUFBTjtBQUFBLEtBQXBCO0FBVGlCO0FBVWxCOzs7O3dDQUVtQjtBQUNsQixXQUFLLFVBQUw7QUFDQSxXQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLFNBQWpCLENBQTJCLEtBQUssWUFBaEM7QUFDQSxXQUFLLFdBQUwsR0FBbUIsaUJBQVksU0FBWixDQUFzQixNQUF0QixFQUE4QixRQUE5QixFQUNZLFNBRFosQ0FDc0IsS0FBSyxVQUQzQixDQUFuQjtBQUVBLFdBQUssV0FBTCxHQUFtQixpQkFBWSxTQUFaLENBQXNCLDJCQUFZLElBQVosRUFBa0IsYUFBbEIsQ0FBZ0MsZUFBaEMsQ0FBdEIsRUFBd0UsUUFBeEUsRUFDWSxTQURaLENBQ3NCLEtBQUssUUFEM0IsQ0FBbkI7QUFFRDs7OzhDQUV5QixTLEVBQVc7QUFDbkMsV0FBSyxVQUFMLENBQWdCLGNBQUksSUFBSixDQUFTLGdCQUFNLFFBQU4sQ0FBZSxPQUFmLENBQXVCLFVBQVUsUUFBakMsQ0FBVCxFQUFxRCxHQUFyRCxDQUF5RDtBQUFBLGVBQVMsTUFBTSxLQUFmO0FBQUEsT0FBekQsRUFBK0UsT0FBL0UsRUFBaEI7QUFDRDs7OzJDQUVzQjtBQUNyQixXQUFLLFdBQUwsQ0FBaUIsV0FBakI7QUFDQSxXQUFLLFdBQUwsQ0FBaUIsV0FBakI7QUFDRDs7OzZCQUVRO0FBQUEsbUJBQzJDLEtBQUssS0FEaEQ7QUFBQSxVQUNDLEtBREQsVUFDQyxLQUREO0FBQUEsVUFDUSxTQURSLFVBQ1EsU0FEUjtBQUFBLFVBQ21CLFFBRG5CLFVBQ21CLFFBRG5CO0FBQUEsVUFDZ0MsTUFEaEM7O0FBRVAsYUFBTztBQUFBO0FBQUEsbUJBQVcsUUFBTyxLQUFsQixFQUF3QixXQUFXLGNBQUksU0FBSixDQUFjLFNBQWQsRUFBeUIsU0FBekIsQ0FBbkMsSUFBNEUsTUFBNUU7QUFDSixTQUFDLFFBQUQsSUFBYSwyREFBWSxPQUFPLEtBQW5CLElBQThCLEtBQUssS0FBbkMsRUFEVDtBQUVMLGlFQUFVLE9BQU8sS0FBakIsSUFBNEIsS0FBSyxLQUFqQztBQUZLLE9BQVA7QUFJRDs7O2lDQUdZO0FBQUEsbUJBQ3VCLEtBQUssS0FENUI7QUFBQSxVQUNILE9BREcsVUFDSCxPQURHO0FBQUEsVUFDTSxZQUROLFVBQ00sWUFETjtBQUFBLFVBRUwsSUFGSyxHQUVFLDJCQUFZLElBQVosQ0FGRjtBQUFBLFVBR0wsTUFISyxHQUdJLEtBQUssYUFIVDtBQUFBLFVBSUwsVUFKSyxHQUlRLE9BQU8sV0FKZjtBQUFBLFVBS0wsV0FMSyxHQUtTLGNBQUksSUFBSixFQUxUOztBQU1YLFVBQUksYUFBYSxjQUFJLElBQUosQ0FBUyxPQUFULEVBQWtCLE1BQWxCLENBQXlCLFVBQUMsVUFBRCxFQUFhLEdBQWIsRUFBcUI7QUFDN0QsWUFBSSxJQUFJLEtBQUosSUFBYSxJQUFJLEtBQUosQ0FBVSxLQUEzQixFQUFrQztBQUNoQyx3QkFBYyxJQUFJLEtBQUosQ0FBVSxLQUF4QjtBQUNELFNBRkQsTUFFTztBQUNMLHNCQUFZLEdBQVosQ0FBZ0IsR0FBaEI7QUFDRDtBQUNELGVBQU8sVUFBUDtBQUNELE9BUGdCLEVBT2QsS0FBSyxLQUFMLENBQVcsV0FBWCxHQUF5QixjQUFJLGtCQUE3QixHQUFrRCxDQVBwQyxDQUFqQjs7QUFTQSxXQUFLLGFBQUwsQ0FBbUIsVUFBbkI7QUFDQSxXQUFLLGNBQUwsQ0FBb0IsS0FBSyxHQUFMLENBQVMsVUFBVCxFQUFxQixVQUFyQixDQUFwQjtBQUNBLFdBQUssWUFBTCxDQUFrQixLQUFLLEdBQUwsQ0FBUyxVQUFULEVBQXFCLFVBQXJCLElBQW1DLGNBQUksWUFBekQ7QUFDRDs7OytCQUdVO0FBQ1QsVUFBTSxPQUFPLDJCQUFZLElBQVosQ0FBYjtBQUFBLFVBQ00sU0FBUyxLQUFLLGFBQUwsQ0FBbUIsaUJBQW5CLENBRGY7QUFFQSxVQUFJLE1BQUosRUFBWTtBQUNWLGVBQU8sVUFBUCxHQUFvQixLQUFLLGFBQUwsQ0FBbUIsZUFBbkIsRUFBb0MsVUFBeEQ7QUFDRDtBQUNGOzs7OztrQkFuRWtCLEk7Ozs7Ozs7Ozs7O2tCQ0hHLFU7O0FBTHhCOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7O0FBRWUsU0FBUyxVQUFULE9BQThGO0FBQUEsTUFBeEUsVUFBd0UsUUFBeEUsVUFBd0U7QUFBQSxNQUE1RCxXQUE0RCxRQUE1RCxXQUE0RDtBQUFBLE1BQS9DLFdBQStDLFFBQS9DLFdBQStDO0FBQUEsMEJBQWxDLE9BQWtDO0FBQUEsTUFBbEMsT0FBa0MsZ0NBQXhCLEVBQXdCO0FBQUEsTUFBcEIsS0FBb0IsUUFBcEIsS0FBb0I7QUFBQSxNQUFWLE1BQVU7O0FBQzNHLFNBQU87QUFBQTtBQUFBLE1BQVMsV0FBVSxnQkFBbkIsRUFBb0MsT0FBTyxFQUFDLE9BQU0sVUFBUCxFQUEzQztBQUNMO0FBQUE7QUFBQSxRQUFXLFFBQU8sUUFBbEIsRUFBMkIsV0FBVSwwQkFBckMsRUFBZ0UsT0FBTyxFQUFDLE9BQU0sV0FBUCxFQUF2RTtBQUNHLHFCQUFlO0FBQUE7QUFBQSxVQUFLLFdBQVUsdUJBQWYsRUFBdUMsT0FBTyxFQUFDLE9BQU0sY0FBSSxrQkFBWCxFQUE5QztBQUNWLHdCQUFnQixVQUFqQixJQUFnQyxnREFBVSxVQUFVLE1BQU0sS0FBTixPQUFrQixDQUF0QztBQUNXLG1CQUFTLE1BQU0sS0FBTixLQUFnQixDQUFoQixJQUFxQixNQUFNLGtCQUFOLEdBQTJCLEtBQTNCLE9BQXVDLE1BQU0sS0FBTixFQURoRjtBQUVXLG9CQUFVO0FBQUEsbUJBQU0sTUFBTSxlQUFOLEVBQU47QUFBQSxXQUZyQjtBQURyQixPQURsQjtBQU1HLGNBQVEsR0FBUixDQUFZO0FBQUEsaUNBQUcsTUFBSDtBQUFBLFlBQUcsTUFBSCxnQ0FBWSxFQUFaO0FBQUEsb0NBQWdCLFNBQWhCO0FBQUEsWUFBZ0IsU0FBaEIsbUNBQTRCLEVBQTVCO0FBQUEsWUFBbUMsTUFBbkM7O0FBQUEsZUFDWDtBQUFBO0FBQUEscUJBQUssV0FBVyxjQUFJLFNBQUosQ0FBYyxtQ0FBZCxFQUFtRCxTQUFuRCxDQUFoQixFQUErRSxPQUFPLEVBQUMsTUFBSyxDQUFOLEVBQXRGLElBQW9HLE1BQXBHO0FBQ0c7QUFESCxTQURXO0FBQUEsT0FBWixDQU5IO0FBV0UsNkNBQUssT0FBTyxFQUFDLE9BQU0sY0FBSSxZQUFYLEVBQVo7QUFYRjtBQURLLEdBQVA7QUFlRDs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCRDs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsTzs7Ozs7Ozs7Ozs7NkJBQ1Y7QUFBQSxtQkFDa0QsS0FBSyxLQUR2RDtBQUFBLFVBQ0MsV0FERCxVQUNDLFdBREQ7QUFBQSxrQ0FDYyxPQURkO0FBQUEsVUFDYyxPQURkLGtDQUN3QixFQUR4QjtBQUFBLFVBQzRCLE1BRDVCLFVBQzRCLE1BRDVCO0FBQUEsVUFDdUMsTUFEdkM7O0FBRVAsYUFBTztBQUFBO0FBQUEsVUFBVyxRQUFPLFFBQWxCLEVBQTJCLFdBQVUsYUFBckM7QUFDSix1QkFBZTtBQUFBO0FBQUEsWUFBSyxXQUFVLDZCQUFmLEVBQTZDLE9BQU8sRUFBQyxPQUFNLGNBQUksa0JBQVgsRUFBcEQ7QUFDZCwwREFBVSxTQUFTLE9BQU8sUUFBMUIsRUFBb0MsVUFBVSxLQUFLLFlBQW5EO0FBRGMsU0FEWDtBQUlKLGdCQUFRLEdBQVIsQ0FBWTtBQUFBLGlCQUFVLHlEQUFVLFFBQVEsTUFBbEIsSUFBOEIsTUFBOUIsRUFBMEMsTUFBMUMsRUFBVjtBQUFBLFNBQVo7QUFKSSxPQUFQO0FBTUQ7OzttQ0FHYztBQUFBLG9CQUNtQixLQUFLLEtBRHhCO0FBQUEsVUFDTCxNQURLLFdBQ0wsTUFESztBQUFBLFVBQ0csV0FESCxXQUNHLFdBREg7O0FBRWIsVUFBSSxPQUFPLFFBQVgsRUFBcUI7QUFDakIsZUFBTyxXQUFQLENBQW1CLEtBQW5CO0FBQ0gsT0FGRCxNQUVPO0FBQ0wsWUFBSSxnQkFBZ0IsVUFBcEIsRUFBZ0M7QUFDOUIsaUJBQU8sS0FBUCxDQUFhLGtCQUFiLEdBQWtDLElBQWxDLENBQXVDO0FBQUEsbUJBQVUsT0FBTyxXQUFQLENBQW1CLEtBQW5CLENBQVY7QUFBQSxXQUF2QztBQUNEO0FBQ0QsZUFBTyxXQUFQLENBQW1CLElBQW5CO0FBQ0Q7QUFDRjs7Ozs7a0JBdEJrQixPOzs7Ozs7Ozs7Ozs7OztRQ0VMLEssR0FBQSxLO1FBVUEsSSxHQUFBLEk7O0FBbEJoQjs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxTQUFTLEVBQWY7QUFBQSxJQUNNLFdBQVcsU0FBWCxRQUFXO0FBQUEsU0FBTSxPQUFPLFFBQVAsQ0FBZ0IsSUFBaEIsQ0FBcUIsU0FBckIsQ0FBK0IsQ0FBL0IsS0FBcUMsR0FBM0M7QUFBQSxDQURqQjtBQUFBLElBRU0sZUFBZSxTQUFmLFlBQWU7QUFBQSxTQUFTLE1BQU0sS0FBTixDQUFZLEdBQVosQ0FBVDtBQUFBLENBRnJCOztBQUlPLFNBQVMsS0FBVCxDQUFlLEtBQWYsRUFBc0I7QUFDM0IsU0FBTyxnQkFBUTtBQUNiLFdBQU8sS0FBUCxJQUFnQjtBQUNkLGtCQURjO0FBRWQsZ0JBRmM7QUFHZCxZQUFNLGFBQWEsS0FBYjtBQUhRLEtBQWhCO0FBS0QsR0FORDtBQU9EOztBQUVNLFNBQVMsSUFBVCxPQUE2RjtBQUFBLE1BQTdFLEVBQTZFLFFBQTdFLEVBQTZFO0FBQUEsNEJBQXpFLFNBQXlFO0FBQUEsTUFBekUsU0FBeUUsa0NBQTdELEVBQTZEO0FBQUEsa0NBQXpELGVBQXlEO0FBQUEsTUFBekQsZUFBeUQsd0NBQXZDLFFBQXVDO0FBQUEsTUFBN0IsSUFBNkIsUUFBN0IsSUFBNkI7QUFBQSxNQUF2QixRQUF1QixRQUF2QixRQUF1QjtBQUFBLE1BQVYsTUFBVTs7QUFDbEcsU0FBTztBQUFBO0FBQUEsZUFBRyxZQUFVLEVBQWIsRUFBbUIsV0FBVyxjQUFJLFNBQUosQ0FBYyxVQUFkLEVBQTBCLFNBQTFCLHNCQUF3QyxlQUF4QyxFQUEwRCxPQUFPLFVBQWpFLEVBQTlCLElBQWtILE1BQWxIO0FBQ0osWUFBUTtBQURKLEdBQVA7QUFHRDs7SUFFWSxVLFdBQUEsVTs7O0FBQ1gsc0JBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLHdIQUNYLEtBRFc7O0FBRWpCLGtCQUFJLFlBQUosUUFBdUIsV0FBdkI7QUFGaUI7QUFHbEI7Ozs7d0NBRW1CO0FBQUE7O0FBQ2pCLE9BQUMsT0FBTyxRQUFQLENBQWdCLElBQWxCLEtBQTRCLE9BQU8sUUFBUCxDQUFnQixJQUFoQixHQUF1QixHQUFuRDtBQUNBLHVCQUFXLFNBQVgsQ0FBcUIsTUFBckIsRUFBNkIsWUFBN0IsRUFBMkMsU0FBM0MsQ0FBcUQ7QUFBQSxlQUFNLE9BQUssUUFBTCxDQUFjLFdBQWQsQ0FBTjtBQUFBLE9BQXJEO0FBQ0Q7Ozs2QkFFUTtBQUFBLG1CQUN5QixLQUFLLEtBRDlCO0FBQUEsVUFDQyxLQURELFVBQ0MsS0FERDtBQUFBLFVBQ1EsSUFEUixVQUNRLElBRFI7QUFBQSxVQUNjLE1BRGQsVUFDYyxNQURkOzs7QUFHUCxVQUFJLENBQUMsSUFBTCxFQUFXO0FBQ1QsZ0JBQVEsS0FBUixDQUFjLHNCQUFkO0FBQ0EsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsYUFBTyxnQkFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLEVBQUUsWUFBRixFQUFTLGNBQVQsRUFBMUIsQ0FBUDtBQUNEOzs7Ozs7QUFHSCxTQUFTLFNBQVQsR0FBcUI7QUFDbkIsTUFBTSxlQUFlLFVBQXJCO0FBQUEsTUFDTSxTQUFTLEVBQUUsT0FBTyxZQUFULEVBRGY7O0FBR0E7QUFDQSxNQUFJLE9BQU8sWUFBUCxDQUFKLEVBQTBCO0FBQ3hCLFdBQU8sRUFBRSxPQUFPLFlBQVQsRUFBdUIsTUFBTSxPQUFPLFlBQVAsRUFBcUIsSUFBbEQsRUFBd0QsY0FBeEQsRUFBUDtBQUNEOztBQUVEO0FBQ0EsTUFBTSxjQUFjLGFBQWEsWUFBYixDQUFwQjtBQUNBLE9BQUksSUFBSSxLQUFSLElBQWlCLE1BQWpCLEVBQXlCO0FBQ3ZCLFFBQU0sV0FBVyxPQUFPLEtBQVAsQ0FBakI7QUFBQSxRQUNNLFlBQVksU0FBUyxJQUQzQjs7QUFHQSxRQUFJLFVBQVUsSUFBZDtBQUNBLGtCQUFJLElBQUosQ0FBUyxTQUFTLElBQWxCLEVBQXdCLElBQXhCLENBQTZCLFVBQUMsU0FBRCxFQUFZLEtBQVosRUFBc0I7QUFDakQsVUFBSSxjQUFjLFlBQVksS0FBWixDQUFsQixFQUFzQztBQUNwQyxZQUFJLFVBQVUsVUFBVixDQUFxQixHQUFyQixDQUFKLEVBQStCO0FBQUU7QUFDL0IsaUJBQU8sVUFBVSxTQUFWLENBQW9CLENBQXBCLENBQVAsSUFBaUMsWUFBWSxLQUFaLENBQWpDO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsb0JBQVUsS0FBVjtBQUNBO0FBQ0Q7QUFDRjtBQUNGLEtBVEQ7O0FBV0EsUUFBSSxPQUFKLEVBQWE7QUFDWCxhQUFPLEVBQUUsT0FBTyxZQUFULEVBQXVCLE1BQU0sU0FBUyxJQUF0QyxFQUE0QyxjQUE1QyxFQUFQO0FBQ0Q7QUFDRjs7QUFFRDtBQUNBLE1BQUksT0FBTyxHQUFQLENBQUosRUFBaUI7QUFDZixXQUFPLEVBQUUsT0FBTyxZQUFULEVBQXVCLE1BQU0sT0FBTyxHQUFQLEVBQVksSUFBekMsRUFBK0MsY0FBL0MsRUFBUDtBQUNEOztBQUVEO0FBQ0EsU0FBTyxFQUFFLE9BQU8sWUFBVCxFQUF1QixNQUFNLElBQTdCLEVBQW1DLGNBQW5DLEVBQVA7QUFDRDs7Ozs7Ozs7Ozs7OztJQ3RGWSxJLFdBQUEsSSxHQUNYLGNBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQixPQUFLLElBQUwsR0FBWSxFQUFaO0FBQ0EsTUFBSSxTQUFTLE1BQU0sTUFBbkIsRUFBMkI7QUFDekIsU0FBSyxJQUFMLEdBQVksS0FBWjtBQUNEO0FBQ0QsT0FBSyxPQUFMLEdBQWU7QUFBQSxXQUFNLE1BQUssSUFBWDtBQUFBLEdBQWY7QUFDQSxPQUFLLEtBQUwsR0FBYTtBQUFBLFdBQU0sTUFBSyxJQUFMLENBQVUsTUFBaEI7QUFBQSxHQUFiO0FBQ0EsT0FBSyxPQUFMLEdBQWU7QUFBQSxXQUFNLE1BQUssS0FBTCxLQUFlLENBQXJCO0FBQUEsR0FBZjs7QUFFQSxPQUFLLEtBQUwsR0FBYTtBQUFBLFdBQVMsTUFBSyxJQUFMLENBQVUsS0FBVixDQUFUO0FBQUEsR0FBYjtBQUNBLE9BQUssUUFBTCxHQUFnQixVQUFDLEtBQUQ7QUFBQSxRQUFRLEtBQVIsdUVBQWdCLENBQWhCO0FBQUEsV0FBc0IsTUFBSyxJQUFMLENBQVUsTUFBVixDQUFpQixLQUFqQixFQUF3QixLQUF4QixDQUF0QjtBQUFBLEdBQWhCO0FBQ0EsT0FBSyxPQUFMLEdBQWUsVUFBQyxLQUFELEVBQVEsR0FBUjtBQUFBLFdBQWdCLElBQUksSUFBSixDQUFTLE1BQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsS0FBaEIsRUFBdUIsR0FBdkIsQ0FBVCxDQUFoQjtBQUFBLEdBQWY7O0FBRUEsT0FBSyxHQUFMLEdBQVc7QUFBQSxXQUFRLE1BQUssSUFBTCxDQUFVLElBQVYsQ0FBZSxJQUFmLENBQVI7QUFBQSxHQUFYO0FBQ0EsT0FBSyxNQUFMLEdBQWMsVUFBQyxLQUFELEVBQVEsSUFBUjtBQUFBLFdBQWlCLE1BQUssSUFBTCxDQUFVLE1BQVYsQ0FBaUIsS0FBakIsRUFBd0IsQ0FBeEIsRUFBMkIsSUFBM0IsQ0FBakI7QUFBQSxHQUFkOztBQUVBLE9BQUssU0FBTCxHQUFpQjtBQUFBLFdBQWEsTUFBSyxJQUFMLENBQVUsU0FBVixDQUFvQixTQUFwQixDQUFiO0FBQUEsR0FBakI7QUFDQSxPQUFLLElBQUwsR0FBWTtBQUFBLFdBQWEsTUFBSyxJQUFMLENBQVUsSUFBVixDQUFlLFNBQWYsQ0FBYjtBQUFBLEdBQVo7QUFDQSxPQUFLLFFBQUwsR0FBZ0I7QUFBQSxXQUFhLE1BQUssSUFBTCxDQUFVLFNBQVYsTUFBeUIsU0FBdEM7QUFBQSxHQUFoQjs7QUFFQSxPQUFLLElBQUwsR0FBWTtBQUFBLFdBQWEsTUFBSyxJQUFMLENBQVUsT0FBVixDQUFrQixTQUFsQixDQUFiO0FBQUEsR0FBWjtBQUNBLE9BQUssTUFBTCxHQUFjO0FBQUEsV0FBYSxJQUFJLElBQUosQ0FBUyxNQUFLLElBQUwsQ0FBVSxNQUFWLENBQWlCLFNBQWpCLENBQVQsQ0FBYjtBQUFBLEdBQWQ7QUFDQSxPQUFLLEdBQUwsR0FBVztBQUFBLFdBQWEsSUFBSSxJQUFKLENBQVMsTUFBSyxJQUFMLENBQVUsR0FBVixDQUFjLFNBQWQsQ0FBVCxDQUFiO0FBQUEsR0FBWDtBQUNBLE9BQUssTUFBTCxHQUFjLFVBQUMsU0FBRCxFQUFZLFlBQVo7QUFBQSxXQUE2QixNQUFLLElBQUwsQ0FBVSxNQUFWLENBQWlCLFNBQWpCLEVBQTRCLFlBQTVCLENBQTdCO0FBQUEsR0FBZDs7QUFFQSxPQUFLLElBQUwsR0FBWTtBQUFBLFdBQWEsTUFBSyxJQUFMLENBQVUsSUFBVixDQUFlLFNBQWYsQ0FBYjtBQUFBLEdBQVo7QUFDRCxDOztJQUdVLFUsV0FBQSxVO0FBQ1gsc0JBQVksU0FBWixFQUF1QjtBQUFBOztBQUFBOztBQUNyQixTQUFLLElBQUwsR0FBWSxFQUFaO0FBQ0EsUUFBSSxTQUFKLEVBQWU7QUFDYixXQUFLLElBQUwsR0FBWSxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLFNBQWxCLENBQVo7QUFDRDs7QUFFRCxTQUFLLElBQUwsR0FBWTtBQUFBLGFBQU0sSUFBSSxJQUFKLENBQVMsT0FBTyxJQUFQLENBQVksT0FBSyxJQUFqQixDQUFULENBQU47QUFBQSxLQUFaO0FBQ0EsU0FBSyxNQUFMLEdBQWM7QUFBQSxhQUFNLElBQUksSUFBSixDQUFTLE9BQU8sTUFBUCxDQUFjLE9BQUssSUFBbkIsQ0FBVCxDQUFOO0FBQUEsS0FBZDs7QUFFQSxTQUFLLEdBQUwsR0FBVyxVQUFDLEdBQUQsRUFBTSxLQUFOO0FBQUEsYUFBZ0IsT0FBSyxJQUFMLENBQVUsR0FBVixJQUFpQixLQUFqQztBQUFBLEtBQVg7QUFDQSxTQUFLLEdBQUwsR0FBVztBQUFBLGFBQU8sT0FBSyxJQUFMLENBQVUsR0FBVixDQUFQO0FBQUEsS0FBWDtBQUNEOzs7O3lCQUVJLFMsRUFBVztBQUNkLFdBQUssSUFBSSxHQUFULElBQWdCLEtBQUssSUFBckIsRUFBMkI7QUFDekIsa0JBQVUsS0FBSyxJQUFMLENBQVUsR0FBVixDQUFWLEVBQTBCLEdBQTFCLEVBQStCLEtBQUssSUFBcEM7QUFDRDtBQUNGOzs7Ozs7Ozs7Ozs7O0FDaERIOzs7Ozs7OztJQUVNLEc7OztBQUNKLGlCQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBSyxPQUFMLEdBQWU7QUFBQSxhQUFVLE1BQUssU0FBTCxDQUFlLElBQWYsQ0FBb0I7QUFBQSxlQUFZLFNBQVMsS0FBVCxDQUFlLE9BQWYsR0FBeUIsTUFBckM7QUFBQSxPQUFwQixDQUFWO0FBQUEsS0FBZjtBQUNBLFVBQUssSUFBTCxHQUFZO0FBQUEsYUFBTSxNQUFLLE9BQUwsQ0FBYSxPQUFiLENBQU47QUFBQSxLQUFaO0FBQ0EsVUFBSyxJQUFMLEdBQVk7QUFBQSxhQUFNLE1BQUssT0FBTCxDQUFhLE1BQWIsQ0FBTjtBQUFBLEtBQVo7QUFKWTtBQUtiOzs7OztrQkFHWSxVQUFDLFFBQUQ7QUFBQSxTQUFjLElBQUksR0FBSixDQUFRLFNBQVMsZ0JBQVQsQ0FBMEIsUUFBMUIsQ0FBUixDQUFkO0FBQUEsQzs7Ozs7Ozs7Ozs7Ozs7UUM2RUMsSSxHQUFBLEk7UUFlQSxRLEdBQUEsUTs7QUF2R2hCOztBQUNBOzs7Ozs7SUFFYSxHLFdBQUEsRztBQUNYLGlCQUFjO0FBQUE7O0FBQ1osU0FBSyxHQUFMLEdBQVcsUUFBUSxPQUFSLEVBQWlCLE9BQTVCO0FBQ0EsU0FBSyxNQUFMLEdBQWMsUUFBUSxVQUFSLEVBQW9CLE9BQWxDO0FBQ0EsU0FBSyxJQUFMLEdBQVksUUFBUSxjQUFSLEVBQXVCLE9BQW5DO0FBQ0EsU0FBSyxJQUFMLEdBQVk7QUFBQSxhQUFTLHFCQUFTLEtBQVQsQ0FBVDtBQUFBLEtBQVo7QUFDQSxTQUFLLEdBQUwsR0FBVztBQUFBLGFBQWEsMkJBQWUsU0FBZixDQUFiO0FBQUEsS0FBWDtBQUNBLFNBQUssWUFBTCxHQUFvQiw0QkFBcEI7O0FBRUEsU0FBSyxZQUFMLEdBQW9CLEtBQUssY0FBTCxFQUFwQjtBQUNBLFNBQUssWUFBTCxHQUFvQixDQUFwQjtBQUNBLFNBQUssa0JBQUwsR0FBMEIsRUFBMUI7QUFDQSxTQUFLLGlCQUFMLEdBQXlCLGdDQUF6Qjs7QUFFQSxTQUFLLFdBQUwsR0FBbUIsaUJBQVM7QUFBRSxVQUFNLGNBQWMsS0FBZCx5Q0FBYyxLQUFkLENBQU4sQ0FBMkIsT0FBTyxTQUFTLFFBQVQsSUFBcUIsU0FBUyxRQUE5QixJQUEwQyxTQUFTLFNBQTFEO0FBQXNFLEtBQS9IO0FBQ0EsU0FBSyxRQUFMLEdBQWdCO0FBQUEsYUFBVSxPQUFPLEtBQVIsS0FBbUIsUUFBNUI7QUFBQSxLQUFoQjtBQUNBLFNBQUssVUFBTCxHQUFrQjtBQUFBLGFBQVMsQ0FBQyxDQUFDLEtBQUYsSUFBVyxPQUFPLEtBQVAsS0FBaUIsVUFBckM7QUFBQSxLQUFsQjtBQUNBLFNBQUssUUFBTCxHQUFnQjtBQUFBLGFBQVMsU0FBUyxJQUFULENBQWMsS0FBZCxNQUF5QixpQkFBbEM7QUFBQSxLQUFoQjtBQUNBLFNBQUssT0FBTCxHQUFlO0FBQUEsYUFBUyxTQUFTLElBQVQsQ0FBYyxLQUFkLE1BQXlCLGdCQUFsQztBQUFBLEtBQWY7O0FBRUEsU0FBSyxLQUFMLEdBQWE7QUFBQSxhQUFPLEtBQUssS0FBTCxDQUFXLEtBQUssU0FBTCxDQUFlLEdBQWYsQ0FBWCxDQUFQO0FBQUEsS0FBYixDQW5CWSxDQW1CeUM7O0FBRXJELFNBQUssUUFBTCxHQUFnQixVQUFDLE1BQUQsRUFBUyxNQUFUO0FBQUEsYUFBb0IsaUJBQVcsUUFBWCxDQUFvQixPQUFPLE1BQTNCLEVBQW1DLFNBQW5DLENBQTZDO0FBQUEsZUFBSyxRQUFMO0FBQUEsT0FBN0MsQ0FBcEI7QUFBQSxLQUFoQjtBQUNEOzs7OzZCQUVRO0FBQ1AsYUFBTyxPQUFPLE1BQVAsQ0FBYyxLQUFkLENBQW9CLElBQXBCLEVBQTBCLFNBQTFCLENBQVAsQ0FETyxDQUNzQztBQUM5Qzs7O2lDQUVZLEksRUFBTSxLLEVBQU87QUFBQTs7QUFDeEIsVUFBSSxDQUFDLElBQUQsSUFBUyxDQUFDLEtBQWQsRUFBcUI7QUFBRTtBQUFTO0FBQ2hDLFdBQUssS0FBTCxHQUFhLEtBQWI7O0FBRndCLGlDQUdmLEtBSGU7QUFJdEIscUJBQVcsTUFBSyxNQUFMLENBQVksVUFBWixDQUF1QixLQUF2QixDQUFYLElBQThDO0FBQUEsaUJBQVMsS0FBSyxRQUFMLHFCQUFpQixLQUFqQixFQUF5QixLQUF6QixFQUFUO0FBQUEsU0FBOUM7QUFKc0I7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBR3hCLDZCQUFrQixPQUFPLElBQVAsQ0FBWSxLQUFaLENBQWxCLDhIQUFzQztBQUFBLGNBQTdCLEtBQTZCOztBQUFBLGdCQUE3QixLQUE2QjtBQUVyQztBQUx1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTXpCOzs7Z0NBRXlCO0FBQUE7O0FBQ3hCLFVBQU0sTUFBTSxFQUFaOztBQUR3Qix3Q0FBYixXQUFhO0FBQWIsbUJBQWE7QUFBQTs7QUFHeEIsV0FBSyxJQUFMLENBQVUsV0FBVixFQUF1QixJQUF2QixDQUE0QixlQUFPO0FBQ2pDLFlBQUksQ0FBQyxHQUFMLEVBQVU7QUFDUjtBQUNEOztBQUVELFlBQUksT0FBTyxHQUFQLEtBQWUsUUFBbkIsRUFBNkI7QUFDM0IsY0FBSSxJQUFKLENBQVMsR0FBVDtBQUNELFNBRkQsTUFFTyxJQUFJLE9BQUssUUFBTCxDQUFjLEdBQWQsQ0FBSixFQUF3QjtBQUM3QixlQUFLLElBQUksR0FBVCxJQUFnQixHQUFoQixFQUFxQjtBQUNuQixnQkFBSSxJQUFJLEdBQUosTUFBYSxJQUFqQixFQUF1QjtBQUNyQixrQkFBSSxJQUFKLENBQVMsR0FBVDtBQUNEO0FBQ0Y7QUFDRjtBQUNGLE9BZEQ7QUFlQSxhQUFPLElBQUksSUFBSixDQUFTLEdBQVQsQ0FBUDtBQUNEOztBQUVEOzs7O2tDQUNjLEksRUFBTTtBQUNsQixVQUFNLE1BQU0sU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQVo7QUFDQSxVQUFJLFNBQUosR0FBZ0IsSUFBaEI7QUFDQSxhQUFPLElBQUksUUFBSixDQUFhLENBQWIsQ0FBUDtBQUNEOzs7cUNBRWdCO0FBQ2YsVUFBTSxRQUFRLEtBQUssYUFBTCxDQUFtQix5RUFBbkIsQ0FBZDtBQUNBLGVBQVMsSUFBVCxDQUFjLFdBQWQsQ0FBMEIsS0FBMUI7QUFDQSxVQUFNLGdCQUFnQixNQUFNLFdBQTVCOztBQUVBO0FBQ0EsVUFBTSxRQUFRLEtBQUssYUFBTCxDQUFtQixrQ0FBbkIsQ0FBZDtBQUNBLFlBQU0sV0FBTixDQUFrQixLQUFsQjtBQUNBLFVBQU0sa0JBQWtCLE1BQU0sV0FBOUI7O0FBRUE7QUFDQSxZQUFNLFVBQU4sQ0FBaUIsV0FBakIsQ0FBNkIsS0FBN0I7O0FBRUEsYUFBTyxnQkFBZ0IsZUFBdkI7QUFDRDtBQUNEOzs7Ozs7O2tCQUdhLElBQUksR0FBSixFO0FBRVIsU0FBUyxJQUFULENBQWMsTUFBZCxFQUFzQixJQUF0QixFQUE0QixVQUE1QixFQUF3QztBQUM3QyxNQUFNLEtBQUssV0FBVyxLQUF0Qjs7QUFFQSxNQUFJLE9BQU8sRUFBUCxLQUFjLFVBQWxCLEVBQThCO0FBQzVCLFVBQU0sSUFBSSxLQUFKLGdFQUFzRSxFQUF0RSx5Q0FBc0UsRUFBdEUsR0FBTjtBQUNEOztBQUVELFNBQU87QUFDTCxrQkFBYyxJQURUO0FBRUwsT0FGSyxpQkFFQztBQUNKLGFBQU8sR0FBRyxJQUFILENBQVEsSUFBUixDQUFQO0FBQ0Q7QUFKSSxHQUFQO0FBTUQ7O0FBRU0sU0FBUyxRQUFULENBQWtCLElBQWxCLEVBQW9DO0FBQUEsTUFBWixJQUFZLHVFQUFMLEdBQUs7O0FBQ3pDLE1BQUksZ0JBQUo7QUFDQSxTQUFPLFlBQVc7QUFDaEIsUUFBTSxVQUFVLElBQWhCO0FBQUEsUUFDTSxPQUFPLFNBRGI7QUFBQSxRQUVNLFFBQVEsU0FBUixLQUFRLEdBQVc7QUFDakIsV0FBSyxLQUFMLENBQVcsT0FBWCxFQUFvQixJQUFwQjtBQUNELEtBSlA7O0FBTUEsaUJBQWEsT0FBYjtBQUNBLGNBQVUsV0FBVyxLQUFYLEVBQWtCLElBQWxCLENBQVY7QUFDRCxHQVREO0FBVUQ7Ozs7Ozs7Ozs7Ozs7SUNuSEssTTtBQUNKLG9CQUFjO0FBQUE7O0FBQ1osU0FBSyxVQUFMLEdBQWtCO0FBQUEsYUFBUyxNQUFNLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLFdBQWhCLEtBQWdDLE1BQU0sS0FBTixDQUFZLENBQVosQ0FBekM7QUFBQSxLQUFsQjs7QUFFQSxTQUFLLFVBQUwsR0FBa0I7QUFBQSxhQUFTLE1BQU0sT0FBTixDQUFjLElBQWQsRUFBb0IsT0FBcEIsRUFDTSxPQUROLENBQ2MsSUFEZCxFQUNvQixNQURwQixFQUVNLE9BRk4sQ0FFYyxJQUZkLEVBRW9CLE1BRnBCLEVBR00sT0FITixDQUdjLElBSGQsRUFHb0IsT0FIcEIsRUFJTSxPQUpOLENBSWMsSUFKZCxFQUlvQixRQUpwQixDQUFUO0FBQUEsS0FBbEI7O0FBTUEsU0FBSyxVQUFMLEdBQWtCO0FBQUEsYUFBUyxNQUFNLE9BQU4sQ0FBYyxRQUFkLEVBQXdCLEVBQXhCLEVBQ00sT0FETixDQUNjLE9BRGQsRUFDdUIsR0FEdkIsRUFFTSxPQUZOLENBRWMsUUFGZCxFQUV3QixHQUZ4QixFQUdNLE9BSE4sQ0FHYyxRQUhkLEVBR3dCLEdBSHhCLEVBSU0sT0FKTixDQUljLFNBSmQsRUFJeUIsR0FKekIsQ0FBVDtBQUFBLEtBQWxCO0FBS0Q7Ozs7a0NBRWEsTSxFQUFRLEcsRUFBSyxNLEVBQVE7QUFDakMsWUFBUyxRQUFRLFNBQVIsR0FBb0IsR0FBcEIsR0FBMEIsR0FBbkM7QUFDQSxlQUFTLFdBQVcsS0FBWCxHQUFtQixVQUFTLENBQVQsRUFBWTtBQUFFLGVBQU8sQ0FBUDtBQUFXLE9BQTVDLEdBQStDLGtCQUF4RDs7QUFFQSxVQUFJLFFBQVEsRUFBWjtBQUNBLFdBQUssSUFBSSxHQUFULElBQWdCLE1BQWhCLEVBQXdCO0FBQ3RCLGNBQU0sSUFBTixDQUFjLEdBQWQsU0FBcUIsT0FBTyxPQUFPLEdBQVAsQ0FBUCxDQUFyQjtBQUNEO0FBQ0QsYUFBTyxNQUFNLElBQU4sQ0FBVyxHQUFYLENBQVA7QUFDRDs7Ozs7O2tCQUdZLElBQUksTUFBSixFOzs7Ozs7Ozs7Ozs7QUM3QmY7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCLGE7OztBQUNuQix5QkFBWSxNQUFaLEVBQW9CO0FBQUE7O0FBR2xCO0FBSGtCOztBQUlsQixVQUFLLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxVQUFLLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxVQUFLLFdBQUwsR0FBbUIsQ0FBbkI7QUFDQSxVQUFLLE9BQUwsR0FBZSxtQkFBZjtBQUNBLFVBQUssVUFBTCxHQUFrQixJQUFsQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxVQUFLLFlBQUwsR0FBb0I7QUFBQSxhQUFVLG9CQUFVLE1BQVYsUUFBVjtBQUFBLEtBQXBCO0FBQ0EsVUFBSyxVQUFMLEdBQWtCLE1BQUssT0FBdkI7QUFDQSxVQUFLLFdBQUwsR0FBbUIsTUFBSyxHQUFMLENBQVM7QUFBQSxhQUFVLE9BQU8sT0FBUCxFQUFWO0FBQUEsS0FBVCxFQUFxQyxPQUFyQyxFQUFuQjtBQUNBLFVBQUssa0JBQUwsR0FBMEI7QUFBQSxhQUFNLE1BQUssTUFBTCxDQUFZO0FBQUEsZUFBVSxPQUFPLFVBQVAsRUFBVjtBQUFBLE9BQVosQ0FBTjtBQUFBLEtBQTFCO0FBQ0EsVUFBSyxrQkFBTCxHQUEwQjtBQUFBLGFBQU0sTUFBSyxNQUFMLENBQVk7QUFBQSxlQUFVLE9BQU8sUUFBakI7QUFBQSxPQUFaLENBQU47QUFBQSxLQUExQjtBQUNBLFVBQUssYUFBTCxHQUFxQjtBQUFBLGFBQU0sTUFBSyxNQUFMLENBQVk7QUFBQSxlQUFVLE9BQU8sY0FBUCxFQUFWO0FBQUEsT0FBWixDQUFOO0FBQUEsS0FBckI7QUFDQSxVQUFLLFNBQUwsR0FBaUI7QUFBQSxhQUFZLE1BQUssT0FBTCxDQUFhLFNBQWIsQ0FBdUIsRUFBRSxNQUFNO0FBQUEsaUJBQVMsU0FBUyxLQUFULENBQVQ7QUFBQSxTQUFSLEVBQXZCLENBQVo7QUFBQSxLQUFqQjtBQUNBLFVBQUssU0FBTCxHQUFpQjtBQUFBLGFBQU0sTUFBSyxPQUFMLENBQWEsSUFBYixPQUFOO0FBQUEsS0FBakI7QUFDQTs7QUFFQSxrQkFBSSxNQUFKLFFBQWlCLE1BQWpCO0FBekJrQjtBQTBCbkI7Ozs7Z0NBRXlCO0FBQUEsVUFBaEIsTUFBZ0IsdUVBQVAsS0FBTzs7QUFDeEIsV0FBSyxJQUFMLEdBQVksRUFBWjtBQUNBLE9BQUMsTUFBRCxJQUFXLEtBQUssU0FBTCxFQUFYO0FBQ0Q7Ozs2QkFFUSxJLEVBQU07QUFDYixXQUFLLFNBQUwsQ0FBZSxJQUFmO0FBQ0EsV0FBSyxJQUFMLEdBQWEscUJBQVMsSUFBVCxDQUFELENBQWlCLEdBQWpCLENBQXFCLEtBQUssWUFBTCxDQUFrQixJQUFsQixDQUF1QixJQUF2QixDQUFyQixFQUFtRCxPQUFuRCxFQUFaO0FBQ0EsV0FBSyxTQUFMO0FBQ0Q7OztvQ0FFZTtBQUNkLFdBQUssa0JBQUwsR0FBMEIsSUFBMUIsQ0FBK0I7QUFBQSxlQUFVLE9BQU8sSUFBUCxFQUFWO0FBQUEsT0FBL0I7QUFDQSxXQUFLLFNBQUw7QUFDRDs7O29DQUVlO0FBQ2QsV0FBSyxrQkFBTCxHQUEwQixJQUExQixDQUErQjtBQUFBLGVBQVUsT0FBTyxNQUFQLENBQWMsSUFBZCxDQUFWO0FBQUEsT0FBL0I7QUFDQSxXQUFLLFNBQUw7QUFDRDs7O2dDQUVvQjtBQUFBLFVBQVgsSUFBVyx1RUFBSixFQUFJOztBQUNuQixXQUFLLEdBQUwsQ0FBUyxLQUFLLFlBQUwsQ0FBa0IsSUFBbEIsQ0FBVDtBQUNBLFdBQUssU0FBTDtBQUNEOzs7NENBRXVCO0FBQ3RCLFdBQUssSUFBTCxHQUFZLEtBQUssSUFBTCxDQUFVLE1BQVYsQ0FBaUI7QUFBQSxlQUFVLENBQUMsT0FBTyxRQUFsQjtBQUFBLE9BQWpCLENBQVo7QUFDQSxXQUFLLFNBQUw7QUFDRDs7O3NDQUVpQjtBQUNoQixVQUFNLGNBQWMsS0FBSyxrQkFBTCxHQUEwQixLQUExQixPQUFzQyxLQUFLLEtBQUwsRUFBMUQ7QUFDQSxXQUFLLElBQUwsQ0FBVTtBQUFBLGVBQVUsT0FBTyxRQUFQLEdBQWtCLENBQUMsV0FBN0I7QUFBQSxPQUFWO0FBQ0EsV0FBSyxTQUFMO0FBQ0Q7Ozs7OztrQkFoRWtCLGE7Ozs7Ozs7Ozs7O0FDTHJCOzs7O0lBRU0sSTs7Ozs7OztrQ0FDZ0Y7QUFBQSxVQUExRSxHQUEwRSxRQUExRSxHQUEwRTtBQUFBLDZCQUFyRSxNQUFxRTtBQUFBLFVBQXJFLE1BQXFFLCtCQUE1RCxLQUE0RDtBQUFBLG1DQUFyRCxZQUFxRDtBQUFBLFVBQXJELFlBQXFELHFDQUF0QyxNQUFzQztBQUFBLFVBQTlCLE1BQThCLFFBQTlCLE1BQThCO0FBQUEsVUFBdEIsSUFBc0IsUUFBdEIsSUFBc0I7QUFBQSxVQUFoQixJQUFnQixRQUFoQixJQUFnQjtBQUFBLFVBQVYsTUFBVSxRQUFWLE1BQVU7O0FBQ2xGLHVCQUFXLElBQVgsQ0FBZ0I7QUFDZCxnQkFEYztBQUVkLHNCQUZjO0FBR2QsaUJBQVMsRUFBRSxnQkFBZ0Isa0JBQWxCLEVBSEs7QUFJZCxjQUFNLFdBQVcsTUFBWCxJQUFxQixNQUpiO0FBS2Q7QUFMYyxPQUFoQixFQU9DLFNBUEQsQ0FPVztBQUNULGNBQU07QUFBQSxpQkFBUyxRQUFRLEtBQUssTUFBTSxRQUFYLENBQWpCO0FBQUEsU0FERztBQUVULGVBQU87QUFBQSxpQkFBTyxRQUFRLEtBQUssSUFBSSxPQUFKLElBQWUsSUFBSSxRQUF4QixDQUFmO0FBQUEsU0FGRTtBQUdULGtCQUFVO0FBSEQsT0FQWDtBQVlEOzs7Ozs7a0JBR1ksSUFBSSxJQUFKLEU7Ozs7Ozs7Ozs7QUNuQmY7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCLFU7OztBQUNuQixzQkFBWSxNQUFaLEVBQW9CO0FBQUE7O0FBQUE7O0FBRWxCLGtCQUFJLE1BQUosUUFBaUIsTUFBakI7QUFGa0I7QUFHbkI7Ozs7O2tCQUprQixVOzs7Ozs7Ozs7Ozs7QUNIckI7Ozs7Ozs7O0lBRXFCLEs7QUFDbkIsaUJBQVksSUFBWixFQUFrQixLQUFsQixFQUF5QjtBQUFBOztBQUFBOztBQUN2QjtBQUNBLFNBQUssUUFBTCxHQUFnQixLQUFoQjtBQUNBOztBQUVBO0FBQ0EsU0FBSyxJQUFMLEdBQVksSUFBWjtBQUNBLFNBQUssS0FBTCxHQUFhLEtBQWI7QUFDQSxRQUFNLGNBQWUsU0FBUyxNQUFNLE1BQWhCLEdBQTBCLE1BQU0sTUFBaEMsR0FBeUMsRUFBN0Q7QUFDQSxTQUFLLE1BQUwsR0FBYyxjQUFJLElBQUosQ0FBUyxXQUFULEVBQXNCLEdBQXRCLENBQTBCO0FBQUEsYUFBUyxjQUFJLFFBQUosQ0FBYSxLQUFiLElBQXVCLEVBQUUsTUFBTSxLQUFSLEVBQWUsTUFBTSxRQUFyQixFQUF2QixHQUEwRCxLQUFuRTtBQUFBLEtBQTFCLENBQWQ7QUFDQSxTQUFLLFVBQUwsR0FBa0IsUUFBUSxNQUFNLFVBQWQsR0FBMkIsSUFBN0M7QUFDQTs7QUFFQTtBQUNBLFNBQUssT0FBTCxHQUFlO0FBQUEsYUFBTSxNQUFLLElBQVg7QUFBQSxLQUFmO0FBQ0EsU0FBSyxHQUFMLEdBQVc7QUFBQSxhQUFhLE1BQUssSUFBTCxDQUFVLFNBQVYsQ0FBYjtBQUFBLEtBQVg7QUFDQTs7QUFFQSxTQUFLLElBQUw7QUFDRDs7Ozt3QkFFRyxTLEVBQVcsUSxFQUFVLE0sRUFBUTtBQUMvQixXQUFLLElBQUwsQ0FBVSxTQUFWLElBQXVCLFFBQXZCO0FBQ0EsV0FBSyxRQUFMLEdBQWdCLENBQUMsS0FBSyxPQUFMLENBQWEsU0FBYixDQUFqQjtBQUNDLE9BQUMsTUFBRCxJQUFXLEtBQUssS0FBakIsSUFBNEIsS0FBSyxLQUFMLENBQVcsU0FBWCxFQUE1QjtBQUNEOzs7MkJBRU07QUFDTCxXQUFLLE9BQUwsR0FBZSxjQUFJLEtBQUosQ0FBVSxLQUFLLElBQWYsQ0FBZjtBQUNBLFdBQUssUUFBTCxHQUFnQixLQUFoQjtBQUNEOzs7MkJBRU0sTSxFQUFRO0FBQ2IsV0FBSyxJQUFMLEdBQVksY0FBSSxLQUFKLENBQVUsS0FBSyxPQUFmLENBQVo7QUFDQSxXQUFLLElBQUw7QUFDQyxPQUFDLE1BQUQsSUFBVyxLQUFLLEtBQWpCLElBQTRCLEtBQUssS0FBTCxDQUFXLFNBQVgsRUFBNUI7QUFDRDs7OzRCQUVPLFMsRUFBVztBQUNqQixVQUFNLFdBQVcsS0FBSyxPQUFMLENBQWEsU0FBYixDQUFqQjtBQUFBLFVBQ00sV0FBVyxLQUFLLElBQUwsQ0FBVSxTQUFWLENBRGpCO0FBQUEsVUFFTSxRQUFRLEtBQUssTUFBTCxDQUFZLElBQVosQ0FBaUI7QUFBQSxlQUFTLE1BQU0sSUFBTixLQUFlLFNBQXhCO0FBQUEsT0FBakIsQ0FGZDs7QUFJQSxhQUFRLFNBQVMsTUFBTSxNQUFoQixHQUEwQixNQUFNLE1BQU4sQ0FBYSxRQUFiLEVBQXVCLFFBQXZCLENBQTFCLEdBQTZELGFBQWEsUUFBakY7QUFDRDs7OytCQUVVLFMsRUFBVztBQUFBOztBQUNwQixVQUFJLENBQUMsS0FBSyxPQUFMLENBQWEsS0FBSyxVQUFsQixDQUFMLEVBQW9DO0FBQUU7QUFDcEMsZUFBTyxLQUFQO0FBQ0Q7O0FBRUQsYUFBTyxZQUFZLENBQUMsS0FBSyxPQUFMLENBQWEsU0FBYixDQUFiLEdBQXVDLEtBQUssTUFBTCxDQUFZLFFBQVosQ0FBcUI7QUFBQSxlQUFTLENBQUMsT0FBSyxPQUFMLENBQWEsTUFBTSxJQUFuQixDQUFWO0FBQUEsT0FBckIsQ0FBOUM7QUFDRDs7O2dDQUVXLFEsRUFBVSxNLEVBQVE7QUFDNUIsV0FBSyxRQUFMLEdBQWdCLFFBQWhCO0FBQ0MsT0FBQyxNQUFELElBQVcsS0FBSyxLQUFqQixJQUE0QixLQUFLLEtBQUwsQ0FBVyxTQUFYLEVBQTVCO0FBQ0Q7Ozs7OztrQkExRGtCLEs7Ozs7Ozs7Ozs7OztBQ0ZyQjs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUIsVTs7O0FBQ25CLHNCQUFZLE1BQVosRUFBb0I7QUFBQTs7QUFHbEI7QUFIa0I7O0FBSWxCLFVBQUssS0FBTCxHQUFhO0FBQ1gsY0FBUSxFQURHO0FBRVgsY0FBUTtBQUZHLEtBQWI7QUFJQTs7QUFFQSxrQkFBSSxNQUFKLFFBQWlCLE1BQWpCO0FBVmtCO0FBV25COzs7OzJCQUVpQztBQUFBOztBQUFBLHFGQUFKLEVBQUk7QUFBQSxVQUEzQixJQUEyQixRQUEzQixJQUEyQjtBQUFBLFVBQXJCLElBQXFCLFFBQXJCLElBQXFCO0FBQUEsVUFBZixNQUFlLFFBQWYsTUFBZTs7QUFBQSxtQkFDNkIsS0FBSyxLQURsQztBQUFBLFVBQzFCLEdBRDBCLFVBQzFCLEdBRDBCO0FBQUEsaUNBQ3JCLE1BRHFCO0FBQUEsVUFDckIsTUFEcUIsaUNBQ1osS0FEWTtBQUFBLHVDQUNMLFlBREs7QUFBQSxVQUNMLFlBREssdUNBQ1UsTUFEVjtBQUFBLFVBQ2tCLE1BRGxCLFVBQ2tCLE1BRGxCOztBQUUvQixpQkFBVyxLQUFYLElBQW9CLE1BQXJCLEtBQWlDLE1BQVMsR0FBVCxTQUFnQixPQUFPLGFBQVAsQ0FBcUIsTUFBckIsQ0FBakQ7QUFDQSx1QkFBVyxJQUFYLENBQWdCO0FBQ2QsZ0JBRGM7QUFFZCxzQkFGYztBQUdkLGlCQUFTLEVBQUUsZ0JBQWdCLGtCQUFsQixFQUhLO0FBSWQsY0FBTSxXQUFXLE1BQVgsSUFBcUIsTUFKYjtBQUtkO0FBTGMsT0FBaEIsRUFPQyxTQVBELENBT1c7QUFDVCxjQUFNLHFCQUFTO0FBQUEsOEJBQzRDLE9BQUssS0FEakQsQ0FDTCxNQURLO0FBQUEsd0RBQ3FDLEVBRHJDO0FBQUEsY0FDSyxZQURMLGlCQUNLLFlBREw7QUFBQSxjQUNtQixhQURuQixpQkFDbUIsYUFEbkI7QUFBQSxjQUVQLFFBRk8sR0FFTSxLQUZOLENBRVAsUUFGTzs7QUFHYixjQUFJLElBQUosRUFBVTtBQUFFLHVCQUFXLEtBQUssUUFBTCxDQUFYO0FBQTBCO0FBQ3RDLGlCQUFLLFFBQUwsQ0FBYyxlQUFlLFNBQVMsWUFBVCxDQUFmLEdBQXdDLFFBQXREO0FBQ0EsaUJBQUssVUFBTCxHQUFtQixPQUFLLFFBQUwsSUFBaUIsYUFBbEIsR0FBbUMsU0FBUyxhQUFULENBQW5DLEdBQTZELE9BQUssS0FBTCxFQUEvRTtBQUNELFNBUFE7QUFRVCxlQUFPLG9CQUFPO0FBQ1osa0JBQVEsS0FBUixDQUFjLElBQUksT0FBSixJQUFlLElBQUksUUFBakM7QUFDQSxrQkFBUSxLQUFLLElBQUksT0FBSixJQUFlLElBQUksUUFBeEIsQ0FBUjtBQUNELFNBWFE7QUFZVCxrQkFBVTtBQVpELE9BUFg7QUFxQkQ7OzsyQkFFc0M7QUFBQTs7QUFBQSxzRkFBSixFQUFJO0FBQUEsVUFBaEMsR0FBZ0MsU0FBaEMsR0FBZ0M7QUFBQSxVQUEzQixJQUEyQixTQUEzQixJQUEyQjtBQUFBLFVBQXJCLElBQXFCLFNBQXJCLElBQXFCO0FBQUEsVUFBZixNQUFlLFNBQWYsTUFBZTs7QUFBQSxvQkFDeUIsS0FBSyxLQUQ5QjtBQUFBLHlDQUM3QixZQUQ2QjtBQUFBLFVBQzdCLFlBRDZCLHdDQUNkLE1BRGM7QUFBQSxtQ0FDTixNQURNO0FBQUEsc0RBQ2tCLEVBRGxCO0FBQUEsVUFDSSxTQURKLGtCQUNJLFNBREo7O0FBRXJDLFVBQUksU0FBUyxLQUFLLGtCQUFMLEdBQTBCLEdBQTFCLENBQThCO0FBQUEsZUFBVSxPQUFPLElBQWpCO0FBQUEsT0FBOUIsRUFBcUQsT0FBckQsRUFBYjtBQUNBLG9CQUFjLFNBQVMsVUFBVSxNQUFWLENBQXZCO0FBQ0EsdUJBQVcsSUFBWCxDQUFnQjtBQUNkLGFBQUssT0FBTyxLQUFLLEtBQUwsQ0FBVyxHQURUO0FBRWQsZ0JBQVEsTUFGTTtBQUdkLGlCQUFTLEVBQUUsZ0JBQWdCLGtCQUFsQixFQUhLO0FBSWQsY0FBTSxNQUpRO0FBS2Q7QUFMYyxPQUFoQixFQU9DLFNBUEQsQ0FPVztBQUNULGNBQU0scUJBQVM7QUFDYixpQkFBSyxhQUFMO0FBQ0EsaUJBQU8sT0FBTyxLQUFLLE1BQU0sUUFBWCxDQUFQLEdBQThCLE1BQU0sUUFBM0M7QUFDRCxTQUpRO0FBS1QsZUFBTyxvQkFBTztBQUNaLGtCQUFRLEtBQVIsQ0FBYyxJQUFJLE9BQUosSUFBZSxJQUFJLFFBQWpDO0FBQ0Esa0JBQVEsS0FBSyxJQUFJLE9BQUosSUFBZSxJQUFJLFFBQXhCLENBQVI7QUFDRCxTQVJRO0FBU1Qsa0JBQVU7QUFURCxPQVBYO0FBa0JEOzs7Ozs7a0JBOURrQixVOzs7Ozs7Ozs7QUNKckI7Ozs7Ozs7O0lBRU0sWTs7Ozs7Ozs7Ozs7O2tCQUVTLElBQUksWUFBSixFOzs7Ozs7Ozs7QUNKZjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUVlLGtCQUFVO0FBQ3ZCLE1BQUksQ0FBQyxPQUFPLElBQVosRUFBa0I7QUFDaEIsV0FBTyx5QkFBZSxNQUFmLENBQVA7QUFDRCxHQUZELE1BRU8sSUFBSSxPQUFPLElBQVAsS0FBZ0IsT0FBcEIsRUFBNkI7QUFDbEMsV0FBTyx5QkFBZSxNQUFmLENBQVA7QUFDRCxHQUZNLE1BRUE7QUFDTCxXQUFPLDRCQUFrQixNQUFsQixDQUFQO0FBQ0Q7QUFDRixDOzs7Ozs7Ozs7Ozs7Ozs7OzttQkM2QlEsVTs7Ozs7O21CQUFZLEk7Ozs7Ozs7OztzQkFDWixTOzs7Ozs7Ozs7aUJBQ0EsTTs7Ozs7O2lCQUFRLFU7Ozs7OztpQkFBWSxLOzs7Ozs7aUJBQU8sUzs7Ozs7O2lCQUFXLFE7Ozs7OztpQkFBVSxROzs7Ozs7Ozs7eUNBQ2hELE87Ozs7QUF6Q1Q7Ozs7O21CQTBDUyxNOzs7O0FBM0NUOzs7OztnQkErQ1MsSTs7Ozs7O2dCQUFNLFE7Ozs7OzttQkFDTixLOzs7Ozs7Ozs7Z0RBQ0EsTzs7Ozs7Ozs7OzhDQUNBLE87Ozs7Ozs7Ozs0Q0FDQSxPOzs7Ozs7Ozs7MENBQ0EsTzs7OztBQXZEVDs7QUFDQTs7OztBQUNBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7O0lBRU0sSTs7O0FBQ0osa0JBQWM7QUFBQTs7QUFBQTs7QUFFWixVQUFLLFlBQUw7QUFDQSxVQUFLLGFBQUw7QUFIWTtBQUliOzs7Ozs7OztZQUVtQixNLFFBQUEsTTtZQUFRLE0sUUFBQSxNOzs7Ozs7QUFDMUIsb0JBQUksTUFBSixFQUFZO0FBQ1YsdUJBQUssSUFBTCxDQUFVLE1BQVYsRUFBa0IsSUFBbEIsQ0FBdUIsaUJBQVM7QUFDOUIsNEJBQVEsTUFBTSxPQUFkO0FBQ0EsMkJBQUssWUFBTCxDQUFrQixHQUFsQixDQUFzQixNQUFNLE9BQTVCLEVBQXFDLEtBQXJDO0FBQ0QsbUJBSEQ7QUFJRDs7cUJBQ0csTTs7Ozs7QUFDSSxvQixHQUFPLEtBQUssYUFBTCxDQUFtQiw2QkFBbkIsQzs7dUJBQ1UsUTs7O0FBQWpCLHdCOztBQUNOLHlCQUFTLElBQVQsQ0FBYyxXQUFkLENBQTBCLElBQTFCO0FBQ0Esc0NBQU8sUUFBUCxFQUFpQixJQUFqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQUlZLE8sRUFBUztBQUN2QixXQUFLLGFBQUwsQ0FBbUIsTUFBbkIsQ0FBMEI7QUFDeEIsZUFBTyxPQURpQjtBQUV4QixjQUFNLE9BRmtCO0FBR3hCLGlCQUFTLFdBQVcsS0FBSyxpQkFIRDtBQUl4QixpQkFBUztBQUplLE9BQTFCO0FBTUQ7Ozs7OztrQkFHWSxJQUFJLElBQUosRTs7QUFFZiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmV4dCBmcm9tICd+L3JleHQnO1xuaW1wb3J0IFZpZXdwb3J0IGZyb20gJy4vY29tcG9uZW50cy92aWV3cG9ydC92aWV3cG9ydCc7XG5cblJleHQuYXBwbGljYXRpb24oe1xuICBzdG9yZXM6IFtcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvZXhhbXBsZS9zdG9yZXMvY2FyZCcpLFxuICBdLFxuICB2aWV3czogW1xuICAgIHJlcXVpcmUoJy4vY29tcG9uZW50cy9nZXR0aW5nLXN0YXJ0ZWQvZ2V0dGluZy1zdGFydGVkJyksXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2NvcmUtY29uY2VwdHMvY29tcG9uZW50JyksXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2NvcmUtY29uY2VwdHMvc2NyZWVuLW5hdmlnYXRpb24nKSxcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvY29yZS1jb25jZXB0cy9kYXRhLXBhY2thZ2UnKSxcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvYXJjaGl0ZWN0dXJlL2FyY2hpdGVjdHVyZScpLFxuICAgIC8vIHJlcXVpcmUoJy4vY29tcG9uZW50cy91aS1jb21wb25lbnRzL2dyaWQnKSxcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvZXhhbXBsZS9kYXNoYm9hcmQnKSxcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvZXhhbXBsZS9zZWFyY2gnKSxcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvZXhhbXBsZS9kZXRhaWxzJyksXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2V4YW1wbGUvbm90Zm91bmQnKSxcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvZXhhbXBsZS9jYXJkcycpLFxuICBdLFxuICBsYXVuY2g6ICgpID0+IDxWaWV3cG9ydCAvPlxufSk7IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29udGFpbmVyIH0gZnJvbSAnfi9yZXh0JztcblxuQFJvdXRlKCcvYXJjaGl0ZWN0dXJlJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFyY2hpdGVjdHVyZSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxDb250YWluZXIgY2xhc3NOYW1lPVwibWFpbiBjb250YWluZXIgc2Nyb2xsYWJsZVwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLW1kXCI+QXBwbGljYXRpb24gQXJjaGl0ZWN0dXJlPC9oMT5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntgLy8gLi9hcHAuanNcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBcHBsaWNhdGlvbiB9IGZyb20gJ2V4dC1yZWFjdCc7XG5cbkBBcHBsaWNhdGlvbih7XG4gIHN0b3JlczogW1xuICAgIHJlcXVpcmUoJy4vc3RvcmVzL2NhcmRzJyksXG4gIF0sXG4gIHZpZXdzOiBbXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL3ZpZXdwb3J0L3ZpZXdwb3J0JyksXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2NhcmRzJyksXG4gIF0sXG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPFZpZXdwb3J0IC8+XG4gIH1cbn1gfVxuICAgICAgPC9wcmU+XG4gICAgICA8cHJlIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG57YC8vIC4vc3RvcmVzL2NhcmRcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnZXh0LXJlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgU3RvcmUoe1xuICBzdG9yZUlkOiAnQ2FyZFN0b3JlJyxcbiAgZmllbGRzOiBbICdOYW1lJyBdLFxuICBwcm94eToge1xuICAgIHVybDogJy9kYXRhL2NhcmQuanNvbidcbiAgfVxufSlgfVxuICAgICAgPC9wcmU+XG4gICAgICA8cHJlIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG57YC8vIC4vY29tcG9uZW50cy9jYXJkcy5qc1xuaW1wb3J0IHsgUm91dGUsIENvbXBvbmVudCB9IGZyb20gJ2V4dC1yZWFjdCc7XG5cbkBSb3V0ZSgnL2V4YW1wbGUvY2FyZHMnKVxuQENvbXBvbmVudCh7XG4gIHN0b3JlczogWyAnQ2FyZFN0b3JlJyBdLFxuICB2aWV3OiBDYXJkVmlld1xufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQge1xuICBAYmluZFxuICBzYXZlQ2hhbmdlcygpIHtcbiAgICB0aGlzLnN0b3Jlcy5DYXJkU3RvcmUuc3luYyh7XG4gICAgICBmYWlsOiBlcnIgPT4gY29uc29sZS5sb2coZXJyKVxuICAgIH0pO1xuICB9XG5cbiAgQGJpbmRcbiAgcmVqZWN0Q2hhbmdlcygpIHtcbiAgICB0aGlzLnN0b3Jlcy5DYXJkU3RvcmUucmVqZWN0Q2hhbmdlcygpO1xuICB9XG59YH1cbiAgICAgIDwvcHJlPlxuICAgICAgPHByZT5cbntgLy8gLi9jb21wb25lbnRzL2NhcmRzLnZpZXcuanN4XG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdyaWQgfSBmcm9tICdleHQtcmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkVmlldyBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLnN0b3Jlcy5DYXJkU3RvcmUubG9hZCgpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7Q2FyZFN0b3JlIH0gPSB0aGlzLnByb3BzLnN0b3JlcztcbiAgICByZXR1cm4gPEdyaWQgc3RvcmU9e0NhcmRTdG9yZX0+XG4gICAgICA8ZGl2IGhlYWRlcj1cIklkXCIgZGF0YUluZGV4PVwiSWRcIiAvPlxuICAgICAgPGRpdiBoZWFkZXI9XCJOYW1lXCIgZGF0YUluZGV4PVwiTmFtZVwiIGVkaXRhYmxlIC8+XG4gICAgICA8ZGl2IGhlYWRlcj1cIlR5cGVcIiBkYXRhSW5kZXg9XCJUeXBlXCIgLz5cbiAgICA8L0dyaWQ+XG4gIH1cbn1gfVxuICAgICAgPC9wcmU+XG4gICAgPC9Db250YWluZXI+XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBDb250YWluZXIgfSBmcm9tICd+L3JleHQnO1xuXG5AUm91dGUoJy9jb3JlLWNvbmNlcHRzL2NvbXBvbmVudCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXh0Q29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPENvbnRhaW5lciBjbGFzc05hbWU9XCJtYWluIGNvbnRhaW5lciBzY3JvbGxhYmxlXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwibWItbWRcIj5Db21wb25lbnQ8L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5cbiAgICAgICAgQSBjb21wb25lbnQgaW4gRXh0ZW5zaW9uIFJlYWN0IGlzIHRoZSBjb21iaW5hdGlvbiBvZiBhIFJlYWN0IENvbXBvbmVudCBhbmQgYSBjb21wb25lbnQgY2xhc3MgdGhhdCBjb250cm9scyBhIHBvcnRpb24gb2YgdGhlIHNjcmVlbi5cbiAgICAgICAgSGVyZSBpcyBhbiBleGFtcGxlIG9mIGEgY29tcG9uZW50IHRoYXQgZGlzcGxheSBhIHNpbXBsZSBzdHJpbmc6XG4gICAgICA8L3A+XG4gICAgICA8cHJlIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG57YGltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnZXh0LXJlYWN0JztcblxuY2xhc3MgRGFzaGJvYXJkVmlldyBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxoMT57dGhpcy5wcm9wcy4kdmlldy50aXRsZX08L2gxPjtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgdmlldzogRGFzaGJvYXJkVmlld1xufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhc2hib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGl0bGUgPSAnRGFzaGJvYXJkJztcbiAgfVxufWB9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG4gICAgICAgIEV2ZXJ5IGNvbXBvbmVudCBiZWdpbnMgd2l0aCBhbiA8Y29kZT5AQ29tcG9uZW50PC9jb2RlPiBkZWNvcmF0b3IgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIDxlbT5tZXRhZGF0YTwvZW0+IG9iamVjdC5cbiAgICAgICAgVGhlIG1ldGFkYXRhIG9iamVjdCBkZXNjcmliZXMgaG93IHRoZSBSZWFjdCBDb21wb25lbnQgYW5kIGNvbXBvbmVudCBjbGFzcyB3b3JrIHRvZ2V0aGVyLlxuICAgICAgICBUaGF0J3MgbWVhbiB5b3UgY2FuIGFjY2VzcyBhbnkgcHJvcGVydHkgb3IgbWV0aG9kIG9mIGNvbXBvbmVudCBjbGFzcyB2aWEgPGNvZGU+dGhpcy5wcm9wcy4kdmlldzwvY29kZT4uXG4gICAgICA8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlxuICAgICAgICBBY3R1YWxseSwgd2l0aCB0aGUgYWJvdmUgZXhhbXBsZSwgaXQgY2FuIGJlIGltcGxlbWVudGVkIGxpa2UgdGhpczpcbiAgICAgIDwvcD5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntgaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnZXh0LXJlYWN0JztcblxuQENvbXBvbmVudCh7XG4gIHZpZXc6ICh7ICR2aWV3IH0pID0+IDxoMT57JHZpZXcudGl0bGV9PC9oMT5cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRpdGxlID0gJ0Rhc2hib2FyZCc7XG4gIH1cbn1gfVxuICAgICAgPC9wcmU+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPkV4dGVuc2lvbiBSZWFjdCBwcm92aWRlIGEgbmV3IHdheSB0byB3b3JrIHdpdGggc3RhdGU6PC9wPlxuICAgICAgPHByZSBjbGFzc05hbWU9XCJtYi1tZFwiPlxue2AvLyAuL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC52aWV3LmpzeFxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZXh0IGZyb20gJ2V4dGVuc2lvbi1yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaFZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBSZXh0LmluaXRpYWxTdGF0ZSh0aGlzLCB7XG4gICAgICBuYW1lOiBwcm9wcy5uYW1lXG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHRoaXMuc2V0TmFtZShuZXh0UHJvcHMubmFtZSk7XG4gIH1cbiAgLi4uXG59YH1cbiAgICAgIDwvcHJlPlxuICAgICAgPHA+XG4gICAgICAgIEluc3RlYWQgb2YgdXNpbmcgPGNvZGU+e2B0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUsIHByb3BzKSA9PiAoeyBuYW1lOiBwcm9wcy5uYW1lIH0pKWB9PC9jb2RlPiB0byB1cGRhdGUgdGhlIHN0YXRlLFxuICAgICAgICB5b3UgY2FuIHVzZSA8Y29kZT50aGlzLnNldE5hbWUocHJvcHMubmFtZSk8L2NvZGU+IHRvIG1ha2UgaXQgZWFzaWVyIHRvIHVuZGVyc3RhbmQgYW5kIG1vcmUgbmF0dXJhbCBieSB1c2luZyA8Y29kZT5SZXh0LmluaXRpYWxTdGF0ZTwvY29kZT4gZnVuY3Rpb24gdG8gZGVjbGFyZSB0aGUgc3RhdGUgaW4gY29uc3RydWN0b3IuXG4gICAgICA8L3A+XG4gICAgPC9Db250YWluZXI+XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBDb250YWluZXIgfSBmcm9tICd+L3JleHQnO1xuXG5AUm91dGUoJy9jb3JlLWNvbmNlcHRzL2RhdGEtcGFja2FnZScpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhUGFja2FnZSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxDb250YWluZXIgY2xhc3NOYW1lPVwibWFpbiBjb250YWluZXIgc2Nyb2xsYWJsZVwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLW1kXCI+RGF0YSBQYWNrYWdlPC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+VGhlIGRhdGEgcGFja2FnZSBpcyB3aGF0IGxvYWRzIGFuZCBzYXZlcyBhbGwgb2YgdGhlIGRhdGEgaW4geW91ciBhcHBsaWNhdGlvbi48L3A+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwibWItbWRcIj5Nb2RlbHM8L2gzPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5UaGUgY2VudGVycGllY2Ugb2YgdGhlIGRhdGEgcGFja2FnZSBpcyBgTW9kZWxgIHdoaWNoIHJlcHJlc2VudHMgYW4gZW50aXR5IGluIGFuIGFwcGxpY2F0aW9uLjwvcD5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi1tZFwiPlN0b3JlczwvaDM+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlRoZSA8Y29kZT5TdG9yZTwvY29kZT4gY2xhc3MgZW5jYXBzdWxhdGVzIGEgY2xpZW50IHNpZGUgY2FjaGUgb2YgPGNvZGU+TW9kZWw8L2NvZGU+IG9iamVjdHMuPC9wPlxuICAgICAgPHByZSBjbGFzc05hbWU9XCJtYi1tZFwiPlxue2BpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ2V4dC1yZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgU3RvcmUoe1xuICBzdG9yZUlkOiAnQ2FyZFN0b3JlJyxcbiAgcHJveHk6IHtcbiAgICB1cmw6ICcvZGF0YS9jYXJkLmpzb24nXG4gIH1cbn0pYH1cbiAgICAgIDwvcHJlPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5cbiAgICAgICAgSW4gdGhlIGV4YW1wbGUgYWJvdmUgd2UgY29uZmlndXJlZCBhbiBBSkFYIHByb3h5IHRvIGxvYWQgZGF0YSBmcm9tIHRoZSB1cmwgPGNvZGU+L2FwaS91c2VyL3NlYXJjaDwvY29kZT4uXG4gICAgICAgIFN0b3JlcyBsb2FkIGRhdGEgdmlhIDxjb2RlPnByb3h5PC9jb2RlPiB3aXRoIHRoaXMgZm9sbG93aW5nIHN0cnVjdHVyZTpcbiAgICAgIDwvcD5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntge1xuICB1cmw6ICAgIC8qIFRoZSBVUkwgZnJvbSB3aGljaCB0byByZXF1ZXN0IHRoZSBkYXRhIG9iamVjdCAqLyxcbiAgbWV0aG9kOiAvKiBUaGUgZGVmYXVsdCBIVFRQIG1ldGhvZCB0byBiZSB1c2VkIGZvciByZXF1ZXN0cy4gSWYgbm90IHNldCwgR0VUIHdpbGwgYmUgdXNlZC4gKi9cbiAgcGFyYW1zOiAvKiBSZXF1ZXN0IHBhcmFtZXRlcnMgc2VudCBhcyBqc29uIGRhdGEgKi9cbiAgcmVhZGVyOiAvKiBVc2UgdG8gZGVjb2RlIHRoZSBzZXJ2ZXIncyByZXNwb25zZSAqL1xufWB9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+U3RvcmVzIGNhbiBhbHNvIGxvYWQgZGF0YSBpbmxpbmUuIEludGVybmFsbHksIFN0b3JlIGNvbnZlcnRzIGVhY2ggb2YgdGhlIG9iamVjdHMgd2UgcGFzcyBpbiBhcyBjZmctZGF0YSBpbnRvIE1vZGVsIGluc3RhbmNlczo8L3A+XG4gICAgICA8cHJlIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG57YGltcG9ydCB7IFN0b3JlIH0gZnJvbSAnZXh0LXJlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBTdG9yZSh7XG4gIHN0b3JlSWQ6ICdVc2VyU3RvcmUnLFxuICBkYXRhOiBbXG4gICAge2ZpcnN0TmFtZTogJ1BldGVyJywgICBsYXN0TmFtZTogJ1ZlbmttYW4nfSxcbiAgICB7Zmlyc3ROYW1lOiAnRWdvbicsICAgIGxhc3ROYW1lOiAnU3BlbmdsZXInfSxcbiAgICB7Zmlyc3ROYW1lOiAnUmF5JywgICAgIGxhc3ROYW1lOiAnU3RhbnR6J30sXG4gICAge2ZpcnN0TmFtZTogJ1dpbnN0b24nLCBsYXN0TmFtZTogJ1plZGRlbW9yZSd9XG4gIF1cbn0pYH1cbiAgICAgIDwvcHJlPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5Ob3csIGp1c3QgYmluZCBhIHN0b3JlIHRvIHRoZSA8Y29kZT5Db21wb25lbnQ8L2NvZGU+OjwvcD5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntgaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2FyZFN0b3JlIGZyb20gJ34vc3RvcmVzL2NhcmQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMucmVsb2FkID0gKCkgPT4gdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgQ2FyZFN0b3JlLmNsZWFyRGF0YSgpO1xuICAgIENhcmRTdG9yZS5sb2FkKCk7XG4gICAgQ2FyZFN0b3JlLnN1YnNjcmliZSh0aGlzLnJlbG9hZCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcmVjb3JkcyA9IENhcmRTdG9yZS5nZXREYXRhKCk7XG4gICAgcmV0dXJuIDxzZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicngtZ3JpZC1oZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cgcngtZ3JpZC1oZWFkZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyeC1ncmlkLWNvbHVtbi1oZWFkZXIgdGV4dC1zbS1jZW50ZXJcIiBzdHlsZT17e3dpZHRoOicyMCUnfX0+SUQ8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ4LWdyaWQtY29sdW1uLWhlYWRlciB0ZXh0LXNtLWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6JzIwJSd9fT5OYW1lPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyeC1ncmlkLWNvbHVtbi1oZWFkZXIgdGV4dC1zbS1jZW50ZXJcIiBzdHlsZT17e3dpZHRoOicyMCUnfX0+VHlwZTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicngtZ3JpZC1jb2x1bW4taGVhZGVyIHRleHQtc20tY2VudGVyXCIgc3R5bGU9e3t3aWR0aDonMjAlJ319PkFybW9yPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyeC1ncmlkLWNvbHVtbi1oZWFkZXIgdGV4dC1zbS1jZW50ZXJcIiBzdHlsZT17e3dpZHRoOicyMCUnfX0+V2VhcG9uPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicngtZ3JpZC1ib2R5XCIgc3R5bGU9e3tvdmVyZmxvdzondmlzaWJsZSd9fT5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicngtZ3JpZC12aWV3XCI+XG4gICAgICAgICAge3JlY29yZHMubWFwKHJlY29yZCA9PiA8YXJ0aWNsZSBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cgcngtZ3JpZC1yb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicngtZ3JpZC1jZWxsXCIgc3R5bGU9e3t3aWR0aDonMjAlJ319PntyZWNvcmQuZ2V0KCdJZCcpfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyeC1ncmlkLWNlbGxcIiBzdHlsZT17e3dpZHRoOicyMCUnfX0+e3JlY29yZC5nZXQoJ05hbWUnKX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicngtZ3JpZC1jZWxsXCIgc3R5bGU9e3t3aWR0aDonMjAlJ319PntyZWNvcmQuZ2V0KCdUeXBlJyl9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ4LWdyaWQtY2VsbFwiIHN0eWxlPXt7d2lkdGg6JzIwJSd9fT57cmVjb3JkLmdldCgnQXJtb3JVc2FibGUnKX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicngtZ3JpZC1jZWxsXCIgc3R5bGU9e3t3aWR0aDonMjAlJ319PntyZWNvcmQuZ2V0KCdXZWFwb25Vc2FibGUnKX08L2Rpdj5cbiAgICAgICAgICA8L2FydGljbGU+KX1cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvc2VjdGlvbj47XG4gIH1cbn1gfVxuICAgICAgPC9wcmU+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlxuICAgICAgICBJbiB0aGlzIGFib3ZlIGV4YW1wbGUsIHdlIHVzZSA8Y29kZT5zdWJzY3JpYmU8L2NvZGU+IHRvIHVwZGF0ZSB0aGUgY29tcG9uZW50IHdoZW5ldmVyIGRhdGEncyBjaGFuZ2VkLlxuICAgICAgICBCZWNhdXNlIFN0b3JlIGNvbnZlcnQgZGF0YSB0byBNb2RlbCB0aGVuIHlvdSBuZWVkIHRvIHVzZSA8Y29kZT5nZXQ8L2NvZGU+IHRvIGFjY2VzcyBkYXRhLlxuICAgICAgPC9wPlxuICAgIDwvQ29udGFpbmVyPlxuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29udGFpbmVyIH0gZnJvbSAnfi9yZXh0JztcblxuQFJvdXRlKCcvY29yZS1jb25jZXB0cy9zY3JlZW4tbmF2aWdhdGlvbicpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JlZW5OYXZpZ2F0aW9uIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPENvbnRhaW5lciBjbGFzc05hbWU9XCJtYWluIGNvbnRhaW5lciBzY3JvbGxhYmxlXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwibWItbWRcIj5TY3JlZW4gTmF2aWdhdGlvbjwvaDE+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWItbWRcIj5cbiAgICAgICAgPGxpPjxzdHJvbmc+PGNvZGU+Um91dGU8L2NvZGU+PC9zdHJvbmc+IGRlY29yYXRvciBpcyBtb3N0IGJhc2ljIHJlc3BvbnNpYmlsaXR5IGlzIHRvIHJlbmRlciBVSSB3aGVuIGEgbG9jYXRpb24gbWF0Y2hlcyB0aGUgcm91dGXigJlzIHBhdGguPC9saT5cbiAgICAgICAgPGxpPjxzdHJvbmc+PGNvZGU+TGluazwvY29kZT48L3N0cm9uZz4gcHJvdmlkZXMgZGVjbGFyYXRpdmUsIGFjY2Vzc2libGUgbmF2aWdhdGlvbiBhcm91bmQgeW91ciBhcHBsaWNhdGlvbi48L2xpPlxuICAgICAgICA8bGk+PHN0cm9uZz48Y29kZT5IYXNoUm91dGVyPC9jb2RlPjwvc3Ryb25nPiB1c2VzIHRoZSBoYXNoIHBvcnRpb24gb2YgdGhlIFVSTCAoaS5lLiB3aW5kb3cubG9jYXRpb24uaGFzaCkgdG8ga2VlcCB5b3VyIFVJIGluIHN5bmMgd2l0aCB0aGUgVVJMLjwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPHByZSBjbGFzc05hbWU9XCJtYi1tZFwiPlxue2AvLyAuL2FwcC5qc1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFwcGxpY2F0aW9uIH0gZnJvbSAnZXh0LXJlYWN0JztcblxuQEFwcGxpY2F0aW9uKHtcbiAgdmlld3M6IFtcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvdmlld3BvcnQvdmlld3BvcnQnKSxcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvc2VhcmNoJyksXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2RldGFpbHMnKSxcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvbm90Zm91bmQnKSxcbiAgXSxcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Vmlld3BvcnQgLz5cbiAgfVxufWB9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntgLy8gLi9jb21wb25lbnRzL3ZpZXdwb3J0LmpzXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgSGFzaFJvdXRlciB9IGZyb20gJ2V4dC1yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZXdwb3J0KCkge1xuICByZXR1cm4gPHNlY3Rpb24+XG4gICAgPExpbmsgdG89XCIvXCI+RGFzaGJvYXJkPC9MaW5rPlxuICAgIDxMaW5rIHRvPVwiL3NlYXJjaFwiPlNlYXJjaDwvTGluaz5cbiAgICA8TGluayB0bz1cIi9kZXRhaWxzL2h1eW5ndXllblwiPkRldGFpbHM8L0xpbms+XG4gICAgPEhhc2hSb3V0ZXIgLz5cbiAgPC9zZWN0aW9uPlxufWB9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntgLy8gLi9jb21wb25lbnRzL3NlYXJjaC5qc1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBDb21wb25lbnQgfSBmcm9tICdleHQtcmVhY3QnO1xuXG5AUm91dGUoJy9zZWFyY2gnKVxuQENvbXBvbmVudCh7XG4gIHZpZXc6ICgpID0+IDxzZWN0aW9uIC8+XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoIHsgfWB9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntgLy8gLi9jb21wb25lbnRzL2RldGFpbHMuanNcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29tcG9uZW50IH0gZnJvbSAnZXh0LXJlYWN0JztcblxuQFJvdXRlKCcvZGV0YWlscy86bmFtZScpXG5AQ29tcG9uZW50KHtcbiAgdmlldzogKHsgcGFyYW1zIH0pID0+IDxoMT57cGFyYW1zLm5hbWV9PC9oMT5cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXRhaWxzIHsgfWB9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntgLy8gLi9jb21wb25lbnRzL25vdGZvdW5kLmpzXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAnZXh0LXJlYWN0JztcblxuQFJvdXRlKCcqJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdEZvdW5kIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGgxPid7dGhpcy5wcm9wcy5wYXJhbXMucm91dGV9JyBkb2Vzbid0IGV4aXN0PC9oMT5cbiAgfVxufWB9XG4gICAgICA8L3ByZT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIENvbXBvbmVudCwgYmluZCB9IGZyb20gJ34vcmV4dCc7XG5pbXBvcnQgQ2FyZFZpZXcgZnJvbSAnLi9jYXJkcy52aWV3JztcblxuQFJvdXRlKCcvZXhhbXBsZS9jYXJkcycpXG5AQ29tcG9uZW50KHtcbiAgc3RvcmVzOiBbICdDYXJkU3RvcmUnIF0sXG4gIHZpZXc6IENhcmRWaWV3XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCB7XG4gIEBiaW5kXG4gIHNhdmVDaGFuZ2VzKCkge1xuICAgIHRoaXMuc3RvcmVzLkNhcmRTdG9yZS5zeW5jKHtcbiAgICAgIGZhaWw6IGVyciA9PiBjb25zb2xlLmxvZyhlcnIpXG4gICAgfSk7XG4gIH1cblxuICBAYmluZFxuICByZWplY3RDaGFuZ2VzKCkge1xuICAgIHRoaXMuc3RvcmVzLkNhcmRTdG9yZS5yZWplY3RDaGFuZ2VzKCk7XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCwgQnV0dG9uIH0gZnJvbSAnfi9yZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZFZpZXcgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5zdG9yZXMuQ2FyZFN0b3JlLmxvYWQoKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdG9yZXM6IHsgQ2FyZFN0b3JlIH0sICR2aWV3OiB7IHNhdmVDaGFuZ2VzLCByZWplY3RDaGFuZ2VzIH0gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIDxDb250YWluZXIgY2xhc3NOYW1lPVwibWFpbiBjb250YWluZXJcIj5cbiAgICAgIDxHcmlkIHN0b3JlPXtDYXJkU3RvcmV9PlxuICAgICAgICA8ZGl2IGhlYWRlcj1cIklkXCIgZGF0YUluZGV4PVwiSWRcIiAvPlxuICAgICAgICA8ZGl2IGhlYWRlcj1cIk5hbWVcIiBkYXRhSW5kZXg9XCJOYW1lXCIgZWRpdGFibGUgLz5cbiAgICAgICAgPGRpdiBoZWFkZXI9XCJUeXBlXCIgZGF0YUluZGV4PVwiVHlwZVwiIC8+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LW1kXCI+XG4gICAgICAgIDxCdXR0b24gdGV4dD1cIlNhdmUgQ2hhbmdlc1wiIGNsYXNzTmFtZT1cIm1yLW1kXCIgb25DbGljaz17c2F2ZUNoYW5nZXN9IC8+XG4gICAgICAgIDxCdXR0b24gdGV4dD1cIlJlamVjdCBDaGFuZ2VzXCIgb25DbGljaz17cmVqZWN0Q2hhbmdlc30gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ29udGFpbmVyPlxuICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBDb21wb25lbnQgfSBmcm9tICd+L3JleHQnO1xuXG5AUm91dGUoJy9leGFtcGxlL2Rhc2hib2FyZCcpXG5AQ29tcG9uZW50KHtcbiAgdmlldzogKHsgJHZpZXcgfSkgPT4gPGgxPnskdmlldy50aXRsZX08L2gxPlxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhc2hib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGl0bGUgPSAnRGFzaGJvYXJkJztcbiAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29tcG9uZW50IH0gZnJvbSAnfi9yZXh0JztcblxuQFJvdXRlKCcvZXhhbXBsZS9kZXRhaWxzLzpuYW1lJylcbkBDb21wb25lbnQoe1xuICB2aWV3OiAoeyBwYXJhbXMgfSkgPT4gPGgxPntwYXJhbXMubmFtZX08L2gxPlxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERldGFpbHMgeyB9IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ34vcmV4dCc7XG5cbkBSb3V0ZSgnKicpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RGb3VuZCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxoMT4ne3RoaXMucHJvcHMucGFyYW1zLnJvdXRlfScgZG9lc24ndCBleGlzdDwvaDE+XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIENvbXBvbmVudCB9IGZyb20gJ34vcmV4dCc7XG5cbkBSb3V0ZSgnL2V4YW1wbGUvc2VhcmNoJylcbkBDb21wb25lbnQoe1xuICB2aWV3OiAoKSA9PiA8c2VjdGlvbiAvPlxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhc2hib2FyZCB7IH0iLCJpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ34vcmV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JlKHtcbiAgc3RvcmVJZDogJ0NhcmRTdG9yZScsXG4gIGZpZWxkczogWyAnTmFtZScgXSxcbiAgcHJveHk6IHtcbiAgICB1cmw6ICcvZGF0YS9jYXJkLmpzb24nXG4gIH1cbn0pIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29udGFpbmVyIH0gZnJvbSAnfi9yZXh0JztcblxuQFJvdXRlKCcvJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdldHRpbmdTdGFydGVkIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPENvbnRhaW5lciBjbGFzc05hbWU9XCJtYWluIGNvbnRhaW5lciBzY3JvbGxhYmxlXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwibWItbWRcIj5HZXR0aW5nIFN0YXJ0ZWQ8L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5cbiAgICAgICAgRXh0ZW5zaW9uIFJlYWN0IGlzIGEgbGlicmFyeSB0aGF0IGJ1aWxkIG9uIHRvcCBvZiBSZWFjdCwgaGVscGluZyB5b3UgYnVpbGQgZGF0YS1pbnRlbnNpdmUsIGNyb3NzLXBsYXRmb3JtIHdlYiBhcHBzIGZvciBkZXNrdG9wcywgdGFibGV0cywgYW5kIHNtYXJ0cGhvbmVzLlxuICAgICAgPC9wPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLW1kXCI+UXVpY2sgU3RhcnQ8L2gyPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLW1kXCI+MS4gU2V0dXAgYSBkZXZlbG9wbWVudCBlbnZpcm9tZW50PC9oMz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+VXNlIDxjb2RlPm5wbTwvY29kZT4gb3IgPGNvZGU+eWFybjwvY29kZT4gdG8gaW5zdGFsbCBmb2xsb3dpbmcgZGVwZW5kZW5jaWVzOjwvcD5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtYi1tZFwiPlxuICAgICAgICA8bGk+PGNvZGU+YmFiZWwtcG9seWZpbGw8L2NvZGU+PC9saT5cbiAgICAgICAgPGxpPjxjb2RlPmJhYmVsLXByZXNldC1lbnY8L2NvZGU+PC9saT5cbiAgICAgICAgPGxpPjxjb2RlPmJhYmVsLXByZXNldC1yZWFjdDwvY29kZT48L2xpPlxuICAgICAgICA8bGk+PGNvZGU+ZDM8L2NvZGU+PC9saT5cbiAgICAgICAgPGxpPjxjb2RlPnJlYWN0PC9jb2RlPjwvbGk+XG4gICAgICAgIDxsaT48Y29kZT5yZWFjdC1kb208L2NvZGU+PC9saT5cbiAgICAgICAgPGxpPjxjb2RlPnJ4anM8L2NvZGU+PC9saT5cbiAgICAgICAgPGxpPjxjb2RlPmV4dC1yZWFjdDwvY29kZT48L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi1tZFwiPjIuIENyZWF0ZSBhIG5ldyBwcm9qZWN0PC9oMz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+VGhlIGZvbGxvd2luZyBpcyB0aGUgcmVjb21tZW5kZWQgZGlyZWN0b3J5IHN0cnVjdHVyZSBmb3IgYW4gRXh0ZW5zaW9uIFJlYWN0IGFwcGxpY2F0aW9uOjwvcD5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbiAgICAgICAgKy0tIG5vZGVfbW9kdWxlczogTlBNIGNvbXBvbmVudHM8YnIgLz5cbiAgICAgICAgKy0tIGRpc3Q8YnIgLz5cbiAgICAgICAgfCAgICstLSBhcHAubWluLmNzczxiciAvPlxuICAgICAgICB8ICAgKy0tIGFwcC5taW4uanM8YnIgLz5cbiAgICAgICAgfCAgICstLSBmcmFtZXdvcmsubWluLmpzPGJyIC8+XG4gICAgICAgICstLSBzcmM8YnIgLz5cbiAgICAgICAgfCAgICstLSBjc3M8YnIgLz5cbiAgICAgICAgfCAgIHwgICArLS0gX3ZhcmlhYmxlcy5zY3NzOiBhcHBsaWNhdGlvbiBzdHlsZXMgY29uc3RhbnQgdmFsdWVzPGJyIC8+XG4gICAgICAgIHwgICB8ICAgKy0tIGFwcC5zY3NzOiBhcHBsaWNhdGlvbiBzdHlsZXM8YnIgLz5cbiAgICAgICAgfCAgICstLSBqczxiciAvPlxuICAgICAgICB8ICAgfCAgICstLSBjb21tb246IGNvZGUgb2Ygc2hhcmVkIGZ1bmN0aW9ucyBvciBzaGFyZWQgY29tcG9uZW50czxiciAvPlxuICAgICAgICB8ICAgfCAgICstLSBjb21wb25lbnRzOiBjb2RlIChzY3JpcHRzIGFuZCB2aWV3cykgb2YgZXZlcnkgZmVhdHVyZSBzaG91bGQgYmUgYSBzdWItZGlyZWN0b3J5PGJyIC8+XG4gICAgICAgIHwgICB8ICAgKy0tIHNlcnZpY2VzOiBjb2RlIG9mIHNlcnZpY2VzPGJyIC8+XG4gICAgICAgIHwgICB8ICAgKy0tIHN0b3JlczogY29kZSBvZiBzdG9yZXM8YnIgLz5cbiAgICAgICAgfCAgIHwgICArLS0gYXBwLmpzOiBtYWluIHNjcmlwdDxiciAvPlxuICAgICAgICArLS0gZ3VscGZpbGUuYmFiZWwuanM6IGJ1aWxkIHNjcmlwdHMgKG9yIHdlYnBhY2suY29uZmlnLmpzIGlmIHlvdSBwcmVmZXIpPGJyIC8+XG4gICAgICAgICstLSBpbmRleC5odG1sPGJyIC8+XG4gICAgICAgICstLSBwYWNrYWdlLmpzb246IE5QTSBwYWNrYWdlIGRlZmluaXRpb248YnIgLz5cbiAgICAgICAgKy0tIHNlcnZlci5qczogY29kZSBvZiBsb2NhbCB3ZWIgc2VydmVyIChFeHByZXNzSlMpPGJyIC8+XG4gICAgICA8L3ByZT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+TGV04oCZcyBzdGFydCBldmFsdWF0aW5nIHRoZSBhcHBsaWNhdGlvbiBieSBsb29raW5nIGF0IDxjb2RlPmluZGV4Lmh0bWw8L2NvZGU+PC9wPlxuICAgICAgPHByZSBjbGFzc05hbWU9XCJtYi1tZFwiPlxue2A8IS0tIGluZGV4Lmh0bWwgLS0+XG48IURPQ1RZUEUgaHRtbD5cbjxodG1sPlxuPGhlYWQ+XG48bWV0YSBjaGFyc2V0PVwidXRmLThcIiAvPlxuPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuPHRpdGxlPkV4dGVuc2lvbiBSZWFjdCBBcHBsaWNhdGlvbjwvdGl0bGU+XG48bGluayBocmVmPVwiL25vZGUtbW9kdWxlcy9leHQtcmVhY3QvY3NzL3JleHQubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuPC9oZWFkPlxuPGJvZHk+XG48c2NyaXB0IHNyYz1cImFwcC5qc1wiPjwvc2NyaXB0PlxuPC9ib2R5PlxuPC9odG1sPmB9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+VG8gbGF1bmNoIHlvdXIgYXBwLCBhZGQgdGhlIGZvbGxvd2luZyB0byB5b3VyIDxjb2RlPmFwcC5qczwvY29kZT4gZmlsZTwvcD5cbiAgICAgIDxwcmU+XG57YC8vIC4vYXBwLmpzXG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXBwbGljYXRpb24gfSBmcm9tICdleHQtcmVhY3QnO1xuXG5AQXBwbGljYXRpb24oe1xuICB2aWV3czogW1xuICAgIHJlcXVpcmUoJy4vY29tcG9uZW50cy92aWV3cG9ydC92aWV3cG9ydCcpLFxuICBdLFxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxWaWV3cG9ydCAvPlxuICB9XG59YH1cbiAgICAgIDwvcHJlPlxuICAgIDwvQ29udGFpbmVyPlxuICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgSGFzaFJvdXRlciwgTGluayB9IGZyb20gJ34vcmV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZXdwb3J0KCkge1xuICByZXR1cm4gPENvbnRhaW5lcj5cbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPjxoMT5FeHRlbnNpb24gUmVhY3Q8L2gxPjwvaGVhZGVyPlxuICAgIDxDb250YWluZXIgbGF5b3V0PVwiY29sdW1uXCI+XG4gICAgICA8YXNpZGUgc3R5bGU9e3t3aWR0aDozMDB9fT5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhciBuYXZcIj5cbiAgICAgICAgICA8bGk+PExpbmsgdG89XCIvXCIgdGV4dD1cIkdFVFRJTkcgU1RBUlRFRFwiIC8+PC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtdGV4dFwiPkNPUkUgQ09OQ0VQVFM8L3NwYW4+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT48TGluayB0bz1cIi9jb3JlLWNvbmNlcHRzL2NvbXBvbmVudFwiIHRleHQ9XCJDb21wb25lbnRcIiAvPjwvbGk+XG4gICAgICAgICAgICAgIDxsaT48TGluayB0bz1cIi9jb3JlLWNvbmNlcHRzL3NjcmVlbi1uYXZpZ2F0aW9uXCIgdGV4dD1cIlNjcmVlbiBOYXZpZ2F0aW9uXCIgLz48L2xpPlxuICAgICAgICAgICAgICA8bGk+PExpbmsgdG89XCIvY29yZS1jb25jZXB0cy9kYXRhLXBhY2thZ2VcIiB0ZXh0PVwiRGF0YSBQYWNrYWdlXCIgLz48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT48TGluayB0bz1cIi9hcmNoaXRlY3R1cmVcIiB0ZXh0PVwiQVJDSElURUNUVVJFXCIgLz48L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi10ZXh0XCI+VUkgQ09NUE9ORU5UUzwvc3Bhbj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL3VpLWNvbXBvbmVudHMvZ3JpZHNcIiB0ZXh0PVwiR3JpZHNcIiAvPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2FzaWRlPlxuICAgICAgPENvbnRhaW5lcj48SGFzaFJvdXRlciAvPjwvQ29udGFpbmVyPlxuICAgIDwvQ29udGFpbmVyPlxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+PHA+JmNvcHk7IDIwMTcgaHV5dHJvbmduZ3V5ZW48L3A+PC9mb290ZXI+XG4gIDwvQ29udGFpbmVyPlxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEV4dCBmcm9tICd+L2NvcmUvZXh0JztcbmltcG9ydCBTdG9yZU1hbmFnZXIgZnJvbSAnfi9kYXRhL3N0b3JlLW1hbmFnZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWcgPT4gVmlld3BvcnQgPT4ge1xuICBFeHQuTGlzdChjb25maWcuc3RvcmVzKS5lYWNoKHN0b3JlID0+IHtcbiAgICBzdG9yZSA9IHN0b3JlLmRlZmF1bHQ7XG4gICAgU3RvcmVNYW5hZ2VyLnNldChzdG9yZS5zdG9yZUlkLCBzdG9yZSk7XG4gIH0pO1xuICBjb25zdCByb290ID0gRXh0LmNyZWF0ZUVsZW1lbnQoJzxkaXYgaWQ9XCJyZWFjdC1yb290XCI+PC9kaXY+Jyk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocm9vdCk7XG4gIHJlbmRlcig8Vmlld3BvcnQgLz4sIHJvb3QpO1xufSIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEV4dCBmcm9tICd+L2NvcmUvZXh0JztcbmltcG9ydCBTdG9yZU1hbmFnZXIgZnJvbSAnfi9kYXRhL3N0b3JlLW1hbmFnZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWcgPT4gQ29udHJvbGxlciA9PiB7XG4gIGNvbnN0IFdyYXBwZWRDb21wb25lbnQgPSBjb25maWcudmlldztcblxuICByZXR1cm4gY2xhc3MgSG9jQ29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIGNvbnN0IHN0b3JlcyA9IEV4dC5MaXN0KGNvbmZpZy5zdG9yZXMpLnJlZHVjZSgoc3RvcmVzLCBzdG9yZUlkKSA9PiB7XG4gICAgICAgICAgICAgIHN0b3Jlc1tzdG9yZUlkXSA9IFN0b3JlTWFuYWdlci5nZXQoc3RvcmVJZCk7XG4gICAgICAgICAgICAgIHJldHVybiBzdG9yZXM7XG4gICAgICAgICAgICB9LCB7fSksXG4gICAgICAgICAgICBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIocHJvcHMpO1xuXG4gICAgICBjb250cm9sbGVyLnN0b3JlcyA9IHN0b3JlcztcblxuICAgICAgRXh0LmluaXRpYWxTdGF0ZSh0aGlzLCB7XG4gICAgICAgIHN0b3JlcyxcbiAgICAgICAgW2NvbmZpZy5jb21wb25lbnRBcyB8fCAnJHZpZXcnXTogY29udHJvbGxlclxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBFeHQuTWFwKHRoaXMuc3RhdGUuc3RvcmVzKS52YWx1ZXMoKS5lYWNoKHN0b3JlID0+IHtcbiAgICAgICAgaWYgKHN0b3JlLmF1dG9Mb2FkKSB7XG4gICAgICAgICAgc3RvcmUubG9hZCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gPFdyYXBwZWRDb21wb25lbnQgey4uLnRoaXMuc3RhdGV9IHsuLi50aGlzLnByb3BzfSAvPjtcbiAgICB9XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGF6eiA9PiB7XG4gIGNvbnN0IHNlcnZpY2UgPSBuZXcgY2xhenooKTtcbiAgc2VydmljZS5zZXJ2aWNlSWQgPSBjbGF6ei5uYW1lO1xuICByZXR1cm4gc2VydmljZTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEV4dCBmcm9tICd+L2NvcmUvZXh0JztcblxuY29uc3QgTEFZT1VUX0NMQVNTID0ge1xuICAnY29sdW1uJzogJ2ZsZXgtcm93JyxcbiAgJ3Jvdyc6ICdmbGV4LWNvbHVtbicsXG4gICdmaXQnOiAnJyxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENvbnRhaW5lcih7IGNsYXNzTmFtZSA9ICcnLCBsYXlvdXQgPSAncm93JywgY2hpbGRyZW4sIC4uLm90aGVycyB9KSB7XG4gIHJldHVybiA8c2VjdGlvbiBjbGFzc05hbWU9e0V4dC5jbGFzc05hbWUoJ2QtZmxleCcsIExBWU9VVF9DTEFTU1tsYXlvdXRdLCBjbGFzc05hbWUpfSB7Li4ub3RoZXJzfT57Y2hpbGRyZW59PC9zZWN0aW9uPlxufSIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyLCB1bm1vdW50Q29tcG9uZW50QXROb2RlLCBmaW5kRE9NTm9kZSB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgRXh0LCB7IGJpbmQgfSBmcm9tICd+L2NvcmUvZXh0JztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ34vY29tcG9uZW50cy9jb250YWluZXInO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnfi9jb21wb25lbnRzL2Zvcm0nO1xuXG5jbGFzcyBEaWFsb2dNYW5hZ2VyIHtcbiAgc2hvdyhkaWFsb2cpIHtcbiAgICBjb25zdCBsYXllciA9IEV4dC5jcmVhdGVFbGVtZW50KCc8ZGl2IGNsYXNzPVwibWFza1wiPjwvZGl2PicpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGF5ZXIpO1xuICAgIHJlbmRlcihkaWFsb2csIGxheWVyKTtcbiAgfVxuXG4gIHRvYXN0KHsgZGVsYXkgPSAzMDAwLCAuLi5vdGhlcnMgfSkge1xuICAgIC8vIGlmIChFeHQuZ2V0RWxlbWVudCgnLm5vdGlmaWNhdGlvbicpLmlzRW1wdHkoKSkge1xuICAgICAgY29uc3QgbGF5ZXIgPSBFeHQuY3JlYXRlRWxlbWVudCgnPGRpdiBjbGFzcz1cIm5vdGlmaWNhdGlvblwiPjwvZGl2PicpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsYXllcik7XG4gICAgICByZW5kZXIoPFRvYXN0IHsuLi5vdGhlcnN9IC8+LCBsYXllcik7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsYXllcik7XG4gICAgICB9LCBkZWxheSk7XG4gICAgLy8gfVxuICB9XG5cbiAgbXNnYm94KHsgLi4ub3RoZXJzIH0pIHtcbiAgICAvLyBpZiAoRXh0LmdldEVsZW1lbnQoJy5tc2dib3gnKS5pc0VtcHR5KCkpIHtcbiAgICAgIGNvbnN0IGxheWVyID0gRXh0LmNyZWF0ZUVsZW1lbnQoJzxkaXYgY2xhc3M9XCJtYXNrXCI+PC9kaXY+Jyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxheWVyKTtcbiAgICAgIHJlbmRlcig8TXNnQm94IHsuLi5vdGhlcnN9IC8+LCBsYXllcik7XG4gICAgLy8gfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBEaWFsb2dNYW5hZ2VyKCk7XG5cbmV4cG9ydCBjbGFzcyBEaWFsb2cgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGl0bGUgPSAnRGlhbG9nJywgY2xhc3NOYW1lID0gJycsIGNsb3NlQnV0dG9uID0gdHJ1ZSwgY2hpbGRyZW4sIC4uLm90aGVycyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gPENvbnRhaW5lciBsYXlvdXQ9XCJyb3dcIiBjbGFzc05hbWU9e0V4dC5jbGFzc05hbWUoJ2RpYWxvZycsIGNsYXNzTmFtZSl9IHsuLi5vdGhlcnN9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2ctaGVhZGVyXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImRpYWxvZy10aXRsZSB0ZXh0LWNlbnRlclwiPnt0aXRsZX08L3A+XG4gICAgICAgIHtjbG9zZUJ1dHRvbiAmJiA8c3BhbiBjbGFzc05hbWU9XCJ0b29sXCIgb25DbGljaz17dGhpcy5kaXNwb3NlfT48L3NwYW4+fVxuICAgICAgPC9kaXY+XG4gICAgICA8Q29udGFpbmVyIGxheW91dD1cInJvd1wiIGNsYXNzTmFtZT1cImRpYWxvZy1ib2R5XCI+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQ29udGFpbmVyPjtcbiAgfVxuXG4gIEBiaW5kXG4gIGRpc3Bvc2UoKSB7XG4gICAgY29uc3QgeyBvbkNsb3NlIH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHBhcmVudCA9IGZpbmRET01Ob2RlKHRoaXMpLnBhcmVudEVsZW1lbnQ7XG4gICAgb25DbG9zZSAmJiBvbkNsb3NlKCk7XG4gICAgdW5tb3VudENvbXBvbmVudEF0Tm9kZShwYXJlbnQpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQocGFyZW50KTtcbiAgfVxufVxuXG5jb25zdCBBTEVSVF9UWVBFID0ge1xuICBzdWNjZXNzOiB7IHRpdGxlOiAnU3VjY2VzcycsIGljb246ICdjaGVjaycgfSxcbiAgZXJyb3I6IHsgdGl0bGU6ICdFcnJvcicsIGljb246ICd0aW1lcycgfSxcbiAgd2FybmluZzogeyB0aXRsZTogJ1dhcm5pbmcnLCBpY29uOiAnZXhjbGFtYXRpb24nIH0sXG4gIGluZm86IHsgdGl0bGU6ICdJbmZvcm1hdGlvbicsIGljb246ICdpbmZvJyB9LFxufTtcblxuY2xhc3MgVG9hc3QgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdHlwZSwgbWVzc2FnZSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gPENvbnRhaW5lciBsYXlvdXQ9XCJyb3dcIj5cbiAgICAgIDxoND57QUxFUlRfVFlQRVt0eXBlXS50aXRsZX08L2g0PlxuICAgICAgPENvbnRhaW5lciBsYXlvdXQ9XCJjb2x1bW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2FzdC1pY29uXCI+PGkgY2xhc3NOYW1lPXtgZmEgZmEtMnggZmEtJHtBTEVSVF9UWVBFW3R5cGVdLmljb259LWNpcmNsZWB9PjwvaT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2FzdC1jb250ZW50XCI+e21lc3NhZ2V9PC9kaXY+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0NvbnRhaW5lcj47XG4gIH1cblxuICBAYmluZFxuICBkaXNwb3NlKCkge1xuICAgIGNvbnN0IHBhcmVudCA9IGZpbmRET01Ob2RlKHRoaXMpLnBhcmVudEVsZW1lbnQ7XG4gICAgdW5tb3VudENvbXBvbmVudEF0Tm9kZShwYXJlbnQpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQocGFyZW50KTtcbiAgfVxufVxuXG5cbmNsYXNzIE1zZ0JveCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aXRsZSwgaWNvbiwgbWVzc2FnZSwgYnV0dG9ucyA9ICdPSycsIGJ1dHRvblRleHQgPSB7fSwgZm4gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIDxEaWFsb2cgdGl0bGU9e3RpdGxlfSBjbG9zZUJ1dHRvbj17ZmFsc2V9IGNsYXNzTmFtZT1cIm1zZ2JveFwiPlxuICAgICAgPENvbnRhaW5lciBsYXlvdXQ9XCJyb3dcIj5cbiAgICAgICAgeyFpY29uICYmIDxDb250YWluZXIgbGF5b3V0PVwiZml0XCI+e21lc3NhZ2V9PC9Db250YWluZXI+fVxuICAgICAgICB7aWNvbiAmJiA8Q29udGFpbmVyIGxheW91dD1cImNvbHVtblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9hc3QtaWNvbiBtci1zbVwiPjxpIGNsYXNzTmFtZT17YGZhIGZhLTJ4IGZhLSR7aWNvbn0tY2lyY2xlYH0+PC9pPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9hc3QtY29udGVudFwiPnttZXNzYWdlfTwvZGl2PlxuICAgICAgICA8L0NvbnRhaW5lcj59XG4gICAgICAgIHsoYnV0dG9ucyA9PT0gJ09LQ0FOQ0VMJykgJiYgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtbWRcIj5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm1yLXNtXCIgb25DbGljaz17KCkgPT4gdGhpcy5kaXNwb3NlKCl9PntidXR0b25UZXh0LmNhbmNlbCB8fCAnQ2FuY2VsJ308L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHt0aGlzLmRpc3Bvc2UoKTsgZm4gJiYgZm4oKTt9fT57YnV0dG9uVGV4dC5vayB8fCAnT0snfTwvQnV0dG9uPlxuICAgICAgICA8L3NlY3Rpb24+fVxuICAgICAgICB7KGJ1dHRvbnMgPT09ICdPSycpICYmIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LXNtXCI+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7dGhpcy5kaXNwb3NlKCk7IGZuICYmIGZuKCk7fX0+e2J1dHRvblRleHQub2sgfHwgJ09LJ308L0J1dHRvbj5cbiAgICAgICAgPC9zZWN0aW9uPn1cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvRGlhbG9nPjtcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgY29uc3QgcGFyZW50ID0gZmluZERPTU5vZGUodGhpcykucGFyZW50RWxlbWVudDtcbiAgICB1bm1vdW50Q29tcG9uZW50QXROb2RlKHBhcmVudCk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChwYXJlbnQpO1xuICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBFeHQgZnJvbSAnfi9jb3JlL2V4dCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBCdXR0b24oeyBjbGFzc05hbWUgPSAnJywgdGV4dCwgY2hpbGRyZW4sIC4uLm90aGVycyB9KSB7XG4gIHJldHVybiA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e0V4dC5jbGFzc05hbWUoJ2J0bicsIGNsYXNzTmFtZSl9IHsuLi5vdGhlcnN9PlxuICAgIHt0ZXh0IHx8IGNoaWxkcmVufVxuICA8L2J1dHRvbj47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBCdXR0b25MaW5rKHsgdGV4dCwgY2hpbGRyZW4sIC4uLm90aGVycyB9KSB7XG4gIHJldHVybiA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgey4uLm90aGVyc30+e3RleHQgfHwgY2hpbGRyZW59PC9hPlxufVxuXG5leHBvcnQgZnVuY3Rpb24gRmllbGQoeyB0eXBlID0gJ3RleHQnLCBpbmxpbmUgPSBmYWxzZSwgbGFiZWwgPSAnJywgbGFiZWxXaWR0aCA9IDMsIHZhbHVlLCBvbkNoYW5nZSwgLi4ub3RoZXJzIH0pIHtcbiAgcmV0dXJuIDxhcnRpY2xlIGNsYXNzTmFtZT17RXh0LmNsYXNzTmFtZSgnZm9ybS1ncm91cCcsIHsgJ3Jvdyc6IGlubGluZSB9KX0+XG4gIDxsYWJlbCBjbGFzc05hbWU9e0V4dC5jbGFzc05hbWUoeyBbYGNvbC1zbS0ke2xhYmVsV2lkdGh9IHRleHQtc20tcmlnaHRgXTogaW5saW5lIH0pfT57bGFiZWx9PC9sYWJlbD5cbiAgPGRpdiBjbGFzc05hbWU9e0V4dC5jbGFzc05hbWUoeyBbYGNvbC1zbS0kezEyIC0gbGFiZWxXaWR0aH1gXTogaW5saW5lIH0pfT5cbiAgICB7KHR5cGUgPT09ICd0ZXh0JykgJiYgPFRleHRGaWVsZCB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gey4uLm90aGVyc30gLz59XG4gICAgeyh0eXBlID09PSAnY2hlY2tib3gnKSAmJiA8Q2hlY2tib3ggdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17b25DaGFuZ2V9IHsuLi5vdGhlcnN9IC8+fVxuICAgIHsodHlwZSA9PT0gJ3RleHRhcmVhJykgJiYgPFRleHRBcmVhIHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e29uQ2hhbmdlfSB7Li4ub3RoZXJzfSAvPn1cbiAgPC9kaXY+XG48L2FydGljbGU+XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUZXh0RmllbGQoeyB2YWx1ZSA9ICcnLCBjbGFzc05hbWUgPSAnJywgb25DaGFuZ2UsIC4uLm90aGVycyB9KSB7XG4gIHJldHVybiA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9e0V4dC5jbGFzc05hbWUoJ2Zvcm0tY29udHJvbCcsIGNsYXNzTmFtZSl9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZSAmJiBvbkNoYW5nZShlLnRhcmdldC52YWx1ZSl9IHsuLi5vdGhlcnN9IC8+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2hlY2tib3goeyB2YWx1ZSA9IGZhbHNlLCBvbkNoYW5nZSwgLi4ub3RoZXJzIH0pIHtcbiAgcmV0dXJuIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXt2YWx1ZX0gb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlKCF2YWx1ZSl9IHsuLi5vdGhlcnN9IC8+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVGV4dEFyZWEoeyByb3dzID0gJzMnLCB2YWx1ZSA9ICcnLCBjbGFzc05hbWUgPSAnJywgb25DaGFuZ2UsIC4uLm90aGVycyB9KSB7XG4gIHJldHVybiA8dGV4dGFyZWEgcm93cz17cm93c30gY2xhc3NOYW1lPXtFeHQuY2xhc3NOYW1lKCdmb3JtLWNvbnRyb2wnLCBjbGFzc05hbWUpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlICYmIG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX0gey4uLm90aGVyc30gLz47XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ34vY29tcG9uZW50cy9jb250YWluZXInO1xuaW1wb3J0IEdyaWRSb3cgZnJvbSAnLi9yb3cnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHcmlkQm9keSh7IG91dGVyV2lkdGgsIGJvZHlXaWR0aCwgY29sdW1ucyA9IFtdLCBzdG9yZSwgLi4ub3RoZXJzIH0pIHtcbiAgcmV0dXJuIDxDb250YWluZXIgbGF5b3V0PVwicm93XCIgY2xhc3NOYW1lPVwicngtZ3JpZC1ib2R5XCIgc3R5bGU9e3t3aWR0aDpvdXRlcldpZHRofX0+XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicngtZ3JpZC12aWV3XCIgc3R5bGU9e3t3aWR0aDpib2R5V2lkdGh9fT5cbiAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6MX19IC8+XG4gICAgICB7c3RvcmUuZ2V0UmVjb3JkcygpLm1hcCgocmVjb3JkLCByb3dJbmRleCkgPT4gPEdyaWRSb3cgY29sdW1ucz17Y29sdW1uc30gcmVjb3JkPXtyZWNvcmR9IHJvd0luZGV4PXtyb3dJbmRleH0gey4uLm90aGVyc30gLz4pfVxuICAgIDwvc2VjdGlvbj5cbiAgPC9Db250YWluZXI+XG59IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRXh0LCB7IGJpbmQgfSBmcm9tICd+L2NvcmUvZXh0JztcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gJ34vY29tcG9uZW50cy9mb3JtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZENlbGwgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgeyBkYXRhSW5kZXgsIHJlY29yZCB9ID0gcHJvcHM7XG4gICAgRXh0LmluaXRpYWxTdGF0ZSh0aGlzLCB7XG4gICAgICB2YWx1ZTogZGF0YUluZGV4ID8gcmVjb3JkLmdldChkYXRhSW5kZXgpIDogJycsXG4gICAgICByZWFkT25seTogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyh7IGRhdGFJbmRleCwgcmVjb3JkIH0pIHtcbiAgICB0aGlzLnNldFZhbHVlKGRhdGFJbmRleCA/IHJlY29yZC5nZXQoZGF0YUluZGV4KSA6ICcnKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHZhbHVlLCByZWFkT25seSB9ID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICB7IGVkaXRhYmxlLCBub01hcmtEaXJ0eSwgY2xhc3NOYW1lID0gJycsIHJlbmRlciA9IHZhbHVlID0+IHZhbHVlLCByZWNvcmQsIGRhdGFJbmRleCwgcm93SW5kZXgsIC4uLm90aGVycyB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjbHMgPSBFeHQuY2xhc3NOYW1lKCdyeC1ncmlkLWNlbGwnLCBjbGFzc05hbWUsIHsnbW9kaWZpZWQnOiAhbm9NYXJrRGlydHkgJiYgZGF0YUluZGV4ICYmIChyZWNvcmQuaXNNb2RpZmllZChkYXRhSW5kZXgpKX0pO1xuXG4gICAgaWYgKCFlZGl0YWJsZSkge1xuICAgICAgcmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xzfSBzdHlsZT17e2ZsZXg6MX19IHsuLi5vdGhlcnN9PlxuICAgICAgICB7cmVuZGVyKHZhbHVlLCByZWNvcmQsIGRhdGFJbmRleCwgcm93SW5kZXgpfVxuICAgICAgPC9zZWN0aW9uPlxuICAgIH1cbiAgICBpZiAocmVhZE9ubHkpIHtcbiAgICAgIHJldHVybiA8c2VjdGlvbiBjbGFzc05hbWU9e2Nsc30gc3R5bGU9e3tmbGV4OjF9fSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFJlYWRPbmx5KGZhbHNlKX0gey4uLm90aGVyc30+XG4gICAgICAgIHtyZW5kZXIodmFsdWUsIHJlY29yZCwgZGF0YUluZGV4LCByb3dJbmRleCl9XG4gICAgICA8L3NlY3Rpb24+XG4gICAgfVxuICAgIHJldHVybiA8c2VjdGlvbiBjbGFzc05hbWU9e2Nsc30gc3R5bGU9e3tmbGV4OjF9fSB7Li4ub3RoZXJzfT5cbiAgICAgIDxUZXh0RmllbGQgdmFsdWU9e3ZhbHVlfSBhdXRvRm9jdXMgb25DaGFuZ2U9e3RoaXMuc2V0VmFsdWV9IG9uQmx1cj17dGhpcy5hZnRlckVkaXR9IC8+XG4gICAgPC9zZWN0aW9uPlxuICB9XG5cbiAgQGJpbmRcbiAgYWZ0ZXJFZGl0KCkge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgeyByZWNvcmQsIGRhdGFJbmRleCB9ID0gdGhpcy5wcm9wcztcbiAgICByZWNvcmQuc2V0KGRhdGFJbmRleCwgdmFsdWUpO1xuICAgIHRoaXMuc2V0UmVhZE9ubHkodHJ1ZSk7XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCBFeHQsIHsgYmluZCB9IGZyb20gJ34vY29yZS9leHQnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnfi9jb21wb25lbnRzL2NvbnRhaW5lcic7XG5pbXBvcnQgR3JpZEhlYWRlciBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgR3JpZEJvZHkgZnJvbSAnLi9ib2R5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBFeHQuaW5pdGlhbFN0YXRlKHRoaXMsIHtcbiAgICAgIG91dGVyV2lkdGg6IDAsXG4gICAgICBoZWFkZXJXaWR0aDogMCxcbiAgICAgIGJvZHlXaWR0aDogMCxcbiAgICAgIGNoZWNrQ29sdW1uOiBwcm9wcy5jaGVja0NvbHVtbixcbiAgICAgIGNvbHVtbnM6IEV4dC5MaXN0KFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkocHJvcHMuY2hpbGRyZW4pKS5tYXAoY2hpbGQgPT4gY2hpbGQucHJvcHMpLmNvbGxlY3QoKSxcbiAgICB9KTtcbiAgICB0aGlzLm9uRGF0YUNoYW5nZSA9ICgpID0+IHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucmVzaXplR3JpZCgpO1xuICAgIHRoaXMucHJvcHMuc3RvcmUuc3Vic2NyaWJlKHRoaXMub25EYXRhQ2hhbmdlKTtcbiAgICB0aGlzLnJlc2l6ZUV2ZW50ID0gT2JzZXJ2YWJsZSAuZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSh0aGlzLnJlc2l6ZUdyaWQpO1xuICAgIHRoaXMuc2Nyb2xsRXZlbnQgPSBPYnNlcnZhYmxlIC5mcm9tRXZlbnQoZmluZERPTU5vZGUodGhpcykucXVlcnlTZWxlY3RvcignLnJ4LWdyaWQtYm9keScpLCAnc2Nyb2xsJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHRoaXMub25TY3JvbGwpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB0aGlzLnNldENvbHVtbnMoRXh0Lkxpc3QoUmVhY3QuQ2hpbGRyZW4udG9BcnJheShuZXh0UHJvcHMuY2hpbGRyZW4pKS5tYXAoY2hpbGQgPT4gY2hpbGQucHJvcHMpLmNvbGxlY3QoKSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnJlc2l6ZUV2ZW50LnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5zY3JvbGxFdmVudC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RvcmUsIGNsYXNzTmFtZSwgbm9IZWFkZXIsIC4uLm90aGVycyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gPENvbnRhaW5lciBsYXlvdXQ9XCJyb3dcIiBjbGFzc05hbWU9e0V4dC5jbGFzc05hbWUoJ3J4LWdyaWQnLCBjbGFzc05hbWUpfSB7Li4ub3RoZXJzfT5cbiAgICAgIHshbm9IZWFkZXIgJiYgPEdyaWRIZWFkZXIgc3RvcmU9e3N0b3JlfSB7Li4udGhpcy5zdGF0ZX0gLz59XG4gICAgICA8R3JpZEJvZHkgc3RvcmU9e3N0b3JlfSB7Li4udGhpcy5zdGF0ZX0gLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgfVxuXG4gIEBiaW5kXG4gIHJlc2l6ZUdyaWQoKSB7XG4gICAgY29uc3QgeyBjb2x1bW5zLCBjb2x1bW5Db25maWcgfSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgbm9kZSA9IGZpbmRET01Ob2RlKHRoaXMpLFxuICAgICAgICAgIHBhcmVudCA9IG5vZGUucGFyZW50RWxlbWVudCxcbiAgICAgICAgICBvdXRlcldpZHRoID0gcGFyZW50LmNsaWVudFdpZHRoLFxuICAgICAgICAgIGZsZXhDb2x1bW5zID0gRXh0Lkxpc3QoKTtcbiAgICBsZXQgaW5uZXJXaWR0aCA9IEV4dC5MaXN0KGNvbHVtbnMpLnJlZHVjZSgoaW5uZXJXaWR0aCwgY29sKSA9PiB7XG4gICAgICBpZiAoY29sLnN0eWxlICYmIGNvbC5zdHlsZS53aWR0aCkge1xuICAgICAgICBpbm5lcldpZHRoICs9IGNvbC5zdHlsZS53aWR0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZsZXhDb2x1bW5zLmFkZChjb2wpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlubmVyV2lkdGg7XG4gICAgfSwgdGhpcy5wcm9wcy5jaGVja0NvbHVtbiA/IEV4dC5DSEVDS19DT0xVTU5fV0lEVEggOiAwKTtcblxuICAgIHRoaXMuc2V0T3V0ZXJXaWR0aChvdXRlcldpZHRoKTtcbiAgICB0aGlzLnNldEhlYWRlcldpZHRoKE1hdGgubWF4KGlubmVyV2lkdGgsIG91dGVyV2lkdGgpKTtcbiAgICB0aGlzLnNldEJvZHlXaWR0aChNYXRoLm1heChpbm5lcldpZHRoLCBvdXRlcldpZHRoKSAtIEV4dC5TQ1JPTExfV0lEVEgpO1xuICB9XG5cbiAgQGJpbmRcbiAgb25TY3JvbGwoKSB7XG4gICAgY29uc3Qgbm9kZSA9IGZpbmRET01Ob2RlKHRoaXMpLFxuICAgICAgICAgIGhlYWRlciA9IG5vZGUucXVlcnlTZWxlY3RvcignLnJ4LWdyaWQtaGVhZGVyJyk7XG4gICAgaWYgKGhlYWRlcikge1xuICAgICAgaGVhZGVyLnNjcm9sbExlZnQgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5yeC1ncmlkLWJvZHknKS5zY3JvbGxMZWZ0O1xuICAgIH1cbiAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRXh0IGZyb20gJ34vY29yZS9leHQnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnfi9jb21wb25lbnRzL2NvbnRhaW5lcic7XG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gJ34vY29tcG9uZW50cy9mb3JtJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR3JpZEhlYWRlcih7IG91dGVyV2lkdGgsIGhlYWRlcldpZHRoLCBjaGVja0NvbHVtbiwgY29sdW1ucyA9IFtdLCBzdG9yZSwgLi4ub3RoZXJzIH0pIHtcbiAgcmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJ4LWdyaWQtaGVhZGVyXCIgc3R5bGU9e3t3aWR0aDpvdXRlcldpZHRofX0+XG4gICAgPENvbnRhaW5lciBsYXlvdXQ9XCJjb2x1bW5cIiBjbGFzc05hbWU9XCJyeC1ncmlkLWhlYWRlci1jb250YWluZXJcIiBzdHlsZT17e3dpZHRoOmhlYWRlcldpZHRofX0+XG4gICAgICB7Y2hlY2tDb2x1bW4gJiYgPGRpdiBjbGFzc05hbWU9XCJyeC1ncmlkLWhlYWRlci1jb2x1bW5cIiBzdHlsZT17e3dpZHRoOkV4dC5DSEVDS19DT0xVTU5fV0lEVEh9fT5cbiAgICAgICAgICB7KGNoZWNrQ29sdW1uID09PSAnbXVsdGlwbGUnKSAmJiA8Q2hlY2tib3ggZGlzYWJsZWQ9e3N0b3JlLmNvdW50KCkgPT09IDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzdG9yZS5jb3VudCgpID4gMCAmJiBzdG9yZS5nZXRTZWxlY3RlZFJlY29yZHMoKS5jb3VudCgpID09PSBzdG9yZS5jb3VudCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHN0b3JlLnRvZ2dsZVNlbGVjdEFsbCgpfSAvPn1cbiAgICAgICAgPC9kaXY+fVxuICAgICAge2NvbHVtbnMubWFwKCh7IGhlYWRlciA9ICcnLCBjbGFzc05hbWUgPSAnJywgLi4ub3RoZXJzIH0pID0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtFeHQuY2xhc3NOYW1lKCdyeC1ncmlkLWhlYWRlci1jb2x1bW4gdGV4dC1jZW50ZXInLCBjbGFzc05hbWUpfSBzdHlsZT17e2ZsZXg6MX19IHsuLi5vdGhlcnN9PlxuICAgICAgICAgIHtoZWFkZXJ9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpFeHQuU0NST0xMX1dJRFRIfX0gLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9zZWN0aW9uPlxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRXh0LCB7IGJpbmQgfSBmcm9tICd+L2NvcmUvZXh0JztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ34vY29tcG9uZW50cy9jb250YWluZXInO1xuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tICd+L2NvbXBvbmVudHMvZm9ybSc7XG5pbXBvcnQgR3JpZENlbGwgZnJvbSAnLi9jZWxsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZFJvdyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoZWNrQ29sdW1uLCBjb2x1bW5zID0gW10sIHJlY29yZCwgLi4ub3RoZXJzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiA8Q29udGFpbmVyIGxheW91dD1cImNvbHVtblwiIGNsYXNzTmFtZT1cInJ4LWdyaWQtcm93XCI+XG4gICAgICB7Y2hlY2tDb2x1bW4gJiYgPGRpdiBjbGFzc05hbWU9XCJyeC1ncmlkLWNlbGwgdGV4dC1zbS1jZW50ZXJcIiBzdHlsZT17e3dpZHRoOkV4dC5DSEVDS19DT0xVTU5fV0lEVEh9fT5cbiAgICAgICAgPENoZWNrYm94IGNoZWNrZWQ9e3JlY29yZC5zZWxlY3RlZH0gb25DaGFuZ2U9e3RoaXMudG9nZ2xlU2VsZWN0fSAvPlxuICAgICAgPC9kaXY+fVxuICAgICAge2NvbHVtbnMubWFwKGNvbHVtbiA9PiA8R3JpZENlbGwgcmVjb3JkPXtyZWNvcmR9IHsuLi5jb2x1bW59IHsuLi5vdGhlcnN9IC8+KX1cbiAgICA8L0NvbnRhaW5lcj5cbiAgfVxuXG4gIEBiaW5kXG4gIHRvZ2dsZVNlbGVjdCgpIHtcbiAgICBjb25zdCB7IHJlY29yZCwgY2hlY2tDb2x1bW4gfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHJlY29yZC5zZWxlY3RlZCkge1xuICAgICAgICByZWNvcmQuc2V0U2VsZWN0ZWQoZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY2hlY2tDb2x1bW4gIT09ICdtdWx0aXBsZScpIHtcbiAgICAgICAgcmVjb3JkLnN0b3JlLmdldFNlbGVjdGVkUmVjb3JkcygpLmVhY2gocmVjb3JkID0+IHJlY29yZC5zZXRTZWxlY3RlZChmYWxzZSkpO1xuICAgICAgfVxuICAgICAgcmVjb3JkLnNldFNlbGVjdGVkKHRydWUpO1xuICAgIH1cbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IEV4dCBmcm9tICd+L2NvcmUvZXh0JztcblxuY29uc3QgUk9VVEVTID0ge30sXG4gICAgICBnZXRSb3V0ZSA9ICgpID0+IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKSB8fCAnLycsXG4gICAgICBnZXRSb3V0ZVBhdGggPSByb3V0ZSA9PiByb3V0ZS5zcGxpdCgnLycpO1xuXG5leHBvcnQgZnVuY3Rpb24gUm91dGUocm91dGUpIHtcbiAgcmV0dXJuIGNvbXAgPT4ge1xuICAgIFJPVVRFU1tyb3V0ZV0gPSB7XG4gICAgICByb3V0ZSxcbiAgICAgIGNvbXAsXG4gICAgICBwYXRoOiBnZXRSb3V0ZVBhdGgocm91dGUpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBMaW5rKHsgdG8sIGNsYXNzTmFtZSA9ICcnLCBhY3RpdmVDbGFzc05hbWUgPSAnYWN0aXZlJywgdGV4dCwgY2hpbGRyZW4sIC4uLm90aGVycyB9KSB7XG4gIHJldHVybiA8YSBocmVmPXtgIyR7dG99YH0gY2xhc3NOYW1lPXtFeHQuY2xhc3NOYW1lKCduYXYtbGluaycsIGNsYXNzTmFtZSwgeyBbYWN0aXZlQ2xhc3NOYW1lXTogdG8gPT09IGdldFJvdXRlKCkgfSl9IHsuLi5vdGhlcnN9PlxuICAgIHt0ZXh0IHx8IGNoaWxkcmVufVxuICA8L2E+XG59XG5cbmV4cG9ydCBjbGFzcyBIYXNoUm91dGVyIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIEV4dC5pbml0aWFsU3RhdGUodGhpcywgbWF0Y2hQYXRoKCkpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgKCF3aW5kb3cubG9jYXRpb24uaGFzaCkgJiYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJy8nKTtcbiAgICBPYnNlcnZhYmxlLmZyb21FdmVudCh3aW5kb3csICdoYXNoY2hhbmdlJykuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0U3RhdGUobWF0Y2hQYXRoKCkpKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJvdXRlLCBjb21wLCBwYXJhbXMgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAoIWNvbXApIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0NvbXBvbmVudCBub3QgZm91bmQhJyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChjb21wLCB7IHJvdXRlLCBwYXJhbXMgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWF0Y2hQYXRoKCkge1xuICBjb25zdCBjdXJyZW50Um91dGUgPSBnZXRSb3V0ZSgpLFxuICAgICAgICBwYXJhbXMgPSB7IHJvdXRlOiBjdXJyZW50Um91dGUgfTtcblxuICAvLyBiYXNpYyByb3V0ZSAod2l0aG91dCBwYXJhbXMpXG4gIGlmIChST1VURVNbY3VycmVudFJvdXRlXSkge1xuICAgIHJldHVybiB7IHJvdXRlOiBjdXJyZW50Um91dGUsIGNvbXA6IFJPVVRFU1tjdXJyZW50Um91dGVdLmNvbXAsIHBhcmFtcyB9O1xuICB9XG5cbiAgLy8gYWR2YW5jZWQgcm91dGUgKHdpdGggcGFyYW1zKVxuICBjb25zdCBjdXJyZW50UGF0aCA9IGdldFJvdXRlUGF0aChjdXJyZW50Um91dGUpO1xuICBmb3IobGV0IHJvdXRlIGluIFJPVVRFUykge1xuICAgIGNvbnN0IG1hcFJvdXRlID0gUk9VVEVTW3JvdXRlXSxcbiAgICAgICAgICByb3V0ZVBhdGggPSBtYXBSb3V0ZS5wYXRoO1xuXG4gICAgbGV0IG1hdGNoZWQgPSB0cnVlO1xuICAgIEV4dC5MaXN0KG1hcFJvdXRlLnBhdGgpLmVhY2goKHJvdXRlTmFtZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChyb3V0ZU5hbWUgIT09IGN1cnJlbnRQYXRoW2luZGV4XSkge1xuICAgICAgICBpZiAocm91dGVOYW1lLnN0YXJ0c1dpdGgoJzonKSkgeyAvLyBkZXRlY3QgcGFyYW0gdmFsdWVcbiAgICAgICAgICBwYXJhbXNbcm91dGVOYW1lLnN1YnN0cmluZygxKV0gPSBjdXJyZW50UGF0aFtpbmRleF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWF0Y2hlZCA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKG1hdGNoZWQpIHtcbiAgICAgIHJldHVybiB7IHJvdXRlOiBjdXJyZW50Um91dGUsIGNvbXA6IG1hcFJvdXRlLmNvbXAsIHBhcmFtcyB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIHdpdGggbm90IGZvdW5kIHNjcmVlblxuICBpZiAoUk9VVEVTWycqJ10pIHtcbiAgICByZXR1cm4geyByb3V0ZTogY3VycmVudFJvdXRlLCBjb21wOiBST1VURVNbJyonXS5jb21wLCBwYXJhbXMgfTtcbiAgfVxuXG4gIC8vIHdpdGhvdXQgbm90IGZvdW5kIHNjcmVlblxuICByZXR1cm4geyByb3V0ZTogY3VycmVudFJvdXRlLCBjb21wOiBudWxsLCBwYXJhbXMgfTtcbn0iLCJleHBvcnQgY2xhc3MgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlLmxlbmd0aCkge1xuICAgICAgdGhpcy5kYXRhID0gdmFsdWU7XG4gICAgfVxuICAgIHRoaXMuY29sbGVjdCA9ICgpID0+IHRoaXMuZGF0YTtcbiAgICB0aGlzLmNvdW50ID0gKCkgPT4gdGhpcy5kYXRhLmxlbmd0aDtcbiAgICB0aGlzLmlzRW1wdHkgPSAoKSA9PiB0aGlzLmNvdW50ID09PSAwO1xuXG4gICAgdGhpcy5nZXRBdCA9IGluZGV4ID0+IHRoaXMuZGF0YVtpbmRleF07XG4gICAgdGhpcy5yZW1vdmVBdCA9IChpbmRleCwgY291bnQgPSAxKSA9PiB0aGlzLmRhdGEuc3BsaWNlKGluZGV4LCBjb3VudCk7XG4gICAgdGhpcy5zdWJMaXN0ID0gKHN0YXJ0LCBlbmQpID0+IG5ldyBMaXN0KHRoaXMuZGF0YS5zbGljZShzdGFydCwgZW5kKSk7XG4gICAgXG4gICAgdGhpcy5hZGQgPSBpdGVtID0+IHRoaXMuZGF0YS5wdXNoKGl0ZW0pO1xuICAgIHRoaXMuaW5zZXJ0ID0gKGluZGV4LCBpdGVtKSA9PiB0aGlzLmRhdGEuc3BsaWNlKGluZGV4LCAwLCBpdGVtKTtcbiAgICBcbiAgICB0aGlzLmZpbmRJbmRleCA9IHByZWRpY2F0ZSA9PiB0aGlzLmRhdGEuZmluZEluZGV4KHByZWRpY2F0ZSk7XG4gICAgdGhpcy5maW5kID0gcHJlZGljYXRlID0+IHRoaXMuZGF0YS5maW5kKHByZWRpY2F0ZSk7XG4gICAgdGhpcy5jb250YWlucyA9IHByZWRpY2F0ZSA9PiB0aGlzLmZpbmQocHJlZGljYXRlKSAhPT0gdW5kZWZpbmVkO1xuXG4gICAgdGhpcy5lYWNoID0gcHJlZGljYXRlID0+IHRoaXMuZGF0YS5mb3JFYWNoKHByZWRpY2F0ZSk7XG4gICAgdGhpcy5maWx0ZXIgPSBwcmVkaWNhdGUgPT4gbmV3IExpc3QodGhpcy5kYXRhLmZpbHRlcihwcmVkaWNhdGUpKTtcbiAgICB0aGlzLm1hcCA9IHByZWRpY2F0ZSA9PiBuZXcgTGlzdCh0aGlzLmRhdGEubWFwKHByZWRpY2F0ZSkpO1xuICAgIHRoaXMucmVkdWNlID0gKHByZWRpY2F0ZSwgaW5pdGlhbFZhbHVlKSA9PiB0aGlzLmRhdGEucmVkdWNlKHByZWRpY2F0ZSwgaW5pdGlhbFZhbHVlKTtcblxuICAgIHRoaXMuam9pbiA9IHNlcGFyYXRvciA9PiB0aGlzLmRhdGEuam9pbihzZXBhcmF0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEaWN0aW9uYXJ5IHtcbiAgY29uc3RydWN0b3Ioa2V5VmFsdWVzKSB7XG4gICAgdGhpcy5kYXRhID0ge307XG4gICAgaWYgKGtleVZhbHVlcykge1xuICAgICAgdGhpcy5kYXRhID0gT2JqZWN0LmFzc2lnbih7fSwga2V5VmFsdWVzKTtcbiAgICB9XG5cbiAgICB0aGlzLmtleXMgPSAoKSA9PiBuZXcgTGlzdChPYmplY3Qua2V5cyh0aGlzLmRhdGEpKTtcbiAgICB0aGlzLnZhbHVlcyA9ICgpID0+IG5ldyBMaXN0KE9iamVjdC52YWx1ZXModGhpcy5kYXRhKSk7XG5cbiAgICB0aGlzLnNldCA9IChrZXksIHZhbHVlKSA9PiB0aGlzLmRhdGFba2V5XSA9IHZhbHVlO1xuICAgIHRoaXMuZ2V0ID0ga2V5ID0+IHRoaXMuZGF0YVtrZXldO1xuICB9XG5cbiAgZWFjaChwcmVkaWNhdGUpIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5kYXRhKSB7XG4gICAgICBwcmVkaWNhdGUodGhpcy5kYXRhW2tleV0sIGtleSwgdGhpcy5kYXRhKTtcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgeyBMaXN0IH0gZnJvbSAnLi9jb2xsZWN0aW9uJztcblxuY2xhc3MgRG9tIGV4dGVuZHMgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5kaXNwbGF5ID0gc3RhdHVzID0+IHRoaXMuc2VsZWN0b3JzLmVhY2goc2VsZWN0b3IgPT4gc2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9IHN0YXR1cyk7XG4gICAgdGhpcy5zaG93ID0gKCkgPT4gdGhpcy5kaXNwbGF5KCdibG9jaycpO1xuICAgIHRoaXMuaGlkZSA9ICgpID0+IHRoaXMuZGlzcGxheSgnaGlkZScpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChzZWxlY3RvcikgPT4gbmV3IERvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTGlzdCwgRGljdGlvbmFyeSB9IGZyb20gJy4vY29sbGVjdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBFeHQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLkRPTSA9IHJlcXVpcmUoJy4vZG9tJykuZGVmYXVsdDtcbiAgICB0aGlzLlN0cmluZyA9IHJlcXVpcmUoJy4vc3RyaW5nJykuZGVmYXVsdDtcbiAgICB0aGlzLkFqYXggPSByZXF1aXJlKCd+L2RhdGEvYWpheCcpLmRlZmF1bHQ7XG4gICAgdGhpcy5MaXN0ID0gdmFsdWUgPT4gbmV3IExpc3QodmFsdWUpO1xuICAgIHRoaXMuTWFwID0ga2V5VmFsdWVzID0+IG5ldyBEaWN0aW9uYXJ5KGtleVZhbHVlcyk7XG4gICAgdGhpcy5TdG9yZU1hbmFnZXIgPSBuZXcgRGljdGlvbmFyeSgpO1xuXG4gICAgdGhpcy5TQ1JPTExfV0lEVEggPSB0aGlzLmdldFNjcm9sbFdpZHRoKCk7XG4gICAgdGhpcy5CT1JERVJfV0lEVEggPSAyO1xuICAgIHRoaXMuQ0hFQ0tfQ09MVU1OX1dJRFRIID0gMjg7XG4gICAgdGhpcy5VTktOT1dOX0VSUk9SX01TRyA9ICdBbiB1bmtub3duIGVycm9yIGhhcyBvY2N1cnJlZC4nO1xuXG4gICAgdGhpcy5pc1ByaW1pdGl2ZSA9IHZhbHVlID0+IHsgY29uc3QgdHlwZSA9IHR5cGVvZiB2YWx1ZTsgcmV0dXJuIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGUgPT09ICdudW1iZXInIHx8IHR5cGUgPT09ICdib29sZWFuJzsgfVxuICAgIHRoaXMuaXNTdHJpbmcgPSB2YWx1ZSA9PiAodHlwZW9mIHZhbHVlKSA9PT0gJ3N0cmluZyc7XG4gICAgdGhpcy5pc0Z1bmN0aW9uID0gdmFsdWUgPT4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG4gICAgdGhpcy5pc09iamVjdCA9IHZhbHVlID0+IHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBPYmplY3RdJztcbiAgICB0aGlzLmlzQXJyYXkgPSB2YWx1ZSA9PiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcblxuICAgIHRoaXMuY2xvbmUgPSBvYmogPT4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTsgLy8gZGVlcCBjbG9uZVxuXG4gICAgdGhpcy5pbnRlcnZhbCA9IChwZXJpb2QsIGFjdGlvbikgPT4gT2JzZXJ2YWJsZS5pbnRlcnZhbCgxMDAwICogcGVyaW9kKS5zdWJzY3JpYmUoeCA9PiBhY3Rpb24oKSk7XG4gIH1cblxuICBleHRlbmQoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24uYXBwbHkobnVsbCwgYXJndW1lbnRzKTsgLy8gaW1tdXRhYmxlIG9iamVjdFxuICB9XG5cbiAgaW5pdGlhbFN0YXRlKGNvbXAsIHN0YXRlKSB7XG4gICAgaWYgKCFjb21wIHx8ICFzdGF0ZSkgeyByZXR1cm47IH1cbiAgICBjb21wLnN0YXRlID0gc3RhdGU7XG4gICAgZm9yIChsZXQgZmllbGQgb2YgT2JqZWN0LmtleXMoc3RhdGUpKSB7XG4gICAgICBjb21wW2BzZXQke3RoaXMuU3RyaW5nLmNhcGl0YWxpemUoZmllbGQpfWBdID0gdmFsdWUgPT4gY29tcC5zZXRTdGF0ZSh7IFtmaWVsZF06IHZhbHVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNsYXNzTmFtZSguLi5leHByZXNzaW9ucykge1xuICAgIGNvbnN0IGNscyA9IFtdO1xuXG4gICAgdGhpcy5MaXN0KGV4cHJlc3Npb25zKS5lYWNoKGV4cCA9PiB7XG4gICAgICBpZiAoIWV4cCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZXhwID09PSAnc3RyaW5nJykge1xuICAgICAgICBjbHMucHVzaChleHApO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzT2JqZWN0KGV4cCkpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGV4cCkge1xuICAgICAgICAgIGlmIChleHBba2V5XSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY2xzLnB1c2goa2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY2xzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIC8vI3JlZ2lvbiBET01cbiAgY3JlYXRlRWxlbWVudChodG1sKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmlubmVySFRNTCA9IGh0bWw7XG4gICAgcmV0dXJuIGRpdi5jaGlsZHJlblswXTtcbiAgfVxuXG4gIGdldFNjcm9sbFdpZHRoKCkge1xuICAgIGNvbnN0IG91dGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCc8ZGl2IHN0eWxlPVwidmlzaWJpbGl0eTogaGlkZGVuOyB3aWR0aDogMTAwcHg7IG92ZXJmbG93OiBzY3JvbGw7XCI+PC9kaXY+Jyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdXRlcik7XG4gICAgY29uc3Qgd2lkdGhOb1Njcm9sbCA9IG91dGVyLm9mZnNldFdpZHRoO1xuXG4gICAgLy8gYWRkIGlubmVyZGl2XG4gICAgY29uc3QgaW5uZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJzxkaXYgc3R5bGU9XCJ3aWR0aDogMTAwJTtcIj48L2Rpdj4nKTtcbiAgICBvdXRlci5hcHBlbmRDaGlsZChpbm5lcik7XG4gICAgY29uc3Qgd2lkdGhXaXRoU2Nyb2xsID0gaW5uZXIub2Zmc2V0V2lkdGg7XG5cbiAgICAvLyByZW1vdmUgZGl2c1xuICAgIG91dGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob3V0ZXIpO1xuXG4gICAgcmV0dXJuIHdpZHRoTm9TY3JvbGwgLSB3aWR0aFdpdGhTY3JvbGw7XG4gIH1cbiAgLy8jZW5kcmVnaW9uXG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBFeHQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmQodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKSB7XG4gIGNvbnN0IGZuID0gZGVzY3JpcHRvci52YWx1ZTtcblxuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBAYmluZCBkZWNvcmF0b3IgaXMgb25seSBhcHBsaWVkIHRvIGZ1bmN0aW9ucyBub3Q6ICR7dHlwZW9mIGZufWApO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0KCkge1xuICAgICAgcmV0dXJuIGZuLmJpbmQodGhpcyk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCA9IDUwMCkge1xuICBsZXQgdGltZW91dDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLFxuICAgICAgICAgIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgICAgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgICAgfVxuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgfVxufSIsImNsYXNzIFN0cmluZyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FwaXRhbGl6ZSA9IHZhbHVlID0+IHZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSk7XG5cbiAgICB0aGlzLmh0bWxFbmNvZGUgPSB2YWx1ZSA9PiB2YWx1ZS5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJy9nLCAnJiMzOTsnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcblxuICAgIHRoaXMuaHRtbERlY29kZSA9IHZhbHVlID0+IHZhbHVlLnJlcGxhY2UoLyZhbXA7L2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyZsdDsvZywgJzwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyZndDs+L2csICc+JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8mIzM5Oy9nLCBcIidcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8mcXVvdDsvZywgJ1wiJyk7XG4gIH1cblxuICB0b1F1ZXJ5U3RyaW5nKHBhcmFtcywgc2VwLCBlbmNvZGUpIHtcbiAgICBzZXAgICAgPSBzZXAgPT09IHVuZGVmaW5lZCA/ICcmJyA6IHNlcDtcbiAgICBlbmNvZGUgPSBlbmNvZGUgPT09IGZhbHNlID8gZnVuY3Rpb24ocykgeyByZXR1cm4gczsgfSA6IGVuY29kZVVSSUNvbXBvbmVudDtcblxuICAgIGxldCBwYWlycyA9IFtdO1xuICAgIGZvciAobGV0IGtleSBpbiBwYXJhbXMpIHtcbiAgICAgIHBhaXJzLnB1c2goYCR7a2V5fT0ke2VuY29kZShwYXJhbXNba2V5XSl9YCk7XG4gICAgfVxuICAgIHJldHVybiBwYWlycy5qb2luKHNlcCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFN0cmluZygpOyIsImltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCBFeHQgZnJvbSAnfi9jb3JlL2V4dCc7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnfi9jb3JlL2NvbGxlY3Rpb24nO1xuaW1wb3J0IE1vZGVsIGZyb20gJy4vbW9kZWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYnN0cmFjdFN0b3JlIGV4dGVuZHMgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKCk7XG5cbiAgICAvLyNyZWdpb24gY29uZmlnc1xuICAgIHRoaXMudG90YWxDb3VudCA9IDA7XG4gICAgdGhpcy5wYWdlU2l6ZSA9IDA7XG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XG4gICAgdGhpcy5zdWJqZWN0ID0gbmV3IFN1YmplY3QoKTtcbiAgICB0aGlzLmlkUHJvcGVydHkgPSAnaWQnO1xuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgLy8jcmVnaW9uIHByb3BlcnRpZXNcbiAgICAvLyNlbmRyZWdpb25cblxuICAgIC8vI3JlZ2lvbiBtZXRob2RzXG4gICAgdGhpcy5jcmVhdGVSZWNvcmQgPSByZWNvcmQgPT4gbmV3IE1vZGVsKHJlY29yZCwgdGhpcyk7XG4gICAgdGhpcy5nZXRSZWNvcmRzID0gdGhpcy5jb2xsZWN0O1xuICAgIHRoaXMuZ2V0UmF3RGF0YXMgPSB0aGlzLm1hcChyZWNvcmQgPT4gcmVjb3JkLmdldERhdGEoKSkuY29sbGVjdCgpO1xuICAgIHRoaXMuZ2V0TW9kaWZpZWRSZWNvcmRzID0gKCkgPT4gdGhpcy5maWx0ZXIocmVjb3JkID0+IHJlY29yZC5pc01vZGlmaWVkKCkpO1xuICAgIHRoaXMuZ2V0U2VsZWN0ZWRSZWNvcmRzID0gKCkgPT4gdGhpcy5maWx0ZXIocmVjb3JkID0+IHJlY29yZC5zZWxlY3RlZCk7XG4gICAgdGhpcy5nZXROZXdSZWNvcmRzID0gKCkgPT4gdGhpcy5maWx0ZXIocmVjb3JkID0+IHJlY29yZC5pc05ld2x5Q3JlYXRlZCgpKTtcbiAgICB0aGlzLnN1YnNjcmliZSA9IG9ic2VydmVyID0+IHRoaXMuc3ViamVjdC5zdWJzY3JpYmUoeyBuZXh0OiB2YWx1ZSA9PiBvYnNlcnZlcih2YWx1ZSkgfSk7XG4gICAgdGhpcy5maXJlRXZlbnQgPSAoKSA9PiB0aGlzLnN1YmplY3QubmV4dCh0aGlzKTtcbiAgICAvLyNlbmRyZWdpb25cblxuICAgIEV4dC5leHRlbmQodGhpcywgY29uZmlnKTtcbiAgfVxuXG4gIGNsZWFyRGF0YShzaWxlbnQgPSBmYWxzZSkge1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICFzaWxlbnQgJiYgdGhpcy5maXJlRXZlbnQoKTtcbiAgfVxuXG4gIGxvYWREYXRhKGRhdGEpIHtcbiAgICB0aGlzLmNsZWFyRGF0YSh0cnVlKTtcbiAgICB0aGlzLmRhdGEgPSAobmV3IExpc3QoZGF0YSkpLm1hcCh0aGlzLmNyZWF0ZVJlY29yZC5iaW5kKHRoaXMpKS5jb2xsZWN0KCk7XG4gICAgdGhpcy5maXJlRXZlbnQoKTtcbiAgfVxuXG4gIGNvbW1pdENoYW5nZXMoKSB7XG4gICAgdGhpcy5nZXRNb2RpZmllZFJlY29yZHMoKS5lYWNoKHJlY29yZCA9PiByZWNvcmQuc2F2ZSgpKTtcbiAgICB0aGlzLmZpcmVFdmVudCgpO1xuICB9XG5cbiAgcmVqZWN0Q2hhbmdlcygpIHtcbiAgICB0aGlzLmdldE1vZGlmaWVkUmVjb3JkcygpLmVhY2gocmVjb3JkID0+IHJlY29yZC5yZWplY3QodHJ1ZSkpO1xuICAgIHRoaXMuZmlyZUV2ZW50KCk7XG4gIH1cblxuICBhZGRSZWNvcmQoZGF0YSA9IHt9KSB7XG4gICAgdGhpcy5hZGQodGhpcy5jcmVhdGVSZWNvcmQoZGF0YSkpO1xuICAgIHRoaXMuZmlyZUV2ZW50KCk7XG4gIH1cblxuICByZW1vdmVTZWxlY3RlZFJlY29yZHMoKSB7XG4gICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLmZpbHRlcihyZWNvcmQgPT4gIXJlY29yZC5zZWxlY3RlZCk7XG4gICAgdGhpcy5maXJlRXZlbnQoKTtcbiAgfVxuXG4gIHRvZ2dsZVNlbGVjdEFsbCgpIHtcbiAgICBjb25zdCBhbGxTZWxlY3RlZCA9IHRoaXMuZ2V0U2VsZWN0ZWRSZWNvcmRzKCkuY291bnQoKSA9PT0gdGhpcy5jb3VudCgpO1xuICAgIHRoaXMuZWFjaChyZWNvcmQgPT4gcmVjb3JkLnNlbGVjdGVkID0gIWFsbFNlbGVjdGVkKTtcbiAgICB0aGlzLmZpcmVFdmVudCgpO1xuICB9XG59IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5jbGFzcyBBamF4IHtcbiAgcmVxdWVzdCh7IHVybCwgbWV0aG9kID0gJ2dldCcsIHJlc3BvbnNlVHlwZSA9ICdqc29uJywgcGFyYW1zLCBkb25lLCBmYWlsLCBhbHdheXMgfSkge1xuICAgIE9ic2VydmFibGUuYWpheCh7XG4gICAgICB1cmwsXG4gICAgICBtZXRob2QsXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgIGJvZHk6IG1ldGhvZCA9PT0gJ3Bvc3QnICYmIHBhcmFtcyxcbiAgICAgIHJlc3BvbnNlVHlwZSxcbiAgICB9KVxuICAgIC5zdWJzY3JpYmUoe1xuICAgICAgbmV4dDogdmFsdWUgPT4gZG9uZSAmJiBkb25lKHZhbHVlLnJlc3BvbnNlKSxcbiAgICAgIGVycm9yOiBlcnIgPT4gZmFpbCAmJiBmYWlsKGVyci5tZXNzYWdlIHx8IGVyci5yZXNwb25zZSksXG4gICAgICBjb21wbGV0ZTogYWx3YXlzXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEFqYXgoKTsiLCJpbXBvcnQgRXh0IGZyb20gJ34vY29yZS9leHQnO1xuaW1wb3J0IEFic3RyYWN0U3RvcmUgZnJvbSAnLi9hYnN0cmFjdC1zdG9yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFycmF5U3RvcmUgZXh0ZW5kcyBBYnN0cmFjdFN0b3JlIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoKTtcbiAgICBFeHQuZXh0ZW5kKHRoaXMsIGNvbmZpZyk7XG4gIH1cbn0iLCJpbXBvcnQgRXh0IGZyb20gJ34vY29yZS9leHQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKGRhdGEsIHN0b3JlKSB7XG4gICAgLy8jcmVnaW9uIGNvbmZpZ3NcbiAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgLy8jZW5kcmVnaW9uXG5cbiAgICAvLyNyZWdpb24gcHJvcGVydGllc1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5zdG9yZSA9IHN0b3JlO1xuICAgIGNvbnN0IGZpZWxkQ29uZmlnID0gKHN0b3JlICYmIHN0b3JlLmZpZWxkcykgPyBzdG9yZS5maWVsZHMgOiBbXTtcbiAgICB0aGlzLmZpZWxkcyA9IEV4dC5MaXN0KGZpZWxkQ29uZmlnKS5tYXAoZmllbGQgPT4gRXh0LmlzU3RyaW5nKGZpZWxkKSA/ICh7IG5hbWU6IGZpZWxkLCB0eXBlOiAnc3RyaW5nJyB9KSA6IGZpZWxkKTtcbiAgICB0aGlzLmlkUHJvcGVydHkgPSBzdG9yZSA/IHN0b3JlLmlkUHJvcGVydHkgOiAnaWQnO1xuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgLy8jcmVnaW9uIG1ldGhvZHNcbiAgICB0aGlzLmdldERhdGEgPSAoKSA9PiB0aGlzLmRhdGE7XG4gICAgdGhpcy5nZXQgPSBmaWVsZE5hbWUgPT4gdGhpcy5kYXRhW2ZpZWxkTmFtZV07XG4gICAgLy8jZW5kcmVnaW9uXG5cbiAgICB0aGlzLnNhdmUoKTtcbiAgfVxuXG4gIHNldChmaWVsZE5hbWUsIG5ld1ZhbHVlLCBzaWxlbnQpIHtcbiAgICB0aGlzLmRhdGFbZmllbGROYW1lXSA9IG5ld1ZhbHVlO1xuICAgIHRoaXMubW9kaWZpZWQgPSAhdGhpcy5pc0VxdWFsKGZpZWxkTmFtZSk7XG4gICAgKCFzaWxlbnQgJiYgdGhpcy5zdG9yZSkgJiYgKHRoaXMuc3RvcmUuZmlyZUV2ZW50KCkpO1xuICB9XG5cbiAgc2F2ZSgpIHtcbiAgICB0aGlzLnBoYW50b20gPSBFeHQuY2xvbmUodGhpcy5kYXRhKTtcbiAgICB0aGlzLm1vZGlmaWVkID0gZmFsc2U7XG4gIH1cblxuICByZWplY3Qoc2lsZW50KSB7XG4gICAgdGhpcy5kYXRhID0gRXh0LmNsb25lKHRoaXMucGhhbnRvbSk7XG4gICAgdGhpcy5zYXZlKCk7XG4gICAgKCFzaWxlbnQgJiYgdGhpcy5zdG9yZSkgJiYgKHRoaXMuc3RvcmUuZmlyZUV2ZW50KCkpO1xuICB9XG5cbiAgaXNFcXVhbChmaWVsZE5hbWUpIHtcbiAgICBjb25zdCBvbGRWYWx1ZSA9IHRoaXMucGhhbnRvbVtmaWVsZE5hbWVdLFxuICAgICAgICAgIG5ld1ZhbHVlID0gdGhpcy5kYXRhW2ZpZWxkTmFtZV0sXG4gICAgICAgICAgZmllbGQgPSB0aGlzLmZpZWxkcy5maW5kKGZpZWxkID0+IGZpZWxkLm5hbWUgPT09IGZpZWxkTmFtZSk7XG5cbiAgICByZXR1cm4gKGZpZWxkICYmIGZpZWxkLmVxdWFscykgPyBmaWVsZC5lcXVhbHMobmV3VmFsdWUsIG9sZFZhbHVlKSA6IG5ld1ZhbHVlID09PSBvbGRWYWx1ZTtcbiAgfVxuXG4gIGlzTW9kaWZpZWQoZmllbGROYW1lKSB7XG4gICAgaWYgKCF0aGlzLnBoYW50b21bdGhpcy5pZFByb3BlcnR5XSkgeyAvLyBzaG91bGQgbm90IGRldGVjdCBuZXcgcmVjb3JkIGFzIGEgbW9kaWZpZWQgcmVjb3JkXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpZWxkTmFtZSA/ICF0aGlzLmlzRXF1YWwoZmllbGROYW1lKSA6IHRoaXMuZmllbGRzLmNvbnRhaW5zKGZpZWxkID0+ICF0aGlzLmlzRXF1YWwoZmllbGQubmFtZSkpO1xuICB9XG5cbiAgc2V0U2VsZWN0ZWQoc2VsZWN0ZWQsIHNpbGVudCkge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICAoIXNpbGVudCAmJiB0aGlzLnN0b3JlKSAmJiAodGhpcy5zdG9yZS5maXJlRXZlbnQoKSk7XG4gIH1cbn0iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgRXh0IGZyb20gJ34vY29yZS9leHQnO1xuaW1wb3J0IEFic3RyYWN0U3RvcmUgZnJvbSAnLi9hYnN0cmFjdC1zdG9yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3h5U3RvcmUgZXh0ZW5kcyBBYnN0cmFjdFN0b3JlIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8vI3JlZ2lvbiBjb25maWdzXG4gICAgdGhpcy5wcm94eSA9IHtcbiAgICAgIHJlYWRlcjoge30sXG4gICAgICB3cml0ZXI6IHt9XG4gICAgfTtcbiAgICAvLyNlbmRyZWdpb25cblxuICAgIEV4dC5leHRlbmQodGhpcywgY29uZmlnKTtcbiAgfVxuXG4gIGxvYWQoeyBkb25lLCBmYWlsLCBhbHdheXMgfSA9IHt9KSB7XG4gICAgbGV0IHsgdXJsLCBtZXRob2QgPSAnZ2V0JywgcmVzcG9uc2VUeXBlID0gJ2pzb24nLCBwYXJhbXMgfSA9IHRoaXMucHJveHk7XG4gICAgKG1ldGhvZCA9PT0gJ2dldCcgJiYgcGFyYW1zKSAmJiAodXJsID0gYCR7dXJsfT8ke1N0cmluZy50b1F1ZXJ5U3RyaW5nKHBhcmFtcyl9YCk7XG4gICAgT2JzZXJ2YWJsZS5hamF4KHtcbiAgICAgIHVybCxcbiAgICAgIG1ldGhvZCxcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgYm9keTogbWV0aG9kID09PSAncG9zdCcgJiYgcGFyYW1zLFxuICAgICAgcmVzcG9uc2VUeXBlLFxuICAgIH0pXG4gICAgLnN1YnNjcmliZSh7XG4gICAgICBuZXh0OiB2YWx1ZSA9PiB7XG4gICAgICAgIGNvbnN0IHsgcmVhZGVyOiB7IHJvb3RQcm9wZXJ0eSwgdG90YWxQcm9wZXJ0eSB9ID0ge30gfSA9IHRoaXMucHJveHk7XG4gICAgICAgIGxldCB7IHJlc3BvbnNlIH0gPSB2YWx1ZTtcbiAgICAgICAgaWYgKGRvbmUpIHsgcmVzcG9uc2UgPSBkb25lKHJlc3BvbnNlKX1cbiAgICAgICAgdGhpcy5sb2FkRGF0YShyb290UHJvcGVydHkgPyByZXNwb25zZVtyb290UHJvcGVydHldIDogcmVzcG9uc2UpO1xuICAgICAgICB0aGlzLnRvdGFsQ291bnQgPSAodGhpcy5wYWdlU2l6ZSAmJiB0b3RhbFByb3BlcnR5KSA/IHJlc3BvbnNlW3RvdGFsUHJvcGVydHldIDogdGhpcy5jb3VudCgpO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiBlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlIHx8IGVyci5yZXNwb25zZSk7XG4gICAgICAgIGZhaWwgJiYgZmFpbChlcnIubWVzc2FnZSB8fCBlcnIucmVzcG9uc2UpO1xuICAgICAgfSxcbiAgICAgIGNvbXBsZXRlOiBhbHdheXNcbiAgICB9KTtcbiAgfVxuXG4gIHN5bmMoeyB1cmwsIGRvbmUsIGZhaWwsIGFsd2F5cyB9ID0ge30pIHtcbiAgICBjb25zdCB7IHJlc3BvbnNlVHlwZSA9ICdqc29uJywgd3JpdGVyOiB7IHRyYW5zZm9ybSB9ID0ge30gfSA9IHRoaXMucHJveHk7XG4gICAgbGV0IHBhcmFtcyA9IHRoaXMuZ2V0TW9kaWZpZWRSZWNvcmRzKCkubWFwKHJlY29yZCA9PiByZWNvcmQuZGF0YSkuY29sbGVjdCgpO1xuICAgIHRyYW5zZm9ybSAmJiAocGFyYW1zID0gdHJhbnNmb3JtKHBhcmFtcykpO1xuICAgIE9ic2VydmFibGUuYWpheCh7XG4gICAgICB1cmw6IHVybCB8fCB0aGlzLnByb3h5LnVybCxcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICBib2R5OiBwYXJhbXMsXG4gICAgICByZXNwb25zZVR5cGUsXG4gICAgfSlcbiAgICAuc3Vic2NyaWJlKHtcbiAgICAgIG5leHQ6IHZhbHVlID0+IHtcbiAgICAgICAgdGhpcy5jb21taXRDaGFuZ2VzKCk7XG4gICAgICAgIHJldHVybiBkb25lID8gZG9uZSh2YWx1ZS5yZXNwb25zZSkgOiB2YWx1ZS5yZXNwb25zZTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIucmVzcG9uc2UpO1xuICAgICAgICBmYWlsICYmIGZhaWwoZXJyLm1lc3NhZ2UgfHwgZXJyLnJlc3BvbnNlKTtcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZTogYWx3YXlzXG4gICAgfSk7XG4gIH1cbn0iLCJpbXBvcnQgeyBEaWN0aW9uYXJ5IH0gZnJvbSAnfi9jb3JlL2NvbGxlY3Rpb24nO1xuXG5jbGFzcyBTdG9yZU1hbmFnZXIgZXh0ZW5kcyBEaWN0aW9uYXJ5IHsgfVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU3RvcmVNYW5hZ2VyKCk7IiwiaW1wb3J0IEV4dCBmcm9tICd+L2NvcmUvZXh0JztcbmltcG9ydCBBYnN0cmFjdFN0b3JlIGZyb20gJy4vYWJzdHJhY3Qtc3RvcmUnO1xuaW1wb3J0IFByb3h5U3RvcmUgZnJvbSAnLi9wcm94eS1zdG9yZSc7XG5pbXBvcnQgQXJyYXlTdG9yZSBmcm9tICcuL2FycmF5LXN0b3JlJztcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnID0+IHtcbiAgaWYgKCFjb25maWcudHlwZSkge1xuICAgIHJldHVybiBuZXcgUHJveHlTdG9yZShjb25maWcpO1xuICB9IGVsc2UgaWYgKGNvbmZpZy50eXBlID09PSAnQXJyYXknKSB7XG4gICAgcmV0dXJuIG5ldyBBcnJheVN0b3JlKGNvbmZpZyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBBYnN0cmFjdFN0b3JlKGNvbmZpZyk7XG4gIH1cbn0iLCJpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgRXh0IH0gZnJvbSAnLi9jb3JlL2V4dCc7XG5pbXBvcnQgRGlhbG9nTWFuYWdlciBmcm9tICcuL2NvbXBvbmVudHMvZGlhbG9nJztcbmltcG9ydCBTdG9yZU1hbmFnZXIgZnJvbSAnLi9kYXRhL3N0b3JlLW1hbmFnZXInO1xuXG5jbGFzcyBSZXh0IGV4dGVuZHMgRXh0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLlN0b3JlTWFuYWdlciA9IFN0b3JlTWFuYWdlcjtcbiAgICB0aGlzLkRpYWxvZ01hbmFnZXIgPSBEaWFsb2dNYW5hZ2VyO1xuICB9XG5cbiAgYXN5bmMgYXBwbGljYXRpb24oeyBzdG9yZXMsIGxhdW5jaCB9KSB7XG4gICAgaWYgKHN0b3Jlcykge1xuICAgICAgdGhpcy5MaXN0KHN0b3JlcykuZWFjaChzdG9yZSA9PiB7XG4gICAgICAgIHN0b3JlID0gc3RvcmUuZGVmYXVsdDtcbiAgICAgICAgdGhpcy5TdG9yZU1hbmFnZXIuc2V0KHN0b3JlLnN0b3JlSWQsIHN0b3JlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAobGF1bmNoKSB7XG4gICAgICBjb25zdCByb290ID0gdGhpcy5jcmVhdGVFbGVtZW50KCc8ZGl2IGlkPVwicmVhY3Qtcm9vdFwiPjwvZGl2PicpLFxuICAgICAgICAgICAgdmlld3BvcnQgPSBhd2FpdCBsYXVuY2goKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocm9vdCk7XG4gICAgICByZW5kZXIodmlld3BvcnQsIHJvb3QpO1xuICAgIH1cbiAgfVxuXG4gIHNob3dFcnJvck1zZ2JveChtZXNzYWdlKSB7XG4gICAgdGhpcy5EaWFsb2dNYW5hZ2VyLm1zZ2JveCh7XG4gICAgICB0aXRsZTogJ0Vycm9yJyxcbiAgICAgIGljb246ICd0aW1lcycsXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlIHx8IHRoaXMuVU5LTk9XTl9FUlJPUl9NU0csXG4gICAgICBidXR0b25zOiAnT0snXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFJleHQoKTtcblxuLy8jcmVnaW9uIENvbXBvbmVudFxuZXhwb3J0IHsgSGFzaFJvdXRlciwgTGluayB9IGZyb20gJy4vY29tcG9uZW50cy9yb3V0ZXInO1xuZXhwb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRhaW5lcic7XG5leHBvcnQgeyBCdXR0b24sIEJ1dHRvbkxpbmssIEZpZWxkLCBUZXh0RmllbGQsIENoZWNrYm94LCBUZXh0QXJlYSB9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgR3JpZCB9IGZyb20gJy4vY29tcG9uZW50cy9ncmlkL2dyaWQnO1xuZXhwb3J0IHsgRGlhbG9nIH0gZnJvbSAnLi9jb21wb25lbnRzL2RpYWxvZyc7XG4vLyNlbmRyZWdpb25cblxuLy8jcmVnaW9uIERlY29yYXRvciAob3IgSGlnaGVyIE9yZGVyIEZ1bmN0aW9uIG9yIEhpZ2hlciBPcmRlciBDb21wb25lbnQpXG5leHBvcnQgeyBiaW5kLCBkZWJvdW5jZSB9IGZyb20gJy4vY29yZS9leHQnO1xuZXhwb3J0IHsgUm91dGUgfSBmcm9tICcuL2NvbXBvbmVudHMvcm91dGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQXBwbGljYXRpb24gfSBmcm9tICcuL2FwcC9hcHBsaWNhdGlvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbXBvbmVudCB9IGZyb20gJy4vYXBwL2NvbXBvbmVudCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlcnZpY2UgfSBmcm9tICcuL2FwcC9zZXJ2aWNlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3RvcmUgfSBmcm9tICcuL2RhdGEvc3RvcmUnO1xuLy8jZW5kcmVnaW9uIl19
