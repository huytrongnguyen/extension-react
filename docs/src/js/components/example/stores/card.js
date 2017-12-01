import { Store } from '~/rext';

export default Store({
  storeId: 'CardStore',
  fields: [ 'Name' ],
  proxy: {
    url: '/data/card.json'
  }
})