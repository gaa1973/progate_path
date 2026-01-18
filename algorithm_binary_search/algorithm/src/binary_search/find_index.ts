export const findIndex = (array: number[], target: number): number => {
  // 線形探索（indexOf）での実装。二分探索との性能比較用。
  return array.indexOf(target);
};
