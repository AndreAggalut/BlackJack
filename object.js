// this is how you create an object
const deck = {};

function Deck(suit, weight) {
  this.suit = suit || '';
  this.weight = weight || 0;
  this.shuffle = function() {
    return "I'm Shuffling";
  };
  this.level1 = {
    level2: {
      level3: {},
    },
  };
}

const newDeck = new Deck('spade', 2);
console.log(newDeck.shuffle());
newDeck.dealCard = function() {
  return "I'm Dealing";
};

console.log(newDeck.dealCard());

const newerDeck = new Deck();

delete newerDeck.weight;

console.log(newerDeck);

// for (const key in object){
//     if(object.hasOwnProperty(key)){
//     const element = object [key];
// }

// const keys = Object.keys(newDeck);
// console.log(keys);

// const values = Object.values(newDeck);
// console.log(values);

// const entries = Object.entries(newDeck);
// console.log(entries);

newDeck.dealCard = function() {
  return "I don't feel like dealing now";
};
console.log(newDeck.dealCard());

// const newerDeck = {...newDeck};
// /const newerDeck = JSON.parse(JSON.stringify(newDeck))

// console.log(newerDeck)

// const{suit,weight, dealCard} = newDeck;
// console.log(dealCard));

class ClassDeck {
  constructor(suit, weight) {
    this.suit = suit || '';
    this.weight = weight || 0;
    this.level1 = {
      level2: {
        level3: {},
      },
    };
  }
  shuffle = function() {
    return "I'm Shuffling";
  };
}
