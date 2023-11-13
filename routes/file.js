import express from "express"
import { fileUpload, getfile } from "../controller/fileUpload.js"
import singleUpload from "../singleUpload.js"


const router=express.Router()

router.post("/upload/file",singleUpload,fileUpload)
router.get("/get/file",getfile)


export default router