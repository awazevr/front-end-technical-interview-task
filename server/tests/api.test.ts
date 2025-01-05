import request from 'supertest';
import app from '../src/app';
import * as randomErrorMiddleware from '../src/middlewares/randomlyThrowAnError';

describe('GET /api/locations', () => {
  beforeEach(() => {
    jest
      .spyOn(randomErrorMiddleware, 'randomlyThrowAnError')
      .mockImplementation(() => {
        return 1;
      });
  });

  describe('Success Cases', () => {
    it('should return filtered locations based on the "term" query parameter', async () => {
      const response = await request(app).get('/api/locations?term=man');
      expect(response.status).toBe(200);
      expect(response.body.length).toBeGreaterThan(0);
      expect(response.body[0].name.toLowerCase()).toContain('man');
    });

    it('should return an empty array if no locations match the query term', async () => {
      const response = await request(app).get('/api/locations?term=xyz');
      expect(response.status).toBe(200);
      expect(response.body).toEqual([]);
    });
  });

  describe('Error Handling', () => {
    it('should return a 400 error if no "term" query parameter is provided', async () => {
      const response = await request(app).get('/api/locations');
      expect(response.status).toBe(400);
      expect(response.body.error).toBe('Query parameter "term" is required.');
    });
  });
});
