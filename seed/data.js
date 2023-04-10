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

const insertData = async () => {
    await Book.deleteMany({});
    await Book.create(bookData);
    console.log("Done!");
    process.exit();
}

insertData()