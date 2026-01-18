import {stdin} from "node:process";
import {findIndex} from "@/binary_search/find_index";

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
    const N = Number(
      (1000n * 1000n * 1000n) /
        BigInt(array.length > 2 ? array.length : array.length + 2),
    );
    const start = performance.now();
    for (let i = 0; i < N; ++i) {
      const randomNum = Math.floor(Math.random() * size);
      findIndex(array, randomNum);
    }
    const end = performance.now();
    const averageMs = (end - start) / N;
    console.log("Benchmark took: ", averageMs, "ms on average");
    process.exit(0);
  });
};

main();
