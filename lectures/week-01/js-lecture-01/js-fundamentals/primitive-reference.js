//? Primitive ve Reference Types

//? Immutable (Değiştirilemez) ve Mutable (Değiştirilebilir) Types

//? Immutable Types
let str = "Hello"; // stringler immutable'dır, yani bir kez oluşturulduktan sonra değiştirilemezler.
str[0] = "h"; // bu işlem geçersizdir, str hala "Hello" olarak kalır.

let num = 42; // sayılar immutable'dır, yani bir kez oluşturulduktan sonra değiştirilemezler.
num = 100; // bu işlem geçerlidir, ancak num artık 100 olarak değişir, önceki değere erişim kaybolur.

//? Mutable Types
let arr = [1, 2, 3]; // diziler mutable'dır, yani içindeki elemanlar değiştirilebilir.
arr[0] = 10; // bu işlem geçerlidir, arr artık [10, 2, 3] olarak değişir.

let obj = { name: "Esra", age: 28 }; // nesneler mutable'dır, yani içindeki özellikler değiştirilebilir.
obj.name = "Ebru"; // bu işlem geçerlidir, obj artık { name: "Ebru", age: 28 } olarak değişir.

//? Primitive Types
let greeting = "Hello"; // stringler primitive türlerdir.
let numValue = 42; // sayılar primitive türlerdir.
let isActive = true; // booleanlar primitive türlerdir.
let cart = null; // null primitive türdür.
let name; // undefined primitive türdür.

// //? Reference Types
let numbers = [1, 2, 3];

numbers.push(4);

let user = { name: "Esra", age: 28 };

user.age = 29; // bu işlem geçerlidir, user artık { name: "Esra", age: 29 } olarak değişir.
