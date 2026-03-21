// //! Click Event

// const btn = document.querySelector("#btn");

// btn.addEventListener("click", (e) => {
//   console.log("Clicked");
//   console.log(e.target);
// });

// //! Input Event

// const input = document.querySelector("#input");

// input.addEventListener("input", (e) => {
//   console.log("Value:", e.target.value);
// });

// //! Keydown Event

// input.addEventListener("keydown", (e) => {
//   console.log("Key:", e.key);
// });

// //! Mouse Events

// btn.addEventListener("mouseover", () => {
//   console.log("Mouse over");
// });

// btn.addEventListener("mouseout", () => {
//   console.log("Mouse out");
// });

// //! Form Submit Event and preventDefault

// const form = document.querySelector("#form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault(); // sayfanın yenilenmesini engeller
//   console.log("Form gönderildi");
// });

// //! Event Target - hangi event tetiklendi

// document.addEventListener("click", (e) => {
//   console.log("Clicked element:", e.target);
// });

// //! Focus and Blur Events - inputa tıklanınca focus olur, başka yere tıklanınca blur olur

// input.addEventListener("focus", () => console.log("focus"));
// input.addEventListener("blur", () => console.log("blur"));

// //! Window Events - sayfa yüklendiğinde, yeniden boyutlandırıldığında, kaydırıldığında (tarayıcıda olan olaylar)
// window.addEventListener("load", () => {
//   console.log("Tüm sayfa yüklendi");
// });

// // window.addEventListener("scroll", () => {
// //   console.log("Sayfa kaydırıldı");
// // });

// //“Sayfadan çıkmak istiyor musun?” popup
// // window.addEventListener("beforeunload", (e) => {
// //   e.preventDefault();
// //   e.returnValue = "";
// // });

