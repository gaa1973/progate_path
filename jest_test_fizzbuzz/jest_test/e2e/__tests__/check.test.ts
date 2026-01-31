import {exec as nonPromiseExec} from "child_process";
import {promisify} from "util";
import fs from "node:fs/promises";
import path from "node:path";
const exec = promisify(nonPromiseExec);

test("check diff between output and answer.txt [CFOENpgLZA8aBfrL2-GLd]", async () => {
  const {stdout, stderr} = await exec(`tsx ${process.env.PWD}/src/main.ts`);
  expect(stderr).toEqual("");
  const answer = await fs.readFile(
    path.join(process.env.PWD ?? "", "e2e/__tests__/answer.txt"),
    "utf-8",
  );
  expect(stdout).toEqual(answer);
});
