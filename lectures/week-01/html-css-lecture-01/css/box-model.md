# CSS Box Model

The CSS Box Model describes how elements are structured and spaced on a webpage.

Every HTML element is treated as a **box**.

The box model consists of four main parts:

- content
- padding
- border
- margin

These layers control spacing and layout.

---

# Box Model Structure

The structure looks like this:

margin
  border
    padding
      content

---

# Content

The content is the actual text or image inside the element.

Example:

```css
p {
  width: 300px;
}
```

this sets the width of yhe content area 

Padding

Padding is the space inside the element, between the content and the border.

Example:
```
div {
  padding: 20px;
}
```
This creates space inside the element.

Padding

Padding is the space inside the element, between the content and the border.

Example:
```
div {
  padding: 20px;
}
```

This creates space inside the element.
HTML:

```
<div class="box">Hello World</div>
```

CSS:
```
.box {
  width: 200px;
  padding: 20px;
  border: 2px solid black;
  margin: 30px;
}

```
Visual Explanation

content → text or image
padding → space inside the box
border → outline around the box
margin → space outside the box

Common Beginner Mistakes

❌ Confusing padding and margin
❌ Forgetting that padding increases element size



