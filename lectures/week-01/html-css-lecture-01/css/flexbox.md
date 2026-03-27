# CSS Flexbox

Flexbox is a layout system in CSS designed to arrange elements in a flexible way.

It helps align items and distribute space inside a container.

Flexbox is commonly used for:

- navigation bars
- card layouts
- centering elements
- responsive layouts

---

# Flex Container

To use Flexbox, we must first create a **flex container**.

Example:

```css
.container {
  display: flex;
}

# CSS Flexbox

Flexbox is a layout system in CSS designed to arrange elements in a flexible way.

It helps align items and distribute space inside a container.

Flexbox is commonly used for:

- navigation bars
- card layouts
- centering elements
- responsive layouts

---

# Flex Container

To use Flexbox, we must first create a **flex container**.

Example:

```css
.container {
  display: flex;
}

# CSS Flexbox

Flexbox is a layout system in CSS designed to arrange elements in a flexible way.

It helps align items and distribute space inside a container.

Flexbox is commonly used for:

- navigation bars
- card layouts
- centering elements
- responsive layouts

---

# Flex Container

To use Flexbox, we must first create a **flex container**.

Example:

```css
.container {
  display: flex;
}

Flex Direction

Controls the direction of the layout.

.container {
  display: flex;
  flex-direction: row;
}

Options:

row (default)

column

row-reverse

column-reverse

Example:

.container {
  display: flex;
  flex-direction: column;
}
Justify Content

Controls alignment horizontally.

Example:

.container {
  display: flex;
  justify-content: center;
}

Common values:

flex-start

center

flex-end

space-between

space-around

Align Items

Controls alignment vertically.

Example:

.container {
  display: flex;
  align-items: center;
}

Common values:

flex-start

center

flex-end

stretch

Example

HTML:

<div class="container">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
</div>

CSS:

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  padding: 20px;
  background: lightblue;
  margin: 10px;
}
Common Beginner Mistakes

❌ Forgetting display: flex
❌ Confusing justify-content and align-items