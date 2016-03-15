var expect = require('chai').expect;
var has = require('./index.js');

describe('tests for checking key existance in object', function() {
  it('should return true if the object has the given key', function() {
    var a = {
      name: 'vikram',
      type: 'developer'
    };
    expect(has(a, 'type')).to.be.true;
  });

  it('should return false if the object has the given key', function() {
    var a = {
      name: 'vikram',
      type: 'developer'
    };
    expect(has(a, 'age')).to.be.false;
  });

  it('should return true if the object has internal inherited properties', function() {
    var a = {
      name: 'vikram',
      type: 'developer',
      hasOwnProperty: 'it should not be there',
      toString: 'it should not be there'
    };
    expect(has(a, 'hasOwnProperty')).to.be.true;
    expect(has(a, 'toString')).to.be.true;
  });
});