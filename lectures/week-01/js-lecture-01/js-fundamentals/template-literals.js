//Template Literals 

let name = "Esra";
let age = 28;
let city = "Türkiye";

// Eski yöntem
let message1 = "Merhaba, benim adım " + name + ", yaşım " + age + " ve " + city + "de yaşıyorum.";
console.log(message1);

// Template Literals ile
let message2 = `Merhaba, benim adım ${name}, yaşım ${age} ve ${city}de yaşıyorum.`;
console.log(message2);