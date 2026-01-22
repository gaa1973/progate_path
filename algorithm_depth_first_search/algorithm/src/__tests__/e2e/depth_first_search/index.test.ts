import {depthFirstSearch} from "@/depth_first_search";
import {parseNode} from "@/lib/parse_node";

describe("depthFirstSearch", () => {
  test("return true when found a file", () => {
    const testDir = parseNode("src/__tests__/e2e/depth_first_search/data");
    expect(depthFirstSearch(testDir, "song.mp3")).toBeTruthy();
    expect(depthFirstSearch(testDir, "vacation.jpg")).toBeTruthy();
  });

  test("return false when found a dir", () => {
    const testDir = parseNode("src/__tests__/e2e/depth_first_search/data");
    expect(depthFirstSearch(testDir, "jazz")).toBeFalsy();
  });

  test("return false when not found a file", () => {
    const testDir = parseNode("src/__tests__/e2e/depth_first_search/data");
    expect(depthFirstSearch(testDir, "notfile.txt")).toBeFalsy();
  });

  test("return false when root dir is documents", () => {
    const testDir = parseNode(
      "src/__tests__/e2e/depth_first_search/data/documents",
    );
    expect(depthFirstSearch(testDir, "song.mp3")).toBeFalsy();
  });
});
