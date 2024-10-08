import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.routes.js';

const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());

app.use('/api/auth',authRoutes);

const connectDb = async() => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("database connected successfully");
    } catch (error) {
        console.error("Error: ",error);
    }
}
connectDb();


const PORT = 5000 || process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

