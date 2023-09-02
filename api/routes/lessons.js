import express from "express";
import {
  addPost,
  deletePost,
  getlesson,
  getlessons,
  updatePost,
} from "../controllers/lessons.js";

const router = express.Router();

router.get("/", getlessons);
router.get("/:id/:grade", getlesson);
router.post("/", addPost);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);

export default router;