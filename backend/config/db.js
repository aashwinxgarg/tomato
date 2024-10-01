import mongoose from "mongoose";
export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://aashwinxgarg:aashwinxgarg@cluster0.myod5.mongodb.net/tomato').then(()=>console.log("DB Connected"));
}