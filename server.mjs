import express, { json } from "express"

import postRouter from "./routes/post.mjs"

const app = express()

app.use(json())

app.use("/api/v1", postRouter)

const PORT = process.env.PORT || 5002

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))