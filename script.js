var cardDeck = ['2C', '2S', '2D', '2H', '3C', '3S', '3D', '3H', '4C', '4S', '4D', '4H', '5C', '5S', '5D', '5H', '6C', '6S', '6D', '6H', '7C', '7S', '7D', '7H', '8C', '8S', '8D', '8H', '9C', '9S', '9D', '9H', '10C', '10S', '10D', '10H', 'JC', 'JS', 'JD', 'JH', 'QC', 'QS', 'QD', 'QH', 'KC', 'KS', 'KD', 'KH', 'AC', 'AS', 'AD', 'AH'];

alert("Welcome to BlackJack \n Please hit OK to proceed");
var playerScore = 0;
var playerHand = [];

var addCard = () => {
  var newCard = cardDeck[Math.floor(Math.random() * cardDeck.length)];
  playerHand.push(newCard);
  var countHand = function (hand) {
  var count = 0;
  var hasAce = false;
  for (var i = 0; i < playerHand.length; i++) {
    switch (playerHand[i][0]) {
      case 'J':
      case 'Q':
      case 'K':
      case '1':
        count += 10;
        break;
      case 'A':
        count += 11;
        hasAce = true;
        break;
      default:
        count += parseInt(playerHand[i][0]);
    }
  }

  if (hasAce && count > 21) {
    for (var i = 0; i < playerHand.length; i++) {
      if (playerHand[i][0] === 'A' && count > 21) {
        count -= 10;
      }
    }
  }
  playerScore = count;
  return count;
}

  console.log('Your hand: ' + playerHand + '\nYour score: ' + countHand(playerScore));
  alert('Your hand: ' + playerHand + '\nYour score: ' + countHand(playerScore));
  return playerScore;
}

var freshStart = () => {
  addCard();
  addCard();
}

var hitOrStay = () => {
  if (playerScore === 21) {
    alert('BlackJack! You won!');
    console.log('BlackJack! You won!');
  } else if (playerScore < 21) {
    var playAgain = prompt('You have ' + playerScore + ', Stand or hit?', 'stand or hit?');
    if (playAgain === 'hit') {
      addCard();
      hitOrStay();
    } else if (playAgain === 'stand') {
      alert('Please run program again!');
      console.log('Please run program again!');
    }
  } else if (playerScore > 21) {
    alert('Ah, you have busted! Please run program again!');
    console.log('Ah, you have busted! Please run program again!');
  }
}

freshStart();
hitOrStay();

/*

var addAceOne = function () {
  playerHand.push(cardDeck[51]);
  playerScore += 1;
}

var addAceTwo = function () {
  playerHand.push(cardDeck[50]);
  playerScore += 1;
}

var addAceThree = function () {
  playerHand.push(cardDeck[49]);
  playerScore += 1;
}

var addAceFour = function () {
  playerHand.push(cardDeck[48]);
  playerScore += 1;
}

var addKing = function () {
  playerHand.push(cardDeck[47]);
  switch (cardDeck[47][0]) {
    case 'K':
      playerScore += 10;
      break;
  }
}

var addTen = function () {
  playerHand.push(cardDeck[35]);
  switch (cardDeck[35][0]) {
    case '1':
      playerScore += 10;
      break;
  }
}

var addFive = function () {
  playerHand.push(cardDeck[14]);
  switch (cardDeck[14][0]) {
    case '5':
      playerScore += 5;
      break;
  }
}

var addThree = function () {
  playerHand.push(cardDeck[5]);
  switch (cardDeck[5][0]) {
    case '3':
      playerScore += 3;
      break;
  }
}

var countHand = function (hand) {
  var count = 0;
  var hasAce = false;
  for (var i = 0; i < playerHand.length; i++) {
    switch (playerHand[i][0]) {
      case 'J':
      case 'Q':
      case 'K':
      case '1':
        count += 10;
        break;
      case 'A':
        count += 11;
        hasAce = true;
        break;
      default:
        count += parseInt(playerHand[i][0]);
    }
  }
  if (hasAce && count > 21) {
    for (var i = 0; i < playerHand.length; i++) {
      if (playerHand[i][0] === 'A' && count > 21) {
        count -= 10;
      }
    }
  }
  return count;
}

addFive();
console.log(countHand(playerScore));

addAceOne();
console.log(countHand(playerScore));

addAceTwo();
console.log(countHand(playerScore));

addAceThree();
console.log(countHand(playerScore));

addAceFour();
console.log(countHand(playerScore));

addThree();
console.log(countHand(playerScore));

*/
