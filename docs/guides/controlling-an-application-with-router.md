# Controlling an Application with Router

On a normal website, a user navigates to and from different pages as they click links or fill out forms. However, in a single page application, a user's interaction doesn't load a new page. Instead, it is handled within a single page and components react to that interaction. So how do you still allow users to use the browser's forward and back buttons? The answer is to digest URI hash changes with Extension React Router.

## What Routing Is Used For

Routing can be used to track the application state through the use of the browser history stack. Routing also allows for deep linking into the application which allows a direct link to a specific part of your application. This is very useful for users so they can bookmark your app and even send links to someone else to gain direct access to that part of the application.

## What Routing Is Not Used For

Routing should not be used to store any data or session, data should be stored in a persistent data source such as a cookie or localstorage. Routing is only a means of tracking the application's state.

## What is the Hash?

Browsers navigate the internet using a URI which consists of many parts. Let's look at a sample URI:

```
https://www.example.com/apps/users#user/1234
```

This should look relatively familiar. However, you may not recognize #user=1234. This section of the URI is called the "hash" or fragment identifier. For more information on the hash, please read this resource [http://en.wikipedia.org/wiki/Fragment_identifier](http://en.wikipedia.org/wiki/Fragment_identifier). This hash provides a way for an application to control the history stack of the browser without reloading the current page. As the hash changes, the browser adds that whole URI to the history stack, which then allows you to utilize the browser's forward / back buttons to traverse URIs including the hashes that may have changed. For instance, what happens if you update the hash to:

```
https://www.example.com/apps/users#user/5678
```

The browser fires a hashchange event that we can then utilize within the application. A user can then click the back button to go back to the #user=1234 hash. This notification then allows you to react to the change within your application. It is important to mention that the hash is not sent to the server. The hash is typically digested within the client's interpretation of the URI. The Extension React Router relies on the browser's hash functionality to allow application state tracking and deep linking.

## Implement Routing in your Application

`Route` decorator is most basic responsibility is to render UI when a location matches the route’s path.

`Link` provides declarative, accessible navigation around your application.

`HashRouter` uses the hash portion of the URL (i.e. window.location.hash) to keep your UI in sync with the URL.

```js
// main.js
import 'babel-polyfill';
import Rext from 'ext-react';
import Viewport from './components/viewport/viewport';
import Dashboard from './components/dashboard/dashboard';
import Search from './components/search/search';
import Details from './components/search/details';
import NotFound from './components/notfound/notfound';

Rext.launch(<Viewport />);
```

```js
// ./components/viewport/viewport.js
import React, { Component } from 'react'
import { Link, HashRouter } from 'ext-react'

export default class Viewport extends Component {
  render() {
    return <section>
      <Link to="/">Dashboard</Link>
      <Link to="/search">Search</Link>
      <Link to="/details/huynguyen">Details</Link>
      <HashRouter />
    </section>
  }
}
```

```js
// ./components/dashboard/dashboard.js
import React, { Component } from 'react';
import { Route } from 'ext-react';

@Route('/')
export default class Dashboard extends Component {
  render() {
    return <section />;
  }
}
```

```js
// ./components/search/search.js
import React, { Component } from 'react';
import { Route } from 'ext-react';

@Route('/')
export default class Search extends Component {
  render() {
    return <section />;
  }
}
```

```js
// ./components/notfound/notfound.js
import React, { Component } from 'react';
import { Route } from 'ext-react';

@Route('/')
export default class NotFound extends Component {
  render() {
    return <h1>Not Found</h1>;
  }
}
```


```js
// ./components/search/detail.js
import React, { Component } from 'react';
import { Route } from 'ext-react';

@Route('/details/:name')
export default class Details extends Component {
  render() {
    return <h1>{this.props.params.name}</h1>;
  }
}
```