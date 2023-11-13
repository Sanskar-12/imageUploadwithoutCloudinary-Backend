import mongoose from "mongoose";

const schema=new mongoose.Schema({
    file:{
        type:String
    }
})

export const File=mongoose.model("File",schema)