import React, { PureComponent } from 'react';
import { Route, Container } from '~/rext';

@Route('/')
export default class GettingStarted extends PureComponent {
  render() {
    return <Container className="main container scrollable">
      <h1 className="mb-md">Getting Started</h1>
      <p className="mb-md">
        Extension React is a library that build on top of React, helping you build data-intensive, cross-platform web apps for desktops, tablets, and smartphones.
      </p>
      <h2 className="mb-md">Quick Start</h2>
      <h3 className="mb-md">1. Setup a development enviroment</h3>
      <p className="mb-md">Use <code>npm</code> or <code>yarn</code> to install following dependencies:</p>
      <ul className="mb-md">
        <li><code>babel-polyfill</code></li>
        <li><code>babel-preset-env</code></li>
        <li><code>babel-preset-react</code></li>
        <li><code>d3</code></li>
        <li><code>react</code></li>
        <li><code>react-dom</code></li>
        <li><code>rxjs</code></li>
        <li><code>ext-react</code></li>
      </ul>
      <h3 className="mb-md">2. Create a new project</h3>
      <p className="mb-md">The following is the recommended directory structure for an Extension React application:</p>
      <pre className="mb-md">
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
      <p className="mb-md">Let’s start evaluating the application by looking at <code>index.html</code></p>
      <pre className="mb-md">
{`<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Extension React Application</title>
<link href="/node-modules/ext-react/css/rext.min.css" rel="stylesheet" />
</head>
<body>
<script src="app.js"></script>
</body>
</html>`}
      </pre>
      <p className="mb-md">To launch your app, add the following to your <code>app.js</code> file</p>
      <pre>
{`// ./app.js
import 'babel-polyfill';
import React, { PureComponent } from 'react';
import { Application } from 'ext-react';

@Application({
  views: [
    require('./components/viewport/viewport'),
  ],
})
export default class App extends PureComponent {
  render() {
    return <Viewport />
  }
}`}
      </pre>
    </Container>
  }
}