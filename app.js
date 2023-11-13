import express from "express"
import { connectDB } from "./database.js"
import FileUpload from "./routes/file.js"

const app=express()

connectDB()

app.use("/api/v1",FileUpload)

app.listen(4000,()=>{
    console.log("Server is COnnected")
})