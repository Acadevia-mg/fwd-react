

// Spread Operator
// let countries = ["USA", "Canada", "Mexico"];
// let cities = ["New York", "Toronto", "Mexico City"];
// let combined = [...countries, ...cities];
// console.log(combined); // Output: ["USA", "Canada", "Mexico", "New York", "Toronto", "Mexico City"]

//Rest Operator
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5));    // Output: 9