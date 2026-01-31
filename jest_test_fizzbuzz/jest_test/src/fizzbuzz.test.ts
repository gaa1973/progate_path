import {fizzbuzz} from "./fizzbuzz";
describe("fizzbuzz関数のテスト", () => {
  test("3の倍数のとき、'Fizz'を返す", () => {
    expect(fizzbuzz(3)).toBe("Fizz");
    expect(fizzbuzz(6)).toBe("Fizz");
  });

  test("5の倍数のとき、'Buzz'を返す", () => {
    expect(fizzbuzz(5)).toBe("Buzz");
    expect(fizzbuzz(10)).toBe("Buzz");
  });

  test("3と5の公倍数のとき、'FizzBuzz'を返す", () => {
    expect(fizzbuzz(15)).toBe("FizzBuzz");
    expect(fizzbuzz(30)).toBe("FizzBuzz");
  });

  test("3の倍数でも5の倍数でもないとき、数字を文字列で返す", () => {
    expect(fizzbuzz(1)).toBe("1");
    expect(fizzbuzz(2)).toBe("2");
  });
});
