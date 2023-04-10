import Book from "../models/Book.js";

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
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