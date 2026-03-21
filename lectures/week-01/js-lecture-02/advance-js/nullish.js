// //? Nullish Coalescing (??)

// // Nullish coalescing, bir değişkenin null veya undefined olup olmadığını kontrol etmek için kullanılan bir JavaScript özelliğidir. Bu özellik, bir değişkenin null veya undefined olması durumunda varsayılan bir değer atamak için kullanılır.

// // Nullish Coalescing Olmadan
// const userName = null;

// const result = userName ?? "İsimsiz";

// console.log(result); // Default

// // Nullish Coalescing İle
// const user = {
//   name: "Ahmet",
// };

// console.log(user.age ?? "Yaş bilgisi yok"); //Output: Yaş bilgisi yok

// // optional chaining ile birlikte kullanımı
// const city = user.address?.city ?? "Yok";

// console.log(city); //Output: Yok
