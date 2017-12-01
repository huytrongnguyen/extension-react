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

},{"../../../src/rext":34,"./components/architecture/architecture":2,"./components/core-concepts/component":3,"./components/core-concepts/data-package":4,"./components/core-concepts/screen-navigation":5,"./components/example/cards":6,"./components/example/dashboard":8,"./components/example/details":9,"./components/example/notfound":10,"./components/example/search":11,"./components/example/stores/card":12,"./components/getting-started/getting-started":13,"./components/viewport/viewport":14,"babel-polyfill":"babel-polyfill","react":"react"}],2:[function(require,module,exports){
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
          '// ./stores/card\nimport { Store } from \'ext-react\';\n\nexport default Store({\n  storeId: \'CardStore\',\n  proxy: {\n    url: \'/data/card.json\'\n  }\n})'
        ),
        _react2.default.createElement(
          'pre',
          { className: 'mb-md' },
          '// ./components/cards.js\nimport { Route, Component } from \'ext-react\';\n\n@Route(\'/example/cards\')\n@Component({\n  stores: [ \'CardStore\' ],\n  view: CardView\n})\nexport default class Card { }'
        ),
        _react2.default.createElement(
          'pre',
          null,
          '// ./components/cards.view.jsx\nimport React, { PureComponent } from \'react\';\nimport { Grid } from \'ext-react\';\n\nexport default class CardView extends PureComponent {\n  componentDidMount() {\n    this.props.stores.CardStore.load();\n  }\n  render() {\n    const {CardStore } = this.props.stores;\n    return <Grid store={CardStore}>\n      <div header="Id" dataIndex="Id" />\n      <div header="Name" dataIndex="Name" />\n      <div header="Type" dataIndex="Type" />\n    </Grid>\n  }\n}'
        )
      );
    }
  }]);

  return Architecture;
}(_react.PureComponent)) || _class);
exports.default = Architecture;

},{"../../../../../src/rext":34,"react":"react"}],3:[function(require,module,exports){
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

},{"../../../../../src/rext":34,"react":"react"}],4:[function(require,module,exports){
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

},{"../../../../../src/rext":34,"react":"react"}],5:[function(require,module,exports){
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

},{"../../../../../src/rext":34,"react":"react"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _dec2, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rext = require('../../../../../src/rext');

var _cards = require('./cards.view');

var _cards2 = _interopRequireDefault(_cards);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Card = (_dec = (0, _rext.Route)('/example/cards'), _dec2 = (0, _rext.Component)({
  stores: ['CardStore'],
  view: _cards2.default
}), _dec(_class = _dec2(_class = function Card() {
  _classCallCheck(this, Card);
}) || _class) || _class);
exports.default = Card;

},{"../../../../../src/rext":34,"./cards.view":7,"react":"react"}],7:[function(require,module,exports){
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
      var CardStore = this.props.stores.CardStore;

      return _react2.default.createElement(
        _rext.Grid,
        { store: CardStore },
        _react2.default.createElement('div', { header: 'Id', dataIndex: 'Id' }),
        _react2.default.createElement('div', { header: 'Name', dataIndex: 'Name' }),
        _react2.default.createElement('div', { header: 'Type', dataIndex: 'Type' })
      );
    }
  }]);

  return CardView;
}(_react.PureComponent);

