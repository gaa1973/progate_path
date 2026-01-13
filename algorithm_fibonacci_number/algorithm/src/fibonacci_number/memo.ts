export const fibonacciMemo = (n: number): number => {
  // 基底ケース: F(0)=0, F(1)=1
  if (n < 2) return n;

  // a は直前の項 F(i-1)、b は現在の項 F(i) を表す
  // 初期状態: a = F(0), b = F(1)
  let a = [];
  a[0] = 0;
  a[1] = 1;

  // i=2 から n まで進め、各反復で (a,b) を (F(i-1), F(i)) に保つ
  for (let i = 2; i <= n; i++) {
    const next = a[i - 2] + a[i - 1]; // 次の項 F(i) を計算
    a[i] = next; // a[i] <- 次の項 (F(i))
  }

  return a[n]; // a[n] が F(n)
};
