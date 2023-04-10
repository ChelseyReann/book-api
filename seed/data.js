import mongoose from '../db/connection.js'
import connection from '../db/connection.js'
import data from './books.json' assert { type: 'json' }
import Book from '../models/Book.js'

let bookData = data.map(item => {
    const book = {}
    book.name = item.title
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
    .then(() => mongoose.disconnect())
    .catch(error => console.log("Error", error))

console.log(bookData)