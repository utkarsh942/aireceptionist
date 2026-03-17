import express from "express"
import cors from "cors"
import userRoutes from "./routes/user.routes.js"
import interviewRoutes from "./routes/interview.routes.js"
import authRoutes from "./routes/auth.routes.js"
const app = express()
app.use(cors())

app.use(express.json())

app.use("/api/auth",authRoutes)
app.use("/api/user",userRoutes)
app.use("/api/interview",interviewRoutes)
app.get("/", (req, res) => {
    res.send("AI Receptionist Backend is running")
})
export default app;