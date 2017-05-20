# Layouts and Containers

The layout system is one of the most powerful parts of Extension React. It handles the sizing and positioning of every Component in your application. This guide covers the basics of how to get started with layouts.

## Containers

Applications are made up of lots of components, usually nested inside one another. `Containers` allow you to render and arrange child Components inside them.

Most apps have a single top-level Container called a Viewport, which takes up the entire screen. Inside of this are child components.

```js
import React, { Component } from 'react';
import { Container, HashRouter } from 'ext-react';
import Header from './header';
import Side from './side';
import Nav from './nav';
import Footer from './footer';

export default class Viewport extends Component {
  render() {
    return <Container>
      <Header />
      <Container hbox>
        <Side />
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

## Layouts

Layouts determine how the child components should be laid out on the screen. By default, `Container` use VBox layout. If you need to use HBox layout, add `hbox` property to `Container` component.