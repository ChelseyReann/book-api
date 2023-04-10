import { Router } from "express";
import * as controllers from "../controllers/bookss.js";

const router = Router();

router.get("/", controllers.getBooks);
router.get("/:id", controllers.getBook);
router.post("/", controllers.createBook);
router.put("/:id", controllers.updateBook);
router.delete("/:id", controllers.deleteBook);

export default router;