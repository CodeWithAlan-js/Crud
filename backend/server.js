import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/routes.js';
import mongoose from 'mongoose';
import cors from 'cors';

dotenv.config();


const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URL);

app.use(routes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});


