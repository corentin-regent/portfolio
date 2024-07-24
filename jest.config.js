export default {
  moduleFileExtensions: ['js'],
  globals: {
    ROOT_URL: 'http://localhost:8080',
  },
  modulePaths: ['<rootDir>'],
  preset: 'jest-puppeteer',
  testMatch: ['<rootDir>/tests/**/*.test.js'],
};
