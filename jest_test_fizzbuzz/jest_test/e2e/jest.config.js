export default {
  preset: "ts-jest",
  testEnvironment: "node",
  rootDir: "../",
  reporters: ["default", "<rootDir>/.progate/jest-reporter.js"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  watchman: false,
};
