import express from "express";
import {
  addmeeting,
  deletemeeting,
  getmeetings,
  getmeeting,
  updatemeeting,
} from "../controllers/meetings.js";

const router = express.Router();

router.get("/", getmeetings);
router.get("/:id/:grade", getmeeting);
router.post("/", addmeeting);
router.delete("/:id", deletemeeting);
router.put("/:id", updatemeeting);

export default router;