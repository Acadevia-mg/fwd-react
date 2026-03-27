# Tables in HTML

Tables are used to display data in rows and columns.

They are commonly used for structured information such as:

- product lists
- schedules
- statistics
- comparison tables

---

# Basic Table Structure

An HTML table consists of several elements:

- `<table>` → table container  
- `<tr>` → table row  
- `<th>` → table header  
- `<td>` → table data  

Example:

```html
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Country</th>
  </tr>

  <tr>
    <td>Ali</td>
    <td>25</td>
    <td>Turkey</td>
  </tr>

  <tr>
    <td>Maria</td>
    <td>30</td>
    <td>Spain</td>
  </tr>
</table>
```

Explanation
```
<table>```
Defines the table.

```<tr>```
Defines a table row.

```<th>```
Defines a header cell (bold text by default).

```<td>```
Defines normal table data.


Exaple Data
```
<h2>Student List</h2>

<table>
  <tr>
    <th>Name</th>
    <th>Department</th>
  </tr>

  <tr>
    <td>Zeynep</td>
    <td>Computer Engineering</td>
  </tr>

  <tr>
    <td>Ahmet</td>
    <td>Software Engineering</td>
  </tr>
</table>
```

Table Border Example

To make the visible during learing we can add s border
```
<table border="1">

    Example:

    <table border="1">
  <tr>
    <th>Language</th>
    <th>Level</th>
  </tr>

  <tr>
    <td>HTML</td>
    <td>Beginner</td>
  </tr>
</table>
```
Common Beginner Mistakes

❌ Forgetting <tr> rows.

Wrong:
```
<table>
  <td>HTML</td>
</table>
```

Correct:
```
<table>
  <tr>
    <td>HTML</td>
  </tr>
</table> ```