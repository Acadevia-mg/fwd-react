# HTML Elements

HTML elements are the building blocks of a web page.

They define the structure and content of a webpage.

Most HTML elements consist of:

- an opening tag
- content
- a closing tag

## Basic Example

```html
<p>This is a paragraph</p>
```
Explanation:
```
<p> Opening tag
This is a Paragraf > Content
</p> closing tag
```
# HTML Tag vs HTML Elements

HTML Tag
Tags are used to mark the beginnig and end of an element 

Example:
```
<h1>
    </h1>
```
# HTML Element 
An element includes the opening tag, content and closing tag

Example:
```
<h1>Hello Word</h1>
```
Nested Elements 

HTML elements can be placed inside other elements 

Example:
```
<p>This is a <strong> very important</strong>text.</p>
```
here:
```
<p> contains the whole sentence
    <strong>makes part of the text blod

        HTML Attributes
        Attributtes provide additional information about elements
        <a href="https://github.com">Visit GitHub</a>

        Explanation:
        <a> anchor tag
            href attribute
            "https://github.com" → attribute value

Example With Multiple Elements 
<h1>My Website</h1>

<p>Welcome to my website.</p>

<a href="https://google.com">Search on Google</a>
```
Common Beginner Mistakes

❌ Forgetting closing tags

wrong:
```
<p> hello
```
correct:
```
    <p>hello</p>
```