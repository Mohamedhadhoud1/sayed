import express from "express";
import {
  addstory,
  deletestory,
  getstories,
  getstory,
  updatestory,
} from "../controllers/story.js";

const router = express.Router();

router.get("/", getstories);
router.get("/:id/:grade", getstory);
router.post("/", addstory);
router.delete("/:id", deletestory);
router.put("/:id", updatestory);

export default router;