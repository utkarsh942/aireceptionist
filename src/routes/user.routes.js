import express from "express"

import authMiddleware from "../middlewares/auth.middlewares.js"

const router = express.Router()

router.get("/Profile", authMiddleware , (req,res) => {

    res.json({
        message: "Protected route accessed",
    userId: req.userId

    })
})

export default router
