//? Değişken Tanımlama ve Kullanma

// var name = "Esra";

// var surname = "Kelleci";

// let age = 28;

// const country = "Türkiye";

// console.log("isim", name);
// console.log("soyisim", surname);
// console.log("yaş", age);
// console.log("ülke", country);

//? Yeniden Atama

// var name = "Esra";
// name = "Ebru";

// console.log("isim", name);

// const age = 28;
// age = 29;
// console.log("yaş", age);
// const country = "Türkiye";

// country = "Almanya"; // Hata: const ile tanımlanan değişkenlere yeniden atama yapılamaz.

//? Scope (Kapsam)

// var ile tanımlanan değişkenler blok kapsamına sahip değildir, bu yüzden blok dışından erişilebilir.

// {
//   let age = 28;
// }
// console.log("yaş", age); // let ile tanımlanan değişkenler blok kapsamına sahiptir, bu yüzden blok dışından erişilemez ve ReferenceError hatası verir.

// {
//   const country = "Türkiye"; // const ile tanımlanan değişkenler de blok kapsamına sahiptir, bu yüzden blok dışından erişilemez ve ReferenceError hatası verir.
// }
// console.log("ülke", country);

//? Hoisting (Yukarı Taşınma) - Temporal Dead Zone (Geçici Ölü Bölge)

console.log("isim", name); // undefined
var name = "Esra";

console.log("yaş", age); // ReferenceError: Cannot access 'age' before initialization
let age = 28;

console.log("ülke", country); // ReferenceError: Cannot access 'country' before initialization
const country = "Türkiye";
