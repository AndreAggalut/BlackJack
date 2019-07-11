// Functional Approach
/*
An objects of suits for each cards using enumeration
*/
const suit = {
  heart: 'heart',
  club: 'club',
  diamond: 'diamond',
  spade: 'spade',
};
/*
  These are the weights of each card
  */
const weight = {
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  jack: 10,
  queen: 10,
  king: 10,
  ace: 11,
};
// grabs both the objects
function createDeck() {
  const freshDeck = [];

  Object.values(suit).forEach(suits => {
    Object.values(weight).forEach(weights => {
      freshDeck.push({
        suits,
        weights,
      });
    });
  });
  return freshDeck;
}

// console.log(deck);

// how can we connect the shuffle to the object
function shuffle() {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // eslint-disable-next-line no-unused-expressions
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}
// console.log(deck);
const deal = deck => {
  const table = {};
  table.playersHand = [];
  table.dealersHand = [];

  const { playersHand, dealersHand } = table;

  playersHand.push(deck.pop());
  dealersHand.push(deck.pop());
  playersHand.push(deck.pop());
  dealersHand.push(deck.pop());
  return table;
};

// function calculateHandValue(hand) {
//     .reduce((total, curr) => total + curr.Weight, 0);
// }
// return playersHand.map(hand => hand.weight)

// function displayHands() {}

const deck = createDeck();
const shuffleHand = shuffle(deck);
const table = deal(deck);
// const calc = calculateHandValue(table);
console.log(table);
