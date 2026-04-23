# Hafta 4 — React Fundamentals

Bu haftada **React**'in temellerini, **component mimarisini**, **state & events** yönetimini ve **side effects**'i işledik.

**Eğitmen:** Zafer Ayan

---

## Günler

### 1. Gün — React'e Giriş

- JSX ve süslü parantez kullanımı
- Component'ler, props
- Styling yaklaşımları

📁 `1-Gun/helloo-react/` — Vite + React + TypeScript başlangıç projesi
📄 `1-Gun/MultiAcademy-1.excalidraw` — Ders tahtası çizimleri

### 2. Gün — State & Events

- `useState` hook'u
- Controlled input'lar
- Boolean, object ve array state'leri
- Form handling ve `preventDefault`
- Sonsuz render tuzakları ve `setState` callback kullanımı

📁 `2-Gun/hello-daisy/` — State örnekleri (DaisyUI)
📄 `2-Gun/MultiAcademy-2.excalidraw` — Ders tahtası çizimleri

### 3. Gün — Side Effects & Data Fetching

- `useEffect` hook'u
- Dependency array, boş/tam gösterimler
- Cleanup fonksiyonları (window event'leri)
- Veri çekme, debounce, sonsuz döngü
- `map` / `filter` ile liste render

📁 `3-Gun/hello-effect/` — useEffect örnekleri (`db.json` ile mock API)
📄 `3-Gun/DEvMulti3.excalidraw` — Ders tahtası çizimleri

---

## Çalıştırma

Her günün kendi React projesi vardır:

```bash
cd 1-Gun/helloo-react   # veya 2-Gun/hello-daisy, 3-Gun/hello-effect
npm install
npm run dev
```

3. günün `hello-effect` projesi `json-server` ile çalışır:

```bash
npx json-server --watch db.json --port 3001
```

---

## Proje

Haftanın kapanış projesi olan **Expense Tracker** katılımcılar tarafından bireysel olarak geliştirilir.
