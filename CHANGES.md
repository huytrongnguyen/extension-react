## [2.0.x]
>

  * Rewrite Rext core

## [1.7.x]
> Jul 16, 2017

  * Change default component alias to `$view`
  * Add function `Rext.initialState`
  * Update documentation

## [1.6.x]
> Jun 18, 2017

  * Provide `Dropdown` component
  * Provide Grid Paging Toolbar
  * Support `editable` for `Grid`
  * Add function `Rext.generateSetter` to handle `setState` for each field in state
  * Fix issue in routes
  * Update documentation for API

## [1.5.x]
> Jun 04, 2017

  * `React.launch` now works with promise function (and `async/await` syntax)
  * Remove `Rext.application` function
  * Small refactor in `List` (`List([1,2,3])` instead of `List.of([1,2,3])`) and `Map` (`Map({a:1})` instead of `Map.of({a:1})`)
  * Provide `Grid` component and update `Store`, `Model` to support `Grid`
  * Add decorator `withProps` to `render` function
  * Fix issue in `get` and `set` of `Cache`
  * Update documentation for API

## [1.4.x]
> May 20, 2017

  * Change `Rext.application` to `Rext.launch`, do not need a separate target `<div id="react-root"/>` in index.html file.
  * Revise `Container` concept and change to `Component`
  * Provide `Container` component and CSS

## [1.3.x]
> Apr 15, 2017

  * Correct `List`, `Map`
  * Change `Rext.bootstrap` to `Rext.application` and `init` to `launch`
  * Provide `HashRouter` component and `Router` decorator
  * Revise `Store` with new implementation
  * Update README.md

## [1.2.x]
> Apr 6, 2017

  * Improve `Store` and `Observable`
  * Implement `Model`
  * Fix issue in `router` component
  * Update README.md

## [1.1.x]
> Apr 2, 2017

  * Implement `Observable`
  * Change params in `bootstrap` function
  * Implement `Store`, `Container` and `Router`

## [0.0.1]
> Mar 26, 2017

  * Define Architecture Overview
  * Implement `bootstrap` function to launch the app