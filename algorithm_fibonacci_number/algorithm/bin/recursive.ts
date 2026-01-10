import {stdin} from "node:process";
import {fibonacciRecursive} from "@/fibonacci_number/recursive";

const main = (): void => {
  stdin.resume();
  stdin.on("data", data => {
    const input = data.toString("utf-8").trim();
    const start = performance.now();
    const res = fibonacciRecursive(Number(input));
    const end = performance.now();
    console.log(`Benchmark took ${end - start} ms`);
    console.log(res);
    process.exit(0);
  });
};

main();
