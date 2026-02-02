import {countWord} from "@/count_word";
describe("countWord", () => {
  it("should return -1 for an empty string", () => {
    expect(countWord("", "hello")).toBe(-1);
  });

  it("should return -1 when targetWord is empty", () => {
    expect(countWord("hello", "")).toBe(-1);
  });

  it("should count single word correctly", () => {
    expect(countWord("hello", "hello")).toBe(1);
    expect(countWord("world", "world")).toBe(1);
  });

  it("should count target word in multiple words", () => {
    expect(countWord("hello world", "hello")).toBe(1);
    expect(countWord("hello world hello", "hello")).toBe(2);
  });

  it("should handle multiple spaces between words", () => {
    expect(countWord("hello   world   hello", "hello")).toBe(2);
    expect(countWord("this    is   a   test", "is")).toBe(1);
  });

  it("should handle leading and trailing spaces", () => {
    expect(countWord("   hello world   ", "hello")).toBe(1);
    expect(countWord("   this is a test   ", "this")).toBe(1);
  });

  it("should be case insensitive", () => {
    expect(countWord("Hello WORLD hello", "hello")).toBe(2);
    expect(countWord("THIS IS A TEST", "this")).toBe(1);
  });

  it("should handle newlines and tabs", () => {
    expect(countWord("hello\nworld\nhello", "hello")).toBe(2);
    expect(countWord("this\tis\ta\ttest", "is")).toBe(1);
  });
});
