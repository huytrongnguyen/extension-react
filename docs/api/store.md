# Store

## Summary

The `Store` class encapsulates a client side cache of `Model` objects. Stores load data via a `proxy`.

Creating a Store is easy - we just tell it the `storeId` and the `proxy` to use for loading and saving its data:

```js
import { Store } from 'ext-react'

export default Store({
  storeId: 'UserStore',
  proxy: {
    url: '/api/users',
    method: 'get',
    reader: {
      rootProperty: 'users'
    }
  }
});
```

In the example above we configured an AJAX proxy to load data from the url '/api/users'. We told our Proxy to use a `reader` to parse the response from the server into Model object. The `reader` is optional, usually it needs for pagination response.

**Inline data**

Stores can also load data inline. Internally, Store converts each of the objects we pass into Model instances:

```js
import { Store } from 'ext-react'

export default Store({
  storeId: 'UserStore',
  data : [
    {firstName: 'Peter',   lastName: 'Venkman'},
    {firstName: 'Egon',    lastName: 'Spengler'},
    {firstName: 'Ray',     lastName: 'Stantz'},
    {firstName: 'Winston', lastName: 'Zeddemore'}
  ]
});
```

### CONFIG

#### storeId: string

Unique identifier for this store.

#### proxy: object

The Proxy to use for this Store.

  * url: The URL from which to request the data object.
  * method: The HTTP method to use for the request. Default is 'GET'.
  * params: An object containing properties which are used as parameters to the request.
  * reader: The `reader` to use to decode the server's response.

#### autoLoad: boolean

If data is not specified, and if autoLoad is true, this store's load method is automatically called after creation.

#### data: Model[]

Array of Model instances or data objects to load locally. See "Inline data" above for details.

#### pageSize: number

The number of records considered to form a 'page'. This is used to power the built-in paging using the nextPage and previousPage functions when the grid is paged.

### PROPERTIES

### METHODS

#### load(proxy):

Marks this store as needing a load. When the current executing event handler exits, this store will send a request to load using its configured `proxy`.
Upon return of the data from whatever data source the proxy connected to, the retrieved `Model` will be loaded into this store, and the optional callback will be called. Example usage:

```js
store.load({
  url: '/api/users',
  method: 'post',
  params: { status: 'ACTIVE' },
  next: response => { console.log(response); return response; },
  error: errorResponse => console.error(errorResponse.message),
  complete: () => console.log('complete')
})
```

PARAMETERS:
  * proxy: Optional
    * url: The URL to which to send the request.
    * method: The HTTP method to use for the request. Default is 'GET'.
    * params: An object containing properties which are used as parameters to the request.
    * next: The function to be called before the response is returned to support you transform the response if it's needed. The callback is passed the following parameters:
      * response: The response data
    * error: The function to be called upon failure of the request. The callback is passed the following parameters:
      * response: The error response.
    * complete: A function to be called when the request finishes (after `next` or `error` callbacks are executed).

#### loadData(data):

Loads an array of data straight into the Store.

PARAMETERS:
  * data: Array of data to load, will be cast into model instances first.

#### loadPage(page):

Loads a given 'page' of data by setting the start and limit values appropriately. Internally this just causes a normal load operation, passing in calculated 'start' and 'limit' params.

PARAMETERS:
  * page: The number of the page to load.

#### count():

Gets the count of items in the store.

#### getData():

Returns the store's records.

#### getAt(index):

Get the Record at the specified index.

PARAMETERS:
  * index: The index of the Record to find.

RETURNS:

The Record at the passed index. Returns null if not found.

### removeAt(index, count):

Removes the model instance(s) at the given index

PARAMETERS:
  * index: The record index.
  * count: The number of records to delete. Default to 1.

RETURNS:

The removed record.

#### subscribe(observer):

Appends an observer to this object. For example:

```js
componentWillMount() {
  store.subscribe(this.updateTotal);
}

updateTotal(store) {
  this.setState(() => ({ total: store.count() }));
}
```

PARAMETERS:
  * observer: The handler will be called.

#### unsubscribe(observer):

Removes an observer. For example:

```js
componentWillUnmount() {
  store.unsubscribe(this.updateTotal);
}

updateTotal(store) {
  this.setState(() => ({ total: store.count() }));
}
```

PARAMETERS:
  * observer: The handler to remove. **This must be a reference to the function passed into the `subscribe` call.**

#### commitChanges():

Commits all Records with outstanding changes.

#### rejectChanges():

Rejects outstanding changes on all modified records.

#### removeAll():

Removes all unfiltered items from the store.