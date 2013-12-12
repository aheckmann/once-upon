
var once = require('once');

/**
 * The first time any of the passed `events` fire on the EventEmitter,
 * the `cb` is executed. The callback will not be executed thereafter.
 *
 * @param {Array|String} events event(s) to listen to on the `EventEmitter`
 * @param {EventEmitter} ee
 * @param {Function} cb
 */

module.exports = exports = function onceUpon (events, ee, cb) {
  if ('string' == typeof events)
    events = events.split(' ');

  if (!Array.isArray(events))
    throw new TypeError('events must be a string or array');

  if ('function' !== typeof cb)
    throw new TypeError('cb must be a function');

  cb = once(cb);

  events.forEach(function(event) {
    ee.once(event, cb);
  });
};
