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

},{"../../../src/rext":35,"./components/architecture/architecture":2,"./components/core-concepts/component":3,"./components/core-concepts/data-package":4,"./components/core-concepts/screen-navigation":5,"./components/example/cards":6,"./components/example/dashboard":8,"./components/example/details":9,"./components/example/notfound":10,"./components/example/search":11,"./components/example/stores/card":12,"./components/getting-started/getting-started":13,"./components/viewport/viewport":14,"babel-polyfill":"babel-polyfill","react":"react"}],2:[function(require,module,exports){
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
          '// ./app.js\nimport \'babel-polyfill\';\nimport React from \'react\';\nimport Rext from \'ext-react\';\nimport Viewport from \'./components/viewport/viewport\';\n\nRext.application({\n  stores: [\n    require(\'./stores/cards\'),\n  ],\n  views: [\n    require(\'./components/cards\'),\n  ],\n  launch: () => <Viewport />\n});'
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

},{"../../../../../src/rext":35,"react":"react"}],3:[function(require,module,exports){
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

},{"../../../../../src/rext":35,"react":"react"}],4:[function(require,module,exports){
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

},{"../../../../../src/rext":35,"react":"react"}],5:[function(require,module,exports){
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

},{"../../../../../src/rext":35,"react":"react"}],6:[function(require,module,exports){
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

},{"../../../../../src/rext":35,"./cards.view":7,"react":"react"}],7:[function(require,module,exports){
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

},{"../../../../../src/rext":35,"react":"react"}],8:[function(require,module,exports){
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

},{"../../../../../src/rext":35,"react":"react"}],9:[function(require,module,exports){
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

},{"../../../../../src/rext":35,"react":"react"}],10:[function(require,module,exports){
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

},{"../../../../../src/rext":35,"react":"react"}],11:[function(require,module,exports){
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

},{"../../../../../src/rext":35,"react":"react"}],12:[function(require,module,exports){
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

},{"../../../../../../src/rext":35}],13:[function(require,module,exports){
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

},{"../../../../../src/rext":35,"react":"react"}],14:[function(require,module,exports){
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

},{"../../../../../src/rext":35,"react":"react"}],15:[function(require,module,exports){
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
            controller = new Controller(props);

        controller.stores = stores;

        _ext2.default.initialState(_this, _defineProperty({
          stores: stores
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

},{"../core/ext":26,"../core/list":27,"../data/store-manager":33,"react":"react"}],16:[function(require,module,exports){
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

},{"../core/ext":26,"react":"react"}],17:[function(require,module,exports){
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

},{"../core/ext":26,"react":"react"}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _container = require('../container');

var _row = require('./row');

var _row2 = _interopRequireDefault(_row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GridBody = function (_PureComponent) {
  _inherits(GridBody, _PureComponent);

  function GridBody(props) {
    _classCallCheck(this, GridBody);

    var _this = _possibleConstructorReturn(this, (GridBody.__proto__ || Object.getPrototypeOf(GridBody)).call(this, props));

    _this.onDataChange = function () {
      return _this.forceUpdate();
    };
    return _this;
  }

  _createClass(GridBody, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.store.subscribe(this.onDataChange);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$columns = _props.columns,
          columns = _props$columns === undefined ? [] : _props$columns,
          store = _props.store;

      return _react2.default.createElement(
        _container.Container,
        { layout: 'row', className: 'rx-grid-body' },
        _react2.default.createElement(
          'section',
          { className: 'rx-grid-view' },
          _react2.default.createElement('div', { style: { height: 1 } }),
          store.getRecords().map(function (record, rowIndex) {
            return _react2.default.createElement(_row2.default, { columns: columns, record: record, rowIndex: rowIndex });
          })
        )
      );
    }
  }]);

  return GridBody;
}(_react.PureComponent);

exports.default = GridBody;

},{"../container":16,"./row":22,"react":"react"}],19:[function(require,module,exports){
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
          _props$className = _props.className,
          className = _props$className === undefined ? '' : _props$className,
          _props$render = _props.render,
          render = _props$render === undefined ? function (value) {
        return value;
      } : _props$render,
          record = _props.record,
          dataIndex = _props.dataIndex,
          rowIndex = _props.rowIndex,
          others = _objectWithoutProperties(_props, ['editable', 'className', 'render', 'record', 'dataIndex', 'rowIndex']);

      if (editable) {
        if (readOnly) {
          return _react2.default.createElement(
            'section',
            _extends({ className: _ext2.default.className('rx-grid-cell', className), style: { flex: 1 }, onClick: function onClick() {
                return _this2.setReadOnly(false);
              } }, others),
            render(value, record, dataIndex, rowIndex)
          );
        } else {
          return _react2.default.createElement(
            'section',
            _extends({ className: _ext2.default.className('rx-grid-cell', className), style: { flex: 1 } }, others),
            _react2.default.createElement(_form.TextField, { value: value, autoFocus: true, onChange: this.setValue, onBlur: this.afterEdit })
          );
        }
      } else {
        return _react2.default.createElement(
          'section',
          _extends({ className: _ext2.default.className('rx-grid-cell', className), style: { flex: 1 } }, others),
          render(value, record, dataIndex, rowIndex)
        );
      }
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

},{"../../core/ext":26,"../form":17,"react":"react"}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ext = require('../../core/ext');

var _ext2 = _interopRequireDefault(_ext);

var _list = require('../../core/list');

var _list2 = _interopRequireDefault(_list);

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

var Grid = function (_PureComponent) {
  _inherits(Grid, _PureComponent);

  function Grid(props) {
    _classCallCheck(this, Grid);

    var _this = _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).call(this, props));

    _ext2.default.initialState(_this, {
      columns: (0, _list2.default)(_react2.default.Children.toArray(props.children)).map(function (child) {
        return child.props;
      }).collect()
    });
    return _this;
  }

  _createClass(Grid, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          store = _props.store,
          className = _props.className,
          others = _objectWithoutProperties(_props, ['store', 'className']);

      return _react2.default.createElement(
        _container.Container,
        _extends({ layout: 'row', className: _ext2.default.className('rx-grid', className) }, others),
        _react2.default.createElement(_header2.default, this.state),
        _react2.default.createElement(_body2.default, _extends({ store: store }, this.state))
      );
    }
  }]);

  return Grid;
}(_react.PureComponent);

exports.default = Grid;

},{"../../core/ext":26,"../../core/list":27,"../container":16,"./body":18,"./header":21,"react":"react"}],21:[function(require,module,exports){
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function GridHeader(_ref) {
  var _ref$columns = _ref.columns,
      columns = _ref$columns === undefined ? [] : _ref$columns;

  return _react2.default.createElement(
    'section',
    { className: 'rx-grid-header' },
    _react2.default.createElement(
      _container.Container,
      { layout: 'column', className: 'rx-grid-header-container' },
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

},{"../../core/ext":26,"../container":16,"react":"react"}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = GridRow;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _container = require('../container');

var _cell = require('./cell');

var _cell2 = _interopRequireDefault(_cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function GridRow(_ref) {
  var _ref$columns = _ref.columns,
      columns = _ref$columns === undefined ? [] : _ref$columns,
      others = _objectWithoutProperties(_ref, ['columns']);

  return _react2.default.createElement(
    _container.Container,
    { layout: 'column', className: 'rx-grid-row' },
    columns.map(function (column) {
      return _react2.default.createElement(_cell2.default, _extends({}, column, others));
    })
  );
}

},{"../container":16,"./cell":19,"react":"react"}],23:[function(require,module,exports){
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

},{"../core/ext":26,"../core/list":27,"react":"react","rxjs":"rxjs"}],24:[function(require,module,exports){
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

},{"./list":27}],25:[function(require,module,exports){
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
  }, {
    key: 'parent',
    value: function parent() {
      this.comp = this.comp.parentElement;
      return this;
    }
  }, {
    key: 'width',
    value: function width() {
      return this.comp.clientWidth;
    }
  }, {
    key: 'height',
    value: function height() {
      return this.comp.clientHeight;
    }
  }, {
    key: 'find',
    value: function find(selector) {
      return this.comp.querySelector(selector);
    }
  }]);

  return DOM;
}(_list.List);

exports.default = function (selector) {
  return DOM.getEl(selector);
};

},{"./list":27}],26:[function(require,module,exports){
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

},{"./dictionary":24,"./dom":25,"./list":27,"./string":28}],27:[function(require,module,exports){
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
        if (predicate(this.data[index], index, this.data)) {
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

},{}],28:[function(require,module,exports){
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

},{}],29:[function(require,module,exports){
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
  }]);

  return AbstractStore;
}(_list.List);

exports.default = AbstractStore;

},{"../core/list":27,"./model":31,"rxjs":"rxjs"}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cache = function () {
  function Cache() {
    _classCallCheck(this, Cache);

    this._cache = {};
  }

  _createClass(Cache, [{
    key: 'hasLocalStorage',
    value: function hasLocalStorage() {
      try {
        return 'localStorage' in window && window.localStorage !== null;
      } catch (e) {
        return false;
      }
    }
  }, {
    key: 'get',
    value: function get(key) {
      if (this.hasLocalStorage()) {
        return JSON.parse(localStorage.getItem(key)) || undefined;
      } else {
        return this._cache[key] || undefined;
      }
    }
  }, {
    key: 'set',
    value: function set(key, value) {
      if (this.hasLocalStorage()) {
        localStorage.setItem(key, JSON.stringify(value));
      } else {
        this._cache[key] = value;
      }
    }
  }, {
    key: 'remove',
    value: function remove(key) {
      if (!key) {
        this._cache = {};
      } else if (this.hasLocalStorage()) {
        localStorage.removeItem(key);
      } else {
        delete this._cache[key];
      }
    }
  }]);

  return Cache;
}();

exports.default = new Cache();

},{}],31:[function(require,module,exports){
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
    value: function isEqual(fieldName) {
      var oldValue = this.phantom[fieldName],
          newValue = this.data[fieldName],
          field = this.fields.find(function (field) {
        return field.name === fieldName;
      });

      return field.equals ? field.equals(newValue, oldValue) : newValue === oldValue;
    }
  }, {
    key: 'isModified',
    value: function isModified(fieldName) {
      return this.modified;
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

},{"../core/ext":26,"../core/list":27}],32:[function(require,module,exports){
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

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
      }).map(function (value) {
        return value.response;
      }).subscribe({
        next: function next(response) {
          var _proxy$reader = _this2.proxy.reader;
          _proxy$reader = _proxy$reader === undefined ? {} : _proxy$reader;
          var rootProperty = _proxy$reader.rootProperty,
              totalProperty = _proxy$reader.totalProperty;

          _this2.loadData(rootProperty ? response[rootProperty] : response);
          _this2.totalCount = _this2.pageSize && totalProperty ? response[totalProperty] : _this2.count();
          done && done(response);
        },
        error: function error(err) {
          return fail(err.response || err.message);
        },
        complete: always
      });
    }
  }, {
    key: 'sync',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            done = _ref3.done,
            fail = _ref3.fail,
            always = _ref3.always;

        var _proxy2, url, _proxy2$responseType, responseType, _proxy2$writer, transform, params;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _proxy2 = this.proxy, url = _proxy2.url, _proxy2$responseType = _proxy2.responseType, responseType = _proxy2$responseType === undefined ? 'json' : _proxy2$responseType, _proxy2$writer = _proxy2.writer;
                _proxy2$writer = _proxy2$writer === undefined ? {} : _proxy2$writer;
                transform = _proxy2$writer.transform;
                params = this.getModifiedRecords().map(function (record) {
                  return record.data;
                }).collect();
                console.log(params);
                transform && (params = transform(params));
                _rxjs.Observable.ajax({
                  url: url,
                  method: 'post',
                  headers: { 'Content-Type': 'application/json' },
                  body: params,
                  responseType: responseType
                }).map(function (value) {
                  return value.response;
                }).subscribe({
                  next: done,
                  error: function error(err) {
                    return fail(err.response || err.message);
                  },
                  complete: always
                });

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function sync() {
        return _ref2.apply(this, arguments);
      }

      return sync;
    }()
  }]);

  return ProxyStore;
}(_abstractStore2.default);

