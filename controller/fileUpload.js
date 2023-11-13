import getDataUri from "../getDataUri.js";
import { File } from "../model/fileupload.js";

export const fileUpload=async(req,res,next)=>{
    try {
        const file = req.file;
    
        const fileUri = getDataUri(file);

        const fileupload=await File.create({
            file:fileUri.content
        })

        res.status(200).json({
            success:true,
            fileupload
        })
        
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

export const getfile=async(req,res,next)=>{
    try {
        const file=await File.find({})
        res.status(200).json({
            success:true,
            file
        })
        
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}