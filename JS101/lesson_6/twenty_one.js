const readline = require('readline-sync');
const CARDS = [
  ['H', 'Ace'], ['H', '10'], ['H', '10'], ['H', '10'], ['H', '10'], ['H', '9'], ['H', '8'],
  ['H', '7'], ['H', '6'], ['H', '5'], ['H', '4'], ['H', '3'], ['H', '2'],
  ['D', 'Ace'], ['D', '10'], ['D', '10'], ['D', '10'], ['D', '10'], ['D', '9'], ['D', '8'],
  ['D', '7'], ['D', '6'], ['D', '5'], ['D', '4'], ['D', '3'], ['D', '2'],
  ['S', 'Ace'], ['S', '10'], ['S', '10'], ['S', '10'], ['S', '10'], ['S', '9'], ['S', '8'],
  ['S', '7'], ['S', '6'], ['S', '5'], ['S', '4'], ['S', '3'], ['S', '2'],
  ['C', 'Ace'], ['C', '10'], ['C', '10'], ['C', '10'], ['C', '10'], ['C', '9'], ['C', '8'],
  ['C', '7'], ['C', '6'], ['C', '5'], ['C', '4'], ['C', '3'], ['C', '2']
];

// INITIALIZE DECK
//shuffles the deck
//outputs shuffled deck
function initializeDeck(array) {
  return shuffle(array);
}

// INITIALIZE HANDS
// deal card playerHand
// deal card dealerHand
// deal card playerHand
// deal card dealerHand
function initializeHands(player, dealer, deck) {
  dealCard(player, deck);
  dealCard(dealer, deck);
  dealCard(player, deck);
  dealCard(dealer, deck);
}

// DEAL CARD
// outputs the first element in the shuffled deck
// removes the first element in shuffled deck
//takes the next card in the deck and puts it in the specified hand
function dealCard(hand, array) {
  hand.push(array.shift());
}

// DISPLAY HAND
// logs the player and dealer hands to the console
function displayHand(playerHand, dealerHand) {
  console.log(`The dealer has: ${dealerHand[0]} and ${(dealerHand.length - 1)} unknown card(s).`);
  console.log(`You have: ${playerHand.join(' and ')}.`);
}

// PLAYER TURN
// display hand
// hit or pass
// check for a bust
function playerTurn(playerHand, dealerHand, cards) {
  while (true) {
    displayHand(playerHand, dealerHand);
    console.log("hit or stay?");
    let answer = readline.question();

    dealCard(playerHand, cards);

    if (answer === 'stay' || checkForABust(playerHand)) break;
  }

  if (checkForABust(playerHand)) {
    //displayResult;
    console.log('You busted! The computer wins!');
  } else {
    console.log('You chose to stay.');
  }
}

// DEALER TURN
// display hand
// hit or pass
// check for a bust
function dealerTurn(dealerHand, cards) {
  let counter = 0;

  while (true) {
    if (sumOfHand(dealerHand) <= 15) {
      dealCard(dealerHand, cards);
      counter++;
    } else {
      break;
    }
  }

  if (checkForABust(dealerHand)) {
    //displayResult;
    console.log(`The dealer hit ${counter} time(s).`);
    console.log('The dealer busted! You win!');
  } else {
    console.log(`The dealer hit ${counter} time(s). Let's see who won!`);
  }
}

//CHECK FOR A BUST
// adds up the total of the cards in hand to see if it is over 21
function sumOfHand(hand) {
  let total = hand.reduce((current, previous) => {
    return current + previous;
  }, 0);
  return total;
}

function checkForABust(hand) {
  return sumOfHand(hand) > 21;
}

//DETERMINE WINNER
// compares score if neither hand is a bust
// logs the winner to the console
function displayResult(playerHand, dealerHand) {
  if (sumOfHand(playerHand) > sumOfHand(dealerHand)) {
    console.log('You win!');
  } else if (sumOfHand(playerHand) < sumOfHand(dealerHand)) {
    console.log('The dealer wins!');
  } else {
    console.log('It is a tie!');
  }
}

// CALCULATING ACES
// determine if the ace should be an 11 or a 1

//SHUFFLE CARDS
// Fisher-Yates shuffle algorithm (mutates)
function shuffle(array) {
  let shuffledArray = array.slice();

  for (let index = shuffledArray.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [shuffledArray[index], shuffledArray[otherIndex]] =
    [shuffledArray[otherIndex], shuffledArray[index]];
  }

  return shuffledArray;
}

// GAME LOOP

while (true) {
  let playerHand = [];
  let dealerHand = [];
  let shuffledDeck = initializeDeck(CARDS);

  initializeHands(playerHand, dealerHand, shuffledDeck);
  displayHand(playerHand, dealerHand);

  playerTurn(playerHand, dealerHand, shuffledDeck);

  dealerTurn(dealerHand, shuffledDeck);

  displayResult(playerHand, dealerHand);

  // play again?
}
