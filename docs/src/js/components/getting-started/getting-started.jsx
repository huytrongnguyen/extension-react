import React, { PureComponent } from 'react';
import { Route, Container } from '~/rext';

@Route('/')
export default class GettingStarted extends PureComponent {
  render() {
    return <Container>
      <div className="panel-header">
        <h1 className="panel-title">Getting Started</h1>
      </div>
      <Container className="panel-body">
        <p className="mb-md">
          Extension React is a library that build on top of React, helping you build data-intensive, cross-platform web apps for desktops, tablets, and smartphones.
        </p>
        <h2 className="mb-md">Quick Start</h2>
        <h3 className="mb-md">1. Setup a development enviroment</h3>
        <p className="mb-md">
          Use <code>npm</code> or <code>yarn</code> to install following dependencies:
          <ul>
            <li><code>babel-polyfill</code></li>
            <li><code>babel-preset-env</code></li>
            <li><code>babel-preset-react</code></li>
            <li><code>d3</code></li>
            <li><code>font-awesome</code></li>
            <li><code>react</code></li>
            <li><code>ext-react</code></li>
          </ul>
        </p>
        <h3 className="mb-md">2. Create a new project</h3>
        <p className="mb-md">
          The following is the recommended directory structure for an Extension React application:
          <pre className="editor">
            +-- node_modules: NPM components<br />
            +-- dist<br />
            |   +-- app.min.css<br />
            |   +-- app.min.js<br />
            |   +-- framework.min.js<br />
            +-- src<br />
            |   +-- css<br />
            |   |   +-- _variables.scss: application styles constant values<br />
            |   |   +-- app.scss: application styles<br />
            |   +-- js<br />
            |   |   +-- common: code of shared functions or shared components<br />
            |   |   +-- components: code (scripts and views) of every feature should be a sub-directory<br />
            |   |   +-- services: code of services<br />
            |   |   +-- stores: code of stores<br />
            |   |   +-- app.js: main script<br />
            +-- gulpfile.babel.js: build scripts (or webpack.config.js if you prefer)<br />
            +-- index.html<br />
            +-- package.json: NPM package definition<br />
            +-- server.js: code of local web server (ExpressJS)<br />
          </pre>
          Let’s start evaluating the application by looking at <code>index.html</code>
          <pre className="editor mb-md">{`<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Extension React Application</title>
  <link href="/node-modules/ext-react/css/rext.min.css" rel="stylesheet" />
  <link href="/dist/app.min.css" rel="stylesheet" />
</head>
<body>
  <script src="/dist/framework.min.js"></script>
  <script src="/dist/app.min.js"></script>
</body>
</html>`}</pre>
          <p className="mb-md">To launch your app, add the following to your <code>app.js</code> file</p>
          <pre className="editor">{`// app.js
import 'babel-polyfill';
import React from 'react';
import Rext from 'ext-react';
import Viewport from './components/viewport/viewport';

Rext.launch(<Viewport />);`}</pre>
        </p>
      </Container>
    </Container>
  }
}