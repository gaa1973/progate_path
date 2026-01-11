export const fibonacciLoop = (n: number): number => {
  for (let a = 0, b = 1, i = 0; i < n; i++) {
    a = 0;
    b = a + b;
  }
  console.log(b);
};
