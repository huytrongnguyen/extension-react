# Model

## Summary

A Model represents some object that your application manages. Models are used by `Store`, which are in turn used by many of the data-bound components in Extension React.

```js
const user = new Model({
  name: 'Ed',
  gender: 'Male',
  username: 'edspencer'
});
```

### CONFIG

### PROPERTIES

#### phantom:

A hash of field values which holds the initial values of fields.

### METHODS

#### get(fieldName):

Returns the value of the given field.

PARAMETERS:
  * fieldName: The name of the field.

RETURNS:
  * The value of the specified field.

#### set(fieldName, newValue):

Sets the given field to the given value. For example:

```js
record.set('name', 'value');
record.set('age', 0);
```

Store observers are called when the modified record belongs to a store.

PARAMETERS:
  * fieldName: The field to set.
  * newValue: The value for the field.

#### save():

 Saves the model instance.

#### reject():

Usually called by the `Store` to which this model instance has been joined. Rejects all changes made to the model instance, modified fields are reverted to their original values.

### EVENTS