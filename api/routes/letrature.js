import express from "express";
import {
  addletrature,
  deleteletrature,
  getletratures,
  getletrature,
  updateletrature,
} from "../controllers/letrature.js";

const router = express.Router();

router.get("/", getletratures);
router.get("/:id/:grade", getletrature);
router.post("/", addletrature);
router.delete("/:id", deleteletrature);
router.put("/:id", updateletrature);

export default router;