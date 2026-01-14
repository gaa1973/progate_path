export const fibonacciMemo = (n: number): number => {
  // 基底ケース: F(0)=0, F(1)=1
  if (n < 2) return n;

  // a は値を保持する配列、型を明示
  const a: number[] = [];
  a[0] = 0;
  a[1] = 1;

  // i=2 から n まで進め、各反復で a[i] を F(i) に保つ
  for (let i = 2; i <= n; i++) {
    const next: number = a[i - 2] + a[i - 1]; // 次の項 F(i) を計算
    a[i] = next; // a[i] <- 次の項 (F(i))
  }

  return a[n]; // a[n] が F(n)
};
