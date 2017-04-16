# Events

Events fire whenever something interesting happens to one of your Classes.

## Adding Observers

`Observable.create` is an alias for the `Observable` constructor, you can call the `subscribe` function after create the observable. For example:

```js
const observable = Observable.create()

observable.subscribe(store => {
  const { stores } = this.state
  stores[store.name] = store
  this.setState(() => ({ stores }))
})
```

## Firing Custom Events

Whenever `Observable` is called, all observers will be called:

```js
observable.call(/* observer */)
```

## Removing Observers

Just as we can add listeners at any time, we can also remove them. This time we use the `ubsubscribe` function. To remove a listener, we need a reference to its function.

```js
observable.ubsubscribe(fn)
```

## Listening for DOM Events

By targeting the DOM element, we can attach many native events to which the component can then listen.

```js
Observable.fromEvent(window, 'hashchange').subscribe(() => this.setState(() => (matchPath())));
```