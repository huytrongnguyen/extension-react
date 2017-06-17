# Dropdown

## Summary

A `Dropdown` is like a combination of a traditional HTML text <input> field and a <select> field; the user is able to type freely into the field, and/or pick values from a dropdown selection list.

The selection list's options are populated from any `Store`, including remote stores. The data items in the store are mapped to each option's displayed text and backing value via the valueField and displayField configurations, respectively.

If your store is remote, you should be sure to set the queryMode to 'remote'.

```js
// app/stores/card-type.js
import { Store } from '@/rext'

export default Store({
  storeId: 'CardTypeStore',
  data: [
    { id: null, code: 'MELEE', name: 'Melee' },
    { id: null, code: 'SHOOT', name: 'Shoot' },
    { id: null, code: 'MAGIC', name: 'Magic' },
  ]
});
```

```js
// app/components//search-form.view.jsx
import React, { Component } from 'react';
import { withProps, Dropdown } from 'ext-react';
import { CardTypeStore } from '~/app/stores/card-type';

export default class extends Component {
  @withProps
  render({ searchForm }) {
    return <section className="form-group form-inline">
      <Dropdown store={CardTypeStore} displayField="name" fieldLabel="Card Type" />
    </section>;
  }
}
```

### CONFIG

#### store: Store

The data source to which the combo is bound.

#### displayField: string

The underlying data field name to bind to this ComboBox.

#### fieldLabel: string

The label for the field.

### PROPERTIES

### METHODS

### EVENTS

#### onSelect(record):

Fires when one list item is selected.

PARAMETERS

  record: selected record

#### onCollapse(records):

Fires when the field's picker is collapsed.

PARAMETERS

  record: selected records