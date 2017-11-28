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
        <p>
          Extension React is a library that build on top of React, helping you build data-intensive, cross-platform web apps for desktops, tablets, and smartphones.
        </p>
        <h2>Quick Start</h2>
        <h3>1. Setup a development enviroment</h3>
        <p>
          Use <code>npm</code> or <code>yarn</code> to install following dependencies:
          <ul className="list-style-disc">
            <li><pre>babel-polyfill</pre></li>
            <li><pre>babel-preset-env</pre></li>
            <li><pre>babel-preset-react</pre></li>
            <li><pre>d3</pre></li>
            <li><pre>font-awesome</pre></li>
            <li><pre>react</pre></li>
            <li><pre>ext-react</pre></li>
          </ul>
        </p>
        <h3>2. Create a new project</h3>
        <p>
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
          <pre className="editor">{`<!-- index.html -->
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
          To launch your app, add the following to your <code>app.js</code> file
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