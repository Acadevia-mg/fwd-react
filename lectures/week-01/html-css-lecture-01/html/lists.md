# Lists in HTML

Lists are used to group related items together.
HTML provides three types of lists:

- Unordered lists
- Ordered lists
- Description lists (advanced topic)

---

# Unordered Lists

Unordered lists use bullet points.
They are created with the `<ul>` tag.

Example:

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

Explanation:

<ul> → unordered list container

<li> → list item

Result:

• HTML
• CSS
• JavaScript

# Ordered Lists

Ordered lists show numbered items.

They are created with the <ol> tag.

Example:
```
<ol>
  <li>Learn HTML</li>
  <li>Learn CSS</li>
  <li>Learn JavaScript</li>
</ol>
```
Result:

Learn HTML
Learn CSS
Learn JavaScript
Nested Lists

Lists can be placed inside other lists.
```
<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </li>
  <li>Backend</li>
</ul>
```
This is called a nested list.
```
<h2>My Skills</h2>

<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```
Common Mistakes

❌ Using text instead of <li> inside lists.

Wrong:
```
<ul>
  HTML
  CSS
</ul>
```
Correct
```
<ul>
  <li>HTML</li>
  <li>CSS</li>
</ul>
```