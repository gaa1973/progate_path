import {stdin} from "node:process";
import {fibonacciDp} from "@/fibonacci_number/dynamic_programming";

export const main = (): number => {
  stdin.resume();
  let res = 0;
  stdin.on("data", data => {
    const input = data.toString("utf-8").trim();
    const start = performance.now();
    res = fibonacciDp(Number(input));
    const end = performance.now();
    console.log(`Benchmark took ${end - start} ms`);
    console.log(res);
    process.exit(0);
  });
  return res;
};

main();
