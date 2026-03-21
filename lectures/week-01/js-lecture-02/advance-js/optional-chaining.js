// //? Optional Chaining (?.)

// // Optional chaining, bir nesnenin belirli bir özelliğe sahip olup olmadığını kontrol etmek için kullanılan bir JavaScript özelliğidir. Bu özellik, bir nesnenin belirli bir özelliğe sahip olup olmadığını kontrol etmek için uzun ve karmaşık kod yazmak yerine, daha kısa ve okunabilir bir şekilde yazılmasını sağlar.

// // Optional Chaining Olmadan
// const user = {};

// console.log(user.address.city); // TypeError: Cannot read property 'city' of undefined

// // Optional Chaining İle

// const person = {};

// console.log(person?.address?.city); // undefined verir, hata vermez
