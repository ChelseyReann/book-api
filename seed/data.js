import connection from '../db/connection.js'
import data from './books.json' assert { type: 'json' }
import Book from '../models/Book.js'

let bookData = data.results.books.map(item => {
    const book = {}
    book.title = item.title
    book.author = item.author
    book.description = item.description
    book.rank = item.rank
    book.book_image = item.book_image
    return book
})

Book
    .deleteMany({})
    .then(() => Book.create(bookData))
    .then(() => console.log("Done!"))
    .then(() => process.exit())
    .catch(error => console.log("Error", error))

console.log(bookData)