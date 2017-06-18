# Grid

## Summary

`Grid` are an excellent way of showing large amounts of tabular data on the client side. Essentially a supercharged <table>, `Grid` makes it easy to fetch, sort and filter large amounts of data.

`Grid` are composed of two main pieces - a `Store` full of data and a set of columns to render.

```js
// app/stores/user.js
import { Store } from 'ext-react'

export default Store({
  storeId: 'UserStore',
  data: [
    { 'name': 'Lisa',  "email":"lisa@simpsons.com",  "phone":"555-111-1224" },
    { 'name': 'Bart',  "email":"bart@simpsons.com",  "phone":"555-222-1234" },
    { 'name': 'Homer', "email":"home@simpsons.com",  "phone":"555-222-1244" },
    { 'name': 'Marge', "email":"marge@simpsons.com", "phone":"555-222-1254" }
  ]
});
```

```js
// app/components//search-result.view.jsx
import React, { Component } from 'react';
import { Container, Grid } from 'ext-react';
import UserStore from '~/stores/user';

export default class extends Component {
  render() {
    return <Container>
      <Grid store={UserStore}>
        <div text="Name" dataIndex="name" />
        <div text="Email" dataIndex="email" />
        <div text="Phone" dataIndex="phone" />
      </Grid>
    </Container>;
  }
}
```

The code above produces a simple grid with three columns. We specified a `Store` which will load JSON data inline.

### CONFIG

### PROPERTIES

### METHODS

### EVENTS