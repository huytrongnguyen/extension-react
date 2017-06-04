# Data Package

The data package is what loads and saves all of the data in your application.

## Models

The centerpiece of the data package is `Model` which represents an entity in an application. (Under Construction)

## Stores

The `Store` class encapsulates a client side cache of `Model` objects. Stores load data via a `Proxy`, and also provide functions for `sorting`, `filtering` and `querying` the `Model` instances contained within it. Creating a `Store` is easy - we just tell it the `Model` and the `Proxy` to use for loading and saving its data:

```js
import { Store } from 'ext-react'

export default Store({
  storeId: 'DashboardStore',
  proxy: {
    url: '/api/dashboard'
  },
  autoLoad: true
})
```

In the example above we configured an AJAX proxy to load data from the url `/api/dashboard`.

Stores load data via ```proxy``` with this following structure:

```json
{
  url:    /* The URL from which to request the data object */,
  method: /* The default HTTP method to be used for requests. If not set, GET will be used. */
  params: /* Request parameters sent as json data */
  reader: /* Use to decode the server's response */
}
```

You have some function to work with store such as: `subscribe`, `unsubscribe`, `removeAll`, `loadData`, `load`, `loadPage`, `getData`, `getAt`, `commitChanges`, `rejectChanges`, ...

## Validations

Models also provide a bevy of support for validating data. (Under Construction)