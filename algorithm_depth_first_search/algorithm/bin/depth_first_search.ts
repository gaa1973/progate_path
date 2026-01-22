import {stdin} from "node:process";
import {depthFirstSearch} from "@/depth_first_search";
import {parseNode} from "@/lib/parse_node";

const main = (): void => {
  stdin.resume();
  stdin.on("data", data => {
    const input = data.toString("utf-8").trim();
    const [rootPath, targetFileName] = input.split(" ");
    const rootNode = parseNode(rootPath);
    const start = performance.now();
    const res = depthFirstSearch(rootNode, targetFileName);
    const end = performance.now();
    console.log(`Benchmark took ${end - start} ms`);
    console.log(res);
    process.exit(0);
  });
};

main();
