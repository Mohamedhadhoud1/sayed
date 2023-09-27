import express from "express";
import {
  getFakeStudents,
  deleteStudent,
  getStudent,
  getStudents,
  deleteFakeStudent
} from "../controllers/students.js";

const router = express.Router();

router.get("/", getStudents);
router.get("/fake", getFakeStudents);
router.get("/:id", getStudent);
router.delete("/fakeStudent/:id", deleteFakeStudent);
router.delete("/:id", deleteStudent);


export default router;