/**
 * Finish restructuring.
 *
 * Changes in this version:
 * - Write successes to file
 * - Run for X (100) number of times
 *
 * Next steps:
 * - Rework move()
 * - Rework scoring of state
 * - Be able to pass a deck and attempt to solve it
 * - Run until failed file reaches X (100) MB
 * - Record steps in success
 * - Add heuristics
 * - Work in integration with lodash, if relevant
 *
 * @version 1.0
 */

var os_ = require('os');
var fs_ = require('fs');
var __ = require('lodash');

var solver = require('./solver');
solver.run();
