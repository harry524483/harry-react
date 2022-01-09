const baseConfig = require('../../jest.config');

module.exports = {
  ...baseConfig,
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  modulePathIgnorePatterns: ['<rootDir>/lib'],
};
