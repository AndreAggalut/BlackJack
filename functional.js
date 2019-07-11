const customLog = text => element => console.log (`${text} ${element}`); //Currying
const helloLog = customLog('Hello');//instantiated
const people = ['Ayana', 'Brennan','Cody'];

people.map(helloLog);

/* ==== */
const helloLog = element => console.log(`Hello ${element}`);
people.map(element => console.log(`Hello ${element}`));