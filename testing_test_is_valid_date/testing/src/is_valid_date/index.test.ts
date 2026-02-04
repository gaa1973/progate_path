import {describe, it, expect} from "@jest/globals"; // Jest のテストAPIをインポート
import {isValidDate} from "@/is_valid_date"; // テスト対象の関数をインポート

describe("isValidDate", () => {
  // isValidDate のテストスイートを定義
  it("returns true for valid dates", () => {
    // 正常な日付が true を返すことを確認するテストケース
    expect(isValidDate(2023, 1, 1)).toBe(true); // 2023年1月1日は有効
    expect(isValidDate(2020, 2, 29)).toBe(true); // 2020年2月29日（うるう年）は有効
    expect(isValidDate(1999, 12, 31)).toBe(true); // 1999年12月31日は有効
    expect(isValidDate(2000, 2, 29)).toBe(true); // 2000年2月29日（うるう年）は有効
    expect(isValidDate(2023, 4, 30)).toBe(true); // 2023年4月30日は有効
  });

  it("returns false for invalid dates", () => {
    // 不正な日付が false を返すことを確認するテストケース
    expect(isValidDate(2023, 2, 30)).toBe(false); // 2023年2月30日は無効
    expect(isValidDate(2023, 13, 1)).toBe(false); // 2023年13月1日は無効
    expect(isValidDate(2023, 0, 1)).toBe(false); // 2023年0月1日は無効
    expect(isValidDate(2023, 4, 31)).toBe(false); // 2023年4月31日は無効
    expect(isValidDate(2019, 2, 29)).toBe(false); // 2019年2月29日（うるう年ではない）は無効
  });

  it("handles year boundary cases", () => {
    // 年の境界値を確認するテストケース
    expect(isValidDate(1, 1, 1)).toBe(false); // 年1月1日は無効（仕様に基づく）
    expect(isValidDate(9999, 12, 31)).toBe(true); // 年9999年12月31日は有効
  });
});
