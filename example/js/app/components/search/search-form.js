import { Component } from '@/rext';
import CardStore from '#/stores/card';
import SearchFormView from './search-form.view';

@Component({
  componentAs: 'searchForm',
  view: SearchFormView
})
export default class {
  search() {
    CardStore.load();
  }

  test() {
    CardStore.getAt(0).set('Name', 'New Name');
  }
}