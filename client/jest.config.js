/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  preset: 'ts-jest',
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  testEnvironment: 'jsdom',
};