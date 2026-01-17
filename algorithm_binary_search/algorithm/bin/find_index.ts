import {stdin} from "node:process";
import {findIndex} from "@/binary_search/find_index";

const main = (): void => {
  stdin.resume();
  stdin.on("data", data => {
    const input = data.toString("utf-8").trim();
    const [target, ...array] = input.split(" ").map(Number);
    const start = performance.now();
    const res = findIndex(array, target);
    const end = performance.now();
    console.log(`Benchmark took ${end - start} ms`);
    console.log(res);
    process.exit(0);
  });
};

main();
