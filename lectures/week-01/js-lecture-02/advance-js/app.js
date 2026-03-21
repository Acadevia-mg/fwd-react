//! Örnek bir API çağrısı ve JSON işlemi
// async function loadUsers() {
//   try {
// //Fetch API (Promise döner)
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");

// //HTTP kontrolü
//     if (!response.ok) {
//       throw new Error(`HTTP ${response.status}`);
//     }

// //JSON → JS object (parse işlemi)
//     const users = await response.json();

//     console.log("Users:", users);

//     // JS → JSON (stringify)
//     const jsonString = JSON.stringify(users);

//     // tekrar parse (göstermek için)
//     const parsedAgain = JSON.parse(jsonString);

//     console.log("Parsed again:", parsedAgain);

//     return parsedAgain;

//   } catch (error) {
// // Try/Catch hata yakalama
//    console.error("Error loading users:", error.message);
//     throw error; // dışarıya da ilet
//   }
// }

//! Promise kullanımı (.then / .catch)
// loadUsers()
//   .then(data => {
//     console.log("Success:", data.length, "users loaded");
//   })
//   .catch(error => {
//     console.error("Failed:", error.message);
//   });

//! Aynı işlemi Promise zinciri ile yapalım

// async function loadUsers() {
// //fetch = Promise döner
//   return fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`HTTP ${response.status}`);
//       }

//       return response.json(); // JSON parse
//     });
// }

//! Promise kullanımı
// loadUsers()
//   .then(users => {
//     console.log("Users geldi:", users);
//   })
//   .catch(error => {
//     console.error("Hata:", error.message);
//   });

// Async/Await kullanarak aynı işlemi yapalım

// async function loadUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");

//     if (!response.ok) {
//       throw new Error(`HTTP ${response.status}`);
//     }

//     const users = await response.json(); // parse

//     console.log("Users:", users);

//! JSON işlemleri
//     const jsonString = JSON.stringify(users); // stringify
//     const parsed = JSON.parse(jsonString); // parse

//     console.log("Parsed:", parsed);

//     return parsed;
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
// }

// loadUsers();

//! Foreach ile data işleme
// async function getUsers() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await res.json();

//   return users;
// }

// function logUsers(users) {
//   users.forEach((user, index) => {
//     console.log(`${index + 1}. ${user.name}`);
//     console.log("Email:", user.email);
//     console.log("City:", user.address.city);
//     console.log("------");
//   });
// }

// // kullanım
// getUsers().then((users) => {
//   logUsers(users);
// });

//! Map ile data işleme

// async function fetchUsers() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await res.json();

//   return users;
// }

// function mapUsers(users) {
//   return users.map((user) => ({
//     name: user.name,
//     email: user.email,
//   }));
// }

// // kullanım
// async function main() {
//   const users = await fetchUsers();
//   const mappedUsers = mapUsers(users);

//   console.log(mappedUsers);
// }

// main();

// //! Filter ile data işleme
// async function fetchUsers() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return await res.json();
// }

// // filter fonksiyonu
// function filterUsers(users) {
//   return users.filter((user) => user.address.city === "South Christy");
// }

// kullanım
// async function main() {
//   const users = await fetchUsers();
//   const filteredUsers = filterUsers(users);

//   console.log(filteredUsers);
// }

// main();

// //! Reduce ile data işleme
// async function fetchUsers() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return await res.json();
// }

// // reduce fonksiyonu
// function sumUserIds(users) {
//   return users.reduce((total, user) => {
//     return total + user.id;
//   }, 0);
// }

// // kullanım
// async function main() {
//   const users = await fetchUsers();
//   const total = sumUserIds(users);

//   console.log("Toplam ID:", total);
// }

// main();

// //! Find ile data işleme

// async function fetchUsers() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return await res.json();
// }

// // 🔥 find fonksiyonu
// function findUserById(users) {
//   return users.find((user) => user.id === 5);
// }

// // kullanım
// async function main() {
//   const users = await fetchUsers();
//   const user = findUserById(users);

//   console.log(user);
// }

// main();

// //! Some ile data işleme

// async function fetchUsers() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return await res.json();
// }

// // some fonksiyonu
// function hasUserInCity(users) {
//   return users.some((user) => user.address.city === "South Christy");
// }

// // kullanım
// async function main() {
//   const users = await fetchUsers();
//   const result = hasUserInCity(users);

//   console.log(result);
// }

// main();

// //! Every ile data işleme

// async function fetchUsers() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return await res.json();
// }

// // every fonksiyonu
// function areAllUsersActive(users) {
//   return users.every((user) => user.id > 0);
// }

// // kullanım
// async function main() {
//   const users = await fetchUsers();
//   const result = areAllUsersActive(users);

//   console.log(result);
// }

// main();

// //! Sort ile data işleme

// async function fetchUsers() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return await res.json();
// }

// // sort fonksiyonu
// function sortUsersByName(users) {
//   return users.sort((a, b) => a.name.localeCompare(b.name));
// }

// // kullanım
// async function main() {
//   const users = await fetchUsers();
//   const sortedUsers = sortUsersByName(users);

//   console.log(sortedUsers);
// }

// main();

// //! Method chaining ile data işleme

// async function fetchUsers() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return await res.json();
// }

// // chaining
// async function main() {
//   const users = await fetchUsers();

//   const result = users
//     .filter((user) => user.id > 3)
//     .map((user) => user.name)
//     .sort();

//   console.log(result);
// }

// main();

// //! Objects

// const name = "Ahmet";
// const age = 28;

// // 🔥 object literal + shorthand + method
// const user = {
//   name,
//   age,
//   city: "İstanbul",

//   greet() {
//     return `Merhaba, ben ${this.name}`;
//   },
// };

// // method
// console.log(user.greet());

// // destructuring
// const { name: userName, age: userAge } = user;
// console.log(userName, userAge);

// // Object.keys
// console.log(Object.keys(user));

// // Object.values
// console.log(Object.values(user));

// //Object.entries
// Object.entries(user).forEach(([key, value]) => {
//   console.log(key, value);
// });

// //! This Keyword

// const person = {
//   name: "Ahmet",

//   greet() {
//     console.log("Merhaba, ben " + this.name);
//   },
// };

// person.greet();

// // this olmadan

// const personWithoutThis = {
//   name: "Ahmet",

//   greet() {
//     console.log(name); // ❌ hata
//   },
// };

// // arrow function ile this

// const userWithArrowFunction = {
//   name: "Ahmet",

//   greet: () => {
//     console.log(this.name);
//   },
// };

// userWithArrowFunction.greet(); // undefined çünkü arrow function kendi this'ine sahip değil, global this'i kullanır
// //Global? Globalde yazdığın her şey aslında window içine gider
