import express from "express";
import {
  addPost,
  deletePost,
  getPost,
  getlessons,
  updatePost,
} from "../controllers/lessons.js";

const router = express.Router();

router.get("/", getlessons);
router.get("/:id", getPost);
router.post("/", addPost);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);

export default router;