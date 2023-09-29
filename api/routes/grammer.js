import express from "express";
import {
  addgrammer,
  deletegrammer,
  getgrammers,
  getgrammer,
  updategrammer,
} from "../controllers/grammer.js";

const router = express.Router();

router.get("/", getgrammers);
router.get("/:id/:grade", getgrammer);
router.post("/", addgrammer);
router.delete("/:id", deletegrammer);
router.put("/:id", updategrammer);

export default router;