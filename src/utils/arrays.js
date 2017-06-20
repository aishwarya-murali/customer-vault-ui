/**
* recieves an array and returns a hash map using the key param as the hash key
*
* Example:

  getHashMap([{ id: 'foo', name: 'Foo' }, { id: 'bar', name: 'Bar' }]) =>
  {
    foo: {
      id: 'foo',
      name: 'Foo'
    },
    bar: {
      id: 'bar',
      name: 'Bar'
    }
  }

*
* @param {Array} array
* @param {String} key
*/
export function getHashMap(array, key = 'id') {
  return array.reduce((prev, current) => {
    // eslint-disable-next-line no-param-reassign
    prev[current[key]] = current;

    return prev;
  }, {});
}

/**
* recieves a hash map and returns an array
*

  getArray({ foo: 'bar', baz: 'quux' }) =>
  ['bar', 'quux']

* @param {Object} hashMap
*/
export function getArray(hashMap) {
  return hashMap ? Object.keys(hashMap).map((key) => hashMap[key]) : null;
}
