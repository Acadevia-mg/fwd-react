# Hafta 5 — Context API, State Management & HTTP Requests

Bu haftada **React Context API**, **useReducer** ve **HTTP istekleri** konularını işledik. Haftanın sonunda bir **Food Order App** projesini geliştirmeye başladık.

**Eğitmen:** Hüseyin Gülcü

---

## İçerik

- Context API ile global state yönetimi
- `useReducer` hook'u ve karmaşık state yapıları
- HTTP istekleri ve async veri çekme (`fetch`, `async/await`)
- Loading, error ve success state yönetimi
- React Router ile sayfalar arası geçiş
- Lazy loading ve `Suspense`

---

## Klasör Yapısı

```
week-05/
├── slides/           Sunum dosyaları (.key)
│   ├── Oturumlar Sunumu.key
│   └── Kapanış Sunumu.key
└── project/
    └── food-order-app/   Haftanın projesi (React + Vite)
```

---

## Proje: Food Order App

Bir yemek sipariş uygulaması. Menü listeleme, sepete ekleme, sipariş oluşturma ve geçmiş siparişleri görüntüleme özelliklerine sahip.

### Teknolojiler

- React 19
- React Router DOM 7
- Vite 8
- CSS Modules
- Context API + useReducer

### Çalıştırma

```bash
cd project/food-order-app
npm install
npm run dev
```

### Yapı

- `src/pages/` — MenuPage, CartPage, HistoryPage, NotFoundPage
- `src/components/` — AppLayout, MealCard, CartItem, OrderForm, PageLoader, ErrorState
- `src/context/` — Global state için Context provider'lar
- `src/hooks/` — Custom hook'lar
- `src/services/` — HTTP istekleri ve API katmanı

---

## Notlar

- Proje 5. ve 6. hafta boyunca aşamalı olarak geliştirilmektedir.
- 6. haftada Firebase entegrasyonu ve deployment ekleniyor.
