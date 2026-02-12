export default {
  preset: "jest-puppeteer",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", {tsconfig: "tsconfig.json"}],
  },
  testTimeout: 80000,
  watchman: false,
};
