/**
 * Changes in this version:
 * - Included underscore.js
 * - Removed invalid spaces from list
 * 
 * Next steps:
 * - Add Memoization
 * 
 * Achievements:
 * - With changes made to this version, I was able to push the recursion depth
 *   to 15.
 * 
 * @version 0.2
 * @previous_version 0.1
 */

var os_ = require('os');
var __ = require('underscore');

/*
console.log(__.uniq([3, 4, 6, 7, 3, 4]));
return;
*/

var RECURSION_LIMIT = 15;
console.log(Math.pow(4, RECURSION_LIMIT));

var orderedDeck = ["sK", "sQ", "sJ", "s0", "s9", "s8", "s7", "s6", "s5", "s4", "s3", "s2", "sA",  
                   "hK", "hQ", "hJ", "h0", "h9", "h8", "h7", "h6", "h5", "h4", "h3", "h2", "hA",  
                   "dK", "dQ", "dJ", "d0", "d9", "d8", "d7", "d6", "d5", "d4", "d3", "d2", "dA",  
                   "cK", "cQ", "cJ", "c0", "c9", "c8", "c7", "c6", "c5", "c4", "c3", "c2", "cA"];
var shuffledDeck = shuffle(orderedDeck);
/*
shuffledDeck = ["sK", "sQ", "sJ", "s0", "s9", "s8", "s7", "s6", "s5", "s4", "s3", "sA", "s2",  
                   "hK", "hQ", "hJ", "h0", "h9", "h8", "h7", "h6", "h5", "h4", "h3", "hA", "h2",  
                   "dK", "dQ", "dJ", "d0", "d9", "d8", "d7", "d6", "d5", "d4", "d3", "dA", "d2",  
                   "cK", "cQ", "cJ", "c0", "c9", "c8", "c7", "c6", "c5", "c4", "c3", "cA", "c2"];
*/
var goalState = translateAbbreviatedDeckToValues(orderedDeck);
var originalState = translateAbbreviatedDeckToValues(shuffledDeck);

