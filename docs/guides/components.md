# Components

An Extension React application's UI is made up of one or many components. Extension React provides a wide range of useful Components out of the box, and any Component can easily be extended to create a customized Component.

A `Container` is a special type of Component that can contain other Components.

## Grids

`Grid` is one of the centerpieces of Extension React. It's an incredibly versatile component that provides an easy way to display, sort, group, and edit data.

### Store

`Grid` is simply a component that displays data contained in a `Store`. `Store` can be thought of as a collection of records. The benefit of this setup is separating our concerns. `Grid` is only concerned with displaying the data, while `Store` takes care of fetching and saving the data using `Proxy`.

### Grid Panel

Finally, we defined the Grid panel's columns and gave them a `dataIndex` property. This `dataIndex` associates a field from our model to a column.

### Renderers

You can use the `renderer` property of the column config to change the way in which data is displayed. A `renderer` is a function that modifies the underlying value and returns a new value for display.

### Selection Models

Grid panels can be used to simply display data. However, it is often necessary to interact with the Grid's data. All Grid panels have an `selectionModels`, which determines how data is selected.

### Editing

Grid panel has built-in support for editing.

Cell editing allows you to edit the data in a Grid panel one cell at a time. The first step in implementing cell editing is to configure an editor for each column in your `Grid` that should be editable. This is done using the `editor` config. The simplest way is to specify just the type of the field you want to use as an editor.

If you need more control over how the editor field behaves, the `editor` config can also take a config object for a Field.

Any column in a `Grid` that do not have a `editor` configured will not be editable.

### Grouping

Organizing the rows into groups is easy. First we specify a groupField property on our store.

### Paging

Sometimes your data set is too large to display all on one page. `Grid` supports displaying individual pages from the dataset using a `Paging`, which loads pages using previous/next buttons.

Before we can set up paging on a `Grid`, we have to configure the `Store` to support paging. In the below example we add `pageSize` to the `Store`, and we configure our `Reader` with a `totalProperty`:

```js
import { Store } from 'ext-react'

export default Store({
  storeId: 'DashboardStore',
  autoLoad: true,
  pageSize: 100,
  proxy: {
    url: '/api/dashboard',
    reader: {
      rootProperty: 'users',
      totalProperty: 'total'
    }
  }
})
```

This `Store` is configured to consume a JSON response that looks something like this:

```js
{
    "success": true,
    "total": 4,
    "users": [
        { "name": "Lisa", "email": "lisa@simpsons.com", "phone": "555-111-1224" },
        { "name": "Bart", "email": "bart@simpsons.com", "phone": "555-222-1234" },
        { "name": "Homer", "email": "homer@simpsons.com", "phone": "555-222-1244" },
        { "name": "Marge", "email": "marge@simpsons.com", "phone": "555-222-1254" }
    ]
}
```

## Forms

A `Form` Panel is nothing more than a basic `Panel` with form handling abilities added. Form Panels can be used throughout an Extension React application wherever there is a need to collect data from the user.

In addition, Form Panels can use any `Container Layout`, providing a convenient and flexible way to handle the positioning of their fields. Form Panels can also be bound to a `Model`, making it easy to load data from and submit data back to the server.

Under the hood a Form Panel wraps a Basic Form which handles all of its input field management, validation, submission, and form loading services. This means that many of the config options of a Basic Form can be used directly on a Form Panel.