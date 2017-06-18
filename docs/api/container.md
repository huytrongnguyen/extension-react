# Container

## Summary

A `Container` lets you nest other Components inside it. Containers allow you to render and arrange child Components inside them. Most apps have a single top-level `Container` called a `Viewport`, which takes up the entire screen. Inside of this are child components, for example in a mail app the Viewport Container's two children might be a message List and an email preview pane.

```js
import React, { Component } from 'react';
import { Container, HashRouter } from '@/rext';
import Header from './header';
import Side from './side';
import Nav from './nav';
import Footer from './footer';

export default class extends Component {
  render() {
    return <Container>
      <Header />
      <Container hbox>
        <Container id="main-container">
          <Nav />
          <HashRouter />
        </Container>
      </Container>
      <Footer />
    </Container>;
  }
}
```

### CONFIG

### PROPERTIES

### METHODS

### EVENTS