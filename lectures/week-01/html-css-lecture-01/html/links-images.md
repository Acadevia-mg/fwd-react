# Links and Images in HTML

Links and images are essential elements used in almost every website.
Links allow users to navigate between pages, while images help display visual content.

---

# HTML Links

Links are created using the `<a>` tag.

Example:
```html
<a href="https://github.com">Visit GitHub</a>
```


Explanation:

<a> → anchor tag

href → destination URL

text between tags → clickable text

Opening Links in a New Tab
To open a link in a new browser tab, use the target attribute.

```
<a href="https://google.com" target="_blank">Open Google</a>
```

# HTML Images

Images are added using the <img> tag.

Example:
```
<img src="image.jpg" alt="Example image">
```

Explanation:

src → image source

alt → alternative text for accessib

# Image Size

You can control image size using width and height.
```
<img src="photo.jpg" alt="Profile photo" width="300">
```
Example With Link and Image
```
<h1>My Website</h1>

<p>Visit my GitHub profile:</p>

<a href="https://github.com">GitHub</a>

<img src="profile.jpg" alt="My profile photo" width="200">
```
Common Mistakes

❌ Forgetting the alt attribute

Wrong:
```
<img src="image.jpg">
```
Correct:
```
<img src="image.jpg" alt="Description of the image">
```
The alt attribute is important for accessibility and SEO.