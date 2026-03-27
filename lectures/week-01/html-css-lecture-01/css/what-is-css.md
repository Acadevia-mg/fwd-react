# What is CSS?

CSS stands for **Cascading Style Sheets**.

CSS is used to style and design web pages.

While HTML provides the **structure** of a page, CSS controls the **appearance**.

Examples of things CSS can control:

- colors
- fonts
- spacing
- layout
- responsiveness

---

# HTML vs CSS

Example without CSS:

```html
<h1>Hello World</h1>
<p>This is my website.</p>

With css:
<h1 style="color: blue;">Hello World</h1>
<p style="font-size: 20px;">This is my website.</p>

css allows us to make website look visually appealing 

Ways to add css

there are three ways to use css in html

inline css

css written inside an html tag 

Example

<p style="color: red;">Hello</p>

İnternal css
css written the <style> tag in the <head> section 

Example

<style>
p {
  color: red;
}
</style>


External css Recommended

css written in a separate .css file 

HTML file 
<link rel="stylesheet" href="styles.css">

Css file

p {
  color: red;
}

External css keeps code and organized

Example
HTML
<h1>My Website</h1>
<p>Learning CSS step by step.</p>

CSS
h1 {
  color: blue;
}

p {
  font-size: 18px;
}

Common BEginner Mistakes
❌ Mixing HTML and CSS too much
❌ Using only inline styles
❌ Not separating CSS into its own file

