export default {
  preset: "jest-puppeteer",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", {tsconfig: "tsconfig.test.json"}],
  },
  testTimeout: 80000,
  globalSetup: "./jest-global-setup.js",
  globalTeardown: "./jest-global-teardown.js",
  globals: {
    TARGET_PORT: process.env.PORT ?? 4445,
    TARGET_PAGE_URL: `http://localhost:${process.env.PORT ?? 4445}`,
  },
  watchman: false,
};
