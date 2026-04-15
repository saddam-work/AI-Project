import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import { env } from './config/env.js';
import { registerRoutes } from './core/router.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

registerRoutes(app);

app.listen(env.PORT, () => {
  console.log(`API listening on :${env.PORT}`);
});
