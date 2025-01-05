import { Router } from 'express';
import { getSearchResults } from '../controllers/searchResultsController';

export const searchResultsRouter = Router();

searchResultsRouter.get('/', getSearchResults);
