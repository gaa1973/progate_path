export default {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  coverageThreshold: {
    "./src/api/get_user_name.ts": {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  watchman: false,
};
