# CSS Selectors

CSS selectors are used to select HTML elements and apply styles to them.

Selectors tell the browser **which elements should receive the CSS styles**.

---

# Element Selector

The element selector targets all elements of a specific HTML tag.

Example:

```css
p {
  color: blue;
}

HTML

<p>This text will be blue.</p>
<p>This will also be blue.</p>

This selector applies styles to all <p> elements

Class Selector

Class selectors target elements with a specific class.

Classes are defined in HTML using the class attribute.

Example:

HTML:

<p class="highlight">Important text</p>

CSS

.highlight {
  color: red;
}

Class selectors start with a dot(.)

ID Selector

ID selectro target a specific element whit an ID

Example 

html
<h1 id="title">My Website</h1>

css
#title {
  color: green;
}
ıd selectros start with #

important rule:
An ID should be used only the per page 

Grouping Selector

Multiple elements can share the same style.

Example:

h1, h2, p {
  color: purple;
}

This applies the same style to:

-h1
-h2
-p

Example

HTML:
<h1 class="title">Frontend Bootcamp</h1>
<p>This is a paragraph.</p>
<p class="highlight">Important paragraph.</p>

css:
.title {
  color: blue;
}

.highlight {
  color: red;
}

Common Beginner Mistakes

❌ Confusing class and id selectors
❌ Using too many IDs instead of classes

Classes are generally preferred for styling.