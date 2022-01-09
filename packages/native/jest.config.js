const baseConfig = require('../../jest.config');

module.exports = {
  ...baseConfig,
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  modulePathIgnorePatterns: ['<rootDir>/lib'],
};
