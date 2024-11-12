import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.routes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

const mongoURI = 'mongodb+srv://sagarnegi926:0qfEJ8Y25IBzGGLO@cluster0.8f2mc.mongodb.net/'

mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB successfully!');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Simple route to check server status
app.get('/', (req, res) => {
  res.send('Server is up and running');
});

// Start the server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
