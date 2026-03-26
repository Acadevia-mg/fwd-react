# Semantic HTML

Semantic HTML refers to using HTML elements that clearly describe their meaning and purpose.

Instead of using generic elements like `<div>` for everything, semantic elements explain the role of the content.

This improves:

- code readability
- accessibility
- SEO
- maintainability

---

# Why Semantic HTML is Important

Semantic HTML helps browsers, search engines, and developers understand the structure of a webpage.

Example difference:

Non-semantic:

```html
<div class="header"></div>
<div class="menu"></div>
<div class="content"></div>
<div class="footer"></div>
```

Sematic:
```
<header></header>
<nav></nav>
<main></main>
<footer></footer>
```
the second example is easier to understand

Common Semantic Element

the <headers> elements represents introductory content
```
    Example
<header>
  <h1>My Website</h1>
</header>
```
Navigation

The <nav> element contains navigation links.

Example:
```
<nav>
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>
```
Section

The <section> element represents a thematic grouping of content.

Example:
```
<section>
  <h2>About Me</h2>
  <p>I am learning frontend development.</p>
</section>
```
Article

The <article> element represents independent content.

Example:
```
<article>
  <h2>Blog Post</h2>
  <p>This is a blog article.</p>
</article>
```

Footer

The <footer> element represents the bottom part of a webpage.

Example:
```
<footer>
  <p>Copyright 2026</p>
</footer>
```
Example Page Sucture 
```
<header>
  <h1>My Website</h1>
</header>

<nav>
  <a href="#">Home</a>
  <a href="#">Blog</a>
</nav>

<main>

<section>
  <h2>About</h2>
  <p>This is a semantic HTML example.</p>
</section>

<article>
  <h2>Latest Post</h2>
  <p>Learning HTML step by step.</p>
</article>

</main>

<footer>
  <p>All rights reserved.</p>
</footer>
```
Common Beginner Mistakes

❌ Using too many <div> elements
❌ Not structuring content properly

Semantic elements help create a cleaner and more meaningful structure.