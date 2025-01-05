// src/middlewares/randomlyThrowAnError.ts
export function randomlyThrowAnError() {
  if (Math.random() < 0.4) {
    throw new Error('Random 500 error');
  }
}
