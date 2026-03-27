# HTML Document Structure

Every HTML page follows a basic structure.

This structure helps the browser understand how to display the page.

## Basic HTML Structure

```html
<!DOCTYPE html>
<html>
<head>
<title>My First Page</title>
</head>

<body>

<h1>Hello World</h1>
<p>This is my first HTML page.</p>

</body>
</html>
```

Main Parts of an HTML Page
1. DOCTYPE
```
<!DOCTYPE html>

This tells the browser that the document is written in HTML5.

# HTML Element

<html>
```
 This is the rooot element of the page Everything inside the webpage is placed between:
 ```
 <html></html>
```

 # Head Section 
 ```
<head>```
The head section constains information about the page 

Examples:
 - title
 - meta tags
 - styles
 - scripts

 Example:
 ```
 <head>
    <title>my web site</title>
    </head>
    ```
    the title appears in the browser tab

    Body Section
```
    <body>
```
        this is where the visible content of the page goes

        Examples of elements inside the body:

        -headings
        -paragraphs
        -images
        -links
        -lists
        -buttons
Example:
```
<body>
    <h1> Welcome</h1>
    <p>This is my website</p>
    </body>

    Full Example 
    <!DOCTYPE html>
<html>

<head>
<title>Frontend Bootcamp</title>
</head>

<body>

<h1>Frontend Bootcamp</h1>
<p>Learning HTML step by step.</p>

</body>

</html>
```
Common Beginner Mistakes

❌ Forgetting closing tags

Wrong:
```
<p>Hello
    v
    v
    v
    <p>Hello</p>
    ```