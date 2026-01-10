import {fibonacciMemo} from "@/fibonacci_number/memo";

describe("fibonacciMemo", () => {
  test("n = 1", () => {
    expect(fibonacciMemo(1)).toBe(1);
  });

  test("n = 2", () => {
    expect(fibonacciMemo(2)).toBe(1);
  });

  test("n = 3", () => {
    expect(fibonacciMemo(3)).toBe(2);
  });

  test("n = 5", () => {
    expect(fibonacciMemo(5)).toBe(5);
  });

  test("n = 8", () => {
    expect(fibonacciMemo(8)).toBe(21);
  });

  test("n = 50", () => {
    expect(fibonacciMemo(50)).toBe(12586269025);
  });
});
