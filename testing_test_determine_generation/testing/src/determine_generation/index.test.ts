import {determineGeneration} from "@/determine_generation";

describe("determineGeneration", () => {
  describe("equivalence class test", () => {
    test("Invalid age: age = -5", () => {
      expect(determineGeneration(-5)).toBe("Invalid age");
    });
    test("Child: age = 10", () => {
      expect(determineGeneration(10)).toBe("Child");
    });
    test("Adult: age = 30", () => {
      expect(determineGeneration(30)).toBe("Adult");
    });
  });

  describe("boundary value test", () => {
    test("Child and Young boundary: age = 12, age = 13", () => {
      expect(determineGeneration(12)).toBe("Child");
      expect(determineGeneration(13)).toBe("Young");
    });
  });
});
