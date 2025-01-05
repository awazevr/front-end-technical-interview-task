// src/middlewares/simulateRandomDelay.ts
import { Request, Response, NextFunction } from 'express';

export function simulateRandomDelay(req: Request, res: Response, next: NextFunction) {

  if (process.env.NODE_ENV === 'test') {
    return next();
  }
  
  const randomMs = Math.floor(Math.random() * 5) * 1000;
  setTimeout(() => {
    next();
  }, randomMs);
}