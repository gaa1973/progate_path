const frontPort = process.env.FRONT_PORT ?? 3001;

module.exports = async function globalSetup() {
  global.TARGET_PAGE_URL = `http://localhost:${frontPort}`;
};
