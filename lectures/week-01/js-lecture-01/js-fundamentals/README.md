# JavaScript Fundamentals

Bu klasör, JavaScript temel konularını küçük ve bağımsız örnek dosyalarla çalışmak için hazırlanmıştır.

## İçerik

- `variables.js`: `var`, `let`, `const`, scope ve hoisting örnekleri.
- `operators.js`: rest operator ile toplama fonksiyonu.
- `conditions.js`: `if`, `else if`, `switch`, ternary örnekleri.
- `loops.js`: `for`, `while`, `do...while`, `for...of`, `for...in`, `break`, `continue`.
- `functions.js`: function declaration/expression, arrow function, default parameter, rest parameter.
- `parameters.js`: default ve rest parameter temelleri.
- `arrays.js`: dizi işlemleri (`push`, `pop`, `shift`, `unshift`) ve array destructuring.
- `primitive-reference.js`: primitive vs reference type, mutable vs immutable davranış.
- `template-literals.js`: klasik string birleştirme ve template literal karşılaştırması.
- `truthy-falsy.js`: truthy ve falsy değer listeleri.
- `index.html`: örnek arayüz (DMG Cafe).
- `task-manager.html`: görev listesi örneği.

## Nasıl Çalıştırılır?

### 1) HTML dosyalarını açmak

Tarayıcıda doğrudan açabilirsiniz:

- `index.html`
- `task-manager.html`

### 2) JavaScript dosyalarını terminalden çalıştırmak

Node.js kuruluysa aşağıdaki gibi tek tek çalıştırabilirsiniz:

```bash
node arrays.js
node functions.js
node loops.js
```

## Notlar

- Bu klasör bir öğrenme ortamı olduğu için bazı dosyalarda bilerek hata gösteren örnekler vardır (örneğin hoisting/TDZ).
- Dosyalar birbirinden bağımsızdır; sırayla inceleyip console çıktısını takip etmek en verimli yöntemdir.
- `task-manager.html` içinde hem inline script/style hem de `app.js`/`style.css` referansı bulunur. Eğer dış dosyalar eklenecekse ilgili kodları bu dosyalara taşımak daha temiz olur.
