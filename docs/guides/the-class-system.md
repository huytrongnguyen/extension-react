# Class System

## Overview

Because JavaScript is a classless, prototype-oriented language, one of its most powerful features is flexibility. There are multiple solutions to any problem using many different coding styles and techniques. However, this comes with the cost of being unpredictable. Without a unified structure, JavaScript code can be difficult to understand, maintain, and re-use.

## Naming Conventions

Using consistent naming conventions throughout your code base for classes, namespaces and filenames helps keep your code organized, structured and readable.

### Classes

Class names may only contain alphanumeric characters. Numbers are permitted but discouraged, unless they belong to a technical term. Do not use underscores, hyphens, or any other non-alphanumeric character.

### Source Files

The names of the classes map directly to the file paths in which they are stored. As a result, there must only be one class per file.

### Methods and Variables

In a similar fashion to class names, method and variable names may only contain alphanumeric characters. Numbers are permitted but discouraged unless they belong to a technical term. Do not use underscores, hyphens, or any other non-alphanumeric character.

Method and variable names should always be in camelCased. This also applies to acronyms.

### Properties

Class property names follow the exact same convention except when they are static constants.

Static class properties that are constants should be all upper-cased.

### Declaration

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  eat(foodType) {
    console.log(`${this.name} is eating ${foodType}.`);
  }
}

const bob = new Person('Bob');
bob.eat('Salad');
```