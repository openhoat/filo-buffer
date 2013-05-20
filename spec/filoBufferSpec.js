/*global describe: false, it: false, afterEach: false, beforeEach: false, runs: false, waitsFor: false, expect: false */

var FiloBuffer = require('../lib/FiloBuffer');

describe('FiloBuffer instance', function () {
  var buffer;

  beforeEach(function () {
    buffer = new FiloBuffer(5);
  });

  it('should return "abc"', function () {
    var feedValue;
    feedValue = 'abc';
    buffer.put(feedValue);
    expect(buffer.toString()).toBe(feedValue);
  });

  it('should return "cdefg"', function () {
    var feedValue, start;
    feedValue = 'abcdefg';
    buffer.put(feedValue);
    start = feedValue.length - buffer.getMaxSize();
    expect(buffer.toString()).toBe(feedValue.substring(start));
  });

  it('should return nothing after clear', function () {
    buffer.put('abcdefg');
    buffer.clear();
    expect(buffer.toString()).toBe('');
  });
});