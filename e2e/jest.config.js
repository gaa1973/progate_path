export default {
  preset: "jest-puppeteer",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", {tsconfig: `./tsconfig.json`}],
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/../src/$1",
  },
  testTimeout: 80000,
  globalSetup: "./jest-global-setup.js",
  globalTeardown: "./jest-global-teardown.js",
  globals: {
    TARGET_PORT: process.env.PORT ?? 3001,
    TARGET_PAGE_URL: `http://localhost:${process.env.PORT ?? 3001}`,
  },
  watchman: false,
};

process.env.JEST_PUPPETEER_CONFIG = "./jest-puppeteer.config.js";
