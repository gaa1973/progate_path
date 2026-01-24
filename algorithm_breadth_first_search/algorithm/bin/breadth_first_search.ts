import {breadthFirstSearch} from "@/breadth_first_search";
import readline from "node:readline";

const main = (): void => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const lines: string[] = [];

  rl.on("line", line => {
    lines.push(line);
  });

  rl.on("close", () => {
    const [startUser, targetUser] = lines[0].split(" ").map(Number);
    const relationLists = lines
      .slice(1)
      .map(line => line.split(" ").map(Number));

    const relationships: number[][] = Array.from(
      {length: relationLists.length},
      () => [],
    );
    for (let i = 0; i < relationLists.length; i++) {
      const relationList = relationLists[i];
      for (const friendUser of relationList) {
        relationships[i].push(friendUser);
      }
    }
    const start = performance.now();
    const res = breadthFirstSearch(relationships, startUser, targetUser);
    const end = performance.now();
    console.log(`Benchmark took ${end - start} ms`);
    console.log(res);
    process.exit(0);
  });
};

main();
