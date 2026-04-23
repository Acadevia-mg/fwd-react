# Food Order App

Hafta 5 projesi. React Context API, useReducer ve HTTP istekleri konularını kapsayan bir yemek sipariş uygulaması.

## Özellikler

- Menü listeleme
- Sepete ekleme / çıkarma
- Sipariş oluşturma
- Geçmiş siparişleri görüntüleme
- Lazy loading ile kod bölümlemesi

## Teknolojiler

- React 19
- React Router DOM 7
- Vite 8
- CSS Modules
- Context API + useReducer

## Kurulum

```bash
npm install
npm run dev
```

Uygulama varsayılan olarak `http://localhost:5173` adresinde açılır.

## Komutlar

| Komut             | Açıklama                       |
| ----------------- | ------------------------------ |
| `npm run dev`     | Geliştirme sunucusunu başlatır |
| `npm run build`   | Production build oluşturur     |
| `npm run lint`    | ESLint kontrolü yapar          |
| `npm run preview` | Build çıktısını önizler        |

## Yapı

```
src/
├── components/   Yeniden kullanılabilir bileşenler
├── pages/        Route sayfaları (Menu, Cart, History, NotFound)
├── context/      Global state provider'ları
├── hooks/        Custom hook'lar
├── services/     HTTP API katmanı
└── assets/       Statik kaynaklar
```
