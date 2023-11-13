import mongoose from "mongoose";

export const connectDB=async()=>{
    try {
        const {connection}=await mongoose.connect("mongodb://127.0.0.1:27017/fileupload")
        console.log(connection.host)
    } catch (error) {
        console.log(error)
    }
}