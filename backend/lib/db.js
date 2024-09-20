import mongoose from "mongoose";

export const connectDB = async () => {
    try {
       const conn = await mongoose.connect(process.env.MONGO_URI)
       console.log(`MongoDb connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error connecting to MongoDb: ${error.message}`);
        process.exit(1);
    }
} 