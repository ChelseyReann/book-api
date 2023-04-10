import db from "../db/connection.js";
import Book from "../models/Book";
import books from "./books.json" assert { type: "json" };

const insertData = async () => {
  // Reset Database
  await db.dropDatabase();
  // Insert Books into the Database
  await Book.insertMany(books);
  // Close DB connection
  db.close();
};

insertData();