exports.default = ProxyStore;

},{"../core/ext":26,"./abstract-store":29,"rxjs":"rxjs"}],33:[function(require,module,exports){
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

},{"../core/dictionary":24}],34:[function(require,module,exports){
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

},{"../core/ext":26,"./proxy-store":32}],35:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Store = exports.Component = exports.Route = exports.debounce = exports.bind = exports.Grid = exports.TextArea = exports.Checkbox = exports.TextField = exports.Field = exports.ButtonLink = exports.Button = exports.Container = exports.Link = exports.HashRouter = undefined;

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
    _this.Cache = require('./data/cache').default;
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

},{"./app/component":15,"./components/container":16,"./components/form":17,"./components/grid/grid":20,"./components/router":23,"./core/ext":26,"./data/cache":30,"./data/store":34,"./data/store-manager":33,"babel-polyfill":"babel-polyfill","react":"react","react-dom":"react-dom"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkb2NzL3NyYy9qcy9hcHAuanMiLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2FyY2hpdGVjdHVyZS9hcmNoaXRlY3R1cmUuanN4IiwiZG9jcy9zcmMvanMvY29tcG9uZW50cy9jb3JlLWNvbmNlcHRzL2NvbXBvbmVudC5qc3giLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2NvcmUtY29uY2VwdHMvZGF0YS1wYWNrYWdlLmpzeCIsImRvY3Mvc3JjL2pzL2NvbXBvbmVudHMvY29yZS1jb25jZXB0cy9zY3JlZW4tbmF2aWdhdGlvbi5qc3giLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUvY2FyZHMuanMiLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUvY2FyZHMudmlldy5qc3giLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUvZGFzaGJvYXJkLmpzIiwiZG9jcy9zcmMvanMvY29tcG9uZW50cy9leGFtcGxlL2RldGFpbHMuanMiLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUvbm90Zm91bmQuanMiLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUvc2VhcmNoLmpzIiwiZG9jcy9zcmMvanMvY29tcG9uZW50cy9leGFtcGxlL3N0b3Jlcy9jYXJkLmpzIiwiZG9jcy9zcmMvanMvY29tcG9uZW50cy9nZXR0aW5nLXN0YXJ0ZWQvZ2V0dGluZy1zdGFydGVkLmpzeCIsImRvY3Mvc3JjL2pzL2NvbXBvbmVudHMvdmlld3BvcnQvdmlld3BvcnQuanN4Iiwic3JjL2FwcC9jb21wb25lbnQuanMiLCJzcmMvY29tcG9uZW50cy9jb250YWluZXIuanN4Iiwic3JjL2NvbXBvbmVudHMvZm9ybS5qc3giLCJzcmMvY29tcG9uZW50cy9ncmlkL2JvZHkuanN4Iiwic3JjL2NvbXBvbmVudHMvZ3JpZC9jZWxsLmpzeCIsInNyYy9jb21wb25lbnRzL2dyaWQvZ3JpZC5qc3giLCJzcmMvY29tcG9uZW50cy9ncmlkL2hlYWRlci5qc3giLCJzcmMvY29tcG9uZW50cy9ncmlkL3Jvdy5qc3giLCJzcmMvY29tcG9uZW50cy9yb3V0ZXIuanN4Iiwic3JjL2NvcmUvZGljdGlvbmFyeS5qcyIsInNyYy9jb3JlL2RvbS5qcyIsInNyYy9jb3JlL2V4dC5qcyIsInNyYy9jb3JlL2xpc3QuanMiLCJzcmMvY29yZS9zdHJpbmcuanMiLCJzcmMvZGF0YS9hYnN0cmFjdC1zdG9yZS5qcyIsInNyYy9kYXRhL2NhY2hlLmpzIiwic3JjL2RhdGEvbW9kZWwuanMiLCJzcmMvZGF0YS9wcm94eS1zdG9yZS5qcyIsInNyYy9kYXRhL3N0b3JlLW1hbmFnZXIuanMiLCJzcmMvZGF0YS9zdG9yZS5qcyIsInNyYy9yZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLGVBQUssV0FBTCxDQUFpQjtBQUNmLFVBQVEsQ0FDTixRQUFRLGtDQUFSLENBRE0sQ0FETztBQUlmLFNBQU8sQ0FDTCxRQUFRLDhDQUFSLENBREssRUFFTCxRQUFRLHNDQUFSLENBRkssRUFHTCxRQUFRLDhDQUFSLENBSEssRUFJTCxRQUFRLHlDQUFSLENBSkssRUFLTCxRQUFRLHdDQUFSLENBTEs7QUFNTDtBQUNBLFVBQVEsZ0NBQVIsQ0FQSyxFQVFMLFFBQVEsNkJBQVIsQ0FSSyxFQVNMLFFBQVEsOEJBQVIsQ0FUSyxFQVVMLFFBQVEsK0JBQVIsQ0FWSyxFQVdMLFFBQVEsNEJBQVIsQ0FYSyxDQUpRO0FBaUJmLFVBQVE7QUFBQSxXQUFNLHVEQUFOO0FBQUE7QUFqQk8sQ0FBakI7Ozs7Ozs7Ozs7Ozs7O0FDTEE7Ozs7QUFDQTs7Ozs7Ozs7OztJQUdxQixZLFdBRHBCLGlCQUFNLGVBQU4sQzs7Ozs7Ozs7Ozs7NkJBRVU7QUFDUCxhQUFPO0FBQUE7QUFBQSxVQUFXLFdBQVUsMkJBQXJCO0FBQ0w7QUFBQTtBQUFBLFlBQUksV0FBVSxPQUFkO0FBQUE7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Ozs7Ozs7aUJBQVEsVTs7Ozs7O2lCQUFZLEs7Ozs7OztpQkFBTyxTOzs7Ozs7aUJBQVcsUTs7Ozs7O2lCQUFVLFE7Ozs7Ozs7Ozt5Q0FDaEQsTzs7OztBQWhDVDs7Ozs7Z0JBb0NTLEk7Ozs7OztnQkFBTSxROzs7Ozs7bUJBQ04sSzs7Ozs7Ozs7OzhDQUNBLE87Ozs7Ozs7OzswQ0FDQSxPOzs7O0FBMUNUOztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0lBRU0sSTs7O0FBQ0osa0JBQWM7QUFBQTs7QUFBQTs7QUFFWixVQUFLLFlBQUw7QUFDQSxVQUFLLEtBQUwsR0FBYSxRQUFRLGNBQVIsRUFBd0IsT0FBckM7QUFIWTtBQUliOzs7Ozs7WUFFbUIsTSxRQUFBLE07WUFBUSxNLFFBQUEsTTs7Ozs7O0FBQzFCLG9CQUFJLE1BQUosRUFBWTtBQUNWLHVCQUFLLElBQUwsQ0FBVSxNQUFWLEVBQWtCLElBQWxCLENBQXVCLGlCQUFTO0FBQzlCLDRCQUFRLE1BQU0sT0FBZDtBQUNBLDJDQUFhLEdBQWIsQ0FBaUIsTUFBTSxPQUF2QixFQUFnQyxLQUFoQztBQUNELG1CQUhEO0FBSUQ7O3FCQUNHLE07Ozs7O0FBQ0ksb0IsR0FBTyxLQUFLLGFBQUwsQ0FBbUIsNkJBQW5CLEM7O3VCQUNVLFE7OztBQUFqQix3Qjs7QUFDTix5QkFBUyxJQUFULENBQWMsV0FBZCxDQUEwQixJQUExQjtBQUNBLHNDQUFPLFFBQVAsRUFBaUIsSUFBakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFLUyxJQUFJLElBQUosRTs7QUFFZiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmV4dCBmcm9tICd+L3JleHQnO1xuaW1wb3J0IFZpZXdwb3J0IGZyb20gJy4vY29tcG9uZW50cy92aWV3cG9ydC92aWV3cG9ydCc7XG5cblJleHQuYXBwbGljYXRpb24oe1xuICBzdG9yZXM6IFtcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvZXhhbXBsZS9zdG9yZXMvY2FyZCcpLFxuICBdLFxuICB2aWV3czogW1xuICAgIHJlcXVpcmUoJy4vY29tcG9uZW50cy9nZXR0aW5nLXN0YXJ0ZWQvZ2V0dGluZy1zdGFydGVkJyksXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2NvcmUtY29uY2VwdHMvY29tcG9uZW50JyksXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2NvcmUtY29uY2VwdHMvc2NyZWVuLW5hdmlnYXRpb24nKSxcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvY29yZS1jb25jZXB0cy9kYXRhLXBhY2thZ2UnKSxcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvYXJjaGl0ZWN0dXJlL2FyY2hpdGVjdHVyZScpLFxuICAgIC8vIHJlcXVpcmUoJy4vY29tcG9uZW50cy91aS1jb21wb25lbnRzL2dyaWQnKSxcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvZXhhbXBsZS9kYXNoYm9hcmQnKSxcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvZXhhbXBsZS9zZWFyY2gnKSxcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvZXhhbXBsZS9kZXRhaWxzJyksXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2V4YW1wbGUvbm90Zm91bmQnKSxcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvZXhhbXBsZS9jYXJkcycpLFxuICBdLFxuICBsYXVuY2g6ICgpID0+IDxWaWV3cG9ydCAvPlxufSk7IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29udGFpbmVyIH0gZnJvbSAnfi9yZXh0JztcblxuQFJvdXRlKCcvYXJjaGl0ZWN0dXJlJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFyY2hpdGVjdHVyZSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxDb250YWluZXIgY2xhc3NOYW1lPVwibWFpbiBjb250YWluZXIgc2Nyb2xsYWJsZVwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLW1kXCI+QXBwbGljYXRpb24gQXJjaGl0ZWN0dXJlPC9oMT5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntgLy8gLi9hcHAuanNcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZXh0IGZyb20gJ2V4dC1yZWFjdCc7XG5pbXBvcnQgVmlld3BvcnQgZnJvbSAnLi9jb21wb25lbnRzL3ZpZXdwb3J0L3ZpZXdwb3J0JztcblxuUmV4dC5hcHBsaWNhdGlvbih7XG4gIHN0b3JlczogW1xuICAgIHJlcXVpcmUoJy4vc3RvcmVzL2NhcmRzJyksXG4gIF0sXG4gIHZpZXdzOiBbXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2NhcmRzJyksXG4gIF0sXG4gIGxhdW5jaDogKCkgPT4gPFZpZXdwb3J0IC8+XG59KTtgfVxuICAgICAgPC9wcmU+XG4gICAgICA8cHJlIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG57YC8vIC4vc3RvcmVzL2NhcmRcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnZXh0LXJlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgU3RvcmUoe1xuICBzdG9yZUlkOiAnQ2FyZFN0b3JlJyxcbiAgZmllbGRzOiBbICdOYW1lJyBdLFxuICBwcm94eToge1xuICAgIHVybDogJy9kYXRhL2NhcmQuanNvbidcbiAgfVxufSlgfVxuICAgICAgPC9wcmU+XG4gICAgICA8cHJlIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG57YC8vIC4vY29tcG9uZW50cy9jYXJkcy5qc1xuaW1wb3J0IHsgUm91dGUsIENvbXBvbmVudCB9IGZyb20gJ2V4dC1yZWFjdCc7XG5cbkBSb3V0ZSgnL2V4YW1wbGUvY2FyZHMnKVxuQENvbXBvbmVudCh7XG4gIHN0b3JlczogWyAnQ2FyZFN0b3JlJyBdLFxuICB2aWV3OiBDYXJkVmlld1xufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQge1xuICBAYmluZFxuICBzYXZlQ2hhbmdlcygpIHtcbiAgICB0aGlzLnN0b3Jlcy5DYXJkU3RvcmUuc3luYyh7XG4gICAgICBmYWlsOiBlcnIgPT4gY29uc29sZS5sb2coZXJyKVxuICAgIH0pO1xuICB9XG5cbiAgQGJpbmRcbiAgcmVqZWN0Q2hhbmdlcygpIHtcbiAgICB0aGlzLnN0b3Jlcy5DYXJkU3RvcmUucmVqZWN0Q2hhbmdlcygpO1xuICB9XG59YH1cbiAgICAgIDwvcHJlPlxuICAgICAgPHByZT5cbntgLy8gLi9jb21wb25lbnRzL2NhcmRzLnZpZXcuanN4XG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdyaWQgfSBmcm9tICdleHQtcmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkVmlldyBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLnN0b3Jlcy5DYXJkU3RvcmUubG9hZCgpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7Q2FyZFN0b3JlIH0gPSB0aGlzLnByb3BzLnN0b3JlcztcbiAgICByZXR1cm4gPEdyaWQgc3RvcmU9e0NhcmRTdG9yZX0+XG4gICAgICA8ZGl2IGhlYWRlcj1cIklkXCIgZGF0YUluZGV4PVwiSWRcIiAvPlxuICAgICAgPGRpdiBoZWFkZXI9XCJOYW1lXCIgZGF0YUluZGV4PVwiTmFtZVwiIGVkaXRhYmxlIC8+XG4gICAgICA8ZGl2IGhlYWRlcj1cIlR5cGVcIiBkYXRhSW5kZXg9XCJUeXBlXCIgLz5cbiAgICA8L0dyaWQ+XG4gIH1cbn1gfVxuICAgICAgPC9wcmU+XG4gICAgPC9Db250YWluZXI+XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBDb250YWluZXIgfSBmcm9tICd+L3JleHQnO1xuXG5AUm91dGUoJy9jb3JlLWNvbmNlcHRzL2NvbXBvbmVudCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXh0Q29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPENvbnRhaW5lciBjbGFzc05hbWU9XCJtYWluIGNvbnRhaW5lciBzY3JvbGxhYmxlXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwibWItbWRcIj5Db21wb25lbnQ8L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5cbiAgICAgICAgQSBjb21wb25lbnQgaW4gRXh0ZW5zaW9uIFJlYWN0IGlzIHRoZSBjb21iaW5hdGlvbiBvZiBhIFJlYWN0IENvbXBvbmVudCBhbmQgYSBjb21wb25lbnQgY2xhc3MgdGhhdCBjb250cm9scyBhIHBvcnRpb24gb2YgdGhlIHNjcmVlbi5cbiAgICAgICAgSGVyZSBpcyBhbiBleGFtcGxlIG9mIGEgY29tcG9uZW50IHRoYXQgZGlzcGxheSBhIHNpbXBsZSBzdHJpbmc6XG4gICAgICA8L3A+XG4gICAgICA8cHJlIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG57YGltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnZXh0LXJlYWN0JztcblxuY2xhc3MgRGFzaGJvYXJkVmlldyBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxoMT57dGhpcy5wcm9wcy4kdmlldy50aXRsZX08L2gxPjtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgdmlldzogRGFzaGJvYXJkVmlld1xufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhc2hib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGl0bGUgPSAnRGFzaGJvYXJkJztcbiAgfVxufWB9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG4gICAgICAgIEV2ZXJ5IGNvbXBvbmVudCBiZWdpbnMgd2l0aCBhbiA8Y29kZT5AQ29tcG9uZW50PC9jb2RlPiBkZWNvcmF0b3IgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIDxlbT5tZXRhZGF0YTwvZW0+IG9iamVjdC5cbiAgICAgICAgVGhlIG1ldGFkYXRhIG9iamVjdCBkZXNjcmliZXMgaG93IHRoZSBSZWFjdCBDb21wb25lbnQgYW5kIGNvbXBvbmVudCBjbGFzcyB3b3JrIHRvZ2V0aGVyLlxuICAgICAgICBUaGF0J3MgbWVhbiB5b3UgY2FuIGFjY2VzcyBhbnkgcHJvcGVydHkgb3IgbWV0aG9kIG9mIGNvbXBvbmVudCBjbGFzcyB2aWEgPGNvZGU+dGhpcy5wcm9wcy4kdmlldzwvY29kZT4uXG4gICAgICA8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlxuICAgICAgICBBY3R1YWxseSwgd2l0aCB0aGUgYWJvdmUgZXhhbXBsZSwgaXQgY2FuIGJlIGltcGxlbWVudGVkIGxpa2UgdGhpczpcbiAgICAgIDwvcD5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntgaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnZXh0LXJlYWN0JztcblxuQENvbXBvbmVudCh7XG4gIHZpZXc6ICh7ICR2aWV3IH0pID0+IDxoMT57JHZpZXcudGl0bGV9PC9oMT5cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRpdGxlID0gJ0Rhc2hib2FyZCc7XG4gIH1cbn1gfVxuICAgICAgPC9wcmU+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPkV4dGVuc2lvbiBSZWFjdCBwcm92aWRlIGEgbmV3IHdheSB0byB3b3JrIHdpdGggc3RhdGU6PC9wPlxuICAgICAgPHByZSBjbGFzc05hbWU9XCJtYi1tZFwiPlxue2AvLyAuL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC52aWV3LmpzeFxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZXh0IGZyb20gJ2V4dGVuc2lvbi1yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaFZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBSZXh0LmluaXRpYWxTdGF0ZSh0aGlzLCB7XG4gICAgICBuYW1lOiBwcm9wcy5uYW1lXG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHRoaXMuc2V0TmFtZShuZXh0UHJvcHMubmFtZSk7XG4gIH1cbiAgLi4uXG59YH1cbiAgICAgIDwvcHJlPlxuICAgICAgPHA+XG4gICAgICAgIEluc3RlYWQgb2YgdXNpbmcgPGNvZGU+e2B0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUsIHByb3BzKSA9PiAoeyBuYW1lOiBwcm9wcy5uYW1lIH0pKWB9PC9jb2RlPiB0byB1cGRhdGUgdGhlIHN0YXRlLFxuICAgICAgICB5b3UgY2FuIHVzZSA8Y29kZT50aGlzLnNldE5hbWUocHJvcHMubmFtZSk8L2NvZGU+IHRvIG1ha2UgaXQgZWFzaWVyIHRvIHVuZGVyc3RhbmQgYW5kIG1vcmUgbmF0dXJhbCBieSB1c2luZyA8Y29kZT5SZXh0LmluaXRpYWxTdGF0ZTwvY29kZT4gZnVuY3Rpb24gdG8gZGVjbGFyZSB0aGUgc3RhdGUgaW4gY29uc3RydWN0b3IuXG4gICAgICA8L3A+XG4gICAgPC9Db250YWluZXI+XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBDb250YWluZXIgfSBmcm9tICd+L3JleHQnO1xuXG5AUm91dGUoJy9jb3JlLWNvbmNlcHRzL2RhdGEtcGFja2FnZScpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhUGFja2FnZSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxDb250YWluZXIgY2xhc3NOYW1lPVwibWFpbiBjb250YWluZXIgc2Nyb2xsYWJsZVwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLW1kXCI+RGF0YSBQYWNrYWdlPC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+VGhlIGRhdGEgcGFja2FnZSBpcyB3aGF0IGxvYWRzIGFuZCBzYXZlcyBhbGwgb2YgdGhlIGRhdGEgaW4geW91ciBhcHBsaWNhdGlvbi48L3A+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwibWItbWRcIj5Nb2RlbHM8L2gzPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5UaGUgY2VudGVycGllY2Ugb2YgdGhlIGRhdGEgcGFja2FnZSBpcyBgTW9kZWxgIHdoaWNoIHJlcHJlc2VudHMgYW4gZW50aXR5IGluIGFuIGFwcGxpY2F0aW9uLjwvcD5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi1tZFwiPlN0b3JlczwvaDM+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlRoZSA8Y29kZT5TdG9yZTwvY29kZT4gY2xhc3MgZW5jYXBzdWxhdGVzIGEgY2xpZW50IHNpZGUgY2FjaGUgb2YgPGNvZGU+TW9kZWw8L2NvZGU+IG9iamVjdHMuPC9wPlxuICAgICAgPHByZSBjbGFzc05hbWU9XCJtYi1tZFwiPlxue2BpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ2V4dC1yZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgU3RvcmUoe1xuICBzdG9yZUlkOiAnQ2FyZFN0b3JlJyxcbiAgcHJveHk6IHtcbiAgICB1cmw6ICcvZGF0YS9jYXJkLmpzb24nXG4gIH1cbn0pYH1cbiAgICAgIDwvcHJlPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5cbiAgICAgICAgSW4gdGhlIGV4YW1wbGUgYWJvdmUgd2UgY29uZmlndXJlZCBhbiBBSkFYIHByb3h5IHRvIGxvYWQgZGF0YSBmcm9tIHRoZSB1cmwgPGNvZGU+L2FwaS91c2VyL3NlYXJjaDwvY29kZT4uXG4gICAgICAgIFN0b3JlcyBsb2FkIGRhdGEgdmlhIDxjb2RlPnByb3h5PC9jb2RlPiB3aXRoIHRoaXMgZm9sbG93aW5nIHN0cnVjdHVyZTpcbiAgICAgIDwvcD5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntge1xuICB1cmw6ICAgIC8qIFRoZSBVUkwgZnJvbSB3aGljaCB0byByZXF1ZXN0IHRoZSBkYXRhIG9iamVjdCAqLyxcbiAgbWV0aG9kOiAvKiBUaGUgZGVmYXVsdCBIVFRQIG1ldGhvZCB0byBiZSB1c2VkIGZvciByZXF1ZXN0cy4gSWYgbm90IHNldCwgR0VUIHdpbGwgYmUgdXNlZC4gKi9cbiAgcGFyYW1zOiAvKiBSZXF1ZXN0IHBhcmFtZXRlcnMgc2VudCBhcyBqc29uIGRhdGEgKi9cbiAgcmVhZGVyOiAvKiBVc2UgdG8gZGVjb2RlIHRoZSBzZXJ2ZXIncyByZXNwb25zZSAqL1xufWB9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+U3RvcmVzIGNhbiBhbHNvIGxvYWQgZGF0YSBpbmxpbmUuIEludGVybmFsbHksIFN0b3JlIGNvbnZlcnRzIGVhY2ggb2YgdGhlIG9iamVjdHMgd2UgcGFzcyBpbiBhcyBjZmctZGF0YSBpbnRvIE1vZGVsIGluc3RhbmNlczo8L3A+XG4gICAgICA8cHJlIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG57YGltcG9ydCB7IFN0b3JlIH0gZnJvbSAnZXh0LXJlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBTdG9yZSh7XG4gIHN0b3JlSWQ6ICdVc2VyU3RvcmUnLFxuICBkYXRhOiBbXG4gICAge2ZpcnN0TmFtZTogJ1BldGVyJywgICBsYXN0TmFtZTogJ1ZlbmttYW4nfSxcbiAgICB7Zmlyc3ROYW1lOiAnRWdvbicsICAgIGxhc3ROYW1lOiAnU3BlbmdsZXInfSxcbiAgICB7Zmlyc3ROYW1lOiAnUmF5JywgICAgIGxhc3ROYW1lOiAnU3RhbnR6J30sXG4gICAge2ZpcnN0TmFtZTogJ1dpbnN0b24nLCBsYXN0TmFtZTogJ1plZGRlbW9yZSd9XG4gIF1cbn0pYH1cbiAgICAgIDwvcHJlPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5Ob3csIGp1c3QgYmluZCBhIHN0b3JlIHRvIHRoZSA8Y29kZT5Db21wb25lbnQ8L2NvZGU+OjwvcD5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntgaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2FyZFN0b3JlIGZyb20gJ34vc3RvcmVzL2NhcmQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMucmVsb2FkID0gKCkgPT4gdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgQ2FyZFN0b3JlLmNsZWFyRGF0YSgpO1xuICAgIENhcmRTdG9yZS5sb2FkKCk7XG4gICAgQ2FyZFN0b3JlLnN1YnNjcmliZSh0aGlzLnJlbG9hZCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcmVjb3JkcyA9IENhcmRTdG9yZS5nZXREYXRhKCk7XG4gICAgcmV0dXJuIDxzZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicngtZ3JpZC1oZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cgcngtZ3JpZC1oZWFkZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyeC1ncmlkLWNvbHVtbi1oZWFkZXIgdGV4dC1zbS1jZW50ZXJcIiBzdHlsZT17e3dpZHRoOicyMCUnfX0+SUQ8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ4LWdyaWQtY29sdW1uLWhlYWRlciB0ZXh0LXNtLWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6JzIwJSd9fT5OYW1lPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyeC1ncmlkLWNvbHVtbi1oZWFkZXIgdGV4dC1zbS1jZW50ZXJcIiBzdHlsZT17e3dpZHRoOicyMCUnfX0+VHlwZTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicngtZ3JpZC1jb2x1bW4taGVhZGVyIHRleHQtc20tY2VudGVyXCIgc3R5bGU9e3t3aWR0aDonMjAlJ319PkFybW9yPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyeC1ncmlkLWNvbHVtbi1oZWFkZXIgdGV4dC1zbS1jZW50ZXJcIiBzdHlsZT17e3dpZHRoOicyMCUnfX0+V2VhcG9uPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicngtZ3JpZC1ib2R5XCIgc3R5bGU9e3tvdmVyZmxvdzondmlzaWJsZSd9fT5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicngtZ3JpZC12aWV3XCI+XG4gICAgICAgICAge3JlY29yZHMubWFwKHJlY29yZCA9PiA8YXJ0aWNsZSBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cgcngtZ3JpZC1yb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicngtZ3JpZC1jZWxsXCIgc3R5bGU9e3t3aWR0aDonMjAlJ319PntyZWNvcmQuZ2V0KCdJZCcpfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyeC1ncmlkLWNlbGxcIiBzdHlsZT17e3dpZHRoOicyMCUnfX0+e3JlY29yZC5nZXQoJ05hbWUnKX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicngtZ3JpZC1jZWxsXCIgc3R5bGU9e3t3aWR0aDonMjAlJ319PntyZWNvcmQuZ2V0KCdUeXBlJyl9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ4LWdyaWQtY2VsbFwiIHN0eWxlPXt7d2lkdGg6JzIwJSd9fT57cmVjb3JkLmdldCgnQXJtb3JVc2FibGUnKX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicngtZ3JpZC1jZWxsXCIgc3R5bGU9e3t3aWR0aDonMjAlJ319PntyZWNvcmQuZ2V0KCdXZWFwb25Vc2FibGUnKX08L2Rpdj5cbiAgICAgICAgICA8L2FydGljbGU+KX1cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvc2VjdGlvbj47XG4gIH1cbn1gfVxuICAgICAgPC9wcmU+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlxuICAgICAgICBJbiB0aGlzIGFib3ZlIGV4YW1wbGUsIHdlIHVzZSA8Y29kZT5zdWJzY3JpYmU8L2NvZGU+IHRvIHVwZGF0ZSB0aGUgY29tcG9uZW50IHdoZW5ldmVyIGRhdGEncyBjaGFuZ2VkLlxuICAgICAgICBCZWNhdXNlIFN0b3JlIGNvbnZlcnQgZGF0YSB0byBNb2RlbCB0aGVuIHlvdSBuZWVkIHRvIHVzZSA8Y29kZT5nZXQ8L2NvZGU+IHRvIGFjY2VzcyBkYXRhLlxuICAgICAgPC9wPlxuICAgIDwvQ29udGFpbmVyPlxuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29udGFpbmVyIH0gZnJvbSAnfi9yZXh0JztcblxuQFJvdXRlKCcvY29yZS1jb25jZXB0cy9zY3JlZW4tbmF2aWdhdGlvbicpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JlZW5OYXZpZ2F0aW9uIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPENvbnRhaW5lciBjbGFzc05hbWU9XCJtYWluIGNvbnRhaW5lciBzY3JvbGxhYmxlXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwibWItbWRcIj5TY3JlZW4gTmF2aWdhdGlvbjwvaDE+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWItbWRcIj5cbiAgICAgICAgPGxpPjxzdHJvbmc+PGNvZGU+Um91dGU8L2NvZGU+PC9zdHJvbmc+IGRlY29yYXRvciBpcyBtb3N0IGJhc2ljIHJlc3BvbnNpYmlsaXR5IGlzIHRvIHJlbmRlciBVSSB3aGVuIGEgbG9jYXRpb24gbWF0Y2hlcyB0aGUgcm91dGXigJlzIHBhdGguPC9saT5cbiAgICAgICAgPGxpPjxzdHJvbmc+PGNvZGU+TGluazwvY29kZT48L3N0cm9uZz4gcHJvdmlkZXMgZGVjbGFyYXRpdmUsIGFjY2Vzc2libGUgbmF2aWdhdGlvbiBhcm91bmQgeW91ciBhcHBsaWNhdGlvbi48L2xpPlxuICAgICAgICA8bGk+PHN0cm9uZz48Y29kZT5IYXNoUm91dGVyPC9jb2RlPjwvc3Ryb25nPiB1c2VzIHRoZSBoYXNoIHBvcnRpb24gb2YgdGhlIFVSTCAoaS5lLiB3aW5kb3cubG9jYXRpb24uaGFzaCkgdG8ga2VlcCB5b3VyIFVJIGluIHN5bmMgd2l0aCB0aGUgVVJMLjwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPHByZSBjbGFzc05hbWU9XCJtYi1tZFwiPlxue2AvLyBtYWluLmpzXG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBSZXh0IGZyb20gJ2V4dC1yZWFjdCc7XG5pbXBvcnQgVmlld3BvcnQgZnJvbSAnLi9jb21wb25lbnRzL3ZpZXdwb3J0JztcblxuUmV4dC5hcHBsaWNhdGlvbih7XG4gIHZpZXdzOiBbXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL3NlYXJjaCcpLFxuICAgIHJlcXVpcmUoJy4vY29tcG9uZW50cy9kZXRhaWxzJyksXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL25vdGZvdW5kJyksXG4gIF0sXG4gIGxhdW5jaDogKCkgPT4gPFZpZXdwb3J0IC8+XG59KTtcblxuUmV4dC5sYXVuY2goPFZpZXdwb3J0IC8+KTtcbmB9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntgLy8gLi9jb21wb25lbnRzL3ZpZXdwb3J0LmpzXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgSGFzaFJvdXRlciB9IGZyb20gJ2V4dC1yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZXdwb3J0KCkge1xuICByZXR1cm4gPHNlY3Rpb24+XG4gICAgPExpbmsgdG89XCIvXCI+RGFzaGJvYXJkPC9MaW5rPlxuICAgIDxMaW5rIHRvPVwiL3NlYXJjaFwiPlNlYXJjaDwvTGluaz5cbiAgICA8TGluayB0bz1cIi9kZXRhaWxzL2h1eW5ndXllblwiPkRldGFpbHM8L0xpbms+XG4gICAgPEhhc2hSb3V0ZXIgLz5cbiAgPC9zZWN0aW9uPlxufVxuYH1cbiAgICAgIDwvcHJlPlxuICAgICAgPHByZSBjbGFzc05hbWU9XCJtYi1tZFwiPlxue2AvLyAuL2NvbXBvbmVudHMvc2VhcmNoLmpzXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIENvbXBvbmVudCB9IGZyb20gJ2V4dC1yZWFjdCc7XG5cbkBSb3V0ZSgnL3NlYXJjaCcpXG5AQ29tcG9uZW50KHtcbiAgdmlldzogKCkgPT4gPHNlY3Rpb24gLz5cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2ggeyB9XG5gfVxuICAgICAgPC9wcmU+XG4gICAgICA8cHJlIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG57YC8vIC4vY29tcG9uZW50cy9kZXRhaWxzLmpzXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIENvbXBvbmVudCB9IGZyb20gJ2V4dC1yZWFjdCc7XG5cbkBSb3V0ZSgnL2RldGFpbHMvOm5hbWUnKVxuQENvbXBvbmVudCh7XG4gIHZpZXc6ICh7IHBhcmFtcyB9KSA9PiA8aDE+e3BhcmFtcy5uYW1lfTwvaDE+XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV0YWlscyB7IH1cbmB9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntgLy8gLi9jb21wb25lbnRzL25vdGZvdW5kLmpzXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAnZXh0LXJlYWN0JztcblxuQFJvdXRlKCcqJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdEZvdW5kIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGgxPid7dGhpcy5wcm9wcy5wYXJhbXMucm91dGV9JyBkb2Vzbid0IGV4aXN0PC9oMT5cbiAgfVxufWB9XG4gICAgICA8L3ByZT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIENvbXBvbmVudCwgYmluZCB9IGZyb20gJ34vcmV4dCc7XG5pbXBvcnQgQ2FyZFZpZXcgZnJvbSAnLi9jYXJkcy52aWV3JztcblxuQFJvdXRlKCcvZXhhbXBsZS9jYXJkcycpXG5AQ29tcG9uZW50KHtcbiAgc3RvcmVzOiBbICdDYXJkU3RvcmUnIF0sXG4gIHZpZXc6IENhcmRWaWV3XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCB7XG4gIEBiaW5kXG4gIHNhdmVDaGFuZ2VzKCkge1xuICAgIHRoaXMuc3RvcmVzLkNhcmRTdG9yZS5zeW5jKHtcbiAgICAgIGZhaWw6IGVyciA9PiBjb25zb2xlLmxvZyhlcnIpXG4gICAgfSk7XG4gIH1cblxuICBAYmluZFxuICByZWplY3RDaGFuZ2VzKCkge1xuICAgIHRoaXMuc3RvcmVzLkNhcmRTdG9yZS5yZWplY3RDaGFuZ2VzKCk7XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCwgQnV0dG9uIH0gZnJvbSAnfi9yZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZFZpZXcgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5zdG9yZXMuQ2FyZFN0b3JlLmxvYWQoKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdG9yZXM6IHsgQ2FyZFN0b3JlIH0sICR2aWV3OiB7IHNhdmVDaGFuZ2VzLCByZWplY3RDaGFuZ2VzIH0gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIDxDb250YWluZXIgY2xhc3NOYW1lPVwibWFpbiBjb250YWluZXJcIj5cbiAgICAgIDxHcmlkIHN0b3JlPXtDYXJkU3RvcmV9PlxuICAgICAgICA8ZGl2IGhlYWRlcj1cIklkXCIgZGF0YUluZGV4PVwiSWRcIiAvPlxuICAgICAgICA8ZGl2IGhlYWRlcj1cIk5hbWVcIiBkYXRhSW5kZXg9XCJOYW1lXCIgZWRpdGFibGUgLz5cbiAgICAgICAgPGRpdiBoZWFkZXI9XCJUeXBlXCIgZGF0YUluZGV4PVwiVHlwZVwiIC8+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LW1kXCI+XG4gICAgICAgIDxCdXR0b24gdGV4dD1cIlNhdmUgQ2hhbmdlc1wiIGNsYXNzTmFtZT1cIm1yLW1kXCIgb25DbGljaz17c2F2ZUNoYW5nZXN9IC8+XG4gICAgICAgIDxCdXR0b24gdGV4dD1cIlJlamVjdCBDaGFuZ2VzXCIgb25DbGljaz17cmVqZWN0Q2hhbmdlc30gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ29udGFpbmVyPlxuICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBDb21wb25lbnQgfSBmcm9tICd+L3JleHQnO1xuXG5AUm91dGUoJy9leGFtcGxlL2Rhc2hib2FyZCcpXG5AQ29tcG9uZW50KHtcbiAgdmlldzogKHsgJHZpZXcgfSkgPT4gPGgxPnskdmlldy50aXRsZX08L2gxPlxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhc2hib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGl0bGUgPSAnRGFzaGJvYXJkJztcbiAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29tcG9uZW50IH0gZnJvbSAnfi9yZXh0JztcblxuQFJvdXRlKCcvZXhhbXBsZS9kZXRhaWxzLzpuYW1lJylcbkBDb21wb25lbnQoe1xuICB2aWV3OiAoeyBwYXJhbXMgfSkgPT4gPGgxPntwYXJhbXMubmFtZX08L2gxPlxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERldGFpbHMgeyB9IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ34vcmV4dCc7XG5cbkBSb3V0ZSgnKicpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RGb3VuZCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxoMT4ne3RoaXMucHJvcHMucGFyYW1zLnJvdXRlfScgZG9lc24ndCBleGlzdDwvaDE+XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIENvbXBvbmVudCB9IGZyb20gJ34vcmV4dCc7XG5cbkBSb3V0ZSgnL2V4YW1wbGUvc2VhcmNoJylcbkBDb21wb25lbnQoe1xuICB2aWV3OiAoKSA9PiA8c2VjdGlvbiAvPlxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhc2hib2FyZCB7IH0iLCJpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ34vcmV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JlKHtcbiAgc3RvcmVJZDogJ0NhcmRTdG9yZScsXG4gIGZpZWxkczogWyAnTmFtZScgXSxcbiAgcHJveHk6IHtcbiAgICB1cmw6ICcvZGF0YS9jYXJkLmpzb24nXG4gIH1cbn0pIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29udGFpbmVyIH0gZnJvbSAnfi9yZXh0JztcblxuQFJvdXRlKCcvJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdldHRpbmdTdGFydGVkIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPENvbnRhaW5lciBjbGFzc05hbWU9XCJtYWluIGNvbnRhaW5lciBzY3JvbGxhYmxlXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwibWItbWRcIj5HZXR0aW5nIFN0YXJ0ZWQ8L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5cbiAgICAgICAgRXh0ZW5zaW9uIFJlYWN0IGlzIGEgbGlicmFyeSB0aGF0IGJ1aWxkIG9uIHRvcCBvZiBSZWFjdCwgaGVscGluZyB5b3UgYnVpbGQgZGF0YS1pbnRlbnNpdmUsIGNyb3NzLXBsYXRmb3JtIHdlYiBhcHBzIGZvciBkZXNrdG9wcywgdGFibGV0cywgYW5kIHNtYXJ0cGhvbmVzLlxuICAgICAgPC9wPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLW1kXCI+UXVpY2sgU3RhcnQ8L2gyPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLW1kXCI+MS4gU2V0dXAgYSBkZXZlbG9wbWVudCBlbnZpcm9tZW50PC9oMz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+VXNlIDxjb2RlPm5wbTwvY29kZT4gb3IgPGNvZGU+eWFybjwvY29kZT4gdG8gaW5zdGFsbCBmb2xsb3dpbmcgZGVwZW5kZW5jaWVzOjwvcD5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtYi1tZFwiPlxuICAgICAgICA8bGk+PGNvZGU+YmFiZWwtcG9seWZpbGw8L2NvZGU+PC9saT5cbiAgICAgICAgPGxpPjxjb2RlPmJhYmVsLXByZXNldC1lbnY8L2NvZGU+PC9saT5cbiAgICAgICAgPGxpPjxjb2RlPmJhYmVsLXByZXNldC1yZWFjdDwvY29kZT48L2xpPlxuICAgICAgICA8bGk+PGNvZGU+ZDM8L2NvZGU+PC9saT5cbiAgICAgICAgPGxpPjxjb2RlPnJlYWN0PC9jb2RlPjwvbGk+XG4gICAgICAgIDxsaT48Y29kZT5yZWFjdC1kb208L2NvZGU+PC9saT5cbiAgICAgICAgPGxpPjxjb2RlPnJ4anM8L2NvZGU+PC9saT5cbiAgICAgICAgPGxpPjxjb2RlPmV4dC1yZWFjdDwvY29kZT48L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi1tZFwiPjIuIENyZWF0ZSBhIG5ldyBwcm9qZWN0PC9oMz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+VGhlIGZvbGxvd2luZyBpcyB0aGUgcmVjb21tZW5kZWQgZGlyZWN0b3J5IHN0cnVjdHVyZSBmb3IgYW4gRXh0ZW5zaW9uIFJlYWN0IGFwcGxpY2F0aW9uOjwvcD5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbiAgICAgICAgKy0tIG5vZGVfbW9kdWxlczogTlBNIGNvbXBvbmVudHM8YnIgLz5cbiAgICAgICAgKy0tIGRpc3Q8YnIgLz5cbiAgICAgICAgfCAgICstLSBhcHAubWluLmNzczxiciAvPlxuICAgICAgICB8ICAgKy0tIGFwcC5taW4uanM8YnIgLz5cbiAgICAgICAgfCAgICstLSBmcmFtZXdvcmsubWluLmpzPGJyIC8+XG4gICAgICAgICstLSBzcmM8YnIgLz5cbiAgICAgICAgfCAgICstLSBjc3M8YnIgLz5cbiAgICAgICAgfCAgIHwgICArLS0gX3ZhcmlhYmxlcy5zY3NzOiBhcHBsaWNhdGlvbiBzdHlsZXMgY29uc3RhbnQgdmFsdWVzPGJyIC8+XG4gICAgICAgIHwgICB8ICAgKy0tIGFwcC5zY3NzOiBhcHBsaWNhdGlvbiBzdHlsZXM8YnIgLz5cbiAgICAgICAgfCAgICstLSBqczxiciAvPlxuICAgICAgICB8ICAgfCAgICstLSBjb21tb246IGNvZGUgb2Ygc2hhcmVkIGZ1bmN0aW9ucyBvciBzaGFyZWQgY29tcG9uZW50czxiciAvPlxuICAgICAgICB8ICAgfCAgICstLSBjb21wb25lbnRzOiBjb2RlIChzY3JpcHRzIGFuZCB2aWV3cykgb2YgZXZlcnkgZmVhdHVyZSBzaG91bGQgYmUgYSBzdWItZGlyZWN0b3J5PGJyIC8+XG4gICAgICAgIHwgICB8ICAgKy0tIHNlcnZpY2VzOiBjb2RlIG9mIHNlcnZpY2VzPGJyIC8+XG4gICAgICAgIHwgICB8ICAgKy0tIHN0b3JlczogY29kZSBvZiBzdG9yZXM8YnIgLz5cbiAgICAgICAgfCAgIHwgICArLS0gYXBwLmpzOiBtYWluIHNjcmlwdDxiciAvPlxuICAgICAgICArLS0gZ3VscGZpbGUuYmFiZWwuanM6IGJ1aWxkIHNjcmlwdHMgKG9yIHdlYnBhY2suY29uZmlnLmpzIGlmIHlvdSBwcmVmZXIpPGJyIC8+XG4gICAgICAgICstLSBpbmRleC5odG1sPGJyIC8+XG4gICAgICAgICstLSBwYWNrYWdlLmpzb246IE5QTSBwYWNrYWdlIGRlZmluaXRpb248YnIgLz5cbiAgICAgICAgKy0tIHNlcnZlci5qczogY29kZSBvZiBsb2NhbCB3ZWIgc2VydmVyIChFeHByZXNzSlMpPGJyIC8+XG4gICAgICA8L3ByZT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+TGV04oCZcyBzdGFydCBldmFsdWF0aW5nIHRoZSBhcHBsaWNhdGlvbiBieSBsb29raW5nIGF0IDxjb2RlPmluZGV4Lmh0bWw8L2NvZGU+PC9wPlxuICAgICAgPHByZSBjbGFzc05hbWU9XCJtYi1tZFwiPlxue2A8IS0tIGluZGV4Lmh0bWwgLS0+XG48IURPQ1RZUEUgaHRtbD5cbjxodG1sPlxuPGhlYWQ+XG48bWV0YSBjaGFyc2V0PVwidXRmLThcIiAvPlxuPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuPHRpdGxlPkV4dGVuc2lvbiBSZWFjdCBBcHBsaWNhdGlvbjwvdGl0bGU+XG48bGluayBocmVmPVwiL25vZGUtbW9kdWxlcy9leHQtcmVhY3QvY3NzL3JleHQubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuPC9oZWFkPlxuPGJvZHk+XG48c2NyaXB0IHNyYz1cImFwcC5qc1wiPjwvc2NyaXB0PlxuPC9ib2R5PlxuPC9odG1sPmB9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+VG8gbGF1bmNoIHlvdXIgYXBwLCBhZGQgdGhlIGZvbGxvd2luZyB0byB5b3VyIDxjb2RlPmFwcC5qczwvY29kZT4gZmlsZTwvcD5cbiAgICAgIDxwcmU+XG57YC8vIGFwcC5qc1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJleHQgZnJvbSAnZXh0LXJlYWN0JztcbmltcG9ydCBWaWV3cG9ydCBmcm9tICcuL2NvbXBvbmVudHMvdmlld3BvcnQvdmlld3BvcnQnO1xuXG5SZXh0LmFwcGxpY2F0aW9uKHtcbiAgbGF1bmNoOiAoKSA9PiA8Vmlld3BvcnQgLz5cbn0pO2B9XG4gICAgICA8L3ByZT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIsIEhhc2hSb3V0ZXIsIExpbmsgfSBmcm9tICd+L3JleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWV3cG9ydCgpIHtcbiAgcmV0dXJuIDxDb250YWluZXI+XG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJjb250YWluZXJcIj48aDE+RXh0ZW5zaW9uIFJlYWN0PC9oMT48L2hlYWRlcj5cbiAgICA8Q29udGFpbmVyIGxheW91dD1cImNvbHVtblwiPlxuICAgICAgPGFzaWRlIHN0eWxlPXt7d2lkdGg6MzAwfX0+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXIgbmF2XCI+XG4gICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL1wiIHRleHQ9XCJHRVRUSU5HIFNUQVJURURcIiAvPjwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LXRleHRcIj5DT1JFIENPTkNFUFRTPC9zcGFuPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+PExpbmsgdG89XCIvY29yZS1jb25jZXB0cy9jb21wb25lbnRcIiB0ZXh0PVwiQ29tcG9uZW50XCIgLz48L2xpPlxuICAgICAgICAgICAgICA8bGk+PExpbmsgdG89XCIvY29yZS1jb25jZXB0cy9zY3JlZW4tbmF2aWdhdGlvblwiIHRleHQ9XCJTY3JlZW4gTmF2aWdhdGlvblwiIC8+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL2NvcmUtY29uY2VwdHMvZGF0YS1wYWNrYWdlXCIgdGV4dD1cIkRhdGEgUGFja2FnZVwiIC8+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+PExpbmsgdG89XCIvYXJjaGl0ZWN0dXJlXCIgdGV4dD1cIkFSQ0hJVEVDVFVSRVwiIC8+PC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtdGV4dFwiPlVJIENPTVBPTkVOVFM8L3NwYW4+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT48TGluayB0bz1cIi91aS1jb21wb25lbnRzL2dyaWRzXCIgdGV4dD1cIkdyaWRzXCIgLz48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9hc2lkZT5cbiAgICAgIDxDb250YWluZXI+PEhhc2hSb3V0ZXIgLz48L0NvbnRhaW5lcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPjxwPiZjb3B5OyAyMDE3IGh1eXRyb25nbmd1eWVuPC9wPjwvZm9vdGVyPlxuICA8L0NvbnRhaW5lcj5cbn0iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBFeHQgZnJvbSAnfi9jb3JlL2V4dCc7XG5pbXBvcnQgTGlzdCBmcm9tICd+L2NvcmUvbGlzdCc7XG5pbXBvcnQgU3RvcmVNYW5hZ2VyIGZyb20gJ34vZGF0YS9zdG9yZS1tYW5hZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnID0+IENvbnRyb2xsZXIgPT4ge1xuICBjb25zdCBXcmFwcGVkQ29tcG9uZW50ID0gY29uZmlnLnZpZXc7XG5cbiAgcmV0dXJuIGNsYXNzIEhvY0NvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICBjb25zdCBzdG9yZXMgPSBMaXN0KGNvbmZpZy5zdG9yZXMpLnJlZHVjZSgoc3RvcmVzLCBzdG9yZUlkKSA9PiB7XG4gICAgICAgICAgICAgIHN0b3Jlc1tzdG9yZUlkXSA9IFN0b3JlTWFuYWdlci5nZXQoc3RvcmVJZCk7XG4gICAgICAgICAgICAgIHJldHVybiBzdG9yZXM7XG4gICAgICAgICAgICB9LCB7fSksXG4gICAgICAgICAgICBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIocHJvcHMpO1xuXG4gICAgICBjb250cm9sbGVyLnN0b3JlcyA9IHN0b3JlcztcblxuICAgICAgRXh0LmluaXRpYWxTdGF0ZSh0aGlzLCB7XG4gICAgICAgIHN0b3JlcyxcbiAgICAgICAgW2NvbmZpZy5jb21wb25lbnRBcyB8fCAnJHZpZXcnXTogY29udHJvbGxlclxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50IHsuLi50aGlzLnN0YXRlfSB7Li4udGhpcy5wcm9wc30gLz47XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBFeHQgZnJvbSAnfi9jb3JlL2V4dCc7XG5cbmNvbnN0IExBWU9VVF9DTEFTUyA9IHtcbiAgJ2NvbHVtbic6ICdmbGV4LXJvdycsXG4gICdyb3cnOiAnZmxleC1jb2x1bW4nLFxuICAnZml0JzogJycsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIoeyBjbGFzc05hbWUgPSAnJywgbGF5b3V0ID0gJ3JvdycsIGNoaWxkcmVuLCAuLi5vdGhlcnMgfSkge1xuICByZXR1cm4gPHNlY3Rpb24gY2xhc3NOYW1lPXtFeHQuY2xhc3NOYW1lKCdkLWZsZXgnLCBMQVlPVVRfQ0xBU1NbbGF5b3V0XSwgY2xhc3NOYW1lKX0gey4uLm90aGVyc30+e2NoaWxkcmVufTwvc2VjdGlvbj5cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEV4dCBmcm9tICd+L2NvcmUvZXh0JztcblxuZXhwb3J0IGZ1bmN0aW9uIEJ1dHRvbih7IGNsYXNzTmFtZSA9ICcnLCB0ZXh0LCBjaGlsZHJlbiwgLi4ub3RoZXJzIH0pIHtcbiAgcmV0dXJuIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17RXh0LmNsYXNzTmFtZSgnYnRuJywgY2xhc3NOYW1lKX0gey4uLm90aGVyc30+XG4gICAge3RleHQgfHwgY2hpbGRyZW59XG4gIDwvYnV0dG9uPjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEJ1dHRvbkxpbmsoeyB0ZXh0LCBjaGlsZHJlbiwgLi4ub3RoZXJzIH0pIHtcbiAgcmV0dXJuIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiB7Li4ub3RoZXJzfT57dGV4dCB8fCBjaGlsZHJlbn08L2E+XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGaWVsZCh7IHR5cGUgPSAndGV4dCcsIGlubGluZSA9IGZhbHNlLCBsYWJlbCA9ICcnLCBsYWJlbFdpZHRoID0gMywgdmFsdWUsIG9uQ2hhbmdlLCAuLi5vdGhlcnMgfSkge1xuICByZXR1cm4gPGFydGljbGUgY2xhc3NOYW1lPXtFeHQuY2xhc3NOYW1lKCdmb3JtLWdyb3VwJywgeyAncm93JzogaW5saW5lIH0pfT5cbiAgPGxhYmVsIGNsYXNzTmFtZT17RXh0LmNsYXNzTmFtZSh7IFtgY29sLXNtLSR7bGFiZWxXaWR0aH0gdGV4dC1zbS1yaWdodGBdOiBpbmxpbmUgfSl9PntsYWJlbH08L2xhYmVsPlxuICA8ZGl2IGNsYXNzTmFtZT17RXh0LmNsYXNzTmFtZSh7IFtgY29sLXNtLSR7MTIgLSBsYWJlbFdpZHRofWBdOiBpbmxpbmUgfSl9PlxuICAgIHsodHlwZSA9PT0gJ3RleHQnKSAmJiA8VGV4dEZpZWxkIHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e29uQ2hhbmdlfSB7Li4ub3RoZXJzfSAvPn1cbiAgICB7KHR5cGUgPT09ICdjaGVja2JveCcpICYmIDxDaGVja2JveCB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gey4uLm90aGVyc30gLz59XG4gICAgeyh0eXBlID09PSAndGV4dGFyZWEnKSAmJiA8VGV4dEFyZWEgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17b25DaGFuZ2V9IHsuLi5vdGhlcnN9IC8+fVxuICA8L2Rpdj5cbjwvYXJ0aWNsZT5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRleHRGaWVsZCh7IHZhbHVlID0gJycsIGNsYXNzTmFtZSA9ICcnLCBvbkNoYW5nZSwgLi4ub3RoZXJzIH0pIHtcbiAgcmV0dXJuIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17RXh0LmNsYXNzTmFtZSgnZm9ybS1jb250cm9sJywgY2xhc3NOYW1lKX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlICYmIG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX0gey4uLm90aGVyc30gLz47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDaGVja2JveCh7IHZhbHVlID0gZmFsc2UsIG9uQ2hhbmdlLCAuLi5vdGhlcnMgfSkge1xuICByZXR1cm4gPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3ZhbHVlfSBvbkNoYW5nZT17KCkgPT4gb25DaGFuZ2UoIXZhbHVlKX0gey4uLm90aGVyc30gLz47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUZXh0QXJlYSh7IHJvd3MgPSAnMycsIHZhbHVlID0gJycsIGNsYXNzTmFtZSA9ICcnLCBvbkNoYW5nZSwgLi4ub3RoZXJzIH0pIHtcbiAgcmV0dXJuIDx0ZXh0YXJlYSByb3dzPXtyb3dzfSBjbGFzc05hbWU9e0V4dC5jbGFzc05hbWUoJ2Zvcm0tY29udHJvbCcsIGNsYXNzTmFtZSl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2UgJiYgb25DaGFuZ2UoZS50YXJnZXQudmFsdWUpfSB7Li4ub3RoZXJzfSAvPjtcbn0iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ34vY29tcG9uZW50cy9jb250YWluZXInO1xuaW1wb3J0IEdyaWRSb3cgZnJvbSAnLi9yb3cnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkQm9keSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uRGF0YUNoYW5nZSA9ICgpID0+IHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuc3RvcmUuc3Vic2NyaWJlKHRoaXMub25EYXRhQ2hhbmdlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbHVtbnMgPSBbXSwgc3RvcmUgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIDxDb250YWluZXIgbGF5b3V0PVwicm93XCIgY2xhc3NOYW1lPVwicngtZ3JpZC1ib2R5XCI+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyeC1ncmlkLXZpZXdcIj5cbiAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDoxfX0gLz5cbiAgICAgICAge3N0b3JlLmdldFJlY29yZHMoKS5tYXAoKHJlY29yZCwgcm93SW5kZXgpID0+IDxHcmlkUm93IGNvbHVtbnM9e2NvbHVtbnN9IHJlY29yZD17cmVjb3JkfSByb3dJbmRleD17cm93SW5kZXh9IC8+KX1cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEV4dCwgeyBiaW5kIH0gZnJvbSAnfi9jb3JlL2V4dCc7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tICd+L2NvbXBvbmVudHMvZm9ybSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyaWRDZWxsIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHsgZGF0YUluZGV4LCByZWNvcmQgfSA9IHByb3BzO1xuICAgIEV4dC5pbml0aWFsU3RhdGUodGhpcywge1xuICAgICAgdmFsdWU6IGRhdGFJbmRleCA/IHJlY29yZC5nZXQoZGF0YUluZGV4KSA6ICcnLFxuICAgICAgcmVhZE9ubHk6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoeyBkYXRhSW5kZXgsIHJlY29yZCB9KSB7XG4gICAgdGhpcy5zZXRWYWx1ZShkYXRhSW5kZXggPyByZWNvcmQuZ2V0KGRhdGFJbmRleCkgOiAnJyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgcmVhZE9ubHkgfSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgeyBlZGl0YWJsZSwgY2xhc3NOYW1lID0gJycsIHJlbmRlciA9IHZhbHVlID0+IHZhbHVlLCByZWNvcmQsIGRhdGFJbmRleCwgcm93SW5kZXgsIC4uLm90aGVycyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChlZGl0YWJsZSkge1xuICAgICAgaWYgKHJlYWRPbmx5KSB7XG4gICAgICAgIHJldHVybiA8c2VjdGlvbiBjbGFzc05hbWU9e0V4dC5jbGFzc05hbWUoJ3J4LWdyaWQtY2VsbCcsIGNsYXNzTmFtZSl9IHN0eWxlPXt7ZmxleDoxfX0gb25DbGljaz17KCkgPT4gdGhpcy5zZXRSZWFkT25seShmYWxzZSl9IHsuLi5vdGhlcnN9PlxuICAgICAgICAgIHtyZW5kZXIodmFsdWUsIHJlY29yZCwgZGF0YUluZGV4LCByb3dJbmRleCl9XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiA8c2VjdGlvbiBjbGFzc05hbWU9e0V4dC5jbGFzc05hbWUoJ3J4LWdyaWQtY2VsbCcsIGNsYXNzTmFtZSl9IHN0eWxlPXt7ZmxleDoxfX0gey4uLm90aGVyc30+XG4gICAgICAgICAgPFRleHRGaWVsZCB2YWx1ZT17dmFsdWV9IGF1dG9Gb2N1cyBvbkNoYW5nZT17dGhpcy5zZXRWYWx1ZX0gb25CbHVyPXt0aGlzLmFmdGVyRWRpdH0gLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gPHNlY3Rpb24gY2xhc3NOYW1lPXtFeHQuY2xhc3NOYW1lKCdyeC1ncmlkLWNlbGwnLCBjbGFzc05hbWUpfSBzdHlsZT17e2ZsZXg6MX19IHsuLi5vdGhlcnN9PlxuICAgICAgICB7cmVuZGVyKHZhbHVlLCByZWNvcmQsIGRhdGFJbmRleCwgcm93SW5kZXgpfVxuICAgICAgPC9zZWN0aW9uPlxuICAgIH1cbiAgfVxuXG4gIEBiaW5kXG4gIGFmdGVyRWRpdCgpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIHsgcmVjb3JkLCBkYXRhSW5kZXggfSA9IHRoaXMucHJvcHM7XG4gICAgcmVjb3JkLnNldChkYXRhSW5kZXgsIHZhbHVlKTtcbiAgICB0aGlzLnNldFJlYWRPbmx5KHRydWUpO1xuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRXh0IGZyb20gJ34vY29yZS9leHQnO1xuaW1wb3J0IExpc3QgZnJvbSAnfi9jb3JlL2xpc3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnfi9jb21wb25lbnRzL2NvbnRhaW5lcic7XG5pbXBvcnQgR3JpZEhlYWRlciBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgR3JpZEJvZHkgZnJvbSAnLi9ib2R5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBFeHQuaW5pdGlhbFN0YXRlKHRoaXMsIHtcbiAgICAgIGNvbHVtbnM6IExpc3QoUmVhY3QuQ2hpbGRyZW4udG9BcnJheShwcm9wcy5jaGlsZHJlbikpLm1hcChjaGlsZCA9PiBjaGlsZC5wcm9wcykuY29sbGVjdCgpXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdG9yZSwgY2xhc3NOYW1lLCAuLi5vdGhlcnMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIDxDb250YWluZXIgbGF5b3V0PVwicm93XCIgY2xhc3NOYW1lPXtFeHQuY2xhc3NOYW1lKCdyeC1ncmlkJywgY2xhc3NOYW1lKX0gey4uLm90aGVyc30+XG4gICAgICA8R3JpZEhlYWRlciB7Li4udGhpcy5zdGF0ZX0gLz5cbiAgICAgIDxHcmlkQm9keSBzdG9yZT17c3RvcmV9IHsuLi50aGlzLnN0YXRlfSAvPlxuICAgIDwvQ29udGFpbmVyPlxuICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBFeHQgZnJvbSAnfi9jb3JlL2V4dCc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICd+L2NvbXBvbmVudHMvY29udGFpbmVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR3JpZEhlYWRlcih7IGNvbHVtbnMgPSBbXSB9KSB7XG4gIHJldHVybiA8c2VjdGlvbiBjbGFzc05hbWU9XCJyeC1ncmlkLWhlYWRlclwiPlxuICAgIDxDb250YWluZXIgbGF5b3V0PVwiY29sdW1uXCIgY2xhc3NOYW1lPVwicngtZ3JpZC1oZWFkZXItY29udGFpbmVyXCI+XG4gICAgICB7Y29sdW1ucy5tYXAoKHsgaGVhZGVyID0gJycsIGNsYXNzTmFtZSA9ICcnLCAuLi5vdGhlcnMgfSkgPT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e0V4dC5jbGFzc05hbWUoJ3J4LWdyaWQtaGVhZGVyLWNvbHVtbiB0ZXh0LWNlbnRlcicsIGNsYXNzTmFtZSl9IHN0eWxlPXt7ZmxleDoxfX0gey4uLm90aGVyc30+XG4gICAgICAgICAge2hlYWRlcn1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOkV4dC5TQ1JPTExfV0lEVEh9fSAvPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L3NlY3Rpb24+XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ34vY29tcG9uZW50cy9jb250YWluZXInO1xuaW1wb3J0IEdyaWRDZWxsIGZyb20gJy4vY2VsbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdyaWRSb3coeyBjb2x1bW5zID0gW10sIC4uLm90aGVycyB9KSB7XG4gIHJldHVybiA8Q29udGFpbmVyIGxheW91dD1cImNvbHVtblwiIGNsYXNzTmFtZT1cInJ4LWdyaWQtcm93XCI+XG4gICAge2NvbHVtbnMubWFwKGNvbHVtbiA9PiA8R3JpZENlbGwgey4uLmNvbHVtbn0gey4uLm90aGVyc30gLz4pfVxuICA8L0NvbnRhaW5lcj5cbn0iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCBFeHQgZnJvbSAnfi9jb3JlL2V4dCc7XG5pbXBvcnQgTGlzdCBmcm9tICd+L2NvcmUvbGlzdCc7XG4vLyBpbXBvcnQgT2JzZXJ2YWJsZSBmcm9tICd+L3JlYWN0aXZlL29ic2VydmFibGUnO1xuXG5jb25zdCBST1VURVMgPSB7fSxcbiAgICAgIGdldFJvdXRlID0gKCkgPT4gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpIHx8ICcvJyxcbiAgICAgIGdldFJvdXRlUGF0aCA9IHJvdXRlID0+IHJvdXRlLnNwbGl0KCcvJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBSb3V0ZShyb3V0ZSkge1xuICByZXR1cm4gY29tcCA9PiB7XG4gICAgUk9VVEVTW3JvdXRlXSA9IHtcbiAgICAgIHJvdXRlLFxuICAgICAgY29tcCxcbiAgICAgIHBhdGg6IGdldFJvdXRlUGF0aChyb3V0ZSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExpbmsoeyB0bywgY2xhc3NOYW1lID0gJycsIGFjdGl2ZUNsYXNzTmFtZSA9ICdhY3RpdmUnLCB0ZXh0LCBjaGlsZHJlbiwgLi4ub3RoZXJzIH0pIHtcbiAgcmV0dXJuIDxhIGhyZWY9e2AjJHt0b31gfSBjbGFzc05hbWU9e0V4dC5jbGFzc05hbWUoJ25hdi1saW5rJywgY2xhc3NOYW1lLCB7IFthY3RpdmVDbGFzc05hbWVdOiB0byA9PT0gZ2V0Um91dGUoKSB9KX0gey4uLm90aGVyc30+XG4gICAge3RleHQgfHwgY2hpbGRyZW59XG4gIDwvYT5cbn1cblxuZXhwb3J0IGNsYXNzIEhhc2hSb3V0ZXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgRXh0LmluaXRpYWxTdGF0ZSh0aGlzLCBtYXRjaFBhdGgoKSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAoIXdpbmRvdy5sb2NhdGlvbi5oYXNoKSAmJiAod2luZG93LmxvY2F0aW9uLmhhc2ggPSAnLycpO1xuICAgIE9ic2VydmFibGUuZnJvbUV2ZW50KHdpbmRvdywgJ2hhc2hjaGFuZ2UnKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zZXRTdGF0ZShtYXRjaFBhdGgoKSkpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcm91dGUsIGNvbXAsIHBhcmFtcyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmICghY29tcCkge1xuICAgICAgY29uc29sZS5lcnJvcignQ29tcG9uZW50IG5vdCBmb3VuZCEnKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGNvbXAsIHsgcm91dGUsIHBhcmFtcyB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXRjaFBhdGgoKSB7XG4gIGNvbnN0IGN1cnJlbnRSb3V0ZSA9IGdldFJvdXRlKCksXG4gICAgICAgIHBhcmFtcyA9IHsgcm91dGU6IGN1cnJlbnRSb3V0ZSB9O1xuXG4gIC8vIGJhc2ljIHJvdXRlICh3aXRob3V0IHBhcmFtcylcbiAgaWYgKFJPVVRFU1tjdXJyZW50Um91dGVdKSB7XG4gICAgcmV0dXJuIHsgcm91dGU6IGN1cnJlbnRSb3V0ZSwgY29tcDogUk9VVEVTW2N1cnJlbnRSb3V0ZV0uY29tcCwgcGFyYW1zIH07XG4gIH1cblxuICAvLyBhZHZhbmNlZCByb3V0ZSAod2l0aCBwYXJhbXMpXG4gIGNvbnN0IGN1cnJlbnRQYXRoID0gZ2V0Um91dGVQYXRoKGN1cnJlbnRSb3V0ZSk7XG4gIGZvcihsZXQgcm91dGUgaW4gUk9VVEVTKSB7XG4gICAgY29uc3QgbWFwUm91dGUgPSBST1VURVNbcm91dGVdLFxuICAgICAgICAgIHJvdXRlUGF0aCA9IG1hcFJvdXRlLnBhdGg7XG5cbiAgICBsZXQgbWF0Y2hlZCA9IHRydWU7XG4gICAgTGlzdChtYXBSb3V0ZS5wYXRoKS5lYWNoKChyb3V0ZU5hbWUsIGluZGV4KSA9PiB7XG4gICAgICBpZiAocm91dGVOYW1lICE9PSBjdXJyZW50UGF0aFtpbmRleF0pIHtcbiAgICAgICAgaWYgKHJvdXRlTmFtZS5zdGFydHNXaXRoKCc6JykpIHsgLy8gZGV0ZWN0IHBhcmFtIHZhbHVlXG4gICAgICAgICAgcGFyYW1zW3JvdXRlTmFtZS5zdWJzdHJpbmcoMSldID0gY3VycmVudFBhdGhbaW5kZXhdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1hdGNoZWQgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChtYXRjaGVkKSB7XG4gICAgICByZXR1cm4geyByb3V0ZTogY3VycmVudFJvdXRlLCBjb21wOiBtYXBSb3V0ZS5jb21wLCBwYXJhbXMgfTtcbiAgICB9XG4gIH1cblxuICAvLyB3aXRoIG5vdCBmb3VuZCBzY3JlZW5cbiAgaWYgKFJPVVRFU1snKiddKSB7XG4gICAgcmV0dXJuIHsgcm91dGU6IGN1cnJlbnRSb3V0ZSwgY29tcDogUk9VVEVTWycqJ10uY29tcCwgcGFyYW1zIH07XG4gIH1cblxuICAvLyB3aXRob3V0IG5vdCBmb3VuZCBzY3JlZW5cbiAgcmV0dXJuIHsgcm91dGU6IGN1cnJlbnRSb3V0ZSwgY29tcDogbnVsbCwgcGFyYW1zIH07XG59IiwiaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0JztcblxuZXhwb3J0IGNsYXNzIERpY3Rpb25hcnkge1xuICBjb25zdHJ1Y3RvcihrZXlWYWx1ZXMpIHtcbiAgICB0aGlzLmRhdGEgPSB7fTtcbiAgICBpZiAoa2V5VmFsdWVzKSB7XG4gICAgICB0aGlzLmRhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBrZXlWYWx1ZXMpO1xuICAgIH1cblxuICAgIHRoaXMua2V5cyA9ICgpID0+IExpc3QoT2JqZWN0LmtleXModGhpcy5kYXRhKSk7XG4gICAgdGhpcy52YWx1ZXMgPSAoKSA9PiBMaXN0KE9iamVjdC52YWx1ZXModGhpcy5kYXRhKSk7XG4gIH1cblxuICBlYWNoKGl0ZXJhdGVlKSB7XG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuZGF0YSkge1xuICAgICAgaXRlcmF0ZWUodGhpcy5kYXRhW2tleV0sIGtleSwgdGhpcy5kYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKGtleVZhbHVlcykgPT4gbmV3IERpY3Rpb25hcnkoa2V5VmFsdWVzKTsiLCJpbXBvcnQgeyBMaXN0IH0gZnJvbSAnLi9saXN0JztcblxuY2xhc3MgRE9NIGV4dGVuZHMgTGlzdCB7XG4gIHNob3coKSB7XG4gICAgdGhpcy5kYXRhLmVhY2goc2VsZWN0b3IgPT4gc2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jaycpO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLmRhdGEuZWFjaChzZWxlY3RvciA9PiBzZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKTtcbiAgfVxuXG4gIHBhcmVudCgpIHtcbiAgICB0aGlzLmNvbXAgPSB0aGlzLmNvbXAucGFyZW50RWxlbWVudDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLmNvbXAuY2xpZW50V2lkdGg7XG4gIH1cblxuICBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcC5jbGllbnRIZWlnaHQ7XG4gIH1cblxuICBmaW5kKHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzZWxlY3RvciA9PiBET00uZ2V0RWwoc2VsZWN0b3IpOyIsImV4cG9ydCBjbGFzcyBFeHQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLkRPTSA9IHJlcXVpcmUoJy4vZG9tJykuZGVmYXVsdDtcbiAgICB0aGlzLlN0cmluZyA9IHJlcXVpcmUoJy4vc3RyaW5nJykuZGVmYXVsdDtcbiAgICB0aGlzLkxpc3QgPSByZXF1aXJlKCcuL2xpc3QnKS5kZWZhdWx0O1xuICAgIHRoaXMuTWFwID0gcmVxdWlyZSgnLi9kaWN0aW9uYXJ5JykuZGVmYXVsdDtcblxuICAgIHRoaXMuU0NST0xMX1dJRFRIID0gdGhpcy5nZXRTY3JvbGxXaWR0aCgpO1xuICAgIHRoaXMuQk9SREVSX1dJRFRIID0gMjtcbiAgICB0aGlzLkNIRUNLX0NPTFVNTl9XSURUSCA9IDMzO1xuICAgIHRoaXMuVU5LTk9XTl9FUlJPUl9NU0cgPSAnQW4gdW5rbm93biBlcnJvciBoYXMgb2NjdXJyZWQuJztcblxuICAgIHRoaXMuaXNQcmltaXRpdmUgPSB2YWx1ZSA9PiB7IGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsdWU7IHJldHVybiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlID09PSAnbnVtYmVyJyB8fCB0eXBlID09PSAnYm9vbGVhbic7IH1cbiAgICB0aGlzLmlzU3RyaW5nID0gdmFsdWUgPT4gKHR5cGVvZiB2YWx1ZSkgPT09ICdzdHJpbmcnO1xuICAgIHRoaXMuaXNGdW5jdGlvbiA9IHZhbHVlID0+ICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xuICAgIHRoaXMuaXNPYmplY3QgPSB2YWx1ZSA9PiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG4gICAgdGhpcy5pc0FycmF5ID0gdmFsdWUgPT4gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG5cbiAgICB0aGlzLmNsb25lID0gb2JqID0+IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSk7IC8vIGRlZXAgY2xvbmVcbiAgfVxuXG4gIGV4dGVuZCgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbi5hcHBseShudWxsLCBhcmd1bWVudHMpOyAvLyBpbW11dGFibGUgb2JqZWN0XG4gIH1cblxuICBpbml0aWFsU3RhdGUoY29tcCwgc3RhdGUpIHtcbiAgICBpZiAoIWNvbXAgfHwgIXN0YXRlKSB7IHJldHVybjsgfVxuICAgIGNvbXAuc3RhdGUgPSBzdGF0ZTtcbiAgICBmb3IgKGxldCBmaWVsZCBvZiBPYmplY3Qua2V5cyhzdGF0ZSkpIHtcbiAgICAgIGNvbXBbYHNldCR7dGhpcy5TdHJpbmcuY2FwaXRhbGl6ZShmaWVsZCl9YF0gPSB2YWx1ZSA9PiBjb21wLnNldFN0YXRlKHsgW2ZpZWxkXTogdmFsdWUgfSk7XG4gICAgfVxuICB9XG5cbiAgY2xhc3NOYW1lKC4uLmV4cHJlc3Npb25zKSB7XG4gICAgY29uc3QgY2xzID0gW107XG5cbiAgICB0aGlzLkxpc3QoZXhwcmVzc2lvbnMpLmVhY2goZXhwID0+IHtcbiAgICAgIGlmICghZXhwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBleHAgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNscy5wdXNoKGV4cCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNPYmplY3QoZXhwKSkge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gZXhwKSB7XG4gICAgICAgICAgaWYgKGV4cFtrZXldID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjbHMucHVzaChrZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjbHMuam9pbignICcpO1xuICB9XG5cbiAgLy8jcmVnaW9uIERPTVxuICBjcmVhdGVFbGVtZW50KGh0bWwpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gaHRtbDtcbiAgICByZXR1cm4gZGl2LmNoaWxkcmVuWzBdO1xuICB9XG5cbiAgZ2V0U2Nyb2xsV2lkdGgoKSB7XG4gICAgY29uc3Qgb3V0ZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJzxkaXYgc3R5bGU9XCJ2aXNpYmlsaXR5OiBoaWRkZW47IHdpZHRoOiAxMDBweDsgb3ZlcmZsb3c6IHNjcm9sbDtcIj48L2Rpdj4nKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG91dGVyKTtcbiAgICBjb25zdCB3aWR0aE5vU2Nyb2xsID0gb3V0ZXIub2Zmc2V0V2lkdGg7XG5cbiAgICAvLyBhZGQgaW5uZXJkaXZcbiAgICBjb25zdCBpbm5lciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnPGRpdiBzdHlsZT1cIndpZHRoOiAxMDAlO1wiPjwvZGl2PicpO1xuICAgIG91dGVyLmFwcGVuZENoaWxkKGlubmVyKTtcbiAgICBjb25zdCB3aWR0aFdpdGhTY3JvbGwgPSBpbm5lci5vZmZzZXRXaWR0aDtcblxuICAgIC8vIHJlbW92ZSBkaXZzXG4gICAgb3V0ZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvdXRlcik7XG5cbiAgICByZXR1cm4gd2lkdGhOb1Njcm9sbCAtIHdpZHRoV2l0aFNjcm9sbDtcbiAgfVxuICAvLyNlbmRyZWdpb25cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEV4dCgpO1xuXG5leHBvcnQgZnVuY3Rpb24gYmluZCh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpIHtcbiAgY29uc3QgZm4gPSBkZXNjcmlwdG9yLnZhbHVlO1xuXG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEBiaW5kIGRlY29yYXRvciBpcyBvbmx5IGFwcGxpZWQgdG8gZnVuY3Rpb25zIG5vdDogJHt0eXBlb2YgZm59YCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQoKSB7XG4gICAgICByZXR1cm4gZm4uYmluZCh0aGlzKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0ID0gNTAwKSB7XG4gIGxldCB0aW1lb3V0O1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsXG4gICAgICAgICAgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgICBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgICB9XG5cbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICB9XG59IiwiZXhwb3J0IGNsYXNzIExpc3Qge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZGF0YSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMuY29sbGVjdCA9ICgpID0+IHRoaXMuZGF0YTtcbiAgICB0aGlzLmNvdW50ID0gKCkgPT4gdGhpcy5kYXRhLmxlbmd0aDtcbiAgICB0aGlzLmdldEF0ID0gaW5kZXggPT4gdGhpcy5kYXRhW2luZGV4XTtcbiAgICB0aGlzLmFkZCA9IGl0ZW0gPT4gdGhpcy5kYXRhLnB1c2goaXRlbSk7XG4gICAgdGhpcy5pbnNlcnQgPSAoaXRlbSwgaW5kZXggPSAwKSA9PiB0aGlzLmRhdGEuc3BsaWNlKGluZGV4LCAwLCBpdGVtKTtcbiAgICB0aGlzLnJlbW92ZUF0ID0gKGluZGV4LCBjb3VudCA9IDEpID0+IHRoaXMuZGF0YS5zcGxpY2UoaW5kZXgsIGNvdW50KTtcbiAgICB0aGlzLmpvaW4gPSBzZXBhcmF0b3IgPT4gdGhpcy5kYXRhLmpvaW4oc2VwYXJhdG9yKTtcbiAgfVxuXG4gIGVhY2goaXRlcmF0ZWUpIHtcbiAgICBmb3IgKGxldCBpbmRleCBpbiB0aGlzLmRhdGEpIHtcbiAgICAgIGl0ZXJhdGVlKHRoaXMuZGF0YVtpbmRleF0sIGluZGV4LCB0aGlzLmRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGZpbHRlcihwcmVkaWNhdGUpIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICB0aGlzLmVhY2goKGl0ZW0sIGluZGV4LCBhcnJheSkgPT4ge1xuICAgICAgaWYgKHByZWRpY2F0ZShpdGVtLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBuZXcgTGlzdChyZXN1bHQpO1xuICB9XG5cbiAgbWFwKGl0ZXJhdGVlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgdGhpcy5lYWNoKChpdGVtLCBpbmRleCwgYXJyYXkpID0+IHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpdGVtLCBpbmRleCwgYXJyYXkpKTtcbiAgICByZXR1cm4gbmV3IExpc3QocmVzdWx0KTtcbiAgfVxuXG4gIHJlZHVjZShpdGVyYXRlZSwgYWNjdW11bGF0b3IpIHtcbiAgICB0aGlzLmVhY2goKGl0ZW0sIGluZGV4LCBhcnJheSkgPT4gYWNjdW11bGF0b3IgPSBpdGVyYXRlZShhY2N1bXVsYXRvciwgaXRlbSwgaW5kZXgsIGFycmF5KSk7XG4gICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICB9XG5cbiAgZmluZEluZGV4KHByZWRpY2F0ZSkge1xuICAgIGxldCBmb3VuZEF0ID0gLTE7XG4gICAgZm9yIChsZXQgaW5kZXggaW4gdGhpcy5kYXRhKSB7XG4gICAgICBpZiAocHJlZGljYXRlKHRoaXMuZGF0YVtpbmRleF0sIGluZGV4LCB0aGlzLmRhdGEpKSB7XG4gICAgICAgIGZvdW5kQXQgPSBpbmRleDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmb3VuZEF0O1xuICB9XG5cbiAgZmluZChwcmVkaWNhdGUpIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLmZpbmRJbmRleChwcmVkaWNhdGUpO1xuICAgIHJldHVybiBpbmRleCA+IC0xID8gdGhpcy5kYXRhW2luZGV4XSA6IG51bGw7XG4gIH1cblxuICBjb250YWlucyhwcmVkaWNhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5maW5kKHByZWRpY2F0ZSkgIT09IG51bGw7XG4gIH1cblxuICByZW1vdmVJZihwcmVkaWNhdGUpIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICB0aGlzLmVhY2goKGl0ZW0sIGluZGV4LCBhcnJheSkgPT4ge1xuICAgICAgaWYgKCFwcmVkaWNhdGUoaXRlbSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgICByZXN1bHQucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmRhdGEgPSByZXN1bHQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHZhbHVlKSA9PiBuZXcgTGlzdCh2YWx1ZSk7IiwiY2xhc3MgU3RyaW5nIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jYXBpdGFsaXplID0gdmFsdWUgPT4gdmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSgxKTtcbiAgfVxuXG4gIGh0bWxFbmNvZGUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLycvZywgJyYjMzk7JylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xuICB9XG5cbiAgaHRtbERlY29kZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC8mYW1wOy9nLCAnJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvJmx0Oy9nLCAnPCcpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLyZndDs+L2csICc+JylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvJiMzOTsvZywgXCInXCIpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLyZxdW90Oy9nLCAnXCInKTtcbiAgfVxuXG4gIHRvUXVlcnlTdHJpbmcocGFyYW1zLCBzZXAsIGVuY29kZSkge1xuICAgIHNlcCAgICA9IHNlcCA9PT0gdW5kZWZpbmVkID8gJyYnIDogc2VwO1xuICAgIGVuY29kZSA9IGVuY29kZSA9PT0gZmFsc2UgPyBmdW5jdGlvbihzKSB7IHJldHVybiBzOyB9IDogZW5jb2RlVVJJQ29tcG9uZW50O1xuXG4gICAgbGV0IHBhaXJzID0gW107XG4gICAgZm9yIChsZXQga2V5IGluIHBhcmFtcykge1xuICAgICAgcGFpcnMucHVzaChgJHtrZXl9PSR7ZW5jb2RlKHBhcmFtc1trZXldKX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhaXJzLmpvaW4oc2VwKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU3RyaW5nKCk7IiwiaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTGlzdCB9IGZyb20gJ34vY29yZS9saXN0JztcbmltcG9ydCBNb2RlbCBmcm9tICcuL21vZGVsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJzdHJhY3RTdG9yZSBleHRlbmRzIExpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLy8jcmVnaW9uIGNvbmZpZ3NcbiAgICB0aGlzLnRvdGFsQ291bnQgPSAwO1xuICAgIHRoaXMucGFnZVNpemUgPSAwO1xuICAgIHRoaXMuY3VycmVudFBhZ2UgPSAxO1xuICAgIHRoaXMuc3ViamVjdCA9IG5ldyBTdWJqZWN0KCk7XG4gICAgLy8jZW5kcmVnaW9uXG5cbiAgICAvLyNyZWdpb24gcHJvcGVydGllc1xuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgLy8jcmVnaW9uIG1ldGhvZHNcbiAgICB0aGlzLmNyZWF0ZVJlY29yZCA9IHJlY29yZCA9PiBuZXcgTW9kZWwocmVjb3JkLCB0aGlzKTtcbiAgICB0aGlzLmdldFJlY29yZHMgPSB0aGlzLmNvbGxlY3Q7XG4gICAgdGhpcy5nZXRNb2RpZmllZFJlY29yZHMgPSAoKSA9PiB0aGlzLmZpbHRlcihyZWNvcmQgPT4gcmVjb3JkLmlzTW9kaWZpZWQoKSk7XG4gICAgdGhpcy5nZXROZXdSZWNvcmRzID0gKCkgPT4gdGhpcy5maWx0ZXIocmVjb3JkID0+IHJlY29yZC5pc05ld2x5Q3JlYXRlZCgpKTtcbiAgICB0aGlzLnN1YnNjcmliZSA9IG9ic2VydmVyID0+IHRoaXMuc3ViamVjdC5zdWJzY3JpYmUoeyBuZXh0OiB2YWx1ZSA9PiBvYnNlcnZlcih2YWx1ZSkgfSk7XG4gICAgdGhpcy5maXJlRXZlbnQgPSAoKSA9PiB0aGlzLnN1YmplY3QubmV4dCh0aGlzKTtcbiAgICAvLyNlbmRyZWdpb25cbiAgfVxuXG4gIGNsZWFyRGF0YShzaWxlbnQgPSBmYWxzZSkge1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICFzaWxlbnQgJiYgdGhpcy5maXJlRXZlbnQoKTtcbiAgfVxuXG4gIGxvYWREYXRhKGRhdGEpIHtcbiAgICB0aGlzLmNsZWFyRGF0YSh0cnVlKTtcbiAgICB0aGlzLmRhdGEgPSAobmV3IExpc3QoZGF0YSkpLm1hcCh0aGlzLmNyZWF0ZVJlY29yZC5iaW5kKHRoaXMpKS5jb2xsZWN0KCk7XG4gICAgdGhpcy5maXJlRXZlbnQoKTtcbiAgfVxuXG4gIGNvbW1pdENoYW5nZXMoKSB7XG4gICAgdGhpcy5nZXRNb2RpZmllZFJlY29yZHMoKS5lYWNoKHJlY29yZCA9PiByZWNvcmQuc2F2ZSgpKTtcbiAgICB0aGlzLmZpcmVFdmVudCgpO1xuICB9XG5cbiAgcmVqZWN0Q2hhbmdlcygpIHtcbiAgICB0aGlzLmdldE1vZGlmaWVkUmVjb3JkcygpLmVhY2gocmVjb3JkID0+IHJlY29yZC5yZWplY3QodHJ1ZSkpO1xuICAgIHRoaXMuZmlyZUV2ZW50KCk7XG4gIH1cbn0iLCJjbGFzcyBDYWNoZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2NhY2hlID0ge307XG4gIH1cblxuICBoYXNMb2NhbFN0b3JhZ2UoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAnbG9jYWxTdG9yYWdlJyBpbiB3aW5kb3cgJiYgd2luZG93LmxvY2FsU3RvcmFnZSAhPT0gbnVsbDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZ2V0KGtleSkge1xuICAgIGlmICh0aGlzLmhhc0xvY2FsU3RvcmFnZSgpKSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSB8fCB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLl9jYWNoZVtrZXldIHx8IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBzZXQoa2V5LCB2YWx1ZSkge1xuICAgIGlmICh0aGlzLmhhc0xvY2FsU3RvcmFnZSgpKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NhY2hlW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICByZW1vdmUoa2V5KSB7XG4gICAgaWYgKCFrZXkpIHtcbiAgICAgIHRoaXMuX2NhY2hlID0ge307XG4gICAgfSBlbHNlIGlmICh0aGlzLmhhc0xvY2FsU3RvcmFnZSgpKSB7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdGhpcy5fY2FjaGVba2V5XTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENhY2hlKCk7IiwiaW1wb3J0IEV4dCBmcm9tICd+L2NvcmUvZXh0JztcbmltcG9ydCBMaXN0IGZyb20gJ34vY29yZS9saXN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kZWwge1xuICBjb25zdHJ1Y3RvcihkYXRhLCBzdG9yZSkge1xuICAgIC8vI3JlZ2lvbiBjb25maWdzXG4gICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgLy8jcmVnaW9uIHByb3BlcnRpZXNcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMuc3RvcmUgPSBzdG9yZTtcbiAgICBjb25zdCBmaWVsZENvbmZpZyA9IChzdG9yZSAmJiBzdG9yZS5maWVsZHMpID8gc3RvcmUuZmllbGRzIDogW107XG4gICAgdGhpcy5maWVsZHMgPSBMaXN0KGZpZWxkQ29uZmlnKS5tYXAoZmllbGQgPT4gRXh0LmlzU3RyaW5nKGZpZWxkKSA/ICh7IG5hbWU6IGZpZWxkLCB0eXBlOiAnc3RyaW5nJyB9KSA6IGZpZWxkKTtcbiAgICAvLyNlbmRyZWdpb25cblxuICAgIC8vI3JlZ2lvbiBtZXRob2RzXG4gICAgdGhpcy5nZXREYXRhID0gKCkgPT4gdGhpcy5kYXRhO1xuICAgIHRoaXMuZ2V0ID0gZmllbGROYW1lID0+IHRoaXMuZGF0YVtmaWVsZE5hbWVdO1xuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgdGhpcy5zYXZlKCk7XG4gIH1cblxuICBzZXQoZmllbGROYW1lLCBuZXdWYWx1ZSwgc2lsZW50KSB7XG4gICAgdGhpcy5kYXRhW2ZpZWxkTmFtZV0gPSBuZXdWYWx1ZTtcbiAgICB0aGlzLm1vZGlmaWVkID0gIXRoaXMuaXNFcXVhbChmaWVsZE5hbWUpO1xuICAgICghc2lsZW50ICYmIHRoaXMuc3RvcmUpICYmICh0aGlzLnN0b3JlLmZpcmVFdmVudCgpKTtcbiAgfVxuXG4gIHNhdmUoKSB7XG4gICAgdGhpcy5waGFudG9tID0gRXh0LmNsb25lKHRoaXMuZGF0YSk7XG4gICAgdGhpcy5tb2RpZmllZCA9IGZhbHNlO1xuICB9XG5cbiAgcmVqZWN0KHNpbGVudCkge1xuICAgIHRoaXMuZGF0YSA9IEV4dC5jbG9uZSh0aGlzLnBoYW50b20pO1xuICAgIHRoaXMuc2F2ZSgpO1xuICAgICghc2lsZW50ICYmIHRoaXMuc3RvcmUpICYmICh0aGlzLnN0b3JlLmZpcmVFdmVudCgpKTtcbiAgfVxuXG4gIGlzRXF1YWwoZmllbGROYW1lKSB7XG4gICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzLnBoYW50b21bZmllbGROYW1lXSxcbiAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMuZGF0YVtmaWVsZE5hbWVdLFxuICAgICAgICAgIGZpZWxkID0gdGhpcy5maWVsZHMuZmluZChmaWVsZCA9PiBmaWVsZC5uYW1lID09PSBmaWVsZE5hbWUpO1xuXG4gICAgcmV0dXJuIGZpZWxkLmVxdWFscyA/IGZpZWxkLmVxdWFscyhuZXdWYWx1ZSwgb2xkVmFsdWUpIDogbmV3VmFsdWUgPT09IG9sZFZhbHVlO1xuICB9XG5cbiAgaXNNb2RpZmllZChmaWVsZE5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RpZmllZDtcbiAgfVxuXG4gIHNldFNlbGVjdGVkKHNlbGVjdGVkLCBzaWxlbnQpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgKCFzaWxlbnQgJiYgdGhpcy5zdG9yZSkgJiYgKHRoaXMuc3RvcmUuZmlyZUV2ZW50KCkpO1xuICB9XG59IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IEV4dCBmcm9tICd+L2NvcmUvZXh0JztcbmltcG9ydCBBYnN0cmFjdFN0b3JlIGZyb20gJy4vYWJzdHJhY3Qtc3RvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm94eVN0b3JlIGV4dGVuZHMgQWJzdHJhY3RTdG9yZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICAvLyNyZWdpb24gY29uZmlnc1xuICAgIHRoaXMucHJveHkgPSB7XG4gICAgICByZWFkZXI6IHt9LFxuICAgICAgd3JpdGVyOiB7fVxuICAgIH07XG4gICAgLy8jZW5kcmVnaW9uXG4gIH1cblxuICBsb2FkKHsgZG9uZSwgZmFpbCwgYWx3YXlzIH0gPSB7fSkge1xuICAgIGxldCB7IHVybCwgbWV0aG9kID0gJ2dldCcsIHJlc3BvbnNlVHlwZSA9ICdqc29uJywgcGFyYW1zIH0gPSB0aGlzLnByb3h5O1xuICAgIChtZXRob2QgPT09ICdnZXQnICYmIHBhcmFtcykgJiYgKHVybCA9IGAke3VybH0/JHtTdHJpbmcudG9RdWVyeVN0cmluZyhwYXJhbXMpfWApO1xuICAgIE9ic2VydmFibGUuYWpheCh7XG4gICAgICB1cmwsXG4gICAgICBtZXRob2QsXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgIGJvZHk6IG1ldGhvZCA9PT0gJ3Bvc3QnICYmIHBhcmFtcyxcbiAgICAgIHJlc3BvbnNlVHlwZSxcbiAgICB9KVxuICAgIC5tYXAodmFsdWUgPT4gdmFsdWUucmVzcG9uc2UpXG4gICAgLnN1YnNjcmliZSh7XG4gICAgICBuZXh0OiByZXNwb25zZSA9PiB7XG4gICAgICAgIGNvbnN0IHsgcmVhZGVyOiB7IHJvb3RQcm9wZXJ0eSwgdG90YWxQcm9wZXJ0eSB9ID0ge30gfSA9IHRoaXMucHJveHk7XG4gICAgICAgIHRoaXMubG9hZERhdGEocm9vdFByb3BlcnR5ID8gcmVzcG9uc2Vbcm9vdFByb3BlcnR5XSA6IHJlc3BvbnNlKTtcbiAgICAgICAgdGhpcy50b3RhbENvdW50ID0gKHRoaXMucGFnZVNpemUgJiYgdG90YWxQcm9wZXJ0eSkgPyByZXNwb25zZVt0b3RhbFByb3BlcnR5XSA6IHRoaXMuY291bnQoKTtcbiAgICAgICAgZG9uZSAmJiBkb25lKHJlc3BvbnNlKTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZXJyID0+IGZhaWwgKGVyci5yZXNwb25zZSB8fCBlcnIubWVzc2FnZSksXG4gICAgICBjb21wbGV0ZTogYWx3YXlzXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBzeW5jKHsgZG9uZSwgZmFpbCwgYWx3YXlzIH0gPSB7fSkge1xuICAgIGNvbnN0IHsgdXJsLCByZXNwb25zZVR5cGUgPSAnanNvbicsIHdyaXRlcjogeyB0cmFuc2Zvcm0gfSA9IHt9IH0gPSB0aGlzLnByb3h5O1xuICAgIGxldCBwYXJhbXMgPSB0aGlzLmdldE1vZGlmaWVkUmVjb3JkcygpLm1hcChyZWNvcmQgPT4gcmVjb3JkLmRhdGEpLmNvbGxlY3QoKTtjb25zb2xlLmxvZyhwYXJhbXMpXG4gICAgdHJhbnNmb3JtICYmIChwYXJhbXMgPSB0cmFuc2Zvcm0ocGFyYW1zKSk7XG4gICAgT2JzZXJ2YWJsZS5hamF4KHtcbiAgICAgIHVybCxcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICBib2R5OiBwYXJhbXMsXG4gICAgICByZXNwb25zZVR5cGUsXG4gICAgfSlcbiAgICAubWFwKHZhbHVlID0+IHZhbHVlLnJlc3BvbnNlKVxuICAgIC5zdWJzY3JpYmUoe1xuICAgICAgbmV4dDogZG9uZSxcbiAgICAgIGVycm9yOiBlcnIgPT4gZmFpbCAoZXJyLnJlc3BvbnNlIHx8IGVyci5tZXNzYWdlKSxcbiAgICAgIGNvbXBsZXRlOiBhbHdheXNcbiAgICB9KTtcbiAgfVxufSIsImltcG9ydCB7IERpY3Rpb25hcnkgfSBmcm9tICd+L2NvcmUvZGljdGlvbmFyeSc7XG5cbmNsYXNzIFN0b3JlTWFuYWdlciBleHRlbmRzIERpY3Rpb25hcnkge1xuICBzZXQoa2V5LCB2YWx1ZSkge1xuICAgIHRoaXMuZGF0YVtrZXldID0gdmFsdWU7XG4gIH1cblxuICBnZXQoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVtrZXldO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBTdG9yZU1hbmFnZXIoKTsiLCJpbXBvcnQgRXh0IGZyb20gJ34vY29yZS9leHQnO1xuaW1wb3J0IFByb3h5U3RvcmUgZnJvbSAnLi9wcm94eS1zdG9yZSc7XG5cbmNsYXNzIFN0b3JlIGV4dGVuZHMgUHJveHlTdG9yZSB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKCk7XG4gICAgRXh0LmV4dGVuZCh0aGlzLCBjb25maWcpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZyA9PiBuZXcgU3RvcmUoY29uZmlnKTsiLCJpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgRXh0IH0gZnJvbSAnLi9jb3JlL2V4dCc7XG5pbXBvcnQgU3RvcmVNYW5hZ2VyIGZyb20gJy4vZGF0YS9zdG9yZS1tYW5hZ2VyJztcblxuY2xhc3MgUmV4dCBleHRlbmRzIEV4dCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5TdG9yZU1hbmFnZXIgPSBTdG9yZU1hbmFnZXI7XG4gICAgdGhpcy5DYWNoZSA9IHJlcXVpcmUoJy4vZGF0YS9jYWNoZScpLmRlZmF1bHQ7XG4gIH1cblxuICBhc3luYyBhcHBsaWNhdGlvbih7IHN0b3JlcywgbGF1bmNoIH0pIHtcbiAgICBpZiAoc3RvcmVzKSB7XG4gICAgICB0aGlzLkxpc3Qoc3RvcmVzKS5lYWNoKHN0b3JlID0+IHtcbiAgICAgICAgc3RvcmUgPSBzdG9yZS5kZWZhdWx0O1xuICAgICAgICBTdG9yZU1hbmFnZXIuc2V0KHN0b3JlLnN0b3JlSWQsIHN0b3JlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAobGF1bmNoKSB7XG4gICAgICBjb25zdCByb290ID0gdGhpcy5jcmVhdGVFbGVtZW50KCc8ZGl2IGlkPVwicmVhY3Qtcm9vdFwiPjwvZGl2PicpLFxuICAgICAgICAgICAgdmlld3BvcnQgPSBhd2FpdCBsYXVuY2goKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocm9vdCk7XG4gICAgICByZW5kZXIodmlld3BvcnQsIHJvb3QpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUmV4dCgpO1xuXG4vLyNyZWdpb24gQ29tcG9uZW50XG5leHBvcnQgeyBIYXNoUm91dGVyLCBMaW5rIH0gZnJvbSAnLi9jb21wb25lbnRzL3JvdXRlcic7XG5leHBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvY29udGFpbmVyJztcbmV4cG9ydCB7IEJ1dHRvbiwgQnV0dG9uTGluaywgRmllbGQsIFRleHRGaWVsZCwgQ2hlY2tib3gsIFRleHRBcmVhIH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBHcmlkIH0gZnJvbSAnLi9jb21wb25lbnRzL2dyaWQvZ3JpZCc7XG4vLyNlbmRyZWdpb25cblxuLy8jcmVnaW9uIERlY29yYXRvciAob3IgSGlnaGVyIE9yZGVyIEZ1bmN0aW9uIG9yIEhpZ2hlciBPcmRlciBDb21wb25lbnQpXG5leHBvcnQgeyBiaW5kLCBkZWJvdW5jZSB9IGZyb20gJy4vY29yZS9leHQnO1xuZXhwb3J0IHsgUm91dGUgfSBmcm9tICcuL2NvbXBvbmVudHMvcm91dGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAvY29tcG9uZW50JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3RvcmUgfSBmcm9tICcuL2RhdGEvc3RvcmUnO1xuLy8jZW5kcmVnaW9uIl19
