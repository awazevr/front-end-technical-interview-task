import { Request, Response } from 'express';
import { locations } from '../data/locations';
import { randomlyThrowAnError } from '../middlewares/randomlyThrowAnError';

export function getLocations(req: Request, res: Response) {
  try {
    randomlyThrowAnError();

    const query = (req.query.term as string)?.toLowerCase() || '';

    if (!query) {
      return res
        .status(400)
        .json({ error: 'Query parameter "term" is required.' });
    }

    const filteredLocations = locations.filter(
      (loc) =>
        typeof loc.name === 'string' && loc.name.toLowerCase().includes(query)
    );

    return res.json(filteredLocations);
  } catch (error) {
    console.error('Error in getLocations:', error);
    return res.status(500).json({ error: 'An unexpected error occurred.' });
  }
}
