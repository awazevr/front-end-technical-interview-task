import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest', // Use ts-jest preset
  testEnvironment: 'node', // Use Node.js test environment
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json']
};

export default config;



