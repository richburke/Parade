/**
 * A utility class for determining information about a given card.
 *
 * @type {_|exports}
 * @private
 */

var Card = function() {
  var cardInfo = [
    {"value":1, "ordinal": 13, "name": "king", "suit": "diamonds", "abbreviation": "sK", "description": "King of Spades"},
    {"value":2, "ordinal": 12, "name": "queen", "suit": "diamonds", "abbreviation": "sQ", "description": "Queen of Spades"},
    {"value":3, "ordinal": 11, "name": "jack", "suit": "diamonds", "abbreviation": "sJ", "description": "Jack of Spades"},
    {"value":4, "ordinal": 10, "name": "10", "suit": "diamonds", "abbreviation": "s0", "description": "Ten of Spades"},
    {"value":5, "ordinal": 9, "name": "9", "suit": "diamonds", "abbreviation": "s9", "description": "Nine of Spades"},
    {"value":6, "ordinal": 8, "name": "8", "suit": "diamonds", "abbreviation": "s8", "description": "Eight of Spades"},
    {"value":7, "ordinal": 7, "name": "7", "suit": "diamonds", "abbreviation": "s7", "description": "Seven of Spades"},
    {"value":8, "ordinal": 6, "name": "6", "suit": "diamonds", "abbreviation": "s6", "description": "Six of Spades"},
    {"value":9, "ordinal": 5, "name": "5", "suit": "diamonds", "abbreviation": "s5", "description": "Five of Spades"},
    {"value":10, "ordinal": 4, "name": "4", "suit": "diamonds", "abbreviation": "s4", "description": "Four of Spades"},
    {"value":11, "ordinal": 3, "name": "3", "suit": "diamonds", "abbreviation": "s3", "description": "Three of Spades"},
    {"value":12, "ordinal": 2, "name": "2", "suit": "diamonds", "abbreviation": "s2", "description": "Two of Spades"},
    {"value":null, "ordinal": 1, "name": "ace", "suit": "diamonds", "abbreviation": "sA", "description": "Ace of Spades"},

    {"value":13, "ordinal": 13, "name": "king", "suit": "hearts", "abbreviation": "hK", "description": "King of Hearts"},
    {"value":14, "ordinal": 12, "name": "queen", "suit": "hearts", "abbreviation": "hQ", "description": "Queen of Hearts"},
    {"value":15, "ordinal": 11, "name": "jack", "suit": "hearts", "abbreviation": "hJ", "description": "Jack of Hearts"},
    {"value":16, "ordinal": 10, "name": "10", "suit": "hearts", "abbreviation": "h0", "description": "Ten of Hearts"},
    {"value":17, "ordinal": 9, "name": "9", "suit": "hearts", "abbreviation": "h9", "description": "Nine of Hearts"},
    {"value":18, "ordinal": 8, "name": "8", "suit": "hearts", "abbreviation": "h8", "description": "Eight of Hearts"},
    {"value":19, "ordinal": 7, "name": "7", "suit": "hearts", "abbreviation": "h7", "description": "Seven of Hearts"},
    {"value":20, "ordinal": 6, "name": "6", "suit": "hearts", "abbreviation": "h6", "description": "Six of Hearts"},
    {"value":21, "ordinal": 5, "name": "5", "suit": "hearts", "abbreviation": "h5", "description": "Five of Hearts"},
    {"value":22, "ordinal": 4, "name": "4", "suit": "hearts", "abbreviation": "h4", "description": "Four of Hearts"},
    {"value":23, "ordinal": 3, "name": "3", "suit": "hearts", "abbreviation": "h3", "description": "Three of Hearts"},
    {"value":24, "ordinal": 2, "name": "2", "suit": "hearts", "abbreviation": "h2", "description": "Two of Hearts"},
    {"value":null, "ordinal": 1, "name": "ace", "suit": "hearts", "abbreviation": "hA", "description": "Ace of Hearts"},

    {"value":25, "ordinal": 13, "name": "king", "suit": "diamonds", "abbreviation": "dK", "description": "King of Diamonds"},
    {"value":26, "ordinal": 12, "name": "queen", "suit": "diamonds", "abbreviation": "dQ", "description": "Queen of Diamonds"},
    {"value":27, "ordinal": 11, "name": "jack", "suit": "diamonds", "abbreviation": "dJ", "description": "Jack of Diamonds"},
    {"value":28, "ordinal": 10, "name": "10", "suit": "diamonds", "abbreviation": "d0", "description": "Ten of Diamonds"},
    {"value":29, "ordinal": 9, "name": "9", "suit": "diamonds", "abbreviation": "d9", "description": "Nine of Diamonds"},
    {"value":30, "ordinal": 8, "name": "8", "suit": "diamonds", "abbreviation": "d8", "description": "Eight of Diamonds"},
    {"value":31, "ordinal": 7, "name": "7", "suit": "diamonds", "abbreviation": "d7", "description": "Seven of Diamonds"},
    {"value":32, "ordinal": 6, "name": "6", "suit": "diamonds", "abbreviation": "d6", "description": "Six of Diamonds"},
    {"value":33, "ordinal": 5, "name": "5", "suit": "diamonds", "abbreviation": "d5", "description": "Five of Diamonds"},
    {"value":34, "ordinal": 4, "name": "4", "suit": "diamonds", "abbreviation": "d4", "description": "Four of Diamonds"},
    {"value":35, "ordinal": 3, "name": "3", "suit": "diamonds", "abbreviation": "d3", "description": "Three of Diamonds"},
    {"value":36, "ordinal": 2, "name": "2", "suit": "diamonds", "abbreviation": "d2", "description": "Two of Diamonds"},
    {"value":null, "ordinal": 1, "name": "ace", "suit": "diamonds", "abbreviation": "dA", "description": "Ace of Diamonds"},

    {"value":37, "ordinal": 13, "name": "king", "suit": "clubs", "abbreviation": "cK", "description": "King of Clubs"},
    {"value":38, "ordinal": 12, "name": "queen", "suit": "clubs", "abbreviation": "cQ", "description": "Queen of Clubs"},
    {"value":39, "ordinal": 11, "name": "jack", "suit": "clubs", "abbreviation": "cJ", "description": "Jack of Clubs"},
    {"value":40, "ordinal": 10, "name": "10", "suit": "clubs", "abbreviation": "c0", "description": "Ten of Clubs"},
    {"value":41, "ordinal": 9, "name": "9", "suit": "clubs", "abbreviation": "c9", "description": "Nine of Clubs"},
    {"value":42, "ordinal": 8, "name": "8", "suit": "clubs", "abbreviation": "c8", "description": "Eight of Clubs"},
    {"value":43, "ordinal": 7, "name": "7", "suit": "clubs", "abbreviation": "c7", "description": "Seven of Clubs"},
    {"value":44, "ordinal": 6, "name": "6", "suit": "clubs", "abbreviation": "c6", "description": "Six of Clubs"},
    {"value":45, "ordinal": 5, "name": "5", "suit": "clubs", "abbreviation": "c5", "description": "Five of Clubs"},
    {"value":46, "ordinal": 4, "name": "4", "suit": "clubs", "abbreviation": "c4", "description": "Four of Clubs"},
    {"value":47, "ordinal": 3, "name": "3", "suit": "clubs", "abbreviation": "c3", "description": "Three of Clubs"},
    {"value":48, "ordinal": 2, "name": "2", "suit": "clubs", "abbreviation": "c2", "description": "Two of Clubs"},
    {"value":null, "ordinal": 1, "name": "ace", "suit": "clubs", "abbreviation": "cA", "description": "Ace of Clubs"},
  ];

  this.getValue = function(i) {
    if (!this.testBounds(i)) throw new Error();
    return cardInfo[i].value;
  };
  this.getOrdinal = function(i) {
    if (!this.testBounds(i)) throw new Error();
    return cardInfo[i].ordinal;
  };
  this.getName = function(i) {
    if (!this.testBounds(i)) throw new Error();
    return cardInfo[i].name;
  };
  this.getSuit = function(i) {
    if (!this.testBounds(i)) throw new Error();
    return cardInfo[i].suit;
  };
  this.getAbbreviation = function(i) {
    if (!this.testBounds(i)) throw new Error();
    return cardInfo[i].abbreviation;
  };
  this.getDescription = function(i) {
    if (!this.testBounds(i)) throw new Error();
    return cardInfo[i].description;
  };
  this.testBounds = function(i, deck) {
    if (!deck) {
      deck = cardInfo;
    }
    return i >= 0 && i < deck.length;
  };
  this.getByValue = function(p) {
    for (var i=0; i < cardInfo.length; i++) {
      if (cardInfo[i].value === p) return cardInfo[i];
    }
    throw new Error();
  };
  this.getByAbbreviation = function(p) {
    for (var i=0; i < cardInfo.length; i++) {
      if (cardInfo[i].abbreviation === p) return cardInfo[i];
    }
    throw new Error();
  };
  this.translateAbbreviationToIndex = function(p) {
    for (var i=0; i < cardInfo.length; i++) {
      if (cardInfo[i].abbreviation === p) return i;
    }
    throw new Error();
  };
  this.isAce = function(p) {
    if (p === 'sA') return true;
    if (p === 'hA') return true;
    if (p === 'dA') return true;
    if (p === 'cA') return true;
    return false;
  };
};

module.exports = Card;
