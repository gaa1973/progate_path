import {stdin} from "node:process";
import {binarySearch} from "@/binary_search/binary_search";

const main = (): void => {
  stdin.resume();
  stdin.on("data", data => {
    const exponent = Number(data.toString("utf-8").trim());
    const MAX_EXPONENT = 27; // 2^27 = 134,217,728 elements; above this risks allocation failures
    if (!Number.isFinite(exponent) || exponent < 0 || exponent > MAX_EXPONENT) {
      console.error(`Please input an integer between 0 and ${MAX_EXPONENT}.`);
      process.exit(1);
    }
    const size = 2 ** exponent;
    const array = Array(size)
      .fill(0)
      .map((_, i) => i + 1);
    const N = Math.floor(1e8 / Math.log(array.length));
    const start = performance.now();
    for (let i = 0; i < N; ++i) {
      const randomNum = Math.floor(Math.random() * size);
      binarySearch(array, randomNum);
    }
    const end = performance.now();
    const averageMs = (end - start) / N;
    console.log("Benchmark took: ", averageMs, "ms on average");
    process.exit(0);
  });
};

main();
