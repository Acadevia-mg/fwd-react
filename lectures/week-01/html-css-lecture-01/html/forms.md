# HTML Forms

HTML **forms** are used to collect data from users.

Common examples of form usage:

-   Login forms
-   Registration forms
-   Contact forms
-   Search bars

Forms are created using the `<form>` element.

------------------------------------------------------------------------

# Basic Form Example

``` html
<form>
  <label>Name:</label>
  <input type="text">

  <br><br>

  <label>Email:</label>
  <input type="email">

  <br><br>

  <button>Submit</button>
</form>
```

------------------------------------------------------------------------

# Important Form Elements

## Form

The `<form>` tag defines a form used to collect user input.

Example:

``` html
<form>
</form>
```

------------------------------------------------------------------------

## Input

The `<input>` element allows users to enter data.

Example:

``` html
<input type="text">
```

### Common Input Types

-   `text`
-   `email`
-   `password`
-   `number`
-   `date`

Example:

``` html
<input type="password">
```

------------------------------------------------------------------------

## Label

`<label>` elements describe input fields and help users understand what
information to enter.

Example:

``` html
<label>Email</label>
<input type="email">
```

Labels improve **accessibility** and **usability**.

------------------------------------------------------------------------

## Button

Buttons are used to submit the form.

Example:

``` html
<button>Submit</button>
```

------------------------------------------------------------------------

# Example Form

``` html
<h2>Contact Form</h2>

<form>

  <label>Name</label>
  <input type="text">

  <br><br>

  <label>Email</label>
  <input type="email">

  <br><br>

  <label>Message</label>
  <textarea></textarea>

  <br><br>

  <button>Send</button>

</form>
```

------------------------------------------------------------------------

# Common Beginner Mistakes

❌ Not connecting labels to inputs\
❌ Using wrong input types\
❌ Forgetting form structure

------------------------------------------------------------------------

💡 **Tip:** Using correct input types helps browsers validate user input
automatically.
