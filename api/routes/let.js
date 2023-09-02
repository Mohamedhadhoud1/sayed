import express from "express";
import {
  addPost,
  deletePost,
  getlets,
  getlet,
  updatePost,
} from "../controllers/let.js";

const router = express.Router();

router.get("/", getlets);
router.get("/:id/:grade", getlet);
router.post("/", addPost);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);

export default router;