export default {
  moduleFileExtensions: ['js'],
  globals: {
    ROOT_URL: 'http://localhost:3000',
  },
  modulePaths: ['<rootDir>'],
  preset: 'jest-puppeteer',
  testMatch: ['<rootDir>/tests/**/*.test.js'],
};
