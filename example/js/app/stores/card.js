import { Store } from '@/rext'

export default Store({
  storeId: 'CardStore',
  proxy: {
    url: '/api/cards',
    method: 'post'
  },
  pageSize: 100
});