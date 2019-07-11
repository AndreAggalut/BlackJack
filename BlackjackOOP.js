// Object Oriented Approach
/*
An objects of suits for each cards using enumeration
*/
const suits = ['heart', 'club', 'diamond', 'spade'];
/*
  These are the weights of each card
  */
const weights = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
/*
create the card object
*/
class Card {
  constructor(suit, weight) {
    this.suits = suits;
    this.weights = weights;
  }
}
/*
create the deck object
*/
class Deck {
  constructor() {
    // create this deck array
    this.card = [];
  }
  // shuffle the cards which will be called in the deck class
  shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [this.deck[i], this.deck[rand]] = [this.deck[rand], this.deck[i]];
    } // swap elements

    return deck;
  }
  // generate new deck and put it on the card array
  generate() {
    suits.forEach(suit => {
      weights.forEach(weight => {
        this.card.push(new Card(suits, weights));
      });
    });
  }
}
/*
provides the current hand of the player/dealer
method displayHands. 
*/

class CardHolder {
  constructor() {
    this.hand = [];
  }

  displayHands() {
    this.hand.forEach(hand => {
      // console.log(
      // `Player's Hand: ${(weights, suits)} Dealers Hand: ${(suits, weights)}`
      // );
    });
  }
}
/*
create a class dealer that inherits from CardHolder 
but makes it a seperate entity from the player
*/
class Dealer extends CardHolder {
  displayHands() {
    console.log("\nPlayer's Hand: ");
    super.displayHands();
  }
}
/*
create a class dealer that inherits from CardHolder 
but makes it a seperate entity from the dealer
*/
class Player extends CardHolder {
  displayHands() {
    console.log("\nDealer's Hand: ");
    super.displayHands();
  }
}
/*
class that create copies of player, dealer, and deck
has a method deal that is used with all the object
has a method that will display hand
has a method checkwinner 
*/
class Main {
  constructor() {
    this.player = new Player();
    this.dealer = new Dealer();
    this.deck = new Deck();
    this.cardHolder = new CardHolder();
  }
  deal() {
    const { player, dealer, deck } = this;
    player.hand.push(deck.card.pop());
    dealer.hand.push(deck.card.pop());
    player.hand.push(deck.card.pop());
    dealer.hand.push(deck.card.pop());
    // console.log(`Player: ${player.hand[0].weights} ${player.hand[1].suits});
    console.log(this.hand);
  }
  // method called inside the class card holder
  displayHand() {
    this.dealer.displayHands();
    this.player.displayHands();
  }

  checkWinner() {
    // variables
    const cards = this.card;
    const playersHand = this.player.hand;
    const dealersHand = this.dealer.hand;

    const playersSum = playersHand
      .map(cards => card.weights)
      .reduce((acc, current) => acc + current);

    const dealersSum = dealersHand
      .map(cards => cards.weight)
      .reduce((acc, current) => acc + current);

    if (dealersSum > playersSum) {
      console.log('Dealer wins!');
    } else if (playersSum < dealersSum) {
      console.log('Player Wins!');
    } else {
      console.log('Its A Tie!');
    }
  }
}
function start() {
  // instantiate the game state class
  const table = new Main();
  table.deal();
  table.displayHand();
  // table.checkWinner();
}

start();
