import express from "express";
import {
  addeloquence,
  deleteeloquence,
  geteloquences,
  geteloquence,
  updateeloquence,
} from "../controllers/eloquence.js";

const router = express.Router();

router.get("/", geteloquences);
router.get("/:id/:grade", geteloquence);
router.post("/", addeloquence);
router.delete("/:id", deleteeloquence);
router.put("/:id", updateeloquence);

export default router;