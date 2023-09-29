import express from "express";
import {
  addlet,
  deletelet,
  getlets,
  getlet,
  updatelet,
} from "../controllers/let.js";

const router = express.Router();

router.get("/", getlets);
router.get("/:id/:grade", getlet);
router.post("/", addlet);
router.delete("/:id", deletelet);
router.put("/:id", updatelet);

export default router;