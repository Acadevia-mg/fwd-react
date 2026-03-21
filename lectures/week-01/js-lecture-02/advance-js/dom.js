//? DOM (Document Object Model)

//? DOM, HTML ve XML belgelerinin yapısını temsil eden bir programlama arayüzüdür. DOM, belgeyi bir ağaç yapısı olarak temsil eder ve bu yapıya erişim sağlar. JavaScript kullanarak DOM'a erişebilir, belgeyi değiştirebilir, yeni öğeler ekleyebilir veya mevcut öğeleri silebilirsiniz.

//console.log("dom", document);

//? DOM Manipülasyonu

//  selector
// const list = document.querySelector("#list");

//tıklanınca silme event ile

// list.addEventListener("click", (e) => {
//   if (e.target.tagName === "LI") {
//     e.target.remove(); // silme
//   }
// });

 //createElement
// const li = document.createElement("li");

// //textContent
// li.textContent = "John";

// classList
// li.classList.add("active");

// attribute
// li.setAttribute("data-id", "1");

// innerHTML (içine element ekleme)
// li.innerHTML += " <strong>Doe</strong>";

// DOM’a ekleme
// list.appendChild(li);

// const users = [
//   { name: "John", age: 25 },
//   { name: "Jane", age: 30 },
//   { name: "Diana", age: 28 },
// ];

// users.forEach((user) => {
//   const li = document.createElement("li");

//   li.innerHTML = `${user.name} - ${user.age}`;

//   list.appendChild(li);
// });

// //! Style Değiştirme

// li.style.color = "red";
// li.style.backgroundColor = "yellow";

// //! Search Filter

// const input = document.querySelector("#search");

// input.addEventListener("input", (e) => {
//   const value = e.target.value.toLowerCase();

//   document.querySelectorAll("li").forEach((li) => {
//     li.style.display = li.textContent.toLowerCase().includes(value)
//       ? "block"
//       : "none";
//   });
// });

// //! Element Değiştirme

// const newLi = document.createElement("li");
// newLi.textContent = "Yeni eleman";

// list.replaceChild(newLi, list.firstChild);

// //! Html içeriğini değiştirme bunu en son çalıştır çünkü tüm içeriği siler

// list.innerHTML = "liste temizlendi";
