/* eslint-env node */
const frontPort = process.env.FRONT_PORT ?? 3001;
const apiPort = process.env.API_PORT ?? 8001;
export default {
  server: {
    command: `concurrently "API_PORT=${apiPort} npm run start:server_api" "API_PORT=${apiPort} FRONT_PORT=${frontPort} npm run start:server_front"`,
    port: apiPort,
    launchTimeout: 30000,
  },
  launch: {
    headless: "new",
  },
  browserContext: "incognito",
};
