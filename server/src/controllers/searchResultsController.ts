import { Request, Response } from 'express';
import { properties } from '../data/properties';
import { randomlyThrowAnError } from '../middlewares/randomlyThrowAnError';

export function getSearchResults(req: Request, res: Response) {
  try {
    randomlyThrowAnError();

    const query = (req.query.location as string)?.toLowerCase() || '';

    if (!query) {
      return res
        .status(400)
        .json({ error: 'Query parameter "location" is required.' });
    }

    return res.json(properties);
  } catch (error) {
    console.error('Error in getSearchResults:', error);
    return res.status(500).json({ error: 'An unexpected error occurred.' });
  }
}