function getAllCardInfo() {
    return [
        {"array_value":1, "ordinal": 13, "name": "king", "suit": "diamonds", "abbreviation": "sK", "description": "King of Spades"}, 
        {"array_value":2, "ordinal": 12, "name": "queen", "suit": "diamonds", "abbreviation": "sQ", "description": "Queen of Spades"}, 
        {"array_value":3, "ordinal": 11, "name": "jack", "suit": "diamonds", "abbreviation": "sJ", "description": "Jack of Spades"}, 
        {"array_value":4, "ordinal": 10, "name": "10", "suit": "diamonds", "abbreviation": "s0", "description": "Ten of Spades"}, 
        {"array_value":5, "ordinal": 9, "name": "9", "suit": "diamonds", "abbreviation": "s9", "description": "Nine of Spades"}, 
        {"array_value":6, "ordinal": 8, "name": "8", "suit": "diamonds", "abbreviation": "s8", "description": "Eight of Spades"}, 
        {"array_value":7, "ordinal": 7, "name": "7", "suit": "diamonds", "abbreviation": "s7", "description": "Seven of Spades"}, 
        {"array_value":8, "ordinal": 6, "name": "6", "suit": "diamonds", "abbreviation": "s6", "description": "Six of Spades"}, 
        {"array_value":9, "ordinal": 5, "name": "5", "suit": "diamonds", "abbreviation": "s5", "description": "Five of Spades"}, 
        {"array_value":10, "ordinal": 4, "name": "4", "suit": "diamonds", "abbreviation": "s4", "description": "Four of Spades"}, 
        {"array_value":11, "ordinal": 3, "name": "3", "suit": "diamonds", "abbreviation": "s3", "description": "Three of Spades"},
        {"array_value":12, "ordinal": 2, "name": "2", "suit": "diamonds", "abbreviation": "s2", "description": "Two of Spades"}, 
        {"array_value":null, "ordinal": 1, "name": "ace", "suit": "diamonds", "abbreviation": "sA", "description": "Ace of Spades"}, 

        {"array_value":13, "ordinal": 13, "name": "king", "suit": "hearts", "abbreviation": "hK", "description": "King of Hearts"}, 
        {"array_value":14, "ordinal": 12, "name": "queen", "suit": "hearts", "abbreviation": "hQ", "description": "Queen of Hearts"}, 
        {"array_value":15, "ordinal": 11, "name": "jack", "suit": "hearts", "abbreviation": "hJ", "description": "Jack of Hearts"}, 
        {"array_value":16, "ordinal": 10, "name": "10", "suit": "hearts", "abbreviation": "h0", "description": "Ten of Hearts"}, 
        {"array_value":17, "ordinal": 9, "name": "9", "suit": "hearts", "abbreviation": "h9", "description": "Nine of Hearts"}, 
        {"array_value":18, "ordinal": 8, "name": "8", "suit": "hearts", "abbreviation": "h8", "description": "Eight of Hearts"}, 
        {"array_value":19, "ordinal": 7, "name": "7", "suit": "hearts", "abbreviation": "h7", "description": "Seven of Hearts"}, 
        {"array_value":20, "ordinal": 6, "name": "6", "suit": "hearts", "abbreviation": "h6", "description": "Six of Hearts"}, 
        {"array_value":21, "ordinal": 5, "name": "5", "suit": "hearts", "abbreviation": "h5", "description": "Five of Hearts"}, 
        {"array_value":22, "ordinal": 4, "name": "4", "suit": "hearts", "abbreviation": "h4", "description": "Four of Hearts"}, 
        {"array_value":23, "ordinal": 3, "name": "3", "suit": "hearts", "abbreviation": "h3", "description": "Three of Hearts"},
        {"array_value":24, "ordinal": 2, "name": "2", "suit": "hearts", "abbreviation": "h2", "description": "Two of Hearts"}, 
        {"array_value":null, "ordinal": 1, "name": "ace", "suit": "hearts", "abbreviation": "hA", "description": "Ace of Hearts"}, 
        
        {"array_value":25, "ordinal": 13, "name": "king", "suit": "diamonds", "abbreviation": "dK", "description": "King of Diamonds"}, 
        {"array_value":26, "ordinal": 12, "name": "queen", "suit": "diamonds", "abbreviation": "dQ", "description": "Queen of Diamonds"}, 
        {"array_value":27, "ordinal": 11, "name": "jack", "suit": "diamonds", "abbreviation": "dJ", "description": "Jack of Diamonds"}, 
        {"array_value":28, "ordinal": 10, "name": "10", "suit": "diamonds", "abbreviation": "d0", "description": "Ten of Diamonds"}, 
        {"array_value":29, "ordinal": 9, "name": "9", "suit": "diamonds", "abbreviation": "d9", "description": "Nine of Diamonds"}, 
        {"array_value":30, "ordinal": 8, "name": "8", "suit": "diamonds", "abbreviation": "d8", "description": "Eight of Diamonds"}, 
        {"array_value":31, "ordinal": 7, "name": "7", "suit": "diamonds", "abbreviation": "d7", "description": "Seven of Diamonds"}, 
        {"array_value":32, "ordinal": 6, "name": "6", "suit": "diamonds", "abbreviation": "d6", "description": "Six of Diamonds"}, 
        {"array_value":33, "ordinal": 5, "name": "5", "suit": "diamonds", "abbreviation": "d5", "description": "Five of Diamonds"}, 
        {"array_value":34, "ordinal": 4, "name": "4", "suit": "diamonds", "abbreviation": "d4", "description": "Four of Diamonds"}, 
        {"array_value":35, "ordinal": 3, "name": "3", "suit": "diamonds", "abbreviation": "d3", "description": "Three of Diamonds"},
        {"array_value":36, "ordinal": 2, "name": "2", "suit": "diamonds", "abbreviation": "d2", "description": "Two of Diamonds"}, 
        {"array_value":null, "ordinal": 1, "name": "ace", "suit": "diamonds", "abbreviation": "dA", "description": "Ace of Diamonds"}, 
        
        {"array_value":37, "ordinal": 13, "name": "king", "suit": "clubs", "abbreviation": "cK", "description": "King of Clubs"}, 
        {"array_value":38, "ordinal": 12, "name": "queen", "suit": "clubs", "abbreviation": "cQ", "description": "Queen of Clubs"}, 
        {"array_value":39, "ordinal": 11, "name": "jack", "suit": "clubs", "abbreviation": "cJ", "description": "Jack of Clubs"}, 
        {"array_value":40, "ordinal": 10, "name": "10", "suit": "clubs", "abbreviation": "c0", "description": "Ten of Clubs"}, 
        {"array_value":41, "ordinal": 9, "name": "9", "suit": "clubs", "abbreviation": "c9", "description": "Nine of Clubs"}, 
        {"array_value":42, "ordinal": 8, "name": "8", "suit": "clubs", "abbreviation": "c8", "description": "Eight of Clubs"}, 
        {"array_value":43, "ordinal": 7, "name": "7", "suit": "clubs", "abbreviation": "c7", "description": "Seven of Clubs"}, 
        {"array_value":44, "ordinal": 6, "name": "6", "suit": "clubs", "abbreviation": "c6", "description": "Six of Clubs"}, 
        {"array_value":45, "ordinal": 5, "name": "5", "suit": "clubs", "abbreviation": "c5", "description": "Five of Clubs"}, 
        {"array_value":46, "ordinal": 4, "name": "4", "suit": "clubs", "abbreviation": "c4", "description": "Four of Clubs"}, 
        {"array_value":47, "ordinal": 3, "name": "3", "suit": "clubs", "abbreviation": "c3", "description": "Three of Clubs"},
        {"array_value":48, "ordinal": 2, "name": "2", "suit": "clubs", "abbreviation": "c2", "description": "Two of Clubs"}, 
        {"array_value":null, "ordinal": 1, "name": "ace", "suit": "clubs", "abbreviation": "cA", "description": "Ace of Clubs"}, 
           ];
}
         
