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

// fisher-yates shuffle
function shuffle() {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [deck[i], deck[j]] = [deck[j], deck[i]]; // swap elements
  }
  return deck;
}

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

const winner = table => {
  const { dealersHand, playersHand } = table;

  const playersSum = playersHand
    .map(card => card.weights)
    .reduce((fCard, sCard) => fCard + sCard);

  const dealersSum = dealersHand
    .map(card => card.weights)
    .reduce((fCard, sCard) => fCard + sCard);

  if (playersSum > dealersSum) {
    console.log('PLAYER WINS!!', playersSum);
  } else if (playersSum < dealersSum) {
    console.log('DEALER WINS!', dealersSum);
  } else {
    console.log('TIE GAME!!');
  }
};

const deck = createDeck();
const shuffleHand = shuffle(deck);
const table = deal(deck);
const calc = winner(table);
console.log(table);
