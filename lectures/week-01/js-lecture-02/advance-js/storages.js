//! Local Storage & Session Storage

//? Local Storage: Veriler tarayıcıda kalıcı olarak saklanır. Tarayıcı kapatılsa bile veriler silinmez.

//? Session Storage: Veriler tarayıcı sekmesi kapatılana kadar saklanır. Sekme kapatıldığında veriler silinir.

//! localStorage   // kalıcı
//! sessionStorage // geçici

// localStorage Veri Alma
localStorage.setItem("name", "Esra");
localStorage.setItem("age", "28");

//Session Storage Veri Alma
sessionStorage.setItem("name", "Esra");
sessionStorage.setItem("age", "28");

console.log(localStorage.getItem("name")); // Esra
console.log(sessionStorage.getItem("name")); // Esra

//Veri silme
localStorage.removeItem("age");
sessionStorage.removeItem("age");

//Tüm veriyi silme
localStorage.clear();
sessionStorage.clear();

//?Veri alma ve saklama işlemlerinde JSON.stringify ve JSON.parse kullanarak nesneleri saklayabiliriz. Çünkü localStorage ve sessionStorage sadece string veri saklar, nesneleri saklamak için önce JSON.stringify ile string'e çevirmemiz gerekir, veriyi alırken de JSON.parse ile tekrar nesneye çevirebiliriz.

//Json.stringify ve JSON.parse ile veri alma

//! Hata: [object Object] olur
localStorage.setItem("user", { name: "Ahmet" });

//? Doğru kullanım

const user = { name: "John", surname: "Doe", age: 30 };

localStorage.setItem("user", JSON.stringify(user));

const storedUser = JSON.parse(localStorage.getItem("user"));

console.log(storedUser.name); // John

const users = ["Ali", "Veli", "Ayşe"];

localStorage.setItem("users", JSON.stringify(users));

const saved = JSON.parse(localStorage.getItem("users"));

console.log(saved);

//? Tema seçimi yaparak localStorage'da saklama - örnek olarak dark ve light tema seçimi yaparak sayfa yenilendiğinde seçilen temanın korunmasını sağlayabiliriz.

document.body.className = "dark";

localStorage.setItem("theme", "dark");

const theme = localStorage.getItem("theme");

document.body.className = theme;


