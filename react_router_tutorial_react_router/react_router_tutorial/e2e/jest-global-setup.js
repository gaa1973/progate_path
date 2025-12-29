import {default as setupPuppeteer} from "jest-environment-puppeteer/setup";
import {setup as setupDevServer} from "jest-dev-server";

export default async function globalSetup(globalConfig, projectConfig) {
  await setupPuppeteer(globalConfig);

  globalThis.servers = await setupDevServer([
    {
      command: `FRONT_PORT=${projectConfig.globals.FRONT_PORT} npm run start:test -w front`,
      port: projectConfig.globals.FRONT_PORT,
      launchTimeout: 30000,
    },
  ]);
}
