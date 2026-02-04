export const isValidDate = (
  year: number, // 年を表す数値
  month: number, // 月を表す数値（1〜12）
  day: number, // 日を表す数値
): boolean => {
  // JavaScriptのDateオブジェクトを使用して日付を生成
  const date = new Date(year, month - 1, day); // month - 1 をするのは、Dateオブジェクトが0始まりの月を使用するため

  // 生成された日付が入力値と一致するかを確認
  return (
    date.getFullYear() === year && // 年が一致するか
    date.getMonth() === month - 1 && // 月が一致するか（0始まりの月に注意）
    date.getDate() === day // 日が一致するか
  );
};
