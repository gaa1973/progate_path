import {breadthFirstSearch} from "@/breadth_first_search";
import {readFileSync} from "node:fs";
import {resolve, join} from "node:path";

describe("breadthFirstSearch", () => {
  test("return 2 when example1", () => {
    const testData = readFileSync(
      resolve(join(__dirname, "data", "test1.txt")),
      "utf8",
    );
    const lines = testData.split("\n");
    const [startUser, targetUser] = lines[0].split(" ").map(Number);
    const relationLists = lines
      .slice(1)
      .map(line => line.split(" ").map(Number));

    const relationships: number[][] = Array.from(
      {length: relationLists.length},
      () => [],
    );
    for (let i = 0; i < relationLists.length; i++) {
      const relationList = relationLists[i];
      for (const friendUser of relationList) {
        relationships[i].push(friendUser);
      }
    }
    const res = breadthFirstSearch(relationships, startUser, targetUser);
    expect(res).toBe(2);
  });
  test("return 2 when example2", () => {
    const testData = readFileSync(
      resolve(join(__dirname, "data", "test2.txt")),
      "utf8",
    );
    const lines = testData.split("\n");
    const [startUser, targetUser] = lines[0].split(" ").map(Number);
    const relationLists = lines
      .slice(1)
      .map(line => line.split(" ").map(Number));

    const relationships: number[][] = Array.from(
      {length: relationLists.length},
      () => [],
    );
    for (let i = 0; i < relationLists.length; i++) {
      const relationList = relationLists[i];
      for (const friendUser of relationList) {
        relationships[i].push(friendUser);
      }
    }
    const res = breadthFirstSearch(relationships, startUser, targetUser);
    expect(res).toBe(2);
  });
  test("return 2 when example3", () => {
    const testData = readFileSync(
      resolve(join(__dirname, "data", "test3.txt")),
      "utf8",
    );
    const lines = testData.split("\n");
    const [startUser, targetUser] = lines[0].split(" ").map(Number);
    const relationLists = lines
      .slice(1)
      .map(line => line.split(" ").map(Number));

    const relationships: number[][] = Array.from(
      {length: relationLists.length},
      () => [],
    );
    for (let i = 0; i < relationLists.length; i++) {
      const relationList = relationLists[i];
      for (const friendUser of relationList) {
        relationships[i].push(friendUser);
      }
    }
    const res = breadthFirstSearch(relationships, startUser, targetUser);
    expect(res).toBe(-1);
  });
});
