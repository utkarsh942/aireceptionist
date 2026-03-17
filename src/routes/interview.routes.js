import express from "express"

import authMiddleware from "../middlewares/auth.middlewares.js"

import { startInterview ,getQuestion , SubmitAnswer } from "../controllers/interview.controller.js"

const router = express.Router()

router.post("/start" , authMiddleware , startInterview) 
router.get("/question/:interviewId" , authMiddleware , getQuestion)
router.post("/answer" , authMiddleware , SubmitAnswer)

export default router


