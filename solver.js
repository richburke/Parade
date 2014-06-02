/**
 * Changes in this version:
 * - Write successes to file
 * - Wrap in paraderunner
 * - Structure better
 * - Run for X (100) number of times
 *
 * Next steps:
 * - Rework move()
 * - Rework scoring of state
 * - Be able to pass a deck and attempt to solve it
 * - Run until failed file reaches X (100) MB
 * - Create custom modules
 * - Record steps in success
 * - Add heuristics
 * - Continue integration with underscore js
 *
 * @version 1.0
 */

var os_ = require('os');
var fs_ = require('fs');
var __ = require('lodash');

var deck = require('./deck');
deckutils = new deck();

var solve = function(deckArray) {
  if (!deckArray) {
    deckArray = deckutils.shuffle();
  }

  console.log("Solving...!");
  console.log(deckutils.hash(deckArray));
  console.log(deckutils.translateAbbreviationsToValues(deckArray));
  var spaceIndices = deckutils.findSpaceIndices(deckArray);
  spaceIndices = deckutils.determineValidSpaces(deckArray, spaceIndices);
  console.log(spaceIndices);
  var precedingCard, nextCard;
  spaceIndices.forEach(function(v, i) {
      precedingCard = deckutils.findPrecedingCard(deckArray, v);
      console.log("Preceding card");
      console.log(precedingCard.description);
      nextCard = deckutils.findNextInSequence(precedingCard, i);
      console.log("Next card");
      console.log(nextCard.description);
    });
}

module.exports.solve = solve;
