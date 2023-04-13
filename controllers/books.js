import Book from "../models/Book.js";

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    books.sort((a,b) => a.rank - b.rank)
    res.json(books);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getBook = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findById(id);
    res.json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getBookTitle = async (req, res) => {
  try {
    let { title } = req.params;

    // Convert the title to lowercase for case-insensitive search
    const regexTitle = new RegExp(`^${title}$`, 'i');

    // Use regex for case-insensitive search
    const book = await Book.findOne({ title: regexTitle });
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getBookAuthor = async (req, res) => {
  try {
    let { author } = req.params;
  
    // Convert the author to lowercase for case-insensitive search
    const regexTitle = new RegExp(`^${author}$`, 'i')

    const book = await Book.findOne({ author: regexTitle }); // Use findOne() to find a book by author
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getBookRank = async (req, res) => {
  try {
    const { rank } = req.params;

    const book = await Book.findOne({ rank }); // Use findOne() to find a book by rank
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const createBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const updateBook = async (req, res) => {
  const { id } = req.params;
  const book = await Book.findByIdAndUpdate(id, req.body);
  res.status(200).json(book);
};

export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Book.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Book Deleted!");
    }

    throw new Error("Book not found");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};