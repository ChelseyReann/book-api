import { Router } from "express";
import * as controllers from "../controllers/books.js";

const router = Router();

router.get("/", controllers.getBooks);
router.get("/:id", controllers.getBook);
router.get("/title/:title", controllers.getBookTitle);
router.get("/author/:author", controllers.getBookAuthor);
router.get("/rank/:rank", controllers.getBookRank);
router.post("/", controllers.createBook);
router.put("/:id", controllers.updateBook);
router.delete("/:id", controllers.deleteBook);

export default router;