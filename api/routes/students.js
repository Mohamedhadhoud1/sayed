import express from "express";
import {
  
  deleteStudent,
  getStudent,
  getStudents,

} from "../controllers/students.js";

const router = express.Router();

router.get("/", getStudents);
router.get("/:id", getStudent);

router.delete("/:id", deleteStudent);


export default router;