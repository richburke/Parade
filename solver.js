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

var q = [];
var visited = [];

var run = function(deckArray) {
  if (!deckArray) {
    deckArray = deckutils.shuffle();
  }

  deckutils.replaceAces();

  q.push(deckArray);
  solve();
};

var complete = function(result, state) {
  console.log(result, state);
};

/**
 * Simplify deckArray.
 * - Replace aces with spaces immediately.
 * - Make card representation more consistent elsewhere.
 * - Once we start, we don't care what the space was.
 */


var solve = function() {
  var i;

  if (q.length == 0) {
    complete('fail', null);
  }

  var state = q.shift();

  console.log(state);

  if (isGoalState(state)) {
    complete('success');
    return;
  }

  var spaceIndices = deckutils.findSpaceIndices(state);
  spaceIndices = deckutils.determineValidSpaces(state, spaceIndices);

  var newState;
  for (i = 0; i < spaceIndices.length; i++) {
    newState = moveCard(spaceIndices[i], state);
    // If the state was such that we're unable to make a move, try the next.
    if (newState === null) continue;

    console.log('newState');
    console.log(newState);

    if (isGoalState(newState)) {
      complete('success', newState);
      return;
    }
    if (isVisited(newState)) {
      return;
    }

    q.push(newState);

//    precedingCard = deckutils.findPrecedingCard(deckArray, v);
//    console.log("Preceding card");
//    console.log(precedingCard.description);
//    nextCard = deckutils.findNextInSequence(precedingCard, i);
//    console.log("Next card");
//    console.log(nextCard.description);
  }
};

var isVisited = function(state) {

};

/*
 * Can probably be on deckutils
 */
var moveCard = function(state, spaceIndex) {
  var precedingCard = deckutils.findPrecedingCard(state, spaceIndex);
  // If the precedingCard is a space, it will be handled by another element.
  if (precedingCard == null) return null;

  var nextCard = deckutils.findNextInSequence(precedingCard);
  // If the next card should be a space, we're at the end of the row.
  if (nextCard == null) return null;

  var nextCardIndex = deckutils.findIndexOfCard(state, nextCard);

  var newState = state.slice();
  // Move the card.
  newState[spaceIndex] = nextCard;
  // Set the moved card's location to null.  Now it is a space.
  newState[nextCardIndex] = null;
  return newState;
};

/*
 *
 */
var isGoalState = function(state) {
  return deckutils.isGoalState(state);
};



/*
 * Handle as a breadth first search
 *
 * Add starting point to queue
 *
 * Dequeue an element
 *   Find the spaces in deck
 *   Find the possible moves based upon those spaces
 *   Check if any of those meets goal state
 *   If not,
 *     Check if visited
 *       If not, add to
 *         queue
 *         visited array
 *
 * Add those new states to the queue
 */

var determineLocalFrontier = function() {

};


/*
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

  // If we've tried this already and failed,...
  if (isDeckInArray(a, G.faileds)) {
    return testGoalState(a);
  }
  // If we're currently trying this in some branch,...
  if (isDeckInArray(a, G.attempts)) {
    return testGoalState(a);
  }
  G.attempts.push(hashDeck(a));

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

  if (!isDeckInArray(a, G.newFaileds)) {
    G.faileds.push(hashDeck(a));
    G.newFaileds.push(hashDeck(a));
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

  return max;  // Our best effort
}
*/

module.exports.run = run;
