/**
 *
 * @type {_|exports}
 * @private
 */

var __ = require('lodash');

var card = require('./card');
var cardutils = new card();

var Deck = function() {
  var orderedDeck = ["sK", "sQ", "sJ", "s0", "s9", "s8", "s7", "s6", "s5", "s4", "s3", "s2", "sA",
    "hK", "hQ", "hJ", "h0", "h9", "h8", "h7", "h6", "h5", "h4", "h3", "h2", "hA",
    "dK", "dQ", "dJ", "d0", "d9", "d8", "d7", "d6", "d5", "d4", "d3", "d2", "dA",
    "cK", "cQ", "cJ", "c0", "c9", "c8", "c7", "c6", "c5", "c4", "c3", "c2", "cA"];
  var goalState = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, null,
    13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, null,
    25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, null,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, null
  ];

  this.getOrderedDeck = function() {
    return orderedDeck;
  };
  this.getDeckState = function(deckArray) {
    var r = [];
    deckArray.forEach(function(v) {
      r.push(cardutils.getByAbbreviation(v));
    });
    return r;
  };
  this.getDeckValues = function(deckArray) {
    var r = [];
    deckArray.forEach(function(v) {
      r.push(cardutils.getByAbbreviation(v).value);
    });
    return r;
  };
  this.isGoalState = function(deckArray) {
    console.log('in isGoalState');
    console.log(deckArray);
    var r = this.getDeckValues(deckArray);

    if (r.length != goalState.length) return false;
    for (var i=0; i < r.length; i++) {
      if (r[i] !== goalState[i]) return false;
    }
    return true;
  };
  this.hash = function(deckArray) {
    return deckArray.join('');
  };
  this.shuffle = function(deckArray) {
    if (!deckArray) {
      deckArray = orderedDeck;
    }

    var r = [];
    var index;
    deckArray.forEach(function(v) {
      index = Math.floor((Math.random()*deckArray.length)+1) - 1;
      r.splice(index, 0, v);
    });
    return r;
  };
  this.translateAbbreviationsToValues = function(deckArray) {
    var r = [];
    deckArray.forEach(function(v) {
      r.push(cardutils.getValue(cardutils.translateAbbreviationToIndex(v)));
    });
    return r;
  };
  this.findSpaceIndices = function(deckArray) {
    var spaceIndices = [];
    var cardValue;
    deckArray.forEach(function(v, i) {
      cardValue = cardutils.getValue(cardutils.translateAbbreviationToIndex(v));
      if(cardValue === null) spaceIndices.push(i);
    });
    return spaceIndices;
  };
  this.determineValidSpaces = function(deckArray, spaceIndices) {
    var spaces = [];
    var self = this;

    spaceIndices.forEach(function(v) {
      var precedingCard = self.findPrecedingCard(deckArray, v);

      // If the preceding card is 0, it means we're looking at a spot prior
      // to the beginning of the list, so ignore it.
      if (precedingCard.value === 0) return;

      // If the preceding card is a space we can't make a move with this
      // space, so ignore it.
      if (precedingCard.value === null) return;

      // If the preceding card is a 2, we can't make a move with this space,
      // so ignore it.
      if (precedingCard.ordinal === 2) return;

      spaces.push(v);
    });

    return spaces;
  };
  this.findPrecedingCard = function(deckArray, spaceIndex) {
    if (spaceIndex === 0) return 0;  // Before the start of the list.
    return cardutils.getByAbbreviation(deckArray[spaceIndex-1]);
  };
  this.findNextInSequence = function(card, spaceIndex) {
    if (spaceIndex === 0) return cardutils.getByValue(1);  // The King of Spades.
    // There is no card that follows in the sequence.
    if (card.ordinal === null) return null;
    // The card following a 2 should be a space.
    if (card.ordinal === 2) return null;

    return cardutils.getByValue(card.value+1);
  };
};

module.exports = Deck;
