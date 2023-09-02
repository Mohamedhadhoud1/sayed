import express from "express";
import {
  addPost,
  deletePost,
  getletratures,
  getletrature,
  updatePost,
} from "../controllers/letrature.js";

const router = express.Router();

router.get("/", getletratures);
router.get("/:id/:grade", getletrature);
router.post("/", addPost);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);

export default router;