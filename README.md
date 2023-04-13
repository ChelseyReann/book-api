# NY Times Best Seller Books List API 📚
---
> All of the best books that are fit to print
---

## Introduction
I made an API using the [NY Times Developer Network](https://developer.nytimes.com/). I am constantly looking at the NY Times Best Seller List and I thought what better way to use that data than to make it in to an API that I can use for future projects.

The Best Seller List is updated every week and consists of 15 books. This list is from April 5th, 2023.

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

NOTE: This site will be easier to view if you have a JSON viewer extension installed on your browser to display/"pretty" the large datasets in your browser. I use the [JSON Viewer Extension on Google Chrome.](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?hl=en-US)

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
To create (POST) a new book: 

Use the below endpoint with an API platform, ie. Postman. Make sure to switch to the POST setting, click on Body, and select raw and JSON.

```
https://nytimes-book-api.herokuapp.com/books
```

Make sure you have the same selections as the below screenshot.

![Postman Post Screenshot](./assets/PostmanPOST.png?raw=true "Postman Post Screenshot")

---
To update (PUT) or delete (DELETE):

Use the same endpoint on an API platform, ie. Postman. Make sure to switch to the appropriate HTTP verb. Any sort of update or deletion will require the id of the book that you are updating or deleting. 

For example, if you wanted to update 'Hang The Moon' because it's moved in the ranking. You would use the below endpoint with the id that correlates to 'Hang the Moon'.

```
https://nytimes-book-api.herokuapp.com/books/6436c8e02dc8794112af741b
```

If you are updating a book make sure you have the same selections as the below screenshot.

![Postman Put Screenshot](./assets/PostmanPUT.png?raw=true "Postman Put Screenshot")

If you need to delete a book make sure you have the same selections as the below screenshot.

![Postman Delete Screenshot](./assets/PostmanDELETE.png?raw=true "Postman Delete Screenshot")

## Installation
If you would like to use this API for your own project follow the steps below:

- Install a Code Editor of your choice. I use [VS Code](https://code.visualstudio.com/)
- Fork and clone this repository
- Install the below dependencies 
```
npm i express mongoose morgan chalk cors node-fetch
```
- Run the start script to initialize
```
npm start
```
- The API will be visible in your local host 4000. You can copy the below code and paste it in your browser
```
http://localhost:4000/books
```

- And that's it!

## Resources
- [NY Times Developer Network](https://developer.nytimes.com/)
- [Postman](https://www.postman.com/)
- [Node](https://nodejs.org/en)
- [Express](https://expressjs.com/)
- [Morgan](https://github.com/expressjs/morgan)
- [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [Chalk](https://www.npmjs.com/package/chalk)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/)
- [JSON](https://www.json.org/json-en.html)
- [Node Fetch](https://www.npmjs.com/package/node-fetch)
- [JSON Viewer Google Chrome Extenstion](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?hl=en-US)
- [VS Code](https://code.visualstudio.com/)