function determineRulingSuit(index) {
    var deck = getAllCardInfo();
    if (index < 0)  throw new Error();
    if (index >= deck.length)  throw new Error();
    return deck[index].suit;
}

function getCardByValue(p) {
    var deck = getAllCardInfo();
    for (var i=0; i < deck.length; i++) {
        if (deck[i].array_value == p) return deck[i];
    }
    throw new Error();
}

function getCardByAbbreviation(p) {
    var deck = getAllCardInfo();
    for (var i=0; i < deck.length; i++) {
        if (deck[i].abbreviation == p) return deck[i];
    }
    throw new Error();
}

function getCardAbbreviationByValue(p) {
    return getCardByValue(p).abbreviation;
}

function getCardValueByAbbreviation(p) {
    return getCardByAbbreviation(p).array_value;
}

function translateAbbreviatedDeckToValues(a) {
    var r = [];
    for (var i=0; i < a.length; i++) {
        r.push(getCardValueByAbbreviation(a[i]));
    }
    return r;
}

function translateValueDeckToAbbreviations(a) {
    var r = [];
    for (var i=0; i < a.length; i++) {
        r.push(getCardAbbreviationByValue(a[i]));
    }
    return r;
}

function translateCardLong(val) {
    var o = getCardInfo(val);
    if (o == null) return null;
    return o.description;
}

function translateCardShort(val) {
    var o = getCardInfo(val);
    if (o == null) return null;
    return o.abbreviation;
}

function shuffle(a) {
    var r = [];
    var index;
    for (var i=0; i < a.length; i++) {
        index = Math.floor((Math.random()*a.length)+1) - 1;
        r.splice(index, 0, a[i]);
    }
    return r;
}

