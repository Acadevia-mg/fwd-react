// FUNCTIONS
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//Function Expression
const getRandomIntExpression = function (max) {
  return Math.floor(Math.random() * max);
};

//Arrow Function
const getRandomIntArrow = (max) => {
  return Math.floor(Math.random() * max);
};

//Short Arrow Function
const getRandomIntShortArrow = (max) => Math.floor(Math.random() * max);

//Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}

//Default Parameter
function greetUser(name = "Misafir") {
  return `Merhaba, ${name}!`;
}

console.log(greetUser());
console.log(greetUser("Esra"));

function multiply(number, factor = 2) {
  return number * factor;
}

console.log(multiply(5));
console.log(multiply(5, 3));

function calculatePrice(price, taxRate = 0.2) {
  return price + price * taxRate;
}

console.log(calculatePrice(100));
console.log(calculatePrice(100, 0.1));

function createUsername(firstName = "Kullanici", lastName = "Adi") {
  return `${firstName}${lastName}`;
}

console.log(createUsername());
console.log(createUsername("Esra", "Kelleci"));

//Rest Parameter
function sumAll(...numbers) {
  let total = 0;

  for (const number of numbers) {
    total += number;
  }

  return total;
}

console.log(sumAll(10, 20, 30));
console.log(sumAll(5, 15, 25, 35));
