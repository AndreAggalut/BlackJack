const arr = [1, 2, 3, 4, 5, 6, 7];

const pureSplice = (array, start, amount) => [
  ...array.slice(0, start),
  ...array.slice(start + amount),
];

console.log(pureSplice(arr, 2, 2));

console.log(arr);
