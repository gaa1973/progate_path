import {stdin} from "node:process";
import {binarySearch} from "@/binary_search/binary_search";

const main = (): void => {
  stdin.resume();
  stdin.on("data", data => {
    const input = data.toString("utf-8").trim();
    const [target, ...array] = input.split(" ").map(Number);
    const start = performance.now();
    const res = binarySearch(array, target);
    const end = performance.now();
    console.log(`Benchmark took ${end - start} ms`);
    console.log(res);
    process.exit(0);
  });
};

main();
