/*
An objects of suits for each cards
*/
const suits = {
  heart: 'heart',
  club: 'club',
  diamond: 'diamond',
  spade: 'spade',
};
/*
These are the weights of each card
*/

const weights = {
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

/*
Creating a deck, bringing values for each object and pushing them up to array.
*/
const createDeck = () => {
  const deck = [];

  Object.values(suits).forEach(suit => {
    Object.values(weights).forEach(weight => {
      deck.push({ suits, weights });
    });
  });
  return deck;
};

/*
Grab the object deck and shuffling it using Math.random.
*/
const shuffle = deck => {
  for (let i = deck.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [deck[i], deck[rand]] = [deck[rand], deck[i]];
  } // swap elements

  return deck;
};

const deal = deck => {
  const table = {};
  table.playasHand = [];
  table.dealersHand = [];

  const { playasHand, dealersHand } = table;

  playasHand.push(deck.pop());
  dealersHand.push(deck.pop());
  playasHand.push(deck.pop());
  dealersHand.push(deck.pop());

  return table;
};

const displayHands = table => {
  const { dealersHand, playasHand } = table;
  console.log("Dealer's Hand", dealersHand);
  console.log("Playa's Hand", playasHand);
};

const findWinner = table => {
  const { dealersHand, playasHand } = table;
  const playasSum = playasHand
    .map(card => card.weight)
    .reduce((fCard, sCard) => fCard + sCard);
  const dealersSum = dealersHand
    .map(card => card.weight)
    .reduce((fCard, sCard) => fCard + sCard);

  if (playasSum > dealersSum) {
    console.log('Playa Wins');
  } else if (playasSum === dealersSum) {
    console.log('Its A Tie');
  } else {
    console.log('Dealer Wins!');
  }
};
function start() {
  const deck = createDeck();
  const shuffled = shuffle(deck);
  const table = deal(shuffled);

  displayHands(table);
  findWinner(table);
}
start();
