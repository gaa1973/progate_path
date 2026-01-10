import {fibonacciRecursive} from "@/fibonacci_number/recursive";

describe("fibonacciRecursive", () => {
  test("n = 1", () => {
    expect(fibonacciRecursive(1)).toBe(1);
  });

  test("n = 2", () => {
    expect(fibonacciRecursive(2)).toBe(1);
  });

  test("n = 3", () => {
    expect(fibonacciRecursive(3)).toBe(2);
  });

  test("n = 5", () => {
    expect(fibonacciRecursive(5)).toBe(5);
  });

  test("n = 8", () => {
    expect(fibonacciRecursive(8)).toBe(21);
  });

  test("n = 30", () => {
    expect(fibonacciRecursive(30)).toBe(832040);
  });
});
