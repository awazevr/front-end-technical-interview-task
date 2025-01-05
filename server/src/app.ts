import express from 'express';

import cors from 'cors';
import { simulateRandomDelay } from './middlewares/simulateRandomDelay';
import { locationRouter } from './routes/locationRouter';
import { searchResultsRouter } from './routes/searchResultsRouter';

const app = express();

app.use(cors());
app.use(simulateRandomDelay);

app.use('/api', locationRouter);
app.use('/api/search', searchResultsRouter);

export default app;
