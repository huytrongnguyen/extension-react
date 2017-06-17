import { Store } from '@/rext'

export default Store({
  storeId: 'CardTypeStore',
  data: [
    { id: null, code: 'MELEE', name: 'Melee' },
    { id: null, code: 'SHOOT', name: 'Shoot' },
    { id: null, code: 'MAGIC', name: 'Magic' },
  ]
});