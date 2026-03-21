// // LOOPS

// // For loop

for (let day = 1; day <= 7; day++) {
  console.log(`Day ${day}`);
}

// While loop
let month = 5;
while (month <= 12) {
  console.log(`Month ${month}`);
  month++;
}

// Do-while loop

let year = 2026;
do {
  console.log(`Year ${year}`);
  year++;
} while (year <= 2030);

// For...of loop
const letters = ["a", "b", "c"];
for (const element of letters) {
  console.log(element);
}

// For...in loop
const person = { name: "Alice", age: 30 };
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Break and Continue
for (let brands = 0; brands < 10; brands++) {
  if (brands === 5) {
    break;
  }
  console.log(brands);
}
for (let numbers = 0; numbers < 10; numbers++) {
  if (numbers % 2 === 0) {
    continue;
  }
  console.log(numbers);
}

for (let i = 1; i <= 5; i++) {
  console.log(`loop: ${i}`);
}

let j = 0;
while (j <= 5) {
  console.log(`while loop: ${j}`);
  j++;
}

let k = 0;
do {
  console.log(`do-while loop: ${k}`);
  k++;
} while (k <= 5);

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}