function testGoalState(a) {
    var score = 0;
    for (var i=0; i < goalState.length; i++) {
        if (goalState[i] == a[i]) {
            score++;
        }
    }
    return {"result":score == goalState.length ? "success" : "failure", 
            "grade":Math.floor((score/goalState.length*100)),
            "state":a};
}

function findIndexOfCard(a, card) {
    for (var i=0; i < a.length; i++) {
        if (a[i] == card) return i;
    }
    return -1;  // Throw Exception
}

function findSpaceIndices(a) {
    var spaceIndices = [];
    for (var i=0; i < a.length; i++) {
        if(a[i] == null) spaceIndices.push(i);
    }
    //console.log(spaceIndices);
    return spaceIndices;
}

function determineValidSpaces(a, spaceIndices) {
    var spaces = [];
    for (var i=0; i < spaceIndices.length; i++) {
        var precedingCard = findPrecedingCard(a, spaceIndices[i]);
        
        // If the preceding card is a space we can't make a move with this
        // space, so ignore it.
        if (precedingCard == null)  continue;
        
        // If the preceding card is a 2, we can't make a move with this space,
        // so ignore it.
        //console.log(precedingCard);
        //console.dir(getCardByValue(precedingCard));
        if (getCardByValue(precedingCard).ordinal == 2)  continue;
        
        spaces.push(spaceIndices[i]);
    }
    //console.log(spaces);
    //process.exit();
    return spaces;
}

function findPrecedingCard(a, spaceIndex) {
    if (spaceIndex == 0) return 0;  // Before the start of the list.
    return a[spaceIndex-1];
}

function findNextInSequence(precedingCard) {
    if (precedingCard == 0) return 1;  // The King of Spades.
    
    var card = getCardByValue(precedingCard);
    if (card.ordinal == 2)
        return null;  // The card following a 2 should be a space.
    return precedingCard+1;
}

function makeMove(a, spaceIndex) {
    var precedingCard = findPrecedingCard(a, spaceIndex);
    // If the precedingCard is a space, it will be handled by another element.
    if (precedingCard == null) return null;
    
    var nextCard = findNextInSequence(precedingCard);
    // If the next card should be a space, we're at the end of the row.
    if (nextCard == null) return null;
    
    var nextCardIndex = findIndexOfCard(a, nextCard);

    var a2 = a.slice();
    // Move the card.
    a2[spaceIndex] = nextCard;
    // Set the moved card's location to null.  Now it is a space.
    a2[nextCardIndex] = null;
    return a2;
}

function move(a, recursionCount) {
    recursionCount++;
    if (recursionCount >= RECURSION_LIMIT) {
        console.log('**RECURSION LIMIT REACHED**');
        return testGoalState(a);
    }
    
    var spaces = determineValidSpaces(a, findSpaceIndices(a));
    var a2, result;
    var attempts = [];
    for (var i=0; i < spaces.length; i++) {
        a2 = makeMove(a, spaces[i]);
        if (a2 == null) continue;

        result = testGoalState(a2);
        if (result.result == "success") return result;
        
        result = move(a2, recursionCount);
        if (result.result == "success") return result;
        
        attempts.push(result);
    }
    
    var max = testGoalState(a);
    var maxScore = max.score;
    if (attempts.length > 0) {
        for (var i=0; i < attempts.length; i++) {
            if (attempts[i].score > maxScore) {
                max = attempts[i];
                maxScore = max.score;
            }
        }
    }

    console.log('--UNWINDING--');
    return max;  // Our best effort
}
/*
console.log(determineRulingSuit(6));
console.log(getCardInfo(1));
console.log(translateCardShort(1));
console.log(translateCardLong(1));
console.log(findSpaces(originalState));
console.log(findPrecedingCard(originalState, 3));
*/
//console.log(findNextInSequence(4));
//console.dir(makeMove(originalState, 4));
console.log('');
console.log(shuffledDeck);
console.log('starting...');
var res = move(originalState, 0);
console.log(res);
console.log(translateValueDeckToAbbreviations(res.state));
console.log('...done.');
