# Storing Data Locally In The Browser

 * Saving cache

```js
import { Cache } from 'ext-react'

Cache.set('token', { tokenId: 1, accessToken: 'abcdef' })
```

 * Retrieving cache

```js
const token = Cache.get('token') // token = { tokenId: 1, accessToken: 'abcdef' }
```

 * Flushing cache

```js
Cache.remove('token')
Cache.remove() // remove all cached data
```
