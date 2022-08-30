const readline = require('readline-sync');
const CARDS = [
  ['H', 'Ace'], ['H', 10], ['H', 10], ['H', 10], ['H', 10], ['H', 9], ['H', 8],
  ['H', 7], ['H', 6], ['H', 5], ['H', 4], ['H', 3], ['H', 2],
  ['D', 'Ace'], ['D', 10], ['D', 10], ['D', 10], ['D', 10], ['D', 9], ['D', 8],
  ['D', 7], ['D', 6], ['D', 5], ['D', 4], ['D', 3], ['D', 2]
];

function shuffle(array) {
  let shuffledArray = array.slice();

  for (let index = shuffledArray.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [shuffledArray[index], shuffledArray[otherIndex]] =
    [shuffledArray[otherIndex], shuffledArray[index]];
  }

  return shuffledArray;
}

function initializeDeck(array) {
  return shuffle(array);
}

function dealCard(hand, array) {
  let currentCard = array.shift();
  if (currentCard[1] === 'Ace') {
    currentCard[1] = dealWithAces(currentCard[1]);
  }
  hand.push(currentCard);
}

function dealWithAces(card) {
  if (sumOfHand(card) > 10) {
    return 1;
  } else {
    return 11;
  }
}

function initializeHands(player, dealer, deck) {
  dealCard(player, deck);
  dealCard(dealer, deck);
  dealCard(player, deck);
  dealCard(dealer, deck);
}

function sumOfHand(hand) {
  let handValues = [];
  for (let idx = 0; idx < hand.length; idx++) {
    handValues.push(hand[idx][1]);
  }
  return handValues.reduce((current, previous) => {
    return current + previous;
  }, 0);
}

function checkForABust(hand) {
  return Number(sumOfHand(hand)) > 21;
}

function displayHand(playerHand, dealerHand) {
  let playerValues = [];
  for (let idx = 0; idx < playerHand.length; idx++) {
    playerValues.push(playerHand[idx][1]);
  }
  console.log(`The dealer has: ${dealerHand[0][1]} and an unknown card.`);
  console.log(`You have: ${playerValues.join(' and ')}.`);
}

function playerTurn(playerHand, dealerHand, cards) {
  while (true) {
    displayHand(playerHand, dealerHand);
    if (checkForABust(playerHand)) break;
    console.log("hit or stay?");
    let answer = readline.question();

    if (answer === 'stay' || checkForABust(playerHand)) break;

    dealCard(playerHand, cards);

  }

  if (checkForABust(playerHand)) {
    console.log('You busted! The computer wins!');
  } else {
    console.log('You chose to stay.');
  }
}

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
    console.log(`The dealer hit ${counter} time(s).`);
    console.log('The dealer busted! You win!');
  } else {
    console.log(`The dealer hit ${counter} time(s). Let's see who won!`);
  }
}

function determineWinner(playerHand, dealerHand) {
  if (sumOfHand(playerHand) > sumOfHand(dealerHand)) {
    return 'player';
  } else if (sumOfHand(playerHand) < sumOfHand(dealerHand)) {
    return 'dealer';
  } else {
    return 'tie';
  }
}

function displayResult(playerHand, dealerHand) {
  console.log(`The player has ${sumOfHand(playerHand)} points.`);
  console.log(`The dealer has ${sumOfHand(dealerHand)} points.`);
  if (determineWinner(playerHand, dealerHand) === 'player') {
    console.log('You win!');
  } else if (determineWinner(playerHand, dealerHand) === 'dealer') {
    console.log('The dealer wins!');
  } else {
    console.log('It is a tie!');
  }
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
while (true) {
  console.log('Welcome to 21!');
  console.log('Would you like to see the rules? yes/no');
  let rules = readline.question();

  if (rules === 'yes') {
    //display rules
  }

  while (true) {
    let playerHand = [];
    let dealerHand = [];
    let shuffledDeck = initializeDeck(CARDS);

    initializeHands(playerHand, dealerHand, shuffledDeck);

    playerTurn(playerHand, dealerHand, shuffledDeck);

    if (!checkForABust(playerHand)) {
      dealerTurn(dealerHand, shuffledDeck);
    }

    if (!checkForABust(playerHand) && !checkForABust(dealerHand)) {
      displayResult(playerHand, dealerHand);
    }

    console.log('Would you like to play again? yes/no');
    let playAgain = readline.question();

    if (playAgain === 'no') break;
  }

  console.log('Thanks for playing 21!');

  break;
}
