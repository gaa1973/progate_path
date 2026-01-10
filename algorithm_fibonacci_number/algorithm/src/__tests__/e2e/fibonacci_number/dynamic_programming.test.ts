import {fibonacciDp} from "@/fibonacci_number/dynamic_programming";

describe("fibonacciDp", () => {
  test("n = 1", () => {
    expect(fibonacciDp(1)).toBe(1);
  });

  test("n = 2", () => {
    expect(fibonacciDp(2)).toBe(1);
  });

  test("n = 3", () => {
    expect(fibonacciDp(3)).toBe(2);
  });

  test("n = 5", () => {
    expect(fibonacciDp(5)).toBe(5);
  });

  test("n = 8", () => {
    expect(fibonacciDp(8)).toBe(21);
  });

  test("n = 50", () => {
    expect(fibonacciDp(50)).toBe(12586269025);
  });
});
