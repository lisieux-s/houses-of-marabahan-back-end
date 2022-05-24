import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import 'express-async-errors';

import router from './routers/index.js';
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware.js';

import { prisma } from './database.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(json());
app.use(router);
app.use(errorHandlerMiddleware);

export default app;
