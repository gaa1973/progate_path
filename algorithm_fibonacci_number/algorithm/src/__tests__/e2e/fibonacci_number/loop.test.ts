import {fibonacciLoop} from "@/fibonacci_number/loop";

describe("fibonacciLoop", () => {
  test("n = 1", () => {
    expect(fibonacciLoop(1)).toBe(1);
  });

  test("n = 2", () => {
    expect(fibonacciLoop(2)).toBe(1);
  });

  test("n = 3", () => {
    expect(fibonacciLoop(3)).toBe(2);
  });

  test("n = 5", () => {
    expect(fibonacciLoop(5)).toBe(5);
  });

  test("n = 8", () => {
    expect(fibonacciLoop(8)).toBe(21);
  });

  test("n = 50", () => {
    expect(fibonacciLoop(50)).toBe(12586269025);
  });
});
