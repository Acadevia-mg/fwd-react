//? Arrays - Temel

// Dizi oluşturma
const fruits = ["elma", "armut", "muz"];
const numbers = [10, 20, 30, 40];

console.log("fruits:", fruits);
console.log("numbers:", numbers);

// Dizi elemanlarına erişim
console.log("İlk meyve:", fruits[0]);
console.log("İkinci meyve:", fruits[1]);
console.log("Son sayı:", numbers[numbers.length - 1]);

// push() -> sona eleman ekler
fruits.push("çilek");
console.log("push sonrası fruits:", fruits);

// pop() -> sondaki elemanı siler
const removedLastFruit = fruits.pop();
console.log("Silinen son meyve:", removedLastFruit);
console.log("pop sonrası fruits:", fruits);

// shift() -> ilk elemanı siler
const removedFirstFruit = fruits.shift();
console.log("Silinen ilk meyve:", removedFirstFruit);
console.log("shift sonrası fruits:", fruits);

// unshift() -> başa eleman ekler
fruits.unshift("kiraz");
console.log("unshift sonrası fruits:", fruits);

//? Array Destructuring

const colors = ["kırmızı", "mavi", "yeşil", "sarı"];

// Temel destructuring
const [firstColor, secondColor] = colors;
console.log("İlk renk:", firstColor);
console.log("İkinci renk:", secondColor);

// Bazı elemanları atlayarak destructuring
const [primaryColor, , tertiaryColor] = colors;
console.log("Birinci renk:", primaryColor);
console.log("Üçüncü renk:", tertiaryColor);

// Geri kalan elemanları alma
const [mainColor, ...otherColors] = colors;
console.log("Ana renk:", mainColor);
console.log("Diğer renkler:", otherColors);

// Varsayılan değer kullanımı
const animals = ["kedi"];
const [firstAnimal, secondAnimal = "köpek"] = animals;
console.log("Birinci hayvan:", firstAnimal);
console.log("İkinci hayvan:", secondAnimal);

// Değişkenlerin yerini değiştirme
let a = 1;
let b = 2;

console.log("Takas öncesi:", a, b);
[a, b] = [b, a];
console.log("Takas sonrası:", a, b);
