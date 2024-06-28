import mongoose from "mongoose";


const connectToMongoDB = async ()=>{
    try{
        await mongoose.connect(process.env.MANGODB_URL)
        console.log("db connected succesfully");
    }catch(err){
        console.error(err.message);
    }
}

export default connectToMongoDB;