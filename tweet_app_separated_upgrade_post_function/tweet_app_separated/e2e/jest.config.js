export default {
  preset: "jest-puppeteer",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", {tsconfig: `./tsconfig.json`}],
  },
  testTimeout: 80000,
  setupFiles: ["<rootDir>/jest-global-setup.js"],
  watchman: false,
};

process.env.JEST_PUPPETEER_CONFIG = "./jest-puppeteer.config.js";
