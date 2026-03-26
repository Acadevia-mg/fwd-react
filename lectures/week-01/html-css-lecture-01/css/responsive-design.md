# Responsive Design

Responsive design means making websites work well on different screen sizes.

Modern websites should look good on:

- mobile phones
- tablets
- laptops
- desktop computers

Responsive design ensures a consistent user experience across all devices.

---

# Why Responsive Design is Important

Today, most users access websites from mobile devices.

Without responsive design:

- layouts may break
- text may become unreadable
- images may overflow the screen

Responsive design solves these problems.

---

# Viewport Meta Tag

To make responsive layouts work correctly, we use the viewport meta tag.

Example:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">

This tells the browser to match the screen width of the device.

Media Queries

Media queries allow us to apply CSS based on screen size.

Example:

@media (max-width: 768px) {
  body {
    background-color: lightgray;
  }
}

This means the style will apply when the screen width is 768px or smaller.

Example

CSS:

.container {
  display: flex;
  gap: 20px;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}

Explanation:

Desktop → items in a row
Mobile → items stacked vertically

Responsive Image Example
img {
  max-width: 100%;
  height: auto;
}

This prevents images from overflowing the screen.

Common Breakpoints

Typical responsive breakpoints:

Mobile

max-width: 480px

Tablet

max-width: 768px

Laptop

max-width: 1024px

Desktop

1024px and above
Common Beginner Mistakes

❌ Forgetting the viewport meta tag
❌ Using fixed widths instead of flexible layouts

Responsive design should prioritize mobile-first development.