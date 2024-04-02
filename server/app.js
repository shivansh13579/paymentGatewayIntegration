import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import paymentRoute from './routes/paymentRoute.js';

// config({ path: "./config/config.env"});
config();

export const app = express();

app.use(cors());

app.use('/api',paymentRoute);

