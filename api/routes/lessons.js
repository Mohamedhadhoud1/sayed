import express from "express";
import {
  addlesson,
  deletelesson,
  getlesson,
  getlessons,
  updatelesson,
} from "../controllers/lessons.js";

const router = express.Router();

router.get("/", getlessons);
router.get("/:id/:grade", getlesson);
router.post("/", addlesson);
router.delete("/:id", deletelesson);
router.put("/:id", updatelesson);

export default router;