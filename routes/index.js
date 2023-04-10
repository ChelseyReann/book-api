import { Router } from "express";
import booksRoutes from "./books";

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/books", booksRoutes);

export default router;