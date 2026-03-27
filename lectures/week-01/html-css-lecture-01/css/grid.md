# CSS Grid

CSS Grid is a powerful layout system used to create complex webpage layouts.

It allows developers to arrange elements into rows and columns.

Grid is especially useful for:

- page layouts
- dashboards
- galleries
- card grids

---

# Grid Container

To use CSS Grid, we must first define a grid container.

Example:

```css
.container {
  display: grid;
}

This enables grid layout for all child elements.

Example HTML:

<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
Grid Columns

We can define how many columns a grid has.

Example:

.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

This creates 3 equal columns.

Example:

| Item 1 | Item 2 | Item 3 |
Grid Gap

Gap adds space between grid items.

Example:

.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}
Grid Rows

We can also define rows.

Example:

.container {
  grid-template-rows: 100px 100px;
}
Example

HTML:

<div class="container">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
</div>

CSS:

.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.box {
  background: lightblue;
  padding: 20px;
}
Flexbox vs Grid

Flexbox → one dimensional layout
Grid → two dimensional layout

Flexbox example:

row OR column

Grid example:

rows + columns
Common Beginner Mistakes

❌ Using grid without defining columns
❌ Confusing Flexbox and Grid usage

Use:

Flexbox → small layouts
Grid → full page layouts