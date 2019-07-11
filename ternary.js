// const age = 20;
// const beverage = age >= 21 ? 'Beer' : 'Juice';
// console.log(beverage); // "Beer"

function greeting(person) {
  let name = person ? person.name : 'stranger';
  return `Howdy, ${  name}`;
}

console.log(greeting({ name: 'Alice' })); // "Howdy, Alice"
console.log(greeting(null)); // "Howdy, stranger"​​​​​
