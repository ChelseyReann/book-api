# NY Times Best Seller Books List API 📚
---
> All the books that are fit to print
---

## Introduction
I made an API using the [NY Times Developer Network](https://developer.nytimes.com/). I am constantly looking at the NY Times Best Seller List and I thought what better way to use that data than to make it in to an API that I can use for future projects.

This API lists the following information:
- Title of the book,
- Author of the book,
- A brief description of the book synopsis,
- The book's ranking on the Best Seller List,
- An image of the book

See below for a snippet of the JSON format:

![JSON Format Screenshot](./assets/jsonformat.png?raw=true "JSON Format Screenshot")

## How to Use
The below link will take you to the full array of all the books on the Best Seller List.

```
https://nytimes-book-api.herokuapp.com/books
```
---
**Looking up a book by title**

To search for a book by title, use the below endpoint followed by the book title.

```
https://nytimes-book-api.herokuapp.com/books/title
```

For example, if you wanted to look up the book titled 'Tomorrow, and Tomorrow, and Tomorrow' you would use the link below.

```
https://nytimes-book-api.herokuapp.com/books/title/Tomorrow, and Tomorrow, and Tomorrow
```

Which should display the below:

![Tomorrow, and Tomorrow, and Tomorrow](./assets/Tomorrow.png?raw=true "Tomorrow, and Tomorrow, and Tomorrow JSON")

---
**Looking up a book by author**

To search for a book by author, use the below endpoint followed by the book author.

```
https://nytimes-book-api.herokuapp.com/books/author
```
For example, if you wanted to look up the book written by Harlan Coben you would use the link below.

```
https://nytimes-book-api.herokuapp.com/books/author/harlan coben
```

Which should display the below:

![Harlan Coben](./assets/Harlan.png?raw=true "Harlan Coben JSON")

- Please note searching by title or author is NOT case-sensitive so you can write the title or author in all caps, lowercase, or any other variation and it will still find the title or author!

---
**Looking up a book by its rank**

To search for a book by its ranking in the Best Seller List, use the below endpoint followed by the book's rank.

```
https://nytimes-book-api.herokuapp.com/books/rank
```
For example, if you wanted to look up the 3rd book in the ranking you would use the link below.

```
https://nytimes-book-api.herokuapp.com/books/rank/3
```

Which should display the below:

![3rd book in rank](./assets/3.png?raw=true "3rd book in rank JSON")

## CRUD Functionality

## Resources


#### Heading 4

##### Heading 5

###### Heading 6

<!-- Italics -->

_This text_ is italic

_This text_ is italic

<!-- Strong -->

**This text** is italic

**This text** is italic

<!-- Strikethrough -->

~~This text~~ is strikethrough

<!-- Horizontal Rule -->

---

---


<!-- UL -->

- Item 1
- Item 2
- Item 3
  - Nested Item 1
  - Nested Item 2

<!-- OL -->

1. Item 1
1. Item 2
1. Item 3

<!-- Inline Code Block -->

`<p>This is a paragraph</p>`

<!-- Images -->

![Markdown Logo](https://markdown-here.com/img/icon256.png)

<!-- Github Markdown -->

<!-- Code Blocks -->

```bash
  npm install
  npm start
```

```javascript
function add(num1, num2) {
  return num1 + num2;
}
```

```python
  def add(num1, num2):
    return num1 + num2
```

<!-- Tables -->

| Day    | Deliverable                                      | Status                |
| ------ | ------------------------------------------------ | --------------------- |
| Dec 17 | Prompt/Wireframe/Priority Matrix/Timeframes      | xxx                   |
| Dec 21 | Project Approval                                 | xxx                   |
| Dec 22 | Core Application Structure (HTML, CSS, JS, etc.) | xxx                   |
| Dec 23 | Pseudocode/Actual                                | xxx                   |
| Dec 23 | 3 hrs                                            | MVP                   |
| Jan 05 | 3 hrs                                            | Project Presentatiion |

<!-- Task List -->

- [x] Task 1
- [x] Task 2
- [] Task 3