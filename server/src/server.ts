import app from './app';

const port = 5000;

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Backend API running on port ${port}`);
  });
}