exports.default = CardView;

},{"../../../../../src/rext":34,"react":"react"}],8:[function(require,module,exports){
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

},{"../../../../../src/rext":34,"react":"react"}],9:[function(require,module,exports){
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

},{"../../../../../src/rext":34,"react":"react"}],10:[function(require,module,exports){
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

},{"../../../../../src/rext":34,"react":"react"}],11:[function(require,module,exports){
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

},{"../../../../../src/rext":34,"react":"react"}],12:[function(require,module,exports){
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

},{"../../../../../../src/rext":34}],13:[function(require,module,exports){
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

},{"../../../../../src/rext":34,"react":"react"}],14:[function(require,module,exports){
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

},{"../../../../../src/rext":34,"react":"react"}],15:[function(require,module,exports){
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

},{"../core/ext":25,"../core/list":26,"../data/store-manager":32,"react":"react"}],16:[function(require,module,exports){
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

},{"../core/ext":25,"react":"react"}],17:[function(require,module,exports){
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
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.store.unsubscribe(this.onDataChange);
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

},{"../container":16,"./row":21,"react":"react"}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = GridCell;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ext = require('../../core/ext');

var _ext2 = _interopRequireDefault(_ext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function GridCell(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      _ref$render = _ref.render,
      render = _ref$render === undefined ? function (value) {
    return value;
  } : _ref$render,
      record = _ref.record,
      dataIndex = _ref.dataIndex,
      rowIndex = _ref.rowIndex,
      others = _objectWithoutProperties(_ref, ['className', 'render', 'record', 'dataIndex', 'rowIndex']);

  return _react2.default.createElement(
    'section',
    _extends({ className: _ext2.default.className('rx-grid-cell', className), style: { flex: 1 } }, others),
    render(dataIndex ? record.get(dataIndex) : '', record, dataIndex, rowIndex)
  );
}

},{"../../core/ext":25,"react":"react"}],19:[function(require,module,exports){
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

},{"../../core/ext":25,"../../core/list":26,"../container":16,"./body":17,"./header":20,"react":"react"}],20:[function(require,module,exports){
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

},{"../../core/ext":25,"../container":16,"react":"react"}],21:[function(require,module,exports){
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

},{"../container":16,"./cell":18,"react":"react"}],22:[function(require,module,exports){
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

},{"../core/ext":25,"../core/list":26,"react":"react","rxjs":"rxjs"}],23:[function(require,module,exports){
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

},{"./list":26}],24:[function(require,module,exports){
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

},{"./list":26}],25:[function(require,module,exports){
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

},{"./dictionary":23,"./dom":24,"./list":26,"./string":27}],26:[function(require,module,exports){
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

},{}],27:[function(require,module,exports){
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

},{}],28:[function(require,module,exports){
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

},{"../core/list":26,"./model":30,"rxjs":"rxjs"}],29:[function(require,module,exports){
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

},{}],30:[function(require,module,exports){
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

},{"../core/ext":25,"../core/list":26}],31:[function(require,module,exports){
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

},{"../core/ext":25,"./abstract-store":28,"rxjs":"rxjs"}],32:[function(require,module,exports){
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

},{"../core/dictionary":23}],33:[function(require,module,exports){
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

},{"../core/ext":25,"./proxy-store":31}],34:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Store = exports.Component = exports.Route = exports.debounce = exports.bind = exports.Grid = exports.Container = exports.Link = exports.HashRouter = undefined;

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

},{"./app/component":15,"./components/container":16,"./components/grid/grid":19,"./components/router":22,"./core/ext":25,"./data/cache":29,"./data/store":33,"./data/store-manager":32,"babel-polyfill":"babel-polyfill","react":"react","react-dom":"react-dom"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkb2NzL3NyYy9qcy9hcHAuanMiLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2FyY2hpdGVjdHVyZS9hcmNoaXRlY3R1cmUuanN4IiwiZG9jcy9zcmMvanMvY29tcG9uZW50cy9jb3JlLWNvbmNlcHRzL2NvbXBvbmVudC5qc3giLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2NvcmUtY29uY2VwdHMvZGF0YS1wYWNrYWdlLmpzeCIsImRvY3Mvc3JjL2pzL2NvbXBvbmVudHMvY29yZS1jb25jZXB0cy9zY3JlZW4tbmF2aWdhdGlvbi5qc3giLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUvY2FyZHMuanMiLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUvY2FyZHMudmlldy5qc3giLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUvZGFzaGJvYXJkLmpzIiwiZG9jcy9zcmMvanMvY29tcG9uZW50cy9leGFtcGxlL2RldGFpbHMuanMiLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUvbm90Zm91bmQuanMiLCJkb2NzL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUvc2VhcmNoLmpzIiwiZG9jcy9zcmMvanMvY29tcG9uZW50cy9leGFtcGxlL3N0b3Jlcy9jYXJkLmpzIiwiZG9jcy9zcmMvanMvY29tcG9uZW50cy9nZXR0aW5nLXN0YXJ0ZWQvZ2V0dGluZy1zdGFydGVkLmpzeCIsImRvY3Mvc3JjL2pzL2NvbXBvbmVudHMvdmlld3BvcnQvdmlld3BvcnQuanN4Iiwic3JjL2FwcC9jb21wb25lbnQuanMiLCJzcmMvY29tcG9uZW50cy9jb250YWluZXIuanN4Iiwic3JjL2NvbXBvbmVudHMvZ3JpZC9ib2R5LmpzeCIsInNyYy9jb21wb25lbnRzL2dyaWQvY2VsbC5qc3giLCJzcmMvY29tcG9uZW50cy9ncmlkL2dyaWQuanN4Iiwic3JjL2NvbXBvbmVudHMvZ3JpZC9oZWFkZXIuanN4Iiwic3JjL2NvbXBvbmVudHMvZ3JpZC9yb3cuanN4Iiwic3JjL2NvbXBvbmVudHMvcm91dGVyLmpzeCIsInNyYy9jb3JlL2RpY3Rpb25hcnkuanMiLCJzcmMvY29yZS9kb20uanMiLCJzcmMvY29yZS9leHQuanMiLCJzcmMvY29yZS9saXN0LmpzIiwic3JjL2NvcmUvc3RyaW5nLmpzIiwic3JjL2RhdGEvYWJzdHJhY3Qtc3RvcmUuanMiLCJzcmMvZGF0YS9jYWNoZS5qcyIsInNyYy9kYXRhL21vZGVsLmpzIiwic3JjL2RhdGEvcHJveHktc3RvcmUuanMiLCJzcmMvZGF0YS9zdG9yZS1tYW5hZ2VyLmpzIiwic3JjL2RhdGEvc3RvcmUuanMiLCJzcmMvcmV4dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxlQUFLLFdBQUwsQ0FBaUI7QUFDZixVQUFRLENBQ04sUUFBUSxrQ0FBUixDQURNLENBRE87QUFJZixTQUFPLENBQ0wsUUFBUSw4Q0FBUixDQURLLEVBRUwsUUFBUSxzQ0FBUixDQUZLLEVBR0wsUUFBUSw4Q0FBUixDQUhLLEVBSUwsUUFBUSx5Q0FBUixDQUpLLEVBS0wsUUFBUSx3Q0FBUixDQUxLO0FBTUw7QUFDQSxVQUFRLGdDQUFSLENBUEssRUFRTCxRQUFRLDZCQUFSLENBUkssRUFTTCxRQUFRLDhCQUFSLENBVEssRUFVTCxRQUFRLCtCQUFSLENBVkssRUFXTCxRQUFRLDRCQUFSLENBWEssQ0FKUTtBQWlCZixVQUFRO0FBQUEsV0FBTSx1REFBTjtBQUFBO0FBakJPLENBQWpCOzs7Ozs7Ozs7Ozs7OztBQ0xBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFHcUIsWSxXQURwQixpQkFBTSxlQUFOLEM7Ozs7Ozs7Ozs7OzZCQUVVO0FBQ1AsYUFBTztBQUFBO0FBQUEsVUFBVyxXQUFVLDJCQUFyQjtBQUNMO0FBQUE7QUFBQSxZQUFJLFdBQVUsT0FBZDtBQUFBO0FBQUEsU0FESztBQUVMO0FBQUE7QUFBQSxZ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QVksSTs7Ozs7Ozs7O3NCQUNaLFM7Ozs7Ozs7Ozt5Q0FFQSxPOzs7O0FBaENUOzs7OztnQkFvQ1MsSTs7Ozs7O2dCQUFNLFE7Ozs7OzttQkFDTixLOzs7Ozs7Ozs7OENBQ0EsTzs7Ozs7Ozs7OzBDQUNBLE87Ozs7QUExQ1Q7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7SUFFTSxJOzs7QUFDSixrQkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUssWUFBTDtBQUNBLFVBQUssS0FBTCxHQUFhLFFBQVEsY0FBUixFQUF3QixPQUFyQztBQUhZO0FBSWI7Ozs7OztZQUVtQixNLFFBQUEsTTtZQUFRLE0sUUFBQSxNOzs7Ozs7QUFDMUIsb0JBQUksTUFBSixFQUFZO0FBQ1YsdUJBQUssSUFBTCxDQUFVLE1BQVYsRUFBa0IsSUFBbEIsQ0FBdUIsaUJBQVM7QUFDOUIsNEJBQVEsTUFBTSxPQUFkO0FBQ0EsMkNBQWEsR0FBYixDQUFpQixNQUFNLE9BQXZCLEVBQWdDLEtBQWhDO0FBQ0QsbUJBSEQ7QUFJRDs7cUJBQ0csTTs7Ozs7QUFDSSxvQixHQUFPLEtBQUssYUFBTCxDQUFtQiw2QkFBbkIsQzs7dUJBQ1UsUTs7O0FBQWpCLHdCOztBQUNOLHlCQUFTLElBQVQsQ0FBYyxXQUFkLENBQTBCLElBQTFCO0FBQ0Esc0NBQU8sUUFBUCxFQUFpQixJQUFqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQUtTLElBQUksSUFBSixFOztBQUVmIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZXh0IGZyb20gJ34vcmV4dCc7XG5pbXBvcnQgVmlld3BvcnQgZnJvbSAnLi9jb21wb25lbnRzL3ZpZXdwb3J0L3ZpZXdwb3J0JztcblxuUmV4dC5hcHBsaWNhdGlvbih7XG4gIHN0b3JlczogW1xuICAgIHJlcXVpcmUoJy4vY29tcG9uZW50cy9leGFtcGxlL3N0b3Jlcy9jYXJkJyksXG4gIF0sXG4gIHZpZXdzOiBbXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL2dldHRpbmctc3RhcnRlZC9nZXR0aW5nLXN0YXJ0ZWQnKSxcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvY29yZS1jb25jZXB0cy9jb21wb25lbnQnKSxcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvY29yZS1jb25jZXB0cy9zY3JlZW4tbmF2aWdhdGlvbicpLFxuICAgIHJlcXVpcmUoJy4vY29tcG9uZW50cy9jb3JlLWNvbmNlcHRzL2RhdGEtcGFja2FnZScpLFxuICAgIHJlcXVpcmUoJy4vY29tcG9uZW50cy9hcmNoaXRlY3R1cmUvYXJjaGl0ZWN0dXJlJyksXG4gICAgLy8gcmVxdWlyZSgnLi9jb21wb25lbnRzL3VpLWNvbXBvbmVudHMvZ3JpZCcpLFxuICAgIHJlcXVpcmUoJy4vY29tcG9uZW50cy9leGFtcGxlL2Rhc2hib2FyZCcpLFxuICAgIHJlcXVpcmUoJy4vY29tcG9uZW50cy9leGFtcGxlL3NlYXJjaCcpLFxuICAgIHJlcXVpcmUoJy4vY29tcG9uZW50cy9leGFtcGxlL2RldGFpbHMnKSxcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvZXhhbXBsZS9ub3Rmb3VuZCcpLFxuICAgIHJlcXVpcmUoJy4vY29tcG9uZW50cy9leGFtcGxlL2NhcmRzJyksXG4gIF0sXG4gIGxhdW5jaDogKCkgPT4gPFZpZXdwb3J0IC8+XG59KTsiLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBDb250YWluZXIgfSBmcm9tICd+L3JleHQnO1xuXG5AUm91dGUoJy9hcmNoaXRlY3R1cmUnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJjaGl0ZWN0dXJlIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPENvbnRhaW5lciBjbGFzc05hbWU9XCJtYWluIGNvbnRhaW5lciBzY3JvbGxhYmxlXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwibWItbWRcIj5BcHBsaWNhdGlvbiBBcmNoaXRlY3R1cmU8L2gxPlxuICAgICAgPHByZSBjbGFzc05hbWU9XCJtYi1tZFwiPlxue2AvLyAuL2FwcC5qc1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJleHQgZnJvbSAnZXh0LXJlYWN0JztcbmltcG9ydCBWaWV3cG9ydCBmcm9tICcuL2NvbXBvbmVudHMvdmlld3BvcnQvdmlld3BvcnQnO1xuXG5SZXh0LmFwcGxpY2F0aW9uKHtcbiAgc3RvcmVzOiBbXG4gICAgcmVxdWlyZSgnLi9zdG9yZXMvY2FyZHMnKSxcbiAgXSxcbiAgdmlld3M6IFtcbiAgICByZXF1aXJlKCcuL2NvbXBvbmVudHMvY2FyZHMnKSxcbiAgXSxcbiAgbGF1bmNoOiAoKSA9PiA8Vmlld3BvcnQgLz5cbn0pO2B9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntgLy8gLi9zdG9yZXMvY2FyZFxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdleHQtcmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBTdG9yZSh7XG4gIHN0b3JlSWQ6ICdDYXJkU3RvcmUnLFxuICBwcm94eToge1xuICAgIHVybDogJy9kYXRhL2NhcmQuanNvbidcbiAgfVxufSlgfVxuICAgICAgPC9wcmU+XG4gICAgICA8cHJlIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG57YC8vIC4vY29tcG9uZW50cy9jYXJkcy5qc1xuaW1wb3J0IHsgUm91dGUsIENvbXBvbmVudCB9IGZyb20gJ2V4dC1yZWFjdCc7XG5cbkBSb3V0ZSgnL2V4YW1wbGUvY2FyZHMnKVxuQENvbXBvbmVudCh7XG4gIHN0b3JlczogWyAnQ2FyZFN0b3JlJyBdLFxuICB2aWV3OiBDYXJkVmlld1xufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQgeyB9YH1cbiAgICAgIDwvcHJlPlxuICAgICAgPHByZT5cbntgLy8gLi9jb21wb25lbnRzL2NhcmRzLnZpZXcuanN4XG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdyaWQgfSBmcm9tICdleHQtcmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkVmlldyBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLnN0b3Jlcy5DYXJkU3RvcmUubG9hZCgpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7Q2FyZFN0b3JlIH0gPSB0aGlzLnByb3BzLnN0b3JlcztcbiAgICByZXR1cm4gPEdyaWQgc3RvcmU9e0NhcmRTdG9yZX0+XG4gICAgICA8ZGl2IGhlYWRlcj1cIklkXCIgZGF0YUluZGV4PVwiSWRcIiAvPlxuICAgICAgPGRpdiBoZWFkZXI9XCJOYW1lXCIgZGF0YUluZGV4PVwiTmFtZVwiIC8+XG4gICAgICA8ZGl2IGhlYWRlcj1cIlR5cGVcIiBkYXRhSW5kZXg9XCJUeXBlXCIgLz5cbiAgICA8L0dyaWQ+XG4gIH1cbn1gfVxuICAgICAgPC9wcmU+XG4gICAgPC9Db250YWluZXI+XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBDb250YWluZXIgfSBmcm9tICd+L3JleHQnO1xuXG5AUm91dGUoJy9jb3JlLWNvbmNlcHRzL2NvbXBvbmVudCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXh0Q29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPENvbnRhaW5lciBjbGFzc05hbWU9XCJtYWluIGNvbnRhaW5lciBzY3JvbGxhYmxlXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwibWItbWRcIj5Db21wb25lbnQ8L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5cbiAgICAgICAgQSBjb21wb25lbnQgaW4gRXh0ZW5zaW9uIFJlYWN0IGlzIHRoZSBjb21iaW5hdGlvbiBvZiBhIFJlYWN0IENvbXBvbmVudCBhbmQgYSBjb21wb25lbnQgY2xhc3MgdGhhdCBjb250cm9scyBhIHBvcnRpb24gb2YgdGhlIHNjcmVlbi5cbiAgICAgICAgSGVyZSBpcyBhbiBleGFtcGxlIG9mIGEgY29tcG9uZW50IHRoYXQgZGlzcGxheSBhIHNpbXBsZSBzdHJpbmc6XG4gICAgICA8L3A+XG4gICAgICA8cHJlIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG57YGltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnZXh0LXJlYWN0JztcblxuY2xhc3MgRGFzaGJvYXJkVmlldyBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxoMT57dGhpcy5wcm9wcy4kdmlldy50aXRsZX08L2gxPjtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgdmlldzogRGFzaGJvYXJkVmlld1xufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhc2hib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGl0bGUgPSAnRGFzaGJvYXJkJztcbiAgfVxufWB9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG4gICAgICAgIEV2ZXJ5IGNvbXBvbmVudCBiZWdpbnMgd2l0aCBhbiA8Y29kZT5AQ29tcG9uZW50PC9jb2RlPiBkZWNvcmF0b3IgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIDxlbT5tZXRhZGF0YTwvZW0+IG9iamVjdC5cbiAgICAgICAgVGhlIG1ldGFkYXRhIG9iamVjdCBkZXNjcmliZXMgaG93IHRoZSBSZWFjdCBDb21wb25lbnQgYW5kIGNvbXBvbmVudCBjbGFzcyB3b3JrIHRvZ2V0aGVyLlxuICAgICAgICBUaGF0J3MgbWVhbiB5b3UgY2FuIGFjY2VzcyBhbnkgcHJvcGVydHkgb3IgbWV0aG9kIG9mIGNvbXBvbmVudCBjbGFzcyB2aWEgPGNvZGU+dGhpcy5wcm9wcy4kdmlldzwvY29kZT4uXG4gICAgICA8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlxuICAgICAgICBBY3R1YWxseSwgd2l0aCB0aGUgYWJvdmUgZXhhbXBsZSwgaXQgY2FuIGJlIGltcGxlbWVudGVkIGxpa2UgdGhpczpcbiAgICAgIDwvcD5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntgaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnZXh0LXJlYWN0JztcblxuQENvbXBvbmVudCh7XG4gIHZpZXc6ICh7ICR2aWV3IH0pID0+IDxoMT57JHZpZXcudGl0bGV9PC9oMT5cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRpdGxlID0gJ0Rhc2hib2FyZCc7XG4gIH1cbn1gfVxuICAgICAgPC9wcmU+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPkV4dGVuc2lvbiBSZWFjdCBwcm92aWRlIGEgbmV3IHdheSB0byB3b3JrIHdpdGggc3RhdGU6PC9wPlxuICAgICAgPHByZSBjbGFzc05hbWU9XCJtYi1tZFwiPlxue2AvLyAuL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC52aWV3LmpzeFxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZXh0IGZyb20gJ2V4dGVuc2lvbi1yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaFZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBSZXh0LmluaXRpYWxTdGF0ZSh0aGlzLCB7XG4gICAgICBuYW1lOiBwcm9wcy5uYW1lXG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHRoaXMuc2V0TmFtZShuZXh0UHJvcHMubmFtZSk7XG4gIH1cbiAgLi4uXG59YH1cbiAgICAgIDwvcHJlPlxuICAgICAgPHA+XG4gICAgICAgIEluc3RlYWQgb2YgdXNpbmcgPGNvZGU+e2B0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUsIHByb3BzKSA9PiAoeyBuYW1lOiBwcm9wcy5uYW1lIH0pKWB9PC9jb2RlPiB0byB1cGRhdGUgdGhlIHN0YXRlLFxuICAgICAgICB5b3UgY2FuIHVzZSA8Y29kZT50aGlzLnNldE5hbWUocHJvcHMubmFtZSk8L2NvZGU+IHRvIG1ha2UgaXQgZWFzaWVyIHRvIHVuZGVyc3RhbmQgYW5kIG1vcmUgbmF0dXJhbCBieSB1c2luZyA8Y29kZT5SZXh0LmluaXRpYWxTdGF0ZTwvY29kZT4gZnVuY3Rpb24gdG8gZGVjbGFyZSB0aGUgc3RhdGUgaW4gY29uc3RydWN0b3IuXG4gICAgICA8L3A+XG4gICAgPC9Db250YWluZXI+XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBDb250YWluZXIgfSBmcm9tICd+L3JleHQnO1xuXG5AUm91dGUoJy9jb3JlLWNvbmNlcHRzL2RhdGEtcGFja2FnZScpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhUGFja2FnZSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxDb250YWluZXIgY2xhc3NOYW1lPVwibWFpbiBjb250YWluZXIgc2Nyb2xsYWJsZVwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLW1kXCI+RGF0YSBQYWNrYWdlPC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+VGhlIGRhdGEgcGFja2FnZSBpcyB3aGF0IGxvYWRzIGFuZCBzYXZlcyBhbGwgb2YgdGhlIGRhdGEgaW4geW91ciBhcHBsaWNhdGlvbi48L3A+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwibWItbWRcIj5Nb2RlbHM8L2gzPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5UaGUgY2VudGVycGllY2Ugb2YgdGhlIGRhdGEgcGFja2FnZSBpcyBgTW9kZWxgIHdoaWNoIHJlcHJlc2VudHMgYW4gZW50aXR5IGluIGFuIGFwcGxpY2F0aW9uLjwvcD5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi1tZFwiPlN0b3JlczwvaDM+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlRoZSA8Y29kZT5TdG9yZTwvY29kZT4gY2xhc3MgZW5jYXBzdWxhdGVzIGEgY2xpZW50IHNpZGUgY2FjaGUgb2YgPGNvZGU+TW9kZWw8L2NvZGU+IG9iamVjdHMuPC9wPlxuICAgICAgPHByZSBjbGFzc05hbWU9XCJtYi1tZFwiPlxue2BpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ2V4dC1yZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgU3RvcmUoe1xuICBzdG9yZUlkOiAnQ2FyZFN0b3JlJyxcbiAgcHJveHk6IHtcbiAgICB1cmw6ICcvZGF0YS9jYXJkLmpzb24nXG4gIH1cbn0pYH1cbiAgICAgIDwvcHJlPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5cbiAgICAgICAgSW4gdGhlIGV4YW1wbGUgYWJvdmUgd2UgY29uZmlndXJlZCBhbiBBSkFYIHByb3h5IHRvIGxvYWQgZGF0YSBmcm9tIHRoZSB1cmwgPGNvZGU+L2FwaS91c2VyL3NlYXJjaDwvY29kZT4uXG4gICAgICAgIFN0b3JlcyBsb2FkIGRhdGEgdmlhIDxjb2RlPnByb3h5PC9jb2RlPiB3aXRoIHRoaXMgZm9sbG93aW5nIHN0cnVjdHVyZTpcbiAgICAgIDwvcD5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntge1xuICB1cmw6ICAgIC8qIFRoZSBVUkwgZnJvbSB3aGljaCB0byByZXF1ZXN0IHRoZSBkYXRhIG9iamVjdCAqLyxcbiAgbWV0aG9kOiAvKiBUaGUgZGVmYXVsdCBIVFRQIG1ldGhvZCB0byBiZSB1c2VkIGZvciByZXF1ZXN0cy4gSWYgbm90IHNldCwgR0VUIHdpbGwgYmUgdXNlZC4gKi9cbiAgcGFyYW1zOiAvKiBSZXF1ZXN0IHBhcmFtZXRlcnMgc2VudCBhcyBqc29uIGRhdGEgKi9cbiAgcmVhZGVyOiAvKiBVc2UgdG8gZGVjb2RlIHRoZSBzZXJ2ZXIncyByZXNwb25zZSAqL1xufWB9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+U3RvcmVzIGNhbiBhbHNvIGxvYWQgZGF0YSBpbmxpbmUuIEludGVybmFsbHksIFN0b3JlIGNvbnZlcnRzIGVhY2ggb2YgdGhlIG9iamVjdHMgd2UgcGFzcyBpbiBhcyBjZmctZGF0YSBpbnRvIE1vZGVsIGluc3RhbmNlczo8L3A+XG4gICAgICA8cHJlIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG57YGltcG9ydCB7IFN0b3JlIH0gZnJvbSAnZXh0LXJlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBTdG9yZSh7XG4gIHN0b3JlSWQ6ICdVc2VyU3RvcmUnLFxuICBkYXRhOiBbXG4gICAge2ZpcnN0TmFtZTogJ1BldGVyJywgICBsYXN0TmFtZTogJ1ZlbmttYW4nfSxcbiAgICB7Zmlyc3ROYW1lOiAnRWdvbicsICAgIGxhc3ROYW1lOiAnU3BlbmdsZXInfSxcbiAgICB7Zmlyc3ROYW1lOiAnUmF5JywgICAgIGxhc3ROYW1lOiAnU3RhbnR6J30sXG4gICAge2ZpcnN0TmFtZTogJ1dpbnN0b24nLCBsYXN0TmFtZTogJ1plZGRlbW9yZSd9XG4gIF1cbn0pYH1cbiAgICAgIDwvcHJlPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5Ob3csIGp1c3QgYmluZCBhIHN0b3JlIHRvIHRoZSA8Y29kZT5Db21wb25lbnQ8L2NvZGU+OjwvcD5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntgaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGJpbmQgfSBmcm9tICdleHQtcmVhY3QnO1xuaW1wb3J0IENhcmRTdG9yZSBmcm9tICd+L3N0b3Jlcy9jYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIENhcmRTdG9yZS5jbGVhckRhdGEoKTtcbiAgICBDYXJkU3RvcmUubG9hZCgpO1xuICAgIENhcmRTdG9yZS5zdWJzY3JpYmUodGhpcy5yZWxvYWQpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgQ2FyZFN0b3JlLnVuc3Vic2NyaWJlKHRoaXMucmVsb2FkKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCByZWNvcmRzID0gQ2FyZFN0b3JlLmdldERhdGEoKTtcbiAgICByZXR1cm4gPHNlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyeC1ncmlkLWhlYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyByeC1ncmlkLWhlYWRlci1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ4LWdyaWQtY29sdW1uLWhlYWRlciB0ZXh0LXNtLWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6JzIwJSd9fT5JRDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicngtZ3JpZC1jb2x1bW4taGVhZGVyIHRleHQtc20tY2VudGVyXCIgc3R5bGU9e3t3aWR0aDonMjAlJ319Pk5hbWU8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ4LWdyaWQtY29sdW1uLWhlYWRlciB0ZXh0LXNtLWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6JzIwJSd9fT5UeXBlPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyeC1ncmlkLWNvbHVtbi1oZWFkZXIgdGV4dC1zbS1jZW50ZXJcIiBzdHlsZT17e3dpZHRoOicyMCUnfX0+QXJtb3I8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ4LWdyaWQtY29sdW1uLWhlYWRlciB0ZXh0LXNtLWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6JzIwJSd9fT5XZWFwb248L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyeC1ncmlkLWJvZHlcIiBzdHlsZT17e292ZXJmbG93Oid2aXNpYmxlJ319PlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyeC1ncmlkLXZpZXdcIj5cbiAgICAgICAgICB7cmVjb3Jkcy5tYXAocmVjb3JkID0+IDxhcnRpY2xlIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyByeC1ncmlkLXJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyeC1ncmlkLWNlbGxcIiBzdHlsZT17e3dpZHRoOicyMCUnfX0+e3JlY29yZC5nZXQoJ0lkJyl9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ4LWdyaWQtY2VsbFwiIHN0eWxlPXt7d2lkdGg6JzIwJSd9fT57cmVjb3JkLmdldCgnTmFtZScpfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyeC1ncmlkLWNlbGxcIiBzdHlsZT17e3dpZHRoOicyMCUnfX0+e3JlY29yZC5nZXQoJ1R5cGUnKX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicngtZ3JpZC1jZWxsXCIgc3R5bGU9e3t3aWR0aDonMjAlJ319PntyZWNvcmQuZ2V0KCdBcm1vclVzYWJsZScpfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyeC1ncmlkLWNlbGxcIiBzdHlsZT17e3dpZHRoOicyMCUnfX0+e3JlY29yZC5nZXQoJ1dlYXBvblVzYWJsZScpfTwvZGl2PlxuICAgICAgICAgIDwvYXJ0aWNsZT4pfVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9zZWN0aW9uPjtcbiAgfVxuXG4gIEBiaW5kXG4gIHJlbG9hZCgpIHtcbiAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gIH1cbn1gfVxuICAgICAgPC9wcmU+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi1tZFwiPlxuICAgICAgICBJbiB0aGlzIGFib3ZlIGV4YW1wbGUsIHdlIHVzZSA8Y29kZT5zdWJzY3JpYmU8L2NvZGU+IHRvIHVwZGF0ZSB0aGUgY29tcG9uZW50IHdoZW5ldmVyIGRhdGEncyBjaGFuZ2VkLlxuICAgICAgICBCZWNhdXNlIFN0b3JlIGNvbnZlcnQgZGF0YSB0byBNb2RlbCB0aGVuIHlvdSBuZWVkIHRvIHVzZSA8Y29kZT5nZXQ8L2NvZGU+IHRvIGFjY2VzcyBkYXRhLlxuICAgICAgPC9wPlxuICAgIDwvQ29udGFpbmVyPlxuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29udGFpbmVyIH0gZnJvbSAnfi9yZXh0JztcblxuQFJvdXRlKCcvY29yZS1jb25jZXB0cy9zY3JlZW4tbmF2aWdhdGlvbicpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JlZW5OYXZpZ2F0aW9uIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPENvbnRhaW5lciBjbGFzc05hbWU9XCJtYWluIGNvbnRhaW5lciBzY3JvbGxhYmxlXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwibWItbWRcIj5TY3JlZW4gTmF2aWdhdGlvbjwvaDE+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWItbWRcIj5cbiAgICAgICAgPGxpPjxzdHJvbmc+PGNvZGU+Um91dGU8L2NvZGU+PC9zdHJvbmc+IGRlY29yYXRvciBpcyBtb3N0IGJhc2ljIHJlc3BvbnNpYmlsaXR5IGlzIHRvIHJlbmRlciBVSSB3aGVuIGEgbG9jYXRpb24gbWF0Y2hlcyB0aGUgcm91dGXigJlzIHBhdGguPC9saT5cbiAgICAgICAgPGxpPjxzdHJvbmc+PGNvZGU+TGluazwvY29kZT48L3N0cm9uZz4gcHJvdmlkZXMgZGVjbGFyYXRpdmUsIGFjY2Vzc2libGUgbmF2aWdhdGlvbiBhcm91bmQgeW91ciBhcHBsaWNhdGlvbi48L2xpPlxuICAgICAgICA8bGk+PHN0cm9uZz48Y29kZT5IYXNoUm91dGVyPC9jb2RlPjwvc3Ryb25nPiB1c2VzIHRoZSBoYXNoIHBvcnRpb24gb2YgdGhlIFVSTCAoaS5lLiB3aW5kb3cubG9jYXRpb24uaGFzaCkgdG8ga2VlcCB5b3VyIFVJIGluIHN5bmMgd2l0aCB0aGUgVVJMLjwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPHByZSBjbGFzc05hbWU9XCJtYi1tZFwiPlxue2AvLyBtYWluLmpzXG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBSZXh0IGZyb20gJ2V4dC1yZWFjdCc7XG5pbXBvcnQgVmlld3BvcnQgZnJvbSAnLi9jb21wb25lbnRzL3ZpZXdwb3J0JztcblxuUmV4dC5hcHBsaWNhdGlvbih7XG4gIHZpZXdzOiBbXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL3NlYXJjaCcpLFxuICAgIHJlcXVpcmUoJy4vY29tcG9uZW50cy9kZXRhaWxzJyksXG4gICAgcmVxdWlyZSgnLi9jb21wb25lbnRzL25vdGZvdW5kJyksXG4gIF0sXG4gIGxhdW5jaDogKCkgPT4gPFZpZXdwb3J0IC8+XG59KTtcblxuUmV4dC5sYXVuY2goPFZpZXdwb3J0IC8+KTtcbmB9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntgLy8gLi9jb21wb25lbnRzL3ZpZXdwb3J0LmpzXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgSGFzaFJvdXRlciB9IGZyb20gJ2V4dC1yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZXdwb3J0KCkge1xuICByZXR1cm4gPHNlY3Rpb24+XG4gICAgPExpbmsgdG89XCIvXCI+RGFzaGJvYXJkPC9MaW5rPlxuICAgIDxMaW5rIHRvPVwiL3NlYXJjaFwiPlNlYXJjaDwvTGluaz5cbiAgICA8TGluayB0bz1cIi9kZXRhaWxzL2h1eW5ndXllblwiPkRldGFpbHM8L0xpbms+XG4gICAgPEhhc2hSb3V0ZXIgLz5cbiAgPC9zZWN0aW9uPlxufVxuYH1cbiAgICAgIDwvcHJlPlxuICAgICAgPHByZSBjbGFzc05hbWU9XCJtYi1tZFwiPlxue2AvLyAuL2NvbXBvbmVudHMvc2VhcmNoLmpzXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIENvbXBvbmVudCB9IGZyb20gJ2V4dC1yZWFjdCc7XG5cbkBSb3V0ZSgnL3NlYXJjaCcpXG5AQ29tcG9uZW50KHtcbiAgdmlldzogKCkgPT4gPHNlY3Rpb24gLz5cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2ggeyB9XG5gfVxuICAgICAgPC9wcmU+XG4gICAgICA8cHJlIGNsYXNzTmFtZT1cIm1iLW1kXCI+XG57YC8vIC4vY29tcG9uZW50cy9kZXRhaWxzLmpzXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIENvbXBvbmVudCB9IGZyb20gJ2V4dC1yZWFjdCc7XG5cbkBSb3V0ZSgnL2RldGFpbHMvOm5hbWUnKVxuQENvbXBvbmVudCh7XG4gIHZpZXc6ICh7IHBhcmFtcyB9KSA9PiA8aDE+e3BhcmFtcy5uYW1lfTwvaDE+XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV0YWlscyB7IH1cbmB9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbntgLy8gLi9jb21wb25lbnRzL25vdGZvdW5kLmpzXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAnZXh0LXJlYWN0JztcblxuQFJvdXRlKCcqJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdEZvdW5kIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGgxPid7dGhpcy5wcm9wcy5wYXJhbXMucm91dGV9JyBkb2Vzbid0IGV4aXN0PC9oMT5cbiAgfVxufWB9XG4gICAgICA8L3ByZT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIENvbXBvbmVudCB9IGZyb20gJ34vcmV4dCc7XG5pbXBvcnQgQ2FyZFZpZXcgZnJvbSAnLi9jYXJkcy52aWV3JztcblxuQFJvdXRlKCcvZXhhbXBsZS9jYXJkcycpXG5AQ29tcG9uZW50KHtcbiAgc3RvcmVzOiBbICdDYXJkU3RvcmUnIF0sXG4gIHZpZXc6IENhcmRWaWV3XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCB7IH0iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdyaWQgfSBmcm9tICd+L3JleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkVmlldyBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLnN0b3Jlcy5DYXJkU3RvcmUubG9hZCgpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7Q2FyZFN0b3JlIH0gPSB0aGlzLnByb3BzLnN0b3JlcztcbiAgICByZXR1cm4gPEdyaWQgc3RvcmU9e0NhcmRTdG9yZX0+XG4gICAgICA8ZGl2IGhlYWRlcj1cIklkXCIgZGF0YUluZGV4PVwiSWRcIiAvPlxuICAgICAgPGRpdiBoZWFkZXI9XCJOYW1lXCIgZGF0YUluZGV4PVwiTmFtZVwiIC8+XG4gICAgICA8ZGl2IGhlYWRlcj1cIlR5cGVcIiBkYXRhSW5kZXg9XCJUeXBlXCIgLz5cbiAgICA8L0dyaWQ+XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIENvbXBvbmVudCB9IGZyb20gJ34vcmV4dCc7XG5cbkBSb3V0ZSgnL2V4YW1wbGUvZGFzaGJvYXJkJylcbkBDb21wb25lbnQoe1xuICB2aWV3OiAoeyAkdmlldyB9KSA9PiA8aDE+eyR2aWV3LnRpdGxlfTwvaDE+XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFzaGJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50aXRsZSA9ICdEYXNoYm9hcmQnO1xuICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBDb21wb25lbnQgfSBmcm9tICd+L3JleHQnO1xuXG5AUm91dGUoJy9leGFtcGxlL2RldGFpbHMvOm5hbWUnKVxuQENvbXBvbmVudCh7XG4gIHZpZXc6ICh7IHBhcmFtcyB9KSA9PiA8aDE+e3BhcmFtcy5uYW1lfTwvaDE+XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV0YWlscyB7IH0iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAnfi9yZXh0JztcblxuQFJvdXRlKCcqJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdEZvdW5kIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGgxPid7dGhpcy5wcm9wcy5wYXJhbXMucm91dGV9JyBkb2Vzbid0IGV4aXN0PC9oMT5cbiAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29tcG9uZW50IH0gZnJvbSAnfi9yZXh0JztcblxuQFJvdXRlKCcvZXhhbXBsZS9zZWFyY2gnKVxuQENvbXBvbmVudCh7XG4gIHZpZXc6ICgpID0+IDxzZWN0aW9uIC8+XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFzaGJvYXJkIHsgfSIsImltcG9ydCB7IFN0b3JlIH0gZnJvbSAnfi9yZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgU3RvcmUoe1xuICBzdG9yZUlkOiAnQ2FyZFN0b3JlJyxcbiAgcHJveHk6IHtcbiAgICB1cmw6ICcvZGF0YS9jYXJkLmpzb24nXG4gIH1cbn0pIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29udGFpbmVyIH0gZnJvbSAnfi9yZXh0JztcblxuQFJvdXRlKCcvJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdldHRpbmdTdGFydGVkIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPENvbnRhaW5lciBjbGFzc05hbWU9XCJtYWluIGNvbnRhaW5lciBzY3JvbGxhYmxlXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwibWItbWRcIj5HZXR0aW5nIFN0YXJ0ZWQ8L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWRcIj5cbiAgICAgICAgRXh0ZW5zaW9uIFJlYWN0IGlzIGEgbGlicmFyeSB0aGF0IGJ1aWxkIG9uIHRvcCBvZiBSZWFjdCwgaGVscGluZyB5b3UgYnVpbGQgZGF0YS1pbnRlbnNpdmUsIGNyb3NzLXBsYXRmb3JtIHdlYiBhcHBzIGZvciBkZXNrdG9wcywgdGFibGV0cywgYW5kIHNtYXJ0cGhvbmVzLlxuICAgICAgPC9wPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLW1kXCI+UXVpY2sgU3RhcnQ8L2gyPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLW1kXCI+MS4gU2V0dXAgYSBkZXZlbG9wbWVudCBlbnZpcm9tZW50PC9oMz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+VXNlIDxjb2RlPm5wbTwvY29kZT4gb3IgPGNvZGU+eWFybjwvY29kZT4gdG8gaW5zdGFsbCBmb2xsb3dpbmcgZGVwZW5kZW5jaWVzOjwvcD5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtYi1tZFwiPlxuICAgICAgICA8bGk+PGNvZGU+YmFiZWwtcG9seWZpbGw8L2NvZGU+PC9saT5cbiAgICAgICAgPGxpPjxjb2RlPmJhYmVsLXByZXNldC1lbnY8L2NvZGU+PC9saT5cbiAgICAgICAgPGxpPjxjb2RlPmJhYmVsLXByZXNldC1yZWFjdDwvY29kZT48L2xpPlxuICAgICAgICA8bGk+PGNvZGU+ZDM8L2NvZGU+PC9saT5cbiAgICAgICAgPGxpPjxjb2RlPnJlYWN0PC9jb2RlPjwvbGk+XG4gICAgICAgIDxsaT48Y29kZT5yZWFjdC1kb208L2NvZGU+PC9saT5cbiAgICAgICAgPGxpPjxjb2RlPnJ4anM8L2NvZGU+PC9saT5cbiAgICAgICAgPGxpPjxjb2RlPmV4dC1yZWFjdDwvY29kZT48L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi1tZFwiPjIuIENyZWF0ZSBhIG5ldyBwcm9qZWN0PC9oMz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+VGhlIGZvbGxvd2luZyBpcyB0aGUgcmVjb21tZW5kZWQgZGlyZWN0b3J5IHN0cnVjdHVyZSBmb3IgYW4gRXh0ZW5zaW9uIFJlYWN0IGFwcGxpY2F0aW9uOjwvcD5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWItbWRcIj5cbiAgICAgICAgKy0tIG5vZGVfbW9kdWxlczogTlBNIGNvbXBvbmVudHM8YnIgLz5cbiAgICAgICAgKy0tIGRpc3Q8YnIgLz5cbiAgICAgICAgfCAgICstLSBhcHAubWluLmNzczxiciAvPlxuICAgICAgICB8ICAgKy0tIGFwcC5taW4uanM8YnIgLz5cbiAgICAgICAgfCAgICstLSBmcmFtZXdvcmsubWluLmpzPGJyIC8+XG4gICAgICAgICstLSBzcmM8YnIgLz5cbiAgICAgICAgfCAgICstLSBjc3M8YnIgLz5cbiAgICAgICAgfCAgIHwgICArLS0gX3ZhcmlhYmxlcy5zY3NzOiBhcHBsaWNhdGlvbiBzdHlsZXMgY29uc3RhbnQgdmFsdWVzPGJyIC8+XG4gICAgICAgIHwgICB8ICAgKy0tIGFwcC5zY3NzOiBhcHBsaWNhdGlvbiBzdHlsZXM8YnIgLz5cbiAgICAgICAgfCAgICstLSBqczxiciAvPlxuICAgICAgICB8ICAgfCAgICstLSBjb21tb246IGNvZGUgb2Ygc2hhcmVkIGZ1bmN0aW9ucyBvciBzaGFyZWQgY29tcG9uZW50czxiciAvPlxuICAgICAgICB8ICAgfCAgICstLSBjb21wb25lbnRzOiBjb2RlIChzY3JpcHRzIGFuZCB2aWV3cykgb2YgZXZlcnkgZmVhdHVyZSBzaG91bGQgYmUgYSBzdWItZGlyZWN0b3J5PGJyIC8+XG4gICAgICAgIHwgICB8ICAgKy0tIHNlcnZpY2VzOiBjb2RlIG9mIHNlcnZpY2VzPGJyIC8+XG4gICAgICAgIHwgICB8ICAgKy0tIHN0b3JlczogY29kZSBvZiBzdG9yZXM8YnIgLz5cbiAgICAgICAgfCAgIHwgICArLS0gYXBwLmpzOiBtYWluIHNjcmlwdDxiciAvPlxuICAgICAgICArLS0gZ3VscGZpbGUuYmFiZWwuanM6IGJ1aWxkIHNjcmlwdHMgKG9yIHdlYnBhY2suY29uZmlnLmpzIGlmIHlvdSBwcmVmZXIpPGJyIC8+XG4gICAgICAgICstLSBpbmRleC5odG1sPGJyIC8+XG4gICAgICAgICstLSBwYWNrYWdlLmpzb246IE5QTSBwYWNrYWdlIGRlZmluaXRpb248YnIgLz5cbiAgICAgICAgKy0tIHNlcnZlci5qczogY29kZSBvZiBsb2NhbCB3ZWIgc2VydmVyIChFeHByZXNzSlMpPGJyIC8+XG4gICAgICA8L3ByZT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+TGV04oCZcyBzdGFydCBldmFsdWF0aW5nIHRoZSBhcHBsaWNhdGlvbiBieSBsb29raW5nIGF0IDxjb2RlPmluZGV4Lmh0bWw8L2NvZGU+PC9wPlxuICAgICAgPHByZSBjbGFzc05hbWU9XCJtYi1tZFwiPlxue2A8IS0tIGluZGV4Lmh0bWwgLS0+XG48IURPQ1RZUEUgaHRtbD5cbjxodG1sPlxuPGhlYWQ+XG48bWV0YSBjaGFyc2V0PVwidXRmLThcIiAvPlxuPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuPHRpdGxlPkV4dGVuc2lvbiBSZWFjdCBBcHBsaWNhdGlvbjwvdGl0bGU+XG48bGluayBocmVmPVwiL25vZGUtbW9kdWxlcy9leHQtcmVhY3QvY3NzL3JleHQubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuPC9oZWFkPlxuPGJvZHk+XG48c2NyaXB0IHNyYz1cImFwcC5qc1wiPjwvc2NyaXB0PlxuPC9ib2R5PlxuPC9odG1sPmB9XG4gICAgICA8L3ByZT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1kXCI+VG8gbGF1bmNoIHlvdXIgYXBwLCBhZGQgdGhlIGZvbGxvd2luZyB0byB5b3VyIDxjb2RlPmFwcC5qczwvY29kZT4gZmlsZTwvcD5cbiAgICAgIDxwcmU+XG57YC8vIGFwcC5qc1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJleHQgZnJvbSAnZXh0LXJlYWN0JztcbmltcG9ydCBWaWV3cG9ydCBmcm9tICcuL2NvbXBvbmVudHMvdmlld3BvcnQvdmlld3BvcnQnO1xuXG5SZXh0LmFwcGxpY2F0aW9uKHtcbiAgbGF1bmNoOiAoKSA9PiA8Vmlld3BvcnQgLz5cbn0pO2B9XG4gICAgICA8L3ByZT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIsIEhhc2hSb3V0ZXIsIExpbmsgfSBmcm9tICd+L3JleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWV3cG9ydCgpIHtcbiAgcmV0dXJuIDxDb250YWluZXI+XG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJjb250YWluZXJcIj48aDE+RXh0ZW5zaW9uIFJlYWN0PC9oMT48L2hlYWRlcj5cbiAgICA8Q29udGFpbmVyIGxheW91dD1cImNvbHVtblwiPlxuICAgICAgPGFzaWRlIHN0eWxlPXt7d2lkdGg6MzAwfX0+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXIgbmF2XCI+XG4gICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL1wiIHRleHQ9XCJHRVRUSU5HIFNUQVJURURcIiAvPjwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LXRleHRcIj5DT1JFIENPTkNFUFRTPC9zcGFuPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+PExpbmsgdG89XCIvY29yZS1jb25jZXB0cy9jb21wb25lbnRcIiB0ZXh0PVwiQ29tcG9uZW50XCIgLz48L2xpPlxuICAgICAgICAgICAgICA8bGk+PExpbmsgdG89XCIvY29yZS1jb25jZXB0cy9zY3JlZW4tbmF2aWdhdGlvblwiIHRleHQ9XCJTY3JlZW4gTmF2aWdhdGlvblwiIC8+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL2NvcmUtY29uY2VwdHMvZGF0YS1wYWNrYWdlXCIgdGV4dD1cIkRhdGEgUGFja2FnZVwiIC8+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+PExpbmsgdG89XCIvYXJjaGl0ZWN0dXJlXCIgdGV4dD1cIkFSQ0hJVEVDVFVSRVwiIC8+PC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtdGV4dFwiPlVJIENPTVBPTkVOVFM8L3NwYW4+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT48TGluayB0bz1cIi91aS1jb21wb25lbnRzL2dyaWRzXCIgdGV4dD1cIkdyaWRzXCIgLz48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9hc2lkZT5cbiAgICAgIDxDb250YWluZXI+PEhhc2hSb3V0ZXIgLz48L0NvbnRhaW5lcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPjxwPiZjb3B5OyAyMDE3IGh1eXRyb25nbmd1eWVuPC9wPjwvZm9vdGVyPlxuICA8L0NvbnRhaW5lcj5cbn0iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBFeHQgZnJvbSAnfi9jb3JlL2V4dCc7XG5pbXBvcnQgTGlzdCBmcm9tICd+L2NvcmUvbGlzdCc7XG5pbXBvcnQgU3RvcmVNYW5hZ2VyIGZyb20gJ34vZGF0YS9zdG9yZS1tYW5hZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnID0+IENvbnRyb2xsZXIgPT4ge1xuICBjb25zdCBXcmFwcGVkQ29tcG9uZW50ID0gY29uZmlnLnZpZXc7XG5cbiAgcmV0dXJuIGNsYXNzIEhvY0NvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICBjb25zdCBzdG9yZXMgPSBMaXN0KGNvbmZpZy5zdG9yZXMpLnJlZHVjZSgoc3RvcmVzLCBzdG9yZUlkKSA9PiB7XG4gICAgICAgICAgICAgIHN0b3Jlc1tzdG9yZUlkXSA9IFN0b3JlTWFuYWdlci5nZXQoc3RvcmVJZCk7XG4gICAgICAgICAgICAgIHJldHVybiBzdG9yZXM7XG4gICAgICAgICAgICB9LCB7fSksXG4gICAgICAgICAgICBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIocHJvcHMpO1xuXG4gICAgICBjb250cm9sbGVyLnN0b3JlcyA9IHN0b3JlcztcblxuICAgICAgRXh0LmluaXRpYWxTdGF0ZSh0aGlzLCB7XG4gICAgICAgIHN0b3JlcyxcbiAgICAgICAgW2NvbmZpZy5jb21wb25lbnRBcyB8fCAnJHZpZXcnXTogY29udHJvbGxlclxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50IHsuLi50aGlzLnN0YXRlfSB7Li4udGhpcy5wcm9wc30gLz47XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBFeHQgZnJvbSAnfi9jb3JlL2V4dCc7XG5cbmNvbnN0IExBWU9VVF9DTEFTUyA9IHtcbiAgJ2NvbHVtbic6ICdmbGV4LXJvdycsXG4gICdyb3cnOiAnZmxleC1jb2x1bW4nLFxuICAnZml0JzogJycsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIoeyBjbGFzc05hbWUgPSAnJywgbGF5b3V0ID0gJ3JvdycsIGNoaWxkcmVuLCAuLi5vdGhlcnMgfSkge1xuICByZXR1cm4gPHNlY3Rpb24gY2xhc3NOYW1lPXtFeHQuY2xhc3NOYW1lKCdkLWZsZXgnLCBMQVlPVVRfQ0xBU1NbbGF5b3V0XSwgY2xhc3NOYW1lKX0gey4uLm90aGVyc30+e2NoaWxkcmVufTwvc2VjdGlvbj5cbn0iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ34vY29tcG9uZW50cy9jb250YWluZXInO1xuaW1wb3J0IEdyaWRSb3cgZnJvbSAnLi9yb3cnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkQm9keSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uRGF0YUNoYW5nZSA9ICgpID0+IHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuc3RvcmUuc3Vic2NyaWJlKHRoaXMub25EYXRhQ2hhbmdlKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuc3RvcmUudW5zdWJzY3JpYmUodGhpcy5vbkRhdGFDaGFuZ2UpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29sdW1ucyA9IFtdLCBzdG9yZSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gPENvbnRhaW5lciBsYXlvdXQ9XCJyb3dcIiBjbGFzc05hbWU9XCJyeC1ncmlkLWJvZHlcIj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJ4LWdyaWQtdmlld1wiPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OjF9fSAvPlxuICAgICAgICB7c3RvcmUuZ2V0UmVjb3JkcygpLm1hcCgocmVjb3JkLCByb3dJbmRleCkgPT4gPEdyaWRSb3cgY29sdW1ucz17Y29sdW1uc30gcmVjb3JkPXtyZWNvcmR9IHJvd0luZGV4PXtyb3dJbmRleH0gLz4pfVxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvQ29udGFpbmVyPlxuICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBFeHQgZnJvbSAnfi9jb3JlL2V4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdyaWRDZWxsKHsgY2xhc3NOYW1lID0gJycsIHJlbmRlciA9IHZhbHVlID0+IHZhbHVlLCByZWNvcmQsIGRhdGFJbmRleCwgcm93SW5kZXgsIC4uLm90aGVycyB9KSB7XG4gIHJldHVybiA8c2VjdGlvbiBjbGFzc05hbWU9e0V4dC5jbGFzc05hbWUoJ3J4LWdyaWQtY2VsbCcsIGNsYXNzTmFtZSl9IHN0eWxlPXt7ZmxleDoxfX0gey4uLm90aGVyc30+XG4gICAge3JlbmRlcihkYXRhSW5kZXggPyByZWNvcmQuZ2V0KGRhdGFJbmRleCkgOiAnJywgcmVjb3JkLCBkYXRhSW5kZXgsIHJvd0luZGV4KX1cbiAgPC9zZWN0aW9uPlxufSIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEV4dCBmcm9tICd+L2NvcmUvZXh0JztcbmltcG9ydCBMaXN0IGZyb20gJ34vY29yZS9saXN0JztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ34vY29tcG9uZW50cy9jb250YWluZXInO1xuaW1wb3J0IEdyaWRIZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IEdyaWRCb2R5IGZyb20gJy4vYm9keSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyaWQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgRXh0LmluaXRpYWxTdGF0ZSh0aGlzLCB7XG4gICAgICBjb2x1bW5zOiBMaXN0KFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkocHJvcHMuY2hpbGRyZW4pKS5tYXAoY2hpbGQgPT4gY2hpbGQucHJvcHMpLmNvbGxlY3QoKVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RvcmUsIGNsYXNzTmFtZSwgLi4ub3RoZXJzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiA8Q29udGFpbmVyIGxheW91dD1cInJvd1wiIGNsYXNzTmFtZT17RXh0LmNsYXNzTmFtZSgncngtZ3JpZCcsIGNsYXNzTmFtZSl9IHsuLi5vdGhlcnN9PlxuICAgICAgPEdyaWRIZWFkZXIgey4uLnRoaXMuc3RhdGV9IC8+XG4gICAgICA8R3JpZEJvZHkgc3RvcmU9e3N0b3JlfSB7Li4udGhpcy5zdGF0ZX0gLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRXh0IGZyb20gJ34vY29yZS9leHQnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnfi9jb21wb25lbnRzL2NvbnRhaW5lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdyaWRIZWFkZXIoeyBjb2x1bW5zID0gW10gfSkge1xuICByZXR1cm4gPHNlY3Rpb24gY2xhc3NOYW1lPVwicngtZ3JpZC1oZWFkZXJcIj5cbiAgICA8Q29udGFpbmVyIGxheW91dD1cImNvbHVtblwiIGNsYXNzTmFtZT1cInJ4LWdyaWQtaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAge2NvbHVtbnMubWFwKCh7IGhlYWRlciA9ICcnLCBjbGFzc05hbWUgPSAnJywgLi4ub3RoZXJzIH0pID0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtFeHQuY2xhc3NOYW1lKCdyeC1ncmlkLWhlYWRlci1jb2x1bW4gdGV4dC1jZW50ZXInLCBjbGFzc05hbWUpfSBzdHlsZT17e2ZsZXg6MX19IHsuLi5vdGhlcnN9PlxuICAgICAgICAgIHtoZWFkZXJ9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpFeHQuU0NST0xMX1dJRFRIfX0gLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9zZWN0aW9uPlxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICd+L2NvbXBvbmVudHMvY29udGFpbmVyJztcbmltcG9ydCBHcmlkQ2VsbCBmcm9tICcuL2NlbGwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHcmlkUm93KHsgY29sdW1ucyA9IFtdLCAuLi5vdGhlcnMgfSkge1xuICByZXR1cm4gPENvbnRhaW5lciBsYXlvdXQ9XCJjb2x1bW5cIiBjbGFzc05hbWU9XCJyeC1ncmlkLXJvd1wiPlxuICAgIHtjb2x1bW5zLm1hcChjb2x1bW4gPT4gPEdyaWRDZWxsIHsuLi5jb2x1bW59IHsuLi5vdGhlcnN9IC8+KX1cbiAgPC9Db250YWluZXI+XG59IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgRXh0IGZyb20gJ34vY29yZS9leHQnO1xuaW1wb3J0IExpc3QgZnJvbSAnfi9jb3JlL2xpc3QnO1xuLy8gaW1wb3J0IE9ic2VydmFibGUgZnJvbSAnfi9yZWFjdGl2ZS9vYnNlcnZhYmxlJztcblxuY29uc3QgUk9VVEVTID0ge30sXG4gICAgICBnZXRSb3V0ZSA9ICgpID0+IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKSB8fCAnLycsXG4gICAgICBnZXRSb3V0ZVBhdGggPSByb3V0ZSA9PiByb3V0ZS5zcGxpdCgnLycpO1xuXG5leHBvcnQgZnVuY3Rpb24gUm91dGUocm91dGUpIHtcbiAgcmV0dXJuIGNvbXAgPT4ge1xuICAgIFJPVVRFU1tyb3V0ZV0gPSB7XG4gICAgICByb3V0ZSxcbiAgICAgIGNvbXAsXG4gICAgICBwYXRoOiBnZXRSb3V0ZVBhdGgocm91dGUpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBMaW5rKHsgdG8sIGNsYXNzTmFtZSA9ICcnLCBhY3RpdmVDbGFzc05hbWUgPSAnYWN0aXZlJywgdGV4dCwgY2hpbGRyZW4sIC4uLm90aGVycyB9KSB7XG4gIHJldHVybiA8YSBocmVmPXtgIyR7dG99YH0gY2xhc3NOYW1lPXtFeHQuY2xhc3NOYW1lKCduYXYtbGluaycsIGNsYXNzTmFtZSwgeyBbYWN0aXZlQ2xhc3NOYW1lXTogdG8gPT09IGdldFJvdXRlKCkgfSl9IHsuLi5vdGhlcnN9PlxuICAgIHt0ZXh0IHx8IGNoaWxkcmVufVxuICA8L2E+XG59XG5cbmV4cG9ydCBjbGFzcyBIYXNoUm91dGVyIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIEV4dC5pbml0aWFsU3RhdGUodGhpcywgbWF0Y2hQYXRoKCkpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgKCF3aW5kb3cubG9jYXRpb24uaGFzaCkgJiYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJy8nKTtcbiAgICBPYnNlcnZhYmxlLmZyb21FdmVudCh3aW5kb3csICdoYXNoY2hhbmdlJykuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0U3RhdGUobWF0Y2hQYXRoKCkpKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJvdXRlLCBjb21wLCBwYXJhbXMgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAoIWNvbXApIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0NvbXBvbmVudCBub3QgZm91bmQhJyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChjb21wLCB7IHJvdXRlLCBwYXJhbXMgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWF0Y2hQYXRoKCkge1xuICBjb25zdCBjdXJyZW50Um91dGUgPSBnZXRSb3V0ZSgpLFxuICAgICAgICBwYXJhbXMgPSB7IHJvdXRlOiBjdXJyZW50Um91dGUgfTtcblxuICAvLyBiYXNpYyByb3V0ZSAod2l0aG91dCBwYXJhbXMpXG4gIGlmIChST1VURVNbY3VycmVudFJvdXRlXSkge1xuICAgIHJldHVybiB7IHJvdXRlOiBjdXJyZW50Um91dGUsIGNvbXA6IFJPVVRFU1tjdXJyZW50Um91dGVdLmNvbXAsIHBhcmFtcyB9O1xuICB9XG5cbiAgLy8gYWR2YW5jZWQgcm91dGUgKHdpdGggcGFyYW1zKVxuICBjb25zdCBjdXJyZW50UGF0aCA9IGdldFJvdXRlUGF0aChjdXJyZW50Um91dGUpO1xuICBmb3IobGV0IHJvdXRlIGluIFJPVVRFUykge1xuICAgIGNvbnN0IG1hcFJvdXRlID0gUk9VVEVTW3JvdXRlXSxcbiAgICAgICAgICByb3V0ZVBhdGggPSBtYXBSb3V0ZS5wYXRoO1xuXG4gICAgbGV0IG1hdGNoZWQgPSB0cnVlO1xuICAgIExpc3QobWFwUm91dGUucGF0aCkuZWFjaCgocm91dGVOYW1lLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHJvdXRlTmFtZSAhPT0gY3VycmVudFBhdGhbaW5kZXhdKSB7XG4gICAgICAgIGlmIChyb3V0ZU5hbWUuc3RhcnRzV2l0aCgnOicpKSB7IC8vIGRldGVjdCBwYXJhbSB2YWx1ZVxuICAgICAgICAgIHBhcmFtc1tyb3V0ZU5hbWUuc3Vic3RyaW5nKDEpXSA9IGN1cnJlbnRQYXRoW2luZGV4XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtYXRjaGVkID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAobWF0Y2hlZCkge1xuICAgICAgcmV0dXJuIHsgcm91dGU6IGN1cnJlbnRSb3V0ZSwgY29tcDogbWFwUm91dGUuY29tcCwgcGFyYW1zIH07XG4gICAgfVxuICB9XG5cbiAgLy8gd2l0aCBub3QgZm91bmQgc2NyZWVuXG4gIGlmIChST1VURVNbJyonXSkge1xuICAgIHJldHVybiB7IHJvdXRlOiBjdXJyZW50Um91dGUsIGNvbXA6IFJPVVRFU1snKiddLmNvbXAsIHBhcmFtcyB9O1xuICB9XG5cbiAgLy8gd2l0aG91dCBub3QgZm91bmQgc2NyZWVuXG4gIHJldHVybiB7IHJvdXRlOiBjdXJyZW50Um91dGUsIGNvbXA6IG51bGwsIHBhcmFtcyB9O1xufSIsImltcG9ydCBMaXN0IGZyb20gJy4vbGlzdCc7XG5cbmV4cG9ydCBjbGFzcyBEaWN0aW9uYXJ5IHtcbiAgY29uc3RydWN0b3Ioa2V5VmFsdWVzKSB7XG4gICAgdGhpcy5kYXRhID0ge307XG4gICAgaWYgKGtleVZhbHVlcykge1xuICAgICAgdGhpcy5kYXRhID0gT2JqZWN0LmFzc2lnbih7fSwga2V5VmFsdWVzKTtcbiAgICB9XG5cbiAgICB0aGlzLmtleXMgPSAoKSA9PiBMaXN0KE9iamVjdC5rZXlzKHRoaXMuZGF0YSkpO1xuICAgIHRoaXMudmFsdWVzID0gKCkgPT4gTGlzdChPYmplY3QudmFsdWVzKHRoaXMuZGF0YSkpO1xuICB9XG5cbiAgZWFjaChpdGVyYXRlZSkge1xuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmRhdGEpIHtcbiAgICAgIGl0ZXJhdGVlKHRoaXMuZGF0YVtrZXldLCBrZXksIHRoaXMuZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChrZXlWYWx1ZXMpID0+IG5ldyBEaWN0aW9uYXJ5KGtleVZhbHVlcyk7IiwiaW1wb3J0IHsgTGlzdCB9IGZyb20gJy4vbGlzdCc7XG5cbmNsYXNzIERPTSBleHRlbmRzIExpc3Qge1xuICBzaG93KCkge1xuICAgIHRoaXMuZGF0YS5lYWNoKHNlbGVjdG9yID0+IHNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snKTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgdGhpcy5kYXRhLmVhY2goc2VsZWN0b3IgPT4gc2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJyk7XG4gIH1cblxuICBwYXJlbnQoKSB7XG4gICAgdGhpcy5jb21wID0gdGhpcy5jb21wLnBhcmVudEVsZW1lbnQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB3aWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb21wLmNsaWVudFdpZHRoO1xuICB9XG5cbiAgaGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbXAuY2xpZW50SGVpZ2h0O1xuICB9XG5cbiAgZmluZChzZWxlY3Rvcikge1xuICAgIHJldHVybiB0aGlzLmNvbXAucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2VsZWN0b3IgPT4gRE9NLmdldEVsKHNlbGVjdG9yKTsiLCJleHBvcnQgY2xhc3MgRXh0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ET00gPSByZXF1aXJlKCcuL2RvbScpLmRlZmF1bHQ7XG4gICAgdGhpcy5TdHJpbmcgPSByZXF1aXJlKCcuL3N0cmluZycpLmRlZmF1bHQ7XG4gICAgdGhpcy5MaXN0ID0gcmVxdWlyZSgnLi9saXN0JykuZGVmYXVsdDtcbiAgICB0aGlzLk1hcCA9IHJlcXVpcmUoJy4vZGljdGlvbmFyeScpLmRlZmF1bHQ7XG5cbiAgICB0aGlzLlNDUk9MTF9XSURUSCA9IHRoaXMuZ2V0U2Nyb2xsV2lkdGgoKTtcbiAgICB0aGlzLkJPUkRFUl9XSURUSCA9IDI7XG4gICAgdGhpcy5DSEVDS19DT0xVTU5fV0lEVEggPSAzMztcbiAgICB0aGlzLlVOS05PV05fRVJST1JfTVNHID0gJ0FuIHVua25vd24gZXJyb3IgaGFzIG9jY3VycmVkLic7XG5cbiAgICB0aGlzLmlzUHJpbWl0aXZlID0gdmFsdWUgPT4geyBjb25zdCB0eXBlID0gdHlwZW9mIHZhbHVlOyByZXR1cm4gdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZSA9PT0gJ251bWJlcicgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nOyB9XG4gICAgdGhpcy5pc1N0cmluZyA9IHZhbHVlID0+ICh0eXBlb2YgdmFsdWUpID09PSAnc3RyaW5nJztcbiAgICB0aGlzLmlzRnVuY3Rpb24gPSB2YWx1ZSA9PiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICB0aGlzLmlzT2JqZWN0ID0gdmFsdWUgPT4gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xuICAgIHRoaXMuaXNBcnJheSA9IHZhbHVlID0+IHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nO1xuXG4gICAgdGhpcy5jbG9uZSA9IG9iaiA9PiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpOyAvLyBkZWVwIGNsb25lXG4gIH1cblxuICBleHRlbmQoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24uYXBwbHkobnVsbCwgYXJndW1lbnRzKTsgLy8gaW1tdXRhYmxlIG9iamVjdFxuICB9XG5cbiAgaW5pdGlhbFN0YXRlKGNvbXAsIHN0YXRlKSB7XG4gICAgaWYgKCFjb21wIHx8ICFzdGF0ZSkgeyByZXR1cm47IH1cbiAgICBjb21wLnN0YXRlID0gc3RhdGU7XG4gICAgZm9yIChsZXQgZmllbGQgb2YgT2JqZWN0LmtleXMoc3RhdGUpKSB7XG4gICAgICBjb21wW2BzZXQke3RoaXMuU3RyaW5nLmNhcGl0YWxpemUoZmllbGQpfWBdID0gdmFsdWUgPT4gY29tcC5zZXRTdGF0ZSh7IFtmaWVsZF06IHZhbHVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNsYXNzTmFtZSguLi5leHByZXNzaW9ucykge1xuICAgIGNvbnN0IGNscyA9IFtdO1xuXG4gICAgdGhpcy5MaXN0KGV4cHJlc3Npb25zKS5lYWNoKGV4cCA9PiB7XG4gICAgICBpZiAoIWV4cCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZXhwID09PSAnc3RyaW5nJykge1xuICAgICAgICBjbHMucHVzaChleHApO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzT2JqZWN0KGV4cCkpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGV4cCkge1xuICAgICAgICAgIGlmIChleHBba2V5XSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY2xzLnB1c2goa2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY2xzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIC8vI3JlZ2lvbiBET01cbiAgY3JlYXRlRWxlbWVudChodG1sKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmlubmVySFRNTCA9IGh0bWw7XG4gICAgcmV0dXJuIGRpdi5jaGlsZHJlblswXTtcbiAgfVxuXG4gIGdldFNjcm9sbFdpZHRoKCkge1xuICAgIGNvbnN0IG91dGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCc8ZGl2IHN0eWxlPVwidmlzaWJpbGl0eTogaGlkZGVuOyB3aWR0aDogMTAwcHg7IG92ZXJmbG93OiBzY3JvbGw7XCI+PC9kaXY+Jyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdXRlcik7XG4gICAgY29uc3Qgd2lkdGhOb1Njcm9sbCA9IG91dGVyLm9mZnNldFdpZHRoO1xuXG4gICAgLy8gYWRkIGlubmVyZGl2XG4gICAgY29uc3QgaW5uZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJzxkaXYgc3R5bGU9XCJ3aWR0aDogMTAwJTtcIj48L2Rpdj4nKTtcbiAgICBvdXRlci5hcHBlbmRDaGlsZChpbm5lcik7XG4gICAgY29uc3Qgd2lkdGhXaXRoU2Nyb2xsID0gaW5uZXIub2Zmc2V0V2lkdGg7XG5cbiAgICAvLyByZW1vdmUgZGl2c1xuICAgIG91dGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob3V0ZXIpO1xuXG4gICAgcmV0dXJuIHdpZHRoTm9TY3JvbGwgLSB3aWR0aFdpdGhTY3JvbGw7XG4gIH1cbiAgLy8jZW5kcmVnaW9uXG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBFeHQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmQodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKSB7XG4gIGNvbnN0IGZuID0gZGVzY3JpcHRvci52YWx1ZTtcblxuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBAYmluZCBkZWNvcmF0b3IgaXMgb25seSBhcHBsaWVkIHRvIGZ1bmN0aW9ucyBub3Q6ICR7dHlwZW9mIGZufWApO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0KCkge1xuICAgICAgcmV0dXJuIGZuLmJpbmQodGhpcyk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCA9IDUwMCkge1xuICBsZXQgdGltZW91dDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLFxuICAgICAgICAgIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgICAgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgICAgfVxuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgfVxufSIsImV4cG9ydCBjbGFzcyBMaXN0IHtcbiAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoKSB7XG4gICAgICB0aGlzLmRhdGEgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbGxlY3QgPSAoKSA9PiB0aGlzLmRhdGE7XG4gICAgdGhpcy5jb3VudCA9ICgpID0+IHRoaXMuZGF0YS5sZW5ndGg7XG4gICAgdGhpcy5nZXRBdCA9IGluZGV4ID0+IHRoaXMuZGF0YVtpbmRleF07XG4gICAgdGhpcy5hZGQgPSBpdGVtID0+IHRoaXMuZGF0YS5wdXNoKGl0ZW0pO1xuICAgIHRoaXMuaW5zZXJ0ID0gKGl0ZW0sIGluZGV4ID0gMCkgPT4gdGhpcy5kYXRhLnNwbGljZShpbmRleCwgMCwgaXRlbSk7XG4gICAgdGhpcy5yZW1vdmVBdCA9IChpbmRleCwgY291bnQgPSAxKSA9PiB0aGlzLmRhdGEuc3BsaWNlKGluZGV4LCBjb3VudCk7XG4gICAgdGhpcy5qb2luID0gc2VwYXJhdG9yID0+IHRoaXMuZGF0YS5qb2luKHNlcGFyYXRvcik7XG4gIH1cblxuICBlYWNoKGl0ZXJhdGVlKSB7XG4gICAgZm9yIChsZXQgaW5kZXggaW4gdGhpcy5kYXRhKSB7XG4gICAgICBpdGVyYXRlZSh0aGlzLmRhdGFbaW5kZXhdLCBpbmRleCwgdGhpcy5kYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBmaWx0ZXIocHJlZGljYXRlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgdGhpcy5lYWNoKChpdGVtLCBpbmRleCwgYXJyYXkpID0+IHtcbiAgICAgIGlmIChwcmVkaWNhdGUoaXRlbSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgICByZXN1bHQucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbmV3IExpc3QocmVzdWx0KTtcbiAgfVxuXG4gIG1hcChpdGVyYXRlZSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIHRoaXMuZWFjaCgoaXRlbSwgaW5kZXgsIGFycmF5KSA9PiByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaXRlbSwgaW5kZXgsIGFycmF5KSk7XG4gICAgcmV0dXJuIG5ldyBMaXN0KHJlc3VsdCk7XG4gIH1cblxuICByZWR1Y2UoaXRlcmF0ZWUsIGFjY3VtdWxhdG9yKSB7XG4gICAgdGhpcy5lYWNoKChpdGVtLCBpbmRleCwgYXJyYXkpID0+IGFjY3VtdWxhdG9yID0gaXRlcmF0ZWUoYWNjdW11bGF0b3IsIGl0ZW0sIGluZGV4LCBhcnJheSkpO1xuICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgfVxuXG4gIGZpbmRJbmRleChwcmVkaWNhdGUpIHtcbiAgICBsZXQgZm91bmRBdCA9IC0xO1xuICAgIGZvciAobGV0IGluZGV4IGluIHRoaXMuZGF0YSkge1xuICAgICAgaWYgKHByZWRpY2F0ZShpdGVtLCBpbmRleCwgdGhpcy5kYXRhKSkge1xuICAgICAgICBmb3VuZEF0ID0gaW5kZXg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZm91bmRBdDtcbiAgfVxuXG4gIGZpbmQocHJlZGljYXRlKSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5maW5kSW5kZXgocHJlZGljYXRlKTtcbiAgICByZXR1cm4gaW5kZXggPiAtMSA/IHRoaXMuZGF0YVtpbmRleF0gOiBudWxsO1xuICB9XG5cbiAgY29udGFpbnMocHJlZGljYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMuZmluZChwcmVkaWNhdGUpICE9PSBudWxsO1xuICB9XG5cbiAgcmVtb3ZlSWYocHJlZGljYXRlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgdGhpcy5lYWNoKChpdGVtLCBpbmRleCwgYXJyYXkpID0+IHtcbiAgICAgIGlmICghcHJlZGljYXRlKGl0ZW0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5kYXRhID0gcmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh2YWx1ZSkgPT4gbmV3IExpc3QodmFsdWUpOyIsImNsYXNzIFN0cmluZyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FwaXRhbGl6ZSA9IHZhbHVlID0+IHZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSk7XG4gIH1cblxuICBodG1sRW5jb2RlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoLyYvZywgJyZhbXA7JylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csICcmIzM5OycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbiAgfVxuXG4gIGh0bWxEZWNvZGUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvJmFtcDsvZywgJycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLyZsdDsvZywgJzwnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8mZ3Q7Pi9nLCAnPicpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLyYjMzk7L2csIFwiJ1wiKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8mcXVvdDsvZywgJ1wiJyk7XG4gIH1cblxuICB0b1F1ZXJ5U3RyaW5nKHBhcmFtcywgc2VwLCBlbmNvZGUpIHtcbiAgICBzZXAgICAgPSBzZXAgPT09IHVuZGVmaW5lZCA/ICcmJyA6IHNlcDtcbiAgICBlbmNvZGUgPSBlbmNvZGUgPT09IGZhbHNlID8gZnVuY3Rpb24ocykgeyByZXR1cm4gczsgfSA6IGVuY29kZVVSSUNvbXBvbmVudDtcblxuICAgIGxldCBwYWlycyA9IFtdO1xuICAgIGZvciAobGV0IGtleSBpbiBwYXJhbXMpIHtcbiAgICAgIHBhaXJzLnB1c2goYCR7a2V5fT0ke2VuY29kZShwYXJhbXNba2V5XSl9YCk7XG4gICAgfVxuICAgIHJldHVybiBwYWlycy5qb2luKHNlcCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFN0cmluZygpOyIsImltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IExpc3QgfSBmcm9tICd+L2NvcmUvbGlzdCc7XG5pbXBvcnQgTW9kZWwgZnJvbSAnLi9tb2RlbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFic3RyYWN0U3RvcmUgZXh0ZW5kcyBMaXN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8vI3JlZ2lvbiBjb25maWdzXG4gICAgdGhpcy50b3RhbENvdW50ID0gMDtcbiAgICB0aGlzLnBhZ2VTaXplID0gMDtcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gMTtcbiAgICB0aGlzLnN1YmplY3QgPSBuZXcgU3ViamVjdCgpO1xuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgLy8jcmVnaW9uIHByb3BlcnRpZXNcbiAgICAvLyNlbmRyZWdpb25cblxuICAgIC8vI3JlZ2lvbiBtZXRob2RzXG4gICAgdGhpcy5jcmVhdGVSZWNvcmQgPSByZWNvcmQgPT4gbmV3IE1vZGVsKHJlY29yZCwgdGhpcyk7XG4gICAgdGhpcy5nZXRSZWNvcmRzID0gdGhpcy5jb2xsZWN0O1xuICAgIHRoaXMuZ2V0TW9kaWZpZWRSZWNvcmRzID0gKCkgPT4gdGhpcy5maWx0ZXIocmVjb3JkID0+IHJlY29yZC5pc01vZGlmaWVkKCkpO1xuICAgIHRoaXMuZ2V0TmV3UmVjb3JkcyA9ICgpID0+IHRoaXMuZmlsdGVyKHJlY29yZCA9PiByZWNvcmQuaXNOZXdseUNyZWF0ZWQoKSk7XG4gICAgdGhpcy5zdWJzY3JpYmUgPSBvYnNlcnZlciA9PiB0aGlzLnN1YmplY3Quc3Vic2NyaWJlKHsgbmV4dDogdmFsdWUgPT4gb2JzZXJ2ZXIodmFsdWUpIH0pO1xuICAgIHRoaXMuZmlyZUV2ZW50ID0gKCkgPT4gdGhpcy5zdWJqZWN0Lm5leHQodGhpcyk7XG4gICAgLy8jZW5kcmVnaW9uXG4gIH1cblxuICBjbGVhckRhdGEoc2lsZW50ID0gZmFsc2UpIHtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICAhc2lsZW50ICYmIHRoaXMuZmlyZUV2ZW50KCk7XG4gIH1cblxuICBsb2FkRGF0YShkYXRhKSB7XG4gICAgdGhpcy5jbGVhckRhdGEodHJ1ZSk7XG4gICAgdGhpcy5kYXRhID0gKG5ldyBMaXN0KGRhdGEpKS5tYXAodGhpcy5jcmVhdGVSZWNvcmQuYmluZCh0aGlzKSkuY29sbGVjdCgpO1xuICAgIHRoaXMuZmlyZUV2ZW50KCk7XG4gIH1cblxuICBjb21taXRDaGFuZ2VzKCkge1xuICAgIHRoaXMuZmlsdGVyKHJlY29yZCA9PiByZWNvcmQuaXNNb2RpZmllZCgpIHx8IHJlY29yZC5pc05ld2x5Q3JlYXRlZCgpKS5lYWNoKHJlY29yZCA9PiByZWNvcmQuc2F2ZSgpKTtcbiAgICB0aGlzLmZpcmVFdmVudCgpO1xuICB9XG5cbiAgcmVqZWN0Q2hhbmdlcygpIHtcbiAgICB0aGlzLmZpbHRlcihyZWNvcmQgPT4gcmVjb3JkLmlzTW9kaWZpZWQoKSkuZWFjaChyZWNvcmQgPT4gcmVjb3JkLnJlamVjdCh0cnVlKSk7XG4gICAgdGhpcy5kYXRhID0gdGhpcy5maWx0ZXIocmVjb3JkID0+ICFyZWNvcmQuaXNOZXdseUNyZWF0ZWQoKSkuY29sbGVjdCgpO1xuICAgIHRoaXMuZmlyZUV2ZW50KCk7XG4gIH1cbn0iLCJjbGFzcyBDYWNoZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2NhY2hlID0ge307XG4gIH1cblxuICBoYXNMb2NhbFN0b3JhZ2UoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAnbG9jYWxTdG9yYWdlJyBpbiB3aW5kb3cgJiYgd2luZG93LmxvY2FsU3RvcmFnZSAhPT0gbnVsbDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZ2V0KGtleSkge1xuICAgIGlmICh0aGlzLmhhc0xvY2FsU3RvcmFnZSgpKSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSB8fCB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLl9jYWNoZVtrZXldIHx8IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBzZXQoa2V5LCB2YWx1ZSkge1xuICAgIGlmICh0aGlzLmhhc0xvY2FsU3RvcmFnZSgpKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NhY2hlW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICByZW1vdmUoa2V5KSB7XG4gICAgaWYgKCFrZXkpIHtcbiAgICAgIHRoaXMuX2NhY2hlID0ge307XG4gICAgfSBlbHNlIGlmICh0aGlzLmhhc0xvY2FsU3RvcmFnZSgpKSB7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdGhpcy5fY2FjaGVba2V5XTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENhY2hlKCk7IiwiaW1wb3J0IEV4dCBmcm9tICd+L2NvcmUvZXh0JztcbmltcG9ydCBMaXN0IGZyb20gJ34vY29yZS9saXN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kZWwge1xuICBjb25zdHJ1Y3RvcihkYXRhLCBzdG9yZSkge1xuICAgIC8vI3JlZ2lvbiBjb25maWdzXG4gICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgLy8jcmVnaW9uIHByb3BlcnRpZXNcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMuc3RvcmUgPSBzdG9yZTtcbiAgICB0aGlzLmlkUHJvcGVydHkgPSAoc3RvcmUgJiYgc3RvcmUuaWRQcm9wZXJ0eSkgPyBzdG9yZS5pZFByb3BlcnR5IDogJ2lkJztcbiAgICBjb25zdCBmaWVsZENvbmZpZyA9IChzdG9yZSAmJiBzdG9yZS5maWVsZHMpID8gc3RvcmUuZmllbGRzIDogW107XG4gICAgdGhpcy5maWVsZHMgPSBMaXN0KGZpZWxkQ29uZmlnKS5tYXAoZmllbGQgPT4gRXh0LmlzU3RyaW5nKGZpZWxkKSA/ICh7IG5hbWU6IGZpZWxkLCB0eXBlOiAnc3RyaW5nJyB9KSA6IGZpZWxkKTtcbiAgICAvLyNlbmRyZWdpb25cblxuICAgIC8vI3JlZ2lvbiBtZXRob2RzXG4gICAgdGhpcy5nZXREYXRhID0gKCkgPT4gdGhpcy5kYXRhO1xuICAgIHRoaXMuZ2V0ID0gZmllbGROYW1lID0+IHRoaXMuZGF0YVtmaWVsZE5hbWVdO1xuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgdGhpcy5zYXZlKCk7XG4gIH1cblxuICBzZXQoZmllbGROYW1lLCBuZXdWYWx1ZSwgc2lsZW50KSB7XG4gICAgdGhpcy5kYXRhW2ZpZWxkTmFtZV0gPSBuZXdWYWx1ZTtcbiAgICB0aGlzLm1vZGlmaWVkID0gIXRoaXMuaXNFcXVhbChmaWVsZE5hbWUpO1xuICAgICghc2lsZW50ICYmIHRoaXMuc3RvcmUpICYmICh0aGlzLnN0b3JlLmZpcmVFdmVudCgpKTtcbiAgfVxuXG4gIHNhdmUoKSB7XG4gICAgdGhpcy5waGFudG9tID0gRXh0LmNsb25lKHRoaXMuZGF0YSk7XG4gICAgdGhpcy5tb2RpZmllZCA9IGZhbHNlO1xuICB9XG5cbiAgcmVqZWN0KHNpbGVudCkge1xuICAgIHRoaXMuZGF0YSA9IEV4dC5jbG9uZSh0aGlzLnBoYW50b20pO1xuICAgIHRoaXMuc2F2ZSgpO1xuICAgICghc2lsZW50ICYmIHRoaXMuc3RvcmUpICYmICh0aGlzLnN0b3JlLmZpcmVFdmVudCgpKTtcbiAgfVxuXG4gIGlzRXF1YWwoZmllbGQpIHtcbiAgICBjb25zdCBvbGRWYWx1ZSA9IHRoaXMucGhhbnRvbVtmaWVsZC5uYW1lXSxcbiAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMuZGF0YVtmaWVsZC5uYW1lXTtcblxuICAgIHJldHVybiBmaWVsZC5lcXVhbHMgPyBmaWVsZC5lcXVhbHMobmV3VmFsdWUsIG9sZFZhbHVlKSA6IG5ld1ZhbHVlID09PSBvbGRWYWx1ZTtcbiAgfVxuXG4gIGlzTW9kaWZpZWQoZmllbGROYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kaWZpZWQgJiYgIXRoaXMucGhhbnRvbVt0aGlzLmlkUHJvcGVydHldOyAvLyBzaG91bGQgbm90IGRldGVjdCBuZXcgcmVjb3JkIGFzIGEgbW9kaWZpZWQgcmVjb3JkXG4gIH1cblxuICBpc05ld2x5Q3JlYXRlZCgpIHtcbiAgICByZXR1cm4gIXRoaXMucGhhbnRvbVt0aGlzLmlkUHJvcGVydHldO1xuICB9XG5cbiAgc2V0U2VsZWN0ZWQoc2VsZWN0ZWQsIHNpbGVudCkge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICAoIXNpbGVudCAmJiB0aGlzLnN0b3JlKSAmJiAodGhpcy5zdG9yZS5maXJlRXZlbnQoKSk7XG4gIH1cbn0iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgRXh0IGZyb20gJ34vY29yZS9leHQnO1xuaW1wb3J0IEFic3RyYWN0U3RvcmUgZnJvbSAnLi9hYnN0cmFjdC1zdG9yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3h5U3RvcmUgZXh0ZW5kcyBBYnN0cmFjdFN0b3JlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8vI3JlZ2lvbiBjb25maWdzXG4gICAgdGhpcy5wcm94eSA9IHtcbiAgICAgIHJlYWRlcjoge30sXG4gICAgICB3cml0ZXI6IHt9XG4gICAgfTtcbiAgICAvLyNlbmRyZWdpb25cbiAgfVxuXG4gIGxvYWQoKSB7XG4gICAgbGV0IHsgdXJsLCBtZXRob2QgPSAnZ2V0JywgcmVzcG9uc2VUeXBlID0gJ2pzb24nLCBwYXJhbXMgfSA9IHRoaXMucHJveHk7XG4gICAgKG1ldGhvZCA9PT0gJ2dldCcgJiYgcGFyYW1zKSAmJiAodXJsID0gYCR7dXJsfT8ke1N0cmluZy50b1F1ZXJ5U3RyaW5nKHBhcmFtcyl9YCk7XG4gICAgT2JzZXJ2YWJsZS5hamF4KHtcbiAgICAgIHVybCxcbiAgICAgIG1ldGhvZCxcbiAgICAgIHJlc3BvbnNlVHlwZSxcbiAgICAgIGJvZHk6IG1ldGhvZCA9PT0gJ3Bvc3QnICYmIHBhcmFtc1xuICAgIH0pXG4gICAgLm1hcCh2YWx1ZSA9PiB2YWx1ZS5yZXNwb25zZSlcbiAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnN0IHsgcmVhZGVyOiB7IHJvb3RQcm9wZXJ0eSwgdG90YWxQcm9wZXJ0eSB9ID0ge30gfSA9IHRoaXMucHJveHk7XG4gICAgICB0aGlzLmxvYWREYXRhKHJvb3RQcm9wZXJ0eSA/IHJlc3BvbnNlW3Jvb3RQcm9wZXJ0eV0gOiByZXNwb25zZSk7XG4gICAgICB0aGlzLnRvdGFsQ291bnQgPSAodGhpcy5wYWdlU2l6ZSAmJiB0b3RhbFByb3BlcnR5KSA/IHJlc3BvbnNlW3RvdGFsUHJvcGVydHldIDogdGhpcy5jb3VudCgpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gbG9hZFBhZ2UocGFnZSkge1xuICAvLyAgIHRoaXMuY3VycmVudFBhZ2UgPSBwYWdlO1xuICAvLyAgIHRoaXMucHJveHkucGFyYW1zID0gRXh0LmV4dGVuZCh7fSwgdGhpcy5wcm94eS5wYXJhbXMsIHsgcGFnZTogdGhpcy5jdXJyZW50UGFnZSwgc2l6ZTogdGhpcy5wYWdlU2l6ZSB9KTtcbiAgLy8gICByZXR1cm4gdGhpcy5sb2FkKHt9KTtcbiAgLy8gfVxuXG4gIC8vIGFzeW5jIHN5bmMoeyBkb25lLCBmYWlsLCBhbHdheXMgfSkge1xuICAvLyAgIHRoaXMucHJveHkubWV0aG9kID0gJ3Bvc3QnO1xuICAvLyAgIHRoaXMucHJveHkucGFyYW1zID0gdGhpcy5nZXRNb2RpZmllZFJlY29yZHMoKS5tYXAocmVjb3JkID0+IHJlY29yZC5kYXRhKS5jb2xsZWN0KCk7XG4gIC8vICAgdGhpcy5wcm94eS5wcm94eS5wYXJhbXMucHVzaCguLi50aGlzLmdldE5ld1JlY29yZHMoKS5tYXAocmVjb3JkID0+IHJlY29yZC5kYXRhKS5jb2xsZWN0KCkpO1xuICAvLyAgIGNvbnN0IHsgdHJhbnNmb3JtIH0gPSBwcm94eS53cml0ZXI7XG4gIC8vICAgdHJhbnNmb3JtICYmICh0aGlzLnByb3h5LnBhcmFtcyA9IHRyYW5zZm9ybSh0aGlzLnByb3h5LnBhcmFtcykpO1xuICAvLyAgIE9ic2VydmFibGUuYWpheCh0aGlzLnByb3h5KS5zdWJzY3JpYmUoe1xuICAvLyAgICAgbmV4dDogZG9uZSxcbiAgLy8gICAgIGVycm9yOiBmYWlsLFxuICAvLyAgICAgY29tcGxldGU6IGFsd2F5c1xuICAvLyAgIH0pO1xuICAvLyB9XG59IiwiaW1wb3J0IHsgRGljdGlvbmFyeSB9IGZyb20gJ34vY29yZS9kaWN0aW9uYXJ5JztcblxuY2xhc3MgU3RvcmVNYW5hZ2VyIGV4dGVuZHMgRGljdGlvbmFyeSB7XG4gIHNldChrZXksIHZhbHVlKSB7XG4gICAgdGhpcy5kYXRhW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIGdldChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhW2tleV07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFN0b3JlTWFuYWdlcigpOyIsImltcG9ydCBFeHQgZnJvbSAnfi9jb3JlL2V4dCc7XG5pbXBvcnQgUHJveHlTdG9yZSBmcm9tICcuL3Byb3h5LXN0b3JlJztcblxuY2xhc3MgU3RvcmUgZXh0ZW5kcyBQcm94eVN0b3JlIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoKTtcbiAgICBFeHQuZXh0ZW5kKHRoaXMsIGNvbmZpZyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnID0+IG5ldyBTdG9yZShjb25maWcpOyIsImltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBFeHQgfSBmcm9tICcuL2NvcmUvZXh0JztcbmltcG9ydCBTdG9yZU1hbmFnZXIgZnJvbSAnLi9kYXRhL3N0b3JlLW1hbmFnZXInO1xuXG5jbGFzcyBSZXh0IGV4dGVuZHMgRXh0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLlN0b3JlTWFuYWdlciA9IFN0b3JlTWFuYWdlcjtcbiAgICB0aGlzLkNhY2hlID0gcmVxdWlyZSgnLi9kYXRhL2NhY2hlJykuZGVmYXVsdDtcbiAgfVxuXG4gIGFzeW5jIGFwcGxpY2F0aW9uKHsgc3RvcmVzLCBsYXVuY2ggfSkge1xuICAgIGlmIChzdG9yZXMpIHtcbiAgICAgIHRoaXMuTGlzdChzdG9yZXMpLmVhY2goc3RvcmUgPT4ge1xuICAgICAgICBzdG9yZSA9IHN0b3JlLmRlZmF1bHQ7XG4gICAgICAgIFN0b3JlTWFuYWdlci5zZXQoc3RvcmUuc3RvcmVJZCwgc3RvcmUpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChsYXVuY2gpIHtcbiAgICAgIGNvbnN0IHJvb3QgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJzxkaXYgaWQ9XCJyZWFjdC1yb290XCI+PC9kaXY+JyksXG4gICAgICAgICAgICB2aWV3cG9ydCA9IGF3YWl0IGxhdW5jaCgpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyb290KTtcbiAgICAgIHJlbmRlcih2aWV3cG9ydCwgcm9vdCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBSZXh0KCk7XG5cbi8vI3JlZ2lvbiBDb21wb25lbnRcbmV4cG9ydCB7IEhhc2hSb3V0ZXIsIExpbmsgfSBmcm9tICcuL2NvbXBvbmVudHMvcm91dGVyJztcbmV4cG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4vY29tcG9uZW50cy9jb250YWluZXInO1xuLy8gZXhwb3J0IHsgQnV0dG9uLCBCdXR0b25MaW5rLCBGaWVsZCwgVGV4dEZpZWxkLCBDaGVja2JveCwgVGV4dEFyZWEgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEdyaWQgfSBmcm9tICcuL2NvbXBvbmVudHMvZ3JpZC9ncmlkJztcbi8vI2VuZHJlZ2lvblxuXG4vLyNyZWdpb24gRGVjb3JhdG9yIChvciBIaWdoZXIgT3JkZXIgRnVuY3Rpb24gb3IgSGlnaGVyIE9yZGVyIENvbXBvbmVudClcbmV4cG9ydCB7IGJpbmQsIGRlYm91bmNlIH0gZnJvbSAnLi9jb3JlL2V4dCc7XG5leHBvcnQgeyBSb3V0ZSB9IGZyb20gJy4vY29tcG9uZW50cy9yb3V0ZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb21wb25lbnQgfSBmcm9tICcuL2FwcC9jb21wb25lbnQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTdG9yZSB9IGZyb20gJy4vZGF0YS9zdG9yZSc7XG4vLyNlbmRyZWdpb24iXX0=
