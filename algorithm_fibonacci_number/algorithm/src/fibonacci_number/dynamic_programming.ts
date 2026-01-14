export const fibonacciDp = (n: number): number => {
  // 基底ケース: F(0)=0, F(1)=1
  if (n < 2) return n;

  // dp は値を保持する配列
  const dp: number[] = new Array(n + 1);
  dp[0] = 0; // F(0)
  dp[1] = 1; // F(1)
  // i=2 から n まで進め、各反復で dp[i] を F(i) に保つ
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]; // dp[i] <- F(i-1) + F(i-2)
  }

  return dp[n]; // dp[n] が F(n)
};
