import {stdin} from "node:process";
import {binarySearch} from "@/binary_search/binary_search";

const main = (): void => {
  stdin.resume();
  stdin.on("data", data => {
    const size = 2 ** Number(data.toString("utf-8").trim());
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
