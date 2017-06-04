# Rext

## Summary

The Rext namespace encapsulates all classes, singletons, and utility methods provided by Extension React.

### CONFIG

### PROPERTIES

### METHODS

#### launch(viewport):

Loads application and starts it up with given viewport or configuration after the page is ready.

```js
import 'babel-polyfill';
import React from 'react';
import Rext from 'ext-react';
import Viewport from './components/viewport/viewport';

Rext.launch(<Viewport />);
```

or

```js
import 'babel-polyfill';
import React from 'react';
import Rext from '@/rext';
import CommonService from './services/common';

Rext.launch(async () => {
  await CommonService.initApp();
  return <Viewport />;
});
```

PARAMETERS:
  * viewport

RETURNS:

#### ajax(settings):

Sends an HTTP (Ajax) request to a remote server.

```js
const data = await Rext.ajax({
  url: 'sample.json'
});
```

PARAMETERS:
  * settings:
    * url: The URL to which to send the request.
    * method: The HTTP method to use for the request. Default is 'GET'.
    * params: An object containing properties which are used as parameters to the request.
    * next: The function to be called before the response is returned to support you transform the response if it's needed. The callback is passed the following parameters:
      * response: The response data
    * error: The function to be called upon failure of the request. The callback is passed the following parameters:
      * response: The error response.
    * complete: A function to be called when the request finishes (after `next` or `error` callbacks are executed).

RETURNS:
  * The response data.
