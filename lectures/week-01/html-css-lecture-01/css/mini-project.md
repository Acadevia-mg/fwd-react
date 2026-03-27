# CSS Mini Project: Simple Landing Page

In this mini project, we will create a simple landing page using the CSS concepts learned in this module.

Concepts used in this project:

- CSS selectors
- box model
- flexbox
- responsive design
- spacing and layout

---

# Project Goal

Create a simple landing page that includes:

- a header
- a navigation bar
- a hero section
- a features section
- a footer

---

# HTML Structure

```html
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Landing Page</title>
<link rel="stylesheet" href="styles.css">
</head>

<body>

<header>
<h1>My Website</h1>
</header>

<nav>
<a href="#">Home</a>
<a href="#">Features</a>
<a href="#">Contact</a>
</nav>

<section class="hero">
<h2>Welcome to My Website</h2>
<p>Learning frontend step by step.</p>
</section>

<section class="features">

<div class="card">Feature 1</div>
<div class="card">Feature 2</div>
<div class="card">Feature 3</div>

</section>

<footer>
<p>© 2026 My Website</p>
</footer>

</body>

</html>


body {
  font-family: Arial, sans-serif;
  margin: 0;
}

header {
  background: black;
  color: white;
  padding: 20px;
  text-align: center;
}

nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 10px;
}

.hero {
  text-align: center;
  padding: 60px;
}

.features {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 40px;
}

.card {
  background: lightgray;
  padding: 20px;
  width: 150px;
  text-align: center;
}

footer {
  text-align: center;
  padding: 20px;
}

Responsive Example:

@media (max-width: 768px) {
  .features {
    flex-direction: column;
    align-items: center;
  }
}

What you practiced

ın this project you practiced

-layout using Flecbox
-spacing whit margin and padding
-responsive layout whit media quaries
-structuring a simple webpage 


Challenge
Improve the landing page by adding 

*a hero image
*hover effects
*better spacing
*more sections


Summary 

This projectc combines the core CSS concepts learned in this module

After completing if you should be comfortable styling simple web pages using CSS


