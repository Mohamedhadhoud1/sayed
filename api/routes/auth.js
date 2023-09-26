import express from "express";
import { login, logout, register, fakeRegister } from "../controllers/auth.js";

const router = express.Router()

router.post("/register",register)
router.post("/fakeRegister",fakeRegister)
router.post("/login",login)
router.post("/logout",logout)


export default router