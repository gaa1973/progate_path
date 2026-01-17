/**
 * 二分探索（Binary Search）を行い、昇順にソート済みの配列から特定の値のインデックスを返します。
 *
 * 前提条件:
 * - `array` は昇順にソートされている必要があります。
 * - 要素は数値で比較します。
 *
 * 仕様:
 * - 該当要素が存在する場合は、そのインデックスを返します（重複がある場合、どのインデックスになるかは保証しません）。
 * - 存在しない場合は `-1` を返します。
 *
 * 計算量:
 * - 時間計算量: O(log n)
 * - 空間計算量: O(1)
 *
 * @param array 探索対象の数値配列（昇順にソート済み）
 * @param target 探索する数値
 * @returns 見つかった要素のインデックス、見つからなければ `-1`
 *
 * @example
 * binarySearch([1, 3, 5, 7, 9], 7) // => 3
 * binarySearch([1, 3, 5, 7, 9], 6) // => -1
 */
export const binarySearch = (array: number[], target: number): number => {
  // 左端（探索範囲の開始）と右端（探索範囲の終了）を初期化
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    // 中央位置を算出（整数に切り捨て）
    const mid = Math.floor((left + right) / 2);
    // 中央の要素が目的の値なら、そのインデックスを返す
    if (array[mid] === target) {
      return mid;
      // 中央の値が目的の値より小さい場合、探索範囲を右側に絞る
    } else if (array[mid] < target) {
      left = mid + 1;
      // 中央の値が目的の値より大きい場合、探索範囲を左側に絞る
    } else {
      right = mid - 1;
    }
  }
  // 最後まで見つからなかった場合は -1 を返す
  return -1;
};
