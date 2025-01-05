// src/routes/locationRoutes.ts

import { Router } from 'express';
import { getLocations } from '../controllers/locationController';

export const locationRouter = Router();

locationRouter.get('/locations', getLocations);
