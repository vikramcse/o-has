# o-has
Returns true if an object has a given property

## Install

```sh
$ npm install --save o-has
```

## Example

```js
var has = require('o-has');

var a = {
  name: 'vikram'
};

console.log(has(a, 'name'));
// -> true
```

### Explination

In case we are using JavaScript objects for hashtable solution then, 
we can't rely on any of its inherited properties such as **hasOwnProperty**
here is an example

```js
var obj = {
	name: 'vikram',
	hasOwnProperty: 'dummy'
};

console.log(obj.hasOwnProperty('hasOwnProperty'));
// -> TypeError: Property 'hasOwnProperty' of object obj is not a function
```

In above example it tries to execute *inherited* hasOwnProperty and which
not a function.

The workaround for this problem is to use *Object.prototype* hasOwnProperty method


### `require('o-has')(object, key)`

**Arguments**:
- `object`: Object
- `key`: the key that to be checked

**Returns**: Returns true if an object has a given property

## License

&copy; 2016 vikram. MIT License
