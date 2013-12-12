
var EE = require('events').EventEmitter;
var assert = require('assert');
var upon = require('../');

describe('once-upon', function() {
  it('exports a function', function(done) {
    assert.equal('function', typeof upon);
    done();
  });

  it('expects either a string or array of events', function(done) {
    var rgx = /must be a string or array/;

    ;[null, undefined, 0, Object, /a/, console.log].forEach(function(item) {
      assert.throws(function () {
        upon(null, new EE, function(){});
      }, rgx);
    });

    done();
  });

  it('expects a callback function', function(done) {
    assert.throws(function() {
      upon('', new EE);
    }, /must be a function/);

    done();
  });

  it('works with a string', function(done) {
    var ee = new EE;
    var count = 0;

    upon('work', ee, function() {
      count++;
    });

    ee.emit('work');
    ee.emit('work');

    assert.equal(1, count);

    done();
  });

  it('works with a space delimited string', function(done) {
    var ee = new EE;
    var count = 0;

    upon('wake sleep', ee, function() {
      count++;
    });

    ee.emit('sleep');
    ee.emit('wake');

    assert.equal(1, count);

    done();
  });

  it('works with an array', function(done) {
    var ee = new EE;
    var count = 0;

    upon(['wake', 'sleep'], ee, function() {
      count++;
    });

    ee.emit('sleep');
    ee.emit('wake');

    assert.equal(1, count);

    done();
  });
});
